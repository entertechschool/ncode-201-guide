# Clase 12: Excepciones en JavaScript

### 🎯 Objetivo de la clase

Comprender y aplicar estructuras de manejo de errores en JavaScript para validar entradas, capturar fallas y mejorar la robustez del código.

---

## ❓ ¿Qué es una Excepción?

- Evento que interrumpe el flujo normal del programa.
- Ocurre cuando se rompe una expectativa lógica o técnica.
- Puede ser lanzada manualmente o surgir del sistema.

---

## 🧱 Estructura Básica

```js
try {
  // Código que puede fallar
} catch (error) {
  // Código para manejar el error
} finally {
  // Siempre se ejecuta
}
```

---

## 🚨 throw: Lanzar un error

```js
if (!userInput) {
  throw new Error("El campo no puede estar vacío");
}
```

* `throw` lanza una excepción.
* Se puede lanzar cualquier tipo de valor, pero se recomienda `Error`.

---

## 🔄 Ciclo de un error controlado

1. Validación previa (`if`)
2. Lanzamiento (`throw`)
3. Captura (`catch`)
4. Retroalimentación al usuario
5. Recuperación o cancelación del flujo

---

## 🛠 Ejemplo aplicado al editor

```js
try {
  const html = marked.parse(markdownInput);
  output.innerHTML = html;
} catch (err) {
  alert("Hubo un problema con el formato Markdown.");
}
```

---

## 🧠 Pregunta para el debate

**¿Siempre deberíamos capturar los errores?**

* ¿Cuándo conviene dejar que un error "explote"?
* ¿Es peor capturar demasiado o no capturar nunca?
* ¿Cómo influye esto en el diseño del software?

---

## 🧪 Actividad práctica

* Detectar Markdown vacío → lanzar error
* Detectar encabezados mal formados (`##Título`) → lanzar error
* Capturar fallas en `marked()` sin detener la app

---

## 🧰 Buenas prácticas

✅ Lanza errores **descriptivos**
✅ Captura solo lo necesario
✅ No escondas errores graves
✅ Informa al usuario claramente
✅ Usa `finally` para limpiar o finalizar procesos

---

## ✨ `finally` aplicado: el spinner que siempre se oculta

```js
function procesarMarkdown(texto) {
  spinner.classList.remove('hidden');     // muestra spinner

  try {
    if (!texto) throw new Error('Editor vacío');
    preview.innerHTML = marked.parse(texto);
  } catch (error) {
    mostrarError(error.message);
  } finally {
    spinner.classList.add('hidden');      // SIEMPRE oculta
  }
}
```

* Sin `finally`, el spinner queda visible si hay error.
* Con `finally`, la UI siempre vuelve a estado consistente.
* En M5 lo usarás para `JSON.parse(localStorage.getItem(...))` con cleanup.

---

## 🎁 Bonus al cierre: Renderizado dinámico de listas

`createElement` + `appendChild` — crear nodos desde JS, no escribirlos en HTML.

```js
const items = ['Manzana', 'Pera', 'Plátano'];
const lista = document.querySelector('#mi-lista');

items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  lista.appendChild(li);
});
```

> Patrón crítico para M5: cada gasto, persona o transferencia será un `<li>` creado dinámicamente.

---

## 📌 Recordatorio

* Este conocimiento es clave para la siguiente fase (Promesas y asincronía).
* El manejo de errores es una herramienta, no un parche.
* La claridad en los errores mejora la experiencia de usuario y del equipo.
