# Lab 04: Web moderna con Bootstrap

## Descripción General
En este laboratorio, recrearás la página web del laboratorio anterior pero ahora utilizando el framework Bootstrap. Aprenderás a utilizar los componentes y clases de Bootstrap para crear un diseño responsivo y profesional de manera más eficiente.

## Configuraciones
- Crea un repositorio llamado `web-moderna-bootstrap`.
- Clona tu repositorio a tu computadora local en la ruta `~/dev/[usuario_github]`.
- Ingresa a tu VScode usado `code .` y trabaja tu proyecto.
  
## Instrucciones

1. Estructura HTML
   - Incluye Bootstrap en tu proyecto utilizando el CDN `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`.
   - Implementa una barra de navegación (`navbar`) de Bootstrap con dos enlaces: **"GitHub"** y **"README"**.
   - Agrega un contenedor principal usando las clases de grid de Bootstrap.
   - Cada tarjeta debe ser un componente `card` de Bootstrap que incluya:
      - Una imagen (utiliza placehold.co para generar imágenes de 400x200 píxeles).
      - Un título usando la clase `card-title`.
      - Un texto descriptivo usando la clase `card-text`.
      - Un botón "Ver más" usando las clases de botones de Bootstrap.

2. Imágenes
   - Para las imágenes de las tarjetas:
      - Utiliza el servicio `placehold.co`
      - Dimensiones requeridas: 400x200 píxeles.
      - Ejemplo de URL: `https://placehold.co/400x200`
      - Usa la clase `card-img-top` de Bootstrap.
      - Asegúrate de incluir un atributo `alt` descriptivo para cada imagen.

3. Componentes de Bootstrap a utilizar:
   - Navbar:
      - Usa el componente `navbar` de Bootstrap.
      - Implementa el comportamiento responsive con `navbar-expand-lg`.
      - Utiliza las clases de color de Bootstrap para el fondo.
      - Agrega la clase `fixed-bottom` para móvil y `fixed-top` para desktop.

4. Sistema de Grid:
   - Utiliza las clases de columnas responsive de Bootstrap:
      - `col-12` para vista móvil.
      - `col-md-4` o `col-lg-4` para vista desktop.
   - Implementa `row` y `g-4` para el espaciado entre tarjetas.

5. Diseño Responsive:
   - Móvil: tamaños menores a 768px (breakpoint md de Bootstrap)
      - Las tarjetas ocuparán el ancho completo.
      - Navbar fija en la parte inferior.
   - Desktop: tamaños mayores a 768px
      - Las tarjetas se organizarán en una grilla de 3 columnas.
      - Navbar fija en la parte superior.

## Logros adicionales
- Personaliza los colores usando las clases de utilidad de Bootstrap.
- Implementa efectos hover en los botones usando las clases de Bootstrap.
- Agrega sombras usando las clases `shadow` de Bootstrap.
- Utiliza las clases de espaciado de Bootstrap (`m-` y `p-`) para mantener consistencia.
- Considera usar el componente `container-fluid` para anchos completos.

## Instrucciones de envío
Envía el enlace de tu repositorio y la página publicada
