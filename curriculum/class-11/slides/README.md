# Clase 11 — async/await, fetch y JSON
### Code 201 · Módulo 3 · Proyecto: Pokédex

---

## 🎯 Objetivo de la Clase

- Entender **JSON** como formato de intercambio.
- Pedir datos reales con **`fetch`** + **`response.json()`**.
- Escribir asincronía legible con **`async/await`**.

> La Pokédex deja los datos locales y consume la **PokeAPI** real.

---

## 🧬 ¿Qué es JSON?

```json
{
  "name": "pikachu",
  "types": [ { "type": { "name": "electric" } } ]
}
```

* Es **texto** con la forma de un objeto JS.
* Las APIs hablan JSON.
* `response.json()` lo convierte en objeto usable.

> Misma forma que tu `pokemonLocal` de C09.

---

## 🌐 fetch — pedir datos a una URL

```javascript
const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
```

* Devuelve una **Promesa** (como las de C10).
* `response` es la respuesta cruda del servidor.
* Falta **leer su cuerpo** para tener los datos.

---

## 🔑 async / await

```javascript
async function buscarPokemon(nombre) {
  const response = await fetch(url);        // espera la respuesta
  const pokemon  = await response.json();   // espera el parseo
  return pokemon;
}
```

* `async` habilita `await` dentro.
* `await` **pausa** hasta que la promesa resuelve.
* Más legible que `.then` encadenado.

---

## 🔁 ¿Por qué DOS await?

```
await fetch(url)        → esperar que LLEGUE la respuesta
await response.json()   → esperar que se LEA y convierta
```

> Dos operaciones que tardan = dos promesas = dos `await`.

---

## 🖼️ Mostrarlo: reusar C09

```javascript
async function mostrarPokemon(nombre) {
  const pokemon = await buscarPokemon(nombre);
  render([pokemon]);   // render espera un array
}
```

> No reescribes `crearTarjeta` ni `render`: el dato tiene la misma forma.

---

## 🔍 Conectar el buscador

```javascript
boton.addEventListener("click", function () {
  const nombre = input.value.trim();
  if (nombre !== "") mostrarPokemon(nombre);
});
```

> Input + botón (+ Enter) → Pokémon real en pantalla.

---

## ⚙️ Estructura del Lab

| HU | Tiempo | Contenido |
|---|---|---|
| **HU1** | ~30 min | `buscarPokemon` con `fetch` + `await` |
| **HU2** | ~30 min | Mostrar el Pokémon (reusa render C09) |
| **HU3** | ~30 min | Conectar input + botón + Enter |

> Datos: **PokeAPI** real (sin clave).

---

## 🤔 Discusión

- ¿Por qué JSON y no otro formato para las APIs?
- ¿Qué pasa si buscas un Pokémon que no existe? (👀 C12)
- ¿En qué se parece esto a cómo una app de clima trae el pronóstico?

> **Idea clave:** consumir APIs es el pan de cada día de un dev web.

---

## ➡️ Lo que viene (C12)

Si buscas "pikachuu", la app **se rompe**. Una app real no puede romperse así.

> En C12: manejar errores con `try/catch`, estados de carga, y cerrar el módulo.

---

## ¡Gracias! 🙌
### Code 201 · Enter Tech School
