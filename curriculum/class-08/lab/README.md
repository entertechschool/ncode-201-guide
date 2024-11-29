# Lab 08: Manipulación Avanzada de Strings y Arrays en Sistema de Calificaciones

## Descripción General
En este laboratorio final, implementarás funcionalidades avanzadas de manipulación de strings y arrays en tu sistema de gestión de estudiantes. Mejorarás las búsquedas, el filtrado y la presentación de datos.

## Configuraciones
* Continúa trabajando en tu repositorio `sistema-calificaciones-js`.
* Crea una nueva rama llamada `feature/metodos-adicionales`.
* Asegúrate de tener las funcionalidades de los Labs 06, 07 y 08 funcionando correctamente.

## Instrucciones 

### 1. Manipulación Avanzada de Strings
```javascript
class ProcesadorTexto {
    constructor() {
        this.nombresPropios = new Set();
    }

    formatearNombre(nombre) {
        // Implementar capitalización correcta
        // "juan pérez" -> "Juan Pérez"
    }

    generarCodigo(estudiante) {
        // Generar código único usando partes del nombre y fecha
    }

    busquedaInteligente(texto) {
        // Implementar búsqueda que ignore acentos y mayúsculas
        // Manejar errores comunes de escritura
    }
}
```

### 2. Operaciones Avanzadas con Arrays
```javascript
class AnalizadorDatos {
    constructor(estudiantes) {
        this.estudiantes = estudiantes;
    }

    agruparPorRendimiento() {
        // Usar reduce para crear grupos por promedio
    }

    ordenarPorMultiplesCriterios(criterios) {
        // Implementar ordenamiento por múltiples campos
    }

    obtenerEstadisticasAvanzadas() {
        // Calcular percentiles, medianas, modas
    }
}
```

### 3. Sistema de Reportes
* Implementar generación de reportes usando:
  * Formato tabular con padStart/padEnd
  * Alineación de columnas
  * Totales y subtotales
  * Exportación en diferentes formatos

### 4. Búsqueda y Filtrado Avanzado
* Implementar:
  * Búsqueda con expresiones regulares
  * Filtros combinados
  * Autocompletado
  * Sugerencias de búsqueda

## Logros adicionales
* Implementa un sistema de autocorrección
* Agrega formato condicional en reportes
* Crea visualizaciones de datos
* Implementa exportación a diferentes formatos

## Instrucciones de envío
* Actualiza el README.md con:
  * Documentación de las nuevas funcionalidades
  * Ejemplos de reportes generados
  * Guía de uso de búsquedas avanzadas
* Crea un Pull Request de tu rama `feature/metodos-adicionales` a `main`
* Envía los enlaces de:
  * Tu repositorio en GitHub
  * El Pull Request creado
  * La página publicada en GitHub Pages
