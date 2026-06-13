# Lectura y Debate 11: async/await, fetch y JSON

## 🎯 Objetivos de la Lectura y el Debate

Debatir en esta sesión te permitirá comprender qué es una **API**, por qué **JSON** es el formato universal con que viajan los datos en la web, y cómo `fetch` + `async/await` te permiten consumir servicios reales. Analizarás la diferencia entre la respuesta cruda (`response`) y su contenido ya convertido, y por qué `async/await` hace el código asíncrono más legible.

## 🔑 Conceptos Clave a profundizar

- **JSON:** formato de texto para intercambiar datos cuya sintaxis refleja los objetos y arrays de JavaScript. Es lo que devuelve toda API; `response.json()` lo convierte en objeto JS.
- **`fetch`:** función para pedir datos a una URL; devuelve una Promesa (las de C10).
- **`async/await`:** sintaxis que hace el código asíncrono lea como pasos secuenciales; `await` pausa hasta que la promesa resuelva.

## 📚 Artículos recomendados para leer

- [MDN — Usar Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch){:target="_blank"}

- [MDN — async / await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function){:target="_blank"}

- [PokeAPI — Documentación](https://pokeapi.co/docs/v2){:target="_blank"}

## ☑️ Lista de Mitos y Verdades para Analizar

1. "El objeto `response` que devuelve `fetch` ya contiene los datos del Pokémon listos para usar."

2. "JSON es un tipo de objeto de JavaScript, no un formato de texto."

3. "`async/await` reemplaza por completo a las Promesas: son tecnologías distintas y opuestas."

4. "`response.json()` y `JSON.parse()` hacen exactamente lo mismo y son intercambiables."

5. "Para usar `await` dentro de una función, esa función debe declararse con `async`."

> **Instrucción:** Identifica cuáles de las afirmaciones anteriores consideras mitos y cuáles verdades, y prepárate para justificar tus respuestas con evidencia de las lecturas o con lo que observaste al consumir la PokeAPI.
