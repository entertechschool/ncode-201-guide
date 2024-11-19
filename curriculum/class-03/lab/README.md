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
3. Agrega estilos a tu archivo `styles.css` para modidicar la **Barra de Navegación**
   -  Crea una barra de navegación fija en la parte inferior de la pantalla.
   -  Dale una altura del 10% del `viewport` (10vh).
   -  Aplica un degradado de color verde (#1bce89) a azul (#001482) en 45 grados.
   -  Usa flexbox para:
      - Activar flexbox `Display:flex`.  
      - Distribuir los enlaces uniformemente con `justify-content`.
      - Centrar los elementos en medio de la barra de navegación `align-items`.
   -  Estiliza los enlaces para que:
      - No tengan subrayado.
      - Sean de color blanco.
      - Tengan texto en negrita.
4. Agrega estilos a tu archivo `styles.css` para modificar el **Contenedor Principal (`<main>`)**
   - El main debe:
      - Ocupar todo el ancho disponible.
      - Tener una altura del 90% del viewport.
      - Tener un padding de 1rem en todos los lados.
5. Agrega estilos a tu archivo `styles.css` para modificar el **Contenedor Flexible (`<div class=container>`)**
   - Use flexbox en dirección columna (`flex-direction`).
   - Centre el contenido `justify-content`.
   - Tenga un espacio de 1rem entre elementos (`gap`).
   - Permita scroll si el contenido excede el viewport.
6. Agrega estilos a tu archivo `styles.css` para modificar las **Secciones de Contenido (`<section>`)**
   - Cada `<section>` debe:
      - Ocupar el 100% del ancho disponible.
      - Tener fondo blanco.
      - Incluir bordes redondeados (0.5rem).
      - Tener una sombra suave `box-shadow`.
   - La imagen dentro de cada `<section>`:
      - Debe ocupar todo el ancho.
      - Tener una altura fija de 200px.
      - Usar `object-fit: cover` para mantener la proporción.
   - El contenedor de texto debe tener un `padding` de 1.5rem.
   - Estiliza el título h2:
      - Color azul oscuro (#2c3e50).
      - Tamaño de letra de 1.5rem.
      - Margen inferior de 1rem.
   - Para el párrafo:
      - Color gris (#666).
      - Altura de línea de 1.6.
      - Margen inferior de 1.5rem.
   - El enlace debe:
      - Mostrarse como bloque en línea.
      - Tener `padding` de 0.8rem vertical y 1.5rem horizontal.
      - Fondo azul (#3498db).
      - Texto blanco.
      - Bordes redondeados (6px).
      - Incluir una transición suave al hover.
      - Cambiar a un azul más oscuro (#2980b9) al hover.
7. Agrega **Diseño Responsivo** a tu página:
   - Cuando la pantalla supere los 600px:
      - La barra de navegación debe:
         - Moverse a la parte superior.
         - Alinear los enlaces al final con `gap` de 2rem.
         - Incluir `padding-right` de 2rem.
      - El `<main>` debe:
         - Eliminar el margen inferior.
         - Añadir margen superior de 10vh.
      - Las secciones deben:
         - Tener un ancho fijo de 300px.
      - El contenedor flexible (`<div class="container">`) debe:
         - Cambiar a dirección fila `flex-direction`.
         - Permitir wrapping `flex-wrap`.
         - Aumentar el padding y gap a 2rem.     
                                                    
### Instrucciones de envío
Responde a esta actividad y comparte la URL de tu página desplegada en GitHub Pages.
