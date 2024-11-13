# Laboratorio: Comencemos.

Lee este documento por completo antes de comenzar con el laboratorio.

## Descripción del problema

Crea una página web que acepte datos del usuario y, en base a esos datos, despliegue mensajes de vuelva al usuario.

## Instrucciones

- Configura el `<body>` del HTML con los elementos `<header>`, `<main>`, y `<footer>`.
- En el `<main>` del archivo, coloca una etiqueta `<h1>` con la frase "Class 1 Lab". Diseña este elemento con texto y colores de fondo por medio de un elemento interno `<style>` dentro del `<head>` de tu documento.
- En la sección HTML del archivo, coloca las cuatro preguntas dentro de una serie de etiquetas `<p>` para que aparezcan listadas en la pantalla.
- Dale un color de texto distinto a cada etiqueta `<p>` y un color de fondo distinto usando el estilo inline.

- Después de usar un total de 4 'prompts' similares a los de la demostración en clase, haz que un usuario responda a las cuatro preguntas.
- La respuesta del usuario a cada una de las preguntas (input) deberá ser almacenado en una variable por separado. Nombra tus variables con cuidado y utiliza `let` para definirlas.
- Utilizando estas respuestas, haz que emerja una alerta para el usuario (output) que una sus datos en una respuesta como lo hicimos en la clase.
- Procura que tu alerta para cada pregunta utilice las respuestas de las preguntas anteriores para que cuando se llegue a la cuarta pregunta, tu alerta se verá algo parecido a "Hola, *Iggy* de *Ipanema*, a mí también me gusta comer *plátanos* mientras estoy de vacaciones en *París*."
- ¡Sé creativo y diviértete con tus preguntas/respuestas! Pueden ser acerca de lo que gustes mientras que se cumplan los requisitos de input/output.
- Además, por cada respuesta, crea un mensaje con console.log() que indique la naturaleza de cada respuesta del usuario, como lo hicimos en la clase.

- Utiliza Lighthouse en las Herramientas para desarrolladores de Chrome, para analizar la accesibilidad de tu aplicación.
- Se deben seleccionar las siguientes opciones para generar un informe de Lighthouse:
  - Modo: Navegación
  - Dispositivo: Escritorio
  - Categorías: Accesibilidad
- Un puntaje entre 50-65 es un buen punto de partida para este primer laboratorio.
- **NOTA** Algunas extensiones de Chrome pueden insertar lenguaje de marcado en tu código HTML durante el tiempo de ejecución y pueden afectar tus puntuaciones en Lighthouse. Si esto sucede, apaga tus extensiones en Chrome o activa Lighthouse mientras estés en una ventana en incognito.

### Logros Adicionales

Después de completar los requerimientos enumerados previamente, puedes elegir completar estos desafíos implementando algunos o todos los elementos siguientes en tu aplicación.

- Utilizar el estilo interno o inline a tu gusto, aplica diseños adicionales a la página: experimenta con cosas como borders, alignment, margin, padding, etc.
- Busca un HTML validator en línea y envía tu código. Toma una captura de pantalla del resultado y envía la imagen.
- Visita [esta página](https://developer.chrome.com/docs/devtools/accessibility/reference?hl=es-419){:target="_blank"} y lee sobre las herramientas de auditoría de accesibilidad integradas en Chrome. Y sigue las instrucciones en [esta página](https://developer.chrome.com/docs/devtools/accessibility/contrast?hl=es-419){:target="_blank"} bajo el subtítulo "Cómo corregir el texto de bajo contraste" y examina los valores de la relación de contraste de las etiquetas de tu título y los párrafos. Modifica tu código hasta que alcances una relación que obtenga dos marcas de verificación. Envía una captura de pantalla de las herramientas de Chrome que lo demuestre.

## Recursos

Consulta la DEMO de la clase de hoy como punto de partida para esta tarea.

## Instrucciones de envío

- Ingresa a [https://gist.github.com](https://gist.github.com){:target="_blank"}.
- En el campo "Gist description...", escribe tu nombre.
- En el campo "Filename including extension..." escribe 'index.html'.
- Copia y pega tu código en el campo grande del Gist.
- Haz click en el botón que dice "Create secret gist".
- En la siguiente pantalla, haz click en el botón que dice "Embed" para abrir el menú desplegable y selecciona la opción "Share".
- Copia el enlace al lado del botón "Share".
- Envía el enlace en el campo URL que se encuentra debajo.
