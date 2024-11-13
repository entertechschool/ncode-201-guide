# Verifica la Configuración de las Computadoras de los Alumnos

Esta lista está pensada para ayudar a los instructores a verificar que los estudiantes hayan completado exitosamente con la parte de la configuración de sus computadoras en el prework.

## *Solo* para los estudiantes con Windows/WSL

- Pregúntales cómo les fue
- `cdwr` los deberá llevar su raíz de Ubuntu
- Una vez ahí, utilicen los comandos `chrome` y `code` para abrir archivos
- Si no están instalados adecuadamente, realiza la configuración previa. Esto tomará un poco, trata de hacer estos pasos con varios estudiantes a la vez de ser posible.

## *Solo* para los estudiantes con Mac

- verifica Homebrew (`which brew`)
- Ejecuta estos comandos individualmente: `brew update`, `brew upgrade`, `brew cleanup`, `brew doctor`

## Todos los alumnos

Ejecuta los siguientes comandos de shell *individualmente* en los terminales de los alumnos. Cada uno de estos comandos deberá retornar algo; si no lo hacen, hay un problema que resolver. Consulta las instrucciones correspondientes en el prework.

### Instalaciones

- `code --version`
- `git --version`
- `npm --version`
- `eslint --version`
- `live-server --version`
- `tree --version`

### Configuraciones

- `echo $PS1` *(Dirige al alumnno a http://ezprompt.net para crear un PS1)*
- `ls ~/entertechschool` *(Guíalos al crear estos directorios si no existen)*
- `cat ~/.gitconfig` *(Si el resultado es en blanco, revisa sus configuraciones de Git y GitHub)*

### ESLint

- Asegúrate de tener la extensión ESLint instalada y activada en VSCode
- Crea un archivo `.eslintrc.json` en sus directorios `~/entertechschool/201/`.
- Copia el contenido de ese mismo archivo desde la raíz del repositorio de la clase.
- Crea un archivo JS de prueba para ver que el linter esté funcionando

### Configuraciones adicionales para VSCode

En la parte inferior izquierda de VSCode, haz click en el ícono de la tuerca y selecciona "Configuración". Usa la barra de búsqueda para establecer los siguientes valores.

- "editor.tabSize" debe estar en **2**
- "editor.detectIndentation" debe ser **verdadero**
- "editor.wordWrap" debe establecerse como **on**
- "editor.minimap.enabled" debe ser **verdadero**
