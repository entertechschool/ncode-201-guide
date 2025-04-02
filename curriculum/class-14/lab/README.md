# Laboratorio 14: App State Management (Patrón Store)

Bienvenido al Laboratorio 14 del proyecto **Gestor de Plantillas para WhatsApp**. En esta sesión, comenzarás a construir el mecanismo central que gestionará los datos de tu aplicación: un **estado global controlado desde una Store**. A través de este patrón, aprenderás a estructurar el flujo de datos de forma más ordenada, escalable y predecible.

## 🎯 Objetivos de Aprendizaje

1. **Comprender el patrón de gestión de estado centralizado (Store)** y su aplicación en aplicaciones web interactivas.
2. **Implementar una Store básica en JavaScript** que permita almacenar, modificar y notificar cambios de estado.

## 🔑 Conceptos Clave

1. **Patrón de diseño**
2. **Mutabilidad vs Inmutabilidad**

## ⚙️ Setup Inicial

1. **Repositorio:**
   - Usa el repositorio `whatsapp-templates` creado en la clase anterior.
   - Crea una nueva rama `lab14-store` para este laboratorio.

2. **Estructura de Archivos:**
   Asegura la siguiente organización:
   ```
   whatsapp-templates/
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   ├── app.js
   │   └── store.js     <--- archivo para tu Store
   │   └── models/
   │       └── Template.js
   └── README.md
   ```

## 🏆 Historias de Usuario

### HU1 – Ver plantillas activas desde un único estado centralizado
> *"Como usuario, quiero ver en pantalla todas las plantillas disponibles, gestionadas desde un objeto central (store), para poder usarlas fácilmente."*

- **Criterios de Aceptación:**
  - `store.js` contiene un array `plantillas` precargado con 2 plantillas de ejemplo.
  - Al cargar la página, se muestran automáticamente en la interfaz.
  - La manipulación del DOM se hace desde una función que lee desde la Store.

- **⏱️ Checkpoint 1 (30 min):**
  🔍 **Validación:** Store está definida como objeto global o módulo, contiene un array inicial de plantillas y hay una función para leer y mostrar las plantillas.

### HU2 – Agregar una plantilla nueva al presionar "Guardar"
> *"Como usuario, quiero que al completar un formulario y presionar 'Guardar', se añada una nueva plantilla al estado y se muestre inmediatamente."*

- **Criterios de Aceptación:**
  - El formulario dispara una función que actualiza el array de `plantillas`.
  - No se muta directamente el array original: se genera uno nuevo con `.concat()` o spread operator.
  - La nueva plantilla aparece en pantalla sin recargar.

- **⏱️ Checkpoint 2 (70 min):**
  🔍 **Validación:** El formulario de nueva plantilla agrega correctamente al estado, se actualiza el DOM tras la inserción sin recargar la página y se respeta la inmutabilidad del array de plantillas.

### HU3 – Eliminar una plantilla específica desde la interfaz
> *"Como usuario, quiero poder eliminar una plantilla haciendo clic en un ícono de borrar, y que el cambio se refleje inmediatamente sin recargar la página."*

- **Criterios de Aceptación:**
  - Cada plantilla tiene un botón para eliminar.
  - Al hacer clic, se filtra el array de `plantillas` sin mutarlo.
  - La interfaz se actualiza al instante para reflejar el cambio.

- **⏱️ Checkpoint 3 (90 min):**
  🔍 **Validación:** El botón de eliminar funciona correctamente, se actualiza la vista tras eliminar una plantilla y se crea un nuevo array sin mutar el existente.

## 🌟 Logros Adicionales

- **Logro 1:** Mostrar un mensaje dinámico como "No hay plantillas guardadas" si el array de estado está vacío.

- **Logro 2:** Al eliminar una plantilla, mostrar un mensaje temporal (3 segundos) que diga "Plantilla eliminada con éxito".

## 📝 Instrucciones de Entrega

1. **Documentación en README**
   - Describe cómo implementaste el patrón Store.
   - Explica qué cambios hiciste para mantener la inmutabilidad del estado.

2. **Despliegue**
   - Publica la versión actualizada en GitHub Pages.
   - Asegúrate de usar la rama `lab14-store` para generar el despliegue.

3. **Entrega Final**
   - URL del repositorio
   - URL del proyecto desplegado en GitHub Pages

