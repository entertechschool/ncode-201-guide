# Clase 11  
## Event Handling Básico en JavaScript

---

### Bienvenida y Conexión Inicial
- ¿Has creado algo interactivo con JavaScript?
- Recordamos: funciones y manipulación DOM

---

## 📌 Pero primero, recordamos:

## Funciones y callbacks:

> Crea una función llamada `ejecutarOperacion` que reciba **tres parámetros**:
>
> * `a`: número 1
> * `b`: número 2
> * `operacion`: una función callback que indique qué operación realizar (`suma`, `multiplicacion`, `potencia`, etc.)

---

## 📌 Ahora, recordamos:

## Manipulación DOM:

> Crea una función llamada `aplicarEstilo` que reciba:
>
> * un **selector CSS** (ej. `"#titulo"`),
> * y una **función callback** que indique cómo modificar ese elemento.
>
> Por ejemplo: `aplicarEstilo("#titulo", mayusculas);`

---

## 🔑 Conceptos Clave a profundizar

1. **Event Object**
2. **Event Listener**
3. **Callback**

---

### ¿Qué es un Evento?
- Un evento es cualquier interacción del usuario con la página (click, keydown, etc)
- JavaScript puede "escuchar" y reaccionar

---

### addEventListener: Sintaxis
```js
element.addEventListener("click", function() {
  console.log("Haz hecho clic!");
});
```

---

### Demo en Vivo

* Crear botón que cambia de color al hacer clic
* Agregar lógica condicional en la función

---

### ¿Qué es el `event`?

* Objeto especial que contiene detalles del evento
* `event.target`, `event.type`, `event.key`, etc

---

### Exploración Guiada

```js
button.addEventListener("click", function(event) {
  console.log(event);
});
```

---

### Funciones Callback Reusables

```js
function cambiarColor() {
  caja.classList.toggle("activo");
}
boton.addEventListener("click", cambiarColor);
```

---

### HTML onEvent vs JS moderno

* `<button onclick="alert('Hola')">` ❌
* `addEventListener()` ✅

---

### 🚫 `event.preventDefault()` — cuando el default rompe lo que quieres

Algunos eventos del navegador tienen un **comportamiento default**:

* `Tab` en un textarea → mueve el foco al siguiente elemento.
* `<form>` submit → recarga la página.
* Click en un `<a>` → navega al `href`.

Cuando ese default estorba, lo detenemos:

```js
textarea.addEventListener("keydown", function(event) {
  if (event.key === "Tab") {
    event.preventDefault();  // Tab ya no cambia el foco
    // ahora podemos hacer otra cosa con Tab
  }
});
```

> "Sin `preventDefault`, el navegador hace lo suyo. Con `preventDefault`, mandas tú."

---

## 🧠 Reflexiones Clave para Analizar

1. ¿Qué ventajas ofrecen los event listeners frente a otros métodos tradicionales de gestión de eventos (por ejemplo, atributos HTML)?
> Separación de Estructura y Lógica.

2. ¿Cómo impacta en la experiencia del usuario manejar adecuadamente el objeto evento en aplicaciones web?
> Acceso detallado al contexto de la interacción.

3. ¿Cuáles son los criterios que debes considerar para elegir entre funciones anónimas o funciones nombradas como callbacks?
> Reutilización.

---

### Desafío de Laboratorio (Parte 1)

* Objetivo: Crear vista previa de Markdown en vivo
* Capturar `input` del usuario y actualizar un div

---

### Checkpoint 1

* Input actualizado dinámicamente al escribir
* Uso de `input.addEventListener("input", ...)`

---

### Checkpoint 2

* Separar lógica en funciones reusables
* Limpiar espacios y texto con `.trim()`

---

### Revisión entre Pares

* Validar estructura
* Probar eventos cruzados y refactor

---

### Cierre y Conexión con Clase 12

* ¿Qué aprendiste hoy?

