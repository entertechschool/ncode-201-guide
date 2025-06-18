# Clase 03 – CSS Grid Layout

## 🎯 Objetivo General

Diseñar y maquetar páginas web responsivas utilizando **CSS Grid**, organizando áreas como navbar, sidebar y contenido principal de forma semántica y accesible.

---

## 💡 ¿Por qué aprender Grid?

* CSS Grid permite organizar contenido en **dos dimensiones**: filas y columnas.
* Ideal para layouts complejos como "sidebar + contenido".
* Facilita la estructura semántica sin depender de «divs flotantes» o hacks de CSS.

> "Grid es como una hoja cuadriculada invisible donde ubicas cada pieza del sitio."

---

## 🧐 ¿Qué es CSS Grid?

* Es un sistema de layout bidimensional que se aplica a un contenedor.
* Define **áreas**, **columnas** y **filas** con nombres y proporciones.
* Los elementos hijos se ubican con `grid-area` o posiciones explícitas.

> "Le das al contenedor las reglas del juego, y a los hijos su lugar en el tablero."

---

## Ejemplo de un layour con Grid

![wirefram_grid](../lab/wireframes.png)

---

## 🔧 Propiedades Clave del Contenedor Grid

```css
body {
  display: grid;
  grid-template-areas:
    "header header"
    "nav nav"
    "sidebar main"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
}
```

* `display: grid`: activa el modelo de grilla.
* `grid-template-areas`: define el mapa visual del layout.
* `grid-template-columns`: proporción de columnas.
* `gap`: espacio entre celdas.

---

## 🧬 Parte 1: Crear Nuevas Páginas y Layout Base

### Archivos:

* `testimonios.html`
* `compra.html`

> 🔹 **Tip**: Usa `grid-template-areas` para mantener el layout organizado y legible.

### Reto:

Aplica este layout también a `index.html` para uniformizar el sitio completo.

---

## 🤠 Parte 2: Layout de Testimonios

### Objetivo:

Organizar testimonios en tarjetas dentro del `main`, con sidebar de filtros y navbar superior.

```css
main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

> 🔹 **Tip**: Usa `gap` en vez de `margin` para separar tarjetas.

### Reto:

Crea una sección "Filtrar por categoría" en el sidebar usando listas accesibles.

---

## 🔮 Parte 3: Compra + Grid Responsivo

### Objetivo:

Diseñar la página de compra y adaptarla para móviles con media queries.

```css
@media (max-width: 768px) {
  body {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
  }
}
```

> 🔹 **Tip**: Usa media queries para mantener accesibilidad y claridad en pantallas pequeñas.

### Reto:

Agrega un botón de "Comprar por WhatsApp" con mensaje predeterminado.

---

## ✨ Logros Adicionales

### WhatsApp con mensaje dinámico

* Enlace que abre WhatsApp con mensaje prellenado.
* Se puede personalizar según opciones elegidas por el usuario.

---

## 🤔 Discusión Final

* ¿Cuándo es mejor usar Grid vs. Flexbox?
* ¿Cuál fue el mayor reto al construir un layout real con Grid?
* ¿Tuviste que adaptar el HTML para que el Grid funcione bien?

> **Reflexiones:**
>
> * ¿Qué te resultó más intuitivo?
> * ¿Qué podrías explicar hoy a otra persona con confianza?
> * ¿Qué mejorarías de tu solución?
