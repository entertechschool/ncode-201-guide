# Laboratorio 03: CSS Grid esencial + Flexbox profundo + Media Queries

En este laboratorio combinas **CSS Grid esencial** (lo mínimo para reconocerlo y saber cuándo usarlo) con **Flexbox profundo** (`flex-wrap`, `flex-basis`, `align-self`) y verificas responsividad real con un **breakpoint en DevTools**.

---

### 🎯 Objetivos de Aprendizaje

* Aplicar CSS Grid esencial para layouts de tarjetas en 2D.
* Profundizar en Flexbox con `flex-wrap`, `flex-basis` y `align-self`.
* Verificar un breakpoint responsivo en DevTools y documentarlo con screenshot.

### 🔑 Conceptos Clave

* **Grid esencial**: `display: grid; grid-template-columns: repeat(N, 1fr); gap`. Layout 2D rápido sin abstracciones extra.
* **Flexbox profundo**: `flex-wrap`, `flex-basis`, `align-self` aplicados al mismo proyecto.
* **Media query verificable**: breakpoint que cambia el layout y se prueba en DevTools modo responsive.

> 💡 **Cuándo elegir cuál:** Grid resuelve **layout 2D** (filas y columnas). Flex resuelve **layout 1D** (una dirección).

---

## Parte 1 – Grid esencial (~20 min)

> **Requisitos previos:** Tener el repositorio de la Landing Page.

1. Crea un archivo nuevo `testimonios.html` con esta estructura mínima:

```html
<body>
  <header><h1>Lo que dicen nuestros clientes</h1></header>
  <main>
    <section class="testimonios">
      <article class="card">"Producto excelente." — Ana</article>
      <article class="card">"Cambió mi rutina." — Luis</article>
      <article class="card">"Mejor inversión del año." — Carla</article>
      <article class="card">"Recomendado." — Diego</article>
      <article class="card">"Servicio rápido." — María</article>
      <article class="card">"Vale cada centavo." — Pedro</article>
    </section>
  </main>
</body>
```

2. En `styles.css`, aplica **Grid esencial** a `.testimonios`:

```css
.testimonios {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
```

3. Verifica que las 6 tarjetas se distribuyen en **2 filas de 3 columnas**.

✅ **Checkpoint:** abres `testimonios.html` y ves las 6 tarjetas en una grilla 3×2 con separación visible. Si las ves en una sola columna, revisa que `display: grid` esté aplicado al contenedor correcto.

🏆 **Reto autónomo:**

* Cambia `repeat(3, 1fr)` por `repeat(4, 1fr)` y observa cómo se redistribuyen. Vuelve a 3.

---

## Parte 2 – Flexbox profundo (~20 min)

> En esta parte refactorizas `compra.html` para usar **propiedades avanzadas de Flexbox** que viste en slides pero todavía no aplicaste en el lab.

1. Crea `compra.html` con la siguiente estructura:

```html
<body>
  <header><h1>Resumen de compra</h1></header>
  <main class="compra">
    <article class="producto">
      <h2>Producto Estrella</h2>
      <p>Versión Pro — 1 año</p>
    </article>
    <article class="resumen">
      <h2>Total</h2>
      <p>S/ 299.00</p>
      <button>Pagar</button>
    </article>
    <aside class="extras">
      <h3>Beneficios</h3>
      <ul><li>Soporte 24/7</li><li>Actualizaciones</li></ul>
    </aside>
  </main>
</body>
```

2. Aplica Flexbox con `flex-wrap`, `flex-basis` y `align-self`:

```css
.compra {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.producto {
  flex-basis: 400px;   /* tamaño base sugerido */
  flex-grow: 1;         /* crece si hay espacio */
}

.resumen {
  flex-basis: 250px;
  align-self: flex-start;   /* este item se alinea arriba aunque los otros sean más altos */
}

.extras {
  flex-basis: 100%;     /* siempre ocupa todo el ancho disponible */
}
```

3. Verifica en pantalla ancha (>900px): `.producto` y `.resumen` se ponen lado a lado, `.extras` baja a una segunda línea (efecto `flex-wrap`). Verifica que `.resumen` quede arriba sin estirarse (efecto `align-self: flex-start`).

✅ **Checkpoint:** abres `compra.html` y ves: `.producto` ocupando más ancho, `.resumen` al lado más angosta y alineada arriba, `.extras` en la fila de abajo ocupando todo. Si todo se ve igual, verifica que `flex-wrap: wrap` esté presente.

🏆 **Reto autónomo:**

* Cambia `align-self: flex-start` por `align-self: stretch` y observa la diferencia.
* Quita `flex-basis: 100%` de `.extras` y observa cómo cambia el wrap.

---

## Parte 3 – Media query verificable (~20 min)

> **Objetivo:** un breakpoint que **cambia el layout** y se valida en DevTools.

1. Al final de `styles.css`, agrega:

```css
@media (max-width: 768px) {
  .testimonios {
    grid-template-columns: 1fr;
  }
  .compra {
    flex-direction: column;
  }
}
```

2. Abre `testimonios.html` en el navegador y abre **DevTools** (F12).
3. Activa el **modo responsive** (icono de dispositivo móvil arriba a la izquierda de DevTools, o `Ctrl+Shift+M`).
4. Cambia el ancho del viewport: arrastra el borde derecho hasta cruzar los 768px.
5. Verifica que **al pasar 768px de ancho**:
   - Las tarjetas de testimonios pasan de 3 columnas a 1 sola columna.
   - El resumen de compra apila los elementos verticalmente.

6. Toma un **screenshot del antes y después** (desktop y móvil) y guárdalo en el README del proyecto.

✅ **Checkpoint:** el breakpoint funciona — el layout cambia visiblemente al cruzar 768px. Tu screenshot lo demuestra.

🏆 **Reto autónomo:**

* Agrega un segundo breakpoint en 1024px que muestre 4 columnas en testimonios. Ajusta el orden: mobile (1 col), tablet (3 col), desktop (4 col).

---

## ⭐ Logros Adicionales

### Logro 1: WhatsApp con mensaje predeterminado

Botón en `compra.html` que abre WhatsApp con un mensaje:

```html
<a href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20el%20producto." target="_blank">
  Comprar por WhatsApp
</a>
```

### Logro 2: Grid avanzado (exploración futura)

* Investiga `grid-template-areas`, `auto-fit` con `minmax()` — son herramientas potentes que vas a usar opcionalmente en M5 si tu proyecto lo requiere. En este lab te quedaste con lo esencial para no sobrecargar.

---

## 📝 Instrucciones de Entrega

* Publica tu sitio actualizado en GitHub Pages.
* Asegúrate que `testimonios.html` y `compra.html` están en el repo.
* Incluye el screenshot del breakpoint en el README.
* Entrega:
  * URL del repositorio
  * URL del sitio en GitHub Pages
  * Screenshot del cambio de layout a <768px

---

## 💡 Tips finales

* **Grid 2D, Flex 1D.** Si tu layout tiene filas Y columnas controladas a la vez → Grid. Si es una sola dirección → Flex.
* `gap` funciona tanto en Grid como en Flex moderno.
* DevTools modo responsive es tu nuevo mejor amigo: simúla pantallas reales sin redimensionar la ventana.
