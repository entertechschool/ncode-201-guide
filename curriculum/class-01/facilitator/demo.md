# Desmostración

## Programando en HTML, CSS y JavaScript

Repasa el código de demostración ubicado en la carpeta `/demo`. Utiliza VSCode para esta demostración.

## HTML

- Comienza creando un archivo index.html.
- Construye la estructura básica de HTML.
- Resalta la importancia de que los estudiantes deban utilizar elementos semánticos en HTML.
  - Los elementos semánticos describen con exactitud el propósito del elemento y el tipo de contenido que está dentro de estos.
- Este también puede ser un buen momento para mostrarle a los estudiantes los atajos Emmet integrados en VSCode. Para obtener una parte básico de código html, escribe `!` y luego presiona `tab` o `enter`.

```html
  <!DOCTYPE html>
    <html>
      <head>
        <title>Class 01 Demo</title>
      </head>

      <body>
        <header>
          <h1>Class 01 Demo</h1>
        </header>

        <main>

        </main>

        <footer>&copy; Enter Tech School</footer>
      </body>
    </html>
```

## CSS

- Para esta primera tarea, los estudiantes mantendrán el CSS dentro del documento HTML mediante el uso de los estilos internal e inline. Comenzando desde la siguiente clase, y a partir de ahí, los estudiantes escribirán el CSS en hojas de estilo externas. 
- Primero demuestra el estilo interno mediante el uso de una etiqueta `<style>` dentro de la etiqueta `<head>`.
- Menciona los componentes en el CSS rule que creaste en la demostración.
  - Selector CSS
  - Propiedades CSS dentro de un bloque`{ ... }` separado por un punto y coma
  - Utiliza en kebab-case en los nombre de las propiedades
- Demuesta el estilo inline con el uso del atributo `style` en un elemento HTML.
  - Las propiedades CSS se colocan dentro de un par comillas dobles y separadas por un punto y coma.
  - Señala que el CSS solo se aplicará al elemento HTML en el que están integrados.
  - También explícale a los alumnos que los estilos inline siempre se sobreescriben a cualquier otro en la hoja de estilo o estilos internos, y tienen la mayor especificación.

### Estilo Interno

```html
  <!DOCTYPE html>
    <html>
      <head>
        <title>Class 01 Demo</title>
        <style>

          body {
            background-color: darkgrey;
          }

        </style>
      </head>
    </html>
```

### Estilo Inline

```html
  <p style="color: #023047; background-color: #ffb703">This is a paragraph tag.</p>
```

## JavaScript

- Presenta la etiqueta `<script>` y su ubicación antes de la etiqueta `</body>`. Al igual que el CSS, en esta clase los alumnos mantendrán su JavaScript interno dentro de su documento HTML. Comenzando desde la siguiente clase, y a partir de ahí, todo el código JavaScript estará en un archivo separado. 
- Explica que aunque estamos en el documento HTML, seguirán escribiendo JavaScript, así que deberán seguir utiliando el estilo de código adecuado para JS.
  - Indentación y espaciado adecuados
  - Formato camel case para los nombres de las variables
  - Comillas simples en los strings
- Demuestra un ejemplo de `prompt()`. Explica que `prompt()` tiene un retorno y como desarrollador, cuando una función tiene un retorno queremos capturar ese valor utilizando una variable.
- En este curso, los estudiantes utilizarán `let` para declarar variables en su código. Pero puede que desees explicar la diferencia entre `var` y `let`. Explica que declarar variables con `let` es similar a `var` pero es más nuevo y enfocado a escribir código más limpio.
  - Evita las conversaciones acerca del scope y `const`, aunque está bien explicar lo que enseñaremos pronto.
- Crea un `console.log()` para demostrar la concatenación de strings con la variable que contiene el valor del retorno del `prompt()` anterior. Explica el uso del caracter especial `\` de ser necesario.
- Demuestra un `alert()` utilizando la concatenación de strings para avisar al usuario con un mensaje basado en su input del prompt.

```html
  <!DOCTYPE html>
    <html>
      <head>
        <title>Class 01 Demo</title>
      </head>

      <body>
        <header>
          <h1>Class 01 Demo</h1>
        </header>
        <main></main>
        <footer>&copy; Enter Tech School</footer>

        <script>
          let siteVisitor = prompt('What is your name?');
          console.log('Our visitor\'s name is ' + siteVisitor);

          alert('Welcome to my site ' + siteVisitor + '!');

        </script>
      </body>
    </html>
```

## Herramientas para Desarrolladores

- Esta es una buena demostración para que los alumnos se familiaricen con abrir las Herramientas para desarrolladores de Chrome (`cmd+option+j` en Mac o `shift+CTRL+j` en Windows o Linux).
- Muéstrales las ventanas Elementos, Consola y Fuentes. Abre la consola para inspeccionar los mensajes del registro.
- Muéstra a los estudiantes cómo acceder a sus variables en la consola.

### Informes de Lighthouse

- Ejecuta un informe de Lighthouse desde las Herramientas para desarrolladores de Chrome para analizar la accesibilidad de la aplicación.
- Al implementar buenas prácticas de accesibilidad, estamos mejorando la funcionalidad del sitio para todos los usuarios. Esto es importante porque queremos asegurarnos de que todos nuestros usuarios potenciales tengan una experiencia de usuario decente.
- Se deben seleccionar las siguientes opciones para generar un informe de Lighthouse:
  - Modo: Navegación
  - Dispositivo: Escritorio
  - Categorías: Accesibilidad
- Sería un buen comienzo que los alumnos se esforzaran por alcanzar una puntuación de 50-65 en el primer módulo. Mientras progresan en los siguientes módulos, querrán alcanzar una puntuación más alta.

## Publica tu Código.

Crea un gist, y copia/pega tu código en un gist en GitHub. Muéstrale a los estudiantes tu enlace y cómo enviar la tarea a Canvas.
