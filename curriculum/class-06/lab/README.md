# Lab 06: Biblioteca Personal - Refactorización y Programación Funcional

## Descripción General
En este laboratorio, mejorarás la aplicación de Biblioteca Personal aplicando conceptos de programación funcional y el principio DRY. Refactorizarás el código del laboratorio anterior para hacerlo más eficiente y mantenible.

## Configuraciones
- Continúa trabajando en tu repositorio `biblioteca-personal`.
- Crea una nueva rama llamada `feature/programación_funcional`.
- Asegúrate de tener todos los archivos del Lab 06 funcionando correctamente.

## Instrucciones 
1. Refactorización de Funciones de Búsqueda
   - Crea una función de orden superior `filtrarLibros` que reciba como parámetros:
     ```javascript
     filtrarLibros(criterio) {
       return (valor) => {
         // Implementa la lógica de filtrado
       }
     }
     ```
   - Refactoriza `buscarLibro` para utilizar esta nueva función.
   - Implementa la búsqueda utilizando `filter` y `map`.

2. Implementación de Utilidades
   - Crea un archivo `utils.js` que contenga funciones reutilizables:
     ```javascript
     // Ejemplo de funciones a implementar
     const validarCampos = (objeto, camposRequeridos) => {...}
     const generarId = () => {...}
     const formatearFecha = (fecha) => {...}
     ```
   - Aplica estas utilidades en las funciones existentes.

3. Mejoras en el Manejo de Datos
   - Implementa las siguientes funciones usando métodos funcionales:
     ```javascript
     const librosPorGenero = (genero) => biblioteca.filter(...)
     const librosDisponibles = () => biblioteca.filter(...)
     const contarLibrosPorAutor = () => biblioteca.reduce(...)
     ```
   - Agrega estadísticas de la biblioteca usando `reduce`.

4. Interfaz Mejorada
   - Crea componentes reutilizables para:
     - Tarjetas de libros
     - Formularios
     - Mensajes de error/éxito
   - Implementa una función para renderizar la interfaz de manera declarativa.

## Logros adicionales
- Implementa funciones de ordenamiento usando `sort` con diferentes criterios.
- Agrega funcionalidad de exportar datos usando `map` y `reduce`.
- Crea una función de búsqueda avanzada que combine múltiples criterios.
- Implementa un sistema de etiquetas para los libros.

## Pruebas y Validación
- Asegúrate de que todas las funciones antiguas sigan funcionando.
- Verifica que no haya código duplicado.
- Comprueba que las nuevas funciones sean reutilizables.

## Instrucciones de envío
- Actualiza el README.md con:
  - Las mejoras implementadas
  - Ejemplos de uso de las nuevas funciones
  - Documentación de las utilidades creadas
- Crea un Pull Request de tu rama `feature/programación_funcional` a `main`
- Envía el enlace de tu repositorio y el Pull Request
