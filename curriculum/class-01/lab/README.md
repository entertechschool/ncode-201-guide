# Laboratorio 01: HTML5 Semántico y Accesibilidad

¡Bienvenido al primer laboratorio de la Landing Page de tu **producto**! En este paso inicial, vamos a construir la base de tu sitio web usando HTML5 semántico y buenas prácticas de accesibilidad. Además, aprenderás a usar la IA como apoyo para tomar mejores decisiones de estructura.

### 🎯 Objetivos de Aprendizaje

* Construir una estructura semántica con etiquetas correctas.
* Aplicar principios básicos de accesibilidad.
* Usar la IA para proponer y evaluar estructuras HTML.

### 🔑 Conceptos Clave

* **Etiquetas semánticas**: `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>` y su función en la estructura de la página.
* **Accesibilidad (A11y)**: Texto alternativo, jerarquía de encabezados, roles ARIA.
* **IA responsable**: Validar sugerencias de herramientas como ChatGPT.

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

## Parte 4 – Prompt con IA

1. Escribe un prompt para pedir ayuda a la IA:

```
“Quiero hacer una landing page con HTML5 semántico y accesible. ¿Puedes sugerirme una estructura base?”
```

2. Evalúa la respuesta: ¿usa etiquetas semánticas?, ¿cumple con accesibilidad?
3. Aplica solo lo que consideres correcto, justificando tus elecciones en el README.

🏆 **Reto autónomo:**
- Crea un segundo prompt para que la IA te sugiera cómo organizar mejor las secciones de tu landing page. Compara con tu estructura.

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

* README con explicación de estructura semántica y uso de IA.
* Activar GitHub Pages.
* Entregar:
  * URL del repositorio
  * URL de GitHub Pages

---

## 💡 Tips finales

* Valida tu HTML en [W3C Validator](https://validator.w3.org/)
* Revisa el contraste en [Contrast Checker](https://webaim.org/resources/contrastchecker/)
* Prueba tu página con lector de pantalla (VoiceOver, NVDA, ChromeVox)
* Usa la IA como apoyo, no como reemplazo
