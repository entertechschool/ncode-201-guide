# Test Módulo 3 - Questions

> ⚠️ **Documento para facilitadores** - Contiene respuestas y retroalimentación

**5 preguntas diagnósticas que cubren las cuatro clases del módulo (09 a 12).**

---

## Pregunta 1 — Clase 09: JavaScript Moderno y Render Dinámico

Tienes un array de objetos y quieres generar una tarjeta HTML por cada uno dentro de `<div id="resultado">`. ¿Qué código aplica correctamente el **patrón render**?

```javascript
const contenedor = document.getElementById("resultado");
const pokemones = [ { name: "pikachu" }, { name: "ditto" } ];
```

- A)
  ```javascript
  contenedor.innerHTML = "pokemones";
  ```
- B)
  ```javascript
  pokemones.forEach((p) => {
    const el = document.createElement("article");
    el.textContent = p.name;
    contenedor.appendChild(el);
  });
  ```
- C)
  ```javascript
  contenedor.appendChild(pokemones);
  ```
- D)
  ```javascript
  document.createElement(pokemones);
  ```

> Respuesta: B

> **Retroalimentación:** El patrón render recorre los datos (`forEach`), crea un nodo por cada uno (`createElement`), le da contenido (`textContent`) y lo inserta (`appendChild`). La opción A asigna el texto literal `"pokemones"`, no genera tarjetas. La C intenta insertar un **array** como si fuera un nodo del DOM (error). La D pasa un array a `createElement`, que espera el **nombre de una etiqueta** (string).

---

## Pregunta 2 — Clase 10: Asincronía y Promesas

¿Qué imprime el siguiente código en consola y en qué orden?

```javascript
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");
```

- A) `A` `B` `C`
- B) `A` `C` `B`
- C) `B` `A` `C`
- D) `C` `B` `A`

> Respuesta: B

> **Retroalimentación:** JavaScript **no se detiene** en el `setTimeout`: programa la función para dentro de 1000 ms y continúa con la siguiente línea. Por eso imprime `A`, luego `C`, y al final `B` (cuando vence el temporizador). Esto demuestra el comportamiento **asincrónico**: el código no bloqueante sigue ejecutándose mientras una operación "tarda". Las demás opciones asumen, incorrectamente, que `setTimeout` pausa el programa.

---

## Pregunta 3 — Clase 11: async/await, fetch y JSON

Quieres traer un Pokémon de la PokeAPI y obtener su objeto JavaScript. ¿Cuál es la implementación correcta?

- A)
  ```javascript
  async function buscar(nombre) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const pokemon = await response.json();
    return pokemon;
  }
  ```
- B)
  ```javascript
  function buscar(nombre) {
    const response = fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    return response.json();
  }
  ```
- C)
  ```javascript
  async function buscar(nombre) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    return pokemon;
  }
  ```
- D)
  ```javascript
  function buscar(nombre) {
    return JSON.parse(fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`));
  }
  ```

> Respuesta: A

> **Retroalimentación:** Se necesitan **dos** `await`: uno para esperar la respuesta (`fetch`) y otro para esperar la conversión del cuerpo JSON a objeto (`response.json()`), todo dentro de una función `async`. La opción B usa `await`/`async` ausentes: `fetch` sin `await` devuelve una promesa, no la respuesta. La C olvida `response.json()`: devuelve el objeto `response` crudo, no el Pokémon. La D usa `JSON.parse` sobre una promesa (incorrecto: `JSON.parse` es síncrono y para texto, no para respuestas de `fetch`).

---

## Pregunta 4 — Clase 12: Manejo de Errores y Estados

Buscas un Pokémon que no existe. La API responde con **status 404**. ¿Qué afirmación es correcta sobre cómo manejar este caso?

- A) `fetch` lanza automáticamente un error en un 404, así que el `catch` lo atrapa solo.
- B) Hay que revisar `response.ok`; si es `false`, lanzar el error manualmente con `throw new Error(...)`.
- C) Un 404 detiene el programa por completo sin posibilidad de manejarlo.
- D) `response.json()` corrige el 404 automáticamente y devuelve un objeto válido.

> Respuesta: B

> **Retroalimentación:** `fetch` **solo** rechaza su promesa cuando la petición no se puede realizar (sin red, DNS, CORS). Un 404 es una respuesta válida a nivel de red, así que `fetch` lo considera "exitoso". Por eso hay que revisar `response.ok` (que será `false`) y lanzar el error nosotros con `throw new Error(...)` para que el `catch` lo maneje. La A es el malentendido más común. La C es falsa: se maneja sin problema. La D es falsa: `response.json()` intentaría parsear el cuerpo de error, no corrige nada.

---

## Pregunta 5 — Integradora (Clases 11 + 12)

¿Cuál implementación maneja correctamente la búsqueda, captura errores y garantiza que el spinner **siempre** se oculte?

- A)
  ```javascript
  async function mostrar(nombre) {
    const response = await fetch(url);
    const pokemon = await response.json();
    render([pokemon]);
    spinner.classList.add("hidden");
  }
  ```
- B)
  ```javascript
  async function mostrar(nombre) {
    spinner.classList.remove("hidden");
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("No se encontró");
      const pokemon = await response.json();
      render([pokemon]);
    } catch (e) {
      mensaje.textContent = e.message;
    } finally {
      spinner.classList.add("hidden");
    }
  }
  ```
- C)
  ```javascript
  function mostrar(nombre) {
    try {
      const pokemon = fetch(url);
      render([pokemon]);
    } catch (e) {
      mensaje.textContent = e.message;
    }
  }
  ```
- D)
  ```javascript
  async function mostrar(nombre) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("No se encontró");
    const pokemon = await response.json();
    render([pokemon]);
  }
  ```

> Respuesta: B

> **Retroalimentación:** La opción B es completa: muestra el spinner, valida `response.ok` y lanza el error con `throw`, captura cualquier fallo en `catch`, y oculta el spinner en `finally` (que corre **siempre**, haya éxito o error). La A oculta el spinner solo en el camino feliz: si falla, se queda pegado, y además no captura el error. La C no usa `await` (recibe una promesa, no datos) ni valida `ok`. La D valida y lanza, pero **no captura** el error (sin `catch`) ni oculta el spinner en `finally`: ante un fallo, rompe y el spinner queda visible.
