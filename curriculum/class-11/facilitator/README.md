# Guía del Facilitador — Clase 11: async/await, fetch y JSON

> Tiempo de lectura: 8 minutos | Módulo 3 · Clase 11 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **JSON** (NUEVO): formato de texto para intercambiar datos. Su sintaxis refleja objetos y arrays de JavaScript. Es lo que devuelve toda API. Importante: lo que llega es **texto**, no un objeto JS todavía.
- **`fetch(url)`** (NUEVO): pide datos a una URL; devuelve una promesa (las de C10). Entrega un objeto `response` (la respuesta cruda).
- **`response.json()`** (NUEVO): lee el cuerpo de la respuesta y lo convierte de JSON (texto) a objeto JavaScript. También devuelve una promesa. **No es** `JSON.parse` (eso es M4, para persistencia).
- **`async` / `await`** (NUEVO): `async` marca una función asíncrona; `await` pausa hasta que una promesa resuelva y entrega el valor directo. Más legible que `.then` encadenado.

> ❗ **El render no cambia.** `crearTarjeta`/`render` de C09 se reusan tal cual porque el dato de la API tiene la **misma forma** que el local. Hoy solo cambia **de dónde** vienen los datos. Ese fue el motivo de diseñar el dato local idéntico desde C09.

---

## 🔗 Analogías Útiles

**JSON ⟷ Un formulario en papel:** el servidor te manda los datos escritos en un formato estándar (JSON), como un formulario lleno. `response.json()` es "digitalizar" ese papel a algo que tu programa puede manipular (objeto JS).

**fetch ⟷ Pedir a domicilio:** llamas (`fetch`), y te llega la respuesta. Pero la bolsa cerrada (`response`) no es la comida: hay que abrirla (`response.json()`) para usar lo de adentro.

**await ⟷ "Espérame aquí":** `await` le dice a la función "no sigas hasta que esto llegue". El resto del programa (fuera de la función) **no** se bloquea — solo esta función espera su turno.

**Dos await ⟷ Dos esperas:** esperar que **llegue** el repartidor (`fetch`) y esperar a **abrir** la bolsa (`.json()`). Dos pasos, dos esperas.

---

## 📚 Contexto Actual

### Por qué `async/await` y no solo `.then`

Ya saben `.then` de C10. `async/await` es "azúcar" sobre lo mismo, pero lee como código secuencial normal (`const x = await ...`), sin anidar callbacks. Para una cadena de dos pasos (fetch → json) es mucho más claro. Se enseña sobre la base de promesas que ya tienen.

### Por qué JSON se enseña aquí (y no antes)

JSON cobra sentido cuando hay una API que lo devuelve. Enseñarlo en abstracto sería seco; mostrarlo como "esto es lo que te manda PokeAPI" lo ancla. Es el puente natural entre "pedí datos" y "los tengo como objeto".

### La frontera con M4

Hoy se usa `response.json()` para **leer** datos de una API. En M4 se usará `JSON.parse`/`JSON.stringify` para **persistir** el estado propio en localStorage. Son cosas distintas: leer de la web (C11) vs guardar lo tuyo (M4). No las mezcles.

**Fuentes:** [MDN: Usar fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch){:target="_blank"}, [PokeAPI docs](https://pokeapi.co/docs/v2){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Refuerzo + API/JSON | 15 min | Promesas (C10). Mostrar JSON real de PokeAPI en el navegador. |
| Debate Técnico | 30 min | JSON, `fetch`, `async/await` vs `.then`. |
| Demo | 15 min | Buscar un Pokémon real y mostrarlo. |
| Lab (HU1-HU3) | 100 min | HU1 `fetch`+`await` · HU2 mostrar (reusa C09) · HU3 buscador |
| Cierre | 20 min | Síntesis + el error de "no existe" → C12. |

---

## 🎯 Momentos Clave de la Clase

### Demo 1 — el JSON real en el navegador (3 min)
Abre `https://pokeapi.co/api/v2/pokemon/pikachu` en el navegador. "Esto es JSON: texto con forma de objeto. Es lo que tu app va a recibir." Señala `name`, `sprites`, `types` — los mismos que su dato local.

### Demo 2 — fetch en vivo (4 min)
En consola: `fetch(url).then(r => r.json()).then(p => console.log(p))`. Luego reescríbelo con `async/await`. "Mismo resultado, pero el segundo se lee como una receta paso a paso."

### Demo 3 — los dos await (3 min)
Quita el segundo `await` (deja `const pokemon = response.json()`) y muestra que `pokemon` es una `Promise`, no el objeto. "Por eso el segundo `await`: `.json()` también tarda."

### Transición al Lab
```
"HU1: una función que trae UN Pokémon de la API con fetch + await.
 HU2: mostrarlo — reusan render de C09, envolviendo en [pokemon].
 HU3: conectan el buscador (input + botón + Enter).
 Si buscan algo que no existe, se rompe. Eso lo arreglamos en C12."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Lee el JSON" (tras Demo 1)
Muestra el JSON de un Pokémon y pregunta: "¿cómo accedes a su primer tipo?" (`pokemon.types[0].type.name`). Conecta con el destructuring de C09.

### Dinámica 2: "¿response o datos?" (en HU1)
"`fetch` te da `response`. ¿Ya tienes el Pokémon?" (No — falta `.json()`.) Refuerza la distinción respuesta vs cuerpo.

### Dinámica 3: "Traduce de .then a await" (en HU1)
Das una cadena con `.then` y piden reescribirla con `async/await`. Ven que es lo mismo, más legible.

---

## 💡 Ejemplos Listos para Usar

### La URL con el nombre interpolado
```javascript
const url = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;
```
"`toLowerCase` porque la API espera minúsculas. Template literal de C09 para armar la URL."

### Reusar render con un solo Pokémon
```javascript
render([pokemon]);   // render espera un array; envolvemos en [ ]
```
"No tocamos render. Solo le damos una lista de uno."

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| `pokemon` es `Promise {<pending>}` | Falta el segundo `await` (en `.json()`) | `const pokemon = await response.json()` |
| `await is only valid in async function` | Usaron `await` en una función sin `async` | Marcar la función con `async` |
| La búsqueda no hace nada | El `id` del input/botón no coincide | Verificar `#buscador` y `#btn-buscar` |
| Funciona "pikachu" pero no "Pikachu" | La API espera minúsculas | `nombre.toLowerCase()` en la URL |
| Pantalla en blanco al buscar algo raro | El nombre no existe (404) → falla | Es esperado; se maneja en C12 |
| `render` da error | Pasaron el objeto, no un array | `render([pokemon])` |

---

## ✅ Señales de Comprensión

**ENTIENDE cuando:**
- Explica que JSON es texto y `response.json()` lo convierte en objeto.
- Sabe por qué hay dos `await` (respuesta + parseo).
- Reescribe una cadena `.then` como `async/await`.
- Reconoce que reusa el render de C09 sin cambios.

**NECESITA AYUDA cuando:**
- Cree que `response` ya son los datos.
- Olvida un `await` y no entiende por qué tiene una promesa.
- Usa `await` sin `async`.
- No relaciona la forma del JSON con su dato local.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | HU1 | `buscarPokemon("ditto")` (vía `.then(console.log)`) imprime el objeto real de la API. |
| ~60' | HU2 | La página muestra la tarjeta de un Pokémon con datos reales (imagen + tipos). |
| ~90' | HU3 | Escribir un nombre + Enter/Buscar muestra ese Pokémon. Varios nombres funcionan. |

---

## 🧑‍🏫 Tips de Facilitación

- **Grupo callado:** abre el JSON en el navegador y que naveguen la estructura en voz alta.
- **Alguien ya sabía fetch:** pídele que explique la diferencia entre `response` y `response.json()`.
- **Terminan antes:** logro de lista inicial (`?limit=12`) o stats con barras.
- **Si la red falla en el aula:** ten a mano un Pokémon ya cargado en consola; el concepto se demuestra igual con `.then(console.log)`.
- **No adelantes el manejo de errores:** que vivan el fallo de "no existe" hoy; mañana (C12) lo resuelven. El dolor motiva la solución.

---

## ❓ Preguntas Frecuentes

**P: ¿`response.json()` es lo mismo que `JSON.parse`?**
R: Hacen algo parecido (texto JSON → objeto), pero `response.json()` es un método de `fetch` y es asíncrono. `JSON.parse` es síncrono y se usa para persistencia (M4). Hoy usamos el de fetch.

**P: ¿Por qué `await` dos veces?**
R: Dos operaciones que tardan: que llegue la respuesta (`fetch`) y que se lea/convierta su cuerpo (`.json()`). Cada una es una promesa.

**P: ¿Necesito una API key para PokeAPI?**
R: No. Es gratuita y abierta. Por eso la elegimos: cero fricción.

**P: ¿`async/await` reemplaza a `.then`?**
R: No lo reemplaza; es otra forma de lo mismo, más legible para código secuencial. `.then` sigue siendo útil. Saber ambos es lo profesional.

---

## 🔗 Conexiones del Curriculum

### Construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C09 | render, destructuring | Se reusa el render; el JSON tiene la misma forma |
| C10 | promesas, `.then`/`.catch` | `fetch` devuelve una promesa; `await` la consume |
| C08 | Tailwind | Estiliza el buscador y la tarjeta |

### Conexión con C12

Al cerrar:

> "Hoy la Pokédex trae datos reales. Pero si buscas un nombre que no existe, se rompe — y una app real no puede romperse así. En C12, la última clase del módulo, aprenden a **manejar errores** con `try/catch`, mostrar estados de carga y error, y cierran el proyecto con un README."

---

## 🪞 Reflexión Post-Clase

- ¿Cuántos olvidaron el segundo `await` y vieron una promesa? Es el tropiezo clásico.
- ¿La demo del JSON en el navegador hizo tangible "de dónde vienen los datos"?
- ¿Vivieron el fallo al buscar algo inexistente? Eso prepara C12.
- ¿Alguien dijo "esto es como cualquier app que carga datos"? Captaron el valor real.
