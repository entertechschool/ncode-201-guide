# Guía del Instructor: Listas en HTML, Control de flujo en JS, y CSS: Box Model

## Resumen

### ¿Qué lugar ocupa este tema?

**¿Qué hicimos?**:

En la clase anterior, los estudiantes tuvieron más interacción con JavaScript, con una introducción a los tipos de datos, condicionales y arrays. También recibieron una introducción a los conceptos nuevos de Git y GitHub, al crear un nuevo repositorio y realizando su tarea de laboratorio utilizando un flujo de trabajo de git básico.

**¿En qué nos centraremos en esta clase?**:

La clase 3 es altamente conceptual, y usualmente es la aparición de las primeras grietas en el conocimiento de los alumnos que han adquirido mediante el trabajo previo. En particular, los conceptos del control de flujo causan la mayoría de problemas porque las diferentes estructuras se pueden aplicar a problemas similares (hacer la misma tarea con un  ‘if’ o un ‘while’, por ejemplo). Los bucles infinitos son inevitables y siempre causan mucha frustración. También proporciona una introducción a las condiciones de verdadero/falso (probablemente la mejor forma de hacerlo es listando solo los casos falsos; todo lo demás es verdadero).

La introducción al CSS: box model también expone debilidades potenciales en el conocimiento y en los conceptos del prework; además, la integración con las herramientas para desarrolladores en Chrome y también la necesidad de entender pixeles como unidad de medida añade una nueva capa de complejidad a lo que los estudiantes ya han visto.

**¿Qué haremos?**:

En la siguiente clase nos centraremos en CSS positioning, funciones, y pair programming. Se les presentará un nuevo flujo de git/GitHub a los estudiantes, que viene con pair programming, e involucra hacer un pull request, hacer merge y pull a cambios hacia sus máquinas locales.

## Objetivos de aprendizaje

Revisa los objetivos detallados en el [readme de los alumnos](../README.md) de esta clase.

## Preparativos

1. Hojea la lectura de la clase y prepárate en caso de que los alumnos tengan preguntas. 
1. Revisa las demostraciones de código y asegúrate de entender cómo recrearlas durante la clase. Revisa el archivo markdown respectivo de cada demostración.
1. Revisa los [diagramas en la pizarra](https://code-fellows.invisionapp.com/freehand/201-Whiteboards-8r4qFnMn2) en la cuenta de Invision de Code Fellow o [aquí](whiteboards/class03WB.png) para la clase.

## Descripción de la Clase
<!-- NOTA PARA EL INSTRUCTOR: Si haces algún cambio en la clase, haz los cambios correspondientes en el LECTURE.md -->

Consulta el [ejemplo de clase](LECTURE.md) para los detalles de la clase.

### Revisión del código

### Repaso de Arrays o Enséñaselos si no es un tema que haya sido cubierto en la clase anterior

- **¿Por qué?**
  - Si no tenemos arrays, tendríamos que almacenar cada elemento en una variable por separado. Esto sería mucho para escribir y sería menos eficiente.
- **¿Qué?**
  - Los arrays son una forma de agrupar datos en una ubicación.
  - Son una acumulación de datos, similar a una lista, que se puede utilizar para retener información para utilizarla después.
- **¿Cómo?**
  - El instructor puede escoger utilizar replit para demostrar los arrays.
  - Muestra cómo crear arrays de diferentes tipos:
    - vacíos, combinados, multidimensionales
  - Selecciona un valor específico del array.
  - Utiliza un bucle for para recorrer un array.
  - Omite un valor en un array.
  - Muestra cómo añadir valores a un array:
    - Asígnale valores a un array utilizando llaves
    - Aquí también puedes hacer una introducción al método push

### Control de flujo

- **¿Por qué?**
  - El control de flujo nos deja controlar el flujo de la ejecución del código en nuestro programa.
- **¿Qué?**
  - El control de flujo es el órden en el que las declaraciones, instrucciones o llamadas a funciones individuales son ejecutadas o evaluadas.
- **¿Cómo?**
  - Repasa lo siguiente con los estudiantes:
    - Operadores de Comparación
    - Operadores Lógicos
    - Evaluando Comparaciones
    - Coerción de tipos, tipado débil, verdadero/falso

### JS Control de flujo (bucles, while, do while)

- **¿Por qué?**
  - Los bucles se utilzan en JavaScript para realizar tareas repetidas en base a una condición.
- **¿Qué?**
  - Bucles for: se repite hasta que una condición en específico sea evaluada como `false`.
    - **Declaración 1** se ejecuta (una vez) antes de la ejecución del bloque de código.
    - **Declaración 2** define la condición para ejecutar el bloque de código
    - **Declaración 3** se ejecuta (cada vez) después de que el bloque se código se haya ejecutado.

    ```js
    for(statement 1; statement 2; statement 3) {
      code block to be executed
    }
    ```

  - Bucle while: ejecuta sus declaraciones siempre que una condición específica se evalúe como `true`.

    ```js
    while(condition) {
      statement to run
    }
    ```

  - do...while: se repite hasta que una condición específica se evalúe como `false`.

    ```js
    do {
      statement
    } while (condition)
    ```

- **¿Cómo?**
  - El instructor puede escoger utilizar replit para hacer la demostración.
  - Descompón la sintaxis de cada bucle.
  - Demuestra algunos ejemplos de cada bucle utiliando arrays y evaluando las comparaciones.
  - Para ayudar a los estudiantes a entender cómo funcionan los bucles, utilizar una pizarra para explicar cada repetición de los bucles puede ser de ayuda.

### CSS Box Model (Demostración de código)

- **¿Por qué?**
  - Este es un concepto fundamental de la composición de las página web HTML.
- **¿Qué?**
  - CSS Box model es esencialmente una caja que envuelve a todos los elementos HTML.
  - El CSS determina el tamaño, posición y propiedades de estas cajas.
- **¿Cómo?**
  - Demuestra la creación de un layout básico con el box model.
  - Code Pen puede ser una buena herramienta para utilizar con los estudiantes para que después se pueda subir al repositorio de la clase.

### Preparación para el laboratorio

- **¿Por qué?**
  - Les proporciona a los estudiantes las herramientas para que cumplan con su laboratorio.
- **¿Qué?**
  - Revisa las instrucciones del Laboratorio 03 en canvas y revisa las notas del laboratorio al final por cualquier cosa que pueda destacar.

## Notas de Laboratorio

Este laboratorio es una buena oportunidad para que los instructores ayuden a los estudiantes para que trabajen en su proceso de depuración en la consola de Chrome y utilizando mensajes con console.log. Los instructores también deberán asegurarse de pedirle a los estudiantes que expliquen lo que están tratando de lograr para que los estudiantes se acostumbren a hablar de su código.

Señala que los requisitos técnicos son los mismos que en los laboratorios anteriores para cada módulo. Por ejemplo, son responsables de las tareas del laboratorio 2 además de las tareas asignadas en el laboratorio 3.

## ¿Qué cambió desde la clase anterior?

Los estudiantes seguirán utilizando la lógica condicional, pero integrándola a profundidar con bucles. Los estudiantes también conocerán su primera estructura de datos importante: ¡los arrays!

## ¿Qué errores, problemas o sorpresas han aparecido en el pasado en esta clase?

Asegúrate de que los estudiantes hayan configurado su repositorio adecuadamente con la estructura de archivos y archivos de configuración proporcionados en el laboratorio de la clase anterior. En particular, asegúrate de que el linter de los estudiantes esté funcionando adecuadamente y de que estén utilizando la plantilla de README.

## Comentarios Geneales

El objetivo de esta clase es que los alumnos estén cómodos trabajando con toda la cadena de herramientas.
