# Laboratorio 13: Modelado de Objetos y Estado

¡Bienvenido al primer laboratorio del proyecto integrador **Gestor de Plantillas para WhatsApp**! En este laboratorio aprenderás a crear objetos utilizando la sintaxis moderna `class` en JavaScript y a gestionar estados locales y globales, preparándote para manejar aplicaciones más complejas de forma organizada.

## 🎯 Objetivos de Aprendizaje

1. Comprender y aplicar la sintaxis moderna de clases (`class`) en JavaScript como alternativa a las funciones constructoras, identificando claramente su equivalencia.
2. Comprender el concepto de estado en aplicaciones, diferenciando claramente entre estado local y estado global.

## 🔑 Conceptos Clave

- **Clases**
- **Estado**
- **Estado Local vs Estado Global**

## ⚙️ Setup Inicial

1. **Repositorio**
   - Crea un nuevo repositorio llamado `whatsapp-templates` en GitHub y clónalo en tu máquina local.

2. **Estructura de Archivos:**
   ```
   whatsapp-templates/
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   ├── app.js
   │   └── models/
   │       └── Template.js
   └── README.md
   ```

3. **Configuración Base:**
   - En `index.html`, crea una estructura semántica básica (`header`, `main`, `footer`).
   - En `styles.css`, establece estilos iniciales básicos.

## 🏆 Historias de Usuario

### HU1: Crear clase Template
> *"Como desarrollador, quiero crear una clase `Template` utilizando la sintaxis moderna (`class`) en JavaScript, que tenga tres propiedades predefinidas (título, mensaje, hashtag) y dos propiedades adicionales definidas por mí, para representar consistentemente objetos plantilla."*

- **Criterios de Aceptación:**
  - Clase Template correctamente definida usando sintaxis `class`.
  - Constructor inicializa al menos tres propiedades dadas (título, mensaje, hashtag) y dos adicionales elegidas por el desarrollador.

- **⏱️ Checkpoint 1 (30 min):**
  🔍 **Validación:** Clase creada correctamente con las propiedades definidas.

### HU2: Gestionar plantillas en estado global
> *"Como desarrollador, quiero crear y gestionar múltiples plantillas en un array global para representar el estado global de la aplicación."*

- **Criterios de Aceptación:**
  - Existencia clara de un array global para almacenar plantillas.
  - Funciones claras para añadir y eliminar plantillas del estado global.

- **⏱️ Checkpoint 2 (60 min):**
  🔍 **Validación:** Array global funcional para añadir y eliminar plantillas.

### HU3: Renderizar plantillas mostrando estado local y global
> *"Como usuario, quiero visualizar en pantalla las plantillas con sus valores de estado local (ej. hashtags) y el estado global (lista general)."*

- **Criterios de Aceptación:**
  - Método `render` en Template muestra claramente el estado local.
  - Función global de renderizado muestra claramente todas las plantillas almacenadas.

- **⏱️ Checkpoint 3 (90 min):**
  🔍 **Validación:** Renderización dinámica funcional, mostrando diferenciación clara entre estado local y global.

## 🌟 Logros Adicionales (Opcionales)

### HU4: Modo Grilla
> "Como usuario, quiero tener la opción de ver las plantillas en forma de grilla o lista, con un estado adicional en la aplicación."

## 📝 Instrucciones de Entrega

1. **Documentación en README:**
   - 👉 Descripción técnica de las propiedades y métodos de la clase `Template` implementada.

2. **Despliegue:**
   - Publica el proyecto actualizado en GitHub Pages.

3. **Entrega Final:**
   - URL del repositorio.
   - URL del proyecto desplegado en GitHub Pages.

