# Lab 03: Web moderna con flexbox, box-model

A lo largo de los laboratorios del módulo irás avanzando en el contenido, diseño y responsividad de este proyecto.

##  Configuración y documentación

Para este laboratorio continuaras escribiendo en el codigo del laboratorio anterior.

## Instrucciones
1. Modifica el archivo `index.html` siguiendo estos pasos:
   - Dentro de la etiqueta `<main>`, crea un nuevo elemento `<div>`.
   - Asígnale a este `<div>` la clase container usando el atributo `class="container"`.
   - Mueve todas las etiquetas `<section>` existentes dentro de este nuevo `<div>`.
2. Modifica la estructura interna de cada `<section>` en tu archivo `index.html` siguiendo estos pasos:
   - Añade una etiqueta `<img>` como primer elemento dentro de cada `<section>`, justo antes del `<h2>`.
   - Configura los atributos de cada `<img>` de esta manera:
      - `src="https://placehold.co/400x200"` → Para mostrar una imagen placeholder.
      - `alt="..."` → Incluye una descripción específica para cada imagen.
   - Después de la etiqueta `<img>`, añade un nuevo elemento `<div>`.
   - Mueve dentro de este nuevo `<div>` los siguientes elementos en este orden:
      - El título `<h2>`.
      - El párrafo `<p>`.
      - El enlace `<a>`.  
3. En tu archivo `styles.css`, agrega reglas para:
   - **Barra de Navegación**:
      - Utiliza **flexbox** para ajustar los elementos de tu etiqueta `<nav>`.
      - Utiliza `position:fixed` para fijar tu etiqueta `<nav>`.
      - Agrega estilos de manera que tu barra de navegación se visualice correctamente.
   - **Main**:
      - Utiliza **flexbox** para ajustar el contenido. De manera que las etiquetas `<section>` se visualizen centradas en medio de la pagina, una de bajo de otra con una separación entre ellas.
      - Agrega estilos de manera que el contenido de **main** se visualize correctamente.
   - **Section**:
      - Agrega estilos que permitan visualizar correctamente las etiquetas `<h2>`,`<p>` y `<a>`.
      - Agrega estilos a la etiqueta `<a>` de manera que se visualize como un boton (`border-radius`,`background-color`,etc).
   - **media-queries**:
      - Haz que tu página sea **responsive**, cuando el ancho de la pantalla sea menor a 600px, asegura que la barra de navegación se reubique en la parte inferior de la página y se visualice correctamente.
      - Considera que los estilos y elementos de la barra de navegación deben adaptarse para mantener una experiencia de usuario fluida en pantallas pequeñas.           

### Logros adicionales
- A manera de que puedas explorar nuevos propiedades en CSS, utiliza la propiedad `hover` de manera que cuando pases el mouse por encima de los elementos `<a>` este cambie el **color de fondo** o el **color texto**.
  
### Instrucciones de envío
Responde a esta actividad y comparte la URL de tu página desplegada en GitHub Pages.
