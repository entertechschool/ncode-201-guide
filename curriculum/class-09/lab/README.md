# Laboratorio 09: JavaScript Moderno y Render Dinámico

¡Bienvenido al primer laboratorio del **Módulo 3**! Durante las próximas 4 clases construirás una **Pokédex**: una app que busca Pokémon y muestra sus datos. Hoy montas la base con **JavaScript moderno (ES6+)** y aprendes a **generar HTML desde datos** — la habilidad que está detrás de toda app web.

> ⏱️ **Checkpoints**: 3 momentos de validación (~30, ~60, ~90 min).
>
> 🧠 **Hoy NO tocamos internet.** Trabajas con un **array local** de Pokémon (con la misma forma que tendrá la API real en C11). Así aíslas el *render* del *ruido* de la red.

## 🎯 Objetivos de Aprendizaje

1. Escribir JavaScript con **sintaxis moderna**: template literals, destructuring, spread y optional chaining.
2. **Generar elementos del DOM desde datos** con `createElement` + `appendChild` (el patrón render).
3. Renderizar una lista de objetos como tarjetas, sin escribir el HTML a mano.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Template literal** | String con backticks `` ` `` que permite interpolar valores con `${...}` y escribir varias líneas. |
| **Destructuring** | Sacar propiedades de un objeto (o ítems de un array) a variables en una línea: `const { name } = pokemon`. |
| **Spread `...`** | Expandir un array/objeto dentro de otro: `[...a, ...b]`. |
| **Optional chaining `?.`** | Acceso seguro a datos anidados que **podrían no existir**: `pokemon?.sprites?.front_default`. |
| **Patrón render** | Limpiar un contenedor → recorrer los datos → crear y agregar un nodo por cada uno. |

## ⚙️ Setup Inicial

1. **Repositorio:** crea en GitHub un repo llamado `pokedex` y clónalo. Trabaja sobre `main`.

2. **Estructura de archivos:**
   ```
   pokedex/
   ├── index.html
   └── js/
       └── app.js
   ```

3. **`index.html` base** — Tailwind por CDN (ya lo dominas de C08; aquí solo lo aplicas) y un contenedor vacío donde irán las tarjetas:

   ```html
   <!DOCTYPE html>
   <html lang="es">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Pokédex</title>
     <script src="https://cdn.tailwindcss.com"></script>
   </head>
   <body class="bg-slate-100 min-h-screen p-6">
     <h1 class="text-3xl font-bold text-center text-slate-800 mb-6">Pokédex</h1>

     <!-- Aquí el JS pintará las tarjetas. Empieza vacío. -->
     <div id="resultado" class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"></div>

     <script src="js/app.js"></script>
   </body>
   </html>
   ```

   > 📌 **Convención del proyecto** (la reusarás en C10-C12): el contenedor de resultados **siempre** es `<div id="resultado">`. No le cambies el `id`.

4. **El dato (array local)** — pega esto al inicio de `js/app.js`. Tiene **la misma forma que devuelve la API real** que usarás en C11:

   ```javascript
   const pokemonLocal = [
     { id: 1,  name: "bulbasaur",  sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },  types: [{ type: { name: "grass" } }, { type: { name: "poison" } }] },
     { id: 4,  name: "charmander", sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },  types: [{ type: { name: "fire" } }] },
     { id: 7,  name: "squirtle",   sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },  types: [{ type: { name: "water" } }] },
     { id: 25, name: "pikachu",    sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" }, types: [{ type: { name: "electric" } }] },
     { id: 39, name: "jigglypuff", sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" }, types: [{ type: { name: "normal" } }, { type: { name: "fairy" } }] },
     { id: 94, name: "gengar",     sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" },  types: [{ type: { name: "ghost" } }, { type: { name: "poison" } }] }
   ];
   ```

---

## 📋 Historias de Usuario

### HU1: Ver la rejilla de tarjetas (maqueta con Tailwind)

> *"Como usuario, quiero ver una rejilla de tarjetas de Pokémon, cada una con su imagen, nombre y tipos, para reconocerlos de un vistazo."*

Antes de generar nada con JS, mira **a dónde quieres llegar**. Así se ve **una** tarjeta (pégala temporalmente dentro de `#resultado` para verla, luego la borras):

```html
<article class="bg-white rounded-xl shadow p-4 text-center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="pikachu" class="w-24 h-24 mx-auto">
  <h2 class="capitalize font-bold text-slate-800 mt-2">pikachu</h2>
  <div class="flex gap-1 justify-center mt-2">
    <span class="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full">electric</span>
  </div>
</article>
```

**Criterios de Aceptación:**
- `#resultado` usa `grid` de Tailwind (2 columnas en móvil, 3 en escritorio — ya viene en el HTML base).
- La tarjeta de ejemplo se ve: imagen centrada, nombre en negrita, badge de tipo.

- **Checkpoint 1 (~30 min):** ves al menos una tarjeta de ejemplo bien maquetada dentro de la rejilla. **Borra la tarjeta de prueba antes de seguir** — en HU2 la genera el JS.

---

### HU2: Generar las tarjetas desde el array con JavaScript

> *"Como usuario, quiero que las tarjetas se generen automáticamente desde los datos, para no escribir el HTML de cada Pokémon a mano."*

Aquí está el corazón de la clase: **construir HTML desde datos**. Dos piezas nuevas:

**a) Template literal** — un string con backticks donde insertas valores con `${...}`:

```javascript
const nombre = "pikachu";
const saludo = `Hola, ${nombre}!`;   // "Hola, pikachu!"
```

**b) El patrón render** — limpiar el contenedor, recorrer los datos, crear y agregar un nodo por cada uno:

```javascript
const contenedor = document.getElementById("resultado");

function crearTarjeta(pokemon) {
  const articulo = document.createElement("article");   // crea el nodo <article>
  articulo.className = "bg-white rounded-xl shadow p-4 text-center";
  articulo.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="w-24 h-24 mx-auto">
    <h2 class="capitalize font-bold text-slate-800 mt-2">${pokemon.name}</h2>
  `;
  return articulo;
}

function render(lista) {
  contenedor.innerHTML = "";                 // 1. limpia lo anterior
  lista.forEach(function (pokemon) {
    const tarjeta = crearTarjeta(pokemon);   // 2. crea el nodo
    contenedor.appendChild(tarjeta);         // 3. lo inserta en el DOM
  });
}

render(pokemonLocal);   // ¡píntalo!
```

> 💡 **`innerHTML` vs `textContent`:** `innerHTML` interpreta el string como **HTML** (crea etiquetas); `textContent` lo pone como **texto plano**. Para construir la tarjeta usamos `innerHTML`; para meter solo texto sin etiquetas, `textContent`.

**Criterios de Aceptación:**
- Las **6** tarjetas aparecen, generadas por el JS (no escritas a mano en el HTML).
- `render()` limpia el contenedor antes de pintar (`innerHTML = ""`).
- Cada tarjeta muestra imagen y nombre.

- **Checkpoint 2 (~60 min):** abre la página: las 6 tarjetas aparecen solas. Borra una entrada del array `pokemonLocal`, recarga, y verás que desaparece — la UI **depende de los datos**.

---

### HU3: Datos limpios con destructuring, tipos con spread y datos seguros con `?.`

> *"Como usuario, quiero ver los tipos de cada Pokémon (uno o varios) y que la tarjeta no se rompa si a un Pokémon le falta la imagen."*

Vas a **refactorizar** `crearTarjeta` con tres herramientas modernas.

**a) Destructuring** — en vez de repetir `pokemon.` por todos lados, sacas las propiedades de una:

```javascript
function crearTarjeta(pokemon) {
  const { name, sprites, types } = pokemon;   // ← destructuring de objeto
  // ahora usas name, sprites, types directo
}
```

**b) `.map()` + spread para los badges de tipo** — `types` es un array; conviértelo en HTML de badges:

```javascript
const badges = types
  .map(function (t) {
    return `<span class="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full">${t.type.name}</span>`;
  })
  .join("");   // une el array de strings en uno solo
```

**c) Optional chaining `?.`** — algunos Pokémon podrían no traer imagen. `sprites?.front_default` devuelve `undefined` en vez de **romper** el programa:

```javascript
const imagen = sprites?.front_default ?? "https://via.placeholder.com/96?text=?";
```

> 💡 El `??` ("nullish coalescing") da un valor de respaldo cuando lo de la izquierda es `null`/`undefined`. Juntos, `?.` y `??` evitan el clásico error *"cannot read property of undefined"*.

Arma la tarjeta final juntando las piezas:

```javascript
function crearTarjeta(pokemon) {
  const { name, sprites, types } = pokemon;
  const imagen = sprites?.front_default ?? "https://via.placeholder.com/96?text=?";
  const badges = types.map(function (t) {
    return `<span class="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full">${t.type.name}</span>`;
  }).join("");

  const articulo = document.createElement("article");
  articulo.className = "bg-white rounded-xl shadow p-4 text-center";
  articulo.innerHTML = `
    <img src="${imagen}" alt="${name}" class="w-24 h-24 mx-auto">
    <h2 class="capitalize font-bold text-slate-800 mt-2">${name}</h2>
    <div class="flex gap-1 justify-center mt-2 flex-wrap">${badges}</div>
  `;
  return articulo;
}
```

**Criterios de Aceptación:**
- `crearTarjeta` usa **destructuring** para leer `name`, `sprites`, `types`.
- Cada tarjeta muestra **todos** sus tipos como badges (bulbasaur y gengar tienen 2).
- Si borras la imagen de un Pokémon del array, la tarjeta **no se rompe** (muestra el placeholder).

- **Checkpoint 3 (~90 min):** las 6 tarjetas muestran sus badges de tipo (varios en bulbasaur/jigglypuff/gengar). Prueba a poner `sprites: {}` en un Pokémon: la tarjeta sigue viva gracias a `?.`.

---

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1 — Color por tipo:** pinta cada badge según el tipo (`fire` rojo, `water` azul…) usando un objeto `{ fire: "bg-red-200", water: "bg-blue-200", ... }`.
- **Logro 2 — Número de Pokédex:** muestra el `id` con formato `#025` (pista: destructuring de `id` + `String(id).padStart(3, "0")`).
- **Logro 3 — Destructuring de array:** muestra "Tipo principal: X" tomando el primero con `const [principal] = types`.

## 📝 Instrucciones de Entrega

1. **Despliegue:** publica en GitHub Pages y comparte el enlace.
2. **Entrega Final:** URL del repositorio + URL del sitio desplegado.

> ℹ️ Esta clase **no pide README** todavía. Lo agregarás en C12, cuando aprendas Markdown.
