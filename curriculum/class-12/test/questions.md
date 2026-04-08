# Test Módulo 3 - Questions

> ⚠️ **Documento para facilitadores** - Contiene respuestas y retroalimentación

**8 preguntas diagnósticas**

---

## Preguntas 1-2 (Clase 09: DOM como API de Objetos)

### Pregunta 1 (Conceptual)

¿Cuál es la principal diferencia entre `querySelector()` y `querySelectorAll()` al manipular el DOM?

- A) `querySelector()` devuelve el **primer** elemento que coincide con el selector, mientras que `querySelectorAll()` devuelve una **NodeList** con **todos** los elementos que coinciden
- B) `querySelector()` solo funciona con IDs y `querySelectorAll()` solo con clases
- C) Ambos métodos hacen exactamente lo mismo; solo cambia el nombre
- D) `querySelectorAll()` es más lento porque solo busca dentro de `document.body`

> Respuesta: A

> **Retroalimentación:** `querySelector()` retorna el **primer** elemento que cumple con el selector CSS dado (o `null` si no hay ninguno). `querySelectorAll()` retorna una **NodeList** con **todos** los elementos que coinciden. La opción B es falsa: ambos aceptan cualquier selector CSS (tag, clase, ID, atributos, etc.). C es incorrecta por la diferencia ya explicada. D confunde el comportamiento: ambos pueden ejecutarse sobre cualquier nodo raíz.

---

### Pregunta 2 (Aplicación)

Tienes el siguiente HTML:

```html
<div id="editor">
  <p class="line">Hola</p>
  <p class="line">Mundo</p>
</div>
```

¿Qué código selecciona **ambos** párrafos para poder recorrerlos con un bucle?

- A) `document.getElementById(".line")`
- B) `document.querySelector(".line")`
- C) `document.querySelectorAll(".line")`
- D) `document.getElementByClassName("line")`

> Respuesta: C

> **Retroalimentación:** `querySelectorAll(".line")` retorna una NodeList con los dos `<p>`, que se puede recorrer con `forEach` o `for...of`. La opción A es incorrecta: `getElementById` solo acepta IDs, no selectores CSS. La B retornaría solo el **primero** de los dos. La D tiene un error de nombre: el método real es `getElementsByClassName` (con "s") y no lleva punto en el selector.

---

## Preguntas 3-4 (Clase 10: Funciones y Callbacks)

### Pregunta 3 (Conceptual)

En JavaScript, ¿qué significa que las funciones sean **"ciudadanos de primera clase"** (first-class citizens)?

- A) Que las funciones solo pueden ser llamadas una vez por ejecución del programa
- B) Que las funciones pueden almacenarse en variables, pasarse como argumentos y retornarse desde otras funciones
- C) Que las funciones siempre deben estar definidas al inicio del archivo
- D) Que las funciones deben tener siempre un nombre explícito, no pueden ser anónimas

> Respuesta: B

> **Retroalimentación:** Ser "ciudadanos de primera clase" significa que las funciones se tratan como cualquier otro valor: se pueden asignar a variables, pasar como argumentos (callbacks), retornar como resultado de otras funciones y almacenar en arrays u objetos. Esta propiedad habilita patrones como las funciones de orden superior. Las otras opciones describen restricciones que no existen en JavaScript.

---

### Pregunta 4 (Aplicación)

Observa el siguiente código. ¿Qué imprime en consola?

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

> **Retroalimentación:** `aplicar` es una **función de orden superior** que recibe otra función (`duplicar`) como **callback** y la ejecuta con el valor `5`. `duplicar(5)` retorna `10`. Esto ejemplifica cómo las funciones pueden pasarse como argumentos. La opción A ignora la ejecución del callback. La C confunde el nombre con el resultado. La D es falsa: JavaScript soporta este patrón nativamente gracias a las funciones de primera clase.

---

## Preguntas 5-6 (Clase 11: Event Handling Básico)

### Pregunta 5 (Conceptual)

¿Cuál es el propósito del método `addEventListener()` en JavaScript?

- A) Crear un nuevo elemento HTML y agregarlo al DOM
- B) Registrar una función callback que se ejecutará cuando ocurra un evento específico en un elemento del DOM
- C) Eliminar permanentemente un elemento del DOM
- D) Convertir una función normal en una función asíncrona

> Respuesta: B

> **Retroalimentación:** `addEventListener(evento, callback)` registra una función que será llamada automáticamente cuando el evento especificado (click, input, submit, etc.) ocurra sobre el elemento. Es el mecanismo estándar para hacer páginas interactivas. La opción A describe `createElement` y `appendChild`. La C corresponde a `remove()` o `removeChild()`. La D confunde conceptos: `addEventListener` no tiene relación con hacer una función asíncrona.

---

### Pregunta 6 (Aplicación)

Quieres que cada vez que el usuario escriba en un `<textarea id="editor">`, se actualice automáticamente un `<div id="preview">` con el texto ingresado. ¿Cuál es la implementación correcta?

- A) `document.getElementById("editor").onload = () => { ... }`
- B) `document.getElementById("editor").addEventListener("input", (event) => { document.getElementById("preview").textContent = event.target.value; })`
- C) `document.getElementById("preview").addEventListener("click", () => { ... })`
- D) `document.getElementById("editor").value = "preview"`

> Respuesta: B

> **Retroalimentación:** El evento `"input"` se dispara cada vez que el contenido del `<textarea>` cambia (al teclear, pegar, etc.). Dentro del callback se usa `event.target.value` para leer el texto actual y actualizar el `textContent` del preview. La opción A usa `onload`, que solo dispara al cargar la página. La C escucha clicks en el preview, no cambios en el editor. La D simplemente asigna un string al valor del textarea, sin captar eventos ni actualizar el preview.

---

## Pregunta 7 (Clase 12: Aplicación Práctica - Excepciones)

### Pregunta 7

En el Editor de Markdown, quieres validar que el archivo importado por el usuario no esté vacío. Si lo está, debes mostrar un mensaje de error y **no** interrumpir la ejecución del resto del programa. ¿Cuál es la implementación correcta?

- A) Usar `console.log("vacío")` y continuar normalmente, sin `try/catch`
- B) Envolver la validación en un `try { if (texto === "") throw new Error("Archivo vacío"); } catch (e) { mostrarError(e.message); }`
- C) Ignorar el caso: si el archivo está vacío, el programa simplemente fallará
- D) Usar un `if/else` sin lanzar ninguna excepción, así nunca se interrumpe la ejecución

> Respuesta: B

> **Retroalimentación:** El patrón correcto es **lanzar una excepción** con `throw new Error(...)` cuando se detecta la condición inválida y **capturarla** con `try/catch` para mostrar un mensaje sin romper el resto de la aplicación. Esto permite centralizar el manejo de errores y dar feedback claro al usuario. La opción A no maneja el error como excepción y mezcla responsabilidades con `console.log`. La C es la ausencia de manejo de errores, justamente lo que queremos evitar. La D no es incorrecta en todos los casos, pero pierde la ventaja de propagar el error de forma estructurada y centralizada, que es el objetivo del manejo de excepciones en la clase.

---

## Pregunta 8 (Autoevaluación)

### Pregunta 8

Después de completar este módulo, ¿cómo describirías tu nivel de confianza para **construir una aplicación web interactiva que manipule el DOM, maneje eventos de usuario y controle errores con `try/catch`**?

- A) Muy seguro/a - podría hacerlo sin ayuda
- B) Bastante seguro/a - con algo de referencia
- C) Algo inseguro/a - necesitaría bastante guía
- D) Muy inseguro/a - no sabría por dónde empezar

> ⚠️ Sin respuesta correcta - todas las opciones son válidas para diagnóstico

> **Retroalimentación:** Usa tu respuesta para planificar tu estudio. Si elegiste C o D, revisa el material del módulo o consulta con tu instructor.
