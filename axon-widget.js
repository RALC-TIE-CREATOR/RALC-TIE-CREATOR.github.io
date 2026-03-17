// ═══════════════════════════════════════════════════════
// AXON WIDGET v2.0 — MODO DEMO (SIN API EXTERNA)
// ═══════════════════════════════════════════════════════
(function(){
  'use strict';

  // ── 1. CONFIGURACIÓN DE LA IMAGEN ───────────────────
  // Si el archivo AXON FACE 2.png está en el mismo directorio, úsalo
  // Si no, usa el SVG de respaldo
  const IMAGEN_AXON = 'AXON FACE 2.png'; // Cambia esto si está en otra ruta
  
  // ── 2. DETECCIÓN DE IDIOMA ─────────────────────────
  const isEN = document.documentElement.lang === 'en' || 
               location.pathname.includes('-en.html') || 
               location.pathname.includes('index-en');

  // ── 3. MAPA DE HERRAMIENTAS ─────────────────────────
  const tools = [
    { keywords: ['curva','rotation','galaxia'], 
      name: 'H-01 Curvas de Rotación', 
      url: isEN ? 'rotation-curves-en.html' : 'curvas.html' },
    { keywords: ['sparc','galaxias','database'], 
      name: 'H-02 Explorador SPARC', 
      url: isEN ? 'sparc-en.html' : 'sparc.html' },
    { keywords: ['2π','2pi','constante','ralc'], 
      name: 'H-03 Calculadora R', 
      url: isEN ? '2pi-en.html' : '2pi.html' },
    { keywords: ['bisturí','scalpel','ontología'], 
      name: 'H-04 Bisturí TIE', 
      url: isEN ? 'onto-en.html' : 'onto.html' },
    { keywords: ['materia oscura','dark matter','84.1'], 
      name: 'H-05 Materia Oscura', 
      url: isEN ? 'dark-matter-en.html' : 'materia-oscura.html' },
    { keywords: ['a₀','aceleración','transición','constante'], 
      name: 'H-08 Constantes TIE', 
      url: isEN ? 'constant-en.html' : 'constante.html' },
    { keywords: ['agujero','black hole','horizonte'], 
      name: 'H-11 Agujeros Negros', 
      url: isEN ? 'black-holes-en.html' : 'agujeros.html' },
    { keywords: ['gps','reloj','clock'], 
      name: 'H-12 Corrección GPS', 
      url: isEN ? 'gps-en.html' : 'gps.html' },
    { keywords: ['rms','error','estadística'], 
      name: 'H-20 RMS SPARC', 
      url: isEN ? 'rms-en.html' : 'rms.html' }
  ];

  // ── 4. BASE DE CONOCIMIENTO TIE (respuestas predefinidas) ──
  const knowledgeBase = [
    {
      keywords: ['qué es tie','what is tie','teoría','theory'],
      response: isEN 
        ? 'TIE (Theory of Spatial Infrastructure) proposes that space is not empty, but an active network. Time is an Absolute Motor, and forces are properties of this infrastructure. It unifies physics with zero free parameters.'
        : 'TIE (Teoría de la Infraestructura Espacial) propone que el espacio no está vacío, sino que es una red activa. El tiempo es un Motor Absoluto, y las fuerzas son propiedades de esta infraestructura. Unifica la física con cero parámetros libres.'
    },
    {
      keywords: ['a₀','a0','aceleración','transición'],
      response: isEN
        ? 'a₀ = cH₀/2π = 1.082×10⁻¹⁰ m/s² is the transition acceleration. It marks where gravity changes from Newtonian to TIE regime, explaining galaxy rotation without dark matter.'
        : 'a₀ = cH₀/2π = 1.082×10⁻¹⁰ m/s² es la aceleración de transición. Marca donde la gravedad cambia de régimen newtoniano a TIE, explicando la rotación galáctica sin materia oscura.'
    },
    {
      keywords: ['materia oscura','dark matter','84%'],
      response: isEN
        ? 'In TIE, "dark matter" is 1 - 1/2π = 84.1% of real mass. It is not a particle, but the fraction of mass that standard physics misses by using E = mc² instead of E = mc²/2π.'
        : 'En TIE, la "materia oscura" es 1 - 1/2π = 84.1% de la masa real. No es una partícula, sino la fracción de masa que la física estándar no contabiliza al usar E = mc² en lugar de E = mc²/2π.'
    },
    {
      keywords: ['constante','ralc','2π','2pi'],
      response: isEN
        ? 'R = 2π is the RALC Constant. It relates real mass to observed mass: m_TIE = 2π·m_obs. This factor appears in all fundamental forces.'
        : 'R = 2π es la Constante de RALC. Relaciona la masa real con la masa observada: m_TIE = 2π·m_obs. Este factor aparece en todas las fuerzas fundamentales.'
    },
    {
      keywords: ['agujero','black hole','horizonte'],
      response: isEN
        ? 'TIE black holes have radius r_h = 1.272√(GM/a₀). No singularity, just saturation of the infrastructure. For M87*, r_h ≈ 1.14×10¹⁷ km (5.9×10⁶ times Schwarzschild).'
        : 'Los agujeros negros en TIE tienen radio r_h = 1.272√(GM/a₀). No hay singularidad, solo saturación de la infraestructura. Para M87*, r_h ≈ 1.14×10¹⁷ km (5.9×10⁶ veces Schwarzschild).'
    },
    {
      keywords: ['predicciones','predictions','verificadas','verified'],
      response: isEN
        ? 'TIE has 12/16 verified predictions with zero free parameters: dark matter (84.1%), a₀, Fermi rule, α, Bohr radius, GPS (45.7μs/day), Λ (5% error), and more.'
        : 'TIE tiene 12/16 predicciones verificadas con cero parámetros libres: materia oscura (84.1%), a₀, regla de Fermi, α, radio de Bohr, GPS (45.7μs/día), Λ (5% error), y más.'
    }
  ];

  // ── 5. ESTILOS ──────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #axon-widget { position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-family: 'Syne', sans-serif; }
    #axon-bubble { 
      width: 55px; height: 55px; background: #000; border-radius: 50%; 
      display: flex; align-items: center; justify-content: center; cursor: pointer;
      box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4); transition: 0.3s; border: 2px solid #FFD700;
      overflow: hidden;
    }
    #axon-bubble:hover { transform: scale(1.1); box-shadow: 0 6px 25px rgba(255, 215, 0, 0.6); }
    #axon-bubble img { width: 100%; height: 100%; object-fit: cover; }
    #axon-panel { 
      display: none; position: absolute; bottom: 70px; right: 0; width: 340px; 
      height: 480px; background: rgba(5, 5, 15, 0.98); border: 1px solid rgba(255, 215, 0, 0.3);
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
    .ax-tool { color: #FFD700; text-decoration: none; border-bottom: 1px dashed #FFD700; }
    .ax-tool:hover { color: #fff; }
    #ax-input-area { padding: 10px; background: rgba(0,0,0,0.5); border-top: 1px solid rgba(255,255,255,0.05); display: flex; gap: 8px; }
    #ax-input { flex: 1; background: transparent; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; color: #fff; padding: 8px; outline: none; font-size: 0.8rem; }
    #ax-send { background: #FFD700; border: none; border-radius: 6px; padding: 0 12px; cursor: pointer; font-weight: 800; color: #000; }
    @keyframes axFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  `;
  document.head.appendChild(style);

  // ── 6. DETECTAR PÁGINA ACTUAL ───────────────────────
  const slug = location.pathname.split('/').pop().replace('.html','') || 'index';
  let currentTool = 'Sitio TIE';
  for(let t of tools) {
    if(slug.includes(t.url.replace('.html',''))) {
      currentTool = t.name;
      break;
    }
  }

  // ── 7. CREAR WIDGET ─────────────────────────────────
  const container = document.createElement('div');
  container.id = 'axon-widget';
  container.innerHTML = `
    <div id="axon-panel">
      <div id="axon-head">
        <span style="color:#FFD700; font-size:0.7rem; font-weight:800; letter-spacing:1px;">AXON // v2.0</span>
        <span style="color:#a0a0b0; font-size:0.6rem;">${currentTool}</span>
        <button id="axon-close" style="background:none; border:none; color:#fff; cursor:pointer; font-size:1.1rem;">✕</button>
      </div>
      <div id="axon-msgs">
        <div class="ax-m ax-a">${isEN ? '🟡 AXON online. Ask me about TIE!' : '🟡 AXON en línea. ¡Pregúntame sobre TIE!'}</div>
      </div>
      <div id="ax-input-area">
        <input type="text" id="ax-input" placeholder="${isEN ? 'Ask TIE...' : 'Pregunta a TIE...'}" autocomplete="off">
        <button id="ax-send">↑</button>
      </div>
    </div>
    <div id="axon-bubble">
      <img src="${IMAGEN_AXON}" alt="AXON" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'45\' fill=\'%23000\' stroke=\'%23FFD700\' stroke-width=\'2\'/%3E%3Ccircle cx=\'35\' cy=\'40\' r=\'8\' fill=\'%23FFD700\'/%3E%3Ccircle cx=\'65\' cy=\'40\' r=\'8\' fill=\'%23FFD700\'/%3E%3Cpath d=\'M30 65 Q50 80,70 65\' stroke=\'%23FFD700\' stroke-width=\'4\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E';">
    </div>
  `;
  document.body.appendChild(container);

  // ── 8. ELEMENTOS ────────────────────────────────────
  const bubble = document.getElementById('axon-bubble');
  const panel = document.getElementById('axon-panel');
  const closeBtn = document.getElementById('axon-close');
  const input = document.getElementById('ax-input');
  const sendBtn = document.getElementById('ax-send');
  const msgsContainer = document.getElementById('axon-msgs');

  // ── 9. FUNCIONES ────────────────────────────────────
  bubble.onclick = () => { 
    panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
    if(panel.style.display === 'flex') input.focus();
  };
  
  closeBtn.onclick = (e) => { e.stopPropagation(); panel.style.display = 'none'; };

  function findToolSuggestion(text) {
    for(let t of tools) {
      if(t.keywords.some(k => text.toLowerCase().includes(k))) {
        return { name: t.name, url: t.url };
      }
    }
    return null;
  }

  function findKnowledgeBaseResponse(text) {
    for(let k of knowledgeBase) {
      if(k.keywords.some(kw => text.toLowerCase().includes(kw))) {
        return k.response;
      }
    }
    return null;
  }

  function appendMessage(role, text, isHtml = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ax-m ${role === 'user' ? 'ax-u' : 'ax-a'}`;
    if(isHtml) {
      msgDiv.innerHTML = text;
    } else {
      msgDiv.textContent = text;
    }
    msgsContainer.appendChild(msgDiv);
    msgsContainer.scrollTop = msgsContainer.scrollHeight;
  }

  function sendMessage() {
    const text = input.value.trim();
    if(!text) return;

    input.value = '';
    appendMessage('user', text);

    // Buscar en base de conocimiento
    let response = findKnowledgeBaseResponse(text);
    
    if(!response) {
      // Respuesta genérica
      response = isEN
        ? "I don't have a specific answer for that. You can explore the TIE tools manually or ask about: a₀, dark matter, black holes, predictions, or the RALC constant."
        : "No tengo una respuesta específica para eso. Puedes explorar las herramientas TIE manualmente o preguntar sobre: a₀, materia oscura, agujeros negros, predicciones, o la constante RALC.";
    }

    // Buscar sugerencia de herramienta
    const tool = findToolSuggestion(text);
    if(tool) {
      response += isEN
        ? ` <br><br>🔧 Try the <a href="${tool.url}" class="ax-tool" onclick="panel.style.display='none'">${tool.name}</a> tool.`
        : ` <br><br>🔧 Prueba la herramienta <a href="${tool.url}" class="ax-tool" onclick="panel.style.display='none'">${tool.name}</a>.`;
    }

    appendMessage('bot', response, true);
  }

  sendBtn.onclick = sendMessage;
  input.onkeydown = (e) => { if(e.key === 'Enter') sendMessage(); };

  console.log('🟡 AXON v2.0 demo mode - no external API');
})();
