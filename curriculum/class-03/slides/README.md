# Clase 03 – CSS Grid: esencial, intermedio y `grid-template-areas`

## 🎯 Objetivo General

Dominar CSS Grid en 3 niveles (esencial + intermedio + areas) sobre 2 páginas nuevas de tu landing — y construir el criterio claro de cuándo usar Grid vs Flex.

---

## 💡 ¿Cuándo Grid? ¿Cuándo Flex?

* **Grid** → layouts **2D**: filas Y columnas controladas simultáneamente.
* **Flex** → layouts **1D**: una sola dirección a la vez.
* **Heurística memorable:** **"Grid 2D, Flex 1D"**.

> En C02 vieron Flex profundo. Hoy ven Grid en profundidad. Saldrán con criterio para decidir cualquier layout futuro.

---

## 🔗 Antes de Grid: enlazar múltiples páginas

Hoy tu landing pasa de ser **1 archivo** a ser **3 páginas** (`index.html`, `precios.html`, `faq.html`).

### Rutas relativas — los 3 tipos de enlace:

```html
<a href="precios.html">Precios</a>             <!-- Otro archivo -->
<a href="#contacto">Contacto</a>                <!-- Ancla en la misma página -->
<a href="index.html#contacto">Contacto</a>      <!-- Otra página + ancla -->
```

* Mismo nav, repetido en las 3 páginas (copy-paste consciente).
* Frameworks como React/Vue resuelven esto con componentes — ahí llegarás.

---

## 🧬 Parte 1: Grid esencial — fundamento de columnas

### Forma explícita primero:

```css
.planes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;   /* 3 columnas, 1 valor por cada una */
  gap: 1.5rem;
}
```

* `display: grid` activa el modelo.
* `grid-template-columns: 1fr 1fr 1fr` → declara **3 columnas explícitas**.
* `1fr` = "1 fracción del espacio disponible".
* `gap` separa (mismo concepto de C02).

### Atajo con `repeat()` cuando son iguales:

```css
grid-template-columns: repeat(3, 1fr);   /* equivale a 1fr 1fr 1fr */
```

`repeat()` es **azúcar sintáctica** — útil con 10+ columnas iguales.

**Aplicado a:** `precios.html` — 3 cards Free / Pro / Enterprise.

---

## 🧠 Parte 1.B: Grid intermedio — `auto-fit` + `minmax`

```css
.planes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
```

* **`auto-fit`** → "ajusta cuántas columnas caben SOLO".
* **`minmax(250px, 1fr)`** → mínimo 250px, máximo 1 fracción.

**Resultado:** el layout se adapta al ancho **SIN media queries**.

> 💡 "Grid + auto-fit + minmax" reemplaza media queries para layouts de cards.

---

## ⭐ Parte 2: `grid-template-areas` — el feature distintivo

```css
.faq-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "nav    main"
    "footer footer";
  grid-template-columns: 200px 1fr;
}

header  { grid-area: header; }
.faq-nav  { grid-area: nav; }
.faq-main { grid-area: main; }
footer  { grid-area: footer; }
```

* Dibujas el layout con NOMBRES como ASCII art.
* Cada string = una fila. Cada palabra = una columna.
* **Flex NO puede hacer esto.** Esto solo Grid.

**Aplicado a:** `faq.html` — sidebar de categorías + main de preguntas.

---

## 🔮 Parte 3: Responsive con los 3 breakpoints de C02

Reusas los breakpoints que ya aprendiste en C02 (640/1024 mobile-first).

```css
/* BASE: móvil — todo apilado */
.faq-layout {
  grid-template-areas:
    "header"
    "nav"
    "main"
    "footer";
  grid-template-columns: 1fr;
}

/* TABLET+ (≥640px): T invertida */
@media (min-width: 640px) {
  .faq-layout {
    grid-template-areas:
      "header header"
      "nav    main"
      "footer footer";
    grid-template-columns: 200px 1fr;
  }
}
```

> Cambiar el layout entre breakpoints es **declarativo** con `grid-template-areas`. Literalmente dibujas el nuevo layout.

---

## 📊 Tabla: Grid vs Flex

| Caso | Usa |
|---|---|
| Navbar (logo + enlaces) | Flex (1D) |
| Galería que envuelve | Flex con wrap, o Grid auto-fit |
| Grilla de cards iguales | Grid `repeat(N, 1fr)` |
| Grilla responsive automático | Grid `auto-fit + minmax` |
| Layout 2D con regiones nombradas | **Grid areas** (Flex no puede) |
| Un solo elemento distinto del resto | Flex `align-self` |

---

## ✨ Logros Adicionales

### WhatsApp con mensaje por plan

* Botón en `precios.html` que abre WhatsApp con el plan seleccionado pre-llenado.

### Grid muy avanzado (Code 301)

* `subgrid`, `grid-auto-flow: dense`, posicionamiento manual con `grid-column-start/end`.
* No lo aplicas hoy — solo conoces que existe.

---

## 🤔 Discusión Final

* ¿Cuál de los 3 niveles de Grid te resultó más útil?
* ¿En qué parte del landing decidirías usar `grid-template-areas`?
* ¿Cuándo `auto-fit + minmax` reemplaza media queries y cuándo NO?

> **Reflexión:**
>
> * "Grid 2D, Flex 1D" — repítela hasta que se vuelva instinto.
> * El próximo dev que vea tu código va a entender la decisión solo si TÚ la entiendes primero.
