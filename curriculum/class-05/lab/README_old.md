# Lab 05: Manipulación de Datos en JavaScript

## Descripción General
En este laboratorio, iniciarás el desarrollo de un sistema de gestión de estudiantes. Implementarás las estructuras básicas de control, manejo de arreglos y bucles para gestionar la información de los estudiantes y sus calificaciones.

## Configuraciones
* Crea un repositorio llamado `sistema-calificaciones-js`.
* Clona tu repositorio a tu computadora local en la ruta `~/dev/[usuario_github]`.
* Crea los archivos: `index.html`, `script.js`, `styles.css`.

## Instrucciones 

### 1. Estructura Base de Datos
* Implementa un arreglo de objetos para almacenar datos de estudiantes:
  ```javascript
  const estudiantes = [
    {
      id: 1,
      nombre: "Juan",
      calificaciones: [85, 90, 78],
      asistencia: true,
      estado: "activo"
    }
  ];
  ```

### 2. Funciones de Control
* Implementa las siguientes funciones:
  ```javascript
  // Agregar estudiante con validaciones
  function agregarEstudiante(nombre, calificaciones) {
    // Validar datos
    // Crear objeto estudiante
    // Agregar al arreglo
  }

  // Calcular promedio usando bucles
  function calcularPromedio(calificaciones) {
    // Usar for o reduce para calcular
  }

  // Filtrar estudiantes por estado
  function filtrarPorEstado(estado) {
    // Usar filter para encontrar estudiantes
  }
  ```

### 3. Condicionales y Validaciones
* Implementa la lógica para:
  * Validar que las calificaciones estén entre 0 y 100
  * Determinar si un estudiante aprobó (promedio ≥ 70)
  * Clasificar estudiantes según promedio:
    * Excelente: ≥ 90
    * Bueno: ≥ 80
    * Regular: ≥ 70
    * Necesita Mejorar: < 70

### 4. Implementación de Bucles
* Utiliza diferentes tipos de bucles para:
  * Mostrar lista de estudiantes
  * Calcular promedios
  * Actualizar estados
  * Generar reportes

## Logros adicionales
* Implementa búsqueda de estudiantes por nombre
* Agrega ordenamiento por promedio
* Crea un sistema de rangos basado en asistencia y calificaciones
* Implementa persistencia de datos usando localStorage

## Instrucciones de envío
* En el README.md incluye:
  * Descripción del proyecto
  * Funcionalidades implementadas
  * Ejemplos de uso
* Envía el enlace de:
  * Tu repositorio en GitHub
  * Tu página publicada en GitHub Pages
