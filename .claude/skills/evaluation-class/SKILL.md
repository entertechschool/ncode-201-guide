---
name: evaluation-class
description: Evalua calidad y coherencia de una clase antes de publicar. Usar cuando se pida evaluar, revisar, QA, o diagnostico de una clase.
allowed-tools: Read, Glob, Grep, Bash
---

# Evaluador de Clases

## Objetivo

Verificar que una clase esta lista para publicar, evaluando:
1. **Calidad individual** de cada recurso
2. **Coherencia horizontal** con clases adyacentes
3. **Coherencia vertical** con el modulo

---

## Cuando Usar

| Escenario | Usar |
|-----------|------|
| Despues de crear todos los archivos de una clase | Si |
| Antes de publicar/usar una clase | Si |
| Para auditar clases existentes | Si |
| Durante la creacion de archivos | No |

---

## Proceso de Evaluacion

### Paso 0: Leer contexto del curso

Leer **`AGENTS.md`** para obtener variables de nivel del curso:

1. **Seccion `## Scaffolding`:**
   - `part_naming` -> validar que checkpoints del lab usen la nomenclatura correcta (ej. "Parte" no "HU")
   - `checkpoint_style` -> validar que el formato de verificacion coincida (ej. `visual` = describe lo que se ve en pantalla)
   - `instruction_style` -> verificar que la redaccion del lab coincida
   - Tabla de Autonomia -> verificar que el porcentaje de gaps corresponde al modulo

2. **Seccion `## Estructura del Repositorio`:**
   - Identificar que archivos son obligatorios en este curso (ej. algunos cursos tienen `debate.md`, `herramientas.md`, `test/`)
   - Identificar que clases son calificadas (derivar de estructura de modulos)

3. **Seccion `## Limites por Archivo`:**
   - Extraer limites de longitud especificos del curso
   - Extraer tiempo total de clase (ej. 150 min vs 180 min)

4. **`README.md` (syllabus):**
   - Estructura de modulos y clases
   - Sistema de evaluacion (escala, rubricas)
   - Proyectos por modulo

### Paso 1: Identificar la clase

Extraer numero de clase (X) del prompt del usuario.

### Paso 2: Determinar contexto

```
Modulo = floor((X - 1) / clases_por_modulo) + 1
Posicion en modulo = ((X - 1) % clases_por_modulo) + 1
Es cierre de modulo = Posicion == clases_por_modulo
Total clases = leer de README.md
Es ultima clase del curso = (X == Total clases)
```

> **Nota:** `clases_por_modulo` se deriva del syllabus. Default: 4.

### Paso 3: Descubrir y leer recursos

```bash
# Descubrir archivos existentes en la clase
ls curriculum/class-{X}/
ls curriculum/class-{X}/*/

# Leer clase actual (archivos obligatorios en todos los cursos)
curriculum/class-{X}/README.md
curriculum/class-{X}/lab/README.md
curriculum/class-{X}/facilitator/README.md
curriculum/class-{X}/slides/README.md

# Leer archivos adicionales si existen en este curso
# (ej. debate.md, herramientas.md, test/, infographic/)
# -> Descubiertos en Paso 0 desde AGENTS.md

# Clases adyacentes (si existen)
curriculum/class-{X-1}/README.md
curriculum/class-{X+1}/README.md

# Contexto del modulo
README.md (syllabus principal)
```

### Paso 4: Aplicar checklist

---

## Checklist de Evaluacion

### 1. Recursos Individuales

#### README.md
| Criterio | Verificar |
|----------|-----------|
| Estructura | Tiene secciones requeridas (Resumen, Objetivos, Glosario) |
| Longitud | Dentro del limite definido en AGENTS.md |
| Objetivos | 3-5 items claros y medibles con verbos de accion |
| Glosario | Terminos nuevos relevantes al tema |
| Conexion | Menciona conocimiento previo y clase anterior |
| Tono | Coincide con lo definido en AGENTS.md para este tipo de archivo |

#### lab/README.md
| Criterio | Verificar |
|----------|-----------|
| Longitud | Dentro del limite de AGENTS.md (regular vs calificado) |
| Secciones | Usa `part_naming` correcto de AGENTS.md |
| Cantidad | Regular: segun AGENTS.md. Calificado: incluye seccion extra (Desafio) |
| Checkpoints | Usan `checkpoint_style` de AGENTS.md, definidos por seccion |
| Codigo | Gaps intencionales segun Tabla de Autonomia del modulo |
| Continuidad | Referencia a clase anterior (excepto primera de cada modulo) |
| Entrega | Instrucciones claras de entregable verificable |
| Rubrica | Si calificado: rubrica inline + rubric.md sincronizados |

#### facilitator/README.md
| Criterio | Verificar |
|----------|-----------|
| Longitud | Dentro del limite de AGENTS.md |
| Conceptos clave | 3-5 definiciones |
| Analogias | 3-4 utiles y relevantes al dominio |
| Contexto historico | Con fuentes verificables |
| Dinamicas | 2-3 con dialogos ejemplo |
| Errores comunes | Tabla con 4-6 |
| Checkpoints | Tabla con tiempos que suman el total de clase |
| Plan B | Alternativa para demos o actividades tecnicas |

#### slides/README.md
| Criterio | Verificar |
|----------|-----------|
| Cantidad | Dentro del limite de AGENTS.md |
| Formato | Reveal.js markdown valido |
| Transiciones | Tiene entrada (conexion con clase anterior) y salida (preview siguiente) |
| Interaccion | Tiene preguntas o actividad pre-lab |
| Checkpoints | Uno por seccion del lab (usar `part_naming` de AGENTS.md) |
| Reflexiones | 1-2 conceptos clave |

#### Archivos adicionales (si aplican en este curso)

> Descubiertos en Paso 0. Ejemplos comunes:

| Archivo | Criterios tipicos |
|---------|-------------------|
| `debate.md` | 3-5 preguntas abiertas, al menos 1 con componente etico |
| `facilitator/herramientas.md` | Herramientas relevantes al modulo |
| `lab/rubric.md` | 5 criterios x 20 pts = 100 pts, sincronizado con lab inline |
| `test/README.md` | Conciso, menciona que no afecta calificacion |
| `test/questions.md` | Formato y cantidad segun AGENTS.md |

### 2. Coherencia Horizontal (X-1 -> X -> X+1)

| Aspecto | Verificar |
|---------|-----------|
| Conexion hacia atras | README menciona clase anterior |
| | Slides tienen transicion de entrada |
| | Lab usa conceptos de X-1 |
| Conexion hacia adelante | Facilitador planta semilla para X+1 |
| | Slides tienen preview |
| Curva de dificultad | Complejidad incrementa gradualmente |
| | No hay saltos conceptuales bruscos |

### 3. Coherencia Vertical (Modulo)

| Aspecto | Verificar |
|---------|-----------|
| Proyecto integrador | Lab contribuye al proyecto del modulo |
| Preparacion cierre | Si no es cierre: prepara para clase de cierre |
| | Si es cierre: integra conceptos de las clases anteriores del modulo |
| Lab calificado | Si es cierre de modulo: |
| | - Lab es mas extenso que regulares |
| | - Disenado para trabajo parcial en clase + post-clase |
| | - Incluye seccion extra (Desafio) + rubrica |
| Adherencia syllabus | Tema coincide con README.md del curso |

### 4. Consistencia Interna

| Verificacion | Donde comparar |
|--------------|----------------|
| Titulo de clase | README vs slides vs lab |
| Objetivos | README vs lab vs facilitator |
| Numero de clase | Todos los archivos |
| Glosario | README vs slides |
| Tiempos | facilitator vs estructura real |

### 5. Formato y Estilo

| Criterio | Verificar |
|----------|-----------|
| Encoding | UTF-8 puro (sin caracteres corruptos: `\u00f3`, `?`) |
| Enlaces externos | Tienen `{:target="_blank"}` segun AGENTS.md |
| Longitudes | Dentro de limites de AGENTS.md |
| Markdown | Sintaxis correcta, renderiza bien |

### 6. Clases de Cierre de Modulo

> Solo aplica para clases que son ultima de su modulo (derivar de Paso 2).

| Actividad | Verificar en |
|-----------|--------------|
| Test diagnostico (si el curso lo usa) | facilitator: seccion de test |
| Revision resultados | facilitator: guia de revision en vivo |
| Presentaciones | facilitator: seccion correspondiente |
| Lab (ajustado) | lab/README con estructura de cierre |

**Verificar en facilitator/README.md:**
- Tiene seccion de test diagnostico (si el curso incluye tests)
- Tiene guia para revision de resultados en vivo
- Tiene seccion de presentaciones con nombre correcto (ver nota abajo)
- Checkpoints incluyen test y revision con minutos especificos

**Nombre de presentaciones (derivar de README.md):**
- Ultima clase del curso -> "Demo Day" (o equivalente segun syllabus)
- Cierres intermedios -> "Presentaciones de Cierre" (NO "Demo Day")

---

## Formato de Output

```markdown
## Evaluacion Clase X: [Titulo]

**Modulo:** M{N} | **Posicion:** {P} de {total} | **Proyecto:** [Nombre]

---

### Puntuacion: X/10

---

### Recursos Individuales

| Recurso | Estado | Observacion |
|---------|--------|-------------|
| README.md | check/warn/fail | [Detalle] |
| lab/README.md | check/warn/fail | [Detalle] |
| facilitator/README.md | check/warn/fail | [Detalle] |
| slides/README.md | check/warn/fail | [Detalle] |
| {archivo adicional} | check/warn/fail/N/A | [Detalle] |

---

### Coherencia Horizontal

| Conexion | Estado | Observacion |
|----------|--------|-------------|
| <- Clase X-1 | check/warn/fail | [Detalle] |
| -> Clase X+1 | check/warn/fail | [Detalle] |
| Curva dificultad | check/warn/fail | [Detalle] |

---

### Coherencia Vertical

| Aspecto | Estado | Observacion |
|---------|--------|-------------|
| Proyecto integrador | check/warn/fail | [Detalle] |
| Prep. cierre | check/warn/fail | [Detalle] |
| Syllabus | check/warn/fail | [Detalle] |

---

### Consistencia Interna

| Verificacion | Estado | Observacion |
|--------------|--------|-------------|
| Titulos coinciden | check/warn/fail | [Detalle] |
| Objetivos alineados | check/warn/fail | [Detalle] |
| Glosario consistente | check/warn/fail | [Detalle] |
| Tiempos realistas | check/warn/fail | [Detalle] |

---

### Formato y Estilo

| Criterio | Estado | Observacion |
|----------|--------|-------------|
| Encoding UTF-8 | check/warn/fail | [Detalle] |
| Enlaces externos | check/warn/fail | [Detalle] |
| Longitudes correctas | check/warn/fail | [Detalle] |
| Markdown valido | check/warn/fail | [Detalle] |

---

### Fortalezas
- [Punto fuerte concreto 1]
- [Punto fuerte concreto 2]

### Observaciones Menores
- [Mejora sugerida accionable 1]
- [Mejora sugerida accionable 2]

### Problemas Criticos
- [Problema que bloquea publicacion]

---

### Recomendacion Final

[ ] **Lista para publicar**
[ ] **Requiere ajustes menores** (listar)
[ ] **Requiere revision mayor** (listar)
```

---

## Escala de Puntuacion

| Puntos | Significado |
|--------|-------------|
| 10 | Perfecta, publicar sin cambios |
| 9 | Excelente, detalles minimos opcionales |
| 8 | Muy buena, 1-2 ajustes menores |
| 7 | Buena, algunos ajustes recomendados |
| 6 | Aceptable, necesita mejoras |
| < 6 | No lista, requiere trabajo significativo |

---

## Criterios de Bloqueo

La clase NO esta lista si:
- Falta alguno de los archivos obligatorios (segun AGENTS.md)
- Lab tiene codigo que no funciona
- Tiempos no suman el total esperado (leer de AGENTS.md/README.md)
- No hay conexion clara con clase anterior
- Facilitador tiene contenido de otra clase (error de copy-paste)
- Entregable del lab no es verificable objetivamente
- Checkpoints del lab son vagos ("completaste la parte")
- Rubrica de lab calificado usa formato incorrecto (verificar contra AGENTS.md)
- **(Cierre de modulo)** Falta seccion de test diagnostico en facilitator (si el curso usa tests)
- **(Cierre de modulo)** Usa "Demo Day" en vez de "Presentaciones de Cierre" (excepto ultima clase del curso)
- **(Cierre de modulo)** Checkpoints no incluyen tiempo para test + revision

---

## Recursos por Tipo de Clase

> Derivar dinamicamente del syllabus. Estructura tipica:

### Clases Regulares
- README.md (obligatorio)
- lab/README.md (obligatorio)
- facilitator/README.md (obligatorio)
- slides/README.md (obligatorio)
- Archivos adicionales segun el curso (descubrir en Paso 0)

### Clases de Cierre de Modulo
- Todo lo de clases regulares
- lab/rubric.md (obligatorio)
- test/ (si el curso incluye tests diagnosticos)

---

## Restricciones

- Evaluar TODOS los archivos de la clase, no solo los obligatorios base
- No aprobar si hay criterios de bloqueo
- Ser especifico en las observaciones (linea, seccion, archivo)
- Las fortalezas deben ser concretas (no "buen trabajo")
- Las sugerencias deben ser accionables (que hacer, donde, como)
- No hardcodear nombres de curso, tecnologias, o proyectos -- leer de AGENTS.md y README.md
