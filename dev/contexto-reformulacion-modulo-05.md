# Contexto: Reformulación del Módulo 5 — Code 201

> Documento de traspaso para retomar el trabajo en una conversación nueva.
> **Rama de trabajo:** `v2-sin-empresa`
> **Fecha del trabajo:** abril 2026

---

## 1. Resumen ejecutivo

Se reformuló completamente el **Módulo 5** del curso Code 201 para reemplazar el esquema anterior (donde una empresa externa proponía el problema y cada alumno ideaba su propia solución) por un **proyecto académico predefinido** común a toda la cohorte, al estilo de los Módulos 1-4.

**Proyecto elegido:** Agenda de Gastos Compartidos (inspirado en Splitwise simplificado).

**Estado:** Pendiente de revisión y luz verde del instructor (Donatto). No se ha hecho merge a `main` aún.

---

## 2. Antecedentes y motivación

### Cómo era el M5 antes

- Una empresa externa hacía una reunión con los alumnos al inicio del módulo.
- Cada alumno ideaba su propia solución individual al problema empresarial.
- Se desarrollaba en 4 sesiones: Ideation + Research + Stories, Sprint 1, User Validation + Sprint 2, Demo Day.
- La temática variaba cohorte a cohorte según la empresa participante.

### Por qué se cambia

- Esta dinámica ya no se sostiene en adelante (decisión institucional).
- Los archivos de M5 estaban incompletos, inconsistentes y referenciaban "trabajo en equipo con empresa" — incompatible con el nuevo esquema.
- Necesidad de tener previsibilidad, calidad uniforme y comparabilidad entre cohortes.

### Pedido original

> "Modificar la currícula para que el instructor pueda guiarlos a un proyecto académico"

---

## 3. Enfoque elegido: Proyecto Final Guiado (conservador)

De entre los enfoques evaluados, se eligió el de **menor impacto estructural posible**:

- Se mantienen las 4 sesiones actuales con sus nombres y secuencia ágil original.
- Se conserva la metodología por sprints con validación cruzada.
- Se reemplaza el proyecto abierto por un proyecto **predefinido común a toda la cohorte**.
- Se resignifica la sesión de Ideation: ya no se idea el proyecto desde cero; se analiza el proyecto dado y se descompone en historias.
- M5 funciona como **integrador** de los Módulos 1-4 (a diferencia de M1-M4, donde cada proyecto solo cubre los temas del propio módulo).

### Quién hace qué

- **La IA diseña** el proyecto completo (enunciado, historias, criterios, rúbrica, material de apoyo).
- **El instructor valida y ejecuta**: elige una temática entre 2-3 opciones propuestas, valida el paquete final y conduce las 4 sesiones usando el material entregado.
- **El instructor reemplaza el rol de la empresa**: plantea el problema (ya redactado), aporta contexto, valida avances, da feedback final.

---

## 4. Documentos de propuesta entregados al instructor

Estos archivos están en la raíz del repo y se compartieron con Gabriela para hacerlos llegar a Donatto:

| Archivo | Propósito |
|---|---|
| `propuesta-modulo-5.docx` | Propuesta completa del enfoque: contexto, qué cambia, cómo el instructor reemplaza a la empresa, flujo IA-instructor, paquete que entrega la IA, día a día de las 4 sesiones, alineación con M1-M4, decisiones del instructor |
| `propuesta-modulo-5-tematicas.docx` | Menú de 3 opciones de temática para que el instructor elija una: (A) Gestor de Tareas con Pomodoro, (B) Quiz de Cultura Peruana, (C) Agenda de Gastos Compartidos |

**Validación recibida del instructor:** aprobó el enfoque general y eligió la **Opción C — Agenda de Gastos Compartidos**.

---

## 5. Cambios aplicados al repositorio (rama `v2-sin-empresa`)

### Fase 0: Archivos fundacionales

| Archivo | Cambio |
|---|---|
| `README.md` | Ítems 17-18 (genéricos) reescritos a 4 ítems (17-20) con nombres oficiales de las sesiones + bloque `Proyecto Integrador: Agenda de Gastos Compartidos` |
| `context/course_syllabus.md` | Sección M5 renombrada a "Proyecto Integrador Final" + bloque de enfoque pedagógico + bloque Proyecto Integrador con características clave |
| `AGENTS.md` | Tabla labs: M5 pasa de "17-18" a "17-20" y duración a "4 clases". Tabla autonomía: M5 pasa de "Spec-based / 50% gaps" a "Guided / 30% gaps". Descripción narrativa actualizada |

### Fase 2: Documento del proyecto (fuente de verdad del M5)

`curriculum/class-17/project/README.md` — creado desde cero con:

- Enunciado oficial del proyecto Agenda de Gastos Compartidos.
- Usuario objetivo y secuencia de las 4 clases.
- Funcionalidad esperada (10 puntos del MVP).
- **8 historias de usuario pre-redactadas** con criterios de aceptación verificables, distribuidas en Sprint 1 (HU1-HU4: crear grupo, agregar personas, registrar gasto, listar gastos) y Sprint 2 (HU5-HU8: balance neto, transferencias mínimas, eliminar gasto, persistencia robusta).
- Retos opcionales para puntaje extra.
- Stack técnico y estructura de archivos sugerida.
- Rúbrica de evaluación (100 pts, mínimo aprobación 70).
- Formato del Demo Day (5+3+2 minutos).
- Material de apoyo: mockup ASCII, pistas técnicas para cada algoritmo, limitaciones conocidas.

### Fase 3: Las 4 clases regeneradas con skills del pipeline

Aplicando las skills `class-readme`, `class-lab`, `class-slides`, `class-facilitator` (leídas de `C:\dev\entertechschool\shared-skills\`):

| Clase | Archivos generados/regenerados |
|---|---|
| **Clase 17 — Ideation + Research + Stories** | `README.md` (88 líneas), `lab/README.md` (160 líneas, 3 Partes), `slides/README.md` (11 slides), `facilitator/README.md` (~200 líneas) |
| **Clase 18 — Sprint 1** | `README.md`, `lab/README.md` (HU1-HU4 con gaps comment-placeholders), `slides/README.md` (11 slides), `facilitator/README.md` |
| **Clase 19 — User Validation + Sprint 2** | `README.md`, `lab/README.md` (validación cruzada + HU5-HU8 con algoritmo greedy), `slides/README.md` (11 slides), `facilitator/README.md` |
| **Clase 20 — Demo Day** | `README.md`, `lab/README.md` (formato corto ≤100 líneas), `slides/README.md` (9 slides), `facilitator/README.md` (con aplicación de rúbrica), `project/README.md` simplificado a checklist de envío |

### Convenciones aplicadas

- Tono estudiante segunda-persona en `README.md` y `lab/README.md`.
- Tono mentor-a-mentor (estilo Medium) en `facilitator/README.md`.
- Slides ≤13 con tipos obligatorios (TRANSICION entrada/salida, QUIZ, COMPROBACION+respuesta, CHECKPOINT por Parte, REFLEXION).
- Gaps tipo `comment-placeholders` en labs.
- Checkpoints estilo `visual` ("¿Qué deberías ver en pantalla?").
- Enlaces externos con `{:target="_blank"}`, internos sin target.
- UTF-8 puro (sin escapes Unicode).
- `part_naming=Parte` (no "HU"), `scaffolding_style=guided`.

---

## 6. Validación aplicada

### `evaluation-class` sobre las 4 clases

| Clase | Score | Estado |
|---|---|---|
| 17 | 9/10 | Lista para publicar |
| 18 | 8/10 | Lista (lab a 238 líneas, levemente sobre límite blando ≤200, no bloqueante) |
| 19 | 9/10 | Lista (lab a 209 líneas, levemente sobre límite blando, no bloqueante) |
| 20 | 10/10 | Lista |

**Promedio: 9/10. Cero errores críticos. Cero bloqueos.**

### `lint-markdown`

- 0 enlaces externos sin `{:target="_blank"}`.
- 0 bloques de código con `{{` sin escape Liquid.
- 0 escapes Unicode (`\u00XX`) en los archivos del M5.
- UTF-8 puro confirmado en las 18 archivos modificados.

---

## 7. Hub del instructor

`INSTRUCTOR-HUB.md` (raíz del repo) — generado con la skill `instructor-hub-generator` (subida por el usuario en sesión).

Contiene links de GitHub Pages a todos los materiales del curso (M1-M5) organizados por módulo, con leyenda de íconos por tipo de documento. Es el documento que se le comparte al instructor (Donatto) en lugar de darle acceso al repo.

**URL pública (después del deploy):**
```
https://entertechschool.github.io/ncode-201-guide/INSTRUCTOR-HUB.md
```

---

## 8. Pendientes manuales (no críticos)

Estos quedaron sin ejecutar porque el sandbox Linux estaba inestable durante la sesión:

```bash
# En la rama v2-sin-empresa:
git rm curriculum/class-17/README.md_old           # archivo vestigial del esquema antiguo
git rm curriculum/class-17/.old_README.md          # backup que generé, ya no necesario
git rm curriculum/class-20/individual_submission.md # redundante con el nuevo project/README.md
# curriculum/class-19/presentation-prep.pdf — decisión del usuario si conservar
```

Opcional (no bloqueante): reducir el lab de Clase 18 de 238 a ≤200 líneas moviendo el ejemplo extendido de la clase `Gasto` al `facilitator` (donde ya hay una versión).

---

## 9. Próximos pasos

1. **Esperar feedback de Donatto** sobre el material publicado en GitHub Pages (hub + clases 17-20).
2. **Aplicar correcciones** si Donatto solicita ajustes (ediciones puntuales, no regeneración completa).
3. **Limpiar archivos vestigiales** listados arriba.
4. **Hacer merge** de `v2-sin-empresa` a `main` cuando Donatto dé luz verde.
5. **Confirmar deploy** en GitHub Pages después del merge.

---

## 10. Decisiones clave tomadas durante la conversación

Para no repetir el debate en la siguiente conversación:

- **Por qué Opción C (Gastos Compartidos) y no A o B:** decisión del instructor. Ya validada.
- **Por qué proyecto individual y no grupal:** consistencia con M1-M4 (todos tienen proyecto individual).
- **Por qué M5 es spec-based ya no aplica:** sin empresa que defina el problema, el proyecto está pre-redactado y los alumnos lo construyen guiados, no diseñan desde cero. Por eso pasó a `guided` con 30% gaps.
- **Por qué `project/README.md` vive en `class-17/` y no en una carpeta del módulo:** convención del repo — los proyectos integradores siempre viven en la última clase de cierre del módulo (M1: class-04, M2: class-08, M3: class-12, M4: class-16). En M5 lo puse en class-17 (la primera del módulo) porque el alumno necesita verlo desde el día 1, no en Demo Day. `class-20/project/` quedó como simple checklist de envío que apunta a class-17 como fuente.
- **Por qué Donatto no tiene acceso al repo:** decisión institucional. Solo accede a links de GitHub Pages vía el `INSTRUCTOR-HUB.md`.
- **Por qué el "paquete completo" mencionado en la propuesta vive repartido entre `class-17/project/` y `class-{17,18,19,20}/facilitator/`:** los componentes de cara al alumno (enunciado, historias, criterios, rúbrica, mockup, entregables) van al `project/` público; los componentes privados del instructor (guion de exposición, guía de bloqueos por sprint) van al `facilitator/` de cada clase. La propuesta los listaba juntos por simplicidad de comunicación.

---

## 11. Skills aplicadas (orden de ejecución)

Pipeline del flujo `dev/flujo_creacion_cursos.md`:

| Fase | Skill | Estado |
|---|---|---|
| 0 | Preparación manual (archivos fundacionales) | ✅ |
| 1 | `module-planner` | Saltado — la propuesta validada equivale a plan |
| 2 | Documento del proyecto (manual) | ✅ |
| 3 | `class-readme` × 4 | ✅ |
| 3 | `class-lab` × 4 | ✅ |
| 3 | `class-slides` × 4 | ✅ |
| 3 | `class-facilitator` × 4 | ✅ |
| 4 | `module-test` | No aplica (M5 no tiene test diagnóstico, evaluación = proyecto) |
| 5 | `evaluation-class` × 4 | ✅ |
| 5 | `lint-markdown` | ✅ |
| Extra | `instructor-hub-generator` | ✅ |

---

## 12. Flujo cronológico de la conversación

Pasos que se siguieron, en orden:

1. **Lectura de contexto del repo** — `README.md`, `AGENTS.md`, `context/course_syllabus.md`, estructura de `curriculum/`.
2. **Diagnóstico del problema** — el M5 dependía de empresa externa, esquema ya no sostenible.
3. **Análisis de opciones de enfoque** — se evaluaron 3 enfoques (conservador / intermedio / disruptivo); usuario eligió el **conservador**: mantener las 4 sesiones actuales, solo cambiar el proyecto a uno predefinido.
4. **Generación de la propuesta para el instructor** (`propuesta-modulo-5.docx`) — qué cambia, cómo el instructor reemplaza a la empresa, paquete que entrega la IA, día a día de las 4 sesiones.
5. **Generación del menú de temáticas** (`propuesta-modulo-5-tematicas.docx`) — 3 opciones con resumen, dificultad, alineación con módulos, distribución por sprint y limitaciones. *Nota técnica:* la generación del Word tuvo varios intentos por bugs de docx-js con numeración (`{bullets-0}` / `{numbers-0}` como placeholders); se resolvió con post-procesamiento del XML.
6. **Validación del instructor** — Donatto aprobó el enfoque y eligió **Opción C: Agenda de Gastos Compartidos**.
7. **Aclaración de separación de audiencias** — confirmado que el "paquete" de la propuesta se materializa en el repo como: `class-17/project/` (público para alumno) + `class-{17-20}/facilitator/` (privado del instructor).
8. **Ejecución de Fase 0** — edición manual de los 3 archivos fundacionales (`README.md`, `course_syllabus.md`, `AGENTS.md`).
9. **Ejecución de Fase 2** — creación manual del documento del proyecto en `curriculum/class-17/project/README.md`.
10. **Auditoría con `module-updater`** — reporte de drift de las 4 clases del M5; usuario aprobó plan parcial: empezar por Clase 17 antes de replicar.
11. **Ejecución de Fase 3 — Clase 17** (piloto) — `class-readme` + `class-lab` + `class-slides` + `class-facilitator` aplicadas leyendo cada SKILL.md y aplicando manualmente.
12. **Ejecución de Fase 3 — Clases 18, 19, 20** — replicar el mismo patrón con luz verde del usuario.
13. **Validación con `evaluation-class`** — score promedio 9/10, cero bloqueos.
14. **Validación con `lint-markdown`** — cero errores en los 18 archivos modificados.
15. **Generación del `INSTRUCTOR-HUB.md`** — aplicada la skill `instructor-hub-generator` (subida en sesión por el usuario) para producir el documento de links públicos que se le comparte a Donatto.
16. **Redacción del mensaje a Donatto** — versión final pulida que solo apunta al hub público (Donatto no tiene acceso al repo).

---

## 13. Dónde estamos ahora

**Estado actual:** ⏸️ **Esperando feedback del instructor (Donatto)**.

### Lo que está hecho

- ✅ Toda la modificación curricular del M5 está aplicada en la rama `v2-sin-empresa`.
- ✅ Las 4 clases (17, 18, 19, 20) tienen sus 4 archivos cada una (README, lab, slides, facilitator) regenerados según los SKILL.md actuales.
- ✅ El documento del proyecto integrador está completo con 8 historias, criterios, rúbrica y material de apoyo.
- ✅ Validaciones aplicadas (`evaluation-class` 9/10 promedio, `lint-markdown` sin errores).
- ✅ `INSTRUCTOR-HUB.md` generado en la raíz del repo.
- ✅ Mensaje para Donatto redactado.

### Lo que falta (en orden)

1. **Cambiar el deploy de GitHub Pages a la rama `v2-sin-empresa`** (decisión del usuario para que Donatto vea el material antes del merge).
2. **Enviar el mensaje a Donatto** vía Gabriela con el link al `INSTRUCTOR-HUB.md` desplegado.
3. **Esperar feedback** de Donatto (luz verde o lista numerada de ajustes).
4. **Aplicar correcciones** si Donatto solicita ajustes.
5. **Limpieza manual** de archivos vestigiales (lista en sección 8).
6. **Merge de `v2-sin-empresa` → `main`** cuando todo esté validado.
7. **Restaurar deploy de GitHub Pages a `main`** después del merge.

### Bloqueadores actuales

Ninguno técnico. Solo dependencia humana: respuesta del instructor.

### Riesgos a vigilar

- Si Donatto pide cambiar la temática (de C a otra), implica regenerar todo el proyecto y la mayor parte de los labs. *Probabilidad: baja, ya validó la C.*
- Si Donatto pide ajustes a las historias de usuario, implica editar `class-17/project/` y posiblemente los labs de las 4 clases. *Probabilidad: media.*
- Si Donatto pide ajustes a las guías de facilitador, son ediciones aisladas. *Probabilidad: media, impacto bajo.*

### Cómo retomar la conversación

Cuando Donatto responda:

- **Si da luz verde sin cambios:** ir directo a la sección 9 (limpieza + merge).
- **Si pide cambios menores:** aplicar ediciones puntuales con `Edit` sobre los archivos específicos. Validar con `lint-markdown` después.
- **Si pide cambios mayores en la temática o las historias:** revisar primero el alcance, considerar regenerar `class-17/project/` y, en cascada, los labs de las 4 clases.

---

## 14. Mensaje enviado a Donatto (vía Gabriela)

```
Hola Donatto,

Ya está lista la nueva versión del Módulo 5 con el proyecto que elegiste
(Agenda de Gastos Compartidos). Te paso el hub con todos los links del curso:

👉 https://entertechschool.github.io/ncode-201-guide/INSTRUCTOR-HUB.md

Lo que te pido revisar, en este orden:

1. Proyecto Integrador M5 (📦, dentro de Clase 17) — enunciado, 8 historias
   de usuario, criterios de aceptación y rúbrica de 100 puntos. Es la fuente
   de verdad del módulo.
2. Guías del Facilitador de Clase 17, 18, 19 y 20 (🎓) — material privado
   con analogías, scripts de diálogo, dinámicas y errores comunes.
3. Resumen de clase 17, 18, 19 y 20 (📄) — lo que lee el alumno pre-clase.

Los labs (🧪) y las presentaciones (🖥️) derivan de los 3 puntos anteriores.
Revísalos solo si algo arriba no te cuadra.

Tiempo estimado: 30-40 minutos.

Cómo dejarme feedback: respóndeme con lista numerada apuntando clase +
documento + qué ajustar.

Quedo atento a tu luz verde o correcciones antes de dejarlo como versión oficial.
```

---

## 15. Archivos de referencia útiles para retomar el contexto

- `propuesta-modulo-5.docx` — propuesta completa entregada al instructor.
- `propuesta-modulo-5-tematicas.docx` — menú de 3 opciones (Donatto eligió la C).
- `dev/flujo_creacion_cursos.md` — pipeline de skills del bootcamp.
- `AGENTS.md` — variables del curso (`course_level=1`, `scaffolding_style=guided`, `part_naming=Parte`, `checkpoint_style=visual`).
- `README.md` — sílabo (fuente de verdad del curso).
- `context/course_syllabus.md` — detalle pedagógico del sílabo.
- `INSTRUCTOR-HUB.md` — links públicos para Donatto.
- `curriculum/class-17/project/README.md` — fuente de verdad del proyecto M5.
- `C:\dev\entertechschool\shared-skills\` — repo donde viven los SKILL.md (fuera de este repo, pero accesibles vía sync).

---

*Última actualización: cierre de la sesión donde se reformuló el M5 — abril 2026*
