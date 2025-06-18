> 📦 **Módulo 1:** Clase 3 de 4  

# Clase 03: CSS Grid Layout

## Resumen
En esta clase profundizamos en el sistema de **CSS Grid Layout**, proporcionando a los estudiantes las herramientas necesarias para diseñar interfaces web de manera más flexible y potente que con enfoques tradicionales. La orientación de la clase es la implementación de layouts complejos y responsivos utilizando Grid en una página del proyecto que iniciaron.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
| --- | --- | --- |
| **1. Introducción**       | 15 min       | Activación de conocimientos previos y motivación sobre la importancia de Grid.                      |
| **2. Debate Conceptual**  | 30 min       | Discusión de características, ventajas y ejemplos reales de CSS Grid.                               |
| **3. Demo Técnica**       | 20 min       | Ejemplificación en vivo de la sintaxis de Grid y resolución de layout con múltiples secciones.      |
| **4. Laboratorio**        | 100 min      | Implementación práctica con 3 checkpoints: diseño de layouts, corrección grupal y optimización.     |
| **5. Cierre**             | 15 min       | Conclusiones, retroalimentación y preparación para la siguiente clase (Frameworks CSS Modernos).    |

---

## 📌 Preparación para la clase

> Antes de llegar a clase, piensa en estas preguntas y conversa con tus compañeros o una IA si lo deseas:

#### 🧠 Lista de Mitos y Verdades para Analizar
1. "CSS Grid reemplaza totalmente la necesidad de Flexbox"
2. "Grid no es todavía una tecnología estable y confiable para proyectos en producción"
3. "Usar `display: grid;` garantiza automáticamente que tu sitio sea responsive"
4. "El uso de Grid Template Areas no aporta un valor real; es solo un ‘alias’ de filas y columnas"
5. "Las propiedades de alineación (justify-content, align-content) no funcionan igual en Grid que en Flexbox"
6. "Para layouts simples, Grid es demasiado complejo y no vale la pena"
7. "Combinar Grid y Flexbox en un mismo proyecto genera confusión y no es recomendable"

> **Identifica** cuáles crees que son mitos y cuáles son verdades. Prepárate para justificar tus respuestas con evidencia de lecturas o experiencias.

#### 📚 Recursos sugeridos

1. **"Guía Completa de CSS Grid" en CSS-Tricks**  
   [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/){:target="_blank"}  

2. **"Aprendiendo CSS Grid" (MDN Web Docs)**  
   [https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout){:target="_blank"}  

3. **"Layout moderno con CSS Grid" (Blog de CanIUse)**  
   [https://blog.caniuse.com/layout-modern-css-grid/](https://blog.caniuse.com/layout-modern-css-grid/){:target="_blank"}  

---

## Resultados esperados

Al concluir la Clase 03, los estudiantes habrán aprendido los fundamentos de **CSS Grid** y sus posibilidades para construir interfaces web modernas y escalables. Concretamente:

### Podrán hacer
1. **Diseñar Estructuras Complejas con Grid**  
   Definir contenedores y áreas de grid, controlando filas y columnas de manera precisa y responsive.
2. **Alinear y Distribuir Contenidos**  
   Utilizar propiedades de alineación (justify-content, align-content, etc.) para distribuir elementos con coherencia visual.
3. **Combinar Grid y Flexbox**  
   Detectar cuándo es mejor usar Grid frente a Flexbox y, si aplica, combinar ambas herramientas para distintos componentes de la misma página.

### Podrán explicar
1. **La Diferencia entre Grid y Otras Técnicas**  
   Podrán comparar Grid con Flexbox, positioning o floats, argumentando la pertinencia de cada método.
2. **La Sintaxis de Grid (Track Sizing, Gaps, Grid Template)**  
   Comprenderán cada sección de la declaración de grid, explicando cómo las propiedades se relacionan entre sí.
3. **Casos Prácticos Relevantes**  
   Justificarán cómo resolver layouts comunes (como galerías de fotos, dashboards o secciones editorializadas) usando Grid.

### Podrán implementar
1. **Layouts Responsivos con CSS Grid**  
   Aplicar `grid-template-columns`, `grid-template-rows`, `grid-gap` y media queries para lograr diseños adaptables.
2. **Grid Template Areas**  
   Asignar nombres a las áreas del grid y ubicar contenidos con mayor claridad, manteniendo un código más legible.
3. **Uso Apropiado de Herramientas de IA**  
   Generar prompts para obtener ejemplos de layouts, validando y ajustando manualmente el código que la IA sugiera.

## Glosario de Nuevos Términos

- **Grid Container**: Elemento padre que establece el contexto de grid en sus elementos hijos.
- **Grid Item**: Cada elemento hijo directo dentro de un contenedor de grid.
- **Grid Track**: Las filas (rows) y columnas (columns) dentro de un contenedor de grid.
- **Grid Template Areas**: Forma de nombrar áreas específicas del grid, facilitando la lectura y mantenibilidad.
- **Fraction (fr) Unit**: Unidad de Grid que representa una fracción del espacio disponible en el contenedor.
- **Implicit vs. Explicit Grid**: Diferenciación entre las celdas definidas en la declaración de grid y las filas/columnas que se crean automáticamente.
- **Auto-Placement**: Mecanismo de CSS Grid para ubicar items automáticamente según la configuración declarada.
