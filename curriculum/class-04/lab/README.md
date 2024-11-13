# Laboratorio: Pair Programming y Funciones

Lee el documento por completo antes de comenzar con el trabajo del laboratorio.

## Descripción del problema

Cuando se pueda, tu instructor te emparejará con otro estudiante para este ejercicio de pair programming. Ambos trabajarán y ampliarán el proyecto de juego de adivinanzas About me del otro. Asegúrate de leer y seguir estas instrucciones para el pair programming con mucho cuidado. **Si no estás emparejado con otro estudiante, envía una solcitud a nuestros TAs para completar la tarea.**

## Instrucciones para el pair programming

Revisen las cuatro secciones del laboratorio que vienen a continuación. Emplea el pair programming con tu compañero asignado para actualizar cada código base. Divide el tiempo de forma equitativa para que tu y tu compañero pasen la misma cantidad de tiempo en el código del otro. Es importante que gestionen el tiempo.

### 1. Cómo preparar el código para el trabajo

Asegúrense de leer estas instrucciones con **MUCHO** cuidado.

Nota: Antes de comenzar con estos pasos, asegúrate de que ambos repositorios esten 'limpios': es decir, todo está con commits y push para que las versiones remotas y locales estén sincronizadas. Esto les evitará problemas más adelante.

- Decidan en qué código trabajarán primero. El dueño del código (que será el Navigator) le dará el enlace a su repositorio de GitHub a su compañero (que será el Driver). Pueden enviarse el enlace por Slack.

- El Driver entrará al enlace y creará un fork del repositorio en GitHub como lo hicimos en clase.

- El Driver irá a *su fork* del repositorio (la URL deberá tener el nombre de GitHub del Driver) y copiará el enlace a ese repositorio (la URL deberá tener el nombre de GitHub del Driver y deberá terminar en `.git`).

- Dentro del directorio main del Driver en su laptop, crea un directorio con el nombre de tu compañero y entra (`cd`) a este. Desde ahí, ingresa el comando `git clone el-enlace-que-copiaste`. Esto creará una versión local del repositorio al que le hiciste fork en la laptop del Driver.

- Haz `cd` a ese directorio e ingresa `code .` en la terminal para abrir todos los archivos en VSCode.

- ¡Comienza a trabajar en el código!

### 2. Ampliar y perfeccionar

- Editarán algunas cosas del sitio del otro. Después de completar todo el trabajo (es decir, después de cada modificación exitosa de cada pregunta), asegúrense de hacer un ciclo de add-commit-push (**a-c-p**), para enviar el código a GitHub y preservar un historial de versiones de tu trabajo.

- Transporta la lógica de todas las preguntas a funciones: En esta clase aprenderemos sobre funciones, y ahora transportaremos la lógica de cada pregunta individual a funciones por separado, y llamaremos a esas funciones al ejecutar el juego.

- Básicamente, esto es bastante sencillo y directo: 'envuelve' la lógica y las variables de una pregunta con una `function algúnNombreQueElegiste() {` al comienzo, y añade una llave de cierre `}` al final. Para que este función se ejecute, solo llámala después: `algúnNombreQueElegiste();` Después de completar este paso, el juego debería funcionar exactamente igual que antes. **a-c-p**

- Actualiza el archivo README: En el archivo README, añade los nombres del Driver y del Navigator e indica que ambos trabajaron en el código. Esto es un registro básico para mantenerse al día de cómo se ha estado editando el código en un formato amigable para el usuario. **a-c-p**

### 3. Haz un push a GitHub; Crea un Pull Request

- Una vez que todo esté listo, y el Driver haya hecho las últimas ediciones y las haya enviado a GitHub mediante un push, es hora de enviar el código editado a su dueño (el cual ha estado como Navegador todo este tiempo, por supuesto). Haremos esto con una característica de GitHub llamada ***Pull Request***, a la cual por lo general nos referiremos como **PR**.

- Desde el repositorio del Driver, el cual es un fork del repositorio del Navigator, haz click en el botón verde que dice 'Create pull request'.

- Sigue los siguinetes pasos como se describen en pantalla y como se ven aquí: <https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests>. (Estas instrucciones para hacer un pull request desde un repositorio forked hacia su fuente son ambiguas a propósito para que practiques leyendo instrucciones, intentando con diferentes cosas, resolviendo problemas, y ayudándote con la documentación).

- Después, el dueño del código (el Navigator) irá a su repositorio de GitHub del proyecto y aceptará el pull request. Después de eso, en el terminal de su laptop, en el mismo directorio, ingresa el comando  'git pull origin main' para extraer el código modificado de GitHub.

- Cuando el proyecto de una de las personas esté terminado, envíen los enlaces del último pull request hecho por el Driver al Navigator (en ambos casos) en la tarea de Canvas.

### 4. Conceptos básicos del Pair Programming

- En el pair programming, dos desarrolladores trabajan en un mismo código en una sola computadora.
- Uno de los miembros es el Driver, es la persona que se va a encargar de escribir en la laptop. El Driver trabajará con el código del Navigator haciendo fork y clonando el repositorio del Navigator.
- El otro miembro es el Navigator, es la persona que va a trabajar solo con su voz y sus pensamientos.
- El Navigator no toca el teclado, ni tampoco trabaja con su laptop "por su lado". El navigator está completamente involucrado con el trabajo, utilizando por lo general un borrador para dibujar diagramas, tomar notas o enumerar ideas.  Como mucho, el Navigator utiliza su laptop para tener una copia abierta del documento de esta tarea o para buscar algo que necesiten para escribir el código, como una página de referencia como MDN.
- Bajo ninguna circunstancia el Navigator trabajará con código o en su laptop: para que el proceso de pair programming sea efectivo, ambas partes deberán estar completamente involucradas con el código en el que están trabajando juntos.
- El tiempo de laboratorio estará dividido en dos secciones de aproximádamente dos horas cada una. A la mitad, deberán cambiar de roles y trabajar con el código de la otra persona. Recuerden medir el tiempo y determinar el mejor momento para cambiar de roles.
- En el caso de que el número de estudiantes sea impar, un grupo tendrá tres integrantes y deberán rotar entre estos tres roles: Driver, Navigator, Observer. Cada estudiante deberá asumir cada rol una vez. Tendrán que tener aún más cuidado con el tiempo para asegurarse de que los tres roles tengan el mismo tiempo. 

### Logros Adicionales

1. Trabajen con las recopilaciones de datos similares: Creen 3 arrays, uno para cada uno: sus preguntas, las soluciones correctas, y las dos posibles respuestas al input. (Lo mismo es válido si han añadido algo adicional a las preguntas aparte de la estructura básica.) Reemplacen el contenido en las funciones al acceder a los arrays.

1. Hagan que sea DRY: Reduzcan las preguntas de si/no de cinco funciones a solo una, y luego usen un bucle 'for' para iterar por los arrays y llamar a la función por cada pregunta.

1. Revisión del código: Tomen su tiempo para explorar el CSS del otro y hablen acerca de su organización y lo que hace. Den sugerencias acerca de cómo puede mejorar. Integren las sugerencias de tu compañero para mejorar tu estilo.

1. Mejoren la accesibilidad: Colaboren para alcanzar mejores notas en las auditorías de accesibilidad. Añadan una captura de pantalla de sus nuevas puntuaciones a su archivos README.md.

## Recursos

No hay recursos adicionales para este laboratorio.

## Instrucciones de envío

En el cuadro de texto de esta tarea, escribe las URLs de los repositorios en los que trabajaste con este formato:

```
Fui Navigator en: enlace-al-último-PR-que-hizo-tu-compañero
Fui Driver en: enlace-al-último-PR-que-hiciste-como-Navigator
```

Además, añade una breve respuesta a las siguientes preguntas:

- ¿Cómo fue el proceso de pair progamming, en general?
- ¿Aprendiste algo de tu compañero? De ser así, ¿qué fue?
- ¿Cuál fue la parte más dificil de la tarea de hoy?
- ¿Cuál fue la parte más fácil de la tarea de hoy?
- ¿Hay algo más que te gustaría compartir?
- ¿Cuánto tiempo te tomó terminar esta tarea? Y, antes de que comenzaras, ¿cuánto tiempo creiste que te tomaría terminar esta tarea?
