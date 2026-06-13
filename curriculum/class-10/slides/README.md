# Clase 10 — Asincronía y Promesas
### Code 201 · Módulo 3 · Proyecto: Pokédex

---

## 🎯 Objetivo de la Clase

- Distinguir código **sincrónico** de **asincrónico**.
- Usar `setTimeout` para simular una operación que tarda.
- Crear y consumir una **Promesa** (`.then` / `.catch`).

> Aún sin red: simulamos la demora sobre el array local.

---

## 🍕 La idea: pedir una pizza

```
Sincrónico:   te congelas en la puerta hasta que llega 🧍
Asincrónico:  sigues con tu vida; reaccionas cuando llega 🎉
```

> Una **Promesa** es el ticket de algo que aún no llega.

---

## ⏱️ setTimeout — "hazlo más tarde"

```javascript
contenedor.innerHTML = "Cargando…";   // ahora

setTimeout(function () {
  render(pokemonLocal);               // 1.5 s después
}, 1500);

console.log("sigo trabajando");       // se imprime ANTES
```

> JavaScript **no se congela**: programa el render y sigue.

---

## 🎟️ Una Promesa

```javascript
function obtenerPokemones() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(pokemonLocal);   // ✅ los datos llegaron
      // reject(new Error("falló"));  // ❌ algo salió mal
    }, 1500);
  });
}
```

> Devuelve una **promesa** de los datos, no los datos.

---

## 🚦 Los 3 estados

```
pending     ⏳  esperando (el setTimeout corre)
fulfilled   ✅  resolve(...) → entrega el valor
rejected    ❌  reject(...)  → señala el error
```

> Una promesa empieza en `pending` y termina en uno de los otros dos.

---

## 🔌 Consumir: .then / .catch

```javascript
obtenerPokemones()
  .then(function (lista) {     // ✅ cuando resolve
    render(lista);
  })
  .catch(function (error) {    // ❌ cuando reject
    contenedor.innerHTML = `Error: ${error.message}`;
  });
```

> `.then` = camino feliz · `.catch` = camino de error.

---

## ⚙️ Estructura del Lab

| HU | Tiempo | Contenido |
|---|---|---|
| **HU1** | ~30 min | `setTimeout`: "Cargando…" → tarjetas |
| **HU2** | ~30 min | `new Promise` que resuelve los datos |
| **HU3** | ~30 min | Consumir con `.then` / `.catch` |

> Reusas `render()` y `crearTarjeta()` de C09 sin cambios.

---

## 🤔 Discusión

- ¿Por qué una app no debe "congelarse" mientras carga datos?
- ¿Qué ventaja tiene `.then`/`.catch` sobre callbacks anidados?
- ¿Por qué simulamos la demora antes de usar la API real?

> **Idea clave:** la asincronía es cómo el software espera sin bloquearse.

---

## ➡️ Lo que viene (C11)

Hoy la promesa era **simulada**. En C11 la reemplazas por una **real**: `fetch` a la PokeAPI.

> Por fuera se consume igual; por dentro, datos de internet de verdad.

---

## ¡Gracias! 🙌
### Code 201 · Enter Tech School
