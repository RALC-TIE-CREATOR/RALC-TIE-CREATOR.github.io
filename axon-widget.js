// ═══════════════════════════════════════════════════════
// AXON WIDGET v1.1 — TIE Floating Chat (Vercel Tunnel)
// Inject into any TIE page: <script src="axon-widget.js"></script>
// ═══════════════════════════════════════════════════════
(function(){
  'use strict';

  // ── Configuración de Infraestructura ──────────────────
  const VERCEL_API_URL = "https://ralc-tie-creator-github-io.vercel.app/api/chat";

  // ── Detect language ──────────────────────────────────
  const isEN = document.documentElement.lang === 'en' ||
               location.pathname.includes('-en.html') ||
               location.pathname.includes('index-en');

  // ── Detect current page context ──────────────────────
  const PAGE_MAP = {
  'index':                  {es:'Página principal TIE',                                                          en:'TIE Home'},
  'index-en':               {es:'Página principal TIE',                                                          en:'TIE Home'},    
  'teoria':                 {es:'Teoría TIE',                                                                    en:'TIE Theory'},
  'theory-en':              {es:'Teoría TIE',                                                                    en:'TIE Theory'},    
  'predicciones':           {es:'Predicciones TIE',                                                              en:'TIE Predictions'},
  'predictions-en':         {es:'Predicciones TIE',                                                              en:'TIE Predictions'},    
  'papers':                 {es:'Papers y Publicaciones TIE',                                                    en:'TIE Papers and Publications'},
  'papers-en':              {es:'Papers y Publicaciones TIE',                                                    en:'TIE Papers and Publications'},    
  'GitHub':                 {es:'Enlace a GitHub de TIE',                                                        en:'TIE GitHub Link'},    
  'labs':                   {es:'Laboratorio TIE',                                                               en:'TIE Laboratory'},    
  'lab-en':                 {es:'Laboratorio TIE',                                                               en:'TIE Laboratory'},
  'lab-fundamentos':        {es:'Laboratorio para conocer los fundamentos de TIE',                               en:'Laboratory to learn the fundamentals of TIE'},
  'lab-fundamentos-en':     {es:'Laboratorio para conocer los fundamentos de TIE',                               en:'Laboratory to learn the fundamentals of TIE'},    
  'lab-galaxias':           {es:'Laboratorio con herramientas de explotación Galactica',                         en:'Laboratory with Galactica exploitation tools'},
  'lab-galaxias-en':        {es:'Laboratorio con herramientas de explotación Galactica',                         en:'Laboratory with Galactica exploitation tools'},
  'labs-gravedad':          {es:'Laboratorio con el que puedes experimentar con la gravedad TIE',                en:'Laboratory where you can experiment with TIE gravity'},    
  'labs-gravedad-en':       {es:'Laboratorio con el que puedes experimentar con la gravedad TIE',                en:'Laboratory where you can experiment with TIE gravity'},    
  'labs-cosmologia':        {es:'Laboratorio donde podrás simular y observar eventos cosmologicos con TIE',      en:'Laboratory where you can simulate and observe cosmological events with TIE'},    
  'labs-investigadores':    {es:'Laboratorio que contiene herramientas para facilitar tu investigación con TIE', en:'Laboratory containing tools to facilitate your research with TIE'},    
  'Falsabilidad':           {es:'Muestra las formas en que TIE puede ser refutada',                              en:'It shows the ways in which TIE can be refuted'},    
  'curvas':                 {es:'H-01 · Curvas de Rotación TIE',                                                 en:'H-01 · Rotation Curves TIE'},    
  'rotation-curves':        {es:'H-01 · Curvas de Rotación TIE',                                                 en:'H-01 · Rotation Curves TIE'},
  'sparc':                  {es:'H-02 · Base de datos SPARC',                                                    en:'H-02 · SPARC Database'},    
  '2pi':                    {es:'H-03 · Factor 2π fundamental',                                                  en:'H-03 · Fundamental 2π factor'},
  'onto':                   {es:'H-04 · Bisturi TIE V2.0',                                                       en:'H-04 · TIE V2.0 Scalpel'},
  'materia-oscura':         {es:'H-05 · Materia Oscura vs TIE',                                                  en:'H-05 · Dark Matter vs TIE'},
  'simrar':                 {es:'H-06 · Simulador RAR',                                                          en:'H-06 · RAR Simulator'},
  'lensing':                {es:'H-07 · Lensing Gravitacional 3D',                                               en:'H-07 · Gravitational Lensing 3D'},
  'constante':              {es:'H-08 · Constante Cosmológica Λ_TIE',                                            en:'H-08 · Cosmological Constant Λ_TIE'},
  'lente':                  {es:'H-09 · Simulador de deflexión de fotones',                                      en:'H-09 · Photon deflection simulator'},
  'bala':                   {es:'H-10 · Simula 2 cúmulos galacticos colisionando',                               en:'H-10 · Simulate 2 galaxy clusters colliding'},
  'agujeros':               {es:'H-11 · Agujeros Negros (rₛ vs rₕ TIE)',                                          en:'H-11 · Black Holes (rₛ vs rₕ TIE)'},
  'gps':                    {es:'H-12 · Corrector de GPS',                                                       en:'H-12 · GPS corrector'},    
  'campo-phi':              {es:'H-13 · Campo φ / Ondas Gravitacionales',                                        en:'H-13 · φ Field / Gravitational Waves'},
  'chat':                   {es:'H-14 · Chat de IA, agente AXON',                                                en:'H-14 · AI chat, AXON agent'},
  'latex':                  {es:'H-15 · Generador LaTeX TIE',                                                    en:'H-15 · TIE LaTeX Generator'},    
  'api':                    {es:'H-16 · API REST TIE',                                                           en:'H-16 · TIE REST API'},
  'jerarquia':              {es:'H-17 · Muestra que la aceleración gravitacional no es una causa: es una sombra',en:'H-17 · It shows that gravitational acceleration is not a cause: it is a shadow'},    
  'trinidad':               {es:'H-18 · Ilustra la distribucion de energia entre Masa, Potencia y Movimiento',   en:'H-18 · It illustrates the distribution of energy between Mass, Power and Motion'},    
  'reloj-universal':        {es:'H-19 · Propuesta de reloj Universal basado en conteo de ciclos 2π',             en:'H-19 · Proposal for a Universal clock based on counting 2π cycles'},    
  'rms':                    {es:'H-20 · Test de 175 Galaxias que determina error estadistico global RMS en TIE', en:'H-20 · Test of 175 Galaxies that determines global RMS statistical error in TIE'},
  };

  const slug = location.pathname.split('/').pop().replace('.html','') || 'index';
  const pageKey = Object.keys(PAGE_MAP).find(k => slug.includes(k)) || null;
  const pageName = pageKey
    ? (isEN ? PAGE_MAP[pageKey].en : PAGE_MAP[pageKey].es)
    : (isEN ? 'TIE Website' : 'Sitio TIE');

  // ── System prompts ──────────────────────────────────
  const SYS_ES = `Eres AXON, el agente IA de la Teoría de la Infraestructura Espacial (TIE).
CONTEXTO ACTUAL: El usuario está en → ${pageName}
Menciona esta herramienta si es pertinente.

CONSTANTES TIE V12.0:
• a₀ = 1.082×10⁻¹⁰ m/s²
• v_flat = (G·M·a₀)^(1/4)
• rₕ = 1.272·√(GM/a₀)
• Λ_TIE = 2H₀²/c²
• m_TIE = 2π · m_obs

Responde conciso, usa LaTeX inline \\( ... \\) y sugiere herramientas del lab (https://ralc-tie-creator.github.io/labs.html).`;

  const SYS_EN = `You are AXON, the AI agent for TIE.
CURRENT CONTEXT: User is on → ${pageName}

TIE CONSTANTS V12.0:
• a₀ = 1.082×10⁻¹⁰ m/s²
• rₕ = 1.272·√(GM/a₀)
• m_TIE = 2π · m_obs

Respond concisely, use LaTeX inline \\( ... \\) and suggest lab tools (https://ralc-tie-creator.github.io/lab-en.html).`;

  const SYS = isEN ? SYS_EN : SYS_ES;

  const KEY_HISTORY = 'axon_history';
  function getHistory() { try{ return JSON.parse(localStorage.getItem(KEY_HISTORY)||'[]'); }catch(e){ return []; } }
  function saveHistory(h){ localStorage.setItem(KEY_HISTORY, JSON.stringify(h.slice(-20))); }

  function ensureKatex(cb){
    if(window.katex){ cb(); return; }
    const link = document.createElement('link'); link.rel='stylesheet'; link.href='https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css';
    document.head.appendChild(link);
    const s=document.createElement('script'); s.src='https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js'; s.onload=cb;
    document.head.appendChild(s);
  }

  const CSS = `
#axon-widget{position:fixed;bottom:1.5rem;right:1.5rem;z-index:9999;font-family:'Space Mono',monospace;}
#axon-btn{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#b38900,#FFD700);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(255,215,0,0.35);transition:transform .2s,box-shadow .2s;position:relative;}
#axon-btn-lbl{font-size:.55rem;font-weight:700;color:#000;letter-spacing:1px;}
#axon-panel{position:absolute;bottom:64px;right:0;width:340px;max-height:500px;background:#000d1a;border:1px solid rgba(255,215,0,0.25);border-radius:14px;box-shadow:0 8px 40px rgba(0,0,0,0.7);display:flex;flex-direction:column;overflow:hidden;opacity:0;transform:translateY(12px) scale(.97);transition:opacity .22s,transform .22s;pointer-events:none;}
#axon-panel.open{opacity:1;transform:translateY(0) scale(1);pointer-events:all;}
#axon-head{background:rgba(255,215,0,.08);border-bottom:1px solid rgba(255,215,0,.12);padding:.6rem .85rem;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}
#axon-head-name{font-size:.72rem;font-weight:700;color:#FFD700;letter-spacing:1px;}
#axon-head-page{font-size:.55rem;color:rgba(255,215,0,.5);max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
#axon-messages{flex:1;overflow-y:auto;padding:.65rem .85rem;display:flex;flex-direction:column;gap:.55rem;scrollbar-width:thin;scrollbar-color:rgba(255,215,0,.1) transparent;min-height:180px;}
.axon-msg{display:flex;flex-direction:column;gap:.2rem;max-width:90%;}
.axon-msg.user{align-self:flex-end;align-items:flex-end;}
.axon-msg.assistant{align-self:flex-start;}
.axon-bubble{padding:.45rem .65rem;border-radius:10px;font-size:.68rem;line-height:1.65;word-break:break-word;}
.axon-msg.user .axon-bubble{background:rgba(255,215,0,.12);border:1px solid rgba(255,215,0,.2);color:#fff;}
.axon-msg.assistant .axon-bubble{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:#e0e0e8;}
.axon-typing{display:flex;gap:4px;align-items:center;padding:.45rem .65rem;}
.axon-dot{width:5px;height:5px;border-radius:50%;background:#FFD700;opacity:.4;animation:axon-bounce .9s infinite;}
.axon-dot:nth-child(2){animation-delay:.15s;}
.axon-dot:nth-child(3){animation-delay:.3s;}
@keyframes axon-bounce{0%,80%,100%{transform:translateY(0);opacity:.4;}40%{transform:translateY(-5px);opacity:1;}}
#axon-input-bar{border-top:1px solid rgba(255,215,0,.1);padding:.55rem .7rem;display:flex;gap:.4rem;flex-shrink:0;background:rgba(0,0,0,.4);}
#axon-input{flex:1;background:rgba(255,255,255,.04);border:1px solid rgba(255,215,0,.15);border-radius:8px;color:#fff;font-family:'Space Mono',monospace;font-size:.68rem;padding:.4rem .6rem;outline:none;resize:none;height:34px;max-height:80px;}
#axon-send{background:rgba(255,215,0,.12);border:1px solid rgba(255,215,0,.25);border-radius:8px;color:#FFD700;cursor:pointer;padding:.4rem .6rem;font-size:.75rem;}
@media(max-width:480px){#axon-panel{width:calc(100vw - 2rem);right:-0.5rem;}}
`;

  const T = {
    title: 'AXON_WIDGET',
    page:  pageName,
    ph:    isEN ? 'Ask TIE...' : 'Pregunta TIE...',
    welcome: isEN ? 'Synchrony active. How can I help?' : 'Sincronía activa. ¿En qué puedo ayudarte?',
  };

  const HTML = `
<div id="axon-widget">
  <button id="axon-btn"><span id="axon-btn-lbl">AXON</span></button>
  <div id="axon-panel">
    <div id="axon-head">
      <div>
        <div id="axon-head-name">${T.title}</div>
        <div id="axon-head-page">${T.page}</div>
      </div>
      <button id="axon-close-btn" style="background:none;border:none;color:#fff;cursor:pointer;">✕</button>
    </div>
    <div id="axon-messages"><div class="axon-welcome" style="font-size:.6rem;color:rgba(255,215,0,.5);text-align:center;">${T.welcome}</div></div>
    <div id="axon-input-bar">
      <textarea id="axon-input" placeholder="${T.ph}" rows="1"></textarea>
      <button id="axon-send">↑</button>
    </div>
  </div>
</div>`;

  const styleEl = document.createElement('style'); styleEl.textContent = CSS; document.head.appendChild(styleEl);
  const wrapper = document.createElement('div'); wrapper.innerHTML = HTML; document.body.appendChild(wrapper.firstElementChild);

  const btn = document.getElementById('axon-btn'), panel = document.getElementById('axon-panel'), msgs = document.getElementById('axon-messages'), input = document.getElementById('axon-input'), send = document.getElementById('axon-send'), closeBtn = document.getElementById('axon-close-btn');

  let isOpen = false, isTyping = false;

  btn.onclick = () => { isOpen = !isOpen; panel.classList.toggle('open', isOpen); if(isOpen) setTimeout(()=>input.focus(), 220); };
  closeBtn.onclick = () => { isOpen=false; panel.classList.remove('open'); };

  function appendBubble(role, text, save=true){
    const div = document.createElement('div'); div.className = `axon-msg ${role}`;
    const bubble = document.createElement('div'); bubble.className = 'bubble axon-bubble';
    bubble.innerHTML = role==='assistant' ? renderMd(text) : text;
    div.appendChild(bubble); msgs.appendChild(div); msgs.scrollTop = msgs.scrollHeight;
    if(save){ const h = getHistory(); h.push({role, content: text}); saveHistory(h); }
    return bubble;
  }

  function renderMd(t){ return t.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>'); }

  async function sendMsg(){
    const text = input.value.trim(); if(!text || isTyping) return;
    isTyping = true; input.value = ''; input.style.height = '34px';
    appendBubble('user', text);
    const typing = document.createElement('div'); typing.innerHTML = `<div class="axon-msg assistant"><div class="axon-bubble axon-typing"><span class="axon-dot"></span><span class="axon-dot"></span><span class="axon-dot"></span></div></div>`;
    msgs.appendChild(typing); msgs.scrollTop = msgs.scrollHeight;

    const history = getHistory();
    const contents = history.map(m => ({ role: m.role==='assistant'?'model':'user', parts:[{text: m.content}] }));

    try{
      const res = await fetch(VERCEL_API_URL, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ contents, systemInstruction: { parts:[{text: SYS}] } })
      });
      const data = await res.json();
      typing.remove();
      if(!res.ok) throw new Error(data.error || "Tunnel Error");
      const bubble = appendBubble('assistant', data.reply);
      ensureKatex(() => {
        bubble.innerHTML = bubble.innerHTML.replace(/\\\((.+?)\\\)/gs, (_, tex) => { try{return katex.renderToString(tex,{throwOnError:false});}catch(e){return _; } });
      });
    } catch(e){ typing.remove(); appendBubble('assistant', "⚠️ Error de conexión con Vercel."); }
    isTyping = false;
  }

  send.onclick = sendMsg;
  input.onkeydown = (e) => { if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); sendMsg(); } };
  
  // Restore history
  const h = getHistory(); if(h.length) h.forEach(m => appendBubble(m.role, m.content, false));

})();
