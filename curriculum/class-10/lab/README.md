# Laboratorio 10: Funciones y Callbacks en JavaScript

¡Bienvenido al décimo laboratorio del proyecto integrador **Editor Avanzado de Markdown en Vivo**! En esta sesión profundizarás en el uso de **funciones de primera clase, funciones de orden superior y callbacks**, aplicándolos en la transformación dinámica del contenido del editor Markdown en HTML, mejorando su interactividad.  

> ⏱️ **Nota sobre Checkpoints**: Este laboratorio incluye tres momentos de validación grupal (a los 45, 60 y 75 minutos). Mantenerse al día es clave para recibir retroalimentación efectiva del instructor y de los compañeros.  

## 🎯 **Objetivos de Aprendizaje**  

1. **Comprender el concepto de funciones como objetos de primera clase** y su importancia en JavaScript.  
2. **Implementar funciones de orden superior con callbacks** para modularizar el código y mejorar su reutilización.  
3. **Diferenciar entre funciones declarativas, expresiones de función y funciones anónimas** y su aplicación en programación funcional.  

## 🔑 **Conceptos Clave**  

1. **Funciones de Primera Clase**  
2. **Callbacks**  
3. **Funciones de Orden Superior**  

## ⚙️ **Setup Inicial**  

1. **Repositorio:**  
   - Continúa trabajando sobre el repositorio del laboratorio anterior (`markdown-editor`).  
   - Crea una nueva rama `lab10-funciones-callbacks`.  

2. **Estructura de Archivos:**  
   Mantén la estructura del proyecto asegurando la organización modular del código:  
   ```
   markdown-editor/
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   ├── app.js
   │   ├── format.js       <-- (nuevo archivo para funciones de formato)
   │   ├── lists.js        <-- (nuevo archivo para listas dinámicas)
   │   ├── blocks.js    <-- (nuevo archivo para resaltado de bloques de código)
   └── README.md
   ```  

3. **Configuración Base:**  
   - Verifica que `index.html` contenga una estructura semántica clara (`header`, `main`, `footer`).  
   - Asegúrate de enlazar los nuevos archivos `.js` en el `index.html`.  
   - Define las funciones de transformación en los archivos correspondientes (`format.js`, `lists.js`, `blocks.js`).  


## 📋 Historias de Usuario

### HU1: Botón para Alternar el Formato de Texto

📌 *"Como usuario, quiero un botón que aplique o quite automáticamente un formato (negrita o cursiva) al texto seleccionado en el editor, utilizando una función de orden superior."*  

**Criterios de Aceptación:**  
- Implementar un botón **"Aplicar Formato"** que alterne entre negrita y cursiva.  
- Usar **una función de orden superior** que reciba un callback para aplicar o quitar formato.  
- Formatos soportados:  
  - **Negrita:** `**texto**`  
  - **Cursiva:** `*texto*`  
- Mantener la estructura del `textarea` sin alterar el resto del contenido.  

- **Checkpoint 1 (45 min)**:  
  🔍 **Revisión:**  
  - La función de orden superior debe ejecutar un callback correctamente.  
  - El botón debe alternar entre aplicar y quitar formato.  
  - No se deben afectar otras partes del texto.  

### HU2: Generación de Listas Numéricas Dinámicamente

📌 *"Como usuario, quiero que al escribir listas numeradas (`1. Item 1`, `2. Item 2`), el editor las transforme en listas HTML `<ol>` sin necesidad de presionar un botón manualmente, utilizando una función de orden superior."*  

**Criterios de Aceptación:**  
- Detectar automáticamente cuando el usuario escribe una lista numerada en el editor (`1. Item 1`, `2. Item 2` …).  
- Utilizar una **función de orden superior** que reciba un callback para transformar cada línea en un `<li>`.  
- Convertir listas numeradas en `<ol>` al presionar el botón **"Generar Vista Previa"**.  
- Mantener la numeración correcta en HTML.  

- **Checkpoint 2 (60 min)**:  
  🔍 **Revisión:**  
  - La función de orden superior debe aplicar correctamente el callback.  
  - Se debe generar una estructura válida `<ol><li>Item</li></ol>`.  
  - La numeración debe mantenerse intacta en la conversión.  


### HU3: Resaltado Dinámico de Código en el Preview

📌 *"Como usuario, quiero que al escribir código en el editor dentro de triple backticks (```) se aplique resaltado automático en la vista previa, utilizando funciones de primera clase para transformar el contenido."*  

**Criterios de Aceptación:**  
- Detectar automáticamente cuando el usuario ingresa código entre triple backticks (` ``` `).  
- Usar una **función de primera clase** para encapsular la lógica de transformación.  
- Aplicar una clase CSS de resaltado al bloque de código en la vista previa (`<pre><code>`).  
- Permitir múltiples bloques de código en un mismo documento sin interferencias.  

- **Checkpoint 3 (75 min)**:  
  🔍 **Revisión:**  
  - La detección de código entre triple backticks debe funcionar correctamente.  
  - La función de primera clase debe ser reutilizable.  
  - La estructura generada debe ser `<pre><code>contenido</code></pre>`.  
  - La sintaxis debe reflejarse correctamente en la vista previa con estilos de resaltado.  


## 🌟 **Logros Adicionales (Opcionales)**  

📌 **Logro 1: Atajos de Teclado para Formateo Rápido**  
*"Como usuario, quiero poder aplicar formato de negrita (`Ctrl+B`) y cursiva (`Ctrl+I`) mediante atajos de teclado en el editor."*  

## 📝 **Instrucciones de Entrega**  

1. **Despliegue**  
   - Publica los cambios en GitHub Pages y proporciona el enlace correspondiente.  

2. **Entrega Final**  
   - URL del repositorio en GitHub.  
   - URL del proyecto desplegado en GitHub Pages.  

