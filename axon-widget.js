// ═══════════════════════════════════════════════════════
// AXON WIDGET v1.9 — TIE Floating Chat (CORREGIDO)
// CON AVATAR BASE64 + FALLBACK OFFLINE
// ═══════════════════════════════════════════════════════
(function(){
  'use strict';

  // ── 1. AVATAR DE AXON (codificado en base64) ───────
  // Es un rostro estilizado en dorado y negro
  const AXON_AVATAR_BASE64 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23000' stroke='%23FFD700' stroke-width='2'/%3E%3Ccircle cx='35' cy='40' r='8' fill='%23FFD700'/%3E%3Ccircle cx='65' cy='40' r='8' fill='%23FFD700'/%3E%3Cpath d='M30 65 Q50 80,70 65' stroke='%23FFD700' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3C/svg%3E";

  // ── 2. CONFIGURACIÓN DE CONEXIÓN ───────────────────
  const API_KEY = "AIzaSyC4QU28EPB-_zi-7tkKB2p-Om5zBKlxZ-U"; 
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
  
  // Flag para modo offline (si la API falla)
  let offlineMode = false;

  // ── 3. 🧠 CONTEXTO MAESTRO COMPLETO TIE ────────────
  const MASTER_CONTEXT = `# 🧠 CONTEXTO COMPLETO PARA AXON · ASISTENTE TIE v2.0

Eres AXON, el asistente oficial de la Teoría de la Infraestructura Espacial (TIE), creado por R@LC (Rubén A. Lecona Curto), investigador independiente en México.

Tu personalidad: eres un guía entusiasta, preciso y pedagógico. Explicas conceptos complejos con claridad, usando analogías cuando es útil, pero siempre basándote en los números y las ecuaciones. Tu objetivo es ayudar a los visitantes a entender TIE y a navegar por las 20 herramientas interactivas.

Respondes en el mismo idioma en que te pregunten (español o inglés). Tus respuestas deben ser concisas pero completas, y siempre que sea relevante, mencionas qué herramienta específica pueden usar para explorar el concepto.

Tu conocimiento se basa en el Tratado TIE completo y en la estructura de la página web que se detalla a continuación.

---

# 🌐 ESTRUCTURA DE LA PÁGINA WEB TIE

## Página Principal (index.html / index-en.html)
- Portal de entrada a TIE
- Muestra las estadísticas principales: R = 2π, a₀ = cH₀/2π, 84.1% materia oscura, Λ error 5.0%
- Contiene el widget de AXON para consultas

## Página de Teoría (teoria.html / theory-en.html)
Contiene la explicación completa de los fundamentos de TIE:

### Los 4 Postulados Fundamentales
1. **El Tiempo es un Motor Absoluto**: Fluye unidireccional y constante, no es una dimensión elástica
2. **La Infraestructura Espacial**: El espacio es una red activa que transmite, sincroniza y procesa información
3. **El Cuanto Mínimo de Sincronía**: ħ es el paquete mínimo indivisible (píxel de la realidad)
4. **Ciclos Completos**: La infraestructura opera en ciclos de 2π (Constante de RALC)

### Constantes Fundamentales
- R = 2π = 6.2832... (Constante de RALC)
- a₀ = cH₀/2π = 1.082×10⁻¹⁰ m/s² (aceleración de transición)
- v₀ = c/2π = 47,715 km/s (velocidad fundamental de la infraestructura)
- Λ = 2H₀²/c² = 1.145×10⁻⁵² m⁻² (constante cosmológica TIE)

### Ecuaciones Principales
- **Gravedad**: a_TIE = √[a_N(a_N + a₀)]
- **Energía**: E = mc²/2π
- **Masa TIE**: m_TIE = 2π·m_obs
- **Materia oscura**: 1 - 1/2π = 84.1%
- **Horizonte agujero negro**: r_h = 1.272√(GM/a₀)
- **Velocidad plana galáctica**: v_flat = (GM a₀)^{1/4}
- **Ley de Coulomb TIE**: F = q_TIE²/r² con q_TIE = q_SI·√k_e

### El Bisturí TIE v2.0
Método de 4 pasos con Diagnóstico Dual:
1. **Encontrar el T²**: Identificar tiempo al cuadrado en unidades
2. **Diagnosticar**: Aplicar 3 pruebas (Flecha del Tiempo, Invarianza de Unidades, Consistencia con el Reposo)
3a. **Eliminar** (si espurio): Sustituir por ciclo 2π
3b. **Traducir** (si cinemático): Expresar en términos de fase φ
4. **Dejar que los números hablen**: Verificar con datos

---

# 🧪 LABORATORIOS Y HERRAMIENTAS (20 EN TOTAL)

## 🚪 Página Central de Laboratorios (labs.html / lab-en.html)
Puerta de entrada a los 5 laboratorios temáticos. Muestra estadísticas:
- 20 herramientas en total
- 5 laboratorios
- 175 galaxias SPARC integradas
- **12/16 predicciones verificadas** (ACTUALIZADO)
- 0 parámetros libres

---

## ⚛️ LAB 01 · FUNDAMENTOS (6 herramientas)

### H-17 · Jerarquía Cósmica T⁰/T¹/T²
**URL:** jerarquia.html

**Descripción:** Visualizador de la jerarquía causal T⁰→T¹→T². Demuestra que la aceleración gravitacional no es causa sino sombra.

**Ecuaciones:**
- ∇φ₀ = m v₀/ħ = 1/λ_C (T⁰ - gradiente de fase)
- v₀ = c/2π = 47,715 km/s (T¹ - velocidad fundamental, invariante)
- a₀ = v₀·H₀ = cH₀/2π (T² - aceleración de transición, varía con H₀)

### H-04 · Bisturí TIE v2.0
**URL:** onto.html

**Descripción:** El Traductor Ontológico. Aplica el Diagnóstico Dual a 10 ecuaciones de la física estándar.

### H-06 · Trinidad Energética
**URL:** trinidad.html

**Descripción:** El Motor Absoluto redistribuye energía entre tres estados ontológicos.

### H-03 · Calculadora R
**URL:** 2pi.html

**Descripción:** Calculadora interactiva de la constante R = 2π. Conecta masa observada con masa real de infraestructura.

### H-05 · Materia Oscura
**URL:** materia-oscura.html

**Descripción:** Conversor de masa observable a masa real TIE. Demuestra que la "materia oscura" es 1 - 1/2π = 84.1%.

### H-08 · a₀ y Λ — Constantes TIE
**URL:** constante.html

**Descripción:** Calculadora de las constantes fundamentales a₀ y Λ.

---

## 🌌 LAB 02 · GALAXIAS (4 herramientas)

### H-21 · Error Estadístico Global RMS
**URL:** rms.html

**Descripción:** Análisis estadístico riguroso de las 175 galaxias SPARC.
**Resultado:** σ_TIE = 0.067 dex (0 parámetros libres)

### H-06 · Simulador RAR
**URL:** simrar.html

**Descripción:** Visualiza la Relación de Aceleración Radial.

### H-01 · Curvas de Rotación
**URL:** curvas.html

**Descripción:** Generador de curvas de rotación galácticas con 12 presets reales.

### H-02 · Explorador SPARC
**URL:** sparc.html

**Descripción:** Catálogo completo de 175 galaxias reales.

---

## ⏱️ LAB 03 · GRAVEDAD (4 herramientas)

### H-09 · Lente Gravitacional TIE
**URL:** lente.html

**Descripción:** Simulador de deflexión de luz con 3 modelos.

### H-11 · Agujeros Negros
**URL:** agujeros.html

**Descripción:** Comparación GR vs TIE.
**Ecuaciones:** r_s = 2GM/c², r_h = 1.272√(GM/a₀)

### H-12 · Corrección GPS
**URL:** gps.html

**Resultado:** 45.7 μs/día (vs 45.9 observado) · error 0.4%

### H-12.1 · Reloj Universal
**URL:** reloj.html

**Descripción:** Motor Absoluto con relojes analógicos

---

## 🔭 LAB 04 · COSMOLOGÍA (3 herramientas)

### H-10 · Cúmulo Bala
**URL:** bala.html

**Descripción:** Simulación de desacople sin materia oscura

### H-07 · Lensing Gravitacional
**URL:** lensing.html

**Descripción:** Visualizador 3D Three.js con anillo de Einstein

### H-13 · Campo φ (Ondas GW)
**URL:** campo-phi.html

**Ecuación:** f_φ = √2 H₀/(2π) ≈ 2.4 mHz

---

## 🤖 LAB 05 · INVESTIGADORES (3 herramientas)

### H-14 · TIE AI Chat (tú mismo)
**URL:** chat.html

### H-15 · Generador LaTeX
**URL:** latex.html

**Descripción:** Catálogo de ecuaciones TIE con código LaTeX

### H-16 · API Pública REST
**URL:** api.html

---

# 📚 APÉNDICE MATEMÁTICO
## Constantes Fundamentales
| Símbolo | Nombre | Valor |
|---------|--------|-------|
| R | Constante de RALC | 2π = 6.2832... |
| a₀ | Aceleración de transición | cH₀/2π = 1.082×10⁻¹⁰ m/s² |
| v₀ | Velocidad fundamental | c/2π = 47,715 km/s |
| Λ | Constante cosmológica TIE | 2H₀²/c² = 1.145×10⁻⁵² m⁻² |

## Ecuaciones Centrales
- a_TIE = √[a_N(a_N + a₀)]
- E_TIE = mc²/2π
- m_TIE = 2π·m_obs
- Materia oscura: 1 - 1/2π = 84.1%
- r_h = 1.272√(GM/a₀)
- v_flat = (G M a₀)^{1/4}
- δ∫dφ = 0

---

# 📊 PREDICCIONES VERIFICADAS (12/16)

| Predicción | Valor TIE | Observado | Error |
|------------|-----------|-----------|-------|
| Materia oscura | 84.1% | ~84% | < 1% |
| a₀ | 1.082×10⁻¹⁰ | 1.2×10⁻¹⁰ | ~10% |
| Regla de Fermi | 2π/ħ | 2π/ħ | 0% |
| α | 1/137.12 | 1/137.036 | 0.06% |
| Radio de Bohr | 5.297×10⁻¹¹ m | 5.292×10⁻¹¹ m | 0.10% |
| GPS | 45.7 μs/día | 45.9 μs/día | 0.4% |
| Λ | 1.145×10⁻⁵² | 1.090×10⁻⁵² | 5.0% |

---

# 🎯 INSTRUCCIONES PARA AXON

Cuando respondas a los usuarios:

1. **Sé preciso pero accesible**: Usa las ecuaciones cuando sea relevante, pero explica su significado.
2. **Recomienda herramientas**: Si preguntan sobre un concepto, sugiere qué herramienta del laboratorio pueden usar para explorarlo.
3. **Contextualiza los resultados**: No des solo números — explica qué significan en el marco de TIE.
4. **Menciona las predicciones verificadas**: Cuando sea relevante, destaca que TIE tiene 0 parámetros libres y 12/16 predicciones verificadas.
5. **Sé honesto sobre limitaciones**: Si algo es trabajo futuro (ej. las 4 predicciones pendientes), menciónalo.`;

  // ── 4. RESPUESTAS DE FALLBACK OFFLINE ──────────────
  const offlineResponses = [
    "🔌 Modo offline: La infraestructura de sincronía no puede contactar el servidor Gemini en este momento. Por favor, revisa tu conexión.",
    "⚡ Error de conexión con la API. Puedes seguir explorando las herramientas TIE localmente mientras se restablece el enlace.",
    "🌐 No se pudo establecer comunicación con el servicio de IA. Intenta nuevamente más tarde.",
    "⚠️ Fallo en la conexión con la nube de sincronía. El widget operará en modo limitado hasta que se recupere el túnel Vercel."
  ];

  // ── 5. DETECCIÓN DE IDIOMA ─────────────────────────
  const isEN = document.documentElement.lang === 'en' || 
               location.pathname.includes('-en.html') || 
               location.pathname.includes('index-en');

  // ── 6. MAPA DE NAVEGACIÓN (RESUMIDO) ───────────────
  const PAGE_MAP = {
    'index': {es:'Página principal TIE', en:'TIE Home'},
    'teoria': {es:'Teoría TIE Fundamentos', en:'TIE Theory Foundations'},
    'theory': {es:'Teoría TIE Fundamentos', en:'TIE Theory Foundations'},
    'sparc': {es:'H-02 · Base de datos SPARC', en:'H-02 · SPARC Database'},
    'curvas': {es:'H-01 · Curvas de Rotación TIE', en:'H-01 · Rotation Curves TIE'},
    'rotation-curves': {es:'H-01 · Curvas de Rotación TIE', en:'H-01 · Rotation Curves TIE'},
    '2pi': {es:'H-03 · Factor 2π fundamental', en:'H-03 · Fundamental 2π factor'},
    'materia-oscura': {es:'H-05 · Materia Oscura vs TIE', en:'H-05 · Dark Matter vs TIE'},
    'dark-matter': {es:'H-05 · Materia Oscura vs TIE', en:'H-05 · Dark Matter vs TIE'},
    'constante': {es:'H-08 · Constante Cosmológica Λ_TIE', en:'H-08 · Cosmological Constant Λ_TIE'},
    'constant': {es:'H-08 · Constante Cosmológica Λ_TIE', en:'H-08 · Cosmological Constant Λ_TIE'},
    'agujeros': {es:'H-11 · Agujeros Negros', en:'H-11 · Black Holes'},
    'black-holes': {es:'H-11 · Agujeros Negros', en:'H-11 · Black Holes'},
    'gps': {es:'H-12 · Corrector de GPS', en:'H-12 · GPS corrector'},
    'rms': {es:'H-20 · Test de 175 Galaxias RMS', en:'H-20 · RMS Test of 175 Galaxies'},
    'labs': {es:'Hub de Laboratorios', en:'Labs Hub'},
    'lab': {es:'Hub de Laboratorios', en:'Labs Hub'}
  };

  const slug = location.pathname.split('/').pop().replace('.html','') || 'index';
  let currentPage = 'Sitio TIE';
  for(let [key, val] of Object.entries(PAGE_MAP)) {
    if(slug.includes(key)) {
      currentPage = isEN ? val.en : val.es;
      break;
    }
  }

  // ── 7. HELPER KaTeX ─────────────────────────────────
  function ensureKatex(cb){
    if(window.katex){ cb(); return; }
    const link = document.createElement('link'); link.rel='stylesheet'; link.href='https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css';
    document.head.appendChild(link);
    const s=document.createElement('script'); s.src='https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js'; s.onload=cb;
    document.head.appendChild(s);
  }

  // ── 8. ESTILOS VISUALES ─────────────────────────────
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
    .ax-error { align-self: flex-start; background: rgba(255, 68, 85, 0.12); color: #FF4455; border: 1px solid rgba(255, 68, 85, 0.3); }
    #ax-input-area { padding: 10px; background: rgba(0,0,0,0.5); border-top: 1px solid rgba(255,255,255,0.05); display: flex; gap: 8px; }
    #ax-input { flex: 1; background: transparent; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; color: #fff; padding: 8px; outline: none; font-size: 0.8rem; }
    #ax-send { background: #FFD700; border: none; border-radius: 6px; padding: 0 12px; cursor: pointer; font-weight: 800; color: #000; }
    .ax-loader { font-size: 0.7rem; color: #FFD700; opacity: 0.6; animation: axPulse 1.5s infinite; }
    @keyframes axFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes axPulse { 0% { opacity: 0.3; } 50% { opacity: 1; } 100% { opacity: 0.3; } }
  `;
  document.head.appendChild(style);

  // ── 9. INYECTAR ESTRUCTURA DOM ──────────────────────
  const container = document.createElement('div');
  container.id = 'axon-widget';
  container.innerHTML = `
    <div id="axon-panel">
      <div id="axon-head">
        <span style="color:#FFD700; font-size:0.7rem; font-weight:800; letter-spacing:1px; font-family:'Space Mono';">AXON // v1.9</span>
        <span style="color:#a0a0b0; font-size:0.6rem;">${currentPage}</span>
        <button id="axon-close" style="background:none; border:none; color:#fff; cursor:pointer; font-size:1.1rem;">✕</button>
      </div>
      <div id="axon-msgs">
        <div class="ax-m ax-a">${isEN ? '🟡 Synchrony active. How can I assist you in this lab?' : '🟡 Sincronía activa en la red. ¿Cómo puedo asistirte en este laboratorio?'}</div>
      </div>
      <div id="ax-input-area">
        <input type="text" id="ax-input" placeholder="${isEN ? 'Ask TIE...' : 'Pregunta a TIE...'}" autocomplete="off">
        <button id="ax-send">↑</button>
      </div>
    </div>
    <div id="axon-bubble">
      <img src="${AXON_AVATAR_BASE64}" alt="AXON">
    </div>
  `;
  document.body.appendChild(container);

  // ── 10. ELEMENTOS DEL DOM ───────────────────────────
  const bubble = document.getElementById('axon-bubble');
  const panel = document.getElementById('axon-panel');
  const closeBtn = document.getElementById('axon-close');
  const input = document.getElementById('ax-input');
  const sendBtn = document.getElementById('ax-send');
  const msgsContainer = document.getElementById('axon-msgs');
  
  let chatHistory = [];

  // ── 11. FUNCIONES DEL WIDGET ────────────────────────
  bubble.onclick = () => { 
    const isVisible = panel.style.display === 'flex';
    panel.style.display = isVisible ? 'none' : 'flex';
    if(!isVisible) input.focus();
  };
  
  closeBtn.onclick = (e) => { 
    e.stopPropagation(); 
    panel.style.display = 'none'; 
  };

  function appendMessage(role, text, isError = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ax-m ${role === 'user' ? 'ax-u' : (isError ? 'ax-error' : 'ax-a')}`;
    msgDiv.innerHTML = text;
    msgsContainer.appendChild(msgDiv);
    msgsContainer.scrollTop = msgsContainer.scrollHeight;
    return msgDiv;
  }

  // ── 12. FUNCIÓN PRINCIPAL DE ENVÍO ──────────────────
  async function sendMessage() {
    const text = input.value.trim();
    if(!text) return;

    input.value = '';
    appendMessage('user', text);
    
    const loadingId = 'msg-' + Date.now();
    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'ax-m ax-a ax-loader';
    loadingMsg.id = loadingId;
    loadingMsg.innerHTML = '... <span style="font-size:0.6rem;">(conectando con Gemini)</span>';
    msgsContainer.appendChild(loadingMsg);
    msgsContainer.scrollTop = msgsContainer.scrollHeight;

    try {
      // Si estamos en modo offline, lanzar error directamente
      if(offlineMode) throw new Error('Modo offline activado');

      const response = await fetch(GEMINI_URL, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          contents: [{ 
            parts: [{ text: MASTER_CONTEXT + "\n\nUsuario actual en " + currentPage + ": " + text }] 
          }] 
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                   (isEN ? 'No response from model.' : 'Sin respuesta del modelo.');

      // Aplicar KaTeX a la respuesta
      let formattedReply = reply.replace(/\n/g, '<br>');
      
      ensureKatex(() => {
        formattedReply = formattedReply.replace(/\\\((.+?)\\\)/gs, (_, tex) => {
          try { 
            return katex.renderToString(tex, { 
              throwOnError: false,
              displayMode: false,
              output: 'html'
            }); 
          } catch(e) { 
            return `<span style="color:#FF4455;">${tex}</span>`; 
          }
        });
        document.getElementById(loadingId).innerHTML = formattedReply;
      });

      // Guardar en historial (limitado)
      chatHistory.push({ role: 'user', text });
      chatHistory.push({ role: 'model', text: reply });
      if(chatHistory.length > 20) chatHistory = chatHistory.slice(-20);

    } catch (err) {
      console.error('Axon widget error:', err);
      
      // Activar modo offline para futuros intentos
      offlineMode = true;
      
      // Respuesta de error amigable
      const errorMsg = isEN 
        ? '⚠️ Connection error with the AI service. The widget will work in offline mode. You can still explore the TIE tools manually.'
        : '⚠️ Error de conexión con el servicio de IA. El widget funcionará en modo offline. Puedes seguir explorando las herramientas TIE manualmente.';
      
      // Sugerir una herramienta basada en palabras clave
      const lowerText = text.toLowerCase();
      let suggestion = '';
      if(lowerText.includes('curva') || lowerText.includes('rotation')) {
        suggestion = isEN ? ' Try H-01 Rotation Curves tool.' : ' Prueba la herramienta H-01 Curvas de Rotación.';
      } else if(lowerText.includes('materia oscura') || lowerText.includes('dark matter')) {
        suggestion = isEN ? ' Try H-05 Dark Matter converter.' : ' Prueba el conversor H-05 Materia Oscura.';
      } else if(lowerText.includes('agujero') || lowerText.includes('black hole')) {
        suggestion = isEN ? ' Try H-11 Black Holes tool.' : ' Prueba la herramienta H-11 Agujeros Negros.';
      }
      
      document.getElementById(loadingId).innerHTML = errorMsg + suggestion;
      document.getElementById(loadingId).className = 'ax-m ax-error';
    }
  }

  sendBtn.onclick = sendMessage;
  input.onkeydown = (e) => { if(e.key === 'Enter') sendMessage(); };

  // ── 13. LOG DE INICIO ───────────────────────────────
  console.log('🟡 AXON v1.9 widget cargado - Modo:', offlineMode ? 'OFFLINE' : 'ONLINE');
})();
