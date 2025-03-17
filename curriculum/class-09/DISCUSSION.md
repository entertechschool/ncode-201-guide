# Lectura y Debate 09: DOM como API de Objetos

## 🎯 Objetivos de la Lectura y el Debate
Sabemos que leer te proporciona las bases, pero **debatir en clase** permite que concretes rápidamente tu aprendizaje. La lectura y el debate están profundamente relacionados, **no hay sentido en uno sin el otro**.

A través de esta guía, te prepararás para participar en un debate dinámico con tus compañeros y el instructor, facilitando la comprensión profunda de los conceptos clave del DOM como un sistema orientado a objetos en JavaScript.

## 🔑 Conceptos Clave a Profundizar
- **DOM como Árbol de Objetos:** Comprender cómo cada etiqueta HTML se representa como nodos objeto que pueden manipularse dinámicamente.
- **Selección Dinámica de Nodos:** Utilizar métodos de selección como `querySelector()` y especialmente `querySelectorAll()` para modificar múltiples nodos simultáneamente.
- **Regex básico:** Explorar expresiones regulares simples para realizar transformaciones de texto, particularmente para convertir contenido Markdown a HTML.

## 📚 Artículos recomendados para leer
- [MDN Web Docs - ¿Qué es el DOM?](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction){:target="_blank"}

- [MDN Web Docs - Usando querySelectorAll()](https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll){:target="_blank"}

- [Regex en JavaScript - Guía introductoria](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions){:target="_blank"}

## ☑️ Lista de Mitos y Verdades para Analizar

1. Usar `querySelector()` siempre devuelve una colección de nodos, incluso si selecciona uno solo.

2. El DOM permite manipular estilos CSS directamente desde JavaScript usando propiedades específicas como `.style` y `.classList`.

3. Una expresión regular (Regex) siempre devolverá el mismo resultado sin importar el contexto o idioma del texto que analice.

4. Utilizar `querySelectorAll()` es menos eficiente que `getElementById` cuando se busca un único elemento por su ID.

5. Todos los métodos del DOM devuelven elementos del mismo tipo, no existen diferencias entre ellos.

6. `querySelectorAll()` permite seleccionar múltiples elementos y devuelve una lista estática (no viva) de nodos.

7. Las expresiones regulares (Regex) se pueden utilizar para transformar contenido de texto (Markdown a HTML, por ejemplo) sin necesidad de librerías externas.

8. Los cambios realizados en los nodos del DOM usando JavaScript son permanentes incluso después de refrescar la página.

> **Instrucción:** Identifica cuáles afirmaciones son mitos y cuáles son verdades. Prepárate para justificar tus respuestas con evidencia de lecturas recomendadas y tus experiencias previas.