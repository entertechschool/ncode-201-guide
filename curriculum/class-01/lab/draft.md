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
   - Para el archivo **.eslint.json** utiliza el siguiente contenido:
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
  
4. Agregando contenido al README.md
   - autor
   - eslint
   - enlace a la web

5. Agregando contenido a index.html
   - title
   - h1
   - footer / a / README
  
6. Agregando reglas a styles.css
   - *
   - body
  
7. Publicando en Github Pages
   - a
   - b
   - c 


### Logros adicionales
- a
- b


### Instrucciones de envío
- Responde a esta actividad y comparte la URL de tu página web recién publicada.
