# Clase 1: HTML5 Semántico y Accesibilidad

## Estructura

| **Fase** | **Duración** | **Descripción**|
| --- | --- | --- |
| **1. Intro** | 10 min | Breve contextualización de los objetivos de la sesión. Se explica la importancia de la estructura semántica, la accesibilidad y el uso de IA.<br><br>**Objetivo**: motivar a los estudiantes y vincularlos al tema. |
| **2. Conceptos Clave y Debate** | 30 min | Presentación de etiquetas HTML5 semánticas, atributos de accesibilidad y ejemplos de prompts para IA.<br><br>**Objetivo**: proporcionar el marco teórico y los ejemplos antes de pasar a la práctica. |
| **3. Práctica _(BLEND)_** | 115 min | Los estudiantes crean su propia landing page con etiquetas semánticas y elementos de accesibilidad. Se promueve el uso de IA de forma guiada. |
| **4. Feedback** | 25 min | Revisión grupal de algunos ejemplos. Validación de accesibilidad (lector de pantalla y W3C Validator). Resolución de dudas, conclusiones y adelanto de temas para la siguiente clase.|

## Estrategias de Enseñanza y Aprendizaje 
> 📕 Basado en Principios de Andragogía

1. **Conexión con la Experiencia Previa** \
Según Malcolm Knowles, los adultos aprenden mejor cuando pueden relacionar el nuevo contenido con experiencias pasadas. En este laboratorio, se estimula a los estudiantes a compartir ejemplos o proyectos previos, para así conectar la teoría de HTML semántico y accesibilidad con situaciones reales de su entorno laboral o personal.

2. **Resolución de Problemas Relevantes** \
Las personas adultas suelen preferir aprender algo que perciban como útil para resolver problemas concretos. Por ello, la actividad se centra en construir una landing page real, con un enfoque directo en la accesibilidad (que impacta de manera significativa en la calidad de un sitio web).

3. **Aprendizaje Colaborativo y Autonomía** \
Fomentar la colaboración entre pares (peer-learning) y la interacción con el instructor permite intercambio de perspectivas y refuerza la motivación intrínseca. A la vez, se promueve la autonomía para que cada estudiante investigue y explore herramientas de IA, validando de forma activa la información obtenida.

4. **Retroalimentación Inmediata y Reflexión** \
La retroalimentación continua (tanto del instructor como de la IA y de los compañeros) impulsa la autoevaluación y la mejora constante. Al final de la sesión, se reserva un espacio para reflexionar sobre los aciertos, dificultades y aprendizajes clave, lo cual refuerza la retención y la transferencia de conocimiento a otros contextos.

## Objetivos de Aprendizaje

### 1. Construir una Estructura Semántica Sólida
> “Es importante aprender a usar etiquetas semánticas porque nos permite organizar el contenido de una página web de forma clara y coherente. Además de mejorar la lectura del código, esto facilita a los motores de búsqueda entender mejor nuestro contenido y a los lectores de pantalla brindar una experiencia más inclusiva. Si desde el principio construimos HTML con sentido, el proyecto se mantiene escalable y ordenado, lo cual nos ahorra tiempo en el futuro.”

### 2. Introducir Principios de Accesibilidad
> “La accesibilidad es esencial porque buscamos que cualquier persona, independientemente de sus capacidades o limitaciones, pueda navegar y entender nuestro sitio. Utilizar atributos `alt` en imágenes, roles ARIA y un orden lógico del contenido, hace que nuestra aplicación sea inclusiva para usuarios con lectores de pantalla o con diferentes dispositivos de acceso. Con ello, estamos ampliando la audiencia y cumpliendo con buenas prácticas que incluso tienen implicaciones legales en algunos países.”

### 3. Uso Responsable de IA
> “Integrar la IA en nuestro proceso de desarrollo nos ayuda a generar ideas y código con rapidez, pero también debemos verificar la calidad y la precisión de lo que propone. La IA no reemplaza nuestro criterio: requerimos prompts claros y un análisis posterior para asegurarnos de que el resultado cumple los requisitos de accesibilidad y semántica. Este uso responsable fomenta el pensamiento crítico y la autonomía en el aprendizaje, ya que no dependemos ciegamente de lo que la IA sugiere.”


## Conceptos Clave

### 1. HTML5 Semántico
HTML5 introdujo varias etiquetas que describen mejor la naturaleza del contenido (header, nav, main, section, article, aside, footer). Estas etiquetas semánticas facilitan la lectura y la mantenibilidad del código, además de mejorar la accesibilidad y el SEO.

**¿Por qué es Importante?**
Facilita que buscadores y lectores de pantalla (assistive technologies) comprendan la estructura del contenido.
Provee mayor legibilidad y mantenimiento a largo plazo.

> - Etiquetas clave: `<header>`, `<main>`, `<section>`, `<footer>`.
> - Jerarquía de encabezados (`<h1>`, `<h2>`, `<h3>`).

### 2. Accesibilidad en la Web (A11y)

La accesibilidad web engloba las prácticas que permiten a usuarios con limitaciones (visuales, auditivas, motoras, cognitivas) interactuar correctamente con un sitio. Un sitio accesible respeta estándares de lectura secuencial, uso de etiquetas descriptivas y atributos que orientan a las tecnologías de asistencia.

**¿Por qué es Importante?**
Incrementa la audiencia potencial al eliminar barreras de interacción.
Cumplir con estándares de accesibilidad (WCAG, ARIA) es un requerimiento legal en muchos países y un factor de responsabilidad social.

> - Uso de `alt` en imágenes.
> - Roles de accesibilidad básicos (`role="navigation"`, etc.).
> - Atributos ARIA cuando sea pertinente.

### 3. Prompt Engineering Básico
La IA puede ayudar a generar o refinar código, sin embargo, la calidad de la respuesta depende en gran medida de la calidad del prompt. Se debe preguntar de forma específica y clara, indicando contexto, detalles y restricciones.

**Tips para el Instructor** \
Muestre cómo evaluar la respuesta de la IA (¿cumple con los estándares semánticos? ¿incorpora alt en imágenes?).
Estimule la edición manual posterior para ajustar estilos o mejorar la accesibilidad según las buenas prácticas.

> - Formular preguntas concretas a la IA para obtener código de ejemplo o sugerencias de etiquetado.
> - Validar y ajustar manualmente lo generado por IA.

## Siguiente Paso ⏭
En el próximo laboratorio, los estudiantes aprenderán a aplicar CSS Layout con Flexbox para dar estilo y estructura visual a la landing page que han comenzado a construir. ¡Sigue fomentando la exploración y el aprendizaje continuo!

---

# Solucionario

## Mitos y Verdades:

1. ❌ *"Usar `<div>` para cada sección del sitio es la mejor forma de estructurar una página"*
   - Los elementos semánticos como `<section>`, `<article>`, `<nav>` proporcionan mejor estructura y significado al contenido.

2. ✅ *"Aplicar roles y atributos ARIA es imprescindible para mejorar la accesibilidad de un sitio"*
   - ARIA complementa HTML cuando la semántica nativa no es suficiente.

3. ❌ *"La semántica HTML no influye en absoluto en el posicionamiento SEO de una página"*
   - El HTML semántico es un factor importante para el SEO y ayuda a los motores de búsqueda a entender el contenido.

4. ✅ *"La IA puede generar código HTML y sugerir etiquetas semánticas, pero el desarrollador debe revisarlas antes de usarlas"*
   - La supervisión humana es crucial para garantizar la calidad y corrección del código.

5. ❌ *"Colocar texto alternativo (`alt`) en imágenes solo sirve para mejorar el resultado en la búsqueda de Google"*
   - El atributo `alt` es crucial para usuarios con lectores de pantalla y cuando las imágenes no cargan.

6. ❌ *"Solo las personas con discapacidad visual se benefician de los sitios accesibles"*
   - La accesibilidad beneficia a usuarios con diferentes discapacidades, usuarios móviles y mejora la experiencia general.

7. ✅ *"Las etiquetas `<header>`, `<main>` y `<footer>` ordenan el contenido y facilitan su lectura"*
   - Estos elementos proporcionan una estructura clara y consistente al documento.

8. ✅ *"Incluso en proyectos pequeños, la accesibilidad y la semántica siguen siendo factores esenciales"*
   - El tamaño del proyecto no determina la importancia de las buenas prácticas.

9. ✅ *"Un orden lógico de encabezados (h1, h2, h3…) facilita la navegación con lectores de pantalla"*
   - La jerarquía correcta de encabezados mejora la navegación y comprensión del contenido.

10. ✅ *"Los motores de búsqueda suelen priorizar sitios con estructura semántica y contenido ordenado"*
    - El HTML semántico ayuda a los motores de búsqueda a entender mejor el contenido.

11. ❌ *"No se pueden combinar elementos semánticos con otros más genéricos como `<div>` o `<span>` en el mismo documento HTML"*
   - Es perfectamente válido y común combinar elementos semánticos con genéricos según la necesidad.

12. ✅ *"Implementar accesibilidad puede requerir ajustes de código, pero beneficia a todo tipo de usuarios a largo plazo"*
    - La inversión en accesibilidad mejora la experiencia general del sitio.

13. ❌ *"La IA, al ser imparcial, siempre provee sugerencias de accesibilidad 100% correctas"*
   - La IA puede cometer errores y sus sugerencias deben ser validadas por desarrolladores.

14. ✅ *"Un buen uso de HTML5 semántico hace el proyecto más mantenible y promueve la colaboración entre desarrolladores"*
    - El código semántico es más legible y facilita el mantenimiento.

15. ❌ *"La accesibilidad es un requerimiento opcional y solo aplica en organizaciones públicas o gubernamentales"*
   - La accesibilidad es una responsabilidad universal que beneficia a todos los usuarios.

## “Product Landing Page / Lab 01”

A continuación se presenta un ejemplo de cómo podría lucir el código **HTML** y **CSS** que cumple con los requisitos del Laboratorio 1: HTML5 Semántico y Accesibilidad. Este ejemplo es meramente ilustrativo, y los estudiantes pueden ajustarlo según el producto que elijan.

### index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Mi Producto Estrella</title>
  <!-- Enlaza tu archivo CSS -->
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <!-- Encabezado principal semántico -->
  <header role="banner">
    <h1>Mi Producto Estrella</h1>
    <p>El producto que cambiará tu forma de ver el mundo.</p>
    <!-- Imagen con texto alternativo -->
    <img src="img/logo.png" alt="Logotipo de Mi Producto Estrella" />
  </header>

  <!-- Menú de navegación accesible -->
  <nav role="navigation" aria-label="Menú principal">
    <ul>
      <li><a href="#caracteristicas">Características</a></li>
      <li><a href="#planes">Planes</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>

  <!-- Contenido principal -->
  <main role="main">
    <section id="caracteristicas">
      <h2>Características Principales</h2>
      <p>
        Explica de forma detallada las bondades de tu producto, a quién está dirigido y por qué es útil.
      </p>
    </section>

    <section id="planes">
      <h2>Planes y Precios</h2>
      <p>
        Describe los diferentes planes de compra o suscripción, destacando beneficios y costos.
      </p>
    </section>

    <section id="contacto">
      <h2>Contacto</h2>
      <p>
        Proporciona detalles para que los visitantes puedan comunicarse contigo: un formulario, un correo o un número de teléfono.
      </p>
    </section>
  </main>

  <!-- Pie de página -->
  <footer role="contentinfo">
    <p>&copy; 2025 Mi Producto Estrella. Todos los derechos reservados.</p>
  </footer>
</body>
</html>
```

### styles.css
```css
/* Ejemplo básico de hoja de estilo con reset y variables */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --main-bg-color: #f7f7f7;
  --text-color: #333;
  --accent-color: #007bff;
}

/* Estilos globales */
body {
  font-family: Arial, sans-serif;
  background-color: var(--main-bg-color);
  color: var(--text-color);
  line-height: 1.6;
}

/* Contenedores semánticos */
header,
nav,
main,
footer {
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
}

/* Header */
header h1 {
  margin-bottom: 0.5rem;
}

/* Navegación */
nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

nav a {
  text-decoration: none;
  color: var(--accent-color);
}

/* Secciones principales */
main section {
  margin: 2rem 0;
}

main h2 {
  margin-bottom: 0.5rem;
}

main p {
  margin-top: 0.5rem;
}

/* Footer */
footer p {
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.8;
}
```