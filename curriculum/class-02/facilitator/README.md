# Guía del Instructor: Conceptos básicos de HTML,CSS, y JS

## Resumen

Esta clase de centra en practicar con JavaScript, una introducción a los tipos de datos, condicionales y arrays. También le enseñarás a los estudiantes sobre Git y Github a un nivel más profundo. El laboratorio de hoy requerirá que los estudiantes creen un nuevo repositorio y realicen su tarea de laboratorio usando el flujo de trabajo de git a un nivel básico.

### ¿Qué lugar ocupa este tema?

**¿Qué hicimos?**:
En la clase anterior hicimos una introducción a los alumnos acerca de la construcción de una página HTML con funcionalidades CSS internas e in-line y JavaScript integradas.

**¿En qué nos centraremos en esta clase?**:
En esta clase, aprenderemos sobre más conceptos básicos de JavaScript con tipos de datos, condicionales y arrays. Los alumnos también aprenderan un nuevo flujo de trabajo de git y cómo estructurar sus proyectos en el futuro.

**¿Qué haremos?**:
En la siguiente clase nos centraremos en repasar acerca de los arrays a un nivel más profundo. Los alumnos aprenderán todo acerca del control de flujo con bucles en JavaScript y lógica condicional.

## Objetivos de aprendizaje

Revisa los objetivos detallados en el [readme de los alumnos](../README.md) de hoy.

## Preparativos

1. Hojea las lecturas diarias y prepárate en caso de que los alumnos tengan preguntas. 
1. Revisa las demostraciones de código y asegúrate de entender cómo recrearlas durante la clase. Revisa el archivo markdown respectivo de cada demostración.
1. Prepárate para presentar la revisión del código y por qué es importante. Una búsqueda en línea acerca de "¿Por qué debería revisar mi código?" producirá algunos resultados como punto de partida.

## Descripción de la Clase
<!-- NOTA PARA EL INSTRUCTOR: Si haces algún cambio en la clase, haz los cambios correspondientes en el LECTURE.md -->

Consulta el [ejemplo de clase](LECTURE.md) para los detalles de la clase.

### Presenta los nuevo tipos de tareas en Canvas

- Registros de aprendizaje
- Cuestionarios

### Revisión del código

- **¿Por qué?**
  - Es importante que los alumnos se familiaricen con la revisión del código.
    - Los estudiantes deberán estar preparados para las revisiones de código que se les realizará cuando estén dentro de la industria.
    - Los estudiantes podrán acostumbrarse a las críticas, tomarlas de forma objetiva y aprender de cada revisión.
      - **¡Recuérdales a los estudiantes que las revisiones de código son un espacio seguro!**
    - Una perspectiva nueva puede identificar errores o sugerir cómo hacer que el código sea más legible.
- **¿Qué?**
  - La tarea de laboratorio anterior.
    - Pídele a un alumno que sea voluntario para que su código sea revisado.
- **¿Cómo?**
  - El instructor deberá abrir el código del estudiante en VSCode.
  - Revisa el código línea por línea y haz que una persona diferente explique cada línea.
    - Pregúntale al estudiante por qué el código fue escrito de esta forma o lo que hace.
  - Arregla el código erróneo en colaboración con los alumnos.

### Repaso de HTML/CSS

- **¿Por qué?**
  - Es un buen repaso para los estudiantes que no tomaron los cursos 101 o 102 así como aquellos que se han inscrito en esta clase.
- **¿Qué?**
  - Etiquetas de encabezado/párrafo en HTML
  - Listas en HTML (`<ol>` y `<ul>`)
  - Ids/clases en CSS
  - Valores específicos
  - CSS Reset
- **¿Cómo?**
  - El instructor podrá escoger demostrar estos conceptos en codepen.io para que pueda ser compartido con la clase y se le haga un push al repositorio de la clase.

### JavaScript

- **¿Por qué?**
  - Una buena introducción a los conceptos básicos en JavaScript que seguirán desarrollando mientras continúen con los laboratorios.
- **¿Qué?**
  - Abarca los siguientes tipos de datos:
    - Strings (puede ser un repaso del laboratorio anterior)
    - Booleans
    - Numbers
  - Condicionales
  - Arrays
- **¿Cómo?**
  - El instructor puede escoger utilizar una herramienta como [Repl.it](https://replit.com) la cual podrá ser compartida con la clase o se le puede hacer un push al repositorio de la clase.
  - Los tipos de datos se pueden repasar de forma verbal o se pueden demostrar utilizando el operador `typeof`.
  - Demostración de las declaraciones `if/else`.
  - Haz una introducción sobre los operadores lógicos y de igualdad.
  - Demostración de los arrays.

### Git vs GitHub

- **¿Por qué?**
  - Es importante que los alumnos entiendan la diferencia entre git y GitHub.
  - Los alumnos aprenderán el flujo de trabajo de git *a-c-p* que será necesario para sus tareas de laboratorio.
- **¿Qué?**
  - Git: Control de Versiones (VCS) - en nuestra máquina local para monitorear los cambios en nuestros proyectos mediante una serie de commits y ramas.
  - GitHub: Una página web - "la nube" que almacena nuestro código para que podramos compartir/colaborar entre equipos.
- **¿Cómo?**
  - Puedes utilizar los [diagramas en la pizarra](whiteboard-diagrams/git-vs-github.png).
    - Habla sobre la diferencia entre git y GitHub.
    - Explica el flujo de trabajo de git que los estudiantes van a utilizar: *a-c-p*.
  - Ve a GitHub, muéstrale a los estudiantes cómo crear un repositorio y clonarlo a sus carpetas del proyecto 201 en sus equipos.
  - Guíalos con la configuración del proyecto y la estructura de los archivos: 
    - Añade directorios/archivos desde la línea de comandos para que los alumnos repasen los conceptos aprendidos al día anterior.
    - Los alumnos utilizarán los archivos `.eslintrc.json` y `.gitignore` del directorio `configs` del repositorio del curso. También se ha porporcionado un archivo `.markdownlint.json` pero no es necesario que esté incluido en la configuración del proyecto 201. Los instructores pueden escoger cómo entregarle esto a los alumnos.

### Revisión del Laboratorio

- **¿Por qué?**
  - Les proporciona a los estudiantes las herramientas para que cumplan con su laboratorio.
- **¿Qué?**
  - Revisa las instrucciones del laboratorio 02, y de nuevo habla acerca de la nueva estructura de archivos.
- **¿Cómo?**
  - Demuestra cómo enlazar archivos CSS separados, así como el archivo Javascript.
  - Guíalos con las instrucciones del laboratorio.
  - Demuestra un ejemplo con una pregunta del nuevo cuestionario y validando el input del usuario. 

## Notas de Laboratorio

La "guía" con GitHub está dirigida a preparar a los estudiantes para comenzar con su laboratorio. Asegúrate de que todos tengan el repositorio clonado a sus máquinas locales y que hayan hecho un ciclo de flujo de trabajo a-c-p por lo menos una vez.

## ¿Qué cambió desde la clase anterior?

Se les enseñará a los estudiantes a colocar sus CSS en un archivo externo así como su JavaScript.

## ¿Qué errores, problemas o sorpresas han aparecido en el pasado en esta clase?

Claves SSH en GitHub y tokens HTTP.

- **Documentación útil de GitHub para entregar a los estudiantes**
  - [Generación de una nueva clave SSH - GitHub](https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
  - [Creando un token de acceso personal - GitHub](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Comentarios Geneales

Esta sesión de revisión de código es bastante importante ya que será la primera vez en la que los estudiantes verán el código de sus compañeros. Para algunos estudiantes, la idea de mostrar su código a otra persona, mucho menos a toda una clase es exasperante — así que sé paciente, sensible y empático. De nuevo, presta atención a la sintaxis y estilo de sus códigos. Incentiva a los alumnos a que lean y expliquen su código a la clase. Incluso puedes pedirle a los alumnos que lean y expliquen el código de sus compañeros. Esto le proporciona a los alumnos una oportunidad para practiar la lectura de código y los ayuda a entender la importancia de la sintaxis y estilos adecuados, y cómo se relaciona con comparir código.

**Recordatorio importante en el Laboratorio 05c**: Esta es una tarea acerca de la práctia de los selectores CSS que deberá ser publicada al final de la Clase 2. La publicamos con antelación para que los estudiantes puedan tomarse unos días en completar estos tutoriales conforme se adaptan a su flujo de trabajo. Este laboratorio se llama 05c porque se deberá entregar al mismo tiempo que el Laboratorio 05a y el 05b. **No te olvides de bajar hasta la Clase 05 para publicar este laboratorio en Canvas.**
