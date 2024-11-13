Flujo de trabajo del equipo de Git y GitHub
=================

## Cuando inicias una nueva función...

* Comienza desde una rama_principal actualizada
  * `git checkout main`
  * `git pull origin main`
  * Crea una nueva rama de funciones con `git checkout -b <nombre_de_la_rama>`
* Trabaja en tu rama de funciones y **add**, **commit**, and **push**
  * `git add <archivo>`
  * `git commit -m <mensaje_util>`
  * `git push origin <nombre_rama_de_funciones>`
* En Github...
  * Crea un Pull Request (PR) para esa rama en Github
  * Haz que otra persona revise el código en el PR y realice el merge .

## Es hora de una fiesta Merge!

**CUANDO UN PULL REQUEST DE LA  \<RAMA_DE_FUNCIONES> DE OTRA PERSONA HACE MERGED CON LA "main", TODOS DEBEN SEGUIR ESTOS PASOS**

* confirmar cambios en tu  _rama de funciones_
  * `git add <archivo>`
  * `git commit -m <mensaje_util>`
* actualiza tu rama local _main_ 
  * `git checkout main`
  * `git pull origin main`
* actualiza tu _rama de funciones_ con cambios en _main_
  * `git checkout <nombre_rama_de_funciones>`
  * `git merge main`
* manejar merge conflicts _si los hay_
  * Verifique todos los archivos de su proyecto en busca de marcadores que indiquen merge conflicts (en otras palabras, las cosas `>>>>>>>>>` y `HEAD` que han aparecido misteriosamente en su código)
  * Edite el código para eliminar las redundancias que causan el merge conflict, y elimine los marcadores.
  * `git add <archivos_afectados>`
  * `git commit -m "merged main"`

