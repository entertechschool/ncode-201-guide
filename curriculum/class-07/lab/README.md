# Lab 07: Objetos y Programación Orientada a Objetos en Sistema de Calificaciones

## Descripción General
En este laboratorio, reorganizarás el sistema de gestión de estudiantes utilizando Programación Orientada a Objetos. Convertirás la lógica existente en un sistema de clases que mejorará la organización y mantenibilidad del código.

## Configuraciones
* Continúa trabajando en tu repositorio `sistema-calificaciones-js`.
* Crea una nueva rama llamada `feature/poo`.
* Asegúrate de tener las funcionalidades de los Labs 06 y 07 funcionando correctamente.

## Instrucciones 

### 1. Implementación de la Clase Estudiante
```javascript
class Estudiante {
    constructor(nombre, calificaciones) {
        this.id = this.generarId();
        this.nombre = nombre;
        this.calificaciones = calificaciones;
        this.asistencia = [];
        this.estado = 'activo';
    }

    // Métodos a implementar
    calcularPromedio() {}
    registrarAsistencia(fecha, presente) {}
    actualizarCalificacion(indice, nuevaCalificacion) {}
    obtenerResumen() {}
}
```

### 2. Implementación de la Clase GestorEstudiantes
```javascript
class GestorEstudiantes {
    constructor() {
        this.estudiantes = [];
        this.cargarDatos();
    }

    // Métodos a implementar
    agregarEstudiante(estudiante) {}
    eliminarEstudiante(id) {}
    buscarEstudiante(criterio, valor) {}
    generarReporteGeneral() {}
}
```

### 3. Sistema de Evaluación
* Crear una clase para manejar evaluaciones:
  * Tipos de evaluaciones
  * Pesos de cada evaluación
  * Cálculo de promedios ponderados
  * Registro de evaluaciones

### 4. Actualización de la Interfaz
* Modifica el código existente para:
  * Trabajar con las nuevas clases
  * Implementar nuevos métodos
  * Mostrar información detallada
  * Permitir gestión de evaluaciones

## Logros adicionales
* Implementa herencia para diferentes tipos de estudiantes
* Crea interfaces para distintos tipos de evaluaciones
* Agrega un sistema de notificaciones
* Implementa un historial de cambios

## Instrucciones de envío
* Actualiza el README.md con:
  * Diagrama de clases del sistema
  * Documentación de métodos principales
  * Ejemplos de uso de las clases
* Crea un Pull Request de tu rama `feature/poo` a `main`
* Envía los enlaces de:
  * Tu repositorio en GitHub
  * El Pull Request creado
  * La página publicada en GitHub Pages
