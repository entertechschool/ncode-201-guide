> **Guía de Facilitador**  
# Clase 03: Layout con CSS Grid

## ❄️ Previo a la clase:

### Estructura resumida

| **Fase** | **Descripción** |
| --- | --- |
| **[Intro](#1-intro-15-min)**<br>15min | Contextualización y activación de conocimientos previos.<br>🎯 Destacar la importancia de la semántica y la accesibilidad, para ahora construir layouts con CSS Grid de forma clara y estructurada. |
| **[Debate Conceptual](#2-debate-conceptual-30-min)**<br>30min | Discusión guiada sobre los mitos y verdades de CSS Grid (basado en la Lectura 03), incluyendo la comparación con Flexbox y el uso de IA.<br>🎯 Profundizar en ventajas, limitaciones y casos de uso reales de Grid. |
| **[Demo Técnica](#3-demostración-técnica-20-min)**<br>20 min | Implementación en vivo de un ejemplo de Grid con navbar y sidebar, mostrando media queries esenciales.<br>🎯 Modelar buenas prácticas e ilustrar propiedades clave como `grid-template-columns`, `gap` y breakpoints. |
| **[Laboratorio](#4-laboratorio-y-checkpoints-100-min)**<br>100 min | Construcción de layouts con Grid en varias páginas (Index, Testimonios, Compra) y tres checkpoints:<br>- ☑️ [30'] Grilla base en una de las páginas<br>- ☑️ [50'] Adición de media queries<br>- ☑️ [80'] Validación de semántica y accesibilidad<br>🎯 Práctica guiada con retroalimentación continua. |
| **[Cierre](#5-cierre-15-min)**<br>15 min | Presentación de avances, retroalimentación grupal y conclusiones clave.<br>🎯 Consolidar la comprensión de CSS Grid y su integración con layout semántico. |

### Estrategias de Enseñanza y Aprendizaje  
> 📕 Basado en Principios de Andragogía

1. **Conexión con la Experiencia Previa**  
   - Retomar ejercicios y prácticas de labs anteriores (HTML5 semántico, Flexbox) para contextualizar la evolución hacia layouts con Grid.  
   - Preguntar cómo han implementado hasta ahora la “barra lateral” y el “navbar” con otras técnicas, enlazando esas ideas con la potencia de CSS Grid.

2. **Resolución de Problemas Relevantes**  
   - Explicar cómo Grid resuelve el desafío de organizar diversas secciones (navbar, sidebar, contenido principal) de forma más declarativa que otras técnicas.  
   - Subrayar que las empresas valoran la habilidad de crear UIs responsive y escalables.

3. **Aprendizaje Colaborativo y Autonomía**  
   - Fomentar la colaboración en la definición de prompts de IA: cada estudiante puede compartir su prompt y refinarlo colectivamente.  
   - Al mismo tiempo, promover la autonomía para validar y adaptar el código, enfatizando la responsabilidad en accesibilidad y semántica.

4. **Retroalimentación Inmediata y Reflexión**  
   - Programar los checkpoints de verificación donde el instructor y los compañeros puedan ver el layout y ofrecer sugerencias.  
   - Finalizar con un espacio de reflexión sobre qué se aprendió y qué retos persisten, resaltando cómo Grid facilita la composición global del sitio.

## 🔥 Durante la clase

### 1. Intro (15 min)
**Objetivo**: Activar conocimientos sobre HTML semántico y accesibilidad, conectarlos con el nuevo tema de Grid y exponer la relevancia de crear layouts limpios y escalables.

- **Contextualización**:  
  - Recordar brevemente Laboratorios anteriores, en los que se reforzó la importancia de la semántica (`<header>`, `<aside>`, `<main>`, etc.) y la accesibilidad (`alt` en imágenes, roles ARIA).  
  - Mencionar que ahora se dará un paso más en la maquetación, usando **CSS Grid** para organizar secciones como navbar, sidebar y contenido central.

- **Motivación**:  
  - Enfatizar que muchas aplicaciones requieren un panel lateral (sidebar) y una barra superior (navbar) de navegación, y que CSS Grid simplifica la alineación y el reordenamiento en distintos tamaños de pantalla.

- **Conceptos Clave** (repaso rápido):
  1. **Grid Container & Grid Items**  
  2. **Filas, Columnas, Áreas y Gap**  
  3. **Responsividad con Media Queries**  
  4. **Accesibilidad & Semántica**  

> **Tip para el facilitador**:  
> Mostrar capturas de sitios reales o wireframes que utilicen un sidebar y un navbar (ej. dashboards administrativos), para ilustrar por qué Grid puede ser más conveniente que Flexbox en estos escenarios de 2D.

### 2. Debate Conceptual (30 min)
Basado en la **Lectura 03** (Mitos y Verdades de CSS Grid).

1. **Invitar a los estudiantes a compartir**:
   - Cuáles afirmaciones consideraron “mitos” y por qué.  
   - Qué ejemplos de la vida real ilustran las ventajas de Grid.

2. **Temas a discutir**:
   - **Grid vs. Flexbox**: Coexistencia, no competencia (e.g. usar Grid para el layout global y Flexbox en componentes internos).  
   - **Media Queries**: ¿Grid suple por completo los breakpoints o sigue siendo necesario ajustarlos manualmente? (Conclusión: se necesitan breakpoints en la mayoría de los casos).  
   - **Responsabilidad del Desarrollador** al integrar IA: Explicar que la IA puede sugerir plantillas de Grid, pero siempre hay que validarlas con la estructura semántica y la accesibilidad.

3. **Construcción de Conclusiones**:
   - Pedir a un estudiante que apunte, en pizarra o Notion/Google Docs compartido, las ideas finales.  
   - Reforzar que muchos mitos surgen de la confusión al mezclar herramientas o al creer que una sola técnica (Grid) resolverá todos los problemas de responsividad.  
   - Mencionar el rol de la “práctica deliberada”: solo se dominan los conceptos a través de la experimentación y la corrección de errores.

### 3. Demostración Técnica (20 min)
**Objetivo**: Mostrar un ejemplo rápido de cómo estructurar un “layout 2D” con Grid, incluyendo un navbar y un sidebar.

1. **Ejemplo en Vivo** (10 min)
   - Crear un mini-HTML con `<header>` (para el navbar), `<aside>` (sidebar) y `<main>` (contenido central).  
   - Aplicar `display: grid; grid-template-columns: 200px 1fr;` para ubicar el sidebar y el main.  
   - Añadir una media query básica para pantallas pequeñas (e.g. max-width: 600px) que convierta la grilla en una sola columna.  
   - Incluir `gap` o `column-gap` para separar el sidebar del contenido.

2. **Reflexión y Preguntas (10 min)**
   - Revisar rápidamente cómo se gestiona el orden semántico (p. ej. `<aside>` después de `<header>` en el HTML) pero posicionado a la izquierda visualmente con Grid.  
   - Explicar la importancia de mantener un flujo lógico en el DOM para lectores de pantalla.

> **Recomendación**:  
> - Mostrar una segunda variante con `grid-template-areas` para nombrar “header”, “sidebar”, “main” y “footer”, ilustrando cómo se asigna cada elemento a su área.

### 4. Laboratorio y Checkpoints (100 min)

> **Objetivo**: Implementar layouts con Grid en todas las páginas (index, testimonios, compra) y asegurar responsividad y accesibilidad.

1. **Checkpoint 1 (≈30')**: Grilla base en una de las páginas
   - **Dinámica**:  
     - Indicar a los estudiantes que empiecen por, por ejemplo, `testimonios.html` o `compra.html`.  
     - Crear un contenedor con `display: grid;`, definiendo el navbar y el sidebar.  
     - Validar rápidamente la semántica (usar `<nav>`, `<aside>`, `<main>`).
   - **Verificación**:  
     - Pedir a unos 2-3 estudiantes que muestren su layout.  
     - Revisar que no haya errores obvios (por ej., usar `class="header"` en lugar de la etiqueta `<header>`).

2. **Checkpoint 2 (≈50')**: Media Queries
   - **Dinámica**:  
     - Implementar al menos un breakpoint para reorganizar la grilla en pantallas pequeñas (sidebar y navbar apilados, main en otra fila).  
     - Asegurarse de que no aparezca scroll horizontal.
   - **Verificación**:  
     - Comprobar en el inspector del navegador cómo se reduce la ventana.  
     - Reforzar la idea de `gap` y `padding` suficientes en la versión mobile para legibilidad.

3. **Checkpoint 3 (≈80')**: Semántica y Accesibilidad
   - **Dinámica**:  
     - Replicar la estructura en las demás páginas (index.html, si fuera necesario adaptarla, y la otra página que no se haya modificado en Checkpoint 1).  
     - Incluir contenido de prueba (tarjetas de testimonios, un resumen de compra, etc.).  
     - Revisar el orden lógico en el DOM y la presencia de atributos `alt` en imágenes.
   - **Verificación**:  
     - Solicitar a un par de estudiantes compartir su repositorio y/o live demo.  
     - Revisar si usan IA (ChatGPT / Copilot) y si han ajustado manualmente los prompts.

### 5. Cierre (15 min)
1. **Presentación de Avances** (10 min)
   - Invitar a 2-3 estudiantes que se sientan cómodos mostrando su layout final y explicando su media query.  
   - Elogiar la variedad de enfoques: algunos pueden usar `grid-template-areas`, otros `grid-template-columns + grid-template-rows`.

2. **Conclusiones Clave** (5 min)
   - **Grid** permite diseñar **layouts en 2D** con mayor control y menos hacks que otras soluciones anteriores.  
   - **Responsividad** sigue necesitando media queries en la mayoría de los casos.  
   - **Semántica y Accesibilidad** no deben sacrificarse por el posicionamiento visual.  
   - **Uso de IA**: se recomienda como apoyo para bocetos de layout, pero se requiere validación manual y adaptación al contexto del proyecto.
   