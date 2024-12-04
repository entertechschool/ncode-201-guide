# Lab 06: Programación Funcional y DRY en Sistema de Calificaciones

## Descripción General
En este laboratorio, mejorarás el sistema de gestión de estudiantes aplicando conceptos de programación funcional y el principio DRY. Refactorizarás el código del laboratorio anterior para hacerlo más eficiente y mantenible.

## Configuraciones
* Continúa trabajando en tu repositorio `sistema-calificaciones-js`.
* Crea una nueva rama llamada `feature/programación-funcional`.
* Asegúrate de tener las funcionalidades del Lab 06 funcionando correctamente.

## Instrucciones 

### 1. Refactorización de Funciones
* Implementa funciones de orden superior para las operaciones comunes:
  ```javascript
  // Función de orden superior para filtrado
  const filtrarEstudiantes = criterio => valor => {
    return estudiantes.filter(estudiante => {
      // Implementa la lógica de filtrado
    });
  };

  // Función para procesar calificaciones
  const procesarCalificaciones = operacion => calificaciones => {
    // Implementa la lógica de procesamiento
  };
  ```

### 2. Implementación de Utilidades
* Crea un archivo `utils.js` con funciones reutilizables:
  ```javascript
  // Funciones de validación
  const validarRangoCalificacion = calificacion => {...};
  const validarDatosEstudiante = estudiante => {...};
  
  // Funciones de cálculo
  const calcularPromedio = calificaciones => {...};
  const determinarEstado = promedio => {...};
  ```

### 3. Funciones de Transformación
* Implementa funciones para transformar datos:
  ```javascript
  // Usando map, filter y reduce
  const obtenerPromedios = () => {...};
  const filtrarAprobados = () => {...};
  const generarResumenGrupo = () => {...};
  ```

### 4. Aplicación del Principio DRY
* Identifica y elimina código duplicado
* Crea funciones genéricas para operaciones repetitivas
* Implementa un sistema de mensajes reutilizable

## Logros adicionales
* Implementa composición de funciones
* Crea un sistema de validación encadenable
* Agrega manejo de errores funcional
* Implementa funciones curry para configuraciones

## Instrucciones de envío
* Actualiza el README.md con:
  * Documentación de las nuevas funciones
  * Ejemplos de uso del código refactorizado
  * Explicación de las mejoras implementadas
* Crea un Pull Request de tu rama `feature/programación-funcional` a `main`
* Envía los enlaces de:
  * Tu repositorio en GitHub
  * El Pull Request creado
  * La página publicada en GitHub Pages
