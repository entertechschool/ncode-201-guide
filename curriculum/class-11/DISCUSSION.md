# Lectura y Debate 11: async/await y búsqueda en la API

## 🎯 Objetivos de la Lectura y el Debate

Debatir en esta sesión te permitirá entender que **`async/await`** no es una tecnología distinta de las Promesas, sino otra forma —más legible— de escribir lo mismo que viste en C10 con `.then`. Analizarás también la diferencia entre **filtrar** lo que ya tienes cargado y **buscar** un recurso en la API, y qué significa que el **estado** de tu app (tu colección) crezca según lo que el usuario hace.

## 🔑 Conceptos Clave a profundizar

- **`async/await`:** `async` marca una función asíncrona y `await` pausa hasta que una promesa resuelve. Es **azúcar sobre las Promesas** de C10; el código se lee como pasos secuenciales.
- **Filtrar vs buscar:** filtrar recorre lo que ya está en memoria (la rejilla); buscar consulta la API por un recurso específico (aunque no lo tengas).
- **Estado de la app:** `pokedex` es la lista de lo que tienes; agregar (sin duplicar) la hace crecer, y `render` la refleja.

## 📚 Artículos recomendados para leer

- [MDN — async function](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function){:target="_blank"}

- [MDN — await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/await){:target="_blank"}

- [MDN — Array.prototype.some](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some){:target="_blank"}

## ☑️ Lista de Mitos y Verdades para Analizar

1. "`async/await` reemplaza a las Promesas: son tecnologías distintas y opuestas."

2. "Puedes usar `await` en cualquier función, no hace falta que sea `async`."

3. "Filtrar la rejilla y buscar en la API son lo mismo: ambos encuentran cualquier Pokémon."

4. "`async/await` hace el código asíncrono más legible porque se lee de arriba a abajo, como código secuencial."

5. "Agregar el mismo Pokémon dos veces a la colección no tiene ninguna consecuencia."

> **Instrucción:** Identifica cuáles de las afirmaciones anteriores consideras mitos y cuáles verdades, y prepárate para justificar tus respuestas con evidencia de las lecturas o con lo que comprobaste al reformular y buscar en tu Pokédex.
