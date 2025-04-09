# Laboratorio 16: Persistencia y Sincronización

¡Bienvenido al cuarto laboratorio del proyecto integrador **Gestor de Plantillas para WhatsApp**! En esta sesión aprenderás a integrar técnicas avanzadas de persistencia utilizando `LocalStorage`, asegurando que la información del usuario permanezca sincronizada en tiempo real con la interfaz visual.

> ⏱️ **Nota sobre Checkpoints**: Este laboratorio incluye tres momentos de validación grupal (a los 30, 60 y 80 minutos). Es importante mantenerse al día con estos checkpoints para aprovechar el feedback y las discusiones grupales.

## 🎯 Objetivos de Aprendizaje

1. Implementar técnicas para persistir datos localmente utilizando `LocalStorage`, asegurando la integridad y recuperación eficiente de estos.
2. Gestionar la sincronización dinámica del estado local con la interfaz visual (UI).

## 🔑 Conceptos Clave

1. **Persistencia:** Técnicas para almacenar datos de manera duradera en el navegador utilizando mecanismos como `LocalStorage`, permitiendo la conservación de la información entre sesiones.
2. **Sincronización:** Proceso que asegura la actualización inmediata y automática entre el almacenamiento local, el estado centralizado y la interfaz visual del usuario.
3. **Experiencia de Usuario (UX):** Buenas prácticas para proporcionar retroalimentación clara y prevenir errores durante operaciones críticas como eliminación de datos.

## ⚙️ Setup Inicial

1. **Repositorio**
   - Continúa trabajando en el repositorio existente: `whatsapp-templates`.
   - Crea una nueva rama: `lab16-persistencia-sync`.

2. **Estructura de Archivos**
   Asegura la siguiente organización:

   ```
   whatsapp-templates/
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   ├── app.js
   │   ├── store.js
   │   ├── persistence.js
   │   └── models/
   │       └── Template.js
   └── README.md
   ```

3. **Configuración Base**
- Verifica que la aplicación maneje actualmente CRUD básico utilizando el Store.
- Asegúrate de enlazar y usar correctamente `persistence.js`.

## 🏆 Historias de Usuario

### HU1: Guardado automático al editar plantillas
> _"Como usuario, quiero que cualquier cambio que realice en mis plantillas se guarde automáticamente en LocalStorage, para evitar perder información en caso de que olvide guardar manualmente."_

**Checkpoint 1 [30'] - Criterios de Aceptación:**
  - Guardado automático al editar cualquier campo.
  - Información persiste tras recargar la página.
  - Mensaje visual confirma guardado automático.

### HU2: Sincronización instantánea del Store y UI
> _"Como usuario, deseo que la interfaz visual refleje inmediatamente los cambios al estado de las plantillas (crear, editar o eliminar), para mantener siempre coherente la información que veo en pantalla."_

**Checkpoint 2 [60'] - Criterios de Aceptación:**
  - Interfaz actualiza inmediatamente tras operación CRUD.
  - No requiere refresco manual de la página.
  - Consistencia visual inmediata con el Store.

### HU3: Confirmación previa al eliminar plantilla
> _"Como usuario, quiero recibir una advertencia o confirmación antes de eliminar definitivamente una plantilla, para evitar borrar plantillas por error."_

**Checkpoint 3 [90'] - Criterios de Aceptación:**
  - Ventana o mensaje de confirmación previo.
  - Elimina plantilla solo tras confirmación.
  - Eliminación efectiva en LocalStorage y Store.

## 🌟 Logros Adicionales

- **Logro 1: Mensaje de estado de almacenamiento**  
  "Como usuario, quiero ver claramente un indicador del estado actual de mis datos almacenados, para sentir confianza en el guardado automático."

- **Logro 2: Botón de recuperación rápida**  
  "Como usuario, deseo contar con un botón sencillo que permita recuperar rápidamente la última plantilla eliminada accidentalmente."

## 📝 Instrucciones de Entrega

1. **Documentación en README**
   - Agrega una breve explicación sobre cómo implementaste la sincronización y persistencia.

2. **Despliegue**
   - Publica la versión actualizada en GitHub Pages.

3. **Entrega Final**
   - URL del repositorio.
   - URL del proyecto desplegado.
