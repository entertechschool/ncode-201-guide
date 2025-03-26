# Laboratorio 12: Manejo de Promesas en el Editor Markdown

¡Bienvenido al **laboratorio 12** de tu proyecto integrador! En este paso, implementaremos operaciones asíncronas usando Promesas y la instrucción try/catch para robustecer aún más tu editor de Markdown. Tu objetivo es manejar carga de archivos, transformación del contenido y exportación a PDF sin bloquear la aplicación ni exponerla a fallas críticas.

## 🎯 Objetivos de Aprendizaje

1. **Comprender el concepto de Promesas en JavaScript**  
   - Explorar qué son, cómo funcionan y su relevancia para procesar tareas que toman tiempo sin bloquear la interfaz.  
   - Reconocer en qué escenarios resulta más conveniente usarlas respecto a callbacks tradicionales.

2. **Gestionar operaciones asíncronas y su flujo**  
   - Encadenar y controlar promesas para orquestar varias acciones en secuencia.  
   - Emplear `try/catch` o `.catch()` para detectar y manejar excepciones de manera no bloqueante.

## 🔑 Conceptos Clave

1. **Promesa**  
   Objeto que representa el resultado pendiente de una operación asíncrona, junto con métodos (`then()`, `catch()`, `finally()`) para manejar su resolución o rechazo.

2. **Asincronía**  
   Estrategia que permite a JavaScript realizar tareas que toman tiempo (lecturas de archivos, transformaciones) sin interrumpir la experiencia del usuario.

3. **Manejo de Excepciones (try/catch)**  
   Bloques que encapsulan el código con potencial de fallo, permitiendo capturar excepciones para tratarlas o informar al usuario adecuadamente.

## ⚙️ Setup Inicial

1. **Repositorio**  
   - Continúa trabajando en tu repositorio del editor de Markdown.  
   - Crea una rama nueva llamada `lab12-promesas`.

2. **Estructura de Archivos**  
   Tu proyecto debe mantener la misma organización establecida:  
   ```bash
    markdown-editor/
    ├── index.html
    ├── css/
    │ └── styles.css
    ├── js/
    │ └── app.js
    └── README.md
   ```
3. **Configuración Base**  
   - Verifica que la lógica previa (parser, preview, etc.) siga funcionando.  
   - No introduzcas otros recursos (API externas, storage) aún; céntrate en Promesas y try/catch.

## 🏆 Historias de Usuario

1. **HU1: Carga de Archivo Local con FileReader**  
   > *"Como usuario, deseo seleccionar un archivo `.md` desde mi equipo y cargarlo en el editor de forma asíncrona."*  
   - **Criterios de Aceptación**:  
     - Uso de la API FileReader envuelta en una promesa.  
     - Indicador de “Cargando…” mientras se procesa el archivo.  
     - Actualización del editor (y preview) al resolver la promesa.  
     - Manejo de excepción ante lectura fallida (archivo inválido).

   - **[30'] Checkpoint 1:** Validación de la funcionalidad de **carga de archivo** con FileReader.

2. **HU2: Transformación con Manejo de Excepciones**  
   > *"Como usuario, quiero que la transformación Markdown → HTML maneje excepciones sin detener la aplicación, avisándome si hay sintaxis inválida."*  
   - **Criterios de Aceptación**:  
     - Lógica de transformación presentada como promesa o simulada asíncronamente.  
     - Bloque try/catch (o `.catch()`) para gestionar excepciones durante el parse.  
     - Mensaje de excepción no bloqueante en la UI.  
     - Notificación de éxito si todo procede bien. 

   - **[60'] Checkpoint 2:** Verificación de la **transformación con manejo de excepciones** en la lógica .

3. **HU3: Exportar el Documento a PDF**  
   > *"Como usuario, quiero poder exportar el contenido renderizado a un archivo PDF de forma asíncrona, recibiendo notificaciones de progreso y error."*  
   - **Criterios de Aceptación**:  
     - Botón “Exportar a PDF” que dispara la operación (simulada o real) retornando una promesa.  
     - Indicador de “Exportando…” mientras dure el proceso.  
     - Si la promesa se resuelve, descarga o muestra el PDF.  
     - Manejo de excepción con mensaje al usuario (“No se pudo generar el PDF”).

   - **[90'] Checkpoint 3:** Revisión de la **exportación a PDF** de forma asíncrona.


## 🌟 Logros Adicionales

1. **Logro 1: Emular tiempos de carga variables**  
   - Usa un retraso aleatorio (con `setTimeout`) para simular distintas duraciones de lectura o exportación, probando la robustez de la UI.

2. **Logro 2: Botón Cancelar Operación**  
   - Implementa una forma rudimentaria de cancelar la operación asíncrona, deshabilitando el botón “Exportar” o “Cargar” y mostrando un aviso de anulación.

## 📝 Instrucciones de Entrega

1. **Documentación en README**  
   - Explica cómo usaste las promesas o el bloque try/catch en cada historia de usuario.  
   - Añade capturas de pantalla de los mensajes de “cargando…” y de error.

2. **Despliegue**  
   - Fusiona tu rama `lab12-promesas` a `main` y actualiza la versión desplegada en GitHub Pages (o la plataforma que uses).

3. **Entrega Final**  
   - URL del repositorio.  
   - URL del sitio desplegado.