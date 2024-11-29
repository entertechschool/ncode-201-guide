# Lab 07: Biblioteca Personal - Implementación de Clases y Objetos

## Descripción General
En este laboratorio, reorganizarás la estructura de tu Biblioteca Personal utilizando Programación Orientada a Objetos. Convertirás la lógica existente en un sistema de clases que mejorará la organización y mantenibilidad del código.

## Configuraciones
- Continúa trabajando en tu repositorio `biblioteca-personal`.
- Crea una nueva rama llamada `feature/implementación_poo`.
- Asegúrate de tener las funcionalidades de los Labs 06 y 07 funcionando correctamente.

## Instrucciones 
1. Implementación de la Clase Libro
   ```javascript
   class Libro {
     constructor(titulo, autor, año, genero) {
       this.id = this.generarId();
       this.titulo = titulo;
       this.autor = autor;
       this.año = año;
       this.genero = genero;
       this.disponible = true;
       this.fechaCreacion = new Date();
       this.prestamos = [];
     }

     // Métodos a implementar
     prestar() {}
     devolver() {}
     obtenerHistorialPrestamos() {}
     toString() {}
   }
   ```

2. Implementación de la Clase Biblioteca
   ```javascript
   class Biblioteca {
     constructor() {
       this.libros = [];
       this.cargarDatosLocales();
     }

     // Métodos a implementar
     agregarLibro(libro) {}
     eliminarLibro(id) {}
     buscarLibros(criterio, valor) {}
     obtenerEstadisticas() {}
     guardarDatosLocales() {}
   }
   ```

3. Sistema de Préstamos
   - Crea una clase `Prestamo` con:
     - Fecha de préstamo
     - Fecha de devolución prevista
     - Estado del préstamo
     - Información del prestatario
   - Implementa la lógica de préstamos en la clase Biblioteca

4. Actualización de la Interfaz
   - Modifica el código existente para trabajar con las nuevas clases
   - Actualiza los manejadores de eventos
   - Implementa nuevas funcionalidades de préstamo en la UI
   - Agrega visualización del historial de préstamos

## Logros adicionales
- Implementa un sistema de categorías usando clases
- Agrega validadores como clases separadas
- Implementa un sistema de usuarios con diferentes permisos
- Crea un registro de actividades (log) de la biblioteca

## Instrucciones de envío
- Actualiza el README.md con:
  - Diagrama de clases (puede ser una imagen o descripción)
  - Documentación de las nuevas clases y métodos
  - Ejemplos de uso del sistema de préstamos
- Crea un Pull Request de tu rama `feature/implementación_poo` a `main`
- Envía los enlaces de:
  - Tu repositorio en GitHub
  - El Pull Request
  - La página publicada en GitHub Pages

