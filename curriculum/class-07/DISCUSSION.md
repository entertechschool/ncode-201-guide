# Guía de Lectura y Debate 07
> **Tema Principal:** **Programación Orientada a Objetos** (POO) con **Funciones Constructoras** en JavaScript

En esta guía, encontrarás los recursos y las pautas para **prepararte antes de la clase** y para **participar activamente en el debate técnico** durante la sesión. El objetivo es que llegues con nociones claras sobre los fundamentos de la POO y, en particular, sobre la **forma tradicional** de construir objetos en JavaScript mediante **funciones constructoras**.

---

## 🎯 Objetivos de la Lectura y el Debate

1. **Conocer la diferencia entre Estructuras Planas y Objetos**  
   Identificar las ventajas de agrupar datos y lógica en objetos en lugar de usar arrays u objetos literales dispersos.

2. **Comprender la Abstracción y su importancia en la POO**  
   Entender por qué la simplificación de la realidad (encapsulando solo datos y métodos esenciales) facilita el mantenimiento y la escalabilidad del código.

3. **Explorar la Programación Orientada a Objetos (POO)**  
   Descubrir los pilares básicos de la POO (abstracción, encapsulación, herencia, polimorfismo) y cómo se aplican gradualmente en JavaScript.

4. **Analizar el uso de Funciones Constructoras**  
   Profundizar en cómo se crean y se instancian objetos usando `function Persona(...) { ... }`, por qué se usa `this`, y de qué manera se relaciona con el prototipo.

---

## 🔑 Conceptos Clave
| Concepto  | Definición  |
|----|----|
| **Programación Funcional**    | Paradigma basado en funciones puras, evitando efectos secundarios y promoviendo la inmutabilidad.                     |
| **Funciones Puras**           | Funciones cuyo resultado depende exclusivamente de sus argumentos y que no modifican el estado global de la aplicación. |
| **Funciones de Orden Superior** | Funciones que reciben otras funciones como parámetros o retornan funciones como resultado (por ejemplo, `map`, `filter`, `find`). |
| **Declarativo vs Imperativo** | El enfoque declarativo describe *qué* se quiere lograr, mientras que el imperativo detalla *cómo* llevarlo a cabo paso a paso. |
| **Principio DRY**             | *(Don’t Repeat Yourself)* Promueve la reutilización de código mediante funciones o módulos generales, evitando duplicidad. |

## 📚 Lecturas y Recursos Recomendados

1. **Artículo:** [MDN - Trabajando con objetos](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics)  
   _Explica los fundamentos de crear y manipular objetos en JavaScript, incluyendo funciones constructoras._

2. **Artículo:** [Funciones Constructoras en JavaScript](https://www.javascripttutorial.net/javascript-constructor-function/)  
   _Conceptos principales sobre cómo escribir una función constructora, el uso de `this`, y la relación con prototipos._

3. **Video (opcional):** [JavaScript CONSTRUCTORS in 5 minutes! 🛠)](https://www.youtube.com/watch?v=WPmAu26LZKo)  
   _Ejemplo práctico para ilustrar la creación de objetos usando funciones constructoras y `new`._

---

## ☑️ Mitos y Verdades para Debatir

Lee los siguientes enunciados y decide si son **Mito (❌)** o **Verdad (✅)**. En clase discutirás tus respuestas con argumentos y ejemplos:

1. “Todos los lenguajes orientados a objetos soportan herencia múltiple por defecto.”
2. “La `Programación Orientada a Objetos` permite organizar el código en entidades con responsabilidad clara.”  
3. “En JavaScript, usar funciones constructoras es obsoleto porque existen las clases desde ES6.” 
4. “La abstracción implica eliminar cualquier detalle que no sea importante para la funcionalidad principal.”
5. “Para crear objetos usando funciones constructoras, es obligatorio usar el prototipo explícitamente.”
6. “La POO promueve la escalabilidad al agrupar datos y comportamiento en entidades lógicas.”
7. “La palabra clave `this` en las funciones constructoras apunta a un objeto global, sin importar si se usa `new`.”

> **Instrucción:** Reflexiona y anota brevemente tus razones. ¿Por qué crees que cada enunciado es mito o verdad? Aporta ejemplos o referencias si las tienes.  

## 📝 Preparación para la Clase

1. **Ejemplo de Función Constructora**  
   - Intenta por tu cuenta crear una mini-función constructora que represente algo de tu vida cotidiana (por ejemplo, `function Persona(nombre, edad, ocupacion) { ... }`).  
   - Prueba instanciar 2 o 3 objetos y experimenta con la palabra clave `new`.

2. **Boceto de Refactor**  
   - Si ya tienes un array de movimientos (o cualquier otra estructura) en tu proyecto “Personal Budget”, piensa cómo lo reescribirías con una función constructora.  
   - Lleva ese boceto a clase para compartirlo con tus compañeros.

