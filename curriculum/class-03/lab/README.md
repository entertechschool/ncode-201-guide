# Laboratorio 03: CSS Grid — esencial, intermedio y `grid-template-areas`

En este laboratorio aprendes **CSS Grid en profundidad** sobre 2 páginas nuevas de tu landing: `precios.html` y `faq.html`. Cubres 3 niveles de Grid en una sola clase: básico (`repeat(N, 1fr)`), intermedio (`auto-fit` + `minmax` — responsive automático sin media queries) y el feature distintivo de Grid: **`grid-template-areas`** (layout 2D con regiones nombradas que Flex NO puede hacer).

> 🎯 **Continuidad del M1:** sigues sobre el **mismo producto** que elegiste en C01. Las páginas que crearás hoy (precios y FAQ) son parte del mismo landing. En `index.html` solo actualizas el `<nav>` (P1.1) para que apunte a las páginas nuevas — no tocas el resto del contenido.

> 🔁 **Reuso de C02:** heredas la normalización CSS, `box-sizing: border-box`, los 3 breakpoints (640/1024 mobile-first) y los estilos de nav/footer. Hoy solo agregas CSS nuevo para Grid.

---

### 🌟 Objetivos de Aprendizaje

* Aplicar **Grid básico** (`display: grid`, `grid-template-columns: repeat(N, 1fr)`, `gap`).
* Aplicar **Grid intermedio** (`repeat(auto-fit, minmax(250px, 1fr))`) — responsive automático sin media queries.
* Aplicar **`grid-template-areas`** — el feature distintivo de Grid para layouts 2D con regiones nombradas.
* Construir el **criterio Grid vs Flex** para decidir cuándo usar cada uno en proyectos reales.

### 🔑 Conceptos Clave

* **Grid básico**: `display: grid`, `grid-template-columns: repeat(N, 1fr)`, `gap`.
* **Grid intermedio**: `repeat(auto-fit, minmax(250px, 1fr))` — el layout decide solo cuántas columnas caben.
* **`grid-template-areas`**: dibujas el layout con NOMBRES como ASCII art. Lo único que Flex no puede hacer.
* **Heurística Grid vs Flex**: **Grid 2D, Flex 1D**.

---

## Parte 1 — Grid en `precios.html` (~40 min)

> Vas a crear la página de **planes y precios** de tu producto. Es el caso CANÓNICO de Grid: 3 cards iguales lado a lado. Empiezas con Grid básico (3 columnas fijas) y subes a Grid intermedio (responsive automático). Pero antes — vas a aprender a **enlazar múltiples páginas HTML** para que tu landing sea una verdadera multi-página.

### 1.1 Enlazar múltiples páginas — actualiza el nav del `index.html`

Hasta ahora todos los enlaces de tu nav apuntaban a `href="#"` (placeholders). Hoy vas a tener **3 páginas reales** en tu landing: `index.html`, `precios.html` (la crearás en 1.2) y `faq.html` (la crearás en Parte 2).

**Concepto clave — rutas relativas:** un enlace como `href="precios.html"` apunta a un archivo en la **misma carpeta** que el archivo actual. El navegador resuelve automáticamente la ruta. Es la forma estándar de enlazar páginas dentro de un mismo proyecto.

Actualiza el `<nav>` de `index.html` para que los `href` sean reales:

```html
<nav>
  <a href="index.html" class="logo">Mi Producto</a>
  <a href="index.html">Inicio</a>
  <a href="precios.html">Precios</a>
  <a href="faq.html">FAQ</a>
</nav>
```

> 💡 **¿Por qué `index.html` y no solo `"/"`?** En GitHub Pages y la mayoría de hostings, `index.html` se sirve por defecto al pedir `/`, pero referenciarlo explícitamente es más claro y funciona en cualquier configuración. Cuando estés en una página interna (precios o faq), los enlaces con `href="index.html"` funcionan sin ambigüedad.

> ⚠️ **Aún no abras `precios.html` ni `faq.html`** — los enlaces darán 404 porque las páginas no existen todavía. Las vas a crear en los siguientes sub-pasos.

✅ **Checkpoint:** abres `index.html`, los clicks a Precios y FAQ dan 404 — eso es esperado por ahora.

### 1.2 Crear `precios.html`

Crea un nuevo archivo `precios.html` al mismo nivel que `index.html`. Como base, **copia el `<header>` y `<footer>` del `index.html`** — incluyendo el nav que acabas de actualizar. Así cada página tiene el mismo header.

Dentro del `<main>`, agrega la sección de planes:

```html
<main>
  <h1>Planes y precios</h1>
  <p>Elige el plan que mejor se ajuste a tu necesidad.</p>

  <div class="planes">
    <article class="plan">
      <h2>Free</h2>
      <p class="precio">$0</p>
      <ul>
        <li>Feature básico 1</li>
        <li>Feature básico 2</li>
      </ul>
      <a href="#" class="btn">Empezar gratis</a>
    </article>

    <article class="plan">
      <h2>Pro</h2>
      <p class="precio">$19/mes</p>
      <ul>
        <li>Todo lo del Free</li>
        <li>Feature pro 1</li>
        <li>Feature pro 2</li>
      </ul>
      <a href="#" class="btn">Probar 14 días</a>
    </article>

    <article class="plan">
      <h2>Enterprise</h2>
      <p class="precio">$99/mes</p>
      <ul>
        <li>Todo lo del Pro</li>
        <li>Feature enterprise 1</li>
        <li>Soporte dedicado</li>
      </ul>
      <a href="#" class="btn">Contactar ventas</a>
    </article>
  </div>
</main>
```

> 💡 Adapta los nombres de planes y features a TU producto (el que elegiste en C01 sub-paso 0).

### 1.3 Grid básico — fundamento de columnas

Antes de la versión final, necesitas entender qué es realmente una **columna de Grid** y cómo declararla.

En `styles.css`, después de tus reglas existentes, agrega temporalmente:

```css
.planes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.plan {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  background: #fff;
}

.plan .precio {
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0;
}
```

Explicación pieza por pieza:

* **`display: grid`** activa el modelo Grid en `.planes` — convierte a `.planes` en un **grid container** y sus hijos directos (las `<article class="plan">`) en **grid items**.
* **`grid-template-columns: 1fr 1fr 1fr`** declara las columnas de la grilla **explícitamente**: una columna por cada valor que escribes. Aquí pones **3 valores** (`1fr 1fr 1fr`), entonces tienes **3 columnas**.
* **`1fr`** = "una unidad de **fracción** del espacio disponible". Si las 3 columnas son `1fr 1fr 1fr`, cada una ocupa **1/3** del ancho. Si pusieras `2fr 1fr 1fr`, la primera ocuparía la mitad y las otras dos un cuarto cada una.
* **`gap: 1.5rem`** separa las cards (mismo concepto que ya usaste en Flex en C02).

#### Atajo: `repeat()` cuando todas las columnas son iguales

Escribir `1fr 1fr 1fr` está bien para 3 columnas, pero ¿y si quieres 10 columnas iguales? `1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr` es ilegible. Para eso existe `repeat()` — es **azúcar sintáctica** (atajo de código) que repite el mismo valor N veces:

```css
.planes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);   /* equivale a 1fr 1fr 1fr */
  /* ...el resto igual... */
}
```

`repeat(3, 1fr)` y `1fr 1fr 1fr` producen **exactamente el mismo resultado**. Reemplaza tu regla por la versión con `repeat()` para acostumbrarte al patrón — vas a verlo en código real toda tu carrera.

✅ **Checkpoint:** abres `precios.html` y ves las 3 cards alineadas en una fila, con la misma altura, separadas por el gap.

> ⚠️ **No es mobile-first todavía.** Achica el navegador a 320px y verás las 3 cards aplastadas e ilegibles. `1fr 1fr 1fr` (o su equivalente `repeat(3, 1fr)`) fuerza 3 columnas en **cualquier** ancho — eso NO es lo que queremos. Lo arreglamos en 1.4 con la versión mobile-first de Grid.

### 1.4 Grid intermedio — mobile-first con `auto-fit` + `minmax`

Ahora aplicas la versión **mobile-first** de Grid: en lugar de forzar 3 columnas siempre, le decimos a Grid "ajusta las columnas al ancho disponible". En pantallas estrechas habrá 1 columna; al crecer la pantalla, automáticamente subirá a 2 y luego a 3 — **sin un solo `@media`**.

Reemplaza la regla `.planes` por:

```css
.planes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
```

Explicación pieza por pieza:

* **`auto-fit`** → "ajusta automáticamente cuántas columnas caben en el ancho disponible". No le dices cuántas — Grid lo calcula.
* **`minmax(250px, 1fr)`** → cada columna mide **mínimo 250px**, **máximo 1 fracción** (lo que sobre). Si el viewport es estrecho y no caben 2 columnas de 250px, Grid baja a 1. Si caben 3, pone 3.

> 💡 **Por qué esto SÍ es mobile-first:** la regla **arranca asumiendo el caso más estrecho** (1 columna en móvil) y "crece" automáticamente con el ancho. No hay una "versión desktop" que después se reduce a móvil — el comportamiento es uno solo, adaptativo.

✅ **Checkpoint:** abres `precios.html`, achicas el ancho del navegador sin DevTools — las 3 cards pasan a 2 columnas y luego a 1, **automáticamente, sin un solo `@media`**.

> 💡 **Lección clave:** para grids "se adaptan al ancho disponible", Grid + `auto-fit` + `minmax` reemplaza media queries por completo. **Tu `precios.html` queda 100% responsive con UNA sola declaración CSS** — lo que en C02 requería 3 breakpoints. Usarás media queries solo cuando necesites cambios MAYORES de layout (como reorganizar regiones, ocultar un sidebar, cambiar orden de elementos — eso lo verás en Parte 2 con `grid-template-areas`).

🏆 **Reto autónomo:**
- Destaca el plan "Pro" como recomendado: agrega un border más grueso, fondo de color suave y un badge "Más popular" en la esquina superior derecha (pista: `position: relative` en `.plan` + `position: absolute` en el badge).

---

## Parte 2 — Grid avanzado: `grid-template-areas` en `faq.html` (~35 min)

> **El momento clave de la clase.** `grid-template-areas` es **el feature distintivo de Grid** — lo único que Flex NO puede hacer. Lo aplicarás a una página de FAQ con sidebar de categorías + área principal de preguntas.

### 2.1 Crear `faq.html`

Nuevo archivo `faq.html` al mismo nivel que `index.html` y `precios.html`. **Reusa el header del landing** (el que actualizaste en 1.1, con los 4 enlaces a las 3 páginas) y **agrega dentro del header el `<h1>Preguntas Frecuentes</h1>`**. También reusa el footer del landing.

> 💡 Ahora las 3 páginas tienen el **mismo header** con la misma nav. Si en el futuro agregas un nuevo enlace al nav, debes actualizarlo en las 3 páginas a mano. Frameworks como React/Vue resuelven esto con componentes — por ahora, copy-paste consciente.

Estructura del body:

```html
<body class="faq-layout">
  <header>
    <nav>
      <a href="index.html" class="logo">Mi Producto</a>
      <a href="index.html">Inicio</a>
      <a href="precios.html">Precios</a>
      <a href="faq.html">FAQ</a>
    </nav>
    <h1>Preguntas Frecuentes</h1>
  </header>

  <nav class="faq-nav">
    <h2>Categorías</h2>
    <ul>
      <li><a href="#general">General</a></li>
      <li><a href="#precios">Precios</a></li>
      <li><a href="#soporte">Soporte</a></li>
    </ul>
  </nav>

  <main class="faq-main">
    <section id="general">
      <h2>General</h2>
      <details>
        <summary>¿Qué es este producto?</summary>
        <p>Una descripción adaptada a tu producto.</p>
      </details>
      <details>
        <summary>¿Para quién está dirigido?</summary>
        <p>Otra pregunta y respuesta.</p>
      </details>
    </section>

    <section id="precios">
      <h2>Precios</h2>
      <details>
        <summary>¿Hay versión gratuita?</summary>
        <p>Sí, el plan Free incluye...</p>
      </details>
    </section>

    <section id="soporte">
      <h2>Soporte</h2>
      <details>
        <summary>¿Cómo contacto soporte?</summary>
        <p>Vía email o chat...</p>
      </details>
    </section>
  </main>

  <footer>
    <!-- Reusa el footer del index -->
  </footer>
</body>
```

> 💡 **Dos navs en una página, ¿se conflictúan?** No. El `<nav>` del header es el **nav principal del sitio** (navegación entre páginas). El `<nav class="faq-nav">` es el **nav local de la página** (navegación entre categorías). Son semánticamente distintos. La clase `.faq-nav` los diferencia para CSS.

> 💡 El elemento `<details>` con `<summary>` da el comportamiento "click para expandir" de FAQ **sin JavaScript** — es HTML puro.

### 2.2 Aplicar `grid-template-areas` con mobile-first

Antes de Grid, layouts como "header arriba + sidebar + main + footer abajo" requerían cálculos manuales o `float` con bugs. Con `grid-template-areas` **literalmente dibujas el layout con nombres** y asignas cada elemento a su área.

Igual que en C02, escribes el CSS **mobile-first desde el inicio**: la regla base define el layout para **móvil** (todo apilado en 1 columna) y un media query lo reorganiza en **T invertida** para tablet/escritorio.

Agrega al CSS:

```css
/* BASE: móvil — todo apilado en 1 columna */
.faq-layout {
  display: grid;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "footer";
  grid-template-columns: 1fr;
  gap: 1rem;
  min-height: 100vh;
  padding: 1rem;
}

.faq-layout header  { grid-area: header; }
.faq-nav            { grid-area: nav; }
.faq-main           { grid-area: main; }
.faq-layout footer  { grid-area: footer; }

/* TABLET+ (≥640px): T invertida con sidebar + main */
@media (min-width: 640px) {
  .faq-layout {
    grid-template-areas:
      "header header"
      "nav    main"
      "footer footer";
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
  }
}

.faq-nav {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
}

.faq-nav ul {
  list-style: none;
  padding: 0;
}

.faq-main {
  padding: 1rem;
}

.faq-main details {
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 0;
}

.faq-main summary {
  font-weight: 600;
  cursor: pointer;
}
```

Explicación pieza por pieza:

* **`grid-template-areas`** dibuja el layout con NOMBRES como ASCII art:
  - Cada **string** es una fila de la grilla.
  - Cada **palabra** dentro del string es una columna.
  - En **móvil** (base): 1 columna × 4 filas (header → nav → main → footer apilados).
  - En **tablet+** (media query): 2 columnas × 3 filas — `"header header"` ocupa las 2 columnas; `"nav main"` divide la fila central en sidebar + main; `"footer footer"` vuelve a ocupar las 2.
* **`grid-template-columns: 1fr` (base)** → 1 columna que ocupa todo el ancho.
* **`grid-template-columns: 200px 1fr` (tablet+)** → sidebar fijo de 200px + main que ocupa el resto.
* **`grid-area: nav`** asigna cada elemento a su área nombrada. **El orden visual depende de `grid-template-areas`, no del orden del HTML.**

> 💡 **Por qué esto SÍ es mobile-first:** la regla base es la versión **estrecha** (apilada en 1 columna). El media query con `min-width: 640px` **agrega** la T invertida cuando hay espacio para sidebar. Misma lógica que aprendiste en C02: estilos base = móvil; media queries "crecen" con la pantalla.

✅ **Checkpoint:** abres `faq.html` en DevTools modo responsive y verificas los 2 estados:
- **<640px (móvil):** todo apilado verticalmente — header arriba, nav (categorías), main (preguntas), footer abajo.
- **≥640px (tablet+):** "T invertida" — header arriba ocupando todo, sidebar a la izquierda + main a la derecha, footer abajo ocupando todo.

> 💡 **¿Por qué este es el feature distintivo de Grid?** Con Flexbox NO puedes hacer esto limpio. Flex es 1D — solo controla una dirección (fila O columna). Grid es 2D — controla filas Y columnas a la vez. Y con `grid-template-areas` reorganizar el layout entre breakpoints es DECLARATIVO: literalmente dibujas el nuevo layout. Sin Grid esto requeriría mucho más CSS.

🏆 **Reto autónomo:**
- Cambia el orden de `grid-template-areas` **solo en el media query desktop** para que el nav quede a la **derecha** del main, sin tocar el HTML:
  ```
  "header header"
  "main   nav"
  "footer footer"
  ```
  Esto demuestra que con Grid el **orden visual es independiente del orden del DOM**, y que en mobile sigue apilado igual.

---

## Parte 3 — Verificación responsive + criterio Grid vs Flex (~30 min)

> **Recordatorio:** tu `precios.html` ya es responsive automático desde P1.4 (gracias a `auto-fit + minmax` — sin media queries). En esta parte solo verificas `faq.html` en DevTools y construyes el criterio Grid vs Flex.

### 3.1 `faq.html` — verifica los 2 estados en DevTools

`faq.html` ya es mobile-first desde P2.2 (la regla base es móvil apilado + media query desktop con T invertida). Aquí solo **verificas** en DevTools que los 2 estados se comportan como esperas.

1. Abre `faq.html` en el navegador.
2. F12 → activa modo responsive (icono móvil arriba a la izquierda de DevTools).
3. Arrastra el ancho del viewport y verifica:

| Viewport | Qué debes ver |
|---|---|
| **<640px (móvil)** | Todo apilado: header → nav (categorías) → main (preguntas) → footer |
| **≥640px (tablet+)** | "T invertida": header arriba, sidebar (categorías) a la izquierda, main (preguntas) a la derecha, footer abajo |

4. Toma un **screenshot de los 2 estados** y guárdalo para subir al README del repo.

> 💡 **Lección clave:** con `grid-template-areas`, cambiar el layout entre breakpoints es **declarativo** — literalmente dibujas el nuevo layout. Sin Grid, esto requeriría flotar elementos, calcular anchos manuales y debuggear bugs sutiles.

✅ **Checkpoint:** los 2 screenshots muestran transiciones limpias en el breakpoint de 640px. Sin scroll horizontal en ningún tamaño.

### 3.2 Criterio Grid vs Flex — la pregunta del millón

Ahora que dominas ambos, **¿cuándo usar cada uno?** Esta tabla te resuelve la duda en cualquier proyecto futuro:

| Caso de uso | Herramienta correcta |
|---|---|
| Navegación horizontal: logo + enlaces | **Flex** (1D, ya lo hiciste en C02) |
| Galería de imágenes que envuelven | **Flex** con `flex-wrap` (o Grid con `auto-fit`) |
| Grilla de tarjetas iguales (precios) | **Grid básico** (`repeat(N, 1fr)`) |
| Grilla responsive sin media queries | **Grid intermedio** (`auto-fit` + `minmax`) |
| Layout 2D con regiones nombradas (FAQ, dashboard) | **Grid avanzado** (`grid-template-areas`) — Flex NO puede |
| Alinear UN elemento distinto al resto | **Flex** (`align-self`) |

Heurística memorable: **"Grid 2D, Flex 1D"**.

🏆 **Reto autónomo:**
- Aplica `grid-template-areas` a tu `index.html` para reorganizar header/main/footer. Comprueba si en este caso Grid mejora algo sobre lo que ya hiciste con Flex en C02 (spoiler: depende del producto).

---

## ⭐ Logros Adicionales

### Logro 1: WhatsApp con mensaje predeterminado por plan

En `precios.html`, cambia los botones "Empezar" / "Probar" / "Contactar" por enlaces de WhatsApp con mensaje específico del plan:

```html
<a href="https://wa.me/51999999999?text=Hola,%20quiero%20el%20plan%20Pro" target="_blank">
  Probar 14 días
</a>
```

### Logro 2: Grid muy avanzado (Code 301)

Investiga estos features (NO los uses en el lab, solo conoce que existen):
- **`subgrid`**: subdivide un área Grid en sub-grillas (Chrome 117+, Firefox 71+).
- **`grid-auto-flow: dense`**: rellena huecos de forma automática.
- **Posicionamiento manual** con `grid-column-start/end` y `grid-row-start/end`.

Estos son temas de Code 301.

---

## 📝 Instrucciones de Entrega

* Publica tu sitio actualizado en GitHub Pages.
* Asegúrate que `precios.html` y `faq.html` están en el repo y son accesibles vía URL.
* En el README del repo:
  - Agrega enlaces a las nuevas páginas (`/precios.html`, `/faq.html`).
  - Sube screenshots de:
    - `precios.html` en desktop (3 columnas) y móvil (1 columna) — sin media queries
    - `faq.html` en desktop (T invertida) y móvil (apilado) — con media query
* Entrega:
  * URL del repositorio
  * URL del sitio en GitHub Pages

---

## 💡 Tips finales

* **`auto-fit` vs `auto-fill`**: ambos hacen wrap, pero `auto-fit` colapsa columnas vacías (las cards se estiran); `auto-fill` deja columnas vacías visibles. Para landings usa `auto-fit`.
* **`minmax(100%, 1fr)` rompe el wrap** — no uses 100% como mínimo. Usa un valor en px como 250px.
* **DevTools tiene un inspector de Grid** — F12 → Elements → selecciona el contenedor grid → aparece un icono "grid" al lado, click → ve las líneas y áreas en pantalla.
* **`grid-template-areas` requiere que cada área sea un rectángulo** (no formas L o T). Si necesitas eso, usa `grid-column-start/end` manual.
