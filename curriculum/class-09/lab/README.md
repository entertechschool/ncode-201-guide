# Resumen de la tarea

Lee el documento por completo antes de comenzar con el trabajo del laboratorio.

## Descripción del problema

¡La descripción del problema de [Pat's Salmon Cookies](https://entertechschool.github.io/code-201-guide/curriculum/class-06/lab/){:target="_blank"} se puede encontrar aquí!

## Instrucciones

Hoy añadirás un formulario a tu proyecto existente del puesto de galletas para que puedas añadir nuevas ubicaciónes a la tabla solo introduciendo su información en el formulario.

- Crea un nuevo formulario en HTML para que acepte la información de un nuevo puesto de galletas. Asegúrate de utiliar la etiqueta `<fieldset>` para ayudarte con el diseño.

- Al enviar el formulario HTML, crea un event handler que cree una nueva instancia de un puesto de galletas que se añada a la tabla al enviar el formulario.

- Utiliza una función constructora como guía para determinar qué campos de input necesita tu formulario (pista: ¡también considera lo que pasa al crear instancias!).

- Si no lo terminaste en el laboratorio 7, escribe una función individual que genere una fila de footer la cual mostrará el número total de galletas vendidas por hora en todas las ubicaciones. Cuando se añade una nueva tienda utilizando tu formulario, el total en la fila del footer deberá actualizarse para incluir estos nuevos números de venta.
    > PISTA: El método document.querySelectorAll() puede ser útil al volver a renderizar la fila del footer [Document.querySelectorAll()](https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll).

- Ejecuta un informe de Accesibilidad de Lighthouse y aspira a obtener una puntuación de 65-80. Haz los ajustes necesarios. Añade una captura de pantalla con tu puntuación a tu README.md.

- Aplica principios DRY en cualquier lugar donde tengas trozos de código repetido. Por lo general, cuando un trozo de código aparece por 3ra vez aprox., es cuando hay que considerar refactorizar.

- Valida tu html mediante [Validación de formularios de datos](https://developer.mozilla.org/es/docs/Learn/HTML/Forms/Form_validation).

- Confirma que tu código siga el principio de responsabilidad única. Cada función deberá hacer solo una cosa, con la capacidad de expandirla de ser necesario.

## Logros Adicionales

- Dale a tu formulario de input la funcionalidad de actualizar los datos de una ubicación que ya está en la tabla. Esto va a requerir de algunos elementos adicionales, como:
  - Algun tipo de declaración `if` para probar si el nombre de la ubicación del puesto de galletas ingresado coincide con uno que ya se encuentra en la tabla (u otro mecanismo para indicar qué ubicación actualizar)
  - Los nuevos números ingresados deben pasar por los métodos de cálculo que las instancias creadas originalmente.

## Recursos

No hay recursos adicionales para este laboratorio.

## Instrucciones de envío

- Envía el enlace a tu PR para tu rama del repositorio de GitHub para este proyecto.
- Despliega tu repositorio de GitHub utilizando [Github Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site){:  target="_blank"}. Envía el enlace a tu repositorio de GitHub para este proyecto.
- Añade un comentario a tu envío en Canvas con las respuestas a las siguientes preguntas
  - ¿Cómo te fue, en general?
  - ¿Qué observaciones o preguntas tienes acerca de lo que hemos aprendido hasta ahora?
  - ¿Cuánto tiempo te tomó terminar esta tarea? Y, antes de que comenzaras, ¿cuánto tiempo creiste que te tomaría terminar esta tarea?
