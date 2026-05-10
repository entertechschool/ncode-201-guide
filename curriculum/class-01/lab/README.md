# Laboratorio 01: HTML5 Semántico, Accesibilidad y Formularios

¡Bienvenido al primer laboratorio de la Landing Page de tu **producto**! En este paso inicial, vamos a construir la base de tu sitio web usando HTML5 semántico, buenas prácticas de accesibilidad y un formulario de contacto correctamente etiquetado.

### 🎯 Objetivos de Aprendizaje

* Construir una estructura semántica con etiquetas correctas.
* Aplicar principios básicos de accesibilidad.
* Construir un formulario de contacto accesible con `<form>`, `<label for>` e `<input>`.
* Verificar la navegación por teclado de la landing.

### 🔑 Conceptos Clave

* **Etiquetas semánticas**: `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>` y su función en la estructura de la página.
* **Accesibilidad (A11y)**: Texto alternativo, jerarquía de encabezados, roles ARIA.
* **Formularios accesibles**: `<form>`, `<label for>`, `<input type>`, `<button type="submit">`, asociación `label↔input` vía `for/id`.

## Parte 1 – Crear estructura base del proyecto

> **Requisitos previos:** Tener Git instalado y una cuenta en GitHub.

1. **Crear el repositorio y clonar localmente**

```bash
git init # Si lo creas local
# o
git clone # Si lo creaste en la nube y quieres clonarlo en tu local
```

> 💡 **Tip Pro:** \
> Es una buena idea tener una carpeta `dev` en el home `~` de tu sistema operativo. \
> Dentro de la carpeta `dev` puedes crear una carpeta con el mismo nombre de tu usuario de github. Aquí puedes clonar tus repositorios.
>
> _**Ejemplo**: `~/dev/bdiazc90/product-landing/page`_



2. **Estructura de carpetas sugerida:**

```
product-landing-page/
├── index.html
├── css/
│   └── styles.css
├── img/
└── README.md
```

3. **Contenido base en `index.html`:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi producto</title>
</head>
<body>

</body>
</html>
```

🏆 **Reto autónomo:**
- Agrega un favicon (ícono del sitio) usando una etiqueta `<link>` en el `<head>`. Busca cómo hacerlo usando solo HTML.

---

## Parte 2 – Estructura Semántica de la Landing Page

1. Dentro de `<body>`, agrega las siguientes secciones:

```html
<header>
  <nav>
    <a href="#">Inicio</a>
    <a href="#">Producto</a>
    <a href="#">Contacto</a>
  </nav>
</header>
<main>
  <section id="hero">
    <h1>Nombre del producto</h1>
    <p>Una frase que describa su valor</p>
  </section>
  <section>
    <h2>Características</h2>
    <ul>
      <li>Característica 1</li>
      <li>Característica 2</li>
      <li>Característica 3</li>
    </ul>
  </section>
</main>
<footer>
  <p>Contacto: contacto@miempresa.com</p>
</footer>
```

2. Asegúrate de usar una jerarquía correcta: `<h1>` para el título principal, `<h2>` para subsecciones.

🏆 **Reto autónomo:**
- Agrega una nueva sección llamada “Preguntas Frecuentes” usando etiquetas semánticas. Incluye al menos dos preguntas con sus respuestas.

---

## Parte 3 – Accesibilidad Básica

1. Agrega `alt` a cada imagen.
2. Usa `aria-label` si algún texto no es descriptivo.
3. Asegúrate que el contenido sigue un orden lógico.

🏆 **Reto autónomo:**
- Agrega un ícono de redes sociales y hazlo accesible para lector de pantalla.

---

## Parte 4 – Formulario de contacto accesible

Vas a agregar a tu landing un **formulario de contacto** real. Es la primera aplicación práctica de A11y: los lectores de pantalla anuncian cada campo solo si está correctamente etiquetado.

1. Antes del `<footer>`, agrega una nueva sección con un formulario:

```html
<section id="contacto">
  <h2>Contáctanos</h2>
  <form>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre">

    <label for="email">Correo electrónico</label>
    <input type="email" id="email" name="email">

    <label for="mensaje">Mensaje</label>
    <input type="text" id="mensaje" name="mensaje">

    <button type="submit">Enviar</button>
  </form>
</section>
```

2. **Regla de oro:** cada `<input>` tiene un `id` único y cada `<label>` apunta a ese `id` con `for`. Sin esa asociación, el lector de pantalla no anuncia el campo.

3. Verifica:
   - Al hacer clic en el texto del `<label>`, el cursor salta al `<input>` correspondiente (eso confirma que `for/id` están bien).
   - El `<button>` tiene `type="submit"` explícito.

> 💡 **Tip:** El atributo `placeholder` NO reemplaza al `<label>`. El placeholder desaparece al escribir; el label sigue ahí para el lector de pantalla.

🏆 **Reto autónomo:**
- Agrega un campo `<select>` para "Motivo del contacto" con opciones (Consulta, Reclamo, Sugerencia). No olvides su `<label for>`.

---

## ✅ Checkpoint A11y verificable — Navegación por teclado

> **Tiempo estimado: 5 minutos**

1. **Cierra el mouse** y trata de navegar tu landing solo con la tecla `Tab`.
2. El orden de foco debe ser lógico: logo → menú → CTA → secciones de contenido → campos del formulario → botón enviar.
3. En cada paso, debes **ver visualmente** qué elemento está enfocado (el navegador dibuja un contorno).
4. Toma un **screenshot** mostrando el foco visible en al menos 3 elementos distintos (incluyendo al menos un campo del form).

✅ **Listo cuando:** el screenshot muestra navegación por teclado funcional, el orden es lógico y los `<label>` están bien asociados.

---

## ⭐️ Logros adicionales

### 🏆 Logro 1: Modo Oscuro

* Usa variables CSS (`--bg-color`, `--text-color`).
* Agrega un botón que cambie entre modo claro y oscuro.

### 🏆 Logro 2: Microinteracciones

* Agrega transiciones en botones.
* Resalta enlaces al pasar el mouse.

---

## 📝 Instrucciones de Entrega

* README con explicación de estructura semántica y formulario accesible.
* Activar GitHub Pages.
* Entregar:
  * URL del repositorio
  * URL de GitHub Pages
  * Screenshot del checkpoint Tab nav

---

## 💡 Tips finales

* Valida tu HTML en [W3C Validator](https://validator.w3.org/){:target="_blank"}
* Revisa el contraste en [Contrast Checker](https://webaim.org/resources/contrastchecker/){:target="_blank"}
* Prueba tu página con lector de pantalla (VoiceOver, NVDA, ChromeVox)
* Cada `<input>` necesita su `<label for>`. Sin excepciones.
