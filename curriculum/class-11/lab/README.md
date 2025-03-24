# Laboratorio 11: Event Handling Básico en JavaScript

¡Bienvenido al laboratorio 11 del proyecto integrador **Editor Avanzado de Markdown en Vivo**! En este laboratorio profundizaremos en la captura y gestión básica de eventos utilizando JavaScript puro para crear una interfaz dinámica e interactiva, mejorando significativamente la experiencia del usuario.

## 🎯 Objetivos de Aprendizaje

1. Capturar eventos básicos del DOM usando JavaScript puro.
2. Implementar manejadores de eventos que modifiquen el DOM dinámicamente.

## 🔑 Conceptos Clave

1. **Event Listener:** Método para registrar eventos en elementos específicos.
2. **Event Object:** Objeto generado automáticamente por el navegador que contiene información sobre el evento ocurrido.
3. **Callback:** Función que se ejecuta en respuesta a un evento registrado, gestionando dinámicamente los cambios en la interfaz.

## ⚙️ Setup Inicial

1. **Repositorio**  
   - Continúa usando tu repositorio existente: `markdown-editor`.  
   - Crea una nueva rama para esta clase llamada `lab11-event-handling`.

2. **Archivos y estructura inicial**

Tu proyecto debe seguir esta estructura:
```
markdown-editor/
├── index.html
├── css/
│ └── styles.css
├── js/
│ └── app.js
└── README.md
```

3. **Contenido base:**
- Asegúrate de tener una estructura HTML semántica clara (`header`, `main`, `footer`).
- Continúa usando Tailwind CSS o CSS propio para el diseño.

## 📋 Historias de Usuario

### HU1: Mostrar Preview al Escribir
> *"Como usuario, quiero que la vista previa del Markdown se actualice automáticamente mientras escribo en el editor, sin necesidad de pulsar un botón adicional."*

- **Checkpoint 1 (30 min):**  Actualización automática del preview al escribir.
- **Criterios de Aceptación:**
  - La vista previa se actualiza automáticamente cada vez que se escribe o modifica texto en el editor.
  - No debe requerir interacción adicional (botones o clics).

### HU2: Botón Limpiar Editor
> *"Como usuario, necesito un botón para limpiar rápidamente todo el contenido del editor y la vista previa generada, facilitando empezar un nuevo documento desde cero."*

- **Checkpoint 2 (60 min):** Botón de limpiar editor funcionando correctamente.
- **Criterios de Aceptación:**
  - Al hacer clic en el botón "Limpiar", tanto el editor como la vista previa deben quedar vacíos inmediatamente.

### HU3: Contador dinámico de palabras y caracteres
> *"Como usuario, deseo visualizar en tiempo real el conteo de palabras y caracteres escritos en el editor, permitiéndome mantener control sobre la extensión del texto."*

- **Checkpoint 3 (90 min):**  Contador dinámico de palabras y caracteres operativo.
- **Criterios de Aceptación:**
  - El contador se actualiza en tiempo real mostrando palabras y caracteres mientras el usuario escribe.

## 🌟 Logros Adicionales (Opcionales)

### Logro 1: Menú desplegable para elegir temas (light/dark)
> *"Como usuario, quiero seleccionar desde un menú desplegable un tema claro u oscuro para mejorar mi experiencia visual mientras trabajo."*

## 📝 Instrucciones de Entrega

1. **Mezcla de Ramas**  
   - Genera un Pull Request de tu nueva rama hacia `main`.
   - Mezcla las ramas.

2. **Despliegue**  
   - Actualiza tu versión en GitHub Pages.

3. **Entrega Final**  
   - URL del repositorio
   - URL del proyecto desplegado
