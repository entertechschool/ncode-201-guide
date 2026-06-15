# Laboratorio 10: Asincronía y Promesas

En C09 los datos estaban **listos al instante** en un array. Pero una API real **tarda** en responder — medio segundo, a veces dos. Hoy aprendes cómo JavaScript maneja algo que **no llega de inmediato**: la **asincronía**, con `setTimeout` y **Promesas**. Aún no tocamos la red: simulamos la demora sobre tu array local, para entender el concepto sin el ruido de internet.

> ⏱️ **Checkpoints**: 3 momentos de validación (~30, ~60, ~90 min).
>
> 🧠 Reusas tu `render()` y `crearTarjeta()` de C09 **sin cambios**. Lo nuevo es **cómo y cuándo** llegan los datos al render.

## 🎯 Objetivos de Aprendizaje

1. Distinguir código **sincrónico** (bloqueante) de **asincrónico** (no bloqueante).
2. Usar `setTimeout` para simular una operación que tarda.
3. Crear y consumir una **Promesa** con `.then()` y `.catch()`.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Sincrónico** | Una instrucción tras otra; cada una **bloquea** hasta terminar. |
| **Asincrónico** | Una operación "tarda" y JavaScript **sigue trabajando** mientras tanto. |
| **`setTimeout`** | Ejecuta una función **después** de N milisegundos. |
| **Promesa** | Objeto que representa un **valor futuro**: algo que llegará (o fallará) luego. |
| **Estados** | Una promesa está `pending` (esperando), `fulfilled` (resuelta) o `rejected` (falló). |
| **`.then` / `.catch`** | `.then(cb)` corre cuando la promesa se resuelve; `.catch(cb)` cuando falla. |

## ⚙️ Setup Inicial

1. **Repositorio:** sigue en `pokedex`. Crea la rama `lab10-asincronia`.
2. **Punto de partida:** tu `js/app.js` de C09 con `pokemonLocal`, `crearTarjeta()` y `render()`. **No borres nada** — hoy construyes encima.

> 🧪 **Idea mental antes de empezar:** imagina que pides una pizza. No te quedas congelado en la puerta esperando (sincrónico); sigues con tu vida y, **cuando llega**, reaccionas (asincrónico). Una **Promesa** es el "ticket" de esa pizza que aún no llega.

---

## 📋 Historias de Usuario

### HU1: Simular la demora con `setTimeout`

> *"Como usuario, quiero ver un mensaje de 'Cargando…' y que las tarjetas aparezcan un momento después, como en una app real que espera datos."*

**Criterios de Aceptación:**
- Al cargar la página, primero se ve un mensaje de "Cargando…".
- Tras una breve espera, el mensaje desaparece y aparecen las tarjetas.
- Durante la espera, la página no se congela (sigue respondiendo).

`setTimeout(funcion, ms)` corre la función **después** de los milisegundos indicados. Mientras tanto, el resto del programa **no se congela**:

```javascript
const contenedor = document.getElementById("resultado");

// se ve de inmediato
contenedor.innerHTML = `<p class="col-span-full text-center text-slate-500">Cargando…</p>`;

// se ejecuta 1.5 s después
setTimeout(function () {
  render(pokemonLocal);
}, 1500);
```

> 💡 Para comprobar que NO se bloquea, agrega un `console.log("sigo trabajando")` **después** del `setTimeout`. Verás que se imprime **antes** de que aparezcan las tarjetas. JavaScript no se quedó esperando.

- **Checkpoint 1 (~30 min):** la página muestra "Cargando…" y, tras la demora, las tarjetas. Entiendes que JavaScript siguió trabajando durante la espera.

---

### HU2: Envolver los datos en una Promesa

> *"Como desarrollador, quiero una función que me 'prometa' los datos del Pokémon y me los entregue cuando estén listos, como hará la API real en C11."*

**Criterios de Aceptación:**
- Al llamar la función, devuelve una **promesa**, no el array directamente.
- La promesa empieza "pendiente" y, tras la espera, se **resuelve** entregando la lista de Pokémon.

Una **Promesa** es un objeto que representa un valor que **llegará después**. Se crea con `new Promise`, que recibe dos "palancas": `resolve` (los datos llegaron bien) y `reject` (algo falló):

```javascript
function obtenerPokemones() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(pokemonLocal);   // ✅ "los datos están listos, aquí van"
      // reject(new Error("No se pudo cargar"));  // ❌ así se señalaría un fallo
    }, 1500);
  });
}
```

* Mientras el `setTimeout` corre, la promesa está **`pending`** (esperando).
* Al llamar `resolve(...)`, pasa a **`fulfilled`** y entrega el valor.
* Si llamaras `reject(...)`, pasaría a **`rejected`**.

> 💡 `obtenerPokemones()` **no devuelve los datos directamente** — devuelve una *promesa* de ellos. Por eso en HU3 hay que "abrir" esa promesa para usarlos.

- **Checkpoint 2 (~60 min):** en consola, `console.log(obtenerPokemones())` muestra un objeto `Promise {<pending>}`. Confirma que la función entrega una promesa, no el array.

---

### HU3: Consumir la Promesa con `.then()` y `.catch()`

> *"Como usuario, quiero que las tarjetas se muestren cuando la promesa se resuelve, y un mensaje claro si algo falla."*

**Criterios de Aceptación:**
- Cuando la promesa se resuelve, las tarjetas aparecen en pantalla.
- Cuando la promesa falla, en lugar de las tarjetas se muestra un mensaje de error claro.
- La app distingue ambos caminos (éxito y error) sin romperse.

Para usar el valor de una promesa se encadena `.then()` (éxito) y `.catch()` (error):

```javascript
function cargar() {
  contenedor.innerHTML = `<p class="col-span-full text-center text-slate-500">Cargando…</p>`;

  obtenerPokemones()
    .then(function (lista) {        // ✅ corre cuando resolve(...)
      render(lista);
    })
    .catch(function (error) {       // ❌ corre cuando reject(...)
      contenedor.innerHTML = `<p class="col-span-full text-center text-red-600">Error: ${error.message}</p>`;
    });
}

cargar();
```

**Probar el camino de error:** en `obtenerPokemones`, comenta el `resolve(...)` y descomenta el `reject(new Error("No se pudo cargar"))`. Recarga: en vez de tarjetas verás el mensaje rojo. **El `.catch` atrapó el fallo.** Vuelve a dejar el `resolve` activo al terminar.

- **Checkpoint 3 (~90 min):** con `resolve`, ves "Cargando…" → tarjetas. Al cambiar a `reject`, ves "Cargando…" → mensaje de error. Distingues los dos caminos de una promesa.

---

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1 — Demora aleatoria:** usa `Math.random() * 2000` como tiempo del `setTimeout` para simular una red inestable.
- **Logro 2 — Fallo aleatorio:** que la promesa haga `reject` ~1 de cada 3 veces (`Math.random() < 0.33`) para ver ambos caminos sin editar el código.
- **Logro 3 — Spinner real:** reemplaza el texto "Cargando…" por un spinner animado con clases de Tailwind (`animate-spin`).

## 📝 Instrucciones de Entrega

1. **Despliegue:** publica en GitHub Pages y comparte el enlace.
2. **Entrega Final:** URL del repositorio + URL del sitio desplegado.

> ℹ️ Sin README todavía — lo agregarás en C12.
