# Laboratorio 02: CSS Layout con Flexbox

¡Bienvenido al segundo laboratorio de la Landing Page de tu **producto**! En este paso, aplicarás las técnicas de **CSS Flexbox** para organizar visualmente la estructura de tu página, manteniendo la coherencia y accesibilidad.

> 🎯 **Continuidad del M1:** sigues trabajando sobre el **mismo producto** que elegiste en C01 (sub-paso 0). Adapta todos los textos, secciones y ejemplos de este lab a tu producto — los snippets de código son referenciales.

---

### 🌟 Objetivos de Aprendizaje

* Construir un layout responsivo utilizando Flexbox.
* Alinear y distribuir elementos de forma flexible.
* Mantener la accesibilidad visual en diferentes tamaños de pantalla.

### 🔑 Conceptos Clave

* **CSS Flexbox**: Modelo de diseño que permite alinear y distribuir elementos de forma flexible en un contenedor.
* **Propiedades principales**: `display: flex`, `justify-content`, `align-items`, `flex-wrap`, `flex-grow`.
* **Responsividad y accesibilidad visual**.
* **IA en diseño web**: Validar y ajustar sugerencias generadas por IA.

---

## Parte 1 – Configuración del Proyecto y Estilos Base

> **Requisitos previos:** Reutiliza el repositorio del laboratorio anterior.

1. Abre el archivo `styles.css` y asegúrate de tener estilos base definidos (tipografía, colores, etc.).
2. En `index.html`, mantén el uso de etiquetas semánticas. Evita `<div>` innecesarios.
3. Aplica `overflow` si el contenido excede el espacio visible.

```css
/* Ejemplo */
main {
  overflow-x: auto;
}
```

🏆 **Reto autónomo:**
- Agrega una sección llamada "Términos y Condiciones" al final del `footer`. Asegúrate de aplicar estilos con Flexbox para organizar el texto y enlaces legales de forma legible y ordenada.

---

## Parte 2 – Flexbox en Navegación y Secciones

1. En `header`, aplica Flexbox para organizar la navegación horizontalmente:

```css
header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

2. Asegúrate que los enlaces estén separados y alineados de forma coherente.
3. Aplica Flexbox también en las secciones principales dentro de `main` para organizar el contenido.
4. Vas a aplicar `flex-grow` al primer enlace del nav (que actúa como "logo") para que empuje al resto del menú a la derecha. Primero, marca el primer `<a>` con una clase `logo` en `index.html`:

```html
<nav>
  <a href="#" class="logo">Mi Producto</a>
  <a href="#">Inicio</a>
  <a href="#">Producto</a>
  <a href="#">Contacto</a>
</nav>
```

Luego, agrega esta regla CSS:

```css
header nav .logo {
  flex-grow: 1;
}
```

Verifica que el logo ocupe el espacio disponible y los enlaces queden alineados al borde derecho. Es el patrón estándar de navbars en producción.

🏆 **Reto autónomo:**
- Transforma la sección “Características” en una grilla de tarjetas con íconos, usando Flexbox. Cada tarjeta debe tener un título, una breve descripción y un ícono representativo.

---

## Parte 3 – Galería de Imágenes con Flexbox y Media Queries

1. Agrega una nueva sección al final de `main`:

```html
<section id="galeria">
  <h2>Galería de Imágenes</h2>
  <div class="galeria">
    <img src="img1.jpg" alt="...">
    <img src="img2.jpg" alt="...">
    <img src="img3.jpg" alt="...">
    <!-- Agrega más imágenes -->
  </div>
</section>
```

2. Estilos CSS con Flexbox:

```css
.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.galeria img {
  width: 200px;
  height: auto;
}
```

3. Agrega al final de `styles.css` un breakpoint para móviles:

```css
@media (max-width: 768px) {
  .galeria img {
    width: 100px;
  }
}
```

Verifica en DevTools modo responsive (F12 → ícono de dispositivo móvil) que las imágenes se reduzcan al pasar 768px de ancho. Sube screenshot del antes/después.

🏆 **Reto autónomo:**
- Agrega una pequeña descripción textual debajo de cada imagen de la galería usando Flexbox. Asegúrate de que la imagen y su texto se mantengan agrupados incluso en pantallas pequeñas.

---

## ⭐️ Logros adicionales

### 🏆 Logro 1: Sección de Testimonios

* Agrega una sección "Testimonios" con opiniones en tarjetas.
* Usa `display: flex` para que se adapten según el espacio disponible.

#### 🏆 Logro 2: Animaciones con CSS

* Agrega transiciones suaves en botones e imágenes.
* Usa `transform`, `transition`, `hover` para crear microinteracciones.

---

## 📝 Instrucciones de Entrega

* Actualiza el `README.md` incluyendo los `break points` usados en media queries.
* Publica la página en GitHub Pages.
* Entrega:

  * URL del repositorio
  * URL del despliegue en GitHub Pages

---

## 💡 Tips Finales

* Usa `gap` para separar elementos en Flexbox.
* Comenta tu CSS para facilitar su lectura.
* Valida tu HTML con [W3C Validator](https://validator.w3.org/)
* Prueba en dispositivos móviles o con vista responsive en navegador.
