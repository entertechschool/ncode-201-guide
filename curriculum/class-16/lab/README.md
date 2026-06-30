# Laboratorio 16: Módulos (ESM) y Cierre del Proyecto

¡Último laboratorio del **Gestor de Plantillas para WhatsApp**! Ya tienes una app que crea, edita, ordena y persiste. Hoy la dejas **lista para mostrar** y, sobre todo, la organizas como un profesional: aprendes **módulos ESM** (`export`/`import`) para repartir tu código en archivos que se comunican entre sí. Además agregas **confirmaciones** para acciones peligrosas y un **estado vacío amigable**.

> ⏱️ **Checkpoints**: 4 momentos de validación (~30, ~60, ~90, ~110 min).
>
> 🧠 El tema nuevo de hoy son los **módulos ESM**; el resto consolida e integra para cerrar el Módulo 4.

## 🎯 Objetivos de Aprendizaje

1. Mejorar la **experiencia de usuario (UX)** con confirmaciones antes de acciones destructivas.
2. Manejar **estados vacíos** de forma clara (sin plantillas y sin resultados de búsqueda).
3. Modularizar el código con **módulos ESM** (`export` / `import`) en `state.js`, `storage.js`, `ui.js` y `app.js`.
4. Verificar la **sincronización completa** estado ↔ almacenamiento ↔ interfaz y preparar la demo.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Módulos ESM** | Dividir el código en archivos que comparten cosas con `export` y las usan con `import`. |
| **`export` / `import`** | `export` expone algo de un archivo; `import` lo trae en otro (por su ruta). |
| **`<script type="module">`** | Activa los módulos ESM: cada archivo tiene su propio ámbito (sin variables globales) y el orden de carga ya no importa. |
| **Ventana modal** | Un cuadro de confirmación propio (HTML + Tailwind) que se muestra u oculta alternando una clase. |
| **Estado vacío** | Lo que ve el usuario cuando no hay datos: un mensaje claro en vez de una pantalla en blanco. |

## ⚙️ Setup Inicial

1. **Repositorio:** continúa en `whatsapp-templates`. Crea una rama `lab16-cierre`.
2. Parte del código que ya tienes funcionando de C15 (estado, render, persistencia, filtro y orden).
3. **Importante para ESM:** los módulos **no funcionan abriendo el HTML con doble clic** (`file://`). Usa un servidor local: la extensión **Live Server** de VS Code, o `python -m http.server` en la carpeta del proyecto. En GitHub Pages funcionan sin problema.

---

## 📋 Historias de Usuario

### HU1: Confirmar antes de borrar (con un modal propio)

> *"Como usuario, quiero que me pregunten antes de eliminar, para no perder una plantilla por un clic accidental."*

**Criterios de Aceptación:**
- Al eliminar una plantilla (o al vaciar todo) aparece una **ventana de confirmación** dentro de la app.
- Si el usuario **cancela**, no se borra nada y la ventana se cierra.
- Si **acepta**, se borra, el cambio queda guardado y la ventana se cierra.

En vez del cuadro nativo del navegador, construyes tu **propio modal** con HTML y Tailwind. Agrégalo al final de `index.html` (empieza oculto con la clase `hidden`):

```html
<div id="modal" class="hidden fixed inset-0 bg-black/50 flex items-center justify-center">
  <div class="bg-white p-6 rounded-xl shadow max-w-xs text-center">
    <p id="modal-texto" class="mb-4 text-slate-700">¿Seguro?</p>
    <div class="flex gap-2 justify-center">
      <button id="modal-cancelar"  class="px-4 py-2 rounded bg-slate-200">Cancelar</button>
      <button id="modal-confirmar" class="px-4 py-2 rounded bg-red-600 text-white">Eliminar</button>
    </div>
  </div>
</div>
```

Lo muestras/ocultas alternando la clase `hidden`. Para que sirva para **cualquier** acción peligrosa, guardas qué hacer al confirmar en una variable:

```javascript
const modal = document.getElementById("modal");
let accionPendiente = null;     // qué ejecutar si el usuario acepta

function pedirConfirmacion(mensaje, accion) {
  document.getElementById("modal-texto").textContent = mensaje;
  accionPendiente = accion;
  modal.classList.remove("hidden");     // mostrar
}

document.getElementById("modal-cancelar").addEventListener("click", function () {
  modal.classList.add("hidden");        // ocultar, sin hacer nada
  accionPendiente = null;
});

document.getElementById("modal-confirmar").addEventListener("click", function () {
  if (accionPendiente) accionPendiente();   // ejecuta la acción guardada
  modal.classList.add("hidden");
  accionPendiente = null;
});
```

Ahora eliminar y vaciar **piden confirmación** pasando su acción:

```javascript
function eliminarPlantilla(id) {
  pedirConfirmacion("¿Eliminar esta plantilla?", function () {
    state.plantillas = state.plantillas.filter(plantilla => plantilla.id !== id);
    render();
  });
}

const btnVaciar = document.getElementById("btn-vaciar");
btnVaciar.addEventListener("click", function () {
  pedirConfirmacion("Esto borrará TODAS tus plantillas. ¿Continuar?", function () {
    state.plantillas = [];
    localStorage.removeItem(CLAVE);
    render();
  });
});
```

> 💡 Guardar la acción en `accionPendiente` (una **función**) hace el modal **reutilizable**: el mismo cuadro sirve para borrar una o todas. Y las confirmaciones solo valen para acciones **irreversibles** — no las pidas al agregar o editar.

- **Checkpoint 1 (~30 min):** pulsa eliminar → aparece tu modal. "Cancelar" → la plantilla sigue ahí. "Eliminar" → desaparece y, al recargar, no vuelve.

---

### HU2: Estado vacío amigable

> *"Como usuario, quiero ver un mensaje claro cuando no tengo plantillas o cuando mi búsqueda no encuentra nada, en vez de una pantalla en blanco."*

**Criterios de Aceptación:**
- Si **no hay plantillas**, se muestra un mensaje amistoso (ej. "Aún no tienes plantillas. ¡Crea la primera!").
- Si el **filtro no encuentra** coincidencias, se muestra "No se encontraron plantillas".
- Al haber datos que mostrar, la lista vuelve a la normalidad.

En `render()`, decide qué mostrar según la lista visible:

```javascript
function render() {
  const visibles = plantillasVisibles();
  lista.innerHTML = "";

  if (visibles.length === 0) {
    const vacio = state.plantillas.length === 0
      ? "Aún no tienes plantillas. ¡Crea la primera!"
      : "No se encontraron plantillas con ese filtro.";
    lista.innerHTML = `<li class="text-center text-slate-400 py-6">${vacio}</li>`;
  } else {
    visibles.forEach(/* ...crea cada <li> como siempre... */);
  }

  renderStats();
  guardar();
}
```

> 💡 Distinguimos dos vacíos distintos: "no hay nada creado" vs. "hay cosas pero el filtro no las encuentra". Un buen mensaje le dice al usuario **qué hacer**.

- **Checkpoint 2 (~60 min):** con la app vacía ves el mensaje de bienvenida; escribe un filtro que no exista → ves "No se encontraron…"; borra el filtro → vuelve la lista.

---

### HU3: Modularizar el código con ESM

> *"Como desarrollador, quiero separar mi código en módulos que se comuniquen con `import`/`export`, para que sea más mantenible y fácil de entender."*

**Criterios de Aceptación:**
- El **estado**, la **persistencia** y la **interfaz** viven en archivos distintos.
- Los archivos se comunican con `export` / `import` (sin variables globales).
- La app **sigue funcionando igual** después de modularizar.

Hasta ahora tus archivos se hablaban por **variables globales** y dependías del orden de los `<script>`. Los **módulos ESM** lo resuelven: cada archivo declara qué comparte con `export` y trae lo que necesita con `import`.

Reparte el código en cuatro archivos:

```
js/
├── models/
│   └── Template.js   # export class Template
├── state.js     # el estado + agregar/editar/eliminar/ordenar/contar
├── storage.js   # CLAVE + guardar() y cargar()  (era persistence.js)
├── ui.js        # render(), renderStats() y los listeners del DOM
└── app.js       # arranque de la app
```

En cada archivo pones `export` delante de lo que comparte (la clase `Template`, el `state`, las funciones) e `import` para traer lo que usa. Por ejemplo, `state.js` importa la clase: `import { Template } from "./models/Template.js"`.

**a) Exportar** lo que cada archivo comparte. En `storage.js` (importa `state` para seguir usando `guardar()` y `cargar()` igual que en C15):

```javascript
import { state } from "./state.js";

export const CLAVE = "whatsapp-templates";

export function guardar() {
  localStorage.setItem(CLAVE, JSON.stringify(state.plantillas));
}

export function cargar() {
  const guardado = localStorage.getItem(CLAVE);
  if (!guardado) return [];
  try { return JSON.parse(guardado); }
  catch { return []; }
}
```

**b) Importar** lo que se usa. En `ui.js` traes lo que necesitas de los otros módulos:

```javascript
import { guardar } from "./storage.js";
import { state, contarPorHashtag, plantillasVisibles } from "./state.js";

export function render() { /* ...usa state y plantillasVisibles(); al final llama guardar()... */ }
```

> 💡 El indicador `#estado` que actualizabas dentro de `guardar()` en C15 ahora vive mejor en `render()` (en `ui.js`): `guardar()` solo persiste, y la interfaz la toca `ui.js`. Esa es la idea de separar responsabilidades.

**c) Conectar todo** en `app.js`, que ahora es solo el arranque:

```javascript
import { state } from "./state.js";
import { cargar } from "./storage.js";
import { render } from "./ui.js";

state.plantillas = cargar();
render();
```

**d)** En `index.html`, **un solo** script con `type="module"` (el navegador resuelve el resto por los `import`):

```html
<script type="module" src="js/app.js"></script>
```

> 💡 Con ESM, el **orden ya no importa**: los `import` arman el rompecabezas solos. Y como cada módulo tiene su propio ámbito, se acabaron los choques de variables globales.

- **Checkpoint 3 (~90 min):** tras modularizar, la app hace **todo lo de antes** (crear, editar, eliminar, filtrar, ordenar, persistir). Si algo no carga, revisa que uses un **servidor local** (no `file://`) y que las rutas de los `import` lleven `./` y la extensión `.js`.

---

### HU4: Resumen de la colección + cierre

> *"Como usuario, quiero un resumen rápido de mi colección (total y la más reciente), para tener una vista general."*

**Criterios de Aceptación:**
- Se muestra un **resumen** calculado desde el estado (total y la plantilla más reciente).
- El resumen **se actualiza solo** ante cualquier cambio.

Calcula el resumen con una **función pura** que recibe el estado y devuelve un resultado, sin tocar el DOM ni el estado:

```javascript
function resumen(plantillas) {
  if (plantillas.length === 0) return "Sin plantillas todavía";
  const masReciente = [...plantillas].sort((a, b) => new Date(b.fecha) - new Date(a.fecha))[0];
  return `${plantillas.length} plantillas · última: "${masReciente.titulo}"`;
}
```

Muéstralo en el panel de stats dentro de `render()`.

- **Checkpoint 4 (~110 min):** el resumen refleja el total real y cambia al agregar/eliminar. Verifica el ciclo completo: crea → recarga → sigue ahí → edita → vacía con confirmación.

---

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1 — Cerrar al hacer clic fuera:** cierra el modal si el usuario hace clic en el fondo oscuro (no en el cuadro blanco).
- **Logro 2 — Mensaje "deshacer":** tras eliminar, muestra por unos segundos la opción de recuperar la última plantilla borrada.
- **Logro 3 — Filtro + orden combinados:** asegura que filtrar y ordenar funcionen a la vez sin perder el resumen.

## 📝 Cierre del Proyecto (Módulo 4)

Esta es la entrega del **proyecto integrador del Módulo 4**:

1. **Tus 2 HUs propias:** implementa al menos **2 Historias de Usuario** adicionales (cada una en su rama → Pull Request a `main`), con criterios de aceptación orientados a resultado.
2. **Documentación (`README.md`):** describe la app, la arquitectura modular con ESM (`state`/`storage`/`ui`) y cómo persistes los datos.
3. **Despliegue:** publica en GitHub Pages.
4. **Demo en vivo (máx. 10 min):** muestra el flujo completo y argumenta 2 decisiones técnicas (ver rúbrica oficial, 5 criterios × 20 pts).
