# Guía del Facilitador — Clase 14: Interacción y Datos Derivados

> Tiempo de lectura: 8 minutos | Módulo 4 · Clase 14 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Delegación de eventos** (NUEVO, ancla): un solo `addEventListener` en el contenedor padre que, según `event.target`, decide qué hacer. Reemplaza el "un listener por botón" que no sobrevive a un re-render.
- **`data-id` + `dataset`** (NUEVO): se guarda el id en el HTML (`data-id="${p.id}"`) y se lee con `e.target.dataset.id`. Es el puente entre el clic y la plantilla correcta.
- **CRUD inmutable** (REFUERZO): eliminar con `.filter`, editar con `.map` + spread. Nunca se toca el array original.
- **Datos derivados / función pura** (REFUERZO): `contarPorHashtag` con `.reduce` recibe el estado y devuelve un conteo, sin guardar nada. Se recalcula en cada `render()`.

> ❗ **El patrón estado → `render()` no cambia.** Todo lo nuevo (eliminar, editar, stats, filtro) pasa por el mismo `render()` que ya tenían de C13. La única API nueva es la **delegación de eventos** (respeta MAX_TWO_NEW_TOOLS).

---

## 🔗 Analogías Útiles

**Delegación de eventos ⟷ Recepcionista de un edificio:** en vez de poner un guardia en cada puerta (un listener por botón), pones **un recepcionista en la entrada** que pregunta "¿a quién buscas?" (`event.target`) y dirige. Funciona aunque cambien las oficinas (las tarjetas se redibujan).

**Datos derivados ⟷ El marcador de un partido:** el marcador no se "guarda" aparte; se **calcula** de los goles que ya pasaron. Si cambias los goles, el marcador se recalcula solo. Igual que `Total` y el conteo por hashtag.

**Inmutabilidad ⟷ Fotocopiar antes de tachar:** en vez de tachar el documento original, sacas una copia y tachas la copia. `.filter`, `.map` y `[...arr]` hacen eso con tus arrays.

---

## 📚 Contexto Actual

### Por qué la delegación de eventos es la norma en apps reales

Cualquier interfaz con listas dinámicas (un feed, una bandeja de correo, un tablero Kanban) crea y destruye elementos constantemente. Enganchar y reenganchar listeners en cada cambio es frágil y costoso. Por eso el patrón estándar —y el que usan internamente librerías como React con su "synthetic events"— es **escuchar en un ancestro estable** y resolver el destino con `event.target`. Hoy lo hacen a mano, y entienden lo que esas librerías automatizan.

### Por qué "datos derivados" en vez de "guardar el total"

Un error clásico de principiante es guardar el total en una variable y actualizarla a mano en cada operación: se desincroniza enseguida. La práctica profesional es **derivar** del estado (single source of truth). Si el estado es correcto, el total siempre es correcto. Esta idea es la semilla de los "selectores" o "computed" de frameworks modernos.

### La frontera con C15

Hoy todo vive en memoria: al recargar, se pierde. **Persistir** con `localStorage` + `JSON.stringify/parse` es C15. No lo adelantes.

**Fuentes:** [MDN: Delegación de eventos](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Refuerzo | 15 min | El `render()` de C13. "¿Cómo le agrego un botón a cada tarjeta?" |
| Debate / Demo | 30 min | Listener por botón vs delegación; qué es un dato derivado. |
| Demo | 15 min | Un listener en la lista atiende clics de varias tarjetas. |
| Lab (HU1-HU4) | 100 min | HU1 eliminar · HU2 editar · HU3 stats · HU4 filtro |
| Cierre | 20 min | Síntesis + "si recargas, se pierde" → C15. |

---

## 🎯 Momentos Clave de la Clase

### Pregunta Detonadora

**Pregunta (QUIZ PRE-LAB):** Si re-dibujas la lista cada vez que cambia el estado, ¿qué pasa con los listeners que pusiste botón por botón?

**Respuesta esperada:** Se pierden — el `render()` reemplaza el HTML, así que los nodos viejos (con sus listeners) desaparecen. Hay que reengancharlos cada vez... o usar delegación.

**Tip:** No la cierres aún. Deja que lleguen solos a "qué fastidio reengancharlos siempre" — ahí entra la delegación como alivio.

### Comprobación (post-demo)

**Pregunta:** ¿Qué es la delegación de eventos?
**Respuesta correcta:** C — un solo listener en el padre que decide según `event.target`.

**Por qué las otras NO:**
| Opción | Por qué NO |
|---|---|
| A | Listener por hijo: muere en cada re-render. |
| B | `onclick` inline: no escala, mezcla HTML/JS. |
| D | Reenganchar listeners es justo lo que la delegación evita. |

### Demo Principal

**Qué mostrar:** Una lista con 3 tarjetas. Pones **un** `addEventListener("click")` en el `<ul>` y, con `if (e.target.classList.contains("btn-eliminar"))`, eliminas la correcta. Eliminas una, re-renderizas, y el mismo listener sigue funcionando sin tocar nada.

**Script sugerido:**
```
Facilitador: "Voy a poner UN listener en la lista, no en cada botón."
[Hace clic en eliminar de la tarjeta 2 → desaparece]
Facilitador: "Re-renderizo... y miren: sigue funcionando sin reenganchar nada. ¿Por qué?"
```

**Plan B (si algo falla):** muestra en consola `e.target` al hacer clic en distintas zonas de la tarjeta; que vean que cambia según dónde tocan.

### Transición al Lab

```
"HU1: botón Eliminar con delegación (un listener en la lista).
 HU2: botón Editar que carga el formulario y actualiza en su lugar (state.editandoId).
 HU3: panel de stats con contarPorHashtag (función pura, reduce).
 HU4: buscador que filtra por hashtag (la lista reacciona).
 Todo pasa por el mismo render(). Si recargan la página... se pierde. Eso es C15."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "¿En qué hice clic?" (antes de HU1)
Proyecta una tarjeta con título, mensaje y dos botones. Haz clic en distintas zonas y pregunta "¿qué creen que es `event.target` aquí?". Conecta con `classList.contains` para distinguir.

### Dinámica 2: "Mutar o no mutar" (en HU2)
Da dos operaciones (eliminar, editar) y que digan cuál es la versión inmutable. Refuerza `.filter` / `.map` / `{ ...p }`.

### Dinámica 3: "¿Se guarda o se calcula?" (en HU3)
Lista cosas de apps reales (no leídos de WhatsApp, total del carrito, likes) y que clasifiquen: ¿dato guardado o derivado del estado?

---

## 💡 Ejemplos Listos para Usar

### Un listener atiende dos botones
```javascript
lista.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (e.target.classList.contains("btn-eliminar")) eliminarPlantilla(id);
  if (e.target.classList.contains("btn-editar"))   cargarEnFormulario(id);
});
```
"Un solo listener; `event.target` y `classList` deciden la acción."

### Editar sin mutar
```javascript
state.plantillas = state.plantillas.map(p =>
  p.id === state.editandoId ? { ...p, titulo: t } : p
);
```
"`.map` devuelve un array nuevo; el spread copia la plantilla y cambia solo lo necesario."

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| El clic en eliminar no hace nada | Mal nombre de clase en `classList.contains` | Debe coincidir con `btn-eliminar` exacto |
| `eliminarPlantilla(undefined)` | `data-id` no está en el botón, o leen otro nodo | Verificar `data-id="${p.id}"` y `e.target.dataset.id` |
| `id` no coincide nunca | Comparan ids de tipos distintos | Con `crypto.randomUUID()` el id es texto en ambos lados; compara `dataset.id` (texto) directo, sin `Number()` |
| Al editar se crea una copia | No usan `state.editandoId` en el `submit` | Decidir `map` (editar) vs `agregar` (crear) según `editandoId` |
| Las stats no se actualizan | No llaman `renderStats()` en `render()` | Agregar `renderStats();` al final de `render()` |
| El total baja al filtrar | Cuentan `plantillasVisibles()` en vez del estado | Stats cuentan `state.plantillas` (total real) |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Explica por qué un listener en el padre sobrevive al re-render.
- Distingue una operación que muta de una inmutable.
- Sabe que el total se **deriva** del estado y por eso nunca se desactualiza.
- Lee `event.target` y `dataset.id` con naturalidad.

### El estudiante NECESITA AYUDA cuando:
- Pone un `addEventListener` dentro del loop de `render()`.
- Modifica `p.titulo` directamente al editar.
- Guarda el total en una variable que actualiza a mano.
- Filtra creando una vista sin recalcular desde el estado.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar | Si no cumple |
|---|---|---|---|
| ~30' | HU1 | Agregar 3, eliminar la del medio: solo esa desaparece. | Revisar `classList.contains` y que el `data-id` lleve `plantilla.id` |
| ~55' | HU2 | Editar y guardar: se actualiza en su lugar, sin copia nueva. | Revisar uso de `state.editandoId` en el `submit` |
| ~80' | HU3 | Panel muestra `Total` y conteo por hashtag; baja al eliminar. | Agregar `renderStats()` al final de `render()` |
| ~100' | HU4 | Filtrar por hashtag muestra solo coincidencias; borrar → todas. | Recorrer `plantillasVisibles()` en `render()` |

---

## 🧑‍🏫 Tips de Facilitación

- **Grupo callado:** haz clic en distintas zonas de una tarjeta y muestra `console.log(e.target)`; el cambio del target genera preguntas.
- **Alguien ya sabía delegación:** pídele que explique por qué el listener en el padre sigue funcionando aunque se recreen las tarjetas.
- **Terminan antes:** sugiere los Logros (cancelar edición, hashtag más usado, confirmar al eliminar).
- **Se atrasan:** prioriza HU1-HU3 (delegación + CRUD + stats); HU4 puede quedar como extensión.
- **Preguntas fuera de alcance (persistencia):** "Eso es exactamente C15. Hoy todo vive en memoria a propósito."

---

## 🔀 Diferenciación

### Para estudiantes avanzados:
- Logro "hashtag más usado": con `contarPorHashtag` + `Object.entries`, encontrar la entrada de mayor conteo.
- Pregunta de extensión: "¿Cómo harías que un clic en el `<strong>` del título también edite?"

### Para estudiantes con dificultades:
- Empezar SOLO con eliminar (HU1) hasta que la delegación haga clic.
- Checkpoint intermedio: que logren un `console.log` del `id` correcto antes de borrar.

---

## ❓ Preguntas Frecuentes

**P: ¿Por qué no un `addEventListener` por cada botón?**
R: Porque al re-renderizar se destruyen los nodos y sus listeners. Un listener en el padre persiste y atiende a todos.

**P: ¿Por qué `crypto.randomUUID()` y no un contador?**
R: Genera un id único garantizado y, como es texto, sobrevive a la persistencia de C15 sin chocar con los ids ya guardados (un contador se reiniciaría al recargar). Además `dataset.id` ya es texto, así que se compara directo, sin `Number()`.

**P: ¿Y si quiero que las plantillas sigan ahí al recargar?**
R: Eso es persistencia con `localStorage`, tema de C15. Hoy viven en memoria.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C13 | Clase `Template`, estado central, `render()` | Se reusan; hoy se les añade `id` e interacción |
| M2 | `.filter`, `.map`, `.reduce`, spread | Base del CRUD inmutable y de los datos derivados |

### Conexión con C15

Al cerrar, planta la semilla:

> "Hoy tu app edita, elimina, cuenta y filtra. Pero si recargan la página, todo desaparece — vive en memoria. En C15 le pondrán `localStorage` y `JSON` para que las plantillas sobrevivan al cierre del navegador."

**Pre-work / Tarea implícita:** que reflexionen dónde guarda WhatsApp Web sus datos cuando cierras y vuelves a abrir.

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Vieron claro por qué un listener en el padre basta?
- ¿Distinguen mutar de no mutar al editar/eliminar?
- ¿Entendieron "dato derivado" (se calcula, no se guarda)?
- ¿Entienden por qué el id se genera con `crypto.randomUUID()` (único y persistente)?
