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

### HU0 – Implementar el Store completo

> **Objetivo:** crear un objeto `store` que centralice el estado de las plantillas y **notifique a los suscriptores** cuando cambie. Es el patrón base que vas a reutilizar en M5.

#### Sub-pasos

0.1. Crea `js/store.js`:

```javascript
const store = {
  state: { plantillas: [] },
  listeners: [],

  getState() {
    return this.state;
  },

  setState(newState) {
    this.state = newState;
    this.notify();
  },

  subscribe(listener) {
    this.listeners.push(listener);
  },

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }
};
```

0.2. En `app.js`, suscribe la función de renderizado al store:

```javascript
function renderizarPlantillas(state) {
  const lista = document.querySelector('#listaPlantillas');
  lista.innerHTML = '';
  state.plantillas.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p.titulo;
    lista.appendChild(li);
  });
}

store.subscribe(renderizarPlantillas);
```

0.3. Para agregar o eliminar plantillas, **siempre** usa `store.setState({ ...store.state, plantillas: nuevasPlantillas })`. La función `setState` automáticamente notifica a los suscriptores y re-renderiza.

✅ **Checkpoint HU0:** abre DevTools (F12). Agrega 3 plantillas vía `store.setState(...)` desde la consola. La lista en pantalla se actualiza **sin que llames a `renderizarPlantillas` manualmente** — el `subscribe` lo hace.

> 💡 **Nota para M5:** En el proyecto final puedes elegir entre el Store COMPLETO (subscribe/notify, más limpio) o una versión simplificada (cambio → guardar → render manual). Ambas son válidas. La simplificada es más fácil de seguir; la completa escala mejor. **Decisión profesional consciente.**

---

### HU1 – Ver plantillas activas desde un único estado centralizado
> *"Como usuario, quiero ver en pantalla todas las plantillas disponibles, gestionadas desde un objeto central (store), para poder usarlas fácilmente."*

- **Criterios de Aceptación:**
  - **Reemplaza** el `state` inicial de HU0 por uno con 2 plantillas de ejemplo precargadas:

    ```javascript
    state: {
      plantillas: [
        new Template('Saludo', '¡Hola!', '#bienvenida'),
        new Template('Despedida', '¡Hasta pronto!', '#chao')
      ]
    }
    ```
  - Al cargar la página, las 2 plantillas se muestran automáticamente en la interfaz **gracias al `subscribe` de HU0** (recuerda llamar `renderizarPlantillas(store.getState())` una vez en el arranque para el primer render).
  - La manipulación del DOM se hace desde una función que lee desde la Store.

- **⏱️ Checkpoint 1 (30 min):**
  🔍 **Validación:** Store está definida como objeto global o módulo, contiene un array inicial de plantillas y hay una función para leer y mostrar las plantillas.

### HU2 – Agregar una plantilla nueva al presionar "Guardar"
> *"Como usuario, quiero que al completar un formulario y presionar 'Guardar', se añada una nueva plantilla al estado y se muestre inmediatamente."*

- **Criterios de Aceptación:**
  - El formulario dispara una función que invoca `store.setState({ ...store.getState(), plantillas: [...store.getState().plantillas, nueva] })`.
  - No se muta directamente el array original: se genera uno nuevo con spread operator.
  - La nueva plantilla aparece en pantalla sin recargar **gracias al `subscribe` de HU0**.

- **⏱️ Checkpoint 2 (70 min):**
  🔍 **Validación:** El formulario de nueva plantilla agrega correctamente al estado, se actualiza el DOM tras la inserción sin recargar la página y se respeta la inmutabilidad del array de plantillas.

### HU3 – Eliminar una plantilla específica desde la interfaz
> *"Como usuario, quiero poder eliminar una plantilla haciendo clic en un ícono de borrar, y que el cambio se refleje inmediatamente sin recargar la página."*

- **Criterios de Aceptación:**
  - Cada plantilla tiene un botón para eliminar.
  - Al hacer clic, se filtra el array y se pasa el nuevo array a `store.setState(...)`. Sin mutaciones directas.
  - La interfaz se actualiza al instante **gracias al `subscribe` de HU0** — no llamas a renderizar manualmente.

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

