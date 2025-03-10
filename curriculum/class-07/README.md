> 📦 **Módulo 2:** Clase 3 de 4

# Clase 07: Programación Orientada a Objetos con Funciones Constructoras

## Resumen

En la Clase 07 continuamos avanzando en el proyecto **Personal Budget**, enfocándonos ahora en la **Programación Orientada a Objetos (POO)** utilizando **funciones constructoras** en JavaScript. Para ello, trabajamos con 2 recursos principales:

1. **Guía de Lectura y Debate**  
   En esta guía, los estudiantes llegaron preparados con el contexto de objetos, abstracción y el uso de `function Nombre(...) { ... }` para crear instancias, listos para debatir sobre las ventajas de la POO frente a estructuras planas o abordajes puramente imperativos.

2. **Guía de Laboratorio**  
   A través de la práctica inmediata, se aplicaron estos conceptos creando y manipulando objetos en el proyecto, refactorizando parte del código para encapsular datos y comportamientos dentro de funciones constructoras.

---

## Estructura Sugerida de la Clase

| **Fase**                         | **Duración** | **Descripción**                                                                                                                                                                                                                     |
|---------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1. Introducción**             | 15 min       | Contextualización y activación de conocimientos previos (programación imperativa y funcional). Se prepara el camino para comprender la orientación a objetos y por qué JavaScript soporta este paradigma a través de funciones constructoras. |
| **2. Debate Conceptual y Demo Técnica** | 45 min       | Discusión sobre aspectos fundamentales de la POO (abstracción, encapsulación, ventajas frente a estructuras planas). Se muestra cómo crear objetos con `function Constructor(...) {}` y se ejemplifican validaciones o métodos básicos.       |
| **3. Laboratorio**              | 100 min      | Trabajo práctico en el proyecto “Personal Budget”, refactorizando el manejo de ingresos/egresos con objetos (funciones constructoras). Se establecen dos checkpoints: a los 30 y 60 minutos, con revisiones grupales y feedback técnico.        |
| **4. Cierre**                   | 15 min       | Síntesis de aprendizajes clave y preparación para la siguiente clase, adelantando el tema de prototipos y la integración de métodos para mostrar objetos en el DOM.                                                                |

---

## Resultados Esperados

Al concluir esta clase, los estudiantes habrán **incorporado el paradigma orientado a objetos** en el flujo de su aplicación, comprendiendo cómo la encapsulación puede mejorar la mantenibilidad y la escalabilidad del código.

En concreto, los estudiantes…

### Podrán hacer
1. **Crear Objetos con Funciones Constructoras**  
   - Definir y utilizar `function Movimiento(tipo, monto, descripcion) { ... }` para instanciar objetos de manera repetible.

2. **Refactorizar Código Procedural a un Modelo OOP**  
   - Sustituir estructuras planas (arrays sueltos) por objetos que agrupen datos y comportamientos (valores y validaciones).

3. **Realizar Validaciones Dentro de un Objeto**  
   - Encapsular la lógica de verificación (por ejemplo, `monto > 0`, `tipo` válido) directamente en la función constructora, mejorando la coherencia del sistema.

### Podrán explicar
1. **Principio de Abstracción y Encapsulación**  
   - Argumentar cómo la orientación a objetos facilita la simplificación de la realidad (abstracción) y el aislamiento de detalles internos (encapsulación).

2. **Ventajas de la POO Frente a Otros Paradigmas**  
   - Exponer por qué agrupar datos y métodos bajo un mismo “contrato” puede otorgar escalabilidad y mantenibilidad, en comparación con enfoques puramente imperativos o funcionales.

3. **Uso de la Palabra Clave `this` y `new`**  
   - Justificar cómo `this` se relaciona con el objeto recién creado, distinguiendo así entre variables locales y propiedades de instancia.

### Podrán implementar
- **Instancias de Objetos** para manejar movimientos (ingresos/egresos) en “Personal Budget”.  
- **Lógica de Validación Interna**, evitando datos inválidos y manteniendo la coherencia del sistema.  
- **Refactor Práctico** de partes del código legacy, sustituyendo arreglos y funciones dispersas por un esquema orientado a objetos.

---

## Glosario de Nuevos Términos

- **Objetos**: Estructuras que combinan datos (propiedades) y comportamientos (métodos).
- **Abstracción**: Enfoque para simplificar la realidad, resaltando solo los rasgos esenciales.
- **POO (Programación Orientada a Objetos)**: Paradigma que modela el software en términos de objetos que se comunican entre sí.
- **Funciones Constructoras**: Forma tradicional en JavaScript de crear objetos antes de ES6, utilizando la palabra clave `new`.
- **Encapsulación**: Técnica para ocultar los detalles de implementación y exponer solo los métodos o propiedades necesarias.
- **Prototipo** (mención breve): Mecanismo que define métodos compartidos por las instancias creadas a partir de una función constructora (tema a profundizar en la siguiente clase).

