# Laboratorio 03: CSS Layout con Grid

En este laboratorio vamos a aplicar **CSS Grid** para diseñar un layout con **navbar** y **sidebar**. Creamos dos nuevas páginas: "Testimonios" y "Compra", fortaleciendo los principios de accesibilidad y semántica.

---

### 🎯 Objetivos de Aprendizaje

* Comprender cómo usar CSS Grid para maquetar.
* Diseñar layouts responsivos con navbar y sidebar.
* Mantener accesibilidad y estructura semántica.

### 🔑 Conceptos Clave

* **Contenedor Grid y elementos hijos**: El contenedor define el sistema de grilla y los hijos se acomodan en sus celdas.
* **Grid Template Areas y repeat()**: Permiten nombrar y repetir secciones de la grilla para facilitar el diseño.
* **Responsividad con media queries**: Permiten adaptar el layout según el ancho del dispositivo.
* **Semántica y Accesibilidad**: Usar etiquetas y atributos que mejoran la experiencia para todos los usuarios.

---

## Parte 1 – Estructura y Nuevas Páginas

> Requisitos previos: Tener el repositorio de la Landing Page.

1. Agrega dos archivos nuevos:

   * `testimonios.html`
   * `compra.html`

2. Estructura inicial en HTML para ambas páginas:

```html
<body>
  <header>...</header>
  <nav>...</nav>
  <aside>...</aside>
  <main>...</main>
  <footer>...</footer>
</body>
```

3. Aplica `display: grid` en el `body` o contenedor principal con áreas de grilla.

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

> Tip: Usa `grid-template-areas` para mantener tu layout visualmente organizado.

🏆 **Reto autónomo:**

* Aplica esta estructura también a `index.html` para unificar el layout del sitio completo.

---

## Parte 2 – Layout de Testimonios

1. En `testimonios.html`, crea tarjetas de testimonios dentro del `<main>`.
2. Sidebar con opciones para filtrar testimonios (simulado).
3. Navbar superior con enlaces principales.

```css
main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

> Tip: Usa `gap` en lugar de `margin` para separar tarjetas dentro de la grilla.

🏆 **Reto autónomo:**

* Diseña el sidebar con una sección "Filtrar por categoría" usando listas accesibles (`<ul>` + roles si aplica).

---

## Parte 3 – Layout de Compra y Grid Responsivo

1. En `compra.html`, crea una sección central con resumen de producto y formulario de compra.
2. Sidebar con pasos de compra (simulado): opciones, envío, pago.
3. Agrega media queries para reorganizar el grid en pantallas pequeñas:

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

> Tip: Usa media queries para adaptar el contenido sin perder estructura ni legibilidad.

🏆 **Reto autónomo:**

* Agrega un botón de "Comprar por WhatsApp" con un enlace que incluya un mensaje automático.

---

## ⭐ Logros Adicionales

### Logro 1: WhatsApp con mensaje predeterminado

* Botón en la página de compra que abre WhatsApp con un mensaje como:

```html
<a href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20el%20producto." target="_blank">
  Comprar por WhatsApp
</a>
```

### Logro 2: Personalización del mensaje

* Hacer que el mensaje se actualice según selección del usuario (color, envío, pago).
* Puede simularse con valores estáticos en una versión inicial.

---

## 📝 Instrucciones de Entrega

* Publica tu sitio actualizado en GitHub Pages.
* Asegúrate que `testimonios.html`, `compra.html` y `index.html` compartan el layout Grid.
* Entrega:

  * URL del repositorio
  * URL del sitio en GitHub Pages
