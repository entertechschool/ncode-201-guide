# Laboratorio 12: Manejo de Excepciones en Javascript

📘 Bienvenido al **laboratorio 12** de tu proyecto integrador. En esta sesión trabajaremos exclusivamente el manejo de **excepciones en operaciones de validación y transformación de texto Markdown**, sin depender de carga de archivos externos. El objetivo es robustecer el editor capturando errores en entradas erróneas o mal estructuradas por parte del usuario.

## 🎯 Objetivos de Aprendizaje

1. **Comprender el concepto de Excepciones en JavaScript**  
   - Qué es una excepción, cuándo ocurre y cómo debe manejarse.  
   - Su utilidad para anticipar fallas y brindar retroalimentación controlada.

2. **Manejar validaciones con `try/catch` y `throw`**  
   - Detectar entradas vacías, sintaxis mal estructurada o uso incorrecto de Markdown.  
   - Lanzar errores personalizados que ayuden al usuario a corregir su contenido.

## 🔑 Conceptos Clave

1. **Excepción**  
   Evento inesperado que interrumpe la ejecución normal del programa.

2. **try...catch**  
   Estructura para capturar y manejar errores sin detener el flujo general de ejecución.

3. **throw**  
   Herramienta para lanzar manualmente un error con un mensaje específico cuando se detecta una condición inválida.

## ⚙️ Setup Inicial

1. **Repositorio**  
   - Continúa trabajando en tu repositorio del editor de Markdown.  
   - Crea una rama nueva llamada `lab12-excepciones`.

2. **Librería Marked**
   - Enlaza marked vía CDN en tu index.html:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
   ```
   > Es importante importar la librería marked ANTES de tu script de lógica `app.js`



## 🏆 Historias de Usuario

1. **HU1: Validación de entrada vacía**  
   > "Como usuario, quiero recibir un mensaje si intento procesar Markdown sin haber escrito nada."

   - Criterios de aceptación:
     - Validación con `if` dentro de `try`.
     - `throw new Error("No se ingresó contenido")`.
     - Mensaje claro mostrado en la interfaz.
   
   - **[30'] Checkpoint 1:** Validación de entrada vacía o inválida con `throw`.

2. **HU2: Validación de sintaxis Markdown mal formada**  
   > "Como usuario, quiero que el sistema detecte si escribí encabezados o listas con errores."

   - Criterios de aceptación:
     - Detección de patrones como `##Título`, `-elemento` sin espacio, etc.
     - Lanzar errores con `throw` y capturarlos con `catch`.
     - Mensajes descriptivos en UI sin detener el flujo.
   
   - **[60'] Checkpoint 2:** Manejo adecuado de errores durante la conversión con `marked()`.

3. **HU3: Manejo general de errores inesperados en la conversión**  
   > "Como usuario, quiero que si hay un error interno durante la conversión, se me notifique sin que el editor se bloquee."

   - Criterios de aceptación:
     - Envolver `marked()` en `try/catch`.
     - Captura de errores con `console.error` + alerta visual o log en interfaz.
   
   - **[90'] Checkpoint 3:** Comunicación clara al usuario de errores capturados.


## 🌟 Logros Adicionales

1. **Logro 1: Simular errores intencionales**  
   - Crear un botón que inyecte texto erróneo para probar el manejo de excepciones.

2. **Logro 2: Cancelar la conversión en caso de error**  
   - Impedir ejecución de `marked()` si se detecta fallo previo.

## 📝 Instrucciones de Entrega

1. **Documentación en README**  
   - Explica cómo usaste las promesas o el bloque try/catch en cada historia de usuario.  
   - Añade capturas de pantalla de los mensajes de “cargando…” y de error.

2. **Despliegue**  
   - Fusiona tu rama `lab12-excepciones` a `main` y actualiza la versión desplegada en GitHub Pages (o la plataforma que uses).

3. **Entrega Final**  
   - URL del repositorio.  
   - URL del sitio desplegado.