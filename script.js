/* =============================================================
   Portfólio Danilo Paulino — Vanilla HTML/CSS/JS
   Mantém todas as funcionalidades da versão React.
   ============================================================= */

(() => {
  // ---------- Ícones (SVG inline, lucide-like) ----------
  const ICONS = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h4l2 2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2z"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5L17 22l-5-3-5 3 1.5-8.5"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="6 4 20 12 6 20 6 4"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  };

  // ---------- State ----------
  const state = {
    view: "inicio",
    collapsed: false,
    skillsTab: "specialties",
    theme: localStorage.getItem("theme") || "dark",
  };

  // ---------- Helpers ----------
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

  function getGreeting() {
    const h = new Date().getHours();
    if (h < 5) return "Boa Madrugada";
    if (h < 12) return "Bom dia";
    if (h < 18) return "Boa tarde";
    return "Boa noite";
  }

  function applyTheme() {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(state.theme);
    localStorage.setItem("theme", state.theme);
  }

  function renderRich(text) {
    return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  }

  // ---------- Sidebar / Mobile nav ----------
  function renderNav() {
    const sidebarNav = $("#sidebarNav");
    const mobileNav = $("#mobileNav");

    sidebarNav.innerHTML = navItems
      .map(
        (it) => `
        <button data-view="${it.key}" class="${state.view === it.key ? "active" : ""}">
          <span class="ico">${ICONS[it.icon]}</span>
          <span>${it.label}</span>
        </button>`
      )
      .join("");

    mobileNav.innerHTML = `
      <ul>
        ${navItems
          .map(
            (it) => `
          <li>
            <button data-view="${it.key}" class="${state.view === it.key ? "active" : ""}">
              <span class="ico">${ICONS[it.icon]}</span>
              <span>${it.label.split(" ")[0]}</span>
            </button>
          </li>`
          )
          .join("")}
      </ul>`;

    $$("button[data-view]").forEach((b) =>
      b.addEventListener("click", () => setView(b.dataset.view))
    );
  }

  function setView(v) {
    state.view = v;
    renderNav();
    renderContent();
  }

  // ---------- Content rendering ----------
  function renderContent() {
    const content = $("#content");
    content.classList.remove("fade-in");
    if (state.view === "about") {
      content.innerHTML = renderAbout();
    } else if (state.view === "skills") {
      content.innerHTML = renderSkills();
      bindTabs();
    } else {
      content.innerHTML = renderProjects();
    }
    bindCardActions();
    // animate
    requestAnimationFrame(() => {
      $$(".card").forEach((el, i) => {
        el.style.animationDelay = `${i * 50}ms`;
      });
    });
  }

  function renderProjects() {
    const isPI = state.view === "pi";
    const list = isPI ? projects.filter((p) => p.isPI) : projects;
    const title = isPI ? "Projeto Integrador" : getGreeting();
    const sub = isPI ? "Projetos Acadêmicos" : "Meus Projetos no GitHub";
    return `
      <section>
        <h1 class="page-title">${title}</h1>
        <div class="section-head"><span class="bar"></span><h2>${sub}</h2></div>
        <div class="grid">${list.map(projectCardHTML).join("")}</div>
      </section>`;
  }

  function renderSkills() {
    const tabs = [
      { k: "specialties", label: "Minhas Especialidades" },
      { k: "certs", label: "Certificados e Badges" },
    ];
    const grid =
      state.skillsTab === "specialties"
        ? `<div class="grid">${skills.map(projectCardHTML).join("")}</div>`
        : `<div class="grid">${certificates
            .map((c) =>
              projectCardHTML({
                title: c.title,
                description: `${c.issuer} • ${c.date}`,
                image: c.image,
                details: [],
                url: c.url,
                whiteBg: c.whiteBg,
                externalIcon: true,
              })
            )
            .join("")}</div>`;
    return `
      <section>
        <h1 class="page-title">Especialidades & Credenciais</h1>
        <div class="tabs">
          ${tabs
            .map(
              (t) => `
            <button class="tab ${state.skillsTab === t.k ? "active" : ""}" data-tab="${t.k}">
              ${t.label}
            </button>`
            )
            .join("")}
        </div>
        ${grid}
      </section>`;
  }

  function bindTabs() {
    $$(".tab").forEach((b) =>
      b.addEventListener("click", () => {
        state.skillsTab = b.dataset.tab;
        renderContent();
      })
    );
  }

  function projectCardHTML(p) {
    const showInfo = (p.details && p.details.length > 0);
    const showAction = !!(p.url || p.onPreview !== undefined || p.image);
    const hasUrl = !!p.url;
    const ext = !!p.externalIcon;
    return `
      <div class="card" data-title="${escapeAttr(p.title)}" data-url="${escapeAttr(p.url || "")}" data-image="${escapeAttr(p.image || "")}" data-ext="${ext ? "1" : "0"}">
        <div class="card-front">
          <div class="card-image-wrap">
            <div class="card-image ${p.whiteBg ? "white-bg" : ""}">
              <img src="${p.image}" alt="${escapeAttr(p.title)}" loading="lazy" />
            </div>
            <div class="card-actions">
              ${showInfo ? `<button class="btn-info" data-action="info" aria-label="Detalhes">${ICONS.info}</button>` : ""}
              ${(hasUrl || showAction) ? `<button class="btn-play" data-action="${ext ? "ext" : "preview"}" aria-label="${ext ? "Abrir" : "Visualizar"}">${ext ? ICONS.external : ICONS.play}</button>` : ""}
            </div>
          </div>
          <div class="card-text">
            <h3 class="card-title">${p.title}</h3>
            <p class="card-desc">${p.description}</p>
          </div>
        </div>
        <div class="card-note">
          <div class="card-note-head">
            <h3>Detalhes</h3>
            <button class="icon-btn-sm" data-action="close-note" aria-label="Fechar">${ICONS.close}</button>
          </div>
          <div class="card-note-body">
            ${(p.details || []).map((d) => `<p>${renderRich(d)}</p>`).join("")}
          </div>
        </div>
      </div>`;
  }

  function escapeAttr(s) {
    return String(s || "").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  }

  function bindCardActions() {
    $$(".card").forEach((card) => {
      const title = card.dataset.title;
      const url = card.dataset.url;
      const image = card.dataset.image;
      const ext = card.dataset.ext === "1";

      const info = card.querySelector('[data-action="info"]');
      const play = card.querySelector('[data-action="preview"], [data-action="ext"]');
      const close = card.querySelector('[data-action="close-note"]');

      if (info) info.addEventListener("click", (e) => { e.stopPropagation(); card.classList.add("note-open"); });
      if (close) close.addEventListener("click", (e) => { e.stopPropagation(); card.classList.remove("note-open"); });
      if (play) {
        play.addEventListener("click", (e) => {
          e.stopPropagation();
          if (ext && url) window.open(url, "_blank", "noopener");
          else openModal(title, url, image);
        });
      }
    });
  }

  // ---------- About ----------
  function renderAbout() {
    return `
      <section class="about">
        <div class="about-hero">
          <div class="glow1"></div><div class="glow2"></div>
          <div class="about-hero-row">
            <div class="avatar-wrap">
              <div class="avatar-glow"></div>
              <img class="avatar-img" src="${aboutMe.avatar}" alt="${aboutMe.name}" />
            </div>
            <div class="about-text">
              <p class="label">Olá, eu sou</p>
              <h1>${aboutMe.name}</h1>
              <p class="role">${aboutMe.role}</p>
              <div class="about-actions">
                <a class="action-btn solid" href="mailto:contato@example.com">${ICONS.mail} Entrar em contato</a>
                <a class="action-btn outline" href="https://github.com/deletrr" target="_blank" rel="noopener">${ICONS.github} GitHub</a>
                <a class="action-btn outline" href="#">${ICONS.linkedin} LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div class="about-stats">
          ${aboutMe.stats
            .map(
              (s, i) =>
                `<div class="stat" style="animation-delay:${i * 100 + 200}ms">
                   <div class="stat-value">${s.value}</div>
                   <div class="stat-label">${s.label}</div>
                 </div>`
            )
            .join("")}
        </div>

        <div class="about-bio">
          <h2>Sobre mim</h2>
          ${aboutMe.bio.map((p) => `<p>${p}</p>`).join("")}
        </div>

        <div class="about-areas">
          <h2>Áreas de atuação</h2>
          <div class="areas-grid">
            ${aboutMe.highlights
              .map(
                (h, i) => `
              <div class="area" style="animation-delay:${i * 80 + 500}ms">
                <div class="area-icon">${ICONS[h.icon] || ICONS.code}</div>
                <h3>${h.label}</h3>
                <p>${h.description}</p>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </section>`;
  }

  // ---------- Modal ----------
  function openModal(title, url, image) {
    const modal = $("#previewModal");
    $("#modalTitle").textContent = title;
    const body = $("#modalBody");
    if (image) {
      body.innerHTML = `<img src="${image}" alt="${escapeAttr(title)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:.25rem"/>`;
    } else {
      body.innerHTML = `
        <div class="placeholder">
          ${ICONS.image}
          <strong>Preview Indisponível</strong>
          <p>Não há uma imagem configurada para este item.<br/>Use o botão superior direito para abrir em uma nova aba.</p>
        </div>`;
    }
    $("#modalOpen").onclick = () => url && window.open(url, "_blank", "noopener");
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    $("#previewModal").classList.remove("open");
    document.body.style.overflow = "";
  }

  // ---------- Topbar bindings ----------
  function bindTopbar() {
    $("#toggleSidebar").addEventListener("click", () => {
      state.collapsed = !state.collapsed;
      const sidebar = $("#sidebar");
      sidebar.classList.toggle("collapsed", state.collapsed);
      $("#iconChevron").classList.toggle("hidden", state.collapsed);
      $("#iconMenu").classList.toggle("hidden", !state.collapsed);
    });
    $("#toggleTheme").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme();
    });
    $("#contactBtn").addEventListener("click", () => setView("about"));
    $("#avatarBtn").addEventListener("click", () => setView("about"));

    // modal close
    $$('#previewModal [data-close]').forEach((el) => el.addEventListener("click", closeModal));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  // ---------- Wave background ----------
  function initWaves() {
    const canvas = $("#waveCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = 0, height = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const waves = [
      { amp: 90, freq: 0.0035, speed: 0.00018, offset: 0, yBase: 0.55, alpha: 0.55, hueShift: 0 },
      { amp: 130, freq: 0.0022, speed: 0.00012, offset: Math.PI / 2, yBase: 0.65, alpha: 0.4, hueShift: 8 },
      { amp: 70, freq: 0.005, speed: 0.00026, offset: Math.PI, yBase: 0.72, alpha: 0.45, hueShift: -10 },
      { amp: 160, freq: 0.0015, speed: 0.0001, offset: Math.PI * 1.5, yBase: 0.82, alpha: 0.35, hueShift: 4 },
    ];

    function getPrimary() {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
      // CSS var não está no :root, então pega do body
      const bv = getComputedStyle(document.body).getPropertyValue("--primary").trim();
      return (bv || v || "141 76% 48%");
    }

    function draw(t) {
      ctx.clearRect(0, 0, width, height);
      const hsl = getPrimary();
      const parts = hsl.split(/\s+/);
      const h = parseFloat(parts[0]);
      const s = parts[1];
      const l = parts[2];

      waves.forEach((w) => {
        const grad = ctx.createLinearGradient(0, 0, 0, height);
        const color = `hsla(${h + w.hueShift}, ${s}, ${l}, `;
        grad.addColorStop(0, color + "0)");
        grad.addColorStop(0.5, color + w.alpha + ")");
        grad.addColorStop(1, color + "0)");

        ctx.beginPath();
        ctx.moveTo(0, height);
        const baseY = height * w.yBase;
        for (let x = 0; x <= width; x += 6) {
          const y =
            baseY +
            Math.sin(x * w.freq + t * w.speed + w.offset) * w.amp +
            Math.sin(x * w.freq * 2.3 + t * w.speed * 1.4 + w.offset) * (w.amp * 0.35);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  // ---------- Init ----------
  function init() {
    applyTheme();
    $("#year").textContent = new Date().getFullYear();
    renderNav();
    renderContent();
    bindTopbar();
    initWaves();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
