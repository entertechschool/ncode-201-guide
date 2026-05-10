> 📦 **Módulo 1:** Clase 3 de 4

# Clase 03: CSS Grid esencial + Flexbox profundo

## Resumen
En esta clase profundizamos en CSS para construir layouts responsivos reales: **Grid esencial** (lo mínimo para reconocerlo y saber cuándo usarlo), **Flexbox profundo** (`flex-wrap`, `flex-basis`, `align-self`) y un **breakpoint verificable en DevTools**. La orientación de la clase es práctica: cada concepto enseñado se aplica en el lab sobre el mismo proyecto de las clases anteriores.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
| --- | --- | --- |
| **1. Introducción y contexto**  | 15 min  | Demo: el mismo layout resuelto con Grid y con Flex — cuándo elegir cada uno. |
| **2. Parte 1 – Grid esencial** | 20 min  | `display: grid; grid-template-columns: repeat(3, 1fr); gap`. Aplicado a `testimonios.html`. |
| **3. Parte 2 – Flexbox profundo**   | 20 min  | `flex-wrap`, `flex-basis`, `align-self` aplicados a `compra.html`. |
| **4. Parte 3 – Media query verificable** | 20 min  | Breakpoint a 768px que **cambia el layout**. Verificación obligatoria en DevTools modo responsive con screenshot. |
| **5. Cierre y Síntesis** | 15 min  | Reflexión sobre cuándo Grid vs Flex, revisión de retos, validación visual y entrega. |


---

## 📌 Preparación para la clase

> Antes de llegar a clase, piensa en estas preguntas y conversa con tus compañeros si lo deseas:

#### 🧠 Lista de Mitos y Verdades para Analizar
1. "CSS Grid reemplaza totalmente la necesidad de Flexbox"
2. "Grid no es todavía una tecnología estable y confiable para proyectos en producción"
3. "Usar `display: grid;` garantiza automáticamente que tu sitio sea responsive"
4. "`flex-basis` y `width` hacen exactamente lo mismo"
5. "Las propiedades de alineación (justify-content, align-content) no funcionan igual en Grid que en Flexbox"
6. "Para layouts simples, Grid es demasiado complejo y no vale la pena"
7. "Combinar Grid y Flexbox en un mismo proyecto genera confusión y no es recomendable"

> **Identifica** cuáles crees que son mitos y cuáles son verdades. Prepárate para justificar tus respuestas con evidencia de lecturas o experiencias.

#### 📚 Recursos sugeridos

1. **"Guía Completa de CSS Grid" en CSS-Tricks**
   [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/){:target="_blank"}

2. **"A Complete Guide to Flexbox" (CSS-Tricks)**
   [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/){:target="_blank"}

3. **"Aprendiendo CSS Grid" (MDN Web Docs)**
   [https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout){:target="_blank"}

---

## Resultados esperados

Al concluir la Clase 03, los estudiantes habrán construido layouts responsivos reales combinando lo esencial de Grid con las propiedades profundas de Flexbox.

### Podrán hacer
1. **Aplicar Grid esencial**: `display: grid; grid-template-columns: repeat(N, 1fr); gap` sobre tarjetas.
2. **Profundizar en Flexbox**: usar `flex-wrap`, `flex-basis` y `align-self` con propósito.
3. **Verificar responsividad real**: configurar un breakpoint y probarlo en DevTools modo responsive.

### Podrán explicar
1. **Cuándo usar Grid vs Flexbox**: Grid para layouts 2D (filas y columnas controladas a la vez); Flex para layouts 1D (una sola dirección).
2. **Qué hace cada propiedad de Flex**: `flex-wrap` permite saltos de línea; `flex-basis` define tamaño base; `align-self` sobreescribe alineación para un ítem.
3. **Por qué los breakpoints siguen siendo necesarios**: ni Grid ni Flex resuelven solos todos los casos responsivos.

### Podrán implementar
1. **Layout 2D con Grid esencial**: una grilla de tarjetas con `repeat(N, 1fr)` y `gap`.
2. **Layout 1D con Flex profundo**: una sección con elementos de tamaños distintos que envuelven y se alinean individualmente.
3. **Responsividad verificable**: breakpoint en 768px, screenshot del antes/después en DevTools.

## Glosario de Nuevos Términos

- **Grid Container**: Elemento padre que establece el contexto de grid en sus elementos hijos.
- **Grid Item**: Cada elemento hijo directo dentro de un contenedor de grid.
- **Fraction (fr) Unit**: Unidad de Grid que representa una fracción del espacio disponible en el contenedor.
- **`flex-wrap`**: Permite que los ítems flex envuelvan a múltiples líneas cuando no caben.
- **`flex-basis`**: Tamaño base sugerido del ítem antes de aplicar `flex-grow`/`flex-shrink`.
- **`align-self`**: Sobreescribe `align-items` del contenedor para un ítem específico.
- **DevTools responsive mode**: Vista del navegador (F12 → icono móvil) que simula distintos tamaños de pantalla.
