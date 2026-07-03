# Laboratorio 14: Interacción y Datos Derivados

¡Segundo laboratorio del **Gestor de Plantillas para WhatsApp**! En C13 montaste el estado central y el `render()`. Hoy tu app se vuelve **interactiva de verdad**: vas a **eliminar y editar** plantillas, y a calcular **datos derivados** (totales y conteos) a partir del estado. La pieza nueva es la **delegación de eventos**: un solo listener que atiende los clics de muchas tarjetas.

> ⏱️ **Checkpoints**: 4 momentos de validación (~30, ~60, ~90, ~110 min).
>
> 🧠 Seguimos **sin persistencia**: todo vive en memoria. En C15 le pondrás `localStorage`.

## 🎯 Objetivos de Aprendizaje

1. Aplicar **delegación de eventos**: un único listener en el contenedor que atiende los clics de N elementos hijos.
2. Completar el **CRUD** del estado: eliminar y editar plantillas de forma inmutable.
3. Calcular **datos derivados** con funciones puras: total de plantillas y conteo por hashtag.
4. Reutilizar el patrón **estado → `render()`** para que toda la UI refleje cada cambio.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Delegación de eventos** | Poner **un solo** listener en el contenedor padre y, según en qué hijo se hizo clic (`event.target`), decidir qué hacer. |
| **`data-id`** | Atributo HTML (`data-id="..."`) para guardar el id de cada elemento y saber sobre cuál se actuó. |
| **CRUD** | Las 4 operaciones sobre datos: Crear, Leer, Actualizar (editar) y Borrar (eliminar). |
| **Función pura** | Función que recibe datos y **devuelve un resultado** sin modificar nada externo: `(estado) → resultado`. |

## ⚙️ Setup Inicial

1. **Repositorio:** continúa en `whatsapp-templates`. Crea una rama `lab14-interaccion`.

> 📌 **Convención del proyecto** (la irás aplicando en cada HU): el panel de estadísticas será `<aside id="panel-stats">`; el botón eliminar `class="btn-eliminar"` y el de editar `class="btn-editar"`, ambos con `data-id`.

---

## 📋 Historias de Usuario

### HU1: Eliminar una plantilla con delegación de eventos

> *"Como usuario, quiero eliminar una plantilla que ya no uso, para mantener mi lista ordenada."*

**Criterios de Aceptación:**
- Cada plantilla muestra un **botón eliminar**.
- Al pulsarlo, **esa** plantilla desaparece y **las demás permanecen**.
- La lista en pantalla sigue reflejando exactamente el estado.

Primero, dale un **`id` único** a cada plantilla — es lo que el botón usará para saber sobre cuál actuar. En `js/models/Template.js`:

```javascript
class Template {
  constructor(titulo, mensaje, hashtag) {
    this.id = crypto.randomUUID();   // ← id único garantizado (un texto)
    this.titulo = titulo;
    this.mensaje = mensaje;
    this.hashtag = hashtag;
    this.fecha = new Date();
  }
}
```

Ahora, en `render()`, agrega a cada tarjeta una **fila de acciones** con el botón eliminar (lleva su `data-id`). El `innerHTML` de cada `<li>` queda así:

```javascript
li.innerHTML = `
  <div class="flex items-start justify-between gap-2">
    <strong class="text-slate-800">${plantilla.titulo}</strong>
    <span class="text-xs text-slate-400 shrink-0">${plantilla.fecha.toLocaleDateString("es-PE")}</span>
  </div>
  <p class="text-sm text-slate-600 mt-1">${plantilla.mensaje}</p>
  <span class="inline-block text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full mt-2">${plantilla.hashtag}</span>
  <div class="flex gap-2 mt-3 pt-2 border-t border-slate-100">
    <button class="btn-eliminar text-xs px-2.5 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition" data-id="${plantilla.id}">Eliminar</button>
  </div>
`;
```

Ahora, en vez de poner un listener por cada botón, pones **uno solo** en la lista. Esa es la **delegación de eventos**:

```javascript
function eliminarPlantilla(id) {
  state.plantillas = state.plantillas.filter(plantilla => plantilla.id !== id);  // sin mutar: filtra
  render();
}

lista.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("btn-eliminar")) {     // ¿se hizo clic en un botón eliminar?
    const id = evento.target.dataset.id;                      // lee el data-id
    eliminarPlantilla(id);
  }
});
```

> 💡 **¿Por qué uno solo?** Las tarjetas se crean y destruyen al re-renderizar. Si pusieras un listener por botón, tendrías que volver a engancharlos cada vez. Con **un listener en el padre** que escucha los clics de los hijos, funciona siempre, sin importar cuántas tarjetas haya.

- **Checkpoint 1 (~30 min):** agrega 3 plantillas y elimina la del medio. Solo esa desaparece; las otras dos quedan intactas.

---

### HU2: Editar una plantilla existente

> *"Como usuario, quiero editar una plantilla para corregirla, sin tener que borrarla y crearla de nuevo."*

**Criterios de Aceptación:**
- Cada plantilla muestra un **botón editar**.
- Al pulsarlo, sus datos **se cargan en el formulario**.
- Al guardar, la plantilla **se actualiza en su lugar** (no se crea una nueva) y la lista muestra el cambio.

Agrega el botón editar en la fila de acciones de `render()`, **antes** del de eliminar:

```javascript
<button class="btn-editar text-xs px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition" data-id="${plantilla.id}">Editar</button>
```

Amplía el mismo listener de la lista para atender también "editar":

```javascript
lista.addEventListener("click", function (evento) {
  const id = evento.target.dataset.id;
  if (evento.target.classList.contains("btn-eliminar")) eliminarPlantilla(id);
  if (evento.target.classList.contains("btn-editar"))   cargarEnFormulario(id);
});

function cargarEnFormulario(id) {
  const plantilla = state.plantillas.find(plantilla => plantilla.id === id);
  titulo.value = plantilla.titulo;
  mensaje.value = plantilla.mensaje;
  hashtag.value = plantilla.hashtag;
  state.editandoId = id;          // recordamos que estamos editando, no creando
}
```

Y en el `submit`, decide si **actualizas** o **creas**:

```javascript
if (state.editandoId) {
  state.plantillas = state.plantillas.map(plantilla =>     // actualiza solo esa, sin mutar
    plantilla.id === state.editandoId ? { ...plantilla, titulo: tituloTexto, mensaje: mensajeTexto, hashtag: normalizarHashtag(hashtag.value) } : plantilla
  );
  state.editandoId = null;
} else {
  agregarPlantilla(tituloTexto, mensajeTexto, normalizarHashtag(hashtag.value));
}
render();
form.reset();
```

- **Checkpoint 2 (~60 min):** pulsa "Editar" en una plantilla, cambia el mensaje y guarda. Se actualiza en su sitio; no aparece una copia nueva.

---

### HU3: Estadísticas con una función pura

> *"Como usuario, quiero ver cuántas plantillas tengo y cuántas hay por hashtag, para entender mi colección de un vistazo."*

**Criterios de Aceptación:**
- Se muestra el **total** de plantillas.
- Se muestra un **conteo por hashtag**.
- Estos números **se actualizan solos** al agregar, editar o eliminar.

Un detalle de layout primero: si pones el panel suelto arriba de la lista, el grid principal (el de dos columnas) lo toma como **otra columna**. Para evitarlo, **envuelve el panel y la lista en un contenedor** — ese contenedor es tu columna derecha:

```html
<div class="grid gap-4 content-start">
  <aside id="panel-stats" class="bg-slate-100 rounded-lg p-3"></aside>
  <ul id="listaPlantillas" class="grid gap-3 sm:grid-cols-2"></ul>
</div>
```

> El buscador de la HU4 también irá **dentro** de este contenedor.

Ahora, una **función pura** recibe el estado y devuelve un resultado, sin tocar nada más:

```javascript
function contarPorHashtag(plantillas) {
  const conteo = {};                              // "caja" vacía
  plantillas.forEach(function (plantilla) {
    const elHashtag = plantilla.hashtag;
    if (conteo[elHashtag]) {
      conteo[elHashtag] = conteo[elHashtag] + 1;  // si ya existe, suma 1
    } else {
      conteo[elHashtag] = 1;                      // si es nuevo, empieza en 1
    }
  });
  return conteo;
}
```

Dibuja el panel desde esa función (con el total en negrita y cada hashtag como una etiqueta), y llámalo dentro de `render()` para mantenerlo sincronizado:

```javascript
function renderStats() {
  const total = state.plantillas.length;
  const porTag = contarPorHashtag(state.plantillas);
  const etiquetas = Object.entries(porTag)
    .map(([hashtag, cantidad]) =>
      `<span class="text-xs bg-white border border-slate-200 px-2 py-0.5 rounded-full">${hashtag} · ${cantidad}</span>`)
    .join("");
  document.getElementById("panel-stats").innerHTML = `
    <div class="flex items-center gap-2 flex-wrap">
      <span class="text-sm font-semibold text-slate-700">${total} plantilla(s)</span>
      ${etiquetas}
    </div>`;
}
```

> 💡 Agrega `renderStats();` al final de `render()`. Como todo pasa por `render()`, las estadísticas nunca quedan desactualizadas.

- **Checkpoint 3 (~90 min):** agrega plantillas con hashtags repetidos (ej. dos `#ventas`) → el panel muestra `3 plantilla(s)` y las etiquetas `#ventas · 2`, `#soporte · 1`. Elimina una y los números bajan solos.

---

### HU4: Filtrar por hashtag (la lista reacciona)

> *"Como usuario, quiero filtrar mis plantillas por hashtag, para encontrar rápido la que necesito."*

**Criterios de Aceptación:**
- Al escribir un hashtag en el buscador, la lista muestra **solo** las plantillas que coinciden.
- Al borrar el texto, **vuelven todas**.
- El filtrado ocurre **al instante** mientras escribes.

Agrega un buscador **dentro del contenedor de la derecha** (el mismo `<div>` de la HU3), encima del panel:

```html
<input id="buscador" type="text" placeholder="Filtra por hashtag…"
       class="w-full p-2 border border-slate-300 rounded-lg">
```

Calcula **qué mostrar** con una función derivada (reutiliza `.includes()` y `.toLowerCase()` de C13):

```javascript
function plantillasVisibles() {
  const filtroTexto = (state.filtro ?? "").toLowerCase();
  if (filtroTexto === "") return state.plantillas;
  return state.plantillas.filter(plantilla => plantilla.hashtag.toLowerCase().includes(filtroTexto));
}
```

Ahora, en tu `render()`, **recorre `plantillasVisibles()` en vez de `state.plantillas`** — ese es el único cambio:

```javascript
function render() {
  lista.innerHTML = "";
  plantillasVisibles().forEach(function (plantilla) {   // ← antes: state.plantillas.forEach
    // ...crea el <li> igual que en HU1/HU2 (título, fecha, mensaje, botones)...
    lista.appendChild(li);
  });
  renderStats();   // las stats siguen calculándose sobre el total real
}
```

Por último, conecta el buscador para que guarde el filtro en el estado y redibuje:

```javascript
document.getElementById("buscador").addEventListener("input", function (evento) {
  state.filtro = evento.target.value;   // el filtro vive en el estado
  render();                             // mismo render, datos distintos
});
```

- **Checkpoint 4 (~110 min):** escribe `vent` → quedan solo las `#ventas`; borra el texto → vuelven todas. (Nota: las estadísticas siguen contando el total real, no solo lo filtrado.)

---

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1 — Cancelar edición:** muestra un botón "Cancelar" que limpia el formulario y pone `state.editandoId = null`.
- **Logro 2 — Hashtag más usado:** con `contarPorHashtag`, calcula y muestra cuál hashtag tiene más plantillas.
- **Logro 3 — Confirmar al eliminar:** muestra un aviso simple antes de borrar (en C16 lo convertirás en un modal propio de confirmación).

## 📝 Instrucciones de Entrega

1. **Documentación (`README.md`):** explica cómo implementaste la delegación de eventos y para qué sirve tu función `contarPorHashtag`.
2. **Despliegue:** publica en GitHub Pages y comparte el enlace.
3. **Entrega Final:** URL del repositorio + URL del sitio desplegado.
