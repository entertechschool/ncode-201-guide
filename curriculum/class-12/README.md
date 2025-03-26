> 📦 **Módulo 3:** Clase 12 de 12

# Clase 12: Promesas y Gestión de Excepciones en JavaScript

## Resumen

En la clase 12 profundizamos en el manejo de **operaciones asíncronas** mediante el uso de **Promesas** en JavaScript, orientadas específicamente al proyecto integrador **Editor de Markdown en Vivo**. La sesión combinó tres recursos clave:

1. **Guía de Lectura y Debate:** Actividad orientada a reforzar los fundamentos conceptuales de asincronía, Promesas y manejo de excepciones, preparando a los estudiantes para una discusión crítica y profunda antes del laboratorio.
  
2. **Guía de Laboratorio:** Aplicación práctica donde los estudiantes implementaron funcionalidades esenciales usando Promesas (carga de archivos locales, transformación segura del contenido y exportación a PDF), aplicando manejo robusto de excepciones mediante try/catch.


## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
|---------|--------------|------------|
| **1. Refuerzo Práctico Inicial**| 15 min       | Ejercicio rápido sobre transformación Markdown-HTML para activar conocimientos previos de asincronía.       |
| **2. Debate Técnico y Demo**    | 45 min       | Discusión crítica de conceptos clave: Promesas vs callbacks, manejo de excepciones (try/catch), `.then()` vs `async/await`. Demostración breve sobre el uso correcto de Promesas en el editor.|
| **3. Laboratorio Práctico**     | 100 min      | Implementación guiada de Promesas en carga de archivos con FileReader, transformación con manejo seguro de excepciones y exportación asíncrona a PDF. Checkpoints estructurados a los 30, 50 y 80 minutos. |
| **4. Síntesis y Proyección**    | 20 min       | Consolidación de aprendizajes, retroalimentación grupal y anticipación del uso futuro de async/await.       |

---

## Resultados esperados

Al finalizar esta clase, los estudiantes habrán fortalecido significativamente su comprensión sobre la asincronía en JavaScript, adquiriendo competencias técnicas valiosas relacionadas con Promesas y manejo robusto de excepciones:

### Podrán hacer
1. **Implementar carga asíncrona de archivos locales con Promesas:**  
   Utilizando FileReader y envolviendo su lógica en una Promesa para actualizar el editor sin bloquear la interfaz.

2. **Transformar contenido Markdown a HTML manejando excepciones:**  
   Aplicando correctamente bloques `try/catch` o `.catch()` para garantizar estabilidad en la aplicación y notificar claramente cualquier excepción encontrada durante el proceso.

3. **Exportar documentos a PDF sin congelar la interfaz:**  
   Creando flujos de exportación asíncrona claros, con retroalimentación visual que indica el progreso y resultados de la operación.

### Podrán explicar
1. **La relevancia de las Promesas en flujos asíncronos:**  
   Justificando con ejemplos prácticos cómo las Promesas mejoran notablemente la experiencia del usuario frente a callbacks tradicionales.

2. **El papel fundamental del manejo de excepciones en la robustez de la aplicación:**  
   Argumentando por qué capturar excepciones previene la interrupción inesperada de procesos asíncronos y mejora la percepción de calidad del software.

3. **Diferencias clave entre `.then()` y `async/await`:**  
   Identificando ventajas de claridad, legibilidad y mantenibilidad en el uso de una u otra sintaxis en diferentes contextos del editor Markdown.

### Podrán implementar
1. **Promesas para lectura segura de archivos locales:**  
   Integrando exitosamente la API FileReader con un enfoque de Promesas.

2. **Bloques try/catch en operaciones asíncronas:**  
   Capturando posibles excepciones en la transformación Markdown-HTML, evitando que el editor deje de responder.

3. **Proceso de exportación a PDF con asincronía:**  
   Generando un flujo claro y efectivo de exportación que comunica el estado (en curso, éxito o excepción) al usuario final mediante la interfaz gráfica.

---

## Glosario de Nuevos Términos

- **Promesa:** Objeto JavaScript que representa la eventual finalización (éxito o excepción) de una operación asíncrona.  
- **Asincronía:** Ejecución de tareas en segundo plano para evitar el bloqueo del flujo principal de una aplicación.  
- **Callback:** Función que se ejecuta después de que otra haya finalizado, típicamente en operaciones asíncronas.  
- **try/catch:** Estructura de control que permite capturar excepciones durante la ejecución de bloques de código.  
- **FileReader:** API del navegador que permite leer archivos locales del usuario de manera asíncrona.  
- **async/await:** Sintaxis moderna basada en Promesas, que simplifica el manejo de operaciones asíncronas, facilitando la lectura del código.
