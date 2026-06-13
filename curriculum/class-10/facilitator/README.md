# Guía del Facilitador — Clase 10: Asincronía y Promesas

> Tiempo de lectura: 8 minutos | Módulo 3 · Clase 10 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Sincrónico vs asincrónico** (NUEVO): el código sincrónico bloquea (una línea espera a la anterior); el asincrónico permite que una operación "tarde" mientras el programa sigue. Es el cambio mental central de la clase.
- **`setTimeout`** (NUEVO): ejecuta una función después de N milisegundos. Sirve para simular una operación lenta y demostrar que JavaScript no se congela.
- **Promesa** (NUEVO): objeto que representa un valor futuro. Se crea con `new Promise(resolve, reject)` y tiene tres estados: `pending`, `fulfilled`, `rejected`.
- **`.then` / `.catch`** (NUEVO): consumir una promesa — `.then` corre al resolverse, `.catch` al fallar.

> ❗ **Hoy NO hay red.** Se simula la demora con `setTimeout` sobre el array local. Es deliberado: aislar el concepto de asincronía del ruido de internet. En C11 la promesa simulada se vuelve un `fetch` real; el `.then`/`.catch` no cambia.

---

## 🔗 Analogías Útiles

**Asincronía ⟷ Pedir una pizza:** no te quedas paralizado en la puerta esperando (sincrónico); sigues con tu vida y reaccionas cuando suena el timbre (asincrónico). La **Promesa** es el ticket del pedido.

**Promesa ⟷ Ticket de guardarropa:** te dan un papelito (la promesa) ahora; el abrigo (el valor) lo recibes después. El ticket puede terminar en "aquí está tu abrigo" (`resolve`) o "lo perdimos" (`reject`).

**`pending`/`fulfilled`/`rejected` ⟷ Estado de un envío:** "en camino" / "entregado" / "devuelto". Empieza en camino y termina en uno de los otros dos.

**`.then`/`.catch` ⟷ Plan A y plan B:** "cuando llegue el paquete, hago esto (`.then`); si se pierde, hago esto otro (`.catch`)."

---

## 📚 Contexto Actual

### Por qué la asincronía va ANTES del `fetch`

`fetch` es asíncrono por naturaleza: devuelve una promesa. Si introdujéramos `fetch` sin entender promesas, el alumno copiaría `.then` sin saber qué es. Separar el **concepto** (C10, simulado) del **uso real** (C11, red) hace que `fetch` se sienta familiar en vez de mágico.

### Por qué simular con `setTimeout`

Una llamada real puede fallar por mil razones (sin internet, API caída, nombre mal escrito) que distraen del concepto. `setTimeout` da una demora **controlada y predecible**: el alumno ve "tarda → llega" sin variables externas. Y permite forzar el camino de error (`reject`) a voluntad.

### Por qué importa para la empleabilidad

Toda app moderna es asíncrona: carga datos, espera respuestas, maneja demoras. Entender promesas es prerrequisito de `fetch`, `async/await`, y cualquier framework. Es de los temas más pedidos en entrevistas JS.

**Fuentes:** [MDN: Usar promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises){:target="_blank"}, [MDN: setTimeout](https://developer.mozilla.org/es/docs/Web/API/setTimeout){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Refuerzo + disparador | 15 min | Render de C09. "¿Y si los datos tardan?" |
| Debate Técnico | 30 min | Sync vs async, event loop, promesas y estados. |
| Demo | 15 min | "Cargando…" → tarjetas con `setTimeout` y Promesa. |
| Lab (HU1-HU3) | 100 min | HU1 `setTimeout` · HU2 `new Promise` · HU3 `.then`/`.catch` |
| Cierre | 20 min | Síntesis + puente a `fetch` (C11). |

---

## 🎯 Momentos Clave de la Clase

### Demo 1 — "JavaScript no espera" (4 min)
```javascript
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");
```
Pregunta antes de correr: ¿en qué orden imprime? (Respuesta: A, C, B.) "JavaScript no se quedó esperando el segundo — siguió con C." Esta es **la idea que ordena la clase**.

### Demo 2 — la promesa en consola (3 min)
`console.log(obtenerPokemones())` → `Promise {<pending>}`. "No te dio los datos. Te dio un *ticket* que dice 'esperando'." Luego muestra cómo `.then` "abre" el ticket cuando se resuelve.

### Demo 3 — forzar el error (3 min)
Cambia `resolve` por `reject(new Error("API caída"))`. Recarga: mensaje rojo. "El `.catch` atrapó el fallo. Por eso siempre lo ponemos." Anticipa C12.

### Transición al Lab
```
"HU1: simulan la demora con setTimeout (Cargando → tarjetas).
 HU2: envuelven los datos en una Promise.
 HU3: la consumen con .then/.catch, y prueban el camino de error.
 La forma es idéntica a la del fetch que viene en C11."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Ordena la salida" (tras Demo 1)
Tres `console.log` con un `setTimeout` en medio. Que predigan el orden antes de correr. Discute por qué el del timeout va al final.

### Dinámica 2: "¿Qué estado?" (en HU2)
Describe situaciones ("el setTimeout aún corre", "se llamó resolve", "se llamó reject") y que digan el estado (`pending`/`fulfilled`/`rejected`).

### Dinámica 3: "¿then o catch?" (en HU3)
Das escenarios (datos llegan / API falla / nombre inválido) y que digan qué bloque corre.

---

## 💡 Ejemplos Listos para Usar

### El "ticket" que aún no se abre
```javascript
const p = obtenerPokemones();   // Promise {<pending>}
p.then(lista => render(lista)); // se "abre" cuando resuelve
```
"La promesa existe ya; el valor, todavía no. `.then` espera por ti."

### Por qué retornar la promesa
```javascript
function obtenerPokemones() {
  return new Promise(...);   // sin return, no puedes hacer .then afuera
}
```
"Si olvidas el `return`, `.then` da error: no hay promesa que encadenar."

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| `.then is not a function` | Olvidaron `return new Promise` | La función debe **retornar** la promesa |
| Las tarjetas salen al instante (sin demora) | Pusieron el `render` fuera del `setTimeout` | El `render` va **dentro** del callback del timeout |
| El error nunca se muestra | No hay `.catch`, o nunca se llama `reject` | Agregar `.catch`; para probar, forzar `reject` |
| "Cargando…" se queda para siempre | La promesa nunca resuelve (faltó `resolve`) | Verificar que `resolve(...)` se llame dentro del timeout |
| Esperan que `setTimeout` "pause" el código | Creen que es sincrónico | Recordar Demo 1: el código sigue, el timeout corre después |

---

## ✅ Señales de Comprensión

**ENTIENDE cuando:**
- Predice correctamente el orden A, C, B de la Demo 1.
- Explica que `obtenerPokemones()` devuelve una promesa, no los datos.
- Sabe que `.then` corre al resolver y `.catch` al rechazar.
- Conecta la promesa simulada de hoy con el `fetch` que viene.

**NECESITA AYUDA cuando:**
- Cree que `setTimeout` "pausa" el programa.
- Olvida el `return` de la promesa y no entiende el error.
- Pone el `render` fuera del callback y no ve la demora.
- No distingue cuándo corre `.then` vs `.catch`.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | HU1 | "Cargando…" visible ~1.5 s, luego tarjetas; el `console.log` posterior se imprime antes. |
| ~60' | HU2 | `console.log(obtenerPokemones())` muestra `Promise {<pending>}`. |
| ~90' | HU3 | Con `resolve` → tarjetas; con `reject` → mensaje de error. Distingue ambos caminos. |

---

## 🧑‍🏫 Tips de Facilitación

- **Grupo callado:** corre la Demo 1 sin decir el resultado; que voten el orden a mano alzada.
- **Alguien ya sabía promesas:** pídele que explique con sus palabras qué es `pending`.
- **Terminan antes:** logro de fallo aleatorio (`Math.random() < 0.33` → `reject`) para ver ambos caminos.
- **Si se atascan:** insiste en la analogía de la pizza/ticket antes de volver al código.
- **No te metas aún en `async/await`:** es C11. Hoy es `.then`/`.catch` para que entiendan la promesa "cruda".

---

## ❓ Preguntas Frecuentes

**P: ¿Por qué no usamos `fetch` directamente?**
R: Porque `fetch` es asíncrono y devuelve una promesa. Sin entender promesas, copiarían `.then` sin saber qué es. Hoy aislamos el concepto; en C11 lo aplican a la red.

**P: ¿`setTimeout` es lo mismo que dormir el programa?**
R: No. No pausa nada: programa una función para después y el código sigue. Por eso A, C, B y no A, B, C.

**P: ¿Qué pasa si no pongo `.catch`?**
R: Si la promesa falla, el error queda sin manejar (aparece en consola como "uncaught"). Siempre conviene un `.catch`. En C12 se profundiza el manejo de errores.

**P: ¿`async/await` no es más fácil?**
R: Sí, y lo verán en C11. Pero `async/await` es "azúcar" sobre las promesas; entender la promesa cruda primero hace que `await` tenga sentido.

---

## 🔗 Conexiones del Curriculum

### Construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C09 | `render()`, `crearTarjeta()` | Se reusan tal cual; hoy cambia cuándo llegan los datos |
| C06 | callbacks (`.map`, `.forEach`) | `.then`/`.catch` reciben callbacks, ya familiares |

### Conexión con C11

Al cerrar:

> "Hoy la promesa era una simulación con `setTimeout`. En C11 la reemplazan por una **real**: `fetch` a la PokeAPI también devuelve una promesa, y se consume con el mismo `.then`/`.catch` —o con `async/await`, que aprenderán ahí. Por dentro: datos de internet de verdad."

---

## 🪞 Reflexión Post-Clase

- ¿Cuántos acertaron el orden A, C, B? Si fueron pocos, refuerza el event loop.
- ¿La analogía de la pizza/ticket ayudó, o hubo que insistir con el código?
- ¿Probaron el camino de `reject`? Vivirlo fija la importancia del `.catch`.
- ¿Alguien conectó solo "esto es lo que hará `fetch`"? Excelente — está listo para C11.
