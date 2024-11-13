# Configurando un nuevo proyecto de Code 201

1. Entra a tu perfil en GitHub, y en la zona superior derecha, haz click en el **+** y selecciona "New repository".
1. Dale un nombre y una descripción a tu repositorio en los campos proporcionados.
1. Marca la caja al lado de ***"Initialize this repository with a README"***.
1. No selecciones nada en el menú ***Add .gitignore***. Añadiremos manualmente un .gitignore después.
1. Tienes distintas opciones en el menú ***Add a license***. Siéntete libre de leer acerca de estas opciones y elegir alguna; por lo general, para uso open-source, recomendamos la Licencia MIT.
1. Haz click en el botón verde ***Create repository***.
1. En la siguiente pantalla, haz click en el botón verde ***Clone or download*** a la derecha. Copia los enlaces HTTP para clonar el repositorio.
1. En tu terminal, navega hasta donde quieres crear este proyecto (ejemplo: tu directorio `dev/enter/201`) y escribe `git clone <el-enlace-que-copiaste>`.
1. Escribe `cd <nombre-del-proyecto>` para navegar hasta el directorio que creaste.
1. Después, usa los comandos `mkdir` y `touch` en tu terminal, añade los directorios y archivos necesarios para completas la siguiente estructura:

```sh
directorio-del-proyecto
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── README.md
├── css/
│   ├── reset.css
│   └── style.css
├── img/
├── index.html
└── js/
    └── app.js
```

El código de este proyecto se encuentra en estos archivos: `index.html`, `app.js`, `style.css`. Una anortación sobre estos nombres: `index.html` siempre se debe usar para la página principal de un proyecto porque los navegadores web van a buscar un archivo `index.html` cuando naveguen por un directorio. En cambio, los nombres de los archivos `app.js` and `style.css` solo son por conveniencia.

Ten en cuenta que los archivos JS y CSS están almacenados en sus propios directorios. Esto reduce la cantidad de archivos en la raiz del proyecto, especialmente cuando se añaden más de estos archivos. Por ejemplo, cuando llegues al final de Code 301, por lo general verás 5 o 6 archivos CSS por proyecto y una docena o más de archivos JS.

Cuando un proyecto tiene más de un puñado de archivos HTML, puede ser de ayuda ponerlos en un directorio separado como `pages/`, con la excepción de `index.html`.

¿Y qué pasa con todos los demás archivos y directorios en el proyecto? A continuación, damos una explicación para cada uno de ellos.

## .eslintrc.json

Este archivo contiene las reglas específicas del proyecto para el linter de JavaScript. Dependiendo de las herramientas utilizadas en el proceso, y las preferencias de estilo de una organización determinada, estas reglas pueden variar. Es una buena práctica incluir las reglas que utilizas cuando creas un proyecto. De esta forma, alguien que mira tu código puede ver las reglas que utilizaste, en vez de las reglas por defecto en su sistema, las cuales pueden ser diferentes y por lo tanto pueden crear errores y advertencias innecesarias en el editor de código.

Ya que el nombre del archivo `.eslintrc.json` comienza con un punto, es un archivo oculto en el sistema operativo. Recuerda que los archivos ocultos se pueden ver en tu terminal añadiendo el indicador `-a` a un comando `ls`.

Hay un archivo `.eslintrc.json` en la raiz del repositorio de nuestra clase que pudes copiar/pegar a tu proyecto.

## .gitignore

Un archivo `.gitignore` se usa para gestionar partes de un proyecto a las que Git **no** les dará seguimiento. Esto es especialmente útil al prevenir que ciertos tipos de archivo sean enviados a un repositorio en GitHub.

- Los archivos `.DS_Store` creados por el sistema operativo de Mac, los cuales son innecesarios cuando se encuentran dentro de un proyecto
- Cualquier archivo que contenga información (como datos personales, claves de acceso, o tokens de autenticación) que quieras que permanezca como privada
- Otros tipos de archivos que solo se deben de mantener de forma local y que no deben ser enviados a un repositorio (aprenderás más sobre esto en Code 301)

Ya que el nombre del archivo `.gitignore` comienza con un punto, es un archivo oculto en el sistema operativo. Recuerda que los archivos ocultos se pueden ver en tu terminal añadiendo el indicador `-a` a un comando `ls`.

A continuación hay un `.gitignore` de muestra; ten en cuenta que las líneas que comienzan con `#` están comentadas. Siéntete libre de utilizar el contenido de este `.gitignore` para tus propios proyectos. Ten en cuenta de que cuando llegues a Code 301, necesitarás un archivo `.gitignore` más grande, y entonces se te dará un ejemplo del mismo.

```sh
# Archivos de Mac OS
.DS_Store

# Logs
logs
*.log

# Caché opcional de eslint
.eslintcache
```

## LICENCIA

Es una buena práctica incluir una licencia en todos los proyectos para asegurarte de que cualquier persona que use tu código sepa los derechos y restricciones de su uso. Para uso general, la licencia open-source MIT funciona bien.

Lee el archivo de la licencia una vez hayas clonado tu repositorio, y si estás interesado, busca y lee las demás licencias que GitHub ofrece al iniciar un nuevo repositorio.

## README.md

### El propósito de un README

El documento README es el primer punto de entrada a un proyecto de código, y la fuente principal de documentación. Cuando visualizas un proyecto en GitHub, el README aparece en la página de entrada inmediatamente debajo de la lista de archivos y directorios en el proyecto. En los siguientes meses aprenderás que trabajar con código con documentación deficiente puede ser pesado, ¡así que procura escribir una buena documentación para tu trabajo!

¿Qué tipo de contenido debe contener un README?

- Información general del proyecto (qué hace, quién lo escribió, quiénes colaboraron, y qué herramientas se utilizaron)
- Instrucciones para su instalación y uso
- Informaciónn sobre la licencia
- Reconocimientos, etc.

#### [Plantilla de README](README-template.md){:target="_blank"} -  La plantilla por defecto de README 201

También echa un vistazo a las siguientes estructuras sugeridas. Ten en cuenta las similitudes y las diferencias, no hay un enfoque completamente correcto/incorrecto. Ten en consideración la información que le sería de ayuda a otros usuarios en tu proyecto, y utiliza la que sea más apropiada para tu proyecto:

- [README](https://gist.github.com/jxson/1784669){:target="_blank"} por el usuario de GitHub [jxson](https://gist.github.com/jxson){:target="_blank"}
- [Crea un buen README para tu proyecto en Github](https://gist.github.com/kipyegonmark/89fe62493f22d93705d917d634d8eeb2){:target="_blank"} (reprint)
- [Una plantilla para hacer un buen README.md](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3){:target="_blank"}

Por último, ¡recuerda mantener tu README actualizado! ¡No solo lo crees y luego lo tengas abandonado!

### Markdown

Los archivos README están escritos en un lenguaje llamado Markdown. Es una forma rápida y sencilla de añadir formato a tu documentación y todos los desarrolladores deben conocer Markdown. Más que nada, lo aprenderás utilizándolo un montón. Este documento está escrito en Markdown, por ejemplo, así que mira la versión Raw de este documento en GitHub para ver cómo se crearon los encabezados, listas, bloques de código, etc.

Si deseas ver un tutorial de Markdown, [este es uno bueno](https://www.markdowntutorial.com/).

## reset.css

Todos los navegadores vienen con configuraciones por defecto para cosas como tamaños de font, padding, borders y otros componentes visuales. Esto puede ser frustante para los desarrolladores web porque cuando el trabajo que creamos en un entorno se ve en otro, pueden haber diferencias por valores que varían en esa configuración por defecto.

Recomendamos usar [el archivo reset.css de Eric Meyer](https://meyerweb.com/eric/tools/css/reset/) para to "eliminar" todos esos valores para que desarrolles en una hoja en blanco.

## directorio `img/`

Como sabemos, las imágenes son una gran parte de la web. Para ayudar a evitar la saturación del árbol de archivos con múltiples imágenes en un proyecto, lo mejor es crear un directorio`img/`, y potenciales subdirectorios adentro, para almacenar y organizar tus imágenes.
