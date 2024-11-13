# Notas de la Clase

### Git branching & despliegue

Branching:
- Conceptos de etiquetado y flujo de trabajo  
- Nuevos comandos del terminal:
  - `git checkout -b <nombre-de-la-rama>`
    - Siempre haz checkout a nuevas ramas desde `main`
  - `git checkout <nombre-de-la-rama>`
  - `git push origin <nombre-de-la-rama>`
  - `git pull origin main`
    - siempre mantén la rama main local actualizada con la rama main en GitHub
  - `git branch`  
- Haciendo push a diferentes ramas  
- Aislando los cambios  
- Recuérdale a los estudiantes acerca del flujo de trabajo adecuado y enfatiza la importancia de realizar todos los pasos en el orden correcto. Al comienzo estarán confundidos, así que incentiva a que los estudiantes hagan una hoja de referencia y a que sean conscientes de cuándo y por qué se utiliza cada comando.
- Puede ser útil mostrarles un diagrama de red en GitHub como una ilustración de branching y flujo de trabajo adecuados

### Git Branching

Cada estudiante trabajará en una rama distinta para cada problema. Trabajen en el primer problema juntos:
1. Explícales el proceso de hacer fork y clonar el repositorio
1. Haz check out a una nueva rama llamada `problem1`
1. Resuelve el problema
1. Add-Commit-Push a GitHub
1. Crea un pull request de `problem1` a `main`. 
1. Señala que su pull request debe ser entre ramas dentro de *SU PROPIO* repositorio duplicado, y NO de su repositorio al repositorio de Enter Tech School. 
1. Vuelve a main y demuestra el propósito del comando `git pull origin main`.

### Despliegue:

- Muéstrale a los estudiantes cómo entrar a Settings en GitHub, luego bajar hasta encontrar la url de su página desplegada
  - El sitio desplegado toma el formato: `https://<nombre-de-usuario>.github.io/<nombre-del-repositorio>/`
