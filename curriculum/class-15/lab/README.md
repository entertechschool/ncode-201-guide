# Laboratorio 15: JSON y LocalStorage

¡Bienvenido al Laboratorio 15 del proyecto integrador **Gestor de Plantillas para WhatsApp**! En este laboratorio aprenderás cómo persistir información usando JSON y LocalStorage, integrando estos conceptos al estado centralizado del proyecto, asegurando que las plantillas estén disponibles en todo momento.

> ⏱️ **Nota sobre Checkpoints**: Este laboratorio incluye tres momentos de validación grupal a los 30, 45 y 60 minutos. Participa activamente para obtener feedback crítico y valioso.

## 🎯 Objetivos de Aprendizaje

1. Serializar y deserializar objetos JavaScript utilizando JSON para almacenar y recuperar datos desde LocalStorage.
2. Integrar técnicas de persistencia con el manejo del estado centralizado (Store).
3. Aplicar operadores ternarios para simplificar validaciones en la persistencia de datos.

## 🔑 Conceptos Clave

- **Serialización y Deserialización:** Convertir datos estructurados en texto plano (serialización) y recuperarlos nuevamente a su formato original (deserialización).
- **LocalStorage (getItem, setItem, removeItem):** API del navegador para almacenar datos localmente de forma persistente en formato clave-valor.
- **Mutabilidad vs Inmutabilidad:** Diferencia entre modificar directamente los datos existentes (mutabilidad) y generar nuevas copias para realizar cambios (inmutabilidad).
- **Operador ternario:** Operador condicional simplificado que permite escribir sentencias if-else en una sola línea.


## ⚙️ Setup Inicial

1. **Repositorio**
   - Continúa usando tu repositorio existente del proyecto integrador `whatsapp-templates`.
   - Crea una nueva rama `lab15-localstorage` para este laboratorio.

2. **Estructura de Archivos**
   Asegura la siguiente organización:
   ```
   whatsapp-templates/
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   ├── app.js
   │   └── store.js
   │   └── persistence.js (nuevo)
   │   └── models/
   │       └── Template.js
   └── README.md
   ```

3. **Configuración Base**
- Verifica que tu aplicación actualmente maneje CRUD básico en memoria (Store).
- Asegúrate de enlazar el nuevo archivo `persistence.js` en tu `index.html`.

## 🏆 Historias de Usuario

### HU1: Guardar Plantillas en LocalStorage
> _"Como usuario, deseo que mis plantillas guardadas permanezcan disponibles después de recargar o cerrar la aplicación."_

**Criterios de Aceptación:**
- Implementar función `guardarPlantillas()` que serialice las plantillas del Store y las guarde en LocalStorage.
- Llamar automáticamente a esta función tras cada acción CRUD (crear, editar o eliminar).

- **Checkpoint 1 (30 min):** Las plantillas se guardan correctamente en LocalStorage usando la serialización con JSON.

### HU2: Cargar Plantillas desde LocalStorage
> _"Como usuario, quiero que al iniciar la aplicación se carguen automáticamente las plantillas previamente guardadas."_

**Criterios de Aceptación:**
- Implementar función `cargarPlantillas()` que lea los datos desde LocalStorage y los deserialice.
- Manejar caso inicial donde LocalStorage esté vacío usando un operador ternario para inicializar adecuadamente el Store.

- **Checkpoint 2 (60 min):** Las plantillas previamente guardadas se cargan correctamente al refrescar la aplicación; usando apropiadamente el operador ternario para simplificar el código.

### HU3: Eliminar Todas las Plantillas (Función Reset)
> _"Como usuario, quiero un botón para eliminar todas las plantillas guardadas, tanto en el Store como en LocalStorage, para reiniciar fácilmente mi colección."_

**Criterios de Aceptación:**
- Crear función `resetearPlantillas()` que limpie el Store y LocalStorage.
- Integrar botón "Eliminar Todo" en la interfaz.

- **Checkpoint 3 (90 min):** Validar la eliminación correcta en ambos lugares. Tener una confirmación visual inmediata tras realizar la acción.

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1: Mensajes de Retroalimentación Visual**
  - Implementar mensajes dinámicos (toast notifications) confirmando acciones exitosas de persistencia.

- **Logro 2: Validación Robusta de JSON**
  - Validar robustamente los datos leídos desde LocalStorage, evitando fallos en caso de corrupción o modificación manual por parte del usuario.

---

## 📝 Instrucciones de Entrega

1. **Despliegue**
   - Mezcla tu rama hacia la rama `main`
   - Publica los cambios realizados en GitHub Pages.

2. **Entrega Final**
   - URL del repositorio actualizado.
   - URL del proyecto desplegado en GitHub Pages.
