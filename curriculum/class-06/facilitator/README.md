# Guía del Instructor: El DOM e Introducción a los objetos

## Resumen

Este es el inicio de una nuevo proyecto. Durante los siguientes 4 laboratorios, los estudiantes construirán poco a poco una aplicación que utilizará y manipulará el DOM. En esta clase presentaremos estos nuevos conceptos y comenzaremos con Salmon Cookies.

### ¿Qué lugar ocupa este tema?

**¿Qué hicimos?**:
En la clase anterior terminamos con el proyecto de la primera semana. Los estudiantes profundizarán en las funciones con su sentencia return, CSS styling, y un nuevo flujo de trabajo de git creando ramas.

**¿En qué nos centraremos en esta clase?**:
En esta clase comenzaremos con un nuevo proyecto. Los estudiantes aprenderán acerca de los objetos literales y manipular el DOM.

**¿Qué haremos?**:
En la siguiente clase nos centraremos en refactorizar nuestro código y elimar todos los objetos literales para crear una función constructora. Los estudiantes también aprenderán acerca de las tablas en HTML y más acerca de la manipulación del DOM.

## Objetivos de aprendizaje

Revisa los objetivos detallados en el [readme de los alumnos](../README.md) de esta clase.

## Preparativos

1. Hojea las lecturas de la clase y prepárate en caso de que los alumnos tengan preguntas. 
1. Revisa las demostraciones de código y asegúrate de que sepas como recrearlas durante la clase. Revisa el archivo markdown respectivo de cada demostración.
1. Sube tu repositorio de la clase a una carpeta de GitHub que contenga la carpeta `assets` ubicada en la carpeta `lab`. Los estudiantes necesitarán de estos datos para completar su laboratorio.
1. Anuncia que vas a comenzar con las reuniones individuales con los estudiantes. Consulta los "Comentario Generales" más abajo para más información acerca de en qué consistirán las reuniones.

## Descripción de la Clase
<!-- NOTA PARA EL INSTRUCTOR: Si haces algún cambio en la clase, haz los cambios correspondientes en el LECTURE.md -->

Consulta el [ejemplo de clase](LECTURE.md) para los detalles de la clase.

### Revisión del código

### Notaciones de objetos literales

- **¿Por qué?**
  - Los objetos de JavaScript son formas convenientes y poderosas de agrupar datos y funciones.
- **¿Qué?**
  - Los objetos pueden almacenar datos como **propiedades**, las cuales están representadas como parejas `key: value`, y pueden tener **métodos**, los cuales son funciones asociadas al objeto.
- **¿Cómo?**
  - Escribe un objeto literal en Replit o en un editor de texto.
    - Descompón la sintaxis.
    - Muestra cómo aparece en la consola.
  - Demuesta cómo acceder a la propiedad de un valor utilizando dot notation y bracket notation.
  - Demuestra añadir una nueva propiedad al objeto desde afuera del objeto.
  - Demuestra añadir un método al objeto.
  - Habla acerca del término `this` al referirse a objetos literales.

### El DOM y Manipulación del DOM

- **¿Por qué?**
  - La manipulación del DOM se utiliza para cambiar la estructura, estilo y contenido del documento.
- **¿Qué?**
  - Modelo de Objeto de Documento - representa la unión del HTML y CSS para crear un documento que utilizaremos en nuestro navegadores.
- **¿Cómo?**
  - Utiliza esto como preparación para el laboratorio y para la demostración en clase. 
  - Construye una estructura HTML básica pero crea un elemento `section` de inicio con un `id` específico.
  - Crea tus objetos literales y llena la información necesaria.
  - Demuesta los 4 pasos del procedimento de manipulación del DOM:
    - Toma el section del HTML con el id específico del DOM a modificar.
    - Crea un elemento.
    - Dale contenido.
    - Agrégalo al elemento padre o DOM.

### Preparación para el laboratorio

## Notas de Laboratorio

Así como en el proyecto About Me, este nuevo proyecto de laboratorio será mejorado a lo largo de varios laboratorios. Para este laboratorio, los estudiantes solo tendrán permitido utilizar notaciones de objetos literales, NO constructores. Probablemente habrán estudiantes que querrán utlizar constructores, así que asegúrate de que esperen hasta el laboratorio 7.

Este es el primer contacto con las descripciones del problema y tener que construir algo con especificaciones concretas y datos de muestra. Toma tu tiempo para explicar la descripción del problema a la clase y resaltar elementos específicos a tener en cuenta. Por ejemplo, se les dará algunos datos pero necesitan idear la lógica para los otros requisitos técnicos.

Diferencia el contenido de cada archivo HTML. La página `index.html` deberá ser pensada como la página de cara al consumidor, la cual contiene las ubicaciones, horas, marca, fuentes, etc. La página `sales.html` deberá ser pensada como la página de cara al administrador. Para este laboratorio, la página tendrá una lista de las previsiones de ventas por hora. En el siguiente laboratorio, esos datos serán convertidos a una tabla. En el laboratorio de la Clase 8, también añadirán un formulario a esta página para que el administrador pueda añadir nuevas tiendas a la tabla.

Recuérdale a los estudiantes que las historias de usuario dan algunos requisitos. Deberán leer la descripción del problema y las historias de usuario con cuidado para determinar los requisitos del laboratorio.

Este laboratorio es grande, así que aconseja a los alumnos a que vayan por partes. También recomienda que los estudiantes vuelvan a escribir cada objeto en vez de copiar y pegar código de un objeto a otro. Es tentador copiar y pegar para ganar tiempo, pero entre más escriban el código, más rápido construirán una memoria muscular mediante la repetición.

## ¿Qué cambió desde la clase anterior?

Los estudiantes estarán comenzando un nuevo proyecto esta semana.

### ¿Qué errores, problemas o sorpresas han aparecido en el pasado en esta clase?

El contenido de esta clase y el laboratorio pueden ser decisivos para muchos estudiantes. Prepárate para que surja mucha inseguridad durante las reuniones individuales.

## Comentarios Geneales

Ejemplo del flujo de una reunión individual:

1. "¿Cómo te va en la clase?"
1. "Esto es lo que veo..." (Saca el registro de calificaciones para verificar el progreso del alumno y su respuesta a la encuesta en Survey Monkey para tratar cualquier asunto)
1. "Revisemos la autoevaluación que ya has completado..."
1. "¿Hay algo de lo que quieras hablar, o tienes alguna pregunta para mí?"
1. "Ya que tenemos algunos minutos, hablemos acerca del brainstorming y hagamos un problema simple en la pizarra."

Hemos encontrado que las reuniones individuales regulares con los estudiantes tienen resultados beneficiosos en la relación estudiante/instructor, monitorear el progreso del estudiante, responder las preguntas de los estudiantes, hacer que los estudiantes practiquen brainstorming en las pizarras, y un incremento general del éxito y la satisfacción de los estudiantes.

### Revisión de las tareas de Orientación Profesional

Habla brevemente de las próximas tareas de Orientación Profesional:

Búsqueda de trabajo dirigida: Los estudiantes comenzarán a investigar empresas y crearán una hoja de cálculo para darles seguimiento mientras realizan su investigación. Recuérdale a los estudiantes que envíen esta tarea como un documento de Google con acceso compartido para que los instructores puedan ver y calificar la tarea.
