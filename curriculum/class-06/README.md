> 📦 **Módulo 2:** Clase 6 de 8

# Clase 06: Programación Funcional

## Resumen

En esta clase aplicamos el paradigma de **programación funcional** para refactorizar y optimizar el proyecto **Personal Budget**. Después de haber trabajado con programación imperativa en la clase anterior, ahora exploraremos un enfoque declarativo que nos permitirá escribir código más limpio, predecible y mantenible. Implementaremos funciones puras y utilizaremos métodos funcionales como `map()`, `filter()` y `find()` para transformar datos financieros de manera eficiente. Esta transición hacia la programación funcional es fundamental para prepararnos hacia conceptos más avanzados como la programación orientada a objetos y sentar las bases para el trabajo colaborativo que caracteriza el desarrollo profesional.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción**   |
| ---- | ---- | ---- |
| **1. Introducción y Contexto**   | 15 min | Conexión con programación imperativa y objetivos del paradigma funcional   |
| **2. Demo Inicial y Debate Técnico** | 30 min | Funciones puras vs impuras + demostración de métodos funcionales + discusión sobre ventajas y casos de uso |
| **3. Laboratorio Principal - Parte 1**  | 30 min | Funciones Puras Básicas. Checkpoint: funciones de extracción y validación operativas  |
| **4. Laboratorio Principal - Parte 2**  | 40 min | Filtrado y Búsqueda Funcional. Reto en vivo + Checkpoint: sistema de filtros con `filter()` y `find()` funcionando |
| **5. Laboratorio Principal - Parte 3**  | 50 min | Sistema de Reportes. Reto en vivo + Retos autónomos + Checkpoint: reportes financieros generados mediante composición de funciones   |
| **6. Síntesis y Cierre**  | 15 min | Consolidación paradigma funcional vs imperativo + preparación para programación orientada a objetos   |

## 🎯 Objetivos de aprendizaje

Al finalizar esta clase, serás capaz de:

1. **Implementar** funciones puras que manipulen datos financieros sin efectos secundarios
2. **Utilizar** métodos funcionales (`map()`, `filter()`, `find()`) para transformar y filtrar arrays de movimientos
3. **Refactorizar** código imperativo hacia un enfoque funcional más declarativo y mantenible

---

## 📌 Preparación para la clase

> Antes de llegar a clase, investiga y prepárate:

#### 🔍 Misión de Investigación

**1. Funciones Puras:**
- Investiga: ¿Qué características debe cumplir una función para ser considerada "pura"?
- Encuentra: Un ejemplo real de una función pura vs una función impura en JavaScript
- Prepárate para explicar: ¿Por qué las funciones puras facilitan el testing y debugging?

**2. Método map():**
- Investiga: ¿Cómo funciona `map()` y qué retorna siempre?
- Encuentra: Tres casos de uso diferentes donde `map()` es más eficiente que un loop tradicional
- Prepárate para explicar: ¿Cuándo usar `map()` vs `forEach()` vs `for` loop?

**3. Métodos filter() y find():**
- Investiga: ¿Cuál es la diferencia principal entre `filter()` y `find()` en términos de lo que retornan?
- Encuentra: Ejemplos prácticos de cuándo usar cada uno para buscar datos en un array
- Prepárate para explicar: ¿Cómo estos métodos mantienen la inmutabilidad del array original?

**4. Principio DRY en programación funcional:**
- Investiga: ¿Cómo la programación funcional ayuda a evitar la repetición de código?
- Encuentra: Un ejemplo de refactoring de código repetitivo usando funciones reutilizables
- Prepárate para explicar: ¿Qué ventajas tiene crear funciones pequeñas y composables?

#### 📚 Recursos previos sugeridos

* **Introducción a la Programación Funcional - MDN**
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

* **Functional Programming in JavaScript - FreeCodeCamp**
  https://www.freecodecamp.org/news/functional-programming-in-javascript/

* **Array Methods Explained - JavaScript.info**
  https://javascript.info/array-methods

---

## Glosario de Nuevos Términos

* **Función Pura**: Función que siempre retorna el mismo resultado para los mismos argumentos y no produce efectos secundarios
* **Inmutabilidad**: Principio de no modificar datos existentes, sino crear nuevas versiones transformadas
* **Función de Orden Superior**: Función que recibe otras funciones como parámetros o retorna funciones como resultado
* **Programación Declarativa**: Paradigma que se enfoca en describir qué queremos lograr, no cómo lograrlo paso a paso
* **Efectos Secundarios**: Modificaciones del estado global o acciones fuera del scope de la función (console.log, modificar variables externas, etc.)
* **Composición de Funciones**: Técnica de combinar funciones simples para crear funcionalidades más complejas