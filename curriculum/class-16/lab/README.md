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

### HU3: Eliminar con delegación de eventos + confirmación
> _"Como usuario, quiero hacer clic en el botón de eliminar de cualquier plantilla y recibir una confirmación antes de borrar. Como desarrollador, quiero usar UN solo listener para todos los botones de eliminar — no uno por cada uno."_

**Concepto clave — Delegación de eventos:** en vez de poner un listener por cada botón, ponemos UN solo listener en el contenedor de la lista. Cuando el click sucede, `event.target` nos dice cuál botón fue presionado.

> ⚠️ **Prerequisito:** esta HU asume que tu clase `Template` (C13) tiene una propiedad `id` única para identificar cada plantilla. Si NO la tenías como una de las 2 propiedades adicionales, agrégala ahora en el constructor:
>
> ```javascript
> class Template {
>   constructor(titulo, mensaje, hashtag, /* ...tus 2 propiedades */) {
>     this.id = Date.now() + Math.random();  // genera id único
>     this.titulo = titulo;
>     this.mensaje = mensaje;
>     this.hashtag = hashtag;
>     // ...
>   }
> }
> ```

#### Sub-pasos

3.1. En `app.js`, agrega UN listener al contenedor:

```javascript
document.querySelector('#listaPlantillas').addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-eliminar')) {
    const id = event.target.dataset.id;
    const confirmar = confirm('¿Eliminar esta plantilla?');
    if (confirmar) {
      const nuevasPlantillas = store.getState().plantillas.filter(p => p.id !== id);
      store.setState({ plantillas: nuevasPlantillas });
    }
  }
});
```

3.2. Asegúrate que cada botón renderizado tenga clase `btn-eliminar` y `data-id` con el ID:

```javascript
// dentro de renderizarPlantillas:
li.innerHTML = `
  ${p.titulo}
  <button class="btn-eliminar" data-id="${p.id}">Eliminar</button>
`;
```

3.3. Verifica:
- Agrega 5 plantillas. Elimina 2. Solo se eliminan las correctas.
- En DevTools (F12 → Elements → Event Listeners en el `<ul>`), confirma que **NO hay 5 listeners de click — hay 1 solo en el `<ul>`**.

**Checkpoint 3 [90'] - Criterios de Aceptación:**
  - Un solo listener controla N botones (verificable en DevTools).
  - Confirmación previa (`confirm()`) antes de eliminar.
  - Eliminación efectiva en Store (y LocalStorage gracias al subscribe del HU1).

✅ **Checkpoint visual:** si agregas 100 plantillas, sigues teniendo **1 solo listener**.

> 💡 **Para M5:** en la Agenda de Gastos vas a tener listas dinámicas de personas, gastos y transferencias. Con delegación, no necesitas agregar listeners cada vez que renderizas — el contenedor los maneja todos.

---

## Cierre — Bonus: Cálculo sobre estado (~15 min)

> Este bloque NO es una HU obligatoria. Es **preparación crítica para M5** (cálculo de balances, transferencias, totales). Si la clase se pasa de tiempo, queda como tarea autónoma post-clase.

Hasta ahora aprendiste a **GUARDAR** y **SINCRONIZAR** estado. Ahora vas a **CALCULAR** sobre el estado — patrón que vas a necesitar masivamente en M5.

### Patrón base

Recibes un estado y produces un resultado derivado. **Usamos solo propiedades obligatorias de `Template`** (titulo, mensaje, hashtag) para que el cálculo funcione independientemente de las 2 propiedades adicionales que cada alumno eligió en C13:

```javascript
function calcularEstadisticas(state) {
  const plantillas = state.plantillas;

  if (plantillas.length === 0) {
    return { total: 0, masLarga: null, porHashtag: {} };
  }

  return {
    total: plantillas.length,
    masLarga: plantillas.reduce((max, p) =>
      p.mensaje.length > max.mensaje.length ? p : max,
      plantillas[0]
    ),
    porHashtag: plantillas.reduce((acc, p) => {
      acc[p.hashtag] = (acc[p.hashtag] || 0) + 1;
      return acc;
    }, {})
  };
}
```

### Aplicación al proyecto

#### Sub-pasos del bonus

C.1. Agrega al `index.html` un contenedor para las estadísticas:

```html
<aside id="panel-stats"></aside>
```

C.2. Implementa `calcularEstadisticas(state)` con al menos 3 cálculos:
- Total de plantillas
- Plantilla con **mensaje** más largo (usa la propiedad obligatoria `mensaje`)
- Cantidad de plantillas **agrupadas por hashtag** (usa la propiedad obligatoria `hashtag`)

C.3. Crea `renderizarEstadisticas(state)` y suscríbela al store:

```javascript
function renderizarEstadisticas(state) {
  const stats = calcularEstadisticas(state);
  const panel = document.querySelector('#panel-stats');
  panel.innerHTML = `
    <p>Total: ${stats.total}</p>
    <p>Más larga: ${stats.masLarga?.titulo || '—'}</p>
    <p>Por hashtag: ${JSON.stringify(stats.porHashtag)}</p>
  `;
}

store.subscribe(renderizarEstadisticas);
```

C.4. Cada vez que agregues/elimines una plantilla, las estadísticas se **recalculan automáticamente** gracias al `subscribe`.

✅ **Checkpoint:** agrega 5 plantillas con distintas categorías. El panel muestra el conteo actualizado en tiempo real **sin que llames a `renderizarEstadisticas` manualmente**.

### Por qué importa para M5

En M5 vas a calcular:
- **Balance** de cada persona (cuánto pagó vs cuánto le toca pagar).
- **Algoritmo greedy de transferencias mínimas** que saldan el grupo.
- Total gastado, gasto promedio, etc.

Todos esos cálculos siguen el mismo patrón: `función pura(state) → resultado derivado`. Hoy lo viste con plantillas; en M5 lo aplicarás a gastos.

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
