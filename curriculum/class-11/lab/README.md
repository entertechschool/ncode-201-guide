# Laboratorio 11: async/await, fetch y JSON

Llegó el momento: hoy tu Pokédex deja de usar datos locales y **trae Pokémon reales de internet**. Aprendes el formato en que viajan los datos (**JSON**), cómo pedirlos con **`fetch`** y cómo escribir código asíncrono limpio con **`async/await`**. La promesa **simulada** de C10 se convierte en una llamada **real** a la PokeAPI — y descubres que la API entrega los datos con **su propia estructura**, así que tendrás que **adaptarla** a la tuya.

> ⏱️ **Checkpoints**: 3 momentos de validación (~30, ~60, ~90 min).
>
> 🌐 Necesitas **conexión a internet**. Usamos [PokeAPI](https://pokeapi.co/){:target="_blank"} — gratis, sin registro ni clave.

## 🎯 Objetivos de Aprendizaje

1. Entender **JSON** como el formato en que las APIs envían datos.
2. Pedir datos a una API real con **`fetch`** y leerlos con **`response.json()`**.
3. Escribir código asíncrono legible con **`async/await`**.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **JSON** | Formato de texto para enviar datos. Su sintaxis **refleja** los objetos y arrays de JavaScript. |
| **`fetch(url)`** | Pide datos a una URL. Devuelve una **Promesa** (como las de C10). |
| **`response`** | La respuesta del servidor. Hay que **leer su cuerpo** para obtener los datos. |
| **`response.json()`** | Convierte el cuerpo (JSON) en un **objeto JavaScript**. También devuelve una promesa. |
| **`async` / `await`** | `async` marca una función asíncrona; `await` **pausa** hasta que una promesa resuelva. |
| **Función adaptadora** | Traduce la estructura que entrega la API a tu estructura limpia (`{ nombre, imagen, tipos }`). |

## ⚙️ Setup Inicial

1. **Repositorio:** sigue en `pokedex`. Crea la rama `lab11-fetch`.
2. **Reusa el buscador de C09** y agrégale un **botón** al lado. Ya tienes `<input id="buscador">`; envuélvelo así en tu `index.html`:

   ```html
   <div class="max-w-md mx-auto flex gap-2 mb-6">
     <input id="buscador" type="text" placeholder="Escribe un Pokémon (ej. pikachu)"
            class="flex-1 p-2 rounded-lg border border-slate-300">
     <button id="btn-buscar" class="px-4 py-2 bg-yellow-400 font-semibold rounded-lg hover:bg-yellow-500">
       Buscar
     </button>
   </div>
   ```

3. Conservas tu `crearTarjeta()` y `render()` de C09. Ya **no** necesitas `pokemonLocal` ni la promesa simulada de C10 (puedes dejarlos comentados como referencia). **Quita el listener de filtro local** (`buscador.addEventListener("input", …)`) de C09: en HU3 lo reemplazas por una búsqueda a la API.

---

## 🧬 Antes de empezar: ¿qué es JSON?

Cuando le pides un Pokémon a la API, te responde con **texto en formato JSON**. Se ve casi idéntico a un objeto de JavaScript:

```json
{
  "id": 25,
  "name": "pikachu",
  "sprites": { "front_default": "https://.../25.png" },
  "types": [ { "type": { "name": "electric" } } ]
}
```

> 💡 **JSON ≠ objeto JS (todavía).** Lo que llega es **texto**. Para usarlo como objeto JavaScript (con `.name`, `.types`…) hay que **convertirlo** — eso hace `response.json()`.

⚠️ **Fíjate: esta estructura NO es la de tus datos limpios de C09.** Tu objeto era plano y claro: `{ nombre, imagen, tipos: ["electric"] }`. La API, en cambio, usa `name`, esconde la imagen en `sprites.front_default`, y los tipos en un array anidado `types[].type.name`. **Tú no controlas la forma de la API — te adaptas a ella.** Eso lo resolverás en HU2 con una pequeña función adaptadora.

Abre en el navegador `https://pokeapi.co/api/v2/pokemon/pikachu` y mira el JSON real que devuelve la API.

---

## 📋 Historias de Usuario

### HU1: Pedir un Pokémon a la API con `fetch` y `async/await`

> *"Como desarrollador, quiero una función que reciba un nombre y traiga ese Pokémon desde la PokeAPI."*

**Criterios de Aceptación:**
- Al llamar la función con un nombre, trae de la PokeAPI los **datos de ese Pokémon**.
- Los datos quedan disponibles como un **objeto** JavaScript utilizable (no como texto ni como promesa sin resolver).
- Al probarla en consola, devuelve el Pokémon pedido con sus datos reales.

`async/await` es la forma moderna y legible de trabajar con promesas. `await` **pausa** la función hasta que la promesa resuelva, y te entrega el valor directo (sin `.then`):

```javascript
async function buscarPokemon(nombre) {
  const url = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;

  const response = await fetch(url);     // 1. espera la respuesta del servidor
  const data     = await response.json(); // 2. el objeto CRUDO de la API (estructura anidada)

  return data;
}
```

* **`async`** delante de `function` habilita el uso de `await` dentro.
* **Primer `await`**: `fetch` devuelve la respuesta cruda.
* **Segundo `await`**: `response.json()` convierte el cuerpo JSON en objeto JS.
* Devolvemos `data`: el objeto **tal cual lo da la API** (con `name`, `sprites`, `types`). En HU2 lo adaptarás.

> 💡 **¿Por qué dos `await`?** Uno espera a que **llegue** la respuesta; otro a que se **lea y convierta** su contenido. Ambas operaciones tardan, ambas son promesas.

- **Checkpoint 1 (~30 min):** en consola, `buscarPokemon("ditto")` (vía `.then(console.log)`) muestra el objeto real traído de la API, con `name`, `sprites`, `types`.

---

### HU2: Adaptar la estructura de la API y mostrarla

> *"Como usuario, quiero ver la tarjeta del Pokémon que busqué, con su imagen y tipos."*

**Criterios de Aceptación:**
- La tarjeta del Pokémon buscado aparece con su **imagen, nombre y tipos**.
- Los datos de la API se muestran correctamente, aunque la API los entregue con otra estructura.
- La tarjeta se ve igual que las de C09, pero ahora con datos reales.

La API te da una estructura **anidada** (`data.sprites.front_default`, `data.types[].type.name`), pero tu `crearTarjeta` de C09 espera la estructura **limpia** (`{ nombre, imagen, tipos }`). En vez de reescribir el render, escribes una **función adaptadora** que traduce de una forma a la otra:

```javascript
function adaptarPokemon(data) {
  return {
    nombre: data.name,
    imagen: data.sprites?.front_default ?? "https://via.placeholder.com/96?text=?",
    tipos:  data.types.map(t => t.type.name)   // [{type:{name:"electric"}}] → ["electric"]
  };
}
```

> 💡 Aquí reusas el `?.` y el `??` de C09: los datos anidados de una API real **sí** pueden venir incompletos, así que el acceso seguro cobra todo su sentido.

Ahora `mostrarPokemon` busca, **adapta** y renderiza —reusando tu `render` de C09 intacto:

```javascript
async function mostrarPokemon(nombre) {
  const data    = await buscarPokemon(nombre);   // estructura de la API
  const pokemon = adaptarPokemon(data);          // tu estructura limpia
  render([pokemon]);                              // render espera una lista → array de uno
}

mostrarPokemon("pikachu");   // prueba inicial
```

> 💡 Esto es exactamente lo que hace un dev real: **la API dicta su estructura y tú la adaptas a la de tu app**. Gracias al adaptador, tu `crearTarjeta` no cambia aunque la fuente de datos sí.

- **Checkpoint 2 (~60 min):** la página muestra la tarjeta de un Pokémon real, idéntica en apariencia a las de C09 — pero los datos vinieron de la API y pasaron por tu adaptador.

---

### HU3: Del filtro local a la búsqueda en la API

> *"Como usuario, quiero escribir un nombre, presionar Buscar (o Enter) y ver ese Pokémon."*

**Criterios de Aceptación:**
- Escribir un nombre y hacer clic en **Buscar** muestra ese Pokémon.
- Presionar **Enter** en el campo de búsqueda hace lo mismo.
- El buscador ignora una búsqueda vacía.

En C09 tu buscador filtraba la **lista local** en cada tecla (`input` + `.filter`). Ahora cada búsqueda va a la **red**, y llamar a la API en cada tecla sería un abuso. Así que cambias el disparador: buscas al hacer **clic en el botón** (o con **Enter**), no en cada pulsación.

Reemplaza el listener de filtro local de C09 por este:

```javascript
const input = document.getElementById("buscador");
const boton = document.getElementById("btn-buscar");

boton.addEventListener("click", function () {
  const nombre = input.value.trim();
  if (nombre !== "") {
    mostrarPokemon(nombre);   // ← ahora va a la API (antes filtraba local)
  }
});

// Buscar también con la tecla Enter
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    boton.click();
  }
});
```

> 💡 Mismo buscador, otra fuente de datos: antes mostraba lo que **ya tenías**; ahora trae lo que **no tenías**. Y se dispara con un evento puntual (clic/Enter), no en cada tecla, para no saturar la API.

- **Checkpoint 3 (~90 min):** escribes "bulbasaur", presionas Enter y aparece su tarjeta. Pruebas varios nombres y la Pokédex responde con datos reales.

> ⚠️ Si buscas un nombre que **no existe** (ej. "pikachuu"), la app fallará feo. **Eso es a propósito** — en C12 aprenderás a manejar ese error con `try/catch`.

---

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1 — Buscar por número:** la API también acepta IDs (`/pokemon/25`). Permite buscar por nombre **o** número.
- **Logro 2 — Lista inicial:** al cargar, trae varios con `fetch("https://pokeapi.co/api/v2/pokemon?limit=12")` y muéstralos (pista: ese endpoint devuelve `results` con nombres; cada uno requiere otro `fetch`).
- **Logro 3 — Stats:** muestra las estadísticas (`pokemon.stats`) como barras con Tailwind.

## 📝 Instrucciones de Entrega

1. **Despliegue:** publica en GitHub Pages y comparte el enlace.
2. **Entrega Final:** URL del repositorio + URL del sitio desplegado.

> ℹ️ Sin README todavía — lo agregarás en C12, la próxima y última clase del módulo.
