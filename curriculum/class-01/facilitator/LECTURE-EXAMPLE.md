# Notas de la Clase

<!-- NOTA PARA EL INSTRUCTOR: Si haces algún cambio en la clase, haz los cambios correspondientes en el README.md -->

## Inicio en el Campus

Trabaja con tu director de campus del Inicio de la Clase 1, utilizando las [diapositivas de orientación del Code 201](https://codefellows.github.io/common_curriculum/slides/template/index.html?slides=/common_curriculum/career_coaching/201/kickoff/slides.md).

Preséntate y presenta a tu equipo a la clase, proporcionándoles un resumen de tu experiencia. Si tienes TAs u otros instructores, haz que también se presenten.

Infórmales a los estudiantes que los TA los ayudarán con las calificaciones y a responder las perguntas de los alumnos durante el laboratorio.

Infórmale a los estudiantes la disponibilidad general de los instructores. Incentívalos a apoyarse entre ellos cuando los instructores no estén disponibles.

## Introducción a Canvas

Muéstrale Canvas a los alumnos. Muéstrales lo siguiente:

1. La vista por módulos de las tareas
1. El sílabo
1. El resumen del curso
1. El calendario

### Tareas de la Revisión de la Orientación Profesional

Los estudiantes deberán hacer completado algunas tareas de trabajo previo relacionadas a la Orientación Profesional. Debatan acerca del valor de concentrarse en cada uno de estas, aunque recién estén comenzando en su proceso de cambio de carrera profesional.

- Resumen de la Orientación Profesional: Sienta las pautas de las tareas en este ámbito.
- Autoevaluación de Competencia Profesional: Los alumnos probablemente se calificarán bajo en áreas como red de contactos y conocimiento en las herramientas, es algo que se espera en esta etapa. Recuérdale a los estudiantes que estos número deberán incrementar mientras continúan en el programa, e incluso al final del curso 201. Estas competencias son evaluadas desde la perspectiva del instructor para la Revisión de Fin de Curso en Canvas. Si el tiempo lo permite, conversen acerca de sus respuestas en sus sesiones individuales en la semana 2.
- Prepara tu curriculum: Aclárale a los estudiantes lo que deberá contener el currículum y su estructura, pero que no se espera que tengan mucho contenido relacionado con la programación aún. El enfoque de esta tarea es seguir la estructura en base a la plantilla que escojan. Al trabajar en la estructura correcta, pueden añadir más información después fácilmente.
- Prepara tu LinkedIn: LinkedIn es una herramienta popular utilizada por personas que buscan trabajo y reclutadores. Es importante que los estudiantes comiencen a pensar acerca de su presencia profesional online.
- Identifica a tus Accountability Partners: Cada estudiante tendrá dos accountability partners para sus siguientes tareas. Incentiva a los alumnos a que formen grupos de tres y sean los partners de los demás.
- Informes Partner Power Hour: Se necesita que los alumnos creen un informe después de cada charla Partner Power Hour, la cual se dará regularmente.

Toma esta oportunidad para proporcionales un resumen de las próximas tareas de Orientación Profesional para la primera semana.

- Habla con tu red de contactos: No se espera que los alumnos estén bien conectados en la industria aún, esta tarea está orientada a hablar con cualquer persona que puedan conocer en el ámbito de la tecnología. Es una reunión informal para que comiencen a darse a conocer.
- Asiste a un Meetup: Los meetups son una buena forma de conocer a otros desarrolladores. Incentiva a los estudiantes a que encuentren un Meetup que les parezca interesante. Para los estudiantes tímidos, incentívalos a que asistan con un compañero de clase.
- Preguntas de entrevista conductuales: Los estudiantes utilizarán el método S.T.A.R para escribir borradoras de dos preguntas de entrevista conductual.

## Repaso de las lecturas

No le dediques más de 10 minutos a esto. Enséñale a los estudiantes cómo "hojear" la documentación técnica. Deberán prestar bastante atención a las páginas de color morado oscuro. Estas páginas son muy buenos resúmenes y notas detalladas acerca del contenido de los capítulos.

Incentiva a los estudiantes a que hagan las tareas de lectura, y utiliza el material como recurso para las tareas de laboratorio y preguntas que tengan acerca de sus tareas.

Haz saber a los estudiantes que frecuentemente verán que se utiliza `var` en vez de `let` en las referencias que puedan encontrar en internet. Es un rasgo de la naturaleza progresiva del código. Lo que se consideraba una buena práctica cuando varios de los artículos fueron escritos ha evolucionado y estaremos enseñando `let` y `const` porque son más adecuados al momento de escribir un código limpio.

## Línea De Comandos, VS Code y Configuración del Linter

### Conceptos básicos de la Línea de Comandos

Repaso de los comandos básicos de Unix:

- `pwd`
- Ruta de archivos y conceptos de navegación arriba/abajo
- `tree`
- `ls`, `ls -la`
- `cd`, `mkdir`
- `touch`, `code`
- `mv`, `rm`, `cp`

### Introducción a Git y GitHub

Introducción a Git:

- ¿Qué es Git?
- Conceptos de control de versiones, muestra el ejemplo de un repositorio del proyecto final del curso 201 y en general señala los commits, ramas y diagramas de red
  - Señala los beneficios de mantener el código organizado
- Analogía de guardar múltiples versiones de un trabajo vs. sobreescribir cambios cada vez que se guarda
- Serie de capturas de pantalla
- HEAD

### Configurar VS Code

En la configuración:

- editor.tabSize = 2
- editor.detectIndentation = true
- editor.wordWrap = on

### Configura tu Linter

El objetivo de esta sección es configurar el `.eslintrc` con los alumnos. Además, explícales
que este archivo debe existir en **todos** los proyectos que creen en javascript, así que deben guardarlo en un lugar fácilmente accesible.

- Los estudiantes necesitan ayuda para crear un .eslintrc.json y ponerlo en todos los directorios de los proyectos que creen.
  - Haz que los estudiantes escriban `cd` en la línea de comandos para navegar a su directorio principal
  - Los estudiantes deberán escribir `code .eslintrc.json` para crear un archivo que almacene las reglas del linter. Si este comando no funciona, entonces los estudiantes tendrán un problema con su configuración de VSCode que necesita ser tratado, lo más probable es que sea un `failure to "Install Shell Commands"` del menú de VSCode.
  - Abre `.eslintrc.json`, ubicado en el folder [configs](../../../configs/.eslintrc.json) de esta guía:
    - Coloca este archivo en tu repositorio de la clase GitHub para que los estudiantes lo tengan como referencia para sus tareas.
    - ¡Asegúrate de señalar que esta es probablemente la ÚNICA vez que está bien copiar/pegar código!
  - Haz que los estudiantes copien/peguen el código en el archivo `.eslintrc.json` que han creado, y asegúrate de decirles que guarden el archivo.
  - Los alumnos tendrán que reiniciar VSCode para que los cambios hagan efecto.

Confirma VSCode: escribe `code` en la línea de comandos para verificar que se abre correctamente. Las herramientas de la línea de comandos necesitarán ser instaladas. Si los usuario de Mac ven que `code` desaparece de su PATH de vez en cuando, necesitan reinstalar VSCode y asegurarse de que arrastren la aplicación extraída al directorio `Aplicaciones` ANTES de abrirlo por primera vez.

Estructura del directorio: Haz que los estudiantes creen un directorio en `~/entertechschool/201/` en el cual guardarán su trabajo de la clase. Repasa la estructura del directorio en general; compárala con el GUI.

### Demostración de Código en Tiempo Real

La demostración del código está ubicada en la carpeta `demo`.
Un borrador acerca de cómo abordar la demostración se encuentra [AQUÍ](demo.md)

La demostración del código deberá ser escrita completamente desde cero en frente de la clase. Después de la clase, haz un push de tu demostración al repositorio de la clase e infórmale a los estudiantes que estas demostraciones estarán disponibles todos los días para que las consulten. Esto aliviará cualquier presión que los alumnos puedan sentir de seguir la demostración del código durante la clase.

Haz una introduccón sobre `let`. Trata la diferencia entre `var` y `let`. Los alumnos no tendrán que preocuparse acerca del scope en el primer laboratorio pero deberías presentarles los conceptos para prepararlos. Si un estudiante menciona `const` también puedes abarcarlo. Solo utilizaremos `let` y `const` en el Code 201.

No te dejes engañar por la simpleza de esta demostración: hay UN MONTÓN de cosas por repasar con los alumnos que tomará bastante tiempo. Este será la primera vez en la que escribirán código con sus nuevas herramientas.

Esta demostración de código es para ayudar a los alumnos a que estén listos para completar su primera tarea y también para mostrarles algunas funcionalidades del REPL y las Herramientas para Desarrolladores de Chrome. Esta demostración también deberá mostrar cualquier problema pendiente con la configuración de las computadoras de los alumnos.

Demuestra cómo utilizar el comando `live-server` para activar la actualización automática del navegador.

### Preparación del Laboratorio

Para finalizar el día, repasa la tarea de laboratorio y muéstrale a los alumnos cómo encontrar/leer la tarea, complétala como una demostración de código y envía la tarea (la cual es para hoy, y es enviada en GitHub Gist para presentarle esta herramienta a los alumnos).

Las tareas de laboratorio se ubicarán en Canvas a diario.

Demuestra cómo abrir proyectos en el editor desde la línea de comandos. Por ejemplo, `code .`. También demuestra cómo ubicar y abrir un archivo en un solo comando. Por ejemplo, `code index.html`.
