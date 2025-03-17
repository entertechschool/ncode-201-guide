# Laboratorio 09: DOM como API de Objetos

¡Bienvenido al noveno laboratorio del proyecto integrador **Editor Avanzado de Markdown en Vivo**! En esta sesión comenzarás a trabajar activamente con la manipulación avanzada del DOM (Document Object Model), aplicando conceptos de JavaScript orientado a objetos para generar una interfaz dinámica y responsiva.

> ⏱️ **Nota sobre Checkpoints**: Este laboratorio incluye dos momentos de validación grupal (a los 30, 60 y 90 minutos). Mantenerse al día es clave para aprovechar al máximo la retroalimentación del instructor y de tus compañeros.

## 🎯 Objetivos de Aprendizaje

1. Manipular el DOM como colección de objetos mediante propiedades y métodos JavaScript.
2. Comprender la Jerarquía DOM y sus relaciones (padres, hijos, hermanos).

## 🔑 Conceptos Clave

1. DOM como Árbol de Objetos
2. Selección dinámica de Nodos (`querySelector`, `querySelectorAll`)
3. Regex básico

## ⚙️ Setup Inicial

1. **Repositorio:**
   - Crea un nuevo repositorio en tu cuenta de GitHub llamado `markdown-editor` y clónalo en tu local.
   - Inicialmente trabaja sobre la rama `main`.

2. **Estructura de Archivos:**
   Tu proyecto debe mantener esta estructura mínima:
   ```
   markdown-editor/
   ├── index.html
   ├── css/
   │ └── styles.css
   ├── js/
   │ └── app.js
   └── README.md
   ```

3. **Contenido Base:**
- Prepara en `index.html` una estructura semántica básica (`header`, `main`, `footer`) con áreas claramente definidas para la barra de herramientas, editor y preview.
- Revisa la documentación de [TailwindCSS](https://tailwindcss.com/docs/installation/play-cdn){:target="_blank"} para agregar este framework.

## 📋 Historias de Usuario

### HU1: Barra de herramientas con botón "Generar Vista Previa"
"Como usuario, deseo una barra de herramientas con un único botón llamado 'Generar Vista Previa', ubicada en la parte superior en desktop y en la parte inferior en dispositivos móviles, manteniendo siempre visible tanto el editor como la vista previa."

**Criterios de Aceptación:**
- La barra de herramientas está fija (top móvil / top desktop).
- Editor y Preview visibles simultáneamente.
- Scroll automático cuando el contenido exceda espacio.

- **Checkpoint 1 (30 min)**:
  - Barra ubicada y visible según el dispositivo.
  - Zonas claramente definidas (editor y preview).

### HU2: Generación de Preview usando Regex

"Como usuario, al hacer clic en el botón 'Generar Vista Previa', deseo que el contenido Markdown de los **Encabezados** y las **listas** del editor se transforme en HTML utilizando únicamente métodos `.replace()` y expresiones regulares."

**Criterios de Aceptación:**
- Botón funcional para generar preview.
- Transformación de encabezados y listas Markdown a HTML mediante Regex.
- El preview HTML refleja cambios al instante.

- **Checkpoint 2 (60 min)**:
  - Botón funcional generando correctamente HTML desde Markdown.
  - Ejemplos básicos de Markdown (títulos, listas).

### HU 3: Aplicar estilo dinámico a los encabezados

"Como usuario, quiero tener un botón **Contrastar Encabezados** que altere todos los encabezados generados en la vista previa HTML y se muestren automáticamente con un estilo diferenciado (color y tamaño). Al hacer clic nuevamente, debo quitar el contraste."

**Criterios de Aceptación:**  
- Debes utilizar `querySelectorAll()` para seleccionar todos los elementos de título generados (`<h1>`, `<h2>`, `<h3>`...).  
- Aplicar dinámicamente estilos específicos usando JavaScript puro, modificando propiedades del DOM.  
- Los cambios visuales deben reflejarse inmediatamente en el preview.

- **Checkpoint 3 (90 min)**:
  - Botón tipo "Toggle" funcionando.
  - Estilos aplicados vía JavaScript.

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1: Transformar contenido en negrita e itálica**
  - Usar el regex para detectar frases en negrita e itálica y convertirlos a sus elementos respectivos de HTML.

- **Logro 2: Contador de palabras/caracteres dinámico**
  - Contador actualizado automáticamente al escribir texto en el editor.

## 📝 Instrucciones de Entrega

1. **Despliegue**
   - Publica los cambios en GitHub Pages y proporciona el enlace correspondiente.

2. **Entrega Final**
   - URL del repositorio.
   - URL del proyecto desplegado en GitHub Pages.
