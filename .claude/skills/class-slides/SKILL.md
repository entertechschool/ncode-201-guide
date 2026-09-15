---
name: class-slides
description: Genera slides reveal.js para clases del curso. Usar cuando se pida crear slides, presentacion, o diapositivas para una clase.
allowed-tools: Read, Glob, Grep, Write, Edit
---

# Generador de Slides de Clase

## Objetivo

Crear slides optimizados para facilitar la clase. **No son material de estudio**, son herramientas para el facilitador que sincronizan al grupo en momentos clave.

## Filosofia: Slides que se usan, no se saltan

Cada slide tiene un proposito especifico:

| Tipo | Proposito | Cuando usar |
|------|-----------|-------------|
| **TRANSICION** | Conectar clases (entrada/salida) | Inicio y final |
| **QUIZ PRE-LAB** | Detonar curiosidad con pregunta abierta o de opciones | Antes de demo |
| **COMPROBACION** | Validar comprension post-demo (solo pregunta) | Despues de demo, antes del lab |
| **COMPROBACION-RESPUESTA** | Revelar respuesta + analisis de cada opcion | Inmediatamente despues de COMPROBACION |
| **CHECKPOINT** | Sincronizar progreso del grupo | 1 por cada parte del lab |
| **REFLEXION** | Consolidar conceptos clave | Despues de checkpoints |

> Los cursos pueden definir tipos adicionales en AGENTS.md (ej: DEBATE, CASO, DEMO).
> Si existen, incorporarlos en la estructura respetando el limite de slides.

## Proceso

0. **Leer scaffolding**: `AGENTS.md`
   - `## Proyecto` -> nombre del curso, contexto general
   - `## Scaffolding` -> variables de nivel:
     - `part_naming` -> nombrar checkpoints (ej: "Parte", "HU", "Sprint")
     - `checkpoint_style` -> formato de validacion (`visual`, `functional`, `sprint-based`)
     - `scaffolding_style` -> calibrar profundidad de codigo en slides
     - Tabla de Autonomia -> ajustar nivel de detalle
   - Si la seccion Scaffolding no existe, usar defaults: `part_naming=Parte`, `checkpoint_style=visual`, `scaffolding_style=guided`

1. **Leer contexto**:
   - `curriculum/class-{X}/README.md` (tema, objetivos)
   - `curriculum/class-{X}/lab/README.md` (partes del lab para checkpoints)
   - `curriculum/class-{X-1}/README.md` (para transicion de entrada)
   - `curriculum/class-{X+1}/README.md` (para preview de salida, si existe)

2. **Identificar partes del lab**: Extraer las secciones/partes/HUs del lab para crear checkpoints alineados.

3. **Generar archivo**: `curriculum/class-{X}/slides/README.md`

## Estructura Fija (13 slides maximo)

```
<!-- .slide: data-background="#0A192F" -->
# Clase XX: [Titulo]
## [Subtitulo descriptivo]

---

## TRANSICION: [Clase X-1] -> [Clase X]

### Clase anterior:
- Lo que ya saben/hicieron

### Hoy:
- Lo nuevo que aprenderan

> "Frase de transicion memorable"

---

## QUIZ PRE-LAB

### Pregunta:
[Pregunta abierta sobre el concepto principal de hoy]

*Toma 2-3 respuestas antes de continuar*

---

## COMPROBACION

### Pregunta:
[Pregunta que valida comprension de lo que acaban de ver en la demo]

A. [Distractor: error comun de principiante]
B. [Distractor: confusion de conceptos similares]
C. [Respuesta correcta]
D. [Distractor: respuesta parcial o incompleta]

---

## COMPROBACION - Respuesta

**Respuesta correcta:** [Letra]

**Analisis de opciones:**
- **A:** [Por que esta opcion es incorrecta - explicar el error conceptual]
- **B:** [Por que esta opcion es incorrecta - explicar la confusion]
- **C:** [Por que esta es la respuesta correcta - explicar el concepto clave]
- **D:** [Por que esta opcion es incorrecta - explicar por que es incompleta]

> **Clave:** [Frase memorable que consolida el concepto]

---

## CHECKPOINT [part_naming] 1: [Nombre]

### Verificar:
[Comando, URL, o accion para probar]

**[Pregunta segun checkpoint_style]**
- Criterio 1
- Criterio 2

**Problemas comunes:**
- [Sintoma] -> [Solucion rapida]

---

## CHECKPOINT [part_naming] 2: [Nombre]

[Repetir formato para cada parte del lab]

---

## CHECKPOINT [part_naming] 3: [Nombre]

[Repetir formato - puede ser menos si hay menos partes]

---

## REFLEXION: [Concepto clave 1]

| Aspecto | Opcion A | Opcion B |
|---------|----------|----------|
| ... | ... | ... |

> **Regla memorable**: "Frase que consolida el concepto"

---

## REFLEXION: [Concepto clave 2]

### Pregunta de consolidacion
[Pregunta que hace pensar, no memorizar]

---

## TRANSICION: Preview Clase [X+1]

### Hoy lograste:
- Logro 1
- Logro 2
- Logro 3

### Proxima clase:
- Preview de lo que viene

---

## Preguntas de Cierre

1. [Pregunta reflexiva sobre el "por que"]

2. [Pregunta sobre cuando usar lo aprendido]

3. [Pregunta que conecta con la proxima clase]

---

## Entrega

- [Requisito 1]
- [Requisito 2]
- Screenshot/GIF de [que mostrar]

### Proxima clase: [Titulo]
```

> Reemplazar `[part_naming]` con el valor de AGENTS.md (segun Paso 0).

## Formato de Checkpoints

Adaptar segun `checkpoint_style` en AGENTS.md:

| Style | Pregunta | Contenido |
|-------|----------|-----------|
| `visual` | "Que debe verse?" | Descripcion de lo visible en pantalla |
| `functional` | "Que debe funcionar?" | Comportamiento verificable |
| `sprint-based` | "Criterios cumplidos?" | Lista de aceptacion |

## Lo que NO va en los Slides

| Contenido | Razon |
|-----------|-------|
| Codigo paso a paso | Va en `lab/README.md` |
| Explicaciones extensas | Va en `facilitador/README.md` |
| Definiciones de glosario | Va en `README.md` de clase |
| Referencias a rubricas | Documento interno, no publico |
| Estrategias pedagogicas | Va en `facilitador/README.md` |
| **Notas para facilitador** | Son internas, no para estudiantes |
| **Respuestas esperadas del QUIZ** | Sesga la discusion; van en facilitator |
| **Codigo que duplica el lab** | El slide solo muestra el comando de verificacion o resultado visual |

## Reglas para Clase Final de Modulo

Las clases que cierran modulo son **labs calificados**. Ajustes:

1. **TRANSICION de salida** -> Preview del siguiente MODULO (no solo clase)
2. **Slide de cierre** -> Celebrar logros del modulo completado
3. **Entrega** -> Mas detallada (URL repo + screenshot + deploy si aplica)

> Determinar cuales clases son finales de modulo leyendo AGENTS.md o README.md del curso.

**IMPORTANTE:** No mencionar rubricas ni criterios de evaluacion en slides. Son documentos internos.

## Notas de Estilo

- **Formato**: Reveal.js markdown (separador `---`)
- **Fondo**: `data-background="#0A192F"` solo en portada
- **Codigo**: Minimo, solo comandos de verificacion (maximo 5 lineas por bloque)
- **Tablas**: Para comparaciones conceptuales
- **Emojis**: Solo en headers para escaneo visual
- **Preguntas**: Abiertas, que generen discusion
- **Bullets**: Maximo 5 por slide
- **Palabras**: Maximo 30 por slide

## Elementos Especiales reveal.js

### Fragmentos (aparecen uno a uno)

```
- Punto 1 <!-- .element: class="fragment" -->
- Punto 2 <!-- .element: class="fragment" -->
```

### Notas del presentador

```
Note: Estas notas solo las ve el facilitador
```

### Codigo con highlight

```
```javascript [1|2-3|4]
linea 1 // se resalta primero
linea 2 // luego estas
linea 3
linea 4 // finalmente esta
```
```

## Tipos de Slides por Proposito

| Tipo | Emoji | Proposito | Cuando usar |
|------|-------|-----------|-------------|
| Portada | -- | Identificar clase | Siempre primero |
| Transicion | -- | Conectar con clase anterior/siguiente | Inicio y fin |
| Quiz Pre-Lab | -- | Pregunta detonadora antes del lab | Despues de transicion |
| Comprobacion | -- | Pregunta multiple post-demo | Despues de demo |
| Comprobacion-Respuesta | -- | Analisis de cada opcion | Despues de comprobacion |
| Checkpoint | -- | Sincronizar progreso | Despues de cada parte |
| Reflexion | -- | Consolidar concepto clave | Entre checkpoints o antes del cierre |
| Preview | -- | Anticipar proxima clase | Casi al final |
| Preguntas de Cierre | -- | Cierre reflexivo | Antes de entrega |
| Entrega | -- | Recordar requisitos | Siempre ultimo |

## Guia de Diseno: QUIZ PRE-LAB

**Proposito:** Activar conocimiento previo ANTES de la demo. Genera curiosidad.

La pregunta debe:
- Ser desafiante (no obvia)
- Conectar con el concepto principal de la clase
- Generar debate

**Variantes permitidas:**
- **Pregunta abierta** (cursos nivel 1): Solo la pregunta, se toman 2-3 respuestas
- **4 opciones estilo Kahoot** (cursos nivel 2+): 1 correcta + 3 distractores plausibles

**IMPORTANTE:** Si se usan opciones, la respuesta correcta y explicacion van en `facilitator/README.md`, NO en los slides.

## Guia de Diseno: COMPROBACION + COMPROBACION-RESPUESTA

**Proposito:** Validar comprension DESPUES de la demo. Cierra el loop de aprendizaje.

### COMPROBACION (slide 1)
- Pregunta directamente sobre lo que se mostro en la demo
- Los distractores reflejan errores comunes de comprension
- Se vota/levanta mano ANTES de ver la respuesta

### COMPROBACION-RESPUESTA (slide 2)
- Muestra la respuesta correcta
- **Analiza CADA opcion** - por que las incorrectas fallan
- Termina con una "regla memorable" de 1 frase

### Diferencia entre QUIZ PRE-LAB y COMPROBACION

| Aspecto | QUIZ PRE-LAB | COMPROBACION |
|---------|-------------|--------------|
| **Cuando** | ANTES de la demo | DESPUES de la demo |
| **Proposito** | Activar curiosidad | Validar comprension |
| **Respuesta en slides** | NO (va en facilitator) | SI (slide siguiente) |
| **Distractores** | Suposiciones comunes | Errores de aplicacion |

## Meta

- **Lineas**: ~180 maximo
- **Slides**: 13 maximo (incluye COMPROBACION-RESPUESTA)
- **Tiempo por slide**: ~2-3 min promedio
- **Checkpoints**: Uno por cada parte del lab

## Checklist de Verificacion

Antes de finalizar, verificar:

- [ ] Leyo AGENTS.md para obtener `part_naming`, `checkpoint_style` y contexto del curso?
- [ ] Tiene TRANSICION de entrada conectando con clase anterior?
- [ ] Tiene QUIZ PRE-LAB (sin respuestas expuestas)?
- [ ] Tiene COMPROBACION post-demo con pregunta de opcion multiple?
- [ ] Tiene COMPROBACION-RESPUESTA con analisis de cada opcion?
- [ ] Tiene 1 CHECKPOINT por cada parte del lab?
- [ ] Los checkpoints incluyen troubleshooting tips?
- [ ] Tiene al menos 1 REFLEXION con tabla comparativa?
- [ ] Tiene TRANSICION de salida con preview?
- [ ] Tiene 3 PREGUNTAS DE CIERRE reflexivas?
- [ ] Tiene slide de ENTREGA con requisitos especificos?
- [ ] Maximo 13 slides?
- [ ] NO tiene codigo extenso? (eso va en el lab)
- [ ] NO tiene notas internas para facilitador expuestas?
- [ ] NO tiene respuestas esperadas del QUIZ PRE-LAB?
