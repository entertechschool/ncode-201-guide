> 📦 **Módulo 2:** Clase 4 de 4

# Clase 07: Programación Orientada a Objetos

## Resumen

En esta clase transformamos nuestro enfoque hacia la programación orientada a objetos usando funciones constructoras en JavaScript. Refactorizaremos el **Gestor de Presupuesto Personal** reemplazando las funciones puras del laboratorio anterior con objetos que encapsulen tanto datos como comportamientos. Esta transición nos permitirá crear código más organizado, escalable y mantenible. Es un momento crucial donde los estudiantes comprenden cómo la programación puede organizarse de manera más estructurada y profesional, consolidando los tres paradigmas aprendidos en el módulo.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción**   |
| ---- | ---- | ---- |
| **1. Introducción y Contexto**   | 15 min | Conexión con programación funcional y motivación para usar objetos en el presupuesto   |
| **2. Demo Inicial y Debate Técnico** | 30 min | Funciones constructoras vs funciones regulares + demostración de `this` keyword | 
| **3. Laboratorio Principal - Parte 1**  | 30 min | Creación de funciones constructoras básicas. Checkpoint: instancias de Movimiento y Presupuesto creadas  |
| **4. Laboratorio Principal - Parte 2**  | 40 min | Encapsulación de comportamientos en métodos. Reto en vivo + Checkpoint: métodos funcionando correctamente |
| **5. Laboratorio Principal - Parte 3**  | 50 min | Refactorización completa e integración con DOM. Reto en vivo + Retos autónomos + Checkpoint: aplicación completamente funcional con objetos   |
| **6. Síntesis y Cierre**  | 15 min | Consolidación de conceptos OOP + conexión con taller integrador en la próxima clase   |

## 🎯 Objetivos de aprendizaje

Al finalizar esta clase, serás capaz de:

1. **Implementar** funciones constructoras usando la sintaxis `function Constructor() {}` y la palabra clave `new`
2. **Encapsular** datos y comportamientos relacionados en objetos usando `this.propiedad` y `this.metodo`
3. **Refactorizar** código existente desde un paradigma funcional hacia orientación a objetos mantenible

---

## 📌 Preparación para la clase

> Antes de llegar a clase, investiga y prepárate:

#### 🔍 Misión de Investigación

**1. ¿Qué es la palabra clave `this` en JavaScript?**
Investiga cómo `this` cambia de contexto dependiendo de dónde se use. Busca ejemplos de `this` en objetos vs `this` en funciones normales.

**2. ¿Qué diferencia hay entre una función normal y una función constructora?**
Explora la diferencia entre `function miFuncion()` y `function MiConstructor()`. ¿Por qué una comienza con mayúscula?

**3. ¿Para qué se usa la palabra clave `new` en JavaScript?**
Busca ejemplos de cómo `new` crea objetos. ¿Qué pasa si llamas una función constructora sin `new`?

**4. ¿Qué ventajas tiene organizar código en objetos?**
Investiga conceptos como encapsulación y reutilización. ¿Por qué es mejor agrupar datos y funciones relacionadas?

#### 🧠 Preguntas de reflexión

Después de tu investigación, reflexiona:

- ¿Cómo organizarías la información de un presupuesto usando objetos?
- ¿Qué datos y comportamientos van juntos en un "movimiento" de presupuesto?
- ¿Por qué crees que es útil poder crear múltiples objetos del mismo tipo?
- ¿Cómo se conecta esto con lo que aprendiste sobre programación funcional?

#### 📚 Recursos sugeridos

1. **Artículo:** [MDN - Trabajando con objetos](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics)  
   _Explica los fundamentos de crear y manipular objetos en JavaScript, incluyendo funciones constructoras._

2. **Artículo:** [Funciones Constructoras en JavaScript](https://www.javascripttutorial.net/javascript-constructor-function/)  
   _Conceptos principales sobre cómo escribir una función constructora, el uso de `this`, y la relación con prototipos._

3. **Video (opcional):** [JavaScript CONSTRUCTORS in 5 minutes! 🛠)](https://www.youtube.com/watch?v=WPmAu26LZKo)  
   _Ejemplo práctico para ilustrar la creación de objetos usando funciones constructoras y `new`._

---

## Resultados esperados

### Podrán hacer
1. **Crear funciones constructoras** que encapsulen la lógica del presupuesto personal
2. **Usar `this` correctamente** para acceder a propiedades y métodos dentro de objetos
3. **Refactorizar aplicaciones existentes** hacia un modelo orientado a objetos más mantenible

### Podrán explicar
1. **La diferencia conceptual** entre programación funcional y orientada a objetos
2. **Cuándo usar objetos vs funciones** según el tipo de problema que estén resolviendo
3. **Por qué la encapsulación** mejora la organización y mantenibilidad del código

### Podrán implementar
1. **Un sistema de objetos integrado** para manejar movimientos y presupuestos
2. **Métodos de validación y cálculo** encapsulados dentro de los objetos apropiados
3. **Una interfaz HTML funcional** que interactúe con el modelo de objetos creado

---

## Glosario de Nuevos Términos

- **Objetos**: Estructuras que combinan datos (propiedades) y comportamientos (métodos).
- **Abstracción**: Enfoque para simplificar la realidad, resaltando solo los rasgos esenciales.
- **POO (Programación Orientada a Objetos)**: Paradigma que modela el software en términos de objetos que se comunican entre sí.
- **Funciones Constructoras**: Forma tradicional en JavaScript de crear objetos utilizando la palabra clave `new`.
- **Encapsulación**: Técnica para ocultar los detalles de implementación y exponer solo los métodos o propiedades necesarias.
