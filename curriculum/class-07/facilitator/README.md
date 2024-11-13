# Guía del Instructor: Programación orientada a objetos con funciones constructoras y tablas HTML

## Resumen

Esta es la primera de las dos clases más difíciles del curso. La introducción de la herencia con funciones constructoras, además de añadir otra dimensión al renderizado dinámico del DOM al crear una tabla en vez de listas de datos almacenados en arrays puede ser demasiado para lo que la mayoría de los estudiantes pueden comprender en un dia, especialmente si aún tienen problemas pendientes de la Clase 6.

### ¿Qué lugar ocupa este tema?

**¿Qué hicimos?**:
En la clase anterior los estudiantes aprendieron sobre los objetos literales y la manipulación del DOM.

**¿En qué nos centraremos en esta clase?**:
En esta clase, aprenderemos acerca de las funciones constructoras y más acerca de la manipulación del DOM. Los estudiantes crearán una función constructora para instanciar tiendas y refactorizar sus listas no ordenadas en una tabla HTML.

**¿Qué haremos?**:
La siguiente clase se centrará en CSS layouts con una introducción al wireframe de una página. Los estudiantes también profundizarán en los Arrays bidimencionales y bucles anidados.

## Objetivos de aprendizaje

Revisa los objetivos detallados en el [readme de los alumnos](../README.md) de esta clase.

## Preparativos

1. Hojea las lecturas de la clase y prepárate en caso de que los alumnos tengan preguntas. 
1. Revisa las demostraciones de código y asegúrate de entender cómo recrearlas durante la clase. Revisa el archivo markdown respectivo de cada demostración.

## Descripción de la Clase
<!-- NOTA PARA EL INSTRUCTOR: Si haces algún cambio en la clase, haz los cambios correspondientes en el LECTURE.md -->

Consulta el [ejemplo de clase](LECTURE.md) para los detalles de la clase.

### Revisión del código

### Funciones constructoras

- **¿Por qué?**
  - Las funciones constructoras se utilizan para inicializar objetos con el estado por defecto o inicial.
- **¿Qué?**
  - Un constructor es una función utilizada para crear instancias de objetos.
- **¿Cómo?**
  - Utiliza una herramienta como Replit o VSCode para demostrar el uso de los constructores.
  - Descompónla anatomía de un constructor y cómo la sintaxis es diferente a la de los objetos literales.
  - Explica cómo el término `this` es diferente a los constructores.

### Prototipos

- **¿Por qué?**
  - Con los prototipos, los objetos creados por la función constructora heredarán métodos y propiedades.
- **¿Qué?**
  - Un métodos que estará disponible para todos los objetos instanciados por la función constructora.
- **¿Cómo?**
  - Demuestra la diferencia entre añadir un método a un objeto creado vs añadir un método de prototipo al constructor.

### Tablas en HTML

- **¿Por qué?**
  - Las tablas son una buena forma de mostrar datos en una página.
- **¿Qué?**
  - Las tablas de HTML consisten en el elemento `<table>` y uno o más elementos `<tr>`, `<th>`, y `<td>`.
- **¿Cómo?**
  - Demuesta cómo añadir una tabla al archivo HTML.
  - Demuestra cómo los estudiantes tendrán que generar sus tablas para el laboratorio utilizando JavaScript.

### Preparación para el laboratorio

- **¿Por qué?**
  - Les proporciona a los estudiantes las herramientas para que cumplan con su laboratorio.
- **¿Qué?**
  - Revisa las instrucciones del Laboratorio 07 en Canvas.
- **¿Cómo?**
  - Consulta las notas del laboratorio a continuación.

## Notas de Laboratorio

Para este laboratorio, los estudiantes tendrán que refactorizar todos sus objetos literales para la tienda de galletas en una sola función constructora con múltiples instancias. El segundo componente de este laboratorio será convertir los elementos de la lista del trabajo de laboratorio anterior a una tabla que se genere dinámicamente al DOM de su archivo JavaScript.

Todos los métodos para la función constructora deberán ser heredados utilizando la propiedad `.prototype`.

Aconseja que los estudiantes abarquen este laboratorio poco a poco y que definan lo que planean hacer antes de escribir el código. También incentiva a que los estudiantes escriban la funcionalidad de la forma más larga primero para que funcione, y que luego lo refactorizen a bucles, funciones, etc.

Algunas dificultades comunes para este laboratorio incluyen agregar elementos hijos al elemento padre en el órden correcto, el uso incorrecto de `this`, y averiguar cómo acceder a los datos en cada objeto individual. Prepárate para una revisión de código más detallada en la próxima clase.

## ¿Qué cambió desde la clase anterior?

Los estudiantes refactorizarán lo que hicieron en el laboratorio anterior y cambiarán de objetos literales a funciones constructoras.

## ¿Qué errores, problemas o sorpresas han aparecido en el pasado en esta clase?

Los estudiantes crearán ramas para cada día del laboratorio. Espera ver a estudiantes que se encuentran con problemas al utilizar git.
