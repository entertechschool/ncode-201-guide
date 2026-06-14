> 📦 **Módulo 3:** Clase 11 de 12

# Clase 11: async/await, fetch y JSON

## Resumen

En la Clase 11 la Pokédex deja de usar datos locales y empieza a **consumir una API real**. Los estudiantes aprenden el formato **JSON** (cómo viajan los datos entre servidor y navegador), la función **`fetch`** para pedirlos, y la sintaxis **`async/await`** para escribir código asíncrono legible. La promesa simulada de C10 se reemplaza por una llamada real a [PokeAPI](https://pokeapi.co/){:target="_blank"}.

Es la clase que conecta todo lo anterior: las promesas de C10 se vuelven concretas con datos de internet, y el render de C09 se reutiliza intacto gracias a una pequeña **función adaptadora** que traduce la estructura (anidada) que entrega la API a la estructura limpia del proyecto. Aprender a *adaptarse a lo que da la API* es, además, parte central de lo que la industria pide a un desarrollador JavaScript.

Se utilizan dos recursos fundamentales:

1. **Guía de Lectura y Debate:** análisis sobre qué es una API, por qué JSON es el formato universal de intercambio y cuándo conviene `async/await` frente a `.then`.
2. **Guía de Laboratorio:** implementación de un buscador de Pokémon que pide datos reales con `fetch`, los convierte con `response.json()` y los muestra reusando el render de C09.

## Estructura Sugerida

| **Fase** | **Duración** | **Descripción** |
|---|---|---|
| **1. Refuerzo Inicial** | 15 min | Repaso de promesas (C10). ¿Qué es una API? Mostrar JSON real de PokeAPI. |
| **2. Debate Técnico** | 30 min | JSON como formato, `fetch`, `async/await` vs `.then`. |
| **3. Demostración** | 15 min | Demo en vivo: buscar un Pokémon real y mostrarlo. |
| **4. Laboratorio** | 100 min | Implementación guiada con checkpoints (30', 60', 90'). |
| **5. Cierre** | 20 min | Síntesis + anticipación al manejo de errores (C12). |

---

## Resultados Esperados

Al culminar esta clase, los estudiantes podrán consumir una API REST pública, interpretar su respuesta JSON y mostrarla en la interfaz.

### Podrán hacer

- Pedir datos a una URL con `fetch` y esperarlos con `await`.
- Convertir una respuesta JSON en objeto JavaScript con `response.json()`.
- Escribir funciones `async` que devuelven datos de una API.

### Podrán explicar

- Qué es JSON y por qué su forma refleja los objetos de JavaScript.
- La diferencia entre la **respuesta** (`response`) y su **cuerpo** ya convertido.
- Por qué `async/await` hace el código asíncrono más legible que `.then` encadenado.

### Podrán implementar

- Una función `buscarPokemon(nombre)` que consulta la PokeAPI.
- Un buscador conectado a un input y un botón (y a la tecla Enter).
- Una función adaptadora que traduce la estructura de la API a la del proyecto, reusando el render de C09.

---

## 🌐 De la simulación a la red real

| C10 (simulado) | C11 (real) |
|---|---|
| `new Promise` + `setTimeout` | `fetch(url)` |
| `resolve(pokemonLocal)` | `await response.json()` |
| consumir con `.then` | consumir con `await` |

> La API entrega los datos con **otra estructura** (anidada). Una **función adaptadora** la traduce a la estructura limpia de C09, así el render no cambia — solo se adapta lo que entra.

## ⚠️ Nota sobre la red

Esta clase requiere **conexión a internet**. La PokeAPI es gratuita y no necesita clave. Si un nombre no existe, la app fallará — eso se resuelve en C12 con manejo de errores.
