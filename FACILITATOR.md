# Repositorio Guía del Instructor para el curso Code 201

Este repositorio está diseñado para ayudar a los instructores a encaminarse en la enseñanza del curso Code 201. A continuación están los detalles referentes a los contenidos y al prósito de la documentación en cada directorio.

*Además, toma en cuenta de que también tendrás que familiarizarte con el repositorio [Trabajo previo del Code 201](https://github.com/codefellows/code-201-prework). El enlace al repositorio se le dará a los estudiantes después de que se inscriban para que puedan realizar la configuración básica de sus equipos (editor, Git, etc) y también tiene los enlaces para las tareas sobre HTML, CSS y JS.*

## Preparativos

Las instrucciones sobre la preparación de las clases se encuentran en el archivo [curriculum/FACILITATOR.md](./curriculum/FACILITATOR.md).

Lee esta guía de preparación por completo.

## [configuración](configs/)

Este directorio contiene los siguientes archivos necesario para la clase 201:

* `.eslintrc.json` - reglas de linter 201
* `.gitignore` - gitignore para entregar a los estudiantes

Se le deberá informar a los estudiantes sobre la responsabilidad de incluir estos archivos en cada repositorio que crean, y estos archivos deberán estar en la raíz del repositorio de las clases.

## [curriculum](curriculum/)

El directorio `curriculum` contiene un directorio por cada día de clase (numerados 1-20), y cada uno contiene una mezcla de materiales para uso interno y para los estudiantes:

* `class-##/` por cada día, cada uno de estos contiene:
  * `code-demos/`: [uso interno] Este directorio contiene un conjunto de diferentes ejemplos de código de iteraciones previas de este curso. Si se te ocurren ejemplos nuevos que quisieras contribuir en cualquier punto del curso, por favor haz un pull request y compártelos.
  * `lab/`: [para los estudiantes] Este directorio contiene las tareas diarias de laboratorio en un archivo README.md, así como los recursos que los estudianes necesitan para sus tareas. El README está publicado en GitHub pages, y está colocado en un iframe en Canvas, donde los estudiantes pueden enviar sus trabajos mediante URLs pull-request.
  * `solutions/`: [uso interno] Este directorio contiene una solución (o soluciones) para los laboratorios diarios.
  * `whiteboard-diagrams/`: [uso interno] Este directorio contiene diagramas que puedes utilizar o imitar, estos han sido recopilados de iteraciones previas de este curso. A mediados del 2017, en el campus en Seattle, muchos de nuestros instructores comenzaron a usar un iPad Pro, Apple Pencil y AirServer para proyectar diagramas hechos a mano en vez de usar una pizarra tradicional. Los beneficios de esto son numerosos: mejor visibilidad, grabar la pizarra en video, y la posibilidad de exportarlo como PNG y luego repartirlo entre la clase por medio de Slack o GitHub.
  * `FACILITATOR.md`: [uso interno] Este documento es una guía diaria para los instructores con un resumen y un esquema de la clase, descripciones de las tareas de laboratorio, y enlaces a las imágenes del directorio mencionado previamente.
  * `README.md`: [para los estudiantes] Este documento, o una versión modificada del mismo si se prefiere, deberá estar en los directorio de cada día del repositorio de la clase. Estos les proveerán a los estudiantes un punto de partida para cada día de clase.
* `learning-journal/` : A partir de la Clase 2, los estudiantes del curso Code 201 deberán llevar un registro diario de su aprendizaje. Este directorio contiene instrucciones para la tarea en curso y así como un ejemplo de anotación en el registro.
* [resources/](curriculum/resources/): Este directorio contiene una variedad de recursos que te podrían ser de ayuda:
  * `handouts-graphics/`: Este directorio contiene diversos materiales que puedes utilizar.
* [weekly-overviews/](curriculum/weekly-overviews/): Este directorio tiene un documento que describe cada una de las 4 semanas de la versión diurna de este curso.

## Índice de contenidos

Enlaces directos a las carpetas de las clases, ordenados por temas:

1. [Introducción a las Herramientas y Fundamentos del Desarrollo](./curriculum/class-01)
1. [Conceptos básicos de JS y HTML, incluyendo Arrays; Introducción a CSS](./curriculum/class-02)
1. [Listas en HTML, Control de flujo en JS, y CSS: Box Model](./curriculum/class-03)
1. [Enlaces en HTML, Funciones en JS, e Introducción a CSS: Layout](./curriculum/class-04)
1. [CSS: Imágenes, Color, Texto; Ramas en Git](./curriculum/class-05)
1. [El DOM, Modelos de Dominio, e Introducción a los Objetos](./curriculum/class-06)
1. [Introducción a la Programación orientada a objetos con funciones constructoras; Tablas en HTML](./curriculum/class-07)
1. [Más sobre CSS: Layout](./curriculum/class-08)
1. [Formularios en HTML y Eventos en JS](./curriculum/class-09)
1. [Depuración en JS y CSS: Layout](./curriculum/class-10)
1. [Audio/Video, Información Práctica, y Comenzar con el app Vote Tracker](./curriculum/class-11)
1. [Añadir un gráfico a la app Vote Tracker](./curriculum/class-12)
1. [Conceptos básicos del Local Storage y Conceptos de UI/UX](./curriculum/class-13)
1. [CSS: Animaciones; Temas de nivel intermedio de JS; Utilizar el Local Storage para compartir datos entre dos páginas](./curriculum/class-14)
1. [Repaso de Code 201, Vista previa de Code 301, y Comienzo de la semana del proyecto](./curriculum/class-15)
1. [Semana del Proyecto: Hito 1](./curriculum/class-16)
1. [Semana del Proyecto: Hito 2](./curriculum/class-17)
1. [Semana del Proyecto: Hito 3](./curriculum/class-18)
1. [Semana del Proyecto: Hito 4](./curriculum/class-19)
1. [Semana del Proyecto: Hito 5](./curriculum/class-20)
