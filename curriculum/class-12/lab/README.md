# Laboratorio 12: Manejo de Errores y Estados (Lab Evaluado M3)

Última clase del módulo. Tu Pokédex ya carga de la web y busca Pokémon… pero si buscas un nombre que no existe, o se cae la red, **se rompe**. Hoy la haces **robusta**: manejas errores con `try/catch`, detectas respuestas fallidas (404) y muestras estados claros de **carga** y **error**. Al final documentas el proyecto con un **README en Markdown** y cierras el Módulo 3.

> ⏱️ **Checkpoints**: 3 momentos de validación (~30, ~60, ~90 min).
>
> 📋 **Lab evaluado:** se califica con la rúbrica de [rubric.md](rubric.md) (5 criterios × 20 pts = 100). Incluye el README documentado.

## 🎯 Objetivos de Aprendizaje

1. Capturar errores con `try/catch/finally` y lanzar los propios con `throw`.
2. Detectar respuestas HTTP fallidas (`response.ok`) y comunicarlas al usuario.
3. Mostrar estados de UI (cargando / error) y documentar el proyecto en **Markdown**.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **`try / catch`** | `try` ejecuta código que podría fallar; `catch (error)` lo atrapa sin que la app muera. |
| **`throw new Error(msg)`** | Lanza un error propio con un mensaje claro. |
| **`response.ok`** | `false` si la respuesta HTTP fue un error (ej. 404). `fetch` **no** falla solo por un 404. |
| **`finally`** | Bloque que corre **siempre**, haya éxito o error. Ideal para ocultar un spinner. |
| **Estados de UI** | Loading (cargando) y error (mensaje): lo que el usuario ve en cada momento. |
| **Markdown** | Formato de texto para documentar (títulos, listas, links, código). Se usa en el `README.md`. |

## ⚙️ Setup Inicial

1. **Repositorio:** sigue en `pokedex`. Crea la rama `lab12-errores`.
2. **Punto de partida:** tu app de C11 (`obtenerPokemon`, `buscarPokemon`, `agregarPokemon`, `cargarPokedex`, `adaptarPokemon`, `pokedex`, `render`, `#buscador`, `#btn-buscar`).
3. **Agrega las zonas de estado** al `index.html`, debajo del buscador y encima de `#resultado`:

   ```html
   <div id="spinner" class="hidden text-center text-slate-500 my-4">Cargando…</div>
   <div id="mensaje" class="hidden text-center text-red-600 font-medium my-4"></div>
   ```

   > 📌 Convención del proyecto: `#spinner` (estado de carga) y `#mensaje` (errores). La clase `hidden` de Tailwind los oculta hasta que el JS los muestre.

---

## 📋 Historias de Usuario

### HU1: Atrapar errores con `try/catch`

> *"Como usuario, si algo falla al buscar, quiero ver un mensaje claro en vez de que la app se rompa."*

**Criterios de Aceptación:**
- Si la búsqueda falla (p. ej. sin internet), aparece un **mensaje claro** en vez de una pantalla rota.
- La app **sigue viva** tras el fallo: puedes volver a buscar sin recargar.

Envuelve la lógica que puede fallar (la búsqueda de C11) en `try`; si algo sale mal, `catch` lo maneja:

```javascript
const mensaje = document.getElementById("mensaje");

async function agregarPokemon(nombre) {
  mensaje.classList.add("hidden");   // limpia errores anteriores

  try {
    const pokemon = await buscarPokemon(nombre);
    if (!pokedex.some(p => p.nombre === pokemon.nombre)) {
      pokedex.push(pokemon);
    }
    render(pokedex);
    buscador.value = "";
  } catch (error) {
    mensaje.textContent = "Algo salió mal. Revisa tu conexión.";
    mensaje.classList.remove("hidden");
  }
}
```

> 💡 `catch (error)` recibe un objeto `Error` con un `.message`. Hoy la app ya no muere: el fallo se convierte en un mensaje.

- **Checkpoint 1 (~30 min):** con internet, busca normal. Desconecta la red y busca: ves el mensaje de error, la app sigue viva.

---

### HU2: Detectar "Pokémon no encontrado" con `throw`

> *"Como usuario, si escribo un nombre que no existe, quiero un mensaje que diga exactamente eso."*

**Criterios de Aceptación:**
- Buscar un nombre que no existe (p. ej. "pikachuu") muestra el mensaje "No se encontró 'pikachuu'".
- El mensaje es **específico** (nombra lo que se buscó), no genérico.
- Un nombre válido sigue agregándose con normalidad.

Ojo: `fetch` **no** falla solo porque la API responda 404. Hay que revisarlo con `response.ok` y **lanzar** nuestro propio error. Modifica tu `obtenerPokemon` de C11:

```javascript
async function obtenerPokemon(idONombre) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idONombre}`);

  if (!response.ok) {                                    // 404, 500, etc.
    throw new Error(`No se encontró "${idONombre}"`);    // lanza un error propio
  }

  return response.json();
}
```

Y en el `catch` de `agregarPokemon`, usa el mensaje del error:

```javascript
} catch (error) {
  mensaje.textContent = error.message;   // "No se encontró 'pikachuu'"
  mensaje.classList.remove("hidden");
}
```

> 💡 `throw` interrumpe el `try` y salta directo al `catch`. Por eso el `error.message` que defines es el que se muestra. Un buen mensaje de error es parte de una buena app.

- **Checkpoint 2 (~60 min):** busca "pikachuu" → mensaje "No se encontró…". Busca "pikachu" → se agrega normal.

---

### HU3: Estado de carga con `finally` (búsqueda y carga inicial)

> *"Como usuario, quiero ver 'Cargando…' mientras espera y que desaparezca siempre, tenga éxito o falle."*

**Criterios de Aceptación:**
- Mientras la búsqueda está en curso, se ve un indicador de **"Cargando…"**.
- El indicador **siempre desaparece** al terminar, haya éxito o error.
- Si la carga inicial de la rejilla falla, también se ve un mensaje (no una página en blanco).

Muestra el spinner al empezar y ocúltalo en `finally` (corre **siempre**):

```javascript
const spinner = document.getElementById("spinner");

async function agregarPokemon(nombre) {
  spinner.classList.remove("hidden");   // ⏳ muestra carga
  mensaje.classList.add("hidden");

  try {
    const pokemon = await buscarPokemon(nombre);
    if (!pokedex.some(p => p.nombre === pokemon.nombre)) {
      pokedex.push(pokemon);
    }
    render(pokedex);
    buscador.value = "";
  } catch (error) {
    mensaje.textContent = error.message;
    mensaje.classList.remove("hidden");
  } finally {
    spinner.classList.add("hidden");      // ✅ oculta carga SIEMPRE
  }
}
```

**Robustece también la carga inicial.** Tu `cargarPokedex` de C11 también puede fallar (sin red al abrir). Envuélvela en `try/catch`:

```javascript
async function cargarPokedex() {
  spinner.classList.remove("hidden");
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
    const lista = await respuesta.json();
    const datos = await Promise.all(
      lista.results.map(item => fetch(item.url).then(r => r.json()))
    );
    pokedex = datos.map(adaptarPokemon);
    render(pokedex);
  } catch (error) {
    mensaje.textContent = "No se pudo cargar la Pokédex.";
    mensaje.classList.remove("hidden");
  } finally {
    spinner.classList.add("hidden");
  }
}
```

- **Checkpoint 3 (~90 min):** el spinner aparece durante la búsqueda/carga y **siempre** desaparece (éxito, no encontrado, sin red).

🏆 **Reto autónomo (5 min):** mueve `spinner.classList.add("hidden")` del `finally` al final del `try`. Busca un nombre inexistente: el spinner **se queda pegado**. Eso prueba por qué va en `finally`.

---

## 📄 Documentación: tu primer README en Markdown

Un repositorio profesional siempre lleva un **`README.md`** que explica el proyecto. Se escribe en **Markdown**, un formato de texto simple:

```markdown
# Pokédex

Buscador de Pokémon que consume la PokeAPI.

## Cómo usarlo
1. Abre el sitio desplegado.
2. Escribe el nombre de un Pokémon y presiona **Buscar** para agregarlo.

## Tecnologías
- JavaScript (`fetch`, `async/await`, `Promise.all`)
- Tailwind CSS
- [PokeAPI](https://pokeapi.co/)

## Demo
🔗 [Ver en GitHub Pages](https://tu-usuario.github.io/pokedex/)
```

| Sintaxis | Resultado |
|---|---|
| `# Título` / `## Subtítulo` | Encabezados |
| `**negrita**` · `*cursiva*` | Énfasis |
| `- item` | Lista con viñetas |
| `` `código` `` | Código en línea |
| `[texto](url)` | Enlace |

**Crea un `README.md`** en la raíz de tu repo con: título, descripción, cómo usarlo, tecnologías y el enlace al sitio desplegado.

---

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1 — Botón reintentar:** tras un error, muestra un botón "Reintentar" que repite la última búsqueda.
- **Logro 2 — Spinner animado:** reemplaza "Cargando…" por un spinner con `animate-spin` de Tailwind.
- **Logro 3 — Capturas en el README:** agrega imágenes de la app funcionando con `![alt](ruta)`.

## 📝 Instrucciones de Entrega

1. **Documentación:** `README.md` completo en Markdown (título, descripción, uso, tecnologías, enlace).
2. **Mezcla de ramas:** Pull Request de `lab12-errores` a `main` y fusiónalo.
3. **Despliegue:** actualiza GitHub Pages.
4. **Entrega Final:** URL del repositorio + URL del sitio desplegado.

> 📋 Evaluado con [rubric.md](rubric.md). Prepárate para explicar un fragmento de tu código a solicitud del instructor.
