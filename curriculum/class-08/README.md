> 📦 **Módulo 2:** Clase 08 de 08

# Clase 08: Prototipos en JavaScript

## Resumen

En la Clase 08 se integran recursos clave para profundizar en la herencia prototipal en JavaScript y trasladar la lógica desarrollada en consola a una interfaz de usuario interactiva. Esta clase combina tres elementos esenciales:

1. **Guía de Lectura y Debate:** Actividad preparatoria para analizar la cadena de prototipos, diferenciar `prototype` y `__proto__`, y comprender el uso de funciones constructoras en el diseño de objetos.
2. **Guía de Laboratorio:** Orientada a la práctica, en la que se implementa una UI moderna junto con la lógica de prototipos para crear, clasificar y actualizar objetos (Ingreso y Egreso), y para recalcular totales de manera automática.
3. **Guía de Facilitador (Instructor):** Estrategia didáctica que integra teoría y práctica, promoviendo debates críticos, validaciones por checkpoints y feedback continuo para mejorar la implementación.

## Estructura sugerida

| **Fase**                    | **Duración** | **Descripción**                                                                                             |
|-----------------------------|--------------|-------------------------------------------------------------------------------------------------------------|
| **1. Introducción**         | 15 min       | Activación de conocimientos previos sobre prototipos y herencia en JavaScript.                             |
| **2. Debate y Demo Técnica**       | 45 min       | Discusión de los conceptos de Prototype Chain, la diferencia entre `prototype` y `__proto__`, y casos prácticos. Demostración en vivo de la implementación de funciones constructoras y la creación de subtipos (Ingreso y Egreso). |
| **3. Laboratorio Práctico** | 100 min      | Desarrollo guiado de la UI interactiva y la integración de la lógica de prototipos con checkpoints específicos. |
| **4. Cierre**               | 20 min       | Retroalimentación, síntesis de aprendizajes y preparación para proyectos futuros.                           |

---

## Resultados esperados

Al culminar esta clase, los estudiantes habrán desarrollado una comprensión profunda de la herencia prototipal en JavaScript y podrán aplicar estos conocimientos para:

### Podrán hacer
1. **Implementar Funciones Constructoras y Herencia Prototipal:**  
   Diseñar y crear objetos que se clasifiquen en "Ingreso" y "Egreso" utilizando técnicas de herencia prototipal, asegurando la reutilización de métodos y validaciones compartidas.

2. **Construir una Interfaz de Usuario Dinámica:**  
   Desarrollar una UI responsiva con HTML y CSS (apoyada en Bootstrap o Tailwind) que capture inputs y despliegue outputs dinámicos, integrando la lógica de prototipos con la presentación visual.

3. **Integrar Lógica de Actualización Automática:**  
   Implementar métodos que actualicen en tiempo real los totales de ingresos y egresos en la interfaz, sin intervención manual, garantizando precisión en el monitoreo del presupuesto.

### Podrán explicar
1. **El Funcionamiento de la Prototype Chain:**  
   Justificar cómo se propagan los métodos y propiedades a través de la cadena de prototipos en JavaScript y la importancia de esta estructura para la reutilización de código.

2. **La Diferencia entre `prototype` y `__proto__`:**  
   Explicar las funciones y roles distintos de `prototype` y `__proto__` en la creación de objetos y en la implementación de la herencia.

3. **La Importancia de la Herencia Prototipal en el Diseño de Aplicaciones:**  
   Argumentar cómo la utilización de prototipos facilita el mantenimiento, escalabilidad y eficiencia en el desarrollo de aplicaciones web.

### Podrán implementar
1. **Registro y Clasificación de Movimientos:**  
   Crear una función constructora base `Movimiento` y derivar subtipos `Ingreso` y `Egreso` que integren validaciones y métodos de renderización, garantizando la creación de objetos diferenciados y funcionales.

2. **Interfaz de Usuario Interactiva:**  
   Vincular la lógica de prototipos con una UI que permita capturar datos a través de un formulario, visualizar los movimientos registrados y actualizar automáticamente los totales financieros.

3. **Actualización Automática de Totales:**  
   Desarrollar un método (por ejemplo, `recalcularTotales`) que, invocado automáticamente al registrar cada movimiento, recalcule y muestre en tiempo real el resumen financiero en la interfaz.
