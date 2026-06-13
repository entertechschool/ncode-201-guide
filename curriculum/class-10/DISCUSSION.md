# Lectura y Debate 10: Asincronía y Promesas

## 🎯 Objetivos de la Lectura y el Debate

Debatir en esta sesión te permitirá entender por qué existe la **asincronía** en JavaScript y qué problema resuelve. Comprenderás que una app no puede "congelarse" mientras espera datos lentos, y cómo las **Promesas** representan un valor que llegará en el futuro, permitiendo reaccionar cuando llega (`.then`) o cuando falla (`.catch`).

## 🔑 Conceptos Clave a profundizar

- **Sincrónico vs asincrónico:** el código sincrónico bloquea (cada línea espera a la anterior); el asincrónico permite que una operación "tarde" mientras el programa sigue.
- **Promesa:** objeto que representa un valor futuro. Tiene tres estados: `pending`, `fulfilled`, `rejected`.
- **`.then` / `.catch`:** consumir una promesa — reaccionar cuando se resuelve o cuando se rechaza.

## 📚 Artículos recomendados para leer

- [MDN — Usar promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises){:target="_blank"}

- [MDN — setTimeout](https://developer.mozilla.org/es/docs/Web/API/setTimeout){:target="_blank"}

- [MDN — Introducción al JavaScript asíncrono](https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Introducing){:target="_blank"}

## ☑️ Lista de Mitos y Verdades para Analizar

1. "`setTimeout` pausa el programa: nada se ejecuta hasta que el tiempo termina."

2. "Una Promesa devuelve los datos directamente; por eso puedes usarlos en la línea siguiente."

3. "Si una promesa falla y no tiene `.catch`, el error simplemente desaparece sin consecuencias."

4. "El código asíncrono existe para que la interfaz no se congele mientras espera operaciones lentas."

5. "Una promesa puede pasar de `fulfilled` a `rejected` varias veces durante su vida."

> **Instrucción:** Identifica cuáles de las afirmaciones anteriores consideras mitos y cuáles verdades, y prepárate para justificar tus respuestas con evidencia de las lecturas o con lo que probaste en el laboratorio.
