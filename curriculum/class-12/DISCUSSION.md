# Lectura y Debate 12: Manejo de Errores y Estados

## 🎯 Objetivos de la Preparación para el Debate

Debatir en esta sesión te permitirá desarrollar criterios para **manejar errores** de forma profesional: cuándo capturar una excepción y cuándo dejar que se propague, cómo comunicar fallos de manera clara al usuario, y por qué una app debe comunicar sus **estados** (cargando, error, vacío). Analizarás un punto clave que confunde a muchos: por qué `fetch` no falla automáticamente ante un 404.

## 🔑 Conceptos Clave a profundizar

- **`try/catch/finally`:** `try` ejecuta código que puede fallar, `catch` lo atrapa, `finally` corre siempre (haya error o no).
- **`response.ok` y `throw`:** `fetch` solo falla si no hay red; un 404 hay que detectarlo con `response.ok` y lanzar un error propio con `throw new Error(...)`.
- **Estados de UI:** loading / success / error / empty — lo que el usuario ve en cada momento. Una buena app nunca deja al usuario sin saber qué pasa.

## 📚 Artículos recomendados para leer

- [MDN — try...catch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch){:target="_blank"}

- [MDN — Response.ok](https://developer.mozilla.org/es/docs/Web/API/Response/ok){:target="_blank"}

- [MDN — Markdown en GitHub (Basic writing and formatting)](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax){:target="_blank"}

## ☑️ Lista de Mitos y Verdades para Analizar

1. "`fetch` lanza un error automáticamente cuando el servidor responde 404 (no encontrado)."

2. "El bloque `finally` solo se ejecuta cuando NO hubo ningún error."

3. "Capturar todos los errores con `try/catch` y no hacer nada con ellos siempre es buena idea: evita que la app se rompa."

4. "Un mensaje de error específico ('No se encontró \"pikachuu\"') es más útil para el usuario que uno genérico ('Error')."

5. "Markdown es un lenguaje de programación que se ejecuta en el navegador."

> **Instrucción:** Identifica cuáles de las afirmaciones anteriores consideras mitos y cuáles verdades, y prepárate para justificar tus respuestas con evidencia de las lecturas o con lo que comprobaste al hacer robusta tu Pokédex.
