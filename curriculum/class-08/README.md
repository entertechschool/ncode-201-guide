> 📦 **Módulo 2:** Clase 8 de 8

# Clase 08: Prototipos en JavaScript

## Resumen

En esta clase cerramos el **Módulo 2: Fundamentos de Programación** implementando la cadena de prototipos en JavaScript para optimizar nuestro **Gestor de Presupuesto Personal**. Aprenderemos a mover métodos del constructor al prototipo para mejorar el rendimiento de memoria y crearemos herencia prototipal con subtipos especializados como `Ingreso` y `Egreso`. Esta es la culminación del paradigma orientado a objetos tradicional de JavaScript, preparándonos para el siguiente módulo donde manipularemos el DOM como una API de objetos. Es fundamental entender los prototipos porque son la base de cómo funciona la herencia en JavaScript, incluso cuando usemos sintaxis moderna de clases en niveles avanzados.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción**   |
| ---- | ---- | ---- |
| **1. Introducción y Contexto**   | 15 min | Conexión con funciones constructoras y motivación para optimizar con prototipos   |
| **2. Demo Inicial y Debate Técnico** | 30 min | Demostración de cadena de prototipos + diferencia entre `prototype` y `__proto__` | 
| **3. Laboratorio Principal - Parte 1**  | 30 min | Migración de métodos al prototipo. Checkpoint: métodos compartidos funcionando  |
| **4. Laboratorio Principal - Parte 2**  | 40 min | Herencia prototipal con `Object.create()`. Checkpoint: subtipos especializados operativos |
| **5. Laboratorio Principal - Parte 3**  | 50 min | Integración con UI Bootstrap + validaciones. Checkpoint: aplicación completa con herencia   |
| **6. Síntesis y Cierre**  | 15 min | Consolidación de prototipos + preparación para DOM como API de objetos   |

## 🎯 Objetivos de aprendizaje

Al finalizar esta clase, serás capaz de:

1. **Implementar** métodos compartidos usando `Constructor.prototype.metodo = function() {}` para optimizar memoria
2. **Crear** herencia prototipal con `Object.create()` y especializar comportamientos en subtipos
3. **Validar** tipos de objetos usando `instanceof` y `hasOwnProperty()` en jerarquías de herencia

---

## 📌 Preparación para la clase

> Antes de llegar a clase, investiga y prepárate:

#### 🔍 Misión de Investigación

**1. ¿Qué es la cadena de prototipos (prototype chain) en JavaScript?**
- Investiga: ¿Cómo busca JavaScript un método cuando lo llamas en un objeto?
- Encuentra: Un ejemplo práctico de cómo JavaScript recorre la cadena hasta encontrar el método
- Prepárate para explicar: Por qué esto es más eficiente que tener métodos duplicados en cada instancia

**2. ¿Qué diferencia hay entre `prototype` y `__proto__`?**
- Investiga: ¿Cuál es la diferencia entre la propiedad `prototype` de una función y `__proto__` de un objeto?
- Encuentra: Ejemplos de cada uno en el navegador usando DevTools
- Prepárate para explicar: Cuándo se usa cada uno y por qué son diferentes

**3. ¿Qué hace `Object.create()` y para qué se usa?**
- Investiga: ¿Cómo `Object.create()` establece herencia entre objetos?
- Encuentra: La diferencia entre `Object.create()` y usar `new` con un constructor
- Prepárate para explicar: Por qué es necesario para crear herencia prototipal

**4. ¿Para qué sirve el operador `instanceof` en JavaScript?**
- Investiga: ¿Cómo `instanceof` verifica la herencia en una cadena de prototipos?
- Encuentra: Ejemplos de validación de tipos con `instanceof` en aplicaciones reales
- Prepárate para explicar: Cuándo usar `instanceof` vs `typeof` vs `hasOwnProperty()`

#### 📚 Recursos previos sugeridos

* **MDN - Inheritance and the prototype chain**
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

* **JavaScript.info - Prototypes**
  https://javascript.info/prototypes

* **MDN - Object.create()**
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

* **Youtube: ¿Que son los PROTOTIPOS y como funcionan en JavaScript?**
  https://www.youtube.com/watch?v=TWSI9SybwmI

---

## Resultados esperados

### Podrán hacer
1. **Optimizar funciones constructoras** moviendo métodos al prototipo para mejor rendimiento de memoria
2. **Crear jerarquías de herencia** usando `Object.create()` para establecer relaciones entre constructores
3. **Validar tipos dinámicamente** usando `instanceof` y `hasOwnProperty()` en aplicaciones complejas

### Podrán explicar
1. **Cómo funciona la cadena de prototipos** y por qué es fundamental en JavaScript
2. **La diferencia entre `prototype` y `__proto__`** y cuándo usar cada concepto
3. **Por qué los prototipos son más eficientes** que métodos duplicados en constructores

### Podrán implementar
1. **Un sistema de herencia prototipal** con constructores padre e hijo especializados
2. **Validaciones robustas de tipos** usando herramientas nativas de JavaScript
3. **Una aplicación web optimizada** que aproveche la eficiencia de métodos compartidos

---

## Glosario de Nuevos Términos

* **Prototype Chain**: Cadena de búsqueda que JavaScript sigue automáticamente para encontrar métodos y propiedades en objetos
* **Prototipo**: Objeto que sirve como plantilla y del cual otros objetos pueden heredar propiedades y métodos
* **Herencia Prototipal**: Mecanismo de JavaScript para que objetos compartan comportamientos a través de la cadena de prototipos
* **Instanciación**: Proceso de crear objetos específicos a partir de funciones constructoras
* **Optimización de Memoria**: Técnica de compartir métodos entre instancias para reducir el uso de memoria
* **Validación de Tipos**: Verificación del tipo de objeto para asegurar comportamiento correcto en tiempo de ejecución
