# Test Módulo 3 - Questions

> ⚠️ **Documento para facilitadores** - Contiene respuestas y retroalimentación

**5 preguntas diagnósticas que cubren las cuatro clases del módulo (09 a 12).**

---

## Pregunta 1 — Clase 09: DOM como API de Objetos

Tienes el siguiente HTML dentro de un editor:

```html
<div id="editor">
  <p class="line">Hola</p>
  <p class="line">Mundo</p>
  <p class="line">!</p>
</div>
```

¿Qué código selecciona los **tres** párrafos para luego recorrerlos con `forEach`?

- A) `document.getElementById(".line")`
- B) `document.querySelector(".line")`
- C) `document.querySelectorAll(".line")`
- D) `document.getElementByClassName("line")`

> Respuesta: C

> **Retroalimentación:** `querySelectorAll(".line")` retorna una `NodeList` con los tres `<p>`, que es iterable con `forEach` o `for...of`. La opción A confunde el método: `getElementById` solo acepta IDs, no selectores con punto. La B retorna **solo el primer** elemento que coincide, no los tres. La D tiene un error de nombre (el real es `getElementsByClassName`, con "s") y además recibe el nombre de la clase **sin punto**.

---

## Pregunta 2 — Clase 10: Funciones y Callbacks

¿Qué imprime el siguiente código en consola?

```javascript
function aplicar(valor, operacion) {
  return operacion(valor);
}

const duplicar = (n) => n * 2;

console.log(aplicar(5, duplicar));
```

- A) `5`
- B) `10`
- C) `"duplicar"`
- D) Error: no se puede pasar una función como argumento

> Respuesta: B

> **Retroalimentación:** `aplicar` es una **función de orden superior** que recibe otra función (`duplicar`) como **callback** y la ejecuta sobre el valor `5`. `duplicar(5)` retorna `10`. Esto es posible porque en JavaScript las funciones son **ciudadanos de primera clase**: pueden almacenarse en variables, pasarse como argumentos y retornarse desde otras funciones. La opción A ignora la ejecución del callback. La C confunde el nombre con el resultado. La D es falsa: el patrón es nativo en JavaScript.

---

## Pregunta 3 — Clase 11: Event Handling Básico

Quieres que cada vez que el usuario escriba en un `<textarea id="editor">` se actualice automáticamente un `<div id="preview">` con el texto ingresado. ¿Cuál es la implementación correcta?

- A) `document.getElementById("editor").onload = () => { ... }`
- B) `document.getElementById("editor").addEventListener("input", (event) => { document.getElementById("preview").textContent = event.target.value; })`
- C) `document.getElementById("preview").addEventListener("click", () => { ... })`
- D) `document.getElementById("editor").value = "preview"`

> Respuesta: B

> **Retroalimentación:** El evento `"input"` se dispara cada vez que el contenido del `<textarea>` cambia (al teclear, pegar, cortar). El callback recibe el objeto `event`, y `event.target.value` lee el texto actual del editor para asignarlo al `textContent` del preview. La opción A usa `onload`, que solo dispara al cargar la página, no al escribir. La C escucha clicks en el preview, pero nunca reacciona al input. La D simplemente sobrescribe el valor del textarea con el string `"preview"`.

---

## Pregunta 4 — Clase 12: Manejo de Excepciones

En el Editor de Markdown quieres validar que el archivo importado por el usuario **no esté vacío**. Si lo está, debes mostrar un mensaje de error y **no interrumpir** el resto del programa. ¿Cuál es la implementación correcta?

- A) `console.log("vacío")` y continuar normalmente, sin `try/catch`.
- B) `try { if (texto === "") throw new Error("Archivo vacío"); } catch (e) { mostrarError(e.message); }`
- C) Ignorar el caso: si el archivo está vacío, el programa simplemente fallará.
- D) Usar un `if/else` sin lanzar ninguna excepción, así nunca se interrumpe la ejecución.

> Respuesta: B

> **Retroalimentación:** El patrón correcto es **lanzar una excepción** con `throw new Error(...)` cuando se detecta la condición inválida y **capturarla** con `try/catch` para mostrar un mensaje sin romper el flujo. Esto centraliza el manejo de errores y permite dar feedback claro al usuario. La opción A no maneja el error como excepción y mezcla responsabilidades con `console.log`. La C es la ausencia de manejo de errores. La D pierde la ventaja de propagar el error de forma estructurada y reutilizar un único punto de captura.

---

## Pregunta 5 — Integradora (Clases 11 + 12)

Tienes un formulario que importa un archivo de texto. Quieres que **al hacer click** en el botón `<button id="importar">` se valide el contenido y, si está vacío, se capture el error sin romper la app. ¿Cuál es la implementación correcta?

```javascript
const boton = document.getElementById("importar");
const editor = document.getElementById("editor");

// ¿Cuál opción completa correctamente este patrón?
```

- A)
  ```javascript
  boton.addEventListener("click", () => {
    if (editor.value === "") throw new Error("Vacío");
  });
  ```
- B)
  ```javascript
  boton.addEventListener("click", () => {
    try {
      if (editor.value === "") throw new Error("Vacío");
      console.log("Archivo importado");
    } catch (e) {
      mostrarError(e.message);
    }
  });
  ```
- C)
  ```javascript
  try {
    boton.addEventListener("click", () => {
      if (editor.value === "") throw new Error("Vacío");
    });
  } catch (e) {
    mostrarError(e.message);
  }
  ```
- D)
  ```javascript
  boton.onload = () => {
    if (editor.value === "") mostrarError("Vacío");
  };
  ```

> Respuesta: B

> **Retroalimentación:** El `try/catch` debe vivir **dentro** del callback del evento, porque el error ocurre cuando el usuario hace click — no cuando se registra el listener. La opción A lanza el error pero no lo captura, así que rompe la ejecución del callback y queda sin manejar. La C envuelve el `addEventListener` (no el callback), por lo que el `catch` solo capturaría errores al **registrar** el listener, no al ejecutarlo. La D usa `onload`, que no aplica a botones, y además no usa el patrón de excepciones del módulo.
