# Laboratorio: Proyecto "About me"

Lee el documento por completo antes de comenzar con el trabajo del laboratorio.

## Descripción del problema

¡Cuéntanos más acerca de tí! Construye una página web "About me", con un cuestionario para el usuario sobre datos curiosos y le dé información acerca de ti y de dónde vienes. Tomaremos este proyecto como base para los próximos laboratorios. Prepárate para actualizar tu código todos los días y aprender cómo una página web comienza con una idea hasta ser un sitio implementado mediante distintas reiteraciones de desarrollo.

## Historias de usuario

Este es nuestro primer contacto con las historias de usuario. Las historias de usuario son un recurso utlizado para identificar cuáles deben ser las funcionalidades y el diseño de un producto considerando los intereses y motivaciones de personas con distintos puntos de vista. Se presentan de la siguiente forma:

> Como un(a) _____, quiero _____, para que ____

Este layout permite que un cliente le indique a un equipo el tipo de interacción que está esperando y le permite que el equipo desarrollador piense en una solución que se acomode a las necesidades del cliente.

El equipo desarrollador creará una categoría llamada *__Tareas de funcionalidad__* las cuales son tareas individuales que deberán ser completadas por el desarrollador para completar la historia del usuario. Una vez se hayan completado las tareas de un usuario individual, también se completa la historia del usuario. 

A continuación se encuentran los requisitos para el laboratorio en este formato con las tareas ya creadas.

## Instrucciones

1. Como usuario, me gustaría aprender más sobre el dueño de la página para poder conocerlo mejor.

    - Crea un juego de adivinanzas en la página About me que utilice HTML, CSS, y JavaScript.

    - Incluye en tu página HTML una pequeña biografía, datos sobre tu educación, un resumen sobre tu experiencia laboral y logros que quisieras alcanzar.

    - Pregúntale al usuario cinco preguntas de tipo sí o no.  El input del usuario debe ser respuestas de y/n o sí/no teniendo en cuenta la distinción entre mayúsculas y minúsculas, así que los datos deben ser uniformizados para ser validados (pista: investiga acerca de las funciones `.toUpperCase()` or `.toLowerCase()`). Asegúrate de informale al usuario con una alerta si respondió correctamente.

    - Añade mensajes con `console.log()` en tu app para notificar al usuario si respondió correctamente. Antes de enviar la tarea, comenta (no elimines) tus mensajes `console.log()` y reemplázalos con `alerts()`  para completar el proyecto.

1. Como usuario, me gustaría un mensaje de bienvenida personalizado para sentir que estoy interactuando con el dueño de la página.

    - Pregúntale al usuario su nombre con un `prompt()`

    - Muestra el nombre al usuario mediante un saludo personalizado que le dé la bienvenida a tu página.

    - Muestra el nombre en tu mensaje final para el usuario.

1. Utilizando Lighthouse en las Herramientas para desarrolladores de Chrome, analiza la accesibilidad de tu aplicación.

    - Se deben seleccionar las siguientes opciones para generar un informe de Lighthouse:
      - Modo: Navegación
      - Dispositivo: Escritorio
      - Categorías: Accesibilidad
    - Procura obtener una puntuación de 50-65. Haz los ajustes necesarios en base al informe para obtener esa puntuación.
    - Añade una captura de pantalla a tu archivo README.md.

### Guía de estilo de desarrollo

Esta guía de estilo es una serie de criterios y prácticas que se deben seguir para que tu código sea aceptado por el equipo. Esto incluye los nombre de las variables, la estructura de los archivos y el proceso. A continuación hay una lista de prácticas que necesitarás seguir en este laboratorio:

   1. Tu archivo JS debe contener una declaración `'use strict'` al comienzo, y tu archivo javascript debe estar enlazado al archivo html como un archivo externo.

   1. Asegúrate de que todo el código esté escrito con la indentación y sintaxis correctas. Mira este ejemplo [JavaScript Style Guide](https://javascript.info/coding-style#syntax){:target="_blank"}. Toma en cuenta de que tu archivo JS debe cumplir con las reglas del linter que instalaste.

   1. Sigue el procedimiento Add, Commit, Push. Se debe ver en GitHub que se realicen commits de forma regular, y con buenos mensajes de commit que expliquen POR QUÉ se hizo ese commit.

### Logros Adicionales

Después de completar los requerimientos enumerados previamente, puedes elegir completar estos desafíos implementando algunos o todos los elementos siguientes en tu aplicación.

- Esfuérzate con tu trabajo en CSS. Experimenta, prueba nuevas características o técnicas que no hayas probado con anterioridad (quizás un sticky header o un sticky footer, icon fonts como FontAwesome, etc.) o solo trata de pulir tu layout/estilo tanto como sea posible.

## Recursos

Revisa y utliza estos recursos cuando estés trabajando en tu tarea de laboratorio.

- Sigue las instrucciones en el documeto ["Configurando un nuevo proyecto de Code 201"](../project-setup){:target="_blank"} para tener un resumen del contenido que necesitas tener en tu repositorio de laboratorio.

## Instrucciones de envío

El equipo de instructores evaluarán tu tarea y te darán retroalimentación.

1. Envía el enlace de tu repositorio para este proyecto.
1. Añade un comentario a tu envío con las respuestas a las siguientes preguntas.
    - ¿Cómo te fue, en general?
    - ¿Qué observaciones o preguntas tienes acerca de lo que hemos aprendido hasta ahora?
    - ¿Cuánto tiempo te tomó terminar esta tarea? 
    - Y, antes de que comenzaras, ¿cuánto tiempo creiste que te tomaría terminar esta tarea?
