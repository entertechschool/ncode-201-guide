# Resumen de la tarea: Laboratorio 15

Lee el documento por completo antes de comenzar con el trabajo del laboratorio. Para ver esta tarea de laboratorio en su propia pestaña, haz click [AQUÍ](https://entertechschool.github.io/code-201-guide/curriculum/class-15/lab-a/){:target="_blank"}

## Descripción del problema

Los merge conflicts ocurren cuando los archivos no están sincronizados entre GitHub y el código base local del usuario, y Git no está seguro de dónde está el `HEAD`.

Describamos y experimentemos cómo un equipo de mentira se encontraría con esta situación y luego saldrían de ella.

## Instrucciones

Uno de los miembros del equipo deberá crear un repositorio en GitHub llamado `mc-exercise` y añadir a todos los otros miembros del equipo como colaboradores (en la pestaña 'Settings', busca 'Collaborators” en el apartado izquierdo de la pantalla.)

Asigna a un miembro de tu equipo a cada personaje y haz lo que ellos hacen. Y SOLO haz lo que ellos hacen.

Nuestro equipo de muestra tiene cuatro integrantes: Bob, Carol, Ted, y Alice. Añade un archivo llamado `FUBAR.md` a la rama `main` del repositorio. Cuando comencemos, todos estarán totalmente sincronizados y con un pull reciente del `main` en sus laptops, y con `FUBAR.md`. Bob y Carol hacen pair-programming sobre una característica en `FUBAR.md` en la laptop de Carol en una nueva rama, y Ted y Alice trabajan en otra característica en una rama diferente fuera de main con la laptop de Ted, también en `FUBAR.md`.

***Haz este ejercicio cuatro veces, sigue los siguientes pasos: una vez con cada miembto en cada rol.***

Para este ejercicio, el trabajo que estás haciendo sobre una característica, siempre en `FUBAR.md`, consiste en añadir una oración o dos a "Esto es lo que hicieron Bob y Carol en la computadora de Bob cuando trabajaban en la primera característica" y quizás una broma o algo para entretener a tus compañeros de equipo.

1. Bob y Carol terminaron con su característica e hicieron un A-C-P en su rama desde la laptop de Carol e hicieron un PR.
1. Ted y Alice revisaron la característica, la aprobaron e hicieron un merge.
1. Entonces Ted y Alice hicieron un `git pull origin main` a su rama SOLO en la laptop de Ted y continuaron trabajando en esa característica.

**Mientras tanto...**

1. Bob y Carol se cambiaron a la laptop de Bob, comenzaron una nueva rama en `FUBAR.md` y comenzaron a trabajar ahí. Ellos no hicieron un `git pull origin main` y se arrepentirán.
1. Terminaron esa característica al mismo tiempo que Ted y Alice terminaron con la suya.
1. Cada equipo hizo un A-C-P y un PR.
1. Revisaron los PR del otro e intentaron hacer un merge.

**Merge Conflicts...**

1. Para solucionar un merge conflict, busca en todos tus archivos del proyecto por los marcadores que indican merge conflicts, las líneas de código con `>>>>>>>>>` y `HEAD`. Edita el código para eliminar las redundancias que causan el merge conflict, y ***elimina los marcadores***.
1. Sincroniza las laptops haciendo un `git pull origin main` hacia `main` hasta que Git deje de ver conflictos.
1. Después cambiaron de compañeros, por supuesto. Bob y Alice comenzaron con una nueva característica en su laptop en la rama `main` y Ted y Carol comenzaron con otra nueva característica, también en `main`.
1. Terminaron con estas características rápido, e intentaron hacer un A-C-P y luego crear/mezclar sus PR.

Resuelve cualquier merge conflict de la misma forma que antes si hay alguno pendiente.

---

¿Cómo se pudieron haber prevenido estos problemas?

Revisa el flujo de trabajo de Bob, Carol, Ted y Alice y trata de indentificar todas las cosas individuales que hicieron mal **Y** todas las cosas que debieron hacer hecho pero fallaron. Escribe las descripciones de esas cosas y ponlas en el README del repositorio.

## Recursos

No se necesitan recursos adicionales para el ejercicio de hoy.

## Instrucciones de envío

Para la tarea de hoy en Canvas, envíen sus opiniones individuales sobre este ejercicio y lo que aprendieron de él. Un mínimo de 2-3 oraciones es adecuado.

## Ejercicio de Merge Conflict
