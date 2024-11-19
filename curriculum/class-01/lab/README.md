# Lab 01: Creando la Web Moderna

Este laboratorio es el inicio de tu primer proyecto individual en Code 201. A lo largo de los laboratorios del módulo irás avanzando en el contenido, diseño y responsividad de este proyecto.

##  Configuración y documentación

Para este laboratorio usarás tu terminal (GitBash en windows), VS Code y tu cuenta de GitHub.

## Instrucciones
1. Crea el directorio para tu proyecto: `~/dev/[usuario_github]/web-moderna`.
   - En tu terminal escribe `cd ` para ir al directorio raíz.
   - Luego ingresa al directorio **dev** (si no lo tienes, créalo con `mkdir dev`).
   - Crea el directorio (si no lo tienes) con el mismo nombre de tu usuario de github, por ejemplo: `mkdir mi_usuario`.
   - Ingresa al directorio **mi_usuario** y crea el directorio **web-moderna**.
  
   > 💡 Es una buena práctica que escribas los nombres de tus directorios siempre en minúsculas y sin utilizar espacios en blanco.
   > Puedes utilizar los guiones (- / _) para separar las palabras.

2. Agregando los archivos iniciales al proyecto.
   - Abre tu directorio **web-moderna** en VS Code, puedes hacerlo con el comando `code .` si es que estás en la terminal.
   - Crea los archivos: index.html, styles.css, README.md y .eslintrc.json
   - Agrega una estructura básica en cada archivo.
   - Para el archivo **.eslintrc.json** utiliza el siguiente contenido:
```js
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-unused-vars": "warn",
    "no-console": "warn"
  }
}
```

3. Sincronizar el repositorio.
   - En el menú lateral, dale clic a la opción **Control de código fuente**.
   - Presiona el botón **Inicializar Repositorio Git**
   - Luego, en el campo de Mensaje, escribe: **Commit inicial** y presiona **Confirmación**
   - A continuación aparecerá el botón **Publicar Branch** dale clic.
   - Aparecerá un dialogo para que elijas qué tipo de repositorio crear. Selecciona **público**.
   - Finalmente, ve a tu cuenta de Github desde tu navegador y verifica que se haya creado el repositorio.
  
4. Agregando contenido al `README.md`
   - Agrega una sección llamada **Autor** y dentro de ella:
       - Coloca tu **Nombre completo**
       - Coloca el **Nombre del curso**
       - Coloca tu **email**
       - Coloca la **Fecha de creación** del proyecto 
   - Agrega una sección llamada **Sobre el Proyecto** y dentro de ella:
       - Coloca la siguiente descripción en un párrafo:
         > En "La Web Moderna" podrás leer los conceptos clave que todo Desarrollador de Software debe saber para crear aplicaciones web.
   - Agrega una sección llamada **eslint** y dentro de ella:
       - Explica cada línea del contenido de tu archivo `eslintrc.json`. Para esta actividad, pídele ayuda a ChatGPT, Claude AI o Gemini.
   - Agrega una sección llamada **Despliegue** y dentro de ella:
       - Coloca un enlace hacia tu página desplegada en **GitHub Pages**.
   
6. Agregando contenido a index.html
   - En la cabecera `<head>` identifica la etiqueta `<title>` y modifica el contenido por **La Web Moderna**.
   - En el `body`, agrega la etiqueta `<h1>` y coloca como contenido **La Web Moderna**.
   - Agrega la etiqueta `<footer>` y añade como contenido la etiqueta `<a>` para vincularlo con tu archivo `README.md`.
   
7. Agregando reglas a styles.css
   - Utiliza el selector `*` y agrega las siguientes propiedades:
       - `margin: 0;`
       - `padding: 0;`
       - `box-sizing: border-box;`
   - Utiliza el selector `body`, agrega como propiedad el tipo de familia utilizando `font-family` y elige la fuente `'Segoe UI', system-ui, sans-serif`, define el color de fondo utilizando la etiqueta `background-color` y usa el color `#f5f5f5`.
  
8. Publicando en Github Pages
   
   - En el repositorio de tu proyecto, selecciona la opción `Settings`. 
   - Luego, selecciona la opción `pages`.
   - Por ultimo, elige como rama `main` a `/root` y haz clic en `save`. Recuerda que esto puede tardar unos minutos.

### Logros adicionales
- Añade dentro de la etiqueta `<footer>` una lista no ordenada `<ul>` y coloca como **items** tus redes sociales utilizando la etiqueta <a>, esta debe poder redirigir a tus cuentas. 
  


### Instrucciones de envío
- Responde a esta actividad y comparte la URL de tu página desplegada en GitHub Pages.
