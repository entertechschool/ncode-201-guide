# Guía de Facilitación — Clase 07: Programación Orientada a Objetos

Esta guía está diseñada para facilitar la **Clase 07** en el programa **Code 201**, donde los estudiantes profundizan en la **Programación Orientada a Objetos (POO)** con funciones constructoras en JavaScript. El objetivo principal es que los estudiantes comprendan cómo crear y manipular objetos en un contexto real, integrando la teoría con la práctica en su proyecto “Personal Budget”.

## ❄️ Previo a la Clase

### Estructura Resumida

| **Fase**                                 | **Duración** | **Descripción**                                                                               |
|-----------------------------------------|--------------|-----------------------------------------------------------------------------------------------|
| **[Intro](#1-intro-15-min)**            | 15 min       | Activación de conocimientos previos + importancia de la POO                                   |
| **[Debate Conceptual](#2-debate-30-min)**| 30 min       | Discusión guiada sobre POO y funciones constructoras; conceptos clave de abstracción y `this` |
| **[Demostración Técnica](#3-demo-15-min)** | 15 min       | Ejemplo en vivo mostrando la creación de un objeto con `function Constructor(...)`            |
| **[Laboratorio](#4-laboratorio-100-min)**| 100 min      | Aplicación práctica en “Personal Budget” con checkpoints y revisión de avances               |
| **[Cierre](#5-cierre-20-min)**          | 20 min       | Conclusiones y proyección a prototipos y herencia                                             |

---

## 1. Intro (15 min)
### 🎯 Objetivos de Aprendizaje
1. Explicar por qué la POO puede facilitar el mantenimiento y la escalabilidad del código.  
2. Mostrar cómo se definen y utilizan funciones constructoras en JavaScript (previo a ES6).  
3. Motivar el uso de objetos para encapsular lógica, validaciones y datos en el proyecto.

#### Estrategias
- Inicia recordando la evolución: **Imperativo** → **Funcional** → **POO**.  
- Pregunta a los estudiantes si han usado **clases ES6** previamente; conéctalo a la forma tradicional de la POO con funciones constructoras y `this`.
- Comparte un caso sencillo de la vida real (por ej., crear un objeto `Persona`) para adelantar cómo se maneja `function Persona(nombre, edad) { ... }`.

---

## 2. Debate Conceptual (30 min)

### Mitos y Verdades
- Repasa enunciados clave de la guía de lectura (ej.: “¿Las funciones constructoras están obsoletas?”).
- Promueve la **argumentación técnica** pidiendo ejemplos concretos.

**1. “Todos los lenguajes orientados a objetos soportan herencia múltiple por defecto.”**  
   - **Respuesta**: **Mito**  
   - **Explicación**: No todos los lenguajes OO permiten herencia múltiple de manera nativa. Por ejemplo, C++ sí la soporta, pero Java solo permite herencia simple de clases e implementa herencia múltiple a través de interfaces, no de manera directa.

**2. “La Programación Orientada a Objetos permite organizar el código en entidades con responsabilidad clara.”**  
   - **Respuesta**: **Verdad**  
   - **Explicación**: Uno de los beneficios centrales de la POO es agrupar datos y métodos en objetos con funciones específicas. Esto facilita la división de responsabilidades y la mantenibilidad.

**3. “En JavaScript, usar funciones constructoras es obsoleto porque existen las clases desde ES6.”**  
   - **Respuesta**: **Mito**  
   - **Explicación**: Las “clases” en JavaScript son azúcar sintáctica sobre el mismo sistema prototipal. Las funciones constructoras siguen siendo totalmente válidas y siguen usándose en muchos contextos (legado, librerías, compatibilidad, etc.).

**4. “La abstracción implica eliminar cualquier detalle que no sea importante para la funcionalidad principal.”**  
   - **Respuesta**: **Verdad**  
   - **Explicación**: El principio de abstracción busca simplificar modelos, enfocándose en las características relevantes. Se omiten detalles que no aportan valor al problema que se está resolviendo.

**5. “Para crear objetos usando funciones constructoras, es obligatorio usar el prototipo explícitamente.”**  
   - **Respuesta**: **Mito**  
   - **Explicación**: Al definir una función constructora, puedes asignar propiedades directamente con `this`; no es necesario tocar el `prototype` si no vas a compartir métodos entre instancias. El uso de prototipos es útil y frecuente, pero no obligatorio en todos los casos.

**6. “La POO promueve la escalabilidad al agrupar datos y comportamiento en entidades lógicas.”**  
   - **Respuesta**: **Verdad**  
   - **Explicación**: Al encapsular datos y métodos en objetos coherentes, se favorece la modularidad y la capacidad de crecer (o refactorizar) sin quebrar todo el sistema.

**7. “La palabra clave `this` en las funciones constructoras apunta a un objeto global, sin importar si se usa `new`.”**  
   - **Respuesta**: **Mito**  
   - **Explicación**: Dentro de una función constructora, si se invoca con `new`, `this` referirá a la nueva instancia. Si se olvida `new`, en modo no estricto podría apuntar al objeto global (o `undefined` en modo estricto). Por ello, se debe usar `new` para construir objetos correctamente.

#### Dinámica
1. **Panel Abierto**: Haz preguntas específicas como:
   - “¿En qué escenarios la POO aporta más ventajas que un enfoque puramente funcional?”
   - “¿Cómo facilita la encapsulación el orden del código?”
2. **Contraste** con Imperativo y Funcional:
   - ¿Qué ganamos al modelar datos como objetos en vez de arrays de valores dispersos?
   - ¿Hay casos en que no conviene la POO?
3. **Conclusiones**: Sintetiza puntos relevantes. Subraya la relación entre **abstracción**, **encapsulación** y la palabra clave `this`.


---

## 3. Demostración Técnica (15 min)

### Ejemplo de Función Constructora
1. Muéstrales un ejemplo sencillo en la consola o un editor online (p. ej., CodePen):  
   ```js
   function Movimiento(tipo, monto) {
     this.tipo = tipo;
     this.monto = monto;
   }
   const miMovimiento = new Movimiento('Egreso', 50);
   console.log(miMovimiento);
   ```
2. Explica:
   - Uso de `this` para asignar propiedades a la instancia.
   - Por qué `new` crea un nuevo objeto y enlaza `this`.
   - Validaciones mínimas (monto > 0, tipo válido, etc.).

#### Tips
- Resalta que **no** se está usando “class syntax” de ES6, sino la forma “clásica” de JS para que comprendan sus raíces prototipales.
- Menciona cómo esto sentará la base para prototipos y herencia en próximas clases.

## 4. Laboratorio (100 min)
> **Objetivo**: Refactorizar parte del flujo “Personal Budget” para que cada registro de movimiento se maneje con un objeto creado por una función constructora.

### Instrucciones de la Actividad
1. **Refactorizar el registro**: Elimina las estructuras planas y crea la función `Movimiento(tipo, monto, descripcion)`.
2. **Validaciones internas**: Asegura que el constructor verifique datos mínimos (tipo válido, monto > 0, descripción no vacía).
3. **Array de movimientos**: Guarda las instancias creadas en un array `movimientos`.
4. **Opcional**: Iniciar un método `render()` en el prototipo, si se desea conectar con el DOM.

### Checkpoints
- **Checkpoint 1 (~30 min)**  
  Revisa si los estudiantes han creado correctamente la función constructora y una instancia de prueba. Discute problemas comunes (ej.: olvidar `new`, mal uso de `this`).

- **Checkpoint 2 (~60 min)**  
  Valida que el nuevo flujo reemplace el anterior y que los métodos de cálculo (totales, saldos) sigan funcionando con los objetos. Pide a algunos estudiantes que muestren su código.

#### Sugerencias de Soporte
- **Preguntas Guía**:  
  - “¿Dónde validamos que el tipo sea ‘Ingreso’ o ‘Egreso’?”  
  - “¿Qué pasa si el monto es negativo o cero?”  
  - “¿Cómo se ve la instancia en la consola (inspeccionar en DevTools)?”
- **Retroalimentación**:  
  - Aconseja mantener la lógica de validación unificada en el constructor.  
  - Anima a usar `console.log()` para verificar propiedades de la instancia.

## 5. Cierre (20 min)

### Consolidación de Aprendizajes
1. **Síntesis Final**:  
   - Destaca el paso de un código disperso a un código organizado en objetos.  
   - Conecta con la próxima clase de **Prototipos**, adelantando que se podrán añadir métodos compartidos a todas las instancias.
2. **Espacio de Dudas**:  
   - Permite preguntas abiertas sobre el uso de `this`, validaciones, integración con la lógica previa.
3. **Proyección**:
   - Anuncia que en la siguiente clase se explorará cómo extender estos objetos, añadiendo métodos al prototipo y preparándolos para un `render()` en el DOM.

#### Tareas Recomendar
- Pedir a los estudiantes mejorar la documentación en su README (explicando la nueva estructura OOP).
- Practicar con un ejemplo extra: crear otra función constructora (por ej., `Usuario`) para comprender mejor cómo se relacionarían varios objetos.

---

## Estrategias de Enseñanza y Aprendizaje
1. **Conexión con Experiencias Previas**: Resalta similitudes o diferencias con lenguajes OO tradicionales (Java, C++), si los estudiantes los conocen.
2. **Resolución de Problemas Relevantes**: Muestra cómo la POO facilita añadir características, como calcular automáticamente el saldo o mostrar un historial.
3. **Aprendizaje Colaborativo**: Fomenta la revisión en parejas; quienes ya lo comprendan bien pueden ayudar a compañeros.
4. **Retroalimentación y Reflexión**: Revisa con la clase en cada checkpoint y reserva tiempo al final para compartir hallazgos o dudas restantes.

---

## Puntos Críticos de Éxito

- **Uso Correcto de `new`**: Muchos principiantes olvidan `new`, lo que da lugar a comportamiento inesperado en `this`.
- **Encapsulación de Validaciones**: Reforzar que las validaciones deben estar dentro del constructor, evitando datos inválidos.
- **Proyección a Prototipos**: Preparar mentalmente al estudiante para la próxima clase, donde se introducirá el enfoque prototipal con métodos compartidos.

---

**¡Listo!** Con esta guía de facilitación, tendrás una hoja de ruta clara para conducir la Clase 07, promoviendo la participación activa de los estudiantes y su comprensión práctica de las funciones constructoras como base de la POO en JavaScript.
```