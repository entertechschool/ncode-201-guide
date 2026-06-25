# Clase 12 — Manejo de Errores y Estados
### Code 201 · Módulo 3 (cierre) · Proyecto: Pokédex

---

## 🎯 Objetivo de la Clase

- Manejar errores con **`try/catch/finally`** y **`throw`**.
- Detectar respuestas fallidas con **`response.ok`** (404).
- Mostrar estados de UI y documentar con **Markdown**.

> Hacemos la Pokédex **robusta** y cerramos el módulo.

---

## 💥 El problema de C11

```javascript
// buscas "pikachuu" (no existe) → la app se ROMPE 💀
```

Una app real no puede romperse ante un error.

> Hoy: que falle **con gracia**.

---

## 🛡️ try / catch

```javascript
try {
  const response = await fetch(url);
  const data     = await response.json();
  render([adaptarPokemon(data)]);   // adaptarPokemon viene de C11
} catch (error) {
  mensaje.textContent = "Algo salió mal";
}
```

* `try` = código que podría fallar.
* `catch (error)` = lo atrapa; la app sigue viva.

---

## 🚩 fetch NO falla en 404

```javascript
if (!response.ok) {                       // 404, 500…
  throw new Error(`No se encontró "${nombre}"`);
}
```

* `fetch` solo falla si **no hay red**.
* Un 404 llega "ok=false" → hay que **revisarlo**.
* `throw` salta directo al `catch`.

---

## ♻️ finally — corre SIEMPRE

```javascript
spinner.classList.remove("hidden");   // ⏳ al empezar
try {
  // ... buscar
} catch (error) {
  // ... mostrar error
} finally {
  spinner.classList.add("hidden");    // ✅ pase lo que pase
}
```

> Éxito o error, el spinner siempre se oculta.

---

## 🎛️ Estados de UI

```
⏳ loading  → "Cargando…"
✅ success  → la tarjeta
❌ error    → "No se encontró…"
∅  empty    → "Busca un Pokémon 🔍"
```

> Una buena app siempre dice en qué estado está.

---

## 📄 Markdown — documentar el proyecto

```markdown
# Pokédex
Buscador que consume la PokeAPI.

## Tecnologías
- JavaScript (fetch, async/await)
- [PokeAPI](https://pokeapi.co/)
```

* `#` títulos · `**negrita**` · `- listas` · `[link](url)`
* Va en el `README.md` de tu repo.

---

## ⚙️ Estructura del Lab (evaluado)

| HU | Tiempo | Contenido |
|---|---|---|
| **HU1** | ~30 min | `try/catch` |
| **HU2** | ~30 min | `response.ok` + `throw` |
| **HU3** | ~30 min | estados + `finally` |
| 📄 | — | README en Markdown |

> Calificado con rúbrica (5 × 20 = 100).

---

## 🏁 Cierre del Módulo 3

```
C09  JS Moderno   → render de datos
C10  Asincronía   → Promesas
C11  fetch + JSON → datos REALES
C12  Errores      → app robusta + README
```

> De un array local a una app que consume una API y no se rompe.

---

## 🤔 Discusión Final

- ¿Cuándo capturar un error y cuándo dejarlo propagar?
- ¿Qué hace bueno a un mensaje de error?
- ¿Por qué `finally` y no poner la línea al final del `try`?

> **Reflexión:** el código que maneja errores es lo que separa un demo de un producto.

---

## ¡Gracias! 🙌
### Code 201 · Enter Tech School
