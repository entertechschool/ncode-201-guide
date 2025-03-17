# Clase 09: DOM como API de Objetos

## ❄️ Previo a la clase:

### Estructura resumida

| **Fase** | **Descripción** |
| --- | --- |
| **[Intro](#1-intro-15-min)**<br>15 min | Contextualización y repaso breve de JavaScript OOP y DOM básico.<br>🎯 Reactivar conocimiento previo y conectar con la sesión actual. |
| **[Debate Conceptual](#2-debate-conceptual-30-min)**<br>30 min | Discusión sobre manipulación avanzada del DOM, selección dinámica y uso práctico de Regex.<br>🎯 Construcción colaborativa de conocimiento mediante análisis crítico. |
| **[Demo Técnica](#3-demostración-técnica-20-min)**<br>20 min | Ejemplo práctico de selección de nodos, manipulación del DOM y aplicación de Regex.<br>🎯 Modelar buenas prácticas de implementación. |
| **[Laboratorio](#4-laboratorio-y-checkpoints-100-min)**<br>100 min | Desarrollo guiado del editor Markdown con tres checkpoints:<br>- ☑️ [30'] Barra de herramientas flotante funcional<br>- ☑️ [60'] Generación del Preview HTML usando Regex<br>- ☑️ [90'] Aplicación dinámica de estilos con `querySelectorAll()`<br>🎯 Aplicación práctica intensiva y validación continua. |
| **[Cierre](#5-cierre-10-min)**<br>10 min | Retroalimentación sobre logros, dificultades y aprendizajes clave.<br>🎯 Consolidar y proyectar conocimientos. |

## 🔥 Durante la clase

### Estructura Detallada (180 min.)

#### 1. Intro (15 min)
- 🎯 **Objetivos:** Reactivar conocimientos sobre JavaScript OOP, manipulación básica del DOM y presentación breve del tema DOM como colección de objetos.
- 🔑 **Activación:** Preguntas rápidas para refrescar lo aprendido.

#### 2. Debate Conceptual (30 min)
- **DOM como Árbol de Objetos:** ¿Por qué es relevante entender el DOM como objetos interconectados?
- **querySelector vs querySelectorAll:** Discusión sobre casos de uso concretos y diferencias en resultados.
- **Regex y su utilidad práctica:** Ventajas y limitaciones del uso de Regex para transformar contenido de texto.

#### 2. Demostración Técnica (20 min)
- Selección dinámica y modificación del DOM con JavaScript puro.
- Implementación en vivo de conversión básica de Markdown a HTML usando Regex (`.replace()` y patrones simples).
- Tips sobre debugging básico en consola.

#### 3. Laboratorio y Checkpoints (100 min)

> 💻 **Objetivo:** Implementar la barra de herramientas flotante, conversión dinámica Markdown–HTML con Regex y manipulación dinámica de nodos.

- **Checkpoint 1: Barra de Herramientas (30')**
  - Verificar barra fija en posiciones correctas según el dispositivo.
  - Asegurar áreas visibles claramente para editor y preview.

- **Checkpoint 2: Preview HTML usando Regex (60')**
  - Validar conversión exitosa desde Markdown a HTML (encabezados y listas).
  - Uso correcto de Regex y método `.replace()`.

- **Checkpoint 3: Estilo Dinámico con querySelectorAll (90')**
  - Seleccionar correctamente nodos (encabezados).
  - Aplicar dinámicamente estilos al DOM mediante JavaScript puro.

#### 3. Laboratorio y Checkpoints (100 min)
- Apoyar individualmente, resolver dudas técnicas.
- Estimular revisión cruzada entre estudiantes.
- Validar y corregir errores puntuales.

#### 4. Cierre (10 min)

- 💡 **Conclusiones clave:**
  - La importancia de manipular el DOM con una visión orientada a objetos.
  - Ventajas prácticas y limitaciones reales del uso de Regex.
  - Principios fundamentales del uso eficiente del DOM y selección múltiple de elementos.

- 📌 **Siguiente Paso:**
La próxima clase profundizará en funciones avanzadas y callbacks para gestionar dinámicamente la transformación Markdown–HTML y optimizar la interacción con la interfaz.

---

# Solucionario breve (para el Facilitador)

- `querySelector` devuelve solo un elemento (el primero), mientras que `querySelectorAll` retorna una lista estática (NodeList).
- Regex ofrece flexibilidad para transformar texto, pero puede resultar complejo en estructuras de texto muy anidadas.
- Es fundamental manejar eventos de manera eficiente para lograr buena interactividad, especialmente en interfaces dinámicas como esta.

📌 **Tips Adicionales:**
- Recomienda herramientas como Regex101.com para validar y refinar expresiones regulares.
- Usa Chrome DevTools para depuración rápida y efectiva del DOM.

