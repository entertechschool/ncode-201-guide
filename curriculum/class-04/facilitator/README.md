# Guía del Instructor: Funciones en JS, Pair Programming, e Introducción a CSS: Layout

## Resumen

### ¿Qué lugar ocupa este tema?

**¿Qué hicimos?**:

En la clase anterior, los estudiantes aprendieron más acerca del control de flujo con la introducción a los bucles. Aprendieron acerca del CSS box model.

**¿En qué nos centraremos en esta clase?**:

En esta clase enseñaremos CSS positioning, funciones, y pair programming. Esta clase es un poco pesada, así que gestiona tu tiempo mientras trabajas con el contenido de la clase.

**¿Qué haremos?**:

En la siguiente clase nos centraremos más en las funciones y su sentencia return. Los estudiantes también terminarán con su laboratorio "About Me".  Las tres tareas de los laboratorios consisten en desarrollar el proyecto "About Me", práctica de CSS y Git branching.

## Objetivos de aprendizaje

Revisa los objetivos detallados en el [readme de los alumnos](../README.md) de esta clase.

## Preparativos

1. Hojea la lectura de la clase y prepárate en caso de que los alumnos tengan preguntas. 
1. Revisa las demostraciones de código y asegúrate de entender cómo recrearlas durante la clase. Revisa el archivo markdown respectivo de cada demostración.
1. Los instructores tendrán una idea clara de los alumnos que están comenzando a abrumarse y quienes corren el riesgo de no completar el curso.
   - ***Es importante pasar tiempo con estos estudiantes que nos preocupan, ayudarlos y evaluar en qué punto se encuentran.***
1. Revisa los [diagramas en la pizarra](https://code-fellows.invisionapp.com/freehand/201-Whiteboards-8r4qFnMn2) en la cuenta de Invision de Code Fellow o [aquí](whiteboards/class04WB.png) para la clase.

## Descripción de la Clase
<!-- NOTA PARA EL INSTRUCTOR: Si haces algún cambio en la clase, haz los cambios correspondientes en el LECTURE.md -->

Consulta el [ejemplo de clase](LECTURE.md) para los detalles de la clase.

### Revisión del código

- Repasa Verdadero/Falso
- Repasa Arrays
- Repasa Bucles

### Funciones en JS 

- **¿Por qué?**
  - Las funciones son uno de los componentes fundamentales en JavaScript.
  - Las funciones se pueden reutilizar y ahorrar tiempo.
- **¿Qué?**
  - Una función es un conjunto de declaraciones que ejecutan una tarea o calculan un valor. Deben tomar un input y retornar un output.
  - Para utilizar una función debes definirla y luego llamarla.
- **¿Cómo?**
  - El instructor puede escoger utilizar replit para hacer la demostración.
  - Demuestra cómo declarar y llamar varias funciones:
    - funciones sin parámetros
    - funciones con parámetros y luego llamadas con argumentos
    - funcioenes con una sentencia return
    - guardar el valor retornado de la función a una variable
  - Abarca el scope de las funciones con algunos ejemplos.

### CSS layout - Positioning

- **¿Por qué?**
  - Algunos beneficios de utilizar CSS para el layout:
    - Mantenimiento - es más fácil hacer cambios cuando tu layout está descrito en CSS.
    - Mejor accesibilidad - organizar tu documento en base a su contenido ayuda a aquellos con lectores de pantalla.
- **¿Qué?**
  - El positioning te permite tomar elementos del flujo normal del layout del documento y hacer que se comporte diferente.
  - Algunos ejemplos para demostrar es tener un elemento encima de otro o que un elemento se mantenga en el mismo lugar dentro del viewport.
- **¿Cómo?**
  - Utiliza Code Pen en esta demostración para que pueda ser compartido en el repositorio de la clase.
  - Demuestra los siguientes valores de position a los alumnos:
    - Absolute
    - Relative
    - Fixed

### Pair programming

- **¿Por qué?**
  - Algunos beneficios de pair programming:
    - ¡Dos cabezas piensan mejor que una!
    - Es una forma efectiva de compartir conocimiento.
    - Desarrolla las habilidades interpresonales.
    - Ayuda a desarrollar un código de buena calidad más rápido a la vez que reduce el riesgo.
- **¿Qué?**
  - El pair programming es una técnica de desarrollo de software en la que dos programadores trabajan juntos en una estación de trabajo.
- **¿Cómo?**
  - Define los roles de Navigator y Driver.
  - Demuestra cómo planear un enfoque antes de comenzar a escribir código.
  - Fomenta la comunicación al programar.
  - Si se puede, haz pair programming con un TA u otro instructor.

### Preparación para el laboratorio

- **¿Por qué?**
  - Les proporciona a los estudiantes las herramientas para que cumplan con su laboratorio.
- **¿Qué?**
  - Revisa las instrucciones del Laboratorio 04 en Canvas.
- **¿Cómo?**
  - Este laboratorio se centrará principalmente en el pair programming.
  - Escribe en una pizarra el flujo de git que se utilizará durante el pair programming:
    - Fork, clonar, ACP, crear un Pull Request, y luego merge.
  - Haz que un TA, otro instructor, o quizás un alumno se ofrezca como apoyo para ayudarte con la demostración.
    - Consulta el [ejemplo de la clase](LECTURE-EXAMPLE.md) para más detalles acerca de lo que necesitas lograr durante el laboratorio de pair programming de los estudiantes.

## Notas de Laboratorio

Este laboratorio requiere del pair programming. Asegúrate de repasar con los estudiantes cuáles son los diferentes roles y cómo deberán trabajar juntos para cumplir con el objetivo.

- Los estudiantes serán emparejados con otros estudiantes con habilidades similares.
  - p.ej. Si calificas a tus estudiantes en una escala del 1-10 en base a su habilidad general, evita emparejar un 4 con un 10. Empareja un 0 con otro alumno que no sea más de un 5, y empareja a un 10 con otro alumno que no sea menos que un 6.
- Utiliza gurpos de 3 si es necesario, especialmente en equipos en donde sospechas que alguien puede que no se presente. Este es un problema más frecuente en el horario nocturno en donde esta tarea se realiza en noches consecutivas.
- Anuncia a las parejas por el canal de slack, no en clase.
  - De esta forma no habrá problemas con las expresiones faciales en Zoom cuando las personas sepan quién es su compañero.

Puede ser de ayuda mostrarle [learnlayout.com](http://learnlayout.com) a los estudiantes como instroducción a CSS layouts.

[Este artículo de freecodecamp.org](https://medium.freecodecamp.org/css-floats-explained-by-riding-an-escalator-57fa55232333) también es un buen recurso para que los alumnos entiendan cómo funcionan los floats en CSS.

## ¿Qué cambió desde la clase anterior?

Los alumnos aprenderán nuevos flujos de trabajo de Git y GitHub que pueden ser un poco difíciles.

## ¿Qué errores, problemas o sorpresas han aparecido en el pasado en esta clase?

Cada uno de los dos temas principales trae desafíos. Con las funciones, los estudiantes suelen hacerlas más complicadas de lo que realmente son, en vez de simplemente ser una envoltura alrededor de la lógica que ya han demostrado poder manejar. Además, usualmente hay mucha confusión con los conceptos básicos acerca del funcionamiento de los parámetros y los argumentos, la diferencia entre declarar y llamar una función, y el uso de las declaraciones ‘return’. La experiencia demuestra que probablemente el 50% o más de los estudiantes en realidad conocen muy poco acerca de cómo funcionan las funciones... y eso es antes de llevar el concepto de ‘scope’ a la conversación. Así mismo, la mayoría de los estudiantes han visto y suelen utilizar declaraciones de funciones y expresiones function al azar, y se necesita guiarlos con cuidado (por ahora) por el camino de las declaraciones, sin dejarse absorver por el concepto del hoisting y el comportamiento de interpretación de JS si los estudiantes por lo general tienen dificultaddes con los conceptos básicos.

Con CSS Layout, hay una gran rango de posibilidades que es imposible de gestionar sin el dominio de un puñado de conceptos fundamentales; aún así, toma más trabajo del esperado entender los conceptos básicos de forma efectiva. Los estudiantes están acostumbrados a pensar en el formato en los documentos procesados con word, y la facilidad de solo resaltar y hacer click en opciones hasta que se alcance la apariencia deseada. Con la interacción entre CSS y HTML, se debe prestar atención a la planeación y organización del documento dentro de las limitaciones de los conceptos fundamentales de CSS Layout. Esto señala la necesidad de tener un plan establecido antes de maquetar, ya que la estuctura y los detalles están entrelazados. El dominio de la terminología es la clase, y este es otro espacio importante para resaltar el rol de las habilidades de comunicación sólidas.

Además, esta clase es su primera experiencia con el pair programming, así que hay muchos aspectos técnicos y sociales/de comunicación a considerar. No calcules mal el tiempo necesario para demostrar el flujo de Git a la clase. Prevee que será un laboratorio largo y resalta la importancia de la gestión del tiempo.
