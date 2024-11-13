# Guía del Instructor: Conceptos de Local Storage y UI/UX

## Resumen

En esta clase presentaremos el concepto de estado de aplicación persistente con local storage. Este es el único tema nuevo que abarcaremos. Si hay tiempo al final de la clase, también podrías presentar algunos conceptos básicos de diseño UI/UX.

### ¿Qué lugar ocupa este tema?

**¿Qué hicimos?**:

En la clase anterior, los estudiantes aprendieron a utilizar una librería de terceros en su aplicación. Aprendieron a utilizar el elemento `<canvas>` para mostrar sus votos recolectados en un gráfico.

**¿En qué nos centraremos en esta clase?**:

En esta clase, los estudiantes aprenderán acerca de los datos persistentes en su aplicación con local storage.

**¿Qué haremos?**:

¡En la siguiente clase los estudiantes terminarán con su aplicación Odd Duck Products y se prepararán para sus proyectos finales!

## Objetivos de aprendizaje

Revisa los objetivos detallados en el [readme de los alumnos](../README.md) de esta clase.

## Preparativos

1. Hojea las lecturas y prepárate en caso de que los alumnos tengan preguntas. 
1. Revisa las demostraciones de código y asegúrate de entender cómo recrearlas durante la clase. Revisa el archivo markdown respectivo de cada demostración.
1. Revisa los [diagramas en la pizarra](https://code-fellows.invisionapp.com/freehand/201-Whiteboards-8r4qFnMn2) en la cuenta de Invision de Code Fellow o [aquí](whiteboards/class13WB.png) para la clase.

## Descripción de la Clase
<!-- NOTA PARA EL INSTRUCTOR: Si haces algún cambio en la clase, haz los cambios correspondientes en el LECTURE.md -->

Consulta el [ejemplo de clase](LECTURE.md) para los detalles de la clase.

### Revisión del código

- Revisa los requisitos de laboratorio de la clase anterior:
  - Genera imágenes únicas entre rondas de votos.
  - Instala y muestra gráficos con ChartJS.

### Administrando el estado de la aplicación (persistencia de datos) con local storage

- **¿Por qué?**
  - Queremos que el usuario de nuestra aplicación sea capaz de retener los datos entre actualizaciones de página y en diferentes partes de la aplicación.
- **¿Qué?**
  - El local storage es un objeto que se almacena entre los archivos de la aplicación (del navegador) en tu computadora.
- **¿Cómo?**
  - Demuéstrale a los estudiantes cómo ver su local storage en las herramientas para desarrolladores del navegador.
  - Utiliza la consola para demostrar cómo establecer, obtener, actualizar y eliminar datos del local storage.
  - Continúa con la demostración del local storage en la aplicación Goat Vote Tracker.

### UI/UX

### Preparación para el laboratorio

- **¿Por qué?**
  - Les proporciona a los estudiantes las herramientas para que cumplan con su laboratorio.
- **¿Qué?**
  - Revisa las instrucciones del Laboratorio 13 en Canvas.
- **¿Cómo?**
  - Consulta las notas del laboratorio a continuación para más información.

## Notas de Laboratorio

Algunos estudiantes todavía se están poniendo al día con el trabajo de la clase anterior. Este laboratorio es más ligero, requiere que los estudiantes añadan el local storage a la aplicación vote tracker. Una vez que la funcionalidad esté lista, añadir el local storage no debería tomar mucho tiempo. Los estudiantes necesitan ser conscientes de cuándo y dónde están almacenando los datos extraídos. Un error común es olvidar convertir a string (stringify) o utilizar parse con los datos.

## ¿Qué cambió desde la clase anterior?

No hubieron grandes cambios desde la clase anterior.

## ¿Qué errores, problemas o sorpresas han aparecido en el pasado en esta clase?

No han surgido errores o problemas para este clase.
