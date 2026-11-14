# EGM 5444 / EML 4930: Advanced Dynamics — Exam 2 Master Formula & Recipe Sheet

**Course:** Advanced Dynamics (FAMU-FSU College of Engineering • Dr. Christian Hubicki)  
**Exam 2 Coverage (Lectures 10–22):** Lagrangian Mechanics, Holonomic Constraints, Constraint Jacobians, Lagrange Multipliers, Baumgarte Stabilization, Unilateral Contact, and Impulsive Impact Maps.

---

## Part 1: Three Master Hand-Derivation Recipes

### Archetype 1: Minimal-Coordinate Lagrangian Mechanics (Lectures 10–12)
**When to Use:** The problem specifies $n = \text{DOF}$ independent generalized coordinates $\mathbf{q} = [q_1, q_2, \dots, q_n]^T$ (e.g., cart position + pendulum angles) and asks for $T$, $V$, $\mathbf{Q}$, or the equations of motion in manipulator form $\mathbf{M}(\mathbf{q})\ddot{\mathbf{q}} = \mathbf{f}(\mathbf{q}, \dot{\\mathbf{q}}, t)$.

1. **Inertial Position & Velocity Kinematics (Chain Rule):**
   $$\mathbf{r}_i(\mathbf{q}, t) = \mathbf{r}_{\text{base}} + \mathbf{r}_{\text{rel}}, \qquad \dot{\mathbf{r}}_i(\mathbf{q}, \dot{\mathbf{q}}, t) = \frac{\partial \mathbf{r}_i}{\partial \mathbf{q}}\dot{\mathbf{q}} + \frac{\partial \mathbf{r}_i}{\partial t}$$
   $$\left\|\dot{\mathbf{r}}_b\right\|^2 = \left\|\dot{\mathbf{r}}_{\text{cart}} + \dot{\mathbf{r}}_{\text{rel}}\right\|^2 = \left\|\dot{\mathbf{r}}_{\text{cart}}\right\|^2 + 2\left(\dot{\mathbf{r}}_{\text{cart}} \cdot \dot{\mathbf{r}}_{\text{rel}}\right) + \left\|\dot{\mathbf{r}}_{\text{rel}}\right\|^2$$
2. **Kinetic Energy $T$, Potential Energy $V$, and Lagrangian $L = T - V$:**
   $$T(\mathbf{q}, \dot{\mathbf{q}}) = \sum_i \frac{1}{2}m_i \left\|\dot{\mathbf{r}}_i\right\|^2 + \sum_j \frac{1}{2}\boldsymbol{\omega}_j^T \mathbf{I}_j \boldsymbol{\omega}_j = \frac{1}{2}\dot{\mathbf{q}}^T \mathbf{M}(\mathbf{q})\dot{\mathbf{q}}$$
   $$V(\mathbf{q}) = \sum_i m_i g z_i + \sum_s \frac{1}{2}k_s\left(\|\mathbf{p}_s - \mathbf{A}_s\| - L_{0,s}\right)^2$$
3. **Non-Conservative Generalized Forces $\mathbf{Q}$ (Virtual Work & Rayleigh Dissipation):**
   $$\delta W_{\text{nc}} = \mathbf{Q}^T \delta\mathbf{q} \implies Q_j = \sum_k \mathbf{F}_k^{\text{nc}} \cdot \frac{\partial \mathbf{r}_k}{\partial q_j} - \frac{\partial \mathcal{R}}{\partial \dot{q}_j}, \qquad \mathcal{R} = \frac{1}{2}b\left(\dot{x}^2 + \dot{y}^2\right)$$
4. **Euler–Lagrange Equations & Manipulator Form $\mathbf{M}(\mathbf{q})\ddot{\mathbf{q}} = \mathbf{f}(\mathbf{q}, \dot{\mathbf{q}}, t)$:**
   $$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\mathbf{q}}}\right)^T - \left(\frac{\partial L}{\partial \mathbf{q}}\right)^T = \mathbf{Q} \iff \mathbf{M}(\mathbf{q})\ddot{\mathbf{q}} = \mathbf{f}(\mathbf{q}, \dot{\mathbf{q}}, t)$$
   - **Direct Mass-Matrix Extraction Shortcut:** Because $T = \frac{1}{2}\sum_i M_{ii}\dot{q}_i^2 + \sum_{i < j} M_{ij}\dot{q}_i\dot{q}_j$, read $M_{ij}$ directly from $T$:
     $$M_{ii} = \text{coeff of }\frac{1}{2}\dot{q}_i^2, \qquad M_{ij} = M_{ji} = \frac{\partial^2 T}{\partial \dot{q}_i \partial \dot{q}_j} = \text{full coeff of }\dot{q}_i\dot{q}_j \;(i \ne j)$$

---

### Archetype 2: Constrained Systems, Lagrange Multipliers & Baumgarte Stabilization (Lectures 13, 17, 22)
**When to Use:** The problem uses maximal coordinates $\mathbf{q} \in \mathbb{R}^n$ subject to $m$ holonomic constraints $g(\mathbf{q}) = \mathbf{0}$ (e.g., rigid rod of length $\ell$, inextensible rope over a pulley, sliders on tracks) and asks for $\mathbf{J}$, $\dot{\mathbf{J}}\dot{\mathbf{q}}$, $\lambda$, or the augmented DAE block matrix.

1. **Holonomic Position, Velocity & Acceleration Constraints:**
   $$g(\mathbf{q}) = 0, \qquad \text{Rigid Rod Trick: } g(\mathbf{q}) = \frac{1}{2}\left(\|\mathbf{r}_b - \mathbf{r}_a\|^2 - \ell^2\right) = 0$$
   $$\dot{g} = \mathbf{J}(\mathbf{q})\dot{\mathbf{q}} = 0, \qquad \text{where } \mathbf{J}(\mathbf{q}) = \frac{\partial g}{\partial \mathbf{q}} \in \mathbb{R}^{m \times n}$$
   $$\ddot{g} = \mathbf{J}(\mathbf{q})\ddot{\mathbf{q}} + \dot{\mathbf{J}}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} = 0 \implies \mathbf{J}\ddot{\mathbf{q}} = -\dot{\mathbf{J}}\dot{\mathbf{q}}$$
2. **Baumgarte Constraint Stabilization ($\omega_B, \zeta$):**
   $$\ddot{g} + 2\zeta\omega_B\dot{g} + \omega_B^2 g = 0 \implies \mathbf{J}\ddot{\mathbf{q}} = -\dot{\mathbf{J}}\dot{\mathbf{q}} - 2\zeta\omega_B\left(\mathbf{J}\dot{\mathbf{q}}\right) - \omega_B^2 g(\mathbf{q})$$
3. **Constrained Equations of Motion & Augmented Saddle-Point DAE Matrix:**
   $$\mathbf{M}\ddot{\mathbf{q}} = \mathbf{F} + \mathbf{J}^T\lambda \iff \begin{bmatrix} \mathbf{M} & -\mathbf{J}^T \\ \mathbf{J} & \mathbf{0} \end{bmatrix} \begin{bmatrix} \ddot{\mathbf{q}} \\ \lambda \end{bmatrix} = \begin{bmatrix} \mathbf{F} \\ -\dot{\mathbf{J}}\dot{\mathbf{q}} - 2\zeta\omega_B(\mathbf{J}\dot{\mathbf{q}}) - \omega_B^2 g \end{bmatrix}$$
   *(Note: If the constraint force is written as $-T\mathbf{J}^T$ with tension $T \ge 0$, moving $-T\mathbf{J}^T$ to the LHS gives $+\mathbf{J}^T$ in the top-right block!)*
4. **Explicit Hand Solution for the Lagrange Multiplier $\lambda$:**
   $$\lambda = -\left(\mathbf{J}\mathbf{M}^{-1}\mathbf{J}^T\right)^{-1}\left(\mathbf{J}\mathbf{M}^{-1}\mathbf{F} + \dot{\mathbf{J}}\dot{\mathbf{q}}\right)$$

---

### Archetype 3: Contact, Plastic Catch & Restitution Impact Maps (Lectures 14, 20, 21)
**When to Use:** A slack rope snaps taut ($g(\mathbf{q}) = 0, \dot{g}^- > 0$) or a body strikes a rigid surface/bumper ($g_N(\mathbf{q}) = 0, \dot{g}_N^- < 0$), causing an instantaneous velocity jump $\dot{\mathbf{q}}^- \to \dot{\mathbf{q}}^+$ and impulse $\Lambda$.

1. **Impulse–Momentum Balance & Restitution Law ($0 \le e \le 1$; $e = 0$ for Plastic Catch):**
   $$\mathbf{M}\left(\dot{\mathbf{q}}^+ - \dot{\mathbf{q}}^-\right) + \mathbf{J}^T\Lambda = \mathbf{0}, \qquad \mathbf{J}\dot{\mathbf{q}}^+ = -e\,\mathbf{J}\dot{\mathbf{q}}^-$$
   $$\begin{bmatrix} \mathbf{M} & \mathbf{J}^T \\ \mathbf{J} & \mathbf{0} \end{bmatrix} \begin{bmatrix} \dot{\mathbf{q}}^+ \\ \Lambda \end{bmatrix} = \begin{bmatrix} \mathbf{M}\dot{\mathbf{q}}^- \\ -e\,\mathbf{J}\dot{\mathbf{q}}^- \end{bmatrix}$$
2. **Closed-Form Impulse $\Lambda$ & Post-Impact Velocity $\dot{\mathbf{q}}^+$ (via Delassus Matrix $\mathbf{G} = \mathbf{J}\mathbf{M}^{-1}\mathbf{J}^T$):**
   $$\Lambda = (1 + e)\left(\mathbf{J}\mathbf{M}^{-1}\mathbf{J}^T\right)^{-1}\mathbf{J}\dot{\mathbf{q}}^-, \qquad \dot{\mathbf{q}}^+ = \dot{\mathbf{q}}^- - \mathbf{M}^{-1}\mathbf{J}^T\Lambda$$
   $$\text{For Plastic Impact }(e = 0): \quad \dot{\mathbf{q}}^+ = \left[\mathbf{I} - \mathbf{M}^{-1}\mathbf{J}^T\left(\mathbf{J}\mathbf{M}^{-1}\mathbf{J}^T\right)^{-1}\mathbf{J}\right]\dot{\mathbf{q}}^-$$
3. **Mechanical Energy Change Across Impact ($\Delta E = T^+ - T^- \le 0$):**
   $$\Delta E = -\frac{1}{2}\left(1 - e^2\right)\left(\mathbf{J}\dot{\mathbf{q}}^-\right)^T \left(\mathbf{J}\mathbf{M}^{-1}\mathbf{J}^T\right)^{-1} \left(\mathbf{J}\dot{\mathbf{q}}^-\right) \le 0$$
4. **Unilateral Hybrid Mode Switching Guards:**
   - **Taut $\to$ Slack (or Contact $\to$ Liftoff):** Triggered when tension/normal force crosses zero downward ($T(t) = 0, \dot{T} < 0$).
   - **Slack $\to$ Taut (or Flight $\to$ Impact):** Triggered when constraint gap $g(\mathbf{q})$ crosses zero into violation ($g(\mathbf{q}) = 0$), applying the impact reset map.

---

## Part 2: Key Reference Geometries & Exam Watchouts

| System / Geometry | Key Kinematic / Dynamic Formulas | Exam Watchout |
| :--- | :--- | :--- |
| **3D Spherical Pendulum on Cart** $\mathbf{q} = [x, y, \alpha, \beta]^T$ | $\mathbf{r}_b = \begin{bmatrix} x + \ell\cos\beta\sin\alpha \\ y + \ell\sin\beta \\ -\ell\cos\beta\cos\alpha \end{bmatrix}$, $\quad \|\dot{\mathbf{r}}_{\text{rel}}\|^2 = \ell^2(\dot{\alpha}^2\cos^2\beta + \dot{\beta}^2)$ | Don't drop the cart-pendulum cross terms $2\dot{\mathbf{r}}_{\text{cart}}\cdot\dot{\mathbf{r}}_{\text{rel}}$ when squaring $\|\dot{\mathbf{r}}_b\|^2$! |
| **3D Maximal Rod Constraint** $\mathbf{q} = [x, y, x_b, y_b, z_b]^T$ | $g = \frac{1}{2}[(x_b-x)^2 + (y_b-y)^2 + z_b^2 - \ell^2] = 0$<br>$\mathbf{J} = [-(x_b-x), -(y_b-y), x_b-x, y_b-y, z_b]$<br>$\dot{\mathbf{J}}\dot{\mathbf{q}} = (\dot{x}_b-\dot{x})^2 + (\dot{y}_b-\dot{y})^2 + \dot{z}_b^2$ | Differentiating with respect to cart coordinates $(x, y)$ introduces a $-1$ chain-rule sign! |
| **Finite-Radius Pulley ($r > 0$)** $\mathbf{q} = [x_1, y_1, x_2, y_2]^T$ | $s_i = \sqrt{d_i^2 - r^2}, \quad \beta = 2\pi - \sum_{i=1}^2 (\vartheta_i + \arccos\frac{r}{d_i})$<br>$\mathbf{J} = \begin{bmatrix} \frac{s_1 x_1 - r y_1}{d_1^2}, & \frac{s_1 y_1 + r x_1}{d_1^2}, & \frac{s_2 x_2 + r y_2}{d_2^2}, & \frac{s_2 y_2 - r x_2}{d_2^2} \end{bmatrix} = [\hat{\mathbf{u}}_1^T, \hat{\mathbf{u}}_2^T]$ | Each $1\times 2$ block $\hat{\mathbf{u}}_i$ is a unit vector ($\|\hat{\mathbf{u}}_i\| = 1$), so $\mathbf{J}\mathbf{M}^{-1}\mathbf{J}^T = \frac{1}{m_1} + \frac{1}{m_2}$! |
| **Planar Cart-Pendulum Impact** $\mathbf{q} = [x, \theta]^T$ | $\mathbf{M}(\theta) = \begin{bmatrix} M+m & m\ell\cos\theta \\ m\ell\cos\theta & m\ell^2 \end{bmatrix}, \quad \mathbf{J}_w = [1, 0]$<br>$\dot{\theta}^+ = \dot{\theta}^- + \frac{\cos\theta_c}{\ell}\dot{x}^-, \quad \Lambda = (M + m\sin^2\theta_c)\dot{x}^-$ | Because $M_{12} = m\ell\cos\theta \ne 0$, stopping the cart ($\dot{x}^+ = 0$) causes an instantaneous jump in $\dot{\theta}^+$! |
| **Orthogonal Track Sliders** $\mathbf{q} = [x_1, y_2]^T$ | $g(\mathbf{q}) = \frac{1}{2}(x_1^2 + y_2^2 - \ell^2) = 0, \quad \mathbf{J} = [x_1, y_2], \quad \dot{\mathbf{J}}\dot{\mathbf{q}} = \dot{x}_1^2 + \dot{y}_2^2$<br>$\lambda = -\frac{\frac{x_1}{m_1}F_{\text{ext}} - g y_2 + \dot{x}_1^2 + \dot{y}_2^2}{\frac{x_1^2}{m_1} + \frac{y_2^2}{m_2}}, \quad T_{\text{rod}} = -\ell\lambda$ | Since $\|\mathbf{J}^T\| = \sqrt{x_1^2 + y_2^2} = \ell$, the physical axial rod tension is $T_{\text{rod}} = -\ell\lambda$! |
| **Articulated Foot Restitution** $\mathbf{q} = [y_h, \theta]^T$ | $\mathbf{M}(\theta) = \begin{bmatrix} M_h+m_f & m_f\ell\sin\theta \\ m_f\ell\sin\theta & m_f\ell^2 \end{bmatrix}, \quad \mathbf{J}_N = [1, \ell\sin\theta]$<br>$G = \mathbf{J}_N\mathbf{M}^{-1}\mathbf{J}_N^T = \frac{m_f\cos^2\theta + M_h\sin^2\theta}{m_f(M_h + m_f\cos^2\theta)}, \quad \Lambda_N = -(1+e)G^{-1}\mathbf{J}_N\dot{\mathbf{q}}^-$ | At $\theta = 0$, $G = \frac{1}{M_h+m_f}$; at $\theta = 90^\circ$, $G = \frac{1}{m_f}$. Energy loss scales with $(1 - e^2)$! |
