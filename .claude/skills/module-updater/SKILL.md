---
name: module-updater
description: Audita y actualiza un módulo existente contrastando contenido contra SKILL.md actuales. Usar cuando se pida actualizar módulo, detectar drift, sincronizar contenido, o refrescar material existente.
allowed-tools: Read, Glob, Grep, Bash, Write, Edit
---

# Orquestador de Actualización de Módulos

## Objetivo

Analizar un módulo completo (4 clases), detectar drift entre el contenido existente y las reglas actuales de los skills, y proponer/implementar ajustes. Opera en dos fases: **auditar** (read-only) → **implementar** (con aprobación del usuario).

---

## Cuándo Usar Este Skill

| Escenario | Usar |
|-----------|------|
| Actualizar módulo existente tras cambio en skills | Sí |
| Verificar drift acumulado en contenido generado | Sí |
| Auditoría completa antes de publicar en Canvas | Sí |
| Crear módulo nuevo desde cero | No (usar `module-planner` + skills individuales) |
| Evaluar una sola clase puntual | No (usar `evaluation-class`) |

---

## Proceso

### Paso 0: Leer configuración del curso

1. `README.md` raíz → nombre del curso, módulos, sistema de evaluación
2. `AGENTS.md > ## Scaffolding` → variables de nivel (`course_level`, `part_naming`, `checkpoint_style`, `scaffolding_style`, `instruction_style`, `gap_types`)
3. `AGENTS.md > ## Límites por Archivo` → límites actuales de líneas/slides
4. `AGENTS.md > ## Convenciones` → encoding, enlaces, emojis

### Paso 1: Identificar módulo y alcance

Del prompt del usuario → módulo M, clases `[4M-3 .. 4M]`.

```
Módulo 1 → clases 1-4
Módulo 2 → clases 5-8
Módulo 3 → clases 9-12
```

Detectar recursos opcionales:
- ¿Existe `.claude/skills/class-infographic/`? → incluir infographics en auditoría
- ¿Es clase 4M? → incluir `test/`, `lab/rubric.md`

### Paso 2: Leer SKILL.md actuales

Leer los skills que definen el formato esperado de cada recurso:

| Skill | Define formato de |
|-------|-------------------|
| `class-readme` | `README.md` |
| `class-lab` | `lab/README.md` + `lab/rubric.md` |
| `class-slides` | `slides/README.md` |
| `class-facilitator` | `facilitator/README.md` |
| `class-infographic` | `infographic/index.html` (si aplica) |
| `module-test` | `test/README.md` + `test/questions.md` |

Extraer de cada SKILL.md:
- Secciones obligatorias (template/estructura)
- Restricciones de formato
- Checklist de verificación

### Paso 3: Inventariar recursos existentes

Para cada clase del módulo, verificar existencia y métricas:

```
curriculum/class-{X}/
  README.md             → ¿existe? líneas
  lab/README.md         → ¿existe? líneas
  lab/rubric.md         → ¿existe? (solo clase 4M)
  slides/README.md      → ¿existe? líneas, slides (contar ---)
  facilitator/README.md → ¿existe? líneas
  test/                 → ¿existe? (solo clase 4M)
  infographic/          → ¿existe? (si skill disponible)
```

Usar `wc -l` para conteo de líneas y `grep -c "^---$"` para conteo de slides.

### Paso 4: Auditoría por categoría de drift

Analizar cada recurso contra su SKILL.md correspondiente. Categorías:

| Código | Categoría | Qué detecta |
|--------|-----------|-------------|
| `MISS` | Recursos faltantes | Archivos/directorios que deberían existir según pipeline |
| `LIMIT` | Límites | Líneas > máximo de AGENTS.md, slides > 13 |
| `TERM` | Terminología | `bootcamp`, hardcodes de curso, `HU` vs `Parte` según `part_naming` |
| `STRUCT` | Estructura | Secciones faltantes/obsoletas vs template actual del skill |
| `SCAFF` | Scaffolding | Checkpoints, gaps, `part_naming` no alineados con AGENTS.md |
| `FMT` | Formato | Links externos sin `{:target="_blank"}`, encoding roto, emojis excesivos |
| `DENSE` | Densidad | Analogías > 1 párrafo, contexto histórico > 2 techs, prosa redundante |
| `COHER` | Coherencia | Horizontal (X-1 → X → X+1) y vertical (módulo completo) |

### Paso 5: Generar reporte de auditoría

Presentar reporte estructurado **directo en conversación** (no crear archivo). Usar el template de la sección "Template del Reporte" de abajo.

### Paso 6: Clasificar acciones

Para cada hallazgo, asignar severidad y acción:

| Severidad | Acción | Criterio |
|-----------|--------|----------|
| Crítico | **Regenerar** | >40% del contenido cambiaría |
| Mayor | **Editar secciones** | Agregar/modificar secciones específicas |
| Menor | **Parche** | Find/replace puntual |
| Info | **Ignorar** | Observación sin acción requerida |

### Paso 7: Esperar aprobación

Presentar plan de ejecución y esperar respuesta del usuario. Opciones:
- Aprobar todo el módulo
- Aprobar clases específicas (ej. "solo clase 5 y 6")
- Aprobar solo parches (sin regeneraciones)
- Modificar acciones propuestas

**No implementar ningún cambio sin aprobación explícita.**

### Paso 8: Implementar cambios aprobados

Orden de ejecución (de menor a mayor riesgo):

1. **Parches** terminológicos + formato (todo el módulo, bajo riesgo)
2. **Ediciones** estructurales (por clase, en orden 1→4)
3. **Regeneraciones** (una por una, preservando contenido semántico)
4. **Generaciones** de recursos faltantes (infographics, tests)

### Paso 9: Validación post-actualización

1. Re-verificar límites en archivos modificados (`wc -l`, conteo de slides)
2. Verificar encoding (sin `�` ni `\u00f3`)
3. Verificar enlaces externos tienen `{:target="_blank"}`
4. Resumen de cambios realizados con lista de archivos modificados

---

## Reglas de Preservación de Contenido Semántico

Cuando una acción es **Regenerar** (crítico):

### Antes de regenerar — extraer contenido semántico:

1. **Temas y conceptos** cubiertos en el archivo original
2. **Ejemplos y analogías** específicos del curso
3. **Código** y snippets (especialmente gaps personalizados)
4. **Ejercicios y dinámicas** diseñados para este contexto
5. **Referencias** a clases adyacentes y proyecto integrador

### Al regenerar:

- El archivo nuevo usa la **estructura/formato actual** del SKILL.md
- Pero **preserva el material semántico** extraído arriba
- No inventar contenido nuevo si el original era correcto
- Solo cambiar forma (estructura, formato, densidad), no fondo (temas, ejercicios)

### Excepción:

Si el contenido semántico original también tiene problemas (errores factuales, ejercicios mal diseñados), documentarlo en el reporte antes de regenerar.

---

## Árbol de Decisión: Editar vs Regenerar

```
¿El archivo cumple la estructura del SKILL.md actual?
├─ SÍ → ¿Tiene problemas de LIMIT, TERM, FMT o DENSE?
│       ├─ SÍ → PARCHE o EDICIÓN (según cantidad)
│       └─ NO → OK (solo Info)
└─ NO → ¿Cuántas secciones difieren?
        ├─ 1-2 secciones → EDICIÓN (agregar/modificar)
        └─ 3+ secciones o >40% → REGENERAR
```

---

## Template del Reporte

```markdown
# Auditoría: Módulo {M} — {Título}

**Curso:** {nombre} | **Clases:** {rango} | **Fecha:** {date}

## Resumen

| Clase | Crítico | Mayor | Menor | Info | Score |
|-------|---------|-------|-------|------|-------|
| {X} — {título} | N | N | N | N | X/10 |
| {X+1} — {título} | N | N | N | N | X/10 |
| {X+2} — {título} | N | N | N | N | X/10 |
| {X+3} — {título} | N | N | N | N | X/10 |
| **Total** | **N** | **N** | **N** | **N** | **X/10** |

## Clase {X}: {Título}

### Inventario

| Recurso | Existe | Líneas | Límite | Estado |
|---------|--------|--------|--------|--------|
| README.md | Sí/No | N | ~150 | OK/LIMIT |
| lab/README.md | Sí/No | N | <400/<500 | OK/LIMIT |
| slides/README.md | Sí/No | N (S slides) | ≤13 slides | OK/LIMIT |
| facilitator/README.md | Sí/No | N | <300 | OK/LIMIT |
| lab/rubric.md | Sí/No/N/A | — | — | — |
| test/ | Sí/No/N/A | — | — | — |
| infographic/ | Sí/No/N/A | — | — | — |

### Hallazgos

#### Crítico
- [{CÓDIGO}] {recurso} L{línea}: {descripción del problema}

#### Mayor
- [{CÓDIGO}] {recurso}: {descripción}

#### Menor
- [{CÓDIGO}] {recurso} L{línea}: {actual} → {esperado}

#### Info
- [{CÓDIGO}] {observación}

### Acciones Propuestas

| Recurso | Acción | Detalle |
|---------|--------|---------|
| {archivo} | Regenerar/Editar/Parche/Ignorar | {qué se haría} |

---

(Repetir para cada clase del módulo)

---

## Plan de Ejecución

### Fase 1: Parches (TERM + FMT)
- [ ] {archivo}: {cambio puntual}

### Fase 2: Ediciones (STRUCT + SCAFF)
- [ ] {archivo}: {sección a agregar/modificar}

### Fase 3: Regeneraciones
- [ ] {archivo}: regenerar preservando {contenido semántico clave}

### Fase 4: Generaciones (recursos nuevos)
- [ ] {archivo}: generar desde cero

> ¿Aprobar todo, aprobar parcial, o modificar?
```

---

## Validación del Skill

Verificar que el reporte generado:

- [ ] Incluye todas las clases del módulo
- [ ] Cada hallazgo tiene código de categoría (`MISS`, `LIMIT`, etc.)
- [ ] Las acciones propuestas son accionables (no genéricas)
- [ ] No hay hardcodes del nombre del curso (skill es agnóstico)
- [ ] El plan de ejecución está ordenado de menor a mayor riesgo
- [ ] Las regeneraciones incluyen qué contenido semántico preservar
