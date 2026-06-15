# Clase 10 — Datos desde la web: fetch, Promesas y JSON
### Code 201 · Módulo 3 · Proyecto: Pokédex

---

## 🎯 Objetivo de la Clase

- Entender la **asincronía**: los datos de una API **tardan**.
- Pedir datos con **`fetch`** y leerlos como **JSON** (`.then`/`.catch`).
- Cargar la rejilla desde la API y traer varios con **`Promise.all`**.

> Tu Pokédex deja el array local y empieza a vivir de la web.

---

## 🌐 De local a la web

```
C09:  pokemonLocal (array fijo)   → listo al instante
C10:  fetch a la PokeAPI          → tarda (asincronía)
```

> Los datos de internet no llegan al instante. JS **no se congela** esperándolos.

---

## 🧬 ¿Qué es JSON?

```json
{
  "name": "pikachu",
  "sprites": { "front_default": "https://.../25.png" },
  "types": [ { "type": { "name": "electric" } } ]
}
```

* Es **texto** con forma de objeto JS.
* Las APIs hablan JSON.
* ⚠️ **NO** es tu `{ nombre, imagen, tipos }`: está **anidado**.

---

## 🎟️ fetch devuelve una Promesa

```javascript
contenedor.innerHTML = "Cargando…";

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => response.json())   // JSON → objeto JS
  .then(data => console.log(data))     // los datos, cuando LLEGAN
  .catch(() => mostrarError());
```

> `fetch` = "ticket" por datos que llegarán. `.then` reacciona cuando llegan.

---

## 🔄 Adaptar la estructura

La API da su forma (anidada). La traduces a la limpia de C09:

```javascript
function adaptarPokemon(data) {
  return {
    nombre: data.name,
    imagen: data.sprites?.front_default ?? "...",
    tipos:  data.types.map(t => t.type.name)
  };
}
```

> No controlas la API — **te adaptas a ella**. Así reusas `crearTarjeta`.

---

## ⚡ Varios a la vez: Promise.all

```javascript
const promesas = ids.map(id =>
  fetch(`.../pokemon/${id}`).then(r => r.json())
);

Promise.all(promesas)
  .then(datos => render(datos.map(adaptarPokemon)));
```

> `Promise.all` espera a que **todas** terminen. En paralelo = lo que tarda el más lento.

---

## 🔍 El buscador de C09 sigue vivo

```javascript
buscador.addEventListener("input", function () {
  const filtrados = pokedex.filter(p => p.nombre.includes(buscador.value.toLowerCase()));
  render(filtrados);
});
```

> Solo cambia la fuente: antes el array local, ahora la rejilla cargada de la API.

---

## ⚙️ Estructura del Lab

| HU | Tiempo | Contenido |
|---|---|---|
| **HU1** | ~30 min | `fetch` un Pokémon + JSON (los datos tardan) |
| **HU2** | ~30 min | Adaptar la estructura + mostrar la tarjeta |
| **HU3** | ~30 min | `Promise.all` (rejilla) + reconectar el filtro |

> Datos: **PokeAPI** real (sin clave).

---

## 🤔 Discusión

- ¿Por qué los datos de una API no llegan al instante?
- ¿Por qué la API no te da los datos como TÚ los quieres?
- ¿Qué ganas cargando en paralelo en vez de uno por uno?

> **Idea clave:** consumir datos externos es el pan de cada día de una app web.

---

## ➡️ Lo que viene (C11)

Hoy consumiste con `.then`. Funciona, pero se puede leer mejor.

> En C11: **reformulas** con `async/await` y agregas **buscar** cualquier Pokémon en la API.

---

## ¡Gracias! 🙌
### Code 201 · Enter Tech School
