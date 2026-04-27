---
name: class-lab
description: Genera laboratorios para clases del curso. Usar cuando se pida crear lab, laboratorio, practica guiada, o ejercicio de clase.
allowed-tools: Read, Glob, Grep, Write, Edit
---

# Generador de Laboratorios

## Objetivo

Crear laboratorios practicos con arquitectura incremental dentro de cada modulo. Los estudiantes construyen sobre el trabajo de clases anteriores, acumulando trabajo en un proyecto que culmina en el lab calificado (ultima clase de cada modulo).

## Decisiones de Diseno

| Aspecto | Decision |
|---------|----------|
| **Arquitectura** | Incremental - cada lab construye sobre el anterior |
| **Contenido** | Gaps intencionales - el estudiante debe pensar y completar |
| **Checkpoints** | Verificables en el lab (tecnicos en slides) |
| **Duracion** | Segun AGENTS.md (`lab_duration_regular`, `lab_duration_graded`) |
| **Retos** | Preview de conceptos futuros (no solo consolidacion) |

---

## Proceso de Generacion

### Paso 0: Leer configuracion del curso

Leer `AGENTS.md` del repositorio. Extraer TODAS las variables necesarias:

| Variable | Seccion en AGENTS.md | Default si no existe |
|----------|----------------------|----------------------|
| `course_name` | Encabezado / titulo | (requerido) |
| `total_classes` | Estructura del curso | 12 |
| `classes_per_module` | Estructura del curso | 4 |
| `scaffolding_style` | `## Scaffolding` | `guided` |
| `part_naming` | `## Scaffolding` | `Parte` |
| `checkpoint_style` | `## Scaffolding` | `visual` |
| `lab_duration_regular` | `## Scaffolding` o `## Estructura` | 90 |
| `lab_duration_graded` | `## Scaffolding` o `## Estructura` | 135 |
| `has_demo_day` | `## Estructura` | `true` si ultima clase del curso |
| `demo_day_class` | `## Estructura` | ultima clase (`total_classes`) |
| `has_reflection` | `## Scaffolding` | `false` |
| `reflection_name` | `## Scaffolding` | `Reflexion` |
| `achievements_name` | `## Scaffolding` | `Logros Adicionales` |
| `delivery_platform` | `## Entrega` | (sin especificar) |
| `primary_deliverable` | `## Entrega` | `Screenshot` |
| `graded_labs` | `## Estructura` | ultima clase de cada modulo |
| Tabla de Autonomia | `## Scaffolding` | 90% codigo completo |

> Si una seccion no existe, usar los defaults indicados. Nunca inventar valores especificos del curso.

### Paso 1: Identificar contexto

```
Clase X -> Modulo = floor((X-1)/classes_per_module) + 1
        -> Posicion = ((X-1) % classes_per_module) + 1
        -> Es lab calificado = (Posicion == classes_per_module)
        -> Es Demo Day = (X == demo_day_class AND has_demo_day)
```

### Paso 2: Leer nivel de scaffolding

Leer `## Scaffolding` de `AGENTS.md`. Extraer:

1. `scaffolding_style` -> determina tipo de gaps e instrucciones
2. `part_naming` -> nombre de secciones ("Parte" / "HU" / otro)
3. `checkpoint_style` -> tipo de checkpoints ("visual" / "functional" / "documental" / "sprint-based")
4. Tabla de Autonomia -> buscar fila del modulo actual para % de codigo/contenido completo vs gaps

> Si la seccion no existe, usar defaults: `guided`, `Parte`, `visual`, 90% completo.

### Paso 3: Leer recursos previos

```bash
# Clase actual
curriculum/class-{X}/README.md
curriculum/class-{X}/slides/README.md

# Clase anterior (para continuidad del proyecto)
curriculum/class-{X-1}/lab/README.md

# Syllabus (para contexto del modulo)
README.md

# Plan del modulo (si existe)
curriculum/MODULE-PLAN-M{N}.md
```

### Paso 4: Determinar tipo de lab

| Tipo | Clases | Caracteristicas |
|------|--------|-----------------|
| **Lab Regular** | Todas excepto calificadas y Demo Day | `lab_duration_regular` min, completable en clase, sin rubrica |
| **Lab Calificado** | `graded_labs` (ultima clase de cada modulo, excepto Demo Day) | `lab_duration_graded` min (~1.5x), 50% en clase + 50% post-clase, con `rubric.md` |
| **Lab Demo Day** | `demo_day_class` (si `has_demo_day`) | Formato especial, max 100 lineas, con `rubric.md` |

> **Importante:** Solo hay Demo Day en la ultima clase del curso (si `has_demo_day`). Las demas clases calificadas son labs calificados normales SIN Demo Day.
>
> **Labs Calificados:** Se espera que el estudiante avance ~50% durante la sesion en vivo y complete el resto antes de la fecha de entrega.

### Paso 5: Generar archivos

**Lab Regular:**
- `curriculum/class-{X}/lab/README.md`

**Lab Calificado:**
- `curriculum/class-{X}/lab/README.md`
- `curriculum/class-{X}/lab/rubric.md`

---

## Template: Lab Regular

> **Naming:** Usar el valor de `part_naming` para nombrar secciones (ej: "Parte 1", "HU-1"). Default: "Parte".

```markdown
# Lab [XX]: [Titulo del Lab]

## 🎯 Objetivos

1. [Objetivo medible 1]
2. [Objetivo medible 2]
3. [Objetivo medible 3]

---

## 🔑 Conceptos Clave

- **[Termino 1]** - Definicion concisa
- **[Termino 2]** - Definicion concisa
- **[Termino 3]** - Definicion concisa

---

## ⚙️ Setup Inicial

Este lab continua el trabajo de la Clase X-1. Verifica que tengas todo listo:

| ✓ | Requisito | Verificacion |
|---|-----------|--------------|
| ☐ | [Requisito 1] | [Como verificar] |
| ☐ | [Requisito 2] | [Como verificar] |
| ☐ | [Requisito 3] | [Como verificar] |

> ⚠️ Si no completaste el lab anterior, completa los requisitos antes de continuar.

---

## {part_naming} 1: [Titulo] (XX min)

### 1.1 [Subtarea]

Explicacion breve de que haremos.

```{lenguaje}
<!-- Completa el codigo faltante -->
<elemento>
    <!-- Tu codigo aqui -->
</elemento>
```

> 💡 **Tip:** Consejo util para esta parte.

### 1.2 [Subtarea]

Explicacion breve.

```{lenguaje}
/* Agrega lo necesario */
.selector {
    /* ¿Que propiedad necesitas aqui? */
}
```

✅ **Checkpoint:** [Descripcion verificable de lo que debe estar listo]

---

## {part_naming} 2: [Titulo] (XX min)

### 2.1 [Subtarea]

[Contenido con gaps intencionales]

### 2.2 [Subtarea]

[Contenido con gaps intencionales]

✅ **Checkpoint:** [Descripcion verificable]

---

## {part_naming} 3: [Titulo] (XX min)

### 3.1 [Subtarea]

[Contenido con gaps intencionales]

### 3.2 [Subtarea]

[Contenido con gaps intencionales]

✅ **Checkpoint:** [Descripcion verificable]

---

## 📁 Estructura Final del Proyecto

> Incluir solo si el lab produce archivos/estructura de proyecto.

```
mi-proyecto/
├── [archivo1]
├── [directorio/]
│   └── [archivo2]
└── [archivo3]
```

---

## {reflection_name}

> Incluir solo si `has_reflection == true` en AGENTS.md.

Antes de terminar, responde brevemente:

1. **¿Que fue lo mas util que aprendiste hoy?**
2. **¿Como aplicarias esto en tu trabajo esta semana?**
3. **¿Que pregunta te quedo sin responder?**

---

## {achievements_name} (Opcional)

### 🟢 [Titulo del logro basico]
[Descripcion que introduce concepto futuro de forma simple]

### 🟡 [Titulo del logro intermedio]
[Descripcion que introduce concepto mas avanzado]

### 🔴 [Titulo del logro avanzado]
[Descripcion que da preview de proximas clases]

---

## 📝 Entrega

### Checklist

- [ ] [Requisito 1]
- [ ] [Requisito 2]
- [ ] [Requisito 3]

### Entregable

📸 **{primary_deliverable}** de tu [descripcion de lo que debe mostrar] donde se vea claramente:
- [Elemento verificable 1]
- [Elemento de autenticidad - nombre del estudiante, URL, etc.]

> ⚠️ El entregable debe mostrar [elemento de autenticidad] para verificar que es tu trabajo.
```

---

## Template: Lab Calificado

> ⚠️ Este template es para labs calificados regulares. Para Demo Day, usar "Template: Lab Demo Day".
>
> ⚠️ **IMPORTANTE:** La rubrica debe incluirse INLINE en el lab (seccion "Rubrica de Evaluacion"), NO como referencia a `rubric.md`. El archivo `rubric.md` es solo para el facilitador/evaluador.

```markdown
# Lab [XX]: [Nombre del Proyecto Integrador]

> ⚠️ **Lab Calificado** - Este lab sera evaluado segun la rubrica incluida abajo.
>
> 📌 **Distribucion:** Se espera completar ~50% durante la sesion en vivo ({part_naming}s 1-2) y el resto antes de la fecha de entrega.

## 🎯 Objetivos del Modulo

Este lab integra todo lo aprendido en el Modulo X:

1. [Objetivo integrador 1]
2. [Objetivo integrador 2]
3. [Objetivo integrador 3]

---

## 🔑 Conceptos Clave

- **[Termino 1]** - Definicion concisa
- **[Termino 2]** - Definicion concisa
- **[Termino 3]** - Definicion concisa

---

## ⚙️ Setup Inicial

Este lab integra todo el Modulo X. Verifica que tengas todo listo:

| ✓ | Requisito | Verificacion |
|---|-----------|--------------|
| ☐ | [Elemento del lab clase X-3] | [Como verificar] |
| ☐ | [Elemento del lab clase X-2] | [Como verificar] |
| ☐ | [Elemento del lab clase X-1] | [Como verificar] |

> ⚠️ Si te falta algo, este es el momento de completarlo antes de continuar.

---

## {part_naming} 1: [Titulo] (XX min)

[Contenido con gaps intencionales siguiendo el mismo formato]

✅ **Checkpoint:** [Descripcion verificable]

---

## {part_naming} 2: [Titulo] (XX min)

[Contenido con gaps intencionales]

✅ **Checkpoint:** [Descripcion verificable]

---

## {part_naming} 3: [Titulo] (XX min)

[Contenido con gaps intencionales]

✅ **Checkpoint:** [Descripcion verificable]

---

## {part_naming} 4: [Titulo] (XX min)

[Contenido con gaps intencionales]

✅ **Checkpoint:** [Descripcion verificable]

---

## {part_naming} 5: Desafio Avanzado (XX min)

> 🔥 **Desafio Post-Clase** - Esta seccion es mas avanzada y se espera completar despues de la sesion en vivo.

### 5.1 [Subtarea desafiante]

[Contenido que requiere investigacion o aplicacion creativa]

### 5.2 [Subtarea integradora]

[Contenido que integra multiples conceptos del modulo]

✅ **Checkpoint:** [Descripcion del resultado esperado]

---

## 📁 Estructura Final del Proyecto

> Incluir solo si el lab produce archivos/estructura de proyecto.

```
mi-proyecto/
├── [archivo1]
├── [directorio/]
│   └── [archivo2]
└── [archivo3]
```

---

## Verificacion Final

Usa la rubrica de abajo para verificar que tu proyecto este completo antes de entregar.

---

## {reflection_name}

> Incluir solo si `has_reflection == true` en AGENTS.md.

Responde en tu documento:

1. **¿Que habilidad de este modulo te parece mas valiosa?**
2. **¿Que cambiarias en tu forma de trabajar a partir de hoy?**
3. **¿Que area te gustaria explorar mas en el siguiente modulo?**

---

## {achievements_name} (Opcional)

### 🟢 [Titulo]
[Preview de concepto del siguiente modulo - nivel introductorio]

### 🟡 [Titulo]
[Preview de concepto del siguiente modulo - nivel intermedio]

### 🔴 [Titulo]
[Preview de concepto del siguiente modulo - nivel avanzado]

---

## Rubrica de Evaluacion

| Criterio | Excelente (20) | Bueno (15) | Satisfactorio (10) | Bajo (5) |
|----------|---------------|------------|-------------------|----------|
| **[Criterio 1]** | [Descripcion excelente] | [Descripcion buena] | [Descripcion satisfactoria] | [Descripcion baja] |
| **[Criterio 2]** | [Descripcion excelente] | [Descripcion buena] | [Descripcion satisfactoria] | [Descripcion baja] |
| **[Criterio 3]** | [Descripcion excelente] | [Descripcion buena] | [Descripcion satisfactoria] | [Descripcion baja] |
| **[Criterio 4]** | [Descripcion excelente] | [Descripcion buena] | [Descripcion satisfactoria] | [Descripcion baja] |
| **[Criterio 5 - Desafio]** | [Descripcion excelente] | [Descripcion buena] | [Descripcion satisfactoria] | [Descripcion baja] |

**Total: 100 puntos** (5 criterios x 20 pts)

| Nota | Rango |
|------|-------|
| A | 90-100 |
| B | 80-89 |
| C | 70-79 |
| F | < 70 |

---

## 📝 Entrega

📦 **Entregable:**

1. **{primary_deliverable}** de tu proyecto terminado mostrando:
   - [Elemento verificable 1]
   - [Elemento de autenticidad - tu nombre visible]

2. **Codigo/documentos fuente** (una de estas opciones):
   - Link a repositorio de GitHub, o
   - Archivo comprimido (.zip) del proyecto, o
   - Documento compartido con permisos de lectura
```

---

## Template: Lab Demo Day (solo si `has_demo_day`)

> ⚠️ **Maximo 100 lineas.** Solo aplica a la clase `demo_day_class`.

```markdown
# Lab {demo_day_class}: Demo Day

> 🎉 **Proyecto Final del Curso** - Presenta tu trabajo ante la clase

## Objetivo

Presentar tu proyecto del ultimo modulo demostrando las habilidades adquiridas durante el curso.

---

## Estructura de Presentacion (3 min por persona)

### 1. Introduccion (30 seg)
- Tu nombre
- Nombre de tu proyecto

### 2. Demostracion (1 min 30 seg)
- Muestra tu proyecto funcionando
- Destaca una funcionalidad/aspecto que te enorgullece

### 3. Reflexion Tecnica (1 min)
- Un desafio que enfrentaste y como lo resolviste
- Algo que aprendiste que no esperabas

---

## Checklist Pre-Presentacion

- [ ] Proyecto funcionando/documentado
- [ ] Pantalla lista (sin pestanas personales)
- [ ] Entregable subido
- [ ] Practicaste tu presentacion al menos una vez

---

## Criterios de Evaluacion

Ver `rubric.md` para la rubrica completa del proyecto.

**Recordatorio:** La presentacion NO se califica por nervios o fluidez verbal. Se evalua:
- Que el proyecto este completo
- Que demuestres comprension de lo que hiciste
- Que puedas explicar una decision tecnica

---

## Durante las Presentaciones

- Escucha activamente a tus companeros
- Aplausos al final de cada presentacion
- Preguntas constructivas si hay tiempo

---

## Entrega Final

📦 **Antes de presentar, asegurate de haber entregado:**
- Proyecto/documento completo
- Todos los archivos de soporte

> ⚠️ Este lab es **CALIFICADO**. Ver `rubric.md`
```

---

## Template: Rubrica (rubric.md) - SOLO PARA FACILITADOR

> ⚠️ **Este archivo es para el facilitador/evaluador, NO para el estudiante.**
> El estudiante ve la rubrica INLINE en el lab. Este archivo tiene detalles adicionales para evaluacion.
>
> ⚠️ **IMPORTANTE:** El contenido de `rubric.md` DEBE coincidir exactamente con la seccion "Rubrica de Evaluacion" del lab. Si actualizas uno, actualiza el otro.

```markdown
# Rubrica - Lab Modulo X: [Nombre del Proyecto]

> 📋 **Documento interno para evaluadores**

## Informacion General

| Aspecto | Detalle |
|---------|---------|
| **Proyecto** | [Nombre del proyecto] |
| **Modulo** | X - [Nombre del modulo] |
| **Clase** | X - [Titulo de la clase] |
| **Puntaje Total** | 100 puntos |

---

## Criterios de Evaluacion

### 1. [Criterio 1] (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | [Descripcion de excelencia] |
| **Bueno** | 15 | [Descripcion de buen desempeno] |
| **Satisfactorio** | 10 | [Descripcion de desempeno minimo] |
| **Bajo** | 5 | [Descripcion de desempeno insuficiente] |
| **No entregado** | 0 | No se evidencia el criterio |

**Aspectos evaluados:**
- [Aspecto especifico 1]
- [Aspecto especifico 2]
- [Aspecto especifico 3]

---

### 2. [Criterio 2] (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | [Descripcion] |
| **Bueno** | 15 | [Descripcion] |
| **Satisfactorio** | 10 | [Descripcion] |
| **Bajo** | 5 | [Descripcion] |
| **No entregado** | 0 | No se evidencia el criterio |

**Aspectos evaluados:**
- [Aspecto especifico 1]
- [Aspecto especifico 2]
- [Aspecto especifico 3]

---

### 3. [Criterio 3] (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | [Descripcion] |
| **Bueno** | 15 | [Descripcion] |
| **Satisfactorio** | 10 | [Descripcion] |
| **Bajo** | 5 | [Descripcion] |
| **No entregado** | 0 | No se evidencia el criterio |

**Aspectos evaluados:**
- [Aspecto especifico 1]
- [Aspecto especifico 2]
- [Aspecto especifico 3]

---

### 4. [Criterio 4] (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | [Descripcion] |
| **Bueno** | 15 | [Descripcion] |
| **Satisfactorio** | 10 | [Descripcion] |
| **Bajo** | 5 | [Descripcion] |
| **No entregado** | 0 | No se evidencia el criterio |

**Aspectos evaluados:**
- [Aspecto especifico 1]
- [Aspecto especifico 2]
- [Aspecto especifico 3]

---

### 5. [Criterio 5 - Desafio] (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | [Descripcion] |
| **Bueno** | 15 | [Descripcion] |
| **Satisfactorio** | 10 | [Descripcion] |
| **Bajo** | 5 | [Descripcion] |
| **No entregado** | 0 | No se evidencia el criterio |

**Aspectos evaluados:**
- [Aspecto especifico 1]
- [Aspecto especifico 2]
- [Aspecto especifico 3]

---

## Escala de Calificacion

| Rango | Nota | Descripcion |
|-------|------|-------------|
| 90-100 | A | Excelente - Dominio completo de los conceptos |
| 80-89 | B | Bueno - Comprension solida con areas menores a mejorar |
| 70-79 | C | Satisfactorio - Cumple requisitos minimos |
| < 70 | F | Necesita mejora - No cumple requisitos basicos |

---

## Checklist de Entrega

### Archivos Requeridos
- [ ] [Archivo 1]
- [ ] [Archivo 2]
- [ ] [Archivo 3]

### Documentacion
- [ ] [Documentacion requerida]

### Verificacion Tecnica
- [ ] [Verificacion 1]
- [ ] [Verificacion 2]

---

## Notas para el Evaluador

1. **[Nota importante 1]**
2. **[Nota importante 2]**
3. **[Nota importante 3]**

---

## Ejemplo de Retroalimentacion

### Retroalimentacion Positiva
> "[Ejemplo de feedback positivo]"

### Areas de Mejora
> "[Ejemplo de feedback constructivo]"
```

---

## Reglas de Contenido

### Limites de Estructura

| Elemento | Lab Regular | Lab Calificado | Notas |
|----------|-------------|----------------|-------|
| **Objetivos** | Maximo 3 | Maximo 3 | Deben ser medibles y especificos |
| **Conceptos Clave** | 3 (maximo 4) | 3 (maximo 4) | Solo terminos nuevos de esta clase |
| **Partes del lab** | 3 | 5 | Calificado incluye {part_naming} 5 Desafio |
| **{achievements_name}** | 3 | 3 | 🟢 🟡 🔴 |
| **Criterios rubrica** | N/A | 5 x 20 pts | Total 100 puntos |
| **{reflection_name}** | Si `has_reflection` | Si `has_reflection` | Reflexion personal |

### Entregables por Tipo

| Tipo de Lab | Entregable |
|-------------|------------|
| **Regular** | {primary_deliverable} con elemento de autenticidad (nombre, URL) |
| **Calificado** | {primary_deliverable} + fuente (GitHub, .zip, o documento compartido) |

---

### Gaps Intencionales

El contenido debe tener espacios para que el estudiante piense. El **porcentaje de gaps** depende del modulo actual -- consultar la Tabla de Autonomia en `AGENTS.md > ## Scaffolding`.

**Reglas de gaps segun `scaffolding_style`:**

**`guided` (Nivel 1):** Gaps de personalizacion -- contenido funcional con placeholders para contenido personal.
```
<!-- Ejemplo generico -->
<h1><!-- Tu nombre aqui --></h1>
<nav>
    <!-- Agrega al menos 3 elementos -->
    <!-- Recuerda la estructura que vimos en clase -->
</nav>
```

**`descriptive` (Nivel 2):** Gaps progresivos -- el estudiante completa con pistas contextuales.
```
// Ejemplo generico
boton.addEventListener('_____', function() {
  // Cambia la propiedad del elemento
  elemento.style._______ = 'valor';
});
```

**`spec-based` (Nivel 3):** Pseudocodigo/specs -- el estudiante escribe la implementacion.
```
// Algoritmo: 1. Obtener input 2. Validar 3. Procesar
export function procesarDatos(input) {
  /* implementar */
}
```

> Usar el estilo correspondiente al `scaffolding_style` del curso (ver `AGENTS.md > ## Scaffolding`).

### Checkpoints por Estilo

El tipo de checkpoint depende de `checkpoint_style` en `AGENTS.md > ## Scaffolding`.

**`visual` (Nivel 1):** Describe lo que el estudiante DEBE VER en pantalla -- no mencionar codigo.
> ✅ **Checkpoint:** Tu nombre aparece centrado en la pagina con un color que elegiste.

**`functional` (Nivel 2):** Describe comportamiento que se puede probar interactuando.
> ✅ **Checkpoint:** Al hacer clic en el boton, el contador incrementa y el numero se actualiza en pantalla.

**`documental` (Nivel 2b):** Describe lo que el estudiante DEBE TENER en su documento.
> ✅ **Checkpoint:** Tu documento incluye una lista de al menos 5 elementos con su clasificacion.

**`sprint-based` (Nivel 3):** Describe criterios de aceptacion verificables con casos de prueba.
> ✅ **Checkpoint:** La funcion retorna `true` para inputs validos y `false` para inputs fuera de rango. Verificar con 3 casos.

> Usar el estilo correspondiente al `checkpoint_style` del curso (ver `AGENTS.md > ## Scaffolding`).

### {achievements_name} como Preview

Los logros/bonus introducen conceptos FUTUROS, no consolidan lo actual:

**Incorrecto (consolidacion):**
> 🟢 Agrega mas contenido a tu proyecto

**Correcto (preview):**
> 🟢 Investiga [concepto futuro] y aplicalo a tu proyecto (lo veremos en la Clase X+1)

### Prosa Minima

Cada linea de prosa debe aportar informacion que el codigo o el checkpoint no dan. Eliminar:

- **Frases que duplican el checkpoint:** "Guarda y revisa. Deberias ver X" -> el checkpoint ya dice que se debe ver
- **Transiciones implicitas:** "Agrega estas lineas al final del archivo:" -> implicito por flujo secuencial
- **Parafrasis de comentarios:** Si el codigo tiene `// ¿Por que el tipo no es "number"?`, no repetirlo en prosa
- **Bloques de "Resultado esperado"** cuando el checkpoint o un comentario inline ya lo cubre

**Tips:** Maximo 1-2 lineas. No repetir lo que el comentario en el codigo ya pregunta.

### Git Commits

> Incluir solo si el curso usa Git (verificar en AGENTS.md).

- **Primer commit del lab:** Bloque completo (`git add` -> `commit` -> `push`) + nota: "Repite este patron al final de cada {part_naming}"
- **Commits siguientes:** Solo una linea inline al final de la {part_naming}: `Commit sugerido: "feat: descripcion"`
- **Nunca** crear subseccion `### X.Y Commit` -- el commit va inline, sin bloque de codigo ni header propio

### Comprimir Setup Repetido

A partir de la segunda clase de cada modulo (posicion >= 2), el estudiante ya conoce el flujo:

- **Setup de herramientas/proyecto:** Comprimir en 1 parrafo descriptivo + 1 bloque de instrucciones (no listar pasos numerados)
- **Verificacion + primer paso:** Fusionar en una sola subseccion cuando la verificacion es trivial

### Fusionar Subtareas Secuenciales

Si dos subtareas consecutivas trabajan sobre el mismo bloque y son naturalmente secuenciales, fusionarlas en una sola subtarea. Esto reduce secciones y headers sin perder gaps.

---

## Distribucion de Tiempo

### Lab Regular ({lab_duration_regular} min real -> {lab_duration_regular * 4/3} min estructurado)

| Seccion | Tiempo en guia | Tiempo real esperado |
|---------|---------------|---------------------|
| {part_naming} 1 | ~{lab_duration_regular/3 + ajuste} min | ~{real} min |
| {part_naming} 2 | ~{lab_duration_regular/3 + ajuste} min | ~{real} min |
| {part_naming} 3 | ~{lab_duration_regular/3 + ajuste} min | ~{real} min |
| {achievements_name} | ~{opcional} min | ~{real} min (opcional) |

> Ajustar tiempos proporcionales segun `lab_duration_regular` de AGENTS.md.

### Lab Calificado (~{lab_duration_graded} min total: 50% en clase + 50% post-clase)

**Diseno:** El lab es ~1.5x mas extenso que un lab regular. Se espera que el estudiante avance ~50% durante la sesion en vivo y complete el resto antes de la fecha de entrega.

| Fase | Secciones | Tiempo | Donde |
|------|-----------|--------|-------|
| En clase | {part_naming}s 1-2 | ~{lab_duration_graded/2} min | Sesion en vivo |
| Post-clase | {part_naming}s 3-5 + Verificacion | ~{lab_duration_graded/2} min | Tarea individual |

### Lab Demo Day (formato especial, si `has_demo_day`)

| Seccion | Tiempo |
|---------|--------|
| Preparacion pre-presentacion | 15 min |
| Presentaciones (3 min x persona) | Variable |
| Cierre y celebracion | 15 min |

> El Lab Demo Day es maximo 100 lineas. El contenido tecnico se completo en la clase anterior.

---

## Coherencia con Otros Recursos

El lab debe alinearse con:

| Recurso | Alineacion |
|---------|------------|
| **README.md** | Los objetivos del lab = objetivos de la clase |
| **slides/README.md** | Los checkpoints tecnicos van en slides, no en lab |
| **facilitator/README.md** | Los checkpoints de tiempo coinciden |

---

## Lo que NO va en Labs

| Contenido | Razon | Va en... |
|-----------|-------|----------|
| Codigo/contenido 100% completo | Estudiantes solo copian | Nunca (usar gaps) |
| Checkpoints tecnicos | Evaluan implementacion, no resultado | slides/README.md |
| Tiempos por fase | Informacion del facilitador | facilitator/README.md |
| Explicaciones teoricas largas | Contexto de clase | README.md de clase |

---

## Validacion Final

### Lab Regular

- [ ] Emojis en secciones: 🎯 Objetivos, 🔑 Conceptos Clave, ⚙️ Setup Inicial, 📝 Entrega
- [ ] Seccion "⚙️ Setup Inicial" con tabla de requisitos (si posicion >= 2 en modulo)
- [ ] Duracion ~{lab_duration_regular} min ({part_naming}s segun corresponda)
- [ ] Contenido tiene gaps intencionales segun `scaffolding_style`
- [ ] Checkpoints siguen `checkpoint_style` (no tecnicos)
- [ ] 3 {achievements_name} con preview de conceptos futuros
- [ ] Checklist de entrega claro
- [ ] Prosa no duplica checkpoints ni comentarios en codigo
- [ ] Git commits: solo el primero tiene bloque completo (si aplica)
- [ ] Setup comprimido si posicion >= 2 en el modulo
- [ ] {reflection_name} incluida (si `has_reflection`)
- [ ] Estructura Final del Proyecto incluida (si aplica)

### Lab Calificado

- [ ] Emojis en secciones: 🎯 Objetivos, 🔑 Conceptos Clave, ⚙️ Setup Inicial, 📝 Entrega
- [ ] Seccion "⚙️ Setup Inicial" con tabla de requisitos
- [ ] Duracion ~{lab_duration_graded} min (5 {part_naming}s, incluyendo Desafio)
- [ ] Nota sobre distribucion 50/50 (clase + post-clase)
- [ ] Contenido tiene gaps intencionales segun `scaffolding_style`
- [ ] Checkpoints siguen `checkpoint_style`
- [ ] 3 {achievements_name} con preview de conceptos futuros
- [ ] Rubrica INLINE con 5 criterios x 20 pts
- [ ] `rubric.md` sincronizado con rubrica inline
- [ ] Checklist de entrega claro (entregable + fuente)
- [ ] {reflection_name} incluida (si `has_reflection`)
- [ ] Estructura Final del Proyecto incluida (si aplica)

### Lab Demo Day (si `has_demo_day`)

- [ ] Maximo 100 lineas
- [ ] Estructura de presentacion (3 min por persona)
- [ ] Checklist pre-presentacion
- [ ] Referencia a `rubric.md`
- [ ] NO contiene contenido tecnico nuevo
