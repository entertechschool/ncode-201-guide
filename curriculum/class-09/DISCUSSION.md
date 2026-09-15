# Lectura y Debate 09: JavaScript Moderno y Render Dinámico

## 🎯 Objetivos de la Lectura y el Debate

Debatir en esta sesión te permitirá analizar críticamente por qué el JavaScript moderno (ES6+) y el **render dinámico** —generar HTML desde datos— son la base de toda aplicación web real. Comprenderás cuándo conviene generar la interfaz con código en lugar de escribirla a mano, y cómo la sintaxis moderna (template literals, destructuring, optional chaining) hace ese código más claro y seguro.

## 🔑 Conceptos Clave a profundizar

- **Render dinámico:** la interfaz se genera recorriendo los datos y creando un nodo por cada uno, en vez de escribir el HTML elemento por elemento. La UI pasa a ser un **reflejo de los datos**.
- **Template literals:** strings con backticks e interpolación `${...}`; legibles y multilínea, ideales para construir HTML.
- **Destructuring y acceso seguro:** `const { nombre } = pokemon` saca propiedades de una; `??` da un valor de respaldo y `?.` accede a datos que podrían faltar sin romper el programa.

## 📚 Artículos recomendados para leer

- [MDN — Template literals](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals){:target="_blank"}

- [MDN — Destructuring assignment](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment){:target="_blank"}

- [MDN — Document.createElement](https://developer.mozilla.org/es/docs/Web/API/Document/createElement){:target="_blank"}

## ☑️ Lista de Mitos y Verdades para Analizar

1. "Generar el HTML desde datos con JavaScript es más complicado y peor que escribirlo a mano en el archivo `.html`."

2. "Un template literal (`` `Hola ${nombre}` ``) hace exactamente lo mismo que la concatenación con `+`, solo que se ve mejor."

3. "`innerHTML` y `textContent` son intercambiables: dan el mismo resultado."

4. "El optional chaining (`?.`) esconde errores y por eso es mala práctica."

5. "El destructuring crea copias nuevas de los datos del objeto."

> **Instrucción:** Identifica cuáles de las afirmaciones anteriores consideras mitos y cuáles verdades, y prepárate para justificar tus respuestas con evidencia de las lecturas o con lo que ya sabes de objetos y arrays desde M2.
