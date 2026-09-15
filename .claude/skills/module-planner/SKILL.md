---
name: module-planner
description: Planifica la arquitectura completa de un módulo (4 clases). Usar ANTES de crear clases individuales. Genera MODULE-PLAN.md para aprobación.
allowed-tools: Read, Glob, Grep, WebSearch, AskUserQuestion
---

# Planificador de Módulos

## Objetivo

Diseñar la arquitectura completa de un módulo de 4 clases ANTES de crear los recursos individuales. Este skill genera un documento `MODULE-PLAN.md` que sirve como blueprint para los demás skills.

---

## Cuándo Usar Este Skill

| Escenario | Usar |
|-----------|------|
| Crear módulo nuevo desde cero | Sí |
| Ajustar módulo existente (reordenar, actualizar, expandir) | Sí |
| Crear una sola clase de un módulo ya planificado | No (usar skills individuales) |
| Evaluar calidad de clases existentes | No (usar `evaluation-class`) |

---

## Filosofía de Diseño

### Principio Central
**"Las competencias definen el destino; el proyecto integrador es el vehículo"**

### Patrones Obligatorios

1. **Proyecto Único Incremental**
   - Los 4 labs construyen el MISMO proyecto
   - Cada clase añade UNA capa de complejidad
   - El estudiante ve evolución concreta de su trabajo

2. **Capas de Complejidad**
   ```
   Clase 1: Fundamento   → Lo mínimo funcional
   Clase 2: Estructura   → Organización y patrones
   Clase 3: Expansión    → Funcionalidad adicional o diseño visual
   Clase 4: Integración  → Todo junto + concepto avanzado
   ```

3. **Conexiones Explícitas**
   - Cada lab referencia qué se necesita de la clase anterior
   - "Logros Adicionales" anticipan el siguiente módulo
   - La clase 4 integra conceptos de clases 1-3

4. **Lab Calificado (última clase del módulo)**
   - ~1.5x más extenso que labs regulares
   - 50% en clase + 50% post-clase
   - 5 partes (incluye Desafío Avanzado / Logros Adicionales)
   - Rúbrica **5 criterios x 20 pts = 100 pts**

---

## Proceso de Planificación

### Fase 0: Leer Scaffolding

Leer `AGENTS.md > ## Scaffolding` para obtener las variables de nivel del curso:

| Variable | Para qué |
|----------|----------|
| `course_level` | Calibrar complejidad general |
| `scaffolding_style` | Nivel de detalle en labs planificados (`guided` / `descriptive` / `spec-based`) |
| `part_naming` | Nombrar partes del lab en checkpoints (ej. "Parte" o "HU") |
| `checkpoint_style` | Formato de checkpoints (`visual` / `functional` / `sprint-based`) |
| `instruction_style` | Redacción de instrucciones (`step-by-step` / `constrained-tasks` / `acceptance-criteria`) |
| `class_duration` | Duración anunciada de la clase (ej. 150 min, 180 min) |
| `buffer` | Minutos reservados para imprevistos (default: 30) |
| `gap_types` | Tipos de gap disponibles para el nivel |
| Tabla de Autonomía | Distribuir porcentaje de gaps por módulo (ej. M1=10%, M2=15%) |

Si la sección Scaffolding no existe, usar defaults: `course_level=1`, `guided`, `Parte`, `visual`, `class_duration` = leer de README.md, `buffer=30`.

### Fase 1: Recopilar Contexto

```
1. Leer fuentes de verdad:
   - README.md del curso (syllabus) → estructura de módulos, proyectos, clases
   - AGENTS.md → convenciones, scaffolding, tipos de lab, sistema de evaluación

2. Identificar número de módulo (M)
   - Derivar el rango de clases desde README.md
   - No hardcodear: leer la tabla de módulos del syllabus

3. Leer contexto existente:
   - Si M > 1: módulo anterior (para continuidad)
   - Si ajuste: recursos actuales del módulo

4. Obtener del usuario:
   - Competencias objetivo (qué debe SABER HACER el estudiante)
   - Nombre del proyecto integrador
   - Herramientas/tecnologías principales
   - Conexión con módulo anterior (si aplica)
```

### Fase 2: Diseñar Arquitectura

```
1. Mapear competencias a clases
   - Una competencia principal por clase
   - Verificar que sean medibles y verificables
   - Usar verbos de acción (no "entender" ni "aprender")

2. Diseñar progresión del proyecto
   - Qué tiene el proyecto al final de cada clase
   - Cómo cada capa se construye sobre la anterior

3. Definir checkpoints por lab (usar part_naming y checkpoint_style de Fase 0)
   - 3 checkpoints para labs regulares (clases 1-3 del módulo)
   - 5 partes para lab calificado (última clase del módulo)

4. Calcular tiempos efectivos
   - Leer class_duration de AGENTS.md > Scaffolding (o de README.md)
   - Restar buffer (default: 30 min) → tiempo_efectivo
   - Lab regular: debe caber en ~60% del tiempo_efectivo
   - Lab calificado: 50% en clase (tiempo_efectivo) + 50% post-clase
   - Registrar en tabla de Información General del plan

5. Establecer criterios de evaluación (última clase)
   - 5 criterios que reflejen las competencias del módulo
   - Criterio 5 = Desafío Avanzado / Logros Adicionales
   - Leer escala de README.md > Sistema de Evaluación

6. Identificar conexiones
   - Pre-requisitos del módulo anterior
   - Semillas para el módulo siguiente
```

### Fase 3: Generar MODULE-PLAN.md

Crear documento en: `curriculum/module-{M}/MODULE-PLAN.md`

(Ver template completo abajo)

---

## Template: MODULE-PLAN.md

```markdown
# Plan del Módulo {N}: {Título}

> Este documento define la arquitectura del módulo. Aprobar antes de crear clases.

## Información General

| Aspecto | Detalle |
|---------|---------|
| **Módulo** | {N} |
| **Título** | {Título descriptivo} |
| **Proyecto Integrador** | {Nombre del proyecto} |
| **Clases** | {Primera} a {Última} |
| **Duración por clase** | {class_duration} min |
| **Buffer** | {buffer} min (imprevistos, preguntas, retrasos) |
| **Tiempo efectivo** | {class_duration - buffer} min ← planificar para este |
| **Pre-requisitos** | {Qué necesita saber el estudiante} |
| **Stack Principal** | {Tecnologías/herramientas clave} |

---

## Competencias del Módulo

Al finalizar el módulo, el estudiante podrá:

1. **{Competencia 1}** - {verbo de acción + objeto + contexto}
2. **{Competencia 2}** - {verbo de acción + objeto + contexto}
3. **{Competencia 3}** - {verbo de acción + objeto + contexto}
4. **{Competencia 4}** - {verbo de acción + objeto + contexto}

---

## Proyecto Integrador: {Nombre}

### Descripción
{2-3 párrafos describiendo:
- Qué es el proyecto
- Por qué es relevante para el estudiante
- Qué aprenderá construyéndolo}

### Evolución por Clase

| Clase | Capa | Estado del Proyecto al Finalizar |
|-------|------|----------------------------------|
| {Primera} | Fundamento | {Descripción concreta} |
| {Segunda} | Estructura | {Qué se añade} |
| {Tercera} | Expansión | {Qué se añade} |
| {Última} | Integración | {Estado final completo} |

### Entregable Final
{Descripción de qué entrega el estudiante al final del módulo}

---

## Arquitectura de Clases

### Clase {Primera}: {Título}

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | {UN solo concepto} |
| **Objetivo del Lab** | {Qué construye/aprende} |
| **Herramientas** | {Software, librerías, servicios} |
| **Entregable** | {Screenshot / código / documento / deploy} |

**Checkpoints del Lab:**
1. {Checkpoint verificable - describe QUÉ debe ver/lograr el estudiante}
2. {Checkpoint 2}
3. {Checkpoint 3}

**Glosario de la Clase:**
| Término | Definición breve |
|---------|------------------|
| {Término 1} | {Definición} |
| {Término 2} | {Definición} |

**Dependencias:**
- **Requiere:** {Nada / Conceptos del módulo anterior}
- **Habilita:** {Qué conceptos de la siguiente clase dependen de esto}

---

### Clase {Segunda}: {Título}

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | {UN solo concepto} |
| **Objetivo del Lab** | {Qué construye/aprende} |
| **Herramientas** | {Software, librerías, servicios} |
| **Entregable** | {Screenshot / código / documento / deploy} |

**Checkpoints del Lab:**
1. {Checkpoint 1}
2. {Checkpoint 2}
3. {Checkpoint 3}

**Tu Proyecto Hasta Ahora (del lab anterior):**
- [ ] {Requisito 1 de clase anterior}
- [ ] {Requisito 2 de clase anterior}

**Glosario de la Clase:**
| Término | Definición breve |
|---------|------------------|
| {Término 1} | {Definición} |

**Dependencias:**
- **Requiere:** Clase {Primera} ({concepto específico})
- **Habilita:** {Qué conceptos de la siguiente clase dependen de esto}

---

### Clase {Tercera}: {Título}

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | {UN solo concepto} |
| **Objetivo del Lab** | {Qué construye/aprende} |
| **Herramientas** | {Software, librerías, servicios} |
| **Entregable** | {Screenshot / código / documento / deploy} |

**Checkpoints del Lab:**
1. {Checkpoint 1}
2. {Checkpoint 2}
3. {Checkpoint 3}

**Tu Proyecto Hasta Ahora:**
- [ ] {Requisito de clase {Primera}}
- [ ] {Requisito de clase {Segunda}}

**Glosario de la Clase:**
| Término | Definición breve |
|---------|------------------|
| {Término 1} | {Definición} |

**Dependencias:**
- **Requiere:** Clases {Primera} y {Segunda}
- **Habilita:** Lab calificado (clase {Última})

---

### Clase {Última} (Lab Calificado): {Título}

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | {Integración + concepto nuevo avanzado} |
| **Objetivo del Lab** | Demostrar dominio del módulo completo |
| **Herramientas** | {Todas las del módulo} |
| **Entregable** | Proyecto completo + código fuente |
| **Distribución** | 50% en clase + 50% post-clase |

**Partes del Lab (5 partes):**

| Parte | Título | Tiempo | Dónde | Descripción |
|-------|--------|--------|-------|-------------|
| 1 | {Título} | 30 min | En clase | {Qué se hace} |
| 2 | {Título} | 35 min | En clase | {Qué se hace} |
| 3 | {Título} | 30 min | Post-clase | {Qué se hace} |
| 4 | Verificación | 15 min | Post-clase | Revisar con rúbrica |
| 5 | Desafío Avanzado | 25 min | Post-clase | {Qué se hace} |

> ⏱️ Tiempo en clase = tiempo_efectivo. Distribuir partes 1-2 para que sumen ≤ tiempo_efectivo × 0.5.
> Partes post-clase no están limitadas por buffer.

**Tu Proyecto Hasta Ahora:**
- [ ] {Requisito de clase {Primera}}
- [ ] {Requisito de clase {Segunda}}
- [ ] {Requisito de clase {Tercera}}

**Criterios de Evaluación (5 x 20 pts = 100 pts):**

| Criterio | Qué Evalúa | Excelente (20) | Bueno (15) | Satisfactorio (10) | Bajo (5) |
|----------|-----------|----------------|------------|---------------------|----------|
| **{Criterio 1}** | {Aspecto} | {Descripción} | {Descripción} | {Descripción} | {Descripción} |
| **{Criterio 2}** | {Aspecto} | {Descripción} | {Descripción} | {Descripción} | {Descripción} |
| **{Criterio 3}** | {Aspecto} | {Descripción} | {Descripción} | {Descripción} | {Descripción} |
| **{Criterio 4}** | {Aspecto} | {Descripción} | {Descripción} | {Descripción} | {Descripción} |
| **{Criterio 5 - Desafío}** | Parte 5 | {Descripción} | {Descripción} | {Descripción} | {Descripción} |

**Glosario de la Clase:**
| Término | Definición breve |
|---------|------------------|
| {Término 1} | {Definición} |

---

## Mapa de Dependencias

```
Clase {Primera} ──→ Clase {Segunda} ──→ Clase {Tercera} ──→ Clase {Última}
     │                  │                   │                   │
     └──────────────────┴───────────────────┴───────────────────┘
                      Proyecto: {Nombre}
```

### Flujo de Conceptos

| Clase | Introduce | Usa de Anteriores |
|-------|-----------|-------------------|
| {Primera} | {Concepto} | {Nada / Módulo anterior} |
| {Segunda} | {Concepto} | {De clase {Primera}} |
| {Tercera} | {Concepto} | {De clases {Primera}, {Segunda}} |
| {Última} | {Concepto avanzado} | {Todo lo anterior} |

---

## Conexión con Otros Módulos

### Módulo Anterior (M{N-1})
| Aspecto | Detalle |
|---------|---------|
| **Conceptos que se asumen** | {Lista de conceptos} |
| **Proyecto anterior** | {Nombre} |
| **¿Se conecta?** | {Sí: cómo / No: proyectos independientes} |

### Módulo Siguiente (M{N+1})
| Aspecto | Detalle |
|---------|---------|
| **Conceptos que se anticipan** | {Lista para "Logros Adicionales"} |
| **Semillas plantadas** | {Qué se menciona pero no se profundiza} |

---

## Glosario Completo del Módulo

| Término | Clase | Definición |
|---------|-------|------------|
| {Término 1} | {Primera} | {Definición} |
| {Término 2} | {Primera} | {Definición} |
| {Término 3} | {Segunda} | {Definición} |
| ... | ... | ... |

---

## Checklist de Verificación

Antes de aprobar este plan, verificar:

- [ ] Las 4 competencias son medibles con verbos de acción
- [ ] El proyecto tiene sentido como unidad coherente
- [ ] Cada clase tiene UN concepto principal claro
- [ ] Los checkpoints son verificables (visual, funcional, o documental según checkpoint_style)
- [ ] Las dependencias entre clases son explícitas
- [ ] La última clase integra conceptos de las 3 anteriores
- [ ] Los 5 criterios de evaluación reflejan las competencias
- [ ] El Criterio 5 corresponde al Desafío Avanzado / Logros Adicionales
- [ ] Hay conexión clara con módulos adyacentes
- [ ] El glosario cubre todos los términos nuevos
- [ ] Los tiempos en clase suman ≤ tiempo_efectivo (no la duración total)
- [ ] El stack tecnológico es consistente con el syllabus del curso

---

## Notas de Diseño

{Espacio para anotar decisiones de diseño, alternativas consideradas, o contexto adicional}
```

---

## Para Módulos Existentes (Ajustes)

Cuando el módulo ya existe, el proceso cambia:

### Paso 1: Extraer Arquitectura Actual

```
1. Leer los 4 READMEs de clase
2. Leer los 4 labs
3. Identificar:
   - Proyecto integrador actual
   - Conceptos por clase
   - Checkpoints existentes
   - Criterios de evaluación (si hay)
```

### Paso 2: Identificar Tipo de Ajuste

| Tipo | Descripción | Impacto |
|------|-------------|---------|
| **Reordenar** | Mover contenido entre clases | Medio - ajustar dependencias |
| **Actualizar** | Cambiar herramientas/versiones | Bajo - mantener estructura |
| **Expandir** | Agregar contenido nuevo | Alto - verificar tiempos |
| **Reducir** | Quitar contenido | Medio - verificar coherencia |

### Paso 3: Generar MODULE-PLAN.md con Diff

```markdown
## Cambios Propuestos

### Clase X: {Título}
| Aspecto | Actual | Propuesto | Razón |
|---------|--------|-----------|-------|
| {Aspecto} | {Valor actual} | {Nuevo valor} | {Por qué} |
```

---

## Integración con Otros Skills

### Flujo Completo

```
┌─────────────────────┐
│   module-planner    │ ← ESTE SKILL
└──────────┬──────────┘
           │
           ▼
    MODULE-PLAN.md
    (Usuario aprueba)
           │
           ▼
┌──────────────────────────────────────────────┐
│  Para cada clase (1-4 del módulo):           │
│                                              │
│  1. class-readme  → README.md                │
│  2. class-lab     → lab/README.md            │
│                     (+ rubric.md si última)  │
│  3. class-slides  → slides/README.md         │
│  4. class-facilitator → facilitator/README.md│
│  5. class-infographic → infographic/         │
│                     (index.html +            │
│                      image-prompts.md)       │
└──────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────┐
│  evaluation-class   │ (Verificar cada clase)
└─────────────────────┘
           │
           ▼
┌─────────────────────┐
│    module-test      │ (Test diagnóstico del módulo)
└─────────────────────┘
```

### Información que Este Skill Provee

| Información | Skills que la Usan |
|-------------|-------------------|
| Competencias del módulo | class-readme, class-lab |
| Concepto por clase | class-readme, class-slides |
| Checkpoints por lab | class-lab, class-slides |
| Glosario por clase | class-readme |
| Concepto + glosario por clase | class-infographic |
| Criterios evaluación | class-lab (rubric.md) |
| Dependencias entre clases | class-slides (transiciones) |
| Conexión con otros módulos | class-lab (Logros Adicionales) |
| "Tu Proyecto Hasta Ahora" | class-lab |

---

## Restricciones

- Usar verbos de acción medibles en competencias (no "entender" ni "aprender")
- El proyecto integrador DEBE requerir técnicas de las 4 clases
- Máximo 2 herramientas nuevas por clase
- No hardcodear información que está en README.md o AGENTS.md
- El contenido en clase debe planificarse para `tiempo_efectivo` (duración - buffer), NO para la duración total

---

## Validación Final

Después de generar MODULE-PLAN.md, verificar que:

1. **Coherencia vertical:** Cada clase prepara para la siguiente
2. **Coherencia horizontal:** Las 4 clases forman una unidad temática
3. **Medibilidad:** Todos los checkpoints son verificables
4. **Completitud:** El plan tiene toda la info necesaria para crear clases
5. **Realismo:** Los tiempos y alcances son alcanzables para el nivel del estudiante
6. **Consistencia tecnológica:** El stack se alinea con el syllabus del curso
7. **Relevancia:** Los ejemplos conectan con el contexto del estudiante

---

## Mantenimiento de Fuente de Verdad

> **IMPORTANTE:** Después de aprobar un MODULE-PLAN.md, actualizar:

1. **README.md (raíz):**
   - Verificar que el contenido del módulo coincide con el plan aprobado
   - Actualizar tabla de progreso si cambió

2. **CLAUDE.md:**
   - Actualizar checklist de progreso si cambió

README.md es la **única fuente de verdad** del syllabus. Todos los skills leen de ahí.
