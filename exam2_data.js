// Advanced Dynamics - Exam 2 Master Knowledge Base & Problem Bank
// Lectures 10-22 (Lagrangian Mechanics, Holonomic/Non-holonomic Constraints, Baumgarte, Impacts, Rotations)
// 20 Comprehensive Multi-Step Problems with Complete Step Derivations, Hints, Concept Chips & Diagnostic Checkpoints

window.EXAM2_DATA = {
  "courseMeta": {
    "courseCode": "EGM 5444 / EML 4930",
    "courseTitle": "Advanced Dynamics",
    "instructor": "Dr. Christian Hubicki",
    "institution": "FAMU-FSU College of Engineering",
    "examTitle": "Exam 2 Interactive Guided Study Studio",
    "term": "Fall 2026",
    "focusSummary": "Lagrangian Mechanics, Holonomic Constraints, Constraint Jacobians, Lagrange Multipliers, and Contact & Impacts (Hand Derivations)"
  },
  "lectures": [
    {
      "number": 10,
      "date": "Mon, Sep 28",
      "title": "Introduction to Lagrangian Mechanics",
      "videoUrl": "https://www.youtube.com/live/xY6Bj48AZ0w",
      "category": "Lagrangian Mechanics",
      "badgeClass": "badge-indigo",
      "examWeight": "Core Exam Topic",
      "summary": "Generalized coordinates $\\mathbf{q}$, degrees of freedom, kinetic energy $T$, potential energy $V$, the Lagrangian $L = T - V$, and deriving Euler-Lagrange equations of motion without internal constraint reactions.",
      "keyTopics": [
        "Generalized Coordinates $\\mathbf{q}$",
        "Kinetic & Potential Energy",
        "Euler-Lagrange Equations",
        "Virtual Work & Generalized Forces $\\mathbf{Q}$"
      ]
    },
    {
      "number": 11,
      "date": "Wed, Sep 30",
      "title": "Coding Lagrangian Mechanics",
      "videoUrl": "https://www.youtube.com/live/yW_S_Fc_4qQ",
      "category": "Lagrangian Mechanics",
      "badgeClass": "badge-indigo",
      "examWeight": "Structure & Manipulator Form",
      "summary": "Structuring the Euler-Lagrange equations systematically using the Jacobian of position vectors, extracting the mass matrix $\\mathbf{M}(\\mathbf{q})$, and putting equations into standard manipulator form $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q}, \\dot{\\mathbf{q}}, t)$.",
      "keyTopics": [
        "Mass Matrix $\\mathbf{M}(\\mathbf{q})$",
        "Manipulator Form $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}$",
        "Coriolis & Centrifugal Terms"
      ]
    },
    {
      "number": 12,
      "date": "Mon, Oct 5",
      "title": "Coding Lagrangian Mechanics (ctd.)",
      "videoUrl": "https://www.youtube.com/watch?v=y2lYAfNyW8w",
      "category": "Lagrangian Mechanics",
      "badgeClass": "badge-indigo",
      "examWeight": "Multi-DOF Systems",
      "summary": "Multi-body position kinematics in 2D and 3D, chain-rule time differentiation, non-conservative generalized forces (viscous dampers and external forcing), and coupled pendulum-cart dynamics.",
      "keyTopics": [
        "3D Spherical & Planar Pendulums",
        "Viscous Friction & Forcing",
        "Coupled Inertia Off-Diagonals"
      ]
    },
    {
      "number": 13,
      "date": "Wed, Oct 7",
      "title": "Lagrangian Mechanics with Constraints",
      "videoUrl": "https://www.youtube.com/watch?v=mmjNuXqSlpo",
      "category": "Constrained Systems",
      "badgeClass": "badge-purple",
      "examWeight": "High-Yield Exam Topic",
      "summary": "Maximal vs. minimal coordinates, holonomic constraints $g(\\mathbf{q}) = 0$, differentiating constraints to velocity ($\\mathbf{J}\\dot{\\mathbf{q}} = 0$) and acceleration ($\\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0$), and enforcing constraints via Lagrange multipliers $\\lambda$.",
      "keyTopics": [
        "Holonomic Constraints $g(\\mathbf{q})=0$",
        "Constraint Jacobian $\\mathbf{J} = \\partial g/\\partial\\mathbf{q}$",
        "Lagrange Multipliers $\\lambda$",
        "Constraint Force $\\mathbf{J}^T\\lambda$"
      ]
    },
    {
      "number": 14,
      "date": "Mon, Oct 12",
      "title": "Contact and Impacts",
      "videoUrl": "https://www.youtube.com/watch?v=GCBQFWkyk3g",
      "category": "Contact & Impacts",
      "badgeClass": "badge-teal",
      "examWeight": "High-Yield Exam Topic",
      "summary": "Discrete-time impulse-momentum equations across instantaneous collisions, plastic (inelastic) vs. elastic restitution impact laws, solving the block-matrix impact map for impulse $\\Lambda$ and post-impact velocity $\\dot{\\mathbf{q}}^+$.",
      "keyTopics": [
        "Impulse-Momentum $\\mathbf{M}(\\dot{\\mathbf{q}}^+ - \\dot{\\mathbf{q}}^-) = \\mathbf{J}^T\\Lambda$",
        "Plastic Impact $\\mathbf{J}\\dot{\\mathbf{q}}^+ = 0$",
        "Restitution Law $\\mathbf{J}\\dot{\\mathbf{q}}^+ = -e\\,\\mathbf{J}\\dot{\\mathbf{q}}^-$",
        "Delassus Matrix $\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T$"
      ]
    },
    {
      "number": 15,
      "date": "Wed, Oct 14",
      "title": "Exam Review & Synthesis",
      "videoUrl": "https://www.youtube.com/watch?v=6V5x_CQ0Ow4",
      "category": "Review",
      "badgeClass": "badge-amber",
      "examWeight": "Problem Strategy",
      "summary": "End-to-end review of setting up generalized coordinates, choosing minimal vs. maximal coordinates, avoiding chain-rule pitfalls in $\\frac{d}{dt}(\\partial L/\\partial\\dot{\\mathbf{q}})$, and checking physical units and limiting cases.",
      "keyTopics": [
        "Chain Rule Pitfalls",
        "Coordinate Selection Strategy",
        "Physical Limit Checks"
      ]
    },
    {
      "number": 17,
      "date": "Wed, Oct 21",
      "title": "Coding Constrained Mechanical Systems",
      "videoUrl": "https://www.youtube.com/live/Hf4biSh_xvw?si=E_yCt4L1lYwOGFqq",
      "category": "Constrained Systems",
      "badgeClass": "badge-purple",
      "examWeight": "High-Yield Exam Topic",
      "summary": "Assembling the augmented DAE block matrix, deriving the convective acceleration term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$, understanding numerical constraint drift, and stabilizing constraints with Baumgarte stabilization.",
      "keyTopics": [
        "Convective Term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$",
        "Augmented DAE Block Matrix",
        "Constraint Drift",
        "Baumgarte Stabilization ($\\omega_B, \\zeta$)"
      ]
    },
    {
      "number": 18,
      "date": "Mon, Oct 26",
      "title": "Introduction to MuJoCo Pt. 1",
      "videoUrl": "https://www.youtube.com/live/HTyg2Tvhkto?si=6zZlRqa819y5WtLr",
      "category": "Multibody Modeling",
      "badgeClass": "badge-slate",
      "examWeight": "Conceptual Context",
      "summary": "Kinematic trees, slide and ball joints, maximal vs. joint-space representations, and how physics engines formulate constrained multibody equations of motion.",
      "keyTopics": [
        "Kinematic Trees",
        "Slide & Spherical Ball Joints",
        "Damping & Actuators"
      ]
    },
    {
      "number": 19,
      "date": "Wed, Oct 28",
      "title": "Introduction to MuJoCo Pt. 2",
      "videoUrl": "https://www.youtube.com/live/qbhyS4ot8M0",
      "category": "Multibody Modeling",
      "badgeClass": "badge-slate",
      "examWeight": "Conceptual Context",
      "summary": "Reading Cartesian body positions vs. quaternion joint states, contact mechanics in simulation, and comparing minimal-coordinate ODEs against constrained maximal-coordinate trajectories.",
      "keyTopics": [
        "Cartesian vs. Joint Coordinates",
        "Constraint Enforcement"
      ]
    },
    {
      "number": 20,
      "date": "Mon, Nov 2",
      "title": "Simulating Impacts and Hybrid Dynamical Systems",
      "videoUrl": "https://www.youtube.com/watch?v=Pz5SAUdpZt8",
      "category": "Contact & Impacts",
      "badgeClass": "badge-teal",
      "examWeight": "High-Yield Exam Topic",
      "summary": "Hybrid dynamical systems with multiple continuous modes separated by guard conditions (zero-crossing events) and reset maps (impact equations), including energy changes $\\Delta E$ across plastic catches.",
      "keyTopics": [
        "Hybrid Modes (Taut vs. Slack)",
        "Zero-Crossing Guard Conditions",
        "Impact Reset Map",
        "Kinetic Energy Loss $\\Delta E$"
      ]
    },
    {
      "number": 21,
      "date": "Wed, Nov 4",
      "title": "Impacts and Contact (ctd.)",
      "videoUrl": "https://www.youtube.com/watch?v=dDl4tIpOoMI",
      "category": "Contact & Impacts",
      "badgeClass": "badge-teal",
      "examWeight": "High-Yield Exam Topic",
      "summary": "Unilateral constraints $g(\\mathbf{q}) \\ge 0$ (or rope slack $g(\\mathbf{q}) \\le 0$), complementarity between gap $g$ and tension/normal multiplier $\\lambda \\ge 0$, liftoff/slack transitions when tension crosses zero, and multi-contact considerations.",
      "keyTopics": [
        "Unilateral Constraints",
        "Sign of Multiplier ($T \\ge 0$)",
        "Liftoff / Rope Slack Detection",
        "Complementarity"
      ]
    },
    {
      "number": 22,
      "date": "Mon, Nov 9",
      "title": "Constrained Mechanical Systems Example",
      "videoUrl": "https://www.youtube.com/watch?v=C-fcOt9sHI4",
      "category": "Constrained Systems",
      "badgeClass": "badge-purple",
      "examWeight": "Core Exam Walkthrough",
      "summary": "Complete worked hand-derivation example of a constrained mechanical system: writing $g(\\mathbf{q})$, computing $\\mathbf{J} = \\partial g/\\partial\\mathbf{q}$ and $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$, setting up the constrained EOMs, and interpreting the Lagrange multiplier physically.",
      "keyTopics": [
        "Full Hand-Derivation Workflow",
        "Simplifying Jacobians",
        "Physical Interpretation of $-T\\mathbf{J}^T$"
      ]
    }
  ],
  "concepts": {
    "generalized-coordinates": {
      "id": "generalized-coordinates",
      "name": "Generalized Coordinates $\\mathbf{q}$ & Degrees of Freedom",
      "category": "Lagrangian Mechanics",
      "badge": "Coordinates",
      "shortSummary": "A set of parameters $\\mathbf{q} = [q_1, \\dots, q_n]^T$ that uniquely specify the configuration of a mechanical system.",
      "formula": "$$\\mathbf{q} = \\begin{bmatrix} q_1 & q_2 & \\dots & q_n \\end{bmatrix}^T, \\qquad \\mathbf{r}_i = \\mathbf{r}_i(\\mathbf{q}, t)$$",
      "explanation": "In <strong>minimal coordinates</strong>, you choose exactly as many independent coordinates as degrees of freedom ($n = \\text{DOF}$), automatically satisfying geometric constraints (e.g., using spherical angles $\\alpha, \\beta$ for a pendulum of fixed length $\\ell$). In <strong>maximal coordinates</strong>, you track the full Cartesian coordinates of each body (e.g., $[x, y, x_b, y_b, z_b]^T$) and enforce geometric connections explicitly via constraint equations $g(\\mathbf{q}) = 0$.",
      "examTrap": "Never mix up relative coordinates with inertial coordinates! Always write each mass's position vector in an inertial frame (e.g., $\\mathbf{r}_b = \\mathbf{r}_{\\text{cart}} + \\mathbf{r}_{\\text{rel}}$) BEFORE differentiating to find velocity for kinetic energy $T$.",
      "lectureRef": {
        "number": 10,
        "title": "Lec 10: Intro to Lagrangian Mechanics",
        "url": "https://www.youtube.com/live/xY6Bj48AZ0w"
      },
      "furtherReading": [
        {
          "label": "LibreTexts: Generalized Coordinates & Configuration Space (Cline 6.1)",
          "url": "https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Variational_Principles_in_Classical_Mechanics_(Cline)/06%3A_Lagrangian_Dynamics/6.01%3A_Introduction_to_Lagrangian_Dynamics"
        },
        {
          "label": "MIT OCW 8.09: Classical Mechanics — Lagrangian Formulation",
          "url": "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/"
        },
        {
          "label": "Wikipedia: Generalized Coordinates in Analytical Mechanics",
          "url": "https://en.wikipedia.org/wiki/Generalized_coordinates"
        }
      ],
      "svgIllustration": "<svg viewBox=\"0 0 320 110\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Minimal vs Maximal Generalized Coordinates\">\n    <rect x=\"6\" y=\"6\" width=\"146\" height=\"98\" rx=\"8\" fill=\"#eef2ff\" stroke=\"#a5b4fc\" stroke-width=\"1.4\"/>\n    <text x=\"16\" y=\"24\" font-size=\"10\" font-weight=\"800\" fill=\"#3730a3\">MINIMAL (n = DOF)</text>\n    <line x1=\"42\" y1=\"36\" x2=\"112\" y2=\"36\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <rect x=\"62\" y=\"29\" width=\"28\" height=\"14\" rx=\"3\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1.4\"/>\n    <line x1=\"76\" y1=\"43\" x2=\"108\" y2=\"85\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n    <path d=\"M 76 68 A 25 25 0 0 0 92 64\" fill=\"none\" stroke=\"#4f46e5\" stroke-width=\"1.6\"/>\n    <text x=\"86\" y=\"78\" font-size=\"11\" font-weight=\"800\" fill=\"#4f46e5\">θ</text>\n    <circle cx=\"108\" cy=\"85\" r=\"7\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"1.6\"/>\n    <text x=\"16\" y=\"96\" font-size=\"10\" font-weight=\"700\" fill=\"#1e293b\">q = [x, θ]ᵀ (2 coords)</text>\n\n    <rect x=\"168\" y=\"6\" width=\"146\" height=\"98\" rx=\"8\" fill=\"#f5f3ff\" stroke=\"#c4b5fd\" stroke-width=\"1.4\"/>\n    <text x=\"178\" y=\"24\" font-size=\"10\" font-weight=\"800\" fill=\"#5b21b6\">MAXIMAL (+ g(q)=0)</text>\n    <line x1=\"185\" y1=\"78\" x2=\"185\" y2=\"32\" stroke=\"#64748b\" stroke-width=\"1.4\"/>\n    <line x1=\"185\" y1=\"78\" x2=\"295\" y2=\"78\" stroke=\"#64748b\" stroke-width=\"1.4\"/>\n    <line x1=\"215\" y1=\"38\" x2=\"265\" y2=\"68\" stroke=\"#7c3aed\" stroke-width=\"2\" stroke-dasharray=\"3,2\"/>\n    <circle cx=\"215\" cy=\"38\" r=\"6\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/>\n    <circle cx=\"265\" cy=\"68\" r=\"7\" fill=\"#ddd6fe\" stroke=\"#5b21b6\" stroke-width=\"1.6\"/>\n    <text x=\"274\" y=\"68\" font-size=\"9.5\" font-weight=\"700\" fill=\"#5b21b6\">(x_b,y_b)</text>\n    <text x=\"178\" y=\"96\" font-size=\"10\" font-weight=\"700\" fill=\"#1e293b\">q = [x, x_b, y_b]ᵀ</text>\n  </svg>"
    },
    "kinetic-potential-energy": {
      "id": "kinetic-potential-energy",
      "name": "Kinetic Energy $T$, Potential Energy $V$ & The Lagrangian $L$",
      "category": "Lagrangian Mechanics",
      "badge": "Energy Formulation",
      "shortSummary": "Formulating scalar energies $T(\\mathbf{q}, \\dot{\\mathbf{q}})$ and $V(\\mathbf{q})$ from inertial velocities and conservative force potentials.",
      "formula": "$$T = \\sum_i \\frac{1}{2}m_i \\|\\dot{\\mathbf{r}}_i\\|^2 + \\sum_j \\frac{1}{2}\\boldsymbol{\\omega}_j^T \\mathbf{I}_j \\boldsymbol{\\omega}_j = \\frac{1}{2}\\dot{\\mathbf{q}}^T \\mathbf{M}(\\mathbf{q})\\dot{\\mathbf{q}}, \\qquad V = V_{\\text{grav}} + V_{\\text{spring}}$$",
      "explanation": "For point masses, compute the inertial velocity $\\dot{\\mathbf{r}}_i = \\frac{d}{dt}\\mathbf{r}_i(\\mathbf{q}) = \\frac{\\partial \\mathbf{r}_i}{\\partial \\mathbf{q}}\\dot{\\mathbf{q}}$, then take the dot product $\\|\\dot{\\mathbf{r}}_i\\|^2 = \\dot{\\mathbf{r}}_i \\cdot \\dot{\\mathbf{r}}_i = \\dot{x}_i^2 + \\dot{y}_i^2 + \\dot{z}_i^2$. For gravity with $+z$ pointing up, $V_{\\text{grav}} = mgz$. For a linear spring with stiffness $k$ and rest length $L_0$ between point $\\mathbf{p}_1$ and anchor $\\mathbf{A}$, the stretch is $\\delta = \\|\\mathbf{p}_1 - \\mathbf{A}\\| - L_0$ and $V_{\\text{spring}} = \\frac{1}{2}k(\\|\\mathbf{p}_1 - \\mathbf{A}\\| - L_0)^2$.",
      "examTrap": "When expanding $\\|\\dot{\\mathbf{r}}_{\\text{cart}} + \\dot{\\mathbf{r}}_{\\text{rel}}\\|^2$, do NOT forget the cross-coupling dot product $2(\\dot{\\mathbf{r}}_{\\text{cart}} \\cdot \\dot{\\mathbf{r}}_{\\text{rel}})$! Those cross terms create the off-diagonal inertia entries in $\\mathbf{M}(\\mathbf{q})$ that couple cart acceleration to pendulum swing.",
      "lectureRef": {
        "number": 10,
        "title": "Lec 10: Intro to Lagrangian Mechanics",
        "url": "https://www.youtube.com/live/xY6Bj48AZ0w"
      },
      "furtherReading": [
        {
          "label": "LibreTexts: Applying Euler-Lagrange Equations to Mechanics (Cline 6.6)",
          "url": "https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Variational_Principles_in_Classical_Mechanics_(Cline)/06%3A_Lagrangian_Dynamics/6.06%3A_Applying_the_Euler-Lagrange_equations_to_classical_mechanics"
        },
        {
          "label": "MIT Underactuated Robotics: Ch. 1 & Multibody Manipulator Equations",
          "url": "https://underactuated.mit.edu/multibody.html"
        },
        {
          "label": "Wikipedia: Lagrangian Mechanics & Kinetic/Potential Energy",
          "url": "https://en.wikipedia.org/wiki/Lagrangian_mechanics"
        }
      ],
      "svgIllustration": "<svg viewBox=\"0 0 320 110\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Kinetic Energy T and Potential Energy V\">\n    <rect x=\"6\" y=\"6\" width=\"308\" height=\"98\" rx=\"8\" fill=\"#f0fdf4\" stroke=\"#86efac\" stroke-width=\"1.4\"/>\n    <!-- Kinetic Energy Velocity Vector -->\n    <circle cx=\"68\" cy=\"58\" r=\"13\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n    <text x=\"62\" y=\"62\" font-size=\"11\" font-weight=\"800\" fill=\"#1e3a8a\">m</text>\n    <line x1=\"81\" y1=\"52\" x2=\"132\" y2=\"30\" stroke=\"#2563eb\" stroke-width=\"2.4\"/>\n    <polygon points=\"132,30 123,30 127,37\" fill=\"#2563eb\"/>\n    <text x=\"92\" y=\"26\" font-size=\"10.5\" font-weight=\"800\" fill=\"#1d4ed8\">ṙ = ṙ_cart + ṙ_rel</text>\n    <text x=\"22\" y=\"92\" font-size=\"10\" font-weight=\"700\" fill=\"#0f172a\">T = ½ m ||ṙ||² = ½ q̇ᵀM(q)q̇</text>\n    <!-- Divider -->\n    <line x1=\"162\" y1=\"16\" x2=\"162\" y2=\"94\" stroke=\"#cbd5e1\" stroke-dasharray=\"4,3\" stroke-width=\"1.5\"/>\n    <!-- Potential Energy Spring + Gravity -->\n    <path d=\"M 195 22 L 195 30 L 188 35 L 202 41 L 188 47 L 202 53 L 195 58 L 195 66\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\"/>\n    <circle cx=\"195\" cy=\"72\" r=\"9\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"1.8\"/>\n    <text x=\"214\" y=\"48\" font-size=\"10\" font-weight=\"700\" fill=\"#b45309\">V_s = ½k(Δℓ)²</text>\n    <text x=\"214\" y=\"72\" font-size=\"10\" font-weight=\"700\" fill=\"#047857\">V_g = m g z</text>\n    <text x=\"178\" y=\"92\" font-size=\"10\" font-weight=\"800\" fill=\"#065f46\">L(q, q̇) = T − V</text>\n  </svg>"
    },
    "generalized-forces": {
      "id": "generalized-forces",
      "name": "Virtual Work, Viscous Friction & Generalized Forces $\\mathbf{Q}$",
      "category": "Lagrangian Mechanics",
      "badge": "Non-Conservative Forces",
      "shortSummary": "Projecting external forces $\\mathbf{F}_k$ and viscous damping onto generalized coordinates via virtual work $\\delta W_{\\text{nc}} = \\mathbf{Q}^T \\delta\\mathbf{q}$.",
      "formula": "$$Q_j = \\sum_{k} \\mathbf{F}_k^{\\text{nc}} \\cdot \\frac{\\partial \\mathbf{r}_k}{\\partial q_j} - \\frac{\\partial \\mathcal{R}}{\\partial \\dot{q}_j}, \\qquad \\mathcal{R} = \\frac{1}{2}b(\\dot{x}^2 + \\dot{y}^2)$$",
      "explanation": "Non-conservative forces (such as a shaker force $\\mathbf{F}(t)$ or viscous ground damping $-b\\dot{\\mathbf{r}}_{\\text{cart}}$) enter the right-hand side of Lagrange's equations as the generalized force vector $\\mathbf{Q}$. If a force $\\mathbf{F}_{\\text{cart}}$ acts purely on the cart at $\\mathbf{r}_{\\text{cart}} = [x, y, 0]^T$, then $\\frac{\\partial \\mathbf{r}_{\\text{cart}}}{\\partial \\alpha} = \\mathbf{0}$ and $\\frac{\\partial \\mathbf{r}_{\\text{cart}}}{\\partial \\beta} = \\mathbf{0}$, so $Q_\\alpha = Q_\\beta = 0$ immediately!",
      "examTrap": "Do not put conservative forces (like gravity $mg$ or linear springs) inside $\\mathbf{Q}$ if you already included them in the potential energy $V(\\mathbf{q})$—otherwise you will double-count them!",
      "lectureRef": {
        "number": 12,
        "title": "Lec 12: Coding Lagrangian Mechanics ctd.",
        "url": "https://www.youtube.com/watch?v=y2lYAfNyW8w"
      },
      "furtherReading": [
        {
          "label": "LibreTexts: Lagrange Equations from d'Alembert's Principle (Cline 6.3)",
          "url": "https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Variational_Principles_in_Classical_Mechanics_(Cline)/06%3A_Lagrangian_Dynamics/6.03%3A_Lagrange_Equations_from_dAlemberts_Principle"
        },
        {
          "label": "Wikipedia: Generalized Forces & Virtual Displacements",
          "url": "https://en.wikipedia.org/wiki/Generalized_forces"
        }
      ],
      "svgIllustration": "<svg viewBox=\"0 0 320 110\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Virtual Work and Non-Conservative Generalized Forces Q\">\n    <rect x=\"6\" y=\"6\" width=\"308\" height=\"98\" rx=\"8\" fill=\"#fffbeb\" stroke=\"#fcd34d\" stroke-width=\"1.4\"/>\n    <line x1=\"25\" y1=\"74\" x2=\"295\" y2=\"74\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <!-- Cart -->\n    <rect x=\"105\" y=\"42\" width=\"68\" height=\"32\" rx=\"5\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"2\"/>\n    <text x=\"128\" y=\"62\" font-size=\"11\" font-weight=\"800\" fill=\"#9a3412\">Cart</text>\n    <!-- External Force F(t) -->\n    <line x1=\"173\" y1=\"55\" x2=\"238\" y2=\"55\" stroke=\"#e11d48\" stroke-width=\"2.4\"/>\n    <polygon points=\"238,55 229,50 229,60\" fill=\"#e11d48\"/>\n    <text x=\"184\" y=\"46\" font-size=\"10.5\" font-weight=\"800\" fill=\"#be123c\">F_ext(t)</text>\n    <!-- Viscous Damper -b x_dot -->\n    <line x1=\"105\" y1=\"58\" x2=\"45\" y2=\"58\" stroke=\"#0d9488\" stroke-width=\"2.4\"/>\n    <polygon points=\"45,58 54,53 54,63\" fill=\"#0d9488\"/>\n    <text x=\"44\" y=\"46\" font-size=\"10.5\" font-weight=\"800\" fill=\"#0f766e\">−b ẋ</text>\n    <text x=\"38\" y=\"94\" font-size=\"10\" font-weight=\"700\" fill=\"#78350f\">δW_nc = Σ F_k · (∂r_k/∂q_j) δq_j = Qᵀ δq</text>\n  </svg>"
    },
    "manipulator-equation": {
      "id": "manipulator-equation",
      "name": "Euler-Lagrange Equations & Manipulator Form $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}$",
      "category": "Lagrangian Mechanics",
      "badge": "Equations of Motion",
      "shortSummary": "Transforming $\\frac{d}{dt}(\\partial L/\\partial \\dot{\\mathbf{q}})^T - (\\partial L/\\partial \\mathbf{q})^T = \\mathbf{Q}$ into the linear-in-accelerations matrix system $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q}, \\dot{\\mathbf{q}}, t)$.",
      "formula": "$$\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{\\mathbf{q}}}\\right)^T - \\left(\\frac{\\partial L}{\\partial \\mathbf{q}}\\right)^T = \\mathbf{Q} \\iff \\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q}, \\dot{\\mathbf{q}}, t)$$",
      "explanation": "Because kinetic energy is quadratic in velocities ($T = \\frac{1}{2}\\dot{\\mathbf{q}}^T\\mathbf{M}(\\mathbf{q})\\dot{\\mathbf{q}}$), the generalized momentum is $\\mathbf{p} = \\left(\\frac{\\partial T}{\\partial \\dot{\\mathbf{q}}}\\right)^T = \\mathbf{M}(\\mathbf{q})\\dot{\\mathbf{q}}$. Differentiating with respect to time gives $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} + \\dot{\\mathbf{M}}(\\mathbf{q},\\dot{\\mathbf{q}})\\dot{\\mathbf{q}}$. Moving the Coriolis/centrifugal terms, gravity gradient $-\\nabla_{\\mathbf{q}}V$, and non-conservative forces $\\mathbf{Q}$ to the right-hand side yields $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$.",
      "examTrap": "Remember that $\\mathbf{M}(\\mathbf{q})$ is ALWAYS symmetric and positive-definite! Specifically, $M_{ij} = \\frac{\\partial^2 T}{\\partial \\dot{q}_i \\partial \\dot{q}_j}$. A product term $c\\,\\dot{q}_i\\dot{q}_j$ (with $i \\ne j$) in $T$ contributes $c$ directly to BOTH $M_{ij}$ and $M_{ji}$ (not $c/2$).",
      "lectureRef": {
        "number": 11,
        "title": "Lec 11: Coding Lagrangian Mechanics",
        "url": "https://www.youtube.com/live/yW_S_Fc_4qQ"
      },
      "furtherReading": [
        {
          "label": "Lynch & Park: Modern Robotics Ch. 8 — Dynamics of Open Chains",
          "url": "https://hades.mech.northwestern.edu/images/7/7f/MR.pdf"
        },
        {
          "label": "MIT Underactuated Robotics: Manipulator Equations",
          "url": "https://underactuated.mit.edu/multibody.html"
        }
      ],
      "svgIllustration": "<svg viewBox=\"0 0 320 110\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Euler-Lagrange Manipulator Matrix Form\">\n    <rect x=\"6\" y=\"6\" width=\"308\" height=\"98\" rx=\"8\" fill=\"#eef2ff\" stroke=\"#93c5fd\" stroke-width=\"1.4\"/>\n    <rect x=\"18\" y=\"24\" width=\"76\" height=\"54\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.8\"/>\n    <text x=\"32\" y=\"47\" font-size=\"12\" font-weight=\"800\" fill=\"#1e40af\">M(q)</text>\n    <text x=\"25\" y=\"64\" font-size=\"9\" font-weight=\"600\" fill=\"#1e3a8a\">Symmetric &gt; 0</text>\n    <rect x=\"102\" y=\"24\" width=\"32\" height=\"54\" rx=\"6\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.8\"/>\n    <text x=\"111\" y=\"55\" font-size=\"13\" font-weight=\"800\" fill=\"#3730a3\">q̈</text>\n    <text x=\"143\" y=\"56\" font-size=\"15\" font-weight=\"800\" fill=\"#0f172a\">=</text>\n    <rect x=\"162\" y=\"24\" width=\"138\" height=\"54\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"1.8\"/>\n    <text x=\"175\" y=\"45\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">f(q, q̇, t)</text>\n    <text x=\"172\" y=\"63\" font-size=\"9.5\" font-weight=\"600\" fill=\"#475569\">Q − C(q,q̇)q̇ − ∇V(q)</text>\n    <text x=\"35\" y=\"95\" font-size=\"9.5\" font-weight=\"700\" fill=\"#334155\">M_ij = ∂²T / (∂q̇_i ∂q̇_j) read directly from T!</text>\n  </svg>"
    },
    "holonomic-constraints": {
      "id": "holonomic-constraints",
      "name": "Holonomic Constraints $g(\\mathbf{q}) = 0$",
      "category": "Constrained Systems",
      "badge": "Constraints",
      "shortSummary": "Algebraic position-level equations $g(\\mathbf{q}) = 0$ that restrict the allowable configurations of a system in maximal coordinates.",
      "formula": "$$g(\\mathbf{q}) = 0 \\quad (\\text{bilateral}), \\qquad g(\\mathbf{q}) \\le 0 \\text{ or } g(\\mathbf{q}) \\ge 0 \\quad (\\text{unilateral})$$",
      "explanation": "A constraint is <strong>holonomic</strong> if it depends only on the coordinates $\\mathbf{q}$ (and possibly time $t$), not on velocities $\\dot{\\mathbf{q}}$. For a rigid rod of length $\\ell$ connecting a cart and a bob, writing $g(\\mathbf{q}) = \\frac{1}{2}(\\|\\mathbf{r}_b - \\mathbf{r}_{\\text{cart}}\\|^2 - \\ell^2) = 0$ is algebraically equivalent to $\\|\\mathbf{r}_b - \\mathbf{r}_{\\text{cart}}\\| - \\ell = 0$, but avoids square roots and makes the factor of $2$ cancel cleanly when differentiating!",
      "examTrap": "Always check the sign convention of $g(\\mathbf{q})$ for unilateral constraints! In HW 2 Problem 3, $g(\\mathbf{q}) = (\\text{rope length used}) - \\ell$, which is ZERO when taut and NEGATIVE ($g < 0$) when slack.",
      "lectureRef": {
        "number": 13,
        "title": "Lec 13: Lagrangian Mechanics with Constraints",
        "url": "https://www.youtube.com/watch?v=mmjNuXqSlpo"
      },
      "furtherReading": [
        {
          "label": "LibreTexts: Constrained Systems in Lagrangian Dynamics (Cline 6.5)",
          "url": "https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Variational_Principles_in_Classical_Mechanics_(Cline)/06%3A_Lagrangian_Dynamics/6.05%3A_Constrained_Systems"
        },
        {
          "label": "Wikipedia: Holonomic Constraints in Analytical Mechanics",
          "url": "https://en.wikipedia.org/wiki/Holonomic_constraints"
        }
      ],
      "svgIllustration": "<svg viewBox=\"0 0 320 110\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Holonomic Constraint Surface g(q) = 0\">\n    <rect x=\"6\" y=\"6\" width=\"308\" height=\"98\" rx=\"8\" fill=\"#faf5ff\" stroke=\"#d8b4fe\" stroke-width=\"1.4\"/>\n    <path d=\"M 35 82 Q 155 12 285 76\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"3\"/>\n    <text x=\"195\" y=\"34\" font-size=\"10.5\" font-weight=\"800\" fill=\"#5b21b6\">Manifold g(q) = 0</text>\n    <circle cx=\"145\" cy=\"46\" r=\"7\" fill=\"#ddd6fe\" stroke=\"#5b21b6\" stroke-width=\"2\"/>\n    <!-- Tangent velocity q_dot -->\n    <line x1=\"145\" y1=\"46\" x2=\"205\" y2=\"43\" stroke=\"#0d9488\" stroke-width=\"2.2\"/>\n    <polygon points=\"205,43 196,39 197,48\" fill=\"#0d9488\"/>\n    <text x=\"165\" y=\"62\" font-size=\"10\" font-weight=\"800\" fill=\"#0f766e\">q̇ (tangent)</text>\n    <text x=\"35\" y=\"95\" font-size=\"10\" font-weight=\"700\" fill=\"#3b0764\">Rod: g(q) = ½(||r_b − r_a||² − ℓ²) = 0</text>\n  </svg>"
    },
    "constraint-jacobian": {
      "id": "constraint-jacobian",
      "name": "Constraint Jacobian $\\mathbf{J} = \\partial g/\\partial\\mathbf{q}$ & Convective Term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$",
      "category": "Constrained Systems",
      "badge": "Jacobian & Kinematics",
      "shortSummary": "Differentiating $g(\\mathbf{q}) = 0$ twice with respect to time gives $\\mathbf{J}\\dot{\\mathbf{q}} = 0$ (velocity constraint) and $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ (acceleration constraint).",
      "formula": "$$\\mathbf{J}(\\mathbf{q}) = \\frac{\\partial g}{\\partial \\mathbf{q}} \\in \\mathbb{R}^{m \\times n}, \\qquad \\dot{g} = \\mathbf{J}\\dot{\\mathbf{q}} = 0, \\qquad \\ddot{g} = \\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0$$",
      "explanation": "For $m$ constraints and $n$ generalized coordinates, $\\mathbf{J} = \\frac{\\partial g}{\\partial \\mathbf{q}}$ is an $m \\times n$ matrix whose rows point along the gradient $\\nabla_{\\mathbf{q}} g$ (the direction normal to the constraint surface). Differentiating $\\dot{g} = \\mathbf{J}(\\mathbf{q})\\dot{\\mathbf{q}} = 0$ by the product rule gives $\\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0$. The scalar/vector $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ represents the <strong>convective (centripetal/curvature) acceleration</strong> required just to stay on the curved constraint manifold at velocity $\\dot{\\mathbf{q}}$.",
      "examTrap": "Do NOT set $\\mathbf{J}\\ddot{\\mathbf{q}} = 0$! For any curved constraint (like a pendulum rod or circular track), $\\dot{\\mathbf{J}}$ is non-zero, and omitting $-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ drops the centripetal acceleration $v^2/\\ell$, causing the mass to fly off along the tangent!",
      "lectureRef": {
        "number": 17,
        "title": "Lec 17: Coding Constrained Mechanical Systems",
        "url": "https://www.youtube.com/live/Hf4biSh_xvw?si=E_yCt4L1lYwOGFqq"
      },
      "furtherReading": [
        {
          "label": "CMU 16-711: Constrained Dynamics & Lagrange Multipliers (Witkin)",
          "url": "https://www.cs.cmu.edu/~baraff/sigcourse/notesf.pdf"
        },
        {
          "label": "Wikipedia: Jacobian Matrix and Determinant",
          "url": "https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant"
        }
      ],
      "svgIllustration": "<svg viewBox=\"0 0 320 110\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Constraint Jacobian J and Convective Centripetal Term\">\n    <rect x=\"6\" y=\"6\" width=\"308\" height=\"98\" rx=\"8\" fill=\"#f0fdfa\" stroke=\"#99f6e4\" stroke-width=\"1.4\"/>\n    <path d=\"M 40 86 Q 160 20 280 86\" fill=\"none\" stroke=\"#0f766e\" stroke-width=\"2.5\"/>\n    <circle cx=\"160\" cy=\"53\" r=\"6.5\" fill=\"#99f6e4\" stroke=\"#0f766e\" stroke-width=\"2\"/>\n    <!-- Normal J^T -->\n    <line x1=\"160\" y1=\"53\" x2=\"160\" y2=\"16\" stroke=\"#e11d48\" stroke-width=\"2.2\"/>\n    <polygon points=\"160,16 155,24 165,24\" fill=\"#e11d48\"/>\n    <text x=\"168\" y=\"26\" font-size=\"10\" font-weight=\"800\" fill=\"#be123c\">Jᵀ = ∇g (Normal)</text>\n    <!-- Tangent Velocity -->\n    <line x1=\"160\" y1=\"53\" x2=\"218\" y2=\"53\" stroke=\"#2563eb\" stroke-width=\"2.2\"/>\n    <polygon points=\"218,53 210,48 210,58\" fill=\"#2563eb\"/>\n    <text x=\"223\" y=\"56\" font-size=\"10\" font-weight=\"800\" fill=\"#1d4ed8\">J q̇ = 0</text>\n    <text x=\"35\" y=\"95\" font-size=\"10\" font-weight=\"700\" fill=\"#134e4a\">g̈ = J q̈ + J̇ q̇ = 0  ⇒  J q̈ = −J̇ q̇ (curvature)</text>\n  </svg>"
    },
    "lagrange-multipliers": {
      "id": "lagrange-multipliers",
      "name": "Lagrange Multipliers $\\lambda$ & Augmented DAE Block Matrix",
      "category": "Constrained Systems",
      "badge": "Multipliers & DAEs",
      "shortSummary": "Enforcing holonomic constraints via generalized constraint forces $\\mathbf{F}_c = \\mathbf{J}^T\\lambda$ (or $-T\\mathbf{J}^T$) in a saddle-point block matrix.",
      "formula": "$$\\mathbf{M}\\ddot{\\mathbf{q}} = \\mathbf{F} + \\mathbf{J}^T\\lambda \\quad \\text{with} \\quad \\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} \\iff \\begin{bmatrix} \\mathbf{M} & -\\mathbf{J}^T \\\\ \\mathbf{J} & \\mathbf{0} \\end{bmatrix} \\begin{bmatrix} \\ddot{\\mathbf{q}} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{F} \\\\ -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} \\end{bmatrix}$$",
      "explanation": "By Gauss's / d'Alembert's principle of virtual work, an ideal frictionless constraint does zero virtual work on any displacement tangent to the constraint surface ($\\mathbf{J}\\delta\\mathbf{q} = 0$). Therefore, the generalized constraint force must be perpendicular to the surface, i.e., a linear combination of the rows of $\\mathbf{J}$: $\\mathbf{F}_c = \\mathbf{J}^T\\lambda$ (or $-T\\mathbf{J}^T$ when written in terms of positive rope tension $T$). Combining $\\mathbf{M}\\ddot{\\mathbf{q}} - \\mathbf{J}^T\\lambda = \\mathbf{F}$ with $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ gives an $(n+m)\\times(n+m)$ linear system for $\\ddot{\\mathbf{q}}$ and $\\lambda$ simultaneously!",
      "examTrap": "Pay close attention to the sign in front of $\\mathbf{J}^T\\lambda$! If the problem writes $\\mathbf{M}\\ddot{\\mathbf{q}} = \\mathbf{F} + \\mathbf{J}^T\\lambda$, moving $\\mathbf{J}^T\\lambda$ to the left-hand side gives $-\\mathbf{J}^T$ in the top-right block of the matrix. If the problem writes $\\mathbf{M}\\ddot{\\mathbf{q}} = \\mathbf{F} - T\\mathbf{J}^T$ (like HW 2 Problem 3d), moving $-T\\mathbf{J}^T$ to the left gives $+\\mathbf{J}^T$ in the top-right block!",
      "lectureRef": {
        "number": 22,
        "title": "Lec 22: Constrained Mechanical Systems Example",
        "url": "https://www.youtube.com/watch?v=C-fcOt9sHI4"
      },
      "furtherReading": [
        {
          "label": "LibreTexts: Systems Involving Holonomic Constraints & Multipliers (Cline 6.8)",
          "url": "https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Variational_Principles_in_Classical_Mechanics_(Cline)/06%3A_Lagrangian_Dynamics/6.08%3A_Applications_to_systems_involving_holonomic_constraints"
        },
        {
          "label": "CMU Constrained Dynamics Notes: The Matrix Equation & Multipliers",
          "url": "https://www.cs.cmu.edu/~baraff/sigcourse/notesf.pdf"
        }
      ],
      "svgIllustration": "<svg viewBox=\"0 0 320 110\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Augmented Saddle-Point DAE Matrix for Lagrange Multipliers\">\n    <rect x=\"6\" y=\"6\" width=\"308\" height=\"98\" rx=\"8\" fill=\"#f5f3ff\" stroke=\"#c4b5fd\" stroke-width=\"1.4\"/>\n    <rect x=\"22\" y=\"18\" width=\"110\" height=\"68\" rx=\"6\" fill=\"#ede9fe\" stroke=\"#6d28d9\" stroke-width=\"1.8\"/>\n    <line x1=\"88\" y1=\"18\" x2=\"88\" y2=\"86\" stroke=\"#a78bfa\" stroke-dasharray=\"3,2\"/>\n    <line x1=\"22\" y1=\"58\" x2=\"132\" y2=\"58\" stroke=\"#a78bfa\" stroke-dasharray=\"3,2\"/>\n    <text x=\"46\" y=\"43\" font-size=\"12\" font-weight=\"800\" fill=\"#4c1d95\">M</text>\n    <text x=\"96\" y=\"43\" font-size=\"11\" font-weight=\"800\" fill=\"#be123c\">−Jᵀ</text>\n    <text x=\"48\" y=\"76\" font-size=\"11\" font-weight=\"800\" fill=\"#0f766e\">J</text>\n    <text x=\"105\" y=\"76\" font-size=\"11\" font-weight=\"800\" fill=\"#64748b\">0</text>\n    <rect x=\"142\" y=\"18\" width=\"34\" height=\"68\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.6\"/>\n    <text x=\"153\" y=\"43\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">q̈</text>\n    <text x=\"154\" y=\"75\" font-size=\"11\" font-weight=\"800\" fill=\"#be123c\">λ</text>\n    <text x=\"186\" y=\"56\" font-size=\"14\" font-weight=\"800\" fill=\"#0f172a\">=</text>\n    <rect x=\"204\" y=\"18\" width=\"94\" height=\"68\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.6\"/>\n    <text x=\"244\" y=\"43\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">F</text>\n    <text x=\"225\" y=\"75\" font-size=\"11\" font-weight=\"800\" fill=\"#0f766e\">−J̇ q̇</text>\n  </svg>"
    },
    "baumgarte-stabilization": {
      "id": "baumgarte-stabilization",
      "name": "Constraint Drift & Baumgarte Stabilization ($\\omega_B, \\zeta$)",
      "category": "Constrained Systems",
      "badge": "Stabilization",
      "shortSummary": "Replacing $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ with a damped harmonic oscillator in $g$ to eliminate numerical drift off the constraint manifold.",
      "formula": "$$\\ddot{g} + 2\\zeta\\omega_B\\dot{g} + \\omega_B^2 g = 0 \\implies \\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\zeta\\omega_B(\\mathbf{J}\\dot{\\mathbf{q}}) - \\omega_B^2 g(\\mathbf{q})$$",
      "explanation": "If you enforce only the acceleration constraint $\\ddot{g} = \\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0$, any tiny numerical integration error in $\\dot{g}$ or $g$ integrates like $\\ddot{g} = 0 \\implies g(t) = g(0) + \\dot{g}(0)t$, causing the rod length or rope length to drift linearly/quadratically over time! <strong>Baumgarte stabilization</strong> adds PD feedback ($-2\\zeta\\omega_B\\dot{g} - \\omega_B^2 g$) so that any nonzero violation $g \\ne 0$ or $\\dot{g} \\ne 0$ decays exponentially back to zero like a critically damped spring-damper ($zeta = 1$).",
      "examTrap": "Always write $\\dot{g}$ as $\\mathbf{J}\\dot{\\mathbf{q}}$ when substituting into the Baumgarte formula! And remember that on the right-hand side of $\\mathbf{J}\\ddot{\\mathbf{q}} = \\dots$, ALL THREE terms ($-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$, $-2\\zeta\\omega_B\\dot{g}$, and $-\\omega_B^2 g$) carry negative signs.",
      "lectureRef": {
        "number": 17,
        "title": "Lec 17: Coding Constrained Mechanical Systems",
        "url": "https://www.youtube.com/live/Hf4biSh_xvw?si=E_yCt4L1lYwOGFqq"
      },
      "furtherReading": [
        {
          "label": "Wikipedia: DAE Index Reduction & Baumgarte Stabilization",
          "url": "https://en.wikipedia.org/wiki/Differential-algebraic_system_of_equations#Index_reduction_and_stabilization"
        },
        {
          "label": "CMU Constrained Dynamics: Feedback Stabilization of Drift",
          "url": "https://www.cs.cmu.edu/~baraff/sigcourse/notesf.pdf"
        }
      ],
      "svgIllustration": "<svg viewBox=\"0 0 320 110\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Baumgarte Constraint Stabilization Damped Decay\">\n    <rect x=\"6\" y=\"6\" width=\"308\" height=\"98\" rx=\"8\" fill=\"#fff1f2\" stroke=\"#fecdd3\" stroke-width=\"1.4\"/>\n    <!-- Axes -->\n    <line x1=\"32\" y1=\"75\" x2=\"290\" y2=\"75\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <line x1=\"32\" y1=\"20\" x2=\"32\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <!-- Unstabilized drift curve -->\n    <path d=\"M 32 72 Q 140 66 275 22\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n    <text x=\"180\" y=\"28\" font-size=\"9.5\" font-weight=\"800\" fill=\"#be123c\">Unstabilized (g̈=0 drifts!)</text>\n    <!-- Baumgarte stabilized decay curve -->\n    <path d=\"M 32 36 Q 90 75 280 75\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2.6\"/>\n    <text x=\"95\" y=\"64\" font-size=\"9.5\" font-weight=\"800\" fill=\"#047857\">Baumgarte: g̈ + 2ζω_B ġ + ω_B² g = 0</text>\n    <text x=\"278\" y=\"88\" font-size=\"9.5\" font-weight=\"700\" fill=\"#334155\">t</text>\n  </svg>"
    },
    "impact-maps": {
      "id": "impact-maps",
      "name": "Impact Maps, Impulse $\\Lambda$, Delassus Matrix & Energy Loss $\\Delta E$",
      "category": "Contact & Impacts",
      "badge": "Impacts & Collisions",
      "shortSummary": "Solving instantaneous velocity jumps $\\dot{\\mathbf{q}}^- \\to \\dot{\\mathbf{q}}^+$ and impulse $\\Lambda$ when a contact or slack rope suddenly engages.",
      "formula": "$$\\begin{bmatrix} \\mathbf{M} & \\mathbf{J}^T \\\\ \\mathbf{J} & \\mathbf{0} \\end{bmatrix} \\begin{bmatrix} \\dot{\\mathbf{q}}^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{M}\\dot{\\mathbf{q}}^- \\\\ -e\\,\\mathbf{J}\\dot{\\mathbf{q}}^- \\end{bmatrix}, \\qquad \\Lambda = (1+e)(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}\\mathbf{J}\\dot{\\mathbf{q}}^-$$",
      "explanation": "Across an instantaneous collision or rope catch at time $t_c$, positions $\\mathbf{q}$ do not jump, and finite forces (gravity, springs, dampers) produce zero impulse over $\\Delta t \\to 0$. Integrating $\\mathbf{M}\\ddot{\\mathbf{q}} + \\mathbf{J}^T T = \\mathbf{F}$ over $[t_c^-, t_c^+]$ gives the impulse-momentum balance $\\mathbf{M}(\\dot{\\mathbf{q}}^+ - \\dot{\\mathbf{q}}^-) + \\mathbf{J}^T\\Lambda = \\mathbf{0}$ (or $-\\mathbf{J}^T\\Lambda = \\mathbf{0}$ depending on sign convention). Combined with the post-impact velocity law $\\mathbf{J}\\dot{\\mathbf{q}}^+ = -e\\mathbf{J}\\dot{\\mathbf{q}}^-$ ($e=0$ for a perfectly plastic catch), we invert the operational-space inverse inertia (Delassus matrix) $\\mathbf{G} = \\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T$ to solve for $\\Lambda$, $\\dot{\\mathbf{q}}^+$, and the mechanical energy lost $\\Delta E = T^+ - T^- \\le 0$.",
      "examTrap": "Notice that in an impact map, the bottom-right RHS is $0$ (for plastic impact $e=0$) or $-e\\,\\mathbf{J}\\dot{\\mathbf{q}}^-$ (for restitution), NOT $-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$! Why? Because impact is a VELOCITY-level equation integrated over $\\Delta t \\to 0$, not an acceleration-level equation!",
      "lectureRef": {
        "number": 14,
        "title": "Lec 14: Contact and Impacts",
        "url": "https://www.youtube.com/watch?v=GCBQFWkyk3g"
      },
      "furtherReading": [
        {
          "label": "LibreTexts: Impulsive Forces in Lagrangian Dynamics (Cline 6.12)",
          "url": "https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Variational_Principles_in_Classical_Mechanics_(Cline)/06%3A_Lagrangian_Dynamics/6.12%3A_Impulsive_Forces"
        },
        {
          "label": "MIT Underactuated Robotics: Hybrid Systems & Impact Mechanics",
          "url": "https://underactuated.mit.edu/humanoids.html"
        },
        {
          "label": "Wikipedia: Impulse (Physics) & Coefficient of Restitution",
          "url": "https://en.wikipedia.org/wiki/Coefficient_of_restitution"
        }
      ],
      "svgIllustration": "<svg viewBox=\"0 0 320 110\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Instantaneous Impact Map and Velocity Jump\">\n    <rect x=\"6\" y=\"6\" width=\"308\" height=\"98\" rx=\"8\" fill=\"#f0fdfa\" stroke=\"#5eead4\" stroke-width=\"1.4\"/>\n    <line x1=\"30\" y1=\"76\" x2=\"290\" y2=\"76\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n    <!-- Pre-impact ball -->\n    <circle cx=\"85\" cy=\"42\" r=\"10\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"1.8\"/>\n    <line x1=\"95\" y1=\"50\" x2=\"132\" y2=\"72\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n    <text x=\"65\" y=\"27\" font-size=\"10\" font-weight=\"800\" fill=\"#1e40af\">q̇⁻ (pre)</text>\n    <!-- Impulse at contact -->\n    <circle cx=\"155\" cy=\"66\" r=\"10\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/>\n    <line x1=\"155\" y1=\"76\" x2=\"155\" y2=\"30\" stroke=\"#e11d48\" stroke-width=\"2.6\"/>\n    <polygon points=\"155,30 150,39 160,39\" fill=\"#e11d48\"/>\n    <text x=\"163\" y=\"42\" font-size=\"10.5\" font-weight=\"800\" fill=\"#be123c\">JᵀΛ</text>\n    <!-- Post-impact ball -->\n    <circle cx=\"230\" cy=\"46\" r=\"10\" fill=\"#a7f3d0\" stroke=\"#047857\" stroke-width=\"1.8\"/>\n    <line x1=\"172\" y1=\"68\" x2=\"216\" y2=\"50\" stroke=\"#047857\" stroke-width=\"2\"/>\n    <text x=\"215\" y=\"30\" font-size=\"10\" font-weight=\"800\" fill=\"#065f46\">J q̇⁺ = −e J q̇⁻</text>\n    <text x=\"55\" y=\"95\" font-size=\"9.5\" font-weight=\"700\" fill=\"#0f172a\">M(q̇⁺ − q̇⁻) + JᵀΛ = 0,   ΔE ≤ 0</text>\n  </svg>"
    },
    "unilateral-hybrid-systems": {
      "id": "unilateral-hybrid-systems",
      "name": "Unilateral Constraints (Rope Slack vs. Taut) & Hybrid Mode Switching",
      "category": "Contact & Impacts",
      "badge": "Hybrid Dynamics",
      "shortSummary": "Switching between constrained (taut/contact) and unconstrained (slack/flight) modes using tension/normal force and gap guards.",
      "formula": "$$\\text{Taut } \\to \\text{ Slack Guard: } T(t) = 0 \\; (\\dot{T} < 0), \\qquad \\text{Slack } \\to \\text{ Taut Guard: } g(\\mathbf{q}) = 0 \\; (\\dot{g} > 0)$$",
      "explanation": "A flexible rope or a floor contact is a <strong>unilateral constraint</strong>: a rope can only pull in tension ($T \\ge 0$) and a floor can only push upward ($\\lambda_N \\ge 0$). If you simulate a rope as permanently taut ($g(\\mathbf{q}) = 0$ always), whenever $T(t)$ drops below zero ($T < 0$), the mathematical constraint acts like a rigid compressive strut pushing the masses apart—which is unphysical! A physical hybrid model monitors $T(t)$ in the <strong>Taut Mode</strong> and switches to the unconstrained <strong>Slack Mode</strong> the instant $T$ crosses zero going down; then in the Slack Mode it monitors $g(\\mathbf{q}) < 0$ and triggers the <strong>Plastic Impact Map</strong> the instant $g(\\mathbf{q})$ crosses zero going up.",
      "examTrap": "Why is total energy $E(t) = T + V$ constant inside the Taut Mode AND constant inside the Slack Mode, yet drops in a staircase pattern over time? Because both modes are conservative, and mechanical energy is dissipated ONLY at the discrete instants when the slack rope snaps taut (plastic catch $\\Delta E < 0$)!",
      "lectureRef": {
        "number": 20,
        "title": "Lec 20: Simulating Impacts and Hybrid Dynamical Systems",
        "url": "https://www.youtube.com/watch?v=Pz5SAUdpZt8"
      },
      "furtherReading": [
        {
          "label": "Complementarity & Unilateral Contact Mechanics Overview",
          "url": "https://en.wikipedia.org/wiki/Linear_complementarity_problem"
        },
        {
          "label": "LibreTexts: Strings, Pulleys & Unilateral Constraints",
          "url": "https://phys.libretexts.org/Bookshelves/Classical_Mechanics"
        }
      ],
      "svgIllustration": "<svg viewBox=\"0 0 320 110\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Hybrid Automaton Switching Between Taut and Slack Modes\">\n    <rect x=\"6\" y=\"6\" width=\"308\" height=\"98\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#93c5fd\" stroke-width=\"1.4\"/>\n    <!-- Mode 1: Taut -->\n    <rect x=\"20\" y=\"28\" width=\"102\" height=\"54\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.8\"/>\n    <text x=\"34\" y=\"49\" font-size=\"10.5\" font-weight=\"800\" fill=\"#1e40af\">TAUT MODE</text>\n    <text x=\"32\" y=\"66\" font-size=\"9.5\" font-weight=\"700\" fill=\"#1e3a8a\">g(q)=0, T(t) &gt; 0</text>\n    <!-- Mode 2: Slack -->\n    <rect x=\"198\" y=\"28\" width=\"102\" height=\"54\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.8\"/>\n    <text x=\"210\" y=\"49\" font-size=\"10.5\" font-weight=\"800\" fill=\"#92400e\">SLACK MODE</text>\n    <text x=\"212\" y=\"66\" font-size=\"9.5\" font-weight=\"700\" fill=\"#78350f\">g(q) &lt; 0, T = 0</text>\n    <!-- Top transition arrow -->\n    <path d=\"M 122 38 Q 160 18 198 38\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"2\"/>\n    <polygon points=\"198,38 189,33 191,41\" fill=\"#e11d48\"/>\n    <text x=\"132\" y=\"24\" font-size=\"9\" font-weight=\"800\" fill=\"#be123c\">Guard: T = 0↓</text>\n    <!-- Bottom transition arrow -->\n    <path d=\"M 198 72 Q 160 92 122 72\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2\"/>\n    <polygon points=\"122,72 131,77 129,69\" fill=\"#059669\"/>\n    <text x=\"124\" y=\"96\" font-size=\"9\" font-weight=\"800\" fill=\"#047857\">Catch: g = 0↑ (Impact)</text>\n  </svg>"
    }
  },
  "formulaRecipes": [
    {
      "id": "recipe-lagrangian",
      "category": "Lagrangian Mechanics (Minimal Coordinates)",
      "color": "#4f46e5",
      "whenToUse": "Problem gives independent generalized coordinates $\\mathbf{q}$ (e.g., cart position + pendulum angles) and asks for $T$, $V$, $\\mathbf{Q}$, or equations of motion $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}$.",
      "governingEquations": [
        "$$\\mathbf{r}_i = \\mathbf{r}_{\\text{base}} + \\mathbf{r}_{\\text{rel}}, \\qquad \\dot{\\mathbf{r}}_i = \\frac{\\partial \\mathbf{r}_i}{\\partial \\mathbf{q}}\\dot{\\mathbf{q}}$$",
        "$$T = \\sum_i \\frac{1}{2}m_i(\\|\\dot{\\mathbf{r}}_i\\|^2) = \\frac{1}{2}\\dot{\\mathbf{q}}^T\\mathbf{M}(\\mathbf{q})\\dot{\\mathbf{q}}, \\qquad V = \\sum_i m_i g z_i + \\sum_s \\frac{1}{2}k_s(\\Delta \\ell_s)^2$$",
        "$$\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}_j}\\right) - \\frac{\\partial L}{\\partial q_j} = Q_j, \\qquad Q_j = \\sum_k \\mathbf{F}_k^{\\text{nc}} \\cdot \\frac{\\partial \\mathbf{r}_k}{\\partial q_j}$$"
      ],
      "steps": [
        "Write each point mass's absolute position $\\mathbf{r}_i(\\mathbf{q})$ in the fixed inertial frame.",
        "Differentiate with respect to time using the chain rule to get $\\dot{\\mathbf{r}}_i(\\mathbf{q}, \\dot{\\mathbf{q}})$, and expand $\\|\\dot{\\mathbf{r}}_i\\|^2 = \\dot{x}_i^2 + \\dot{y}_i^2 + \\dot{z}_i^2$.",
        "Assemble $T = \\sum \\frac{1}{2}m_i \\|\\dot{\\mathbf{r}}_i\\|^2$ and $V$ (remembering $+z$ or $+y$ upward convention).",
        "Read off the symmetric mass matrix $\\mathbf{M}(\\mathbf{q})$ from the quadratic velocity terms: $M_{ab}$ is the coefficient of $\\frac{1}{2}\\dot{q}_a^2$ on the diagonal, and half the coefficient of $\\dot{q}_a\\dot{q}_b$ (i.e., the coefficient of $\\dot{q}_a\\dot{q}_b$) on the off-diagonal.",
        "Compute $Q_j$ from virtual work of non-conservative forces (external shakers, viscous friction $-b\\dot{x}$) only."
      ]
    },
    {
      "id": "recipe-constrained-dae",
      "category": "Constrained Systems & Baumgarte Stabilization",
      "color": "#7c3aed",
      "whenToUse": "Problem uses maximal coordinates $\\mathbf{q}$ with a holonomic constraint $g(\\mathbf{q}) = 0$ (rigid rod, rope over pulley, sliding track) and asks for $\\mathbf{J}$, $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$, $\\lambda$, or Baumgarte stabilization.",
      "governingEquations": [
        "$$g(\\mathbf{q}) = 0, \\qquad \\mathbf{J}(\\mathbf{q}) = \\frac{\\partial g}{\\partial \\mathbf{q}}, \\qquad \\dot{g} = \\mathbf{J}\\dot{\\mathbf{q}} = 0$$",
        "$$\\ddot{g} = \\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0 \\quad \\xrightarrow{\\text{Baumgarte}} \\quad \\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\zeta\\omega_B\\dot{g} - \\omega_B^2 g$$",
        "$$\\begin{bmatrix} \\mathbf{M} & -\\mathbf{J}^T \\\\ \\mathbf{J} & \\mathbf{0} \\end{bmatrix} \\begin{bmatrix} \\ddot{\\mathbf{q}} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{F} \\\\ -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\zeta\\omega_B\\dot{g} - \\omega_B^2 g \\end{bmatrix}$$"
      ],
      "steps": [
        "Write the scalar constraint $g(\\mathbf{q}) = 0$ (use $\\frac{1}{2}(\\|\\mathbf{r}_b - \\mathbf{r}_a\\|^2 - \\ell^2) = 0$ for rigid rods so factors of 2 cancel).",
        "Differentiate $g(\\mathbf{q})$ with respect to each coordinate $q_k$ to form the $1 \\times n$ row vector $\\mathbf{J} = \\partial g/\\partial \\mathbf{q}$.",
        "Differentiate $\\mathbf{J}(\\mathbf{q})$ with respect to time to get $\\dot{\\mathbf{J}}$, then multiply by $\\dot{\\mathbf{q}}$ to simplify the scalar $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$.",
        "Form the diagonal/block mass matrix $\\mathbf{M}$ and unconstrained force vector $\\mathbf{F} = -\\nabla_{\\mathbf{q}}V + \\mathbf{Q}_{\\text{nc}}$.",
        "To solve for $\\lambda$ explicitly by hand: substitute $\\ddot{\\mathbf{q}} = \\mathbf{M}^{-1}(\\mathbf{F} + \\mathbf{J}^T\\lambda)$ into $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ to obtain $\\lambda = -(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{F} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}})$."
      ]
    },
    {
      "id": "recipe-impact-map",
      "category": "Contact, Plastic Catch & Restitution Impacts",
      "color": "#0d9488",
      "whenToUse": "A slack rope snaps taut or a body hits a rigid surface/stop, and the exam asks for the impact map, impulse $\\Lambda$, post-impact velocity $\\dot{\\mathbf{q}}^+$, or energy loss $\\Delta E$.",
      "governingEquations": [
        "$$\\begin{bmatrix} \\mathbf{M} & \\mathbf{J}^T \\\\ \\mathbf{J} & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{\\mathbf{q}}^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{M}\\dot{\\mathbf{q}}^- \\\\ -e\\,\\mathbf{J}\\dot{\\mathbf{q}}^- \\end{bmatrix} \\quad (e = 0 \\text{ for plastic catch})$$",
        "$$\\Lambda = (1+e)(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}\\mathbf{J}\\dot{\\mathbf{q}}^-, \\qquad \\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- - \\mathbf{M}^{-1}\\mathbf{J}^T\\Lambda$$",
        "$$\\Delta E = T^+ - T^- = -\\frac{1}{2}(1 - e^2)(\\mathbf{J}\\dot{\\mathbf{q}}^-)^T (\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1} (\\mathbf{J}\\dot{\\mathbf{q}}^-) \\le 0$$"
      ],
      "steps": [
        "Write the impulse-momentum balance $\\mathbf{M}\\dot{\\mathbf{q}}^+ + \\mathbf{J}^T\\Lambda = \\mathbf{M}\\dot{\\mathbf{q}}^-$ (or $-\\mathbf{J}^T\\Lambda$ if $\\Lambda$ is defined in the $+\\mathbf{J}^T$ direction) and the post-impact constraint $\\mathbf{J}\\dot{\\mathbf{q}}^+ = -e\\,\\mathbf{J}\\dot{\\mathbf{q}}^-$.",
        "Solve the top row for $\\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- - \\mathbf{M}^{-1}\\mathbf{J}^T\\Lambda$ and plug into the bottom row.",
        "Compute the scalar/matrix Delassus effective inverse mass $G = \\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T$ and invert it to get $\\Lambda$.",
        "Substitute $\\Lambda$ back into $\\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- - \\mathbf{M}^{-1}\\mathbf{J}^T\\Lambda$ to obtain the projection matrix form of $\\dot{\\mathbf{q}}^+$.",
        "Evaluate $\\Delta E = \\frac{1}{2}(\\dot{\\mathbf{q}}^+)^T\\mathbf{M}\\dot{\\mathbf{q}}^+ - \\frac{1}{2}(\\dot{\\mathbf{q}}^-)^T\\mathbf{M}\\dot{\\mathbf{q}}^-$ using $\\mathbf{J}\\dot{\\mathbf{q}}^+ = 0$ (for $e=0$) to simplify cleanly to $-\\frac{1}{2}\\Lambda^T(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)\\Lambda$."
      ]
    }
  ],
  "problems": [
    {
      "id": "hw2-p1-min",
      "code": "HW 2 • Problem 1 (a–c)",
      "title": "3D Spherical Pendulum on a Shaken Cart (Minimal Coordinates)",
      "subtitle": "Kinematics, Kinetic & Potential Energy ($T, V$), Generalized Forces $\\mathbf{Q}$, Manipulator Form & Drift Offset",
      "sourceTag": "Homework 2",
      "category": "Lagrangian Mechanics",
      "difficulty": "Core Exam Standard",
      "estimatedMinutes": 20,
      "lectureRefs": [
        10,
        11,
        12
      ],
      "conceptTags": [
        "generalized-coordinates",
        "kinetic-potential-energy",
        "generalized-forces",
        "manipulator-equation"
      ],
      "parameters": [
        {
          "symbol": "$M = 2\\text{ kg}$",
          "desc": "Cart mass on horizontal $x$–$y$ plane"
        },
        {
          "symbol": "$m = 0.5\\text{ kg},\\; \\ell = 0.5\\text{ m}$",
          "desc": "Pendulum point mass & massless rod length"
        },
        {
          "symbol": "$b = 2\\text{ N}\\cdot\\text{s/m}$",
          "desc": "Viscous ground friction in both $x$ and $y$"
        },
        {
          "symbol": "$\\mathbf{F}(t) = F_0[\\sin\\Omega_1 t,\\, \\sin\\Omega_2 t,\\, 0]^T$",
          "desc": "Shaker force ($F_0=2\\text{ N},\\, \\Omega_1=4,\\, \\Omega_2=5\\text{ rad/s}$)"
        },
        {
          "symbol": "$\\mathbf{q} = [x,\\, y,\\, \\alpha,\\, \\beta]^T$",
          "desc": "Minimal generalized coordinates (4 DOF)"
        }
      ],
      "prompt": "A cart of mass $M$ rolls on the horizontal $x$–$y$ plane. The ground resists its motion with viscous friction of coefficient $b$ in both directions. A pendulum, modeled as a point mass $m$ on a massless rod of length $\\ell$, hangs from the cart by a frictionless spherical joint. The $z$-axis points vertically upward. A shaker applies the horizontal force $\\mathbf{F}(t) = F_0 [\\sin\\Omega_1 t,\\, \\sin\\Omega_2 t,\\, 0]^T$ to the cart.<br><br>\n      Use the minimal generalized coordinates $\\mathbf{q} = [x,\\, y,\\, \\alpha,\\, \\beta]^T$, where $(x, y)$ is the cart position and the bob position relative to the cart is:\n      $$\\mathbf{r}_{\\text{rel}} = \\ell \\begin{bmatrix} \\cos\\beta\\sin\\alpha \\\\ \\sin\\beta \\\\ -\\cos\\beta\\cos\\alpha \\end{bmatrix}$$\n      <strong>Your Goal:</strong> By hand, derive (1) the bob's absolute position $\\mathbf{r}_b$ and velocity $\\dot{\\mathbf{r}}_b$, (2) the total kinetic energy $T$ and potential energy $V$, (3) the generalized force vector $\\mathbf{Q} = [Q_x, Q_y, Q_\\alpha, Q_\\beta]^T$, and (4) the structure of the equations of motion $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$ along with the steady-state cart drift offsets in $x$ and $y$.",
      "svgDiagram": "<svg viewBox=\"0 0 420 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"3D pendulum hanging from a cart on the x-y plane\">\n        <defs>\n          <marker id=\"arr-indigo\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n            <path d=\"M 0 1.5 L 10 5 L 0 8.5 z\" fill=\"#4f46e5\"/>\n          </marker>\n          <marker id=\"arr-rose\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n            <path d=\"M 0 1.5 L 10 5 L 0 8.5 z\" fill=\"#e11d48\"/>\n          </marker>\n          <marker id=\"arr-slate\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n            <path d=\"M 0 1.5 L 10 5 L 0 8.5 z\" fill=\"#475569\"/>\n          </marker>\n        </defs>\n        <!-- Perspective Horizontal x-y Plane -->\n        <polygon points=\"85,45 375,45 315,105 25,105\" fill=\"#eef2ff\" stroke=\"#a5b4fc\" stroke-width=\"1.5\"/>\n        <!-- Coordinate Axes -->\n        <line x1=\"65\" y1=\"90\" x2=\"115\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1.8\" marker-end=\"url(#arr-slate)\"/>\n        <text x=\"121\" y=\"94\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">x</text>\n        <line x1=\"65\" y1=\"90\" x2=\"92\" y2=\"63\" stroke=\"#475569\" stroke-width=\"1.8\" marker-end=\"url(#arr-slate)\"/>\n        <text x=\"97\" y=\"62\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">y</text>\n        <line x1=\"65\" y1=\"90\" x2=\"65\" y2=\"35\" stroke=\"#475569\" stroke-width=\"1.8\" marker-end=\"url(#arr-slate)\"/>\n        <text x=\"61\" y=\"28\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">z</text>\n        <!-- Origin O -->\n        <circle cx=\"170\" cy=\"70\" r=\"3\" fill=\"#0f172a\"/>\n        <text x=\"156\" y=\"67\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">O</text>\n        <!-- 3D Cart M -->\n        <polygon points=\"195,70 250,70 265,55 210,55\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.6\"/>\n        <rect x=\"195\" y=\"70\" width=\"55\" height=\"22\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1.6\"/>\n        <polygon points=\"250,70 265,55 265,77 250,92\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.6\"/>\n        <text x=\"215\" y=\"85\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\">M</text>\n        <text x=\"272\" y=\"96\" font-size=\"10\" fill=\"#475569\">viscous friction b</text>\n        <!-- Shaker Force F(t) -->\n        <line x1=\"195\" y1=\"81\" x2=\"145\" y2=\"88\" stroke=\"#e11d48\" stroke-width=\"2.2\" marker-end=\"url(#arr-rose)\"/>\n        <text x=\"135\" y=\"102\" font-size=\"12\" font-weight=\"800\" fill=\"#be123c\">F(t)</text>\n        <!-- Spherical Joint on Cart -->\n        <circle cx=\"225\" cy=\"84\" r=\"4\" fill=\"#ffffff\" stroke=\"#1e3a8a\" stroke-width=\"1.8\"/>\n        <!-- Vertical Reference Line & Projection Triangle -->\n        <line x1=\"225\" y1=\"84\" x2=\"225\" y2=\"215\" stroke=\"#94a3b8\" stroke-dasharray=\"4,4\" stroke-width=\"1.4\"/>\n        <line x1=\"225\" y1=\"84\" x2=\"270\" y2=\"205\" stroke=\"#64748b\" stroke-dasharray=\"3,3\" stroke-width=\"1.3\"/>\n        <line x1=\"270\" y1=\"205\" x2=\"305\" y2=\"188\" stroke=\"#64748b\" stroke-dasharray=\"3,3\" stroke-width=\"1.3\"/>\n        <!-- Angles alpha and beta -->\n        <path d=\"M 225 138 A 54 54 0 0 0 245 135\" fill=\"none\" stroke=\"#4f46e5\" stroke-width=\"1.6\" marker-end=\"url(#arr-indigo)\"/>\n        <text x=\"230\" y=\"153\" font-size=\"12\" font-style=\"italic\" font-weight=\"700\" fill=\"#4f46e5\">α</text>\n        <path d=\"M 248 146 A 62 62 0 0 0 266 138\" fill=\"none\" stroke=\"#0d9488\" stroke-width=\"1.6\"/>\n        <text x=\"262\" y=\"157\" font-size=\"12\" font-style=\"italic\" font-weight=\"700\" fill=\"#0d9488\">β</text>\n        <!-- Pendulum Rod & Bob m -->\n        <line x1=\"225\" y1=\"84\" x2=\"305\" y2=\"188\" stroke=\"#0f172a\" stroke-width=\"2.4\"/>\n        <text x=\"272\" y=\"135\" font-size=\"13\" font-style=\"italic\" font-weight=\"700\" fill=\"#0f172a\">ℓ</text>\n        <circle cx=\"305\" cy=\"188\" r=\"10\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/>\n        <text x=\"320\" y=\"193\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">m</text>\n        <!-- Gravity g -->\n        <line x1=\"365\" y1=\"135\" x2=\"365\" y2=\"175\" stroke=\"#0f172a\" stroke-width=\"1.8\" marker-end=\"url(#arr-slate)\"/>\n        <text x=\"373\" y=\"160\" font-size=\"12\" font-style=\"italic\" font-weight=\"700\" fill=\"#0f172a\">g</text>\n      </svg>",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Inertial Position Vector $\\mathbf{r}_b$ of the Pendulum Bob",
          "badge": "Step 1 • Kinematics",
          "goal": "Write the 3D position vector of the cart $\\mathbf{r}_{\\text{cart}}$ and combine it with the relative rod vector $\\mathbf{r}_{\\text{rel}}$ to obtain the bob's absolute position $\\mathbf{r}_b(\\mathbf{q})$. ",
          "intuition": "Lagrange's equations require kinetic and potential energy measured in a fixed <strong>inertial reference frame</strong>. Since $(x, y)$ gives the cart's position on the horizontal $z=0$ plane and $\\mathbf{r}_{\\text{rel}}(\\alpha, \\beta)$ gives the bob's offset from the cart's spherical joint, we add them vectorially.",
          "conceptLinks": [
            "generalized-coordinates"
          ],
          "hint1": "Write $\\mathbf{r}_{\\text{cart}} = [x,\\, y,\\, 0]^T$ because the cart is constrained to roll on the horizontal $x$–$y$ plane ($z_{\\text{cart}} = 0$).",
          "hint2": "Add $\\mathbf{r}_{\\text{cart}} + \\mathbf{r}_{\\text{rel}}$ component-by-component. Notice that only the $x$ and $y$ components pick up the cart coordinates, while $z_b$ comes purely from $\\mathbf{r}_{\\text{rel}}$.",
          "checkpoint": {
            "question": "Which expression correctly gives the bob's inertial position vector $\\mathbf{r}_b(\\mathbf{q})$?",
            "options": [
              "$$\\mathbf{r}_b = \\begin{bmatrix} x + \\ell\\cos\\beta\\cos\\alpha \\\\ y + \\ell\\sin\\beta \\\\ \\ell\\cos\\beta\\sin\\alpha \\end{bmatrix}$$",
              "$$\\mathbf{r}_b = \\begin{bmatrix} \\ell\\cos\\beta\\sin\\alpha \\\\ \\ell\\sin\\beta \\\\ -\\ell\\cos\\beta\\cos\\alpha \\end{bmatrix}$$",
              "$$\\mathbf{r}_b = \\begin{bmatrix} x + \\ell\\cos\\beta\\sin\\alpha \\\\ y + \\ell\\sin\\beta \\\\ -\\ell\\cos\\beta\\cos\\alpha \\end{bmatrix}$$",
              "$$\\mathbf{r}_b = \\begin{bmatrix} x\\cos\\beta\\sin\\alpha \\\\ y\\sin\\beta \\\\ -\\ell\\cos\\beta\\cos\\alpha \\end{bmatrix}$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: Check the trigonometric components given in the problem statement: $x_{\\text{rel}}$ has $\\sin\\alpha$ and $z_{\\text{rel}}$ is $-\\ell\\cos\\beta\\cos\\alpha$.",
              "Trap: That is only $\\mathbf{r}_{\\text{rel}}$ (position relative to the moving cart). Using $\\mathbf{r}_{\\text{rel}}$ alone would ignore the cart's motion when computing the bob's kinetic energy!",
              "Correct! Adding $\\mathbf{r}_{\\text{cart}} = [x, y, 0]^T$ to $\\mathbf{r}_{\\text{rel}}$ gives the exact inertial coordinates of the bob.",
              "Trap: Position vectors add ($x + x_{\\text{rel}}$); they do not multiply!"
            ]
          },
          "derivation": "The cart moves in the horizontal plane $z = 0$, so its inertial position vector is:\n          $$\\mathbf{r}_{\\text{cart}} = \\begin{bmatrix} x \\\\ y \\\\ 0 \\end{bmatrix}$$\n          Adding the relative spherical pendulum vector $\\mathbf{r}_{\\text{rel}}$ yields the bob's inertial position vector:\n          $$\\mathbf{r}_b(\\mathbf{q}) = \\mathbf{r}_{\\text{cart}} + \\mathbf{r}_{\\text{rel}} = \\begin{bmatrix} x + \\ell\\cos\\beta\\sin\\alpha \\\\ y + \\ell\\sin\\beta \\\\ -\\ell\\cos\\beta\\cos\\alpha \\end{bmatrix}$$"
        },
        {
          "stepNumber": 2,
          "title": "Inertial Velocity Vector $\\dot{\\mathbf{r}}_b$ via the Multivariable Chain Rule",
          "badge": "Step 2 • Velocity Kinematics",
          "goal": "Differentiate $\\mathbf{r}_b(\\mathbf{q})$ with respect to time $t$ to find the bob's absolute velocity vector $\\dot{\\mathbf{r}}_b(\\mathbf{q}, \\dot{\\mathbf{q}})$ and simplify the relative speed squared.",
          "intuition": "Each angle $\\alpha(t)$ and $\\beta(t)$ is a function of time! When differentiating terms like $\\cos\\beta\\sin\\alpha$, you must apply both the <strong>product rule</strong> and the <strong>chain rule</strong>: $\\frac{d}{dt}(\\cos\\beta\\sin\\alpha) = -\\dot{\\beta}\\sin\\beta\\sin\\alpha + \\dot{\\alpha}\\cos\\beta\\cos\\alpha$.",
          "conceptLinks": [
            "generalized-coordinates",
            "kinetic-potential-energy"
          ],
          "hint1": "Differentiate each row of $\\mathbf{r}_b$ with respect to time: $\\dot{\\mathbf{r}}_b = \\frac{\\partial \\mathbf{r}_b}{\\partial x}\\dot{x} + \\frac{\\partial \\mathbf{r}_b}{\\partial y}\\dot{y} + \\frac{\\partial \\mathbf{r}_b}{\\partial \\alpha}\\dot{\\alpha} + \\frac{\\partial \\mathbf{r}_b}{\\partial \\beta}\\dot{\\beta}$.",
          "hint2": "In the $z$-component, $\\frac{d}{dt}(-\\ell\\cos\\beta\\cos\\alpha) = \\ell(\\dot{\\beta}\\sin\\beta\\cos\\alpha + \\dot{\\alpha}\\cos\\beta\\sin\\alpha)$ because differentiating $\\cos$ introduces a minus sign that cancels the leading minus sign!",
          "checkpoint": {
            "question": "What is the time derivative $\\dot{\\mathbf{r}}_b$ of the bob's position vector?",
            "options": [
              "$$\\dot{\\mathbf{r}}_b = \\begin{bmatrix} \\dot{x} + \\ell\\cos\\beta\\cos\\alpha \\\\ \\dot{y} + \\ell\\cos\\beta \\\\ \\ell\\sin\\beta\\sin\\alpha \\end{bmatrix}$$",
              "$$\\dot{\\mathbf{r}}_b = \\begin{bmatrix} \\dot{x} + \\ell(\\dot{\\alpha}\\cos\\beta\\cos\\alpha - \\dot{\\beta}\\sin\\beta\\sin\\alpha) \\\\ \\dot{y} + \\ell\\dot{\\beta}\\cos\\beta \\\\ \\ell(\\dot{\\alpha}\\cos\\beta\\sin\\alpha + \\dot{\\beta}\\sin\\beta\\cos\\alpha) \\end{bmatrix}$$",
              "$$\\dot{\\mathbf{r}}_b = \\begin{bmatrix} \\dot{x} - \\ell\\dot{\\beta}\\sin\\beta\\cos\\alpha \\\\ \\dot{y} + \\ell\\dot{\\beta}\\cos\\beta \\\\ -\\ell\\dot{\\alpha}\\sin\\beta\\sin\\alpha \\end{bmatrix}$$",
              "$$\\dot{\\mathbf{r}}_b = \\begin{bmatrix} \\dot{x} + \\ell(\\dot{\\alpha}\\cos\\beta\\cos\\alpha + \\dot{\\beta}\\sin\\beta\\sin\\alpha) \\\\ \\dot{y} - \\ell\\dot{\\beta}\\cos\\beta \\\\ -\\ell(\\dot{\\alpha}\\cos\\beta\\sin\\alpha + \\dot{\\beta}\\sin\\beta\\cos\\alpha) \\end{bmatrix}$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: You forgot the chain-rule angular velocities $\\dot{\\alpha}$ and $\\dot{\\beta}$, as well as the product rule on $\\cos\\beta\\sin\\alpha$!",
              "Correct! Both product rule and chain rule (multiplying by $\\dot{\\alpha}$ and $\\dot{\\beta}$) are properly applied to all three components.",
              "Trap: Each product of ($\\beta$-term)($\\alpha$-term) in $x_b$ and $z_b$ requires the two-term product rule.",
              "Trap: Watch the signs! $\\frac{d}{dt}(\\cos\\beta) = -\\dot{\\beta}\\sin\\beta$, and $\\frac{d}{dt}(-\\cos\\beta\\cos\\alpha)$ has two positive terms."
            ]
          },
          "derivation": "Applying the product rule and chain rule to each component of $\\mathbf{r}_b$:\n          $$\\dot{\\mathbf{r}}_b = \\begin{bmatrix} \\dot{x}_b \\\\ \\dot{y}_b \\\\ \\dot{z}_b \\end{bmatrix} = \\begin{bmatrix} \\dot{x} + \\ell\\left(\\dot{\\alpha}\\cos\\beta\\cos\\alpha - \\dot{\\beta}\\sin\\beta\\sin\\alpha\\right) \\\\ \\dot{y} + \\ell\\dot{\\beta}\\cos\\beta \\\\ \\ell\\left(\\dot{\\alpha}\\cos\\beta\\sin\\alpha + \\dot{\\beta}\\sin\\beta\\cos\\alpha\\right) \\end{bmatrix}$$\n          Notice how cleanly the relative velocity squared $\\|\\dot{\\mathbf{r}}_{\\text{rel}}\\|^2$ simplifies via $\\cos^2\\alpha + \\sin^2\\alpha = 1$:\n          $$\\|\\dot{\\mathbf{r}}_{\\text{rel}}\\|^2 = \\ell^2\\dot{\\alpha}^2\\cos^2\\beta(\\cos^2\\alpha + \\sin^2\\alpha) + \\ell^2\\dot{\\beta}^2\\left[\\sin^2\\beta(\\sin^2\\alpha + \\cos^2\\alpha) + \\cos^2\\beta\\right] = \\ell^2(\\dot{\\alpha}^2\\cos^2\\beta + \\dot{\\beta}^2)$$\n          (The $\\dot{\\alpha}\\dot{\\beta}$ cross-terms in $x$ and $z$ have opposite signs and cancel completely!)"
        },
        {
          "stepNumber": 3,
          "title": "Total Kinetic Energy $T$ and Potential Energy $V$",
          "badge": "Step 3 • Energies $T$ & $V$",
          "goal": "Write the system kinetic energy $T = \\frac{1}{2}M\\|\\dot{\\mathbf{r}}_{\\text{cart}}\\|^2 + \\frac{1}{2}m\\|\\dot{\\mathbf{r}}_b\\|^2$ and gravitational potential energy $V$.",
          "intuition": "Total kinetic energy is the sum of the cart's translational kinetic energy $\\frac{1}{2}M(\\dot{x}^2 + \\dot{y}^2)$ and the bob's translational kinetic energy $\\frac{1}{2}m(dot{x}_b^2 + \\dot{y}_b^2 + \\dot{z}_b^2)$. Because $+z$ points up and the cart remains at $z=0$, only the bob contributes to gravitational potential energy $V = mgz_b$.",
          "conceptLinks": [
            "kinetic-potential-energy"
          ],
          "hint1": "Write $T = \\frac{1}{2}M(\\dot{x}^2 + \\dot{y}^2) + \\frac{1}{2}m\\|\\dot{\\mathbf{r}}_b\\|^2$. You can leave $T$ in compact vector norm form $\\frac{1}{2}M(\\dot{x}^2+\\dot{y}^2) + \\frac{1}{2}m\\dot{\\mathbf{r}}_b^T\\dot{\\mathbf{r}}_b$ or expand it using $\\|\\dot{\\mathbf{r}}_{\\text{rel}}\\|^2 = \\ell^2(\\dot{\\alpha}^2\\cos^2\\beta + \\dot{\\beta}^2)$.",
          "hint2": "For $V$: since $z_b = -\\ell\\cos\\beta\\cos\\alpha$ and $+z$ is up, $V = mgz_b = -mg\\ell\\cos\\beta\\cos\\alpha$. Check that when $\\alpha = \\beta = 0$ (hanging straight down), $V = -mg\\ell$ is at its minimum!",
          "checkpoint": {
            "question": "Which pair of expressions correctly gives the expanded Kinetic Energy $T$ and Potential Energy $V$?",
            "options": [
              "$$T = \\frac{1}{2}(M+m)(\\dot{x}^2 + \\dot{y}^2) + \\frac{1}{2}m\\ell^2(\\dot{\\alpha}^2\\cos^2\\beta + \\dot{\\beta}^2), \\quad V = mg(x + y - \\ell\\cos\\beta\\cos\\alpha)$$",
              "$$T = \\frac{1}{2}M(\\dot{x}^2 + \\dot{y}^2) + \\frac{1}{2}m\\ell^2(\\dot{\\alpha}^2\\cos^2\\beta + \\dot{\\beta}^2), \\quad V = -mg\\ell\\cos\\beta\\cos\\alpha$$",
              "$$T = \\frac{1}{2}(M+m)(\\dot{x}^2 + \\dot{y}^2) + \\frac{1}{2}m\\ell^2(\\dot{\\alpha}^2 + \\dot{\\beta}^2), \\quad V = +mg\\ell\\cos\\beta\\cos\\alpha$$",
              "$$T = \\frac{1}{2}(M+m)(\\dot{x}^2 + \\dot{y}^2) + \\frac{1}{2}m\\ell^2(\\dot{\\alpha}^2\\cos^2\\beta + \\dot{\\beta}^2) + m\\ell\\dot{x}(\\dot{\\alpha}\\cos\\beta\\cos\\alpha - \\dot{\\beta}\\sin\\beta\\sin\\alpha) + m\\ell\\dot{y}\\dot{\\beta}\\cos\\beta, \\quad V = -mg\\ell\\cos\\beta\\cos\\alpha$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: Gravity acts vertically along $-z$, not along horizontal coordinates $x$ and $y$!",
              "Trap: You dropped the cart velocity contribution inside $\\|\\dot{\\mathbf{r}}_b\\|^2$! Since $\\dot{\\mathbf{r}}_b = \\dot{\\mathbf{r}}_{\\text{cart}} + \\dot{\\mathbf{r}}_{\\text{rel}}$, squaring it adds $\\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2)$ plus the cross terms $m(\\dot{\\mathbf{r}}_{\\text{cart}} \\cdot \\dot{\\mathbf{r}}_{\\text{rel}})$.",
              "Trap: $V$ must be negative ($-mg\\ell\\cos\\beta\\cos\\alpha$) when hanging below $z=0$, and the $\\dot{\\alpha}^2$ term is scaled by $\\cos^2\\beta$.",
              "Correct! It includes the combined cart+bob translational inertia $(M+m)$, the spherical angular kinetic energy, the cart-pendulum velocity coupling terms, and $V = -mg\\ell\\cos\\beta\\cos\\alpha$."
            ]
          },
          "derivation": "Summing the kinetic energy of the cart and the pendulum bob:\n          $$T = \\frac{1}{2}M(\\dot{x}^2 + \\dot{y}^2) + \\frac{1}{2}m\\|\\dot{\\mathbf{r}}_b\\|^2 = \\frac{1}{2}M(\\dot{x}^2 + \\dot{y}^2) + \\frac{1}{2}m\\left(\\dot{x}_b^2 + \\dot{y}_b^2 + \\dot{z}_b^2\\right)$$\n          Expanding $\\|\\dot{\\mathbf{r}}_b\\|^2 = \\|\\dot{\\mathbf{r}}_{\\text{cart}} + \\dot{\\mathbf{r}}_{\\text{rel}}\\|^2 = \\dot{x}^2 + \\dot{y}^2 + 2\\dot{\\mathbf{r}}_{\\text{cart}}\\cdot\\dot{\\mathbf{r}}_{\\text{rel}} + \\|\\dot{\\mathbf{r}}_{\\text{rel}}\\|^2$ gives:\n          $$T = \\frac{1}{2}(M+m)(\\dot{x}^2 + \\dot{y}^2) + \\frac{1}{2}m\\ell^2(\\dot{\\alpha}^2\\cos^2\\beta + \\dot{\\beta}^2) + m\\ell\\dot{x}(\\dot{\\alpha}\\cos\\beta\\cos\\alpha - \\dot{\\beta}\\sin\\beta\\sin\\alpha) + m\\ell\\dot{y}\\dot{\\beta}\\cos\\beta$$\n          With the gravitational datum at the horizontal plane $z = 0$ and $+z$ pointing upward, the potential energy is:\n          $$V = mgz_b = -mg\\ell\\cos\\beta\\cos\\alpha$$"
        },
        {
          "stepNumber": 4,
          "title": "Generalized Forces $\\mathbf{Q}$ from Shaker & Viscous Cart Friction",
          "badge": "Step 4 • Generalized Forces $\\mathbf{Q}$",
          "goal": "Find the non-conservative generalized force vector $\\mathbf{Q} = [Q_x, Q_y, Q_\\alpha, Q_\\beta]^T$ acting on the 4 equations of motion.",
          "intuition": "The shaker force $\\mathbf{F}(t) = [F_0\\sin\\Omega_1 t,\\, F_0\\sin\\Omega_2 t,\\, 0]^T$ and the viscous ground friction $\\mathbf{F}_{\\text{fric}} = [-b\\dot{x},\\, -b\\dot{y},\\, 0]^T$ act <strong>exclusively on the cart</strong> at position $\\mathbf{r}_{\\text{cart}} = [x, y, 0]^T$. The spherical joint is frictionless, and gravity is already inside $V(\\mathbf{q})$!",
          "conceptLinks": [
            "generalized-forces"
          ],
          "hint1": "Compute virtual work $\\delta W_{\\text{nc}} = (\\mathbf{F}(t) + \\mathbf{F}_{\\text{fric}}) \\cdot \\delta \\mathbf{r}_{\\text{cart}}$ where $\\delta \\mathbf{r}_{\\text{cart}} = [\\delta x,\\, \\delta y,\\, 0]^T$.",
          "hint2": "Match coefficients of $\\delta x, \\delta y, \\delta\\alpha, \\delta\\beta$ in $\\delta W_{\\text{nc}} = Q_x\\delta x + Q_y\\delta y + Q_\\alpha\\delta\\alpha + Q_\\beta\\delta\\beta$. Since $\\mathbf{r}_{\\text{cart}}$ does not depend on $\\alpha$ or $\\beta$, what are $Q_\\alpha$ and $Q_\\beta$?",
          "checkpoint": {
            "question": "What is the generalized force vector $\\mathbf{Q} = [Q_x,\\, Q_y,\\, Q_\\alpha,\\, Q_\\beta]^T$?",
            "options": [
              "$$\\mathbf{Q} = \\begin{bmatrix} F_0\\sin\\Omega_1 t - b\\dot{x} \\\\ F_0\\sin\\Omega_2 t - b\\dot{y} \\\\ 0 \\\\ 0 \\end{bmatrix}$$",
              "$$\\mathbf{Q} = \\begin{bmatrix} F_0\\sin\\Omega_1 t + b\\dot{x} \\\\ F_0\\sin\\Omega_2 t + b\\dot{y} \\\\ -mg\\ell\\sin\\alpha \\\\ -mg\\ell\\sin\\beta \\end{bmatrix}$$",
              "$$\\mathbf{Q} = \\begin{bmatrix} F_0\\sin\\Omega_1 t - b\\dot{x} \\\\ F_0\\sin\\Omega_2 t - b\\dot{y} \\\\ -b\\dot{\\alpha} \\\\ -b\\dot{\\beta} \\end{bmatrix}$$",
              "$$\\mathbf{Q} = \\begin{bmatrix} F_0\\sin\\Omega_1 t \\\\ F_0\\sin\\Omega_2 t \\\\ 0 \\\\ 0 \\end{bmatrix}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! Viscous friction opposes velocity ($-b\\dot{x}, -b\\dot{y}$) on the cart, and no non-conservative torques act on the frictionless spherical joint ($Q_\\alpha = Q_\\beta = 0$).",
              "Trap: Viscous damping opposes motion ($-b\\dot{x}$, not $+b\\dot{x}$), and gravity is already accounted for in $V(\\mathbf{q})$!",
              "Trap: The problem states that the spherical joint is frictionless—viscous friction $b$ acts only between the cart and the ground.",
              "Trap: Don't forget to include the cart's viscous ground friction $-b\\dot{x}$ and $-b\\dot{y}$ in $Q_x$ and $Q_y$!"
            ]
          },
          "derivation": "The total non-conservative force acting on the cart at $\\mathbf{r}_{\\text{cart}} = [x, y, 0]^T$ is:\n          $$\\mathbf{F}_{\\text{cart}}^{\\text{nc}} = \\mathbf{F}(t) + \\mathbf{F}_{\\text{fric}} = \\begin{bmatrix} F_0\\sin\\Omega_1 t - b\\dot{x} \\\\ F_0\\sin\\Omega_2 t - b\\dot{y} \\\\ 0 \\end{bmatrix}$$\n          Projecting onto each generalized coordinate $q_j \\in \\{x, y, \\alpha, \\beta\\}$ via $Q_j = \\mathbf{F}_{\\text{cart}}^{\\text{nc}} \\cdot \\frac{\\partial \\mathbf{r}_{\\text{cart}}}{\\partial q_j}$:\n          $$\\mathbf{Q} = \\begin{bmatrix} Q_x \\\\ Q_y \\\\ Q_\\alpha \\\\ Q_\\beta \\end{bmatrix} = \\begin{bmatrix} F_0\\sin\\Omega_1 t - b\\dot{x} \\\\ F_0\\sin\\Omega_2 t - b\\dot{y} \\\\ 0 \\\\ 0 \\end{bmatrix}$$"
        },
        {
          "stepNumber": 5,
          "title": "Manipulator Form $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}$ & Steady-State Drift Offset",
          "badge": "Step 5 • EOM & Physical Drift",
          "goal": "Extract the $4\\times 4$ symmetric mass matrix $\\mathbf{M}(\\mathbf{q})$ from $T$ and explain why the cart oscillates about a steady-state drift offset of $\\frac{F_0}{b\\Omega_1}$ in $x$ and $\\frac{F_0}{b\\Omega_2}$ in $y$.",
          "intuition": "By writing $T = \\frac{1}{2}\\dot{\\mathbf{q}}^T\\mathbf{M}(\\mathbf{q})\\dot{\\mathbf{q}}$, we can read off every entry of $\\mathbf{M}(\\mathbf{q})$ directly without taking lengthy time derivatives first! Furthermore, because there are no horizontal springs attached to the cart, integrating the horizontal momentum equation from rest ($dot{x}(0)=0, x(0)=0$) with $\\int_0^t F_0\\sin(\\Omega_1\\tau)d\\tau = \\frac{F_0}{\\Omega_1}(1 - \\cos\\Omega_1 t)$ produces a non-zero positive mean displacement $\\bar{x} = \\frac{F_0}{b\\Omega_1}$.",
          "conceptLinks": [
            "manipulator-equation"
          ],
          "hint1": "Look at the quadratic velocity terms in $T$: the diagonal entries of $\\mathbf{M}(\\mathbf{q})$ are the coefficients of $\\frac{1}{2}\\dot{x}^2, \\frac{1}{2}\\dot{y}^2, \\frac{1}{2}\\dot{\\alpha}^2, \\frac{1}{2}\\dot{\\beta}^2$, and the off-diagonal entry $M_{ij}$ is the coefficient of $\\dot{q}_i\\dot{q}_j$.",
          "hint2": "Plug the given numbers ($F_0 = 2\\text{ N}, b = 2\\text{ N}\\cdot\\text{s/m}, \\Omega_1 = 4\\text{ rad/s}, \\Omega_2 = 5\\text{ rad/s}$) into $\\bar{x} = \\frac{F_0}{b\\Omega_1}$ and $\\bar{y} = \\frac{F_0}{b\\Omega_2}$.",
          "checkpoint": {
            "question": "What is the $4\\times 4$ mass matrix $\\mathbf{M}(\\mathbf{q})$ and the numerical steady-state drift offset $(\\bar{x}, \\bar{y})$?",
            "options": [
              "$$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M+m & 0 & \\frac{1}{2}m\\ell\\cos\\beta\\cos\\alpha & -\\frac{1}{2}m\\ell\\sin\\beta\\sin\\alpha \\\\ 0 & M+m & 0 & \\frac{1}{2}m\\ell\\cos\\beta \\\\ \\frac{1}{2}m\\ell\\cos\\beta\\cos\\alpha & 0 & m\\ell^2\\cos^2\\beta & 0 \\\\ -\\frac{1}{2}m\\ell\\sin\\beta\\sin\\alpha & \\frac{1}{2}m\\ell\\cos\\beta & 0 & m\\ell^2 \\end{bmatrix}, \\quad (\\bar{x}, \\bar{y}) = (0.50\\text{ m},\\, 0.40\\text{ m})$$",
              "$$\\mathbf{M}(\\mathbf{q}) = \\text{diag}(M, M, m\\ell^2, m\\ell^2), \\quad (\\bar{x}, \\bar{y}) = (0\\text{ m},\\, 0\\text{ m})$$",
              "$$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M+m & 0 & m\\ell\\cos\\beta\\cos\\alpha & -m\\ell\\sin\\beta\\sin\\alpha \\\\ 0 & M+m & 0 & m\\ell\\cos\\beta \\\\ m\\ell\\cos\\beta\\cos\\alpha & 0 & m\\ell^2\\cos^2\\beta & 0 \\\\ -m\\ell\\sin\\beta\\sin\\alpha & m\\ell\\cos\\beta & 0 & m\\ell^2 \\end{bmatrix}, \\quad (\\bar{x}, \\bar{y}) = (0.25\\text{ m},\\, 0.20\\text{ m})$$",
              "$$\\mathbf{M}(\\mathbf{q}) = \\text{diag}(M+m, M+m, m\\ell^2\\cos^2\\beta, m\\ell^2), \\quad (\\bar{x}, \\bar{y}) = (0.25\\text{ m},\\, 0.20\\text{ m})$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: Do not divide the cross-term coefficient by $2$! In $\\frac{1}{2}\\dot{\\mathbf{q}}^T\\mathbf{M}\\dot{\\mathbf{q}}$, the off-diagonal sum $\\frac{1}{2}(M_{13} + M_{31})\\dot{x}\\dot{\\alpha} = M_{13}\\dot{x}\\dot{\\alpha}$ already absorbs the $\\frac{1}{2}$.",
              "Trap: $\\mathbf{M}(\\mathbf{q})$ is not diagonal in minimal coordinates because cart translation accelerates the hanging bob!",
              "Correct! $\\mathbf{M}(\\mathbf{q})$ captures both the diagonal inertias and the cart-bob kinematic cross-coupling, and $\\frac{F_0}{b\\Omega_i}$ gives $(0.25\\text{ m}, 0.20\\text{ m})$.",
              "Trap: Dropping the off-diagonal coupling terms would decouple the pendulum from the shaking cart!"
            ]
          },
          "derivation": "From $T = \\frac{1}{2}\\dot{\\mathbf{q}}^T\\mathbf{M}(\\mathbf{q})\\dot{\\mathbf{q}}$ with $M_{ij} = \\frac{\\partial^2 T}{\\partial \\dot{q}_i \\partial \\dot{q}_j}$, the symmetric $4\\times 4$ mass matrix is:\n          $$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M+m & 0 & m\\ell\\cos\\beta\\cos\\alpha & -m\\ell\\sin\\beta\\sin\\alpha \\\\ 0 & M+m & 0 & m\\ell\\cos\\beta \\\\ m\\ell\\cos\\beta\\cos\\alpha & 0 & m\\ell^2\\cos^2\\beta & 0 \\\\ -m\\ell\\sin\\beta\\sin\\alpha & m\\ell\\cos\\beta & 0 & m\\ell^2 \\end{bmatrix}$$\n          And the right-hand side vector $\\mathbf{f}(\\mathbf{q}, \\dot{\\mathbf{q}}, t) = \\mathbf{Q} - \\dot{\\mathbf{M}}\\dot{\\mathbf{q}} + \\left(\\frac{\\partial (T - V)}{\\partial \\mathbf{q}}\\right)^T$ places the Euler-Lagrange equations in manipulator form $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$.<br><br>\n          <strong>Steady-State Cart Drift Offset:</strong> Because the shaker force starts as $+F_0\\sin(\\Omega_i t) \\ge 0$ at $t=0$ with zero initial velocity, the first half-cycle pushes the cart in the $+x$ and $+y$ directions before reversing. Integrating $b\\dot{x} \\approx F_0\\sin(\\Omega_1 t)$ from $x(0)=0$ yields $x(t) \\approx \\frac{F_0}{b\\Omega_1}(1 - \\cos\\Omega_1 t)$, which oscillates about the fixed offset:\n          $$\\bar{x} = \\frac{F_0}{b\\Omega_1} = \\frac{2}{2(4)} = 0.25\\text{ m}, \\qquad \\bar{y} = \\frac{F_0}{b\\Omega_2} = \\frac{2}{2(5)} = 0.20\\text{ m}$$"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Hand Derivation — HW 2 Problem 1 (a–c)",
        "items": [
          {
            "label": "(a) Bob Position $\\mathbf{r}_b$ & Velocity $\\dot{\\mathbf{r}}_b$",
            "math": "$$\\mathbf{r}_b = \\begin{bmatrix} x + \\ell\\cos\\beta\\sin\\alpha \\\\ y + \\ell\\sin\\beta \\\\ -\\ell\\cos\\beta\\cos\\alpha \\end{bmatrix}, \\qquad \\dot{\\mathbf{r}}_b = \\begin{bmatrix} \\dot{x} + \\ell(\\dot{\\alpha}\\cos\\beta\\cos\\alpha - \\dot{\\beta}\\sin\\beta\\sin\\alpha) \\\\ \\dot{y} + \\ell\\dot{\\beta}\\cos\\beta \\\\ \\ell(\\dot{\\alpha}\\cos\\beta\\sin\\alpha + \\dot{\\beta}\\sin\\beta\\cos\\alpha) \\end{bmatrix}$$"
          },
          {
            "label": "(a) Kinetic Energy $T$ & Potential Energy $V$",
            "math": "$$T = \\frac{1}{2}(M+m)(\\dot{x}^2 + \\dot{y}^2) + \\frac{1}{2}m\\ell^2(\\dot{\\alpha}^2\\cos^2\\beta + \\dot{\\beta}^2) + m\\ell\\dot{x}(\\dot{\\alpha}\\cos\\beta\\cos\\alpha - \\dot{\\beta}\\sin\\beta\\sin\\alpha) + m\\ell\\dot{y}\\dot{\\beta}\\cos\\beta$$ $$V = -mg\\ell\\cos\\beta\\cos\\alpha$$"
          },
          {
            "label": "(b) Generalized Forces Vector $\\mathbf{Q}$",
            "math": "$$\\mathbf{Q} = \\begin{bmatrix} Q_x \\\\ Q_y \\\\ Q_\\alpha \\\\ Q_\\beta \\end{bmatrix} = \\begin{bmatrix} F_0\\sin\\Omega_1 t - b\\dot{x} \\\\ F_0\\sin\\Omega_2 t - b\\dot{y} \\\\ 0 \\\\ 0 \\end{bmatrix}$$"
          },
          {
            "label": "(c) Steady-State Cart Drift Offsets $(\\bar{x}, \\bar{y})$",
            "math": "$$\\bar{x} = \\frac{F_0}{b\\Omega_1} = 0.25\\text{ m}, \\qquad \\bar{y} = \\frac{F_0}{b\\Omega_2} = 0.20\\text{ m}$$"
          }
        ]
      }
    },
    {
      "id": "hw2-p1-max",
      "code": "HW 2 • Problem 1 (d–e)",
      "title": "3D Pendulum on a Shaken Cart in Maximal Coordinates (Holonomic Constraint & Baumgarte)",
      "subtitle": "Constraint Jacobian $\\mathbf{J}$, Convective Term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$, Lagrange Multiplier $\\lambda$ & Baumgarte Stabilization",
      "sourceTag": "Homework 2 (Grad / Core Exam)",
      "category": "Constrained Systems",
      "difficulty": "High-Yield Exam Topic",
      "estimatedMinutes": 20,
      "lectureRefs": [
        13,
        17,
        22
      ],
      "conceptTags": [
        "holonomic-constraints",
        "constraint-jacobian",
        "lagrange-multipliers",
        "baumgarte-stabilization"
      ],
      "parameters": [
        {
          "symbol": "$\\mathbf{q} = [x,\\, y,\\, x_b,\\, y_b,\\, z_b]^T$",
          "desc": "5 Maximal coordinates (cart $x,y$ + bob $x_b,y_b,z_b$)"
        },
        {
          "symbol": "$\\mathbf{r}_{\\text{cart}} = [x,\\, y,\\, 0]^T,\\; \\mathbf{r}_b = [x_b,\\, y_b,\\, z_b]^T$",
          "desc": "Inertial 3D positions of cart and bob"
        },
        {
          "symbol": "$g(\\mathbf{q}) = \\frac{1}{2}(\\|\\mathbf{r}_b - \\mathbf{r}_{\\text{cart}}\\|^2 - \\ell^2) = 0$",
          "desc": "Holonomic rigid-rod length constraint"
        },
        {
          "symbol": "$\\omega_B = 10\\text{ rad/s},\\; \\zeta = 1$",
          "desc": "Baumgarte stabilization parameters"
        }
      ],
      "prompt": "Redo the 3D pendulum on a shaken cart from Problem 1 using <strong>maximal coordinates</strong> $\\mathbf{q} = [x,\\, y,\\, x_b,\\, y_b,\\, z_b]^T \\in \\mathbb{R}^5$, where $(x, y)$ is the cart position in the horizontal plane and $(x_b, y_b, z_b)$ is the bob's 3D Cartesian position. Now the rigid massless rod of length $\\ell$ is enforced by the holonomic constraint:\n      $$g(\\mathbf{q}) = \\frac{1}{2}\\left(\\|\\mathbf{r}_b - \\mathbf{r}_{\\text{cart}}\\|^2 - \\ell^2\\right) = 0, \\qquad \\mathbf{r}_{\\text{cart}} = [x,\\, y,\\, 0]^T$$\n      <strong>Your Goal:</strong> (1) Expand $g(\\mathbf{q})$ in terms of the 5 coordinates, (2) derive the $1\\times 5$ constraint Jacobian $\\mathbf{J} = \\partial g/\\partial \\mathbf{q}$ by hand, (3) derive the scalar convective term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$, and (4) assemble the constrained equations of motion $\\mathbf{M}\\ddot{\\mathbf{q}} = \\mathbf{F} + \\mathbf{J}^T\\lambda$ together with the acceleration constraint $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\zeta\\omega_B\\dot{g} - \\omega_B^2 g$ in augmented block-matrix form.",
      "svgDiagram": "<svg viewBox=\"0 0 420 235\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Maximal coordinate representation of cart and 3D pendulum with rod constraint g(q)=0\">\n        <defs>\n          <marker id=\"arr-p\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n            <path d=\"M 0 1.5 L 10 5 L 0 8.5 z\" fill=\"#7c3aed\"/>\n          </marker>\n          <marker id=\"arr-t\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n            <path d=\"M 0 1.5 L 10 5 L 0 8.5 z\" fill=\"#0d9488\"/>\n          </marker>\n        </defs>\n        <rect x=\"15\" y=\"15\" width=\"390\" height=\"205\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n        <!-- Origin O -->\n        <circle cx=\"65\" cy=\"175\" r=\"4\" fill=\"#0f172a\"/>\n        <text x=\"48\" y=\"192\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\">O (0,0,0)</text>\n        <!-- Position vectors r_cart and r_b -->\n        <line x1=\"65\" y1=\"175\" x2=\"180\" y2=\"65\" stroke=\"#0d9488\" stroke-width=\"2\" marker-end=\"url(#arr-t)\"/>\n        <text x=\"85\" y=\"108\" font-size=\"11\" font-weight=\"700\" fill=\"#0f766e\">r_cart = [x, y, 0]ᵀ</text>\n        <line x1=\"65\" y1=\"175\" x2=\"305\" y2=\"155\" stroke=\"#7c3aed\" stroke-width=\"2\" marker-end=\"url(#arr-p)\"/>\n        <text x=\"165\" y=\"185\" font-size=\"11\" font-weight=\"700\" fill=\"#6d28d9\">r_b = [x_b, y_b, z_b]ᵀ</text>\n        <!-- Cart M -->\n        <rect x=\"160\" y=\"45\" width=\"52\" height=\"26\" rx=\"4\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"1.8\"/>\n        <text x=\"172\" y=\"62\" font-size=\"12\" font-weight=\"800\" fill=\"#1e3a8a\">M (x,y)</text>\n        <!-- Constraint Rod r_b - r_cart -->\n        <line x1=\"186\" y1=\"71\" x2=\"310\" y2=\"152\" stroke=\"#0f172a\" stroke-width=\"2.6\"/>\n        <text x=\"242\" y=\"100\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">||r_b − r_cart|| = ℓ</text>\n        <!-- Constraint Force J^T lambda arrows -->\n        <line x1=\"310\" y1=\"152\" x2=\"275\" y2=\"129\" stroke=\"#e11d48\" stroke-width=\"2.2\" marker-end=\"url(#arr-p)\"/>\n        <text x=\"275\" y=\"118\" font-size=\"11\" font-weight=\"700\" fill=\"#be123c\">Jᵀλ (rod tension)</text>\n        <!-- Bob m -->\n        <circle cx=\"315\" cy=\"155\" r=\"12\" fill=\"#ddd6fe\" stroke=\"#5b21b6\" stroke-width=\"2\"/>\n        <text x=\"333\" y=\"159\" font-size=\"12\" font-weight=\"800\" fill=\"#4c1d95\">m (x_b, y_b, z_b)</text>\n      </svg>",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Expanding the Holonomic Rod Constraint $g(\\mathbf{q}) = 0$",
          "badge": "Step 1 • Holonomic Constraint",
          "goal": "Write the relative position vector $\\mathbf{r}_b - \\mathbf{r}_{\\text{cart}}$ and expand $g(\\mathbf{q}) = \\frac{1}{2}(\\|\\mathbf{r}_b - \\mathbf{r}_{\\text{cart}}\\|^2 - \\ell^2)$ explicitly in terms of $\\mathbf{q} = [x, y, x_b, y_b, z_b]^T$.",
          "intuition": "In maximal coordinates, the bob's coordinates $(x_b, y_b, z_b)$ are treated as independent variables subject to 1 scalar constraint equation $g(\\mathbf{q}) = 0$ (so $5 - 1 = 4\\text{ DOF}$, matching Problem 1a!). Multiplying the squared length constraint by $\\frac{1}{2}$ is a standard analytical mechanics trick so that differentiating $(x_b - x)^2$ cancels the $\\frac{1}{2}$.",
          "conceptLinks": [
            "holonomic-constraints",
            "generalized-coordinates"
          ],
          "hint1": "Subtract $\\mathbf{r}_{\\text{cart}} = [x, y, 0]^T$ from $\\mathbf{r}_b = [x_b, y_b, z_b]^T$ to get $\\mathbf{r}_b - \\mathbf{r}_{\\text{cart}} = [x_b - x,\\, y_b - y,\\, z_b]^T$.",
          "hint2": "Compute the squared Euclidean norm $\\|\\mathbf{r}_b - \\mathbf{r}_{\\text{cart}}\\|^2 = (x_b - x)^2 + (y_b - y)^2 + z_b^2$ and substitute into $g(\\mathbf{q})$.",
          "checkpoint": {
            "question": "What is the explicit scalar form of the holonomic constraint $g(\\mathbf{q}) = 0$?",
            "options": [
              "$$g(\\mathbf{q}) = \\frac{1}{2}\\left[x_b^2 + y_b^2 + z_b^2 - \\ell^2\\right] = 0$$",
              "$$g(\\mathbf{q}) = \\frac{1}{2}\\left[(x_b - x)^2 + (y_b - y)^2 + z_b^2 - \\ell^2\\right] = 0$$",
              "$$g(\\mathbf{q}) = (x_b - x) + (y_b - y) + z_b - \\ell = 0$$",
              "$$g(\\mathbf{q}) = \\frac{1}{2}\\left[(x_b - x)^2 + (y_b - y)^2 + (z_b - z)^2 - \\ell^2\\right] = 0$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: That would tether the pendulum to the fixed origin $(0,0,0)$ instead of the moving cart $(x,y,0)$!",
              "Correct! The 3D distance squared between the bob $(x_b, y_b, z_b)$ and the cart $(x, y, 0)$ is $(x_b - x)^2 + (y_b - y)^2 + z_b^2$.",
              "Trap: Euclidean distance requires squaring each coordinate difference before summing.",
              "Trap: The cart moves on the horizontal plane $z_{\\text{cart}} = 0$, so there is no $z$ coordinate for the cart in $\\mathbf{q}$."
            ]
          },
          "derivation": "The relative displacement vector from the cart's spherical joint to the pendulum bob is:\n          $$\\mathbf{r}_b - \\mathbf{r}_{\\text{cart}} = \\begin{bmatrix} x_b \\\\ y_b \\\\ z_b \\end{bmatrix} - \\begin{bmatrix} x \\\\ y \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} x_b - x \\\\ y_b - y \\\\ z_b \\end{bmatrix}$$\n          Taking the squared norm gives the explicit holonomic constraint:\n          $$g(\\mathbf{q}) = \\frac{1}{2}\\left((x_b - x)^2 + (y_b - y)^2 + z_b^2 - \\ell^2\\right) = 0$$"
        },
        {
          "stepNumber": 2,
          "title": "Deriving the $1\\times 5$ Constraint Jacobian $\\mathbf{J} = \\partial g/\\partial\\mathbf{q}$",
          "badge": "Step 2 • Constraint Jacobian",
          "goal": "Differentiate $g(\\mathbf{q})$ with respect to each of the 5 coordinates in $\\mathbf{q} = [x, y, x_b, y_b, z_b]^T$ to form the $1\\times 5$ row vector $\\mathbf{J}(\\mathbf{q})$. ",
          "intuition": "The constraint Jacobian $\\mathbf{J} = \\frac{\\partial g}{\\partial \\mathbf{q}}$ tells us how a small virtual displacement $\\delta\\mathbf{q}$ changes the constraint $g$. Notice that $\\frac{\\partial}{\\partial x}\\left[\\frac{1}{2}(x_b - x)^2\\right] = (x_b - x)(-1) = -(x_b - x) = x - x_b$, whereas $\\frac{\\partial}{\\partial x_b}\\left[\\frac{1}{2}(x_b - x)^2\\right] = +(x_b - x)$.",
          "conceptLinks": [
            "constraint-jacobian"
          ],
          "hint1": "Order the 5 columns of $\\mathbf{J}$ in the exact order of $\\mathbf{q} = [x,\\, y,\\, x_b,\\, y_b,\\, z_b]^T$: $\\mathbf{J} = \\left[\\frac{\\partial g}{\\partial x},\\, \\frac{\\partial g}{\\partial y},\\, \\frac{\\partial g}{\\partial x_b},\\, \\frac{\\partial g}{\\partial y_b},\\, \\frac{\\partial g}{\\partial z_b}\\right]$.",
          "hint2": "Don't forget the inner chain-rule sign $-1$ when differentiating $(x_b - x)^2$ with respect to $x$ and $(y_b - y)^2$ with respect to $y$!",
          "checkpoint": {
            "question": "What is the $1\\times 5$ constraint Jacobian $\\mathbf{J} = \\frac{\\partial g}{\\partial \\mathbf{q}}$ for $\\mathbf{q} = [x, y, x_b, y_b, z_b]^T$?",
            "options": [
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} -x, & -y, & x_b, & y_b, & z_b \\end{bmatrix}$$",
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} x_b - x, & y_b - y, & x_b - x, & y_b - y, & z_b \\end{bmatrix}$$",
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} -2(x_b - x), & -2(y_b - y), & 2(x_b - x), & 2(y_b - y), & 2z_b \\end{bmatrix}$$",
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} -(x_b - x), & -(y_b - y), & x_b - x, & y_b - y, & z_b \\end{bmatrix}$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: $(x_b - x)^2$ differentiates to $\\pm(x_b - x)$, not $-x$ and $x_b$ separately!",
              "Trap: You missed the chain-rule minus sign when differentiating $(x_b - x)^2$ with respect to $x$! By Newton's 3rd Law, the force on the cart must be opposite to the horizontal force on the bob.",
              "Trap: Remember that $g(\\mathbf{q})$ already had a factor of $\\frac{1}{2}$ in front, which cancels the $2$ from the exponent!",
              "Correct! The first two entries have minus signs from differentiating with respect to the cart coordinates $(x, y)$, and the factor of $\\frac{1}{2}$ cancels the $2$."
            ]
          },
          "derivation": "Computing the partial derivative of $g(\\mathbf{q}) = \\frac{1}{2}\\left[(x_b - x)^2 + (y_b - y)^2 + z_b^2 - \\ell^2\\right]$ with respect to each coordinate in $\\mathbf{q} = [x, y, x_b, y_b, z_b]^T$:\n          $$\\frac{\\partial g}{\\partial x} = -(x_b - x), \\quad \\frac{\\partial g}{\\partial y} = -(y_b - y), \\quad \\frac{\\partial g}{\\partial x_b} = x_b - x, \\quad \\frac{\\partial g}{\\partial y_b} = y_b - y, \\quad \\frac{\\partial g}{\\partial z_b} = z_b$$\n          Collecting these into a $1\\times 5$ row vector gives the constraint Jacobian:\n          $$\\mathbf{J}(\\mathbf{q}) = \\frac{\\partial g}{\\partial \\mathbf{q}} = \\begin{bmatrix} -(x_b - x) & -(y_b - y) & x_b - x & y_b - y & z_b \\end{bmatrix}$$"
        },
        {
          "stepNumber": 3,
          "title": "Computing the Convective Velocity-Squared Term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$",
          "badge": "Step 3 • Acceleration Kinematics",
          "goal": "Differentiate $\\mathbf{J}(\\mathbf{q})$ with respect to time to find $\\dot{\\mathbf{J}}$, then multiply $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ and simplify.",
          "intuition": "Differentiating the velocity constraint $\\dot{g} = \\mathbf{J}\\dot{\\mathbf{q}} = 0$ gives $\\ddot{g} = \\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0$. Since $\\mathbf{J}$ is a linear function of the coordinates $\\mathbf{q}$, its time derivative $\\dot{\\mathbf{J}}$ is simply the exact same row vector with dots over every variable!",
          "conceptLinks": [
            "constraint-jacobian"
          ],
          "hint1": "Write $\\dot{\\mathbf{J}} = \\begin{bmatrix} -(\\dot{x}_b - \\dot{x}), & -(\\dot{y}_b - \\dot{y}), & \\dot{x}_b - \\dot{x}, & \\dot{y}_b - \\dot{y}, & \\dot{z}_b \\end{bmatrix}$ and multiply it by the column vector $\\dot{\\mathbf{q}} = [\\dot{x}, \\dot{y}, \\dot{x}_b, \\dot{y}_b, \\dot{z}_b]^T$.",
          "hint2": "Combine the $x$ terms: $-(\\dot{x}_b - \\dot{x})\\dot{x} + (\\dot{x}_b - \\dot{x})\\dot{x}_b = (\\dot{x}_b - \\dot{x})^2$. Do the same for the $y$ terms!",
          "checkpoint": {
            "question": "What does the scalar product $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ simplify to?",
            "options": [
              "$$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = (\\dot{x}_b - \\dot{x})^2 + (\\dot{y}_b - \\dot{y})^2 + \\dot{z}_b^2 = \\|\\dot{\\mathbf{r}}_b - \\dot{\\mathbf{r}}_{\\text{cart}}\\|^2$$",
              "$$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\dot{x}_b^2 + \\dot{y}_b^2 + \\dot{z}_b^2 - \\dot{x}^2 - \\dot{y}^2$$",
              "$$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0$$",
              "$$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = -(x_b - x)\\dot{x} - (y_b - y)\\dot{y} + (x_b - x)\\dot{x}_b + (y_b - y)\\dot{y}_b + z_b\\dot{z}_b$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! Grouping the cart and bob velocity terms gives the squared relative speed $\\|\\dot{\\mathbf{r}}_b - \\dot{\\mathbf{r}}_{\\text{cart}}\\|^2$.",
              "Trap: $-(\\dot{x}_b - \\dot{x})\\dot{x} + (\\dot{x}_b - \\dot{x})\\dot{x}_b$ factors as $(\\dot{x}_b - \\dot{x})^2$, which includes the cross term $-2\\dot{x}\\dot{x}_b$!",
              "Trap: $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ is only zero when the relative velocity is zero! For a swinging pendulum, $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = v_{\\text{rel}}^2 > 0$ provides the centripetal acceleration.",
              "Trap: That expression is $\\mathbf{J}\\dot{\\mathbf{q}} = \\dot{g}$, not $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$!"
            ]
          },
          "derivation": "Differentiating $\\mathbf{J}(\\mathbf{q})$ element-by-element with respect to time gives:\n          $$\\dot{\\mathbf{J}} = \\begin{bmatrix} -(\\dot{x}_b - \\dot{x}) & -(\\dot{y}_b - \\dot{y}) & \\dot{x}_b - \\dot{x} & \\dot{y}_b - \\dot{y} & \\dot{z}_b \\end{bmatrix}$$\n          Multiplying the $1\\times 5$ row vector $\\dot{\\mathbf{J}}$ by the $5\\times 1$ column vector $\\dot{\\mathbf{q}} = [\\dot{x}, \\dot{y}, \\dot{x}_b, \\dot{y}_b, \\dot{z}_b]^T$:\n          $$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = -(\\dot{x}_b - \\dot{x})\\dot{x} - (\\dot{y}_b - \\dot{y})\\dot{y} + (\\dot{x}_b - \\dot{x})\\dot{x}_b + (\\dot{y}_b - \\dot{y})\\dot{y}_b + \\dot{z}_b^2$$\n          Factoring $(\\dot{x}_b - \\dot{x})$ and $(\\dot{y}_b - \\dot{y})$ yields the squared relative speed:\n          $$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = (\\dot{x}_b - \\dot{x})^2 + (\\dot{y}_b - \\dot{y})^2 + \\dot{z}_b^2 = \\|\\dot{\\mathbf{r}}_b - \\dot{\\mathbf{r}}_{\\text{cart}}\\|^2$$"
        },
        {
          "stepNumber": 4,
          "title": "Unconstrained Mass Matrix $\\mathbf{M}$ and Force Vector $\\mathbf{F}$ in Maximal Coordinates",
          "badge": "Step 4 • Maximal $\\mathbf{M}$ & $\\mathbf{F}$",
          "goal": "Write the $5\\times 5$ diagonal mass matrix $\\mathbf{M}$ and the $5\\times 1$ unconstrained external force vector $\\mathbf{F}(\\mathbf{q}, \\dot{\\mathbf{q}}, t)$ in $\\mathbf{M}\\ddot{\\mathbf{q}} = \\mathbf{F} + \\mathbf{J}^T\\lambda$.",
          "intuition": "Here is the biggest advantage of maximal coordinates: because $(x,y)$ and $(x_b,y_b,z_b)$ are inertial Cartesian coordinates, $T = \\frac{1}{2}M(\\dot{x}^2+\\dot{y}^2) + \\frac{1}{2}m(\\dot{x}_b^2+\\dot{y}_b^2+\\dot{z}_b^2)$ has <strong>no cross-coupling velocity products</strong>! Thus $\\mathbf{M}$ is a constant diagonal matrix, and all the rod coupling is handled by $\\mathbf{J}^T\\lambda$.",
          "conceptLinks": [
            "lagrange-multipliers"
          ],
          "hint1": "Match each coordinate in $\\mathbf{q} = [x, y, x_b, y_b, z_b]^T$ with its mass ($M$ for the cart's $x,y$ and $m$ for the bob's $x_b,y_b,z_b$).",
          "hint2": "In $\\mathbf{F}$, include the shaker force and viscous friction on the cart's $x, y$ rows, $0$ on $x_b, y_b$, and downward gravity $-mg$ on the $z_b$ row.",
          "checkpoint": {
            "question": "What are $\\mathbf{M}$ and $\\mathbf{F}$ in $\\mathbf{M}\\ddot{\\mathbf{q}} = \\mathbf{F} + \\mathbf{J}^T\\lambda$?",
            "options": [
              "$$\\mathbf{M} = \\text{diag}(M, M, m, m, m), \\qquad \\mathbf{F} = \\begin{bmatrix} F_0\\sin\\Omega_1 t \\\\ F_0\\sin\\Omega_2 t \\\\ -b\\dot{x}_b \\\\ -b\\dot{y}_b \\\\ -mg \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\text{diag}(M+m, M+m, m, m, m), \\qquad \\mathbf{F} = \\begin{bmatrix} F_0\\sin\\Omega_1 t - b\\dot{x} \\\\ F_0\\sin\\Omega_2 t - b\\dot{y} \\\\ 0 \\\\ 0 \\\\ mg \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\text{diag}(M, M, m, m, m), \\qquad \\mathbf{F} = \\begin{bmatrix} F_0\\sin\\Omega_1 t - b\\dot{x} \\\\ F_0\\sin\\Omega_2 t - b\\dot{y} \\\\ 0 \\\\ 0 \\\\ -mg \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\text{diag}(M, M, m\\ell^2, m\\ell^2, m\\ell^2), \\qquad \\mathbf{F} = \\begin{bmatrix} F_0\\sin\\Omega_1 t - b\\dot{x} \\\\ F_0\\sin\\Omega_2 t - b\\dot{y} \\\\ 0 \\\\ 0 \\\\ -mg \\end{bmatrix}$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: Viscous ground friction $b$ acts on the cart ($-b\\dot{x}, -b\\dot{y}$), not on the bob in the air!",
              "Trap: In maximal coordinates, $(x_b, y_b, z_b)$ is already the absolute inertial position of the bob, so the cart's mass entries are just $M$ (not $M+m$), and gravity points in $-z$ ($-mg$).",
              "Correct! In maximal Cartesian coordinates, $\\mathbf{M} = \\text{diag}(M, M, m, m, m)$ and $\\mathbf{F}$ contains shaker + cart friction in $(x,y)$ and gravity $-mg$ in $z_b$.",
              "Trap: $x_b, y_b, z_b$ have units of length (meters), not angles, so their mass entries are $m$ (not $m\\ell^2$)."
            ]
          },
          "derivation": "In maximal coordinates $\\mathbf{q} = [x, y, x_b, y_b, z_b]^T$, the kinetic energy is $T = \\frac{1}{2}M(\\dot{x}^2 + \\dot{y}^2) + \\frac{1}{2}m(\\dot{x}_b^2 + \\dot{y}_b^2 + \\dot{z}_b^2)$ and potential energy is $V = mgz_b$. Thus the $5\\times 5$ mass matrix and $5\\times 1$ force vector (containing gravity $-\\nabla_{\\mathbf{q}}V$, the shaker, and cart friction) are:\n          $$\\mathbf{M} = \\begin{bmatrix} M & 0 & 0 & 0 & 0 \\\\ 0 & M & 0 & 0 & 0 \\\\ 0 & 0 & m & 0 & 0 \\\\ 0 & 0 & 0 & m & 0 \\\\ 0 & 0 & 0 & 0 & m \\end{bmatrix}, \\qquad \\mathbf{F}(\\mathbf{q},\\dot{\\mathbf{q}},t) = \\begin{bmatrix} F_0\\sin\\Omega_1 t - b\\dot{x} \\\\ F_0\\sin\\Omega_2 t - b\\dot{y} \\\\ 0 \\\\ 0 \\\\ -mg \\end{bmatrix}$$"
        },
        {
          "stepNumber": 5,
          "title": "Augmented DAE System & Baumgarte Stabilization",
          "badge": "Step 5 • Baumgarte & Block Matrix",
          "goal": "Combine $\\mathbf{M}\\ddot{\\mathbf{q}} = \\mathbf{F} + \\mathbf{J}^T\\lambda$ and the Baumgarte-stabilized constraint equation $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\zeta\\omega_B\\dot{g} - \\omega_B^2 g$ into a single $6\\times 6$ linear matrix system.",
          "intuition": "To solve for the 5 accelerations $\\ddot{\\mathbf{q}}$ and the 1 scalar Lagrange multiplier $\\lambda$ simultaneously at each instant, we move $\\mathbf{J}^T\\lambda$ to the left-hand side of the dynamic equation ($\\mathbf{M}\\ddot{\\mathbf{q}} - \\mathbf{J}^T\\lambda = \\mathbf{F}$) and stack it above the stabilized constraint acceleration equation.",
          "conceptLinks": [
            "lagrange-multipliers",
            "baumgarte-stabilization"
          ],
          "hint1": "Rewrite $\\mathbf{M}\\ddot{\\mathbf{q}} = \\mathbf{F} + \\mathbf{J}^T\\lambda$ with the unknowns $[\\ddot{\\mathbf{q}}^T,\\, \\lambda]^T$ on the left: $\\mathbf{M}\\ddot{\\mathbf{q}} - \\mathbf{J}^T\\lambda = \\mathbf{F}$.",
          "hint2": "In the second block row, $\\mathbf{J}\\ddot{\\mathbf{q}} + 0\\cdot\\lambda = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\zeta\\omega_B(\\mathbf{J}\\dot{\\mathbf{q}}) - \\omega_B^2 g(\\mathbf{q})$. Without Baumgarte stabilization, simply set $\\omega_B = 0$.",
          "checkpoint": {
            "question": "Which $6\\times 6$ block-matrix equation correctly solves for $\\ddot{\\mathbf{q}}$ and $\\lambda$ with Baumgarte stabilization?",
            "options": [
              "$$\\begin{bmatrix} \\mathbf{M} & \\mathbf{J}^T \\\\ \\mathbf{J} & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\mathbf{q}} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{F} \\\\ \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} + 2\\zeta\\omega_B(\\mathbf{J}\\dot{\\mathbf{q}}) + \\omega_B^2 g(\\mathbf{q}) \\end{bmatrix}$$",
              "$$\\begin{bmatrix} \\mathbf{M} & -\\mathbf{J}^T \\\\ \\mathbf{J} & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\mathbf{q}} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{F} \\\\ -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\zeta\\omega_B(\\mathbf{J}\\dot{\\mathbf{q}}) - \\omega_B^2 g(\\mathbf{q}) \\end{bmatrix}$$",
              "$$\\begin{bmatrix} \\mathbf{M} & -\\mathbf{J}^T \\\\ \\mathbf{J} & 1 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\mathbf{q}} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{F} \\\\ 0 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} \\mathbf{M} & -\\mathbf{J} \\\\ \\mathbf{J}^T & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\mathbf{q}} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{F} \\\\ -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} \\end{bmatrix}$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: Moving $+\\mathbf{J}^T\\lambda$ to the LHS requires a minus sign ($-\\mathbf{J}^T$), and all three terms on the RHS of $\\mathbf{J}\\ddot{\\mathbf{q}} = \\dots$ must be negative so the constraint error decays instead of blowing up exponentially!",
              "Correct! Top row gives $\\mathbf{M}\\ddot{\\mathbf{q}} - \\mathbf{J}^T\\lambda = \\mathbf{F}$, and bottom row gives $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\zeta\\omega_B\\dot{g} - \\omega_B^2 g$.",
              "Trap: The bottom-right scalar entry multiplying $\\lambda$ in the kinematic constraint equation is $0$, not $1$!",
              "Trap: Check matrix dimensions! $\\mathbf{J}$ is $1\\times 5$ (row vector), so $\\mathbf{J}$ sits in the bottom-left ($1\\times 5$) and $-\\mathbf{J}^T$ sits in the top-right ($5\\times 1$)."
            ]
          },
          "derivation": "Combining $\\mathbf{M}\\ddot{\\mathbf{q}} - \\mathbf{J}^T\\lambda = \\mathbf{F}$ with the Baumgarte-stabilized acceleration constraint $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\zeta\\omega_B\\dot{g} - \\omega_B^2 g$ (where $\\dot{g} = \\mathbf{J}\\dot{\\mathbf{q}}$) yields the $6\\times 6$ augmented linear system:\n          $$\\begin{bmatrix} \\mathbf{M} & -\\mathbf{J}^T \\\\ \\mathbf{J} & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\mathbf{q}} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{F} \\\\ -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\zeta\\omega_B(\\mathbf{J}\\dot{\\mathbf{q}}) - \\omega_B^2 g(\\mathbf{q}) \\end{bmatrix}$$\n          We can also solve this in closed form by eliminating $\\ddot{\\mathbf{q}} = \\mathbf{M}^{-1}(\\mathbf{F} + \\mathbf{J}^T\\lambda)$:\n          $$\\lambda = -(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}\\left(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{F} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} + 2\\zeta\\omega_B\\mathbf{J}\\dot{\\mathbf{q}} + \\omega_B^2 g\\right)$$\n          Without Baumgarte stabilization ($\\omega_B = 0$), numerical integration rounding errors cause $\\|\\mathbf{r}_b - \\mathbf{r}_{\\text{cart}}\\| - \\ell$ to drift over time; with $\\omega_B = 10\\text{ rad/s},\\, \\zeta = 1$, any drift is critically damped back to zero."
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Hand Derivation — HW 2 Problem 1 (d–e)",
        "items": [
          {
            "label": "(d) Holonomic Constraint $g(\\mathbf{q})$ & $1\\times 5$ Constraint Jacobian $\\mathbf{J}$",
            "math": "$$g(\\mathbf{q}) = \\frac{1}{2}\\left[(x_b - x)^2 + (y_b - y)^2 + z_b^2 - \\ell^2\\right] = 0$$ $$\\mathbf{J}(\\mathbf{q}) = \\frac{\\partial g}{\\partial \\mathbf{q}} = \\begin{bmatrix} -(x_b - x), & -(y_b - y), & x_b - x, & y_b - y, & z_b \\end{bmatrix}$$"
          },
          {
            "label": "(d) Convective Velocity Term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$",
            "math": "$$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = (\\dot{x}_b - \\dot{x})^2 + (\\dot{y}_b - \\dot{y})^2 + \\dot{z}_b^2 = \\|\\dot{\\mathbf{r}}_b - \\dot{\\mathbf{r}}_{\\text{cart}}\\|^2$$"
          },
          {
            "label": "(e) Constrained DAE System with Baumgarte Stabilization",
            "math": "$$\\begin{bmatrix} \\mathbf{M} & -\\mathbf{J}^T \\\\ \\mathbf{J} & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\mathbf{q}} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{F} \\\\ -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\zeta\\omega_B(\\mathbf{J}\\dot{\\mathbf{q}}) - \\omega_B^2 g \\end{bmatrix}, \\quad \\mathbf{M} = \\text{diag}(M,M,m,m,m)$$"
          }
        ]
      }
    },
    {
      "id": "hw2-p3",
      "code": "HW 2 • Problem 3 (a–e)",
      "title": "Spring-Loaded Atwood Machine over a Finite-Radius Pulley (Unilateral Rope & Impacts)",
      "subtitle": "Tangent Pulley Geometry, Rope Constraint $g(\\mathbf{q})$, Unit-Tangent Jacobian $\\mathbf{J}$, Plastic Catch Impact Map & Hybrid Modes",
      "sourceTag": "Homework 2",
      "category": "Contact & Impacts",
      "difficulty": "Exam Challenge",
      "estimatedMinutes": 30,
      "lectureRefs": [
        13,
        14,
        20,
        21,
        22
      ],
      "conceptTags": [
        "holonomic-constraints",
        "constraint-jacobian",
        "lagrange-multipliers",
        "impact-maps",
        "unilateral-hybrid-systems"
      ],
      "parameters": [
        {
          "symbol": "$\\mathbf{q} = [x_1,\\, y_1,\\, x_2,\\, y_2]^T$",
          "desc": "Maximal 2D coordinates of balls 1 and 2"
        },
        {
          "symbol": "$\\mathbf{M} = \\text{diag}(m_1, m_1, m_2, m_2)$",
          "desc": "Mass matrix ($m_1 = 1.5\\text{ kg},\\, m_2 = 1\\text{ kg}$)"
        },
        {
          "symbol": "$r = 0.1\\text{ m},\\; \\ell = 3\\text{ m}$",
          "desc": "Fixed pulley radius at $O$ and total rope length"
        },
        {
          "symbol": "$k = 120\\text{ N/m},\\; L_0 = 0.96\\text{ m},\\; \\mathbf{A} = (-0.1, -2.6)\\text{ m}$",
          "desc": "Linear spring tying ball 1 to ground point $\\mathbf{A}$"
        },
        {
          "symbol": "$d_i = \\|\\mathbf{p}_i\\|,\\; \\vartheta_1 = \\text{atan2}(-x_1,-y_1),\\; \\vartheta_2 = \\text{atan2}(x_2,-y_2)$",
          "desc": "Radial distances and angles from straight down"
        }
      ],
      "prompt": "Two point masses $m_1$ and $m_2$ hang from an inextensible, massless rope of length $\\ell$ that passes over a fixed frictionless pulley of radius $r$ centered at the origin $O$. Ball 1 is also tied to ground point $\\mathbf{A} = (x_A, y_A)$ by a linear spring of stiffness $k$ and rest length $L_0$. Use maximal coordinates $\\mathbf{q} = [x_1, y_1, x_2, y_2]^T$, so $\\mathbf{p}_1 = [x_1, y_1]^T$ and $\\mathbf{p}_2 = [x_2, y_2]^T$. The rope leaves the pulley tangentially at points $C_1$ and $C_2$. Let $\\vartheta_1$ be the angle of $\\mathbf{p}_1$ from straight down (measured positive toward $-x$) and $\\vartheta_2$ be the angle of $\\mathbf{p}_2$ from straight down (measured positive toward $+x$).<br><br>\n      <strong>Your Goal:</strong> By hand, derive (a) the rope constraint $g(\\mathbf{q}) = (\\text{rope length used}) - \\ell$ in terms of $d_i = \\|\\mathbf{p}_i\\|$ and $\\vartheta_i$ and verify its $r \\to 0$ limit; (b) the simplified constraint Jacobian $\\mathbf{J} = \\partial g/\\partial \\mathbf{q}$ and why $-T\\mathbf{J}^T$ ($T \\ge 0$) is physically sensible; (c) the perfectly plastic catch impact map ($\\mathbf{J}\\dot{\\mathbf{q}}^+ = 0$), solving for impulse $\\Lambda$, post-impact velocity $\\dot{\\mathbf{q}}^+$, and energy change $\\Delta E$; and (d–e) the total potential energy $V(\\mathbf{q})$, why $T < 0$ is non-physical, and the hybrid slack/taut transition events.",
      "svgDiagram": "<svg viewBox=\"0 0 420 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Spring-loaded Atwood machine over a finite radius pulley\">\n        <defs>\n          <marker id=\"arr-b3\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n            <path d=\"M 0 1.5 L 10 5 L 0 8.5 z\" fill=\"#334155\"/>\n          </marker>\n        </defs>\n        <!-- Coordinate axes -->\n        <line x1=\"295\" y1=\"45\" x2=\"355\" y2=\"45\" stroke=\"#334155\" stroke-width=\"1.6\" marker-end=\"url(#arr-b3)\"/>\n        <text x=\"360\" y=\"49\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\">x</text>\n        <line x1=\"295\" y1=\"45\" x2=\"295\" y2=\"12\" stroke=\"#334155\" stroke-width=\"1.6\" marker-end=\"url(#arr-b3)\"/>\n        <text x=\"291\" y=\"10\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\">y</text>\n        <!-- Pulley at Origin O -->\n        <circle cx=\"175\" cy=\"58\" r=\"28\" fill=\"#f1f5f9\" stroke=\"#0f172a\" stroke-width=\"2.2\"/>\n        <circle cx=\"175\" cy=\"58\" r=\"3\" fill=\"#0f172a\"/>\n        <text x=\"163\" y=\"53\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">O</text>\n        <!-- Radius r to C2 -->\n        <line x1=\"175\" y1=\"58\" x2=\"196\" y2=\"40\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n        <text x=\"180\" y=\"72\" font-size=\"11\" font-style=\"italic\" font-weight=\"700\" fill=\"#475569\">r</text>\n        <!-- Wrapped arc beta -->\n        <path d=\"M 147 58 A 28 28 0 0 1 196 40\" fill=\"none\" stroke=\"#4f46e5\" stroke-width=\"3.2\"/>\n        <text x=\"166\" y=\"25\" font-size=\"11\" font-weight=\"800\" fill=\"#4f46e5\">arc rβ</text>\n        <!-- Tangent points C1 and C2 -->\n        <circle cx=\"147\" cy=\"58\" r=\"3.5\" fill=\"#e11d48\"/>\n        <text x=\"126\" y=\"61\" font-size=\"11\" font-weight=\"700\" fill=\"#be123c\">C₁</text>\n        <circle cx=\"196\" cy=\"40\" r=\"3.5\" fill=\"#e11d48\"/>\n        <text x=\"202\" y=\"37\" font-size=\"11\" font-weight=\"700\" fill=\"#be123c\">C₂</text>\n        <!-- Free rope segments s1 and s2 -->\n        <line x1=\"147\" y1=\"58\" x2=\"147\" y2=\"155\" stroke=\"#0f172a\" stroke-width=\"2.2\"/>\n        <text x=\"128\" y=\"112\" font-size=\"11\" font-style=\"italic\" font-weight=\"700\" fill=\"#0f172a\">s₁</text>\n        <line x1=\"196\" y1=\"40\" x2=\"295\" y2=\"165\" stroke=\"#0f172a\" stroke-width=\"2.2\"/>\n        <text x=\"252\" y=\"98\" font-size=\"11\" font-style=\"italic\" font-weight=\"700\" fill=\"#0f172a\">s₂</text>\n        <!-- Radial dashed lines p1 and p2 -->\n        <line x1=\"175\" y1=\"58\" x2=\"147\" y2=\"155\" stroke=\"#94a3b8\" stroke-dasharray=\"3,3\" stroke-width=\"1.4\"/>\n        <text x=\"163\" y=\"118\" font-size=\"10\" font-weight=\"700\" fill=\"#64748b\">p₁</text>\n        <line x1=\"175\" y1=\"58\" x2=\"295\" y2=\"165\" stroke=\"#94a3b8\" stroke-dasharray=\"3,3\" stroke-width=\"1.4\"/>\n        <text x=\"222\" y=\"128\" font-size=\"10\" font-weight=\"700\" fill=\"#64748b\">p₂</text>\n        <!-- Ball 1 and Ball 2 -->\n        <circle cx=\"147\" cy=\"155\" r=\"10\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n        <text x=\"118\" y=\"160\" font-size=\"12\" font-weight=\"800\" fill=\"#1e3a8a\">m₁</text>\n        <circle cx=\"295\" cy=\"165\" r=\"10\" fill=\"#ddd6fe\" stroke=\"#6d28d9\" stroke-width=\"2\"/>\n        <text x=\"310\" y=\"169\" font-size=\"12\" font-weight=\"800\" fill=\"#5b21b6\">m₂</text>\n        <!-- Spring from m1 to Anchor A -->\n        <path d=\"M 147 165 L 141 173 L 153 181 L 141 189 L 153 197 L 141 205 L 153 213 L 147 221 L 147 235\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\"/>\n        <text x=\"160\" y=\"205\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\">k, L₀</text>\n        <!-- Ground Anchor A -->\n        <line x1=\"125\" y1=\"235\" x2=\"170\" y2=\"235\" stroke=\"#334155\" stroke-width=\"2.2\"/>\n        <circle cx=\"147\" cy=\"235\" r=\"3.5\" fill=\"#0f172a\"/>\n        <text x=\"175\" y=\"240\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">A</text>\n      </svg>",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Tangent Pulley Geometry: Free Lengths $s_1, s_2$ & Wrap Angle $\\beta$",
          "badge": "Step 1 • Tangent Geometry",
          "goal": "Express the straight free rope lengths $s_1 = \\|\\mathbf{p}_1 - \\mathbf{C}_1\\|$ and $s_2 = \\|\\mathbf{p}_2 - \\mathbf{C}_2\\|$ and the wrapped pulley angle $\\beta$ in terms of $d_i = \\|\\mathbf{p}_i\\|$ and $\\vartheta_i$.",
          "intuition": "Because the rope leaves the circular pulley of radius $r$ <strong>tangentially</strong> at $C_i$, the radius vector $\\mathbf{C}_i$ (length $r$) and the free rope segment $\\mathbf{p}_i - \\mathbf{C}_i$ (length $s_i$) meet at a $90^\\circ$ right angle! Thus $O C_i p_i$ is a right triangle with hypotenuse $d_i = \\|\\mathbf{p}_i\\|$ and adjacent leg $r$.",
          "conceptLinks": [
            "holonomic-constraints"
          ],
          "hint1": "By the Pythagorean theorem on right triangle $O C_i p_i$ with hypotenuse $d_i$ and leg $r$, what is $s_i$? And what is the interior angle $\\angle(O C_i, O p_i)$ at the center $O$?",
          "hint2": "The angle at $O$ between $\\mathbf{p}_i$ and the tangent point $\\mathbf{C}_i$ is $\\alpha_i = \\arccos(r/d_i)$. Since $\\vartheta_1$ and $\\vartheta_2$ are measured from straight down in opposite directions, the total angle around the circle ($2\\pi$) minus $(\\vartheta_1 + \\arccos(r/d_1))$ and $(\\vartheta_2 + \\arccos(r/d_2))$ gives the wrapped angle $\\beta$ over the top of the pulley!",
          "checkpoint": {
            "question": "Which expressions correctly give the free lengths $s_i$ and the pulley wrap angle $\\beta$?",
            "options": [
              "$$s_i = \\sqrt{d_i^2 - r^2}, \\qquad \\beta = \\vartheta_1 + \\vartheta_2 + \\arccos\\frac{r}{d_1} + \\arccos\\frac{r}{d_2}$$",
              "$$s_i = d_i - r, \\qquad \\beta = \\pi - \\vartheta_1 - \\vartheta_2$$",
              "$$s_i = \\sqrt{d_i^2 + r^2}, \\qquad \\beta = 2\\pi - \\vartheta_1 - \\vartheta_2 - \\arctan\\frac{r}{d_1} - \\arctan\\frac{r}{d_2}$$",
              "$$s_i = \\sqrt{d_i^2 - r^2}, \\qquad \\beta = 2\\pi - \\left(\\vartheta_1 + \\arccos\\frac{r}{d_1}\\right) - \\left(\\vartheta_2 + \\arccos\\frac{r}{d_2}\\right) = \\pi - \\vartheta_1 - \\vartheta_2 + \\arcsin\\frac{r}{d_1} + \\arcsin\\frac{r}{d_2}$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: As the balls swing outward (increasing $\\vartheta_1$ or $\\vartheta_2$), less rope wraps around the top of the pulley, so $\\vartheta_1$ and $\\vartheta_2$ must be subtracted!",
              "Trap: $d_i$ is the hypotenuse from the center $O$ to ball $i$, not along the tangent line! By Pythagoras, $s_i = \\sqrt{d_i^2 - r^2}$.",
              "Trap: The right angle is at the tangent point $C_i$, so $d_i$ is the hypotenuse ($s_i^2 + r^2 = d_i^2 \\implies s_i = \\sqrt{d_i^2 - r^2}$).",
              "Correct! Both forms of $\\beta$ (using $2\\pi - \\arccos(r/d_i)$ or $\\pi + \\arcsin(r/d_i)$) are identical via $\\arccos(u) = \\frac{\\pi}{2} - \\arcsin(u)$."
            ]
          },
          "derivation": "In right triangle $O C_i p_i$, the radius $O C_i = r$ is perpendicular to the tangent rope segment $C_i p_i = s_i$, with hypotenuse $O p_i = d_i = \\|\\mathbf{p}_i\\|$:\n          $$s_1 = \\sqrt{d_1^2 - r^2}, \\qquad s_2 = \\sqrt{d_2^2 - r^2}$$\n          The acute angle between $\\mathbf{p}_i$ and the radius to the tangent point $\\mathbf{C}_i$ is $\\alpha_i = \\arccos(r/d_i)$. Measuring angles around $O$ from straight down ($-y$), tangent point $C_1$ is at clockwise angle $\\vartheta_1 + \\arccos(r/d_1)$ and $C_2$ is at counterclockwise angle $\\vartheta_2 + \\arccos(r/d_2)$. Subtracting both from a full $2\\pi$ revolution gives the wrap angle $\\beta$:\n          $$\\beta = 2\\pi - \\left(\\vartheta_1 + \\arccos\\frac{r}{d_1}\\right) - \\left(\\vartheta_2 + \\arccos\\frac{r}{d_2}\\right) = \\pi - \\vartheta_1 - \\vartheta_2 + \\arcsin\\frac{r}{d_1} + \\arcsin\\frac{r}{d_2}$$"
        },
        {
          "stepNumber": 2,
          "title": "Total Rope Constraint $g(\\mathbf{q})$ & Point-Pulley Limit ($r \\to 0$)",
          "badge": "Step 2 • Rope Constraint & Limit",
          "goal": "Assemble $g(\\mathbf{q}) = s_1 + s_2 + r\\beta - \\ell$ and verify that $g(\\mathbf{q}) = 0$ reduces to $\\|\\mathbf{p}_1\\| + \\|\\mathbf{p}_2\\| = \\ell$ when $r \\to 0$.",
          "intuition": "The total length of rope in use is the sum of the two straight hanging segments $s_1$ and $s_2$ plus the circular arc $r\\beta$ wrapped over the pulley. Checking the $r \\to 0$ limit is a classic exam sanity check to confirm your signs and geometry!",
          "conceptLinks": [
            "holonomic-constraints"
          ],
          "hint1": "Add the three segments of rope ($s_1$, $s_2$, and arc length $r\\beta$) and subtract total rope length $\\ell$.",
          "hint2": "Take the limit as $r \\to 0$: $\\sqrt{d_i^2 - r^2} \\to d_i = \\|\\mathbf{p}_i\\|$ and $r\\beta \\to 0\\cdot(\\pi - \\vartheta_1 - \\vartheta_2) = 0$.",
          "checkpoint": {
            "question": "What is the complete rope constraint $g(\\mathbf{q})$, and when is $g(\\mathbf{q})$ negative?",
            "options": [
              "$$g(\\mathbf{q}) = \\sqrt{d_1^2 - r^2} + \\sqrt{d_2^2 - r^2} + r\\left[2\\pi - \\vartheta_1 - \\vartheta_2 - \\arccos\\frac{r}{d_1} - \\arccos\\frac{r}{d_2}\\right] - \\ell, \\quad g < 0 \\text{ when slack}$$",
              "$$g(\\mathbf{q}) = \\sqrt{d_1^2 - r^2} + \\sqrt{d_2^2 - r^2} + \\beta - \\ell, \\quad g > 0 \\text{ when slack}$$",
              "$$g(\\mathbf{q}) = d_1 + d_2 + 2\\pi r - \\ell, \\quad g < 0 \\text{ when slack}$$",
              "$$g(\\mathbf{q}) = \\ell - (s_1 + s_2 + r\\beta), \\quad g < 0 \\text{ when slack}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! When the balls move closer to the pulley than the rope length $\\ell$, the distance used is less than $\\ell$, so $g(\\mathbf{q}) < 0$ (slack).",
              "Trap: Don't forget to multiply the wrap angle $\\beta$ (radians) by the pulley radius $r$ (meters) so every term has units of length!",
              "Trap: The wrapped arc length changes dynamically with the ball angles $\\vartheta_1$ and $\\vartheta_2$; it is not a constant $2\\pi r$.",
              "Trap: The problem specifically defines $g(\\mathbf{q}) = (\\text{rope length used}) - \\ell$ so that $g < 0$ when slack."
            ]
          },
          "derivation": "Summing the two straight segments $s_1, s_2$ and the wrapped pulley arc $r\\beta$ minus the rope length $\\ell$:\n          $$g(\\mathbf{q}) = s_1 + s_2 + r\\beta - \\ell = \\sqrt{d_1^2 - r^2} + \\sqrt{d_2^2 - r^2} + r\\left[2\\pi - \\vartheta_1 - \\vartheta_2 - \\arccos\\left(\\frac{r}{d_1}\\right) - \\arccos\\left(\\frac{r}{d_2}\\right)\\right] - \\ell$$\n          <strong>Limit Check ($r \\to 0$):</strong> As $r \\to 0$, $s_i = \\sqrt{d_i^2 - r^2} \\to d_i = \\|\\mathbf{p}_i\\|$ and $r\\beta \\to 0$. Thus $g(\\mathbf{q}) = 0$ reduces immediately to:\n          $$\\|\\mathbf{p}_1\\| + \\|\\mathbf{p}_2\\| - \\ell = 0 \\iff \\|\\mathbf{p}_1\\| + \\|\\mathbf{p}_2\\| = \\ell$$"
        },
        {
          "stepNumber": 3,
          "title": "Simplifying the Constraint Jacobian $\\mathbf{J} = \\partial g/\\partial\\mathbf{q}$ (The Unit-Tangent Miracle)",
          "badge": "Step 3 • Jacobian Simplification",
          "goal": "Differentiate $g(\\mathbf{q})$ with respect to $\\mathbf{q} = [x_1, y_1, x_2, y_2]^T$, simplify as far as possible, and interpret $-T\\mathbf{J}^T$ physically.",
          "intuition": "When you differentiate $s_i + r\\beta$ with respect to $d_i$, the derivative of $\\arccos(r/d_i)$ produces a term $-\\frac{r^2}{d_i\\sqrt{d_i^2-r^2}}$ that combines with $\\frac{d_i}{\\sqrt{d_i^2-r^2}}$ to give simply $\\frac{s_i}{d_i}$! Even better, in Cartesian coordinates, $\\frac{\\partial g}{\\partial \\mathbf{p}_i}$ simplifies to the <strong>unit vector $\\hat{\\mathbf{u}}_i = \\frac{\\mathbf{p}_i - \\mathbf{C}_i}{s_i}$ pointing along the straight rope segment from $C_i$ to $\\mathbf{p}_i$</strong>!",
          "conceptLinks": [
            "constraint-jacobian",
            "lagrange-multipliers"
          ],
          "hint1": "First compute the polar partials: $\\frac{\\partial g}{\\partial d_i} = \\frac{d_i}{s_i} - \\frac{r^2}{d_i s_i} = \\frac{s_i}{d_i}$ and $\\frac{\\partial g}{\\partial \\vartheta_i} = -r$.",
          "hint2": "Use the chain rule with $\\nabla d_i = \\frac{1}{d_i}[x_i, y_i]^T$, $\\nabla \\vartheta_1 = \\frac{1}{d_1^2}[y_1, -x_1]^T$, and $\\nabla \\vartheta_2 = \\frac{1}{d_2^2}[-y_2, x_2]^T$. Notice that each $1\\times 2$ block $\\mathbf{J}_i$ has unit norm $\\|\\mathbf{J}_i\\| = \\frac{\\sqrt{s_i^2 + r^2}}{d_i} = 1$!",
          "checkpoint": {
            "question": "What does the $1\\times 4$ constraint Jacobian $\\mathbf{J} = \\frac{\\partial g}{\\partial \\mathbf{q}}$ simplify to, and why is $-T\\mathbf{J}^T$ physically sensible?",
            "options": [
              "$$\\mathbf{J} = \\begin{bmatrix} \\frac{x_1}{s_1}, & \\frac{y_1}{s_1}, & \\frac{x_2}{s_2}, & \\frac{y_2}{s_2} \\end{bmatrix}, \\text{ pulling each ball with force } T\\frac{d_i}{s_i}$$",
              "$$\\mathbf{J} = \\begin{bmatrix} \\frac{x_1}{d_1}, & \\frac{y_1}{d_1}, & \\frac{x_2}{d_2}, & \\frac{y_2}{d_2} \\end{bmatrix}, \\text{ pulling each ball toward the pulley center } O$$",
              "$$\\mathbf{J} = \\begin{bmatrix} \\frac{s_1 x_1 - r y_1}{d_1^2}, & \\frac{s_1 y_1 + r x_1}{d_1^2}, & \\frac{s_2 x_2 + r y_2}{d_2^2}, & \\frac{s_2 y_2 - r x_2}{d_2^2} \\end{bmatrix} = \\begin{bmatrix} \\hat{\\mathbf{u}}_1^T & \\hat{\\mathbf{u}}_2^T \\end{bmatrix}, \\text{ so } -T\\mathbf{J}^T \\text{ pulls each ball along the rope toward } C_i$$",
              "$$\\mathbf{J} = \\begin{bmatrix} -r y_1, & r x_1, & r y_2, & -r x_2 \\end{bmatrix}, \\text{ applying pure torque about } O$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: You forgot to differentiate the wrap angle $r\\beta$! Including $\\partial(r\\beta)/\\partial\\mathbf{q}$ cancels the $1/s_i$ singularity and normalizes each block to a unit vector.",
              "Trap: That is the $r \\to 0$ point-pulley Jacobian! For $r > 0$, the rope pulls toward the tangent point $C_i$, not the pulley center $O$.",
              "Correct! Each 2D block of $\\mathbf{J}$ is the exact unit tangent vector $\\hat{\\mathbf{u}}_i = (\\mathbf{p}_i - \\mathbf{C}_i)/s_i$ pointing from tangent point $C_i$ to ball $i$, so $-T\\mathbf{J}^T$ pulls each ball along its straight rope segment toward $C_i$ with tension magnitude $T$!",
              "Trap: $\\mathbf{J}$ includes both the radial component ($s_i/d_i^2$) and the tangential component ($r/d_i^2$)."
            ]
          },
          "derivation": "Differentiating $g$ with respect to $d_i$ and $\\vartheta_i$ first:\n          $$\\frac{\\partial g}{\\partial d_i} = \\frac{d_i}{\\sqrt{d_i^2 - r^2}} - r\\left(\\frac{r}{d_i\\sqrt{d_i^2 - r^2}}\\right) = \\frac{d_i^2 - r^2}{d_i\\sqrt{d_i^2 - r^2}} = \\frac{s_i}{d_i}, \\qquad \\frac{\\partial g}{\\partial \\vartheta_i} = -r$$\n          Applying the chain rule with $\\frac{\\partial d_i}{\\partial \\mathbf{p}_i} = \\frac{\\mathbf{p}_i^T}{d_i}$, $\\frac{\\partial \\vartheta_1}{\\partial \\mathbf{p}_1} = \\frac{[y_1,\\, -x_1]}{d_1^2}$, and $\\frac{\\partial \\vartheta_2}{\\partial \\mathbf{p}_2} = \\frac{[-y_2,\\, x_2]}{d_2^2}$:\n          $$\\mathbf{J}(\\mathbf{q}) = \\frac{\\partial g}{\\partial \\mathbf{q}} = \\begin{bmatrix} \\frac{s_1 x_1 - r y_1}{d_1^2}, & \\frac{s_1 y_1 + r x_1}{d_1^2}, & \\frac{s_2 x_2 + r y_2}{d_2^2}, & \\frac{s_2 y_2 - r x_2}{d_2^2} \\end{bmatrix} = \\begin{bmatrix} \\hat{\\mathbf{u}}_1^T & \\hat{\\mathbf{u}}_2^T \\end{bmatrix}$$\n          where $\\hat{\\mathbf{u}}_i = \\frac{\\mathbf{p}_i - \\mathbf{C}_i}{s_i}$ ($\\|\\hat{\\mathbf{u}}_i\\| = 1$) is the unit vector pointing from the tangent point $C_i$ to ball $m_i$.<br><br>\n          <strong>Why $-T\\mathbf{J}^T$ is Physically Sensible:</strong> Since $\\hat{\\mathbf{u}}_i$ is a unit vector pointing away from the pulley along the rope segment $C_i p_i$, the generalized constraint force $-T\\mathbf{J}^T = [-T\\hat{\\mathbf{u}}_1^T,\\, -T\\hat{\\mathbf{u}}_2^T]^T$ applies a force of magnitude $T \\ge 0$ directed from $p_i$ <strong>back toward the tangent point $C_i$</strong> along the rope on both balls!"
        },
        {
          "stepNumber": 4,
          "title": "Perfectly Plastic Catch Impact Map: Solving for Impulse $\\Lambda$ & $\\dot{\\mathbf{q}}^+$",
          "badge": "Step 4 • Plastic Impact Map",
          "goal": "Solve the plastic catch impact map for the impulse $\\Lambda$ and post-impact velocity $\\dot{\\mathbf{q}}^+$.",
          "intuition": "When the slack rope snaps taut, it does not rebound ($e = 0$), so the post-impact lengthening rate must vanish: $\\dot{g}^+ = \\mathbf{J}\\dot{\\mathbf{q}}^+ = 0$. Using block Gaussian elimination (Schur complement), we express $\\dot{\\mathbf{q}}^+$ in terms of $\\Lambda$ from the top row and substitute into $\\mathbf{J}\\dot{\\mathbf{q}}^+ = 0$.",
          "conceptLinks": [
            "impact-maps"
          ],
          "hint1": "From the top block row $\\mathbf{M}\\dot{\\mathbf{q}}^+ + \\mathbf{J}^T\\Lambda = \\mathbf{M}\\dot{\\mathbf{q}}^-$, multiply by $\\mathbf{M}^{-1}$ to get $\\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- - \\mathbf{M}^{-1}\\mathbf{J}^T\\Lambda$.",
          "hint2": "Premultiply by $\\mathbf{J}$ and use $\\mathbf{J}\\dot{\\mathbf{q}}^+ = 0$: $\\mathbf{J}\\dot{\\mathbf{q}}^- - (\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)\\Lambda = 0$. Bonus simplification: since $\\|\\hat{\\mathbf{u}}_1\\| = \\|\\hat{\\mathbf{u}}_2\\| = 1$, what does the scalar $\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T$ equal?",
          "checkpoint": {
            "question": "What are the closed-form solutions for the impulse $\\Lambda$ and post-impact velocity $\\dot{\\mathbf{q}}^+$?",
            "options": [
              "$$\\Lambda = (\\mathbf{J}\\mathbf{M}\\mathbf{J}^T)^{-1}\\mathbf{J}\\dot{\\mathbf{q}}^-, \\qquad \\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- + \\mathbf{M}^{-1}\\mathbf{J}^T\\Lambda$$",
              "$$\\Lambda = (\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}\\mathbf{J}\\dot{\\mathbf{q}}^- = \\frac{m_1 m_2}{m_1 + m_2}\\mathbf{J}\\dot{\\mathbf{q}}^-, \\qquad \\dot{\\mathbf{q}}^+ = \\left[\\mathbf{I} - \\mathbf{M}^{-1}\\mathbf{J}^T(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}\\mathbf{J}\\right]\\dot{\\mathbf{q}}^-$$",
              "$$\\Lambda = -\\mathbf{J}\\mathbf{M}\\dot{\\mathbf{q}}^-, \\qquad \\dot{\\mathbf{q}}^+ = \\mathbf{0}$$",
              "$$\\Lambda = 2(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}\\mathbf{J}\\dot{\\mathbf{q}}^-, \\qquad \\dot{\\mathbf{q}}^+ = -\\dot{\\mathbf{q}}^-$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: You must invert $\\mathbf{M}$ (giving $\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T$), and the top row has $+\\mathbf{J}^T\\Lambda$ on the LHS, so $\\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- - \\mathbf{M}^{-1}\\mathbf{J}^T\\Lambda$.",
              "Correct! And because $\\|\\hat{\\mathbf{u}}_1\\|^2 = \\|\\hat{\\mathbf{u}}_2\\|^2 = 1$, $\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T = \\frac{1}{m_1} + \\frac{1}{m_2}$, so $(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}$ is the reduced mass $\\frac{m_1 m_2}{m_1 + m_2}$!",
              "Trap: Only the velocity component along the rope ($\\mathbf{J}\\dot{\\mathbf{q}}^+$) becomes zero; the balls continue moving perpendicular to the rope!",
              "Trap: A factor of $2$ is for a perfectly elastic impact ($e = 1$); a plastic rope catch has $e = 0$."
            ]
          },
          "derivation": "From the impact map:\n          $$\\begin{bmatrix} \\mathbf{M} & \\mathbf{J}^T \\\\ \\mathbf{J} & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{\\mathbf{q}}^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{M}\\dot{\\mathbf{q}}^- \\\\ 0 \\end{bmatrix}$$\n          1. Solve the first row for $\\dot{\\mathbf{q}}^+$:\n          $$\\mathbf{M}\\dot{\\mathbf{q}}^+ = \\mathbf{M}\\dot{\\mathbf{q}}^- - \\mathbf{J}^T\\Lambda \\implies \\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- - \\mathbf{M}^{-1}\\mathbf{J}^T\\Lambda$$\n          2. Substitute into the second row $\\mathbf{J}\\dot{\\mathbf{q}}^+ = 0$:\n          $$\\mathbf{J}\\dot{\\mathbf{q}}^- - (\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)\\Lambda = 0 \\implies \\Lambda = (\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}\\mathbf{J}\\dot{\\mathbf{q}}^-$$\n          Note that since $\\mathbf{J} = [\\hat{\\mathbf{u}}_1^T,\\, \\hat{\\mathbf{u}}_2^T]$ with $\\|\\hat{\\mathbf{u}}_i\\|^2 = 1$ and $\\mathbf{M}^{-1} = \\text{diag}(m_1^{-1}\\mathbf{I}_2,\\, m_2^{-1}\\mathbf{I}_2)$, we have $\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T = \\frac{1}{m_1} + \\frac{1}{m_2} = \\frac{m_1 + m_2}{m_1 m_2}$, so $\\Lambda = \\frac{m_1 m_2}{m_1 + m_2}\\mathbf{J}\\dot{\\mathbf{q}}^-$.<br>\n          3. Substitute $\\Lambda$ back into $\\dot{\\mathbf{q}}^+$:\n          $$\\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- - \\mathbf{M}^{-1}\\mathbf{J}^T(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}\\mathbf{J}\\dot{\\mathbf{q}}^- = \\left[\\mathbf{I} - \\mathbf{M}^{-1}\\mathbf{J}^T(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}\\mathbf{J}\\right]\\dot{\\mathbf{q}}^-$$"
        },
        {
          "stepNumber": 5,
          "title": "Energy Change $\\Delta E$ at Each Plastic Catch",
          "badge": "Step 5 • Impact Energy Loss",
          "goal": "Derive the exact change in mechanical energy $\\Delta E = E^+ - E^- = T^+ - T^-$ across each plastic rope catch.",
          "intuition": "Because position $\\mathbf{q}$ does not change during an instantaneous impact, potential energy is unchanged ($V^+ = V^-$), so $\\Delta E = \\frac{1}{2}(\\dot{\\mathbf{q}}^+)^T\\mathbf{M}\\dot{\\mathbf{q}}^+ - \\frac{1}{2}(\\dot{\\mathbf{q}}^-)^T\\mathbf{M}\\dot{\\mathbf{q}}^-$. Using the orthogonality property $\\mathbf{J}\\dot{\\mathbf{q}}^+ = 0$, the cross terms cancel cleanly!",
          "conceptLinks": [
            "impact-maps"
          ],
          "hint1": "Write $\\dot{\\mathbf{q}}^- = \\dot{\\mathbf{q}}^+ + \\mathbf{M}^{-1}\\mathbf{J}^T\\Lambda$ and expand $T^- = \\frac{1}{2}(\\dot{\\mathbf{q}}^+ + \\mathbf{M}^{-1}\\mathbf{J}^T\\Lambda)^T \\mathbf{M} (\\dot{\\mathbf{q}}^+ + \\mathbf{M}^{-1}\\mathbf{J}^T\\Lambda)$.",
          "hint2": "Notice that the cross term $(\\dot{\\mathbf{q}}^+)^T \\mathbf{M}(\\mathbf{M}^{-1}\\mathbf{J}^T\\Lambda) = (\\mathbf{J}\\dot{\\mathbf{q}}^+)^T\\Lambda = 0$ because $\\mathbf{J}\\dot{\\mathbf{q}}^+ = 0$!",
          "checkpoint": {
            "question": "What is the exact energy change $\\Delta E = T^+ - T^-$ at each plastic catch?",
            "options": [
              "$$\\Delta E = +\\frac{1}{2}(\\mathbf{J}\\dot{\\mathbf{q}}^-)^T(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}(\\mathbf{J}\\dot{\\mathbf{q}}^-)$$",
              "$$\\Delta E = 0$$",
              "$$\\Delta E = -\\frac{1}{2}(\\dot{\\mathbf{q}}^-)^T\\mathbf{M}\\dot{\\mathbf{q}}^-$$",
              "$$\\Delta E = -\\frac{1}{2}(\\mathbf{J}\\dot{\\mathbf{q}}^-)^T(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}(\\mathbf{J}\\dot{\\mathbf{q}}^-) = -\\frac{1}{2}(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)\\Lambda^2 = -\\frac{1}{2}\\left(\\frac{m_1 m_2}{m_1 + m_2}\\right)(\\mathbf{J}\\dot{\\mathbf{q}}^-)^2$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: Energy is lost ($\\Delta E < 0$) during a plastic catch, never gained!",
              "Trap: A plastic impact ($e = 0$) is inelastic and always loses kinetic energy whenever $\\mathbf{J}\\dot{\\mathbf{q}}^- \\ne 0$!",
              "Trap: Only the kinetic energy associated with the relative velocity along the rope is lost, not the entire kinetic energy of both balls.",
              "Correct! Every plastic catch dissipates kinetic energy proportional to the square of the pre-impact rope lengthening rate $\\mathbf{J}\\dot{\\mathbf{q}}^-$."
            ]
          },
          "derivation": "Substitute $\\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- - \\mathbf{M}^{-1}\\mathbf{J}^T\\Lambda$ into $\\Delta E = \\frac{1}{2}(\\dot{\\mathbf{q}}^+)^T\\mathbf{M}\\dot{\\mathbf{q}}^+ - \\frac{1}{2}(\\dot{\\mathbf{q}}^-)^T\\mathbf{M}\\dot{\\mathbf{q}}^-$:\n          $$\\Delta E = -(\\dot{\\mathbf{q}}^-)^T\\mathbf{J}^T\\Lambda + \\frac{1}{2}\\Lambda^T(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)\\Lambda$$\n          Since $(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)\\Lambda = \\mathbf{J}\\dot{\\mathbf{q}}^-$, the first term is $-\\Lambda^T(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)\\Lambda$, leaving:\n          $$\\Delta E = -\\frac{1}{2}\\Lambda^T(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)\\Lambda = -\\frac{1}{2}(\\mathbf{J}\\dot{\\mathbf{q}}^-)^T(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}(\\mathbf{J}\\dot{\\mathbf{q}}^-) = -\\frac{1}{2}\\left(\\frac{m_1 m_2}{m_1 + m_2}\\right)(\\mathbf{J}\\dot{\\mathbf{q}}^-)^2 \\le 0$$"
        },
        {
          "stepNumber": 6,
          "title": "Potential Energy $V(\\mathbf{q})$, Generalized Force $-\\nabla V$ & Hybrid Slack/Taut Transitions",
          "badge": "Step 6 • Potential $V$ & Hybrid Guards",
          "goal": "Write the system potential energy $V(\\mathbf{q})$ including the spring to anchor $\\mathbf{A}$, explain why $T < 0$ is non-physical, and state the hybrid mode-switching events.",
          "intuition": "Ball 1 has both gravitational potential energy $m_1 g y_1$ and elastic spring energy $\\frac{1}{2}k(\\|\\mathbf{p}_1 - \\mathbf{A}\\| - L_0)^2$, while ball 2 has gravitational potential energy $m_2 g y_2$. In the bilateral model, $T < 0$ (which first occurs around $t \\approx 0.47\\text{ s}$) means the rope is pushing the masses apart like a rigid strut! Switching to a 2-mode hybrid system fixes this.",
          "conceptLinks": [
            "kinetic-potential-energy",
            "unilateral-hybrid-systems"
          ],
          "hint1": "Write the distance from ball 1 to anchor $\\mathbf{A} = (x_A, y_A)$ as $L_s(\\mathbf{p}_1) = \\|\\mathbf{p}_1 - \\mathbf{A}\\| = \\sqrt{(x_1 - x_A)^2 + (y_1 - y_A)^2}$, so $V_{\\text{spring}} = \\frac{1}{2}k(L_s - L_0)^2$.",
          "hint2": "In Taut Mode, what variable crossing zero triggers Slack Mode? In Slack Mode, what variable crossing zero triggers the plastic catch impact map?",
          "checkpoint": {
            "question": "Which statement correctly gives $V(\\mathbf{q})$, its negative gradient $-\\frac{\\partial V}{\\partial \\mathbf{q}}^T$, and the two hybrid mode-switching conditions?",
            "options": [
              "$$V = m_1 g y_1 + m_2 g y_2 + \\frac{1}{2}k(\\|\\mathbf{p}_1 - \\mathbf{A}\\| - L_0)^2, \\quad -\\frac{\\partial V}{\\partial \\mathbf{q}}^T = \\begin{bmatrix} -k(1 - \\frac{L_0}{\\|\\mathbf{p}_1-\\mathbf{A}\\|})(x_1 - x_A) \\\\ -m_1 g - k(1 - \\frac{L_0}{\\|\\mathbf{p}_1-\\mathbf{A}\\|})(y_1 - y_A) \\\\ 0 \\\\ -m_2 g \\end{bmatrix}, \\quad \\text{Taut}\\to\\text{Slack: } T=0\\downarrow,\\; \\text{Slack}\\to\\text{Taut: } g=0\\uparrow$$",
              "$$V = -m_1 g y_1 - m_2 g y_2 + \\frac{1}{2}k\\|\\mathbf{p}_1 - \\mathbf{A}\\|^2, \\quad \\text{Taut}\\to\\text{Slack: } g=0\\downarrow,\\; \\text{Slack}\\to\\text{Taut: } T=0\\uparrow$$",
              "$$V = m_1 g y_1 + m_2 g y_2 + \\frac{1}{2}k(y_1 - y_A - L_0)^2, \\quad \\text{Taut}\\to\\text{Slack: } T=0\\uparrow,\\; \\text{Slack}\\to\\text{Taut: } g=0\\downarrow$$",
              "$$V = m_1 g y_1 + m_2 g y_2 + \\frac{1}{2}k(\\|\\mathbf{p}_1 - \\mathbf{A}\\| - L_0)^2, \\quad \\text{Energy } E(t) \\text{ decays continuously during Slack Mode}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! $V$ combines gravity on both balls and the 2D Euclidean spring stretch from anchor $\\mathbf{A}$, and the hybrid guards switch on $T$ crossing $0$ downward and $g$ crossing $0$ upward.",
              "Trap: $+y$ points upward so gravitational potential is $+m_i g y_i$, and the spring has rest length $L_0 \\ne 0$.",
              "Trap: Ball 1 swings in 2D (both $x_1$ and $y_1$ vary), so spring length must use the 2D Euclidean norm $\\|\\mathbf{p}_1 - \\mathbf{A}\\|$, not just vertical height $y_1 - y_A$!",
              "Trap: Both Taut Mode and Slack Mode have zero damping, so $E(t)$ is strictly constant inside each mode and drops ONLY at the discrete catch impacts!"
            ]
          },
          "derivation": "With $+y$ pointing upward and anchor $\\mathbf{A} = [x_A, y_A]^T$, the total potential energy is:\n          $$V(\\mathbf{q}) = m_1 g y_1 + m_2 g y_2 + \\frac{1}{2}k\\left(\\|\\mathbf{p}_1 - \\mathbf{A}\\| - L_0\\right)^2, \\qquad \\|\\mathbf{p}_1 - \\mathbf{A}\\| = \\sqrt{(x_1 - x_A)^2 + (y_1 - y_A)^2}$$\n          Differentiating $V(\\mathbf{q})$ gives the conservative generalized force vector:\n          $$-\\left(\\frac{\\partial V}{\\partial \\mathbf{q}}\\right)^T = \\begin{bmatrix} -k\\left(\\|\\mathbf{p}_1 - \\mathbf{A}\\| - L_0\\right)\\frac{x_1 - x_A}{\\|\\mathbf{p}_1 - \\mathbf{A}\\|} \\\\ -m_1 g - k\\left(\\|\\mathbf{p}_1 - \\mathbf{A}\\| - L_0\\right)\\frac{y_1 - y_A}{\\|\\mathbf{p}_1 - \\mathbf{A}\\|} \\\\ 0 \\\\ -m_2 g \\end{bmatrix}$$\n          <strong>Why $T < 0$ is Non-Physical & Hybrid Mode Logic:</strong>\n          <ul>\n            <li>A flexible rope can only pull in tension ($T \\ge 0$); it cannot support compression. When $T < 0$ in the bilateral model, the constraint artificially pushes the balls outward along the tangent lines as if the rope were a rigid metal rod.</li>\n            <li><strong>Taut $\\to$ Slack Event:</strong> Integrate the constrained DAE until tension $T(t)$ crosses $0$ going down ($T = 0,\\, \\dot{T} < 0$), then drop the rope constraint ($T = 0$).</li>\n            <li><strong>Slack $\\to$ Taut (Catch) Event:</strong> Integrate unconstrained motion ($\\mathbf{M}\\ddot{\\mathbf{q}} = -\\nabla V$) until $g(\\mathbf{q})$ crosses $0$ going up ($g = 0,\\, \\dot{g} = \\mathbf{J}\\dot{\\mathbf{q}}^- > 0$), apply the plastic impact map from (c) (losing $\\Delta E$), and resume Taut Mode.</li>\n          </ul>"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Hand Derivation — HW 2 Problem 3 (a–e)",
        "items": [
          {
            "label": "(a) Rope Constraint $g(\\mathbf{q})$",
            "math": "$$g(\\mathbf{q}) = \\underbrace{\\sqrt{d_1^2 - r^2}}_{s_1} + \\underbrace{\\sqrt{d_2^2 - r^2}}_{s_2} + r\\underbrace{\\left[2\\pi - \\left(\\vartheta_1 + \\arccos\\frac{r}{d_1}\\right) - \\left(\\vartheta_2 + \\arccos\\frac{r}{d_2}\\right)\\right]}_{\\beta} - \\ell$$"
          },
          {
            "label": "(b) Simplified Unit-Tangent Constraint Jacobian $\\mathbf{J}$",
            "math": "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} \\frac{s_1 x_1 - r y_1}{d_1^2}, & \\frac{s_1 y_1 + r x_1}{d_1^2}, & \\frac{s_2 x_2 + r y_2}{d_2^2}, & \\frac{s_2 y_2 - r x_2}{d_2^2} \\end{bmatrix} = \\begin{bmatrix} \\hat{\\mathbf{u}}_1^T & \\hat{\\mathbf{u}}_2^T \\end{bmatrix}$$"
          },
          {
            "label": "(c) Plastic Catch Impulse $\\Lambda$, Post-Impact Velocity $\\dot{\\mathbf{q}}^+$ & Energy Loss $\\Delta E$",
            "math": "$$\\Lambda = (\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}\\mathbf{J}\\dot{\\mathbf{q}}^- = \\frac{m_1 m_2}{m_1 + m_2}\\mathbf{J}\\dot{\\mathbf{q}}^-, \\qquad \\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- - \\mathbf{M}^{-1}\\mathbf{J}^T\\Lambda$$ $$\\Delta E = -\\frac{1}{2}(\\mathbf{J}\\dot{\\mathbf{q}}^-)^T(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}(\\mathbf{J}\\dot{\\mathbf{q}}^-) = -\\frac{1}{2}\\left(\\frac{m_1 m_2}{m_1 + m_2}\\right)(\\mathbf{J}\\dot{\\mathbf{q}}^-)^2$$"
          },
          {
            "label": "(d–e) Potential Energy $V(\\mathbf{q})$ & Hybrid Mode Guards",
            "math": "$$V(\\mathbf{q}) = m_1 g y_1 + m_2 g y_2 + \\frac{1}{2}k(\\|\\mathbf{p}_1 - \\mathbf{A}\\| - L_0)^2, \\quad \\text{Guards: } T=0\\downarrow (\\text{slack}),\\; g=0\\uparrow (\\text{catch})$$"
          }
        ]
      }
    },
    {
      "id": "exam2-new-1",
      "code": "New Exam Practice • Problem 1",
      "title": "Planar Cart-Pendulum Striking a Rigid Bumper (Lagrangian EOM to Plastic Impact Jump)",
      "subtitle": "Minimal-Coordinate Manipulator Matrix $\\mathbf{M}(\\mathbf{q})$, Unilateral Wall Constraint $g_w(\\mathbf{q})$, Impulse $\\Lambda$ & Angular Velocity Whip",
      "sourceTag": "New Exam 2 Synthesis",
      "category": "Contact & Impacts",
      "difficulty": "Core Exam Standard",
      "estimatedMinutes": 25,
      "lectureRefs": [
        10,
        11,
        14,
        20,
        21
      ],
      "conceptTags": [
        "generalized-coordinates",
        "kinetic-potential-energy",
        "manipulator-equation",
        "impact-maps"
      ],
      "parameters": [
        {
          "symbol": "$\\mathbf{q} = [x,\\, \\theta]^T$",
          "desc": "Cart horizontal position $x$ and pendulum angle $\\theta$ from vertical"
        },
        {
          "symbol": "$M,\\; m,\\; \\ell$",
          "desc": "Cart mass $M$, point-mass bob $m$, massless rod length $\\ell$"
        },
        {
          "symbol": "$k,\\; b$",
          "desc": "Wall-mounted spring stiffness $k$ and viscous cart damper $b$"
        },
        {
          "symbol": "$g_w(\\mathbf{q}) = x = 0$",
          "desc": "Rigid bumper stop at $x = 0$ (perfectly plastic impact $e = 0$)"
        }
      ],
      "prompt": "A cart of mass $M$ rolls along a horizontal $x$-axis and is connected to the origin wall by a linear spring of stiffness $k$ (unstretched at $x = L_0$) and a viscous damper of coefficient $b$. A point-mass bob $m$ hangs from the cart on a massless rigid rod of length $\\ell$ at angle $\\theta$ measured counterclockwise from straight down. Use generalized coordinates $\\mathbf{q} = [x,\\, \\theta]^T$.<br><br>\n      At $t = t_c$, while the cart is moving to the left with state $\\mathbf{q} = [0,\\, \\theta_c]^T$ and pre-impact velocity $\\dot{\\mathbf{q}}^- = [\\dot{x}^-,\\, \\dot{\\theta}^-]^T$ ($\\dot{x}^- < 0$), the cart strikes a rigid inelastic bumper at $x = 0$ that brings the cart instantaneously to rest ($\\dot{x}^+ = 0$).<br><br>\n      <strong>Your Goal:</strong> By hand, derive (1) $T, V$, and the generalized force vector $\\mathbf{Q}$, (2) the exact Euler-Lagrange equations in manipulator form $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}})$, (3) the wall-contact Jacobian $\\mathbf{J}_w$ and block-matrix impact map, and (4) the closed-form wall impulse $\\Lambda$, post-impact angular velocity $\\dot{\\theta}^+$ (showing why stopping the cart whips the pendulum forward!), and energy loss $\\Delta E$.",
      "svgDiagram": "<svg viewBox=\"0 0 420 235\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cart-pendulum system approaching a rigid bumper at x=0\">\n        <defs>\n          <marker id=\"arr-e1\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n            <path d=\"M 0 1.5 L 10 5 L 0 8.5 z\" fill=\"#4f46e5\"/>\n          </marker>\n          <marker id=\"arr-r1\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n            <path d=\"M 0 1.5 L 10 5 L 0 8.5 z\" fill=\"#e11d48\"/>\n          </marker>\n        </defs>\n        <!-- Rigid Wall at x = 0 -->\n        <rect x=\"38\" y=\"25\" width=\"14\" height=\"115\" fill=\"#cbd5e1\" stroke=\"#334155\" stroke-width=\"2\"/>\n        <line x1=\"52\" y1=\"25\" x2=\"52\" y2=\"140\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n        <!-- Rigid Bumper Stop at x = 0 -->\n        <rect x=\"52\" y=\"72\" width=\"14\" height=\"22\" rx=\"3\" fill=\"#fca5a5\" stroke=\"#b91c1c\" stroke-width=\"2\"/>\n        <text x=\"60\" y=\"64\" font-size=\"10\" font-weight=\"800\" fill=\"#b91c1c\">Rigid Stop (x=0)</text>\n        <!-- Horizontal Track -->\n        <line x1=\"38\" y1=\"115\" x2=\"385\" y2=\"115\" stroke=\"#334155\" stroke-width=\"2.2\"/>\n        <!-- Spring k and Damper b -->\n        <path d=\"M 52 98 L 75 98 L 82 91 L 92 105 L 102 91 L 112 105 L 122 91 L 130 98 L 175 98\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"1.8\"/>\n        <text x=\"102\" y=\"86\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\">k, b</text>\n        <!-- Cart M -->\n        <rect x=\"175\" y=\"70\" width=\"76\" height=\"36\" rx=\"6\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n        <circle cx=\"192\" cy=\"110\" r=\"5\" fill=\"#334155\"/>\n        <circle cx=\"234\" cy=\"110\" r=\"5\" fill=\"#334155\"/>\n        <text x=\"205\" y=\"92\" font-size=\"13\" font-weight=\"800\" fill=\"#1e3a8a\">M</text>\n        <!-- Coordinate x -->\n        <line x1=\"52\" y1=\"38\" x2=\"213\" y2=\"38\" stroke=\"#4f46e5\" stroke-width=\"1.8\" marker-end=\"url(#arr-e1)\"/>\n        <text x=\"128\" y=\"32\" font-size=\"12\" font-style=\"italic\" font-weight=\"800\" fill=\"#4f46e5\">x</text>\n        <!-- Vertical Reference & Pendulum Rod -->\n        <line x1=\"213\" y1=\"88\" x2=\"213\" y2=\"205\" stroke=\"#94a3b8\" stroke-dasharray=\"4,4\" stroke-width=\"1.5\"/>\n        <line x1=\"213\" y1=\"88\" x2=\"282\" y2=\"192\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n        <text x=\"256\" y=\"138\" font-size=\"13\" font-style=\"italic\" font-weight=\"700\" fill=\"#0f172a\">ℓ</text>\n        <!-- Angle theta -->\n        <path d=\"M 213 145 A 57 57 0 0 0 244 136\" fill=\"none\" stroke=\"#0d9488\" stroke-width=\"1.8\" marker-end=\"url(#arr-e1)\"/>\n        <text x=\"225\" y=\"162\" font-size=\"12\" font-style=\"italic\" font-weight=\"800\" fill=\"#0d9488\">θ</text>\n        <!-- Bob m & Post-impact whip arrow -->\n        <circle cx=\"282\" cy=\"192\" r=\"11\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/>\n        <text x=\"298\" y=\"197\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">m</text>\n        <line x1=\"282\" y1=\"192\" x2=\"322\" y2=\"165\" stroke=\"#e11d48\" stroke-width=\"2\" marker-end=\"url(#arr-r1)\"/>\n        <text x=\"315\" y=\"158\" font-size=\"10\" font-weight=\"700\" fill=\"#be123c\">θ̇⁺ jump on impact</text>\n      </svg>",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Inertial Kinematics, Energies $T$ & $V$, and Generalized Force $\\mathbf{Q}$",
          "badge": "Step 1 • Energies & Virtual Work",
          "goal": "Write the bob's position $\\mathbf{r}_b$ and velocity $\\dot{\\mathbf{r}}_b$, formulate $T$ and $V$, and find the non-conservative generalized force vector $\\mathbf{Q} = [Q_x, Q_\\theta]^T$.",
          "intuition": "With $+x$ right and $+y$ up, the bob is at $\\mathbf{r}_b = [x + \\ell\\sin\\theta,\\, -\\ell\\cos\\theta]^T$. Differentiating gives $\\dot{\\mathbf{r}}_b = [\\dot{x} + \\ell\\dot{\\theta}\\cos\\theta,\\, \\ell\\dot{\\theta}\\sin\\theta]^T$. The spring is conservative (included in $V$), whereas the viscous damper $-b\\dot{x}$ goes into $Q_x$.",
          "conceptLinks": [
            "generalized-coordinates",
            "kinetic-potential-energy",
            "generalized-forces"
          ],
          "hint1": "Expand $\\|\\dot{\\mathbf{r}}_b\\|^2 = (\\dot{x} + \\ell\\dot{\\theta}\\cos\\theta)^2 + (\\ell\\dot{\\theta}\\sin\\theta)^2 = \\dot{x}^2 + 2\\ell\\dot{x}\\dot{\\theta}\\cos\\theta + \\ell^2\\dot{\\theta}^2$.",
          "hint2": "Combine the spring potential $\\frac{1}{2}k(x - L_0)^2$ and gravitational potential $-mg\\ell\\cos\\theta$ into $V$, leaving only viscous damping in $\\mathbf{Q}$.",
          "checkpoint": {
            "question": "Which expressions correctly give $T$, $V$, and $\\mathbf{Q}$?",
            "options": [
              "$$T = \\frac{1}{2}M\\dot{x}^2 + \\frac{1}{2}m\\ell^2\\dot{\\theta}^2, \\quad V = \\frac{1}{2}k(x - L_0)^2 - mg\\ell\\cos\\theta, \\quad \\mathbf{Q} = \\begin{bmatrix} -b\\dot{x} \\\\ 0 \\end{bmatrix}$$",
              "$$T = \\frac{1}{2}(M+m)\\dot{x}^2 + m\\ell\\dot{x}\\dot{\\theta}\\cos\\theta + \\frac{1}{2}m\\ell^2\\dot{\\theta}^2, \\quad V = \\frac{1}{2}k(x - L_0)^2 - mg\\ell\\cos\\theta, \\quad \\mathbf{Q} = \\begin{bmatrix} -b\\dot{x} \\\\ 0 \\end{bmatrix}$$",
              "$$T = \\frac{1}{2}(M+m)\\dot{x}^2 + m\\ell\\dot{x}\\dot{\\theta}\\sin\\theta + \\frac{1}{2}m\\ell^2\\dot{\\theta}^2, \\quad V = +mg\\ell\\cos\\theta, \\quad \\mathbf{Q} = \\begin{bmatrix} -b\\dot{x} - k(x-L_0) \\\\ 0 \\end{bmatrix}$$",
              "$$T = \\frac{1}{2}(M+m)\\dot{x}^2 + m\\ell\\dot{x}\\dot{\\theta}\\cos\\theta + \\frac{1}{2}m\\ell^2\\dot{\\theta}^2, \\quad V = \\frac{1}{2}kx^2, \\quad \\mathbf{Q} = \\begin{bmatrix} -b\\dot{x} \\\\ -b\\dot{\\theta} \\end{bmatrix}$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: You dropped the cross-term $m\\ell\\dot{x}\\dot{\\theta}\\cos\\theta$ and the bob's horizontal translation $\\frac{1}{2}m\\dot{x}^2$!",
              "Correct! $T$ includes the cross-coupling term $m\\ell\\dot{x}\\dot{\\theta}\\cos\\theta$, $V$ holds both spring and gravity potentials, and $\\mathbf{Q}$ holds only the cart damper $-b\\dot{x}$.",
              "Trap: $\\frac{d}{dt}(\\sin\\theta) = \\dot{\\theta}\\cos\\theta$, and if the spring is in $V$, do not also put $-k(x-L_0)$ in $\\mathbf{Q}$!",
              "Trap: Don't forget gravitational potential energy $-mg\\ell\\cos\\theta$ in $V$!"
            ]
          },
          "derivation": "The bob's position and velocity are:\n          $$\\mathbf{r}_b = \\begin{bmatrix} x + \\ell\\sin\\theta \\\\ -\\ell\\cos\\theta \\end{bmatrix} \\implies \\dot{\\mathbf{r}}_b = \\begin{bmatrix} \\dot{x} + \\ell\\dot{\\theta}\\cos\\theta \\\\ \\ell\\dot{\\theta}\\sin\\theta \\end{bmatrix}$$\n          Squaring $\\dot{\\mathbf{r}}_b$ gives $\\|\\dot{\\mathbf{r}}_b\\|^2 = \\dot{x}^2 + 2\\ell\\dot{x}\\dot{\\theta}\\cos\\theta + \\ell^2\\dot{\\theta}^2$. Thus:\n          $$T = \\frac{1}{2}(M+m)\\dot{x}^2 + m\\ell\\dot{x}\\dot{\\theta}\\cos\\theta + \\frac{1}{2}m\\ell^2\\dot{\\theta}^2, \\qquad V = \\frac{1}{2}k(x - L_0)^2 - mg\\ell\\cos\\theta, \\qquad \\mathbf{Q} = \\begin{bmatrix} -b\\dot{x} \\\\ 0 \\end{bmatrix}$$"
        },
        {
          "stepNumber": 2,
          "title": "Euler-Lagrange Equations in Manipulator Form $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}$",
          "badge": "Step 2 • Manipulator Form",
          "goal": "Apply the Euler-Lagrange operator to $L = T - V$ and write the $2\\times 2$ mass matrix $\\mathbf{M}(\\mathbf{q})$ and right-hand side vector $\\mathbf{f}(\\mathbf{q}, \\dot{\\mathbf{q}})$.",
          "intuition": "When differentiating $\\frac{\\partial L}{\\partial \\dot{x}} = (M+m)\\dot{x} + m\\ell\\dot{\\theta}\\cos\\theta$ with respect to time, the product rule on $\\dot{\\theta}\\cos\\theta$ produces both the angular acceleration coupling $m\\ell\\ddot{\\theta}\\cos\\theta$ and the centrifugal term $-m\\ell\\dot{\\theta}^2\\sin\\theta$!",
          "conceptLinks": [
            "manipulator-equation"
          ],
          "hint1": "For the $x$-equation: $\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{x}}\\right) = (M+m)\\ddot{x} + m\\ell\\ddot{\\theta}\\cos\\theta - m\\ell\\dot{\\theta}^2\\sin\\theta$, and $\\frac{\\partial L}{\\partial x} = -k(x - L_0)$.",
          "hint2": "For the $\\theta$-equation: $\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{\\theta}}\\right) = m\\ell^2\\ddot{\\theta} + m\\ell\\ddot{x}\\cos\\theta - m\\ell\\dot{x}\\dot{\\theta}\\sin\\theta$, and $\\frac{\\partial L}{\\partial \\theta} = -m\\ell\\dot{x}\\dot{\\theta}\\sin\\theta - mg\\ell\\sin\\theta$. Notice that $-m\\ell\\dot{x}\\dot{\\theta}\\sin\\theta$ cancels out!",
          "checkpoint": {
            "question": "What is the manipulator form $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q}, \\dot{\\mathbf{q}})$ prior to wall impact?",
            "options": [
              "$$\\begin{bmatrix} M+m & m\\ell\\cos\\theta \\\\ m\\ell\\cos\\theta & m\\ell^2 \\end{bmatrix} \\begin{bmatrix} \\ddot{x} \\\\ \\ddot{\\theta} \\end{bmatrix} = \\begin{bmatrix} -m\\ell\\dot{\\theta}^2\\sin\\theta - k(x - L_0) - b\\dot{x} \\\\ +mg\\ell\\sin\\theta \\end{bmatrix}$$",
              "$$\\begin{bmatrix} M+m & 0 \\\\ 0 & m\\ell^2 \\end{bmatrix} \\begin{bmatrix} \\ddot{x} \\\\ \\ddot{\\theta} \\end{bmatrix} = \\begin{bmatrix} -k(x - L_0) - b\\dot{x} \\\\ -mg\\ell\\sin\\theta \\end{bmatrix}$$",
              "$$\\begin{bmatrix} M+m & m\\ell\\cos\\theta \\\\ m\\ell\\cos\\theta & m\\ell^2 \\end{bmatrix} \\begin{bmatrix} \\ddot{x} \\\\ \\ddot{\\theta} \\end{bmatrix} = \\begin{bmatrix} m\\ell\\dot{\\theta}^2\\sin\\theta - k(x - L_0) - b\\dot{x} \\\\ -mg\\ell\\sin\\theta \\end{bmatrix}$$",
              "$$\\begin{bmatrix} M & m\\ell\\sin\\theta \\\\ m\\ell\\sin\\theta & m\\ell^2 \\end{bmatrix} \\begin{bmatrix} \\ddot{x} \\\\ \\ddot{\\theta} \\end{bmatrix} = \\begin{bmatrix} m\\ell\\dot{\\theta}^2\\cos\\theta - b\\dot{x} \\\\ -mg\\ell\\sin\\theta \\end{bmatrix}$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: Moving $-m\\ell\\dot{\\theta}^2\\sin\\theta$ from the LHS to the RHS flips its sign to $+m\\ell\\dot{\\theta}^2\\sin\\theta$, and a hanging pendulum has restoring torque $-mg\\ell\\sin\\theta$.",
              "Trap: You omitted the off-diagonal inertial coupling $m\\ell\\cos\\theta$ and the centrifugal term $m\\ell\\dot{\\theta}^2\\sin\\theta$!",
              "Correct! Moving $-m\\ell\\dot{\\theta}^2\\sin\\theta$ to the right-hand side makes it $+m\\ell\\dot{\\theta}^2\\sin\\theta$, and the gravity restoring torque is $-mg\\ell\\sin\\theta$.",
              "Trap: The $(1,1)$ entry is $M+m$ (not $M$), and the coupling entry is $m\\ell\\cos\\theta$."
            ]
          },
          "derivation": "Evaluating Lagrange's equations for $x$ and $\\theta$:\n          $$\\text{For } x: \\quad (M+m)\\ddot{x} + m\\ell\\cos\\theta\\,\\ddot{\\theta} - m\\ell\\dot{\\theta}^2\\sin\\theta + k(x - L_0) = -b\\dot{x}$$\n          $$\\text{For } \\theta: \\quad m\\ell\\cos\\theta\\,\\ddot{x} + m\\ell^2\\ddot{\\theta} + mg\\ell\\sin\\theta = 0$$\n          Collecting into $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q}, \\dot{\\mathbf{q}})$:\n          $$\\underbrace{\\begin{bmatrix} M+m & m\\ell\\cos\\theta \\\\ m\\ell\\cos\\theta & m\\ell^2 \\end{bmatrix}}_{\\mathbf{M}(\\mathbf{q})} \\begin{bmatrix} \\ddot{x} \\\\ \\ddot{\\theta} \\end{bmatrix} = \\underbrace{\\begin{bmatrix} m\\ell\\dot{\\theta}^2\\sin\\theta - k(x - L_0) - b\\dot{x} \\\\ -mg\\ell\\sin\\theta \\end{bmatrix}}_{\\mathbf{f}(\\mathbf{q}, \\dot{\\mathbf{q}})}$$"
        },
        {
          "stepNumber": 3,
          "title": "Wall Contact Jacobian $\\mathbf{J}_w$ and the $3\\times 3$ Impact Map",
          "badge": "Step 3 • Impact Map Setup",
          "goal": "Write the wall contact constraint $g_w(\\mathbf{q}) = x = 0$, its $1\\times 2$ Jacobian $\\mathbf{J}_w = \\partial g_w/\\partial\\mathbf{q}$, and the $3\\times 3$ plastic impact matrix system at $\\theta = \\theta_c$.",
          "intuition": "Even when we work in minimal coordinates $\\mathbf{q} = [x, \\theta]^T$, an external bumper at $x = 0$ imposes a unilateral constraint $g_w(\\mathbf{q}) = x \\ge 0$! Its Jacobian is simply $\\mathbf{J}_w = \\frac{\\partial g_w}{\\partial \\mathbf{q}} = [1,\\, 0]$. Because $\\mathbf{M}(\\theta_c)$ is <strong>non-diagonal</strong>, an impulse $\\Lambda$ on the cart ($x$) instantaneously changes the angular velocity $\\dot{\\theta}^+$ of the pendulum!",
          "conceptLinks": [
            "constraint-jacobian",
            "impact-maps"
          ],
          "hint1": "Differentiate $g_w(x, \\theta) = x$ with respect to $[x, \\theta]$ to get $\\mathbf{J}_w = [1,\\, 0]$.",
          "hint2": "Substitute $\\mathbf{M}(\\theta_c)$ and $\\mathbf{J}_w = [1,\\, 0]$ into the plastic impact map $\\begin{bmatrix}\\mathbf{M} & \\mathbf{J}_w^T \\\\ \\mathbf{J}_w & 0\\end{bmatrix}\\begin{bmatrix}\\dot{\\mathbf{q}}^+ \\\\ \\Lambda\\end{bmatrix} = \\begin{bmatrix}\\mathbf{M}\\dot{\\mathbf{q}}^- \\\\ 0\\end{bmatrix}$.",
          "checkpoint": {
            "question": "What is the explicit $3\\times 3$ impact matrix equation when the cart strikes the bumper at $x = 0,\\, \\theta = \\theta_c$?",
            "options": [
              "$$\\begin{bmatrix} M+m & m\\ell\\cos\\theta_c & 1 \\\\ m\\ell\\cos\\theta_c & m\\ell^2 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} (M+m)\\dot{x}^- + m\\ell\\cos\\theta_c\\,\\dot{\\theta}^- \\\\ m\\ell\\cos\\theta_c\\,\\dot{x}^- + m\\ell^2\\dot{\\theta}^- \\\\ 0 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} M & 0 & 1 \\\\ 0 & m\\ell^2 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} M\\dot{x}^- \\\\ m\\ell^2\\dot{\\theta}^- \\\\ 0 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} M+m & m\\ell\\cos\\theta_c & 1 \\\\ m\\ell\\cos\\theta_c & m\\ell^2 & 1 \\\\ 1 & 1 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} (M+m)\\dot{x}^- \\\\ m\\ell^2\\dot{\\theta}^- \\\\ 0 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} M+m & m\\ell\\cos\\theta_c & 0 \\\\ m\\ell\\cos\\theta_c & m\\ell^2 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} (M+m)\\dot{x}^- + m\\ell\\cos\\theta_c\\,\\dot{\\theta}^- \\\\ m\\ell\\cos\\theta_c\\,\\dot{x}^- + m\\ell^2\\dot{\\theta}^- \\\\ 0 \\end{bmatrix}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! Notice how row 2 ($m\\ell\\cos\\theta_c\\,\\dot{x}^+ + m\\ell^2\\dot{\\theta}^+ = m\\ell\\cos\\theta_c\\,\\dot{x}^- + m\\ell^2\\dot{\\theta}^-$) has zero impulse ($J_{w,2} = 0$), meaning angular momentum of the bob about the cart pivot is conserved across the cart-wall impact!",
              "Trap: Using a diagonal $\\mathbf{M}$ ignores the inertial coupling between the cart and pendulum!",
              "Trap: The wall only contacts the cart ($g_w = x$), so $\\mathbf{J}_w = [1, 0]$, not $[1, 1]$.",
              "Trap: $\\mathbf{J}_w = [0, 1]$ would mean the pendulum bob hit an angular stop, rather than the cart hitting the wall at $x = 0$!"
            ]
          },
          "derivation": "The unilateral bumper constraint is $g_w(\\mathbf{q}) = x \\ge 0$, so its $1\\times 2$ Jacobian is:\n          $$\\mathbf{J}_w = \\frac{\\partial g_w}{\\partial \\mathbf{q}} = \\begin{bmatrix} 1 & 0 \\end{bmatrix}$$\n          For a perfectly plastic wall stop ($\\mathbf{J}_w\\dot{\\mathbf{q}}^+ = \\dot{x}^+ = 0$), the impact map $\\begin{bmatrix}\\mathbf{M} & \\mathbf{J}_w^T \\\\ \\mathbf{J}_w & 0\\end{bmatrix}\\begin{bmatrix}\\dot{\\mathbf{q}}^+ \\\\ \\Lambda\\end{bmatrix} = \\begin{bmatrix}\\mathbf{M}\\dot{\\mathbf{q}}^- \\\\ 0\\end{bmatrix}$ is:\n          $$\\begin{bmatrix} M+m & m\\ell\\cos\\theta_c & 1 \\\\ m\\ell\\cos\\theta_c & m\\ell^2 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} (M+m)\\dot{x}^- + m\\ell\\cos\\theta_c\\,\\dot{\\theta}^- \\\\ m\\ell\\cos\\theta_c\\,\\dot{x}^- + m\\ell^2\\dot{\\theta}^- \\\\ 0 \\end{bmatrix}$$"
        },
        {
          "stepNumber": 4,
          "title": "Solving for Post-Impact Angular Velocity $\\dot{\\theta}^+$, Impulse $\\Lambda$ & Energy Loss $\\Delta E$",
          "badge": "Step 4 • Whip Effect & Impulse",
          "goal": "Solve the $3\\times 3$ impact system by hand for $\\dot{x}^+$, $\\dot{\\theta}^+$, the wall impulse $\\Lambda$, and the energy change $\\Delta E$.",
          "intuition": "Look at how easy this $3\\times 3$ system is to solve by hand without even inverting $\\mathbf{M}$ first!<br>1) Row 3 immediately gives $\\dot{x}^+ = 0$.<br>2) Substituting $\\dot{x}^+ = 0$ into Row 2 gives $m\\ell^2\\dot{\\theta}^+ = m\\ell\\cos\\theta_c\\,\\dot{x}^- + m\\ell^2\\dot{\\theta}^-$, which solves for $\\dot{\\theta}^+$ in one line!<br>3) Substituting $\\dot{x}^+ = 0$ and $\\dot{\\theta}^+$ into Row 1 gives $\\Lambda$!",
          "conceptLinks": [
            "impact-maps"
          ],
          "hint1": "Divide Row 2 ($m\\ell^2\\dot{\\theta}^+ = m\\ell\\cos\\theta_c\\,\\dot{x}^- + m\\ell^2\\dot{\\theta}^-$) by $m\\ell^2$ to get $\\dot{\\theta}^+$.",
          "hint2": "Plug $\\dot{x}^+ = 0$ and $\\dot{\\theta}^+ - \\dot{\\theta}^- = \\frac{\\cos\\theta_c}{\\ell}\\dot{x}^-$ into Row 1: $m\\ell\\cos\\theta_c(\\dot{\\theta}^+ - \\dot{\\theta}^-) + \\Lambda = (M+m)\\dot{x}^-$. Solve for $\\Lambda$!",
          "checkpoint": {
            "question": "What are the post-impact angular velocity $\\dot{\\theta}^+$, wall impulse $\\Lambda$, and kinetic energy change $\\Delta E$?",
            "options": [
              "$$\\dot{\\theta}^+ = \\dot{\\theta}^- - \\frac{\\sin\\theta_c}{\\ell}\\dot{x}^-, \\quad \\Lambda = (M + m\\cos^2\\theta_c)\\dot{x}^-, \\quad \\Delta E = -\\frac{1}{2}m\\ell^2(\\dot{\\theta}^-)^2$$",
              "$$\\dot{\\theta}^+ = \\dot{\\theta}^-, \\quad \\Lambda = (M + m)\\dot{x}^-, \\quad \\Delta E = -\\frac{1}{2}(M + m)(\\dot{x}^-)^2$$",
              "$$\\dot{\\theta}^+ = 0, \\quad \\Lambda = M\\dot{x}^-, \\quad \\Delta E = -\\frac{1}{2}M(\\dot{x}^-)^2$$",
              "$$\\dot{\\theta}^+ = \\dot{\\theta}^- + \\frac{\\cos\\theta_c}{\\ell}\\dot{x}^-, \\quad \\Lambda = \\left(M + m\\sin^2\\theta_c\\right)\\dot{x}^-, \\quad \\Delta E = -\\frac{1}{2}\\left(M + m\\sin^2\\theta_c\\right)(\\dot{x}^-)^2$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: Using $\\sin^2\\theta_c = 1 - \\cos^2\\theta_c$, the effective mass is $M + m - m\\cos^2\\theta_c = M + m\\sin^2\\theta_c$.",
              "Trap: Because $\\mathbf{M}(\\mathbf{q})$ has off-diagonal term $m\\ell\\cos\\theta_c$, the pendulum angular velocity DOES jump when the cart stops! Only when $\\theta_c = \\pm 90^\\circ$ (horizontal) is $M_{\\text{eff}} = M + m$.",
              "Trap: The bumper only stops the cart ($\\dot{x}^+ = 0$); the pendulum is free to pivot about the cart joint!",
              "Correct! Stopping the cart causes the pendulum angular velocity to jump by $\\frac{\\cos\\theta_c}{\\ell}\\dot{x}^-$, and the effective mass felt by the wall is $M_{\\text{eff}} = M + m\\sin^2\\theta_c$!"
            ]
          },
          "derivation": "<strong>1. Post-Impact Velocities:</strong> Row 3 gives $\\dot{x}^+ = 0$. Substituting $\\dot{x}^+ = 0$ into Row 2:\n          $$m\\ell^2\\dot{\\theta}^+ = m\\ell\\cos\\theta_c\\,\\dot{x}^- + m\\ell^2\\dot{\\theta}^- \\implies \\dot{\\theta}^+ = \\dot{\\theta}^- + \\frac{\\cos\\theta_c}{\\ell}\\dot{x}^-$$\n          <strong>2. Wall Impulse $\\Lambda$:</strong> Substituting $\\dot{x}^+ = 0$ and $\\dot{\\theta}^+ - \\dot{\\theta}^- = \\frac{\\cos\\theta_c}{\\ell}\\dot{x}^-$ into Row 1:\n          $$\\Lambda = (M+m)\\dot{x}^- - m\\ell\\cos\\theta_c(\\dot{\\theta}^+ - \\dot{\\theta}^-) = (M+m)\\dot{x}^- - m\\cos^2\\theta_c\\,\\dot{x}^- = \\left(M + m\\sin^2\\theta_c\\right)\\dot{x}^-$$\n          (Notice that $(\\mathbf{J}_w\\mathbf{M}^{-1}\\mathbf{J}_w^T)^{-1} = M + m\\sin^2\\theta_c$ is the exact effective horizontal mass of the cart-pendulum system!)<br>\n          <strong>3. Energy Change $\\Delta E$:</strong> Using our general plastic impact energy formula $\\Delta E = -\\frac{1}{2}(\\mathbf{J}_w\\dot{\\mathbf{q}}^-)^T(\\mathbf{J}_w\\mathbf{M}^{-1}\\mathbf{J}_w^T)^{-1}(\\mathbf{J}_w\\dot{\\mathbf{q}}^-)$ with $\\mathbf{J}_w\\dot{\\mathbf{q}}^- = \\dot{x}^-$:\n          $$\\Delta E = -\\frac{1}{2}\\left(M + m\\sin^2\\theta_c\\right)(\\dot{x}^-)^2 \\le 0$$"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — New Exam Problem 1 (Cart-Pendulum Bumper Impact)",
        "items": [
          {
            "label": "(1) Lagrangian $\\mathcal{L}(\\mathbf{q}, \\dot{\\mathbf{q}})$ & Non-Conservative Generalized Forces $\\mathbf{Q}$",
            "math": "$$\\mathcal{L} = \\frac{1}{2}(M + m)\\dot{x}^2 + m\\ell\\cos\\theta\\,\\dot{x}\\dot{\\theta} + \\frac{1}{2}m\\ell^2\\dot{\\theta}^2 - \\frac{1}{2}k(x - L_0)^2 + mg\\ell\\cos\\theta, \\qquad \\mathbf{Q} = \\begin{bmatrix} -b\\dot{x} \\\\ 0 \\end{bmatrix}$$"
          },
          {
            "label": "(2) Manipulator Equations of Motion Prior to Impact",
            "math": "$$\\begin{bmatrix} M+m & m\\ell\\cos\\theta \\\\ m\\ell\\cos\\theta & m\\ell^2 \\end{bmatrix} \\begin{bmatrix} \\ddot{x} \\\\ \\ddot{\\theta} \\end{bmatrix} = \\begin{bmatrix} m\\ell\\dot{\\theta}^2\\sin\\theta - k(x - L_0) - b\\dot{x} \\\\ -mg\\ell\\sin\\theta \\end{bmatrix}$$"
          },
          {
            "label": "(3–4) Post-Impact Velocities, Wall Impulse $\\Lambda$ & Energy Loss $\\Delta E$",
            "math": "$$\\dot{x}^+ = 0, \\qquad \\dot{\\theta}^+ = \\dot{\\theta}^- + \\frac{\\cos\\theta_c}{\\ell}\\dot{x}^-$$ $$\\Lambda = \\left(M + m\\sin^2\\theta_c\\right)\\dot{x}^-, \\qquad \\Delta E = -\\frac{1}{2}\\left(M + m\\sin^2\\theta_c\\right)(\\dot{x}^-)^2$$"
          }
        ]
      }
    },
    {
      "id": "exam2-new-2",
      "code": "New Exam Practice • Problem 2",
      "title": "Orthogonal Track Sliders Connected by a Rigid Rod (Constrained EOM & Multiplier $\\lambda$)",
      "subtitle": "Holonomic Constraint $g(\\mathbf{q})$, Constraint Jacobian $\\mathbf{J}$, Convective Term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ & Closed-Form Rod Force $\\lambda$",
      "sourceTag": "New Exam 2 Synthesis",
      "category": "Constrained Systems",
      "difficulty": "Core Exam Standard",
      "estimatedMinutes": 20,
      "lectureRefs": [
        13,
        17,
        22
      ],
      "conceptTags": [
        "holonomic-constraints",
        "constraint-jacobian",
        "lagrange-multipliers",
        "baumgarte-stabilization"
      ],
      "parameters": [
        {
          "symbol": "$\\mathbf{q} = [x_1,\\, y_2]^T$",
          "desc": "Maximal coordinates: slider 1 on $x$-axis, slider 2 on vertical $y$-axis"
        },
        {
          "symbol": "$m_1,\\; m_2,\\; \\ell$",
          "desc": "Slider masses $m_1, m_2$ and massless rigid connecting rod of length $\\ell$"
        },
        {
          "symbol": "$F_{\\text{ext}}$",
          "desc": "Constant horizontal force applied to slider 1 along $+x$"
        },
        {
          "symbol": "$g(\\mathbf{q}) = \\frac{1}{2}(x_1^2 + y_2^2 - \\ell^2) = 0$",
          "desc": "Holonomic rigid-rod length constraint"
        }
      ],
      "prompt": "Two point-mass sliders $m_1$ and $m_2$ move on frictionless orthogonal tracks in the vertical $x$–$y$ plane: slider $m_1$ is confined to the horizontal $x$-axis at $(x_1, 0)$ and slider $m_2$ is confined to the vertical $y$-axis at $(0, y_2)$ with $+y$ pointing upward. A massless rigid rod of length $\\ell$ connects the two sliders. A horizontal external force $F_{\\text{ext}}$ pushes slider $m_1$ in the $+x$ direction, and gravity $g$ acts downward ($-y$).<br><br>\n      Use the maximal coordinates $\\mathbf{q} = [x_1,\\, y_2]^T$ subject to the holonomic rod constraint:\n      $$g(\\mathbf{q}) = \\frac{1}{2}\\left(x_1^2 + y_2^2 - \\ell^2\\right) = 0$$\n      <strong>Your Goal:</strong> By hand, derive (1) the $1\\times 2$ constraint Jacobian $\\mathbf{J} = \\partial g/\\partial \\mathbf{q}$ and convective term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$, (2) the unconstrained mass matrix $\\mathbf{M}$ and generalized force vector $\\mathbf{F}$, (3) the $3\\times 3$ augmented DAE block matrix for $[\\ddot{x}_1,\\, \\ddot{y}_2,\\, \\lambda]^T$, and (4) the explicit closed-form expression for the Lagrange multiplier $\\lambda$ and physical rod tension/compression.",
      "svgDiagram": "<svg viewBox=\"0 0 420 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Two sliders on orthogonal x and y tracks connected by a rigid rod of length ell\">\n        <defs>\n          <marker id=\"arr-s2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n            <path d=\"M 0 1.5 L 10 5 L 0 8.5 z\" fill=\"#334155\"/>\n          </marker>\n          <marker id=\"arr-f2\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n            <path d=\"M 0 1.5 L 10 5 L 0 8.5 z\" fill=\"#e11d48\"/>\n          </marker>\n        </defs>\n        <!-- Orthogonal Tracks (x and y axes) -->\n        <line x1=\"55\" y1=\"175\" x2=\"365\" y2=\"175\" stroke=\"#334155\" stroke-width=\"2.5\" marker-end=\"url(#arr-s2)\"/>\n        <text x=\"372\" y=\"179\" font-size=\"12\" font-weight=\"800\" fill=\"#334155\">x</text>\n        <line x1=\"95\" y1=\"205\" x2=\"95\" y2=\"20\" stroke=\"#334155\" stroke-width=\"2.5\" marker-end=\"url(#arr-s2)\"/>\n        <text x=\"88\" y=\"15\" font-size=\"12\" font-weight=\"800\" fill=\"#334155\">y</text>\n        <text x=\"77\" y=\"192\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">O</text>\n        <!-- Rigid Connecting Rod ell -->\n        <line x1=\"255\" y1=\"175\" x2=\"95\" y2=\"65\" stroke=\"#4f46e5\" stroke-width=\"3.2\"/>\n        <text x=\"182\" y=\"112\" font-size=\"13\" font-style=\"italic\" font-weight=\"800\" fill=\"#4f46e5\">ℓ (g(q) = 0)</text>\n        <!-- Slider 1 on x-axis -->\n        <rect x=\"235\" y=\"161\" width=\"40\" height=\"28\" rx=\"5\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n        <text x=\"245\" y=\"179\" font-size=\"12\" font-weight=\"800\" fill=\"#1e3a8a\">m₁</text>\n        <text x=\"242\" y=\"203\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\">(x₁, 0)</text>\n        <!-- External Force F_ext on Slider 1 -->\n        <line x1=\"275\" y1=\"175\" x2=\"325\" y2=\"175\" stroke=\"#e11d48\" stroke-width=\"2.2\" marker-end=\"url(#arr-f2)\"/>\n        <text x=\"285\" y=\"165\" font-size=\"11\" font-weight=\"800\" fill=\"#be123c\">F_ext</text>\n        <!-- Slider 2 on y-axis -->\n        <rect x=\"77\" y=\"49\" width=\"36\" height=\"32\" rx=\"5\" fill=\"#ddd6fe\" stroke=\"#6d28d9\" stroke-width=\"2\"/>\n        <text x=\"86\" y=\"69\" font-size=\"12\" font-weight=\"800\" fill=\"#4c1d95\">m₂</text>\n        <text x=\"32\" y=\"69\" font-size=\"11\" font-weight=\"700\" fill=\"#4c1d95\">(0, y₂)</text>\n        <!-- Gravity g -->\n        <line x1=\"335\" y1=\"45\" x2=\"335\" y2=\"85\" stroke=\"#334155\" stroke-width=\"1.8\" marker-end=\"url(#arr-s2)\"/>\n        <text x=\"343\" y=\"70\" font-size=\"12\" font-style=\"italic\" font-weight=\"700\" fill=\"#334155\">g</text>\n      </svg>",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Constraint Jacobian $\\mathbf{J} = \\partial g/\\partial\\mathbf{q}$ and Convective Term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$",
          "badge": "Step 1 • Jacobian & $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$",
          "goal": "Differentiate $g(\\mathbf{q}) = \\frac{1}{2}(x_1^2 + y_2^2 - \\ell^2)$ to find the $1\\times 2$ Jacobian $\\mathbf{J}(\\mathbf{q})$, its time derivative $\\dot{\\mathbf{J}}$, and the scalar $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$.",
          "intuition": "By the Pythagorean theorem, the distance squared between $(x_1, 0)$ and $(0, y_2)$ is simply $x_1^2 + y_2^2 = \\ell^2$. Differentiating $g(\\mathbf{q}) = \\frac{1}{2}(x_1^2 + y_2^2 - \\ell^2)$ gives a remarkably clean Jacobian!",
          "conceptLinks": [
            "holonomic-constraints",
            "constraint-jacobian"
          ],
          "hint1": "Compute $\\frac{\\partial g}{\\partial x_1} = x_1$ and $\\frac{\\partial g}{\\partial y_2} = y_2$ to form $\\mathbf{J} = [x_1,\\, y_2]$.",
          "hint2": "Differentiate $\\mathbf{J}$ with respect to time to get $\\dot{\\mathbf{J}} = [\\dot{x}_1,\\, \\dot{y}_2]$, then multiply by $\\dot{\\mathbf{q}} = [\\dot{x}_1,\\, \\dot{y}_2]^T$.",
          "checkpoint": {
            "question": "What are the constraint Jacobian $\\mathbf{J}(\\mathbf{q})$ and the convective scalar $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$?",
            "options": [
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} x_1 - y_2 & y_2 - x_1 \\end{bmatrix}, \\qquad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = (\\dot{x}_1 - \\dot{y}_2)^2$$",
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} 2x_1 & 2y_2 \\end{bmatrix}, \\qquad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 2(x_1\\dot{x}_1 + y_2\\dot{y}_2)$$",
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} x_1 & y_2 \\end{bmatrix}, \\qquad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\dot{x}_1^2 + \\dot{y}_2^2$$",
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} 1 & 1 \\end{bmatrix}, \\qquad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: Slider 1 has $y_1 = 0$ and slider 2 has $x_2 = 0$, so $(x_1 - 0)^2 + (0 - y_2)^2 = x_1^2 + y_2^2$ (no $x_1 y_2$ cross product).",
              "Trap: The $\\frac{1}{2}$ in $g(\\mathbf{q})$ cancels the factor of $2$, and $x_1\\dot{x}_1 + y_2\\dot{y}_2$ is $\\mathbf{J}\\dot{\\mathbf{q}} = \\dot{g} = 0$, not $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$!",
              "Correct! $\\mathbf{J} = [x_1, y_2]$ and $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\dot{x}_1^2 + \\dot{y}_2^2$.",
              "Trap: $g(\\mathbf{q})$ is quadratic in $x_1$ and $y_2$, so $\\mathbf{J}$ depends linearly on $x_1$ and $y_2$."
            ]
          },
          "derivation": "Taking partial derivatives of $g(\\mathbf{q}) = \\frac{1}{2}(x_1^2 + y_2^2 - \\ell^2)$ with respect to $\\mathbf{q} = [x_1, y_2]^T$:\n          $$\\mathbf{J}(\\mathbf{q}) = \\frac{\\partial g}{\\partial \\mathbf{q}} = \\begin{bmatrix} x_1 & y_2 \\end{bmatrix}$$\n          Differentiating $\\mathbf{J}$ with respect to time gives $\\dot{\\mathbf{J}} = \\begin{bmatrix} \\dot{x}_1 & \\dot{y}_2 \\end{bmatrix}$, so:\n          $$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\begin{bmatrix} \\dot{x}_1 & \\dot{y}_2 \\end{bmatrix} \\begin{bmatrix} \\dot{x}_1 \\\\ \\dot{y}_2 \\end{bmatrix} = \\dot{x}_1^2 + \\dot{y}_2^2$$"
        },
        {
          "stepNumber": 2,
          "title": "Unconstrained Mass Matrix $\\mathbf{M}$, Force Vector $\\mathbf{F}$ & $3\\times 3$ DAE Block Matrix",
          "badge": "Step 2 • $3\\times 3$ DAE Matrix",
          "goal": "Form $\\mathbf{M}$, $\\mathbf{F}$, and the $3\\times 3$ augmented block-matrix system for $[\\ddot{x}_1, \\ddot{y}_2, \\lambda]^T$.",
          "intuition": "Slider 1 experiences the external horizontal force $F_{\\text{ext}}$ (and no gravity changes since $y_1 = 0$), while slider 2 experiences downward gravity $-m_2 g$. Stacking $\\mathbf{M}\\ddot{\\mathbf{q}} - \\mathbf{J}^T\\lambda = \\mathbf{F}$ with $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ yields a clean $3\\times 3$ matrix equation.",
          "conceptLinks": [
            "lagrange-multipliers"
          ],
          "hint1": "Write $\\mathbf{M} = \\text{diag}(m_1, m_2)$ and $\\mathbf{F} = [F_{\\text{ext}},\\, -m_2 g]^T$.",
          "hint2": "Place $-\\mathbf{J}^T = [-x_1,\\, -y_2]^T$ in the third column and $\\mathbf{J} = [x_1,\\, y_2]$ in the third row of the $3\\times 3$ matrix.",
          "checkpoint": {
            "question": "Which $3\\times 3$ linear system correctly governs $[\\ddot{x}_1,\\, \\ddot{y}_2,\\, \\lambda]^T$?",
            "options": [
              "$$\\begin{bmatrix} m_1 & 0 & -x_1 \\\\ 0 & m_2 & -y_2 \\\\ x_1 & y_2 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} F_{\\text{ext}} \\\\ -m_2 g \\\\ -(\\dot{x}_1^2 + \\dot{y}_2^2) \\end{bmatrix}$$",
              "$$\\begin{bmatrix} m_1 & 0 & x_1 \\\\ 0 & m_2 & y_2 \\\\ x_1 & y_2 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} F_{\\text{ext}} \\\\ m_2 g \\\\ \\dot{x}_1^2 + \\dot{y}_2^2 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} m_1 & 0 & -1 \\\\ 0 & m_2 & -1 \\\\ 1 & 1 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} F_{\\text{ext}} \\\\ -m_2 g \\\\ 0 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} m_1 & 0 & -x_1 \\\\ 0 & m_2 & -y_2 \\\\ x_1 & y_2 & 1 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} F_{\\text{ext}} - m_1 g \\\\ -m_2 g \\\\ -(\\dot{x}_1^2 + \\dot{y}_2^2) \\end{bmatrix}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! Top two rows enforce $m_1\\ddot{x}_1 = F_{\\text{ext}} + x_1\\lambda$ and $m_2\\ddot{y}_2 = -m_2 g + y_2\\lambda$, and row 3 enforces $x_1\\ddot{x}_1 + y_2\\ddot{y}_2 = -(\\dot{x}_1^2 + \\dot{y}_2^2)$.",
              "Trap: Moving $+\\mathbf{J}^T\\lambda$ to the LHS gives $-x_1$ and $-y_2$, gravity is $-m_2 g$, and the RHS of row 3 is $-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = -(\\dot{x}_1^2 + \\dot{y}_2^2)$.",
              "Trap: $\\mathbf{J} = [x_1, y_2]$, not $[1, 1]$!",
              "Trap: The $(3,3)$ entry is $0$, and gravity acts along $-y$ (not on the horizontal slider $m_1$)."
            ]
          },
          "derivation": "With $\\mathbf{M} = \\text{diag}(m_1, m_2)$ and $\\mathbf{F} = [F_{\\text{ext}},\\, -m_2 g]^T$, the constrained equations of motion $\\mathbf{M}\\ddot{\\mathbf{q}} = \\mathbf{F} + \\mathbf{J}^T\\lambda$ and $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ form the $3\\times 3$ system:\n          $$\\begin{bmatrix} m_1 & 0 & -x_1 \\\\ 0 & m_2 & -y_2 \\\\ x_1 & y_2 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} F_{\\text{ext}} \\\\ -m_2 g \\\\ -(\\dot{x}_1^2 + \\dot{y}_2^2) \\end{bmatrix}$$"
        },
        {
          "stepNumber": 3,
          "title": "Solving Explicitly by Hand for the Lagrange Multiplier $\\lambda$ & Rod Tension",
          "badge": "Step 3 • Solving for $\\lambda$",
          "goal": "Eliminate $\\ddot{x}_1$ and $\\ddot{y}_2$ to solve for the Lagrange multiplier $\\lambda$ in closed form, and relate $\\lambda$ to the physical tension $T_{\\text{rod}}$ in the link.",
          "intuition": "From rows 1 and 2, $\\ddot{x}_1 = \\frac{F_{\\text{ext}} + x_1\\lambda}{m_1}$ and $\\ddot{y}_2 = -g + \\frac{y_2\\lambda}{m_2}$. Plugging those directly into row 3 ($x_1\\ddot{x}_1 + y_2\\ddot{y}_2 = -(\\dot{x}_1^2 + \\dot{y}_2^2)$) gives a single scalar linear equation for $\\lambda$!",
          "conceptLinks": [
            "lagrange-multipliers"
          ],
          "hint1": "Substitute $\\ddot{x}_1$ and $\\ddot{y}_2$ into $x_1\\ddot{x}_1 + y_2\\ddot{y}_2 = -(\\dot{x}_1^2 + \\dot{y}_2^2)$ and group the terms multiplying $\\lambda$: $\\left(\\frac{x_1^2}{m_1} + \\frac{y_2^2}{m_2}\\right)\\lambda$.",
          "hint2": "Since the constraint force on slider 1 is $F_{c,1} = x_1\\lambda$ and the unit vector along the rod has $x$-component $x_1/\\ell$, the physical tension magnitude in the rod is $T_{\\text{rod}} = -\\ell\\lambda$ (tension when $\\lambda < 0$, compression when $\\lambda > 0$).",
          "checkpoint": {
            "question": "What is the exact closed-form expression for the Lagrange multiplier $\\lambda$?",
            "options": [
              "$$\\lambda = -\\frac{F_{\\text{ext}} - m_2 g}{m_1 + m_2}$$",
              "$$\\lambda = -\\frac{x_1 F_{\\text{ext}} - m_2 g y_2 + \\dot{x}_1^2 + \\dot{y}_2^2}{x_1^2 + y_2^2}$$",
              "$$\\lambda = \\frac{\\frac{x_1}{m_1}F_{\\text{ext}} - g y_2}{\\frac{x_1^2}{m_1} + \\frac{y_2^2}{m_2}}$$",
              "$$\\lambda = -\\frac{\\frac{x_1}{m_1}F_{\\text{ext}} - g y_2 + \\dot{x}_1^2 + \\dot{y}_2^2}{\\frac{x_1^2}{m_1} + \\frac{y_2^2}{m_2}}$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: The multiplier depends on the configuration $(x_1, y_2)$ and velocities $(\\dot{x}_1, \\dot{y}_2)$.",
              "Trap: Unless $m_1 = m_2 = 1$, you must divide each term by its respective mass (from $\\mathbf{M}^{-1}$)!",
              "Trap: You forgot the convective term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\dot{x}_1^2 + \\dot{y}_2^2$ in the numerator and dropped the overall minus sign!",
              "Correct! Notice that the denominator $\\frac{x_1^2}{m_1} + \\frac{y_2^2}{m_2}$ is $\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T$, and the numerator is $\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{F} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$!"
            ]
          },
          "derivation": "Using $\\lambda = -(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{F} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}})$:\n          <ul>\n            <li>$\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T = \\begin{bmatrix} x_1 & y_2 \\end{bmatrix} \\begin{bmatrix} 1/m_1 & 0 \\\\ 0 & 1/m_2 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ y_2 \\end{bmatrix} = \\frac{x_1^2}{m_1} + \\frac{y_2^2}{m_2}$</li>\n            <li>$\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{F} = \\frac{x_1}{m_1}F_{\\text{ext}} - g y_2$</li>\n          </ul>\n          Therefore:\n          $$\\lambda = -\\frac{\\frac{x_1}{m_1}F_{\\text{ext}} - g y_2 + \\dot{x}_1^2 + \\dot{y}_2^2}{\\frac{x_1^2}{m_1} + \\frac{y_2^2}{m_2}}$$\n          Since $\\|\\mathbf{J}^T\\lambda\\| = \\sqrt{x_1^2 + y_2^2}|\\lambda| = \\ell|\\lambda|$, the axial tension in the rod is $T_{\\text{rod}} = -\\ell\\lambda$ (positive in tension, negative in compression)."
        },
        {
          "stepNumber": 4,
          "title": "Baumgarte Stabilization & Physical Rod Tension Interpretation",
          "badge": "Step 4 • Baumgarte & Rod Force",
          "goal": "Modify the acceleration constraint row to include critically damped Baumgarte stabilization and relate $\\lambda$ to the physical tension $T_{\\text{rod}}$ in the connecting link.",
          "intuition": "When simulating the orthogonal slider linkage in maximal coordinates $[x_1, y_2]^T$, numerical integration error causes $x_1^2 + y_2^2$ to drift away from $\\ell^2$. Adding Baumgarte feedback $-2\\omega_B\\dot{g} - \\omega_B^2 g$ stabilizes the rod length.",
          "conceptLinks": [
            "baumgarte-stabilization",
            "lagrange-multipliers"
          ],
          "hint1": "Evaluate $\\dot{g} = \\mathbf{J}\\dot{\\mathbf{q}} = x_1\\dot{x}_1 + y_2\\dot{y}_2$ and $g = \\frac{1}{2}(x_1^2 + y_2^2 - \\ell^2)$.",
          "hint2": "Replace the third row RHS $-(\\dot{x}_1^2 + \\dot{y}_2^2)$ with $-(\\dot{x}_1^2 + \\dot{y}_2^2) - 2\\omega_B(x_1\\dot{x}_1 + y_2\\dot{y}_2) - \\frac{1}{2}\\omega_B^2(x_1^2 + y_2^2 - \\ell^2)$.",
          "checkpoint": {
            "question": "What is the critically damped ($\\zeta = 1$) Baumgarte-stabilized third row of the DAE system, and how is rod tension $T_{\\text{rod}}$ related to $\\lambda$?",
            "options": [
              "$$x_1\\ddot{x}_1 + y_2\\ddot{y}_2 = -(\\dot{x}_1^2 + \\dot{y}_2^2) + 2\\omega_B(x_1\\dot{x}_1 + y_2\\dot{y}_2) + \\frac{1}{2}\\omega_B^2(x_1^2 + y_2^2 - \\ell^2), \\qquad T_{\\text{rod}} = \\lambda$$",
              "$$x_1\\ddot{x}_1 + y_2\\ddot{y}_2 = -(\\dot{x}_1^2 + \\dot{y}_2^2) - 2\\omega_B(x_1\\dot{x}_1 + y_2\\dot{y}_2) - \\frac{1}{2}\\omega_B^2(x_1^2 + y_2^2 - \\ell^2), \\qquad T_{\\text{rod}} = -\\ell\\lambda$$",
              "$$x_1\\ddot{x}_1 + y_2\\ddot{y}_2 = -2\\omega_B(x_1\\dot{x}_1 + y_2\\dot{y}_2) - \\frac{1}{2}\\omega_B^2(x_1^2 + y_2^2 - \\ell^2), \\qquad T_{\\text{rod}} = -\\lambda/\\ell$$",
              "$$\\ddot{x}_1 + \\ddot{y}_2 = -\\omega_B^2(x_1^2 + y_2^2 - \\ell^2), \\qquad T_{\\text{rod}} = \\ell^2\\lambda$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: Positive feedback ($+2\\omega_B\\dot{g} + \\omega_B^2 g$) makes the constraint error blow up exponentially!",
              "Correct! Both feedback terms are negative on the RHS, and because $\\|\\mathbf{J}^T\\| = \\sqrt{x_1^2 + y_2^2} = \\ell$, the physical axial force magnitude is $\\ell|\\lambda|$ (with $T_{\\text{rod}} = -\\ell\\lambda$).",
              "Trap: Never drop the convective term $-(\\dot{x}_1^2 + \\dot{y}_2^2)$ when adding Baumgarte stabilization!",
              "Trap: The LHS is $\\mathbf{J}\\ddot{\\mathbf{q}} = x_1\\ddot{x}_1 + y_2\\ddot{y}_2$, and you must include the damping term $-2\\omega_B\\dot{g}$."
            ]
          },
          "derivation": "Substituting $g(\\mathbf{q}) = \\frac{1}{2}(x_1^2 + y_2^2 - \\ell^2)$ and $\\dot{g}(\\mathbf{q},\\dot{\\mathbf{q}}) = x_1\\dot{x}_1 + y_2\\dot{y}_2$ into $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\omega_B\\dot{g} - \\omega_B^2 g$:\n          $$x_1\\ddot{x}_1 + y_2\\ddot{y}_2 = -(\\dot{x}_1^2 + \\dot{y}_2^2) - 2\\omega_B(x_1\\dot{x}_1 + y_2\\dot{y}_2) - \\frac{1}{2}\\omega_B^2(x_1^2 + y_2^2 - \\ell^2)$$\n          Because the constraint force vector is $\\mathbf{F}_c = \\mathbf{J}^T\\lambda = [x_1\\lambda,\\, y_2\\lambda]^T$ and the unit vector along the rod has length $\\sqrt{x_1^2 + y_2^2}/\\ell = 1$, the physical tension in the rod is $T_{\\text{rod}} = -\\ell\\lambda$."
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — New Exam Problem 2 (Orthogonal Track Sliders)",
        "items": [
          {
            "label": "(1) Constraint Jacobian $\\mathbf{J}$ & Convective Term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$",
            "math": "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} x_1 & y_2 \\end{bmatrix}, \\qquad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\dot{x}_1^2 + \\dot{y}_2^2$$"
          },
          {
            "label": "(2) $3\\times 3$ Constrained DAE Block Matrix",
            "math": "$$\\begin{bmatrix} m_1 & 0 & -x_1 \\\\ 0 & m_2 & -y_2 \\\\ x_1 & y_2 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} F_{\\text{ext}} \\\\ -m_2 g \\\\ -(\\dot{x}_1^2 + \\dot{y}_2^2) \\end{bmatrix}$$"
          },
          {
            "label": "(3–4) Closed-Form Lagrange Multiplier $\\lambda$, Rod Tension $T_{\\text{rod}}$ & Accelerations",
            "math": "$$\\lambda = -\\frac{\\frac{x_1}{m_1}F_{\\text{ext}} - g y_2 + \\dot{x}_1^2 + \\dot{y}_2^2}{\\frac{x_1^2}{m_1} + \\frac{y_2^2}{m_2}}, \\qquad T_{\\text{rod}} = -\\ell\\lambda, \\qquad \\ddot{x}_1 = \\frac{F_{\\text{ext}} + x_1\\lambda}{m_1}, \\qquad \\ddot{y}_2 = -g + \\frac{y_2\\lambda}{m_2}$$"
          }
        ]
      }
    },
    {
      "id": "exam2-new-3",
      "code": "New Exam Practice • Problem 3",
      "title": "Falling Articulated Leg / Point-Mass Link Hitting Ground with Restitution $e$",
      "subtitle": "Unilateral Gap $g_N(\\mathbf{q}) \\ge 0$, Contact Jacobian $\\mathbf{J}_N$, Delassus Effective Mass, Restitution Impact Map & $\\Delta E$",
      "sourceTag": "New Exam 2 Synthesis",
      "category": "Contact & Impacts",
      "difficulty": "Exam Challenge",
      "estimatedMinutes": 20,
      "lectureRefs": [
        14,
        20,
        21
      ],
      "conceptTags": [
        "constraint-jacobian",
        "impact-maps",
        "unilateral-hybrid-systems"
      ],
      "parameters": [
        {
          "symbol": "$\\mathbf{q} = [y_h,\\, \\theta]^T$",
          "desc": "Hip vertical height $y_h$ and leg angle $\\theta$ from vertical"
        },
        {
          "symbol": "$M_h,\\; m_f,\\; \\ell$",
          "desc": "Hip mass $M_h$ (constrained to vertical guide $x=0$), foot point-mass $m_f$, massless leg length $\\ell$"
        },
        {
          "symbol": "$g_N(\\mathbf{q}) = y_h - \\ell\\cos\\theta \\ge 0$",
          "desc": "Unilateral foot height above flat floor $y = 0$"
        },
        {
          "symbol": "$0 \\le e \\le 1$",
          "desc": "Newtonian normal coefficient of restitution at floor impact"
        }
      ],
      "prompt": "A simplified 1-legged hopping robot consists of a hip body of mass $M_h$ constrained to move vertically along the $y$-axis at $(0, y_h)$, and a foot modeled as a point mass $m_f$ at the end of a massless leg link of length $\\ell$ pivoted at the hip at angle $\\theta$ from straight down. Use generalized coordinates $\\mathbf{q} = [y_h,\\, \\theta]^T$.<br><br>\n      The flat horizontal floor is at $y = 0$, so the unilateral non-penetration constraint for the foot is $g_N(\\mathbf{q}) = y_{\\text{foot}} = y_h - \\ell\\cos\\theta \\ge 0$. The robot falls and strikes the frictionless floor at $g_N(\\mathbf{q}) = 0$ with pre-impact velocity $\\dot{\\mathbf{q}}^- = [\\dot{y}_h^-,\\, \\dot{\\theta}^-]^T$ (where $\\dot{y}_{\\text{foot}}^- = \\mathbf{J}_N\\dot{\\mathbf{q}}^- < 0$) and normal restitution coefficient $e \\in [0, 1]$.<br><br>\n      <strong>Your Goal:</strong> Derive (1) the $2\\times 2$ mass matrix $\\mathbf{M}(\\theta)$ and $1\\times 2$ normal contact Jacobian $\\mathbf{J}_N$, (2) the operational-space inverse inertia scalar $\\mathbf{J}_N\\mathbf{M}^{-1}\\mathbf{J}_N^T$, (3) the restitution impact map solution for normal impulse $\\Lambda_N$ and kinetic energy loss $\\Delta E(e)$, and (4) the explicit post-impact joint velocities $\\dot{y}_h^+, \\dot{\\theta}^+$ and physical limit checks.",
      "svgDiagram": "<svg viewBox=\"0 0 420 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Hopping robot hip and leg link striking the floor at y=0 with restitution e\">\n        <defs>\n          <marker id=\"arr-h3\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n            <path d=\"M 0 1.5 L 10 5 L 0 8.5 z\" fill=\"#0d9488\"/>\n          </marker>\n          <marker id=\"arr-u3\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n            <path d=\"M 0 1.5 L 10 5 L 0 8.5 z\" fill=\"#e11d48\"/>\n          </marker>\n        </defs>\n        <!-- Vertical Guide Rail x = 0 -->\n        <line x1=\"155\" y1=\"15\" x2=\"155\" y2=\"185\" stroke=\"#94a3b8\" stroke-dasharray=\"5,4\" stroke-width=\"2\"/>\n        <!-- Floor y = 0 -->\n        <rect x=\"45\" y=\"185\" width=\"330\" height=\"16\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n        <line x1=\"45\" y1=\"185\" x2=\"375\" y2=\"185\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n        <text x=\"295\" y=\"178\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">Floor y = 0 (g_N ≥ 0)</text>\n        <!-- Hip Mass M_h -->\n        <rect x=\"131\" y=\"55\" width=\"48\" height=\"30\" rx=\"6\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n        <text x=\"145\" y=\"75\" font-size=\"12\" font-weight=\"800\" fill=\"#1e3a8a\">M_h</text>\n        <text x=\"82\" y=\"75\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\">y_h</text>\n        <!-- Leg Link ell & Angle theta -->\n        <line x1=\"155\" y1=\"85\" x2=\"235\" y2=\"185\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n        <text x=\"202\" y=\"130\" font-size=\"13\" font-style=\"italic\" font-weight=\"800\" fill=\"#0f172a\">ℓ</text>\n        <path d=\"M 155 130 A 45 45 0 0 0 183 120\" fill=\"none\" stroke=\"#4f46e5\" stroke-width=\"1.8\"/>\n        <text x=\"166\" y=\"146\" font-size=\"12\" font-style=\"italic\" font-weight=\"800\" fill=\"#4f46e5\">θ</text>\n        <!-- Foot Mass m_f at Contact Point -->\n        <circle cx=\"235\" cy=\"185\" r=\"10\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"176\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">m_f</text>\n        <!-- Normal Impulse Lambda_N -->\n        <line x1=\"235\" y1=\"185\" x2=\"235\" y2=\"135\" stroke=\"#e11d48\" stroke-width=\"2.4\" marker-end=\"url(#arr-u3)\"/>\n        <text x=\"243\" y=\"148\" font-size=\"11\" font-weight=\"800\" fill=\"#be123c\">Λ_N (restitution e)</text>\n      </svg>",
      "steps": [
        {
          "stepNumber": 1,
          "title": "Mass Matrix $\\mathbf{M}(\\theta)$ and Normal Contact Jacobian $\\mathbf{J}_N$",
          "badge": "Step 1 • $\\mathbf{M}(\\theta)$ & Contact Jacobian",
          "goal": "Derive the $2\\times 2$ mass matrix $\\mathbf{M}(\\theta)$ from the kinetic energy $T$ and the $1\\times 2$ normal contact Jacobian $\\mathbf{J}_N = \\partial g_N/\\partial\\mathbf{q}$.",
          "intuition": "The foot position is $\\mathbf{r}_f = [\\ell\\sin\\theta,\\, y_h - \\ell\\cos\\theta]^T$, so its velocity is $\\dot{\\mathbf{r}}_f = [\\ell\\dot{\\theta}\\cos\\theta,\\, \\dot{y}_h + \\ell\\dot{\\theta}\\sin\\theta]^T$. Meanwhile, the vertical gap above the floor is $g_N(\\mathbf{q}) = y_h - \\ell\\cos\\theta \\ge 0$.",
          "conceptLinks": [
            "kinetic-potential-energy",
            "constraint-jacobian"
          ],
          "hint1": "Expand $T = \\frac{1}{2}M_h\\dot{y}_h^2 + \\frac{1}{2}m_f\\left[(\\ell\\dot{\\theta}\\cos\\theta)^2 + (\\dot{y}_h + \\ell\\dot{\\theta}\\sin\\theta)^2\\right]$ to read off $\\mathbf{M}(\\theta)$.",
          "hint2": "Differentiate $g_N(y_h, \\theta) = y_h - \\ell\\cos\\theta$ with respect to $[y_h,\\, \\theta]$ to get $\\mathbf{J}_N$.",
          "checkpoint": {
            "question": "What are the $2\\times 2$ mass matrix $\\mathbf{M}(\\theta)$ and the $1\\times 2$ contact Jacobian $\\mathbf{J}_N(\\theta)$?",
            "options": [
              "$$\\mathbf{M}(\\theta) = \\begin{bmatrix} M_h + m_f & m_f\\ell\\sin\\theta \\\\ m_f\\ell\\sin\\theta & m_f\\ell^2 \\end{bmatrix}, \\qquad \\mathbf{J}_N(\\theta) = \\begin{bmatrix} 1 & \\ell\\sin\\theta \\end{bmatrix}$$",
              "$$\\mathbf{M}(\\theta) = \\begin{bmatrix} M_h + m_f & m_f\\ell\\cos\\theta \\\\ m_f\\ell\\cos\\theta & m_f\\ell^2 \\end{bmatrix}, \\qquad \\mathbf{J}_N(\\theta) = \\begin{bmatrix} 1 & -\\ell\\sin\\theta \\end{bmatrix}$$",
              "$$\\mathbf{M}(\\theta) = \\begin{bmatrix} M_h & 0 \\\\ 0 & m_f\\ell^2 \\end{bmatrix}, \\qquad \\mathbf{J}_N(\\theta) = \\begin{bmatrix} 1 & 0 \\end{bmatrix}$$",
              "$$\\mathbf{M}(\\theta) = \\begin{bmatrix} M_h + m_f & m_f\\ell\\sin\\theta \\\\ m_f\\ell\\sin\\theta & m_f\\ell^2 \\end{bmatrix}, \\qquad \\mathbf{J}_N(\\theta) = \\begin{bmatrix} 0 & \\ell\\cos\\theta \\end{bmatrix}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! Because the hip moves vertically ($y_h$), the velocity cross-term comes from $\\dot{y}_f = \\dot{y}_h + \\ell\\dot{\\theta}\\sin\\theta$, giving $M_{12} = m_f\\ell\\sin\\theta$ and $\\mathbf{J}_N = [1, \\ell\\sin\\theta]$.",
              "Trap: Watch the direction of hip motion! Here the hip moves vertically ($y_h$), not horizontally, so $\\frac{d}{d\\theta}(-\\ell\\cos\\theta) = +\\ell\\sin\\theta$!",
              "Trap: Both $y_h$ and $\\theta$ affect the foot height $y_f = y_h - \\ell\\cos\\theta$.",
              "Trap: $\\partial g_N/\\partial y_h = 1$, not $0$!"
            ]
          },
          "derivation": "From $\\dot{\\mathbf{r}}_f = [\\ell\\dot{\\theta}\\cos\\theta,\\, \\dot{y}_h + \\ell\\dot{\\theta}\\sin\\theta]^T$, the total kinetic energy is:\n          $$T = \\frac{1}{2}(M_h + m_f)\\dot{y}_h^2 + m_f\\ell\\sin\\theta\\,\\dot{y}_h\\dot{\\theta} + \\frac{1}{2}m_f\\ell^2\\dot{\\theta}^2 \\implies \\mathbf{M}(\\theta) = \\begin{bmatrix} M_h + m_f & m_f\\ell\\sin\\theta \\\\ m_f\\ell\\sin\\theta & m_f\\ell^2 \\end{bmatrix}$$\n          Differentiating the unilateral foot height $g_N(\\mathbf{q}) = y_h - \\ell\\cos\\theta$ gives:\n          $$\\mathbf{J}_N(\\theta) = \\frac{\\partial g_N}{\\partial \\mathbf{q}} = \\begin{bmatrix} 1 & \\ell\\sin\\theta \\end{bmatrix}$$"
        },
        {
          "stepNumber": 2,
          "title": "Delassus Effective Contact Inverse Mass $G = \\mathbf{J}_N\\mathbf{M}^{-1}\\mathbf{J}_N^T$",
          "badge": "Step 2 • Delassus Scalar",
          "goal": "Compute the $2\\times 2$ inverse mass matrix $\\mathbf{M}^{-1}(\\theta)$ and evaluate the scalar Delassus contact inverse mass $G = \\mathbf{J}_N\\mathbf{M}^{-1}\\mathbf{J}_N^T$.",
          "intuition": "The determinant of $\\mathbf{M}(\\theta)$ is $\\det\\mathbf{M} = (M_h + m_f)m_f\\ell^2 - m_f^2\\ell^2\\sin^2\\theta = m_f\\ell^2(M_h + m_f\\cos^2\\theta)$. When you multiply $\\mathbf{J}_N \\mathbf{M}^{-1} \\mathbf{J}_N^T$, a remarkable algebraic cancellation occurs!",
          "conceptLinks": [
            "impact-maps"
          ],
          "hint1": "First compute $\\mathbf{M}^{-1} = \\frac{1}{m_f\\ell^2(M_h + m_f\\cos^2\\theta)}\\begin{bmatrix} m_f\\ell^2 & -m_f\\ell\\sin\\theta \\\\ -m_f\\ell\\sin\\theta & M_h + m_f \\end{bmatrix}$.",
          "hint2": "Multiply $\\mathbf{M}^{-1}\\mathbf{J}_N^T = \\mathbf{M}^{-1}\\begin{bmatrix} 1 \\\\ \\ell\\sin\\theta \\end{bmatrix}$. Notice the top row of $\\mathbf{M}^{-1}\\mathbf{J}_N^T$ is $m_f\\ell^2 - m_f\\ell^2\\sin^2\\theta = m_f\\ell^2\\cos^2\\theta$, and the bottom row is $M_h\\ell\\sin\\theta$!",
          "checkpoint": {
            "question": "What does the Delassus scalar $G = \\mathbf{J}_N\\mathbf{M}^{-1}\\mathbf{J}_N^T$ simplify to?",
            "options": [
              "$$G = \\frac{1}{M_h} + \\frac{1}{m_f}$$",
              "$$G = \\frac{1}{M_h + m_f}$$",
              "$$G = \\frac{1}{m_f}$$",
              "$$G = \\mathbf{J}_N\\mathbf{M}^{-1}\\mathbf{J}_N^T = \\frac{m_f\\cos^2\\theta + M_h\\sin^2\\theta}{m_f(M_h + m_f\\cos^2\\theta)} = \\frac{1}{m_f} - \\frac{\\cos^2\\theta}{M_h + m_f\\cos^2\\theta}\\frac{M_h}{m_f}$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: Because the hip and foot are coupled by a rigid link at angle $\\theta$, the inverse masses are weighted by $\\cos^2\\theta$ and $\\sin^2\\theta$.",
              "Trap: $G = \\frac{1}{M_h + m_f}$ is only true when the leg is completely vertical ($\\theta = 0$)!",
              "Trap: $G = \\frac{1}{m_f}$ is only true when $\\theta = 90^\\circ$ (horizontal leg)!",
              "Correct! Check the two physical limits: when $\\theta = 0$ (leg straight vertical), $\\sin\\theta=0$ and $\\cos\\theta=1$ so $G = \\frac{1}{M_h + m_f}$ (both masses stop together); when $\\theta = 90^\\circ$, $\\cos\\theta=0$ so $G = \\frac{1}{m_f}$ (only foot mass $m_f$ is felt vertically)!"
            ]
          },
          "derivation": "Inverting $\\mathbf{M}(\\theta)$ using $\\det\\mathbf{M} = m_f\\ell^2(M_h + m_f\\cos^2\\theta)$:\n          $$\\mathbf{M}^{-1}\\mathbf{J}_N^T = \\frac{1}{m_f\\ell^2(M_h + m_f\\cos^2\\theta)} \\begin{bmatrix} m_f\\ell^2 & -m_f\\ell\\sin\\theta \\\\ -m_f\\ell\\sin\\theta & M_h + m_f \\end{bmatrix} \\begin{bmatrix} 1 \\\\ \\ell\\sin\\theta \\end{bmatrix} = \\frac{1}{m_f\\ell(M_h + m_f\\cos^2\\theta)} \\begin{bmatrix} m_f\\ell\\cos^2\\theta \\\\ M_h\\sin\\theta \\end{bmatrix}$$\n          Premultiplying by $\\mathbf{J}_N = [1,\\, \\ell\\sin\\theta]$ gives:\n          $$G = \\mathbf{J}_N\\mathbf{M}^{-1}\\mathbf{J}_N^T = \\frac{m_f\\cos^2\\theta + M_h\\sin^2\\theta}{m_f(M_h + m_f\\cos^2\\theta)}$$"
        },
        {
          "stepNumber": 3,
          "title": "Restitution Impact Map ($0 \\le e \\le 1$), Impulse $\\Lambda_N$ & Energy Loss $\\Delta E$",
          "badge": "Step 3 • Restitution Impact Solution",
          "goal": "Write the restitution impact map with $\\mathbf{J}_N\\dot{\\mathbf{q}}^+ = -e\\,\\mathbf{J}_N\\dot{\\mathbf{q}}^-$ and solve for $\\Lambda_N$ and $\\Delta E$.",
          "intuition": "For a partially elastic impact with coefficient of restitution $e \\in [0, 1]$, the upward rebound speed of the foot is $e$ times its downward impact speed: $\\dot{g}_N^+ = \\mathbf{J}_N\\dot{\\mathbf{q}}^+ = -e\\,\\mathbf{J}_N\\dot{\\mathbf{q}}^-$. Note that because $g_N \\ge 0$ is an upward-normal gap, the upward floor impulse $+\\mathbf{J}_N^T\\Lambda_N$ ($\\Lambda_N \\ge 0$) sits on the RHS of $\\mathbf{M}(\\dot{\\mathbf{q}}^+ - \\dot{\\mathbf{q}}^-) = +\\mathbf{J}_N^T\\Lambda_N$.",
          "conceptLinks": [
            "impact-maps",
            "unilateral-hybrid-systems"
          ],
          "hint1": "Write $\\mathbf{M}\\dot{\\mathbf{q}}^+ - \\mathbf{J}_N^T\\Lambda_N = \\mathbf{M}\\dot{\\mathbf{q}}^-$ and $\\mathbf{J}_N\\dot{\\mathbf{q}}^+ = -e\\,\\mathbf{J}_N\\dot{\\mathbf{q}}^-$.",
          "hint2": "Substitute $\\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- + \\mathbf{M}^{-1}\\mathbf{J}_N^T\\Lambda_N$ into $\\mathbf{J}_N\\dot{\\mathbf{q}}^+ = -e\\,\\mathbf{J}_N\\dot{\\mathbf{q}}^-$ to solve for $\\Lambda_N$ (remembering $\\mathbf{J}_N\\dot{\\mathbf{q}}^- < 0$, so $-\\mathbf{J}_N\\dot{\\mathbf{q}}^- > 0$).",
          "checkpoint": {
            "question": "What are the upward normal impulse $\\Lambda_N > 0$ and the mechanical energy change $\\Delta E$ for restitution $e \\in [0, 1]$?",
            "options": [
              "$$\\Lambda_N = -e\\,G^{-1}(\\mathbf{J}_N\\dot{\\mathbf{q}}^-), \\qquad \\Delta E = -\\frac{1}{2}(1 - e)G^{-1}(\\mathbf{J}_N\\dot{\\mathbf{q}}^-)^2$$",
              "$$\\Lambda_N = -(1 + e)G^{-1}(\\mathbf{J}_N\\dot{\\mathbf{q}}^-), \\qquad \\Delta E = -\\frac{1}{2}(1 - e^2)G^{-1}(\\mathbf{J}_N\\dot{\\mathbf{q}}^-)^2$$",
              "$$\\Lambda_N = -(1 - e)G^{-1}(\\mathbf{J}_N\\dot{\\mathbf{q}}^-), \\qquad \\Delta E = 0$$",
              "$$\\Lambda_N = -G^{-1}(\\mathbf{J}_N\\dot{\\mathbf{q}}^-), \\qquad \\Delta E = -\\frac{1}{2}(1 + e^2)G^{-1}(\\mathbf{J}_N\\dot{\\mathbf{q}}^-)^2$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: Even at $e = 0$, a non-zero impulse $\\Lambda_N = -G^{-1}(\\mathbf{J}_N\\dot{\\mathbf{q}}^-)$ is required to arrest the downward velocity, and energy loss scales with $(1 - e^2)$, not $(1 - e)$.",
              "Correct! Impulse scales with $(1 + e)$, while energy loss scales with $(1 - e^2)$: at $e = 0$ (plastic), $\\Delta E = -\\frac{1}{2}G^{-1}(\\mathbf{J}_N\\dot{\\mathbf{q}}^-)^2$; at $e = 1$ (perfectly elastic), $\\Delta E = 0$!",
              "Trap: Energy is only conserved when $e = 1$!",
              "Trap: At $e = 1$, a perfectly elastic bounce loses zero energy ($1 - e^2 = 0$), not $(1 + e^2)$!"
            ]
          },
          "derivation": "With upward normal impulse $+\\mathbf{J}_N^T\\Lambda_N$ ($\\Lambda_N > 0$) and restitution law $\\mathbf{J}_N\\dot{\\mathbf{q}}^+ = -e\\,\\mathbf{J}_N\\dot{\\mathbf{q}}^-$:\n          $$\\begin{bmatrix} \\mathbf{M} & -\\mathbf{J}_N^T \\\\ \\mathbf{J}_N & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{\\mathbf{q}}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} \\mathbf{M}\\dot{\\mathbf{q}}^- \\\\ -e\\,\\mathbf{J}_N\\dot{\\mathbf{q}}^- \\end{bmatrix}$$\n          Substituting $\\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- + \\mathbf{M}^{-1}\\mathbf{J}_N^T\\Lambda_N$ into the second row gives:\n          $$\\mathbf{J}_N\\dot{\\mathbf{q}}^- + G\\Lambda_N = -e\\,\\mathbf{J}_N\\dot{\\mathbf{q}}^- \\implies \\Lambda_N = -(1 + e)G^{-1}(\\mathbf{J}_N\\dot{\\mathbf{q}}^-) > 0$$\n          And evaluating $\\Delta E = \\frac{1}{2}(\\dot{\\mathbf{q}}^+)^T\\mathbf{M}\\dot{\\mathbf{q}}^+ - \\frac{1}{2}(\\dot{\\mathbf{q}}^-)^T\\mathbf{M}\\dot{\\mathbf{q}}^-$ yields:\n          $$\\Delta E = -\\frac{1}{2}(1 - e^2)(\\mathbf{J}_N\\dot{\\mathbf{q}}^-)^T (\\mathbf{J}_N\\mathbf{M}^{-1}\\mathbf{J}_N^T)^{-1} (\\mathbf{J}_N\\dot{\\mathbf{q}}^-) = -\\frac{1}{2}(1 - e^2)G^{-1}(\\mathbf{J}_N\\dot{\\mathbf{q}}^-)^2 \\le 0$$"
        },
        {
          "stepNumber": 4,
          "title": "Explicit Post-Impact Joint Velocities $\\dot{y}_h^+, \\dot{\\theta}^+$ & Physical Limits",
          "badge": "Step 4 • Post-Impact Velocities",
          "goal": "Substitute $\\mathbf{M}^{-1}\\mathbf{J}_N^T$ and $\\Lambda_N$ into $\\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- + \\mathbf{M}^{-1}\\mathbf{J}_N^T\\Lambda_N$ to write the explicit velocity jumps in $\\dot{y}_h$ and $\\dot{\\theta}$.",
          "intuition": "In Step 2 we found $\\mathbf{M}^{-1}\\mathbf{J}_N^T = \\frac{1}{m_f\\ell(M_h + m_f\\cos^2\\theta)}\\begin{bmatrix} m_f\\ell\\cos^2\\theta \\\\ M_h\\sin\\theta \\end{bmatrix}$. Multiplying this vector by $\\Lambda_N$ tells us the exact fraction of the floor impulse that goes into bouncing the hip upward vs. kicking the leg angle $\\theta$!",
          "conceptLinks": [
            "impact-maps"
          ],
          "hint1": "Write $\\Delta\\dot{\\mathbf{q}} = \\dot{\\mathbf{q}}^+ - \\dot{\\mathbf{q}}^- = \\mathbf{M}^{-1}\\mathbf{J}_N^T \\Lambda_N$.",
          "hint2": "Use $\\mathbf{M}^{-1}\\mathbf{J}_N^T \\Lambda_N = \\frac{\\Lambda_N}{m_f\\ell(M_h + m_f\\cos^2\\theta)}\\begin{bmatrix} m_f\\ell\\cos^2\\theta \\\\ M_h\\sin\\theta \\end{bmatrix}$.",
          "checkpoint": {
            "question": "What are the explicit post-impact velocities $\\dot{y}_h^+$ and $\\dot{\\theta}^+$ in terms of $\\Lambda_N$?",
            "options": [
              "$$\\dot{y}_h^+ = \\dot{y}_h^- + \\frac{\\sin^2\\theta}{M_h + m_f}\\Lambda_N, \\qquad \\dot{\\theta}^+ = \\dot{\\theta}^- - \\frac{\\cos\\theta}{m_f\\ell}\\Lambda_N$$",
              "$$\\dot{y}_h^+ = \\dot{y}_h^- + \\frac{\\Lambda_N}{M_h + m_f}, \\qquad \\dot{\\theta}^+ = \\dot{\\theta}^-$$",
              "$$\\dot{y}_h^+ = \\dot{y}_h^- + \\frac{\\cos^2\\theta}{M_h + m_f\\cos^2\\theta}\\Lambda_N, \\qquad \\dot{\\theta}^+ = \\dot{\\theta}^- + \\frac{M_h\\sin\\theta}{m_f\\ell(M_h + m_f\\cos^2\\theta)}\\Lambda_N$$",
              "$$\\dot{y}_h^+ = -e\\,\\dot{y}_h^-, \\qquad \\dot{\\theta}^+ = -e\\,\\dot{\\theta}^-$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: Check the entries of $\\mathbf{M}^{-1}\\mathbf{J}_N^T$ from Step 2: the first entry has $\\cos^2\\theta$ and the second has $+M_h\\sin\\theta$.",
              "Trap: That only holds when $\\theta = 0$! For $\\theta \\ne 0$, the floor impact exerts an impulsive torque about the hip.",
              "Correct! Notice that when $\\theta = 0$ (vertical leg), $\\sin\\theta=0$ so $\\dot{\\theta}^+ = \\dot{\\theta}^-$ (no angular kick) and $\\dot{y}_h^+ = \\dot{y}_h^- + \\frac{\\Lambda_N}{M_h + m_f}$!",
              "Trap: Restitution $-e$ applies only to the normal contact velocity $\\mathbf{J}_N\\dot{\\mathbf{q}}$, NOT to each generalized coordinate individually!"
            ]
          },
          "derivation": "Substituting $\\mathbf{M}^{-1}\\mathbf{J}_N^T$ from Step 2 into $\\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- + \\mathbf{M}^{-1}\\mathbf{J}_N^T\\Lambda_N$ gives the explicit post-impact joint velocities:\n          $$\\dot{y}_h^+ = \\dot{y}_h^- + \\frac{\\cos^2\\theta}{M_h + m_f\\cos^2\\theta}\\Lambda_N, \\qquad \\dot{\\theta}^+ = \\dot{\\theta}^- + \\frac{M_h\\sin\\theta}{m_f\\ell(M_h + m_f\\cos^2\\theta)}\\Lambda_N$$"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — New Exam Problem 3 (Articulated Foot Restitution Impact)",
        "items": [
          {
            "label": "(1–2) Mass Matrix $\\mathbf{M}(\\theta)$, Contact Jacobian $\\mathbf{J}_N$ & Delassus Scalar $G$",
            "math": "$$\\mathbf{M}(\\theta) = \\begin{bmatrix} M_h + m_f & m_f\\ell\\sin\\theta \\\\ m_f\\ell\\sin\\theta & m_f\\ell^2 \\end{bmatrix}, \\quad \\mathbf{J}_N = \\begin{bmatrix} 1 & \\ell\\sin\\theta \\end{bmatrix}, \\quad G = \\mathbf{J}_N\\mathbf{M}^{-1}\\mathbf{J}_N^T = \\frac{m_f\\cos^2\\theta + M_h\\sin^2\\theta}{m_f(M_h + m_f\\cos^2\\theta)}$$"
          },
          {
            "label": "(3) Restitution Impulse $\\Lambda_N$ & Mechanical Energy Change $\\Delta E$",
            "math": "$$\\Lambda_N = -(1 + e)G^{-1}(\\mathbf{J}_N\\dot{\\mathbf{q}}^-), \\qquad \\Delta E = -\\frac{1}{2}(1 - e^2)G^{-1}(\\mathbf{J}_N\\dot{\\mathbf{q}}^-)^2$$"
          },
          {
            "label": "(4) Explicit Post-Impact Joint Velocities $\\dot{y}_h^+$ & $\\dot{\\theta}^+$",
            "math": "$$\\dot{y}_h^+ = \\dot{y}_h^- + \\frac{\\cos^2\\theta}{M_h + m_f\\cos^2\\theta}\\Lambda_N, \\qquad \\dot{\\theta}^+ = \\dot{\\theta}^- + \\frac{M_h\\sin\\theta}{m_f\\ell(M_h + m_f\\cos^2\\theta)}\\Lambda_N$$"
          }
        ]
      }
    },
    {
      "id": "example-1",
      "code": "Example Exam • Question 1",
      "shortTitle": "Variable-Length Gantry Hoist",
      "title": "2D Overhead Crane Trolley with Variable-Length Hoist Cable (Minimal Coordinates)",
      "subtitle": "3-DOF Coupled Translation, Hoisting & Swing — Kinematics, Coriolis 2 l_dot theta_dot Terms & 3x3 Manipulator EOM",
      "category": "Lagrangian Mechanics",
      "badgeClass": "badge-indigo",
      "difficulty": "Exam-Level (3 DOF Minimal)",
      "estimatedTime": "20 mins",
      "matchedLectures": [
        10,
        11,
        12
      ],
      "svgDiagram": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"problem-svg\">\n      <defs>\n        <marker id=\"arr-ex1-b\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#2563eb\"/>\n        </marker>\n        <marker id=\"arr-ex1-r\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#dc2626\"/>\n        </marker>\n      </defs>\n      <rect width=\"500\" height=\"280\" rx=\"12\" fill=\"#f8fafc\"/>\n      <line x1=\"30\" y1=\"55\" x2=\"470\" y2=\"55\" stroke=\"#475569\" stroke-width=\"4\"/>\n      <line x1=\"70\" y1=\"25\" x2=\"70\" y2=\"250\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <text x=\"62\" y=\"22\" font-size=\"11\" font-weight=\"700\" fill=\"#475569\">O (x=0)</text>\n      <line x1=\"70\" y1=\"36\" x2=\"210\" y2=\"36\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#arr-ex1-b)\"/>\n      <text x=\"130\" y=\"30\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">x(t)</text>\n      <!-- Trolley -->\n      <rect x=\"175\" y=\"38\" width=\"70\" height=\"34\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2.5\"/>\n      <text x=\"196\" y=\"59\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\">M</text>\n      <!-- Hoist drum -->\n      <circle cx=\"210\" cy=\"55\" r=\"9\" fill=\"#bfdbfe\" stroke=\"#1e40af\" stroke-width=\"2\"/>\n      <!-- Force Fx -->\n      <line x1=\"245\" y1=\"50\" x2=\"305\" y2=\"50\" stroke=\"#dc2626\" stroke-width=\"2.5\" marker-end=\"url(#arr-ex1-r)\"/>\n      <text x=\"255\" y=\"43\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">F_x(t)</text>\n      <!-- Vertical reference from trolley -->\n      <line x1=\"210\" y1=\"55\" x2=\"210\" y2=\"235\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n      <!-- Variable cable l(t) -->\n      <line x1=\"210\" y1=\"55\" x2=\"315\" y2=\"210\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n      <line x1=\"268\" y1=\"141\" x2=\"245\" y2=\"107\" stroke=\"#dc2626\" stroke-width=\"2.2\" marker-end=\"url(#arr-ex1-r)\"/>\n      <text x=\"275\" y=\"128\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">u_T (winch tension)</text>\n      <text x=\"238\" y=\"155\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">l(t)</text>\n      <!-- Angle arc theta -->\n      <path d=\"M 210 115 A 60 60 0 0 0 243 105\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\"/>\n      <text x=\"217\" y=\"132\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\">θ(t)</text>\n      <!-- Payload bob -->\n      <circle cx=\"315\" cy=\"210\" r=\"16\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2.5\"/>\n      <text x=\"309\" y=\"214\" font-size=\"12\" font-weight=\"700\" fill=\"#78350f\">m</text>\n      <text x=\"338\" y=\"215\" font-size=\"11\" font-weight=\"600\" fill=\"#334155\">r_p = [x + l sin θ, -l cos θ]^T</text>\n    </svg>",
      "prompt": "An overhead crane trolley of mass $M$ moves horizontally along a rail at $y = 0$ with coordinate $x(t)$ and viscous rail damping $b_x$. A motorized winch on the trolley Reels in or pays out a massless cable of **time-varying length** $\\ell(t) > 0$, supporting a point-mass payload $m$ at swing angle $\\theta(t)$ measured counter-clockwise from the downward vertical. A horizontal actuator applies force $F_x(t)$ to the trolley, while the winch drum pulls inward along the cable with tension force $u_T(t)$ (doing virtual work $\\delta W_{\\text{winch}} = -u_T\\,\\delta\\ell$). Use the minimal generalized coordinate vector $\\mathbf{q} = [x, \\ell, \\theta]^T$.",
      "goalStatement": "Derive (1) the payload's inertial position $\\mathbf{r}_p(\\mathbf{q})$ and velocity squared $\\|\\dot{\\mathbf{r}}_p\\|^2$, (2) the total kinetic energy $T(\\mathbf{q},\\dot{\\mathbf{q}})$ and potential energy $V(\\mathbf{q})$, (3) the generalized non-conservative force vector $\\mathbf{Q}$, and (4) the complete $3\\times 3$ manipulator equations $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$, explicitly identifying the radial centrifugal and angular Coriolis terms.",
      "parameters": [
        {
          "symbol": "$M, m$",
          "desc": "Trolley mass on horizontal rail & suspended payload point mass"
        },
        {
          "symbol": "$\\mathbf{q} = [x, \\ell, \\theta]^T$",
          "desc": "Minimal generalized coordinates (3 DOF: rail position, cable length, swing angle)"
        },
        {
          "symbol": "$F_x(t), u_T(t)$",
          "desc": "Horizontal rail actuator force & inward winch cable tension input"
        },
        {
          "symbol": "$b_x, g$",
          "desc": "Viscous rail damping coefficient on trolley & gravitational acceleration"
        }
      ],
      "steps": [
        {
          "title": "Payload Inertial Position $\\mathbf{r}_p(\\mathbf{q})$ and Velocity Squared $\\|\\dot{\\mathbf{r}}_p\\|^2$",
          "goal": "Write the payload's 2D inertial position vector $\\mathbf{r}_p(x,\\ell,\\theta)$, differentiate with respect to time using the product and chain rules on both $\\ell(t)$ and $\\theta(t)$, and simplify $\\|\\dot{\\mathbf{r}}_p\\|^2$.",
          "intuition": "Unlike a fixed-length pendulum where $\\dot{\\ell}=0$, here $\\ell(t)$ is a generalized coordinate! When differentiating $\\ell\\sin\\theta$ and $-\\ell\\cos\\theta$, you get both a radial velocity component $\\dot{\\ell}$ along the cable and a tangential velocity component $\\ell\\dot{\\theta}$ perpendicular to the cable. Because the radial and tangential unit vectors are orthogonal, their cross-product vanishes!",
          "conceptLinks": [
            "generalized-coordinates",
            "kinetic-potential-energy"
          ],
          "hint1": "Write $\\mathbf{r}_p = \\begin{bmatrix} x + \\ell\\sin\\theta \\\\ -\\ell\\cos\\theta \\end{bmatrix}$. Remember to apply the product rule to $\\frac{d}{dt}(\\ell\\sin\\theta) = \\dot{\\ell}\\sin\\theta + \\ell\\dot{\\theta}\\cos\\theta$ and $\\frac{d}{dt}(-\\ell\\cos\\theta) = -\\dot{\\ell}\\cos\\theta + \\ell\\dot{\\theta}\\sin\\theta$.",
          "hint2": "When expanding $\\dot{x}_p^2 + \\dot{y}_p^2$, group the terms without $\\dot{x}$: $(\\dot{\\ell}\\sin\\theta + \\ell\\dot{\\theta}\\cos\\theta)^2 + (-\\dot{\\ell}\\cos\\theta + \\ell\\dot{\\theta}\\sin\\theta)^2 = \\dot{\\ell}^2 + \\ell^2\\dot{\\theta}^2$.",
          "checkpoint": {
            "question": "Which expression gives the simplified squared speed $\\|\\dot{\\mathbf{r}}_p\\|^2$ of the payload?",
            "options": [
              "$$\\|\\dot{\\mathbf{r}}_p\\|^2 = \\dot{x}^2 + \\dot{\\ell}^2 + \\ell^2\\dot{\\theta}^2$$",
              "$$\\|\\dot{\\mathbf{r}}_p\\|^2 = \\dot{x}^2 + \\dot{\\ell}^2 + \\ell^2\\dot{\\theta}^2 + 2\\dot{x}(\\dot{\\ell}\\sin\\theta + \\ell\\dot{\\theta}\\cos\\theta)$$",
              "$$\\|\\dot{\\mathbf{r}}_p\\|^2 = \\dot{x}^2 + \\dot{\\ell}^2 + \\ell^2\\dot{\\theta}^2 + 2\\dot{\\ell}\\ell\\dot{\\theta} + 2\\dot{x}\\ell\\dot{\\theta}\\cos\\theta$$",
              "$$\\|\\dot{\\mathbf{r}}_p\\|^2 = \\dot{x}^2 + \\ell^2\\dot{\\theta}^2 + 2\\dot{x}\\ell\\dot{\\theta}\\cos\\theta$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: You dropped the cross-term $2\\dot{x}(\\dot{\\ell}\\sin\\theta + \\ell\\dot{\\theta}\\cos\\theta)$ between the trolley velocity and the cable's relative velocity!",
              "Correct! The radial velocity $\\dot{\\ell}\\,\\hat{\\mathbf{e}}_r$ and tangential velocity $\\ell\\dot{\\theta}\\,\\hat{\\mathbf{e}}_\\theta$ are orthogonal (so no $\\dot{\\ell}\\dot{\\theta}$ term appears in $T$), while both couple with the horizontal trolley velocity $\\dot{x}$.",
              "Trap: The cross term between $\\dot{\\ell}$ and $\\ell\\dot{\\theta}$ cancels out because $2\\dot{\\ell}\\ell\\dot{\\theta}(\\sin\\theta\\cos\\theta - \\cos\\theta\\sin\\theta) = 0$.",
              "Trap: Since $\\ell(t)$ varies with time, you must include $\\dot{\\ell}$ in the time derivative of $\\mathbf{r}_p$."
            ]
          },
          "derivation": "From the geometry of the trolley at $(x,0)$ and cable of length $\\ell(t)$ at angle $\\theta(t)$ from the downward vertical:\n$$\\mathbf{r}_p(x,\\ell,\\theta) = \\begin{bmatrix} x + \\ell\\sin\\theta \\\\ -\\ell\\cos\\theta \\end{bmatrix}$$\nDifferentiating with respect to time via the product and chain rules:\n$$\\dot{\\mathbf{r}}_p = \\begin{bmatrix} \\dot{x} + \\dot{\\ell}\\sin\\theta + \\ell\\dot{\\theta}\\cos\\theta \\\\ -\\dot{\\ell}\\cos\\theta + \\ell\\dot{\\theta}\\sin\\theta \\end{bmatrix}$$\nSquaring and summing the components using $\\sin^2\\theta + \\cos^2\\theta = 1$:\n$$\\|\\dot{\\mathbf{r}}_p\\|^2 = \\dot{x}^2 + \\dot{\\ell}^2 + \\ell^2\\dot{\\theta}^2 + 2\\dot{x}\\left(\\dot{\\ell}\\sin\\theta + \\ell\\dot{\\theta}\\cos\\theta\\right)$$",
          "stepNumber": 1,
          "badge": "Step 1 • Kinematics & Geometry"
        },
        {
          "title": "Total Kinetic Energy $T$, Potential Energy $V$, and Mass Matrix $\\mathbf{M}(\\mathbf{q})$",
          "goal": "Formulate $T(\\mathbf{q},\\dot{\\mathbf{q}}) = \\frac{1}{2}M\\dot{x}^2 + \\frac{1}{2}m\\|\\dot{\\mathbf{r}}_p\\|^2$, extract the symmetric $3\\times 3$ mass matrix $\\mathbf{M}(\\mathbf{q})$ for $\\mathbf{q}=[x,\\ell,\\theta]^T$, and write the gravitational potential energy $V(\\mathbf{q})$.",
          "intuition": "Every quadratic velocity term in $T = \\frac{1}{2}\\dot{\\mathbf{q}}^T\\mathbf{M}(\\mathbf{q})\\dot{\\mathbf{q}}$ maps directly into an entry of $\\mathbf{M}(\\mathbf{q})$. Because $\\dot{x}\\dot{\\ell}$ has coefficient $m\\sin\\theta$ and $\\dot{x}\\dot{\\theta}$ has coefficient $m\\ell\\cos\\theta$, both $M_{12}$ and $M_{13}$ are non-zero, whereas $M_{23} = 0$ because $\\dot{\\ell}$ and $\\dot{\\theta}$ are orthogonal!",
          "conceptLinks": [
            "kinetic-potential-energy",
            "manipulator-equation"
          ],
          "hint1": "Match $T = \\frac{1}{2}(M+m)\\dot{x}^2 + \\frac{1}{2}m\\dot{\\ell}^2 + \\frac{1}{2}m\\ell^2\\dot{\\theta}^2 + m\\sin\\theta\\,\\dot{x}\\dot{\\ell} + m\\ell\\cos\\theta\\,\\dot{x}\\dot{\\theta}$ to $\\frac{1}{2}\\dot{\\mathbf{q}}^T\\mathbf{M}(\\mathbf{q})\\dot{\\mathbf{q}}$.",
          "hint2": "The payload elevation is $y_p = -\\ell\\cos\\theta$, so gravitational potential energy is $V(\\ell,\\theta) = mgy_p = -mg\\ell\\cos\\theta$.",
          "checkpoint": {
            "question": "What are the symmetric $3\\times 3$ mass matrix $\\mathbf{M}(\\mathbf{q})$ and potential energy $V(\\mathbf{q})$?",
            "options": [
              "$$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M+m & 0 & m\\ell\\cos\\theta \\\\ 0 & m & 0 \\\\ m\\ell\\cos\\theta & 0 & m\\ell^2 \\end{bmatrix}, \\quad V = -mg\\ell\\cos\\theta$$",
              "$$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M+m & m\\sin\\theta & m\\ell\\cos\\theta \\\\ m\\sin\\theta & m & m\\ell \\\\ m\\ell\\cos\\theta & m\\ell & m\\ell^2 \\end{bmatrix}, \\quad V = mg\\ell\\cos\\theta$$",
              "$$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M+m & m\\sin\\theta & m\\ell\\cos\\theta \\\\ m\\sin\\theta & m & 0 \\\\ m\\ell\\cos\\theta & 0 & m\\ell^2 \\end{bmatrix}, \\quad V = -mg\\ell\\cos\\theta$$",
              "$$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M & m\\sin\\theta & m\\ell\\cos\\theta \\\\ m\\sin\\theta & m & 0 \\\\ m\\ell\\cos\\theta & 0 & m\\ell^2 \\end{bmatrix}, \\quad V = -mg\\ell\\cos\\theta$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: Don't forget the $m\\sin\\theta\\,\\dot{x}\\dot{\\ell}$ coupling term in $M_{12} = M_{21}$! Pushing the trolley accelerates the cable extension when $\\theta \\ne 0$.",
              "Trap: $M_{23} = 0$ because radial hoisting $\\dot{\\ell}$ and tangential swing $\\ell\\dot{\\theta}$ are perpendicular, and $V = -mg\\ell\\cos\\theta$ is negative below the rail.",
              "Correct! $M_{11}=M+m$, $M_{12}=m\\sin\\theta$, $M_{13}=m\\ell\\cos\\theta$, $M_{22}=m$, $M_{33}=m\\ell^2$, and $M_{23}=0$, with $V(\\ell,\\theta) = -mg\\ell\\cos\\theta$.",
              "Trap: $M_{11}$ must be $M+m$ because horizontal translation $x$ moves both the trolley $M$ and the payload $m$."
            ]
          },
          "derivation": "Combining the trolley and payload kinetic energies:\n$$T = \\frac{1}{2}M\\dot{x}^2 + \\frac{1}{2}m\\|\\dot{\\mathbf{r}}_p\\|^2 = \\frac{1}{2}(M+m)\\dot{x}^2 + \\frac{1}{2}m\\dot{\\ell}^2 + \\frac{1}{2}m\\ell^2\\dot{\\theta}^2 + m\\sin\\theta\\,\\dot{x}\\dot{\\ell} + m\\ell\\cos\\theta\\,\\dot{x}\\dot{\\theta}$$\nReading off $M_{ij} = \\frac{\\partial^2 T}{\\partial\\dot{q}_i\\partial\\dot{q}_j}$ and using $y_p = -\\ell\\cos\\theta$:\n$$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M+m & m\\sin\\theta & m\\ell\\cos\\theta \\\\ m\\sin\\theta & m & 0 \\\\ m\\ell\\cos\\theta & 0 & m\\ell^2 \\end{bmatrix}, \\qquad V(\\ell,\\theta) = -mg\\ell\\cos\\theta$$",
          "stepNumber": 2,
          "badge": "Step 2 • Matrices & Constraints"
        },
        {
          "title": "Generalized Forces $\\mathbf{Q}$ and Coordinate Partial Derivatives $\\partial L/\\partial\\mathbf{q}$",
          "goal": "Determine the generalized non-conservative force vector $\\mathbf{Q} = [Q_x, Q_\\ell, Q_\\theta]^T$ via virtual work $\\delta W_{nc}$ and compute $\\frac{\\partial L}{\\partial x}$, $\\frac{\\partial L}{\\partial\\ell}$, and $\\frac{\\partial L}{\\partial\\theta}$ where $L = T - V$.",
          "intuition": "Notice that $\\ell$ appears explicitly inside $T$ (in $\\frac{1}{2}m\\ell^2\\dot{\\theta}^2$ and $m\\ell\\cos\\theta\\,\\dot{x}\\dot{\\theta}$) AND inside $V = -mg\\ell\\cos\\theta$. Differentiating $L$ with respect to $\\ell$ automatically produces the centrifugal cable-stretching force $m\\ell\\dot{\\theta}^2$ and gravity component $mg\\cos\\theta$!",
          "conceptLinks": [
            "generalized-forces",
            "manipulator-equation"
          ],
          "hint1": "Virtual work of non-conservative forces is $\\delta W_{nc} = (F_x - b_x\\dot{x})\\delta x - u_T\\delta\\ell + 0\\,\\delta\\theta$ because inward winch tension $u_T$ opposes increasing $\\ell$.",
          "hint2": "Differentiate $L = T - V$ partially with respect to $\\ell$ holding $(\\dot{x},\\dot{\\ell},\\dot{\\theta},x,\\theta)$ fixed: $\\frac{\\partial L}{\\partial\\ell} = m\\ell\\dot{\\theta}^2 + m\\cos\\theta\\,\\dot{x}\\dot{\\theta} + mg\\cos\\theta$.",
          "checkpoint": {
            "question": "Which expressions correctly give $\\mathbf{Q}$ and the partial derivative $\\frac{\\partial L}{\\partial\\ell}$?",
            "options": [
              "$$\\mathbf{Q} = \\begin{bmatrix} F_x - b_x\\dot{x} \\\\ -u_T \\\\ 0 \\end{bmatrix}, \\qquad \\frac{\\partial L}{\\partial\\ell} = \\frac{1}{2}m\\ell^2\\dot{\\theta}^2 + mg\\cos\\theta$$",
              "$$\\mathbf{Q} = \\begin{bmatrix} F_x - b_x\\dot{x} \\\\ +u_T \\\\ 0 \\end{bmatrix}, \\qquad \\frac{\\partial L}{\\partial\\ell} = m\\ell\\dot{\\theta}^2 - mg\\cos\\theta$$",
              "$$\\mathbf{Q} = \\begin{bmatrix} F_x - b_x\\dot{x} \\\\ -u_T\\cos\\theta \\\\ u_T\\ell\\sin\\theta \\end{bmatrix}, \\qquad \\frac{\\partial L}{\\partial\\ell} = m\\ell\\dot{\\theta}^2 + mg\\cos\\theta$$",
              "$$\\mathbf{Q} = \\begin{bmatrix} F_x - b_x\\dot{x} \\\\ -u_T \\\\ 0 \\end{bmatrix}, \\qquad \\frac{\\partial L}{\\partial\\ell} = m\\ell\\dot{\\theta}^2 + m\\cos\\theta\\,\\dot{x}\\dot{\\theta} + mg\\cos\\theta$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: Remember to differentiate $\\frac{1}{2}m\\ell^2\\dot{\\theta}^2 + m\\ell\\cos\\theta\\,\\dot{x}\\dot{\\theta}$ with respect to $\\ell$!",
              "Trap: Inward winch tension pulls toward decreasing $\\ell$ ($Q_\\ell = -u_T$), and $-\\frac{\\partial V}{\\partial\\ell} = -\\frac{\\partial}{\\partial\\ell}(-mg\\ell\\cos\\theta) = +mg\\cos\\theta$.",
              "Trap: Since $\\ell$ is directly the cable length coordinate, the winch tension does work $-u_T\\,\\delta\\ell$ purely along $\\ell$ with zero virtual work in $\\theta$.",
              "Correct! Inward tension $u_T$ opposes $\\delta\\ell > 0$ so $Q_\\ell = -u_T$, and $\\frac{\\partial L}{\\partial\\ell}$ includes both $\\frac{\\partial T}{\\partial\\ell} = m\\ell\\dot{\\theta}^2 + m\\cos\\theta\\,\\dot{x}\\dot{\\theta}$ and $-\\frac{\\partial V}{\\partial\\ell} = +mg\\cos\\theta$."
            ]
          },
          "derivation": "From the virtual work $\\delta W_{nc} = (F_x - b_x\\dot{x})\\delta x - u_T\\delta\\ell$, we read off:\n$$\\mathbf{Q} = \\begin{bmatrix} F_x(t) - b_x\\dot{x} \\\\ -u_T(t) \\\\ 0 \\end{bmatrix}$$\nComputing the coordinate partials of $L = T - V$:\n$$\\frac{\\partial L}{\\partial x} = 0, \\qquad \\frac{\\partial L}{\\partial\\ell} = m\\ell\\dot{\\theta}^2 + m\\cos\\theta\\,\\dot{x}\\dot{\\theta} + mg\\cos\\theta$$\n$$\\frac{\\partial L}{\\partial\\theta} = m\\cos\\theta\\,\\dot{x}\\dot{\\ell} - m\\ell\\sin\\theta\\,\\dot{x}\\dot{\\theta} - mg\\ell\\sin\\theta$$",
          "stepNumber": 3,
          "badge": "Step 3 • Equations & Solution"
        },
        {
          "title": "Complete $3\\times 3$ Manipulator Equations $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$",
          "goal": "Evaluate $\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot{\\mathbf{q}}}\\right) - \\frac{\\partial L}{\\partial\\mathbf{q}} = \\mathbf{Q}$ and cancel the $\\dot{x}\\dot{\\ell}$ and $\\dot{x}\\dot{\\theta}$ cross terms to obtain the clean right-hand side vector $\\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$.",
          "intuition": "Watch how the cross terms $m\\cos\\theta\\,\\dot{x}\\dot{\\theta}$ in $\\frac{d}{dt}(\\partial L/\\partial\\dot{\\ell})$ and $\\frac{\\partial L}{\\partial\\ell}$ cancel identically, leaving the pure centrifugal hoist force $m\\ell\\dot{\\theta}^2$ in the $\\ell$-equation and the famous Coriolis term $-2m\\ell\\dot{\\ell}\\dot{\\theta}$ in the $\\theta$-equation!",
          "conceptLinks": [
            "manipulator-equation"
          ],
          "hint1": "For the $\\ell$-equation: $\\frac{d}{dt}(m\\dot{\\ell} + m\\sin\\theta\\,\\dot{x}) = m\\ddot{\\ell} + m\\sin\\theta\\,\\ddot{x} + m\\cos\\theta\\,\\dot{x}\\dot{\\theta}$. Subtract $\\frac{\\partial L}{\\partial\\ell}$ and notice that $m\\cos\\theta\\,\\dot{x}\\dot{\\theta}$ cancels out!",
          "hint2": "For the $\\theta$-equation: $\\frac{d}{dt}(m\\ell^2\\dot{\\theta} + m\\ell\\cos\\theta\\,\\dot{x}) = m\\ell^2\\ddot{\\theta} + m\\ell\\cos\\theta\\,\\ddot{x} + 2m\\ell\\dot{\\ell}\\dot{\\theta} + m\\cos\\theta\\,\\dot{x}\\dot{\\ell} - m\\ell\\sin\\theta\\,\\dot{x}\\dot{\\theta}$. Subtract $\\frac{\\partial L}{\\partial\\theta}$ and move velocity/gravity terms to the RHS $\\mathbf{f}$.",
          "checkpoint": {
            "question": "After moving all velocity-dependent and gravitational terms to the right-hand side $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$, what is $\\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$?",
            "options": [
              "$$\\mathbf{f} = \\begin{bmatrix} F_x - b_x\\dot{x} - 2m\\cos\\theta\\,\\dot{\\ell}\\dot{\\theta} + m\\ell\\sin\\theta\\,\\dot{\\theta}^2 \\\\ -u_T + m\\ell\\dot{\\theta}^2 + mg\\cos\\theta \\\\ -2m\\ell\\dot{\\ell}\\dot{\\theta} - mg\\ell\\sin\\theta \\end{bmatrix}$$",
              "$$\\mathbf{f} = \\begin{bmatrix} F_x - b_x\\dot{x} + m\\ell\\sin\\theta\\,\\dot{\\theta}^2 \\\\ -u_T + mg\\cos\\theta \\\\ -mg\\ell\\sin\\theta \\end{bmatrix}$$",
              "$$\\mathbf{f} = \\begin{bmatrix} F_x - b_x\\dot{x} + 2m\\cos\\theta\\,\\dot{\\ell}\\dot{\\theta} - m\\ell\\sin\\theta\\,\\dot{\\theta}^2 \\\\ -u_T - m\\ell\\dot{\\theta}^2 + mg\\cos\\theta \\\\ +2m\\ell\\dot{\\ell}\\dot{\\theta} - mg\\ell\\sin\\theta \\end{bmatrix}$$",
              "$$\\mathbf{f} = \\begin{bmatrix} F_x - b_x\\dot{x} - 2m\\cos\\theta\\,\\dot{\\ell}\\dot{\\theta} + m\\ell\\sin\\theta\\,\\dot{\\theta}^2 \\\\ u_T + m\\ell\\dot{\\theta}^2 - mg\\cos\\theta \\\\ -m\\ell\\dot{\\ell}\\dot{\\theta} - mg\\ell\\sin\\theta \\end{bmatrix}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! Every term has a clear physical meaning: $-2m\\cos\\theta\\,\\dot{\\ell}\\dot{\\theta}$ and $m\\ell\\sin\\theta\\,\\dot{\\theta}^2$ are the horizontal Coriolis and centrifugal reactions on the trolley; $m\\ell\\dot{\\theta}^2$ is centrifugal cable tension; and $-2m\\ell\\dot{\\ell}\\dot{\\theta}$ is the Coriolis swing torque when hoisting.",
              "Trap: You omitted the Coriolis coupling $-2m\\cos\\theta\\,\\dot{\\ell}\\dot{\\theta}$ in the $x$-equation, the centrifugal term $m\\ell\\dot{\\theta}^2$ in the $\\ell$-equation, and the Coriolis term $-2m\\ell\\dot{\\ell}\\dot{\\theta}$ in the $\\theta$-equation!",
              "Trap: Check the signs when moving $+2m\\cos\\theta\\,\\dot{\\ell}\\dot{\\theta} - m\\ell\\sin\\theta\\,\\dot{\\theta}^2$ from the LHS to the RHS!",
              "Trap: The Coriolis term in $\\frac{d}{dt}(m\\ell^2\\dot{\\theta})$ has a factor of $2$ ($2m\\ell\\dot{\\ell}\\dot{\\theta}$), and inward winch tension enters as $-u_T$."
            ]
          },
          "derivation": "Evaluating $\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot{\\mathbf{q}}}\\right) - \\frac{\\partial L}{\\partial\\mathbf{q}} = \\mathbf{Q}$ component by component:\n1. **$x$-equation:** $(M+m)\\ddot{x} + m\\sin\\theta\\,\\ddot{\\ell} + m\\ell\\cos\\theta\\,\\ddot{\\theta} + 2m\\cos\\theta\\,\\dot{\\ell}\\dot{\\theta} - m\\ell\\sin\\theta\\,\\dot{\\theta}^2 = F_x - b_x\\dot{x}$\n2. **$\\ell$-equation:** $m\\sin\\theta\\,\\ddot{x} + m\\ddot{\\ell} - m\\ell\\dot{\\theta}^2 - mg\\cos\\theta = -u_T$\n3. **$\\theta$-equation:** $m\\ell\\cos\\theta\\,\\ddot{x} + m\\ell^2\\ddot{\\theta} + 2m\\ell\\dot{\\ell}\\dot{\\theta} + mg\\ell\\sin\\theta = 0$\nMoving all non-acceleration terms to the right-hand side yields $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$ with:\n$$\\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t) = \\begin{bmatrix} F_x(t) - b_x\\dot{x} - 2m\\cos\\theta\\,\\dot{\\ell}\\dot{\\theta} + m\\ell\\sin\\theta\\,\\dot{\\theta}^2 \\\\ -u_T(t) + m\\ell\\dot{\\theta}^2 + mg\\cos\\theta \\\\ -2m\\ell\\dot{\\ell}\\dot{\\theta} - mg\\ell\\sin\\theta \\end{bmatrix}$$",
          "stepNumber": 4,
          "badge": "Step 4 • Physical Analysis & Synthesis"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Example Exam Question 1 (Variable-Length Gantry Hoist)",
        "items": [
          {
            "label": "(1) Payload Inertial Position $\\mathbf{r}_p$ & Velocity Squared $\\|\\dot{\\mathbf{r}}_p\\|^2$",
            "math": "$$\\mathbf{r}_p = \\begin{bmatrix} x + \\ell\\sin\\theta \\\\ -\\ell\\cos\\theta \\end{bmatrix}, \\qquad \\|\\dot{\\mathbf{r}}_p\\|^2 = \\dot{x}^2 + \\dot{\\ell}^2 + \\ell^2\\dot{\\theta}^2 + 2\\dot{x}(\\dot{\\ell}\\sin\\theta + \\ell\\dot{\\theta}\\cos\\theta)$$"
          },
          {
            "label": "(2) Kinetic Energy $T$, Potential Energy $V$, and Generalized Forces $\\mathbf{Q}$",
            "math": "$$T = \\frac{1}{2}(M+m)\\dot{x}^2 + \\frac{1}{2}m\\dot{\\ell}^2 + \\frac{1}{2}m\\ell^2\\dot{\\theta}^2 + m\\sin\\theta\\,\\dot{x}\\dot{\\ell} + m\\ell\\cos\\theta\\,\\dot{x}\\dot{\\theta}, \\quad V = -mg\\ell\\cos\\theta, \\quad \\mathbf{Q} = \\begin{bmatrix} F_x - b_x\\dot{x} \\\\ -u_T \\\\ 0 \\end{bmatrix}$$"
          },
          {
            "label": "(3–4) Manipulator Form $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$",
            "math": "$$\\begin{bmatrix} M+m & m\\sin\\theta & m\\ell\\cos\\theta \\\\ m\\sin\\theta & m & 0 \\\\ m\\ell\\cos\\theta & 0 & m\\ell^2 \\end{bmatrix} \\begin{bmatrix} \\ddot{x} \\\\ \\ddot{\\ell} \\\\ \\ddot{\\theta} \\end{bmatrix} = \\begin{bmatrix} F_x - b_x\\dot{x} - 2m\\cos\\theta\\,\\dot{\\ell}\\dot{\\theta} + m\\ell\\sin\\theta\\,\\dot{\\theta}^2 \\\\ -u_T + m\\ell\\dot{\\theta}^2 + mg\\cos\\theta \\\\ -2m\\ell\\dot{\\ell}\\dot{\\theta} - mg\\ell\\sin\\theta \\end{bmatrix}$$"
          }
        ]
      },
      "lectureRefs": [
        10,
        11,
        12
      ],
      "estimatedMinutes": 20
    },
    {
      "id": "example-2",
      "code": "Example Exam • Question 2",
      "shortTitle": "Rotating Disk & Radial Slider",
      "title": "Rotating Planar Turntable with a Spring-Restrained Radial Slider (Minimal Coordinates)",
      "subtitle": "2-DOF Polar Kinematics, Centrifugal & Coriolis Coupling, and Steady-State Spin Equilibrium",
      "category": "Lagrangian Mechanics",
      "badgeClass": "badge-indigo",
      "difficulty": "Exam-Level (2 DOF Polar)",
      "estimatedTime": "18 mins",
      "matchedLectures": [
        10,
        11,
        12
      ],
      "svgDiagram": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"problem-svg\">\n      <defs>\n        <marker id=\"arr-ex2-b\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#2563eb\"/>\n        </marker>\n        <marker id=\"arr-ex2-r\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#dc2626\"/>\n        </marker>\n      </defs>\n      <rect width=\"500\" height=\"280\" rx=\"12\" fill=\"#f8fafc\"/>\n      <!-- Turntable disk -->\n      <circle cx=\"220\" cy=\"145\" r=\"110\" fill=\"#eff6ff\" stroke=\"#1d4ed8\" stroke-width=\"2.5\"/>\n      <!-- Axes -->\n      <line x1=\"90\" y1=\"145\" x2=\"365\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"220\" y1=\"20\" x2=\"220\" y2=\"265\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <text x=\"370\" y=\"149\" font-size=\"11\" font-weight=\"700\" fill=\"#475569\">+X (Horizontal Plane)</text>\n      <!-- Radial slot at angle phi -->\n      <g transform=\"translate(220,145) rotate(-32)\">\n        <rect x=\"0\" y=\"-10\" width=\"102\" height=\"20\" rx=\"4\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"1.8\"/>\n        <!-- Spring from center to slider -->\n        <path d=\"M 6 0 L 14 -6 L 22 6 L 30 -6 L 38 6 L 46 -6 L 54 0\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/>\n        <!-- Slider mass m -->\n        <rect x=\"54\" y=\"-8\" width=\"24\" height=\"16\" rx=\"3\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/>\n        <text x=\"61\" y=\"4\" font-size=\"11\" font-weight=\"700\" fill=\"#78350f\">m</text>\n      </g>\n      <!-- Angle phi -->\n      <path d=\"M 265 145 A 45 45 0 0 0 258 121\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#arr-ex2-b)\"/>\n      <text x=\"272\" y=\"132\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">φ(t)</text>\n      <!-- Torque tau_m -->\n      <path d=\"M 135 90 A 95 95 0 0 1 180 58\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\" marker-end=\"url(#arr-ex2-r)\"/>\n      <text x=\"105\" y=\"72\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">τ_m(t)</text>\n      <text x=\"155\" y=\"232\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\">Disk Inertia I_d</text>\n      <text x=\"335\" y=\"75\" font-size=\"11\" font-weight=\"600\" fill=\"#334155\">Spring k, rest length r_0</text>\n      <text x=\"335\" y=\"93\" font-size=\"11\" font-weight=\"600\" fill=\"#334155\">Groove damping b_r</text>\n    </svg>",
      "prompt": "A horizontal circular turntable of rotational inertia $I_d$ spins about a fixed vertical axle at the origin with angle $\\phi(t)$, driven by an external motor torque $\\tau_m(t)$. A block of mass $m$ slides inside a radial groove cut into the turntable at radial distance $r(t) > 0$ from the center. The block is attached to the center axle by a linear spring of stiffness $k$ and unstretched length $r_0$, and experiences viscous damping $b_r\\dot{r}$ along the groove. Since motion is purely horizontal, gravity does no work. Use minimal generalized coordinates $\\mathbf{q} = [\\phi, r]^T$.",
      "goalStatement": "Derive (1) the block's inertial Cartesian position $\\mathbf{r}_b(\\phi,r)$ and squared speed $\\|\\dot{\\mathbf{r}}_b\\|^2$, (2) the Lagrangian $L(\\mathbf{q},\\dot{\\mathbf{q}})$ and generalized forces $\\mathbf{Q}$, (3) the coupled equations of motion in manipulator form $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$, and (4) the steady-state equilibrium radius $r_{\\text{eq}}(\\Omega)$ when the disk spins at constant angular rate $\\dot{\\phi} = \\Omega$.",
      "parameters": [
        {
          "symbol": "$I_d, m$",
          "desc": "Turntable moment of inertia about vertical axis & radial slider point mass"
        },
        {
          "symbol": "$\\mathbf{q} = [\\phi, r]^T$",
          "desc": "Minimal generalized coordinates (disk rotation angle & radial slider position)"
        },
        {
          "symbol": "$k, r_0$",
          "desc": "Radial spring stiffness & unstretched spring rest length"
        },
        {
          "symbol": "$\\tau_m(t), b_r$",
          "desc": "Applied motor torque on turntable & viscous damping coefficient along groove"
        }
      ],
      "steps": [
        {
          "title": "Inertial Cartesian Position $\\mathbf{r}_b(\\phi,r)$ and Polar Velocity Squared $\\|\\dot{\\mathbf{r}}_b\\|^2$",
          "goal": "Express the slider's position in the fixed horizontal $(X,Y)$ frame and differentiate with respect to time to find $\\|\\dot{\\mathbf{r}}_b\\|^2$.",
          "intuition": "Even if you forget the polar velocity formula $v^2 = \\dot{r}^2 + r^2\\dot{\\phi}^2$, writing $\\mathbf{r}_b = [r\\cos\\phi, r\\sin\\phi]^T$ in inertial Cartesian coordinates and differentiating via the product rule derives it from first principles in two lines!",
          "conceptLinks": [
            "generalized-coordinates",
            "kinetic-potential-energy"
          ],
          "hint1": "Write $\\mathbf{r}_b = \\begin{bmatrix} r\\cos\\phi \\\\ r\\sin\\phi \\end{bmatrix}$ and apply the product rule: $\\dot{X}_b = \\dot{r}\\cos\\phi - r\\dot{\\phi}\\sin\\phi$ and $\\dot{Y}_b = \\dot{r}\\sin\\phi + r\\dot{\\phi}\\cos\\phi$.",
          "hint2": "Square and add $\\dot{X}_b^2 + \\dot{Y}_b^2$ using $\\cos^2\\phi + \\sin^2\\phi = 1$. Notice what happens to the $-2r\\dot{r}\\dot{\\phi}\\cos\\phi\\sin\\phi + 2r\\dot{r}\\dot{\\phi}\\sin\\phi\\cos\\phi$ cross terms.",
          "checkpoint": {
            "question": "What are the inertial velocity vector $\\dot{\\mathbf{r}}_b$ and squared speed $\\|\\dot{\\mathbf{r}}_b\\|^2$ of the slider?",
            "options": [
              "$$\\dot{\\mathbf{r}}_b = \\begin{bmatrix} \\dot{r}\\cos\\phi - r\\dot{\\phi}\\sin\\phi \\\\ \\dot{r}\\sin\\phi + r\\dot{\\phi}\\cos\\phi \\end{bmatrix}, \\qquad \\|\\dot{\\mathbf{r}}_b\\|^2 = \\dot{r}^2 + r^2\\dot{\\phi}^2 + 2r\\dot{r}\\dot{\\phi}$$",
              "$$\\dot{\\mathbf{r}}_b = \\begin{bmatrix} \\dot{r}\\cos\\phi \\\\ \\dot{r}\\sin\\phi \\end{bmatrix}, \\qquad \\|\\dot{\\mathbf{r}}_b\\|^2 = \\dot{r}^2$$",
              "$$\\dot{\\mathbf{r}}_b = \\begin{bmatrix} \\dot{r}\\cos\\phi - r\\dot{\\phi}\\sin\\phi \\\\ \\dot{r}\\sin\\phi + r\\dot{\\phi}\\cos\\phi \\end{bmatrix}, \\qquad \\|\\dot{\\mathbf{r}}_b\\|^2 = \\dot{r}^2 + r^2\\dot{\\phi}^2$$",
              "$$\\dot{\\mathbf{r}}_b = \\begin{bmatrix} -r\\dot{\\phi}\\sin\\phi \\\\ r\\dot{\\phi}\\cos\\phi \\end{bmatrix}, \\qquad \\|\\dot{\\mathbf{r}}_b\\|^2 = r^2\\dot{\\phi}^2$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: The cross terms $-2r\\dot{r}\\dot{\\phi}\\cos\\phi\\sin\\phi$ and $+2r\\dot{r}\\dot{\\phi}\\sin\\phi\\cos\\phi$ cancel out completely.",
              "Trap: You forgot to differentiate $\\cos\\phi(t)$ and $\\sin\\phi(t)$ with respect to time! The slider also sweeps tangentially with speed $r\\dot{\\phi}$.",
              "Correct! Because the radial unit vector $\\hat{\\mathbf{e}}_r = [\\cos\\phi,\\sin\\phi]^T$ and transverse unit vector $\\hat{\\mathbf{e}}_\\phi = [-\\sin\\phi,\\cos\\phi]^T$ are orthogonal, $\\|\\dot{\\mathbf{r}}_b\\|^2 = \\dot{r}^2 + r^2\\dot{\\phi}^2$.",
              "Trap: Since $r(t)$ varies as the block slides in the slot, you must include the radial velocity $\\dot{r}$."
            ]
          },
          "derivation": "In the fixed horizontal plane, the block's position is:\n$$\\mathbf{r}_b(\\phi,r) = \\begin{bmatrix} r\\cos\\phi \\\\ r\\sin\\phi \\end{bmatrix}$$\nDifferentiating with respect to time via the product rule:\n$$\\dot{\\mathbf{r}}_b = \\begin{bmatrix} \\dot{r}\\cos\\phi - r\\dot{\\phi}\\sin\\phi \\\\ \\dot{r}\\sin\\phi + r\\dot{\\phi}\\cos\\phi \\end{bmatrix}$$\nTaking the dot product $\\dot{\\mathbf{r}}_b^T\\dot{\\mathbf{r}}_b$:\n$$\\|\\dot{\\mathbf{r}}_b\\|^2 = (\\dot{r}\\cos\\phi - r\\dot{\\phi}\\sin\\phi)^2 + (\\dot{r}\\sin\\phi + r\\dot{\\phi}\\cos\\phi)^2 = \\dot{r}^2 + r^2\\dot{\\phi}^2$$",
          "stepNumber": 1,
          "badge": "Step 1 • Kinematics & Geometry"
        },
        {
          "title": "Total Kinetic Energy $T$, Potential Energy $V$, and Generalized Forces $\\mathbf{Q}$",
          "goal": "Formulate the total kinetic energy $T$ (turntable + slider), potential energy $V(r)$ of the radial spring, and generalized non-conservative forces $\\mathbf{Q} = [Q_\\phi, Q_r]^T$.",
          "intuition": "Notice how the slider at radius $r$ adds $mr^2$ to the turntable's effective moment of inertia $I_d + mr^2$! Even though $\\mathbf{M}(\\mathbf{q})$ is diagonal here, $\\mathbf{M}(\\mathbf{q})$ depends on $r$, which will generate both the Coriolis torque $2mr\\dot{r}\\dot{\\phi}$ and centrifugal force $mr\\dot{\\phi}^2$ via Lagrange's equations.",
          "conceptLinks": [
            "kinetic-potential-energy",
            "generalized-forces"
          ],
          "hint1": "Add the rotational kinetic energy of the turntable $\\frac{1}{2}I_d\\dot{\\phi}^2$ to the slider kinetic energy $\\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\phi}^2)$.",
          "hint2": "The spring stretch from rest length $r_0$ is $(r - r_0)$, so $V(r) = \\frac{1}{2}k(r - r_0)^2$. Virtual work of non-conservative actions is $\\delta W_{nc} = \\tau_m\\,\\delta\\phi - b_r\\dot{r}\\,\\delta r$.",
          "checkpoint": {
            "question": "Which expressions give $T(\\mathbf{q},\\dot{\\mathbf{q}})$, $V(\\mathbf{q})$, and $\\mathbf{Q}$?",
            "options": [
              "$$T = \\frac{1}{2}I_d\\dot{\\phi}^2 + \\frac{1}{2}m\\dot{r}^2, \\quad V = \\frac{1}{2}k(r-r_0)^2, \\quad \\mathbf{Q} = \\begin{bmatrix} \\tau_m \\\\ -b_r\\dot{r} \\end{bmatrix}$$",
              "$$T = \\frac{1}{2}(I_d + mr^2)\\dot{\\phi}^2 + \\frac{1}{2}m\\dot{r}^2, \\quad V = \\frac{1}{2}kr^2, \\quad \\mathbf{Q} = \\begin{bmatrix} \\tau_m \\\\ -k(r-r_0) - b_r\\dot{r} \\end{bmatrix}$$",
              "$$T = \\frac{1}{2}(I_d + mr^2)\\dot{\\phi}^2 + \\frac{1}{2}m\\dot{r}^2, \\quad V = \\frac{1}{2}k(r-r_0)^2 + mgr, \\quad \\mathbf{Q} = \\begin{bmatrix} \\tau_m \\\\ -b_r\\dot{r} \\end{bmatrix}$$",
              "$$T = \\frac{1}{2}(I_d + mr^2)\\dot{\\phi}^2 + \\frac{1}{2}m\\dot{r}^2, \\quad V = \\frac{1}{2}k(r-r_0)^2, \\quad \\mathbf{Q} = \\begin{bmatrix} \\tau_m \\\\ -b_r\\dot{r} \\end{bmatrix}$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: You forgot the tangential kinetic energy $\\frac{1}{2}mr^2\\dot{\\phi}^2$ of the slider mass $m$!",
              "Trap: Never include the spring force inside BOTH $V$ and $\\mathbf{Q}$ (double-counting!), and use the actual stretch $(r - r_0)$.",
              "Trap: The turntable lies in a horizontal plane, so gravity is perpendicular to the motion and $V_{\\text{grav}} = \\text{const} = 0$.",
              "Correct! $T = \\frac{1}{2}(I_d + mr^2)\\dot{\\phi}^2 + \\frac{1}{2}m\\dot{r}^2$, $V = \\frac{1}{2}k(r-r_0)^2$, and $\\mathbf{Q} = [\\tau_m(t), -b_r\\dot{r}]^T$."
            ]
          },
          "derivation": "Summing the kinetic energy of the turntable and the block:\n$$T(\\mathbf{q},\\dot{\\mathbf{q}}) = \\frac{1}{2}I_d\\dot{\\phi}^2 + \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\phi}^2) = \\frac{1}{2}(I_d + mr^2)\\dot{\\phi}^2 + \\frac{1}{2}m\\dot{r}^2$$\nThe spring potential energy and non-conservative generalized forces are:\n$$V(r) = \\frac{1}{2}k(r - r_0)^2, \\qquad \\mathbf{Q} = \\begin{bmatrix} \\tau_m(t) \\\\ -b_r\\dot{r} \\end{bmatrix}$$",
          "stepNumber": 2,
          "badge": "Step 2 • Matrices & Constraints"
        },
        {
          "title": "Coupled Euler-Lagrange Equations in Manipulator Form $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$",
          "goal": "Apply $\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot{q}_i}\\right) - \\frac{\\partial L}{\\partial q_i} = Q_i$ for $\\phi$ and $r$ and write the $2\\times 2$ matrix system.",
          "intuition": "In the $\\phi$-equation, $\\frac{\\partial L}{\\partial\\phi} = 0$ (since $\\phi$ is a cyclic coordinate), but $\\frac{d}{dt}[(I_d + mr^2)\\dot{\\phi}] = (I_d + mr^2)\\ddot{\\phi} + 2mr\\dot{r}\\dot{\\phi}$ produces the Coriolis angular momentum flux $2mr\\dot{r}\\dot{\\phi}$ (the ice-skater spin effect!). In the $r$-equation, $\\frac{\\partial L}{\\partial r} = mr\\dot{\\phi}^2 - k(r-r_0)$ produces the outward centrifugal force $+mr\\dot{\\phi}^2$.",
          "conceptLinks": [
            "manipulator-equation"
          ],
          "hint1": "For $\\phi$: $\\frac{\\partial L}{\\partial\\dot{\\phi}} = (I_d + mr^2)\\dot{\\phi}$. Differentiating with respect to time gives $(I_d + mr^2)\\ddot{\\phi} + 2mr\\dot{r}\\dot{\\phi}$ since $r(t)$ depends on $t$!",
          "hint2": "For $r$: $\\frac{d}{dt}(m\\dot{r}) = m\\ddot{r}$ and $\\frac{\\partial L}{\\partial r} = mr\\dot{\\phi}^2 - k(r - r_0)$.",
          "checkpoint": {
            "question": "Which $2\\times 2$ system $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$ governs the turntable-slider system?",
            "options": [
              "$$\\begin{bmatrix} I_d + mr^2 & 0 \\\\ 0 & m \\end{bmatrix} \\begin{bmatrix} \\ddot{\\phi} \\\\ \\ddot{r} \\end{bmatrix} = \\begin{bmatrix} \\tau_m - 2mr\\dot{r}\\dot{\\phi} \\\\ -b_r\\dot{r} + mr\\dot{\\phi}^2 - k(r-r_0) \\end{bmatrix}$$",
              "$$\\begin{bmatrix} I_d + mr^2 & 0 \\\\ 0 & m \\end{bmatrix} \\begin{bmatrix} \\ddot{\\phi} \\\\ \\ddot{r} \\end{bmatrix} = \\begin{bmatrix} \\tau_m - mr\\dot{r}\\dot{\\phi} \\\\ -b_r\\dot{r} - mr\\dot{\\phi}^2 - k(r-r_0) \\end{bmatrix}$$",
              "$$\\begin{bmatrix} I_d + mr^2 & 2mr \\\\ 2mr & m \\end{bmatrix} \\begin{bmatrix} \\ddot{\\phi} \\\\ \\ddot{r} \\end{bmatrix} = \\begin{bmatrix} \\tau_m \\\\ -b_r\\dot{r} + mr\\dot{\\phi}^2 - k(r-r_0) \\end{bmatrix}$$",
              "$$\\begin{bmatrix} I_d + mr^2 & 0 \\\\ 0 & m \\end{bmatrix} \\begin{bmatrix} \\ddot{\\phi} \\\\ \\ddot{r} \\end{bmatrix} = \\begin{bmatrix} \\tau_m \\\\ -b_r\\dot{r} - k(r-r_0) \\end{bmatrix}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! $\\mathbf{M}(\\mathbf{q}) = \\text{diag}(I_d+mr^2, m)$ and $\\mathbf{f} = [\\tau_m - 2mr\\dot{r}\\dot{\\phi},\\; -b_r\\dot{r} + mr\\dot{\\phi}^2 - k(r-r_0)]^T$.",
              "Trap: The derivative of $mr^2$ is $2mr\\dot{r}$ (factor of 2!), and moving $-mr\\dot{\\phi}^2$ to the RHS gives $+mr\\dot{\\phi}^2$ (outward centrifugal force).",
              "Trap: $2mr\\dot{r}\\dot{\\phi}$ is a velocity product (Coriolis term on the RHS), NOT an acceleration term in $\\mathbf{M}(\\mathbf{q})$!",
              "Trap: You treated $r$ as a constant when differentiating $(I_d+mr^2)\\dot{\\phi}$ and omitted $\\frac{\\partial T}{\\partial r} = mr\\dot{\\phi}^2$!"
            ]
          },
          "derivation": "With $L = \\frac{1}{2}(I_d + mr^2)\\dot{\\phi}^2 + \\frac{1}{2}m\\dot{r}^2 - \\frac{1}{2}k(r - r_0)^2$:\n1. **$\\phi$-equation:** $\\frac{d}{dt}\\left[(I_d + mr^2)\\dot{\\phi}\\right] - 0 = (I_d + mr^2)\\ddot{\\phi} + 2mr\\dot{r}\\dot{\\phi} = \\tau_m(t)$\n2. **$r$-equation:** $\\frac{d}{dt}(m\\dot{r}) - \\left[mr\\dot{\\phi}^2 - k(r - r_0)\\right] = m\\ddot{r} - mr\\dot{\\phi}^2 + k(r - r_0) = -b_r\\dot{r}$\nIn matrix manipulator form $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$:\n$$\\begin{bmatrix} I_d + mr^2 & 0 \\\\ 0 & m \\end{bmatrix} \\begin{bmatrix} \\ddot{\\phi} \\\\ \\ddot{r} \\end{bmatrix} = \\begin{bmatrix} \\tau_m(t) - 2mr\\dot{r}\\dot{\\phi} \\\\ -b_r\\dot{r} + mr\\dot{\\phi}^2 - k(r - r_0) \\end{bmatrix}$$",
          "stepNumber": 3,
          "badge": "Step 3 • Equations & Solution"
        },
        {
          "title": "Steady-State Equilibrium Radius $r_{\\text{eq}}(\\Omega)$ and Critical Spin Speed",
          "goal": "Suppose the turntable is driven at constant angular velocity $\\dot{\\phi} = \\Omega$ and the slider settles to a constant radius $r(t) = r_{\\text{eq}}$ ($\\dot{r} = \\ddot{r} = 0$). Solve for $r_{\\text{eq}}(\\Omega)$ and identify the critical spin speed $\\Omega_{\\text{crit}}$.",
          "intuition": "At steady spin $\\dot{\\phi} = \\Omega$, the outward centrifugal force $mr_{\\text{eq}}\\Omega^2$ balances the inward spring restoring force $k(r_{\\text{eq}} - r_0)$. If $m\\Omega^2 \\ge k$, the centrifugal force grows faster with $r$ than the spring force, so no finite equilibrium exists!",
          "conceptLinks": [
            "manipulator-equation"
          ],
          "hint1": "Set $\\ddot{r} = 0$, $\\dot{r} = 0$, and $\\dot{\\phi} = \\Omega$ in the radial equation of motion: $mr_{\\text{eq}}\\Omega^2 - k(r_{\\text{eq}} - r_0) = 0$.",
          "hint2": "Group the $r_{\\text{eq}}$ terms together: $(k - m\\Omega^2)r_{\\text{eq}} = kr_0$.",
          "checkpoint": {
            "question": "What is the steady-state equilibrium radius $r_{\\text{eq}}(\\Omega)$ and for what spin speeds does a finite equilibrium exist?",
            "options": [
              "$$r_{\\text{eq}}(\\Omega) = r_0 + \\frac{m\\Omega^2}{k}, \\quad \\text{valid for all } \\Omega$$",
              "$$r_{\\text{eq}}(\\Omega) = \\frac{k r_0}{k - m\\Omega^2}, \\quad \\text{valid for } \\Omega < \\sqrt{\\frac{k}{m}}$$",
              "$$r_{\\text{eq}}(\\Omega) = \\frac{k r_0}{k + m\\Omega^2}, \\quad \\text{valid for all } \\Omega$$",
              "$$r_{\\text{eq}}(\\Omega) = \\frac{m\\Omega^2 r_0}{k - m\\Omega^2}, \\quad \\text{valid for } \\Omega < \\sqrt{\\frac{k}{m}}$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: The centrifugal force is $mr_{\\text{eq}}\\Omega^2$ (proportional to $r_{\\text{eq}}$, not $r_0$), so you must factor $r_{\\text{eq}}(k - m\\Omega^2) = kr_0$.",
              "Correct! $r_{\\text{eq}} = \\frac{kr_0}{k - m\\Omega^2}$, which stretches outward as $\\Omega$ increases and diverges when $\\Omega \\to \\Omega_{\\text{crit}} = \\sqrt{k/m}$. Also note that since $\\dot{r}=0$ and $\\ddot{\\phi}=0$, the required steady motor torque is $\\tau_m = 0$!",
              "Trap: Centrifugal force pulls outward against the spring, reducing the effective radial stiffness to $k_{\\text{eff}} = k - m\\Omega^2$.",
              "Trap: Check your algebra when solving $kr_{\\text{eq}} - kr_0 = mr_{\\text{eq}}\\Omega^2$: the numerator is $kr_0$."
            ]
          },
          "derivation": "Setting $\\dot{\\phi} = \\Omega$, $\\ddot{\\phi} = 0$, $\\dot{r} = 0$, and $\\ddot{r} = 0$ in the $r$-equation gives:\n$$0 = mr_{\\text{eq}}\\Omega^2 - k(r_{\\text{eq}} - r_0) \\implies (k - m\\Omega^2)r_{\\text{eq}} = kr_0$$\nSolving for $r_{\\text{eq}}(\\Omega)$:\n$$r_{\\text{eq}}(\\Omega) = \\frac{kr_0}{k - m\\Omega^2} = \\frac{r_0}{1 - (m/k)\\Omega^2}, \\qquad \\text{valid for } \\Omega < \\Omega_{\\text{crit}} = \\sqrt{\\frac{k}{m}}$$",
          "stepNumber": 4,
          "badge": "Step 4 • Physical Analysis & Synthesis"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Example Exam Question 2 (Rotating Disk & Radial Slider)",
        "items": [
          {
            "label": "(1–2) Polar Kinematics, Lagrangian $L(\\mathbf{q},\\dot{\\mathbf{q}})$ & Generalized Forces $\\mathbf{Q}$",
            "math": "$$\\|\\dot{\\mathbf{r}}_b\\|^2 = \\dot{r}^2 + r^2\\dot{\\phi}^2, \\quad L = \\frac{1}{2}(I_d + mr^2)\\dot{\\phi}^2 + \\frac{1}{2}m\\dot{r}^2 - \\frac{1}{2}k(r - r_0)^2, \\quad \\mathbf{Q} = \\begin{bmatrix} \\tau_m(t) \\\\ -b_r\\dot{r} \\end{bmatrix}$$"
          },
          {
            "label": "(3) Manipulator Form $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$",
            "math": "$$\\begin{bmatrix} I_d + mr^2 & 0 \\\\ 0 & m \\end{bmatrix} \\begin{bmatrix} \\ddot{\\phi} \\\\ \\ddot{r} \\end{bmatrix} = \\begin{bmatrix} \\tau_m(t) - 2mr\\dot{r}\\dot{\\phi} \\\\ -b_r\\dot{r} + mr\\dot{\\phi}^2 - k(r - r_0) \\end{bmatrix}$$"
          },
          {
            "label": "(4) Steady-State Spin Equilibrium Radius $r_{\\text{eq}}(\\Omega)$",
            "math": "$$r_{\\text{eq}}(\\Omega) = \\frac{kr_0}{k - m\\Omega^2} \\quad \\left(\\Omega < \\sqrt{\\frac{k}{m}}\\right), \\qquad \\tau_{m,\\text{eq}} = 0$$"
          }
        ]
      },
      "lectureRefs": [
        10,
        11,
        12
      ],
      "estimatedMinutes": 18
    },
    {
      "id": "example-3",
      "code": "Example Exam • Question 3",
      "shortTitle": "Cart with Coaxial Torsion Pendulums",
      "title": "Driven Cart Carrying Two Coaxial Pendulums Coupled by a Torsion Spring (Minimal Coordinates)",
      "subtitle": "3-DOF Branched Multibody System — Mass Matrix Sparsity, Torsion Spring Potential & Coupled EOM",
      "category": "Lagrangian Mechanics",
      "badgeClass": "badge-indigo",
      "difficulty": "Exam-Level (3 DOF Branched)",
      "estimatedTime": "20 mins",
      "matchedLectures": [
        10,
        11,
        12
      ],
      "svgDiagram": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"problem-svg\">\n      <rect width=\"500\" height=\"280\" rx=\"12\" fill=\"#f8fafc\"/>\n      <line x1=\"30\" y1=\"70\" x2=\"470\" y2=\"70\" stroke=\"#475569\" stroke-width=\"3.5\"/>\n      <!-- Cart -->\n      <rect x=\"170\" y=\"36\" width=\"80\" height=\"34\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2.5\"/>\n      <text x=\"198\" y=\"57\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\">M</text>\n      <circle cx=\"210\" cy=\"70\" r=\"7\" fill=\"#fef3c7\" stroke=\"#b45309\" stroke-width=\"2\"/>\n      <!-- Vertical reference -->\n      <line x1=\"210\" y1=\"70\" x2=\"210\" y2=\"245\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <!-- Pendulum 1 -->\n      <line x1=\"210\" y1=\"70\" x2=\"145\" y2=\"210\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n      <circle cx=\"145\" cy=\"210\" r=\"13\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2.5\"/>\n      <text x=\"137\" y=\"214\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\">m_1</text>\n      <text x=\"155\" y=\"138\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">l_1, θ_1</text>\n      <!-- Pendulum 2 -->\n      <line x1=\"210\" y1=\"70\" x2=\"310\" y2=\"215\" stroke=\"#059669\" stroke-width=\"3\"/>\n      <circle cx=\"310\" cy=\"215\" r=\"14\" fill=\"#a7f3d0\" stroke=\"#047857\" stroke-width=\"2.5\"/>\n      <text x=\"301\" y=\"219\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\">m_2</text>\n      <text x=\"268\" y=\"138\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\">l_2, θ_2</text>\n      <!-- Torsion spring arc between rods -->\n      <path d=\"M 192 108 A 42 42 0 0 0 234 105\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"3,2\"/>\n      <text x=\"172\" y=\"125\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">k_t(θ_2 - θ_1)</text>\n      <text x=\"275\" y=\"55\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">→ F(t)</text>\n    </svg>",
      "prompt": "A cart of mass $M$ translates horizontally with coordinate $x(t)$ along a frictionless track under external force $F(t)$. Hinged at the **same pivot point** $(x, 0)$ on the cart are two independent massless rods of lengths $\\ell_1$ and $\\ell_2$ carrying point masses $m_1$ and $m_2$ at absolute angles $\\theta_1(t)$ and $\\theta_2(t)$ measured counter-clockwise from the downward vertical. A rotational torsion spring of stiffness $k_t$ and rotary viscous damper $c_t$ act directly between the two rods at the hinge, resisting their relative angle $(\\theta_2 - \\theta_1)$. Use minimal coordinates $\\mathbf{q} = [x, \\theta_1, \\theta_2]^T$.",
      "goalStatement": "Derive (1) the inertial velocities and total kinetic energy $T(\\mathbf{q},\\dot{\\mathbf{q}})$, (2) the $3\\times 3$ mass matrix $\\mathbf{M}(\\mathbf{q})$ (explaining why $M_{23} = 0$), (3) the total potential energy $V(\\theta_1,\\theta_2)$ and generalized forces $\\mathbf{Q}$ via Rayleigh's dissipation function or virtual work, and (4) the complete $3\\times 3$ manipulator equations $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$.",
      "parameters": [
        {
          "symbol": "$M, m_1, m_2$",
          "desc": "Cart mass & two coaxial pendulum bob point masses"
        },
        {
          "symbol": "$\\ell_1, \\ell_2$",
          "desc": "Lengths of pendulum rods 1 and 2 hinged at the cart pivot $(x,0)$"
        },
        {
          "symbol": "$k_t, c_t$",
          "desc": "Inter-rod torsion spring stiffness & rotary viscous damper coefficient"
        },
        {
          "symbol": "$\\mathbf{q} = [x, \\theta_1, \\theta_2]^T$",
          "desc": "Minimal generalized coordinates (cart position & absolute rod angles)"
        }
      ],
      "steps": [
        {
          "title": "Bob Kinematics and Total Kinetic Energy $T(\\mathbf{q},\\dot{\\mathbf{q}})$",
          "goal": "Write the inertial position $\\mathbf{r}_i(x,\\theta_i)$ and squared speed $\\|\\dot{\\mathbf{r}}_i\\|^2$ for each bob ($i = 1, 2$), and sum to obtain $T(\\mathbf{q},\\dot{\\mathbf{q}})$.",
          "intuition": "Because both pendulums are attached directly to the cart pivot $(x,0)$ rather than in series (unlike a double pendulum where bob 2 hangs from bob 1), $\\mathbf{r}_1$ depends only on $(x,\\theta_1)$ and $\\mathbf{r}_2$ depends only on $(x,\\theta_2)$!",
          "conceptLinks": [
            "generalized-coordinates",
            "kinetic-potential-energy"
          ],
          "hint1": "For each bob $i \\in \\{1,2\\}$, $\\mathbf{r}_i = [x + \\ell_i\\sin\\theta_i,\\; -\\ell_i\\cos\\theta_i]^T$, so $\\dot{\\mathbf{r}}_i = [\\dot{x} + \\ell_i\\dot{\\theta}_i\\cos\\theta_i,\\; \\ell_i\\dot{\\theta}_i\\sin\\theta_i]^T$.",
          "hint2": "Use $\\|\\dot{\\mathbf{r}}_i\\|^2 = \\dot{x}^2 + \\ell_i^2\\dot{\\theta}_i^2 + 2\\ell_i\\cos\\theta_i\\,\\dot{x}\\dot{\\theta}_i$ and sum $T = \\frac{1}{2}M\\dot{x}^2 + \\frac{1}{2}m_1\\|\\dot{\\mathbf{r}}_1\\|^2 + \\frac{1}{2}m_2\\|\\dot{\\mathbf{r}}_2\\|^2$.",
          "checkpoint": {
            "question": "Which expression gives the total kinetic energy $T(\\mathbf{q},\\dot{\\mathbf{q}})$ of the branched cart-pendulum system?",
            "options": [
              "$$T = \\frac{1}{2}(M+m_1+m_2)\\dot{x}^2 + \\frac{1}{2}(m_1\\ell_1^2 + m_2\\ell_2^2)(\\dot{\\theta}_1^2 + \\dot{\\theta}_2^2)$$",
              "$$T = \\frac{1}{2}(M+m_1+m_2)\\dot{x}^2 + \\frac{1}{2}m_1\\ell_1^2\\dot{\\theta}_1^2 + \\frac{1}{2}m_2\\ell_2^2\\dot{\\theta}_2^2 + m_2\\ell_1\\ell_2\\cos(\\theta_1-\\theta_2)\\dot{\\theta}_1\\dot{\\theta}_2$$",
              "$$T = \\frac{1}{2}M\\dot{x}^2 + \\frac{1}{2}m_1\\ell_1^2\\dot{\\theta}_1^2 + \\frac{1}{2}m_2\\ell_2^2\\dot{\\theta}_2^2$$",
              "$$T = \\frac{1}{2}(M+m_1+m_2)\\dot{x}^2 + \\frac{1}{2}m_1\\ell_1^2\\dot{\\theta}_1^2 + \\frac{1}{2}m_2\\ell_2^2\\dot{\\theta}_2^2 + m_1\\ell_1\\cos\\theta_1\\,\\dot{x}\\dot{\\theta}_1 + m_2\\ell_2\\cos\\theta_2\\,\\dot{x}\\dot{\\theta}_2$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: Mass $m_1$ only rotates with $\\dot{\\theta}_1$ and mass $m_2$ only rotates with $\\dot{\\theta}_2$.",
              "Trap: A $\\cos(\\theta_1-\\theta_2)\\dot{\\theta}_1\\dot{\\theta}_2$ term only occurs in a serial double pendulum where bob 2 hangs from bob 1! Here both rods pivot on the cart at $(x,0)$.",
              "Trap: You forgot the translational kinetic energy of the bobs with the cart and the $\\dot{x}\\dot{\\theta}_i$ cross terms!",
              "Correct! Each bob contributes $\\frac{1}{2}m_i\\dot{x}^2 + \\frac{1}{2}m_i\\ell_i^2\\dot{\\theta}_i^2 + m_i\\ell_i\\cos\\theta_i\\,\\dot{x}\\dot{\\theta}_i$, with no direct $\\dot{\\theta}_1\\dot{\\theta}_2$ velocity cross term."
            ]
          },
          "derivation": "For each pendulum bob $i \\in \\{1,2\\}$ pivoted at $(x,0)$:\n$$\\mathbf{r}_i = \\begin{bmatrix} x + \\ell_i\\sin\\theta_i \\\\ -\\ell_i\\cos\\theta_i \\end{bmatrix} \\implies \\|\\dot{\\mathbf{r}}_i\\|^2 = \\dot{x}^2 + \\ell_i^2\\dot{\\theta}_i^2 + 2\\ell_i\\cos\\theta_i\\,\\dot{x}\\dot{\\theta}_i$$\nSumming $T = \\frac{1}{2}M\\dot{x}^2 + \\frac{1}{2}m_1\\|\\dot{\\mathbf{r}}_1\\|^2 + \\frac{1}{2}m_2\\|\\dot{\\mathbf{r}}_2\\|^2$ gives:\n$$T = \\frac{1}{2}(M + m_1 + m_2)\\dot{x}^2 + \\frac{1}{2}m_1\\ell_1^2\\dot{\\theta}_1^2 + \\frac{1}{2}m_2\\ell_2^2\\dot{\\theta}_2^2 + m_1\\ell_1\\cos\\theta_1\\,\\dot{x}\\dot{\\theta}_1 + m_2\\ell_2\\cos\\theta_2\\,\\dot{x}\\dot{\\theta}_2$$",
          "stepNumber": 1,
          "badge": "Step 1 • Kinematics & Geometry"
        },
        {
          "title": "Symmetric $3\\times 3$ Mass Matrix $\\mathbf{M}(\\mathbf{q})$ and Sparsity Pattern",
          "goal": "Extract the $3\\times 3$ mass matrix $\\mathbf{M}(\\mathbf{q})$ for $\\mathbf{q} = [x, \\theta_1, \\theta_2]^T$ from $T = \\frac{1}{2}\\dot{\\mathbf{q}}^T\\mathbf{M}(\\mathbf{q})\\dot{\\mathbf{q}}$.",
          "intuition": "In a branched tree mechanism, two branches sharing a common base body ($x$) have zero direct inertial coupling ($M_{23} = M_{32} = 0$) in $\\mathbf{M}(\\mathbf{q})$, even though they dynamically affect each other through the cart's acceleration $\\ddot{x}$ and the torsion spring!",
          "conceptLinks": [
            "manipulator-equation"
          ],
          "hint1": "Compute $M_{ij} = \\frac{\\partial^2 T}{\\partial\\dot{q}_i\\partial\\dot{q}_j}$ for $\\dot{\\mathbf{q}} = [\\dot{x}, \\dot{\\theta}_1, \\dot{\\theta}_2]^T$.",
          "hint2": "Check $\\frac{\\partial^2 T}{\\partial\\dot{\\theta}_1\\partial\\dot{\\theta}_2}$: since no term in $T$ contains the product $\\dot{\\theta}_1\\dot{\\theta}_2$, $M_{23} = M_{32} = 0$.",
          "checkpoint": {
            "question": "What is the $3\\times 3$ mass matrix $\\mathbf{M}(\\mathbf{q})$ for $\\mathbf{q} = [x, \\theta_1, \\theta_2]^T$?",
            "options": [
              "$$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M+m_1+m_2 & m_1\\ell_1\\cos\\theta_1 & m_2\\ell_2\\cos\\theta_2 \\\\ m_1\\ell_1\\cos\\theta_1 & m_1\\ell_1^2 & 0 \\\\ m_2\\ell_2\\cos\\theta_2 & 0 & m_2\\ell_2^2 \\end{bmatrix}$$",
              "$$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M+m_1+m_2 & m_1\\ell_1\\cos\\theta_1 & m_2\\ell_2\\cos\\theta_2 \\\\ m_1\\ell_1\\cos\\theta_1 & m_1\\ell_1^2 & k_t \\\\ m_2\\ell_2\\cos\\theta_2 & k_t & m_2\\ell_2^2 \\end{bmatrix}$$",
              "$$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M+m_1+m_2 & \\frac{1}{2}m_1\\ell_1\\cos\\theta_1 & \\frac{1}{2}m_2\\ell_2\\cos\\theta_2 \\\\ \\frac{1}{2}m_1\\ell_1\\cos\\theta_1 & m_1\\ell_1^2 & 0 \\\\ \\frac{1}{2}m_2\\ell_2\\cos\\theta_2 & 0 & m_2\\ell_2^2 \\end{bmatrix}$$",
              "$$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M & m_1\\ell_1\\cos\\theta_1 & m_2\\ell_2\\cos\\theta_2 \\\\ m_1\\ell_1\\cos\\theta_1 & m_1\\ell_1^2 & 0 \\\\ m_2\\ell_2\\cos\\theta_2 & 0 & m_2\\ell_2^2 \\end{bmatrix}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! Because only the first row and column have off-diagonal entries ($M_{12}=m_1\\ell_1\\cos\\theta_1$, $M_{13}=m_2\\ell_2\\cos\\theta_2$, $M_{23}=0$), $\\mathbf{M}(\\mathbf{q})$ has an arrow-head sparsity pattern.",
              "Trap: The torsion spring stiffness $k_t$ belongs in the potential energy $V(\\mathbf{q})$, NEVER in the mass matrix $\\mathbf{M}(\\mathbf{q})$!",
              "Trap: A cross term $c\\,\\dot{q}_i\\dot{q}_j$ in $T$ contributes $c$ (not $c/2$) to $M_{ij}$ and $M_{ji}$.",
              "Trap: $M_{11}$ must sum all translating masses: $M + m_1 + m_2$."
            ]
          },
          "derivation": "Matching $T = \\frac{1}{2}\\dot{\\mathbf{q}}^T\\mathbf{M}(\\mathbf{q})\\dot{\\mathbf{q}}$ yields the symmetric mass matrix:\n$$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M + m_1 + m_2 & m_1\\ell_1\\cos\\theta_1 & m_2\\ell_2\\cos\\theta_2 \\\\ m_1\\ell_1\\cos\\theta_1 & m_1\\ell_1^2 & 0 \\\\ m_2\\ell_2\\cos\\theta_2 & 0 & m_2\\ell_2^2 \\end{bmatrix}$$",
          "stepNumber": 2,
          "badge": "Step 2 • Matrices & Constraints"
        },
        {
          "title": "Potential Energy $V(\\theta_1,\\theta_2)$ and Generalized Non-Conservative Forces $\\mathbf{Q}$",
          "goal": "Write the total potential energy $V(\\theta_1,\\theta_2)$ (gravity + inter-rod torsion spring) and the generalized force vector $\\mathbf{Q}$ (external cart force + inter-rod rotary viscous damper).",
          "intuition": "By Newton's third law (or differentiating Rayleigh's dissipation function $\\mathcal{R} = \\frac{1}{2}c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1)^2$), both the torsion spring and the rotary damper exert equal and opposite torques on rod 1 and rod 2!",
          "conceptLinks": [
            "kinetic-potential-energy",
            "generalized-forces"
          ],
          "hint1": "Add gravitational potential energy $-m_1g\\ell_1\\cos\\theta_1 - m_2g\\ell_2\\cos\\theta_2$ to the torsion spring energy $\\frac{1}{2}k_t(\\theta_2 - \\theta_1)^2$.",
          "hint2": "Use Rayleigh's dissipation function $\\mathcal{R} = \\frac{1}{2}c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1)^2$ and $Q_i^{\\text{damp}} = -\\frac{\\partial\\mathcal{R}}{\\partial\\dot{q}_i}$ to get the damping torques on $\\theta_1$ and $\\theta_2$ without sign errors!",
          "checkpoint": {
            "question": "What are $V(\\theta_1,\\theta_2)$ and the generalized force vector $\\mathbf{Q} = [Q_x, Q_{\\theta_1}, Q_{\\theta_2}]^T$?",
            "options": [
              "$$V = -m_1g\\ell_1\\cos\\theta_1 - m_2g\\ell_2\\cos\\theta_2 + \\frac{1}{2}k_t(\\theta_1^2 + \\theta_2^2), \\qquad \\mathbf{Q} = \\begin{bmatrix} F(t) \\\\ -c_t\\dot{\\theta}_1 \\\\ -c_t\\dot{\\theta}_2 \\end{bmatrix}$$",
              "$$V = -m_1g\\ell_1\\cos\\theta_1 - m_2g\\ell_2\\cos\\theta_2 + \\frac{1}{2}k_t(\\theta_2 - \\theta_1)^2, \\qquad \\mathbf{Q} = \\begin{bmatrix} F(t) \\\\ +c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\\\ -c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\end{bmatrix}$$",
              "$$V = -m_1g\\ell_1\\cos\\theta_1 - m_2g\\ell_2\\cos\\theta_2 + \\frac{1}{2}k_t(\\theta_2 - \\theta_1)^2, \\qquad \\mathbf{Q} = \\begin{bmatrix} F(t) \\\\ -c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\\\ -c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\end{bmatrix}$$",
              "$$V = m_1g\\ell_1\\cos\\theta_1 + m_2g\\ell_2\\cos\\theta_2 + \\frac{1}{2}k_t(\\theta_2 - \\theta_1)^2, \\qquad \\mathbf{Q} = \\begin{bmatrix} F(t) \\\\ +c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\\\ -c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\end{bmatrix}$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: The torsion spring and damper act between rod 1 and rod 2 (on the relative angle $\\theta_2 - \\theta_1$), not between each rod and the cart.",
              "Correct! $-\\frac{\\partial\\mathcal{R}}{\\partial\\dot{\\theta}_1} = +c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1)$ and $-\\frac{\\partial\\mathcal{R}}{\\partial\\dot{\\theta}_2} = -c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1)$ have opposite signs: if rod 2 rotates faster than rod 1 ($\\dot{\\theta}_2 > \\dot{\\theta}_1$), the damper pulls rod 1 forward and slows rod 2 down!",
              "Trap: Action-reaction requires opposite signs on $Q_{\\theta_1}$ and $Q_{\\theta_2}$ so that internal damping does zero net virtual work under a rigid rotation $\\delta\\theta_1 = \\delta\\theta_2$.",
              "Trap: Since the bobs hang below $y=0$ at $y_i = -\\ell_i\\cos\\theta_i$, gravitational potential energy is negative ($-m_ig\\ell_i\\cos\\theta_i$)."
            ]
          },
          "derivation": "Summing gravitational potential energy and the inter-rod torsion spring energy:\n$$V(\\theta_1,\\theta_2) = -m_1g\\ell_1\\cos\\theta_1 - m_2g\\ell_2\\cos\\theta_2 + \\frac{1}{2}k_t(\\theta_2 - \\theta_1)^2$$\nUsing Rayleigh's dissipation function $\\mathcal{R} = \\frac{1}{2}c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1)^2$ and $\\delta W_{\\text{ext}} = F(t)\\,\\delta x$:\n$$\\mathbf{Q} = \\begin{bmatrix} F(t) \\\\ -\\frac{\\partial\\mathcal{R}}{\\partial\\dot{\\theta}_1} \\\\ -\\frac{\\partial\\mathcal{R}}{\\partial\\dot{\\theta}_2} \\end{bmatrix} = \\begin{bmatrix} F(t) \\\\ c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\\\ -c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\end{bmatrix}$$",
          "stepNumber": 3,
          "badge": "Step 3 • Equations & Solution"
        },
        {
          "title": "Complete $3\\times 3$ Right-Hand Side Vector $\\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$",
          "goal": "Evaluate Lagrange's equations for $x, \\theta_1, \\theta_2$, cancel the $\\dot{x}\\dot{\\theta}_i$ cross terms, and assemble the right-hand side vector $\\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$ in $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}$.",
          "intuition": "Just like in the single cart-pendulum problem, the term $-m_i\\ell_i\\sin\\theta_i\\,\\dot{x}\\dot{\\theta}_i$ from $\\frac{d}{dt}(\\partial T/\\partial\\dot{\\theta}_i)$ cancels identically against $\\frac{\\partial T}{\\partial\\theta_i} = -m_i\\ell_i\\sin\\theta_i\\,\\dot{x}\\dot{\\theta}_i$!",
          "conceptLinks": [
            "manipulator-equation"
          ],
          "hint1": "In the $x$-equation, $\\frac{d}{dt}(m_i\\ell_i\\cos\\theta_i\\,\\dot{\\theta}_i) = m_i\\ell_i\\cos\\theta_i\\,\\ddot{\\theta}_i - m_i\\ell_i\\sin\\theta_i\\,\\dot{\\theta}_i^2$. Move the centrifugal terms $-m_i\\ell_i\\sin\\theta_i\\,\\dot{\\theta}_i^2$ to the RHS.",
          "hint2": "In the $\\theta_1$ and $\\theta_2$ equations, compute $-\\frac{\\partial V}{\\partial\\theta_1} = -m_1g\\ell_1\\sin\\theta_1 + k_t(\\theta_2 - \\theta_1)$ and $-\\frac{\\partial V}{\\partial\\theta_2} = -m_2g\\ell_2\\sin\\theta_2 - k_t(\\theta_2 - \\theta_1)$.",
          "checkpoint": {
            "question": "What is the right-hand side vector $\\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$ in $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$?",
            "options": [
              "$$\\mathbf{f} = \\begin{bmatrix} F(t) - m_1\\ell_1\\sin\\theta_1\\,\\dot{\\theta}_1^2 - m_2\\ell_2\\sin\\theta_2\\,\\dot{\\theta}_2^2 \\\\ -m_1g\\ell_1\\sin\\theta_1 - k_t(\\theta_2 - \\theta_1) \\\\ -m_2g\\ell_2\\sin\\theta_2 + k_t(\\theta_2 - \\theta_1) \\end{bmatrix}$$",
              "$$\\mathbf{f} = \\begin{bmatrix} F(t) + m_1\\ell_1\\sin\\theta_1\\,\\dot{\\theta}_1^2 + m_2\\ell_2\\sin\\theta_2\\,\\dot{\\theta}_2^2 \\\\ -m_1g\\ell_1\\sin\\theta_1 + m_1\\ell_1\\sin\\theta_1\\,\\dot{x}\\dot{\\theta}_1 + k_t(\\theta_2 - \\theta_1) \\\\ -m_2g\\ell_2\\sin\\theta_2 + m_2\\ell_2\\sin\\theta_2\\,\\dot{x}\\dot{\\theta}_2 - k_t(\\theta_2 - \\theta_1) \\end{bmatrix}$$",
              "$$\\mathbf{f} = \\begin{bmatrix} F(t) + m_1\\ell_1\\sin\\theta_1\\,\\dot{\\theta}_1^2 + m_2\\ell_2\\sin\\theta_2\\,\\dot{\\theta}_2^2 \\\\ -m_1g\\ell_1\\sin\\theta_1 + k_t(\\theta_2 - \\theta_1) + c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\\\ -m_2g\\ell_2\\sin\\theta_2 - k_t(\\theta_2 - \\theta_1) - c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\end{bmatrix}$$",
              "$$\\mathbf{f} = \\begin{bmatrix} F(t) \\\\ -m_1g\\ell_1\\sin\\theta_1 + k_t(\\theta_2 - \\theta_1) + c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\\\ -m_2g\\ell_2\\sin\\theta_2 - k_t(\\theta_2 - \\theta_1) - c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\end{bmatrix}$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: Check the signs of the centrifugal terms $+m_i\\ell_i\\sin\\theta_i\\,\\dot{\\theta}_i^2$ on the RHS, as well as the signs of $\\pm k_t(\\theta_2 - \\theta_1)$ and the rotary damping terms!",
              "Trap: Remember that $-m_i\\ell_i\\sin\\theta_i\\,\\dot{x}\\dot{\\theta}_i$ cancels between $\\frac{d}{dt}(\\partial T/\\partial\\dot{\\theta}_i)$ and $\\frac{\\partial T}{\\partial\\theta_i}$!",
              "Correct! Both centrifugal reaction forces $+m_i\\ell_i\\sin\\theta_i\\,\\dot{\\theta}_i^2$ appear in the cart equation, while the equal-and-opposite torsion spring and damper torques $\\pm[k_t(\\theta_2-\\theta_1) + c_t(\\dot{\\theta}_2-\\dot{\\theta}_1)]$ couple the two pendulum equations.",
              "Trap: Don't drop the centrifugal terms $+m_1\\ell_1\\sin\\theta_1\\,\\dot{\\theta}_1^2 + m_2\\ell_2\\sin\\theta_2\\,\\dot{\\theta}_2^2$ in the cart's equation of motion."
            ]
          },
          "derivation": "Evaluating $\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot{\\mathbf{q}}}\\right) - \\frac{\\partial L}{\\partial\\mathbf{q}} = \\mathbf{Q}$ and moving all non-acceleration terms to the right-hand side yields $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$ with:\n$$\\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t) = \\begin{bmatrix} F(t) + m_1\\ell_1\\sin\\theta_1\\,\\dot{\\theta}_1^2 + m_2\\ell_2\\sin\\theta_2\\,\\dot{\\theta}_2^2 \\\\ -m_1g\\ell_1\\sin\\theta_1 + k_t(\\theta_2 - \\theta_1) + c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\\\ -m_2g\\ell_2\\sin\\theta_2 - k_t(\\theta_2 - \\theta_1) - c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\end{bmatrix}$$",
          "stepNumber": 4,
          "badge": "Step 4 • Physical Analysis & Synthesis"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Example Exam Question 3 (Cart with Coaxial Torsion Pendulums)",
        "items": [
          {
            "label": "(1) Kinetic Energy $T$ & Potential Energy $V$",
            "math": "$$T = \\frac{1}{2}(M+m_1+m_2)\\dot{x}^2 + \\sum_{i=1}^2\\left(\\frac{1}{2}m_i\\ell_i^2\\dot{\\theta}_i^2 + m_i\\ell_i\\cos\\theta_i\\,\\dot{x}\\dot{\\theta}_i\\right), \\quad V = -\\sum_{i=1}^2 m_ig\\ell_i\\cos\\theta_i + \\frac{1}{2}k_t(\\theta_2 - \\theta_1)^2$$"
          },
          {
            "label": "(2–3) Mass Matrix $\\mathbf{M}(\\mathbf{q})$ & Generalized Forces $\\mathbf{Q}$",
            "math": "$$\\mathbf{M}(\\mathbf{q}) = \\begin{bmatrix} M+m_1+m_2 & m_1\\ell_1\\cos\\theta_1 & m_2\\ell_2\\cos\\theta_2 \\\\ m_1\\ell_1\\cos\\theta_1 & m_1\\ell_1^2 & 0 \\\\ m_2\\ell_2\\cos\\theta_2 & 0 & m_2\\ell_2^2 \\end{bmatrix}, \\qquad \\mathbf{Q} = \\begin{bmatrix} F(t) \\\\ c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\\\ -c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\end{bmatrix}$$"
          },
          {
            "label": "(4) Right-Hand Side Vector $\\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t)$ in $\\mathbf{M}(\\mathbf{q})\\ddot{\\mathbf{q}} = \\mathbf{f}$",
            "math": "$$\\mathbf{f}(\\mathbf{q},\\dot{\\mathbf{q}},t) = \\begin{bmatrix} F(t) + m_1\\ell_1\\sin\\theta_1\\,\\dot{\\theta}_1^2 + m_2\\ell_2\\sin\\theta_2\\,\\dot{\\theta}_2^2 \\\\ -m_1g\\ell_1\\sin\\theta_1 + k_t(\\theta_2 - \\theta_1) + c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\\\ -m_2g\\ell_2\\sin\\theta_2 - k_t(\\theta_2 - \\theta_1) - c_t(\\dot{\\theta}_2 - \\dot{\\theta}_1) \\end{bmatrix}$$"
          }
        ]
      },
      "lectureRefs": [
        10,
        11,
        12
      ],
      "estimatedMinutes": 20
    },
    {
      "id": "example-4",
      "code": "Example Exam • Question 4",
      "shortTitle": "Bead on a Parabolic Wire (DAE)",
      "title": "Planar Collar on a Parabolic Guide Wire in Maximal Coordinates & Baumgarte Stabilization",
      "subtitle": "Nonlinear Holonomic Constraint g(x,y) = y - a x^2 = 0 — Jacobian J, Convective -2a x_dot^2 Term & Multiplier lambda",
      "category": "Constrained Systems",
      "badgeClass": "badge-emerald",
      "difficulty": "Exam-Level (Maximal DAE)",
      "estimatedTime": "20 mins",
      "matchedLectures": [
        13,
        17,
        22
      ],
      "svgDiagram": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"problem-svg\">\n      <defs>\n        <marker id=\"arr-ex4-b\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#059669\"/>\n        </marker>\n        <marker id=\"arr-ex4-r\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#dc2626\"/>\n        </marker>\n      </defs>\n      <rect width=\"500\" height=\"280\" rx=\"12\" fill=\"#f8fafc\"/>\n      <!-- Axes -->\n      <line x1=\"60\" y1=\"225\" x2=\"440\" y2=\"225\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <line x1=\"250\" y1=\"250\" x2=\"250\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <text x=\"445\" y=\"229\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">+x</text>\n      <text x=\"256\" y=\"32\" font-size=\"12\" font-weight=\"700\" fill=\"#475569\">+y</text>\n      <!-- Parabolic wire y = a x^2 -->\n      <path d=\"M 90 45 Q 250 405 410 45\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"4\"/>\n      <text x=\"96\" y=\"42\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">Wire: y = a x^2</text>\n      <!-- Collar mass m at (x, y) -->\n      <circle cx=\"345\" cy=\"145\" r=\"14\" fill=\"#a7f3d0\" stroke=\"#047857\" stroke-width=\"2.5\"/>\n      <text x=\"339\" y=\"149\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\">m</text>\n      <!-- Normal constraint force -J^T lambda -->\n      <line x1=\"345\" y1=\"145\" x2=\"295\" y2=\"108\" stroke=\"#059669\" stroke-width=\"2.5\" marker-end=\"url(#arr-ex4-b)\"/>\n      <text x=\"202\" y=\"102\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\">-J^T λ = [2axλ, -λ]^T</text>\n      <!-- External horizontal force F_x -->\n      <line x1=\"359\" y1=\"145\" x2=\"418\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"2.5\" marker-end=\"url(#arr-ex4-r)\"/>\n      <text x=\"372\" y=\"136\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">F_x(t)</text>\n      <text x=\"358\" y=\"172\" font-size=\"11\" font-weight=\"600\" fill=\"#334155\">q = [x, y]^T</text>\n    </svg>",
      "prompt": "A bead of mass $m$ slides without friction along a rigid parabolic wire shaped as $y = a x^2$ ($a > 0$) in the vertical $x$-$y$ plane (with $+y$ pointing upward and gravity $g$ acting downward). A horizontal thruster applies force $F_x(t)$ to the bead. Instead of eliminating $y$, model the bead in **maximal Cartesian coordinates** $\\mathbf{q} = [x, y]^T$ subject to the bilateral holonomic constraint $g(x,y) = y - a x^2 = 0$.",
      "goalStatement": "Derive (1) the $1\\times 2$ constraint Jacobian $\\mathbf{J}(\\mathbf{q}) = \\frac{\\partial g}{\\partial\\mathbf{q}}$ and convective acceleration $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$, (2) the $3\\times 3$ constrained block DAE system for $[\\ddot{x}, \\ddot{y}, \\lambda]^T$, (3) the explicit closed-form expression for the Lagrange multiplier $\\lambda(x,\\dot{x},F_x)$ and its physical meaning, and (4) the Baumgarte-stabilized acceleration constraint equation with parameters $(\\alpha_B, \\beta_B)$.",
      "parameters": [
        {
          "symbol": "$m, g$",
          "desc": "Bead point mass & gravitational acceleration in the $-y$ direction"
        },
        {
          "symbol": "$a > 0$",
          "desc": "Curvature constant of the parabolic wire $y = a x^2$"
        },
        {
          "symbol": "$\\mathbf{q} = [x, y]^T$",
          "desc": "Maximal Cartesian coordinates in the vertical plane (2 coordinates, 1 constraint)"
        },
        {
          "symbol": "$F_x(t), \\lambda$",
          "desc": "Horizontal thruster force & Lagrange multiplier enforcing $g(x,y) = y - ax^2 = 0$"
        }
      ],
      "steps": [
        {
          "title": "Constraint Jacobian $\\mathbf{J}(\\mathbf{q})$ and Convective Acceleration $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$",
          "goal": "Compute $\\mathbf{J}(\\mathbf{q}) = \\frac{\\partial g}{\\partial\\mathbf{q}}$ for $g(x,y) = y - ax^2 = 0$, differentiate to find $\\dot{\\mathbf{J}}(\\mathbf{q},\\dot{\\mathbf{q}})$, and evaluate the scalar convective term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$.",
          "intuition": "Because the wire is curved ($a \\ne 0$), the normal direction $\\mathbf{J}^T = [-2ax, 1]^T$ rotates as the bead moves along $x$. That curvature produces a non-zero convective acceleration $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = -2a\\dot{x}^2$, which is the vertical centripetal acceleration $2a\\dot{x}^2$ required to stay on the parabola!",
          "conceptLinks": [
            "holonomic-constraints",
            "constraint-jacobian"
          ],
          "hint1": "Compute partial derivatives of $g(x,y) = y - ax^2$ with respect to $x$ and $y$: $\\frac{\\partial g}{\\partial x} = -2ax$ and $\\frac{\\partial g}{\\partial y} = 1$.",
          "hint2": "Differentiate $\\mathbf{J} = [-2ax, 1]$ with respect to time: $\\dot{\\mathbf{J}} = [-2a\\dot{x}, 0]$, then multiply by $\\dot{\\mathbf{q}} = [\\dot{x}, \\dot{y}]^T$.",
          "checkpoint": {
            "question": "What are the $1\\times 2$ Jacobian $\\mathbf{J}(\\mathbf{q})$ and the convective term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$?",
            "options": [
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} -2ax & 1 \\end{bmatrix}, \\qquad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = -2a\\dot{x}^2$$",
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} 2ax & 1 \\end{bmatrix}, \\qquad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 2a\\dot{x}^2$$",
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} -2ax & 1 \\end{bmatrix}, \\qquad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0$$",
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} -ax^2 & y \\end{bmatrix}, \\qquad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = -2ax\\dot{x} + \\dot{y}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! $\\mathbf{J} = [-2ax, 1]$ and $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = [-2a\\dot{x}, 0][\\dot{x}, \\dot{y}]^T = -2a\\dot{x}^2$, so $\\ddot{g} = -2ax\\ddot{x} + \\ddot{y} - 2a\\dot{x}^2 = 0$.",
              "Trap: Since $g(x,y) = y - ax^2$, the partial derivative with respect to $x$ has a minus sign: $-2ax$.",
              "Trap: $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ is only zero when the constraint is linear in $\\mathbf{q}$. Here $g$ is quadratic in $x$, so $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = -2a\\dot{x}^2 \\ne 0$!",
              "Trap: $\\mathbf{J}$ is the gradient row vector $\\left[\\frac{\\partial g}{\\partial x}, \\frac{\\partial g}{\\partial y}\\right]$, not the terms of $g$ itself."
            ]
          },
          "derivation": "Differentiating $g(x,y) = y - ax^2 = 0$ with respect to $\\mathbf{q} = [x, y]^T$:\n$$\\mathbf{J}(\\mathbf{q}) = \\frac{\\partial g}{\\partial\\mathbf{q}} = \\begin{bmatrix} -2ax & 1 \\end{bmatrix}$$\nDifferentiating $\\mathbf{J}(\\mathbf{q})$ with respect to time gives $\\dot{\\mathbf{J}} = \\begin{bmatrix} -2a\\dot{x} & 0 \\end{bmatrix}$, and multiplying by $\\dot{\\mathbf{q}} = [\\dot{x}, \\dot{y}]^T$ yields:\n$$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = -2a\\dot{x}^2 \\implies \\ddot{g} = \\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = -2ax\\ddot{x} + \\ddot{y} - 2a\\dot{x}^2 = 0$$",
          "stepNumber": 1,
          "badge": "Step 1 • Kinematics & Geometry"
        },
        {
          "title": "$3\\times 3$ Constrained Block DAE System",
          "goal": "Write the unconstrained mass matrix $\\mathbf{M}$, force vector $\\mathbf{f}$, and assemble the $3\\times 3$ index-1 DAE block matrix for $[\\ddot{x}, \\ddot{y}, \\lambda]^T$.",
          "intuition": "In maximal coordinates, the unconstrained kinetic energy is simply $T = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2)$ so $\\mathbf{M} = m\\mathbf{I}_2$ is constant and diagonal! All the geometry of the parabola lives inside $\\mathbf{J} = [-2ax, 1]$ and $-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = +2a\\dot{x}^2$.",
          "conceptLinks": [
            "lagrange-multipliers"
          ],
          "hint1": "From $T = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2)$ and $V = mgy$, the unconstrained equations are $m\\ddot{x} = F_x$ and $m\\ddot{y} = -mg$, so $\\mathbf{f} = [F_x, -mg]^T$.",
          "hint2": "Place $\\mathbf{M}$ in the top-left $2\\times 2$ block, $\\mathbf{J}^T$ in the top-right $2\\times 1$ block, $\\mathbf{J}$ in the bottom-left $1\\times 2$ block, and $-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = +2a\\dot{x}^2$ in the bottom-right RHS entry.",
          "checkpoint": {
            "question": "Which $3\\times 3$ linear system governs $[\\ddot{x}, \\ddot{y}, \\lambda]^T$ at each instant?",
            "options": [
              "$$\\begin{bmatrix} m & 0 & -2ax \\\\ 0 & m & 1 \\\\ -2ax & 1 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x} \\\\ \\ddot{y} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} F_x \\\\ -mg \\\\ -2a\\dot{x}^2 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} m & 0 & -2ax \\\\ 0 & m & 1 \\\\ -2ax & 1 & 1 \\end{bmatrix} \\begin{bmatrix} \\ddot{x} \\\\ \\ddot{y} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} F_x \\\\ -mg \\\\ 2a\\dot{x}^2 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} m & 0 & 2ax \\\\ 0 & m & -1 \\\\ 2ax & -1 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x} \\\\ \\ddot{y} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} F_x \\\\ -mg \\\\ 2a\\dot{x}^2 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} m & 0 & -2ax \\\\ 0 & m & 1 \\\\ -2ax & 1 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x} \\\\ \\ddot{y} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} F_x \\\\ -mg \\\\ 2a\\dot{x}^2 \\end{bmatrix}$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: Watch the sign on the bottom-right RHS entry! Since $\\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0$, moving $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = -2a\\dot{x}^2$ to the RHS gives $-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = +2a\\dot{x}^2$.",
              "Trap: The $(3,3)$ entry of a holonomic constraint DAE matrix is always $0$ because $\\lambda$ does not appear in $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$.",
              "Trap: Using $\\mathbf{J} = [-2ax, 1]$, the third row is $-2ax\\ddot{x} + \\ddot{y} = +2a\\dot{x}^2$ (so that $\\ddot{y} = 2ax\\ddot{x} + 2a\\dot{x}^2$).",
              "Correct! The symmetric KKT matrix has $[\\mathbf{M}, \\mathbf{J}^T; \\mathbf{J}, 0]$ on the left and $[\\mathbf{f}; -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}] = [F_x, -mg, 2a\\dot{x}^2]^T$ on the right."
            ]
          },
          "derivation": "Combining $\\mathbf{M}\\ddot{\\mathbf{q}} + \\mathbf{J}^T\\lambda = \\mathbf{f}$ with $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ gives the $3\\times 3$ block DAE system:\n$$\\begin{bmatrix} m & 0 & -2ax \\\\ 0 & m & 1 \\\\ -2ax & 1 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x} \\\\ \\ddot{y} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} F_x(t) \\\\ -mg \\\\ 2a\\dot{x}^2 \\end{bmatrix}$$",
          "stepNumber": 2,
          "badge": "Step 2 • Matrices & Constraints"
        },
        {
          "title": "Explicit Solution for the Lagrange Multiplier $\\lambda(x,\\dot{x},F_x)$",
          "goal": "Eliminate $\\ddot{x}$ and $\\ddot{y}$ (or use the Delassus formula $\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T\\lambda = \\mathbf{J}\\mathbf{M}^{-1}\\mathbf{f} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$) to solve explicitly for $\\lambda$ and the constraint force $\\mathbf{F}_c = -\\mathbf{J}^T\\lambda$.",
          "intuition": "At the bottom of the parabola ($x=0$), $\\mathbf{J} = [0, 1]$ and $\\lambda = -(mg + 2ma\\dot{x}^2)$, so the upward normal force exerted by the wire on the bead is $F_{c,y} = -\\lambda = mg + 2ma\\dot{x}^2$ — gravity plus the centripetal force $mv^2/\\rho$ where the radius of curvature is $\\rho = 1/(2a)$!",
          "conceptLinks": [
            "lagrange-multipliers"
          ],
          "hint1": "From the first two rows, $\\ddot{x} = \\frac{F_x + 2ax\\lambda}{m}$ and $\\ddot{y} = \\frac{-mg - \\lambda}{m}$. Substitute both into $-2ax\\ddot{x} + \\ddot{y} = 2a\\dot{x}^2$.",
          "hint2": "Alternatively, compute $\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T = \\frac{1 + 4a^2x^2}{m}$ and $\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{f} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\frac{-2axF_x - mg}{m} - 2a\\dot{x}^2$.",
          "checkpoint": {
            "question": "What is the closed-form Lagrange multiplier $\\lambda(x,\\dot{x},F_x)$?",
            "options": [
              "$$\\lambda = -(mg + 2ma\\dot{x}^2)$$",
              "$$\\lambda = -\\frac{mg - 2axF_x - 2ma\\dot{x}^2}{1 + 4a^2x^2}$$",
              "$$\\lambda = -\\frac{mg + 2axF_x + 2ma\\dot{x}^2}{1 + 4a^2x^2}$$",
              "$$\\lambda = \\frac{mg + 2axF_x + 2ma\\dot{x}^2}{1 + 2ax}$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: You forgot the denominator $1 + 4a^2x^2 = \\|\\mathbf{J}\\|^2$ and the horizontal thruster projection $2axF_x$ when $x \\ne 0$.",
              "Trap: Check the signs of $-2axF_x$ and $-2ma\\dot{x}^2$: pushing right ($F_x > 0$) for $x > 0$ presses the bead harder against the rising wire, increasing the upward normal reaction $-\\lambda$.",
              "Correct! And the generalized normal force on the bead is $\\mathbf{F}_c = -\\mathbf{J}^T\\lambda = \\begin{bmatrix} 2ax\\lambda \\\\ -\\lambda \\end{bmatrix}$, which is strictly perpendicular to the wire tangent $[1, 2ax]^T$.",
              "Trap: $\\mathbf{J}\\mathbf{J}^T = (-2ax)^2 + 1^2 = 1 + 4a^2x^2$."
            ]
          },
          "derivation": "Substituting $\\ddot{x} = \\frac{F_x + 2ax\\lambda}{m}$ and $\\ddot{y} = \\frac{-mg - \\lambda}{m}$ into $-2ax\\ddot{x} + \\ddot{y} = 2a\\dot{x}^2$:\n$$-2ax\\left(\\frac{F_x + 2ax\\lambda}{m}\\right) + \\frac{-mg - \\lambda}{m} = 2a\\dot{x}^2$$\nMultiplying by $m$ and collecting $\\lambda$ terms:\n$$-(1 + 4a^2x^2)\\lambda = mg + 2axF_x + 2ma\\dot{x}^2 \\implies \\lambda = -\\frac{mg + 2axF_x + 2ma\\dot{x}^2}{1 + 4a^2x^2}$$",
          "stepNumber": 3,
          "badge": "Step 3 • Equations & Solution"
        },
        {
          "title": "Baumgarte Constraint Stabilization",
          "goal": "Write the Baumgarte-stabilized acceleration constraint equation $\\ddot{g} + 2\\alpha_B\\dot{g} + \\beta_B^2 g = 0$ explicitly in terms of $(x,y,\\dot{x},\\dot{y},\\ddot{x},\\ddot{y})$ and replace the bottom row of the DAE.",
          "intuition": "If we numerically integrate $\\ddot{y} - 2ax\\ddot{x} = 2a\\dot{x}^2$ over thousands of time steps, floating-point errors cause the bead to drift off the parabola $y = ax^2$. Adding $2\\alpha_B\\dot{g} + \\beta_B^2 g$ acts like a virtual spring-damper pulling $(x,y)$ back onto the wire!",
          "conceptLinks": [
            "baumgarte-stabilization"
          ],
          "hint1": "Substitute $g = y - ax^2$, $\\dot{g} = \\dot{y} - 2ax\\dot{x}$, and $\\ddot{g} = \\ddot{y} - 2ax\\ddot{x} - 2a\\dot{x}^2$ into $\\ddot{g} + 2\\alpha_B\\dot{g} + \\beta_B^2 g = 0$.",
          "hint2": "Move all non-acceleration terms to the right-hand side so the bottom row of the $3\\times 3$ matrix has the exact same left-hand side $[-2ax,\\; 1,\\; 0]$.",
          "checkpoint": {
            "question": "When Baumgarte stabilization is enabled, what replaces the bottom-right RHS scalar $2a\\dot{x}^2$ in the $3\\times 3$ DAE system?",
            "options": [
              "$$2a\\dot{x}^2 + 2\\alpha_B(\\dot{y} - 2ax\\dot{x}) + \\beta_B^2(y - ax^2)$$",
              "$$2a\\dot{x}^2 - 2\\alpha_B(\\dot{y} - 2ax\\dot{x}) - \\beta_B^2(y - ax^2)$$",
              "$$-2a\\dot{x}^2 - 2\\alpha_B(\\dot{y} - 2ax\\dot{x}) - \\beta_B^2(y - ax^2)$$",
              "$$2a\\dot{x}^2 - 2\\alpha_B\\dot{y} - \\beta_B^2 y$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: Putting $+2\\alpha_B\\dot{g} + \\beta_B^2 g$ on the RHS corresponds to $\\ddot{g} - 2\\alpha_B\\dot{g} - \\beta_B^2 g = 0$, which has unstable positive feedback!",
              "Correct! Moving $+2\\alpha_B\\dot{g} + \\beta_B^2 g$ to the RHS gives $-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\alpha_B\\dot{g} - \\beta_B^2 g = 2a\\dot{x}^2 - 2\\alpha_B(\\dot{y} - 2ax\\dot{x}) - \\beta_B^2(y - ax^2)$.",
              "Trap: Don't flip the sign of $-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = +2a\\dot{x}^2$.",
              "Trap: You must use the full constraint velocity $\\dot{g} = \\dot{y} - 2ax\\dot{x}$ and position error $g = y - ax^2$."
            ]
          },
          "derivation": "Enforcing $\\ddot{g} + 2\\alpha_B\\dot{g} + \\beta_B^2 g = 0$ with $g = y - ax^2$ and $\\dot{g} = \\dot{y} - 2ax\\dot{x}$:\n$$(-2ax\\ddot{x} + \\ddot{y} - 2a\\dot{x}^2) + 2\\alpha_B(\\dot{y} - 2ax\\dot{x}) + \\beta_B^2(y - ax^2) = 0$$\nMoving all position and velocity terms to the RHS yields the stabilized bottom row:\n$$-2ax\\ddot{x} + \\ddot{y} = 2a\\dot{x}^2 - 2\\alpha_B(\\dot{y} - 2ax\\dot{x}) - \\beta_B^2(y - ax^2)$$",
          "stepNumber": 4,
          "badge": "Step 4 • Physical Analysis & Synthesis"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Example Exam Question 4 (Bead on a Parabolic Wire)",
        "items": [
          {
            "label": "(1) Constraint $g(x,y)$, Jacobian $\\mathbf{J}$, and Convective Term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$",
            "math": "$$g(x,y) = y - ax^2 = 0, \\qquad \\mathbf{J} = \\begin{bmatrix} -2ax & 1 \\end{bmatrix}, \\qquad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = -2a\\dot{x}^2$$"
          },
          {
            "label": "(2–3) $3\\times 3$ Constrained DAE & Closed-Form Multiplier $\\lambda$",
            "math": "$$\\begin{bmatrix} m & 0 & -2ax \\\\ 0 & m & 1 \\\\ -2ax & 1 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x} \\\\ \\ddot{y} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} F_x \\\\ -mg \\\\ 2a\\dot{x}^2 \\end{bmatrix}, \\qquad \\lambda = -\\frac{mg + 2axF_x + 2ma\\dot{x}^2}{1 + 4a^2x^2}$$"
          },
          {
            "label": "(4) Baumgarte-Stabilized Acceleration Constraint Row",
            "math": "$$-2ax\\ddot{x} + \\ddot{y} = 2a\\dot{x}^2 - 2\\alpha_B(\\dot{y} - 2ax\\dot{x}) - \\beta_B^2(y - ax^2)$$"
          }
        ]
      },
      "lectureRefs": [
        13,
        17,
        22
      ],
      "estimatedMinutes": 20
    },
    {
      "id": "example-5",
      "code": "Example Exam • Question 5",
      "shortTitle": "Rolling Disk on Incline (Multipliers)",
      "title": "Uniform Rigid Disk Rolling Without Slipping on an Inclined Plane via Lagrange Multipliers",
      "subtitle": "3 Maximal Coordinates q = [s, y, theta]^T & 2 Holonomic Constraints — Normal Force, Static Friction & Slip Threshold",
      "category": "Constrained Systems",
      "badgeClass": "badge-emerald",
      "difficulty": "Exam-Level (2 Constraints DAE)",
      "estimatedTime": "20 mins",
      "matchedLectures": [
        13,
        17,
        22
      ],
      "svgDiagram": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"problem-svg\">\n      <defs>\n        <marker id=\"arr-ex5-b\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#2563eb\"/>\n        </marker>\n        <marker id=\"arr-ex5-g\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#059669\"/>\n        </marker>\n      </defs>\n      <rect width=\"500\" height=\"280\" rx=\"12\" fill=\"#f8fafc\"/>\n      <!-- Base and incline -->\n      <line x1=\"40\" y1=\"240\" x2=\"450\" y2=\"240\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"60\" y1=\"65\" x2=\"440\" y2=\"240\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <path d=\"M 370 240 A 70 70 0 0 1 377 211\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <text x=\"348\" y=\"232\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\">α</text>\n      <!-- Disk on incline -->\n      <g transform=\"translate(220, 138.7) rotate(24.78)\">\n        <circle cx=\"0\" cy=\"-42\" r=\"42\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2.5\"/>\n        <line x1=\"0\" y1=\"-42\" x2=\"28\" y2=\"-68\" stroke=\"#1e40af\" stroke-width=\"2.5\"/>\n        <circle cx=\"0\" cy=\"-42\" r=\"4\" fill=\"#1e3a8a\"/>\n        <text x=\"-28\" y=\"-46\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\">m, R, I_G</text>\n        <!-- s and y axes -->\n        <line x1=\"0\" y1=\"-42\" x2=\"75\" y2=\"-42\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#arr-ex5-b)\"/>\n        <text x=\"65\" y=\"-50\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">+s</text>\n        <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-105\" stroke=\"#059669\" stroke-width=\"2\" marker-end=\"url(#arr-ex5-g)\"/>\n        <text x=\"8\" y=\"-98\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\">+y</text>\n      </g>\n      <text x=\"275\" y=\"72\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">g_1 = y - R = 0 (contact)</text>\n      <text x=\"275\" y=\"90\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">g_2 = s - R θ = 0 (no-slip)</text>\n    </svg>",
      "prompt": "A uniform circular disk of mass $m$, radius $R$, and centroidal moment of inertia $I_G = \\frac{1}{2}mR^2$ rolls without slipping down a rough ramp inclined at angle $\\alpha$ below the horizontal. Let $s$ be the center-of-mass position parallel to the ramp (downhill positive), $y$ be the center-of-mass height perpendicular to the ramp surface, and $\\theta$ be the clockwise rolling angle. Using maximal coordinates $\\mathbf{q} = [s, y, \\theta]^T$, the disk is subject to two holonomic constraints: bilateral surface contact $g_1(\\mathbf{q}) = y - R = 0$ and pure rolling without slip $g_2(\\mathbf{q}) = s - R\\theta = 0$.",
      "goalStatement": "Derive (1) the unconstrained Lagrangian $L(\\mathbf{q},\\dot{\\mathbf{q}})$, mass matrix $\\mathbf{M}$, and gravity force vector $\\mathbf{f}$ in ramp-aligned coordinates, (2) the $2\\times 3$ constraint Jacobian $\\mathbf{J}$ and $5\\times 5$ constrained DAE system for $[\\ddot{s}, \\ddot{y}, \\ddot{\\theta}, \\lambda_1, \\lambda_2]^T$, (3) the closed-form solutions for $\\ddot{s}$, $\\lambda_1$, and $\\lambda_2$, and (4) the physical interpretation of $-\\mathbf{J}^T\\boldsymbol{\\lambda}$ and the minimum static friction coefficient $\\mu_{\\min}$ required to prevent slipping.",
      "parameters": [
        {
          "symbol": "$m, R, I_G = \\frac{1}{2}mR^2$",
          "desc": "Disk mass, radius & centroidal rotational inertia"
        },
        {
          "symbol": "$\\alpha, g$",
          "desc": "Ramp inclination angle & gravitational acceleration"
        },
        {
          "symbol": "$\\mathbf{q} = [s, y, \\theta]^T$",
          "desc": "Maximal ramp-aligned coordinates (downhill translation, normal height, roll angle)"
        },
        {
          "symbol": "$\\boldsymbol{\\lambda} = [\\lambda_1, \\lambda_2]^T$",
          "desc": "Lagrange multipliers for normal contact ($g_1=0$) and no-slip rolling ($g_2=0$)"
        }
      ],
      "steps": [
        {
          "title": "Unconstrained Mass Matrix $\\mathbf{M}$ and Ramp-Frame Gravity Force Vector $\\mathbf{f}$",
          "goal": "Write the kinetic energy $T(\\dot{\\mathbf{q}})$ and gravitational potential energy $V(s,y)$ in the ramp-aligned frame, and extract $\\mathbf{M}$ and $\\mathbf{f} = -\\nabla_{\\mathbf{q}}V$.",
          "intuition": "By choosing $s$ parallel to the ramp (downhill) and $y$ perpendicular to the ramp (outward normal), gravity $\\mathbf{g}$ splits cleanly into $+g\\sin\\alpha$ along $+s$ and $-g\\cos\\alpha$ along $+y$!",
          "conceptLinks": [
            "kinetic-potential-energy",
            "manipulator-equation"
          ],
          "hint1": "Since $s$ and $y$ are orthogonal inertial coordinates, $T = \\frac{1}{2}m(\\dot{s}^2 + \\dot{y}^2) + \\frac{1}{2}I_G\\dot{\\theta}^2$ with $I_G = \\frac{1}{2}mR^2$.",
          "hint2": "Moving downhill ($+s$) decreases elevation by $s\\sin\\alpha$, while moving outward ($+y$) increases elevation by $y\\cos\\alpha$, so $V(s,y) = mg(y\\cos\\alpha - s\\sin\\alpha)$.",
          "checkpoint": {
            "question": "What are the $3\\times 3$ mass matrix $\\mathbf{M}$ and unconstrained generalized gravity vector $\\mathbf{f} = -\\frac{\\partial V}{\\partial\\mathbf{q}}^T$?",
            "options": [
              "$$\\mathbf{M} = \\begin{bmatrix} m & 0 & 0 \\\\ 0 & m & 0 \\\\ 0 & 0 & \\frac{1}{2}mR^2 \\end{bmatrix}, \\qquad \\mathbf{f} = \\begin{bmatrix} -mg\\sin\\alpha \\\\ mg\\cos\\alpha \\\\ 0 \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\begin{bmatrix} m & 0 & mR \\\\ 0 & m & 0 \\\\ mR & 0 & \\frac{1}{2}mR^2 \\end{bmatrix}, \\qquad \\mathbf{f} = \\begin{bmatrix} mg\\sin\\alpha \\\\ -mg\\cos\\alpha \\\\ 0 \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\begin{bmatrix} m & 0 & 0 \\\\ 0 & m & 0 \\\\ 0 & 0 & \\frac{1}{2}mR^2 \\end{bmatrix}, \\qquad \\mathbf{f} = \\begin{bmatrix} mg\\sin\\alpha \\\\ -mg\\cos\\alpha \\\\ 0 \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\begin{bmatrix} m & 0 & 0 \\\\ 0 & m & 0 \\\\ 0 & 0 & mR^2 \\end{bmatrix}, \\qquad \\mathbf{f} = \\begin{bmatrix} mg\\sin\\alpha \\\\ -mg\\cos\\alpha \\\\ mgR\\sin\\alpha \\end{bmatrix}$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: Since $+s$ points downhill, gravity pulls in the $+s$ direction ($+mg\\sin\\alpha$) and pushes into the ramp in the $-y$ direction ($-mg\\cos\\alpha$).",
              "Trap: There is no $mR\\,\\dot{s}\\dot{\\theta}$ cross term when $(s,y)$ tracks the center of mass $G$ directly!",
              "Correct! Because $(s,y)$ are the center-of-mass coordinates and $\\theta$ is rotation about the center of mass, $\\mathbf{M}$ is strictly diagonal and gravity exerts zero torque about the center of mass ($f_\\theta = 0$).",
              "Trap: For a uniform solid disk, $I_G = \\frac{1}{2}mR^2$, and gravity acts at the center of mass so its torque about $G$ is zero."
            ]
          },
          "derivation": "For a rigid body whose position is tracked by its center of mass $(s,y)$ and orientation $\\theta$:\n$$T = \\frac{1}{2}m\\dot{s}^2 + \\frac{1}{2}m\\dot{y}^2 + \\frac{1}{2}I_G\\dot{\\theta}^2, \\qquad V(s,y) = mg(y\\cos\\alpha - s\\sin\\alpha)$$\nThus:\n$$\\mathbf{M} = \\begin{bmatrix} m & 0 & 0 \\\\ 0 & m & 0 \\\\ 0 & 0 & I_G \\end{bmatrix} = \\begin{bmatrix} m & 0 & 0 \\\\ 0 & m & 0 \\\\ 0 & 0 & \\frac{1}{2}mR^2 \\end{bmatrix}, \\qquad \\mathbf{f} = -\\nabla_{\\mathbf{q}}V = \\begin{bmatrix} mg\\sin\\alpha \\\\ -mg\\cos\\alpha \\\\ 0 \\end{bmatrix}$$",
          "stepNumber": 1,
          "badge": "Step 1 • Kinematics & Geometry"
        },
        {
          "title": "$2\\times 3$ Constraint Jacobian $\\mathbf{J}$ and $5\\times 5$ Constrained DAE",
          "goal": "Compute the $2\\times 3$ Jacobian $\\mathbf{J} = \\frac{\\partial\\mathbf{g}}{\\partial\\mathbf{q}}$ for $\\mathbf{g}(\\mathbf{q}) = [y - R,\\; s - R\\theta]^T = \\mathbf{0}$ and verify $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$.",
          "intuition": "Because both constraints $g_1 = y - R = 0$ and $g_2 = s - R\\theta = 0$ are linear in $\\mathbf{q} = [s, y, \\theta]^T$, the Jacobian $\\mathbf{J}$ is constant and $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\mathbf{0}$!",
          "conceptLinks": [
            "holonomic-constraints",
            "constraint-jacobian",
            "lagrange-multipliers"
          ],
          "hint1": "Differentiate row 1 ($g_1 = y - R$) and row 2 ($g_2 = s - R\\theta$) with respect to $[s, y, \\theta]$.",
          "hint2": "Since $\\mathbf{J}$ is constant, $\\dot{\\mathbf{J}} = \\mathbf{0}_{2\\times 3}$ and $-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\mathbf{0}_{2\\times 1}$.",
          "checkpoint": {
            "question": "What are the $2\\times 3$ constraint Jacobian $\\mathbf{J}$ and the generalized constraint force vector $\\mathbf{F}_c = -\\mathbf{J}^T\\boldsymbol{\\lambda}$?",
            "options": [
              "$$\\mathbf{J} = \\begin{bmatrix} 1 & 0 & -R \\\\ 0 & 1 & 0 \\end{bmatrix}, \\qquad -\\mathbf{J}^T\\boldsymbol{\\lambda} = \\begin{bmatrix} -\\lambda_1 \\\\ -\\lambda_2 \\\\ R\\lambda_1 \\end{bmatrix}$$",
              "$$\\mathbf{J} = \\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & -R \\end{bmatrix}, \\qquad -\\mathbf{J}^T\\boldsymbol{\\lambda} = \\begin{bmatrix} -\\lambda_2 \\\\ -\\lambda_1 \\\\ R\\lambda_2 \\end{bmatrix}$$",
              "$$\\mathbf{J} = \\begin{bmatrix} 0 & 1 & -R \\\\ 1 & 0 & R \\end{bmatrix}, \\qquad -\\mathbf{J}^T\\boldsymbol{\\lambda} = \\begin{bmatrix} -\\lambda_2 \\\\ -\\lambda_1 \\\\ R(\\lambda_1 - \\lambda_2) \\end{bmatrix}$$",
              "$$\\mathbf{J} = \\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & R \\end{bmatrix}, \\qquad -\\mathbf{J}^T\\boldsymbol{\\lambda} = \\begin{bmatrix} -\\lambda_2 \\\\ -\\lambda_1 \\\\ -R\\lambda_2 \\end{bmatrix}$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: Keep the rows in order: row 1 is $\\nabla g_1 = [0, 1, 0]$ (normal contact) and row 2 is $\\nabla g_2 = [1, 0, -R]$ (rolling without slip).",
              "Correct! Look at $-\\mathbf{J}^T\\boldsymbol{\\lambda} = [-\\lambda_2, -\\lambda_1, +R\\lambda_2]^T$: $-\\lambda_1$ is the outward normal force $N$, while $\\lambda_2$ simultaneously applies uphill static friction $-\\lambda_2$ along $s$ AND forward rolling torque $+R\\lambda_2$ about $\\theta$!",
              "Trap: $g_1 = y - R$ does not depend on $\\theta$, and $g_2 = s - R\\theta$ has $-R$ in the $\\theta$ column.",
              "Trap: Since $g_2 = s - R\\theta = 0$, $\\frac{\\partial g_2}{\\partial\\theta} = -R$."
            ]
          },
          "derivation": "Differentiating $\\mathbf{g}(s,y,\\theta) = \\begin{bmatrix} y - R \\\\ s - R\\theta \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$ with respect to $\\mathbf{q} = [s, y, \\theta]^T$:\n$$\\mathbf{J} = \\frac{\\partial\\mathbf{g}}{\\partial\\mathbf{q}} = \\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & -R \\end{bmatrix}, \\qquad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$$\nThe generalized constraint force vector is:\n$$\\mathbf{F}_c = -\\mathbf{J}^T\\boldsymbol{\\lambda} = -\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\\\ 0 & -R \\end{bmatrix} \\begin{bmatrix} \\lambda_1 \\\\ \\lambda_2 \\end{bmatrix} = \\begin{bmatrix} -\\lambda_2 \\\\ -\\lambda_1 \\\\ R\\lambda_2 \\end{bmatrix}$$",
          "stepNumber": 2,
          "badge": "Step 2 • Matrices & Constraints"
        },
        {
          "title": "Solving the Constrained DAE for $\\ddot{s}$, $\\lambda_1$, and $\\lambda_2$",
          "goal": "Solve $\\mathbf{M}\\ddot{\\mathbf{q}} + \\mathbf{J}^T\\boldsymbol{\\lambda} = \\mathbf{f}$ together with $\\mathbf{J}\\ddot{\\mathbf{q}} = \\mathbf{0}$ for the downhill acceleration $\\ddot{s}$ and the two multipliers $\\lambda_1, \\lambda_2$.",
          "intuition": "Because a solid disk has $I_G = \\frac{1}{2}mR^2$, rotational inertia adds an effective mass of $I_G/R^2 = \\frac{1}{2}m$ to the translational mass $m$, giving $m_{\\text{eff}} = \\frac{3}{2}m$ and $\\ddot{s} = \\frac{2}{3}g\\sin\\alpha$!",
          "conceptLinks": [
            "lagrange-multipliers"
          ],
          "hint1": "From $m\\ddot{y} + \\lambda_1 = -mg\\cos\\alpha$ and $\\ddot{y} = 0$, you immediately get $\\lambda_1 = -mg\\cos\\alpha$.",
          "hint2": "From $m\\ddot{s} + \\lambda_2 = mg\\sin\\alpha$, $I_G\\ddot{\\theta} - R\\lambda_2 = 0$, and $\\ddot{s} = R\\ddot{\\theta}$, substitute $\\lambda_2 = \\frac{I_G}{R^2}\\ddot{s} = \\frac{1}{2}m\\ddot{s}$ into the $s$-equation!",
          "checkpoint": {
            "question": "Wait — watch the signs! From $I_G\\ddot{\\theta} - R\\lambda_2 = 0$ and $m\\ddot{s} + \\lambda_2 = mg\\sin\\alpha$ with $I_G = \\frac{1}{2}mR^2$ and $\\ddot{s} = R\\ddot{\\theta}$, what are $\\ddot{s}$, $\\lambda_1$, and $\\lambda_2$?",
            "options": [
              "$$\\ddot{s} = g\\sin\\alpha, \\qquad \\lambda_1 = -mg\\cos\\alpha, \\qquad \\lambda_2 = 0$$",
              "$$\\ddot{s} = \\frac{1}{2}g\\sin\\alpha, \\qquad \\lambda_1 = -mg\\cos\\alpha, \\qquad \\lambda_2 = \\frac{1}{2}mg\\sin\\alpha$$",
              "$$\\ddot{s} = \\frac{2}{3}g\\sin\\alpha, \\qquad \\lambda_1 = mg\\cos\\alpha, \\qquad \\lambda_2 = -\\frac{1}{3}mg\\sin\\alpha$$",
              "$$\\ddot{s} = \\frac{2}{3}g\\sin\\alpha, \\qquad \\lambda_1 = -mg\\cos\\alpha, \\qquad \\lambda_2 = \\frac{1}{3}mg\\sin\\alpha$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: Zero friction ($lambda_2=0$) corresponds to a frictionless sliding block, which would violate $s - R\\theta = 0$ because $\\ddot{\\theta}=0 \\ne \\ddot{s}/R$.",
              "Trap: $\\ddot{s} = \\frac{1}{2}g\\sin\\alpha$ is for a thin hoop ($I_G = mR^2$); for a uniform solid disk $I_G = \\frac{1}{2}mR^2$, giving $\\ddot{s} = \\frac{2}{3}g\\sin\\alpha$.",
              "Trap: Check the signs of $\\lambda_1$ and $\\lambda_2$ in $\\mathbf{M}\\ddot{\\mathbf{q}} + \\mathbf{J}^T\\boldsymbol{\\lambda} = \\mathbf{f}$!",
              "Correct! Since $I_G\\ddot{\\theta} = R\\lambda_2$ and $\\ddot{\\theta} = \\ddot{s}/R$, we have $\\lambda_2 = \\frac{I_G}{R^2}\\ddot{s} = \\frac{1}{2}m\\ddot{s}$. Substituting into $m\\ddot{s} + \\frac{1}{2}m\\ddot{s} = mg\\sin\\alpha$ gives $\\ddot{s} = \\frac{2}{3}g\\sin\\alpha$ and $\\lambda_2 = \\frac{1}{3}mg\\sin\\alpha$, while $\\lambda_1 = -mg\\cos\\alpha$."
            ]
          },
          "derivation": "Writing out the 5 scalar equations of $\\mathbf{M}\\ddot{\\mathbf{q}} + \\mathbf{J}^T\\boldsymbol{\\lambda} = \\mathbf{f}$ and $\\mathbf{J}\\ddot{\\mathbf{q}} = \\mathbf{0}$:\n1. $m\\ddot{s} + \\lambda_2 = mg\\sin\\alpha$\n2. $m\\ddot{y} + \\lambda_1 = -mg\\cos\\alpha$\n3. $I_G\\ddot{\\theta} - R\\lambda_2 = 0$\n4. $\\ddot{y} = 0 \\implies \\lambda_1 = -mg\\cos\\alpha$\n5. $\\ddot{s} - R\\ddot{\\theta} = 0 \\implies \\ddot{\\theta} = \\ddot{s}/R$\nSubstituting $\\ddot{\\theta} = \\ddot{s}/R$ and $I_G = \\frac{1}{2}mR^2$ into (3) gives $\\lambda_2 = \\frac{I_G}{R^2}\\ddot{s} = \\frac{1}{2}m\\ddot{s}$. Substituting into (1):\n$$\\frac{3}{2}m\\ddot{s} = mg\\sin\\alpha \\implies \\ddot{s} = \\frac{2}{3}g\\sin\\alpha, \\qquad \\lambda_2 = \\frac{1}{3}mg\\sin\\alpha$$",
          "stepNumber": 3,
          "badge": "Step 3 • Equations & Solution"
        },
        {
          "title": "Coulomb Friction Cone & Minimum Static Friction Coefficient $\\mu_{\\min}$",
          "goal": "Use the normal reaction force $N = |F_{c,y}| = |\\lambda_1|$ and tangential static friction force $|F_{c,s}| = |\\lambda_2|$ to determine the minimum coefficient of static friction $\\mu_{\\min}$ required to sustain pure rolling without slipping.",
          "intuition": "Lagrange multipliers automatically reveal when a bilateral assumption breaks down! Pure rolling $g_2 = s - R\\theta = 0$ holds if and only if the required tangential constraint force $|\\lambda_2| = \\frac{1}{3}mg\\sin\\alpha$ stays inside the Coulomb friction cone $|\\lambda_2| \\le \\mu_s |\\lambda_1|$.",
          "conceptLinks": [
            "lagrange-multipliers",
            "impact-maps"
          ],
          "hint1": "From $-\\mathbf{J}^T\\boldsymbol{\\lambda} = [-\\lambda_2, -\\lambda_1, R\\lambda_2]^T$, the normal force is $N = -\\lambda_1 = mg\\cos\\alpha$ and the uphill static friction force is $F_f = \\lambda_2 = \\frac{1}{3}mg\\sin\\alpha$.",
          "hint2": "Enforce the Coulomb no-slip inequality $F_f \\le \\mu_s N$ and solve for $\\mu_s$.",
          "checkpoint": {
            "question": "What is the minimum coefficient of static friction $\\mu_{\\min}$ required for the solid disk to roll without slipping on incline angle $\\alpha$?",
            "options": [
              "$$\\mu_{\\min} = \\frac{1}{3}\\tan\\alpha$$",
              "$$\\mu_{\\min} = \\frac{1}{2}\\tan\\alpha$$",
              "$$\\mu_{\\min} = \\frac{2}{3}\\tan\\alpha$$",
              "$$\\mu_{\\min} = \\tan\\alpha$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! Enforcing $|\\lambda_2| \\le \\mu_s |\\lambda_1|$ gives $\\frac{1}{3}mg\\sin\\alpha \\le \\mu_s mg\\cos\\alpha \\implies \\mu_s \\ge \\frac{1}{3}\\tan\\alpha$.",
              "Trap: $\\frac{1}{2}\\tan\\alpha$ is for a thin hollow hoop ($I_G = mR^2$).",
              "Trap: $\\frac{2}{3}mg\\sin\\alpha$ is the net force $m\\ddot{s}$ accelerating the disk downhill, whereas the friction force is $mg\\sin\\alpha - m\\ddot{s} = \\frac{1}{3}mg\\sin\\alpha$.",
              "Trap: $\\mu_{\\min} = \\tan\\alpha$ is the condition for a block to remain completely stationary on the ramp; a rolling disk only needs one-third of that friction!"
            ]
          },
          "derivation": "From the generalized constraint force $\\mathbf{F}_c = -\\mathbf{J}^T\\boldsymbol{\\lambda} = [-\\lambda_2, -\\lambda_1, R\\lambda_2]^T$:\n- Normal force from ramp: $N = -\\lambda_1 = mg\\cos\\alpha > 0$\n- Uphill static friction force: $F_f = \\lambda_2 = \\frac{1}{3}mg\\sin\\alpha$\nPure rolling without slip requires $F_f \\le \\mu_s N$:\n$$\\frac{1}{3}mg\\sin\\alpha \\le \\mu_s mg\\cos\\alpha \\implies \\mu_{\\min} = \\frac{1}{3}\\tan\\alpha$$",
          "stepNumber": 4,
          "badge": "Step 4 • Physical Analysis & Synthesis"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Example Exam Question 5 (Rolling Disk on Incline via Multipliers)",
        "items": [
          {
            "label": "(1–2) Mass Matrix $\\mathbf{M}$, Gravity Vector $\\mathbf{f}$, and $2\\times 3$ Constraint Jacobian $\\mathbf{J}$",
            "math": "$$\\mathbf{M} = \\text{diag}\\left(m, m, \\frac{1}{2}mR^2\\right), \\qquad \\mathbf{f} = \\begin{bmatrix} mg\\sin\\alpha \\\\ -mg\\cos\\alpha \\\\ 0 \\end{bmatrix}, \\qquad \\mathbf{J} = \\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & -R \\end{bmatrix}$$"
          },
          {
            "label": "(3) Closed-Form Acceleration $\\ddot{s}$ & Multipliers $\\lambda_1, \\lambda_2$",
            "math": "$$\\ddot{s} = \\frac{2}{3}g\\sin\\alpha, \\qquad \\ddot{\\theta} = \\frac{2g\\sin\\alpha}{3R}, \\qquad \\lambda_1 = -mg\\cos\\alpha, \\qquad \\lambda_2 = \\frac{1}{3}mg\\sin\\alpha$$"
          },
          {
            "label": "(4) Generalized Constraint Force $-\\mathbf{J}^T\\boldsymbol{\\lambda}$ & Minimum Friction $\\mu_{\\min}$",
            "math": "$$-\\mathbf{J}^T\\boldsymbol{\\lambda} = \\begin{bmatrix} -\\frac{1}{3}mg\\sin\\alpha \\\\ mg\\cos\\alpha \\\\ \\frac{1}{3}mgR\\sin\\alpha \\end{bmatrix}, \\qquad |\\lambda_2| \\le \\mu_s|\\lambda_1| \\implies \\mu_{\\min} = \\frac{1}{3}\\tan\\alpha$$"
          }
        ]
      },
      "lectureRefs": [
        13,
        17,
        22
      ],
      "estimatedMinutes": 20
    },
    {
      "id": "example-6",
      "code": "Example Exam • Question 6",
      "shortTitle": "Differential Step-Pulley Hoist",
      "title": "Differential Step-Pulley Hoist (Radii r_1, r_2) with Two Suspended Masses via Multipliers",
      "subtitle": "3 Maximal Coordinates q = [y_1, y_2, theta_p]^T & 2 Inextensible Cable Constraints — Tensions & Equivalent Inertia",
      "category": "Constrained Systems",
      "badgeClass": "badge-emerald",
      "difficulty": "Exam-Level (Pulley DAE)",
      "estimatedTime": "18 mins",
      "matchedLectures": [
        13,
        17,
        22
      ],
      "svgDiagram": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"problem-svg\">\n      <rect width=\"500\" height=\"280\" rx=\"12\" fill=\"#f8fafc\"/>\n      <!-- Concentric step pulley -->\n      <circle cx=\"250\" cy=\"95\" r=\"65\" fill=\"#e0e7ff\" stroke=\"#3730a3\" stroke-width=\"2.5\"/>\n      <circle cx=\"250\" cy=\"95\" r=\"38\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2.5\"/>\n      <circle cx=\"250\" cy=\"95\" r=\"6\" fill=\"#1e293b\"/>\n      <!-- Radii labels -->\n      <line x1=\"250\" y1=\"95\" x2=\"212\" y2=\"95\" stroke=\"#1e40af\" stroke-width=\"2\"/>\n      <text x=\"222\" y=\"88\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\">r_1</text>\n      <line x1=\"250\" y1=\"95\" x2=\"315\" y2=\"95\" stroke=\"#3730a3\" stroke-width=\"2\"/>\n      <text x=\"275\" y=\"88\" font-size=\"11\" font-weight=\"700\" fill=\"#312e81\">r_2</text>\n      <text x=\"215\" y=\"22\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">Step-Pulley I_p, θ_p (CCW +)</text>\n      <!-- Left cable from inner drum r_1 -->\n      <line x1=\"212\" y1=\"95\" x2=\"212\" y2=\"210\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n      <rect x=\"190\" y=\"210\" width=\"44\" height=\"36\" rx=\"5\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2.5\"/>\n      <text x=\"202\" y=\"232\" font-size=\"12\" font-weight=\"700\" fill=\"#78350f\">m_1</text>\n      <text x=\"125\" y=\"175\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\">y_1 (upward +)</text>\n      <!-- Right cable from outer drum r_2 -->\n      <line x1=\"315\" y1=\"95\" x2=\"315\" y2=\"195\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n      <rect x=\"293\" y=\"195\" width=\"44\" height=\"36\" rx=\"5\" fill=\"#a7f3d0\" stroke=\"#047857\" stroke-width=\"2.5\"/>\n      <text x=\"305\" y=\"217\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\">m_2</text>\n      <text x=\"330\" y=\"160\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\">y_2 (upward +)</text>\n    </svg>",
      "prompt": "A rigid compound step-pulley of total rotational inertia $I_p$ rotates by counter-clockwise angle $\\theta_p(t)$ about a fixed horizontal axle and is driven by an external motor torque $\\tau_p(t)$. Mass $m_1$ hangs from a light inextensible cable wrapped around the **left side of the inner drum** of radius $r_1$, while mass $m_2$ hangs from a second inextensible cable wrapped around the **right side of the outer drum** of radius $r_2$. Measuring vertical positions $y_1, y_2$ upward from the axle, a counter-clockwise rotation $\\theta_p > 0$ lowers $m_1$ and raises $m_2$, giving two bilateral holonomic constraints in maximal coordinates $\\mathbf{q} = [y_1, y_2, \\theta_p]^T$:\n$$g_1(\\mathbf{q}) = y_1 + r_1\\theta_p - c_1 = 0, \\qquad g_2(\\mathbf{q}) = y_2 - r_2\\theta_p - c_2 = 0$$",
      "goalStatement": "Derive (1) the unconstrained mass matrix $\\mathbf{M}$, force vector $\\mathbf{f}$, and $2\\times 3$ constraint Jacobian $\\mathbf{J}$, (2) the $5\\times 5$ constrained DAE block matrix for $[\\ddot{y}_1, \\ddot{y}_2, \\ddot{\\theta}_p, \\lambda_1, \\lambda_2]^T$, (3) the closed-form angular acceleration $\\ddot{\\theta}_p$, and (4) the individual cable tensions $T_1 = -\\lambda_1$ and $T_2 = -\\lambda_2$.",
      "parameters": [
        {
          "symbol": "$m_1, m_2, I_p$",
          "desc": "Two suspended masses & compound step-pulley rotational inertia"
        },
        {
          "symbol": "$r_1, r_2$",
          "desc": "Inner drum radius (left cable) & outer drum radius (right cable)"
        },
        {
          "symbol": "$\\mathbf{q} = [y_1, y_2, \\theta_p]^T$",
          "desc": "Maximal coordinates (upward elevations $y_1, y_2$ & CCW pulley angle $\\theta_p$)"
        },
        {
          "symbol": "$\\tau_p(t), \\lambda_1, \\lambda_2$",
          "desc": "Motor torque on pulley & Lagrange multipliers for cables 1 and 2"
        }
      ],
      "steps": [
        {
          "title": "Unconstrained Matrices $(\\mathbf{M}, \\mathbf{f})$ and $2\\times 3$ Constraint Jacobian $\\mathbf{J}$",
          "goal": "Write the unconstrained mass matrix $\\mathbf{M}$, generalized force vector $\\mathbf{f}$ (gravity + motor torque), and compute $\\mathbf{J} = \\frac{\\partial\\mathbf{g}}{\\partial\\mathbf{q}}$.",
          "intuition": "Because $y_1$ and $y_2$ are measured upward, gravity pulls both masses downward ($-m_1g$ and $-m_2g$). Meanwhile, $\\theta_p > 0$ (CCW) lowers the left cable ($y_1 = c_1 - r_1\\theta_p \\implies y_1 + r_1\\theta_p - c_1 = 0$) and raises the right cable ($y_2 = c_2 + r_2\\theta_p \\implies y_2 - r_2\\theta_p - c_2 = 0$).",
          "conceptLinks": [
            "holonomic-constraints",
            "constraint-jacobian"
          ],
          "hint1": "From $T = \\frac{1}{2}m_1\\dot{y}_1^2 + \\frac{1}{2}m_2\\dot{y}_2^2 + \\frac{1}{2}I_p\\dot{\\theta}_p^2$ and $V = m_1gy_1 + m_2gy_2$, read off $\\mathbf{M}$ and $\\mathbf{f} = -\\nabla V + \\mathbf{Q}$.",
          "hint2": "Differentiate $g_1 = y_1 + r_1\\theta_p - c_1$ and $g_2 = y_2 - r_2\\theta_p - c_2$ with respect to $[y_1, y_2, \\theta_p]$.",
          "checkpoint": {
            "question": "What are $\\mathbf{M}$, $\\mathbf{f}$, and the $2\\times 3$ constraint Jacobian $\\mathbf{J}$?",
            "options": [
              "$$\\mathbf{M} = \\text{diag}(m_1, m_2, I_p), \\quad \\mathbf{f} = \\begin{bmatrix} m_1g \\\\ m_2g \\\\ \\tau_p \\end{bmatrix}, \\quad \\mathbf{J} = \\begin{bmatrix} 1 & 0 & -r_1 \\\\ 0 & 1 & r_2 \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\text{diag}(m_1, m_2, I_p), \\quad \\mathbf{f} = \\begin{bmatrix} -m_1g \\\\ -m_2g \\\\ \\tau_p \\end{bmatrix}, \\quad \\mathbf{J} = \\begin{bmatrix} 1 & 0 & r_1 \\\\ 0 & 1 & -r_2 \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\text{diag}(m_1, m_2, I_p), \\quad \\mathbf{f} = \\begin{bmatrix} -m_1g \\\\ -m_2g \\\\ \\tau_p \\end{bmatrix}, \\quad \\mathbf{J} = \\begin{bmatrix} 1 & 0 & r_1 \\\\ 0 & 1 & r_2 \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\text{diag}(m_1, m_2, I_p), \\quad \\mathbf{f} = \\begin{bmatrix} -m_1g \\\\ -m_2g \\\\ 0 \\end{bmatrix}, \\quad \\mathbf{J} = \\begin{bmatrix} r_1 & 0 & 1 \\\\ 0 & -r_2 & 1 \\end{bmatrix}$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: Since $+y_i$ points upward, gravity acts in the $-y_i$ direction ($-m_ig$), and $\\frac{\\partial g_1}{\\partial\\theta_p} = +r_1$, $\\frac{\\partial g_2}{\\partial\\theta_p} = -r_2$.",
              "Correct! $\\mathbf{J} = \\begin{bmatrix} 1 & 0 & r_1 \\\\ 0 & 1 & -r_2 \\end{bmatrix}$ is constant, so $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\mathbf{0}$.",
              "Trap: Cable 2 wraps on the opposite (right) side of the pulley, so $\\frac{\\partial g_2}{\\partial\\theta_p} = -r_2$ has the opposite sign from $+r_1$.",
              "Trap: Don't forget the external motor torque $\\tau_p$ in $f_3$, and check the partial derivatives of $g_1, g_2$ with respect to $y_1, y_2, \\theta_p$."
            ]
          },
          "derivation": "From $T = \\frac{1}{2}m_1\\dot{y}_1^2 + \\frac{1}{2}m_2\\dot{y}_2^2 + \\frac{1}{2}I_p\\dot{\\theta}_p^2$, $V = m_1gy_1 + m_2gy_2$, and $\\delta W_{nc} = \\tau_p\\,\\delta\\theta_p$:\n$$\\mathbf{M} = \\begin{bmatrix} m_1 & 0 & 0 \\\\ 0 & m_2 & 0 \\\\ 0 & 0 & I_p \\end{bmatrix}, \\qquad \\mathbf{f} = \\begin{bmatrix} -m_1g \\\\ -m_2g \\\\ \\tau_p(t) \\end{bmatrix}, \\qquad \\mathbf{J} = \\frac{\\partial\\mathbf{g}}{\\partial\\mathbf{q}} = \\begin{bmatrix} 1 & 0 & r_1 \\\\ 0 & 1 & -r_2 \\end{bmatrix}$$",
          "stepNumber": 1,
          "badge": "Step 1 • Kinematics & Geometry"
        },
        {
          "title": "$5\\times 5$ Constrained DAE System and Generalized Constraint Forces",
          "goal": "Write the $5\\times 5$ constrained DAE $\\begin{bmatrix} \\mathbf{M} & \\mathbf{J}^T \\\\ \\mathbf{J} & \\mathbf{0} \\end{bmatrix} \\begin{bmatrix} \\ddot{\\mathbf{q}} \\\\ \\boldsymbol{\\lambda} \\end{bmatrix} = \\begin{bmatrix} \\mathbf{f} \\\\ \\mathbf{0} \\end{bmatrix}$ and interpret $-\\mathbf{J}^T\\boldsymbol{\\lambda}$.",
          "intuition": "Look at $-\\mathbf{J}^T\\boldsymbol{\\lambda} = [-\\lambda_1,\\; -\\lambda_2,\\; -r_1\\lambda_1 + r_2\\lambda_2]^T$: upward cable tension on mass $i$ is $T_i = -\\lambda_i$, and those exact same tensions exert net CCW torque $r_1 T_1 - r_2 T_2 = -r_1\\lambda_1 + r_2\\lambda_2$ on the step-pulley!",
          "conceptLinks": [
            "lagrange-multipliers"
          ],
          "hint1": "Write out the three dynamical rows $\\mathbf{M}\\ddot{\\mathbf{q}} + \\mathbf{J}^T\\boldsymbol{\\lambda} = \\mathbf{f}$ explicitly.",
          "hint2": "The third row is $I_p\\ddot{\\theta}_p + r_1\\lambda_1 - r_2\\lambda_2 = \\tau_p$, and the two constraint rows are $\\ddot{y}_1 + r_1\\ddot{\\theta}_p = 0$ and $\\ddot{y}_2 - r_2\\ddot{\\theta}_p = 0$.",
          "checkpoint": {
            "question": "Which set of 3 dynamical equations comes from $\\mathbf{M}\\ddot{\\mathbf{q}} + \\mathbf{J}^T\\boldsymbol{\\lambda} = \\mathbf{f}$?",
            "options": [
              "$$m_1\\ddot{y}_1 + \\lambda_1 = -m_1g, \\qquad m_2\\ddot{y}_2 + \\lambda_2 = -m_2g, \\qquad I_p\\ddot{\\theta}_p + r_1\\lambda_1 + r_2\\lambda_2 = \\tau_p$$",
              "$$m_1\\ddot{y}_1 - \\lambda_1 = -m_1g, \\qquad m_2\\ddot{y}_2 - \\lambda_2 = -m_2g, \\qquad I_p\\ddot{\\theta}_p - r_1\\lambda_1 + r_2\\lambda_2 = \\tau_p$$",
              "$$m_1\\ddot{y}_1 + r_1\\lambda_1 = -m_1g, \\qquad m_2\\ddot{y}_2 - r_2\\lambda_2 = -m_2g, \\qquad I_p\\ddot{\\theta}_p + \\lambda_1 + \\lambda_2 = \\tau_p$$",
              "$$m_1\\ddot{y}_1 + \\lambda_1 = -m_1g, \\qquad m_2\\ddot{y}_2 + \\lambda_2 = -m_2g, \\qquad I_p\\ddot{\\theta}_p + r_1\\lambda_1 - r_2\\lambda_2 = \\tau_p$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: Check the $(3,2)$ entry of $\\mathbf{J}^T$: since $J_{23} = -r_2$, the third row has $-r_2\\lambda_2$, not $+r_2\\lambda_2$.",
              "Trap: The standard convention we use throughout the course is $\\mathbf{M}\\ddot{\\mathbf{q}} + \\mathbf{J}^T\\boldsymbol{\\lambda} = \\mathbf{f}$ (so upward cable tension is $T_i = -\\lambda_i$).",
              "Trap: The radii $r_1, -r_2$ multiply $\\lambda_1, \\lambda_2$ in the rotational $\\theta_p$-equation (as moment arms), not in the translational $y_1, y_2$ equations.",
              "Correct! Because $\\mathbf{J}^T = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\\\ r_1 & -r_2 \\end{bmatrix}$, the pulley torque equation has $+r_1\\lambda_1 - r_2\\lambda_2$ on the left-hand side."
            ]
          },
          "derivation": "Assembling $\\begin{bmatrix} \\mathbf{M} & \\mathbf{J}^T \\\\ \\mathbf{J} & \\mathbf{0} \\end{bmatrix} \\begin{bmatrix} \\ddot{\\mathbf{q}} \\\\ \\boldsymbol{\\lambda} \\end{bmatrix} = \\begin{bmatrix} \\mathbf{f} \\\\ \\mathbf{0} \\end{bmatrix}$ yields:\n$$\\begin{bmatrix} m_1 & 0 & 0 & 1 & 0 \\\\ 0 & m_2 & 0 & 0 & 1 \\\\ 0 & 0 & I_p & r_1 & -r_2 \\\\ 1 & 0 & r_1 & 0 & 0 \\\\ 0 & 1 & -r_2 & 0 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{y}_1 \\\\ \\ddot{y}_2 \\\\ \\ddot{\\theta}_p \\\\ \\lambda_1 \\\\ \\lambda_2 \\end{bmatrix} = \\begin{bmatrix} -m_1g \\\\ -m_2g \\\\ \\tau_p(t) \\\\ 0 \\\\ 0 \\end{bmatrix}$$",
          "stepNumber": 2,
          "badge": "Step 2 • Matrices & Constraints"
        },
        {
          "title": "Closed-Form Pulley Angular Acceleration $\\ddot{\\theta}_p$",
          "goal": "Eliminate $\\ddot{y}_1, \\ddot{y}_2, \\lambda_1, \\lambda_2$ to find the closed-form angular acceleration $\\ddot{\\theta}_p$ and effective rotational inertia $I_{\\text{eff}}$.",
          "intuition": "Each hanging mass $m_i$ wrapped at radius $r_i$ contributes $m_i r_i^2$ to the pulley's effective rotational inertia $I_{\\text{eff}} = I_p + m_1 r_1^2 + m_2 r_2^2$, while gravity creates a net differential torque $(m_1 r_1 - m_2 r_2)g$!",
          "conceptLinks": [
            "lagrange-multipliers"
          ],
          "hint1": "From the constraint rows, $\\ddot{y}_1 = -r_1\\ddot{\\theta}_p$ and $\\ddot{y}_2 = +r_2\\ddot{\\theta}_p$. Substitute these into the first two rows to express $\\lambda_1$ and $\\lambda_2$ in terms of $\\ddot{\\theta}_p$.",
          "hint2": "Specifically, $\\lambda_1 = -m_1g + m_1r_1\\ddot{\\theta}_p$ and $\\lambda_2 = -m_2g - m_2r_2\\ddot{\\theta}_p$. Substitute both into $I_p\\ddot{\\theta}_p + r_1\\lambda_1 - r_2\\lambda_2 = \\tau_p$.",
          "checkpoint": {
            "question": "What is the closed-form angular acceleration $\\ddot{\\theta}_p$ of the differential step-pulley?",
            "options": [
              "$$\\ddot{\\theta}_p = \\frac{\\tau_p + (m_1 r_1 - m_2 r_2)g}{I_p + m_1 r_1^2 + m_2 r_2^2}$$",
              "$$\\ddot{\\theta}_p = \\frac{\\tau_p - (m_1 r_1 - m_2 r_2)g}{I_p + m_1 r_1^2 + m_2 r_2^2}$$",
              "$$\\ddot{\\theta}_p = \\frac{\\tau_p + (m_1 r_1 + m_2 r_2)g}{I_p + (m_1 + m_2)(r_1^2 + r_2^2)}$$",
              "$$\\ddot{\\theta}_p = \\frac{\\tau_p + (m_1 r_1 - m_2 r_2)g}{I_p}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! Weight $m_1g$ on the left drum pulls CCW ($+m_1gr_1$), weight $m_2g$ on the right drum pulls CW ($-m_2gr_2$), and the total effective rotational inertia is $I_{\\text{eff}} = I_p + m_1r_1^2 + m_2r_2^2$.",
              "Trap: Since $m_1$ hangs on the left of the axle, its downward weight creates a positive (counter-clockwise) torque $+m_1gr_1$.",
              "Trap: Mass $m_1$ only moves with radius $r_1$ ($m_1r_1^2$) and mass $m_2$ only moves with radius $r_2$ ($m_2r_2^2$).",
              "Trap: You forgot the reflected translational inertia $m_1r_1^2 + m_2r_2^2$ of the two hanging masses!"
            ]
          },
          "derivation": "From rows 4 and 5: $\\ddot{y}_1 = -r_1\\ddot{\\theta}_p$ and $\\ddot{y}_2 = r_2\\ddot{\\theta}_p$. Substituting into rows 1 and 2 gives:\n$$\\lambda_1 = -m_1g - m_1\\ddot{y}_1 = -m_1g + m_1r_1\\ddot{\\theta}_p, \\qquad \\lambda_2 = -m_2g - m_2\\ddot{y}_2 = -m_2g - m_2r_2\\ddot{\\theta}_p$$\nSubstituting $\\lambda_1, \\lambda_2$ into row 3 ($I_p\\ddot{\\theta}_p + r_1\\lambda_1 - r_2\\lambda_2 = \\tau_p$):\n$$(I_p + m_1r_1^2 + m_2r_2^2)\\ddot{\\theta}_p - m_1gr_1 + m_2gr_2 = \\tau_p \\implies \\ddot{\\theta}_p = \\frac{\\tau_p + (m_1r_1 - m_2r_2)g}{I_p + m_1r_1^2 + m_2r_2^2}$$",
          "stepNumber": 3,
          "badge": "Step 3 • Equations & Solution"
        },
        {
          "title": "Explicit Cable Tensions $T_1 = -\\lambda_1$ and $T_2 = -\\lambda_2$",
          "goal": "Write the upward cable tensions $T_1 = -\\lambda_1$ and $T_2 = -\\lambda_2$ in terms of $\\ddot{\\theta}_p$ and identify the condition under which a cable goes slack.",
          "intuition": "Since a flexible cable can only pull upward ($T_i \\ge 0$), the bilateral constraint model remains physically valid only while $T_1 = m_1(g - r_1\\ddot{\\theta}_p) \\ge 0$ and $T_2 = m_2(g + r_2\\ddot{\\theta}_p) \\ge 0$!",
          "conceptLinks": [
            "lagrange-multipliers",
            "holonomic-constraints"
          ],
          "hint1": "From $-\\mathbf{J}^T\\boldsymbol{\\lambda} = [-\\lambda_1, -\\lambda_2, -r_1\\lambda_1 + r_2\\lambda_2]^T$, the upward force on $m_1$ is $T_1 = -\\lambda_1$ and on $m_2$ is $T_2 = -\\lambda_2$.",
          "hint2": "Use $\\lambda_1 = -m_1(g - r_1\\ddot{\\theta}_p)$ and $\\lambda_2 = -m_2(g + r_2\\ddot{\\theta}_p)$ from Step 3.",
          "checkpoint": {
            "question": "What are the upward cable tensions $T_1 = -\\lambda_1$ and $T_2 = -\\lambda_2$ in terms of $\\ddot{\\theta}_p$?",
            "options": [
              "$$T_1 = m_1g, \\qquad T_2 = m_2g$$",
              "$$T_1 = m_1(g + r_1\\ddot{\\theta}_p), \\qquad T_2 = m_2(g - r_2\\ddot{\\theta}_p)$$",
              "$$T_1 = m_1(g - r_1\\ddot{\\theta}_p), \\qquad T_2 = m_2(g + r_2\\ddot{\\theta}_p)$$",
              "$$T_1 = -m_1(g - r_1\\ddot{\\theta}_p), \\qquad T_2 = -m_2(g + r_2\\ddot{\\theta}_p)$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: $T_i = m_ig$ only holds in static equilibrium ($\\ddot{\\theta}_p = 0$)!",
              "Trap: When $\\ddot{\\theta}_p > 0$, mass 1 accelerates downward ($\\ddot{y}_1 = -r_1\\ddot{\\theta}_p < 0$), so its tension $T_1 = m_1(g + \\ddot{y}_1) = m_1(g - r_1\\ddot{\\theta}_p)$ is less than $m_1g$.",
              "Correct! $T_1 = m_1(g - r_1\\ddot{\\theta}_p)$ and $T_2 = m_2(g + r_2\\ddot{\\theta}_p)$, where $\\ddot{\\theta}_p = \\frac{\\tau_p + (m_1r_1 - m_2r_2)g}{I_p + m_1r_1^2 + m_2r_2^2}$.",
              "Trap: Upward tension $T_i = -\\lambda_i$ is positive when the cable is taut."
            ]
          },
          "derivation": "Using $T_i = -\\lambda_i = m_i(g + \\ddot{y}_i)$ with $\\ddot{y}_1 = -r_1\\ddot{\\theta}_p$ and $\\ddot{y}_2 = +r_2\\ddot{\\theta}_p$:\n$$T_1 = -\\lambda_1 = m_1(g - r_1\\ddot{\\theta}_p), \\qquad T_2 = -\\lambda_2 = m_2(g + r_2\\ddot{\\theta}_p)$$\nwhere $\\ddot{\\theta}_p = \\frac{\\tau_p + (m_1r_1 - m_2r_2)g}{I_p + m_1r_1^2 + m_2r_2^2}$.",
          "stepNumber": 4,
          "badge": "Step 4 • Physical Analysis & Synthesis"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Example Exam Question 6 (Differential Step-Pulley Hoist)",
        "items": [
          {
            "label": "(1–2) $5\\times 5$ Constrained DAE System",
            "math": "$$\\begin{bmatrix} m_1 & 0 & 0 & 1 & 0 \\\\ 0 & m_2 & 0 & 0 & 1 \\\\ 0 & 0 & I_p & r_1 & -r_2 \\\\ 1 & 0 & r_1 & 0 & 0 \\\\ 0 & 1 & -r_2 & 0 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{y}_1 \\\\ \\ddot{y}_2 \\\\ \\ddot{\\theta}_p \\\\ \\lambda_1 \\\\ \\lambda_2 \\end{bmatrix} = \\begin{bmatrix} -m_1g \\\\ -m_2g \\\\ \\tau_p \\\\ 0 \\\\ 0 \\end{bmatrix}$$"
          },
          {
            "label": "(3) Closed-Form Pulley Angular Acceleration $\\ddot{\\theta}_p$",
            "math": "$$\\ddot{\\theta}_p = \\frac{\\tau_p + (m_1r_1 - m_2r_2)g}{I_p + m_1r_1^2 + m_2r_2^2}, \\qquad \\ddot{y}_1 = -r_1\\ddot{\\theta}_p, \\qquad \\ddot{y}_2 = r_2\\ddot{\\theta}_p$$"
          },
          {
            "label": "(4) Cable Tensions $T_1 = -\\lambda_1$ and $T_2 = -\\lambda_2$",
            "math": "$$T_1 = -\\lambda_1 = m_1(g - r_1\\ddot{\\theta}_p), \\qquad T_2 = -\\lambda_2 = m_2(g + r_2\\ddot{\\theta}_p)$$"
          }
        ]
      },
      "lectureRefs": [
        13,
        17,
        22
      ],
      "estimatedMinutes": 18
    },
    {
      "id": "example-7",
      "code": "Example Exam • Question 7",
      "shortTitle": "Pivoted Crane Boom & Payload (DAE)",
      "title": "2D Pivoted Crane Boom with Suspended Payload in Maximal Coordinates",
      "subtitle": "q = [phi, x_p, y_p]^T — Moving Anchor Distance Constraint, 1x3 Jacobian J & Convective Centripetal Terms",
      "category": "Constrained Systems",
      "badgeClass": "badge-emerald",
      "difficulty": "Exam-Level (Nonlinear Moving Anchor)",
      "estimatedTime": "22 mins",
      "matchedLectures": [
        13,
        17,
        22
      ],
      "svgDiagram": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"problem-svg\">\n      <rect width=\"500\" height=\"280\" rx=\"12\" fill=\"#f8fafc\"/>\n      <!-- Ground & Pivot O -->\n      <line x1=\"40\" y1=\"230\" x2=\"220\" y2=\"230\" stroke=\"#475569\" stroke-width=\"4\"/>\n      <polygon points=\"90,230 110,200 130,230\" fill=\"#cbd5e1\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <circle cx=\"110\" cy=\"200\" r=\"5\" fill=\"#0f172a\"/>\n      <text x=\"72\" y=\"195\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">O (0,0)</text>\n      <!-- Horizontal reference -->\n      <line x1=\"110\" y1=\"200\" x2=\"270\" y2=\"200\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <!-- Boom of length L_b at angle phi -->\n      <line x1=\"110\" y1=\"200\" x2=\"265\" y2=\"70\" stroke=\"#1d4ed8\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n      <circle cx=\"265\" cy=\"70\" r=\"6\" fill=\"#eff6ff\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n      <text x=\"155\" y=\"122\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\">Boom L_b, I_b</text>\n      <text x=\"275\" y=\"68\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">Tip A (L_b cos φ, L_b sin φ)</text>\n      <!-- Angle phi -->\n      <path d=\"M 165 200 A 55 55 0 0 0 152 164\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n      <text x=\"172\" y=\"185\" font-size=\"12\" font-weight=\"700\" fill=\"#1d4ed8\">φ(t)</text>\n      <!-- Rigid cable of length l from Tip A to Payload P -->\n      <line x1=\"265\" y1=\"70\" x2=\"325\" y2=\"195\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n      <text x=\"303\" y=\"135\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">Cable l</text>\n      <!-- Payload mass m at (x_p, y_p) -->\n      <circle cx=\"325\" cy=\"195\" r=\"15\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2.5\"/>\n      <text x=\"319\" y=\"199\" font-size=\"12\" font-weight=\"700\" fill=\"#78350f\">m</text>\n      <text x=\"348\" y=\"200\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\">P (x_p, y_p)</text>\n    </svg>",
      "prompt": "A planar luffing crane boom of length $L_b$, mass $m_b$, center-of-mass distance $d_b$ from the fixed ground pivot $O(0,0)$, and pivot moment of inertia $I_b$ rotates at elevation angle $\\phi(t)$ above the horizontal, driven by luffing torque $\\tau_b(t)$. A point-mass payload $m$ at Cartesian coordinates $(x_p, y_p)$ hangs from the boom tip $\\mathbf{r}_A(\\phi) = [L_b\\cos\\phi,\\; L_b\\sin\\phi]^T$ via a taut, massless, inextensible cable of fixed length $\\ell$. Using maximal coordinates $\\mathbf{q} = [\\phi, x_p, y_p]^T$, enforce the scaled quadratic length constraint:\n$$g(\\phi, x_p, y_p) = \\frac{1}{2}\\left[(x_p - L_b\\cos\\phi)^2 + (y_p - L_b\\sin\\phi)^2 - \\ell^2\\right] = 0$$",
      "goalStatement": "Derive (1) the unconstrained mass matrix $\\mathbf{M}$ and force vector $\\mathbf{f}$ for $\\mathbf{q} = [\\phi, x_p, y_p]^T$, (2) the $1\\times 3$ constraint Jacobian $\\mathbf{J}(\\mathbf{q}) = \\frac{\\partial g}{\\partial\\mathbf{q}}$ in terms of the relative cable vector $\\Delta x = x_p - L_b\\cos\\phi$ and $\\Delta y = y_p - L_b\\sin\\phi$, (3) the time derivative $\\dot{\\mathbf{J}}$ and scalar convective acceleration $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$, and (4) the $4\\times 4$ constrained DAE block matrix for $[\\ddot{\\phi}, \\ddot{x}_p, \\ddot{y}_p, \\lambda]^T$.",
      "parameters": [
        {
          "symbol": "$I_b, m_b, d_b, L_b$",
          "desc": "Boom moment of inertia about $O$, mass, COM distance, and total boom length"
        },
        {
          "symbol": "$m, \\ell$",
          "desc": "Payload point mass & fixed cable length from boom tip $A$ to payload $P$"
        },
        {
          "symbol": "$\\mathbf{q} = [\\phi, x_p, y_p]^T$",
          "desc": "Maximal coordinates (boom angle $\\phi$ & payload Cartesian position $x_p, y_p$)"
        },
        {
          "symbol": "$\\Delta x, \\Delta y$",
          "desc": "Cable offset components $\\Delta x = x_p - L_b\\cos\\phi$ and $\\Delta y = y_p - L_b\\sin\\phi$"
        }
      ],
      "steps": [
        {
          "title": "Unconstrained Mass Matrix $\\mathbf{M}$ and Force Vector $\\mathbf{f}(\\mathbf{q},t)$",
          "goal": "Write the unconstrained kinetic energy $T$, gravitational potential energy $V(\\phi, y_p)$, and extract $\\mathbf{M}$ and $\\mathbf{f}$ for $\\mathbf{q} = [\\phi, x_p, y_p]^T$.",
          "intuition": "In maximal coordinates $\\mathbf{q} = [\\phi, x_p, y_p]^T$, the boom and the payload are treated as independent until coupled by $\\mathbf{J}^T\\lambda$! Thus $\\mathbf{M} = \\text{diag}(I_b, m, m)$ has zero off-diagonal entries.",
          "conceptLinks": [
            "generalized-coordinates",
            "kinetic-potential-energy"
          ],
          "hint1": "The boom rotates about fixed pivot $O$ with kinetic energy $\\frac{1}{2}I_b\\dot{\\phi}^2$ and COM elevation $d_b\\sin\\phi$, while the payload has kinetic energy $\\frac{1}{2}m(\\dot{x}_p^2 + \\dot{y}_p^2)$ and elevation $y_p$.",
          "hint2": "Compute $\\mathbf{f} = -\\nabla_{\\mathbf{q}}V + [\\tau_b, 0, 0]^T$ where $V(\\phi, y_p) = m_bgd_b\\sin\\phi + mgy_p$.",
          "checkpoint": {
            "question": "What are the unconstrained $3\\times 3$ mass matrix $\\mathbf{M}$ and force vector $\\mathbf{f}$?",
            "options": [
              "$$\\mathbf{M} = \\begin{bmatrix} I_b & -mL_b\\sin\\phi & mL_b\\cos\\phi \\\\ -mL_b\\sin\\phi & m & 0 \\\\ mL_b\\cos\\phi & 0 & m \\end{bmatrix}, \\qquad \\mathbf{f} = \\begin{bmatrix} \\tau_b(t) \\\\ 0 \\\\ -mg \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\begin{bmatrix} I_b + mL_b^2 & 0 & 0 \\\\ 0 & m & 0 \\\\ 0 & 0 & m \\end{bmatrix}, \\qquad \\mathbf{f} = \\begin{bmatrix} \\tau_b(t) - m_bgd_b\\cos\\phi \\\\ 0 \\\\ -mg \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\begin{bmatrix} I_b & 0 & 0 \\\\ 0 & m & 0 \\\\ 0 & 0 & m \\end{bmatrix}, \\qquad \\mathbf{f} = \\begin{bmatrix} \\tau_b(t) - m_bgd_b\\sin\\phi \\\\ 0 \\\\ -mg \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\begin{bmatrix} I_b & 0 & 0 \\\\ 0 & m & 0 \\\\ 0 & 0 & m \\end{bmatrix}, \\qquad \\mathbf{f} = \\begin{bmatrix} \\tau_b(t) - m_bgd_b\\cos\\phi \\\\ 0 \\\\ -mg \\end{bmatrix}$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: In maximal coordinates, $(x_p, y_p)$ are independent coordinates, so there are no velocity cross-terms in $T$.",
              "Trap: Do not add $mL_b^2$ to $M_{11}$ because the payload kinetic energy is already accounted for in $\\frac{1}{2}m(\\dot{x}_p^2 + \\dot{y}_p^2)$!",
              "Trap: Since the boom COM height is $y_{\\text{boom}} = d_b\\sin\\phi$, its derivative with respect to $\\phi$ is $+d_b\\cos\\phi$.",
              "Correct! Because $(x_p, y_p)$ are already inertial Cartesian coordinates of the payload, $T = \\frac{1}{2}I_b\\dot{\\phi}^2 + \\frac{1}{2}m(\\dot{x}_p^2 + \\dot{y}_p^2)$ is diagonal and $-\\frac{\\partial V}{\\partial\\phi} = -m_bgd_b\\cos\\phi$."
            ]
          },
          "derivation": "With $T = \\frac{1}{2}I_b\\dot{\\phi}^2 + \\frac{1}{2}m(\\dot{x}_p^2 + \\dot{y}_p^2)$ and $V = m_bgd_b\\sin\\phi + mgy_p$:\n$$\\mathbf{M} = \\begin{bmatrix} I_b & 0 & 0 \\\\ 0 & m & 0 \\\\ 0 & 0 & m \\end{bmatrix}, \\qquad \\mathbf{f}(\\mathbf{q},t) = \\begin{bmatrix} \\tau_b(t) - m_bgd_b\\cos\\phi \\\\ 0 \\\\ -mg \\end{bmatrix}$$",
          "stepNumber": 1,
          "badge": "Step 1 • Kinematics & Geometry"
        },
        {
          "title": "$1\\times 3$ Constraint Jacobian $\\mathbf{J}(\\mathbf{q})$",
          "goal": "Define $\\Delta x = x_p - L_b\\cos\\phi$ and $\\Delta y = y_p - L_b\\sin\\phi$, and differentiate $g(\\phi,x_p,y_p) = \\frac{1}{2}(\\Delta x^2 + \\Delta y^2 - \\ell^2) = 0$ to obtain $\\mathbf{J}(\\mathbf{q})$.",
          "intuition": "By scaling $g$ with $\\frac{1}{2}$, $\\frac{\\partial g}{\\partial x_p} = \\Delta x$ and $\\frac{\\partial g}{\\partial y_p} = \\Delta y$, while by the chain rule $\\frac{\\partial g}{\\partial\\phi} = \\Delta x(L_b\\sin\\phi) + \\Delta y(-L_b\\cos\\phi)$ is simply the moment arm of the cable vector about the boom pivot!",
          "conceptLinks": [
            "holonomic-constraints",
            "constraint-jacobian"
          ],
          "hint1": "Use the chain rule: $\\frac{\\partial g}{\\partial\\phi} = \\Delta x\\frac{\\partial(\\Delta x)}{\\partial\\phi} + \\Delta y\\frac{\\partial(\\Delta y)}{\\partial\\phi}$ where $\\frac{\\partial}{\\partial\\phi}(x_p - L_b\\cos\\phi) = +L_b\\sin\\phi$ and $\\frac{\\partial}{\\partial\\phi}(y_p - L_b\\sin\\phi) = -L_b\\cos\\phi$.",
          "hint2": "Compute $\\frac{\\partial g}{\\partial x_p} = \\Delta x$ and $\\frac{\\partial g}{\\partial y_p} = \\Delta y$.",
          "checkpoint": {
            "question": "In terms of $\\Delta x = x_p - L_b\\cos\\phi$ and $\\Delta y = y_p - L_b\\sin\\phi$, what is the $1\\times 3$ Jacobian $\\mathbf{J}(\\mathbf{q}) = \\left[\\frac{\\partial g}{\\partial\\phi},\\; \\frac{\\partial g}{\\partial x_p},\\; \\frac{\\partial g}{\\partial y_p}\\right]$?",
            "options": [
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} -L_b(\\Delta x\\sin\\phi - \\Delta y\\cos\\phi) & \\Delta x & \\Delta y \\end{bmatrix}$$",
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} L_b(\\Delta x\\sin\\phi - \\Delta y\\cos\\phi) & \\Delta x & \\Delta y \\end{bmatrix}$$",
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} L_b(\\Delta x\\cos\\phi + \\Delta y\\sin\\phi) & \\Delta x & \\Delta y \\end{bmatrix}$$",
              "$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} 0 & \\Delta x & \\Delta y \\end{bmatrix}$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: Differentiating $-L_b\\cos\\phi$ gives $+L_b\\sin\\phi$ and differentiating $-L_b\\sin\\phi$ gives $-L_b\\cos\\phi$.",
              "Correct! Notice that $\\dot{g} = \\mathbf{J}\\dot{\\mathbf{q}} = \\Delta x(\\dot{x}_p + L_b\\dot{\\phi}\\sin\\phi) + \\Delta y(\\dot{y}_p - L_b\\dot{\\phi}\\cos\\phi) = \\Delta\\mathbf{r}\\cdot\\Delta\\dot{\\mathbf{r}} = 0$.",
              "Trap: Check the derivatives of $\\cos\\phi$ and $\\sin\\phi$ with respect to $\\phi$!",
              "Trap: Because the boom tip $A(L_b\\cos\\phi, L_b\\sin\\phi)$ moves with $\\phi$, $g$ depends explicitly on $\\phi$ so $J_1 \\ne 0$."
            ]
          },
          "derivation": "Let $\\Delta x = x_p - L_b\\cos\\phi$ and $\\Delta y = y_p - L_b\\sin\\phi$. Differentiating $g = \\frac{1}{2}(\\Delta x^2 + \\Delta y^2 - \\ell^2)$ partially with respect to $\\phi, x_p, y_p$:\n$$\\frac{\\partial g}{\\partial\\phi} = \\Delta x(L_b\\sin\\phi) + \\Delta y(-L_b\\cos\\phi) = L_b(\\Delta x\\sin\\phi - \\Delta y\\cos\\phi)$$\n$$\\frac{\\partial g}{\\partial x_p} = \\Delta x, \\qquad \\frac{\\partial g}{\\partial y_p} = \\Delta y$$\nThus:\n$$\\mathbf{J}(\\mathbf{q}) = \\begin{bmatrix} L_b(\\Delta x\\sin\\phi - \\Delta y\\cos\\phi) & \\Delta x & \\Delta y \\end{bmatrix}$$",
          "stepNumber": 2,
          "badge": "Step 2 • Matrices & Constraints"
        },
        {
          "title": "Convective Acceleration $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$",
          "goal": "Compute the scalar convective term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ in $\\ddot{g} = \\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0$ in terms of the relative velocity $(\\Delta\\dot{x}, \\Delta\\dot{y})$ and boom centripetal acceleration.",
          "intuition": "Here is the fastest exam shortcut for any distance constraint $g = \\frac{1}{2}\\left(\\|\\Delta\\mathbf{r}(\\mathbf{q})\\|^2 - \\ell^2\\right) = 0$: differentiating once gives $\\dot{g} = \\Delta\\mathbf{r}\\cdot\\Delta\\dot{\\mathbf{r}} = \\mathbf{J}\\dot{\\mathbf{q}}$, and differentiating a second time gives $\\ddot{g} = \\|\\Delta\\dot{\\mathbf{r}}\\|^2 + \\Delta\\mathbf{r}\\cdot\\Delta\\ddot{\\mathbf{r}}$! Any term in $\\Delta\\ddot{\\mathbf{r}}$ proportional to $\\dot{\\phi}^2$ adds to $\\|\\Delta\\dot{\\mathbf{r}}\\|^2$ inside $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$.",
          "conceptLinks": [
            "constraint-jacobian"
          ],
          "hint1": "Write $\\Delta\\dot{x} = \\dot{x}_p + L_b\\dot{\\phi}\\sin\\phi$ and $\\Delta\\dot{y} = \\dot{y}_p - L_b\\dot{\\phi}\\cos\\phi$. Differentiating again gives $\\Delta\\ddot{x} = \\ddot{x}_p + L_b\\ddot{\\phi}\\sin\\phi + L_b\\dot{\\phi}^2\\cos\\phi$ and $\\Delta\\ddot{y} = \\ddot{y}_p - L_b\\ddot{\\phi}\\cos\\phi + L_b\\dot{\\phi}^2\\sin\\phi$.",
          "hint2": "Substitute into $\\ddot{g} = \\Delta\\dot{x}^2 + \\Delta\\dot{y}^2 + \\Delta x\\,\\Delta\\ddot{x} + \\Delta y\\,\\Delta\\ddot{y}$ and separate the $\\ddot{\\mathbf{q}}$ terms ($\\mathbf{J}\\ddot{\\mathbf{q}}$) from the velocity-squared terms ($\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$)!",
          "checkpoint": {
            "question": "With $\\Delta\\dot{x} = \\dot{x}_p + L_b\\dot{\\phi}\\sin\\phi$ and $\\Delta\\dot{y} = \\dot{y}_p - L_b\\dot{\\phi}\\cos\\phi$, what is the convective term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$?",
            "options": [
              "$$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\Delta\\dot{x}^2 + \\Delta\\dot{y}^2$$",
              "$$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\Delta\\dot{x}^2 + \\Delta\\dot{y}^2 - L_b\\dot{\\phi}^2(\\Delta x\\cos\\phi + \\Delta y\\sin\\phi)$$",
              "$$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\Delta\\dot{x}^2 + \\Delta\\dot{y}^2 + L_b\\dot{\\phi}^2(\\Delta x\\cos\\phi + \\Delta y\\sin\\phi)$$",
              "$$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\dot{x}_p^2 + \\dot{y}_p^2 + L_b^2\\dot{\\phi}^2$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: Don't forget the boom-tip centripetal acceleration terms $+L_b\\dot{\\phi}^2\\cos\\phi$ and $+L_b\\dot{\\phi}^2\\sin\\phi$ inside $\\Delta\\ddot{x}$ and $\\Delta\\ddot{y}$!",
              "Trap: Because $\\Delta x = x_p - L_b\\cos\\phi$, differentiating twice gives $+L_b\\dot{\\phi}^2\\cos\\phi$ (with a plus sign!).",
              "Correct! $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = (\\Delta\\dot{x}^2 + \\Delta\\dot{y}^2) + L_b\\dot{\\phi}^2(\\Delta x\\cos\\phi + \\Delta y\\sin\\phi)$, which combines the relative cable speed squared $\\|\\Delta\\dot{\\mathbf{r}}\\|^2$ with the projection of the boom tip's centripetal acceleration onto $\\Delta\\mathbf{r}$.",
              "Trap: You dropped the cross-velocity terms in $\\Delta\\dot{x}^2 + \\Delta\\dot{y}^2$ and the boom centripetal projection $L_b\\dot{\\phi}^2(\\Delta x\\cos\\phi + \\Delta y\\sin\\phi)$."
            ]
          },
          "derivation": "Since $g = \\frac{1}{2}(\\Delta x^2 + \\Delta y^2 - \\ell^2)$, its second time derivative is:\n$$\\ddot{g} = \\Delta\\dot{x}^2 + \\Delta\\dot{y}^2 + \\Delta x\\,\\Delta\\ddot{x} + \\Delta y\\,\\Delta\\ddot{y}$$\nSubstituting $\\Delta\\ddot{x} = \\ddot{x}_p + L_b\\sin\\phi\\,\\ddot{\\phi} + L_b\\cos\\phi\\,\\dot{\\phi}^2$ and $\\Delta\\ddot{y} = \\ddot{y}_p - L_b\\cos\\phi\\,\\ddot{\\phi} + L_b\\sin\\phi\\,\\dot{\\phi}^2$ gives $\\ddot{g} = \\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ with:\n$$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\Delta\\dot{x}^2 + \\Delta\\dot{y}^2 + L_b\\dot{\\phi}^2(\\Delta x\\cos\\phi + \\Delta y\\sin\\phi)$$",
          "stepNumber": 3,
          "badge": "Step 3 • Equations & Solution"
        },
        {
          "title": "Complete $4\\times 4$ Constrained DAE Block System",
          "goal": "Assemble the $4\\times 4$ linear system for $[\\ddot{\\phi}, \\ddot{x}_p, \\ddot{y}_p, \\lambda]^T$ and interpret how the scalar multiplier $\\lambda$ relates to the physical cable tension $T_{\\text{cable}}$.",
          "intuition": "Because $\\mathbf{J}$ has payload components $[\\Delta x, \\Delta y]$ of length $\\sqrt{\\Delta x^2 + \\Delta y^2} = \\ell$, the constraint force on the payload is $\\mathbf{F}_{c,p} = -\\lambda[\\Delta x, \\Delta y]^T = -(\\lambda\\ell)\\,\\hat{\\mathbf{u}}_{AP}$, so the physical cable tension is $T_{\\text{cable}} = \\lambda\\ell$!",
          "conceptLinks": [
            "lagrange-multipliers"
          ],
          "hint1": "Combine $\\mathbf{M}\\ddot{\\mathbf{q}} + \\mathbf{J}^T\\lambda = \\mathbf{f}$ and $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ into a $4\\times 4$ symmetric block matrix.",
          "hint2": "Let $J_\\phi = L_b(\\Delta x\\sin\\phi - \\Delta y\\cos\\phi)$ for compact notation in the first row/column of $\\mathbf{J}$.",
          "checkpoint": {
            "question": "Letting $J_\\phi = L_b(\\Delta x\\sin\\phi - \\Delta y\\cos\\phi)$, which $4\\times 4$ matrix equation governs $[\\ddot{\\phi}, \\ddot{x}_p, \\ddot{y}_p, \\lambda]^T$?",
            "options": [
              "$$\\begin{bmatrix} I_b & 0 & 0 & J_\\phi \\\\ 0 & m & 0 & \\Delta x \\\\ 0 & 0 & m & \\Delta y \\\\ J_\\phi & \\Delta x & \\Delta y & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\phi} \\\\ \\ddot{x}_p \\\\ \\ddot{y}_p \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\tau_b - m_bgd_b\\cos\\phi \\\\ 0 \\\\ -mg \\\\ -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} \\end{bmatrix}$$",
              "$$\\begin{bmatrix} I_b & 0 & 0 & J_\\phi \\\\ 0 & m & 0 & \\Delta x \\\\ 0 & 0 & m & \\Delta y \\\\ J_\\phi & \\Delta x & \\Delta y & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\phi} \\\\ \\ddot{x}_p \\\\ \\ddot{y}_p \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\tau_b - m_bgd_b\\cos\\phi \\\\ 0 \\\\ -mg \\\\ +\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} \\end{bmatrix}$$",
              "$$\\begin{bmatrix} I_b & J_\\phi & 0 & 0 \\\\ J_\\phi & m & 0 & \\Delta x \\\\ 0 & 0 & m & \\Delta y \\\\ 0 & \\Delta x & \\Delta y & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\phi} \\\\ \\ddot{x}_p \\\\ \\ddot{y}_p \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\tau_b - m_bgd_b\\cos\\phi \\\\ 0 \\\\ -mg \\\\ -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} \\end{bmatrix}$$",
              "$$\\begin{bmatrix} I_b & 0 & 0 & 0 \\\\ 0 & m & 0 & \\Delta x \\\\ 0 & 0 & m & \\Delta y \\\\ 0 & \\Delta x & \\Delta y & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\phi} \\\\ \\ddot{x}_p \\\\ \\ddot{y}_p \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\tau_b - m_bgd_b\\cos\\phi \\\\ 0 \\\\ -mg \\\\ -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} \\end{bmatrix}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! And because $\\|[\\Delta x, \\Delta y]^T\\| = \\ell$, the physical cable tension is $T_{\\text{cable}} = \\lambda\\ell$, which simultaneously pulls the payload toward the boom tip $A$ and exerts reaction torque $-J_\\phi\\lambda$ on the boom!",
              "Trap: The bottom-right RHS entry is always $-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ (with a minus sign) because $\\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0$.",
              "Trap: $J_\\phi$ belongs in the 4th column ($\\mathbf{J}^T\\lambda$) and 4th row ($\\mathbf{J}\\ddot{\\mathbf{q}}$), not inside the $3\\times 3$ mass matrix $\\mathbf{M}$!",
              "Trap: Omitting $J_\\phi$ would mean the payload cable exerts zero reaction torque on the crane boom!"
            ]
          },
          "derivation": "Assembling $\\begin{bmatrix} \\mathbf{M} & \\mathbf{J}^T \\\\ \\mathbf{J} & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\mathbf{q}} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{f} \\\\ -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} \\end{bmatrix}$ with $J_\\phi = L_b(\\Delta x\\sin\\phi - \\Delta y\\cos\\phi)$:\n$$\\begin{bmatrix} I_b & 0 & 0 & J_\\phi \\\\ 0 & m & 0 & \\Delta x \\\\ 0 & 0 & m & \\Delta y \\\\ J_\\phi & \\Delta x & \\Delta y & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\phi} \\\\ \\ddot{x}_p \\\\ \\ddot{y}_p \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\tau_b(t) - m_bgd_b\\cos\\phi \\\\ 0 \\\\ -mg \\\\ -(\\Delta\\dot{x}^2 + \\Delta\\dot{y}^2) - L_b\\dot{\\phi}^2(\\Delta x\\cos\\phi + \\Delta y\\sin\\phi) \\end{bmatrix}$$",
          "stepNumber": 4,
          "badge": "Step 4 • Physical Analysis & Synthesis"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Example Exam Question 7 (Pivoted Crane Boom & Payload DAE)",
        "items": [
          {
            "label": "(1–2) Unconstrained $(\\mathbf{M}, \\mathbf{f})$ & $1\\times 3$ Constraint Jacobian $\\mathbf{J}(\\mathbf{q})$",
            "math": "$$\\mathbf{M} = \\text{diag}(I_b, m, m), \\quad \\mathbf{f} = \\begin{bmatrix} \\tau_b - m_bgd_b\\cos\\phi \\\\ 0 \\\\ -mg \\end{bmatrix}, \\quad \\mathbf{J} = \\begin{bmatrix} L_b(\\Delta x\\sin\\phi - \\Delta y\\cos\\phi) & \\Delta x & \\Delta y \\end{bmatrix}$$"
          },
          {
            "label": "(3) Convective Acceleration $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$",
            "math": "$$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\Delta\\dot{x}^2 + \\Delta\\dot{y}^2 + L_b\\dot{\\phi}^2(\\Delta x\\cos\\phi + \\Delta y\\sin\\phi), \\qquad \\Delta\\dot{x} = \\dot{x}_p + L_b\\dot{\\phi}\\sin\\phi, \\quad \\Delta\\dot{y} = \\dot{y}_p - L_b\\dot{\\phi}\\cos\\phi$$"
          },
          {
            "label": "(4) $4\\times 4$ Constrained DAE & Physical Cable Tension $T_{\\text{cable}} = \\lambda\\ell$",
            "math": "$$\\begin{bmatrix} I_b & 0 & 0 & J_\\phi \\\\ 0 & m & 0 & \\Delta x \\\\ 0 & 0 & m & \\Delta y \\\\ J_\\phi & \\Delta x & \\Delta y & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\phi} \\\\ \\ddot{x}_p \\\\ \\ddot{y}_p \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\tau_b - m_bgd_b\\cos\\phi \\\\ 0 \\\\ -mg \\\\ -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} \\end{bmatrix}$$"
          }
        ]
      },
      "lectureRefs": [
        13,
        17,
        22
      ],
      "estimatedMinutes": 22
    },
    {
      "id": "example-8",
      "code": "Example Exam • Question 8",
      "shortTitle": "Slender Rod Impact & Percussion Center",
      "title": "Pivoted Slender Rod Striking a Rigid Anvil & the Center of Percussion",
      "subtitle": "Simultaneous Pivot & Stop Impulses in Maximal Coordinates — Impact Map, Pivot Reaction & Sweet Spot d* = 2L/3",
      "category": "Contact & Impacts",
      "badgeClass": "badge-amber",
      "difficulty": "Exam-Level (Simultaneous Impulses)",
      "estimatedTime": "20 mins",
      "matchedLectures": [
        14,
        20,
        21
      ],
      "svgDiagram": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"problem-svg\">\n      <defs>\n        <marker id=\"arr-ex8-r\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#dc2626\"/>\n        </marker>\n        <marker id=\"arr-ex8-b\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#2563eb\"/>\n        </marker>\n      </defs>\n      <rect width=\"500\" height=\"280\" rx=\"12\" fill=\"#f8fafc\"/>\n      <!-- Ceiling & Pivot O -->\n      <line x1=\"140\" y1=\"35\" x2=\"320\" y2=\"35\" stroke=\"#475569\" stroke-width=\"4\"/>\n      <polygon points=\"215,35 230,58 245,35\" fill=\"#cbd5e1\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <circle cx=\"230\" cy=\"58\" r=\"5\" fill=\"#0f172a\"/>\n      <text x=\"252\" y=\"56\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">Pivot O (x_O = 0)</text>\n      <!-- Vertical rod at impact theta = 0 -->\n      <rect x=\"224\" y=\"58\" width=\"12\" height=\"180\" rx=\"4\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2.5\"/>\n      <!-- Center of mass G at L/2 -->\n      <circle cx=\"230\" cy=\"148\" r=\"5\" fill=\"#1e3a8a\"/>\n      <text x=\"245\" y=\"152\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\">COM G (x_c, L/2, I_G = mL^2/12)</text>\n      <!-- Rigid anvil stop at distance d below O -->\n      <rect x=\"170\" y=\"192\" width=\"52\" height=\"22\" rx=\"3\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2.5\"/>\n      <text x=\"108\" y=\"207\" font-size=\"11\" font-weight=\"700\" fill=\"#92400e\">Rigid Stop (depth d)</text>\n      <!-- Impulse arrows -->\n      <line x1=\"222\" y1=\"203\" x2=\"275\" y2=\"203\" stroke=\"#dc2626\" stroke-width=\"2.5\" marker-end=\"url(#arr-ex8-r)\"/>\n      <text x=\"282\" y=\"207\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">Λ_stop (at d)</text>\n      <line x1=\"230\" y1=\"58\" x2=\"175\" y2=\"58\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr-ex8-b)\"/>\n      <text x=\"95\" y=\"62\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">Λ_O (pivot impulse)</text>\n    </svg>",
      "prompt": "A uniform slender rod of mass $m$, total length $L$, and centroidal moment of inertia $I_G = \\frac{1}{12}mL^2$ hangs vertically from a frictionless ceiling hinge $O$ and swings in the vertical plane. To compute the horizontal hinge reaction impulse during impact, we use maximal horizontal-and-angular coordinates $\\mathbf{q} = [x_c, \\theta]^T$ near the vertical impact configuration $\\theta = 0$, where $x_c$ is the horizontal position of the rod's center of mass $G$ and $\\theta$ is the counter-clockwise angle from the downward vertical. The ceiling hinge at $O$ enforces the bilateral constraint $g_O(\\mathbf{q}) = x_c - \\frac{L}{2}\\sin\\theta = 0$, while a rigid anvil located at distance $d$ below $O$ enforces the unilateral contact constraint $g_P(\\mathbf{q}) = x_c + \\left(d - \\frac{L}{2}\\right)\\sin\\theta \\ge 0$. Just before striking the anvil at $\\theta = 0$, the rod has angular velocity $\\dot{\\theta}^- = -\\omega_0 < 0$ and COM velocity $\\dot{x}_c^- = -\\frac{L}{2}\\omega_0$. The coefficient of restitution at the anvil is $e \\in [0, 1]$.",
      "goalStatement": "Derive (1) the $2\\times 2$ mass matrix $\\mathbf{M}$ and the $1\\times 2$ Jacobians $\\mathbf{J}_O$ and $\\mathbf{J}_P$ evaluated at impact ($\theta = 0$), (2) the $4\\times 4$ simultaneous impulse-momentum linear system for $[\\dot{x}_c^+, \\dot{\\theta}^+, \\Lambda_O, \\Lambda_P]^T$, (3) the closed-form anvil impulse $\\Lambda_P$ and post-impact angular velocity $\\dot{\\theta}^+$, and (4) the hinge reaction impulse $\\Lambda_O(d)$ and the **center of percussion** (\"sweet spot\") distance $d^*$ where $\\Lambda_O = 0$.",
      "parameters": [
        {
          "symbol": "$m, L, I_G = \\frac{1}{12}mL^2$",
          "desc": "Slender rod mass, total length, and centroidal moment of inertia"
        },
        {
          "symbol": "$d, e$",
          "desc": "Distance from ceiling pivot $O$ to anvil contact point $P$, and restitution $e$"
        },
        {
          "symbol": "$\\mathbf{q} = [x_c, \\theta]^T$",
          "desc": "Horizontal COM coordinate & rod swing angle at impact ($\\theta = 0$)"
        },
        {
          "symbol": "$\\Lambda_O, \\Lambda_P$",
          "desc": "Impulsive Lagrange multipliers at the ceiling pivot $O$ and anvil stop $P$"
        }
      ],
      "steps": [
        {
          "title": "Unconstrained Mass Matrix $\\mathbf{M}$ and Contact Jacobians $\\mathbf{J}_O, \\mathbf{J}_P$ at $\\theta = 0$",
          "goal": "Write the $2\\times 2$ mass matrix $\\mathbf{M}$ for $\\mathbf{q} = [x_c, \\theta]^T$ and evaluate the pivot Jacobian $\\mathbf{J}_O = \\frac{\\partial g_O}{\\partial\\mathbf{q}}$ and anvil Jacobian $\\mathbf{J}_P = \\frac{\\partial g_P}{\\partial\\mathbf{q}}$ at the vertical impact configuration $\\theta = 0$.",
          "intuition": "By tracking the center of mass $x_c$ and angle $\\theta$, the unconstrained kinetic energy is $T = \\frac{1}{2}m\\dot{x}_c^2 + \\frac{1}{2}I_G\\dot{\\theta}^2$, so $\\mathbf{M} = \\text{diag}(m, I_G)$ is diagonal! Meanwhile, keeping the pivot constraint $g_O = 0$ explicit lets us solve directly for the impulsive hinge reaction $\\Lambda_O$!",
          "conceptLinks": [
            "constraint-jacobian",
            "impact-maps"
          ],
          "hint1": "Differentiate $g_O(x_c,\\theta) = x_c - \\frac{L}{2}\\sin\\theta$ and $g_P(x_c,\\theta) = x_c + \\left(d - \\frac{L}{2}\\right)\\sin\\theta$ with respect to $[x_c, \\theta]$.",
          "hint2": "Set $\\theta = 0$ ($\\cos 0 = 1$) in both Jacobians.",
          "checkpoint": {
            "question": "Evaluated at impact ($\\theta = 0$), what are $\\mathbf{M}$, $\\mathbf{J}_O$, and $\\mathbf{J}_P$?",
            "options": [
              "$$\\mathbf{M} = \\begin{bmatrix} m & 0 \\\\ 0 & \\frac{1}{12}mL^2 \\end{bmatrix}, \\qquad \\mathbf{J}_O = \\begin{bmatrix} 1 & -\\frac{L}{2} \\end{bmatrix}, \\qquad \\mathbf{J}_P = \\begin{bmatrix} 1 & d - \\frac{L}{2} \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\begin{bmatrix} m & 0 \\\\ 0 & \\frac{1}{3}mL^2 \\end{bmatrix}, \\qquad \\mathbf{J}_O = \\begin{bmatrix} 1 & \\frac{L}{2} \\end{bmatrix}, \\qquad \\mathbf{J}_P = \\begin{bmatrix} 1 & d \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\begin{bmatrix} m & 0 \\\\ 0 & \\frac{1}{12}mL^2 \\end{bmatrix}, \\qquad \\mathbf{J}_O = \\begin{bmatrix} 1 & 0 \\end{bmatrix}, \\qquad \\mathbf{J}_P = \\begin{bmatrix} 1 & d \\end{bmatrix}$$",
              "$$\\mathbf{M} = \\begin{bmatrix} m & \\frac{1}{2}mL \\\\ \\frac{1}{2}mL & \\frac{1}{12}mL^2 \\end{bmatrix}, \\qquad \\mathbf{J}_O = \\begin{bmatrix} 1 & -\\frac{L}{2} \\end{bmatrix}, \\qquad \\mathbf{J}_P = \\begin{bmatrix} 1 & d - \\frac{L}{2} \\end{bmatrix}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! Notice that $\\mathbf{J}_O\\dot{\\mathbf{q}} = \\dot{x}_c - \\frac{L}{2}\\dot{\\theta} = 0$ is the horizontal velocity of the top pivot $O$, and $\\mathbf{J}_P\\dot{\\mathbf{q}} = \\dot{x}_c + (d - \\frac{L}{2})\\dot{\\theta} = d\\dot{\\theta}$ is the horizontal velocity of the contact point $P$!",
              "Trap: Since $x_c$ is the center-of-mass coordinate, use the centroidal inertia $I_G = \\frac{1}{12}mL^2$ (not $I_O = \\frac{1}{3}mL^2$).",
              "Trap: Both $g_O$ and $g_P$ depend on $\\theta$ through the moment arms $-\\frac{L}{2}$ and $d - \\frac{L}{2}$ about the center of mass $G$.",
              "Trap: Because $x_c$ is already the center of mass, there is no off-diagonal coupling in $\\mathbf{M}$."
            ]
          },
          "derivation": "For $\\mathbf{q} = [x_c, \\theta]^T$, the unconstrained mass matrix is $\\mathbf{M} = \\text{diag}(m, I_G)$ with $I_G = \\frac{1}{12}mL^2$. Differentiating $g_O$ and $g_P$ at $\\theta = 0$:\n$$\\mathbf{J}_O = \\left.\\frac{\\partial g_O}{\\partial\\mathbf{q}}\\right|_{\\theta=0} = \\begin{bmatrix} 1 & -\\frac{L}{2} \\end{bmatrix}, \\qquad \\mathbf{J}_P = \\left.\\frac{\\partial g_P}{\\partial\\mathbf{q}}\\right|_{\\theta=0} = \\begin{bmatrix} 1 & d - \\frac{L}{2} \\end{bmatrix}$$",
          "stepNumber": 1,
          "badge": "Step 1 • Kinematics & Geometry"
        },
        {
          "title": "$4\\times 4$ Simultaneous Impulse-Momentum Linear System",
          "goal": "Combine the impulse-momentum balance $\\mathbf{M}(\\dot{\\mathbf{q}}^+ - \\dot{\\mathbf{q}}^-) = \\mathbf{J}_O^T\\Lambda_O + \\mathbf{J}_P^T\\Lambda_P$ with the bilateral pivot constraint $\\mathbf{J}_O\\dot{\\mathbf{q}}^+ = 0$ and the restitution impact law $\\mathbf{J}_P\\dot{\\mathbf{q}}^+ = -e\\mathbf{J}_P\\dot{\\mathbf{q}}^-$.",
          "intuition": "When a constrained mechanism experiences an impact, every bilateral joint constraint ($g_O = 0$) must remain satisfied after impact ($\\mathbf{J}_O\\dot{\\mathbf{q}}^+ = 0$), which requires its own impulsive reaction multiplier $\\Lambda_O$ alongside the contact impulse $\\Lambda_P$!",
          "conceptLinks": [
            "impact-maps",
            "lagrange-multipliers"
          ],
          "hint1": "Pre-impact velocity of contact point $P$ is $\\dot{g}_P^- = \\mathbf{J}_P\\dot{\\mathbf{q}}^- = -\\frac{L}{2}\\omega_0 - \\left(d - \\frac{L}{2}\\right)\\omega_0 = -d\\omega_0$.",
          "hint2": "Thus $-e\\dot{g}_P^- = +e d\\omega_0$. Write the $4\\times 4$ matrix for $[\\dot{x}_c^+, \\dot{\\theta}^+, \\Lambda_O, \\Lambda_P]^T$.",
          "checkpoint": {
            "question": "Using the convention $\\mathbf{M}(\\dot{\\mathbf{q}}^+ - \\dot{\\mathbf{q}}^-) - \\mathbf{J}_O^T\\Lambda_O - \\mathbf{J}_P^T\\Lambda_P = \\mathbf{0}$, which $4\\times 4$ system governs $[\\dot{x}_c^+, \\dot{\\theta}^+, \\Lambda_O, \\Lambda_P]^T$?",
            "options": [
              "$$\\begin{bmatrix} m & 0 & 0 & -1 \\\\ 0 & I_G & 0 & -d \\\\ 0 & 0 & 1 & 0 \\\\ 1 & d - \\frac{L}{2} & 0 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}_c^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda_O \\\\ \\Lambda_P \\end{bmatrix} = \\begin{bmatrix} -\\frac{1}{2}mL\\omega_0 \\\\ -I_G\\omega_0 \\\\ 0 \\\\ ed\\omega_0 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} m & 0 & -1 & -1 \\\\ 0 & I_G & \\frac{L}{2} & -(d - \\frac{L}{2}) \\\\ 1 & -\\frac{L}{2} & 0 & 0 \\\\ 1 & d - \\frac{L}{2} & 0 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}_c^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda_O \\\\ \\Lambda_P \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\\\ -ed\\omega_0 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} m & 0 & -1 & -1 \\\\ 0 & I_G & \\frac{L}{2} & -(d - \\frac{L}{2}) \\\\ 1 & -\\frac{L}{2} & 0 & 0 \\\\ 1 & d - \\frac{L}{2} & 0 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}_c^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda_O \\\\ \\Lambda_P \\end{bmatrix} = \\begin{bmatrix} -\\frac{1}{2}mL\\omega_0 \\\\ -I_G\\omega_0 \\\\ 0 \\\\ ed\\omega_0 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} m & 0 & -1 & -1 \\\\ 0 & I_G & -\\frac{L}{2} & d - \\frac{L}{2} \\\\ 1 & -\\frac{L}{2} & 0 & 0 \\\\ 1 & d - \\frac{L}{2} & 0 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}_c^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda_O \\\\ \\Lambda_P \\end{bmatrix} = \\begin{bmatrix} -\\frac{1}{2}mL\\omega_0 \\\\ -I_G\\omega_0 \\\\ 0 \\\\ ed\\omega_0 \\end{bmatrix}$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: Omitting $\\mathbf{J}_O^T\\Lambda_O$ would allow the top of the rod to rip away from the ceiling hinge during the collision!",
              "Trap: Never forget the pre-impact momentum $\\mathbf{M}\\dot{\\mathbf{q}}^- = [-\\frac{1}{2}mL\\omega_0,\\; -I_G\\omega_0]^T$ on the right-hand side, and note that $-e(-d\\omega_0) = +ed\\omega_0 > 0$.",
              "Correct! The first two rows enforce $\\mathbf{M}\\dot{\\mathbf{q}}^+ - \\mathbf{J}_O^T\\Lambda_O - \\mathbf{J}_P^T\\Lambda_P = \\mathbf{M}\\dot{\\mathbf{q}}^-$, the third row enforces $\\mathbf{J}_O\\dot{\\mathbf{q}}^+ = 0$ (hinge stays fixed), and the fourth row enforces $\\mathbf{J}_P\\dot{\\mathbf{q}}^+ = -e\\dot{g}_P^- = +ed\\omega_0$.",
              "Trap: Check the signs of $-\\mathbf{J}_O^T = [-1, +L/2]^T$ and $-\\mathbf{J}_P^T = [-1, -(d-L/2)]^T$."
            ]
          },
          "derivation": "With $\\dot{\\mathbf{q}}^- = [-\\frac{L}{2}\\omega_0,\\; -\\omega_0]^T$ and $\\dot{g}_P^- = \\mathbf{J}_P\\dot{\\mathbf{q}}^- = -d\\omega_0$, the simultaneous impulse-momentum equations are:\n$$\\begin{bmatrix} m & 0 & -1 & -1 \\\\ 0 & I_G & \\frac{L}{2} & -(d - \\frac{L}{2}) \\\\ 1 & -\\frac{L}{2} & 0 & 0 \\\\ 1 & d - \\frac{L}{2} & 0 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}_c^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda_O \\\\ \\Lambda_P \\end{bmatrix} = \\begin{bmatrix} -\\frac{1}{2}mL\\omega_0 \\\\ -I_G\\omega_0 \\\\ 0 \\\\ ed\\omega_0 \\end{bmatrix}$$",
          "stepNumber": 2,
          "badge": "Step 2 • Matrices & Constraints"
        },
        {
          "title": "Post-Impact Velocities $\\dot{\\theta}^+, \\dot{x}_c^+$ and Anvil Impulse $\\Lambda_P$",
          "goal": "Solve rows 3 and 4 for $\\dot{\\theta}^+$ and $\\dot{x}_c^+$, and use angular impulse-momentum about pivot $O$ to find the anvil impulse $\\Lambda_P$.",
          "intuition": "Subtracting row 3 ($\\dot{x}_c^+ - \\frac{L}{2}\\dot{\\theta}^+ = 0$) from row 4 ($\\dot{x}_c^+ + (d - \\frac{L}{2})\\dot{\\theta}^+ = ed\\omega_0$) immediately gives $d\\dot{\\theta}^+ = ed\\omega_0 \\implies \\dot{\\theta}^+ = +e\\omega_0$!",
          "conceptLinks": [
            "impact-maps"
          ],
          "hint1": "From $\\dot{\\theta}^+ = e\\omega_0$ and $\\dot{x}_c^+ = \\frac{L}{2}\\dot{\\theta}^+ = \\frac{L}{2}e\\omega_0$, eliminate $\\Lambda_O$ between rows 1 and 2 by multiplying row 1 by $\\frac{L}{2}$ and adding to row 2.",
          "hint2": "Use $I_O = I_G + m\\left(\\frac{L}{2}\\right)^2 = \\frac{1}{12}mL^2 + \\frac{1}{4}mL^2 = \\frac{1}{3}mL^2$ to simplify $\\Lambda_P$.",
          "checkpoint": {
            "question": "What are the post-impact angular velocity $\\dot{\\theta}^+$ and the anvil contact impulse $\\Lambda_P$?",
            "options": [
              "$$\\dot{\\theta}^+ = e\\omega_0, \\qquad \\Lambda_P = \\frac{(1 + e)mL^2\\omega_0}{12d}$$",
              "$$\\dot{\\theta}^+ = e\\omega_0, \\qquad \\Lambda_P = \\frac{(1 + e)mL^2\\omega_0}{3d}$$",
              "$$\\dot{\\theta}^+ = \\frac{L}{d}e\\omega_0, \\qquad \\Lambda_P = (1 + e)mL\\omega_0$$",
              "$$\\dot{\\theta}^+ = e\\omega_0, \\qquad \\Lambda_P = \\frac{(1 - e)mL^2\\omega_0}{3d}$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: Don't forget the parallel-axis contribution $m(L/2)^2$: $I_O = \\frac{1}{12}mL^2 + \\frac{1}{4}mL^2 = \\frac{1}{3}mL^2$.",
              "Correct! Since the rod rotates about $O$ with $I_O = \\frac{1}{3}mL^2$, angular impulse-momentum about $O$ gives $I_O(\\dot{\\theta}^+ - \\dot{\\theta}^-) = d\\Lambda_P \\implies \\Lambda_P = \\frac{I_O(1+e)\\omega_0}{d} = \\frac{(1+e)mL^2\\omega_0}{3d}$.",
              "Trap: Subtracting row 3 from row 4 cancels $\\frac{L}{2}\\dot{\\theta}^+$, giving $d\\dot{\\theta}^+ = ed\\omega_0 \\implies \\dot{\\theta}^+ = e\\omega_0$.",
              "Trap: Since $\\dot{\\theta}^- = -\\omega_0$ and $\\dot{\\theta}^+ = +e\\omega_0$, the change in angular velocity is $\\dot{\\theta}^+ - \\dot{\\theta}^- = (1+e)\\omega_0$."
            ]
          },
          "derivation": "Subtracting row 3 from row 4 gives:\n$$d\\dot{\\theta}^+ = ed\\omega_0 \\implies \\dot{\\theta}^+ = e\\omega_0, \\qquad \\dot{x}_c^+ = \\frac{L}{2}e\\omega_0$$\nMultiplying row 1 by $\\frac{L}{2}$ and adding to row 2 eliminates $\\Lambda_O$:\n$$\\left(I_G + m\\frac{L^2}{4}\\right)(\\dot{\\theta}^+ - \\dot{\\theta}^-) = d\\Lambda_P \\implies \\frac{1}{3}mL^2(1 + e)\\omega_0 = d\\Lambda_P \\implies \\Lambda_P = \\frac{(1 + e)mL^2\\omega_0}{3d}$$",
          "stepNumber": 3,
          "badge": "Step 3 • Equations & Solution"
        },
        {
          "title": "Pivot Reaction Impulse $\\Lambda_O(d)$ and Center of Percussion $d^*$",
          "goal": "Substitute $\\dot{x}_c^+$ and $\\Lambda_P$ into row 1 ($m(\\dot{x}_c^+ - \\dot{x}_c^-) = \\Lambda_O + \\Lambda_P$) to find $\\Lambda_O(d)$ and solve $\\Lambda_O(d^*) = 0$ for the center of percussion $d^*$.",
          "intuition": "Every baseball and cricket player knows the 'sweet spot' (center of percussion): if the impact occurs at $d^* = \\frac{2}{3}L$ from the hinge, the translational kick and angular kick at the hinge cancel out completely so your hands feel zero sting ($Lambda_O = 0$)!",
          "conceptLinks": [
            "impact-maps",
            "lagrange-multipliers"
          ],
          "hint1": "From row 1, $\\Lambda_O + \\Lambda_P = m(\\dot{x}_c^+ - \\dot{x}_c^-) = \\frac{1}{2}(1 + e)mL\\omega_0$.",
          "hint2": "Subtract $\\Lambda_P = \\frac{(1 + e)mL^2\\omega_0}{3d}$ to get $\\Lambda_O(d) = (1 + e)mL\\omega_0\\left(\\frac{1}{2} - \\frac{L}{3d}\\right)$ and set it to zero!",
          "checkpoint": {
            "question": "What are the pivot reaction impulse $\\Lambda_O(d)$ and the center of percussion distance $d^*$ where $\\Lambda_O(d^*) = 0$?",
            "options": [
              "$$\\Lambda_O(d) = (1 + e)mL\\omega_0\\left(\\frac{1}{3} - \\frac{L}{4d}\\right), \\qquad d^* = \\frac{3}{4}L$$",
              "$$\\Lambda_O(d) = (1 + e)mL\\omega_0\\left(\\frac{1}{2} - \\frac{L}{2d}\\right), \\qquad d^* = L$$",
              "$$\\Lambda_O(d) = (1 + e)mL\\omega_0\\left(\\frac{1}{2} - \\frac{L}{4d}\\right), \\qquad d^* = \\frac{1}{2}L$$",
              "$$\\Lambda_O(d) = (1 + e)mL\\omega_0\\left(\\frac{1}{2} - \\frac{L}{3d}\\right), \\qquad d^* = \\frac{2}{3}L$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: Check $\\frac{1}{2} - \\frac{L}{3d} = 0 \\implies d^* = \\frac{2}{3}L$.",
              "Trap: Hitting at the tip $d = L$ gives $\\Lambda_O(L) = +\\frac{1}{6}(1+e)mL\\omega_0 \\ne 0$.",
              "Trap: Hitting at the center of mass $d = L/2$ gives $\\Lambda_O(L/2) = -\\frac{1}{6}(1+e)mL\\omega_0 \\ne 0$.",
              "Correct! When $d = d^* = \\frac{2}{3}L$, $\\frac{1}{2} - \\frac{L}{3(2L/3)} = \\frac{1}{2} - \\frac{1}{2} = 0$, so the hinge experiences zero impulsive reaction force regardless of $e$ or $\\omega_0$!"
            ]
          },
          "derivation": "From the horizontal linear impulse-momentum balance (Row 1):\n$$\\Lambda_O + \\Lambda_P = m(\\dot{x}_c^+ - \\dot{x}_c^-) = \\frac{1}{2}(1 + e)mL\\omega_0$$\nSubstituting $\\Lambda_P = \\frac{(1 + e)mL^2\\omega_0}{3d}$ yields:\n$$\\Lambda_O(d) = (1 + e)mL\\omega_0\\left(\\frac{1}{2} - \\frac{L}{3d}\\right)$$\nSetting $\\Lambda_O(d^*) = 0$ gives the center of percussion:\n$$\\frac{1}{2} = \\frac{L}{3d^*} \\implies d^* = \\frac{2}{3}L$$",
          "stepNumber": 4,
          "badge": "Step 4 • Physical Analysis & Synthesis"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Example Exam Question 8 (Slender Rod Impact & Center of Percussion)",
        "items": [
          {
            "label": "(1–2) $4\\times 4$ Simultaneous Impulse-Momentum Linear System at $\\theta = 0$",
            "math": "$$\\begin{bmatrix} m & 0 & -1 & -1 \\\\ 0 & \\frac{1}{12}mL^2 & \\frac{L}{2} & -(d - \\frac{L}{2}) \\\\ 1 & -\\frac{L}{2} & 0 & 0 \\\\ 1 & d - \\frac{L}{2} & 0 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}_c^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda_O \\\\ \\Lambda_P \\end{bmatrix} = \\begin{bmatrix} -\\frac{1}{2}mL\\omega_0 \\\\ -\\frac{1}{12}mL^2\\omega_0 \\\\ 0 \\\\ ed\\omega_0 \\end{bmatrix}$$"
          },
          {
            "label": "(3) Post-Impact Velocities & Anvil Contact Impulse $\\Lambda_P$",
            "math": "$$\\dot{\\theta}^+ = e\\omega_0, \\qquad \\dot{x}_c^+ = \\frac{1}{2}eL\\omega_0, \\qquad \\Lambda_P = \\frac{(1 + e)mL^2\\omega_0}{3d}$$"
          },
          {
            "label": "(4) Ceiling Hinge Reaction Impulse $\\Lambda_O(d)$ & Center of Percussion $d^*$",
            "math": "$$\\Lambda_O(d) = (1 + e)mL\\omega_0\\left(\\frac{1}{2} - \\frac{L}{3d}\\right), \\qquad \\Lambda_O(d^*) = 0 \\iff d^* = \\frac{2}{3}L$$"
          }
        ]
      },
      "lectureRefs": [
        14,
        20,
        21
      ],
      "estimatedMinutes": 20
    },
    {
      "id": "example-9",
      "code": "Example Exam • Question 9",
      "shortTitle": "Slack Tow-Cable Snapping Taut",
      "title": "Two-Cart Train with a Slack Tow-Cable Snapping Taut (Plastic Catch Impact & Hybrid Switch)",
      "subtitle": "Unilateral Rope Constraint g(x_1, x_2) <= 0 — Plastic Impact (e = 0), Impulse Lambda & Energy Loss Delta E",
      "category": "Contact & Impacts",
      "badgeClass": "badge-amber",
      "difficulty": "Exam-Level (HW2 P3e Analogue)",
      "estimatedTime": "16 mins",
      "matchedLectures": [
        14,
        20,
        21
      ],
      "svgDiagram": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"problem-svg\">\n      <defs>\n        <marker id=\"arr-ex9-r\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#dc2626\"/>\n        </marker>\n        <marker id=\"arr-ex9-b\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#2563eb\"/>\n        </marker>\n      </defs>\n      <rect width=\"500\" height=\"280\" rx=\"12\" fill=\"#f8fafc\"/>\n      <line x1=\"30\" y1=\"185\" x2=\"470\" y2=\"185\" stroke=\"#475569\" stroke-width=\"4\"/>\n      <!-- Wall & Spring k on Cart 1 -->\n      <line x1=\"45\" y1=\"110\" x2=\"45\" y2=\"185\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <path d=\"M 45 152 L 62 140 L 76 164 L 90 140 L 104 164 L 118 140 L 130 152\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2.2\"/>\n      <text x=\"72\" y=\"130\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Spring k</text>\n      <!-- Cart 1 (Trailer m_1) -->\n      <rect x=\"130\" y=\"128\" width=\"84\" height=\"46\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2.5\"/>\n      <circle cx=\"150\" cy=\"179\" r=\"6\" fill=\"#334155\"/>\n      <circle cx=\"194\" cy=\"179\" r=\"6\" fill=\"#334155\"/>\n      <text x=\"150\" y=\"155\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\">m_1 (x_1)</text>\n      <!-- Tow cable snapping taut at length l_0 -->\n      <line x1=\"214\" y1=\"151\" x2=\"318\" y2=\"151\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"6,3\"/>\n      <text x=\"228\" y=\"140\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">Cable l_0 snaps taut!</text>\n      <line x1=\"218\" y1=\"164\" x2=\"256\" y2=\"164\" stroke=\"#dc2626\" stroke-width=\"2.2\" marker-end=\"url(#arr-ex9-r)\"/>\n      <line x1=\"314\" y1=\"164\" x2=\"276\" y2=\"164\" stroke=\"#dc2626\" stroke-width=\"2.2\" marker-end=\"url(#arr-ex9-r)\"/>\n      <text x=\"256\" y=\"177\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">Λ</text>\n      <!-- Cart 2 (Tractor m_2) -->\n      <rect x=\"318\" y=\"128\" width=\"88\" height=\"46\" rx=\"6\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2.5\"/>\n      <circle cx=\"338\" cy=\"179\" r=\"6\" fill=\"#334155\"/>\n      <circle cx=\"386\" cy=\"179\" r=\"6\" fill=\"#334155\"/>\n      <text x=\"338\" y=\"155\" font-size=\"12\" font-weight=\"700\" fill=\"#78350f\">m_2 (x_2)</text>\n      <line x1=\"406\" y1=\"151\" x2=\"458\" y2=\"151\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arr-ex9-b)\"/>\n      <text x=\"412\" y=\"142\" font-size=\"11\" font-weight=\"700\" fill=\"#1d4ed8\">v_2^- &gt; v_1^-</text>\n    </svg>",
      "prompt": "A trailer cart of mass $m_1$ at position $x_1(t)$ is anchored to a left wall by a linear spring $k$ and connected to a powered tug cart of mass $m_2$ at position $x_2(t)$ by a flexible, inextensible tow cable of maximum length $\\ell_0$. While $x_2 - x_1 < \\ell_0$, the cable is slack and exerts zero force. Using $\\mathbf{q} = [x_1, x_2]^T$, the unilateral cable constraint is:\n$$g(x_1, x_2) = x_2 - x_1 - \\ell_0 \\le 0$$\nAt instant $t = t^*$, the tug cart reaches $x_2 - x_1 = \\ell_0$ with pre-impact velocities $\\dot{x}_2^- > \\dot{x}_1^-$ so that the cable snaps taut in a **perfectly plastic (inelastic) catch ($e = 0$)** without bouncing slack.",
      "goalStatement": "Derive (1) the $1\\times 2$ cable Jacobian $\\mathbf{J}$ and pre-snap separation rate $\\dot{g}^- = \\mathbf{J}\\dot{\\mathbf{q}}^-$, (2) the $3\\times 3$ plastic impact linear system for $[\\dot{x}_1^+, \\dot{x}_2^+, \\Lambda]^T$ (explaining why the spring force $kx_1$ is absent during the instantaneous snap), (3) the closed-form post-snap velocity $\\dot{x}^+$ and cable impulse $\\Lambda$, and (4) the exact mechanical energy lost $\\Delta E = T^+ - T^-$.",
      "parameters": [
        {
          "symbol": "$m_1, m_2$",
          "desc": "Trailer cart mass & powered tug cart mass on horizontal track"
        },
        {
          "symbol": "$\\ell_0, k$",
          "desc": "Taut tow-cable length & wall spring stiffness on cart 1"
        },
        {
          "symbol": "$\\dot{x}_1^-, \\dot{x}_2^-$",
          "desc": "Pre-snap horizontal velocities at $x_2 - x_1 = \\ell_0$ with $\\dot{x}_2^- > \\dot{x}_1^-$"
        },
        {
          "symbol": "$e = 0, \\Lambda$",
          "desc": "Plastic cable catch coefficient of restitution & impulsive cable tension"
        }
      ],
      "steps": [
        {
          "title": "Unilateral Cable Constraint $g(x_1,x_2) \\le 0$ and Jacobian $\\mathbf{J}$",
          "goal": "Compute the $1\\times 2$ Jacobian $\\mathbf{J} = \\frac{\\partial g}{\\partial\\mathbf{q}}$ for $g(x_1,x_2) = x_2 - x_1 - \\ell_0 \\le 0$ and evaluate $\\dot{g}^- = \\mathbf{J}\\dot{\\mathbf{q}}^-$.",
          "intuition": "This is the direct horizontal analogue of Homework 2 Problem 3(e)! When $g < 0$, the cable is slack; at the instant $g = 0$ with $\\dot{g}^- = \\dot{x}_2^- - \\dot{x}_1^- > 0$, the cable snaps taut and enforces $\\dot{g}^+ = \\mathbf{J}\\dot{\\mathbf{q}}^+ = 0$.",
          "conceptLinks": [
            "holonomic-constraints",
            "constraint-jacobian",
            "unilateral-hybrid-systems"
          ],
          "hint1": "Differentiate $g(x_1,x_2) = x_2 - x_1 - \\ell_0$ with respect to $x_1$ and $x_2$.",
          "hint2": "Multiply $\\mathbf{J}$ by $\\dot{\\mathbf{q}}^- = [\\dot{x}_1^-, \\dot{x}_2^-]^T$.",
          "checkpoint": {
            "question": "What are the $1\\times 2$ Jacobian $\\mathbf{J}$ and pre-snap constraint velocity $\\dot{g}^-$?",
            "options": [
              "$$\\mathbf{J} = \\begin{bmatrix} 1 & 1 \\end{bmatrix}, \\qquad \\dot{g}^- = \\dot{x}_1^- + \\dot{x}_2^-$$",
              "$$\\mathbf{J} = \\begin{bmatrix} -1 & 1 \\end{bmatrix}, \\qquad \\dot{g}^- = \\dot{x}_2^- - \\dot{x}_1^-$$",
              "$$\\mathbf{J} = \\begin{bmatrix} 1 & -1 \\end{bmatrix}, \\qquad \\dot{g}^- = \\dot{x}_2^- - \\dot{x}_1^-$$",
              "$$\\mathbf{J} = \\begin{bmatrix} -x_1 & x_2 \\end{bmatrix}, \\qquad \\dot{g}^- = x_2\\dot{x}_2^- - x_1\\dot{x}_1^-$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: Since $g = x_2 - x_1 - \\ell_0$, $\\frac{\\partial g}{\\partial x_1} = -1$ and $\\frac{\\partial g}{\\partial x_2} = +1$.",
              "Correct! $\\mathbf{J} = [-1, 1]$ and $\\dot{g}^- = \\dot{x}_2^- - \\dot{x}_1^- > 0$ measures the rate at which the two carts are separating when the slack runs out.",
              "Trap: If $\\mathbf{J} = [1, -1]$, then $\\mathbf{J}\\dot{\\mathbf{q}}^- = \\dot{x}_1^- - \\dot{x}_2^-$, which has the opposite sign.",
              "Trap: $g$ is linear in $x_1, x_2$, so its partial derivatives are constants $[-1, 1]$."
            ]
          },
          "derivation": "Differentiating $g(x_1,x_2) = x_2 - x_1 - \\ell_0 \\le 0$ with respect to $\\mathbf{q} = [x_1, x_2]^T$:\n$$\\mathbf{J} = \\frac{\\partial g}{\\partial\\mathbf{q}} = \\begin{bmatrix} -1 & 1 \\end{bmatrix}, \\qquad \\dot{g}^- = \\mathbf{J}\\dot{\\mathbf{q}}^- = \\dot{x}_2^- - \\dot{x}_1^- > 0$$",
          "stepNumber": 1,
          "badge": "Step 1 • Kinematics & Geometry"
        },
        {
          "title": "$3\\times 3$ Plastic Impact Linear System ($e = 0$)",
          "goal": "Write the $3\\times 3$ impact matrix equation for $[\\dot{x}_1^+, \\dot{x}_2^+, \\Lambda]^T$ using $\\mathbf{M}\\dot{\\mathbf{q}}^+ + \\mathbf{J}^T\\Lambda = \\mathbf{M}\\dot{\\mathbf{q}}^-$ and $\\mathbf{J}\\dot{\\mathbf{q}}^+ = 0$.",
          "intuition": "Why doesn't the wall spring force $-kx_1$ appear in the impact equation? Because integrating any finite force over an infinitesimal collision interval $[t^-, t^+]$ gives $\\int_{t^-}^{t^+} (-kx_1)\\,dt = 0$! Only the Dirac-delta cable tension impulse $\\Lambda = \\int_{t^-}^{t^+} \\lambda\\,dt$ survives.",
          "conceptLinks": [
            "impact-maps"
          ],
          "hint1": "With $\\mathbf{M} = \\text{diag}(m_1, m_2)$ and $\\mathbf{J} = [-1, 1]$, place $\\mathbf{J}^T = [-1, 1]^T$ in column 3 and $\\mathbf{J} = [-1, 1]$ in row 3.",
          "hint2": "Because $e = 0$ (plastic catch), the right-hand side of row 3 is $-e\\dot{g}^- = 0$.",
          "checkpoint": {
            "question": "Which $3\\times 3$ linear system governs the post-snap velocities and impulse $[\\dot{x}_1^+, \\dot{x}_2^+, \\Lambda]^T$?",
            "options": [
              "$$\\begin{bmatrix} m_1 & 0 & -1 \\\\ 0 & m_2 & 1 \\\\ -1 & 1 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}_1^+ \\\\ \\dot{x}_2^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} m_1\\dot{x}_1^- - kx_1 \\\\ m_2\\dot{x}_2^- \\\\ 0 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} m_1 & 0 & -1 \\\\ 0 & m_2 & 1 \\\\ -1 & 1 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}_1^+ \\\\ \\dot{x}_2^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} m_1\\dot{x}_1^- \\\\ m_2\\dot{x}_2^- \\\\ -(\\dot{x}_2^- - \\dot{x}_1^-) \\end{bmatrix}$$",
              "$$\\begin{bmatrix} m_1 & 0 & -1 \\\\ 0 & m_2 & 1 \\\\ -1 & 1 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}_1^+ \\\\ \\dot{x}_2^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} m_1\\dot{x}_1^- \\\\ m_2\\dot{x}_2^- \\\\ 0 \\end{bmatrix}$$",
              "$$\\begin{bmatrix} m_1 & 0 & 1 \\\\ 0 & m_2 & 1 \\\\ 1 & 1 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}_1^+ \\\\ \\dot{x}_2^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} m_1\\dot{x}_1^- \\\\ m_2\\dot{x}_2^- \\\\ 0 \\end{bmatrix}$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: Finite forces like $-kx_1$ have zero impulse over $\\Delta t \\to 0$ and never appear in the instantaneous impact map!",
              "Trap: Having $-(\\dot{x}_2^- - \\dot{x}_1^-)$ in row 3 corresponds to elastic rebound $e = 1$, whereas a cable snapping taut is a plastic catch $e = 0$!",
              "Correct! Row 1 is $m_1\\dot{x}_1^+ - \\Lambda = m_1\\dot{x}_1^-$, Row 2 is $m_2\\dot{x}_2^+ + \\Lambda = m_2\\dot{x}_2^-$, and Row 3 is $-\\dot{x}_1^+ + \\dot{x}_2^+ = 0$.",
              "Trap: Use $\\mathbf{J} = [-1, 1]$ so the cable pulls cart 1 forward ($+\\Lambda$) and cart 2 backward ($-\\Lambda$)."
            ]
          },
          "derivation": "Integrating $\\mathbf{M}\\ddot{\\mathbf{q}} + \\mathbf{J}^T\\lambda = \\mathbf{f}$ over $[t^-, t^+]$ as $t^+ \\to t^-$ eliminates all finite forces $\\mathbf{f}$ and enforces $\\mathbf{J}\\dot{\\mathbf{q}}^+ = 0$ ($e = 0$):\n$$\\begin{bmatrix} m_1 & 0 & -1 \\\\ 0 & m_2 & 1 \\\\ -1 & 1 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}_1^+ \\\\ \\dot{x}_2^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} m_1\\dot{x}_1^- \\\\ m_2\\dot{x}_2^- \\\\ 0 \\end{bmatrix}$$",
          "stepNumber": 2,
          "badge": "Step 2 • Matrices & Constraints"
        },
        {
          "title": "Closed-Form Post-Snap Velocity $\\dot{x}^+$ and Cable Impulse $\\Lambda$",
          "goal": "Solve the $3\\times 3$ system for the shared post-snap velocity $\\dot{x}_1^+ = \\dot{x}_2^+ = \\dot{x}^+$ and the cable impulse $\\Lambda$.",
          "intuition": "Adding rows 1 and 2 eliminates $\\Lambda$ and expresses conservation of total horizontal momentum $(m_1 + m_2)\\dot{x}^+ = m_1\\dot{x}_1^- + m_2\\dot{x}_2^-$, while the impulse $\\Lambda = m_{\\text{red}}(\\dot{x}_2^- - \\dot{x}_1^-)$ is governed by the reduced mass $m_{\\text{red}} = \\frac{m_1 m_2}{m_1 + m_2}$!",
          "conceptLinks": [
            "impact-maps"
          ],
          "hint1": "From Row 3, $\\dot{x}_1^+ = \\dot{x}_2^+ = \\dot{x}^+$. Add Row 1 and Row 2 to solve for $\\dot{x}^+$.",
          "hint2": "Substitute $\\dot{x}_1^+ = \\dot{x}^+$ into $\\Lambda = m_1(\\dot{x}_1^+ - \\dot{x}_1^-)$ and simplify.",
          "checkpoint": {
            "question": "What are the post-snap common velocity $\\dot{x}^+$ and the cable tension impulse $\\Lambda$?",
            "options": [
              "$$\\dot{x}^+ = \\frac{m_1\\dot{x}_1^- - m_2\\dot{x}_2^-}{m_1 + m_2}, \\qquad \\Lambda = \\frac{m_1 m_2}{m_1 + m_2}(\\dot{x}_1^- - \\dot{x}_2^-)$$",
              "$$\\dot{x}^+ = \\frac{\\dot{x}_1^- + \\dot{x}_2^-}{2}, \\qquad \\Lambda = \\frac{m_1 + m_2}{2}(\\dot{x}_2^- - \\dot{x}_1^-)$$",
              "$$\\dot{x}^+ = \\frac{m_1\\dot{x}_1^- + m_2\\dot{x}_2^-}{m_1 + m_2}, \\qquad \\Lambda = (m_1 + m_2)(\\dot{x}_2^- - \\dot{x}_1^-)$$",
              "$$\\dot{x}^+ = \\frac{m_1\\dot{x}_1^- + m_2\\dot{x}_2^-}{m_1 + m_2}, \\qquad \\Lambda = \\frac{m_1 m_2}{m_1 + m_2}(\\dot{x}_2^- - \\dot{x}_1^-)$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: Total momentum is $m_1\\dot{x}_1^- + m_2\\dot{x}_2^-$, and since $\\dot{x}_2^- > \\dot{x}_1^-$, $\\Lambda > 0$ pulls cart 1 forward ($m_1\\dot{x}_1^+ = m_1\\dot{x}_1^- + \\Lambda$).",
              "Trap: Equal-weight averaging only holds if $m_1 = m_2$.",
              "Trap: Check the units and reduced mass factor $\\frac{m_1m_2}{m_1+m_2}$!",
              "Correct! Notice that the Delassus scalar is $G = \\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T = \\frac{1}{m_1} + \\frac{1}{m_2} = \\frac{m_1+m_2}{m_1m_2}$, so $G^{-1} = \\frac{m_1m_2}{m_1+m_2}$ is the exact reduced mass of the two-cart system!"
            ]
          },
          "derivation": "Adding Row 1 ($m_1\\dot{x}^+ - \\Lambda = m_1\\dot{x}_1^-$) and Row 2 ($m_2\\dot{x}^+ + \\Lambda = m_2\\dot{x}_2^-$) yields:\n$$(m_1 + m_2)\\dot{x}^+ = m_1\\dot{x}_1^- + m_2\\dot{x}_2^- \\implies \\dot{x}_1^+ = \\dot{x}_2^+ = \\dot{x}^+ = \\frac{m_1\\dot{x}_1^- + m_2\\dot{x}_2^-}{m_1 + m_2}$$\nSubstituting $\\dot{x}^+$ back into Row 1 gives the tensile impulse:\n$$\\Lambda = m_1(\\dot{x}^+ - \\dot{x}_1^-) = \\frac{m_1 m_2}{m_1 + m_2}(\\dot{x}_2^- - \\dot{x}_1^-) > 0$$",
          "stepNumber": 3,
          "badge": "Step 3 • Equations & Solution"
        },
        {
          "title": "Mechanical Energy Loss $\\Delta E = T^+ - T^-$ During the Snap",
          "goal": "Compute the exact kinetic energy change $\\Delta E = \\frac{1}{2}(m_1 + m_2)(\\dot{x}^+)^2 - \\left(\\frac{1}{2}m_1(\\dot{x}_1^-)^2 + \\frac{1}{2}m_2(\\dot{x}_2^-)^2\\right)$.",
          "intuition": "Even though total linear momentum is conserved during the cable snap, mechanical energy is NOT conserved in a plastic impact ($e = 0$)! Using the general formula $\\Delta E = -\\frac{1}{2}(1 - e^2)G^{-1}(\\dot{g}^-)^2$ with $e = 0$ and $G^{-1} = \\frac{m_1 m_2}{m_1 + m_2}$ gives the answer in one step!",
          "conceptLinks": [
            "impact-maps",
            "unilateral-hybrid-systems"
          ],
          "hint1": "Substitute $e = 0$, $G^{-1} = \\frac{m_1 m_2}{m_1 + m_2}$, and $\\dot{g}^- = \\dot{x}_2^- - \\dot{x}_1^-$ into $\\Delta E = -\\frac{1}{2}(1 - e^2)G^{-1}(\\dot{g}^-)^2$.",
          "hint2": "Verify that $\\Delta E < 0$ whenever $\\dot{x}_2^- \\ne \\dot{x}_1^-$.",
          "checkpoint": {
            "question": "What is the exact change in mechanical energy $\\Delta E = T^+ - T^-$ across the plastic cable snap?",
            "options": [
              "$$\\Delta E = -\\frac{1}{2}\\frac{m_1 m_2}{m_1 + m_2}(\\dot{x}_2^- - \\dot{x}_1^-)^2$$",
              "$$\\Delta E = -\\frac{1}{2}(m_1 + m_2)(\\dot{x}_2^- - \\dot{x}_1^-)^2$$",
              "$$\\Delta E = 0 \\quad (\\text{energy is conserved})$$",
              "$$\\Delta E = -\\frac{m_1 m_2}{m_1 + m_2}(\\dot{x}_2^- - \\dot{x}_1^-)^2$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! Exactly the kinetic energy of relative motion $\\frac{1}{2}m_{\\text{red}}(\\dot{x}_2^- - \\dot{x}_1^-)^2$ is dissipated when the cable snaps taut.",
              "Trap: Use the reduced mass $G^{-1} = \\frac{m_1 m_2}{m_1 + m_2}$, not the total mass $m_1 + m_2$.",
              "Trap: A plastic impact ($e = 0$) always dissipates kinetic energy whenever the pre-impact relative velocity $\\dot{g}^- \\ne 0$!",
              "Trap: Don't forget the factor of $\\frac{1}{2}$ in kinetic energy!"
            ]
          },
          "derivation": "Direct algebra (or the general restitution energy formula with $e = 0$ and $G^{-1} = \\frac{m_1 m_2}{m_1 + m_2}$) yields:\n$$\\Delta E = T^+ - T^- = \\frac{(m_1\\dot{x}_1^- + m_2\\dot{x}_2^-)^2}{2(m_1 + m_2)} - \\frac{1}{2}m_1(\\dot{x}_1^-)^2 - \\frac{1}{2}m_2(\\dot{x}_2^-)^2 = -\\frac{1}{2}\\frac{m_1 m_2}{m_1 + m_2}(\\dot{x}_2^- - \\dot{x}_1^-)^2 < 0$$",
          "stepNumber": 4,
          "badge": "Step 4 • Physical Analysis & Synthesis"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Example Exam Question 9 (Slack Tow-Cable Snapping Taut)",
        "items": [
          {
            "label": "(1–2) Unilateral Cable Jacobian $\\mathbf{J}$ & $3\\times 3$ Plastic Impact Matrix ($e = 0$)",
            "math": "$$g(x_1,x_2) = x_2 - x_1 - \\ell_0 \\le 0, \\quad \\mathbf{J} = \\begin{bmatrix} -1 & 1 \\end{bmatrix}, \\quad \\begin{bmatrix} m_1 & 0 & -1 \\\\ 0 & m_2 & 1 \\\\ -1 & 1 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}_1^+ \\\\ \\dot{x}_2^+ \\\\ \\Lambda \\end{bmatrix} = \\begin{bmatrix} m_1\\dot{x}_1^- \\\\ m_2\\dot{x}_2^- \\\\ 0 \\end{bmatrix}$$"
          },
          {
            "label": "(3) Post-Snap Common Velocity $\\dot{x}^+$ & Tensile Cable Impulse $\\Lambda$",
            "math": "$$\\dot{x}_1^+ = \\dot{x}_2^+ = \\frac{m_1\\dot{x}_1^- + m_2\\dot{x}_2^-}{m_1 + m_2}, \\qquad \\Lambda = \\frac{m_1 m_2}{m_1 + m_2}(\\dot{x}_2^- - \\dot{x}_1^-)$$"
          },
          {
            "label": "(4) Mechanical Energy Loss $\\Delta E = T^+ - T^-$",
            "math": "$$\\Delta E = -\\frac{1}{2}\\frac{m_1 m_2}{m_1 + m_2}(\\dot{x}_2^- - \\dot{x}_1^-)^2$$"
          }
        ]
      },
      "lectureRefs": [
        14,
        20,
        21
      ],
      "estimatedMinutes": 16
    },
    {
      "id": "example-10",
      "code": "Example Exam • Question 10",
      "shortTitle": "Pendulum Bob Hitting Inclined Wall",
      "title": "2D Cart-Pendulum Payload Striking an Inclined Rigid Buffer Wall with Restitution e",
      "subtitle": "Oblique Normal Contact Gap g_N(x, theta) >= 0 — 1x2 Normal Jacobian J_N, 3x3 Impact Map & Vertical Limit",
      "category": "Contact & Impacts",
      "badgeClass": "badge-amber",
      "difficulty": "Exam-Level (Oblique Multibody Impact)",
      "estimatedTime": "20 mins",
      "matchedLectures": [
        14,
        20,
        21
      ],
      "svgDiagram": "<svg viewBox=\"0 0 500 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"problem-svg\">\n      <defs>\n        <marker id=\"arr-ex10-g\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n          <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#059669\"/>\n        </marker>\n      </defs>\n      <rect width=\"500\" height=\"280\" rx=\"12\" fill=\"#f8fafc\"/>\n      <!-- Top rail -->\n      <line x1=\"40\" y1=\"55\" x2=\"460\" y2=\"55\" stroke=\"#475569\" stroke-width=\"4\"/>\n      <rect x=\"200\" y=\"36\" width=\"76\" height=\"36\" rx=\"6\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2.5\"/>\n      <text x=\"220\" y=\"59\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\">M (x)</text>\n      <!-- Pendulum rod & bob -->\n      <line x1=\"238\" y1=\"55\" x2=\"238\" y2=\"225\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n      <line x1=\"238\" y1=\"55\" x2=\"178\" y2=\"195\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n      <circle cx=\"178\" cy=\"195\" r=\"15\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2.5\"/>\n      <text x=\"172\" y=\"199\" font-size=\"12\" font-weight=\"700\" fill=\"#78350f\">m</text>\n      <text x=\"205\" y=\"135\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">l, θ</text>\n      <!-- Inclined buffer wall on the left -->\n      <line x1=\"115\" y1=\"110\" x2=\"215\" y2=\"255\" stroke=\"#334155\" stroke-width=\"5\"/>\n      <!-- Outward unit normal n = [cos alpha, sin alpha]^T -->\n      <line x1=\"178\" y1=\"195\" x2=\"232\" y2=\"158\" stroke=\"#059669\" stroke-width=\"2.5\" marker-end=\"url(#arr-ex10-g)\"/>\n      <text x=\"238\" y=\"160\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\">n = [cos α, sin α]^T</text>\n      <text x=\"62\" y=\"242\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\">Inclined Buffer Wall (restitution e)</text>\n    </svg>",
      "prompt": "A cart of mass $M$ translates horizontally along $y = 0$ with coordinate $x(t)$ and carries a pendulum of length $\\ell$ and point mass $m$ at angle $\\theta(t)$ measured counter-clockwise from the downward vertical, so $\\mathbf{r}_b(x,\\theta) = [x + \\ell\\sin\\theta,\\; -\\ell\\cos\\theta]^T$. A rigid, frictionless buffer wall is oriented with outward unit normal vector $\\hat{\\mathbf{n}} = [\\cos\\alpha,\\; \\sin\\alpha]^T$ pointing into the workspace, defining the unilateral normal gap function:\n$$g_N(x,\\theta) = \\hat{\\mathbf{n}}\\cdot\\mathbf{r}_b - d_w = (x + \\ell\\sin\\theta)\\cos\\alpha - \\ell\\cos\\theta\\sin\\alpha - d_w = x\\cos\\alpha + \\ell\\sin(\\theta - \\alpha) - d_w \\ge 0$$\nAt the instant of impact ($g_N = 0$), the system has pre-impact velocity $\\dot{\\mathbf{q}}^- = [\\dot{x}^-, \\dot{\\theta}^-]^T$ with $\\dot{g}_N^- < 0$, and the normal coefficient of restitution is $e \\in [0, 1]$.",
      "goalStatement": "Derive (1) the $1\\times 2$ normal contact Jacobian $\\mathbf{J}_N(\\theta) = \\frac{\\partial g_N}{\\partial\\mathbf{q}}$ using the trig identity $\\ell\\sin(\\theta - \\alpha)$, (2) the $3\\times 3$ restitution impact linear system for $[\\dot{x}^+, \\dot{\\theta}^+, \\Lambda_N]^T$, (3) the explicit Delassus scalar $G = \\mathbf{J}_N\\mathbf{M}^{-1}\\mathbf{J}_N^T$ at the vertical hanging posture $\\theta = 0$, and (4) the closed-form normal impulse $\\Lambda_N$ and cart velocity jump $\\dot{x}^+ - \\dot{x}^-$ at $\\theta = 0$.",
      "parameters": [
        {
          "symbol": "$M, m, \\ell$",
          "desc": "Cart mass, pendulum bob mass, and pendulum rod length"
        },
        {
          "symbol": "$\\hat{\\mathbf{n}} = [\\cos\\alpha, \\sin\\alpha]^T$",
          "desc": "Unit normal vector of the inclined rigid buffer wall"
        },
        {
          "symbol": "$\\mathbf{q} = [x, \\theta]^T$",
          "desc": "Minimal generalized coordinates (cart position & pendulum swing angle)"
        },
        {
          "symbol": "$e, \\Lambda_N$",
          "desc": "Coefficient of restitution & normal contact impulse along $\\hat{\\mathbf{n}}$"
        }
      ],
      "steps": [
        {
          "title": "Oblique Normal Gap $g_N(x,\\theta)$ and $1\\times 2$ Contact Jacobian $\\mathbf{J}_N(\\theta)$",
          "goal": "Differentiate $g_N(x,\\theta) = x\\cos\\alpha + \\ell\\sin(\\theta - \\alpha) - d_w \\ge 0$ with respect to $\\mathbf{q} = [x, \\theta]^T$ to find $\\mathbf{J}_N(\\theta)$.",
          "intuition": "Notice how combining $\\ell\\sin\\theta\\cos\\alpha - \\ell\\cos\\theta\\sin\\alpha = \\ell\\sin(\\theta - \\alpha)$ makes differentiating with respect to $\\theta$ effortless: $\\frac{\\partial g_N}{\\partial\\theta} = \\ell\\cos(\\theta - \\alpha)$, which is the projection of the bob's tangential velocity direction onto the wall normal $\\hat{\\mathbf{n}}$!",
          "conceptLinks": [
            "holonomic-constraints",
            "constraint-jacobian",
            "impact-maps"
          ],
          "hint1": "Compute $\\frac{\\partial g_N}{\\partial x}$ and $\\frac{\\partial g_N}{\\partial\\theta}$ from $g_N(x,\\theta) = x\\cos\\alpha + \\ell\\sin(\\theta - \\alpha) - d_w$.",
          "hint2": "Verify that when $\\alpha = 0$ (vertical wall), $\\mathbf{J}_N(\\theta)$ reduces to $[1,\\; \\ell\\cos\\theta]$.",
          "checkpoint": {
            "question": "What is the $1\\times 2$ normal contact Jacobian $\\mathbf{J}_N(\\theta) = \\left[\\frac{\\partial g_N}{\\partial x},\\; \\frac{\\partial g_N}{\\partial\\theta}\\right]$?",
            "options": [
              "$$\\mathbf{J}_N(\\theta) = \\begin{bmatrix} \\cos\\alpha & -\\ell\\sin(\\theta - \\alpha) \\end{bmatrix}$$",
              "$$\\mathbf{J}_N(\\theta) = \\begin{bmatrix} \\sin\\alpha & \\ell\\sin(\\theta - \\alpha) \\end{bmatrix}$$",
              "$$\\mathbf{J}_N(\\theta) = \\begin{bmatrix} 1 & \\ell\\cos\\theta \\end{bmatrix}$$",
              "$$\\mathbf{J}_N(\\theta) = \\begin{bmatrix} \\cos\\alpha & \\ell\\cos(\\theta - \\alpha) \\end{bmatrix}$$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Trap: $\\frac{d}{d\\theta}\\sin(\\theta - \\alpha) = +\\cos(\\theta - \\alpha)$.",
              "Trap: The coefficient of $x$ in $g_N$ is $\\cos\\alpha$, and the derivative of $\\sin(\\theta - \\alpha)$ with respect to $\\theta$ is $\\cos(\\theta - \\alpha)$.",
              "Trap: $[1, \\ell\\cos\\theta]$ is only for a vertical wall ($alpha = 0$).",
              "Correct! $\\mathbf{J}_N(\\theta) = [\\cos\\alpha,\\; \\ell\\cos(\\theta - \\alpha)]$, and the pre-impact normal approach speed is $\\dot{g}_N^- = \\dot{x}^-\\cos\\alpha + \\ell\\dot{\\theta}^-\\cos(\\theta - \\alpha) < 0$."
            ]
          },
          "derivation": "Differentiating $g_N(x,\\theta) = x\\cos\\alpha + \\ell\\sin(\\theta - \\alpha) - d_w$ with respect to $\\mathbf{q} = [x, \\theta]^T$:\n$$\\mathbf{J}_N(\\theta) = \\frac{\\partial g_N}{\\partial\\mathbf{q}} = \\begin{bmatrix} \\cos\\alpha & \\ell\\cos(\\theta - \\alpha) \\end{bmatrix}$$",
          "stepNumber": 1,
          "badge": "Step 1 • Kinematics & Geometry"
        },
        {
          "title": "$3\\times 3$ Restitution Impact Matrix System",
          "goal": "Combine the cart-pendulum mass matrix $\\mathbf{M}(\\theta) = \\begin{bmatrix} M+m & m\\ell\\cos\\theta \\\\ m\\ell\\cos\\theta & m\\ell^2 \\end{bmatrix}$ and $\\mathbf{J}_N(\\theta)$ into the $3\\times 3$ restitution impact system.",
          "intuition": "Using the convention $\\mathbf{M}(\\dot{\\mathbf{q}}^+ - \\dot{\\mathbf{q}}^-) = \\mathbf{J}_N^T\\Lambda_N$ where $\\Lambda_N > 0$ pushes in the $+\\hat{\\mathbf{n}}$ direction (increasing $g_N$), we place $-\\mathbf{J}_N^T$ in column 3 and $\\mathbf{J}_N\\dot{\\mathbf{q}}^+ = -e\\mathbf{J}_N\\dot{\\mathbf{q}}^-$ in row 3!",
          "conceptLinks": [
            "impact-maps"
          ],
          "hint1": "Write $\\mathbf{M}(\\theta)\\dot{\\mathbf{q}}^+ - \\mathbf{J}_N(\\theta)^T\\Lambda_N = \\mathbf{M}(\\theta)\\dot{\\mathbf{q}}^-$ as the first two rows.",
          "hint2": "Write $\\mathbf{J}_N(\\theta)\\dot{\\mathbf{q}}^+ = -e\\dot{g}_N^-$ as the third row, where $\\dot{g}_N^- = \\dot{x}^-\\cos\\alpha + \\ell\\dot{\\theta}^-\\cos(\\theta - \\alpha)$.",
          "checkpoint": {
            "question": "Which $3\\times 3$ linear system solves for $[\\dot{x}^+, \\dot{\\theta}^+, \\Lambda_N]^T$ across the oblique impact?",
            "options": [
              "$$\\begin{bmatrix} M+m & m\\ell\\cos\\theta & -\\cos\\alpha \\\\ m\\ell\\cos\\theta & m\\ell^2 & -\\ell\\cos(\\theta-\\alpha) \\\\ \\cos\\alpha & \\ell\\cos(\\theta-\\alpha) & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} (M+m)\\dot{x}^- + m\\ell\\cos\\theta\\,\\dot{\\theta}^- \\\\ m\\ell\\cos\\theta\\,\\dot{x}^- + m\\ell^2\\dot{\\theta}^- \\\\ -e\\dot{g}_N^- \\end{bmatrix}$$",
              "$$\\begin{bmatrix} M+m & 0 & -\\cos\\alpha \\\\ 0 & m\\ell^2 & -\\ell\\cos(\\theta-\\alpha) \\\\ \\cos\\alpha & \\ell\\cos(\\theta-\\alpha) & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} (M+m)\\dot{x}^- \\\\ m\\ell^2\\dot{\\theta}^- \\\\ -e\\dot{g}_N^- \\end{bmatrix}$$",
              "$$\\begin{bmatrix} M+m & m\\ell\\cos\\theta & -\\cos\\alpha \\\\ m\\ell\\cos\\theta & m\\ell^2 & -\\ell\\cos(\\theta-\\alpha) \\\\ \\cos\\alpha & \\ell\\cos(\\theta-\\alpha) & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\\\ -e\\dot{g}_N^- \\end{bmatrix}$$",
              "$$\\begin{bmatrix} M+m & m\\ell\\cos\\theta & -\\cos\\alpha \\\\ m\\ell\\cos\\theta & m\\ell^2 & -\\ell\\cos(\\theta-\\alpha) \\\\ \\cos\\alpha & \\ell\\cos(\\theta-\\alpha) & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} (M+m)\\dot{x}^- + m\\ell\\cos\\theta\\,\\dot{\\theta}^- \\\\ m\\ell\\cos\\theta\\,\\dot{x}^- + m\\ell^2\\dot{\\theta}^- \\\\ +e\\dot{g}_N^- \\end{bmatrix}$$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! This $3\\times 3$ linear system captures the full inertial coupling $m\\ell\\cos\\theta$ between the cart and pendulum together with the oblique normal restitution law.",
              "Trap: Never drop the off-diagonal inertial coupling $m\\ell\\cos\\theta$ in $\\mathbf{M}(\\theta)$!",
              "Trap: You must include the pre-impact generalized momentum $\\mathbf{M}(\\theta)\\dot{\\mathbf{q}}^-$ on the right-hand side!",
              "Trap: Newton's restitution law has a minus sign: $\\dot{g}_N^+ = -e\\dot{g}_N^- > 0$."
            ]
          },
          "derivation": "Combining $\\mathbf{M}(\\theta)\\dot{\\mathbf{q}}^+ - \\mathbf{J}_N(\\theta)^T\\Lambda_N = \\mathbf{M}(\\theta)\\dot{\\mathbf{q}}^-$ with $\\mathbf{J}_N(\\theta)\\dot{\\mathbf{q}}^+ = -e\\dot{g}_N^-$ gives:\n$$\\begin{bmatrix} M+m & m\\ell\\cos\\theta & -\\cos\\alpha \\\\ m\\ell\\cos\\theta & m\\ell^2 & -\\ell\\cos(\\theta-\\alpha) \\\\ \\cos\\alpha & \\ell\\cos(\\theta-\\alpha) & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} (M+m)\\dot{x}^- + m\\ell\\cos\\theta\\,\\dot{\\theta}^- \\\\ m\\ell\\cos\\theta\\,\\dot{x}^- + m\\ell^2\\dot{\\theta}^- \\\\ -e(\\dot{x}^-\\cos\\alpha + \\ell\\dot{\\theta}^-\\cos(\\theta-\\alpha)) \\end{bmatrix}$$",
          "stepNumber": 2,
          "badge": "Step 2 • Matrices & Constraints"
        },
        {
          "title": "Delassus Scalar $G = \\mathbf{J}_N\\mathbf{M}^{-1}\\mathbf{J}_N^T$ at Vertical Posture ($\\theta = 0$)",
          "goal": "Evaluate $\\mathbf{M}(0)^{-1}$ and $\\mathbf{J}_N(0) = [\\cos\\alpha,\\; \\ell\\cos\\alpha]$ at the vertical posture $\\theta = 0$ to compute $G = \\mathbf{J}_N(0)\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T$.",
          "intuition": "Watch the magic simplification when $\\theta = 0$: $\\mathbf{J}_N(0) = \\cos\\alpha\\,[1,\\; \\ell]$. Because $[1, \\ell]\\dot{\\mathbf{q}} = \\dot{x} + \\ell\\dot{\\theta}$ is the horizontal velocity of the bob, and at $\\theta = 0$ the horizontal bob dynamics decouples from the cart (since the vertical rod cannot transmit horizontal impulse to the cart!), the effective horizontal mass of the bob is simply $m$!",
          "conceptLinks": [
            "impact-maps"
          ],
          "hint1": "At $\\theta = 0$, $\\mathbf{M}(0) = \\begin{bmatrix} M+m & m\\ell \\\\ m\\ell & m\\ell^2 \\end{bmatrix}$ has determinant $\\det\\mathbf{M}(0) = (M+m)m\\ell^2 - m^2\\ell^2 = Mm\\ell^2$.",
          "hint2": "Compute $\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T = \\frac{\\cos\\alpha}{Mm\\ell^2}\\begin{bmatrix} m\\ell^2 & -m\\ell \\\\ -m\\ell & M+m \\end{bmatrix} \\begin{bmatrix} 1 \\\\ \\ell \\end{bmatrix}$. Look at the first entry of the result!",
          "checkpoint": {
            "question": "At $\\theta = 0$, what are $\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T$ and the Delassus scalar $G = \\mathbf{J}_N(0)\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T$?",
            "options": [
              "$$\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T = \\begin{bmatrix} \\frac{\\cos\\alpha}{M+m} \\\\ \\frac{\\cos\\alpha}{m\\ell} \\end{bmatrix}, \\qquad G = \\frac{\\cos^2\\alpha}{M+m}$$",
              "$$\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T = \\begin{bmatrix} 0 \\\\ \\frac{\\cos\\alpha}{m\\ell} \\end{bmatrix}, \\qquad G = \\frac{\\cos^2\\alpha}{m}$$",
              "$$\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T = \\begin{bmatrix} 0 \\\\ \\frac{\\cos\\alpha}{m\\ell} \\end{bmatrix}, \\qquad G = \\frac{1}{m}$$",
              "$$\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T = \\begin{bmatrix} \\frac{\\cos\\alpha}{M} \\\\ \\frac{\\cos\\alpha}{m\\ell} \\end{bmatrix}, \\qquad G = \\left(\\frac{1}{M} + \\frac{1}{m}\\right)\\cos^2\\alpha$$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Trap: Multiply the first row of $\\mathbf{M}(0)^{-1}$ by $[1, \\ell]^T$: $m\\ell^2(1) - m\\ell(\\ell) = 0$! The cart receives zero impulse when $\\theta = 0$.",
              "Correct! Because $m\\ell^2(1) - m\\ell(\\ell) = 0$ and $-m\\ell(1) + (M+m)\\ell = M\\ell$, we get $\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T = \\begin{bmatrix} 0 \\\\ \\frac{\\cos\\alpha}{m\\ell} \\end{bmatrix}$ and $G = \\frac{\\cos^2\\alpha}{m}$.",
              "Trap: Don't forget the second factor of $\\mathbf{J}_N(0) = [\\cos\\alpha, \\ell\\cos\\alpha]$ when multiplying $\\mathbf{J}_N(0)\\left(\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T\\right) = \\frac{\\cos^2\\alpha}{m}$.",
              "Trap: Check the matrix multiplication of $\\mathbf{M}(0)^{-1}$ with $[1, \\ell]^T$."
            ]
          },
          "derivation": "At $\\theta = 0$, $\\mathbf{M}(0)^{-1} = \\frac{1}{Mm\\ell^2}\\begin{bmatrix} m\\ell^2 & -m\\ell \\\\ -m\\ell & M+m \\end{bmatrix}$ and $\\mathbf{J}_N(0)^T = \\cos\\alpha\\begin{bmatrix} 1 \\\\ \\ell \\end{bmatrix}$. Multiplying gives:\n$$\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T = \\frac{\\cos\\alpha}{Mm\\ell^2}\\begin{bmatrix} m\\ell^2 - m\\ell^2 \\\\ -m\\ell + (M+m)\\ell \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ \\frac{\\cos\\alpha}{m\\ell} \\end{bmatrix}$$\nPre-multiplying by $\\mathbf{J}_N(0) = \\begin{bmatrix} \\cos\\alpha & \\ell\\cos\\alpha \\end{bmatrix}$ yields:\n$$G = \\mathbf{J}_N(0)\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T = \\frac{\\cos^2\\alpha}{m}$$",
          "stepNumber": 3,
          "badge": "Step 3 • Equations & Solution"
        },
        {
          "title": "Closed-Form Impulse $\\Lambda_N$ and Velocity Jumps at $\\theta = 0$",
          "goal": "Use $\\Lambda_N = -(1 + e)G^{-1}\\dot{g}_N^-$ and $\\dot{\\mathbf{q}}^+ - \\dot{\\mathbf{q}}^- = \\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T\\Lambda_N$ to find $\\Lambda_N$, $\\dot{x}^+$, and $\\dot{\\theta}^+$ at $\\theta = 0$.",
          "intuition": "Because the top entry of $\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T$ is zero, the cart velocity is completely unchanged ($dot{x}^+ = dot{x}^-$) during an impact at $\\theta = 0$, while the bob's horizontal velocity $(\\dot{x} + \\ell\\dot{\\theta})$ reverses with restitution $e$!",
          "conceptLinks": [
            "impact-maps"
          ],
          "hint1": "Substitute $G^{-1} = \\frac{m}{\\cos^2\\alpha}$ and $\\dot{g}_N^- = (\\dot{x}^- + \\ell\\dot{\\theta}^-)\\cos\\alpha$ into $\\Lambda_N = -(1 + e)G^{-1}\\dot{g}_N^-$.",
          "hint2": "Substitute $\\Lambda_N$ into $\\begin{bmatrix} \\dot{x}^+ - \\dot{x}^- \\\\ \\dot{\\theta}^+ - \\dot{\\theta}^- \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ \\frac{\\cos\\alpha}{m\\ell} \\end{bmatrix}\\Lambda_N$.",
          "checkpoint": {
            "question": "At $\\theta = 0$, what are the normal impulse $\\Lambda_N$ and post-impact velocities $\\dot{x}^+, \\dot{\\theta}^+$?",
            "options": [
              "$$\\Lambda_N = -\\frac{(1 + e)(M+m)(\\dot{x}^- + \\ell\\dot{\\theta}^-)}{\\cos\\alpha}, \\qquad \\dot{x}^+ = -e\\dot{x}^-, \\qquad \\dot{\\theta}^+ = -e\\dot{\\theta}^-$$",
              "$$\\Lambda_N = -(1 + e)m(\\dot{x}^- + \\ell\\dot{\\theta}^-)\\cos\\alpha, \\qquad \\dot{x}^+ = \\dot{x}^-, \\qquad \\dot{\\theta}^+ = -e\\dot{\\theta}^-$$",
              "$$\\Lambda_N = -\\frac{(1 + e)m(\\dot{x}^- + \\ell\\dot{\\theta}^-)}{\\cos\\alpha}, \\qquad \\dot{x}^+ = \\dot{x}^-, \\qquad \\dot{\\theta}^+ = \\dot{\\theta}^- - \\frac{1 + e}{\\ell}(\\dot{x}^- + \\ell\\dot{\\theta}^-)$$",
              "$$\\Lambda_N = -\\frac{(1 + e)m\\ell\\dot{\\theta}^-}{\\cos\\alpha}, \\qquad \\dot{x}^+ = \\dot{x}^-, \\qquad \\dot{\\theta}^+ = -e\\dot{\\theta}^-$$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Trap: At $\\theta = 0$, the vertical rod cannot transmit horizontal impulse to the cart, so $\\dot{x}^+ = \\dot{x}^-$.",
              "Trap: Since $G = \\frac{\\cos^2\\alpha}{m}$ and $\\dot{g}_N^- = (\\dot{x}^- + \\ell\\dot{\\theta}^-)\\cos\\alpha$, the ratio $\\dot{g}_N^- / G$ has $\\cos\\alpha$ in the denominator.",
              "Correct! Why does $\\cos\\alpha$ appear in the denominator of $\\Lambda_N$? Because at $\\theta = 0$ the bob can only accelerate horizontally (perpendicular to the vertical inextensible rod), so a steeper ramp normal $\\hat{\\mathbf{n}}$ requires a larger normal impulse $\\Lambda_N$ to produce the required horizontal momentum change!",
              "Trap: Don't drop $\\dot{x}^-$ in the bob's pre-impact horizontal velocity $\\dot{x}^- + \\ell\\dot{\\theta}^-$."
            ]
          },
          "derivation": "At $\\theta = 0$, $\\dot{g}_N^- = (\\dot{x}^- + \\ell\\dot{\\theta}^-)\\cos\\alpha < 0$ and $G^{-1} = \\frac{m}{\\cos^2\\alpha}$. Thus:\n$$\\Lambda_N = -(1 + e)G^{-1}\\dot{g}_N^- = -\\frac{(1 + e)m(\\dot{x}^- + \\ell\\dot{\\theta}^-)}{\\cos\\alpha} > 0$$\nThe velocity jumps are:\n$$\\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{\\theta}^+ \\end{bmatrix} = \\begin{bmatrix} \\dot{x}^- \\\\ \\dot{\\theta}^- \\end{bmatrix} + \\begin{bmatrix} 0 \\\\ \\frac{\\cos\\alpha}{m\\ell} \\end{bmatrix}\\Lambda_N = \\begin{bmatrix} \\dot{x}^- \\\\ \\dot{\\theta}^- - \\frac{1 + e}{\\ell}(\\dot{x}^- + \\ell\\dot{\\theta}^-) \\end{bmatrix}$$",
          "stepNumber": 4,
          "badge": "Step 4 • Physical Analysis & Synthesis"
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Example Exam Question 10 (Pendulum Hitting Inclined Wall)",
        "items": [
          {
            "label": "(1–2) Normal Jacobian $\\mathbf{J}_N(\\theta)$ & $3\\times 3$ Restitution Impact Matrix",
            "math": "$$\\mathbf{J}_N(\\theta) = \\begin{bmatrix} \\cos\\alpha & \\ell\\cos(\\theta - \\alpha) \\end{bmatrix}, \\qquad \\begin{bmatrix} M+m & m\\ell\\cos\\theta & -\\cos\\alpha \\\\ m\\ell\\cos\\theta & m\\ell^2 & -\\ell\\cos(\\theta-\\alpha) \\\\ \\cos\\alpha & \\ell\\cos(\\theta-\\alpha) & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{\\theta}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} \\mathbf{M}(\\theta)\\dot{\\mathbf{q}}^- \\\\ -e\\dot{g}_N^- \\end{bmatrix}$$"
          },
          {
            "label": "(3) Delassus Scalar $G$ & Inverse Inertia Projection at $\\theta = 0$",
            "math": "$$\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T = \\begin{bmatrix} 0 \\\\ \\frac{\\cos\\alpha}{m\\ell} \\end{bmatrix}, \\qquad G = \\mathbf{J}_N(0)\\mathbf{M}(0)^{-1}\\mathbf{J}_N(0)^T = \\frac{\\cos^2\\alpha}{m}$$"
          },
          {
            "label": "(4) Normal Impulse $\\Lambda_N$ & Post-Impact Velocities at $\\theta = 0$",
            "math": "$$\\Lambda_N = -\\frac{(1 + e)m(\\dot{x}^- + \\ell\\dot{\\theta}^-)}{\\cos\\alpha}, \\qquad \\dot{x}^+ = \\dot{x}^-, \\qquad \\dot{\\theta}^+ = \\dot{\\theta}^- - \\frac{1 + e}{\\ell}(\\dot{x}^- + \\ell\\dot{\\theta}^-)$$"
          }
        ]
      },
      "lectureRefs": [
        14,
        20,
        21
      ],
      "estimatedMinutes": 20
    },
    {
      "id": "practice-e-1",
      "code": "PRACTICE EXAM E • PROBLEM 1",
      "shortTitle": "Two-Mass Ladder on Wall & Floor (DAE & Baumgarte)",
      "title": "Two-Mass Ladder Sliding on Frictionless Floor and Wall (Holonomic Constraint & Baumgarte)",
      "subtitle": "2-DOF Maximal Coordinates, Constraint Jacobian J, Block Saddle-Point DAE, Baumgarte Tuning & Internal Compression",
      "category": "Constrained Systems",
      "badgeClass": "badge-purple",
      "difficulty": "Advanced",
      "estimatedTime": "25 mins",
      "estimatedMinutes": 25,
      "matchedLectures": "Lec 17–19",
      "lectureRefs": [
        {
          "code": "Lec 17",
          "title": "Holonomic Constraints & DAE Formulation",
          "time": "18:20"
        },
        {
          "code": "Lec 18",
          "title": "Lagrange Multipliers & Constraint Forces",
          "time": "22:15"
        },
        {
          "code": "Lec 19",
          "title": "Constraint Drift & Baumgarte Stabilization",
          "time": "28:40"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 460 300\" width=\"100%\" height=\"230\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <pattern id=\"hatch-wall\" width=\"10\" height=\"10\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"10\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" />\n    </pattern>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#2563eb\" />\n    </marker>\n    <marker id=\"arrow-red\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#dc2626\" />\n    </marker>\n  </defs>\n\n  <!-- Wall & Floor hatching -->\n  <rect x=\"20\" y=\"20\" width=\"40\" height=\"230\" fill=\"url(#hatch-wall)\" />\n  <line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"250\" stroke=\"#475569\" stroke-width=\"3\" />\n  <rect x=\"20\" y=\"250\" width=\"420\" height=\"35\" fill=\"url(#hatch-wall)\" />\n  <line x1=\"20\" y1=\"250\" x2=\"440\" y2=\"250\" stroke=\"#475569\" stroke-width=\"3\" />\n\n  <!-- Origin label -->\n  <circle cx=\"60\" cy=\"250\" r=\"4\" fill=\"#0f172a\" />\n  <text x=\"44\" y=\"266\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">(0,0)</text>\n\n  <!-- Ladder Rod -->\n  <line x1=\"60\" y1=\"70\" x2=\"340\" y2=\"250\" stroke=\"#334155\" stroke-width=\"6\" stroke-linecap=\"round\" />\n  <text x=\"210\" y=\"150\" font-size=\"12\" font-weight=\"800\" fill=\"#2563eb\" transform=\"rotate(-32.7 210 150)\">Length ℓ = 10 m</text>\n\n  <!-- Mass m2 on Wall (y2) -->\n  <circle cx=\"60\" cy=\"70\" r=\"14\" fill=\"#6366f1\" stroke=\"#312e81\" stroke-width=\"2.5\" />\n  <text x=\"52\" y=\"74\" font-size=\"11\" font-weight=\"800\" fill=\"#ffffff\">m₂</text>\n  <!-- Roller wheels on wall -->\n  <circle cx=\"43\" cy=\"62\" r=\"4\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <circle cx=\"43\" cy=\"78\" r=\"4\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <line x1=\"80\" y1=\"70\" x2=\"110\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\" />\n  <text x=\"115\" y=\"74\" font-size=\"11\" font-weight=\"700\" fill=\"#6366f1\">y₂ (Wall)</text>\n  <!-- Gravity on m2 -->\n  <line x1=\"60\" y1=\"90\" x2=\"60\" y2=\"125\" stroke=\"#dc2626\" stroke-width=\"2\" marker-end=\"url(#arrow-red)\" />\n  <text x=\"68\" y=\"115\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">m₂g</text>\n\n  <!-- Mass m1 on Floor (x1) -->\n  <circle cx=\"340\" cy=\"250\" r=\"14\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"2.5\" />\n  <text x=\"332\" y=\"254\" font-size=\"11\" font-weight=\"800\" fill=\"#ffffff\">m₁</text>\n  <!-- Roller wheels on floor -->\n  <circle cx=\"332\" cy=\"267\" r=\"4\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <circle cx=\"348\" cy=\"267\" r=\"4\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <line x1=\"340\" y1=\"230\" x2=\"340\" y2=\"200\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\" />\n  <text x=\"325\" y=\"195\" font-size=\"11\" font-weight=\"700\" fill=\"#3b82f6\">x₁ (Floor)</text>\n\n  <!-- Constraint Formula Box -->\n  <rect x=\"230\" y=\"30\" width=\"200\" height=\"58\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" />\n  <text x=\"240\" y=\"50\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">Holonomic Constraint:</text>\n  <text x=\"240\" y=\"68\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\">g(q) = x₁² + y₂² - ℓ² = 0</text>\n  <text x=\"240\" y=\"81\" font-size=\"9\" fill=\"#64748b\">m₁ = 1 kg, m₂ = 1 kg, ℓ = 10 m</text>\n</svg>",
      "prompt": "A rigid ladder of length $\\ell = 10\\text{ m}$ connects mass $m_1 = 1\\text{ kg}$ on a frictionless horizontal floor and mass $m_2 = 1\\text{ kg}$ on a frictionless vertical wall. Using unconstrained 2D coordinates $\\mathbf{q} = [x_1, y_2]^T$, formulate the holonomic constraint $g(\\mathbf{q})=0$, derive the constraint Jacobian $\\mathbf{J}$, assemble the $3\\times 3$ block saddle-point DAE system, tune a critically damped Baumgarte stabilization law with $\\omega_n = 10\\text{ rad/s}$, and compute the Lagrange multiplier $\\lambda$ and internal rod compression at the kinematic state $x_1 = 8\\text{ m}, y_2 = 6\\text{ m}, \\dot{x}_1 = 3\\text{ m/s}, \\dot{y}_2 = -4\\text{ m/s}$.",
      "goalStatement": "Formulate the holonomic constraint $g(\\mathbf{q})=0$, derive $\\mathbf{J}$ and $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$, assemble the $3\\times 3$ saddle-point DAE, implement Baumgarte stabilization, and calculate the exact Lagrange multiplier $\\lambda$ and rod compression force.",
      "parameters": [
        {
          "symbol": "m_1",
          "desc": "Mass sliding on frictionless horizontal floor (1 kg)"
        },
        {
          "symbol": "m_2",
          "desc": "Mass sliding on frictionless vertical wall (1 kg)"
        },
        {
          "symbol": "\\ell",
          "desc": "Rigid ladder connecting rod length (10 m)"
        },
        {
          "symbol": "g",
          "desc": "Gravitational acceleration downward along -y (9.81 m/s²)"
        },
        {
          "symbol": "\\omega_n, \\zeta",
          "desc": "Baumgarte natural frequency (10 rad/s) and critical damping ratio (ζ = 1.0)"
        }
      ],
      "steps": [
        {
          "stepNumber": 1,
          "badge": "STEP 1 OF 4 • CONSTRAINT KINEMATICS",
          "title": "Holonomic Constraint Equation and Constraint Jacobian $\\mathbf{J}$",
          "goal": "Write the algebraic constraint $g(\\mathbf{q}) = 0$ fixing the rod length and differentiate with respect to time to extract the constraint Jacobian $\\mathbf{J}$ and acceleration term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$.",
          "intuition": "The distance between $(x_1, 0)$ and $(0, y_2)$ is fixed at $\\ell = 10\\text{ m}$. Applying the Pythagorean theorem yields $x_1^2 + y_2^2 = \\ell^2$. Differentiating once gives the Pfaffian velocity constraint $\\mathbf{J}\\dot{\\mathbf{q}} = 0$, and differentiating again reveals the centripetal acceleration term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 2(\\dot{x}_1^2 + \\dot{y}_2^2)$ required on the right-hand side of the DAE.",
          "conceptLinks": [
            "holonomic-constraints",
            "constraint-jacobian"
          ],
          "hint1": "Write $g(\\mathbf{q}) = x_1^2 + y_2^2 - \\ell^2 = 0$. The Jacobian is the gradient $\\mathbf{J} = [\\partial g/\\partial x_1, \\partial g/\\partial y_2]$.",
          "hint2": "Differentiating $\\dot{g} = 2x_1\\dot{x}_1 + 2y_2\\dot{y}_2$ with respect to time gives $\\ddot{g} = 2x_1\\ddot{x}_1 + 2y_2\\ddot{y}_2 + 2\\dot{x}_1^2 + 2\\dot{y}_2^2 = \\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$.",
          "checkpoint": {
            "question": "For coordinates $\\mathbf{q} = [x_1, y_2]^T$ and $g(\\mathbf{q}) = x_1^2 + y_2^2 - \\ell^2 = 0$, what are the Jacobian $\\mathbf{J}$ and convective acceleration term $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$?",
            "options": [
              "$\\mathbf{J} = [x_1, y_2], \\quad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\dot{x}_1^2 + \\dot{y}_2^2$",
              "$\\mathbf{J} = [2x_1, 2y_2], \\quad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 2(\\dot{x}_1^2 + \\dot{y}_2^2)$",
              "$\\mathbf{J} = [2x_1, -2y_2], \\quad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 2(\\dot{x}_1\\ddot{x}_1 + \\dot{y}_2\\ddot{y}_2)$",
              "$\\mathbf{J} = [x_1/\\ell, y_2/\\ell], \\quad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Missing the factor of 2 from $\\frac{d}{dx}(x^2) = 2x$. While the factor of 2 can be scaled into $\\lambda$, the unscaled derivative is $[2x_1, 2y_2]$.",
              "Correct! $\\mathbf{J} = [2x_1, 2y_2]$ and $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = \\frac{d}{dt}[2x_1, 2y_2][\\dot{x}_1, \\dot{y}_2]^T = 2\\dot{x}_1^2 + 2\\dot{y}_2^2$.",
              "Watch the signs: $x_1^2 + y_2^2 - \\ell^2 = 0$ has positive signs for both terms. Also, $\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ depends on velocities squared, not accelerations.",
              "This would be the unit normal Jacobian for $g = \\sqrt{x_1^2 + y_2^2} - \\ell = 0$. For the quadratic formulation, $\\mathbf{J} = [2x_1, 2y_2]$."
            ]
          },
          "derivation": "### Step 1: Constraint Kinematics and Acceleration Derivation\n\nThe ladder's endpoints are constrained to the axes: mass 1 at $\\mathbf{r}_1 = [x_1, 0]^T$ and mass 2 at $\\mathbf{r}_2 = [0, y_2]^T$. The constant length $\\ell$ gives the holonomic constraint:\n$$g(\\mathbf{q}) = x_1^2 + y_2^2 - \\ell^2 = 0$$\n\nTaking the partial derivatives with respect to $\\mathbf{q} = [x_1, y_2]^T$:\n$$\\mathbf{J}(\\mathbf{q}) = \\frac{\\partial g}{\\partial \\mathbf{q}} = \\begin{bmatrix} \\frac{\\partial g}{\\partial x_1} & \\frac{\\partial g}{\\partial y_2} \\end{bmatrix} = \\begin{bmatrix} 2x_1 & 2y_2 \\end{bmatrix}$$\n\nDifferentiating the velocity constraint $\\dot{g} = \\mathbf{J}\\dot{\\mathbf{q}} = 2x_1\\dot{x}_1 + 2y_2\\dot{y}_2 = 0$ with respect to time using the product rule:\n$$\\ddot{g} = \\frac{d}{dt}(2x_1\\dot{x}_1 + 2y_2\\dot{y}_2) = 2x_1\\ddot{x}_1 + 2\\dot{x}_1^2 + 2y_2\\ddot{y}_2 + 2\\dot{y}_2^2 = 0$$\n\nRearranging into standard manipulator matrix form $\\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 0$:\n$$\\mathbf{J}\\ddot{\\mathbf{q}} = \\begin{bmatrix} 2x_1 & 2y_2 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\end{bmatrix}, \\qquad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 2(\\dot{x}_1^2 + \\dot{y}_2^2)$$\n\nTherefore, the acceleration constraint on the right-hand side of the DAE is:\n$$\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = -2(\\dot{x}_1^2 + \\dot{y}_2^2)$$"
        },
        {
          "stepNumber": 2,
          "badge": "STEP 2 OF 4 • SADDLE-POINT DAE",
          "title": "Assembly of the $3\\times 3$ Constrained Equations of Motion",
          "goal": "Assemble the unconstrained mass matrix $\\mathbf{M}$, applied force vector $\\mathbf{f}$, and augment with the constraint Jacobian into the block saddle-point DAE system.",
          "intuition": "In maximal coordinates, each mass has an unconstrained Newton-Euler equation $m_i \\ddot{q}_i = f_i + f_{c,i}$. The constraint force is $\\mathbf{f}_c = \\mathbf{J}^T\\lambda = [2x_1\\lambda, 2y_2\\lambda]^T$. Combining the equations of motion with the acceleration constraint yields a symmetric-indefinite saddle-point linear system that can be solved directly for accelerations and the Lagrange multiplier simultaneously.",
          "conceptLinks": [
            "lagrange-multipliers",
            "manipulator-equation"
          ],
          "hint1": "The kinetic energy is $T = \\frac{1}{2}m_1\\dot{x}_1^2 + \\frac{1}{2}m_2\\dot{y}_2^2$, so $\\mathbf{M} = \\text{diag}(m_1, m_2)$. Gravity acts only on mass 2 in the $-y$ direction.",
          "hint2": "The block DAE structure is $\\begin{bmatrix} \\mathbf{M} & -\\mathbf{J}^T \\\\ \\mathbf{J} & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\mathbf{q}} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{f} \\\\ -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} \\end{bmatrix}$.",
          "checkpoint": {
            "question": "With $m_1 = 1\\text{ kg}, m_2 = 1\\text{ kg}$, and gravity $g = 9.81\\text{ m/s}^2$ downward on $m_2$, what is the exact $3\\times 3$ block saddle-point DAE matrix equation?",
            "options": [
              "$\\begin{bmatrix} 1 & 0 & 2x_1 \\\\ 0 & 1 & 2y_2 \\\\ 2x_1 & 2y_2 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 9.81 \\\\ 2(\\dot{x}_1^2+\\dot{y}_2^2) \\end{bmatrix}$",
              "$\\begin{bmatrix} 1 & 0 & -x_1 \\\\ 0 & 1 & -y_2 \\\\ x_1 & y_2 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -9.81 \\\\ -(\\dot{x}_1^2+\\dot{y}_2^2) \\end{bmatrix}$",
              "$\\begin{bmatrix} 1 & 0 & -2x_1 \\\\ 0 & 1 & -2y_2 \\\\ 2x_1 & 2y_2 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -9.81 \\\\ -2(\\dot{x}_1^2+\\dot{y}_2^2) \\end{bmatrix}$",
              "$\\begin{bmatrix} 1 & 1 & -2x_1 \\\\ 1 & 1 & -2y_2 \\\\ 2x_1 & 2y_2 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -9.81 \\\\ 0 \\end{bmatrix}$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "The top-right block is $-\\mathbf{J}^T$, so the entries must be negative ($-2x_1, -2y_2$). Also, gravity acts in the negative $y$ direction ($-9.81$), and $-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ is negative.",
              "Missing the factor of 2 in the constraint Jacobian $\\mathbf{J} = [2x_1, 2y_2]$.",
              "Correct! The saddle-point system has $\\mathbf{M} = \\mathbf{I}_{2\\times 2}$, $-\\mathbf{J}^T = [-2x_1, -2y_2]^T$, $\\mathbf{f} = [0, -9.81]^T$, and right-hand acceleration $-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = -2(\\dot{x}_1^2+\\dot{y}_2^2)$.",
              "The mass matrix $\\mathbf{M}$ is uncoupled and diagonal $\\text{diag}(1, 1)$, not filled with ones."
            ]
          },
          "derivation": "### Step 2: $3\\times 3$ Saddle-Point DAE Matrix Formulation\n\nThe unconstrained generalized coordinates are $\\mathbf{q} = [x_1, y_2]^T$. The mass matrix and applied force vectors are:\n$$\\mathbf{M} = \\begin{bmatrix} m_1 & 0 \\\\ 0 & m_2 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}, \\qquad \\mathbf{f} = \\begin{bmatrix} f_{x1} \\\\ f_{y2} \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -m_2 g \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -9.81 \\end{bmatrix}$$\n\nAccording to Lagrange's equations of the first kind:\n$$\\mathbf{M}\\ddot{\\mathbf{q}} = \\mathbf{f} + \\mathbf{J}^T\\lambda \\implies \\mathbf{M}\\ddot{\\mathbf{q}} - \\mathbf{J}^T\\lambda = \\mathbf{f}$$\n\nTogether with the acceleration constraint $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$, we assemble the $3\\times 3$ block saddle-point matrix equation:\n$$\\begin{bmatrix} \\mathbf{M} & -\\mathbf{J}^T \\\\ \\mathbf{J} & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{\\mathbf{q}} \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} \\mathbf{f} \\\\ -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} \\end{bmatrix}$$\n\nSubstituting our analytical matrices:\n$$\\begin{bmatrix} 1 & 0 & -2x_1 \\\\ 0 & 1 & -2y_2 \\\\ 2x_1 & 2y_2 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -9.81 \\\\ -2(\\dot{x}_1^2 + \\dot{y}_2^2) \\end{bmatrix}$$\n\nThis is an index-1 DAE system that uniquely determines $[ddot{x}_1, \\ddot{y}_2, \\lambda]^T$ at any nonsingular configuration where $\\mathbf{J} \\ne \\mathbf{0}$."
        },
        {
          "stepNumber": 3,
          "badge": "STEP 3 OF 4 • BAUMGARTE STABILIZATION",
          "title": "Constraint Drift Mitigation via Baumgarte Tuning",
          "goal": "Formulate the Baumgarte stabilized acceleration constraint for critical damping ($\rzeta = 1$) and $\\omega_n = 10\\text{ rad/s}$ to prevent numerical drift away from the manifold $g=0$.",
          "intuition": "Integrating $\\ddot{g} = 0$ in numerical simulation causes accumulation of truncation error, allowing the ladder to stretch or compress over time (drift). Baumgarte stabilization introduces feedback proportional to constraint position error $g$ and velocity error $\\dot{g}$, converting the error dynamics into a stable damped harmonic oscillator $\\ddot{g} + 2\\zeta\\omega_n\\dot{g} + \\omega_n^2 g = 0$.",
          "conceptLinks": [
            "baumgarte-stabilization",
            "holonomic-constraints"
          ],
          "hint1": "The stabilization equation replaces $\\ddot{g} = 0$ with $\\ddot{g} + 2\\zeta\\omega_n\\dot{g} + \\omega_n^2 g = 0$.",
          "hint2": "For critical damping $\\zeta = 1.0$ and $\\omega_n = 10\\text{ rad/s}$, the gains are $\\alpha = 2\\zeta\\omega_n = 20$ and $\\beta = \\omega_n^2 = 100$.",
          "checkpoint": {
            "question": "For critically damped Baumgarte stabilization with $\\omega_n = 10\\text{ rad/s}$ and $\\zeta = 1$, what is the modified right-hand side acceleration term $b_{\\text{stab}}$ for the third row of the DAE?",
            "options": [
              "$-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 20(2x_1\\dot{x}_1 + 2y_2\\dot{y}_2) - 100(x_1^2 + y_2^2 - \\ell^2)$",
              "$-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 10(2x_1\\dot{x}_1 + 2y_2\\dot{y}_2) - 10(x_1^2 + y_2^2 - \\ell^2)$",
              "$-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} + 20\\dot{g} + 100 g$",
              "$+\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 20(x_1^2 + y_2^2 - \\ell^2)$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\zeta\\omega_n \\dot{g} - \\omega_n^2 g$, where $2\\zeta\\omega_n = 20$ and $\\omega_n^2 = 100$.",
              "Be careful with parameter definitions: the damping coefficient is $2\\zeta\\omega_n = 2(1)(10) = 20$, and stiffness is $\\omega_n^2 = 10^2 = 100$, not 10 and 10.",
              "Watch the signs: to pull errors back to zero, the feedback terms must be subtracted on the right-hand side: $-20\\dot{g} - 100g$. Positive feedback causes explosive instability!",
              "Convective acceleration $-\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ must have a negative sign, and the velocity error term $-20\\dot{g}$ cannot be omitted."
            ]
          },
          "derivation": "### Step 3: Baumgarte Stabilization Law Formulation\n\nWhen integrating the index-1 DAE $\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$, numerical integration errors cause position drift ($g \\ne 0$) and velocity drift ($\\dot{g} \\ne 0$).\n\nBaumgarte's method alters the constraint acceleration to enforce second-order error regulation:\n$$\\ddot{g} + 2\\zeta\\omega_n \\dot{g} + \\omega_n^2 g = 0$$\n\nExpanding $\\ddot{g} = \\mathbf{J}\\ddot{\\mathbf{q}} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}}$ and isolating the acceleration term $\\mathbf{J}\\ddot{\\mathbf{q}}$:\n$$\\mathbf{J}\\ddot{\\mathbf{q}} = -\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} - 2\\zeta\\omega_n \\dot{g} - \\omega_n^2 g$$\n\nWith natural frequency $\\omega_n = 10\\text{ rad/s}$ and critical damping ratio $\\zeta = 1.0$:\n$$2\\zeta\\omega_n = 2(1.0)(10) = 20\\text{ s}^{-1}, \\qquad \\omega_n^2 = 10^2 = 100\\text{ s}^{-2}$$\n\nSubstituting the explicit state expressions for $g$ and $\\dot{g}$:\n$$g(\\mathbf{q}) = x_1^2 + y_2^2 - \\ell^2$$\n$$\\dot{g}(\\mathbf{q}, \\dot{\\mathbf{q}}) = 2x_1\\dot{x}_1 + 2y_2\\dot{y}_2$$\n\nThe stabilized right-hand side scalar for row 3 becomes:\n$$b_{\\text{stab}} = -2(\\dot{x}_1^2 + \\dot{y}_2^2) - 20(2x_1\\dot{x}_1 + 2y_2\\dot{y}_2) - 100(x_1^2 + y_2^2 - \\ell^2)$$\n\nThis ensures any numerical perturbation from the constraint manifold decays exponentially without oscillatory overshoot."
        },
        {
          "stepNumber": 4,
          "badge": "STEP 4 OF 4 • STATE EVALUATION & INTERNAL FORCE",
          "title": "Numerical Solution for $\\lambda$, Accelerations, and Rod Compression",
          "goal": "Substitute state $x_1 = 8\\text{ m}, y_2 = 6\\text{ m}, \\dot{x}_1 = 3\\text{ m/s}, \\dot{y}_2 = -4\\text{ m/s}$ into the DAE system, solve for the Lagrange multiplier $\\lambda$, accelerations $\\ddot{x}_1, \\ddot{y}_2$, and calculate the physical compression force along the rod.",
          "intuition": "First verify that the state is on the constraint manifold: $8^2 + 6^2 = 64 + 36 = 100 = 10^2$ (holds!) and $\\dot{g} = 2(8)(3) + 2(6)(-4) = 48 - 48 = 0$ (holds!). Invert the $3\\times 3$ system algebraically using Schur complements: $\\lambda = (\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T)^{-1}(\\mathbf{J}\\mathbf{M}^{-1}\\mathbf{f} + \\dot{\\mathbf{J}}\\dot{\\mathbf{q}})$. Then extract the physical internal force along the rod axis.",
          "conceptLinks": [
            "lagrange-multipliers",
            "constraint-jacobian"
          ],
          "hint1": "Compute the Delassus scalar $G = \\mathbf{J}\\mathbf{M}^{-1}\\mathbf{J}^T = (2x_1)^2 + (2y_2)^2 = 4(x_1^2 + y_2^2) = 4\\ell^2 = 400$.",
          "hint2": "Accelerations are $\\ddot{x}_1 = 2x_1\\lambda$ and $\\ddot{y}_2 = -g + 2y_2\\lambda$. Plug these into the acceleration constraint $2x_1\\ddot{x}_1 + 2y_2\\ddot{y}_2 = -2(\\dot{x}_1^2 + \\dot{y}_2^2)$ to solve for $\\lambda$.",
          "checkpoint": {
            "question": "At state $x_1 = 8, y_2 = 6, \\dot{x}_1 = 3, \\dot{y}_2 = -4$ with $g = 9.81\\text{ m/s}^2$, what are the multiplier $\\lambda$ and physical compression force $F_{\\text{rod}}$?",
            "options": [
              "$\\lambda = 0.500\\text{ N/m}^2, \\quad F_{\\text{rod}} = 10.0\\text{ N}$",
              "$\\lambda = -0.169\\text{ N/m}^2, \\quad F_{\\text{rod}} = -3.39\\text{ N}$ (rod in tension)",
              "$\\lambda = 0.050\\text{ N/m}^2, \\quad F_{\\text{rod}} = 1.00\\text{ N}$",
              "$\\lambda = \\frac{67.72}{400} \\approx 0.1693\\text{ N/m}^2, \\quad F_{\\text{rod}} = 2\\ell\\lambda = 3.386\\text{ N}$ (compression)"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "Check your arithmetic: the Delassus scalar is $4(8^2 + 6^2) = 400$, and the numerator is $2y_2(-9.81) - (-50) = 117.72 - 50 = 67.72$, giving $\\lambda = 67.72/400 = 0.1693$.",
              "$\\lambda$ is positive because gravity pushes mass 2 downward, compressing the ladder against the floor. A negative sign would indicate tension.",
              "Did you forget the gravity term $2y_2 g = 12(9.81) = 117.72$? Solving without gravity yields an incorrect result.",
              "Correct! $\\lambda = \\frac{67.72}{400} \\approx 0.1693\\text{ N/m}^2$. The constraint force vector is $\\mathbf{f}_c = \\mathbf{J}^T\\lambda = [16\\lambda, 12\\lambda]^T$, giving internal compression $F_{\\text{rod}} = \\|\\mathbf{f}_c\\| = 2\\ell\\lambda = 2(10)(0.1693) = 3.386\\text{ N}$."
            ]
          },
          "derivation": "### Step 4: Numerical Evaluation and Internal Force Analysis\n\n**1. Verification of State on Manifold:**\nAt $x_1 = 8\\text{ m}, y_2 = 6\\text{ m}$:\n$$g = 8^2 + 6^2 - 10^2 = 64 + 36 - 100 = 0\\text{ m}^2 \\quad \\checkmark$$\nAt $\\dot{x}_1 = 3\\text{ m/s}, \\dot{y}_2 = -4\\text{ m/s}$:\n$$\\dot{g} = 2(8)(3) + 2(6)(-4) = 48 - 48 = 0\\text{ m}^2/\\text{s} \\quad \\checkmark$$\n\n**2. Assemble Numerical DAE System:**\n$$\\mathbf{J} = \\begin{bmatrix} 2(8) & 2(6) \\end{bmatrix} = \\begin{bmatrix} 16 & 12 \\end{bmatrix}$$\n$$\\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 2(3^2 + (-4)^2) = 2(9 + 16) = 50\\text{ m}^2/\\text{s}^2$$\n$$\\begin{bmatrix} 1 & 0 & -16 \\\\ 0 & 1 & -12 \\\\ 16 & 12 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -9.81 \\\\ -50 \\end{bmatrix}$$\n\n**3. Solve for Multiplier $\\lambda$:**\nFrom the first two equations:\n$$\\ddot{x}_1 = 16\\lambda$$\n$$\\ddot{y}_2 = -9.81 + 12\\lambda$$\n\nSubstitute into the third row:\n$$16(16\\lambda) + 12(-9.81 + 12\\lambda) = -50$$\n$$256\\lambda + 144\\lambda - 117.72 = -50$$\n$$400\\lambda = 117.72 - 50 = 67.72$$\n$$\\lambda = \\frac{67.72}{400} = 0.1693\\text{ N/m}^2$$\n\n*(Note: If taking $g = 10\\text{ m/s}^2$ for rough estimation: $400\\lambda = 120 - 50 = 70 \\implies \\lambda = 0.175\\text{ N/m}^2$)*\n\n**4. Acceleration Vectors:**\n$$\\ddot{x}_1 = 16(0.1693) = +2.709\\text{ m/s}^2$$\n$$\\ddot{y}_2 = -9.81 + 12(0.1693) = -9.81 + 2.032 = -7.778\\text{ m/s}^2$$\n\n**5. Physical Internal Force Along Rod:**\nThe constraint force vector acting on the system is:\n$$\\mathbf{f}_c = \\mathbf{J}^T\\lambda = \\begin{bmatrix} 2x_1 \\lambda \\\\ 2y_2 \\lambda \\end{bmatrix} = \\lambda \\begin{bmatrix} 16 \\\\ 12 \\end{bmatrix} = \\begin{bmatrix} 2.709 \\\\ 2.032 \\end{bmatrix}\\text{ N}$$\nThe magnitude of this constraint force represents the rod's internal compressive thrust:\n$$F_{\\text{rod}} = \\|\\mathbf{f}_c\\| = \\sqrt{(16\\lambda)^2 + (12\\lambda)^2} = \\sqrt{400}\\lambda = 20\\lambda = 20(0.1693) = 3.386\\text{ N}$$\nBecause $\\lambda > 0$, the force pushes outward at both ends, meaning the ladder rod is in **compression** holding mass 2 from falling in free-fall and pushing mass 1 to the right."
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Practice Exam E Problem 1 (Ladder DAE & Baumgarte)",
        "items": [
          {
            "label": "(a) Holonomic Constraint & Jacobian",
            "math": "$$g(\\mathbf{q}) = x_1^2 + y_2^2 - \\ell^2 = 0, \\qquad \\mathbf{J} = \\begin{bmatrix} 2x_1 & 2y_2 \\end{bmatrix}, \\qquad \\dot{\\mathbf{J}}\\dot{\\mathbf{q}} = 2(\\dot{x}_1^2 + \\dot{y}_2^2)$$"
          },
          {
            "label": "(b) $3\\times 3$ Saddle-Point DAE Matrix",
            "math": "$$\\begin{bmatrix} m_1 & 0 & -2x_1 \\\\ 0 & m_2 & -2y_2 \\\\ 2x_1 & 2y_2 & 0 \\end{bmatrix} \\begin{bmatrix} \\ddot{x}_1 \\\\ \\ddot{y}_2 \\\\ \\lambda \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -m_2 g \\\\ -2(\\dot{x}_1^2 + \\dot{y}_2^2) \\end{bmatrix}$$"
          },
          {
            "label": "(c) Baumgarte Stabilization Equation (Critically Damped, $\\omega_n = 10\\text{ rad/s}$)",
            "math": "$$\\mathbf{J}\\ddot{\\mathbf{q}} = -2(\\dot{x}_1^2 + \\dot{y}_2^2) - 20(2x_1\\dot{x}_1 + 2y_2\\dot{y}_2) - 100(x_1^2 + y_2^2 - \\ell^2)$$"
          },
          {
            "label": "(d) State Solution at $(8, 6, 3, -4)$ with $g=9.81\\text{ m/s}^2$",
            "math": "$$\\lambda = 0.1693\\text{ N/m}^2, \\quad \\ddot{x}_1 = +2.709\\text{ m/s}^2, \\quad \\ddot{y}_2 = -7.778\\text{ m/s}^2, \\quad F_{\\text{rod}} = 3.386\\text{ N} \\text{ (compression)}$$"
          }
        ]
      }
    },
    {
      "id": "practice-e-2",
      "code": "PRACTICE EXAM E • PROBLEM 2",
      "shortTitle": "Atwood Machine with Inertia & Viscous Drag (Minimal & DAE)",
      "title": "Atwood Machine with Inertial Pulley & Viscous Bearing Drag (Minimal & Maximal DAE)",
      "subtitle": "Lagrangian Dynamics, Rayleigh Dissipation, Terminal Velocity ODE, and Maximal Coordinates Cable Tensions",
      "category": "Lagrangian Mechanics",
      "badgeClass": "badge-teal",
      "difficulty": "Intermediate to Advanced",
      "estimatedTime": "25 mins",
      "estimatedMinutes": 25,
      "matchedLectures": "Lec 11–13, Lec 17",
      "lectureRefs": [
        {
          "code": "Lec 11",
          "title": "Kinetic & Potential Energy of Rigid Systems",
          "time": "14:10"
        },
        {
          "code": "Lec 13",
          "title": "Generalized Forces & Viscous Dissipation",
          "time": "25:30"
        },
        {
          "code": "Lec 17",
          "title": "Minimal vs Maximal Coordinates & Multipliers",
          "time": "30:15"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 460 310\" width=\"100%\" height=\"230\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <pattern id=\"hatch-ceiling\" width=\"10\" height=\"10\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"10\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" />\n    </pattern>\n    <marker id=\"arrow-down\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#059669\" />\n    </marker>\n  </defs>\n\n  <!-- Ceiling -->\n  <rect x=\"130\" y=\"15\" width=\"200\" height=\"18\" fill=\"url(#hatch-ceiling)\" />\n  <line x1=\"130\" y1=\"33\" x2=\"330\" y2=\"33\" stroke=\"#475569\" stroke-width=\"2.5\" />\n\n  <!-- Pulley Bracket & Center -->\n  <line x1=\"230\" y1=\"33\" x2=\"230\" y2=\"85\" stroke=\"#334155\" stroke-width=\"4\" />\n  <circle cx=\"230\" cy=\"85\" r=\"48\" fill=\"#f1f5f9\" stroke=\"#334155\" stroke-width=\"3.5\" />\n  <circle cx=\"230\" cy=\"85\" r=\"8\" fill=\"#334155\" />\n\n  <!-- Pulley Spoke & Damping Indicator -->\n  <line x1=\"230\" y1=\"45\" x2=\"230\" y2=\"125\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"3,3\" />\n  <line x1=\"190\" y1=\"85\" x2=\"270\" y2=\"85\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"3,3\" />\n  <path d=\"M 245 60 A 30 30 0 0 1 262 95\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\" marker-end=\"url(#arrow-down)\" />\n  <text x=\"270\" y=\"75\" font-size=\"10\" font-weight=\"700\" fill=\"#d97706\">Drag -bθ̇</text>\n\n  <!-- Left Cable & Mass m1 -->\n  <line x1=\"182\" y1=\"85\" x2=\"182\" y2=\"210\" stroke=\"#0f172a\" stroke-width=\"2.5\" />\n  <rect x=\"160\" y=\"210\" width=\"44\" height=\"44\" rx=\"4\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"2\" />\n  <text x=\"171\" y=\"236\" font-size=\"12\" font-weight=\"800\" fill=\"#ffffff\">m₁</text>\n  <text x=\"166\" y=\"248\" font-size=\"9\" fill=\"#dbeafe\">3 kg</text>\n  <line x1=\"140\" y1=\"85\" x2=\"140\" y2=\"210\" stroke=\"#059669\" stroke-width=\"1.5\" marker-end=\"url(#arrow-down)\" />\n  <text x=\"122\" y=\"155\" font-size=\"12\" font-weight=\"800\" fill=\"#059669\">+y</text>\n\n  <!-- Right Cable & Mass m2 -->\n  <line x1=\"278\" y1=\"85\" x2=\"278\" y2=\"160\" stroke=\"#0f172a\" stroke-width=\"2.5\" />\n  <rect x=\"258\" y=\"160\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#6366f1\" stroke=\"#312e81\" stroke-width=\"2\" />\n  <text x=\"268\" y=\"184\" font-size=\"12\" font-weight=\"800\" fill=\"#ffffff\">m₂</text>\n  <text x=\"265\" y=\"194\" font-size=\"9\" fill=\"#e0e7ff\">1 kg</text>\n  <text x=\"305\" y=\"182\" font-size=\"10\" font-weight=\"700\" fill=\"#6366f1\">L - y</text>\n\n  <!-- Specs Card -->\n  <rect x=\"330\" y=\"45\" width=\"120\" height=\"85\" rx=\"5\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1\" />\n  <text x=\"338\" y=\"62\" font-size=\"10\" font-weight=\"800\" fill=\"#0f172a\">System Specs:</text>\n  <text x=\"338\" y=\"77\" font-size=\"9\" fill=\"#475569\">m₁ = 3 kg, m₂ = 1 kg</text>\n  <text x=\"338\" y=\"91\" font-size=\"9\" fill=\"#475569\">I/r² = 1 kg</text>\n  <text x=\"338\" y=\"105\" font-size=\"9\" fill=\"#475569\">b/r² = 2 N·s/m</text>\n  <text x=\"338\" y=\"119\" font-size=\"9\" font-weight=\"700\" fill=\"#059669\">g = 10 m/s²</text>\n</svg>",
      "prompt": "An Atwood machine consists of suspended masses $m_1 = 3\\text{ kg}$ and $m_2 = 1\\text{ kg}$ connected by an inextensible cable over a pulley of radius $r$ and inertia $I$, where the equivalent rotational inertia is $I/r^2 = 1\\text{ kg}$. The pulley axle experiences viscous bearing drag torque $\\tau_{\\text{drag}} = -b\\dot{\\theta}$ with $b/r^2 = 2\\text{ N}\\cdot\\text{s/m}$. Using gravitational acceleration $g = 10\\text{ m/s}^2$: (a) define the minimal coordinate $q=y$ (downward displacement of $m_1$) and derive $T, V$, and the generalized force $Q_y$; (b) formulate the equation of motion; (c) determine the terminal speed and velocity time-history $\\dot{y}(t)$ from rest; and (d) (Graduate Part) reformulate in 3-DOF maximal coordinates $\\mathbf{q} = [y_1, y_2, \\theta]^T$ with holonomic constraints to solve for the cable tensions $\\lambda_1, \\lambda_2$ at steady-state.",
      "goalStatement": "Derive the Lagrangian EOM with Rayleigh dissipation, solve the first-order ODE for terminal speed, and formulate the maximal DAE system to extract cable tensions.",
      "parameters": [
        {
          "symbol": "m_1, m_2",
          "desc": "Suspended masses (m₁ = 3 kg, m₂ = 1 kg)"
        },
        {
          "symbol": "I/r^2",
          "desc": "Equivalent pulley rotational inertia (1 kg)"
        },
        {
          "symbol": "b/r^2",
          "desc": "Equivalent bearing viscous damping coefficient (2 N·s/m)"
        },
        {
          "symbol": "g",
          "desc": "Gravitational acceleration (10 m/s²)"
        }
      ],
      "steps": [
        {
          "stepNumber": 1,
          "badge": "STEP 1 OF 4 • ENERGIES & RAYLEIGH DISSIPATION",
          "title": "Kinetic Energy $T$, Potential Energy $V$, and Dissipative Force $Q_y$",
          "goal": "Express the total system kinetic energy $T$, potential energy $V$, and generalized dissipative force $Q_y$ in terms of minimal coordinate $y$ and velocity $\\dot{y}$.",
          "intuition": "When mass 1 moves downward by $y$ with speed $\\dot{y}$, the pulley rotates at $\\dot{\\theta} = \\dot{y}/r$, and mass 2 moves upward at speed $\\dot{y}$. All three inertial bodies contribute to kinetic energy. The viscous drag opposes the rotation with generalized force $Q_y = -\\frac{\\partial \\mathcal{D}}{\\partial \\dot{y}}$.",
          "conceptLinks": [
            "kinetic-potential-energy",
            "generalized-forces"
          ],
          "hint1": "Total kinetic energy is $T = \\frac{1}{2}m_1\\dot{y}^2 + \\frac{1}{2}m_2(-\\dot{y})^2 + \\frac{1}{2}I(\\dot{y}/r)^2 = \\frac{1}{2}(m_1 + m_2 + I/r^2)\\dot{y}^2$.",
          "hint2": "Taking $y$ downward as positive, the gravitational potential energy is $V = -m_1 g y - m_2 g(L - y) = -(m_1 - m_2)gy + \\text{const}$. Rayleigh dissipation is $\\mathcal{D} = \\frac{1}{2}b\\dot{\\theta}^2 = \\frac{1}{2}(b/r^2)\\dot{y}^2$.",
          "checkpoint": {
            "question": "For $m_1 = 3\\text{ kg}, m_2 = 1\\text{ kg}, I/r^2 = 1\\text{ kg}, b/r^2 = 2\\text{ N}\\cdot\\text{s/m}$, and $g = 10\\text{ m/s}^2$, what are $T, V$, and $Q_y$?",
            "options": [
              "$T = \\frac{5}{2}\\dot{y}^2, \\quad V = -20y, \\quad Q_y = -2\\dot{y}$",
              "$T = 2\\dot{y}^2, \\quad V = -40y, \\quad Q_y = -4\\dot{y}$",
              "$T = \\frac{5}{2}\\dot{y}^2, \\quad V = +20y, \\quad Q_y = +2\\dot{y}$",
              "$T = 3\\dot{y}^2, \\quad V = -20y, \\quad Q_y = -2\\dot{y}^2$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! Equivalent mass $M_{\\text{eq}} = 3 + 1 + 1 = 5\\text{ kg}$, giving $T = \\frac{5}{2}\\dot{y}^2$. Gravitational gradient gives $\\partial V/\\partial y = -(m_1 - m_2)g = -20\\text{ N}$, and $Q_y = -(b/r^2)\\dot{y} = -2\\dot{y}$.",
              "Did you forget the pulley inertia $I/r^2 = 1\\text{ kg}$ in $T$? Total mass is $3 + 1 + 1 = 5\\text{ kg}$, not 4 kg.",
              "Watch potential energy sign: moving downward in the direction of gravity lowers potential energy, so $V = -m_1 g y$. Dissipation always opposes velocity, so $Q_y$ must be negative.",
              "Viscous drag is linear in velocity: $Q_y = -b_{\\text{eq}}\\dot{y}$, not quadratic."
            ]
          },
          "derivation": "### Step 1: Energy Formulations and Dissipation\n\nLet $y$ measure the downward displacement of mass 1 from the pulley axis. Since the cable length $L$ is fixed:\n$$y_1 = y, \\qquad y_2 = L - y, \\qquad \\theta = \\frac{y}{r}$$\n\nDifferentiating with respect to time:\n$$\\dot{y}_1 = \\dot{y}, \\qquad \\dot{y}_2 = -\\dot{y}, \\qquad \\dot{\\theta} = \\frac{\\dot{y}}{r}$$\n\n**1. Kinetic Energy $T$:**\n$$T = \\frac{1}{2}m_1\\dot{y}_1^2 + \\frac{1}{2}m_2\\dot{y}_2^2 + \\frac{1}{2}I\\dot{\\theta}^2 = \\frac{1}{2}\\left(m_1 + m_2 + \\frac{I}{r^2}\\right)\\dot{y}^2$$\nSubstituting numerical values $m_1 = 3, m_2 = 1, I/r^2 = 1$:\n$$M_{\\text{eq}} = 3 + 1 + 1 = 5\\text{ kg} \\implies T = \\frac{5}{2}\\dot{y}^2$$\n\n**2. Potential Energy $V$:**\nTaking the pulley center as the gravitational datum ($y=0$), with $y$ pointing downward:\n$$V = -m_1 g y_1 - m_2 g y_2 = -m_1 g y - m_2 g (L - y) = -(m_1 - m_2)g y - m_2 g L$$\nDropping the arbitrary constant datum $-m_2 g L$:\n$$V(y) = -(3 - 1)(10)y = -20y\\text{ J}$$\n\n**3. Rayleigh Dissipation and Generalized Force $Q_y$:**\nThe bearing viscous dissipation function is:\n$$\\mathcal{D} = \\frac{1}{2}b\\dot{\\theta}^2 = \\frac{1}{2}b\\left(\\frac{\\dot{y}}{r}\\right)^2 = \\frac{1}{2}\\left(\\frac{b}{r^2}\\right)\\dot{y}^2 = \\frac{1}{2}(2)\\dot{y}^2 = \\dot{y}^2$$\nThe generalized non-conservative dissipative force is:\n$$Q_y = -\\frac{\\partial \\mathcal{D}}{\\partial \\dot{y}} = -2\\dot{y}\\text{ N}$$"
        },
        {
          "stepNumber": 2,
          "badge": "STEP 2 OF 4 • EQUATION OF MOTION",
          "title": "Lagrange's Equation of Motion for the Atwood Machine",
          "goal": "Apply Lagrange's equation $\\frac{d}{dt}\\left(\\frac{\\partial T}{\\partial \\dot{y}}\\right) - \\frac{\\partial T}{\\partial y} + \\frac{\\partial V}{\\partial y} = Q_y$ to formulate the single governing second-order ODE.",
          "intuition": "The net downward gravity force on mass 1 exceeds mass 2 by $(m_1 - m_2)g = 20\\text{ N}$. This driving force must accelerate the entire effective mass ($5\\text{ kg}$) and overcome the bearing damping force ($2\\dot{y}$).",
          "conceptLinks": [
            "manipulator-equation",
            "generalized-forces"
          ],
          "hint1": "Compute $\\frac{\\partial T}{\\partial \\dot{y}} = 5\\dot{y}$, its time derivative $5\\ddot{y}$, and $\\frac{\\partial V}{\\partial y} = -20$.",
          "hint2": "Equating to $Q_y = -2\\dot{y}$ gives $5\\ddot{y} - 20 = -2\\dot{y} \\implies 5\\ddot{y} + 2\\dot{y} = 20$.",
          "checkpoint": {
            "question": "What is the simplified governing equation of motion in terms of $y, \\dot{y}, \\ddot{y}$?",
            "options": [
              "$5\\ddot{y} + 2\\dot{y} + 20y = 0$",
              "$4\\ddot{y} + 2\\dot{y} = 20$",
              "$5\\ddot{y} + 2\\dot{y} = 20$",
              "$5\\ddot{y} - 2\\dot{y} = 20$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "Gravity provides a constant force term $20\\text{ N}$, not a position-dependent spring restoring force $20y$.",
              "Check total mass: $m_1 + m_2 + I/r^2 = 3 + 1 + 1 = 5\\text{ kg}$, not 4 kg.",
              "Correct! $5\\ddot{y} + 2\\dot{y} = 20$, or in standard form $\\ddot{y} + 0.4\\dot{y} = 4$.",
              "The damping force resists motion, so moving it to the left-hand side gives a positive coefficient $+2\\dot{y}$."
            ]
          },
          "derivation": "### Step 2: Formulation of the Equation of Motion\n\nWe evaluate each term in Lagrange's equation:\n$$\\frac{d}{dt}\\left(\\frac{\\partial T}{\\partial \\dot{y}}\\right) - \\frac{\\partial T}{\\partial y} + \\frac{\\partial V}{\\partial y} = Q_y$$\n\n**1. Kinetic Energy Derivatives:**\n$$\\frac{\\partial T}{\\partial \\dot{y}} = 5\\dot{y} \\implies \\frac{d}{dt}\\left(\\frac{\\partial T}{\\partial \\dot{y}}\\right) = 5\\ddot{y}$$\n$$\\frac{\\partial T}{\\partial y} = 0$$\n\n**2. Potential Energy Derivative:**\n$$\\frac{\\partial V}{\\partial y} = \\frac{\\partial}{\\partial y}(-20y) = -20$$\n\n**3. Assemble EOM:**\n$$5\\ddot{y} - 0 + (-20) = -2\\dot{y}$$\n$$5\\ddot{y} + 2\\dot{y} = 20$$\n\nDividing by the equivalent mass $M_{\\text{eq}} = 5\\text{ kg}$:\n$$\\ddot{y} + 0.4\\dot{y} = 4$$\n\nThis is a linear non-homogeneous first-order ODE in the velocity variable $v = \\dot{y}$."
        },
        {
          "stepNumber": 3,
          "badge": "STEP 3 OF 4 • TERMINAL VELOCITY & RESPONSE",
          "title": "Analytical Velocity Solution and Terminal Speed",
          "goal": "Solve the first-order differential equation for $\\dot{y}(t)$ with initial condition $\\dot{y}(0) = 0$ and find the terminal velocity $\\dot{y}_{\\text{term}}$ as $t \\to \\infty$.",
          "intuition": "As the system accelerates downward, the viscous bearing drag $2\\dot{y}$ increases until it exactly balances the net gravitational driving force of $20\\text{ N}$. At this dynamic equilibrium, the acceleration vanishes ($ddot{y} = 0$), and the system descends at constant terminal speed.",
          "conceptLinks": [
            "manipulator-equation",
            "generalized-coordinates"
          ],
          "hint1": "At terminal velocity, set $\\ddot{y} = 0$: $2\\dot{y}_{\\text{term}} = 20 \\implies \\dot{y}_{\\text{term}} = 10\\text{ m/s}$.",
          "hint2": "The general solution to $\\dot{v} + 0.4v = 4$ is $v(t) = v_{\\text{term}} + C e^{-0.4 t}$. Use $v(0) = 0$ to find $C = -10$.",
          "checkpoint": {
            "question": "What are the terminal velocity $\\dot{y}_{\\text{term}}$ and the velocity response $\\dot{y}(t)$ from rest?",
            "options": [
              "$\\dot{y}_{\\text{term}} = 4.0\\text{ m/s}, \\quad \\dot{y}(t) = 4(1 - e^{-0.4 t})$",
              "$\\dot{y}_{\\text{term}} = 10.0\\text{ m/s}, \\quad \\dot{y}(t) = 10(1 - e^{-0.4 t})\\text{ m/s}$",
              "$\\dot{y}_{\\text{term}} = 20.0\\text{ m/s}, \\quad \\dot{y}(t) = 20(1 - e^{-0.2 t})$",
              "$\\dot{y}_{\\text{term}} = 5.0\\text{ m/s}, \\quad \\dot{y}(t) = 5 - 5e^{-2 t}$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Did you divide 4 by 1 instead of 0.4? $\\dot{y}_{\\text{term}} = 4 / 0.4 = 10.0\\text{ m/s}$.",
              "Correct! $\\dot{y}_{\\text{term}} = 20/2 = 10.0\\text{ m/s}$, and $\\dot{y}(t) = 10(1 - e^{-0.4 t})\\text{ m/s}$.",
              "Terminal velocity is $20/2 = 10\\text{ m/s}$, not $20\\text{ m/s}$.",
              "Check the time constant: $\\tau = 1/0.4 = 2.5\\text{ s}$, corresponding to exponent $-0.4 t$."
            ]
          },
          "derivation": "### Step 3: Velocity Solution and Steady-State Terminal Speed\n\nLet $v(t) = \\dot{y}(t)$. The equation of motion is:\n$$\\dot{v}(t) + 0.4 v(t) = 4$$\n\n**1. Terminal Velocity ($t \\to \\infty$):**\nAt steady state, the acceleration vanishes: $\\dot{v} = 0$:\n$$0.4 v_{\\text{term}} = 4 \\implies v_{\\text{term}} = \\frac{4}{0.4} = 10.0\\text{ m/s}$$\nPhysically, the drag force $b_{\\text{eq}} v_{\\text{term}} = 2(10) = 20\\text{ N}$ exactly balances the net gravity force $(m_1 - m_2)g = (3 - 1)(10) = 20\\text{ N}$.\n\n**2. Time-Domain Response:**\nThe complementary solution is $v_c(t) = C e^{-0.4 t}$, and the particular solution is $v_p = 10.0\\text{ m/s}$:\n$$v(t) = 10 - C e^{-0.4 t}$$\nApplying the initial condition $v(0) = 0$:\n$$0 = 10 - C \\implies C = 10$$\n\nTherefore, the velocity function is:\n$$\\dot{y}(t) = 10\\left(1 - e^{-0.4 t}\\right)\\text{ m/s}$$\n\nThe time constant of the system is $\\tau = \\frac{1}{0.4} = 2.5\\text{ s}$. The system reaches $98\\%$ of its terminal velocity after $4\\tau = 10\\text{ s}$."
        },
        {
          "stepNumber": 4,
          "badge": "STEP 4 OF 4 • MAXIMAL DAE & CABLE TENSIONS (GRADUATE)",
          "title": "Maximal Coordinates Formulation and Steady-State Cable Tensions",
          "goal": "Formulate the 3-DOF unconstrained maximal coordinates system $\\mathbf{q} = [y_1, y_2, \\theta]^T$ with holonomic cable constraints, and solve for the steady-state cable tensions $\\lambda_1$ and $\\lambda_2$.",
          "intuition": "In maximal coordinates, the two cable segments are treated as separate holonomic constraints $g_1 = y_1 - r\\theta = 0$ and $g_2 = y_2 + r\\theta - L = 0$. The Lagrange multipliers $\\lambda_1, \\lambda_2$ directly represent the internal cable tensions. At steady state, mass 1 moves downward at constant speed, so its cable tension must exactly balance its weight $m_1 g = 30\\text{ N}$, while mass 2's cable tension balances $m_2 g = 10\\text{ N}$. The difference $(30 - 10)r = 20r$ provides the torque that overcomes the bearing drag!",
          "conceptLinks": [
            "lagrange-multipliers",
            "holonomic-constraints"
          ],
          "hint1": "The constraint Jacobian for $\\mathbf{q} = [y_1, y_2, \\theta]^T$ is $\\mathbf{J} = \\begin{bmatrix} 1 & 0 & -r \\\\ 0 & 1 & r \\end{bmatrix}$.",
          "hint2": "Newton's second law on each mass at constant speed ($\\ddot{y}_1 = \\ddot{y}_2 = 0$) gives $m_1 g - T_1 = 0 \\implies T_1 = 30\\text{ N}$, and $T_2 - m_2 g = 0 \\implies T_2 = 10\\text{ N}$.",
          "checkpoint": {
            "question": "At steady state (terminal speed $\\dot{y} = 10\\text{ m/s}, \\ddot{y} = 0$), what are the tensions $T_1$ (left cable) and $T_2$ (right cable)?",
            "options": [
              "$T_1 = 20\\text{ N}, \\quad T_2 = 20\\text{ N}$",
              "$T_1 = 15\\text{ N}, \\quad T_2 = 25\\text{ N}$",
              "$T_1 = 35\\text{ N}, \\quad T_2 = 5\\text{ N}$",
              "$T_1 = 30\\text{ N}, \\quad T_2 = 10\\text{ N}$"
            ],
            "correctIndex": 3,
            "trapFeedback": [
              "If $T_1 = T_2 = 20\\text{ N}$, there would be no net torque on the pulley to overcome bearing drag, and mass 1 ($30\\text{ N}$) would accelerate downward.",
              "At constant speed, the forces on each suspended mass must sum to zero: $T_1 = m_1 g$ and $T_2 = m_2 g$.",
              "This would imply an acceleration of the masses, violating the steady-state condition $\\ddot{y} = 0$.",
              "Correct! At terminal velocity $\\ddot{y}_1 = 0 \\implies T_1 = m_1 g = 3(10) = 30\\text{ N}$, and $\\ddot{y}_2 = 0 \\implies T_2 = m_2 g = 1(10) = 10\\text{ N}$. The tension difference $(T_1 - T_2)r = (30-10)r = 20r$ perfectly balances the drag torque $\\tau_{\\text{drag}} = b\\dot{\\theta} = (2 r^2)(10/r) = 20r\\text{ N}\\cdot\\text{m}$!"
            ]
          },
          "derivation": "### Step 4: Maximal DAE Formulation and Cable Tensions (Graduate)\n\nLet $\\mathbf{q} = [y_1, y_2, \\theta]^T$. The unconstrained mass matrix and applied forces are:\n$$\\mathbf{M} = \\begin{bmatrix} m_1 & 0 & 0 \\\\ 0 & m_2 & 0 \\\\ 0 & 0 & I \\end{bmatrix} = \\begin{bmatrix} 3 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & I \\end{bmatrix}$$\n$$\\mathbf{f} = \\begin{bmatrix} m_1 g \\\\ m_2 g \\\\ -b\\dot{\\theta} \\end{bmatrix} = \\begin{bmatrix} 30 \\\\ 10 \\\\ -b\\dot{\\theta} \\end{bmatrix}$$\n*(Note: $y_1$ and $y_2$ both measure downward displacement from the axle).*\n\n**1. Constraint Equations:**\nFor inextensible cables wrapped without slipping:\n$$g_1(\\mathbf{q}) = y_1 - r\\theta = 0$$\n$$g_2(\\mathbf{q}) = y_2 + r\\theta - L = 0$$\n$$\\mathbf{J} = \\begin{bmatrix} \\frac{\\partial g_1}{\\partial \\mathbf{q}} \\\\ \\frac{\\partial g_2}{\\partial \\mathbf{q}} \\end{bmatrix} = \\begin{bmatrix} 1 & 0 & -r \\\\ 0 & 1 & r \\end{bmatrix}$$\n\n**2. Constrained Equations of Motion:**\n$$\\mathbf{M}\\ddot{\\mathbf{q}} - \\mathbf{J}^T\\boldsymbol{\\lambda} = \\mathbf{f} \\implies \\begin{bmatrix} m_1 \\ddot{y}_1 \\\\ m_2 \\ddot{y}_2 \\\\ I \\ddot{\\theta} \\end{bmatrix} - \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\\\ -r & r \\end{bmatrix} \\begin{bmatrix} \\lambda_1 \\\\ \\lambda_2 \\end{bmatrix} = \\begin{bmatrix} m_1 g \\\\ m_2 g \\\\ -b\\dot{\\theta} \\end{bmatrix}$$\n\nExpanding line-by-line:\n$$m_1 \\ddot{y}_1 = m_1 g + \\lambda_1$$\n$$m_2 \\ddot{y}_2 = m_2 g + \\lambda_2$$\n$$I \\ddot{\\theta} = -b\\dot{\\theta} - r\\lambda_1 + r\\lambda_2$$\n\nHere, the physical upward cable tensions are $T_1 = -\\lambda_1$ and $T_2 = -\\lambda_2$:\n$$m_1 \\ddot{y}_1 = m_1 g - T_1$$\n$$m_2 \\ddot{y}_2 = m_2 g - T_2$$\n$$I \\ddot{\\theta} = r(T_1 - T_2) - b\\dot{\\theta}$$\n\n**3. Steady-State Evaluation (Terminal Velocity):**\nAt steady state, $\\ddot{y}_1 = \\ddot{y}_2 = \\ddot{\\theta} = 0$, and $\\dot{\\theta} = \\frac{v_{\\text{term}}}{r} = \\frac{10}{r}$:\n$$0 = m_1 g - T_1 \\implies T_1 = m_1 g = 3(10) = 30.0\\text{ N}$$\n$$0 = m_2 g - T_2 \\implies T_2 = m_2 g = 1(10) = 10.0\\text{ N}$$\n\nCheck the pulley rotational balance:\n$$r(T_1 - T_2) - b\\dot{\\theta} = r(30 - 10) - b\\left(\\frac{10}{r}\\right) = 20r - \\left(\\frac{b}{r^2}\\right)(10)r = 20r - 2(10)r = 0 \\quad \\checkmark$$\nBoth cable tensions are in positive tension ($T_1 = 30\\text{ N}, T_2 = 10\\text{ N}$), confirming the cable never goes slack during steady-state descent."
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Practice Exam E Problem 2 (Atwood Machine with Drag)",
        "items": [
          {
            "label": "(a) Energies & Dissipation (Minimal Coordinate $y$)",
            "math": "$$T = \\frac{5}{2}\\dot{y}^2, \\qquad V = -20y, \\qquad Q_y = -2\\dot{y}$$"
          },
          {
            "label": "(b) Equation of Motion",
            "math": "$$5\\ddot{y} + 2\\dot{y} = 20 \\implies \\ddot{y} + 0.4\\dot{y} = 4$$"
          },
          {
            "label": "(c) Velocity Response & Terminal Speed",
            "math": "$$\\dot{y}_{\\text{term}} = 10.0\\text{ m/s}, \\qquad \\dot{y}(t) = 10\\left(1 - e^{-0.4 t}\\right)\\text{ m/s}$$"
          },
          {
            "label": "(d) Graduate Part: Steady-State Cable Tensions",
            "math": "$$T_1 = 30.0\\text{ N}, \\qquad T_2 = 10.0\\text{ N}, \\qquad \\Delta T = T_1 - T_2 = 20.0\\text{ N}$$"
          }
        ]
      }
    },
    {
      "id": "practice-e-3",
      "code": "PRACTICE EXAM E • PROBLEM 3",
      "shortTitle": "Ball Impacting Rigid Circular Dome (Impact Map & Energy Loss)",
      "title": "Planar Ball Impacting a Circular Dome (Contact Guard, Impact Map & Tangential Slip)",
      "subtitle": "Unilateral Guard Function h(q), Normal Collision Velocity, Block Impact Map DAE, Restitution e = 0.50 & Energy Dissipation",
      "category": "Contact & Impacts",
      "badgeClass": "badge-amber",
      "difficulty": "Advanced",
      "estimatedTime": "25 mins",
      "estimatedMinutes": 25,
      "matchedLectures": "Lec 20–22",
      "lectureRefs": [
        {
          "code": "Lec 20",
          "title": "Unilateral Constraints & Contact Detection",
          "time": "16:45"
        },
        {
          "code": "Lec 21",
          "title": "Impulsive Dynamics & Restitution Models",
          "time": "24:10"
        },
        {
          "code": "Lec 22",
          "title": "Block Impact Map DAE & Kinetic Energy Jump",
          "time": "31:20"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 460 300\" width=\"100%\" height=\"230\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow-blue\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#2563eb\" />\n    </marker>\n    <marker id=\"arrow-green\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#059669\" />\n    </marker>\n  </defs>\n\n  <!-- Ground Line -->\n  <line x1=\"20\" y1=\"260\" x2=\"440\" y2=\"260\" stroke=\"#475569\" stroke-width=\"2.5\" />\n\n  <!-- Circular Dome (R = 5 m scaled: R = 180 px, center at x=120, y=260) -->\n  <path d=\"M 120 80 A 180 180 0 0 1 300 260 L 120 260 Z\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"3\" />\n  <circle cx=\"120\" cy=\"260\" r=\"4\" fill=\"#0f172a\" />\n  <text x=\"105\" y=\"278\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">(0,0)</text>\n\n  <!-- Impact Point (3, 4) scaled: dx = 3/5 * 180 = 108, dy = 4/5 * 180 = 144 -> cx = 228, cy = 116 -->\n  <circle cx=\"228\" cy=\"116\" r=\"6\" fill=\"#dc2626\" />\n  <text x=\"240\" y=\"114\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">Impact (3, 4) m</text>\n\n  <!-- Normal vector n = [0.6, 0.8] outward -->\n  <line x1=\"228\" y1=\"116\" x2=\"276\" y2=\"52\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arrow-blue)\" />\n  <text x=\"282\" y=\"60\" font-size=\"11\" font-weight=\"800\" fill=\"#2563eb\">n̂ = [0.6, 0.8]ᵀ</text>\n\n  <!-- Tangent vector t = [-0.8, 0.6] -->\n  <line x1=\"228\" y1=\"116\" x2=\"172\" y2=\"74\" stroke=\"#059669\" stroke-width=\"2\" stroke-dasharray=\"4,2\" marker-end=\"url(#arrow-green)\" />\n  <text x=\"130\" y=\"70\" font-size=\"11\" font-weight=\"700\" fill=\"#059669\">t̂ = [-0.8, 0.6]ᵀ</text>\n\n  <!-- Falling Ball before impact -->\n  <circle cx=\"228\" cy=\"60\" r=\"12\" fill=\"#ef4444\" stroke=\"#991b1b\" stroke-width=\"2\" />\n  <line x1=\"228\" y1=\"72\" x2=\"228\" y2=\"105\" stroke=\"#dc2626\" stroke-width=\"2.5\" marker-end=\"url(#arrow-blue)\" />\n  <text x=\"180\" y=\"88\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">q̇⁻ = [0, -5]ᵀ</text>\n\n  <!-- Parameters Card -->\n  <rect x=\"20\" y=\"25\" width=\"130\" height=\"85\" rx=\"5\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1\" />\n  <text x=\"28\" y=\"42\" font-size=\"10\" font-weight=\"800\" fill=\"#0f172a\">Collision Data:</text>\n  <text x=\"28\" y=\"57\" font-size=\"9\" fill=\"#475569\">Mass m = 1 kg</text>\n  <text x=\"28\" y=\"71\" font-size=\"9\" fill=\"#475569\">Dome R = 5 m</text>\n  <text x=\"28\" y=\"85\" font-size=\"9\" fill=\"#475569\">Restitution e = 0.50</text>\n  <text x=\"28\" y=\"99\" font-size=\"9\" font-weight=\"700\" fill=\"#2563eb\">h(q) = √(x²+y²) - 5</text>\n</svg>",
      "prompt": "A point-mass ball of mass $m = 1\\text{ kg}$ falls vertically downward with pre-impact velocity $\\dot{\\mathbf{q}}^- = [0, -5]^T\\text{ m/s}$ onto a frictionless rigid circular dome of radius $R = 5\\text{ m}$ centered at $(0,0)$. Impact occurs at coordinates $(x, y) = (3, 4)\\text{ m}$. With coefficient of restitution $e = 0.50$: (a) write the guard function $h(\\mathbf{q})$ and calculate normal approach rate $\\dot{h}^-$; (b) formulate the block impact map DAE; (c) calculate the normal impulsive contact force $\\Lambda_N$ and post-impact velocities $\\dot{\\mathbf{q}}^+$; and (d) (Graduate Part) compute the kinetic energy lost during collision $\\Delta T$ and verify tangential momentum conservation.",
      "goalStatement": "Formulate the unilateral contact guard, assemble the block impact DAE, calculate post-impact velocities and normal impulse, and verify energy loss and tangential velocity conservation.",
      "parameters": [
        {
          "symbol": "m",
          "desc": "Ball mass (1 kg)"
        },
        {
          "symbol": "R",
          "desc": "Circular dome radius (5 m)"
        },
        {
          "symbol": "\\mathbf{q}_c",
          "desc": "Impact contact location ([3, 4]ᵀ m)"
        },
        {
          "symbol": "\\dot{\\mathbf{q}}^-",
          "desc": "Pre-impact incoming velocity vector ([0, -5]ᵀ m/s)"
        },
        {
          "symbol": "e",
          "desc": "Newtonian coefficient of restitution (0.50)"
        }
      ],
      "steps": [
        {
          "stepNumber": 1,
          "badge": "STEP 1 OF 4 • CONTACT GUARD & APPROACH VELOCITY",
          "title": "Unilateral Guard Function $h(\\mathbf{q})$ and Normal Approach Speed $\\dot{h}^-$",
          "goal": "Define the algebraic guard function $h(\\mathbf{q}) \\ge 0$ characterizing the allowable airspace above the dome, compute its normal Jacobian $\\mathbf{J}_N$, and evaluate the incoming normal collision speed $\\dot{h}^-$.",
          "intuition": "The dome boundary is the circle $x^2 + y^2 = R^2 = 25$. For the ball outside the dome, $\\sqrt{x^2+y^2} \\ge 5$. The unit normal pointing out of the surface is $\\mathbf{n} = [x/R, y/R]^T = [0.6, 0.8]^T$. Taking the dot product with the velocity vector gives the rate of change of clearance $\\dot{h}^-$. If $\\dot{h}^- < 0$, the body is approaching the surface and an impact occurs.",
          "conceptLinks": [
            "unilateral-hybrid-systems",
            "constraint-jacobian"
          ],
          "hint1": "Guard function $h(\\mathbf{q}) = \\sqrt{x^2 + y^2} - 5$. Its gradient is $\\mathbf{J}_N = [x/\\sqrt{x^2+y^2}, y/\\sqrt{x^2+y^2}]$.",
          "hint2": "At $(3, 4)$, $\\mathbf{J}_N = [3/5, 4/5] = [0.6, 0.8]$. The approach velocity is $\\dot{h}^- = \\mathbf{J}_N \\dot{\\mathbf{q}}^- = 0.6(0) + 0.8(-5) = -4.0\\text{ m/s}$.",
          "checkpoint": {
            "question": "What are the unit outward normal Jacobian $\\mathbf{J}_N$ at $(3, 4)$ and the normal approach velocity $\\dot{h}^-$?",
            "options": [
              "$\\mathbf{J}_N = [0.8, 0.6], \\quad \\dot{h}^- = -3.0\\text{ m/s}$",
              "$\\mathbf{J}_N = [3, 4], \\quad \\dot{h}^- = -20.0\\text{ m/s}$",
              "$\\mathbf{J}_N = [0.6, 0.8], \\quad \\dot{h}^- = -4.0\\text{ m/s}$",
              "$\\mathbf{J}_N = [0.6, -0.8], \\quad \\dot{h}^- = +4.0\\text{ m/s}$"
            ],
            "correctIndex": 2,
            "trapFeedback": [
              "You swapped $x$ and $y$: $\\partial h/\\partial x = x/R = 3/5 = 0.6$ and $\\partial h/\\partial y = y/R = 4/5 = 0.8$.",
              "Jacobian must be normalized into a unit normal vector ($[3/5, 4/5]$) so that $\\dot{h}$ has units of physical velocity.",
              "Correct! $\\mathbf{J}_N = [0.6, 0.8]$ and $\\dot{h}^- = [0.6, 0.8][0, -5]^T = -4.0\\text{ m/s} < 0$, confirming incoming collision.",
              "The outward normal from the dome center $(0,0)$ through $(3,4)$ has positive components in both $+x$ and $+y$."
            ]
          },
          "derivation": "### Step 1: Guard Function and Impact Condition\n\nThe ball moves in the $xy$-plane above a rigid circular dome of radius $R = 5\\text{ m}$. The unilateral non-penetration condition is:\n$$h(\\mathbf{q}) = \\sqrt{x^2 + y^2} - R \\ge 0$$\n\nContact occurs on the switching surface (guard) $h(\\mathbf{q}) = 0$:\n$$h(3, 4) = \\sqrt{3^2 + 4^2} - 5 = \\sqrt{25} - 5 = 0\\text{ m} \\quad \\checkmark$$\n\nThe unit outward normal vector is the configuration gradient of the guard:\n$$\\mathbf{J}_N(\\mathbf{q}) = \\nabla h(\\mathbf{q}) = \\begin{bmatrix} \\frac{\\partial h}{\\partial x} & \\frac{\\partial h}{\\partial y} \\end{bmatrix} = \\begin{bmatrix} \\frac{x}{\\sqrt{x^2+y^2}} & \\frac{y}{\\sqrt{x^2+y^2}} \\end{bmatrix}$$\n\nEvaluating at $(x, y) = (3, 4)\\text{ m}$:\n$$\\mathbf{J}_N = \\begin{bmatrix} \\frac{3}{5} & \\frac{4}{5} \\end{bmatrix} = \\begin{bmatrix} 0.6 & 0.8 \\end{bmatrix}$$\n\nThe pre-impact normal velocity (approach rate) is:\n$$\\dot{h}^- = \\mathbf{J}_N \\dot{\\mathbf{q}}^- = \\begin{bmatrix} 0.6 & 0.8 \\end{bmatrix} \\begin{bmatrix} 0 \\\\ -5 \\end{bmatrix} = 0.6(0) + 0.8(-5) = -4.0\\text{ m/s}$$\n\nBecause $\\dot{h}^- = -4.0\\text{ m/s} < 0$, the mass is actively penetrating the boundary, triggering the impulsive restitution impact map."
        },
        {
          "stepNumber": 2,
          "badge": "STEP 2 OF 4 • BLOCK IMPACT MAP DAE",
          "title": "Assembly of the $3\\times 3$ Saddle-Point Impact Matrix",
          "goal": "Assemble the block impact map DAE relating post-impact velocities $\\dot{\\mathbf{q}}^+$ and normal contact impulse $\\Lambda_N$ to pre-impact momentum and the restitution law.",
          "intuition": "During an infinitesimal impact duration $\\Delta t \\to 0$, finite forces like gravity are negligible compared to the infinite contact impulse. The integrated momentum balance is $\\mathbf{M}(\\dot{\\mathbf{q}}^+ - \\dot{\\mathbf{q}}^-) = \\mathbf{J}_N^T\\Lambda_N$. Combined with Poisson/Newton's restitution law $\\mathbf{J}_N\\dot{\\mathbf{q}}^+ = -e\\mathbf{J}_N\\dot{\\mathbf{q}}^-$, this forms a linear saddle-point system.",
          "conceptLinks": [
            "impact-maps",
            "lagrange-multipliers"
          ],
          "hint1": "The block matrix structure is $\\begin{bmatrix} \\mathbf{M} & -\\mathbf{J}_N^T \\\\ \\mathbf{J}_N & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{\\mathbf{q}}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} \\mathbf{M}\\dot{\\mathbf{q}}^- \\\\ -e\\dot{h}^- \\end{bmatrix}$.",
          "hint2": "Here $\\mathbf{M} = \\mathbf{I}_{2\\times 2}, \\mathbf{M}\\dot{\\mathbf{q}}^- = [0, -5]^T$, and $-e\\dot{h}^- = -(0.50)(-4.0) = +2.0\\text{ m/s}$.",
          "checkpoint": {
            "question": "What is the complete numerical block impact matrix equation for this collision?",
            "options": [
              "$\\begin{bmatrix} 1 & 0 & -0.6 \\\\ 0 & 1 & -0.8 \\\\ 0.6 & 0.8 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{y}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -5.0 \\\\ +2.0 \\end{bmatrix}$",
              "$\\begin{bmatrix} 1 & 0 & 0.6 \\\\ 0 & 1 & 0.8 \\\\ 0.6 & 0.8 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{y}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -5.0 \\\\ -2.0 \\end{bmatrix}$",
              "$\\begin{bmatrix} 1 & 0 & -0.6 \\\\ 0 & 1 & -0.8 \\\\ 0.6 & 0.8 & 1 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{y}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\\\ +2.0 \\end{bmatrix}$",
              "$\\begin{bmatrix} 5 & 0 & -3 \\\\ 0 & 5 & -4 \\\\ 3 & 4 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{y}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -25 \\\\ +10 \\end{bmatrix}$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! Top block is $\\mathbf{M}\\dot{\\mathbf{q}}^+ - \\mathbf{J}_N^T\\Lambda_N = \\mathbf{M}\\dot{\\mathbf{q}}^- = [0, -5]^T$, and bottom row is $\\mathbf{J}_N\\dot{\\mathbf{q}}^+ = -e\\dot{h}^- = +2.0\\text{ m/s}$.",
              "Watch the signs: Newton's second law has $-\\mathbf{J}_N^T\\Lambda_N$ on the LHS, and rebound velocity is positive: $-e\\dot{h}^- = -0.5(-4) = +2.0$.",
              "The lower-right corner of the saddle-point matrix is strictly 0 because the constraint is instantaneous.",
              "While scalar multiples can solve the system, the standard physical unit-normal formulation uses $\\mathbf{J}_N = [0.6, 0.8]$."
            ]
          },
          "derivation": "### Step 2: Formulation of the Block Impact Map\n\nDuring the collision interval $[t^-, t^+]$, integrating Newton's second law over the impulse duration yields:\n$$\\int_{t^-}^{t^+} \\mathbf{M}\\ddot{\\mathbf{q}}\\,dt = \\int_{t^-}^{t^+} (\\mathbf{f}_{\\text{ext}} + \\mathbf{J}_N^T \\lambda)\\,dt$$\n\nSince external forces (such as gravity) are finite, $\\lim_{\\Delta t \\to 0} \\int_{t^-}^{t^+} \\mathbf{f}_{\\text{ext}}\\,dt = \\mathbf{0}$. Defining the normal contact impulse $\\Lambda_N = \\lim_{\\Delta t \\to 0} \\int_{t^-}^{t^+} \\lambda\\,dt$:\n$$\\mathbf{M}(\\dot{\\mathbf{q}}^+ - \\dot{\\mathbf{q}}^-) = \\mathbf{J}_N^T \\Lambda_N \\implies \\mathbf{M}\\dot{\\mathbf{q}}^+ - \\mathbf{J}_N^T \\Lambda_N = \\mathbf{M}\\dot{\\mathbf{q}}^-$$\n\nNewton's kinematic restitution law dictates that the post-impact normal separation velocity must satisfy:\n$$\\dot{h}^+ = -e \\dot{h}^- \\implies \\mathbf{J}_N \\dot{\\mathbf{q}}^+ = -e \\mathbf{J}_N \\dot{\\mathbf{q}}^-$$\n\nAssembling into the linear saddle-point system:\n$$\\begin{bmatrix} \\mathbf{M} & -\\mathbf{J}_N^T \\\\ \\mathbf{J}_N & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{\\mathbf{q}}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} \\mathbf{M}\\dot{\\mathbf{q}}^- \\\\ -e\\dot{h}^- \\end{bmatrix}$$\n\nSubstituting $\\mathbf{M} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$, $\\mathbf{J}_N = \\begin{bmatrix} 0.6 & 0.8 \\end{bmatrix}$, $\\dot{\\mathbf{q}}^- = \\begin{bmatrix} 0 \\\\ -5.0 \\end{bmatrix}$, and $-e\\dot{h}^- = -(0.50)(-4.0) = +2.0$:\n$$\\begin{bmatrix} 1 & 0 & -0.6 \\\\ 0 & 1 & -0.8 \\\\ 0.6 & 0.8 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{y}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -5.0 \\\\ +2.0 \\end{bmatrix}$$"
        },
        {
          "stepNumber": 3,
          "badge": "STEP 3 OF 4 • POST-IMPACT VELOCITIES & IMPULSE",
          "title": "Exact Solution for Contact Impulse $\\Lambda_N$ and Post-Impact Velocity $\\dot{\\mathbf{q}}^+$",
          "goal": "Calculate the Delassus scalar $G$, determine the normal impulse $\\Lambda_N$, and compute the post-impact velocity vector $\\dot{\\mathbf{q}}^+$.",
          "intuition": "The Delassus mobility scalar $G = \\mathbf{J}_N \\mathbf{M}^{-1} \\mathbf{J}_N^T$ measures the effective inverse inertia felt along the surface normal. Here $G = 0.6^2 + 0.8^2 = 1.0\\text{ kg}^{-1}$. The impulse required to reverse the relative velocity from $-4.0\\text{ m/s}$ to $+2.0\\text{ m/s}$ (a total change of $6.0\\text{ m/s}$) for a $1\\text{ kg}$ mass is simply $\\Delta p = 6.0\\text{ N}\\cdot\\text{s}$.",
          "conceptLinks": [
            "impact-maps",
            "constraint-jacobian"
          ],
          "hint1": "Delassus scalar $G = \\mathbf{J}_N \\mathbf{M}^{-1} \\mathbf{J}_N^T = 0.6^2 + 0.8^2 = 1.0$. The impulse is $\\Lambda_N = \\frac{-(1 + e)\\dot{h}^-}{G} = \\frac{-1.5(-4.0)}{1.0} = 6.0\\text{ N}\\cdot\\text{s}$.",
          "hint2": "Post-impact velocity is $\\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- + \\mathbf{M}^{-1}\\mathbf{J}_N^T\\Lambda_N = [0, -5]^T + [0.6, 0.8]^T(6.0)$.",
          "checkpoint": {
            "question": "What are the exact normal contact impulse $\\Lambda_N$ and post-impact velocity vector $\\dot{\\mathbf{q}}^+$?",
            "options": [
              "$\\Lambda_N = 4.0\\text{ N}\\cdot\\text{s}, \\quad \\dot{\\mathbf{q}}^+ = [2.4, -1.8]^T\\text{ m/s}$",
              "$\\Lambda_N = 6.0\\text{ N}\\cdot\\text{s}, \\quad \\dot{\\mathbf{q}}^+ = [3.6, -0.2]^T\\text{ m/s}$",
              "$\\Lambda_N = 8.0\\text{ N}\\cdot\\text{s}, \\quad \\dot{\\mathbf{q}}^+ = [4.8, +1.4]^T\\text{ m/s}$",
              "$\\Lambda_N = 2.0\\text{ N}\\cdot\\text{s}, \\quad \\dot{\\mathbf{q}}^+ = [1.2, -3.4]^T\\text{ m/s}$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "This would correspond to plastic impact ($e=0$), where $\\Lambda_N = -\\dot{h}^- = 4.0\\text{ N}\\cdot\\text{s}$. For $e=0.50$, the impulse includes the restitution phase: $(1+e) = 1.5$.",
              "Correct! $\\Lambda_N = 6.0\\text{ N}\\cdot\\text{s}$ and $\\dot{\\mathbf{q}}^+ = [0 + 0.6(6), -5 + 0.8(6)]^T = [3.6, -0.2]^T\\text{ m/s}$.",
              "This would correspond to super-elastic restitution $e = 1.0$.",
              "Check the restitution factor: $(1 + e) = 1 + 0.5 = 1.5$, not $0.5$."
            ]
          },
          "derivation": "### Step 3: Analytical Solution for Impulse and Velocity\n\n**1. Delassus Operator / Effective Inverse Inertia:**\n$$G = \\mathbf{J}_N \\mathbf{M}^{-1} \\mathbf{J}_N^T = \\begin{bmatrix} 0.6 & 0.8 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 0.6 \\\\ 0.8 \\end{bmatrix} = 0.6^2 + 0.8^2 = 0.36 + 0.64 = 1.0\\text{ kg}^{-1}$$\n\n**2. Contact Normal Impulse $\\Lambda_N$:**\nSolving the block DAE for $\\Lambda_N$ via Schur complement:\n$$\\Lambda_N = \\frac{-(1 + e)\\mathbf{J}_N \\dot{\\mathbf{q}}^-}{G} = \\frac{-(1 + 0.50)(-4.0)}{1.0} = \\frac{-(1.5)(-4.0)}{1.0} = 6.0\\text{ N}\\cdot\\text{s}$$\n\n**3. Post-Impact Velocities $\\dot{\\mathbf{q}}^+$:**\n$$\\dot{\\mathbf{q}}^+ = \\dot{\\mathbf{q}}^- + \\mathbf{M}^{-1} \\mathbf{J}_N^T \\Lambda_N = \\begin{bmatrix} 0 \\\\ -5.0 \\end{bmatrix} + \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 0.6 \\\\ 0.8 \\end{bmatrix} (6.0)$$\n$$\\dot{\\mathbf{q}}^+ = \\begin{bmatrix} 0 \\\\ -5.0 \\end{bmatrix} + \\begin{bmatrix} 3.6 \\\\ 4.8 \\end{bmatrix} = \\begin{bmatrix} 3.6 \\\\ -0.2 \\end{bmatrix}\\text{ m/s}$$\n\n**4. Verification of Restitution:**\n$$\\dot{h}^+ = \\mathbf{J}_N \\dot{\\mathbf{q}}^+ = \\begin{bmatrix} 0.6 & 0.8 \\end{bmatrix} \\begin{bmatrix} 3.6 \\\\ -0.2 \\end{bmatrix} = 0.6(3.6) + 0.8(-0.2) = 2.16 - 0.16 = +2.0\\text{ m/s}$$\n$$-e\\dot{h}^- = -0.50(-4.0) = +2.0\\text{ m/s} \\quad \\checkmark$$\nThe post-impact velocity matches the restitution condition perfectly!"
        },
        {
          "stepNumber": 4,
          "badge": "STEP 4 OF 4 • ENERGY DISSIPATION & TANGENTIAL MOMENTUM (GRADUATE)",
          "title": "Kinetic Energy Loss $\\Delta T$ and Tangential Velocity Invariance",
          "goal": "Calculate pre-impact and post-impact kinetic energies to determine energy lost $\\Delta T$, and verify that tangential momentum is conserved along the dome surface.",
          "intuition": "Because the dome surface is frictionless, the contact impulse acts purely along the surface normal $\\mathbf{n}$. The component of velocity parallel to the tangent vector $\\mathbf{t} = [-0.8, 0.6]^T$ must be completely unaffected ($v_t^+ = v_t^-$). The loss in kinetic energy occurs exclusively along the normal direction: $\\Delta T = \\frac{1}{2}m(1 - e^2)(\\dot{h}^-)^2$.",
          "conceptLinks": [
            "unilateral-hybrid-systems",
            "kinetic-potential-energy"
          ],
          "hint1": "$T^- = \\frac{1}{2}m(0^2 + (-5)^2) = 12.5\\text{ J}$. Compute $T^+ = \\frac{1}{2}m(3.6^2 + (-0.2)^2)$.",
          "hint2": "$3.6^2 + (-0.2)^2 = 12.96 + 0.04 = 13.0$, so $T^+ = 6.5\\text{ J}$. Loss is $\\Delta T = 12.5 - 6.5 = 6.0\\text{ J}$. Tangential vector is $\\hat{\\mathbf{t}} = [-0.8, 0.6]^T$.",
          "checkpoint": {
            "question": "What are the kinetic energy loss $\\Delta T$ and pre/post tangential velocities $v_t^-, v_t^+$ along $\\hat{\\mathbf{t}} = [-0.8, 0.6]^T$?",
            "options": [
              "$\\Delta T = 3.0\\text{ J}, \\quad v_t^- = 0, \\quad v_t^+ = 3.0\\text{ m/s}$",
              "$\\Delta T = 6.0\\text{ J}, \\quad v_t^- = -3.0\\text{ m/s}, \\quad v_t^+ = -3.0\\text{ m/s}$ (conserved!)",
              "$\\Delta T = 12.5\\text{ J}, \\quad v_t^- = -4.0\\text{ m/s}, \\quad v_t^+ = -2.0\\text{ m/s}$",
              "$\\Delta T = 0.0\\text{ J}, \\quad v_t^- = -5.0\\text{ m/s}, \\quad v_t^+ = -5.0\\text{ m/s}$"
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "Check kinetic energy arithmetic: $T^- = 12.5\\text{ J}$ and $T^+ = 6.5\\text{ J}$, giving $\\Delta T = 6.0\\text{ J}$. Tangential velocity is non-zero because the normal is tilted.",
              "Correct! $\\Delta T = 12.5 - 6.5 = 6.0\\text{ J}$. Tangential velocity $v_t = [-0.8, 0.6] \\cdot [0, -5]^T = -3.0\\text{ m/s}$ and $[-0.8, 0.6] \\cdot [3.6, -0.2]^T = -2.88 - 0.12 = -3.0\\text{ m/s}$, proving frictionless slip!",
              "Total kinetic energy is not completely lost because restitution is $e=0.50$ (not $0$) and tangential motion is undamped.",
              "Kinetic energy is conserved only for perfectly elastic collisions ($e=1.0$). For $e=0.50$, energy must decrease."
            ]
          },
          "derivation": "### Step 4: Kinetic Energy Loss and Tangential Conservation (Graduate)\n\n**1. Kinetic Energy Analysis:**\nPre-impact kinetic energy:\n$$T^- = \\frac{1}{2}m\\|\\dot{\\mathbf{q}}^-\\|^2 = \\frac{1}{2}(1.0)\\left(0^2 + (-5.0)^2\\right) = \\frac{1}{2}(25.0) = 12.5\\text{ J}$$\n\nPost-impact kinetic energy:\n$$T^+ = \\frac{1}{2}m\\|\\dot{\\mathbf{q}}^+\\|^2 = \\frac{1}{2}(1.0)\\left(3.6^2 + (-0.2)^2\\right) = \\frac{1}{2}(12.96 + 0.04) = \\frac{1}{2}(13.0) = 6.5\\text{ J}$$\n\nKinetic energy lost during impact:\n$$\\Delta T = T^- - T^+ = 12.5 - 6.5 = 6.0\\text{ J}$$\n\n**2. Theoretical Normal Energy Dissipation Check:**\nUsing the analytical formula for normal impact energy loss:\n$$\\Delta T_{\\text{normal}} = \\frac{1}{2}\\frac{1 - e^2}{G}(\\dot{h}^-)^2 = \\frac{1}{2}\\frac{1 - 0.50^2}{1.0}(-4.0)^2 = \\frac{1}{2}(0.75)(16.0) = 6.0\\text{ J} \\quad \\checkmark$$\nThe entire energy loss is accounted for by the normal restitution damping.\n\n**3. Tangential Velocity Conservation:**\nThe unit tangent vector perpendicular to $\\mathbf{n} = [0.6, 0.8]^T$ is:\n$$\\hat{\\mathbf{t}} = \\begin{bmatrix} -0.8 \\\\ 0.6 \\end{bmatrix}$$\nEvaluating pre-impact tangential velocity:\n$$v_t^- = \\hat{\\mathbf{t}}^T \\dot{\\mathbf{q}}^- = \\begin{bmatrix} -0.8 & 0.6 \\end{bmatrix} \\begin{bmatrix} 0 \\\\ -5.0 \\end{bmatrix} = 0 + (-3.0) = -3.0\\text{ m/s}$$\nEvaluating post-impact tangential velocity:\n$$v_t^+ = \\hat{\\mathbf{t}}^T \\dot{\\mathbf{q}}^+ = \\begin{bmatrix} -0.8 & 0.6 \\end{bmatrix} \\begin{bmatrix} 3.6 \\\\ -0.2 \\end{bmatrix} = -0.8(3.6) + 0.6(-0.2) = -2.88 - 0.12 = -3.0\\text{ m/s}$$\n\nBecause $v_t^+ = v_t^- = -3.0\\text{ m/s}$, the tangential momentum is identically conserved, confirming that no tangential friction impulse was exerted by the smooth dome surface."
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Practice Exam E Problem 3 (Dome Collision)",
        "items": [
          {
            "label": "(a) Contact Guard & Approach Velocity",
            "math": "$$h(\\mathbf{q}) = \\sqrt{x^2 + y^2} - 5, \\qquad \\mathbf{J}_N = \\begin{bmatrix} 0.6 & 0.8 \\end{bmatrix}, \\qquad \\dot{h}^- = -4.0\\text{ m/s}$$"
          },
          {
            "label": "(b) Block Impact Map Matrix Equation",
            "math": "$$\\begin{bmatrix} 1 & 0 & -0.6 \\\\ 0 & 1 & -0.8 \\\\ 0.6 & 0.8 & 0 \\end{bmatrix} \\begin{bmatrix} \\dot{x}^+ \\\\ \\dot{y}^+ \\\\ \\Lambda_N \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -5.0 \\\\ +2.0 \\end{bmatrix}$$"
          },
          {
            "label": "(c) Normal Impulse & Post-Impact Velocity",
            "math": "$$\\Lambda_N = 6.0\\text{ N}\\cdot\\text{s}, \\qquad \\dot{\\mathbf{q}}^+ = \\begin{bmatrix} +3.6 \\\\ -0.2 \\end{bmatrix}\\text{ m/s}, \\qquad \\dot{h}^+ = +2.0\\text{ m/s}$$"
          },
          {
            "label": "(d) Graduate Part: Energy Loss & Tangential Conservation",
            "math": "$$\\Delta T = 6.0\\text{ J} \\text{ (48\\% dissipated)}, \\qquad v_t^+ = v_t^- = -3.0\\text{ m/s} \\text{ (perfect slip)}$$"
          }
        ]
      }
    },
    {
      "id": "practice-e-4",
      "code": "PRACTICE EXAM E • PROBLEM 4",
      "shortTitle": "Tilted Plate on Axle (Inertia Tensor, Angular Momentum & Reactions)",
      "title": "Tilted Square Plate on Axle (Inertia Tensor, Angular Momentum & Gyroscopic Reactions)",
      "subtitle": "Coupled Inertia Tensor with Products of Inertia, Non-Collinear Angular Momentum H_G, Euler Equations & Bearing Reaction Torques",
      "category": "Lagrangian Mechanics",
      "badgeClass": "badge-indigo",
      "difficulty": "Intermediate to Advanced",
      "estimatedTime": "20 mins",
      "estimatedMinutes": 20,
      "matchedLectures": "Lec 14–16",
      "lectureRefs": [
        {
          "code": "Lec 14",
          "title": "3D Rigid Body Kinematics & Angular Velocity",
          "time": "19:15"
        },
        {
          "code": "Lec 15",
          "title": "Inertia Tensor & Principal Axes",
          "time": "26:40"
        },
        {
          "code": "Lec 16",
          "title": "Euler's Rotational Equations & Gyroscopic Torques",
          "time": "22:50"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 460 300\" width=\"100%\" height=\"230\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow-rot\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#2563eb\" />\n    </marker>\n    <marker id=\"arrow-torque\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#d97706\" />\n    </marker>\n  </defs>\n\n  <!-- Spinning Axle along x-axis -->\n  <line x1=\"40\" y1=\"150\" x2=\"420\" y2=\"150\" stroke=\"#334155\" stroke-width=\"5\" stroke-linecap=\"round\" />\n  <text x=\"425\" y=\"154\" font-size=\"12\" font-weight=\"800\" fill=\"#334155\">x (Axle)</text>\n\n  <!-- Bearing A and Bearing B -->\n  <rect x=\"70\" y=\"135\" width=\"20\" height=\"30\" rx=\"3\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"2\" />\n  <text x=\"68\" y=\"180\" font-size=\"10\" font-weight=\"800\" fill=\"#475569\">Bearing A</text>\n  <rect x=\"370\" y=\"135\" width=\"20\" height=\"30\" rx=\"3\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"2\" />\n  <text x=\"368\" y=\"180\" font-size=\"10\" font-weight=\"800\" fill=\"#475569\">Bearing B</text>\n\n  <!-- Center of Mass G -->\n  <circle cx=\"230\" cy=\"150\" r=\"5\" fill=\"#dc2626\" />\n  <text x=\"236\" y=\"145\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">G</text>\n\n  <!-- Tilted Plate mounted on Axle -->\n  <polygon points=\"170,80 290,120 290,220 170,180\" fill=\"rgba(99, 102, 241, 0.35)\" stroke=\"#4f46e5\" stroke-width=\"2.5\" />\n  <text x=\"210\" y=\"110\" font-size=\"11\" font-weight=\"800\" fill=\"#4f46e5\">Plate (45° tilt)</text>\n\n  <!-- Angular velocity vector ω along x -->\n  <line x1=\"230\" y1=\"150\" x2=\"330\" y2=\"150\" stroke=\"#2563eb\" stroke-width=\"3\" marker-end=\"url(#arrow-rot)\" />\n  <text x=\"290\" y=\"140\" font-size=\"12\" font-weight=\"800\" fill=\"#2563eb\">ω = [2, 0, 0]ᵀ rad/s</text>\n\n  <!-- Dynamic Reaction Torque M_G along y (upward perpendicular to x) -->\n  <line x1=\"230\" y1=\"150\" x2=\"230\" y2=\"70\" stroke=\"#d97706\" stroke-width=\"3.5\" marker-end=\"url(#arrow-torque)\" />\n  <text x=\"238\" y=\"85\" font-size=\"12\" font-weight=\"800\" fill=\"#d97706\">M_G = [0, 4, 0]ᵀ N·m</text>\n\n  <!-- Coupling Card -->\n  <rect x=\"20\" y=\"20\" width=\"140\" height=\"45\" rx=\"5\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1\" />\n  <text x=\"28\" y=\"38\" font-size=\"10\" font-weight=\"800\" fill=\"#0f172a\">Off-Diagonal Coupling:</text>\n  <text x=\"28\" y=\"53\" font-size=\"10\" font-weight=\"700\" fill=\"#7c3aed\">I_xz = I_zx = -1 kg·m²</text>\n</svg>",
      "prompt": "A square plate is mounted tilted at $45^\\circ$ on a rigid horizontal axle aligned with the $x$-axis. The axle rotates at constant angular speed $\\boldsymbol{\\omega} = [2, 0, 0]^T\\text{ rad/s}$. In the axle-fixed reference frame ${x, y, z}$ with origin at the center of mass $G$, the inertia tensor is $\\mathbf{I}_G = \\begin{bmatrix} 3 & 0 & -1 \\\\ 0 & 2 & 0 \\\\ -1 & 0 & 3 \\end{bmatrix}\\text{ kg}\\cdot\\text{m}^2$. (a) Calculate the rotational kinetic energy $T$; (b) determine the angular momentum vector $\\mathbf{H}_G$ about the center of mass and explain why $\\mathbf{H}_G$ is not parallel to $\\boldsymbol{\\omega}$; (c) apply Euler's rotational equations to find the dynamic torque $\\mathbf{M}_G$ that the bearings must exert on the axle; and (d) (Graduate Part) for bearings spaced $D = 1.0\\text{ m}$ symmetrically about $G$ at $x = \\pm 0.5\\text{ m}$, calculate the bearing dynamic reaction force couple $\\mathbf{F}_A, \\mathbf{F}_B$.",
      "goalStatement": "Calculate rotational kinetic energy, compute angular momentum with off-diagonal products of inertia, and apply Euler's equations to determine dynamic bearing reaction moments and forces.",
      "parameters": [
        {
          "symbol": "\\mathbf{I}_G",
          "desc": "Rigid plate inertia tensor in axle frame ([3,0,-1; 0,2,0; -1,0,3] kg·m²)"
        },
        {
          "symbol": "\\boldsymbol{\\omega}",
          "desc": "Constant spin velocity vector along x-axle ([2, 0, 0]ᵀ rad/s)"
        },
        {
          "symbol": "I_{xz}",
          "desc": "Off-diagonal product of inertia causing dynamic unbalance (-1 kg·m²)"
        },
        {
          "symbol": "D",
          "desc": "Bearing separation span along x-axle (1.0 m, x = ±0.5 m)"
        }
      ],
      "steps": [
        {
          "stepNumber": 1,
          "badge": "STEP 1 OF 3 • ROTATIONAL KINETIC ENERGY",
          "title": "Rotational Kinetic Energy Calculation",
          "goal": "Compute the rotational kinetic energy $T = \\frac{1}{2}\\boldsymbol{\\omega}^T \\mathbf{I}_G \\boldsymbol{\\omega}$ for steady rotation about the $x$-axle.",
          "intuition": "Even though the inertia tensor has off-diagonal coupling terms $I_{xz} = I_{zx} = -1$, the angular velocity vector only has a component along $x$: $\\boldsymbol{\\omega} = [2, 0, 0]^T$. The quadratic form selects only the top-left diagonal entry $I_{xx} = 3\\text{ kg}\\cdot\\text{m}^2$.",
          "conceptLinks": [
            "kinetic-potential-energy",
            "generalized-coordinates"
          ],
          "hint1": "Evaluate the matrix-vector product $\\mathbf{I}_G \\boldsymbol{\\omega} = [3(2), 0, -1(2)]^T = [6, 0, -2]^T$.",
          "hint2": "Take the dot product $\\frac{1}{2}\\boldsymbol{\\omega}^T [6, 0, -2]^T = \\frac{1}{2}(2)(6) = 6.0\\text{ J}$.",
          "checkpoint": {
            "question": "What is the rotational kinetic energy $T$ of the spinning plate?",
            "options": [
              "$T = 6.0\\text{ J}$",
              "$T = 12.0\\text{ J}$",
              "$T = 8.0\\text{ J}$",
              "$T = 4.0\\text{ J}$"
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! $T = \\frac{1}{2}\\boldsymbol{\\omega}^T\\mathbf{I}_G\\boldsymbol{\\omega} = \\frac{1}{2} I_{xx} \\omega_x^2 = \\frac{1}{2}(3)(2^2) = 6.0\\text{ J}$.",
              "Did you forget the $\\frac{1}{2}$ factor in kinetic energy? $\\boldsymbol{\\omega}^T\\mathbf{I}_G\\boldsymbol{\\omega} = 12\\text{ J}$, so $T = 6\\text{ J}$.",
              "This would include off-diagonal terms that vanish in the kinetic energy quadratic product.",
              "Check $I_{xx} = 3\\text{ kg}\\cdot\\text{m}^2$: $\\frac{1}{2}(3)(4) = 6\\text{ J}$, not $4\\text{ J}$."
            ]
          },
          "derivation": "### Step 1: Rotational Kinetic Energy\n\nThe rotational kinetic energy of a 3D rigid body rotating about its center of mass $G$ is given by the quadratic form:\n$$T = \\frac{1}{2}\\boldsymbol{\\omega}^T \\mathbf{I}_G \\boldsymbol{\\omega}$$\n\nGiven the inertia tensor and angular velocity:\n$$\\mathbf{I}_G = \\begin{bmatrix} 3 & 0 & -1 \\\\ 0 & 2 & 0 \\\\ -1 & 0 & 3 \\end{bmatrix}\\text{ kg}\\cdot\\text{m}^2, \\qquad \\boldsymbol{\\omega} = \\begin{bmatrix} 2 \\\\ 0 \\\\ 0 \\end{bmatrix}\\text{ rad/s}$$\n\nMultiplying $\\mathbf{I}_G \\boldsymbol{\\omega}$:\n$$\\mathbf{I}_G \\boldsymbol{\\omega} = \\begin{bmatrix} 3 & 0 & -1 \\\\ 0 & 2 & 0 \\\\ -1 & 0 & 3 \\end{bmatrix} \\begin{bmatrix} 2 \\\\ 0 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 3(2) + 0 - 1(0) \\\\ 0 + 0 + 0 \\\\ -1(2) + 0 + 3(0) \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 0 \\\\ -2 \\end{bmatrix}\\text{ kg}\\cdot\\text{m}^2/\\text{s}$$\n\nNow computing the scalar product with $\\frac{1}{2}\\boldsymbol{\\omega}^T$:\n$$T = \\frac{1}{2} \\begin{bmatrix} 2 & 0 & 0 \\end{bmatrix} \\begin{bmatrix} 6 \\\\ 0 \\\\ -2 \\end{bmatrix} = \\frac{1}{2}(2 \\times 6 + 0 + 0) = 6.0\\text{ J}$$"
        },
        {
          "stepNumber": 2,
          "badge": "STEP 2 OF 3 • ANGULAR MOMENTUM & DYNAMIC UNBALANCE",
          "title": "Angular Momentum Vector $\\mathbf{H}_G$ and Non-Collinearity",
          "goal": "Determine the angular momentum vector $\\mathbf{H}_G = \\mathbf{I}_G \\boldsymbol{\\omega}$ and identify why $\\mathbf{H}_G$ does not point along the rotation axle.",
          "intuition": "In elementary physics with planar rotation, angular momentum is always parallel to angular velocity: $L = I\\omega$. In 3D dynamics, $\\mathbf{H}_G$ is parallel to $\\boldsymbol{\\omega}$ ONLY IF the rotation axis is an eigenvector of the inertia tensor (a principal axis of inertia). Here, because the plate is tilted at $45^\\circ$, the product of inertia $I_{xz} = -1$ is nonzero, kicking the angular momentum vector into the $z$-direction: $\\mathbf{H}_G = [6, 0, -2]^T$.",
          "conceptLinks": [
            "kinetic-potential-energy",
            "manipulator-equation"
          ],
          "hint1": "Compute $\\mathbf{H}_G = \\mathbf{I}_G \\boldsymbol{\\omega} = [3(2) - 0, 0, -1(2) + 0]^T = [6, 0, -2]^T$.",
          "hint2": "Notice $\\mathbf{H}_G$ has a non-zero $z$-component ($-2\\text{ kg}\\cdot\\text{m}^2/\\text{s}$), whereas $\\boldsymbol{\\omega}$ has zero $z$-component.",
          "checkpoint": {
            "question": "What is the angular momentum vector $\\mathbf{H}_G$, and why is it not parallel to $\\boldsymbol{\\omega}$?",
            "options": [
              "$\\mathbf{H}_G = [6, 0, 0]^T$; it is parallel to $\\boldsymbol{\\omega}$ because the plate is symmetrical.",
              "$\\mathbf{H}_G = [6, 0, -2]^T$; it is not parallel because the rotation axis $x$ is not a principal axis ($I_{xz} = -1 \\ne 0$).",
              "$\\mathbf{H}_G = [6, 4, 0]^T$; it is not parallel due to Coriolis acceleration.",
              "$\\mathbf{H}_G = [0, 0, -2]^T$; the axial momentum is zero."
            ],
            "correctIndex": 1,
            "trapFeedback": [
              "You neglected the off-diagonal product of inertia $I_{zx} = -1$, which generates a $z$-component $H_z = I_{zx}\\omega_x = -2$.",
              "Correct! $\\mathbf{H}_G = [6, 0, -2]^T\\text{ kg}\\cdot\\text{m}^2/\\text{s}$. Because $I_{xz} \\ne 0$, the $x$-axis is not a principal axis of inertia, producing dynamic unbalance.",
              "There is no $y$-component because $I_{yx} = 0$ and $\\omega_y = 0$.",
              "The axial component is $H_x = I_{xx}\\omega_x = 3(2) = 6\\text{ kg}\\cdot\\text{m}^2/\\text{s}$, which is non-zero."
            ]
          },
          "derivation": "### Step 2: Angular Momentum Vector and Dynamic Unbalance\n\nThe angular momentum about the center of mass $G$ in the rotating axle frame is:\n$$\\mathbf{H}_G = \\mathbf{I}_G \\boldsymbol{\\omega} = \\begin{bmatrix} I_{xx} & I_{xy} & I_{xz} \\\\ I_{yx} & I_{yy} & I_{yz} \\\\ I_{zx} & I_{zy} & I_{zz} \\end{bmatrix} \\begin{bmatrix} \\omega_x \\\\ 0 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} I_{xx}\\omega_x \\\\ I_{yx}\\omega_x \\\\ I_{zx}\\omega_x \\end{bmatrix}$$\n\nSubstituting values:\n$$\\mathbf{H}_G = \\begin{bmatrix} 3(2) \\\\ 0(2) \\\\ -1(2) \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 0 \\\\ -2 \\end{bmatrix}\\text{ kg}\\cdot\\text{m}^2/\\text{s}$$\n\n**Physical Significance of Non-Collinearity:**\n- The angular velocity vector points purely along the $x$-axis: $\\boldsymbol{\\omega} = 2\\hat{\\mathbf{i}}$.\n- The angular momentum vector has both an axial component and a transverse component: $\\mathbf{H}_G = 6\\hat{\\mathbf{i}} - 2\\hat{\\mathbf{k}}$.\n- Therefore, $\\mathbf{H}_G \\times \\boldsymbol{\\omega} \\ne \\mathbf{0}$, meaning $\\mathbf{H}_G$ and $\\boldsymbol{\\omega}$ are **not collinear**.\n- This occurs because the axle does not coincide with an eigenvector of $\\mathbf{I}_G$ ($I_{xz} = -1\\text{ kg}\\cdot\\text{m}^2 \\ne 0$). As the axle rotates, the transverse component $-2\\hat{\\mathbf{k}}$ rotates in inertial space, requiring a continuous dynamic torque to prevent the axle from wobbling."
        },
        {
          "stepNumber": 3,
          "badge": "STEP 3 OF 3 • EULER TORQUE & BEARING REACTIONS",
          "title": "Dynamic Bearing Reaction Torque $\\mathbf{M}_G$ and Bearing Reaction Forces",
          "goal": "Apply Euler's rotational equations $\\mathbf{M}_G = \\left(\\frac{d\\mathbf{H}_G}{dt}\\right)_I = \\dot{\\mathbf{H}}_G + \\boldsymbol{\\omega} \\times \\mathbf{H}_G$ to compute the reaction moment and determine the forces on bearings $A$ and $B$.",
          "intuition": "Even though $\\boldsymbol{\\omega}$ is constant in time ($dot{\\boldsymbol{omega}} = 0$), the rotating frame's angular momentum vector rotates in space at rate $\\boldsymbol{\\omega}$. By the transport theorem, the rate of change of angular momentum is $\\boldsymbol{\\omega} \\times \\mathbf{H}_G$. This non-zero time derivative must be supplied by reaction forces from the support bearings.",
          "conceptLinks": [
            "generalized-forces",
            "manipulator-equation"
          ],
          "hint1": "Compute the cross product: $\\boldsymbol{\\omega} \\times \\mathbf{H}_G = [2, 0, 0]^T \\times [6, 0, -2]^T$.",
          "hint2": "$\\mathbf{i} \\times \\mathbf{i} = \\mathbf{0}$, and $\\mathbf{i} \\times (-\\mathbf{k}) = +\\mathbf{j}$. So $2\\hat{\\mathbf{i}} \\times (-2\\hat{\\mathbf{k}}) = +4\\hat{\\mathbf{j}}\\text{ N}\\cdot\\text{m}$.",
          "checkpoint": {
            "question": "What is the dynamic bearing torque $\\mathbf{M}_G$, and what dynamic reaction forces do bearings $A$ ($x = -0.5\\text{ m}$) and $B$ ($x = +0.5\\text{ m}$) exert?",
            "options": [
              "$\\mathbf{M}_G = [0, 4, 0]^T\\text{ N}\\cdot\\text{m}; \\quad \\mathbf{F}_A = [0, 0, +4]^T\\text{ N}, \\quad \\mathbf{F}_B = [0, 0, -4]^T\\text{ N}$",
              "$\\mathbf{M}_G = [0, -4, 0]^T\\text{ N}\\cdot\\text{m}; \\quad \\mathbf{F}_A = [0, +2, 0]^T\\text{ N}, \\quad \\mathbf{F}_B = [0, -2, 0]^T\\text{ N}$",
              "$\\mathbf{M}_G = [0, 0, 0]^T\\text{ N}\\cdot\\text{m}$; no bearing reactions are required at constant spin speed.",
              "$\\mathbf{M}_G = [4, 0, 0]^T\\text{ N}\\cdot\\text{m}$; the motor must provide $4\\text{ N}\\cdot\\text{m}$ to maintain speed."
            ],
            "correctIndex": 0,
            "trapFeedback": [
              "Correct! $\\mathbf{M}_G = \\boldsymbol{\\omega} \\times \\mathbf{H}_G = [0, 4, 0]^T\\text{ N}\\cdot\\text{m} = 4\\hat{\\mathbf{j}}$. For bearings at $x = \\pm 0.5\\text{ m}$, the couple is $\\mathbf{r}_{B/A} \\times \\mathbf{F}_B = (1.0\\hat{\\mathbf{i}}) \\times (-4\\hat{\\mathbf{k}}) = +4\\hat{\\mathbf{j}}$, so $\\mathbf{F}_A = +4\\hat{\\mathbf{k}}\\text{ N}$ and $\\mathbf{F}_B = -4\\hat{\\mathbf{k}}\\text{ N}$.",
              "Watch the cross product sign: $\\hat{\\mathbf{i}} \\times \\hat{\\mathbf{k}} = -\\hat{\\mathbf{j}}$, so $2\\hat{\\mathbf{i}} \\times (-2\\hat{\\mathbf{k}}) = -4(-\\hat{\\mathbf{j}}) = +4\\hat{\\mathbf{j}}$.",
              "This is only true for statically and dynamically balanced rotors. For an unbalanced tilted plate, dynamic bearing reactions are strictly non-zero!",
              "The torque is perpendicular to the axle ($hat{\\mathbf{j}}$ direction), meaning the motor torque along $x$ is zero (neglecting friction). The bearings must absorb this transverse bending moment."
            ]
          },
          "derivation": "### Step 3: Euler's Rotational Equations and Bearing Reactions\n\n**1. Euler's Moment Equation:**\nIn the rotating axle frame ${x, y, z}$, the total rate of change of angular momentum seen from an inertial observer is given by the transport theorem:\n$$\\mathbf{M}_G = \\left(\\frac{d\\mathbf{H}_G}{dt}\\right)_{\\text{inertial}} = \\left(\\frac{d\\mathbf{H}_G}{dt}\\right)_{\\text{body}} + \\boldsymbol{\\omega} \\times \\mathbf{H}_G$$\n\nSince the plate spins at constant angular speed, $\\dot{\\boldsymbol{\\omega}} = \\mathbf{0}$, which implies $\\left(\\frac{d\\mathbf{H}_G}{dt}\\right)_{\\text{body}} = \\mathbf{I}_G \\dot{\\boldsymbol{\\omega}} = \\mathbf{0}$.\n\nEvaluating the gyroscopic cross product term:\n$$\\mathbf{M}_G = \\boldsymbol{\\omega} \\times \\mathbf{H}_G = \\begin{bmatrix} 2 \\\\ 0 \\\\ 0 \\end{bmatrix} \\times \\begin{bmatrix} 6 \\\\ 0 \\\\ -2 \\end{bmatrix}$$\n$$\\mathbf{M}_G = \\begin{vmatrix} \\hat{\\mathbf{i}} & \\hat{\\mathbf{j}} & \\hat{\\mathbf{k}} \\\\ 2 & 0 & 0 \\\\ 6 & 0 & -2 \\end{vmatrix} = \\hat{\\mathbf{i}}(0) - \\hat{\\mathbf{j}}(2(-2) - 0) + \\hat{\\mathbf{k}}(0) = -\\hat{\\mathbf{j}}(-4) = +4\\hat{\\mathbf{j}}\\text{ N}\\cdot\\text{m}$$\n\n$$\\mathbf{M}_G = \\begin{bmatrix} 0 \\\\ 4.0 \\\\ 0 \\end{bmatrix}\\text{ N}\\cdot\\text{m}$$\n\n**2. Dynamic Bearing Reaction Forces (Graduate Part):**\nLet bearing $A$ be located at $\\mathbf{r}_A = [-0.5, 0, 0]^T\\text{ m}$ and bearing $B$ at $\\mathbf{r}_B = [+0.5, 0, 0]^T\\text{ m}$ along the axle.\nBecause the center of mass $G$ is on the axle, the net translational acceleration is zero, so the net bearing force is zero:\n$$\\mathbf{F}_A + \\mathbf{F}_B = \\mathbf{0} \\implies \\mathbf{F}_A = -\\mathbf{F}_B$$\n\nThe bearing forces form a pure dynamic couple that provides the required moment $\\mathbf{M}_G$:\n$$\\mathbf{M}_G = \\mathbf{r}_A \\times \\mathbf{F}_A + \\mathbf{r}_B \\times \\mathbf{F}_B = (-0.5\\hat{\\mathbf{i}}) \\times (-\\mathbf{F}_B) + (0.5\\hat{\\mathbf{i}}) \\times \\mathbf{F}_B = (1.0\\hat{\\mathbf{i}}) \\times \\mathbf{F}_B$$\n$$4.0\\hat{\\mathbf{j}} = \\begin{vmatrix} \\hat{\\mathbf{i}} & \\hat{\\mathbf{j}} & \\hat{\\mathbf{k}} \\\\ 1.0 & 0 & 0 \\\\ F_{Bx} & F_{By} & F_{Bz} \\end{vmatrix} = -F_{Bz}\\hat{\\mathbf{j}} + F_{By}\\hat{\\mathbf{k}}$$\n\nEquating components:\n$$-F_{Bz} = 4.0 \\implies F_{Bz} = -4.0\\text{ N}$$\n$$F_{By} = 0$$\n\nThus, the dynamic bearing reaction forces are:\n$$\\mathbf{F}_B = \\begin{bmatrix} 0 \\\\ 0 \\\\ -4.0 \\end{bmatrix}\\text{ N}, \\qquad \\mathbf{F}_A = -\\mathbf{F}_B = \\begin{bmatrix} 0 \\\\ 0 \\\\ +4.0 \\end{bmatrix}\\text{ N}$$\n\nAs the axle spins at $\\omega = 2\\text{ rad/s}$, this force couple rotates with the axle, causing a cyclic rotating bending load of magnitude $4.0\\text{ N}$ on the bearing supports."
        }
      ],
      "finalAnswer": {
        "summaryTitle": "Complete Verified Solution — Practice Exam E Problem 4 (Tilted Plate & Bearing Reactions)",
        "items": [
          {
            "label": "(a) Rotational Kinetic Energy",
            "math": "$$T = \\frac{1}{2}\\boldsymbol{\\omega}^T \\mathbf{I}_G \\boldsymbol{\\omega} = \\frac{1}{2}I_{xx}\\omega_x^2 = \\frac{1}{2}(3)(2^2) = 6.0\\text{ J}$$"
          },
          {
            "label": "(b) Angular Momentum Vector & Dynamic Unbalance",
            "math": "$$\\mathbf{H}_G = \\mathbf{I}_G \\boldsymbol{\\omega} = \\begin{bmatrix} 6.0 \\\\ 0 \\\\ -2.0 \\end{bmatrix}\\text{ kg}\\cdot\\text{m}^2/\\text{s} \\quad (\\mathbf{H}_G \\nparallel \\boldsymbol{\\omega} \\text{ because } I_{xz} = -1 \\ne 0)$$"
          },
          {
            "label": "(c) Dynamic Reaction Torque on Axle",
            "math": "$$\\mathbf{M}_G = \\boldsymbol{\\omega} \\times \\mathbf{H}_G = \\begin{bmatrix} 0 \\\\ +4.0 \\\\ 0 \\end{bmatrix}\\text{ N}\\cdot\\text{m} = +4.0\\hat{\\mathbf{j}}\\text{ N}\\cdot\\text{m}$$"
          },
          {
            "label": "(d) Graduate Part: Dynamic Bearing Reaction Couple ($D = 1.0\\text{ m}$)",
            "math": "$$\\mathbf{F}_A = \\begin{bmatrix} 0 \\\\ 0 \\\\ +4.0 \\end{bmatrix}\\text{ N}, \\qquad \\mathbf{F}_B = \\begin{bmatrix} 0 \\\\ 0 \\\\ -4.0 \\end{bmatrix}\\text{ N}$$"
          }
        ]
      }
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = window.EXAM2_DATA;
}
