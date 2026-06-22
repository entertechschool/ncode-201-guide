# Laboratorio 11: async/await y búsqueda en la API

En C10 tu Pokédex ya carga su rejilla desde la web, pero el código usa `.then` encadenado y el buscador solo **filtra** lo que ya tienes. Hoy haces dos cosas: **reformulas** ese código con **`async/await`** (la forma moderna y legible de trabajar con promesas) y conviertes el buscador en una **búsqueda real contra la API**, para traer Pokémon que **no** están en tu rejilla y sumarlos a tu colección.

> ⏱️ **Checkpoints**: 3 momentos de validación (~30, ~60, ~90 min).
>
> 🌐 Necesitas **conexión a internet** (PokeAPI). Reusas `crearTarjeta`, `render`, `adaptarPokemon` y el array `pokedex` de C10.

## 🎯 Objetivos de Aprendizaje

1. **Reformular** código de promesas (`.then`) a **`async/await`**, entendiendo que son lo mismo, más legible.
2. **Buscar** un recurso específico en una API por nombre con `fetch` + `await`.
3. Hacer **crecer** la Pokédex agregando el Pokémon buscado a la rejilla.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **`async` / `await`** | `async` marca una función asíncrona; `await` **pausa** hasta que una promesa resuelva y entrega el valor directo. |
| **Azúcar sintáctico** | `async/await` no reemplaza a las Promesas: es **otra forma de escribir lo mismo**, más parecida a código secuencial. |
| **Búsqueda por nombre** | Pedir a la API un recurso concreto (`/pokemon/{nombre}`), no una lista fija. |
| **Hacer crecer el estado** | Agregar el resultado al array `pokedex` y volver a renderizar. |

## ⚙️ Setup Inicial

1. **Repositorio:** sigue en `pokedex`. Crea la rama `lab11-async`.
2. **Punto de partida:** tu app de C10 (carga la rejilla con `.then`/`Promise.all`, tiene `adaptarPokemon`, `crearTarjeta`, `render` y el array `pokedex`).
3. **Agrega un botón** de búsqueda junto a tu `<input id="buscador">`:

   ```html
   <div class="max-w-md mx-auto flex gap-2 mb-6">
     <input id="buscador" type="text" placeholder="Busca un Pokémon (ej. charizard)"
            class="flex-1 p-2 rounded-lg border border-slate-300">
     <button id="btn-buscar" class="px-4 py-2 bg-yellow-400 font-semibold rounded-lg hover:bg-yellow-500">
       Buscar
     </button>
   </div>
   ```

---

## 📋 Historias de Usuario

### HU1: Reformular la carga con `async/await`

> *"Como desarrollador, quiero reescribir la carga de la rejilla con `async/await`, para que el código se lea como una secuencia clara de pasos."*

**Criterios de Aceptación:**
- La rejilla sigue cargándose desde la API al abrir la página (mismo resultado que C10).
- El código de carga usa `async/await` en lugar de `.then` encadenado.

`async/await` es **azúcar sobre las promesas** de C10: `await` pausa la función hasta que la promesa resuelve y te entrega el valor directo, sin `.then`. Compara:

```javascript
// C10 (con .then)
fetch(url).then(r => r.json()).then(data => { ... });

// C11 (con async/await) — mismo resultado, se lee de arriba a abajo
const response = await fetch(url);
const data = await response.json();
```

Reescribe tu carga de C10 así:

```javascript
async function obtenerPokemon(idONombre) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idONombre}`);
  return response.json();
}

async function cargarPokedex() {
  const nombres = ["bulbasaur", "charmander", "squirtle", "pikachu", "jigglypuff", "gengar"];
  const datos = await Promise.all(nombres.map(obtenerPokemon));   // varios en paralelo, con await
  pokedex = datos.map(adaptarPokemon);
  render(pokedex);
}

cargarPokedex();
```

> 💡 `await Promise.all(...)` espera a que **todas** terminen — es el `Promise.all` de C10, ahora con `await`. El `.then` no desapareció: `async/await` lo escribe distinto.

- **Checkpoint 1 (~30 min):** la rejilla carga igual que en C10, pero tu código de carga ahora usa `async/await`. Funcionalmente idéntico, más legible.

---

### HU2: Buscar y traer el Pokémon

> *"Como usuario, quiero escribir un nombre y traer ese Pokémon desde la API —aunque no esté en mi rejilla— para verlo, presionando Buscar o Enter."*

**Criterios de Aceptación:**
- Escribir un nombre y pulsar **Buscar** (o **Enter**) muestra ese Pokémon, aunque no estuviera en la rejilla.
- El buscador ya **no filtra** solo lo cargado: ahora **consulta la API**.
- El buscador ignora una búsqueda vacía.

En C10 el buscador filtraba `pokedex` (lo que ya tenías). Ahora consulta la API por nombre y **muestra** el resultado. **Reemplaza el listener de filtro de C10** por una búsqueda:

```javascript
const boton = document.getElementById("btn-buscar");   // el #buscador ya lo tienes de C09

async function buscarPokemon(nombre) {
  const data = await obtenerPokemon(nombre.toLowerCase());   // reusa obtenerPokemon de HU1
  return adaptarPokemon(data);
}

// muestra la tarjeta del Pokémon encontrado
function mostrarResultado(pokemon) {
  contenedor.innerHTML = "";
  contenedor.appendChild(crearTarjeta(pokemon));
}

async function mostrarBusqueda(nombre) {
  const pokemon = await buscarPokemon(nombre);
  mostrarResultado(pokemon);
}

boton.addEventListener("click", function () {
  const nombre = buscador.value.trim();
  if (nombre !== "") mostrarBusqueda(nombre);
});

// Buscar también con Enter
buscador.addEventListener("keydown", function (event) {
  if (event.key === "Enter") boton.click();
});
```

> 💡 Mismo buscador, otra fuente: antes filtraba lo que **ya tenías**; ahora trae de la **API** y lo muestra. Se dispara con clic/Enter (no en cada tecla) para no saturar la API.

- **Checkpoint 2 (~60 min):** escribes "charizard" (que no estaba en la rejilla), presionas Enter y aparece su tarjeta, traída de la API.

---

### HU3: Capturar el Pokémon

> *"Como usuario, quiero un botón **Capturar** en el Pokémon que busqué, para sumarlo a mi Pokédex cuando yo decida."*

**Criterios de Aceptación:**
- La tarjeta del Pokémon buscado tiene un botón **"Capturar"**.
- Al pulsar **Capturar**, el Pokémon se **agrega** a la rejilla (no reemplaza a los demás).
- Si el Pokémon ya estaba en la Pokédex, **no se duplica**.

Dale al resultado un botón **Capturar** que lo sume a tu colección. `crearTarjeta` es de C09 (no la tocamos), pero **devuelve un nodo**, así que le agregas el botón a ese nodo — y así el botón aparece **solo** en el resultado de búsqueda, no en las tarjetas de la rejilla.

Agrega `capturar` y modifica `mostrarResultado` para que la tarjeta lleve el botón:

```javascript
function capturar(pokemon) {
  if (!pokedex.some(p => p.nombre === pokemon.nombre)) {
    pokedex.push(pokemon);   // hace crecer tu colección
  }
  render(pokedex);           // vuelve la colección completa, ya con el nuevo
  buscador.value = "";
}

function mostrarResultado(pokemon) {
  const tarjeta = crearTarjeta(pokemon);            // la tarjeta de C09 (un nodo)

  const boton = document.createElement("button");
  boton.textContent = "⚡ Capturar";
  boton.className = "mt-2 w-full bg-yellow-400 font-semibold rounded-lg py-1 hover:bg-yellow-500";
  boton.addEventListener("click", () => capturar(pokemon));
  tarjeta.appendChild(boton);                       // el botón SOLO en el resultado

  contenedor.innerHTML = "";
  contenedor.appendChild(tarjeta);
}
```

> 💡 `pokedex` es el **estado** de tu app: la lista de lo que tienes. Capturar la hace **crecer** (sin duplicar, gracias a `.some()`), y `render(pokedex)` refleja ese estado. (Persistir la colección entre visitas es M4.)

- **Checkpoint 3 (~90 min):** buscas "charizard" → su tarjeta con el botón **Capturar**; al pulsarlo, charizard **se une** a la rejilla; lo buscas otra vez y al capturar **no se duplica**.

---

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1 — Buscar por número:** la API acepta IDs (`/pokemon/25`). Permite buscar por nombre **o** número.
- **Logro 2 — Stats:** extiende `adaptarPokemon` para incluir `data.stats` y muestra las estadísticas como barras con Tailwind.
- **Logro 3 — Quitar de la Pokédex:** un botón en cada tarjeta que la saque de `pokedex` y re-renderice.

## 📝 Instrucciones de Entrega

1. **Despliegue:** publica en GitHub Pages y comparte el enlace.
2. **Entrega Final:** URL del repositorio + URL del sitio desplegado.

> ⚠️ Si buscas un nombre que **no existe** (ej. "pikachuu"), la app fallará feo. **Eso es a propósito** — en C12 lo manejas con `try/catch`.
>
> ℹ️ Sin README todavía — lo agregarás en C12, la última clase del módulo.
