> 📦 **Módulo 1:** Clase 3 de 4

# Clase 03: CSS Grid — esencial, intermedio y `grid-template-areas`

## Resumen
En esta clase profundizas en **CSS Grid** sobre 2 páginas nuevas de tu landing (`precios.html` y `faq.html`). Cubres 3 niveles en una sola sesión: Grid esencial (`repeat(N, 1fr)`), Grid intermedio (`auto-fit` + `minmax` — responsive automático sin media queries) y el feature distintivo de Grid: **`grid-template-areas`** (layouts 2D con regiones nombradas que Flex NO puede hacer). Cierra con un criterio claro de cuándo usar Grid vs Flex.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
| --- | --- | --- |
| **1. Introducción y contexto**  | 15 min  | Demo: el mismo layout 2D resuelto solo con Grid (areas) — Flex no puede limpio. |
| **2. Parte 1 – Enlaces multi-página + Grid esencial + intermedio** | 40 min  | Rutas relativas (`href="precios.html"`, `href="#contacto"`, `href="index.html#contacto"`) + actualizar nav del index. Luego `display: grid` con `repeat(3, 1fr)` y luego con `repeat(auto-fit, minmax(250px, 1fr))`. Aplicado a `precios.html`. |
| **3. Parte 2 – `grid-template-areas`** | 35 min  | Layout con áreas nombradas para `faq.html` (header + sidebar nav + main + footer). |
| **4. Parte 3 – Responsive + Grid vs Flex** | 30 min  | Reuso de los 3 breakpoints de C02 + criterio de cuándo cada herramienta. |
| **5. Cierre y Síntesis** | 15 min  | Heurística "Grid 2D, Flex 1D", revisión de retos, validación visual y entrega. |


---

## 📌 Preparación para la clase

> Antes de llegar a clase, piensa en estas preguntas y conversa con tus compañeros si lo deseas:

#### 🧠 Lista de Mitos y Verdades para Analizar
1. "CSS Grid reemplaza totalmente la necesidad de Flexbox"
2. "Grid no es todavía una tecnología estable y confiable para proyectos en producción"
3. "Usar `display: grid;` garantiza automáticamente que tu sitio sea responsive"
4. "`repeat(auto-fit, minmax(...))` reemplaza completamente las media queries en cualquier caso"
5. "`grid-template-areas` es lo mismo que escribir `grid-template-columns` y `grid-template-rows`"
6. "Para layouts simples, Grid es demasiado complejo y no vale la pena"
7. "Combinar Grid y Flexbox en un mismo proyecto genera confusión y no es recomendable"

> **Identifica** cuáles crees que son mitos y cuáles son verdades. Prepárate para justificar tus respuestas con evidencia de lecturas o experiencias.

#### 📚 Recursos sugeridos

1. **"Guía Completa de CSS Grid" en CSS-Tricks**
   [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/){:target="_blank"}

2. **"Aprendiendo CSS Grid" (MDN Web Docs)**
   [https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout){:target="_blank"}

3. **"Grid by Example" (Rachel Andrew)**
   [https://gridbyexample.com](https://gridbyexample.com){:target="_blank"}

---

## Resultados esperados

Al concluir la Clase 03, habrás construido 2 páginas reales de tu landing con CSS Grid en sus 3 niveles, y tendrás criterio claro para decidir entre Grid y Flex en cualquier proyecto.

### Podrán hacer
1. **Enlazar múltiples páginas HTML** con rutas relativas (`href="precios.html"`, `href="index.html#contacto"`) y mantener un nav consistente entre páginas.
2. **Aplicar Grid esencial**: `display: grid; grid-template-columns: repeat(N, 1fr); gap` para grillas uniformes.
3. **Aplicar Grid intermedio**: `repeat(auto-fit, minmax(250px, 1fr))` para layouts que se adaptan al ancho disponible **sin media queries**.
4. **Aplicar `grid-template-areas`**: layouts 2D con regiones nombradas (header + nav + main + footer).

### Podrán explicar
1. **Cuándo usar Grid vs Flexbox**: la heurística "Grid 2D, Flex 1D" + tabla de casos.
2. **Por qué `grid-template-areas` es el feature distintivo de Grid**: Flex no puede definir regiones 2D nombradas.
3. **Cuándo `auto-fit + minmax` reemplaza media queries** y cuándo NO.

### Podrán implementar
1. **`precios.html` con 3 planes** que se adaptan automáticamente al ancho del viewport.
2. **`faq.html` con layout 2D** (sidebar + main + header + footer) usando áreas nombradas.
3. **Reorganización del layout en breakpoints** con `grid-template-areas` distintas en móvil vs desktop.

## Glosario de Nuevos Términos

- **Ruta relativa**: enlace que apunta a otro archivo de tu proyecto (`href="precios.html"`) sin necesidad de URL completa.
- **Anchor (ancla)**: enlace que salta a una sección con un `id` específico (`href="#contacto"` o `href="index.html#contacto"`).
- **Grid Container**: Elemento padre que establece el contexto de grid en sus elementos hijos.
- **Grid Item**: Cada elemento hijo directo dentro de un contenedor de grid.
- **Fraction (`fr`)**: Unidad de Grid que representa una fracción del espacio disponible.
- **`repeat(N, 1fr)`**: crea N columnas iguales.
- **`auto-fit`**: ajusta automáticamente cuántas columnas caben en el ancho disponible.
- **`minmax(min, max)`**: define el rango de tamaño de una columna (ej. `minmax(250px, 1fr)`).
- **`grid-template-areas`**: dibuja el layout con nombres como ASCII art. Cada string es una fila; cada palabra una columna.
- **`grid-area`**: asigna un elemento a un área nombrada del grid.
