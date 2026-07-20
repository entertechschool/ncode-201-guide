# AGENTS.md - Code 201 Guide

> Instrucciones para agentes AI que trabajan en este repositorio.
> Compatible con: Claude Code, GitHub Copilot, Cursor, Gemini CLI, Windsurf, Codex.

---

## Proyecto

Repositorio del curso **Code 201 — Fundamentals of Software Development** de EnterTechSchool. Contiene curriculum completo: READMEs, laboratorios, slides, guías de facilitador y tests. El curso forma desarrolladores desde cero en HTML, CSS y JavaScript (DOM, eventos, clases, prototipos, localStorage, Chart.js), preparándolos para Code 301 (Intermediate Software Development).

**Duración:** 123 horas totales (81 en vivo + 36 asíncronas + 6 networking).

---

## Fuente de Verdad

**`README.md` es la única fuente de verdad.** Contiene:

- Sílabo oficial (18 temas principales)
- Duración y formato del curso
- Progresión de contenidos clase a clase

**Regla:** Leer SIEMPRE `README.md` antes de generar o modificar contenido. Nunca hardcodear información que ya está en el sílabo. Si hay conflicto entre un archivo de clase y `README.md`, el sílabo gana.

---

## Estructura del Repositorio

```
├── README.md                        # Sílabo (fuente de verdad)
├── AGENTS.md                        # Este archivo
├── admission.md                     # Examen de admisión a Code 301
├── FACILITATOR.md                   # Guía general del facilitador
├── curriculum/
│   ├── class-{00..20}/              # Clases del curso
│   │   ├── README.md                # Resumen para estudiante
│   │   ├── lab/README.md            # Laboratorio paso a paso
│   │   ├── slides/README.md         # Presentación reveal.js
│   │   ├── facilitator/README.md    # Guía pedagógica
│   │   ├── demo/                    # Demos opcionales en vivo
│   │   ├── project/                 # Proyectos opcionales
│   │   ├── test/                    # Tests diagnósticos (clases calificadas)
│   │   └── DISCUSSION.md            # Puntos de discusión (opcional)
│   ├── cheat-sheets/                # Referencias rápidas
│   ├── exercises/                   # Ejercicios adicionales
│   ├── lectures/                    # Material complementario
│   └── prework/                     # Preparación pre-curso
├── facilitator/                     # Recursos transversales del facilitador
├── slides/                          # Slides globales del curso
├── tests/                           # Tests por módulo (t01, t02, t03, t04)
├── project/ y projects/             # Proyectos integradores
├── home/ y context/                 # Páginas y documentos internos
├── assets/                          # Imágenes y estilos
└── .claude/skills/                  # Skills compartidas (via sync)
```

---

## Convenciones

### Idioma y Encoding

- **Idioma:** Español latinoamericano
- **Encoding:** UTF-8 puro (tildes directas: á, é, í, ó, ú, ñ, ü)
- **Signos:** ¿?, ¡! (nunca omitir el signo de apertura)
- **Corrupción:** Si aparecen `�` o `ó`, el archivo está corrupto — regenerar
- **Código:** Los identificadores JS/HTML/CSS siempre en inglés (camelCase para JS, kebab-case para CSS)

### Enlaces Externos (GitHub Pages / Kramdown)

```markdown
# Externos: SIEMPRE con {:target="_blank"}
[MDN Web Docs](https://developer.mozilla.org/){:target="_blank"}

# Internos: NUNCA con target
[Clase 01](../class-01/)
[Sección](#seccion)
```

### Emojis

Estratégicos en headers para escaneo visual. No decorativos ni excesivos.

---

## Tono por Tipo de Archivo

| Archivo | Audiencia | Tono | Persona |
|---------|-----------|------|---------|
| `README.md` | Estudiante (pre-clase) | Profesional, inspirador | Segunda persona ("construirás") |
| `lab/README.md` | Estudiante (en clase) | Práctico, paso a paso | Segunda persona ("codea", "verifica") |
| `slides/README.md` | Facilitador (en clase) | Educativo, conversacional | Mixta |
| `facilitator/README.md` | Instructor (pre-clase) | Reflexivo, mentor-a-mentor | Narrativo estilo Medium |

---

## Límites por Archivo

| Archivo | Límite | Notas |
|---------|--------|-------|
| `README.md` | ~150 líneas | Solo resumen y preparación |
| `lab/README.md` | ≤200 líneas | Laboratorio paso a paso |
| `slides/README.md` | ≤13 slides | Reveal.js markdown (separador `---`) |
| `facilitator/README.md` | <300 líneas | ~8 min lectura |

---

## Tipos de Lab

Determinar tipo según posición de la clase en el módulo:

```
Posición = ((clase - 1) % 4) + 1
Lab calificado = (Posición == 4)
```

| Tipo | Clases | Partes | Tiempo | Rúbrica |
|------|--------|--------|--------|---------|
| Regular | 1-3, 5-7, 9-11, 13-15, 17 | 3 | ~60 min (en clase) | No |
| Calificado | 4, 8, 12, 16 | 5 (incluye Desafío) | ~90 min (50% clase + 50% post) | Sí |
| Proyecto Final | 17-20 | N/A | Multi-sesión (4 clases) | Sí (50% nota final) |

---

## Sistema de Evaluación

Leer de `README.md`. Reglas derivadas:

- Solo la **última clase de cada módulo** tiene lab calificado (clases 4, 8, 12, 16)
- Clases 17-18 son Proyecto Final + Examen (integran todo el curso)
- Tests diagnósticos: NO afectan calificación, son control interno
- Aprobación: puntaje mínimo 70/100, asistencia mínima ~14/18 sesiones presenciales
- **Examen de admisión Code 301:** `admission.md` valida transferencia directa

---

## Scaffolding

> Variables de nivel para que los skills compartidos adapten su output.
> Los skills leen esta sección y ajustan gaps, checkpoints e instrucciones.

### Variables de Nivel

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `course_level` | 1 | Complejidad general (1=intro, 2=intermedio, 3=avanzado) |
| `scaffolding_style` | guided | Estilo: `guided` / `descriptive` / `spec-based` |
| `part_naming` | Parte | Nombre de secciones del lab: `Parte` / `HU` |
| `checkpoint_style` | visual | Tipo de checkpoints: `visual` / `functional` / `sprint-based` |
| `instruction_style` | step-by-step | Redacción: `step-by-step` / `constrained-tasks` / `acceptance-criteria` |
| `gap_types` | comment-placeholders | Tipos de gap: `comment-placeholders` / `+blank-lines` / `+pseudocode,multiple-choice` |
| `class_duration` | 180 | Duración real de contenido activo en minutos (~3 horas) |
| `buffer` | 30 | Minutos reservados para imprevistos (preguntas, retrasos técnicos) |

### Tabla de Autonomía por Módulo

| Módulo | Clases | Código Completo | Gaps | Descripción |
|--------|--------|-----------------|------|-------------|
| M1 — HTML + CSS Fundamentos | 1-4 | 85% | 15% | Layout guiado: el estudiante completa HTML/CSS con flex/grid |
| M2 — Fundamentos de Programación (imperativa, funcional, OOP, prototipos) | 5-8 | 80% | 20% | JS guiado: el estudiante completa funciones imperativas, funciones puras, constructores, prototipos y captura de input desde formulario HTML pre-armado |
| M3 — Aplicaciones Web con Objetos | 9-12 | 75% | 25% | El estudiante manipula el DOM, modulariza con callbacks, gestiona eventos y maneja excepciones |
| M4 — Modelado, Estado y Persistencia | 13-16 | 70% | 30% | El estudiante usa `class` ES6 (sin herencia, eso es Code 301), implementa Patrón Store completo (`subscribe`, `getState`, `setState`, `notify`), persiste en LocalStorage con `try/catch+finally`, sincroniza estado con UI, agrega delegación de eventos y cálculo sobre estado |
| M5 — Proyecto Integrador Final | 17-20 | 0% (brief, sin código) | 100% | Proyecto predefinido "Mi Setlist" (iTunes Search API) que integra M1-M4 por sprints. Los labs NO traen código: dan contrato técnico, MVP, timeboxes y checkpoints por resultado; el estudiante codea con la IA (guía → copiloto → corrector) y el instructor mentorea por rondas |

### Formato de Gaps por Nivel

**Nivel 1 (guided):** Gaps de personalización — el estudiante completa contenido propio dentro de flujos guiados.

```javascript
// Escribe una función que reciba un array de números y retorne solo los pares
function filtrarPares(numeros) {
  // TU CÓDIGO AQUÍ:
  return numeros.filter(/* completa */);
}
```

### Checkpoints por Nivel

**visual** (Nivel 1): Describe lo que el estudiante debe VER en pantalla.
> ✅ **Checkpoint:** Al abrir tu HTML en el navegador, ves un botón azul que al hacer clic muestra una alerta con "¡Hola, DOM!".

### Densidad de Contenido

Code 201 es un curso **introductorio para futuros desarrolladores sin experiencia previa**.

- M1-M2: Los labs guían al estudiante con editor local (VS Code) + navegador
- M3-M4: Los labs integran manipulación avanzada del DOM, callbacks, event handling, try/catch y persistencia con LocalStorage
- M5: El estudiante construye el proyecto predefinido "Mi Setlist" por sprints ágiles con la IA como copiloto (chat web + GitHub Copilot Free), integrando los aprendizajes de M1 a M4; los labs son briefs sin código
- Los "gaps" son porciones de HTML, CSS o JavaScript que el estudiante completa
- Herramientas máximas por clase: 2 nuevas (regla MAX_TWO_NEW_TOOLS)

### Aclaración sobre DOM en M2 vs M3

**DOM completo** (manipulación dinámica, render, múltiples eventos, jerarquía de nodos) se introduce en **M3 (C09)**. M2 solo toca **captura de input desde formulario** (`querySelector('#id').value` + `addEventListener('submit', ...)` + `event.preventDefault()`) como puente entre el HTML aprendido en M1 (forms accesibles) y el JS del módulo (OOP). El alumno no manipula nodos ni renderiza listas dinámicas hasta M3.

### Excepción documentada — C09 (M3) a MAX_TWO_NEW_TOOLS

La primera clase de DOM (C09) introduce 4-5 APIs relacionadas (`querySelector`, `querySelectorAll`, `.classList`, `.style`, Regex con `.replace()`) que son inseparables del primer contacto del alumno con el modelo DOM y la transformación Markdown→HTML. Esta excepción a MAX_TWO_NEW_TOOLS está justificada porque las APIs son una **familia coherente** (todas son maneras de leer/modificar nodos del DOM), no herramientas independientes. **Es la única clase del curso con esta excepción documentada.**

---

## Pipeline de Generación de Contenido

### Flujo para un módulo nuevo

```
1. module-planner  →  MODULE-PLAN.md (requiere aprobación humana)
2. Para cada clase (secuencial):
   class-readme → class-lab → class-slides → class-facilitator
3. En última clase del módulo:
   module-test
4. evaluation-class (verificar cada clase)
5. lint-markdown (validar enlaces y formato)
```

### Flujo para actualizar módulo existente

```
1. module-updater (auditar)  →  Reporte de drift en conversación
2. Usuario aprueba plan      →  Total, parcial, o solo parches
3. module-updater (implementar) → Parches → Ediciones → Regeneraciones
4. lint-markdown (validar archivos modificados)
```

### Dependencias entre archivos

| Al generar... | Leer primero... |
|---------------|-----------------|
| `README.md` de clase | `README.md` del curso, `MODULE-PLAN.md`, clase anterior |
| `lab/README.md` | `README.md` de la clase, `slides/README.md` |
| `slides/README.md` | `README.md` de la clase, `lab/README.md` |
| `facilitator/README.md` | Todos los anteriores de la clase |
| `test/` | READMEs y slides de las 4 clases del módulo |

### Regla de contexto

Nunca generar contenido sin leer los archivos de dependencia. Si un archivo de dependencia no existe, generarlo primero o pedir al usuario que lo proporcione.

---

## Modificar Contenido Existente

1. Actualizar PRIMERO `README.md` (sílabo) si el cambio afecta estructura
2. Los archivos de clase referencian al sílabo — no duplicar tablas
3. Ejecutar lint-markdown antes de considerar completo

---

## Principios Pedagógicos

Al crear contenido de clase, aplicar estos 8 principios:

1. **MOTIVATION_FIRST** — "Por qué" y valor práctico ANTES de cualquier técnica. Demo de impacto (ej: app funcional en el navegador).
2. **ONE_CONCEPT_PER_CLASS** — UN concepto principal. No mezclar temas (ej: no introducir clases ES6 y arrow functions en la misma clase).
3. **REAL_WORK_ONLY** — Ejercicios con apps reales (landing pages, to-dos, mini-games con Canvas, carritos con LocalStorage).
4. **VERIFIABLE_DELIVERABLE** — Captura del navegador, repo GitHub, link a GitHub Pages. "Entendí" NO es entregable.
5. **EXPLICIT_DEPENDENCIES** — Declarar qué requiere de clases anteriores y qué habilita.
6. **MAX_TWO_NEW_TOOLS** — Máximo 2 herramientas/APIs nuevas por clase. 3+ = PROHIBIDO.
7. **PROGRESSIVE_INTEGRATION** — Cada clase construye sobre las anteriores. Lab-04 requiere técnicas de clases 01-03.
8. **ANTI_HYPE_ALWAYS** — Al menos 1 momento de limitaciones/errores por clase. "LocalStorage no sirve para datos sensibles."
