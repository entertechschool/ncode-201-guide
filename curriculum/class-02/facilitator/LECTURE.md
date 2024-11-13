# Notas de la Clase

## Introducción a los Registros De Aprendizaje y Questionarios

### Registros de aprendizaje

Haz una introducción acerca de los registros de aprendizaje a los estudiantes. A partir de esta clase, estos se deberán entregar antes de la siguiente clase. Incentiva a que los alumnos respondan a las preguntas indicadas, ya que te dará una buena perspectiva de cómo les va y los ayudará con su aprendizaje mientras progresan en el programa. 

### Cuestionarios

- Hoy se publicará el Cuestionario 1
- Un conjunto de instrucciones únicas para dar respecto a los cuestionarios. Repasa el propósito de los cuestionarios y cómo los utilizaremos:
  - Los cuestionarios están dirigidos a reforzar el conocimiento del alumno.
  - Los cuestionarios también les ayudará a los alumnos a prepararse para el examen de entrada para el Code 301, el cual también es el examen final para este curso.
  - Los alumnos siempre tendrán más de 24 horas para completar un cuestionario.
  - Los alumnos tendrán intentos ilimitados para volver a tomar los cuestionarios hasta que obtengan la puntuación que deseen, y está bien realizar intentos adicionales después de la fecha de entrega.
  - Todos los cuestionarios se pueden realizar con ayuda de notas, libros y búsquedas en internet
  - Evita pasar mucho tiempo revisando los cuestionarios en medio de la clase, ya que pueden consumir mucho tiempo con las preguntas y explicaciones. Sin embargo, si muchos estudiantes preguntan acerca de una pregunta en específico, vale la pena abordarlo en la clase.

## Revisión del código

Calcula un plazo de 45 minutos para esto.

Pídele a un alumno que ofrezca su código como voluntario. Algunos de los criterios que tendrás que seguir al hacer esto:

1. Asegúrate de que el código haya estado dentro del alcance de los requisitos del laboratorio
1. Busca el código que aún no se haya completado durante el laboratorio y que actualmente no esté funcional. Esto le permitirá a la clase trabajar en conjunto para "arreglarlo".

Durante la revisión del código, desafía a los estudiantes para que miren en código presentado y tratan de entender lo que está pasando.

Revisa el código, línea por línea, y haz que los alumnos lean explícitamente lo que ven (ejemplo: `let name = prompt('what is your name');` sería "let name igual prompt abre paréntesis, comillas simples, what is your name, cierra comillas simples, cierra paréntesis, punto y coma")

A continuación haz que el mismo alumno te diga lo que el código hace con palabras simples. Ejemplo: La variable name está siendo declarada y es establecida como respuesta al prompt "what is your name".

## HTML/CSS

La mayoría de este contenido será un repaso del prework, así como de los cursos 101 y 102. No le dediques más de 30 minutos a esta sección.

### HTML

1. Consulta el archivo `index.html` en el folder demo para la estructura de html que presenta estos conceptos:
    1. Etiquetas de encabezado (`<h1>` - `<h6>`)
       - Las etiquetas de encabezado se utilizan para separar secciones de una página con texto grande. Las etiquetas de encabezado son utilizadas por equipos de marketing para el SEO (Optimización en Motores de Búsqueda) como términos que se pueden marcas como "palabras clave" al buscar contenido en línea.
       - Se recomienda que solo tengas 1 etiqueta `<h1>` en una página.
    1. Listas (`ul` y `ol`)
       - ol = lista ordenada. Esto hace que nuestra lista sea numérica. Ideal para establecer prioridades.
       - ul = lista no ordernada. Esta es una lista con viñetas. Ideal para tareas sencillas.

### CSS

1. Continúa a partir del HTML anterior.

1. Los navegadores no dan estilos css "por defecto". No siempre queremos estos estilos y queremos añadir el nuestro. La mejor forma de quitar todos los estilos incluidos es hacer un [CSS RESET](https://meyerweb.com/eric/tools/css/reset/)

   1. En tu demostración, crea una nuevo archivo `reset.css` y copia el contenido del sitio anterior.
   1. Luego, enlaza esto externamente al archivo html y muestra la diferencia en la página.
      `<link rel="stylesheet" type="text/css" href="reset.css" />`
   1. A continuación, crea un nuevo `style.css` y escribe nuevos estilos para añadir a la página. Enlaza esta hoja de estilo directamente debajo del estilo reset.
      `<link rel="stylesheet" type="text/css" href="style.css" />`
1. Ahora escribe CSS nuevo, siguiendo el estilo `style.css` en la carpeta demo como guía. Asegúrate de tocar los siguientes temas:
   1. clases
   1. ids
   1. valores específicos (`ol li {}`)

El CSS Reset es nuevo. Copia/pega del contenido del sitio anterior en un nuevo archivo `.css`. Cárgalo primero, antes del `style.css` en tu archivo html. ¡Nota la diferencia entre los estilos!

Díle a los estudiantes que agregen la página a sus marcadores o que copien el contenido y lo tengan disponible para futuros laboratorios. Deberán cargar el CSS RESET en todos los laboratorios futuros.

### JavaScript

Consulta el [Archivo Demo de JavaScript](demo.md) para ver los detalles acerca del código a escribir y cómo enseñar estos conceptos.

1. Tipos de Datos
1. Condicionales
   - declaraciones if
   - declaraciones switch
   - scope
1. Arrays

### Git vs GitHub

Consulta el [documento Demo](demo.md) para saber de qué puntos hablar acerca de la diferencia entre git y GitHub. Además utilizar el documento demo para ver las instrucciones acerca de cómo guiar a la clase para crear un respositorio en GitHub y clonarlo a sus máquinas locales.

### Demostración de Código en Tiempo Real

- Céntrate en escribir el código en base a la descripción y requisitos de la tarea.
- En esta tarea los estudiantes van a lidiar por primera vez con las historias de usuario a diferencia de los requisitos técnicos, así que deberás explicar cómo es que las historias de usuario y los requisitos técnicos pueden coincidir, pero cada uno contiene información única.
- Mientras construyes partes de la demostración, aplica mensajes de commit frecuentes y buenos.
