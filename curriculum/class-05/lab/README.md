# Lab 05: Biblioteca Personal - Estructuras de Control

## Descripción General
En este laboratorio, comenzarás a construir una aplicación de Biblioteca Personal. Utilizarás estructuras de control y arreglos para manejar la lógica básica de una colección de libros. Este será el primer paso de un proyecto que iremos expandiendo en los siguientes laboratorios.

## Configuraciones
- Crea un repositorio llamado `biblioteca-personal`.
- Clona tu repositorio a tu computadora local en la ruta `~/dev/[usuario_github]`.
- Ingresa a tu VScode usado `code .` y trabaja tu proyecto. 

## Instrucciones 
1. Estructura Base
   - Crea un archivo `index.html` con la estructura básica.
   - Crea un archivo `script.js` y vincúlalo al HTML.
   - Crea una carpeta `css` con un archivo `styles.css`.

2. Implementación de Datos
   - Crea un arreglo `biblioteca` que almacenará objetos con la siguiente estructura:
     ```javascript
     {
       id: 1,
       titulo: "El Señor de los Anillos",
       autor: "J.R.R. Tolkien",
       año: 1954,
       genero: "Fantasía",
       disponible: true
     }
     ```
   - Agrega al menos 5 libros de ejemplo al arreglo.

3. Funciones de Control
   - Implementa la función `agregarLibro(libro)` que:
     - Valide que todos los campos estén completos.
     - Genere un ID único.
     - Agregue el libro al arreglo biblioteca.
   
   - Implementa la función `buscarLibro(criterio, valor)` que:
     - Permita buscar por título, autor o género.
     - Retorne un arreglo con las coincidencias.
     - Maneje el caso de no encontrar resultados.

   - Implementa la función `cambiarDisponibilidad(id)` que:
     - Cambie el estado disponible del libro.
     - Valide que el ID exista.

4. Interfaz Básica
   - Crea un formulario HTML para agregar libros.
   - Agrega un campo de búsqueda.
   - Muestra la lista de libros en el HTML.

## Logros adicionales
- Implementa validación de datos en el formulario.
- Agrega la capacidad de ordenar libros por diferentes criterios.
- Implementa almacenamiento local para persistir los datos.
- Agrega mensajes de confirmación para las operaciones.

## Instrucciones de envío
- En el README.md de tu repositorio, incluye:
  - Una descripción del proyecto
  - Las funcionalidades implementadas
  - Capturas de pantalla de la interfaz
- Envía el enlace de tu repositorio y la página publicada en GitHub Pages
