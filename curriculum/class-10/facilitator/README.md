# Guía del Facilitador — Clase 10: Datos desde la web (fetch, Promesas y JSON)

> Tiempo de lectura: 8 minutos | Módulo 3 · Clase 10 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Asincronía** (NUEVO): los datos de una API **tardan** en llegar (la red no es inmediata) y JavaScript **no se congela** esperándolos — sigue trabajando y reacciona cuando llegan. Es el cambio mental central.
- **`fetch(url)`** (NUEVO): pide datos a una URL; devuelve una **Promesa** (un "ticket" por datos futuros). Se consume con `.then`/`.catch`.
- **JSON + `response.json()`** (NUEVO): el formato de texto en que viaja la respuesta. `response.json()` lo convierte en objeto JS. Importante: la forma de la API **no** es la forma limpia de C09.
- **Función adaptadora** (NUEVO): traduce la estructura anidada de la API (`sprites.front_default`, `types[].type.name`) a `{ nombre, imagen, tipos }`, para reusar `crearTarjeta` sin tocarlo.
- **`Promise.all`** (NUEVO): cargar **varios** Pokémon en paralelo (un `fetch` por cada uno) y esperar a que todos terminen.

> 🔁 **`async/await` NO se enseña hoy.** Hoy se consume con `.then`. Es deliberado: en C11 se **reformula** ese mismo código con `async/await` (más legible). Si alguien lo pregunta, dile que llega la próxima clase.

---

## 🔗 Analogías Útiles

**Asincronía ⟷ Pedir comida a domicilio:** llamas y sigues con tu vida; no te quedas paralizado en la puerta. Cuando llega, reaccionas. La red tarda igual que el repartidor.

**`fetch`/Promesa ⟷ Ticket de pedido:** `fetch` te da un papelito (la promesa) ahora; la comida (los datos) llega después. `.then` es "cuando llegue, haz esto".

**JSON ⟷ Formulario estándar:** el servidor te manda los datos en un formato fijo (JSON), como un formulario lleno. `response.json()` lo "digitaliza" a algo que tu programa puede manipular.

**Adaptador ⟷ Traductor:** la API habla "su idioma" (estructura anidada); el adaptador lo traduce a "tu idioma" (`{ nombre, imagen, tipos }`) para que tu `crearTarjeta` lo entienda.

**`Promise.all` ⟷ Mandar varios pedidos a la vez:** en vez de pedir un plato, esperar, pedir otro… pides todos juntos y esperas a que llegue el último. Mucho más rápido.

---

## 📚 Contexto Actual

### Por qué la asincronía se enseña con `fetch` real (y no simulada)

Los datos de una API **de verdad** tardan, así que la asincronía deja de ser un truco con `setTimeout` y pasa a ser lo que realmente pasa. Además, lo que se construye hoy **perdura**: la rejilla cargada de la web sigue siendo el corazón del proyecto en C11 y C12. No se tira nada.

### Por qué hace falta el adaptador

`crearTarjeta` (C09) espera `{ nombre, imagen, tipos }`. La API da una estructura anidada distinta. En vez de reescribir el render, se traduce la entrada con una función adaptadora. Es justo lo que hace un dev real: mapear la respuesta de una API a su propio modelo.

### Por qué `Promise.all`

La rejilla necesita varios Pokémon, y cada uno es un `fetch`. Pedirlos uno por uno (secuencial) sería lento; `Promise.all` los pide en paralelo. Es un patrón cotidiano en apps reales.

**Fuentes:** [MDN: Usar fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch){:target="_blank"}, [MDN: Promise.all](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Refuerzo + disparador | 15 min | Render de C09. "¿Y si los datos están en internet, no en tu código?" |
| Debate Técnico | 30 min | API, JSON, asincronía, Promesas. |
| Demo | 15 min | El JSON real de PokeAPI + un `fetch` que carga un Pokémon. |
| Lab (HU1-HU3) | 100 min | HU1 `fetch`+JSON · HU2 adapter+render · HU3 `Promise.all`+filtro |
| Cierre | 20 min | Síntesis + puente a `async/await` (C11). |

---

## 🎯 Momentos Clave de la Clase

### Demo 1 — el JSON real en el navegador (3 min)
Abre `https://pokeapi.co/api/v2/pokemon/pikachu`. "Esto es lo que tu app va a recibir: JSON." Señala lo **anidado** (`sprites.front_default`, `types[].type.name`). "NO es el objeto limpio de C09 — por eso habrá que adaptarlo."

### Demo 2 — "los datos tardan" (4 min)
```javascript
console.log("antes");
fetch(url).then(r => r.json()).then(d => console.log("datos", d));
console.log("después");
```
Pregunta el orden: imprime `antes`, `después`, y al final `datos`. "JS no esperó al fetch — siguió. Eso es asincronía."

### Demo 3 — uno → muchos (3 min)
Muestra un `fetch` (uno) y luego `Promise.all` de varios. "Para llenar la rejilla necesitas varios; `Promise.all` los trae a la vez."

### Transición al Lab
```
"HU1: traen UN Pokémon de la API y lo ven en consola (tarda).
 HU2: lo adaptan a la forma de C09 y lo muestran como tarjeta.
 HU3: con Promise.all llenan la rejilla, y reconectan el buscador.
 Al final: su Pokédex carga de la web."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Ordena la salida" (tras Demo 2)
Tres `console.log` con un `fetch` en medio. Que predigan el orden. Discute por qué los datos van al final.

### Dinámica 2: "Lee el JSON" (tras Demo 1)
Muestra el JSON y pregunta: "¿cómo accederías a la imagen?" (`data.sprites.front_default`). Eso justifica el adaptador.

### Dinámica 3: "¿uno o varios?" (en HU3)
"Si necesitas 6 Pokémon, ¿cuántos `fetch` haces? ¿Cómo esperas a que terminen todos?" → `Promise.all`.

---

## 💡 Ejemplos Listos para Usar

### Los dos `.then`
```javascript
fetch(url)
  .then(r => r.json())   // 1. convierte la respuesta a objeto
  .then(d => ...)        // 2. usa los datos
```
"El primero lee/convierte; el segundo ya tiene los datos."

### Reusar el render con el adaptador
```javascript
render([adaptarPokemon(data)]);   // API → forma limpia → render de C09
```
"No tocas `render`. Adaptas la entrada."

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| `data` es `Promise {<pending>}` | Olvidaron el `.then(r => r.json())` o devolverlo | Encadenar `.then(r => r.json())` |
| Imagen rota / tipos `[object Object]` | Pasaron `data` crudo a `render` sin adaptar | `render([adaptarPokemon(data)])` |
| Pantalla vacía, nada carga | Sin internet, o la URL mal escrita | Revisar conexión y la URL exacta |
| La rejilla muestra solo 1 | No usaron `Promise.all` con varios `fetch` | `Promise.all(ids.map(...))` |
| El buscador no filtra | Sigue apuntando a `pokemonLocal` (ya no existe) | Cambiarlo a `pokedex` (la rejilla cargada) |
| `Promise.all` no resuelve | Alguna promesa nunca termina / URL inválida | Verificar cada `fetch`/URL |

---

## ✅ Señales de Comprensión

**ENTIENDE cuando:**
- Explica que los datos de la API tardan y que `.then` corre cuando llegan.
- Sabe por qué hay dos `.then` (convertir + usar).
- Reconoce que la API da otra estructura y por eso adapta.
- Entiende que `Promise.all` espera a que todas las promesas terminen.

**NECESITA AYUDA cuando:**
- Cree que `fetch` da los datos al instante (en la línea siguiente).
- Pasa `data` crudo a `render` y ve la tarjeta rota.
- Hace los `fetch` uno por uno sin `Promise.all`.
- Deja el buscador apuntando a `pokemonLocal`.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | HU1 | En consola aparece el objeto real de un Pokémon; vieron "Cargando…" antes (tarda). |
| ~60' | HU2 | La tarjeta de un Pokémon real aparece, idéntica a C09 pero con datos de la web. |
| ~90' | HU3 | La rejilla muestra 6 Pokémon de la API; el buscador filtra esa rejilla. |

---

## 🧑‍🏫 Tips de Facilitación

- **Grupo callado:** abre el JSON en el navegador y que naveguen la estructura en voz alta.
- **Alguien ya sabía fetch:** pídele que explique la diferencia entre `response` y `response.json()`.
- **Terminan antes:** logro de lista dinámica (`?limit=12`) o spinner animado.
- **Si la red falla en el aula:** ten un Pokémon ya cargado en consola; el concepto se demuestra con `.then(console.log)`.
- **No adelantes `async/await`:** hoy es `.then`. Mañana lo reformulan; el contraste es la lección de C11.

---

## ❓ Preguntas Frecuentes

**P: ¿Por qué no usamos `async/await` hoy?**
R: Para que primero entiendan la promesa "cruda" con `.then`. En C11 reescriben este mismo código con `async/await` y ven que es lo mismo, más legible.

**P: ¿`fetch` da los datos de inmediato?**
R: No. Da una **promesa**. Los datos llegan después (la red tarda) y se usan dentro del `.then`.

**P: ¿Por qué la API no me da los datos como yo los quiero?**
R: Porque tú no diseñas la API. Cada API tiene su estructura; tu trabajo es **adaptarla** a tu modelo. Eso hace `adaptarPokemon`.

**P: ¿Qué pasa si un `fetch` falla dentro de `Promise.all`?**
R: `Promise.all` se rechaza si **alguna** promesa falla. El manejo fino de errores se ve en C12; hoy basta un `.catch` general.

---

## 🔗 Conexiones del Curriculum

### Construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C09 | `render`, `crearTarjeta`, buscador, `.map`, `?.`/`??` | Se reusan; hoy los datos vienen de la API y se adaptan |

### Conexión con C11

Al cerrar:

> "Hoy tu Pokédex carga de la web con `.then`. Funciona, pero se puede leer como una receta más clara: en C11 **reformulan** este código con `async/await`, y además agregan **buscar cualquier Pokémon** en la API (no solo filtrar los que ya cargaste)."

---

## 🪞 Reflexión Post-Clase

- ¿Cuántos esperaban los datos "en la línea siguiente" al `fetch`? Ese es el salto mental clave.
- ¿La demo del JSON dejó claro por qué hace falta el adaptador?
- ¿Entendieron `Promise.all` como "todas a la vez"?
- ¿La rejilla de cada quien carga de la API y el buscador filtra? Ese es el éxito de la clase.
