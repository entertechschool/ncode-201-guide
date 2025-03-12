# Lectura y Debate 08

## 🎯 Objetivos de la Lectura y el Debate
Debatir en esta sesión te permitirá profundizar en el funcionamiento de la herencia prototipal en JavaScript. A través del análisis crítico, comprenderás cómo se conecta la cadena de prototipos (prototype chain), diferenciarás entre `prototype` y `__proto__`, y explorarás el uso de funciones constructoras para crear objetos. Este debate te ayudará a aplicar estos conceptos en el desarrollo de aplicaciones modernas y escalables.

## 🔑 Conceptos Clave a profundizar
- **Prototype Chain:** Comprender cómo los objetos en JavaScript se enlazan y comparten métodos y propiedades a través de una cadena de prototipos.
- **`__proto__` vs. `prototype`:** Diferenciar entre la referencia interna que tiene cada objeto (`__proto__`) y la propiedad `prototype` de las funciones constructoras, fundamental para establecer la herencia.
- **Funciones Constructoras:** Utilizar funciones constructoras para crear objetos que compartan métodos mediante el prototipo, facilitando la implementación de patrones de herencia.

## 📚 Artículos recomendados para leer
- [MDN Web Docs - Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain){:target="_blank"}

- [MDN Web Docs - Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects){:target="_blank"}

- [Youtube: ¿Que son los PROTOTIPOS y como funcionan en JavaScript?](https://www.youtube.com/watch?v=TWSI9SybwmI){:target="_blank"}

## ☑️ Lista de Mitos y Verdades para Analizar
1. "El `prototype` de una función y el `__proto__` de un objeto son exactamente lo mismo."  

2. "La cadena de prototipos permite la reutilización de métodos y propiedades, lo cual es esencial para la herencia en JavaScript."

3. "Las funciones constructoras son obsoletas y no se usan en el desarrollo moderno de JavaScript."  

4. "Manipular correctamente `__proto__` puede mejorar la reutilización de código, pero su uso inadecuado puede generar problemas de seguridad y mantenimiento."

5. "Modificar el `prototype` de una función siempre afecta a todas las instancias existentes sin excepción."  

> **Instrucción:** Identifica cuáles de las afirmaciones anteriores consideras mitos y cuáles verdades, y prepárate para justificar tus respuestas con evidencia de las lecturas recomendadas o basándote en tus experiencias previas.