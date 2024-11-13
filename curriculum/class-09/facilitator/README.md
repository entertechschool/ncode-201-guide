# Guía del Instructor: Formularios en HTML y Events en JS

## Resumen

Esta es la segunda de las dos clases más difíciles del curso. Los formularios de HTML tienen muchas partes para gestionar, y luego está el lado de los eventos de JavaScript para manejar el envío del formulario. De nuevo, es bastante material nuevo, con bastante complejidad, y todo el mismo tiempo.

### ¿Qué lugar ocupa este tema?

**¿Qué hicimos?**:
En la clase anterior abarcamos la herencia prototípica y la importancia de hacer wireframing para una página.

**¿En qué nos centraremos en esta clase?**:
En esta clase abarcaremos los eventos de JavaScript y el event handling. Esta clase también abarca los formularios de HTML.

**¿Qué haremos?**:
En la siguiente clase hablaremos sobre la depuración de código y revisaremos los diferentes tipos de mensajes de error que podemos encontrar en nuestra consola.

## Objetivos de aprendizaje

Revisa los objetivos detallados en el [readme de los alumnos](../README.md) de esta clase.

## Preparativos

1. Hojea las lecturas y prepárate en caso de que los alumnos tengan preguntas
1. Revisa las demostraciones de código y asegúrate de entender cómo recrearlas durante la clase. Revisa el archivo markdown respectivo de cada demostración.
1. Revisa los [diagramas en la pizarra](https://code-fellows.invisionapp.com/freehand/201-Whiteboards-8r4qFnMn2) en la cuenta de Invision de Code Fellow o [aquí](whiteboards/class09WB.png) para la clase.

## Descripción de la Clase
<!-- NOTA PARA EL INSTRUCTOR: Si haces algún cambio en la clase, haz los cambios correspondientes en el LECTURE.md -->

Consulta el [ejemplo de clase](LECTURE.md) para los detalles de la clase.

### Revisión del código

### Eventos de JavaScript

- **¿Por qué?**
  - Los eventos proporcionan una interfaz dinámica a la página web.
- **¿Qué?**
  - Los eventos son acciones o acontecimientos que les ocurren a los elementos en HTML. Se puede escribir código en JavaScript para reaccionar a estos eventos.
- **¿Cómo?**
  - Comienza con una demostración básica de un evento y event listeners en un elemento `<div>` en CodePen o VSCode.
  - Divide los pasos con el event handling.
    - Toma un elento para escuchar.
    - Añade el método `addEventListener()` y pasa los 2 argumentos del tipo de evento y la función callback/event handler.
    - Construye la función event handler. Puedes demostrarlo como una función anónima inline o una función callback definida por separado.

### Formularios en HTML

- **¿Por qué?**
  - Esta es una buena forma de recolectar información e input de los usuarios.
- **¿Qué?**
  - Un formulario HTML representa una sección del documento que contiene controles interactivos para enviar información.
- **¿Cómo?**
  - Demuestra la construcción de un formulario utilizando los siguientes elementos semánticos:
    - `<form>`
    - `<fieldset>`
    - `<legend>`
    - `<label>`
    - `<input>`
  - Añade event handling al botón del formulario.
  - Demuestra tomando los datos de un formulario en el momento del envío con una función event handler.

### Preparación para el laboratorio

- **¿Por qué?**
  - Les proporciona a los estudiantes las herramientas para que cumplan con su laboratorio.
- **¿Qué?**
  - Revisa las instrucciones del Laboratorio 09 en Canvas.
- **¿Cómo?**
  - Consulta las notas del laboratorio a continuación.

## Notas de Laboratorio

Esta es la tercera clase difícil seguida. Una de las partes menos intuitivas es que los campos de input convertirán los numbers a strings, así que siempre es útil un recordatorio acerca de utilizar `parseInt` o `Number`.

## ¿Qué cambió desde la clase anterior?

En la clase anterior, los alumnos tuvieron un descanso de JavaScripts para profundizar en CSS layouts y los wireframes.

## ¿Qué errores, problemas o sorpresas han aparecido en el pasado en esta clase?

Espers que los estudiantes tengan dificultades llamando a sus funciones en el órden correcto, o que se olviden de llevar los datos a un array.

También es común encontrarse con errores tipográficos o confusiones acerca de los nombres.

Algunos estudiantes han tenido dificultades al borrar la fila del footer, reemplazarla con datos del formulario y luego volver a llenar la fila del footer.
