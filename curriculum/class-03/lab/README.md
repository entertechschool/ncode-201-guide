# Laboratorio: Extiende el proyecto "About me"

Lee el documento por completo antes de comenzar con el trabajo del laboratorio.

## Descripción del problema

¡Cuéntanos más acerca de tí! Construye una página web "About me", con un cuestionario para el usuario sobre datos curiosos y le dé información acerca de ti y de dónde vienes. Tomaremos este proyecto como base para los próximos laboratorios. Prepárate para actualizar tu código todos los días y aprender cómo una página web comienza con una idea hasta ser un sitio implementado mediante distintas iteraciones de desarrollo.

## Historias de usuario

En el sector, encontrarás diferentes formas de comunicar los requerimientos a los desarrolladores. Esta técnica se llama Historias de usuario. Las Historias de usuario se presentan de la siguiente forma:

> Como un(a) _____, quiero _____, para que ____

Este layout permite que un cliente le indique a un equipo el tipo de interacción que está esperando y le permite que el equipo desarrollador piense en una solución que se acomode a las necesidades del cliente.

El equipo desarrollador creará una categoría llamada *__Tareas de funcionalidad__* las cuales son tareas individuales que deberán ser completadas por el desarrollador para completar la historia del usuario. Una vez se hayan completado las tareas de un usuario individual, también se completa la historia del usuario. 

A continuación se encuentran los requisitos para el laboratorio en este formato con las tareas ya creadas.

## Instrucciones

Continúa desarrollando a partir de tu laboratorio 02 al añadir funciones adicionales a tu Juego de adivinanzas About me Trabaja con el mismo repositorio que utilizaste para el Laboratorio 2, y modifica tu archivo README.md para describir tu proyecto con las nuevas características que estás añadiendo.

1. Como usuario, me gustaría ver una serie de datos relacionados a los intereses de los dueños del sitio para poder ver más información acerca de ellos de forma rápida.
    - Crea un "Top Diez" al final de tu página HTML como una lista ordenada usando HTML. Algunas ideas que podrías incluir pueden ser top diez películas favoritas, top diez lugares favoritos, o top diez lugares para visitar. Puedes escoger hacer cualquier top diez que desees.
    - Convierte tu experiencia laboral y resumen educativo en una lista no ordenada utilizando HTML

1. Como usuario, me gustaría llegar a una respuesta mediante una serie de respuestas de retroalimentación para poder aprender más acerca del dueño del sitio.
    - Añade una 6ta pregunta al juego de adivinanzas que tome un input numérico al indicarle al usuario que adivine un número.
    - Indica mediante una alerta si su estimación fue "demasiado alto" o "demasiado bajo".
    - Dale al usuario solo cuatro oportunidades para que adivine la respuesta correcta.
    - Cuando se acaben todos los intentos, dile al usuario la respuesta correcta. Considera utilizar un bucle de algún tipo.

1. Como usuario, me gustaría adivinar la respuesta a una pregunta que pueda tener varias alternativas y así poderme divertir con el juego de adivinanzas.
    - Añade una 7ma pregunta que tenga varias posibles respuestas correctas y que estén almacenadas en un array.
    - Dale 6 intentos al usuario para que adivine la respuesta correcta.
    - Esto terminará cuando el usuario adivine la respuesta correcta o se le terminen los intentos.
    - Muéstrale al usuario todas las posibles respuestas correctas.
    - Considera utilizar un bucle de algún tipo.

1. Como usuario, me gustaría conocer mi puntuación final para saber qué tan bien lo hice.
    - Da seguimiento al número total de respuestas correctas. Al final, muestra cuántas de las 7 preguntas respondió correctamente.

1. Utilizando Lighthouse en las Herramientas para desarrolladores de Chrome, analiza la accesibilidad de tu aplicación.

    - Procura obtener una puntuación de 50-65. Haz los ajustes necesarios en base al informe para obtener esa puntuación.
    - Añade una captura de pantalla de tu puntuación a tu archivo README.md.

Además de las historias de usuario mencionadas anteriormente, continúa utilizando console.logs a lo largo del código para monitorear las preguntas que se le hacen al usuario, y añade CSS adicional para diseñar tu página HTML.

Manténte dentro del marco de lo enseñado hasta ahora en la clase.  No escribas funciones en tu aplicación. Evita utilizar métodos "de ayuda" como `.includes()` y `.join()`. Dirígete directamente a los instructores si tienes preguntas acerca de este requerimiento.

### Logros Adicionales

Después de completas los requerimientos enumerados previamente, puedes elegir completar estos desafíos implementando algunos o todos los elementos siguientes en tu aplicación.

- Intenta hacer tu código más DRY al colocar todas las preguntas, respuestas, y respuestas a las primeras cinco preguntas de si/no en arrays (o incluso un array multidimensional enorme), y modificando la lógica del juego para que un bucle 'for' loop controle el flujo de pregunta a pregunta.
- Haz que la pregunta sobre adivinar un número tenga un número al azar como respuesta correcta.

## Recursos

Utiliza los mismos recursos descritos en el Laboratorio 02.

## Instrucciones de envío

- Envía el enlace a tu repositorio de GitHub para este proyecto.
- Añade un comentario a tu envío en Canvas con las respuestas a las siguientes preguntas
  - ¿Cómo te fue, en general?
  - ¿Qué observaciones o preguntas tienes acerca de lo que hemos aprendido hasta ahora?
  - ¿Cuánto tiempo te tomó terminar esta tarea? Y, antes de que comenzaras, ¿cuánto tiempo creiste que te tomaría terminar esta tarea?
