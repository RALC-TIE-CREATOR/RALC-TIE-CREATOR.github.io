// ═══════════════════════════════════════════════════════
// AXON WIDGET v1.6 — TIE Floating Chat (Vercel Tunnel)
// Sincronizado con el Fuerte Digital H-01 a H-20
// ═══════════════════════════════════════════════════════
(function(){
  'use strict';

  // ── 1. CONFIGURACIÓN DE CONEXIÓN (Túnel Vercel) ───────
  const VERCEL_API_URL = "https://ralc-tie-creator-github-io.vercel.app/api/chat";

  // ── 2. 🔴 [SECCIÓN: AQUI PEGAR EL CONTEXTO] 🔴 ────────
  // Pega aquí el contenido de tu "Contexto Maestro" (Libro + 20 Herramientas).
  // Asegúrate de envolverlo en comillas invertidas (backticks).
  
  const MASTER_CONTEXT = `AQUI_PEGAR_EL_CONTEXTO_DEL_LIBRO_Y_HERRAMIENTAS`;

  // ──────────────────────────────────────────────────────

  // Detección de Idioma
  const isEN = document.documentElement.lang === 'en' || 
               location.pathname.includes('-en.html') || 
               location.pathname.includes('index-en');

  // Mapa de Navegación del Sitio (Contexto de Página)
  const PAGE_MAP = {
    'index':                  {es:'Página principal TIE',                                                          en:'TIE Home'},
    'teoria':                 {es:'Teoría TIE Fundamentos',                                                        en:'TIE Theory Foundations'},
    'predicciones':           {es:'Predicciones TIE',                                                              en:'TIE Predictions'},
    'papers':                 {es:'Papers y Publicaciones',                                                        en:'TIE Papers'},
    'labs':                   {es:'Hub de Laboratorios',                                                           en:'TIE Labs Hub'},
    'constante':              {es:'H-01 · Constante Cosmológica',                                                  en:'H-01 · Cosmological Constant'},
    'masa-critica':           {es:'H-02 · Masa Crítica',                                                            en:'H-02 · Critical Mass'},
    'agujeros':               {es:'H-03 · Agujeros Negros',                                                         en:'H-03 · Black Holes'},
    'curvas':                 {es:'H-04 · Curvas de Rotación',                                                      en:'H-04 · Rotation Curves'},
    'sparc':                  {es:'H-05 · Base de datos SPARC',                                                    en:'H-05 · SPARC DB'},
    'gps':                    {es:'H-06 · GPS y Relojes',                                                           en:'H-06 · GPS Correction'},
    'lensing':                {es:'H-07 · Lensing Gravitacional 3D',                                               en:'H-07 · 3D Lensing'},
    '2pi':                    {es:'H-08 · Factor 2π',                                                              en:'H-08 · 2π Factor'},
    'materia-oscura':         {es:'H-09 · Materia Oscura',                                                         en:'H-09 · Dark Matter'},
    'reloj-universal':        {es:'H-10 · Reloj Universal',                                                         en:'H-10 · Universal Clock'},
    'falsibilidad':           {es:'H-11 · Falsificabilidad',                                                       en:'H-11 · Falsifiability'},
    'campo-phi':              {es:'H-13 · Campo φ / Ondas GW',                                                     en:'H-13 · φ Field / GW Waves'},
    'chat':                   {es:'H-14 · AXON Chat',                                                              en:'H-14 · AXON Chat'},
    'latex':                  {es:'H-15 · Generador LaTeX',                                                        en:'H-15 · LaTeX Gen'},
    'api':                    {es:'H-16 · API REST TIE',                                                           en:'H-16 · TIE REST API'},
    'jerarquia':              {es:'H-17 · Jerarquía Cósmica',                                                       en:'H-17 · Cosmic Hierarchy'},
    'trinidad':               {es:'H-18 · Trinidad Energética',                                                    en:'H-18 · Energetic Trinity'},
    'traductor_ontologico':   {es:'H-19 · Bisturí T² / Traductor',                                                  en:'H-19 · T² Scalpel'},
    'rms':                    {es:'H-20 · Test RMS Galaxias',                                                      en:'H-20 · RMS Galaxy Test'}
  };

  const slug = location.pathname.split('/').pop().replace('.html','') || 'index';
  const pageMatch = Object.keys(PAGE_MAP).find(k => slug.includes(k));
  const currentPage = pageMatch ? (isEN ? PAGE_MAP[pageMatch].en : PAGE_MAP[pageMatch].es) : 'Sitio TIE';

  // Helper para renderizado matemático KaTeX
  function ensureKatex(cb){
    if(window.katex){ cb(); return; }
    const link = document.createElement('link'); link.rel='stylesheet'; link.href='https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css';
    document.head.appendChild(link);
    const s=document.createElement('script'); s.src='https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js'; s.onload=cb;
    document.head.appendChild(s);
  }

  // Estilos visuales del Widget (Stark Industries Style)
  const style = document.createElement('style');
  style.textContent = `
    #axon-widget { position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-family: 'Syne', sans-serif; }
    #axon-bubble { 
      width: 55px; height: 55px; background: #FFD700; border-radius: 50%; 
      display: flex; align-items: center; justify-content: center; cursor: pointer;
      box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4); transition: 0.3s; border: 2px solid #000;
    }
    #axon-bubble:hover { transform: scale(1.1); box-shadow: 0 6px 25px rgba(255, 215, 0, 0.6); }
    #axon-panel { 
      display: none; position: absolute; bottom: 70px; right: 0; width: 340px; 
      height: 480px; background: rgba(5, 5, 15, 0.98); border: 1px solid rgba(91, 200, 245, 0.3);
      border-radius: 12px; flex-direction: column; overflow: hidden; backdrop-filter: blur(10px);
      box-shadow: 0 10px 40px rgba(0,0,0,0.7); animation: axFadeIn 0.3s ease-out;
    }
    #axon-head { 
      background: rgba(255, 215, 0, 0.1); padding: 12px; 
      border-bottom: 1px solid rgba(255, 215, 0, 0.15); 
      display: flex; justify-content: space-between; align-items: center; 
    }
    #axon-msgs { 
      flex: 1; overflow-y: auto; padding: 15px; display: flex; 
      flex-direction: column; gap: 10px; scrollbar-width: thin; 
    }
    .ax-m { 
      padding: 8px 12px; border-radius: 10px; font-size: 0.78rem; 
      line-height: 1.5; max-width: 88%; font-family: 'Space Mono', monospace; 
      word-wrap: break-word;
    }
    .ax-u { align-self: flex-end; background: rgba(91, 200, 245, 0.12); color: #fff; border: 1px solid rgba(91, 200, 245, 0.2); }
    .ax-a { align-self: flex-start; background: rgba(255, 255, 255, 0.04); color: #e0e0e0; border: 1px solid rgba(255, 215, 0, 0.1); }
    #ax-input-area { padding: 10px; background: rgba(0,0,0,0.5); border-top: 1px solid rgba(255,255,255,0.05); display: flex; gap: 8px; }
    #ax-input { flex: 1; background: transparent; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; color: #fff; padding: 8px; outline: none; font-size: 0.8rem; }
    #ax-send { background: #FFD700; border: none; border-radius: 6px; padding: 0 12px; cursor: pointer; font-weight: 800; }
    .ax-loader { font-size: 0.7rem; color: #FFD700; opacity: 0.6; }
    @keyframes axFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  `;
  document.head.appendChild(style);

  // Inyectar estructura DOM
  const container = document.createElement('div');
  container.id = 'axon-widget';
  container.innerHTML = `
    <div id="axon-panel">
      <div id="axon-head">
        <span style="color:#FFD700; font-size:0.7rem; font-weight:800; letter-spacing:1px; font-family:'Space Mono';">AXON_H14 // WIDGET</span>
        <button id="axon-close" style="background:none; border:none; color:#fff; cursor:pointer; font-size:1.1rem;">✕</button>
      </div>
      <div id="axon-msgs">
        <div class="ax-m ax-a">${isEN ? 'Synchrony active. How can I assist you in this lab?' : 'Sincronía activa en la red. ¿Cómo puedo asistirte en este laboratorio?'}</div>
      </div>
      <div id="ax-input-area">
        <input type="text" id="ax-input" placeholder="${isEN ? 'Ask TIE...' : 'Pregunta a TIE...'}" autocomplete="off">
        <button id="ax-send">↑</button>
      </div>
    </div>
    <div id="axon-bubble">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    </div>
  `;
  document.body.appendChild(container);

  const bubble = document.getElementById('axon-bubble');
  const panel = document.getElementById('axon-panel');
  const closeBtn = document.getElementById('axon-close');
  const input = document.getElementById('ax-input');
  const sendBtn = document.getElementById('ax-send');
  const msgsContainer = document.getElementById('axon-msgs');
  
  let chatHistory = [];

  bubble.onclick = () => { 
    const isVisible = panel.style.display === 'flex';
    panel.style.display = isVisible ? 'none' : 'flex';
    if(!isVisible) input.focus();
  };
  closeBtn.onclick = (e) => { e.stopPropagation(); panel.style.display = 'none'; };

  function appendMessage(role, text, isLoader = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ax-m ${role === 'user' ? 'ax-u' : 'ax-a'}`;
    if(isLoader) msgDiv.classList.add('ax-loader');
    msgDiv.textContent = text;
    msgsContainer.appendChild(msgDiv);
    msgsContainer.scrollTop = msgsContainer.scrollHeight;
    return msgDiv;
  }

  async function sendMessage() {
    const text = input.value.trim();
    if(!text) return;

    input.value = '';
    appendMessage('user', text);
    const loadingMsg = appendMessage('bot', '...', true);

    try {
      const response = await fetch(VERCEL_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [...chatHistory, { role: 'user', parts: [{ text: text }] }],
          systemInstruction: { parts: [{ text: `CONTEXTO_PAGINA_ACTUAL: ${currentPage}\n\n` + MASTER_CONTEXT }] }
        })
      });

      const data = await response.json();
      loadingMsg.classList.remove('ax-loader');

      if (!response.ok) throw new Error(data.error || "Fallo de Túnel");

      const reply = data.reply;
      loadingMsg.innerHTML = reply.replace(/\n/g, '<br>');
      
      // Aplicar KaTeX para fórmulas TIE
      ensureKatex(() => {
        loadingMsg.innerHTML = loadingMsg.innerHTML.replace(/\\\((.+?)\\\)/gs, (_, tex) => {
          try { return katex.renderToString(tex, { throwOnError: false }); } 
          catch(e) { return _; }
        });
      });

      chatHistory.push({ role: 'user', parts: [{ text: text }] });
      chatHistory.push({ role: 'model', parts: [{ text: reply }] });
      if(chatHistory.length > 20) chatHistory.shift();

    } catch (err) {
      loadingMsg.textContent = "ALERTA: Error de sincronía con la infraestructura Vercel.";
      loadingMsg.style.color = "#FF4455";
    }
  }

  sendBtn.onclick = sendMessage;
  input.onkeydown = (e) => { if(e.key === 'Enter') sendMessage(); };

})();
