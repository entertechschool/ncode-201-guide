> **Guía de Facilitador**
# Clase 03: CSS Grid esencial + Flexbox profundo

## ❄️ Previo a la clase:

### Estructura resumida

| **Fase** | **Descripción** |
| --- | --- |
| **[Intro](#1-intro-15-min)**<br>15min | Demo lado a lado del mismo layout resuelto con Grid y con Flex.<br>🎯 Que el alumno vea cuándo cada herramienta brilla, no que memorice ambas. |
| **[Debate Conceptual](#2-debate-conceptual-30-min)**<br>30min | Discusión sobre mitos de Grid y comparación 1D vs 2D.<br>🎯 Profundizar en ventajas, limitaciones y casos de uso reales. |
| **[Demo Técnica](#3-demostración-técnica-20-min)**<br>20 min | Implementación en vivo: el mismo layout con Grid `repeat(3, 1fr)` y con Flex `flex-wrap + flex-basis`.<br>🎯 Modelar la decisión "Grid 2D, Flex 1D". |
| **[Laboratorio](#4-laboratorio-y-checkpoints-100-min)**<br>100 min | 3 partes con checkpoints:<br>- ☑️ [20'] Grid esencial en `testimonios.html`<br>- ☑️ [40'] Flex profundo en `compra.html`<br>- ☑️ [60'] Breakpoint verificable con screenshot DevTools<br>🎯 Práctica guiada con retroalimentación continua. |
| **[Cierre](#5-cierre-15-min)**<br>15 min | Reflexión sobre cuándo cada herramienta, screenshots compartidos.<br>🎯 Consolidar el criterio de decisión Grid vs Flex. |

### Estrategias de Enseñanza y Aprendizaje
> 📕 Basado en Principios de Andragogía

1. **Conexión con la Experiencia Previa**
   - Retomar el lab de C02 (Flexbox básico con `display: flex`, `justify-content`, `flex-grow`). Recordar que hoy se profundiza con `flex-wrap`/`flex-basis`/`align-self` y se agrega Grid 2D.
   - Preguntar cómo resolverían una grilla de 6 tarjetas con Flex puro: pueden, pero requiere más esfuerzo. Mostrar que Grid es más directo.

2. **Resolución de Problemas Relevantes**
   - Una grilla de testimonios y un resumen de compra son patrones comunes en cualquier app comercial.
   - La media query verificable con DevTools es una habilidad de empleabilidad: la prueba diaria de cualquier dev frontend.

3. **Aprendizaje Colaborativo y Autonomía**
   - Pedir que comparen sus screenshots de breakpoint entre sí: distintos diseños, mismo principio.
   - Promover la pregunta "¿Por qué elegiste Grid aquí y Flex allá?" — la respuesta es lo que se está evaluando.

4. **Retroalimentación Inmediata y Reflexión**
   - Cada checkpoint del lab tiene una verificación visual clara (3 columnas, layout que cambia, screenshot).
   - El instructor puede recorrer la sala y validar en 30 segundos.

## 🔥 Durante la clase

### 1. Intro (15 min)
**Objetivo**: Mostrar el mismo layout resuelto con Grid y con Flex para que el alumno construya su propio criterio de elección.

- **Contextualización**:
  - Recordar que en C02 vieron Flexbox básico aplicado a navbar y galería simple.
  - Hoy van a profundizar Flex (`flex-wrap`, `flex-basis`, `align-self`) y agregar Grid esencial para el caso 2D.

- **Motivación**:
  - "Vamos a resolver el MISMO layout (una grilla de 6 tarjetas) primero con Flex y luego con Grid. Verán que ambos funcionan, pero uno se siente más natural."

- **Conceptos Clave** (anuncio):
  1. **Grid esencial**: `display: grid; grid-template-columns: repeat(N, 1fr); gap`.
  2. **Flexbox profundo**: `flex-wrap`, `flex-basis`, `align-self`.
  3. **Breakpoint verificable**: `@media (max-width: 768px)` + DevTools modo responsive.

> **Tip para el facilitador**:
> Mantenga la introducción corta — el aprendizaje real ocurre en la demo y en el lab. Si la intro pasa de 15 min, está sobre-explicando.

### 2. Debate Conceptual (30 min)
Basado en los mitos del README de la clase.

1. **Invitar a los estudiantes a compartir**:
   - Cuáles afirmaciones consideraron "mitos" y por qué.
   - Si han visto Grid o Flex usados de forma errada en sitios reales.

2. **Temas a discutir**:
   - **Grid vs. Flexbox**: Coexistencia, no competencia. Grid global, Flex en componentes (o viceversa).
   - **`flex-basis` vs `width`**: NO son idénticos. `flex-basis` interactúa con `flex-grow`/`flex-shrink`; `width` no.
   - **Media queries siguen siendo necesarias**: ni Grid ni Flex resuelven solos casos avanzados de responsividad.

3. **Construcción de Conclusiones**:
   - Pedir a un estudiante que apunte las ideas finales.
   - Reforzar: "**Grid 2D, Flex 1D**". Es la heurística más práctica.

### 3. Demostración Técnica (20 min)
**Objetivo**: Mostrar el mismo layout resuelto de dos formas y un breakpoint verificable.

1. **Ejemplo en Vivo — el mismo layout, dos maneras** (10 min)
   - Crear una grilla de 6 cards primero con Flex: `display: flex; flex-wrap: wrap; gap: 1rem;` + `flex-basis: calc(33% - 1rem)` en cada card. Funciona pero es laborioso.
   - Reescribir con Grid: `display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;`. Las cards no necesitan tamaño individual.
   - **Conclusión visible**: el código Grid es más corto y más legible cuando el caso es 2D.

2. **Demo del breakpoint verificable (10 min)**
   - Agregar `@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }`.
   - Abrir DevTools, activar modo responsive, arrastrar el ancho.
   - **Pausar y resaltar**: "El layout cambió justo al cruzar 768px. Eso es responsividad verificable. Si en tu lab no ves este cambio, algo está mal."

> **Recomendación**:
> Mostrar también `align-self: flex-start` en uno de los cards y cómo se separa del resto. Pequeña sorpresa visual que ayuda a recordar la propiedad.

### 4. Laboratorio y Checkpoints (100 min)

> **Objetivo**: Aplicar Grid esencial, Flex profundo y un breakpoint verificable sobre el mismo proyecto.

1. **Checkpoint 1 (≈20')**: Grid esencial en `testimonios.html`
   - **Dinámica**:
     - El alumno crea `testimonios.html` con 6 cards.
     - Aplica `display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;`.
   - **Verificación**:
     - 6 cards distribuidas en 3 columnas × 2 filas.
     - El instructor recorre la sala y valida visualmente.

2. **Checkpoint 2 (≈40')**: Flex profundo en `compra.html`
   - **Dinámica**:
     - El alumno crea `compra.html` con producto + resumen + extras.
     - Aplica `flex-wrap`, `flex-basis` y `align-self`.
   - **Verificación**:
     - Resumen alineado arriba (`align-self: flex-start`) aunque producto sea más alto.
     - Extras ocupa 100% (`flex-basis: 100%`) y baja a otra línea.
     - Si todo se ve igual al `display: flex` puro, falta `flex-wrap` o `flex-basis`.

3. **Checkpoint 3 (≈60')**: Breakpoint verificable + screenshot
   - **Dinámica**:
     - Agregar `@media (max-width: 768px) { ... }` que cambie ambos layouts.
     - Verificar en DevTools modo responsive.
     - Tomar screenshot del antes/después.
   - **Verificación**:
     - El instructor pide ver el screenshot en pantalla del alumno (no aceptar "ya funciona", verificar el screenshot).
     - Si el layout no cambia, abrir DevTools → Elements → Styles del elemento y ver si el `@media` aparece.

### 5. Cierre (15 min)
1. **Presentación de Avances** (10 min)
   - Invitar a 2-3 estudiantes que se sientan cómodos mostrando su screenshot del breakpoint.
   - Comparar diseños: distintos enfoques visuales, misma técnica.

2. **Conclusiones Clave** (5 min)
   - **Grid 2D, Flex 1D**. Si te tomó 5 minutos elegir, es porque ambas funcionan. No hay respuesta única.
   - **`flex-basis` no es `width`**. La diferencia se nota cuando combinas con `flex-grow`/`flex-shrink`.
   - **Responsividad solo cuenta si la verificaste en DevTools**. Suposiciones no valen.
   - **`grid-template-areas` y `auto-fit`** son herramientas adicionales que pueden explorar en M5 cuando el proyecto lo requiera.
