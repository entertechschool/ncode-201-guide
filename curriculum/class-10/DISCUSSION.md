# Lectura y Debate 10: Datos desde la web (fetch, Promesas y JSON)

## 🎯 Objetivos de la Lectura y el Debate

Debatir en esta sesión te permitirá entender qué es una **API**, por qué los datos de internet **tardan** en llegar (asincronía) y por qué **JSON** es el formato universal en que viajan. Analizarás por qué una app no puede "congelarse" mientras espera datos, y por qué casi nunca recibes los datos con la forma exacta que tu app necesita (de ahí el adaptador).

## 🔑 Conceptos Clave a profundizar

- **Asincronía:** una operación (como pedir datos por red) **tarda**, y JavaScript no se bloquea esperándola — sigue y reacciona cuando llega.
- **`fetch` y Promesas:** `fetch` pide datos a una URL y devuelve una Promesa; se consume con `.then` (éxito) y `.catch` (error).
- **JSON:** formato de texto en que responden las APIs; su estructura refleja objetos JS, pero **no** es igual a la forma limpia de tu app.

## 📚 Artículos recomendados para leer

- [MDN — Usar Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch){:target="_blank"}

- [MDN — Trabajar con JSON](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON){:target="_blank"}

- [PokeAPI — Documentación](https://pokeapi.co/docs/v2){:target="_blank"}

## ☑️ Lista de Mitos y Verdades para Analizar

1. "Después de `fetch(url)`, los datos ya están disponibles en la línea siguiente."

2. "JSON es un tipo de objeto de JavaScript, no un formato de texto."

3. "La API siempre te entrega los datos con la estructura exacta que tu app necesita."

4. "El código asíncrono existe para que la interfaz no se congele mientras espera operaciones lentas (como la red)."

5. "`Promise.all` ejecuta las promesas una por una, esperando a que cada una termine antes de empezar la siguiente."

> **Instrucción:** Identifica cuáles de las afirmaciones anteriores consideras mitos y cuáles verdades, y prepárate para justificar tus respuestas con evidencia de las lecturas o con lo que comprobaste al cargar tu Pokédex desde la API.
