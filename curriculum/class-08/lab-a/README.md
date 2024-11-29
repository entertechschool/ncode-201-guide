
# Lab 08: Biblioteca Personal - Manipulación Avanzada de Strings y Arrays

## Descripción General
En este laboratorio final del módulo, mejorarás tu Biblioteca Personal implementando funcionalidades avanzadas de manipulación de strings y arrays. Optimizarás las búsquedas, el filtrado y la presentación de datos.

## Configuraciones
* Continúa trabajando en tu repositorio `biblioteca-personal`.
* Crea una nueva rama llamada `feature/metodos_adicionales`.
* Asegúrate de tener las funcionalidades de los Labs 06, 07 y 08 funcionando correctamente.

## Instrucciones 

### 1. Mejora del Sistema de Búsqueda
* Implementa una búsqueda avanzada que incluya:
  ```javascript
  class BuscadorAvanzado {
    constructor(biblioteca) {
      this.biblioteca = biblioteca;
    }

    buscarPorCoincidenciaParcial(texto) {
      // Usar includes() o indexOf()
    }

    buscarPorExpresionRegular(patron) {
      // Implementar búsqueda con RegExp
    }

    buscarPorMultiplesCriterios(criterios) {
      // Combinar diferentes métodos de búsqueda
    }
  }
  ```

### 2. Transformación de Datos
* Implementa métodos para formatear la información:
  ```javascript
  class FormateadorLibros {
    formatearTitulo(titulo) {
      // Capitalizar palabras, remover espacios extras
    }

    formatearAutor(autor) {
      // Estandarizar formato de nombres
    }

    generarCodigo() {
      // Crear código único combinando strings
    }

    generarCitaBibliografica() {
      // Formato APA o similar
    }
  }
  ```

### 3. Sistema de Etiquetas
* Desarrolla un sistema de etiquetas para los libros:
  * Implementa métodos para agregar/eliminar etiquetas
  * Permite búsqueda por etiquetas
  * Sugiere etiquetas basadas en el contenido

### 4. Reportes y Exportación
* Crea funciones para generar diferentes tipos de reportes:
  * Lista de libros en formato tabla
  * Estadísticas de la biblioteca
  * Histórico de préstamos
  * Exportación a diferentes formatos (CSV, JSON)

## Logros adicionales
* Implementa un sistema de autocompletado para búsquedas
* Agrega corrección ortográfica básica en las búsquedas
* Crea un sistema de recomendaciones basado en etiquetas
* Implementa ordenamiento por múltiples criterios

## Instrucciones de envío
* Actualiza el README.md con:
  * Documentación de las nuevas funcionalidades
  * Ejemplos de uso del sistema de búsqueda avanzada
  * Muestras de los diferentes tipos de reportes
* Crea un Pull Request de tu rama `feature/metodos_adicionales` a `main`
* Envía los enlaces de:
  * Tu repositorio en GitHub
  * El Pull Request
  * La página publicada en GitHub Pages
