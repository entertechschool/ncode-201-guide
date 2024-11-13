# Guía del Instructor: Añadir un gráfico a la app Vote Tracker

## Resumen

El objetivo de esta clase es utilizar una librería de terceros para que los estudiantes puedan proporcionar una representación gráfica de los datos de clicks que han recolectado del vote tracker. Esto involucra la conversación sobre el elemento `<canvas>`, que es donde la librería de gráficos hace su trabajo.

### ¿Qué lugar ocupa este tema?

**¿Qué hicimos?**:

En la clase anterior, los estudiantes comenzaron con su nuevo proyecto, Odd Duck Products. 

**¿En qué nos centraremos en esta clase?**:

En esta clase, los estudiantes aprenderán a utilizar una librería de terceros en su aplicación. Utilizarán el elemento `<canvas>` para mostrar sus votos recolectados en un gráfico de barras.

**¿Qué haremos?**:

En la siguiente clase, los estudiantes aprenderán a almacenar los datos de su aplicación utilizando el local storage.

## Objetivos de aprendizaje

Revisa los objetivos detallados en el [readme de los alumnos](../README.md) de esta clase.

## Preparativos

1. Hojea las lecturas y prepárate en caso de que los alumnos tengan preguntas. 
1. Revisa la demostración de código.

## Descripción de la Clase
<!-- NOTA PARA EL INSTRUCTOR: Si haces algún cambio en la clase, haz los cambios correspondientes en el LECTURE.md -->

Consulta el [ejemplo de clase](LECTURE.md) para los detalles de la clase.

### Revisión del código

- Dependiendo del grupo, una demostración de la maquetación podría ser mas adecuado.

### Resumen de Canvas + ChartJS

- **¿Por qué?**
  - ¡Las librerías de terceros nos ayudarán a ahorrar tiempo ya que no necesitamos desarrollar la funcionalidad que la librería proporciona!
- **¿Qué?**
  - El elemento `<canvas>` se utiliza para crear gráficos utilizando JavaScript.
  - Chart.js es una librería de JavaScript de terceros para visualización de datos, la cual soporta bastantes tipos de datos diferentes.
- **¿Cómo?**
  - Entra a la [documentación de Chart.js](https://www.chartjs.org/docs/latest/getting-started/) y mírala con los estudiantes
  - Crea un archivo `index.html` e incluye el elemento `<canvas>` y la etiqueta script necesaria proporcionada en la documentación de Chart.js.
  - Crea un archivo `app.js` y construye el código para crear el gráfico.
  - Muéstrale a los estudianes cómo cambiar el código para que tu gráfico muestre diferentes datos o colores en el gráfico de barras.

### Preparación para el laboratorio

- **¿Por qué?**
  - Les proporciona a los estudiantes las herramientas para que cumplan con su laboratorio.
- **¿Qué?**
  - El instructor hará una demostración acerca de añador un gráfico a la aplicación Goat Vote Tracker.
- **¿Cómo?**
  - Sigue los mismos pasos durante la demostración de código con la librería Chart.js.

## Notas de Laboratorio

Debido a la gran cantidad de trabajo del laboratorio anterior, esta clase es para ponerse al día. El único requisito del laboratorio es tomar los datos de la lista y mostrarlos como un gráfico utilizando la librería Chart.js.

Recuérdale a los estudiantes que necesitan tener todas las funcionalidades antes de seguir con la implementación del gráfico. Si no sus aplicación aún no monitoréan los clicks y votos, aún no es un buen momento para implementar el gráfico.

## ¿Qué cambió desde la clase anterior?

No hubieron grandes cambios desde la clase anterior.

## ¿Qué errores, problemas o sorpresas han aparecido en el pasado en esta clase?

Muchos estudiantes llegarán a esta clase sin tener la primera parte del laboratorio completa. Asegúrale a los estudiantes que esto es normal en este punto del curso y que la tarea de este laboratorio es menos pesada para darles más tiempo para ponerse al día. Dependiendo del grupo, se podría necesitar una revisión del código más larga.

## Comentarios Geneales

Una cosa más para comenzar a hacer en este momento es mirar a los proyectos de grupos anteriores para que los estudiantes puedan comenzar a calcular el alcance de los proyectos en general. Queremos hablar de los proyectos exitosos así como de los que tienen ciertas partes que necesitan más trabajo con el UI/UX.
