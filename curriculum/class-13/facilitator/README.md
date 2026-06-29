# Guía del Facilitador — Clase 13: Modelado de Datos y Manipulación de Texto

> Tiempo de lectura: 8 minutos | Primera clase del M4 · Proyecto: Gestor de Plantillas para WhatsApp | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Estado central** (refuerzo): un único objeto `state = { plantillas: [] }` que es la verdad de la app. Si algo no está ahí, no existe en pantalla. Lo reasignamos, no lo mutamos.
- **Patrón render** (refuerzo): `render()` limpia el contenedor y redibuja TODO desde el estado. La regla de oro: cambias el estado → llamas `render()`.
- **Métodos de String** (NUEVO, ancla): un texto es un objeto con métodos. `.trim()`, `.toLowerCase()`, `.startsWith()`, `.includes()`, `.replaceAll()`, `.split()`, `.slice()`. **No mutan**: devuelven un texto nuevo.
- **Sustitución de variables** (NUEVO): reemplazar `{nombre}` dentro de la plantilla por un valor real con `.replaceAll()` → el "mensaje final".
- **`Date`** (NUEVO, 2ª herramienta): `new Date()` captura el momento de creación; `.toLocaleDateString("es-PE")` lo vuelve texto legible.

> ❗ **MAX_TWO_NEW_TOOLS:** las dos nuevas son **String** (familia de métodos) y **Date**. El `class`/`state`/`render` son **refuerzo** de C08 y M3.

---

## 🔗 Analogías Útiles

**Métodos de String ⟷ Herramientas de cocina:** un texto crudo es un ingrediente. `.trim()` le quita lo de los bordes, `.toLowerCase()` lo unifica, `.split()` lo corta en pedazos. No cambias el ingrediente original: produces uno preparado.

**Normalizar ⟷ Etiquetar carpetas:** si cada persona escribe la categoría a su manera (`Ventas`, ` ventas`, `#VENTAS`), el archivo es un caos. Normalizar es decidir UNA forma (`#ventas`) y forzar todo a ella.

**Sustitución de variables ⟷ Carta modelo con espacios en blanco:** la plantilla es la carta con `{nombre}`; `replaceAll` rellena el espacio con el destinatario real. Una plantilla, mil mensajes.

**Estado → render ⟷ Pizarra que se vuelve a copiar:** no editas la pizarra a mano; cambias tu cuaderno (estado) y vuelves a copiar todo a la pizarra (`render`). Siempre coinciden.

---

## 📚 Contexto Actual

### Por qué el texto es el verdadero protagonista

Casi todo lo que un usuario produce es texto: nombres, mensajes, búsquedas. Antes de guardarlo o mostrarlo, una app lo limpia y normaliza. Los métodos de String son el día a día de cualquier desarrollador — más usados que cualquier algoritmo "elegante". Hoy los alumnos los aplican a un problema real: que sus plantillas se vean limpias.

> **Para contar en clase:** "WhatsApp Business manda millones de mensajes con plantillas: `Hola {1}, tu pedido {2} llegó`. Ustedes están construyendo exactamente ese motor, en pequeño."

### Inmutabilidad de los strings (anti-hype honesto)

Un error clásico: creer que `texto.trim()` cambia `texto`. No lo hace. Los strings son **inmutables**; los métodos devuelven uno nuevo. Si no guardas el resultado (`texto = texto.trim()`), se pierde. Vale la pena mostrarlo en consola — ahorra horas de confusión.

**Fuentes:** [MDN: String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String){:target="_blank"}, [MDN: Date](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Refuerzo | 30 min | `class`, estado central, "cambias estado → render" (de M3) |
| Debate + Demo | 20 min | Métodos de String: ¿mutan o devuelven nuevo? |
| Break | 10 min | — |
| Lab (HU1-HU4) | 100 min | HU1 modelar+estado · HU2 render+Date · HU3 limpiar/normalizar · HU4 mensaje final |
| Cierre | 20 min | Síntesis + preview C14 (editar/eliminar) |

---

## 🎯 Momentos Clave de la Clase

### Pregunta Detonadora (QUIZ PRE-LAB)

**Pregunta:** Tres usuarios escriben el mismo hashtag de tres formas (`  Ventas `, `#VENTAS`, `ventas`). ¿Cómo logras que se guarden idénticos?

No hay opción correcta única — es abierta. Deja que propongan ("comparar uno por uno", "obligar formato"). Conduce hacia: *normalizar con métodos de String*.

**Tip:** No reveles `trim().toLowerCase()`. Que el lab lo descubra.

### Demo Principal — Los strings no mutan (4 min)

**Qué mostrar:** En consola, `let s = "  Hola "`. Ejecuta `s.trim()` → devuelve `"Hola"`. Luego muestra `s` otra vez → **sigue con espacios**. "El método devolvió un texto nuevo; el original no cambió. Por eso guardamos: `s = s.trim()`." Encadena `"  VENTAS ".trim().toLowerCase()` → `"ventas"`.

**Script sugerido:**
```
Facilitador: "Voy a limpiar este texto. [s.trim()] ¿Ya quedó limpio s?"
[Mostrar s todavía con espacios]
Facilitador: "No. El método NO modifica: devuelve uno nuevo. Hay que guardarlo."
```

**Plan B (si falla):** Tener una página con los ejemplos en `console.log` listos para abrir.

### Transición al Lab

**Momento crítico:** El salto de "modelar" (HU1-HU2) a "transformar texto" (HU3-HU4) es donde está lo nuevo.

**Script sugerido:**
```
Facilitador: "HU1: clase Template + estado central. HU2: render con la fecha (Date).
HU3: limpiar y normalizar con métodos de String + validar campos vacíos.
HU4: reemplazar {nombre} y mostrar la vista previa recortada.
Levanten la mano al terminar cada HU."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "¿Muta o devuelve?" (en HU3)
Lanza expresiones (`texto.trim()`, `arr.push(x)`, `texto.toLowerCase()`) y que digan si modifican el original o devuelven algo nuevo. Refuerza la inmutabilidad de strings.

### Dinámica 2: "Arma el método" (en HU3)
Da el objetivo ("que `#VENTAS` y ` ventas ` queden iguales") y que propongan el encadenamiento de métodos antes de ver `normalizarHashtag`.

### Dinámica 3: "Una plantilla, mil mensajes" (en HU4)
Escribe `Hola {nombre}` en la pizarra y pide nombres del grupo. Reemplaza en vivo mentalmente — eso es `replaceAll`. Conecta con casos reales de mensajería.

---

## 💡 Ejemplos Listos para Usar

### Encadenar métodos (no mutan)
```javascript
let hashtag = "  VENTAS ";
hashtag = hashtag.trim().toLowerCase();   // "ventas" — hay que reasignar
```
"Si no guardas el resultado, se pierde. Los strings no se modifican solos."

### Sustituir una variable
```javascript
"Hola {nombre}, gracias".replaceAll("{nombre}", "Ana");
// "Hola Ana, gracias"
```
"Una plantilla con `{nombre}` se vuelve un mensaje real."

### Date legible
```javascript
new Date().toLocaleDateString("es-PE");   // "29/6/2026"
```

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| `texto.trim()` "no hace nada" | No reasignaron el resultado | `texto = texto.trim()` — los strings no mutan |
| El hashtag se guarda con espacios/mayúsculas | Falta `.trim().toLowerCase()` en `normalizarHashtag` | Revisar el encadenamiento |
| El `#` se duplica o falta | No revisan con `startsWith("#")` | Usar el ternario `startsWith("#") ? ... : "#" + ...` |
| `{nombre}` aparece literal en pantalla | No llamaron `replaceAll` (o usaron `replace`, solo 1 vez) | Usar `replaceAll("{nombre}", valor)` |
| La fecha sale como objeto raro o `Invalid Date` | Usaron el objeto `Date` sin formatear | `.toLocaleDateString("es-PE")` |
| Se agregan plantillas vacías | Falta la validación de `length === 0` | Validar `titulo`/`mensaje` antes de agregar |
| La lista no se actualiza | No llaman `render()` tras cambiar el estado | Recordar: cambias estado → `render()` |
| `state is not defined` | Orden de los `<script>` o falta el archivo | `Template.js` antes de `app.js` |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Explica que `trim()` devuelve un texto nuevo y no muta el original.
- Encadena métodos de String con intención (limpiar → unificar → asegurar `#`).
- Usa `replaceAll` para convertir `{nombre}` en un valor real.
- Sabe que tras cambiar el estado debe llamar `render()`.

### El estudiante NECESITA AYUDA cuando:
- Cree que `texto.trim()` modifica `texto`.
- Usa `replace` esperando que cambie todas las apariciones.
- Edita el DOM a mano en vez de cambiar el estado y re-renderizar.
- Guarda plantillas vacías o con espacios sin notarlo.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | HU1 | En consola, `agregarPlantilla(...)` un par de veces hace crecer `state.plantillas`; cada item tiene `titulo`, `mensaje`, `hashtag`, `fecha`. |
| ~60' | HU2 | Al enviar el formulario, la plantilla aparece sola en la lista, con la **fecha de hoy** legible; agregar otra no borra la anterior. |
| ~90' | HU3 | `  Ventas ` se guarda como `#ventas`; con el mensaje vacío no deja agregar. |
| ~110' | HU4 | `Hola {nombre}...` muestra `Hola Ana...` en la vista previa; un mensaje largo aparece recortado con `…`; los hashtags se ven como etiquetas. |

---

## 🧑‍🏫 Tips de Facilitación

### Si el grupo está callado:
- Muestra el antes/después de `s.trim()` en consola y que voten si `s` cambió.

### Si alguien ya domina los métodos de String:
- Pídele que explique por qué los strings son inmutables, o que implemente un logro extra (más variables, contador de caracteres).

### Si la mayoría termina antes:
- Logros adicionales: contador de caracteres, botón Copiar, soportar `{producto}`.

### Si la mayoría se atrasa:
- Prioriza HU1-HU3. HU4 (mensaje final) puede quedar como post-clase si el tiempo aprieta.

### Si hay preguntas fuera de alcance (persistencia):
> "Guardar al recargar es persistencia — eso es C15, con `localStorage`. Hoy todo vive en memoria, a propósito."

---

## 🔀 Diferenciación

### Para estudiantes avanzados:
- Soportar varias variables encadenando `.replaceAll()`.
- Pregunta de extensión: "¿Por qué `replaceAll` y no `replace`?"

### Para estudiantes con dificultades:
- Pair programming.
- Que primero hagan funcionar `normalizarHashtag` solo en consola antes de conectarlo al formulario.

---

## ❓ Preguntas Frecuentes

### P: ¿Por qué `replaceAll` y no `replace`?
**R:** `replace` solo cambia la **primera** aparición. Si la plantilla usa `{nombre}` dos veces, `replace` deja una sin reemplazar. `replaceAll` cambia todas.

### P: ¿Los métodos de String modifican mi variable?
**R:** No. Los strings son inmutables; cada método devuelve uno nuevo. Hay que reasignar: `s = s.trim()`.

### P: ¿Por qué guardamos `new Date()` y no la fecha como texto?
**R:** Guardar el objeto `Date` deja abierta la posibilidad de formatearlo distinto luego (hora, año, etc.). Formatear es decisión de presentación, va en `render`.

### P: ¿Y si quiero que las plantillas se guarden al recargar?
**R:** Eso es persistencia (`localStorage`), tema de C15. Hoy todo vive en memoria.

---

## 🔗 Conexiones del Curriculum

### Construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C08 (M2) | `class`, `constructor`, `this` | Se reusa para modelar `Template` |
| C09-C12 (M3) | DOM, `createElement`, eventos, "estado que crece" | Se reusan para `render` y el formulario |

### Conexión con C14

Al cerrar:

> "Hoy su app crea, limpia y muestra plantillas. Pero solo crece: no pueden editar ni borrar una. La próxima clase su estado va a **cambiar y menguar** — editar y eliminar plantillas. Lo que aprendieron hoy de 'cambias el estado → render' es exactamente lo que van a reusar."

**Pre-work implícito:** Que piensen "si quisiera borrar una plantilla, ¿qué tendría que pasarle al array `state.plantillas`?"

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Quedó claro que los strings no mutan? Si no, refuérzalo al inicio de C14.
- ¿Confundieron `replace` con `replaceAll`? Marca para repaso.
- ¿Entendieron "cambias estado → render" como regla, no como receta memorizada?
- ¿Alguien preguntó por persistencia? Está listo para entender C15 con profundidad.
