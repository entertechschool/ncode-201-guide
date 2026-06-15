# Clase 11 — async/await y búsqueda en la API
### Code 201 · Módulo 3 · Proyecto: Pokédex

---

## 🎯 Objetivo de la Clase

- **Reformular** el `.then` de C10 con **`async/await`**.
- **Buscar** un Pokémon por nombre en la API.
- **Agregar** lo buscado a tu colección (`pokedex`).

> Misma lógica de C10, más legible — y el buscador ahora va a la API.

---

## 🔁 .then → async/await

```javascript
// C10
fetch(url).then(r => r.json()).then(data => { ... });

// C11 — mismo resultado
const response = await fetch(url);
const data     = await response.json();
```

> No es nuevo: es la **misma promesa**, escrita como pasos.

---

## 🔑 async / await

```javascript
async function obtenerPokemon(idONombre) {
  const response = await fetch(`.../pokemon/${idONombre}`);
  return response.json();
}
```

* `async` habilita `await` dentro.
* `await` **pausa** hasta que la promesa resuelve.
* Más legible que `.then` encadenado.

---

## ⚡ Reformular la carga

```javascript
async function cargarPokedex() {
  const datos = await Promise.all(ids.map(obtenerPokemon));
  pokedex = datos.map(adaptarPokemon);
  render(pokedex);
}
```

> El `Promise.all` de C10, ahora con `await`.

---

## 🔍 De filtrar a buscar

| C10 | C11 |
|---|---|
| filtra `pokedex` (lo que ya tienes) | consulta la **API** por nombre |
| solo lo de la rejilla | **cualquier** Pokémon |

```javascript
async function buscarPokemon(nombre) {
  const data = await obtenerPokemon(nombre.toLowerCase());
  return adaptarPokemon(data);
}
```

---

## ➕ Agregar a la Pokédex

```javascript
async function agregarPokemon(nombre) {
  const pokemon = await buscarPokemon(nombre);
  if (!pokedex.some(p => p.nombre === pokemon.nombre)) {
    pokedex.push(pokemon);     // crece tu colección
  }
  render(pokedex);
}
```

> `pokedex` es el **estado** de tu app: crece según lo que buscas.

---

## ⚙️ Estructura del Lab

| HU | Tiempo | Contenido |
|---|---|---|
| **HU1** | ~30 min | Reformular la carga con `async/await` |
| **HU2** | ~30 min | Buscar por nombre en la API |
| **HU3** | ~30 min | Agregar a la Pokédex (sin duplicar) |

---

## 🤔 Discusión

- ¿Por qué `async/await` se lee mejor que `.then` encadenado?
- ¿Qué diferencia hay entre filtrar lo local y buscar en la API?
- ¿Qué pasa si buscas un Pokémon que no existe? (👀 C12)

> **Idea clave:** el estado de tu app crece según lo que el usuario hace.

---

## ➡️ Lo que viene (C12)

Si buscas "pikachuu", la app **se rompe**. Una app real no puede.

> En C12: manejar errores con `try/catch`, estados de carga, y cerrar el módulo.

---

## ¡Gracias! 🙌
### Code 201 · Enter Tech School
