// ═══════════════════════════════════════════════════════
// AXON WIDGET v2.0 — TIE Floating Chat (PRODUCCIÓN)
// Backend seguro en Cloudflare Worker · Sin API key expuesta
// ═══════════════════════════════════════════════════════
(function(){
  'use strict';

  // ── 1. CONFIGURACIÓN ─────────────────────────────────
  // ⚠️ REEMPLAZA esta URL con la de tu Cloudflare Worker después del deployment
  const LOCAL_API_URL = "https://axon-tie.rlecona1.workers.dev/api/chat";
  const IMAGEN_AXON  = 'AXON FACE 2.png';

  // ── 2. DETECCIÓN DE IDIOMA ────────────────────────────
  const isEN = document.documentElement.lang === 'en' ||
               location.pathname.includes('-en.html') ||
               location.pathname.includes('index-en');

  // ── 3. CONTEXTO DE PÁGINA ACTUAL ─────────────────────
  // Solo manda el contexto mínimo de la página — el system prompt
  // completo vive seguro en el Worker, no en el cliente
  const PAGE_MAP = {
    'index':                  {es:'Página Principal TIE',                    en:'TIE Main Page'},
    'teoria':                 {es:'Los Pilares de TIE — Fundamentos',         en:'TIE Pillars — Theory'},
    'theory':                 {es:'Los Pilares de TIE — Fundamentos',         en:'TIE Pillars — Theory'},
    'labs':                   {es:'Laboratorio — 20 Herramientas',            en:'Lab — 20 Tools'},
    'lab-en':                 {es:'Laboratorio — 20 Herramientas',            en:'Lab — 20 Tools'},
    'curvas':                 {es:'H-01 · Curvas de Rotación Galáctica',      en:'H-01 · Galactic Rotation Curves'},
    'sparc':                  {es:'H-02 · Explorador SPARC 175 Galaxias',     en:'H-02 · SPARC Explorer 175 Galaxies'},
    '2pi':                    {es:'H-03 · Calculadora 2π / Constante R@LC',   en:'H-03 · 2π Calculator / RALC Constant'},
    'onto':                   {es:'H-04 · Bisturí T² / Traductor Ontológico', en:'H-04 · T² Scalpel / Ontological Translator'},
    'materia-oscura':         {es:'H-05 · Materia Oscura 84.1%',              en:'H-05 · Dark Matter 84.1%'},
    'constante':              {es:'H-08 · a₀ y Λ Cosmológica',               en:'H-08 · a₀ and Cosmological Λ'},
    'agujeros':               {es:'H-11 · Agujeros Negros TIE vs GR',         en:'H-11 · Black Holes TIE vs GR'},
    'black-holes':            {es:'H-11 · Agujeros Negros TIE vs GR',         en:'H-11 · Black Holes TIE vs GR'},
    'gps':                    {es:'H-12 · Corrección GPS Viscosidad',          en:'H-12 · GPS Correction Viscosity'},
    'reloj-universal':        {es:'H-12.1 · Reloj Universal TIE',             en:'H-12.1 · Universal Clock TIE'},
    'lensing':                {es:'H-07 · Lensing Gravitacional',             en:'H-07 · Gravitational Lensing'},
    'campo-phi':              {es:'H-13 · Campo φ / Ondas Gravitacionales',   en:'H-13 · φ Field / Gravitational Waves'},
    'latex':                  {es:'H-15 · Generador LaTeX TIE',               en:'H-15 · TIE LaTeX Generator'},
    'api':                    {es:'H-16 · API REST Pública TIE',              en:'H-16 · TIE Public REST API'},
    'jerarquia':              {es:'H-17 · Jerarquía Cósmica T⁰/T¹/T²',       en:'H-17 · Cosmic Hierarchy T⁰/T¹/T²'},
    'trinidad':               {es:'H-18 · Trinidad Energética',               en:'H-18 · Energetic Trinity'},
    'simrar':                 {es:'H-19 · Simulador RAR',                     en:'H-19 · RAR Simulator'},
    'rms':                    {es:'H-20 · Test RMS Global SPARC',             en:'H-20 · SPARC Global RMS Test'},
    'predicciones':           {es:'Predicciones Verificables — Semáforo',     en:'Verifiable Predictions — Traffic Light'},
    'predictions':            {es:'Predicciones Verificables — Semáforo',     en:'Verifiable Predictions — Traffic Light'},
    'falsabilidad':           {es:'Criterios de Falsabilidad — Popper',       en:'Falsifiability Criteria — Popper'},
    'falsifiability':         {es:'Criterios de Falsabilidad — Popper',       en:'Falsifiability Criteria — Popper'},
    'papers':                 {es:'Papers y Publicaciones — Zenodo/arXiv',    en:'Papers & Publications — Zenodo/arXiv'},
    'chat':                   {es:'H-14 · AXON Chat Completo',                en:'H-14 · AXON Full Chat'},
  };

  const slug        = location.pathname.split('/').pop().replace('.html','') || 'index';
  const pageMatch   = Object.keys(PAGE_MAP).find(k => slug.includes(k));
  const currentPage = pageMatch
    ? (isEN ? PAGE_MAP[pageMatch].en : PAGE_MAP[pageMatch].es)
    : (isEN ? 'TIE Site' : 'Sitio TIE');

  // ── 4. KATEX (renderizado de ecuaciones) ─────────────
  function ensureKatex(cb){
    if(window.katex){ cb(); return; }
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css';
    document.head.appendChild(link);
    const s    = document.createElement('script');
    s.src      = 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js';
    s.onload   = cb;
    document.head.appendChild(s);
  }

  function renderKatex(element) {
    ensureKatex(() => {
      // Inline math: \( ... \)
      element.innerHTML = element.innerHTML.replace(
        /\\\((.+?)\\\)/gs,
        (_, tex) => {
          try { return katex.renderToString(tex, { throwOnError: false }); }
          catch(e) { return _; }
        }
      );
      // Block math: \[ ... \]
      element.innerHTML = element.innerHTML.replace(
        /\\\[(.+?)\\\]/gs,
        (_, tex) => {
          try { return katex.renderToString(tex, { throwOnError: false, displayMode: true }); }
          catch(e) { return _; }
        }
      );
    });
  }

  // ── 5. ESTILOS ────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #axon-widget {
      position: fixed; bottom: 20px; right: 20px; z-index: 9999;
      font-family: 'Syne', 'Space Mono', monospace;
    }
    #axon-bubble {
      width: 56px; height: 56px; background: #000; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; border: 2px solid #FFD700;
      box-shadow: 0 4px 20px rgba(255,215,0,0.4);
      transition: transform 0.25s, box-shadow 0.25s;
      overflow: hidden;
    }
    #axon-bubble:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 28px rgba(255,215,0,0.65);
    }
    #axon-bubble img { width: 100%; height: 100%; object-fit: cover; }

    #axon-panel {
      display: none;
      position: absolute; bottom: 72px; right: 0;
      width: 340px; height: 500px;
      background: rgba(4,4,14,0.97);
      border: 1px solid rgba(91,200,245,0.25);
      border-radius: 14px;
      flex-direction: column; overflow: hidden;
      backdrop-filter: blur(12px);
      box-shadow: 0 12px 48px rgba(0,0,0,0.75);
      animation: axFadeIn 0.25s ease-out;
    }

    #axon-head {
      padding: 12px 14px;
      background: rgba(255,215,0,0.07);
      border-bottom: 1px solid rgba(255,215,0,0.12);
      display: flex; justify-content: space-between; align-items: center;
      flex-shrink: 0;
    }
    #axon-head-left { display: flex; align-items: center; gap: 8px; }
    #axon-avatar-small {
      width: 28px; height: 28px; border-radius: 50%;
      border: 1px solid #FFD700; overflow: hidden;
      flex-shrink: 0;
    }
    #axon-avatar-small img { width: 100%; height: 100%; object-fit: cover; }
    #axon-title {
      color: #FFD700; font-size: 0.68rem; font-weight: 800;
      letter-spacing: 1.5px; font-family: 'Space Mono', monospace;
    }
    #axon-subtitle {
      color: rgba(255,255,255,0.35); font-size: 0.55rem;
      letter-spacing: 0.5px; margin-top: 1px;
    }
    #axon-close {
      background: none; border: none; color: rgba(255,255,255,0.5);
      cursor: pointer; font-size: 1rem; padding: 2px 4px;
      transition: color 0.2s;
    }
    #axon-close:hover { color: #fff; }

    #axon-msgs {
      flex: 1; overflow-y: auto; padding: 14px;
      display: flex; flex-direction: column; gap: 10px;
      scrollbar-width: thin; scrollbar-color: rgba(255,215,0,0.2) transparent;
    }
    #axon-msgs::-webkit-scrollbar { width: 4px; }
    #axon-msgs::-webkit-scrollbar-thumb { background: rgba(255,215,0,0.2); border-radius: 2px; }

    .ax-m {
      padding: 9px 13px; border-radius: 10px;
      font-size: 0.77rem; line-height: 1.55;
      max-width: 90%; word-wrap: break-word;
      font-family: 'Space Mono', monospace;
    }
    .ax-u {
      align-self: flex-end;
      background: rgba(91,200,245,0.1);
      color: #e8f4fd;
      border: 1px solid rgba(91,200,245,0.2);
    }
    .ax-a {
      align-self: flex-start;
      background: rgba(255,255,255,0.04);
      color: #dde8f0;
      border: 1px solid rgba(255,215,0,0.1);
    }
    .ax-error {
      align-self: flex-start;
      background: rgba(255,68,85,0.1);
      color: #ff6677;
      border: 1px solid rgba(255,68,85,0.25);
    }
    .ax-loader {
      font-size: 0.68rem; color: #FFD700;
      opacity: 0.7; animation: axPulse 1.5s infinite;
    }

    #ax-input-area {
      padding: 10px 12px;
      background: rgba(0,0,0,0.45);
      border-top: 1px solid rgba(255,255,255,0.06);
      display: flex; gap: 8px; flex-shrink: 0;
    }
    #ax-input {
      flex: 1; background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px; color: #fff;
      padding: 8px 11px; outline: none;
      font-size: 0.78rem; font-family: 'Space Mono', monospace;
      transition: border-color 0.2s;
    }
    #ax-input:focus { border-color: rgba(255,215,0,0.4); }
    #ax-input::placeholder { color: rgba(255,255,255,0.25); }
    #ax-send {
      background: #FFD700; border: none; border-radius: 8px;
      padding: 0 14px; cursor: pointer;
      font-weight: 900; color: #000; font-size: 1rem;
      transition: background 0.2s, transform 0.15s;
      flex-shrink: 0;
    }
    #ax-send:hover { background: #ffe033; transform: scale(1.05); }
    #ax-send:active { transform: scale(0.97); }

    #axon-footer {
      padding: 5px 14px 8px;
      text-align: center;
      font-size: 0.5rem;
      color: rgba(255,255,255,0.18);
      letter-spacing: 0.5px;
      flex-shrink: 0;
    }

    @keyframes axFadeIn {
      from { opacity: 0; transform: translateY(8px) scale(0.98); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes axPulse {
      0%   { opacity: 0.3; }
      50%  { opacity: 1; }
      100% { opacity: 0.3; }
    }

    /* Dot indicator de estado */
    #axon-status-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: #00e676; display: inline-block;
      box-shadow: 0 0 5px #00e676;
      animation: axPulse 2s infinite;
    }
  `;
  document.head.appendChild(style);

  // ── 6. TEXTOS I18N ────────────────────────────────────
  const t = {
    greeting: isEN
      ? 'Sync active. Ask me anything about TIE — theory, tools, predictions.'
      : 'Sincronía activa. Pregúntame lo que quieras sobre TIE — teoría, herramientas, predicciones.',
    placeholder: isEN ? 'Ask TIE...'         : 'Pregunta a TIE...',
    loading:     isEN ? 'Processing...'       : 'Procesando...',
    error:       isEN
      ? '⚠️ Connection error. Try again in a moment.'
      : '⚠️ Error de conexión. Intenta de nuevo en un momento.',
    footer:      isEN ? 'R@LC · TIE · 0 free parameters' : 'R@LC · TIE · 0 parámetros libres',
    subtitle:    isEN ? 'TIE Assistant · Gemini'         : 'Asistente TIE · Gemini',
  };

  // ── 7. HTML DEL WIDGET ────────────────────────────────
  const svgFallback = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23000' stroke='%23FFD700' stroke-width='2'/%3E%3Ccircle cx='35' cy='40' r='8' fill='%23FFD700'/%3E%3Ccircle cx='65' cy='40' r='8' fill='%23FFD700'/%3E%3Cpath d='M30 65 Q50 80,70 65' stroke='%23FFD700' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3C/svg%3E`;

  const container = document.createElement('div');
  container.id = 'axon-widget';
  container.innerHTML = `
    <div id="axon-panel">
      <div id="axon-head">
        <div id="axon-head-left">
          <div id="axon-avatar-small">
            <img src="${IMAGEN_AXON}" alt="AXON" onerror="this.src='${svgFallback}'">
          </div>
          <div>
            <div id="axon-title">AXON <span id="axon-status-dot"></span></div>
            <div id="axon-subtitle">${t.subtitle}</div>
          </div>
        </div>
        <button id="axon-close" title="Cerrar">✕</button>
      </div>

      <div id="axon-msgs">
        <div class="ax-m ax-a">${t.greeting}</div>
      </div>

      <div id="ax-input-area">
        <input type="text" id="ax-input" placeholder="${t.placeholder}" autocomplete="off" maxlength="500">
        <button id="ax-send">↑</button>
      </div>
      <div id="axon-footer">${t.footer}</div>
    </div>

    <div id="axon-bubble" title="AXON · Asistente TIE">
      <img src="${IMAGEN_AXON}" alt="AXON" onerror="this.src='${svgFallback}'">
    </div>
  `;
  document.body.appendChild(container);

  // ── 8. REFERENCIAS DOM ────────────────────────────────
  const bubble      = document.getElementById('axon-bubble');
  const panel       = document.getElementById('axon-panel');
  const closeBtn    = document.getElementById('axon-close');
  const input       = document.getElementById('ax-input');
  const sendBtn     = document.getElementById('ax-send');
  const msgs        = document.getElementById('axon-msgs');

  let chatHistory   = [];
  let isLoading     = false;

  // ── 9. TOGGLE ─────────────────────────────────────────
  bubble.onclick = () => {
    const open = panel.style.display === 'flex';
    panel.style.display = open ? 'none' : 'flex';
    if (!open) setTimeout(() => input.focus(), 100);
  };
  closeBtn.onclick = (e) => { e.stopPropagation(); panel.style.display = 'none'; };

  // ── 10. AÑADIR MENSAJE ────────────────────────────────
  function addMessage(role, text, isError = false) {
    const div = document.createElement('div');
    div.className = `ax-m ${role === 'user' ? 'ax-u' : (isError ? 'ax-error' : 'ax-a')}`;
    div.innerHTML = text.replace(/\n/g, '<br>');
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }

  // ── 11. ENVIAR MENSAJE ────────────────────────────────
  async function sendMessage() {
    const text = input.value.trim();
    if (!text || isLoading) return;

    isLoading = true;
    input.value = '';
    sendBtn.disabled = true;

    addMessage('user', text);

    // Loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'ax-m ax-a ax-loader';
    loadingDiv.textContent = t.loading;
    msgs.appendChild(loadingDiv);
    msgs.scrollTop = msgs.scrollHeight;

    try {
      const response = await fetch(WORKER_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            ...chatHistory,
            { role: 'user', parts: [{ text }] }
          ],
          // Solo mandamos el contexto de página — el system prompt completo
          // vive seguro en el Worker
          systemInstruction: {
            parts: [{ text: `PÁGINA_ACTUAL: ${currentPage}\nIDIOMA: ${isEN ? 'EN' : 'ES'}` }]
          }
        })
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || `Error ${response.status}`);

      const reply = data.reply || '';

      // Reemplazar loader con respuesta
      loadingDiv.classList.remove('ax-loader');
      loadingDiv.innerHTML = reply.replace(/\n/g, '<br>');

      // Renderizar ecuaciones LaTeX si las hay
      if (reply.includes('\\(') || reply.includes('\\[')) {
        renderKatex(loadingDiv);
      }

      // Actualizar historial (máximo 10 turnos = 20 mensajes)
      chatHistory.push({ role: 'user',  parts: [{ text }] });
      chatHistory.push({ role: 'model', parts: [{ text: reply }] });
      if (chatHistory.length > 20) chatHistory.splice(0, 2);

    } catch (err) {
      loadingDiv.classList.remove('ax-loader');
      loadingDiv.className = 'ax-m ax-error';
      loadingDiv.textContent = t.error;
      console.error('[AXON]', err);
    } finally {
      isLoading        = false;
      sendBtn.disabled = false;
      input.focus();
      msgs.scrollTop   = msgs.scrollHeight;
    }
  }

  // ── 12. EVENTOS ───────────────────────────────────────
  sendBtn.onclick       = sendMessage;
  input.onkeydown       = (e) => { if (e.key === 'Enter' && !e.shiftKey) sendMessage(); };

})();
