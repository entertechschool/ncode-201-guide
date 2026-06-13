# Laboratorio 11: async/await, fetch y JSON

Llegó el momento: hoy tu Pokédex deja de usar datos locales y **trae Pokémon reales de internet**. Aprendes el formato en que viajan los datos (**JSON**), cómo pedirlos con **`fetch`** y cómo escribir código asíncrono limpio con **`async/await`**. La promesa **simulada** de C10 se convierte en una llamada **real** a la PokeAPI.

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

## ⚙️ Setup Inicial

1. **Repositorio:** sigue en `pokedex`. Crea la rama `lab11-fetch`.
2. **Agrega un buscador** al `index.html`, encima de `#resultado`:

   ```html
   <div class="max-w-md mx-auto flex gap-2 mb-6">
     <input id="buscador" type="text" placeholder="Escribe un Pokémon (ej. pikachu)"
            class="flex-1 p-2 rounded-lg border border-slate-300">
     <button id="btn-buscar" class="px-4 py-2 bg-yellow-400 font-semibold rounded-lg hover:bg-yellow-500">
       Buscar
     </button>
   </div>
   ```

3. Conservas tu `crearTarjeta()` y `render()` de C09. Ya **no** necesitas `pokemonLocal` ni la promesa simulada de C10 (puedes dejarlos comentados como referencia).

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

> 💡 **JSON ≠ objeto JS (todavía).** Lo que llega es **texto**. Para usarlo como objeto JavaScript (con `.name`, `.types`…) hay que **convertirlo** — eso hace `response.json()`. Fíjate que la **forma es la misma** que tu `pokemonLocal` de C09: por eso tu `crearTarjeta` ya sirve.

Abre en el navegador `https://pokeapi.co/api/v2/pokemon/pikachu` y mira el JSON real que devuelve la API.

---

## 📋 Historias de Usuario

### HU1: Pedir un Pokémon a la API con `fetch` y `async/await`

> *"Como desarrollador, quiero una función que reciba un nombre y traiga ese Pokémon desde la PokeAPI."*

`async/await` es la forma moderna y legible de trabajar con promesas. `await` **pausa** la función hasta que la promesa resuelva, y te entrega el valor directo (sin `.then`):

```javascript
async function buscarPokemon(nombre) {
  const url = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;

  const response = await fetch(url);        // 1. espera la respuesta del servidor
  const pokemon  = await response.json();   // 2. espera el parseo de JSON → objeto JS

  return pokemon;
}
```

* **`async`** delante de `function` habilita el uso de `await` dentro.
* **Primer `await`**: `fetch` devuelve la respuesta cruda.
* **Segundo `await`**: `response.json()` convierte el cuerpo JSON en objeto JS.

> 💡 **¿Por qué dos `await`?** Uno espera a que **llegue** la respuesta; otro a que se **lea y convierta** su contenido. Ambas operaciones tardan, ambas son promesas.

**Criterios de Aceptación:**
- Existe `async function buscarPokemon(nombre)`.
- Usa `await fetch(...)` y `await response.json()`.
- Pruébala desde consola: `buscarPokemon("charizard").then(p => console.log(p))` imprime el objeto del Pokémon.

- **Checkpoint 1 (~30 min):** en consola, `buscarPokemon("ditto")` (vía `.then(console.log)`) muestra el objeto real traído de la API, con `name`, `sprites`, `types`.

---

### HU2: Mostrar el Pokémon buscado en pantalla

> *"Como usuario, quiero ver la tarjeta del Pokémon que busqué, con su imagen y tipos."*

`buscarPokemon` devuelve **un** Pokémon; tu `render()` espera un **array**. Lo envuelves en `[ ]` y reusas todo lo de C09:

```javascript
async function mostrarPokemon(nombre) {
  const pokemon = await buscarPokemon(nombre);
  render([pokemon]);   // render espera una lista → array de uno
}

mostrarPokemon("pikachu");   // prueba inicial
```

> 💡 No reescribes `crearTarjeta` ni `render`: el dato de la API tiene la **misma forma** que tus datos locales de C09. Esa fue la razón de diseñarlos iguales desde el día 1.

**Criterios de Aceptación:**
- Al llamar `mostrarPokemon("pikachu")`, aparece la tarjeta de Pikachu con datos reales.
- Se reusa `render()` / `crearTarjeta()` de C09 sin reescribirlos.

- **Checkpoint 2 (~60 min):** la página muestra la tarjeta de un Pokémon traído de la API (imagen + nombre + tipos reales).

---

### HU3: Conectar el buscador

> *"Como usuario, quiero escribir un nombre, presionar Buscar (o Enter) y ver ese Pokémon."*

Conecta el input y el botón a tu función:

```javascript
const input = document.getElementById("buscador");
const boton = document.getElementById("btn-buscar");

boton.addEventListener("click", function () {
  const nombre = input.value.trim();
  if (nombre !== "") {
    mostrarPokemon(nombre);
  }
});

// Buscar también con la tecla Enter
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    boton.click();
  }
});
```

**Criterios de Aceptación:**
- Escribir un nombre y hacer clic en **Buscar** muestra ese Pokémon.
- Presionar **Enter** en el input hace lo mismo.
- El buscador ignora una búsqueda vacía.

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
