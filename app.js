// ============================================================================
// EGM 5444 / EML 4930: Advanced Dynamics — Exam 2 Interactive Study Controller
// ============================================================================

const STORAGE_KEY = "ady_exam2_studio_state_v2";
const THEME_KEY = "ady_exam2_studio_theme";

window.STUDIO = {
  activeTab: "tab-welcome",
  studyMode: false, // false = Interactive Guided Mode, true = Full Read-Through Study Mode
  selfCheckMode: false, // true = Self-Check Only Mode (broken-down steps with ONLY self-checks, no hints/intuition/links)
  stepFocusMode: false, // true = collapse non-active steps into compact headers, false = show all steps expanded
  explorerOpen: false, // Slide-over Problem Bank Drawer state
  mobilePeekOpen: false, // Sticky Quick-Peek Problem Drawer state for mobile/tablet-portrait
  problemFilter: "all", // 'all' | 'hw2' | 'new' | 'example'
  problemSearchQuery: "",
  currentProblemId: "hw2-p1-min",
  activeStepIndex: 0,
  collapsedSteps: {}, // { [probId_stepIdx]: boolean }
  expandedConcepts: {}, // { [conceptId]: boolean }
  conceptSearchQuery: "",
  conceptCategoryFilter: "all",
  progress: {}, // { [probId]: { steps: { [stepIdx]: { hint1, hint2, selected, wrongs: [], solved, revealed } }, finalOpen: false } }

  init() {
    this.loadState();
    this.initTheme();
    this.bindGlobalEvents();
    this.renderAll();
    this.initScratchpad();
  },

  loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          this.studyMode = Boolean(parsed.studyMode);
          this.selfCheckMode = Boolean(parsed.selfCheckMode) && !this.studyMode;
          this.stepFocusMode = Boolean(parsed.stepFocusMode);
          if (typeof parsed.explorerOpen === "boolean") {
            this.explorerOpen = parsed.explorerOpen;
          }
          this.currentProblemId = parsed.currentProblemId || "hw2-p1-min";
          this.activeStepIndex = Number.isInteger(parsed.activeStepIndex) ? parsed.activeStepIndex : 0;
          this.progress = parsed.progress || {};
        }
      }
    } catch (e) {
      console.warn("Could not read saved progress:", e);
    }
  },

  saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          studyMode: this.studyMode,
          selfCheckMode: this.selfCheckMode,
          stepFocusMode: this.stepFocusMode,
          explorerOpen: this.explorerOpen,
          currentProblemId: this.currentProblemId,
          activeStepIndex: this.activeStepIndex,
          progress: this.progress
        })
      );
    } catch (e) {
      // Ignore storage errors in restricted environments
    }
  },

  initTheme() {
    let saved = "light";
    try {
      saved = localStorage.getItem(THEME_KEY) || "light";
    } catch (e) {}
    document.documentElement.setAttribute("data-theme", saved);
    this.updateThemeButton(saved);
  },

  toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {}
    this.updateThemeButton(next);
  },

  updateThemeButton(theme) {
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) {
      btn.innerHTML = theme === "dark" ? "☀️ Light" : "🌙 Dark";
    }
  },

  bindGlobalEvents() {
    window.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        this.closeConceptModal();
        this.toggleProblemExplorer(false);
      }
    });
  },

  getProblem(probId = this.currentProblemId) {
    const list = window.EXAM2_DATA?.problems || [];
    return list.find(p => p.id === probId) || list[0];
  },

  getProblemProgress(probId) {
    if (!this.progress[probId]) {
      this.progress[probId] = { steps: {}, finalOpen: false };
    }
    return this.progress[probId];
  },

  getStepState(probId, stepIdx) {
    const pProg = this.getProblemProgress(probId);
    if (!pProg.steps[stepIdx]) {
      pProg.steps[stepIdx] = {
        hint1: false,
        hint2: false,
        selected: null,
        wrongs: [],
        solved: false,
        revealed: false
      };
    }
    return pProg.steps[stepIdx];
  },

  isProblemCompleted(prob) {
    if (!prob) return false;
    return prob.steps.every((_, idx) => {
      const st = this.getStepState(prob.id, idx);
      return st.solved || st.revealed;
    });
  },

  getOverallStats() {
    const problems = window.EXAM2_DATA?.problems || [];
    let totalSteps = 0;
    let completedSteps = 0;
    let completedProbs = 0;

    problems.forEach(p => {
      totalSteps += p.steps.length;
      let allDone = true;
      p.steps.forEach((_, idx) => {
        const st = this.getStepState(p.id, idx);
        if (st.solved || st.revealed) {
          completedSteps++;
        } else {
          allDone = false;
        }
      });
      if (allDone && p.steps.length > 0) completedProbs++;
    });

    const pct = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;
    return { totalSteps, completedSteps, completedProbs, totalProbs: problems.length, pct };
  },

  // ==========================================================================
  // NAVIGATION, PROBLEM EXPLORER & FOCUS MODE CONTROLS
  // ==========================================================================
  switchTab(tabId) {
    this.activeTab = tabId;
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });
    document.querySelectorAll(".tab-panel").forEach(panel => {
      panel.classList.toggle("active", panel.id === tabId);
    });
    this.typesetMath();
  },

  setStudyMode(isStudyMode) {
    this.studyMode = Boolean(isStudyMode);
    this.selfCheckMode = false;
    if (this.studyMode) {
      this.stepFocusMode = false;
      this.collapsedSteps = {};
    }
    this.saveState();
    this.updateModeButtons();
    this.renderTutorWorkspace();
  },

  setSelfCheckMode(enable = true) {
    this.selfCheckMode = Boolean(enable);
    if (this.selfCheckMode) {
      this.studyMode = false;
    }
    this.saveState();
    this.updateModeButtons();
    this.renderTutorWorkspace();
  },

  toggleStepFocusMode() {
    this.stepFocusMode = !this.stepFocusMode;
    this.collapsedSteps = {};
    this.saveState();
    this.updateModeButtons();
    this.renderTutorWorkspace();
  },

  toggleProblemExplorer(forceState) {
    this.explorerOpen = typeof forceState === "boolean" ? forceState : !this.explorerOpen;
    this.saveState();
    this.updateExplorerLayout();
  },

  updateExplorerLayout() {
    const ws = document.getElementById("studio-workspace");
    const aside = document.getElementById("problem-explorer-aside");
    const backdrop = document.getElementById("explorer-backdrop");
    const btn = document.getElementById("toggle-explorer-btn");
    const totalCount = (window.EXAM2_DATA?.problems || []).length;
    if (ws) {
      ws.classList.toggle("explorer-closed", !this.explorerOpen);
    }
    if (aside) {
      aside.classList.toggle("open", this.explorerOpen);
    }
    if (backdrop) {
      backdrop.classList.toggle("open", this.explorerOpen);
    }
    if (btn) {
      btn.innerHTML = this.explorerOpen
        ? `📂 Close Problem Bank (${totalCount})`
        : `📂 Problem Bank (${totalCount})`;
    }
  },

  toggleMobileProblemPeek(forceState) {
    this.mobilePeekOpen = typeof forceState === "boolean" ? forceState : !this.mobilePeekOpen;
    const drawer = document.getElementById("mobile-problem-peek-drawer");
    const btn = document.getElementById("mobile-peek-btn");
    if (drawer) {
      drawer.classList.toggle("open", this.mobilePeekOpen);
    }
    if (btn) {
      btn.innerHTML = this.mobilePeekOpen ? "📌 Hide Problem" : "📌 Peek Problem";
      btn.classList.toggle("btn-primary", this.mobilePeekOpen);
    }
  },

  updateModeButtons() {
    const btnGuided = document.getElementById("mode-btn-guided");
    const btnSelfCheck = document.getElementById("mode-btn-selfcheck");
    const btnStudy = document.getElementById("mode-btn-study");
    const btnFocus = document.getElementById("focus-mode-btn");
    if (btnGuided) btnGuided.classList.toggle("active", !this.studyMode && !this.selfCheckMode);
    if (btnSelfCheck) btnSelfCheck.classList.toggle("active", Boolean(this.selfCheckMode) && !this.studyMode);
    if (btnStudy) btnStudy.classList.toggle("active", Boolean(this.studyMode));
    if (btnFocus) {
      btnFocus.innerHTML = this.stepFocusMode ? "📋 Expand All Steps" : "🎯 Focus Active Step";
      btnFocus.classList.toggle("btn-primary", this.stepFocusMode);
    }
  },

  setProblemFilter(filterKey) {
    this.problemFilter = filterKey;
    document.querySelectorAll(".filter-pill").forEach(btn => {
      if (btn.hasAttribute("data-filter")) {
        btn.classList.toggle("active", btn.getAttribute("data-filter") === filterKey);
      }
    });
    this.renderProblemSelector();
  },

  onProblemSearchInput(val) {
    this.problemSearchQuery = (val || "").toLowerCase().trim();
    this.renderProblemSelector();
  },

  selectProblem(probId) {
    this.currentProblemId = probId;
    this.activeStepIndex = 0;
    this.collapsedSteps = {};
    this.explorerOpen = false;
    this.updateExplorerLayout();
    this.saveState();
    this.renderProblemSelector();
    this.renderTutorWorkspace();
    const contextCol = document.getElementById("tutor-context-column");
    if (contextCol) {
      contextCol.scrollTop = 0;
    }
  },

  stepAdjacentProblem(delta) {
    const list = window.EXAM2_DATA?.problems || [];
    if (!list.length) return;
    const curIdx = list.findIndex(p => p.id === this.currentProblemId);
    const nextIdx = (curIdx + delta + list.length) % list.length;
    this.selectProblem(list[nextIdx].id);
  },

  jumpToStep(stepIdx) {
    this.activeStepIndex = stepIdx;
    const key = `${this.currentProblemId}_${stepIdx}`;
    delete this.collapsedSteps[key];
    this.saveState();
    this.renderTutorWorkspace();
    const cardEl = document.getElementById(`step-card-${stepIdx}`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  },

  toggleStepCollapse(stepIdx) {
    const key = `${this.currentProblemId}_${stepIdx}`;
    const isCurrentlyCollapsed = this.isStepCollapsed(this.currentProblemId, stepIdx);
    if (isCurrentlyCollapsed) {
      this.collapsedSteps[key] = false;
      this.activeStepIndex = stepIdx;
    } else {
      this.collapsedSteps[key] = true;
    }
    this.renderTutorWorkspace();
  },

  isStepCollapsed(probId, stepIdx) {
    if (this.studyMode) return false;
    const key = `${probId}_${stepIdx}`;
    if (key in this.collapsedSteps) {
      return Boolean(this.collapsedSteps[key]);
    }
    if (this.stepFocusMode) {
      return stepIdx !== this.activeStepIndex;
    }
    return false;
  },

  resetCurrentProblem() {
    const prob = this.getProblem();
    if (!prob) return;
    delete this.progress[prob.id];
    this.activeStepIndex = 0;
    this.collapsedSteps = {};
    this.saveState();
    this.renderAll();
  },

  // ==========================================================================
  // RENDERING: HEADER, WELCOME PAGE, SCALABLE PROBLEM EXPLORER & WORKSPACE
  // ==========================================================================
  renderAll() {
    this.updateExplorerLayout();
    this.updateModeButtons();
    this.renderHeaderStats();
    this.renderWelcomePage();
    this.renderProblemSelector();
    this.renderTutorWorkspace();
    this.renderConceptAndLectureHub();
    this.renderFormulaSheet();
  },

  launchProblemFromWelcome(probId) {
    this.selectProblem(probId);
    this.switchTab("tab-tutor");
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  renderWelcomePage() {
    const welcomePanel = document.getElementById("tab-welcome");
    const grid = document.getElementById("welcome-modules-grid");
    if (grid) {
      const allProblems = window.EXAM2_DATA?.problems || [];
      const modules = [
        {
          category: "Lagrangian Mechanics",
          badge: "Lectures 10–12",
          color: "var(--primary)",
          conceptId: "manipulator-equation",
          title: "1. Minimal-Coordinate Lagrangian Mechanics",
          desc: "Derive inertial position & velocity vectors, kinetic energy $T$, potential energy $V$, generalized non-conservative forces $\\mathbf{Q}$, and manipulator equations $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}}=\\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$."
        },
        {
          category: "Constrained Systems",
          badge: "Lectures 13, 17, 22",
          color: "var(--purple)",
          conceptId: "lagrange-multipliers",
          title: "2. Holonomic Constraints, Jacobians & Multipliers",
          desc: "Formulate bilateral/unilateral constraints $g(\\mathbf{q})=0$, compute the Constraint Jacobian $\\mathbf{J}=\\partial g/\\partial\\mathbf{q}$ and convective acceleration $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$, and solve the saddle-point DAE for $\\lambda$."
        },
        {
          category: "Contact & Impacts",
          badge: "Lectures 14, 20, 21",
          color: "var(--teal)",
          conceptId: "impact-maps",
          title: "3. Impulsive Contact & Restitution Impact Maps",
          desc: "Integrate the equations of motion across an instantaneous collision $[t^-,t^+]$ to solve the impulse-momentum system for post-impact velocities $\\dot{\\mathbf{q}}^+$, impulse $\\Lambda$, and energy loss $\\Delta E$."
        }
      ];

      grid.innerHTML = modules
        .map(m => {
          const probs = allProblems.filter(p => p.category === m.category);
          const concept = window.EXAM2_DATA?.concepts?.[m.conceptId];
          const svgHtml = concept?.svgIllustration
            ? `<div class="concept-svg-box">${concept.svgIllustration}</div>`
            : "";
          const probButtonsHtml = probs
            .map(p => {
              const isDone = this.isProblemCompleted(p);
              return `
                <button type="button"
                        class="problem-select-card ${isDone ? "completed" : ""}"
                        onclick="window.STUDIO.launchProblemFromWelcome('${p.id}')">
                  <div class="prob-card-top">
                    <span>${p.code}</span>
                    <span>${isDone ? "✅ Completed" : `${p.steps.length} Guided Steps →`}</span>
                  </div>
                  <div class="prob-card-title">${p.title}</div>
                </button>
              `;
            })
            .join("");

          return `
            <article class="surface-card" style="border-top:5px solid ${m.color}; display:flex; flex-direction:column; justify-content:space-between; gap:0.75rem;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; gap:0.4rem; margin-bottom:0.4rem;">
                  <span class="badge badge-indigo">${m.category}</span>
                  <span class="badge badge-slate">${m.badge}</span>
                </div>
                <h4 style="font-size:1.05rem; font-weight:800; margin-bottom:0.35rem;">${m.title}</h4>
                ${svgHtml}
                <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.55;">
                  ${m.desc}
                </p>
              </div>
              <div style="border-top:1px solid var(--border-subtle); padding-top:0.65rem;">
                <div style="font-size:0.74rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.4rem;">
                  🎯 Click a Problem to Start Solving:
                </div>
                <div style="display:flex; flex-direction:column; gap:0.4rem;">
                  ${probButtonsHtml}
                </div>
              </div>
            </article>
          `;
        })
        .join("");
      this.typesetMath(grid);
    }
    if (welcomePanel) {
      this.typesetMath(welcomePanel);
    }
  },

  renderHeaderStats() {
    const stats = this.getOverallStats();
    const txtEl = document.getElementById("header-progress-text");
    const barEl = document.getElementById("header-progress-fill");
    if (txtEl) {
      txtEl.textContent = `${stats.completedSteps}/${stats.totalSteps} Steps (${stats.pct}%)`;
    }
    if (barEl) {
      barEl.style.width = `${stats.pct}%`;
    }
  },

  renderProblemSelector() {
    const strip = document.getElementById("problem-pills-strip");
    if (!strip) return;
    const allProblems = window.EXAM2_DATA?.problems || [];
    const filtered = allProblems.filter(p => {
      if (this.problemFilter === "practice-e" && !p.id.startsWith("practice-e-")) return false;
      if (this.problemFilter === "hw2" && !p.id.startsWith("hw2-")) return false;
      if (this.problemFilter === "new" && !p.id.startsWith("exam2-")) return false;
      if (this.problemFilter === "example" && !p.id.startsWith("example-")) return false;
      if (this.problemSearchQuery) {
        const hay = `${p.code} ${p.title} ${p.subtitle} ${p.category}`.toLowerCase();
        if (!hay.includes(this.problemSearchQuery)) return false;
      }
      return true;
    });

    // Group problems by Category so even 50+ future problems stay organized!
    const categories = ["Lagrangian Mechanics", "Constrained Systems", "Contact & Impacts"];
    const groupsHtml = categories
      .map(cat => {
        const probsInCat = filtered.filter(p => p.category === cat);
        if (probsInCat.length === 0) return "";
        const cardsHtml = probsInCat
          .map(p => {
            const isCurrent = p.id === this.currentProblemId;
            const isDone = this.isProblemCompleted(p);
            const solvedCount = p.steps.filter((_, i) => {
              const st = this.getStepState(p.id, i);
              return st.solved || st.revealed;
            }).length;

            return `
              <button type="button"
                      class="problem-select-card ${isCurrent ? "active" : ""} ${isDone ? "completed" : ""}"
                      id="prob-btn-${p.id}"
                      onclick="window.STUDIO.selectProblem('${p.id}')">
                <div class="prob-card-top">
                  <span>${p.code}</span>
                  <span>${isDone ? "✅ Done" : `${solvedCount}/${p.steps.length} Steps`}</span>
                </div>
                <div class="prob-card-title">${p.title}</div>
              </button>
            `;
          })
          .join("");

        return `
          <div class="problem-group-block">
            <div class="problem-group-header">
              <span>📁 ${cat}</span>
              <span>${probsInCat.length}</span>
            </div>
            ${cardsHtml}
          </div>
        `;
      })
      .join("");

    strip.innerHTML =
      groupsHtml ||
      `<div style="padding:1rem; font-size:0.82rem; color:var(--text-muted); text-align:center;">No matching problems found.</div>`;
    this.typesetMath(strip);
  },

  renderTutorWorkspace() {
    const prob = this.getProblem();
    if (!prob) return;

    const allProblems = window.EXAM2_DATA?.problems || [];
    const probIndex = allProblems.findIndex(p => p.id === prob.id) + 1;

    // Update Compact Top Problem Switcher Banner
    const bannerInfo = document.getElementById("active-problem-banner-info");
    if (bannerInfo) {
      bannerInfo.innerHTML = `
        <span class="badge badge-indigo">Problem ${probIndex} of ${allProblems.length}</span>
        <span class="badge badge-purple">${prob.code}</span>
        <span class="switcher-prob-title" title="${prob.title}">${prob.title}</span>
      `;
      this.typesetMath(bannerInfo);
    }

    const contextCol = document.getElementById("tutor-context-column");
    const stepsCol = document.getElementById("tutor-steps-column");
    if (!contextCol || !stepsCol) return;

    // 1. Render Unclipped Left Context Column (Diagram, Prompt, Parameters, Stepper Roadmap)
    const lectureBadges = (prob.lectureRefs || [])
      .map(num => {
        const lec = (window.EXAM2_DATA.lectures || []).find(l => l.number === num);
        if (!lec) return "";
        return `<a href="${lec.videoUrl}" target="_blank" rel="noopener noreferrer" class="external-reading-link" title="Watch ${lec.title}">🎥 Lec ${lec.number}</a>`;
      })
      .join("");

    const stepperItemsHtml = prob.steps
      .map((step, idx) => {
        const st = this.getStepState(prob.id, idx);
        const isDone = st.solved || st.revealed;
        const isCurrent = idx === this.activeStepIndex;
        return `
          <button type="button"
                  class="stepper-item ${isCurrent ? "active" : ""} ${isDone ? "done" : ""}"
                  id="stepper-btn-${idx}"
                  onclick="window.STUDIO.jumpToStep(${idx})">
            <span class="step-circle">${isDone ? "✓" : idx + 1}</span>
            <span style="flex:1; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
              Step ${idx + 1}: ${step.title}
            </span>
          </button>
        `;
      })
      .join("");

    const allStepsDone = this.isProblemCompleted(prob);
    const pProg = this.getProblemProgress(prob.id);
    const finalOpen = this.studyMode || allStepsDone || pProg.finalOpen;

    contextCol.innerHTML = `
      <div class="surface-card problem-prompt-card">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem;">
          <div style="display:flex; gap:0.4rem; flex-wrap:wrap; align-items:center;">
            <span class="badge badge-indigo">${prob.code}</span>
            <span class="badge badge-purple">${prob.category}</span>
            <span class="badge badge-amber">⏱️ ~${prob.estimatedMinutes}m</span>
          </div>
          <button type="button" class="btn" style="padding:0.25rem 0.6rem; font-size:0.75rem;" onclick="window.STUDIO.resetCurrentProblem()" title="Reset your progress on this problem">
            🔄 Reset Problem
          </button>
        </div>

        <h2 class="problem-title">${prob.title}</h2>
        <div class="problem-subtitle">${prob.subtitle}</div>

        <div class="svg-diagram-box">
          ${prob.svgDiagram}
        </div>

        <div class="prompt-body">
          ${prob.prompt}
        </div>

        <div class="params-list">
          ${prob.parameters
            .map(
              param => `
            <div class="param-item">
              <strong>${param.symbol}</strong>
              <span class="param-desc">${param.desc}</span>
            </div>
          `
            )
            .join("")}
        </div>

        <div style="margin-top:0.8rem; display:flex; align-items:center; gap:0.4rem; flex-wrap:wrap;">
          <span style="font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Matched Lectures:</span>
          ${lectureBadges}
        </div>
      </div>

      <div class="surface-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.65rem;">
          <strong style="font-size:0.82rem; text-transform:uppercase; letter-spacing:0.04em; color:var(--text-muted);">
            🧭 Step Roadmap (${prob.steps.length} Steps)
          </strong>
          <button type="button" class="btn" style="padding:0.24rem 0.6rem; font-size:0.74rem;" onclick="window.STUDIO.unlockAllStepsForCurrent()">
            🔓 Unlock All Steps
          </button>
        </div>
        <div class="stepper-rail">
          ${stepperItemsHtml}
          <button type="button"
                  class="stepper-item ${finalOpen ? "done" : ""}"
                  id="stepper-btn-final"
                  onclick="window.STUDIO.toggleFinalAnswerCard(true)">
            <span class="step-circle">★</span>
            <span>Final Boxed Answer Summary</span>
          </button>
        </div>
      </div>
    `;

    // 1b. Populate Mobile/Tablet-Portrait Problem Peek Drawer so smaller viewports can keep the problem pinned at top
    const peekDrawer = document.getElementById("mobile-problem-peek-drawer");
    if (peekDrawer) {
      peekDrawer.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-bottom:0.55rem; flex-wrap:wrap;">
          <strong style="font-size:0.86rem; color:var(--text-main);">📌 ${prob.code}: ${prob.title}</strong>
          <button type="button" class="btn" style="padding:0.2rem 0.55rem; font-size:0.74rem;" onclick="window.STUDIO.toggleMobileProblemPeek(false)">
            ✕ Hide Peek
          </button>
        </div>
        <div class="svg-diagram-box" style="margin-bottom:0.65rem; padding:0.4rem;">
          ${prob.svgDiagram}
        </div>
        <div class="prompt-body" style="font-size:0.86rem;">
          ${prob.prompt}
        </div>
        <div class="params-list" style="margin-top:0.65rem;">
          ${prob.parameters
            .map(
              param => `
            <div class="param-item">
              <strong>${param.symbol}</strong>
              <span class="param-desc">${param.desc}</span>
            </div>
          `
            )
            .join("")}
        </div>
      `;
      this.typesetMath(peekDrawer);
    }

    // 2. Render Right Column: Connected Numbered Timeline + Color-Coded Step Cards + Final Answer Card
    const stepsHtml = prob.steps
      .map((step, idx) => this.renderStepCardHtml(prob, step, idx))
      .join("");

    const finalCardHtml = this.renderFinalAnswerCardHtml(prob, finalOpen);

    stepsCol.innerHTML = `
      ${stepsHtml}
      ${finalCardHtml}
    `;

    this.renderHeaderStats();
    this.typesetMath(contextCol);
    this.typesetMath(stepsCol);
  },

  renderStepCardHtml(prob, step, idx) {
    const st = this.getStepState(prob.id, idx);
    const isDone = st.solved || st.revealed || this.studyMode;
    const isActive = idx === this.activeStepIndex;
    const isCollapsed = this.isStepCollapsed(prob.id, idx);
    const phaseNum = (idx % 6) + 1;

    // Build Concept Chips & External Further Reading Links for this step
    const conceptObjects = (step.conceptLinks || [])
      .map(cid => window.EXAM2_DATA.concepts[cid])
      .filter(Boolean);

    const conceptChipsHtml = conceptObjects
      .map(
        c => `
        <button type="button"
                class="concept-chip"
                onclick="window.STUDIO.openConceptModal('${c.id}')"
                title="Open Concept Summary & Further Reading for ${c.name}">
          💡 Concept: ${c.name}
        </button>
      `
      )
      .join("");

    // Collect external further-reading links so they are also directly clickable inline
    const inlineExternalLinks = [];
    conceptObjects.forEach(c => {
      (c.furtherReading || []).forEach(link => {
        if (!inlineExternalLinks.some(l => l.url === link.url)) {
          inlineExternalLinks.push(link);
        }
      });
    });

    const inlineLinksHtml = inlineExternalLinks
      .map(
        l => `
        <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="external-reading-link">
          🔗 Further Reading: ${l.label} ↗
        </a>
      `
      )
      .join("");

    // Hints HTML (suppressed while unsolved in Self-Check Only mode)
    const hideScaffolding = Boolean(this.selfCheckMode) && !this.studyMode && !isDone;
    const hint1Open = !hideScaffolding && (st.hint1 || this.studyMode);
    const hint2Open = !hideScaffolding && (st.hint2 || this.studyMode);

    // Checkpoint Options HTML (2x2 Grid)
    const cp = step.checkpoint;
    const optionsHtml = cp.options
      .map((opt, optIdx) => {
        const isCorrect = optIdx === cp.correctIndex;
        const wasWrong = st.wrongs.includes(optIdx);
        let stateCls = "";
        if ((st.solved || this.studyMode) && isCorrect) stateCls = "correct";
        else if (wasWrong) stateCls = "wrong";

        return `
          <button type="button"
                  class="cp-option-btn ${stateCls}"
                  id="cp-opt-${prob.id}-${idx}-${optIdx}"
                  onclick="window.STUDIO.handleCheckpointChoice('${prob.id}', ${idx}, ${optIdx})">
            <span class="cp-letter">${String.fromCharCode(65 + optIdx)}</span>
            <div style="flex:1; min-width:0; overflow-x:auto;">${opt}</div>
          </button>
        `;
      })
      .join("");

    // Diagnostic Banner HTML
    let diagnosticHtml = "";
    if (st.selected !== null) {
      const isSelCorrect = st.selected === cp.correctIndex;
      if (!isSelCorrect && this.selfCheckMode && !this.studyMode) {
        diagnosticHtml = `
          <div class="diagnostic-banner trap">
            <strong>❌ Incorrect Choice (Option ${String.fromCharCode(65 + st.selected)}) — Self-Check Only Mode:</strong>
            <div style="margin-top:0.25rem;">Hints and trap explanations are hidden in Self-Check Only mode. Re-check your hand derivation or try another option!</div>
          </div>
        `;
      } else {
        const msg = cp.trapFeedback[st.selected] || "";
        diagnosticHtml = `
          <div class="diagnostic-banner ${isSelCorrect ? "ok" : "trap"}">
            <strong>${isSelCorrect ? "✅ Step Checkpoint Verified!" : `⚠️ Diagnostic Hint (Option ${String.fromCharCode(65 + st.selected)}):`}</strong>
            <div style="margin-top:0.25rem;">${msg}</div>
          </div>
        `;
      }
    }

    // Full Step Derivation HTML
    const showDerivation = isDone;
    const nextStepBtnHtml =
      idx + 1 < prob.steps.length
        ? `<button type="button" class="btn btn-primary" onclick="window.STUDIO.jumpToStep(${idx + 1})">Continue to Step ${idx + 2} →</button>`
        : `<button type="button" class="btn btn-emerald" onclick="window.STUDIO.toggleFinalAnswerCard(true)">🎉 View Complete Final Answer Card →</button>`;

    const cardBodyHtml = isCollapsed
      ? `
        <div class="step-collapsed-preview">
          <span>🎯 <strong>Goal:</strong> ${step.goal}</span>
          <button type="button" class="btn btn-primary" style="padding:0.28rem 0.65rem; font-size:0.75rem; flex-shrink:0;" onclick="window.STUDIO.jumpToStep(${idx})">
            Open Step ${idx + 1} ▾
          </button>
        </div>
      `
      : `
        <div class="step-card-body">
          ${
            hideScaffolding
              ? `
            <!-- Self-Check Only Mode: Goal Banner Only (No Intuition, Concept Chips, or Hints) -->
            <div class="step-goal-banner" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
              <div>🎯 <strong>Step Goal:</strong> ${step.goal}</div>
              <span class="badge badge-amber" title="Switch to Guided Tutor in the top bar anytime if you want hints">⚡ Self-Check Only (No Hints)</span>
            </div>
          `
              : `
            <!-- Side-by-Side Goal & Physical Intuition Callouts -->
            <div class="step-guidance-grid">
              <div class="step-goal-banner">
                🎯 <strong>Step Goal:</strong> ${step.goal}
              </div>
              <div class="step-intuition-box">
                🧠 <strong>How to Think About This Step:</strong> ${step.intuition}
              </div>
            </div>

            <!-- Concept Guide Chips & Verified External Reading Links -->
            <div class="concept-chip-row">
              ${conceptChipsHtml}
              ${inlineLinksHtml}
            </div>

            <!-- Progressive Hints Toolbar -->
            <div class="hint-actions-row">
              <button type="button"
                      class="btn btn-amber ${hint1Open ? "active" : ""}"
                      id="hint1-btn-${idx}"
                      onclick="window.STUDIO.toggleHint('${prob.id}', ${idx}, 1)">
                💡 ${hint1Open ? "Hide" : "Show"} Hint 1: Setup & Strategy
              </button>
              <button type="button"
                      class="btn btn-amber ${hint2Open ? "active" : ""}"
                      id="hint2-btn-${idx}"
                      onclick="window.STUDIO.toggleHint('${prob.id}', ${idx}, 2)">
                🧮 ${hint2Open ? "Hide" : "Show"} Hint 2: Key Math & Identities
              </button>
              <button type="button"
                      class="btn ${st.revealed ? "btn-emerald" : ""}"
                      style="margin-left:auto;"
                      id="reveal-step-btn-${idx}"
                      onclick="window.STUDIO.toggleRevealStep('${prob.id}', ${idx})">
                ${showDerivation ? "📘 Derivation Shown" : "👁️ Reveal Step Derivation"}
              </button>
            </div>
          `
          }

          ${
            hint1Open
              ? `
            <div class="hint-drawer" id="hint1-box-${idx}">
              <div class="hint-drawer-title">💡 Hint 1 — Setup & Strategy</div>
              <div>${step.hint1}</div>
            </div>
          `
              : ""
          }

          ${
            hint2Open
              ? `
            <div class="hint-drawer" id="hint2-box-${idx}">
              <div class="hint-drawer-title">🧮 Hint 2 — Intermediate Math & Chain-Rule Check</div>
              <div>${step.hint2}</div>
            </div>
          `
              : ""
          }

          <!-- Distinct Dark-Header Checkpoint Challenge Zone (2x2 Grid) -->
          <div class="checkpoint-section">
            <div class="checkpoint-header-bar">
              <span>✍️ STEP ${idx + 1} SELF-CHECK: ${cp.question}</span>
              <span class="badge" style="background:rgba(255,255,255,0.16); color:#fff;">Select A, B, C, or D</span>
            </div>
            <div class="checkpoint-body">
              <div class="checkpoint-options-grid">
                ${optionsHtml}
              </div>
              ${diagnosticHtml}
            </div>
          </div>

          <!-- Step Derivation Reveal -->
          ${
            showDerivation
              ? `
            <div class="derivation-box" id="derivation-box-${idx}">
              <div class="derivation-header">
                <span>📘 Step ${idx + 1} Verified Hand Derivation</span>
                <span>${prob.code}</span>
              </div>
              <div class="derivation-body">
                ${step.derivation}
              </div>
              <div style="margin-top:0.85rem; display:flex; justify-content:flex-end;">
                ${nextStepBtnHtml}
              </div>
            </div>
          `
              : ""
          }
        </div>
      `;

    return `
      <div class="timeline-step-wrapper phase-${phaseNum} ${isDone ? "step-done" : ""} ${isActive ? "step-active" : ""}" id="step-card-${idx}">
        <!-- Left Connected Timeline Spine & Step Medallion -->
        <div class="timeline-rail-col">
          <button type="button"
                  class="timeline-node"
                  onclick="window.STUDIO.jumpToStep(${idx})"
                  title="Step ${idx + 1}: ${step.title}">
            ${isDone ? "✓" : idx + 1}
          </button>
          <div class="timeline-connector-line"></div>
        </div>

        <!-- Right Color-Coded Step Card -->
        <article class="step-card">
          <div class="step-header-ribbon" onclick="window.STUDIO.toggleStepCollapse(${idx})">
            <div style="display:flex; align-items:center; gap:0.55rem; flex-wrap:wrap;">
              <span class="step-phase-pill">
                ${isDone ? `✓ STEP ${idx + 1} COMPLETE` : `STEP ${idx + 1} OF ${prob.steps.length} • ${step.badge.split("•")[1] || step.badge}`}
              </span>
              ${isActive && !isDone ? `<span class="current-focus-badge">🎯 CURRENT STEP</span>` : ""}
              <h3 class="step-heading">Step ${idx + 1}: ${step.title}</h3>
            </div>
            <div style="display:flex; align-items:center; gap:0.4rem;">
              <span style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">
                ${isCollapsed ? "Expand ▾" : "Collapse ▴"}
              </span>
            </div>
          </div>
          ${cardBodyHtml}
        </article>
      </div>
    `;
  },

  renderFinalAnswerCardHtml(prob, isOpen) {
    if (!isOpen) {
      return `
        <div class="timeline-step-wrapper phase-6">
          <div class="timeline-rail-col">
            <div class="timeline-node" style="background:var(--emerald);">★</div>
          </div>
          <div class="surface-card" style="text-align:center; padding:1.25rem; border:2px dashed var(--emerald);">
            <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:0.65rem;">
              Complete all ${prob.steps.length} guided steps above—or click below—to unlock the complete boxed <strong>Final Answer Summary Card</strong> for ${prob.code}.
            </p>
            <button type="button" class="btn btn-emerald" id="unlock-final-answer-btn" onclick="window.STUDIO.toggleFinalAnswerCard(true)">
              ⭐ Reveal Complete Boxed Final Answer
            </button>
          </div>
        </div>
      `;
    }

    return `
      <div class="timeline-step-wrapper step-done">
        <div class="timeline-rail-col">
          <div class="timeline-node" style="background:var(--emerald);">★</div>
        </div>
        <section class="final-answer-card" id="final-answer-card">
          <div class="final-answer-header">
            <div>
              <span class="badge badge-emerald">★ Complete Exam-Ready Boxed Solution</span>
              <h3 style="font-size:1.15rem; font-weight:800; margin-top:0.3rem;">
                ${prob.finalAnswer.summaryTitle}
              </h3>
            </div>
            <button type="button" class="btn" style="font-size:0.78rem; padding:0.3rem 0.65rem;" onclick="window.STUDIO.toggleFinalAnswerCard(false)">
              Collapse Summary
            </button>
          </div>

          ${prob.finalAnswer.items
            .map(
              item => `
            <div class="final-answer-item">
              <div class="final-item-label">${item.label}</div>
              <div>${item.math}</div>
            </div>
          `
            )
            .join("")}
        </section>
      </div>
    `;
  },

  // ==========================================================================
  // INTERACTIVE STEP HANDLERS
  // ==========================================================================
  toggleHint(probId, stepIdx, hintNum) {
    const st = this.getStepState(probId, stepIdx);
    if (hintNum === 1) st.hint1 = !st.hint1;
    if (hintNum === 2) st.hint2 = !st.hint2;
    this.activeStepIndex = stepIdx;
    this.saveState();
    this.renderTutorWorkspace();
  },

  toggleRevealStep(probId, stepIdx) {
    const st = this.getStepState(probId, stepIdx);
    st.revealed = !st.revealed;
    this.activeStepIndex = stepIdx;
    this.saveState();
    this.renderProblemSelector();
    this.renderTutorWorkspace();
  },

  unlockAllStepsForCurrent() {
    const prob = this.getProblem();
    if (!prob) return;
    prob.steps.forEach((_, idx) => {
      const st = this.getStepState(prob.id, idx);
      st.revealed = true;
    });
    const pProg = this.getProblemProgress(prob.id);
    pProg.finalOpen = true;
    this.stepFocusMode = false;
    this.collapsedSteps = {};
    this.saveState();
    this.updateModeButtons();
    this.renderProblemSelector();
    this.renderTutorWorkspace();
  },

  toggleFinalAnswerCard(forceOpen) {
    const prob = this.getProblem();
    if (!prob) return;
    const pProg = this.getProblemProgress(prob.id);
    pProg.finalOpen = typeof forceOpen === "boolean" ? forceOpen : !pProg.finalOpen;
    this.saveState();
    this.renderTutorWorkspace();
    if (pProg.finalOpen) {
      const el = document.getElementById("final-answer-card");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  },

  handleCheckpointChoice(probId, stepIdx, optIdx) {
    const prob = this.getProblem(probId);
    if (!prob) return;
    const step = prob.steps[stepIdx];
    const st = this.getStepState(probId, stepIdx);

    st.selected = optIdx;
    this.activeStepIndex = stepIdx;

    if (optIdx === step.checkpoint.correctIndex) {
      st.solved = true;
      st.revealed = true;
    } else {
      if (!st.wrongs.includes(optIdx)) {
        st.wrongs.push(optIdx);
      }
      // In Guided Tutor mode, auto-open Hint 1 on first wrong try, Hint 2 on second wrong try
      if (!this.selfCheckMode) {
        st.hint1 = true;
        if (st.wrongs.length >= 2) {
          st.hint2 = true;
        }
      }
    }

    this.saveState();
    this.renderProblemSelector();
    this.renderTutorWorkspace();
  },

  // ==========================================================================
  // TAB 2: CONCEPT & LECTURE HUB (Lectures 10–22 + Verified External Links)
  // ==========================================================================
  filterConcepts(cat) {
    this.conceptCategoryFilter = cat;
    document.querySelectorAll(".concept-cat-pill").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-cat") === cat);
    });
    this.renderConceptAndLectureHub();
  },

  onConceptSearchInput(val) {
    this.conceptSearchQuery = (val || "").toLowerCase().trim();
    this.renderConceptAndLectureHub();
  },

  toggleConceptCardExpand(conceptId) {
    this.expandedConcepts[conceptId] = !this.expandedConcepts[conceptId];
    this.renderConceptAndLectureHub();
  },

  renderConceptAndLectureHub() {
    const conceptsContainer = document.getElementById("concepts-library-grid");
    const lecturesContainer = document.getElementById("lectures-roadmap-grid");
    if (!conceptsContainer || !lecturesContainer) return;

    const catColors = {
      "Lagrangian Mechanics": "var(--primary)",
      "Constrained Systems": "var(--purple)",
      "Contact & Impacts": "var(--teal)"
    };

    const conceptsList = Object.values(window.EXAM2_DATA.concepts || {}).filter(c => {
      if (this.conceptCategoryFilter !== "all" && c.category !== this.conceptCategoryFilter) {
        return false;
      }
      if (!this.conceptSearchQuery) return true;
      return (
        c.name.toLowerCase().includes(this.conceptSearchQuery) ||
        c.shortSummary.toLowerCase().includes(this.conceptSearchQuery) ||
        c.explanation.toLowerCase().includes(this.conceptSearchQuery)
      );
    });

    conceptsContainer.innerHTML = conceptsList
      .map(c => {
        const accent = catColors[c.category] || "var(--primary)";
        const isExpanded = Boolean(this.expandedConcepts[c.id]) || Boolean(this.conceptSearchQuery);
        return `
        <article class="surface-card" style="display:flex; flex-direction:column; justify-content:space-between; gap:0.7rem; border-top:5px solid ${accent};">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-bottom:0.4rem;">
              <span class="badge badge-indigo">${c.category}</span>
              <span class="badge badge-slate">${c.badge}</span>
            </div>
            <h3 style="font-size:1.05rem; font-weight:800; margin-bottom:0.35rem; line-height:1.3;">${c.name}</h3>
            ${c.svgIllustration ? `<div class="concept-svg-box">${c.svgIllustration}</div>` : ""}
            <p style="font-size:0.84rem; color:var(--text-secondary); margin-bottom:0.45rem; line-height:1.5;">${c.shortSummary}</p>
            <div>${c.formula}</div>

            <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-top:0.55rem; flex-wrap:wrap;">
              <button type="button"
                      class="btn ${isExpanded ? "btn-primary" : ""}"
                      style="font-size:0.75rem; padding:0.3rem 0.65rem;"
                      onclick="window.STUDIO.toggleConceptCardExpand('${c.id}')">
                ${isExpanded ? "▴ Hide Deep-Dive & Exam Trap" : "📖 Deep-Dive & Exam Trap ▾"}
              </button>
              <button type="button"
                      class="btn"
                      style="font-size:0.75rem; padding:0.3rem 0.65rem;"
                      onclick="window.STUDIO.openConceptModal('${c.id}')">
                🔍 Full Modal
              </button>
            </div>

            <div class="concept-details-drawer ${isExpanded ? "open" : ""}" id="concept-drawer-${c.id}">
              <div style="font-size:0.86rem; color:var(--text-secondary); line-height:1.6;">
                ${c.explanation}
              </div>
              <div class="diagnostic-banner trap" style="margin-top:0.65rem; font-size:0.82rem;">
                <strong>⚠️ Common Exam Trap:</strong> ${c.examTrap}
              </div>
            </div>
          </div>

          <div style="border-top:1px solid var(--border-subtle); padding-top:0.65rem;">
            <div style="font-size:0.72rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.35rem;">
              📚 Verified External Reading & Course Lecture:
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:0.38rem;">
              ${
                c.lectureRef
                  ? `<a href="${c.lectureRef.url}" target="_blank" rel="noopener noreferrer" class="concept-chip">🎥 ${c.lectureRef.title} ↗</a>`
                  : ""
              }
              ${(c.furtherReading || [])
                .map(
                  link => `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="external-reading-link">
                  🔗 ${link.label} ↗
                </a>
              `
                )
                .join("")}
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    // Render Lectures 10–22
    const lectures = window.EXAM2_DATA.lectures || [];
    lecturesContainer.innerHTML = lectures
      .map(
        lec => `
        <article class="lecture-card">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; gap:0.4rem; margin-bottom:0.45rem;">
              <span class="badge ${lec.badgeClass}">Lecture ${lec.number} • ${lec.date}</span>
              <span style="font-size:0.74rem; font-weight:700; color:var(--text-muted);">${lec.examWeight}</span>
            </div>
            <h4 style="font-size:1rem; font-weight:800; margin-bottom:0.35rem;">${lec.title}</h4>
            <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.55; margin-bottom:0.65rem;">
              ${lec.summary}
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:0.35rem;">
              ${lec.keyTopics.map(t => `<span class="badge badge-slate" style="text-transform:none; font-size:0.7rem;">${t}</span>`).join("")}
            </div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; padding-top:0.6rem; border-top:1px solid var(--border-subtle);">
            <span style="font-size:0.76rem; font-weight:700; color:var(--text-muted);">${lec.category}</span>
            <a href="${lec.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding:0.34rem 0.75rem; font-size:0.78rem;">
              ▶️ Watch Recording ↗
            </a>
          </div>
        </article>
      `
      )
      .join("");

    this.typesetMath(conceptsContainer);
    this.typesetMath(lecturesContainer);
  },

  // ==========================================================================
  // TAB 3: EXAM 2 FORMULA & HAND-DERIVATION RECIPE SHEET
  // ==========================================================================
  renderFormulaSheet() {
    const container = document.getElementById("formula-recipes-container");
    if (!container) return;
    const recipes = window.EXAM2_DATA.formulaRecipes || [];

    container.innerHTML = recipes
      .map(
        (r, idx) => `
        <article class="surface-card" style="border-left:6px solid ${r.color}; margin-bottom:1.25rem; padding:0; overflow:hidden;">
          <div style="background:${r.color}15; padding:0.9rem 1.35rem; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
            <div style="display:flex; align-items:center; gap:0.65rem;">
              <span class="step-phase-pill" style="background:${r.color};">ARCHETYPE ${idx + 1}</span>
              <h3 style="font-size:1.15rem; font-weight:800;">${r.category}</h3>
            </div>
            <span style="font-size:0.8rem; font-weight:700; color:var(--text-secondary);">
              🎯 ${r.whenToUse}
            </span>
          </div>

          <div style="padding:1.15rem 1.35rem; display:grid; grid-template-columns:repeat(auto-fit, minmax(360px, 1fr)); gap:1.25rem; align-items:start;">
            <div>
              <strong style="font-size:0.78rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); display:block; margin-bottom:0.4rem;">
                📐 Master Governing Equations
              </strong>
              ${r.governingEquations.map(eq => `<div>${eq}</div>`).join("")}
            </div>

            <div style="background:var(--bg-subtle); border:1px solid var(--border-strong); border-radius:var(--radius-sm); padding:1rem 1.2rem;">
              <strong style="font-size:0.78rem; text-transform:uppercase; letter-spacing:0.05em; color:${r.color}; display:block; margin-bottom:0.5rem;">
                ✅ Step-by-Step Hand-Derivation Checklist
              </strong>
              <ol style="padding-left:1.2rem; font-size:0.88rem; line-height:1.68; color:var(--text-secondary);">
                ${r.steps.map(s => `<li style="margin-bottom:0.4rem;">${s}</li>`).join("")}
              </ol>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    this.typesetMath(container);
  },

  // ==========================================================================
  // CONCEPT QUICK-PREVIEW MODAL
  // ==========================================================================
  openConceptModal(conceptId) {
    const c = window.EXAM2_DATA?.concepts?.[conceptId];
    if (!c) return;
    const modal = document.getElementById("concept-modal-backdrop");
    const titleEl = document.getElementById("concept-modal-title");
    const bodyEl = document.getElementById("concept-modal-body");
    if (!modal || !titleEl || !bodyEl) return;

    titleEl.innerHTML = c.name;
    bodyEl.innerHTML = `
      <div style="margin-bottom:0.65rem;">
        <span class="badge badge-indigo">${c.category}</span>
        <span class="badge badge-slate" style="margin-left:0.35rem;">${c.badge}</span>
      </div>
      ${c.svgIllustration ? `<div class="concept-svg-box" style="margin-bottom:0.75rem;">${c.svgIllustration}</div>` : ""}
      <p style="font-size:0.95rem; font-weight:600; color:var(--text-secondary); margin-bottom:0.6rem;">
        ${c.shortSummary}
      </p>
      <div>${c.formula}</div>
      <div style="font-size:0.92rem; line-height:1.7; margin-top:0.75rem;">
        ${c.explanation}
      </div>
      <div class="diagnostic-banner trap" style="margin-top:0.9rem;">
        <strong>⚠️ Key Exam Watchout:</strong> ${c.examTrap}
      </div>
      <div style="margin-top:1.1rem; padding-top:0.85rem; border-top:1px solid var(--border-subtle);">
        <strong style="font-size:0.8rem; text-transform:uppercase; color:var(--text-muted); display:block; margin-bottom:0.5rem;">
          🔗 Verified External Further Reading & Course Video Links:
        </strong>
        <div style="display:flex; flex-wrap:wrap; gap:0.45rem;">
          ${
            c.lectureRef
              ? `<a href="${c.lectureRef.url}" target="_blank" rel="noopener noreferrer" class="concept-chip">🎥 ${c.lectureRef.title} ↗</a>`
              : ""
          }
          ${(c.furtherReading || [])
            .map(
              l => `
            <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="external-reading-link">
              📖 ${l.label} ↗
            </a>
          `
            )
            .join("")}
        </div>
      </div>
    `;

    modal.classList.add("open");
    this.typesetMath(titleEl);
    this.typesetMath(bodyEl);
  },

  closeConceptModal() {
    const modal = document.getElementById("concept-modal-backdrop");
    if (modal) modal.classList.remove("open");
  },

  // ==========================================================================
  // INTERACTIVE CANVAS SCRATCHPAD
  // ==========================================================================
  spCanvas: null,
  spCtx: null,
  spDrawing: false,

  toggleScratchpad() {
    const dock = document.getElementById("scratchpad-dock");
    if (!dock) return;
    const isNowOpen = dock.classList.toggle("open");
    if (isNowOpen) {
      setTimeout(() => this.resizeScratchpad(), 40);
    }
  },

  toggleExpandScratchpad() {
    const dock = document.getElementById("scratchpad-dock");
    if (!dock) return;
    dock.classList.toggle("expanded");
    setTimeout(() => this.resizeScratchpad(), 60);
  },

  clearScratchpad() {
    if (!this.spCanvas || !this.spCtx) return;
    this.spCtx.clearRect(0, 0, this.spCanvas.width, this.spCanvas.height);
  },

  resizeScratchpad() {
    if (!this.spCanvas || !this.spCtx) return;
    const rect = this.spCanvas.getBoundingClientRect();
    const w = Math.max(300, Math.floor(rect.width || 420));
    const h = Math.max(220, Math.floor(rect.height || 290));
    if (this.spCanvas.width !== w || this.spCanvas.height !== h) {
      const saved = this.spCanvas.toDataURL();
      this.spCanvas.width = w;
      this.spCanvas.height = h;
      const img = new Image();
      img.onload = () => {
        if (this.spCtx) this.spCtx.drawImage(img, 0, 0);
      };
      img.src = saved;
    }
  },

  initScratchpad() {
    this.spCanvas = document.getElementById("scratchpad-canvas");
    if (!this.spCanvas) return;
    this.spCtx = this.spCanvas.getContext("2d");
    this.spCanvas.width = 420;
    this.spCanvas.height = 290;

    const getPt = e => {
      const r = this.spCanvas.getBoundingClientRect();
      if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX - r.left, y: e.touches[0].clientY - r.top };
      }
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };

    const start = e => {
      if (e.cancelable) e.preventDefault();
      this.resizeScratchpad();
      this.spDrawing = true;
      const pt = getPt(e);
      this.spCtx.beginPath();
      this.spCtx.moveTo(pt.x, pt.y);
      this.spCtx.strokeStyle = "#2563eb";
      this.spCtx.lineWidth = 2.2;
      this.spCtx.lineCap = "round";
      this.spCtx.lineJoin = "round";
    };

    const move = e => {
      if (!this.spDrawing) return;
      if (e.cancelable) e.preventDefault();
      const pt = getPt(e);
      this.spCtx.lineTo(pt.x, pt.y);
      this.spCtx.stroke();
    };

    const stop = () => {
      this.spDrawing = false;
    };

    this.spCanvas.addEventListener("mousedown", start);
    this.spCanvas.addEventListener("mousemove", move);
    this.spCanvas.addEventListener("mouseup", stop);
    this.spCanvas.addEventListener("mouseleave", stop);
    this.spCanvas.addEventListener("touchstart", start, { passive: false });
    this.spCanvas.addEventListener("touchmove", move, { passive: false });
    this.spCanvas.addEventListener("touchend", stop);
  },

  // ==========================================================================
  // KATEX MATH RENDERING HELPER
  // ==========================================================================
  typesetMath(rootEl = document.body) {
    if (typeof window.renderMathInElement === "function") {
      try {
        window.renderMathInElement(rootEl, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\[", right: "\\]", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false }
          ],
          throwOnError: false
        });
      } catch (e) {
        console.warn("KaTeX rendering warning:", e);
      }
    }
  }
};

window.addEventListener("DOMContentLoaded", () => {
  window.STUDIO.init();
});
