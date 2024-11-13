# Guía del Instructor: Audio/video, Información práctica y Comenzar con el app Vote Tracker

## Resumen

Hay dos partes principales en esta clase:

Primero, proporciona un pequeño tiempo para debatir acerca de un par de temas adicionales, incluyendo el uso de recursos de audio/visuales en un documento web, así como el SEO, analytics, y el hosting del sitio.

Segundo, haz que los estudiantes comiencen con el siguiente proyecto de programación, el cual es un vote tracker. También es más OOP. El objetivo para el final del laboratorio es que los estudiantes muestren un número de imágenes al azar de una colección, y monitorear qué imágenes son mostradas y qué tantas veces se le hizo click a una imágen. Esto involucra crear un conjunto de objetos de imágen desde una función constructora y que cada una tenga las propiedades de nombre, ruta del archivo, las veces que se mostró y las veces que se le hizo click, y quizás otras dependiendo de los detalles del proyecto.

Al final de esta laboratorio, los estudiantes deberán ser capaces de mostrar una lista de imágenes en el DOM junto con el número de votos que cada elemento recibió. En el siguiente laboratorio, estos datos serán procesados por una librería de gráficos y se mostrarán como tal.

### ¿Qué lugar ocupa este tema?

**¿Qué hicimos?**:
En la clase anterior, los alumnos terminaron con su aplicación Salmon Cookies. Los estudiantes también aprendieron más acerca de las prácticas de depuración.

**¿En qué nos centraremos en esta clase?**:
En esta clase, los estudiantes comenzarán con un nuevo proyecto el cual deberá ayudarlos a consolidar los conceptos y funcionalidades que utilizaron en su proyecto anterior. También aprenderán otro método de CSS Layout utilizando Grid.

**¿Qué haremos?**:
En la siguiente clase, los estudiantes aprenderán a integrar librerías de terceros a sus aplicaciones para mostrar datos en un gráfico.

## Objetivos de aprendizaje

Revisa los objetivos detallados en el [readme de los alumnos](../README.md) de esta clase.

## Preparativos

1. Sube la carpeta `lab/assets` al repositorio de la clase. Estos assets son necesarios para el laboratorio de esta clase.
1. Sube el archivo `wireframe.jpg` ubicado en la carpeta del laboratorio como el wireframe sugerido para la aplicación Odd Duck Products.
1. Revisa la tarea de laboratorio para esta clase y asegúrate de que tu demostración se asemeje a los requisitos.

## Descripción de la Clase
<!-- NOTA PARA EL INSTRUCTOR: Si haces algún cambio en la clase, haz los cambios correspondientes en el LECTURE.md -->

Consulta el [ejemplo de clase](LECTURE.md) para los detalles de la clase.

### Revisión del código

- Revisa chocolate pizza.

### Audio/Video en el Documento Web

- **¿Por qué?**
  - HTML5 nos permite integrar video y audio en las páginas web.
- **¿Qué?**
  - El elemento HTML `<audio>` se utiliza para reproducir archivos de audio en una página web.
  - El elemento HTML `<video>` se utiliza para mostrar un video en una página web.
- **¿Cómo?**
  - Utiliza el archivo [index.html](../demo/media-click-tracker/index.html) para demostrar los archivos de audio y video en una página web.

### CSS Grid

- **¿Por qué?**
  - Con CSS Grid podemos trabajar con filas **y** columnas, cuando flexbox solo nos permitía trabajar con filas **o** columnas. Esto nos permite construir diseños más complejos y organizados.
- **¿Qué?**
  - Grid es un sistema de layout que te permite establecer una serie de filas y columnas y colocar elementos en segmentos específicos de la página en base al número de fila/columna.
- **¿Cómo?**
  - Utiliza CodePen o VSCode para la demostración de grid.
  - El instructor también puede pasarle el siguiente sito a los estudiantes para ayudarlos a practicar con grid: [CSS Grid Garden](https://cssgridgarden.com/)

### Preparación para el laboratorio

- **¿Por qué?**
  - Proporciona las herramientas que los estudiantes necesitan para completar su laboratorio.
- **¿Qué?**
  - El instructor constuirá una aplicación Goat Vote Tracker utilizando la demostración indicada en la [carpeta demo](../demo/).
- **¿Cómo?**
  - Antes de comenzar, revisa la descripción del problema de la aplicación Goat Vote Tracker.
  - Haz que la clase debata y haga una lluvia de ideas acerca de lo que se necesita para comenzar con el proyecto.
  - Construye la aplicación Goat Vote Tracker y refuerza conceptos que los estudiantes han aprendido de su proyecto anterior.
  - Después de construir la aplicación Goat Vote Tracker, presenta el proyecto Odd Duck Products.

## Notas de Laboratorio

Hay mucho que hacer en el laboratorio de esta clase, así que prepara a los estudiantes para una ejecución larga. El único bueno concepto será cambiar el atributo `src` del elemento `img` a una imagen seleccionada al azar. De lo contrario, los conceptos de event listeners, funciones constructoras y modificar las propiedades de los objetos deberían ser conocidas de la aplicación anterior.

## ¿Qué cambió desde la clase anterior?

Los estudiantes estarán comenzando un nuevo proyecto, Odd Duck Products, en esta clase.

## ¿Qué errores, problemas o sorpresas han aparecido en el pasado en esta clase?

El laboratorio 11 es grande en comparación a lo que están acostumbrados y eso puede causar estrés. Recuérdale a los estudiantes que este proyecto está diseñado para construirse poco a poco durante los 3 siguientes laboratorios y que el tiempo es un componente importante de su éxito.
