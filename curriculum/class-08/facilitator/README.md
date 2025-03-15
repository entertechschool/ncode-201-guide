# Clase 08: Prototipos en JavaScript

## ❄️ Previo a la clase:

### Estructura resumida

| **Fase** | **Descripción** |
| --- | --- |
| **[Intro](#1-introducción-15-min)**<br>15 min | Activación de conocimientos previos y contextualización sobre prototipos y herencia prototipal en JavaScript. |
| **[Debate y Demo Técnica](#2-debate-y-demo-técnica-45-min)**<br>45 min | Discusión estructurada sobre conceptos clave y demostración práctica de implementación de prototipos.<br>🎯 Facilitar el pensamiento crítico sobre la herencia en JavaScript y modelar buenas prácticas de uso de IA. |
| **[Laboratorio Guiado](#3-laboratorio-guiado-100-min)**<br>100 min | Desarrollo práctico con validación continua a través de checkpoints específicos, enfocado en trasladar lógica prototipal a una UI moderna. |
| **[Cierre](#4-cierre-20-min)**<br>20 min | Consolidación de aprendizajes clave y preparación para los proyectos del siguiente módulo. |

## 🔥 Durante la clase

### Estructura Detallada (180 min)

#### 1. Introducción (15 min)

🎯 **Objetivos de Aprendizaje:**
- Entender cómo funciona la herencia prototipal en JavaScript.
- Reconocer la diferencia entre `prototype` y `__proto__`.
- Comprender el beneficio práctico del uso de prototipos en proyectos reales.

🔑 **Conceptos Clave:**
- Prototype Chain
- Diferencia entre `prototype` y `__proto__`
- Funciones Constructoras

#### Tips para el instructor:
- Usa ejemplos concretos (ej. objetos “Movimiento”, “Ingreso”, “Egreso”) para conectar estos conceptos con lo trabajado previamente.
- Destaca la importancia de la reutilización de código a través de prototipos.

---

#### 2. Debate y Demo Técnica (45 min)

- Modera un debate crítico guiado por los mitos y verdades revisados previamente:
  - Ejemplo: "Las funciones constructoras son obsoletas y no se usan en el desarrollo moderno de JavaScript."
  - Explora por qué todavía es importante entender funciones constructoras, aunque existan alternativas modernas (ES6 Classes).

- Realiza una demo técnica que muestre claramente:
  - Implementación práctica de una función constructora (`function Movimiento`).
  - Herencia prototipal: método compartido (`Movimiento.prototype.calcularTotal`).
  - Creación y diferenciación de subtipos (`Ingreso`, `Egreso`).
  - Integración con una UI básica usando HTML/CSS.

- Integra el uso responsable de IA:
  - Demuestra cómo pedir sugerencias de código prototipal y validarlas críticamente.
  - Refuerza la idea de la IA como herramienta, no sustituto del criterio técnico.

---

#### 3. Laboratorio Guiado (100 min)

💻 **Objetivo:**
Trasladar la lógica desarrollada con prototipos en consola hacia una interfaz de usuario interactiva y visual, utilizando frameworks CSS modernos (Bootstrap o Tailwind).

**Checkpoint 1 (~30 min):**
- Validar estructura básica HTML/CSS y función constructora inicial.

**Checkpoint 2 (~60 min):**
- Verificar creación efectiva de objetos y herencia prototipal (Ingreso y Egreso).
- Asegurar la implementación de métodos compartidos en `prototype`.

**Checkpoint 2.5 (~45 min revisión entre pares):**
- Facilita una revisión cruzada donde estudiantes expliquen sus decisiones técnicas.

**Checkpoint 3 (~80 min):**
- Validar integración funcional con la UI: renderizado de movimientos, actualización automática de totales mediante métodos prototipales.

**Logros adicionales (Opcional):**
- Mensaje de confirmación tras registrar movimientos.
- Reset automático del formulario.

---

#### 4. Cierre (20 min)

💡 **Objetivo:**
Consolidar aprendizajes y preparar el camino hacia el siguiente módulo.

**Conclusiones a enfatizar:**
- **"Herencia Prototipal y Código Escalable"**
  - Ventajas prácticas de encapsular validaciones y métodos compartidos en prototipos.
  - Cómo facilita mantenimiento y expansión del proyecto.

- **"Dominar la Cadena de Prototipos"**
  - La importancia técnica y el impacto en la reutilización efectiva del código.
  
- **"IA y Validación Técnica"**
  - La IA es un co-piloto, no reemplaza la decisión crítica del desarrollador.
  - Validar siempre los outputs de la IA.

- **"Conectar teoría con práctica"**
  - La importancia del enfoque "Learning by Critical Thinking" para solucionar problemas técnicos reales.

- **"Próximos pasos"**
  - Comentar brevemente cómo lo aprendido aquí prepara al estudiante para los desafíos de interacciones con el DOM y manejo de eventos en el módulo siguiente.

---

## 📝 Post-Clase (Instructor):
- Documenta avances y dificultades comunes detectadas.
- Actualiza materiales si detectas áreas de confusión generalizadas.
- Revisa entregas en GitHub para proporcionar retroalimentación continua.
- Prepárate para resolver dudas puntuales en futuras clases.
