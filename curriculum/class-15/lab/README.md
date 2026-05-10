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

### HU4: Carga segura desde LocalStorage con `try/catch/finally`

> _"Como usuario, quiero que la app no se rompa si LocalStorage tiene datos corruptos, no existe la clave aún, o el JSON es malformado por manipulación manual."_

> ⚠️ **Esta HU EVOLUCIONA la `cargarPlantillas()` de HU2** — no es una función paralela. Reemplaza el cuerpo de la función que creaste en HU2 por el bloque `try/catch/finally` de abajo. El operador ternario de HU2 queda absorbido por la validación `if (!raw) return [];` dentro del `try`.

Refuerzo de `finally` aplicado en C12 (M3), ahora en el contexto de persistencia.

#### Sub-pasos

4.1. Asegúrate que `index.html` tenga un indicador de estado:

```html
<p id="estado">Listo</p>
```

4.2. Modifica `cargarPlantillas()` para envolver la deserialización en `try/catch/finally`:

```javascript
function cargarPlantillas() {
  document.getElementById('estado').textContent = 'Cargando...';

  try {
    const raw = localStorage.getItem('plantillas');
    if (!raw) {
      return [];  // primera vez: no hay datos, no es un error
    }
    const plantillas = JSON.parse(raw);
    if (!Array.isArray(plantillas)) {
      throw new Error('Formato de datos corrupto');
    }
    return plantillas;
  } catch (error) {
    console.error('Error al cargar plantillas:', error);
    alert('Datos corruptos. Empezando de cero.');
    localStorage.removeItem('plantillas');
    return [];
  } finally {
    document.getElementById('estado').textContent = 'Listo';
  }
}
```

4.3. **Verifica los 3 escenarios** desde la consola del navegador:

- **Primera vez** (LocalStorage vacío): `localStorage.clear()`, recarga → retorna array vacío, sin error, indicador termina en "Listo".
- **Datos válidos:** agrega plantillas, recarga → carga normalmente, indicador "Listo".
- **Datos corruptos:** ejecuta `localStorage.setItem('plantillas', 'no-es-json')` en la consola, recarga → catch atrapa, alert se muestra, app sigue viva, indicador "Listo".

✅ **Checkpoint HU4:** simula los 3 escenarios. La app **no se rompe en ninguno**. La UI siempre termina en estado consistente.

> 💡 **Para M5 HU8:** este patrón es exactamente lo que el proyecto final exige textualmente — *"El acceso a LocalStorage está envuelto en try/catch"*. Aquí lo aprendiste; en M5 lo aplicas.

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
