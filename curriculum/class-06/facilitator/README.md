# Guía de Facilitación - Clase 06: Programación Funcional en JavaScript

## ❄️ Previo a la clase:

### Estructura resumida

| **Fase** | **Descripción** |
| --- | --- |
| **[Intro](#1-intro-15-min)**<br>15min | Contextualización, conexión con la programación imperativa y activación de conocimientos previos.<br>🎯 Reforzar la importancia del paradigma funcional en el desarrollo moderno de software. |
| **[Debate y Demo](#2-debate-y-demo-45-min)**<br>45min | Discusión sobre reflexiones clave de la guía de lectura mientras se muestran ejemplos técnicos prácticos en pantalla.<br>🎯 Promover la comprensión profunda mediante análisis crítico de casos reales. |
| **[Laboratorio](#3-laboratorio-y-checkpoints-100-min)**<br>100 min | Implementación práctica del paradigma funcional en JavaScript, trabajando en el proyecto "Personal Budget" con checkpoints claros:<br>- ☑️ [30'] Funciones puras y uso de `map()`<br>- ☑️ [60'] Implementación de `filter()` y `find()` |
| **[Cierre](#3-cierre-15-min)**<br>15 min | Retroalimentación, conclusiones del día y preparación hacia la próxima sesión sobre programación orientada a objetos. |

---

## Estrategias de Enseñanza y Aprendizaje  
> 📕 Basado en Principios de Andragogía

1. **Conexión con la Experiencia Previa**  
   - Inicia conectando con experiencias concretas del laboratorio anterior sobre programación imperativa, destacando cómo el paradigma funcional podría simplificar el manejo de datos y estado.

2. **Resolución de Problemas Relevantes**  
   - Destaca cómo empresas reales utilizan programación funcional para reducir errores, facilitar debugging y mejorar la mantenibilidad del código.  
   - Usa ejemplos prácticos relacionados con la gestión de finanzas personales para conectar inmediatamente con el proyecto “Personal Budget”.

3. **Aprendizaje Colaborativo y Autonomía**  
   - Fomenta que los estudiantes compartan enfoques variados al resolver ejercicios usando métodos funcionales, valorando soluciones creativas y diversas.
   - Incentiva el uso responsable de IA para generar sugerencias de funciones puras, insistiendo en la revisión crítica de los outputs.

4. **Retroalimentación Inmediata y Reflexión**  
   - En cada checkpoint valida grupalmente el trabajo realizado, proporcionando retroalimentación específica sobre implementación funcional, claridad y adherencia al paradigma.
   - Reserva el cierre para consolidar aprendizajes y proyectar aplicaciones futuras de estos conceptos.

---

## 🔥 Durante la clase

### 1. Intro (15 min)
#### 🎯 Objetivos de Aprendizaje
> **1. Comprender el paradigma funcional y su diferencia con el paradigma imperativo:**  
> “El paradigma funcional transforma la manera en que resolvemos problemas en JavaScript. Se centra en funciones puras que no producen efectos secundarios, lo cual garantiza que el código sea más predecible, testeable y sencillo de mantener.”

> **2. Aplicar funciones puras para resolver tareas específicas:**  
> “Las funciones puras siempre devuelven el mismo resultado para un mismo input, lo que simplifica enormemente tareas repetitivas y previene errores asociados a cambios imprevistos en el estado global.”

> **3. Utilizar funciones de orden superior para transformar datos:**  
> “Métodos como `map()`, `filter()` y `find()` ofrecen formas más limpias, breves y expresivas de manipular colecciones, facilitando la lectura y el mantenimiento del código.”

---

## 🔥 Desarrollo de la Clase (180 min.)

### 1. Intro (15 min)
- **Contextualización (5 min)**  
  - Relaciona la sesión anterior sobre programación imperativa y adelanta cómo el paradigma funcional resuelve algunos problemas típicos que se enfrentaron previamente.

- **Activación de conocimientos previos** (10 min):  
  - Pregunta breve: _“¿Qué dificultades encontraron al usar variables globales o modificar directamente arrays en clases previas?”_  
  - Conecta esas dificultades con las soluciones que aporta el paradigma funcional.

## 💬 2. Debate y Demo (45 min)
Discusión guiada y demo simultánea.

### Debate (25 min)
**Preguntas para detonar el debate:**  
- ¿En qué situaciones específicas usarías programación funcional en lugar de imperativa?
- ¿Qué ventajas prácticas identifican al usar funciones puras para resolver tareas específicas?
- ¿Qué impacto tiene la inmutabilidad en proyectos reales?

Anota conclusiones clave en pantalla o pizarrón virtual compartido.

#### 🖥️ Demo Técnica (simultánea al debate, 20 min):

- Demuestra claramente en pantalla la diferencia entre un código imperativo y uno funcional resolviendo la misma tarea (ejemplo: sumar gastos totales).
- Muestra claramente el uso práctico de:
  - `map()` para extraer nombres de objetos.
  - `filter()` para obtener movimientos mayores a un valor específico.
  - `find()` para buscar elementos específicos en un array.
- Explica claramente los conceptos en código y responde dudas técnicas.

---

## 🚀 3. Laboratorio y Checkpoints (100 min)

> **Objetivo**: Practicar y validar la aplicación del paradigma funcional mediante el desarrollo del proyecto "Personal Budget".

#### 1. Checkpoint 1 (≈30'): Funciones Puras y `map()`
- Los estudiantes desarrollan funciones puras para obtener listas específicas de datos (nombres de movimientos financieros) sin modificar datos originales.
- Valida ejemplos puntuales de estudiantes (2-3 casos).
- Revisa que:
  - ✅ Las funciones sean puras (sin modificar arrays originales).
  - ✅ Uso correcto del método `map()`.

#### 2. Checkpoint 2 (≈60'): Uso de `filter()` y `find()`
- Los estudiantes implementan funcionalidades concretas, como:
  - Mostrar egresos superiores a cierta cantidad (`filter()`).
  - Buscar movimientos específicos por nombre (`find()`).
- Realiza validación grupal:
  - Confirma que el código sea declarativo, funcional y legible.

---

## 🎯 4. Cierre (15 min)

### Presentación de Avances (10 min)
- Invita a 2-3 estudiantes a compartir brevemente cómo resolvieron tareas usando funciones puras y métodos funcionales.
- Destaca buenas prácticas observadas en sus soluciones.

### Conclusiones Clave (5 min)
- Reitera ventajas del paradigma funcional (mantenibilidad, claridad, testing más sencillo).
- Resalta el valor agregado de funciones puras y de métodos de orden superior en la manipulación de datos.

---

## 🚨 Dificultades Frecuentes y Estrategias de Solución

| Dificultad Común | Estrategia |
|---|---|
| Dificultad en identificar cuándo usar funciones puras | Clarifica constantemente que las funciones puras no deben depender ni modificar variables externas. |
| Confusión con métodos funcionales (`map`, `filter`, `find`) | Usa ejemplos prácticos y sencillos antes de aumentar complejidad. Revisa grupalmente en vivo. |
| Tendencia a modificar arrays originales accidentalmente | Recuerda insistentemente usar métodos que retornan nuevos arrays (`slice`, `[...array]`). |

---

## 🤖 IA como herramienta
- Motiva a los estudiantes a usar IA como apoyo, no como sustituto.  
- Sugiere prompts específicos como:
  ```
  "Escribe una función pura en JavaScript que reciba un array de objetos y retorne un nuevo array con solo los nombres utilizando map."
  ```
- Siempre recalca la validación manual y crítica del código generado.

---

## 🧑‍🏫 Tu Rol como Instructor
- Facilita activamente el debate.
- Proporciona feedback técnico constante en checkpoints.
- Promueve reflexión crítica sobre decisiones técnicas.

---

## 📌 Próxima Sesión:
Anuncia que en la siguiente clase abordarán la **Programación Orientada a Objetos**, ampliando su dominio de diferentes paradigmas y fortaleciendo su desarrollo integral como profesionales.