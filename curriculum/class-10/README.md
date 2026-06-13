> 📦 **Módulo 3:** Clase 10 de 12

# Clase 10: Asincronía y Promesas

## Resumen

En la Clase 10 los estudiantes dan el salto conceptual más importante del módulo: entender la **asincronía** en JavaScript. En C09 los datos estaban listos al instante; hoy aprenden que una operación real (como pedir datos a una API) **tarda**, y que JavaScript no se queda congelado esperándola.

Se introducen `setTimeout`, el modelo mental del **event loop** ("JavaScript no espera") y las **Promesas** como objetos que representan un valor futuro. Para aislar el concepto del ruido de la red, se **simula** la demora sobre el array local de la Pokédex: una "API falsa" que entrega los datos tras un retardo. En C11 esa promesa simulada se reemplaza por una llamada real con `fetch`.

Se utilizan dos recursos fundamentales:

1. **Guía de Lectura y Debate:** reflexión sobre por qué existe la asincronía, qué problema resuelve y cómo las Promesas evitan el "infierno de callbacks".
2. **Guía de Laboratorio:** implementación de una carga asíncrona simulada en la Pokédex con `setTimeout`, `new Promise`, `.then()` y `.catch()`.

## Estructura Sugerida

| **Fase** | **Duración** | **Descripción** |
|---|---|---|
| **1. Refuerzo Inicial** | 15 min | Repaso del render de C09. Pregunta disparadora: ¿qué pasa si los datos tardan? |
| **2. Debate Técnico** | 30 min | Sincrónico vs asincrónico, el event loop, Promesas y sus estados. |
| **3. Demostración** | 15 min | Demo en vivo: "Cargando…" → tarjetas, con `setTimeout` y Promesa. |
| **4. Laboratorio** | 100 min | Implementación guiada con checkpoints (30', 60', 90'). |
| **5. Cierre** | 20 min | Síntesis + puente a `fetch` real (C11). |

---

## Resultados Esperados

Al culminar esta clase, los estudiantes comprenderán cómo JavaScript maneja operaciones que no se completan al instante, base indispensable para consumir APIs en C11.

### Podrán hacer

- Usar `setTimeout` para diferir la ejecución de una función.
- Crear una Promesa con `new Promise(resolve, reject)`.
- Consumir una Promesa con `.then()` (éxito) y `.catch()` (error).

### Podrán explicar

- La diferencia entre código sincrónico (bloqueante) y asincrónico (no bloqueante).
- Por qué JavaScript "no espera" y sigue trabajando durante una operación lenta.
- Los tres estados de una Promesa: `pending`, `fulfilled`, `rejected`.

### Podrán implementar

- Una carga asíncrona simulada con un estado "Cargando…" temporal.
- Una función que retorna una Promesa que resuelve los datos tras un retardo.
- El manejo de los dos caminos de una Promesa (resolución y rechazo).

---

## 🧠 El modelo mental — JavaScript no espera

| Concepto | Idea |
|---|---|
| **Sincrónico** | Línea por línea; cada una bloquea hasta terminar. |
| **Asincrónico** | La operación "tarda" y el programa **sigue**. |
| **`setTimeout`** | Programar algo para "más tarde". |
| **Promesa** | Un "ticket" por un valor que llegará (o fallará). |
| **`.then` / `.catch`** | Reaccionar cuando el valor llega / cuando falla. |

> La Promesa simulada de hoy tiene la **misma forma** que el `fetch` real de C11: por dentro cambia la fuente, por fuera se consume igual con `.then`/`.catch`.
