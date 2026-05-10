> 📦 **Módulo 3:** Clase 12 de 12

# Clase 12: Manejo de Excepciones en JavaScript

## Resumen

En esta clase profundizaremos en el manejo de **excepciones en JavaScript**, desarrollando criterios sólidos para detectar, capturar y gestionar errores de forma estructurada. Se abordará el uso adecuado de `try`, `catch`, `finally` y `throw`, así como la creación de errores personalizados. Esta sesión prepara al estudiante para una interacción más consciente con los errores que surgen tanto en el desarrollo como en el uso de herramientas con IA, fortaleciendo su capacidad de depuración y resiliencia técnica.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
|---------|--------------|-----------------|
| **1. Refuerzo Práctico Inicial** | 30 min | Ejercicio rápido de identificación de errores en código sencillo sin manejo de excepciones. Análisis colectivo del impacto del fallo. |
| **2. Debate Técnico y Demostración** | 20 min | Discusión crítica: ¿cuándo capturar un error y cuándo no? Exploración de `try/catch`, errores sincrónicos vs asincrónicos, errores personalizados. Demostración en vivo. |
| **Break** | 10 min | Descanso previo al laboratorio |
| **3. Laboratorio Práctico** | 100 min | Serie de ejercicios guiados en los que se implementan validaciones, uso de `throw`, control de flujo con `finally`, y simulación de errores en entradas de usuario. Checkpoints a los 30, 50 y 80 minutos. |
| **4. Síntesis y Proyección** | 20 min | Consolidación de criterios para manejar errores, presentación de buenas prácticas y anticipación al uso de Promesas + asincronía en las siguientes clases. |

## 🧐 Preparación para la clase

### ➤ Reflexiones a plantearse

> Antes de llegar a clase, reflexiona sobre estas preguntas y apóyate de los recursos sugeridos o de herramientas de IA:

1. ¿Recuerdas algún error en tus programas anteriores que no supiste cómo manejar? ¿Cómo afectó tu proceso?
2. ¿Qué consecuencias podría tener un mal manejo de errores en una aplicación web real?
3. ¿En qué casos crees que **no deberías** capturar una excepción?

### ➤ Recursos para investigar

- [MDN: try...catch - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch){:target="_blank"}
- [Artículo: “Understanding the Difference Between Errors and Exceptions in JavaScript”](https://i-m-prabhat.medium.com/understanding-the-difference-between-errors-and-exceptions-in-javascript-9d49f474b7d1){:target="_blank"}
- [Video corto: Manejo de Errores (try/catch)](https://www.youtube.com/watch?v=GvDvOCZ9dAY){:target="_blank"}

---

## Resultados esperados

Al finalizar esta clase, los estudiantes deben ser capaces de:

- Comprender el propósito del sistema de excepciones en JavaScript.
- Implementar `try/catch/finally` en funciones que manipulen datos del usuario o realicen validaciones complejas. **`finally` es obligatorio** en al menos un caso (ej. ocultar un spinner sin importar si la operación tuvo éxito o falló).
- Definir errores personalizados y lanzar excepciones de forma justificada.
- Evaluar cuándo conviene capturar un error y cuándo dejar que se propague.
- Reflexionar sobre cómo comunicar fallas de manera clara y útil en sus aplicaciones.
- **Bonus opcional al cierre:** crear nodos DOM dinámicamente con `document.createElement()` + `appendChild()`. Patrón crítico que vas a usar masivamente en M5 (listas dinámicas de personas, gastos, transferencias).


## Glosario de Nuevos Términos
- **Excepción:** Evento inesperado que interrumpe el flujo normal de ejecución de un programa, pero que se puede controlar.
- **Error Object:** Objeto nativo de JavaScript que representa un error, e.g., new Error('mensaje').
- **Stack trace:** Pista del camino de ejecución que llevó al error, útil para depuración.
- **Throw:** Palabra clave que permite lanzar manualmente una excepción en el código.
- **try/catch:** Estructura de control que permite capturar excepciones durante la ejecución de bloques de código.
- **finally:** Bloque que se ejecuta siempre al final de una estructura try...catch, sin importar si hubo error.
