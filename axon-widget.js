
// ═══════════════════════════════════════════════════════
// AXON WIDGET v1.0 — TIE Floating Chat
// Inject into any TIE page: <script src="axon-widget.js"></script>
// ═══════════════════════════════════════════════════════
(function(){
  'use strict';

  // ── Detect language ──────────────────────────────────
  const isEN = document.documentElement.lang === 'en' ||
               location.pathname.includes('-en.html') ||
               location.pathname.includes('index-en');

  // ── Detect current page context ──────────────────────
  const PAGE_MAP = {
    'constante':       {es:'H-01 · Constante Cosmológica Λ_TIE',       en:'H-01 · Cosmological Constant Λ_TIE'},
    'constant-en':     {es:'H-01 · Constante Cosmológica Λ_TIE',       en:'H-01 · Cosmological Constant Λ_TIE'},
    'agujeros':        {es:'H-03 · Agujeros Negros (rₛ vs rₕ TIE)',    en:'H-03 · Black Holes (rₛ vs rₕ TIE)'},
    'black-holes-en':  {es:'H-03 · Agujeros Negros',                   en:'H-03 · Black Holes (rₛ vs rₕ TIE)'},
    'curvas':          {es:'H-04 · Curvas de Rotación TIE',            en:'H-04 · Rotation Curves TIE'},
    'rotation-curves': {es:'H-04 · Curvas de Rotación TIE',            en:'H-04 · Rotation Curves TIE'},
    'sparc':           {es:'H-05 · Base de datos SPARC',               en:'H-05 · SPARC Database'},
    'gps':             {es:'H-06 · GPS y Relojes TIE',                 en:'H-06 · GPS & Clocks TIE'},
    'universal-clock': {es:'H-10 · Reloj Universal T₀',               en:'H-10 · Universal Clock T₀'},
    '2pi':             {es:'H-08 · Factor 2π fundamental',             en:'H-08 · Fundamental 2π factor'},
    'materia-oscura':  {es:'H-09 · Materia Oscura vs TIE',            en:'H-09 · Dark Matter vs TIE'},
    'dark-matter-en':  {es:'H-09 · Materia Oscura vs TIE',            en:'H-09 · Dark Matter vs TIE'},
    'falsabilidad':    {es:'H-11 · Falsificabilidad TIE',              en:'H-11 · TIE Falsifiability'},
    'falsifiability':  {es:'H-11 · Falsificabilidad TIE',              en:'H-11 · TIE Falsifiability'},
    'papers':          {es:'H-12 · Papers TIE',                        en:'H-12 · TIE Papers'},
    'lensing':         {es:'H-07 · Lensing Gravitacional 3D',          en:'H-07 · Gravitational Lensing 3D'},
    'campo-phi':       {es:'H-13 · Campo φ / Ondas Gravitacionales',   en:'H-13 · φ Field / Gravitational Waves'},
    'latex':           {es:'H-15 · Generador LaTeX TIE',               en:'H-15 · TIE LaTeX Generator'},
    'api':             {es:'H-16 · API REST TIE',                      en:'H-16 · TIE REST API'},
    'labs':            {es:'Laboratorio TIE',                          en:'TIE Laboratory'},
    'teoria':          {es:'Teoría TIE',                               en:'TIE Theory'},
    'theory-en':       {es:'Teoría TIE',                               en:'TIE Theory'},
    'predicciones':    {es:'Predicciones TIE',                         en:'TIE Predictions'},
    'predictions-en':  {es:'Predicciones TIE',                         en:'TIE Predictions'},
    'index':           {es:'Página principal TIE',                     en:'TIE Home'},
  };
  const slug = location.pathname.split('/').pop().replace('.html','') || 'index';
  const pageKey = Object.keys(PAGE_MAP).find(k => slug.includes(k)) || null;
  const pageName = pageKey
    ? (isEN ? PAGE_MAP[pageKey].en : PAGE_MAP[pageKey].es)
    : (isEN ? 'TIE Website' : 'Sitio TIE');

  // ── System prompt (lightweight) ──────────────────────
  const SYS_ES = `Eres AXON, el agente IA de la Teoría de la Infraestructura Espacial (TIE), desarrollada por Rubén Lecona (R@LC), México.

CONTEXTO ACTUAL: El usuario está en → ${pageName}
Menciona esta herramienta cuando sea relevante para la conversación.

CONSTANTES FUNDAMENTALES TIE:
• a₀ = cH₀/2π = 1.082×10⁻¹⁰ m/s²  (H₀=70 km/s/Mpc)
• v_flat = (G·M·a₀)^(1/4)  — sin materia oscura, 0 parámetros libres
• rₕ = 0.869·√(GM/a₀)      — horizonte TIE
• Λ_TIE = 2H₀²/c² = 1.145×10⁻⁵² m⁻²
• Mc ≈ 1.06×10²³ M☉         — masa crítica rₕ=rₛ
• f_LISA = a₀/πc ≈ 2.4 mHz  — predicción para LISA 2035
• M87*: rₕ = 4.04×10⁶ · rₛ

HERRAMIENTAS DISPONIBLES (ralc.mx/labs.html):
H-01 constante.html · H-03 agujeros.html · H-04 curvas.html · H-05 sparc.html
H-06 gps.html · H-07 lensing.html · H-08 2pi.html · H-09 materia-oscura.html
H-10 reloj-universal.html · H-11 falsabilidad.html · H-13 campo-phi.html
H-15 latex.html · H-16 api.html

INSTRUCCIONES:
- Responde en español, conciso (eres un widget pequeño)
- Usa LaTeX inline \\( ... \\) para ecuaciones
- Sugiere la herramienta correcta cuando el usuario pregunte sobre un cálculo
- Puedes hacer cálculos directos con las fórmulas TIE
- Sé honesto sobre limitaciones`;

  const SYS_EN = `You are AXON, the AI agent for the Theory of Spatial Infrastructure (TIE), developed by Rubén Lecona (R@LC), Mexico.

CURRENT CONTEXT: User is on → ${pageName}
Mention this tool when relevant to the conversation.

TIE FUNDAMENTAL CONSTANTS:
• a₀ = cH₀/2π = 1.082×10⁻¹⁰ m/s²  (H₀=70 km/s/Mpc)
• v_flat = (G·M·a₀)^(1/4)  — no dark matter, 0 free parameters
• rₕ = 0.869·√(GM/a₀)      — TIE horizon
• Λ_TIE = 2H₀²/c² = 1.145×10⁻⁵² m⁻²
• Mc ≈ 1.06×10²³ M☉         — critical mass rₕ=rₛ
• f_LISA = a₀/πc ≈ 2.4 mHz  — LISA 2035 prediction
• M87*: rₕ = 4.04×10⁶ · rₛ

AVAILABLE TOOLS (ralc.mx/labs-en.html):
H-01 constant-en.html · H-03 black-holes-en.html · H-04 rotation-curves-en.html
H-05 sparc-en.html · H-06 gps-en.html · H-07 lensing-en.html · H-08 2pi-en.html
H-09 dark-matter-en.html · H-10 universal-clock-en.html · H-11 falsifiability-en.html
H-13 campo-phi-en.html · H-15 latex-en.html · H-16 api-en.html

INSTRUCTIONS:
- Respond in English, concise (you are a small widget)
- Use LaTeX inline \\( ... \\) for equations
- Suggest the right tool when user asks about a calculation
- You can do direct calculations with TIE formulas
- Be honest about limitations`;

  const SYS = isEN ? SYS_EN : SYS_ES;

  // ── sessionStorage keys ───────────────────────────────
  const KEY_APIKEY  = 'axon_key';
  const KEY_HISTORY = 'axon_history';

  function getKey()     { return sessionStorage.getItem(KEY_APIKEY) || ''; }
  function setKey(k)    { sessionStorage.setItem(KEY_APIKEY, k); }
  function getHistory() { try{ return JSON.parse(sessionStorage.getItem(KEY_HISTORY)||'[]'); }catch(e){ return []; } }
  function saveHistory(h){ sessionStorage.setItem(KEY_HISTORY, JSON.stringify(h.slice(-20))); }

  // ── Inject KaTeX if not present ───────────────────────
  function ensureKatex(cb){
    if(window.katex){ cb(); return; }
    const link = document.createElement('link');
    link.rel='stylesheet';
    link.href='https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css';
    document.head.appendChild(link);
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js';
    s.onload=cb;
    document.head.appendChild(s);
  }

  // ── CSS ───────────────────────────────────────────────
  const CSS = `
#axon-widget{position:fixed;bottom:1.5rem;right:1.5rem;z-index:9999;font-family:'Space Mono',monospace;}
#axon-btn{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#b38900,#FFD700);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(255,215,0,0.35);transition:transform .2s,box-shadow .2s;position:relative;}
#axon-btn:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(255,215,0,0.5);}
#axon-btn-lbl{font-size:.55rem;font-weight:700;color:#000;letter-spacing:1px;}
#axon-notif{position:absolute;top:-3px;right:-3px;width:14px;height:14px;background:#FF4455;border-radius:50%;display:none;border:2px solid #000;}
#axon-panel{position:absolute;bottom:64px;right:0;width:340px;max-height:500px;background:#000d1a;border:1px solid rgba(255,215,0,0.25);border-radius:14px;box-shadow:0 8px 40px rgba(0,0,0,0.7);display:flex;flex-direction:column;overflow:hidden;opacity:0;transform:translateY(12px) scale(.97);transition:opacity .22s,transform .22s;pointer-events:none;}
#axon-panel.open{opacity:1;transform:translateY(0) scale(1);pointer-events:all;}
#axon-head{background:linear-gradient(90deg,rgba(255,215,0,.08),rgba(255,215,0,.03));border-bottom:1px solid rgba(255,215,0,.12);padding:.6rem .85rem;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}
#axon-head-left{display:flex;align-items:center;gap:.55rem;}
#axon-avatar{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#b38900,#FFD700);display:flex;align-items:center;justify-content:center;font-size:.5rem;font-weight:700;color:#000;letter-spacing:1px;}
#axon-head-info{}
#axon-head-name{font-size:.72rem;font-weight:700;color:#FFD700;letter-spacing:1px;}
#axon-head-page{font-size:.55rem;color:rgba(255,215,0,.5);letter-spacing:.5px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
#axon-head-btns{display:flex;gap:.3rem;align-items:center;}
#axon-clear-btn{background:transparent;border:none;cursor:pointer;color:rgba(255,215,0,.4);font-size:.65rem;padding:.15rem .3rem;border-radius:4px;transition:color .2s;}
#axon-clear-btn:hover{color:#FFD700;}
#axon-close-btn{background:transparent;border:none;cursor:pointer;color:rgba(255,255,255,.3);font-size:.9rem;line-height:1;padding:.15rem .3rem;border-radius:4px;transition:color .2s;}
#axon-close-btn:hover{color:#fff;}
#axon-key-bar{background:rgba(255,215,0,.04);border-bottom:1px solid rgba(255,215,0,.1);padding:.5rem .85rem;display:flex;gap:.4rem;flex-shrink:0;}
#axon-key-input{flex:1;background:rgba(0,0,0,.5);border:1px solid rgba(255,215,0,.2);border-radius:6px;color:#FFD700;font-family:'Space Mono',monospace;font-size:.62rem;padding:.3rem .5rem;outline:none;}
#axon-key-input:focus{border-color:#FFD700;}
#axon-key-save{background:rgba(255,215,0,.12);border:1px solid rgba(255,215,0,.3);border-radius:6px;color:#FFD700;font-family:'Space Mono',monospace;font-size:.6rem;padding:.3rem .6rem;cursor:pointer;white-space:nowrap;}
#axon-key-save:hover{background:rgba(255,215,0,.25);}
#axon-messages{flex:1;overflow-y:auto;padding:.65rem .85rem;display:flex;flex-direction:column;gap:.55rem;scrollbar-width:thin;scrollbar-color:rgba(255,215,0,.1) transparent;min-height:180px;}
.axon-msg{display:flex;flex-direction:column;gap:.2rem;max-width:90%;}
.axon-msg.user{align-self:flex-end;align-items:flex-end;}
.axon-msg.assistant{align-self:flex-start;}
.axon-bubble{padding:.45rem .65rem;border-radius:10px;font-size:.68rem;line-height:1.65;word-break:break-word;}
.axon-msg.user .axon-bubble{background:rgba(255,215,0,.12);border:1px solid rgba(255,215,0,.2);color:#fff;}
.axon-msg.assistant .axon-bubble{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#e0e0e8;}
.axon-msg.assistant .axon-bubble a{color:#FFD700;text-decoration:none;}
.axon-msg.assistant .axon-bubble a:hover{text-decoration:underline;}
.axon-typing{display:flex;gap:4px;align-items:center;padding:.45rem .65rem;}
.axon-dot{width:5px;height:5px;border-radius:50%;background:#FFD700;opacity:.4;animation:axon-bounce .9s infinite;}
.axon-dot:nth-child(2){animation-delay:.15s;}
.axon-dot:nth-child(3){animation-delay:.3s;}
@keyframes axon-bounce{0%,80%,100%{transform:translateY(0);opacity:.4;}40%{transform:translateY(-5px);opacity:1;}}
.axon-welcome{font-size:.65rem;color:rgba(255,215,0,.5);text-align:center;padding:.5rem;line-height:1.6;}
#axon-input-bar{border-top:1px solid rgba(255,215,0,.1);padding:.55rem .7rem;display:flex;gap:.4rem;flex-shrink:0;background:rgba(0,0,0,.4);}
#axon-input{flex:1;background:rgba(255,255,255,.04);border:1px solid rgba(255,215,0,.15);border-radius:8px;color:#fff;font-family:'Space Mono',monospace;font-size:.68rem;padding:.4rem .6rem;outline:none;resize:none;height:34px;max-height:80px;overflow-y:auto;transition:border-color .2s;}
#axon-input:focus{border-color:rgba(255,215,0,.4);}
#axon-send{background:rgba(255,215,0,.12);border:1px solid rgba(255,215,0,.25);border-radius:8px;color:#FFD700;cursor:pointer;padding:.4rem .6rem;font-size:.75rem;transition:all .2s;flex-shrink:0;}
#axon-send:hover{background:rgba(255,215,0,.25);}
#axon-send:disabled{opacity:.3;cursor:not-allowed;}
@media(max-width:480px){#axon-panel{width:calc(100vw - 2rem);right:-0.5rem;}}
`;

  // ── HTML ──────────────────────────────────────────────
  const T = {
    title: isEN ? 'AXON' : 'AXON',
    page:  pageName,
    ph:    isEN ? 'Ask about TIE...' : 'Pregunta sobre TIE...',
    send:  '↑',
    clear: isEN ? 'clear' : 'limpiar',
    keyph: isEN ? 'Gemini API key...' : 'Clave API Gemini...',
    keysv: isEN ? 'SAVE' : 'GUARDAR',
    welcome: isEN
      ? `Hi! I'm <strong>AXON</strong>, TIE's AI agent.<br>Ask me anything about the theory, calculations or tools.`
      : `Hola, soy <strong>AXON</strong>, el agente IA de TIE.<br>Pregúntame sobre la teoría, cálculos o herramientas.`,
  };

  const HTML = `
<div id="axon-widget">
  <button id="axon-btn" aria-label="AXON Chat">
    <span id="axon-btn-lbl">AXN</span>
    <span id="axon-notif"></span>
  </button>
  <div id="axon-panel" role="dialog" aria-label="AXON Chat">
    <div id="axon-head">
      <div id="axon-head-left">
        <div id="axon-avatar">AXN</div>
        <div id="axon-head-info">
          <div id="axon-head-name">${T.title}</div>
          <div id="axon-head-page">${T.page}</div>
        </div>
      </div>
      <div id="axon-head-btns">
        <button id="axon-clear-btn" title="${T.clear}">↺</button>
        <button id="axon-close-btn">✕</button>
      </div>
    </div>
    <div id="axon-key-bar"></div>
    <div id="axon-messages">
      <div class="axon-welcome">${T.welcome}</div>
    </div>
    <div id="axon-input-bar">
      <textarea id="axon-input" placeholder="${T.ph}" rows="1"></textarea>
      <button id="axon-send" disabled>${T.send}</button>
    </div>
  </div>
</div>`;

  // ── Inject CSS ────────────────────────────────────────
  const styleEl = document.createElement('style');
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);

  // ── Inject HTML ───────────────────────────────────────
  const wrapper = document.createElement('div');
  wrapper.innerHTML = HTML;
  document.body.appendChild(wrapper.firstElementChild);

  // ── Refs ──────────────────────────────────────────────
  const btn      = document.getElementById('axon-btn');
  const panel    = document.getElementById('axon-panel');
  const keyBar   = document.getElementById('axon-key-bar');
  const msgs     = document.getElementById('axon-messages');
  const input    = document.getElementById('axon-input');
  const send     = document.getElementById('axon-send');
  const clearBtn = document.getElementById('axon-clear-btn');
  const closeBtn = document.getElementById('axon-close-btn');
  const notif    = document.getElementById('axon-notif');

  let isOpen = false;
  let isTyping = false;
  let hasUnread = false;

  // ── Key bar ───────────────────────────────────────────
  function renderKeyBar(){
    const k = getKey();
    if(k){
      keyBar.innerHTML = `<span style="font-size:.58rem;color:rgba(255,215,0,.4);letter-spacing:1px">${isEN?'KEY':'CLAVE'}: ••••••••${k.slice(-4)}</span><button id="axon-key-change" style="background:transparent;border:none;color:rgba(255,215,0,.4);font-family:'Space Mono',monospace;font-size:.58rem;cursor:pointer;margin-left:auto">${isEN?'change':'cambiar'}</button>`;
      keyBar.querySelector('#axon-key-change').onclick = () => { sessionStorage.removeItem(KEY_APIKEY); renderKeyBar(); updateSend(); };
      send.disabled = false;
    } else {
      keyBar.innerHTML = `<input id="axon-key-input" placeholder="${T.keyph}" type="password"><button id="axon-key-save">${T.keysv}</button>`;
      document.getElementById('axon-key-save').onclick = () => {
        const v = document.getElementById('axon-key-input').value.trim();
        if(v){ setKey(v); renderKeyBar(); updateSend(); }
      };
      document.getElementById('axon-key-input').onkeydown = (e) => {
        if(e.key==='Enter'){ e.preventDefault(); document.getElementById('axon-key-save').click(); }
      };
      send.disabled = true;
    }
  }

  function updateSend(){ send.disabled = !getKey() || isTyping || !input.value.trim(); }

  // ── Restore history ───────────────────────────────────
  function restoreHistory(){
    const h = getHistory();
    if(h.length === 0) return;
    // Remove welcome
    const welcome = msgs.querySelector('.axon-welcome');
    if(welcome) welcome.remove();
    h.forEach(m => appendBubble(m.role, m.content, false));
  }

  // ── Open / Close ──────────────────────────────────────
  btn.onclick = () => {
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    if(isOpen){
      hasUnread = false;
      notif.style.display = 'none';
      ensureKatex(() => {
        // Re-render math in existing messages
        renderAllMath();
      });
      setTimeout(()=>input.focus(), 220);
    }
  };
  closeBtn.onclick = () => { isOpen=false; panel.classList.remove('open'); };

  clearBtn.onclick = () => {
    sessionStorage.removeItem(KEY_HISTORY);
    msgs.innerHTML = `<div class="axon-welcome">${T.welcome}</div>`;
  };

  // ── Append bubble ─────────────────────────────────────
  function appendBubble(role, text, save=true){
    const welcome = msgs.querySelector('.axon-welcome');
    if(welcome) welcome.remove();

    const div = document.createElement('div');
    div.className = `axon-msg ${role}`;
    const bubble = document.createElement('div');
    bubble.className = 'axon-bubble';

    if(role === 'assistant'){
      bubble.innerHTML = renderMd(text);
    } else {
      bubble.textContent = text;
    }

    div.appendChild(bubble);
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;

    if(save){
      const h = getHistory();
      h.push({role, content: text});
      saveHistory(h);
    }

    return bubble;
  }

  function renderMd(text){
    return text
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
      .replace(/\*(.+?)\*/g,'<em>$1</em>')
      .replace(/`(.+?)`/g,'<code style="background:rgba(255,215,0,.1);padding:0 3px;border-radius:3px">$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank">$1</a>')
      .replace(/\n\n+/g,'</p><p style="margin-top:.4rem">')
      .replace(/\n/g,'<br>');
  }

  function renderAllMath(){
    if(!window.katex) return;
    msgs.querySelectorAll('.axon-bubble').forEach(b => {
      // Re-render LaTeX
      b.innerHTML = b.innerHTML
        .replace(/\\\((.+?)\\\)/gs, (_, tex) => {
          try{ return katex.renderToString(tex,{throwOnError:false}); }catch(e){ return _; }
        })
        .replace(/\\\[(.+?)\\\]/gs, (_, tex) => {
          try{ return katex.renderToString(tex,{throwOnError:false,displayMode:true}); }catch(e){ return _; }
        });
    });
  }

  // ── Typing indicator ──────────────────────────────────
  function showTyping(){
    const div = document.createElement('div');
    div.className = 'axon-msg assistant';
    div.id = 'axon-typing-ind';
    div.innerHTML = `<div class="axon-bubble axon-typing"><span class="axon-dot"></span><span class="axon-dot"></span><span class="axon-dot"></span></div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }
  function hideTyping(){
    const t = document.getElementById('axon-typing-ind');
    if(t) t.remove();
  }

  // ── Send ──────────────────────────────────────────────
  async function sendMsg(){
    const text = input.value.trim();
    if(!text || !getKey() || isTyping) return;

    isTyping = true;
    updateSend();
    input.value = '';
    input.style.height = '34px';

    appendBubble('user', text);
    showTyping();

    const history = getHistory();
    // Build messages array (last 20 turns)
    const messages = history.slice(-20).slice(0,-1).map(m => ({role:m.role, parts:[{text:m.content}]}));
    messages.push({role:'user', parts:[{text}]});

    try{
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${getKey()}`,
        {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
            system_instruction: { parts:[{text: SYS}] },
            contents: messages,
            generationConfig:{ maxOutputTokens:600, temperature:.7 }
          })
        }
      );
      const data = await res.json();
      hideTyping();

      if(data.error){
        appendBubble('assistant', isEN
          ? `⚠️ Error: ${data.error.message}`
          : `⚠️ Error: ${data.error.message}`);
      } else {
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || (isEN?'No response.':'Sin respuesta.');
        const bubble = appendBubble('assistant', reply);
        // Render math
        ensureKatex(()=>{
          bubble.innerHTML = bubble.innerHTML
            .replace(/\\\((.+?)\\\)/gs,(_, tex)=>{ try{return katex.renderToString(tex,{throwOnError:false});}catch(e){return _;} })
            .replace(/\\\[(.+?)\\\]/gs,(_, tex)=>{ try{return katex.renderToString(tex,{throwOnError:false,displayMode:true});}catch(e){return _;} });
        });
        if(!isOpen){
          hasUnread=true;
          notif.style.display='block';
        }
      }
    } catch(e){
      hideTyping();
      appendBubble('assistant', isEN ? `⚠️ Connection error.` : `⚠️ Error de conexión.`);
    }

    isTyping = false;
    updateSend();
  }

  send.onclick = sendMsg;

  input.oninput = () => {
    updateSend();
    // Auto-resize
    input.style.height = '34px';
    input.style.height = Math.min(input.scrollHeight, 80) + 'px';
  };

  input.onkeydown = (e) => {
    if(e.key === 'Enter' && !e.shiftKey){
      e.preventDefault();
      sendMsg();
    }
  };

  // ── Init ──────────────────────────────────────────────
  renderKeyBar();
  restoreHistory();

})();
