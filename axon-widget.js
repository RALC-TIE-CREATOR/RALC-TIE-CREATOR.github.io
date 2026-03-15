// ═══════════════════════════════════════════════════════
// AXON WIDGET v1.7 — TIE Floating Chat (Vercel Tunnel)
// CONTEXTO COMPLETO: Libro + 20 Herramientas + Apéndice
// ═══════════════════════════════════════════════════════
(function(){
  'use strict';

  // ── 1. CONFIGURACIÓN DE CONEXIÓN (Túnel Vercel) ───────
  const VERCEL_API_URL = "https://ralc-tie-creator-github-io.vercel.app/api/chat";

  // ── 2. 🧠 CONTEXTO MAESTRO COMPLETO TIE ───────────────
  // Incluye: Mapa del sitio, 5 laboratorios, 20 herramientas,
  // Teoría, postulados, ecuaciones, apéndice matemático.
  
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
- 12/16 predicciones verificadas
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

**Controles:**
- Slider H₀ (67-74 km/s/Mpc)
- Selector de 4 masas de ejemplo
- Modo "Causal" que invierte la pirámide ortodoxa

**Resultados:**
- v₀ permanece constante (47,715 km/s) independientemente de H₀
- a₀ varía proporcionalmente a H₀
- Muestra por qué el paradigma ortodoxo necesita materia oscura

---

### H-04 · Bisturí TIE v2.0
**URL:** onto.html

**Descripción:** El Traductor Ontológico. Aplica el Diagnóstico Dual a 10 ecuaciones de la física estándar.

**Ecuaciones analizadas:**
1. F = ma
2. F = GMm/r²
3. E = mc²
4. F = kq²/r² (Ley de Coulomb)
5. V = -g² e^{-m_π c r/ħ}/r (Yukawa)
6. E = hν
7. Γ = (2π/ħ)|M|²ρ(E) (Regla de Oro de Fermi)
8. Fuerza nuclear débil
9. Ecuación de Schrödinger
10. Métrica de Schwarzschild

**Las 3 Pruebas del Diagnóstico Dual:**
- **Prueba 1 (Flecha del Tiempo)**: ¿Despejar t da ±t donde solo debería haber una dirección?
- **Prueba 2 (Invarianza de Unidades)**: ¿El T² desaparece al cambiar de sistema (SI ↔ CGS ↔ naturales)?
- **Prueba 3 (Consistencia con el Reposo)**: ¿Aplicada a sistema estático produce absurdos?

**Resultados posibles:**
- **ESPURIO** → Paso 3a: eliminar (multiplicar por 2π)
- **CINEMÁTICO** → Paso 3b: traducir a fase φ
- **NATIVA** (Fermi) → Ya tiene estructura 2π/ħ, validación independiente

---

### H-18 · Trinidad Energética
**URL:** trinidad.html

**Descripción:** El Motor Absoluto redistribuye energía entre tres estados ontológicos.

**Ecuaciones:**
- **Existencia (E)**: E = mc²/2π (energía por ciclo de sincronía)
- **Tensión (U)**: U = -GMm/r (deuda de sincronía, 2π implícito en masas)
- **Cinética (K)**: K = ½mv² (movimiento sobre infraestructura)

**Escenarios:**
1. **Caída libre**: Piedra se eleva (U↑), cae (U→K), impacta (K→U)
2. **Emisión atómica**: Electrón excitado (U) → desexcitación → fotón (E)
3. **Aniquilación e⁺e⁻**: Fotón (E) → par (E)
4. **Velocidad de escape**: K necesaria para vencer U

**Resultados:**
- La suma E + U + K permanece constante
- El 2π nunca desaparece, solo cambia de lugar

---

### H-03 · Calculadora R
**URL:** 2pi.html

**Descripción:** Calculadora interactiva de la constante R = 2π. Conecta masa observada con masa real de infraestructura.

**Ecuaciones:**
- m_TIE = R · m_obs (R = 2π)
- v_flat = (G M a₀)^{1/4}

**Datos:** 55 galaxias SPARC integradas

**Controles:**
- Slider H₀ (67-74 km/s/Mpc)
- Filtro por tipo morfológico
- Selector de galaxias

**Resultados:**
- Gráfica log-log v_flat vs masa
- Comparación predicción TIE (línea dorada) vs puntos observados

---

### H-05 · Materia Oscura
**URL:** materia-oscura.html

**Descripción:** Conversor de masa observable a masa real TIE. Demuestra que la "materia oscura" es 1 - 1/2π = 84.1%.

**Ecuaciones:**
- Fracción visible: 1/2π = 15.9%
- Fracción "oscura": 1 - 1/2π = 84.1%

**Controles:** Selector de unidades (kg, M☉, g, lb)

**Resultados:**
- Barra animada 15.9% / 84.1%
- m_TIE = 2π · m_obs siempre

---

### H-08 · a₀ y Λ — Constantes TIE
**URL:** constante.html

**Descripción:** Calculadora de las constantes fundamentales a₀ y Λ.

**Ecuaciones:**
- a₀ = cH₀/2π
- Λ = 2H₀²/c²

**Controles:** Slider H₀ (67-74 km/s/Mpc)

**Resultados:**
- a₀ en m/s²
- Λ en m⁻²
- Radio de transición r_trans = √(GM/a₀)
- Comparación Λ_TIE vs Λ_Planck (error 5.0%)
- Gráfica doble eje Planck vs SH0ES

---

## 🌌 LAB 02 · GALAXIAS (4 herramientas)

### H-20 · Error Estadístico Global RMS
**URL:** rms.html

**Descripción:** Análisis estadístico riguroso de las 175 galaxias SPARC.

**Ecuación:** σ = std(log₁₀(v_TIE/v_obs))

**Controles:**
- Filtros por tipo morfológico (Sc/Sb/Sa/Sd/LSB/dIrr)
- Filtro por calidad Q (1=alta, 2=media, 3=baja)

**Resultados:**
- σ_TIE = 0.067 dex (0 parámetros libres)
- σ_ΛCDM = 0.11 dex (2 parámetros por galaxia)
- σ_Newton = 0.38 dex
- Histograma de residuos con gaussiana superpuesta

---

### H-06 · Simulador RAR
**URL:** simrar.html

**Descripción:** Visualiza la Relación de Aceleración Radial.

**Ecuación:** a_obs = √[a_bar(a_bar + a₀)]

**Datos:** 250 puntos del catálogo SPARC

**Resultados:**
- a₀ fijo = 1.082×10⁻¹⁰ m/s² (predicción, no ajuste)
- Curva TIE superpuesta a datos
- R² actualizado en tiempo real

---

### H-01 · Curvas de Rotación
**URL:** curvas.html

**Descripción:** Generador de curvas de rotación galácticas con 12 presets reales.

**Ecuaciones:**
- a_TIE = √[a_N(a_N + a₀)]
- v(r) = √[r · a_TIE]

**Presets incluidos:** NGC3198, NGC2403, NGC6503, NGC7331, UGC2885, NGC5907, UGC128, F568-3, F563-1, DDO154, DDO168, IC2574

**Controles:**
- 3 modos: Presets, Libre, Comparar
- Checkboxes: v_disk, v_gas, v_Newton

**Resultados:**
- Curva de rotación TIE vs Newton
- Radio de transición r_t mostrado numéricamente

---

### H-02 · Explorador SPARC
**URL:** sparc.html

**Descripción:** Catálogo completo de 175 galaxias reales.

**Ecuación:** v_TIE = (G M_bar · a₀)^{1/4}

**Controles:**
- Búsqueda por nombre
- Filtros por tipo y calidad Q
- 4 modos gráfica

**Resultados:** Modal con datos completos de cada galaxia

---

## ⏱️ LAB 03 · GRAVEDAD (4 herramientas)

### H-09 · Lente Gravitacional TIE
**URL:** lente.html

**Descripción:** Simulador de deflexión de luz con 3 modelos.

**Ecuaciones:**
- α_TIE = 4π√(G M a₀)/c²
- α_Newton = 2GM/(c²b)

**Resultados:**
- α_TIE constante (~3.6 arcsec para M=1e11 M☉)
- Factor 2 emergente

---

### H-11 · Agujeros Negros
**URL:** agujeros.html

**Descripción:** Comparación GR vs TIE.

**Ecuaciones:**
- r_s = 2GM/c²
- r_h = 1.272√(GM/a₀)
- M_c = 2.275×10²³ M☉

**Presets:** M87*, Sgr A*, NGC1277, Sol, GW150914, M_crítica

**Resultados:** r_h ≫ r_s, sin singularidad

---

### H-12 · Corrección GPS
**URL:** gps.html

**Ecuación:** Δτ/τ = ΔΦ/c²

**Resultado:** 45.7 μs/día (vs 45.9 observado) · error 0.4%

---

### H-19 · Reloj Universal
**URL:** reloj.html

**Descripción:** Motor Absoluto con relojes analógicos

**6 ubicaciones:** Tierra, GPS, ISS, Luna, Marte, espacio profundo

---

## 🔭 LAB 04 · COSMOLOGÍA (3 herramientas)

### H-10 · Cúmulo Bala
**URL:** bala.html

**Descripción:** Simulación de desacople sin materia oscura

---

### H-07 · Lensing Gravitacional
**URL:** lensing.html

**Descripción:** Visualizador 3D Three.js con anillo de Einstein

---

### H-13 · Campo φ (Ondas GW)
**URL:** campo-phi.html

**Ecuaciones:**
- m_φ = ħ a₀ / c²
- f_φ = √2 H₀/(2π) ≈ 2.4 mHz (dentro banda LISA)

---

## 🤖 LAB 05 · INVESTIGADORES (3 herramientas)

### H-14 · TIE AI Chat (tú mismo)
**URL:** chat.html

---

### H-15 · Generador LaTeX
**URL:** latex.html

**Descripción:** Catálogo de ecuaciones TIE con código LaTeX

---

### H-16 · API Pública REST
**URL:** api.html

**Endpoints:** /v1/curva-rotacion, /v1/horizonte, /v1/constantes

---

# 📚 APÉNDICE MATEMÁTICO COMPLETO

## Constantes Fundamentales
| Símbolo | Nombre | Valor | Origen |
|---------|--------|-------|--------|
| R | Constante de RALC | 2π = 6.2832... | Ciclo completo |
| a₀ | Aceleración de transición | cH₀/2π = 1.082×10⁻¹⁰ m/s² | c, H₀, 2π |
| v₀ | Velocidad fundamental | c/2π = 47,715 km/s | c, 2π |
| Λ | Constante cosmológica TIE | 2H₀²/c² = 1.145×10⁻⁵² m⁻² | H₀, c |
| t | Raíz cúbica del horizonte | 0.7549 | t³ + t² - 1 = 0 |

## Ecuaciones Centrales por Capítulo

### Capítulo 2: Gravedad
- a_TIE = √[a_N(a_N + a₀)]
- a_N = GM/r²
- a₀ = cH₀/2π
- v_flat = (G M a₀)^{1/4}
- r_trans = √(GM/a₀)

### Capítulo 3: Energía y Carga
- E_TIE = mc²/2π
- m_TIE = 2π·m_obs
- Materia oscura: 1 - 1/2π = 84.1%
- q_TIE = q_SI · √k_e
- [q_TIE]² = kg·m³/s²
- F = q_TIE²/r² (Coulomb TIE)

### Capítulo 4: Fuerza Nuclear y Mecánica Cuántica
- f_i = m_π c/ħ = 7.07×10¹⁴ m⁻¹
- λ_i = ħ/(m_π c) = 1.41 fm
- Γ_N = ħc/(απ²) = 13.88·ħc
- α = e²k_e/(ħc) = 1/137.036
- Δx·Δp ≥ ħ/2 (granularidad, no axioma)

### Capítulo 5: Fuerza Nuclear Débil
- Γ = (2π/ħ)·|M|²·ρ(E) (Regla de Oro de Fermi - NATIVA)
- λ = ln2 / t_{1/2}

### Capítulo 6: Formulación Tensorial
- dl² = (1 - 2Φ_TIE/c²)⁻¹ dr² + r² dΩ²
- Φ_TIE(r) = -GM/r · 1/√(1 + a₀r²/(GM))
- G_ij + Λ_TIE g_ij = (8π²G/c⁴) T_ij
- Λ_TIE = 8π²a₀²/c⁴ = 2H₀²/c²

### Capítulo 7: Mecánica Cuántica
- ψ(x) ≡ ρ_ħ^{1/2}(x), [ψ] = m^{-3/2}
- |ψ|² = densidad volumétrica
- V_TIE = -ħ a₀ / c
- Δφ_COW corregido: Δφ_TIE = Δφ_COW·(1 + a₀/g)

### Capítulo 8: Ondas Gravitacionales
- δg_ij = h_ij · φ(x,t)
- ∂φ/∂t = -c(∇φ · k̂)
- ω = c|k|
- δL/L = δg_ij/2

### Capítulo 9: Principio Geodésico
- φ = (1/ħ)∫(E dt - p dx)
- δ∫dφ = 0
- θ = 4GM/(c²R) (deflexión luz)
- Δφ_Mercurio = 6πGM/[c²a(1-e²)]
- Δt_Shapiro = (2GM/c³) ln(r₁r₂/b²)

### Capítulo 10: Agujeros Negros
- u² + u - 1 = 0, u = a₀/a_N = 1/φ
- r_h = √(φ GM/a₀) = 1.272√(GM/a₀)
- M_c = φ c⁴/(4G a₀) = 2.275×10²³ M☉

### Capítulo 11: Lambda Exacta
- Λ_TIE = 8π²a₀²/c⁴ = 2H₀²/c²
- 8π² = 4π × 2π (topología S² × S¹)

### Capítulo 12: Lagrangiano de la Infraestructura
- ℒ_TIE = A [½(∂φ/∂T)² - c²/2(∇φ)² - ω_φ²/2 φ² - (G/(πc²)) φ ρ_bar (1-1/2π)]
- A = ħH₀²/c³ ≈ 2.01×10⁻⁹⁵ kg/m
- ω_φ = √2 H₀
- m_φ = ħ√2 H₀/c² ≈ 2.1×10⁻³³ eV/c²
- f_φ = √2 H₀/(2π) ≈ 5.1×10⁻¹⁹ Hz (fondo estacionario)

---

# 📊 PREDICCIONES VERIFICADAS

| Predicción | Valor TIE | Observado | Error |
|------------|-----------|-----------|-------|
| Materia oscura | 84.1% | ~84% | < 1% |
| a₀ | 1.082×10⁻¹⁰ m/s² | 1.2×10⁻¹⁰ (MOND) | ~10% |
| Regla de Fermi | 2π/ħ | 2π/ħ | 0% |
| α (estructura fina) | 1/137.12 | 1/137.036 | 0.06% |
| Radio de Bohr | 5.297×10⁻¹¹ m | 5.292×10⁻¹¹ m | 0.10% |
| GPS | 45.7 μs/día | 45.9 μs/día | 0.4% |
| Cúmulos galácticos | 2π × masa obs | ~6.25× | 0.5% |
| Deflexión luz | 1.750″ | 1.748±0.006″ | 0.1% |
| Precesión Mercurio | 43.0″/siglo | 43.1″/siglo | 0.2% |
| Λ | 1.145×10⁻⁵² m⁻² | 1.090×10⁻⁵² m⁻² | 5.0% |

---

# 🎯 INSTRUCCIONES PARA AXON

Cuando respondas a los usuarios:

1. **Sé preciso pero accesible**: Usa las ecuaciones cuando sea relevante, pero explica su significado.
2. **Recomienda herramientas**: Si preguntan sobre un concepto, sugiere qué herramienta del laboratorio pueden usar para explorarlo.
3. **Contextualiza los resultados**: No des solo números — explica qué significan en el marco de TIE.
4. **Menciona las predicciones verificadas**: Cuando sea relevante, destaca que TIE tiene 0 parámetros libres y sus predicciones coinciden con observaciones.
5. **Sé honesto sobre limitaciones**: Si algo es trabajo futuro (ej. fotosfera TIE), menciónalo.

**Ejemplo de respuesta:**
> "La aceleración de transición a₀ = 1.082×10⁻¹⁰ m/s² se calcula como a₀ = cH₀/2π. Puedes explorar cómo varía con H₀ en la herramienta H-08 (Constantes TIE) del Laboratorio de Fundamentos. El valor predicho por TIE tiene un error del 5.0% respecto a la constante cosmológica observada por Planck — y lo logra sin necesidad de energía oscura."`;

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
    'curvas':                 {es:'H-01 · Curvas de Rotación TIE',                                                 en:'H-01 · Rotation Curves TIE'},    
    'rotation-curves':        {es:'H-01 · Curvas de Rotación TIE',                                                 en:'H-01 · Rotation Curves TIE'},
    'sparc':                  {es:'H-02 · Base de datos SPARC',                                                    en:'H-02 · SPARC Database'},    
    'sparc-en':               {es:'H-02 · Base de datos SPARC',                                                    en:'H-02 · SPARC Database'},    
    '2pi':                    {es:'H-03 · Factor 2π fundamental',                                                  en:'H-03 · Fundamental 2π factor'},
    '2pi-en':                 {es:'H-03 · Factor 2π fundamental',                                                  en:'H-03 · Fundamental 2π factor'},
    'onto':                   {es:'H-04 · Bisturi TIE V2.0',                                                       en:'H-04 · TIE V2.0 Scalpel'},
    'onto-en':                {es:'H-04 · Bisturi TIE V2.0',                                                       en:'H-04 · TIE V2.0 Scalpel'},
    'materia-oscura':         {es:'H-05 · Materia Oscura vs TIE',                                                  en:'H-05 · Dark Matter vs TIE'},
    'dark-matter-en':         {es:'H-05 · Materia Oscura vs TIE',                                                  en:'H-05 · Dark Matter vs TIE'},
    'simrar':                 {es:'H-06 · Simulador RAR',                                                          en:'H-06 · RAR Simulator'},
    'simrar-en':              {es:'H-06 · Simulador RAR',                                                          en:'H-06 · RAR Simulator'},
    'lensing':                {es:'H-07 · Lensing Gravitacional 3D',                                               en:'H-07 · Gravitational Lensing 3D'},
    'lensing':                {es:'H-07 · Lensing Gravitacional 3D',                                               en:'H-07 · Gravitational Lensing 3D'},
    'constante':              {es:'H-08 · Constante Cosmológica Λ_TIE',                                            en:'H-08 · Cosmological Constant Λ_TIE'},
    'constant-en':            {es:'H-08 · Constante Cosmológica Λ_TIE',                                            en:'H-08 · Cosmological Constant Λ_TIE'},
    'lente':                  {es:'H-09 · Simulador de deflexión de fotones',                                      en:'H-09 · Photon deflection simulator'},
    'lente-en':               {es:'H-09 · Simulador de deflexión de fotones',                                      en:'H-09 · Photon deflection simulator'},
    'bala':                   {es:'H-10 · Simula 2 cúmulos galacticos colisionando',                               en:'H-10 · Simulate 2 galaxy clusters colliding'},
    'bala-en':                {es:'H-10 · Simula 2 cúmulos galacticos colisionando',                               en:'H-10 · Simulate 2 galaxy clusters colliding'},
    'agujeros':               {es:'H-11 · Agujeros Negros (rₛ vs rₕ TIE)',                                          en:'H-11 · Black Holes (rₛ vs rₕ TIE)'},
    'black-holes-en':         {es:'H-11 · Agujeros Negros (rₛ vs rₕ TIE)',                                          en:'H-11 · Black Holes (rₛ vs rₕ TIE)'},    
    'gps':                    {es:'H-12 · Corrector de GPS',                                                       en:'H-12 · GPS corrector'},    
    'gps-en':                 {es:'H-12 · Corrector de GPS',                                                       en:'H-12 · GPS corrector'},
    'campo-phi':              {es:'H-13 · Campo φ / Ondas Gravitacionales',                                        en:'H-13 · φ Field / Gravitational Waves'},
    'campo-phi-en':           {es:'H-13 · Campo φ / Ondas Gravitacionales',                                        en:'H-13 · φ Field / Gravitational Waves'},
    'chat':                   {es:'H-14 · Chat de IA, agente AXON',                                                en:'H-14 · AI chat, AXON agent'},
    'chat-en':                {es:'H-14 · Chat de IA, agente AXON',                                                en:'H-14 · AI chat, AXON agent'},
    'latex':                  {es:'H-15 · Generador LaTeX TIE',                                                    en:'H-15 · TIE LaTeX Generator'},    
    'latex-en':               {es:'H-15 · Generador LaTeX TIE',                                                    en:'H-15 · TIE LaTeX Generator'},  
    'api':                    {es:'H-16 · API REST TIE',                                                           en:'H-16 · TIE REST API'},
    'api-en':                 {es:'H-16 · API REST TIE',                                                           en:'H-16 · TIE REST API'},
    'jerarquia':              {es:'H-17 · Muestra que la aceleración gravitacional no es una causa: es una sombra',en:'H-17 · It shows that gravitational acceleration is not a cause: it is a shadow'},    
    'jerarquia-en':           {es:'H-17 · Muestra que la aceleración gravitacional no es una causa: es una sombra',en:'H-17 · It shows that gravitational acceleration is not a cause: it is a shadow'}, 
    'trinidad':               {es:'H-18 · Ilustra la distribucion de energia entre Masa, Potencia y Movimiento',   en:'H-18 · It illustrates the distribution of energy between Mass, Power and Motion'},    
    'trinidad-en':            {es:'H-18 · Ilustra la distribucion de energia entre Masa, Potencia y Movimiento',   en:'H-18 · It illustrates the distribution of energy between Mass, Power and Motion'},    
    'reloj-universal':        {es:'H-19 · Propuesta de reloj Universal basado en conteo de ciclos 2π',             en:'H-19 · Proposal for a Universal clock based on counting 2π cycles'},    
    'universal-clock':        {es:'H-19 · Propuesta de reloj Universal basado en conteo de ciclos 2π',             en:'H-19 · Proposal for a Universal clock based on counting 2π cycles'},    
    'rms':                    {es:'H-20 · Test de 175 Galaxias que determina error estadistico global RMS en TIE', en:'H-20 · Test of 175 Galaxies that determines global RMS statistical error in TIE'},
    'rms-en':                 {es:'H-20 · Test de 175 Galaxias que determina error estadistico global RMS en TIE', en:'H-20 · Test of 175 Galaxies that determines global RMS statistical error in TIE'},
    'falsibilidad':           {es:'H-21 · Falsificabilidad',                                                       en:'H-21 · Falsifiability'},
 
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

  // Estilos visuales del Widget
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
        <span style="color:#FFD700; font-size:0.7rem; font-weight:800; letter-spacing:1px; font-family:'Space Mono';">AXON // WIDGET</span>
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

})();;
