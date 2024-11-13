# Manejando Errores de Merge

## Problema

* Alguien en tu proyecto ha hecho merge a un **_Pull Request_** a la rama `main`.
* Has hecho push a tu código en la rama remota llamada `branch_name` y has abierto un **_Pull Request_** en la rama `main`.
* _GitHub_ te informa que no se le puede hacer merge automáticamente a tu código en la rama `main`.

### Solución paso a paso

1. Ve hasta la raíz de tu proyecto en tu shell (*la línea de comandos*).

* `$ cd /path/to/your/project`

1. Asegúrate de estar en la rama correcta.

* `$ git branch`  
  _git enumerará las las ramas locales y pondrá un * delante de la rama en la que estás_

1. Asegúrate de que no tienes nada a lo que hacer commit. Si tienes cambios sin commit, realiza uno.

* `$ git status`  
  _nothing to commit, working directory clean_

1. Actualiza de la copia local del repositorio de origen

* `$ git fetch origin`  

1. Haz un merge de la copia local de `origin/main` en tu rama local llamada `branch_name`.

* `$ git merge origin/main`  
  _git te dirá qué a archivos no se le han podido hacer merge automáticamente_

1. Abre cada archivo con conflictos en tu _editor de texto_.
1. Encuentra los cambios con conflictos.

* Busca  `<<< HEAD`, `====`, y `>>> main`
* Estos se llaman "merge markers"

1. Hazle merge a los cambios, para que el código tenga exactamente lo que quieres que tenga.

* Elimina las líneas que dicen `<<< HEAD`, `====`, y `>>> main`
* Elimina las líneas innecesarias de `main` o tu `branch_name`.

```javascript

<<<<<<<<<<< HEAD
   aquí es donde se encuentra el código con conflictos de tu rama
 ===========

   aquí es donde se encuentra el código con conflictos de la rama main
 >>>>>>>>>>> main

```

1. **_EJECUTA TU CÓDIGO_**.

* **¡Este es posiblemente el paso más importante!**
* **El hecho de que hayas "solucionado" tu conflicto de merge no significa que no hayas producido un error tu aplicación.**
* Haz cualquier otro cambio necesario para que todo funcione correctamente

1. Añade tus cambios y haz un commit.

* `$ git add .`
* `$ git commit -m  "handled merge conflict from main"`

1. Haz un push a tu `branch_name` en origin.

* `$ git push origin branch_name`

1. **¡Tu _Pull Request_ ya debería poder hacer merge!**
