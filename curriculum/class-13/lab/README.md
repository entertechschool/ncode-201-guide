# Laboratorio 13: Modelado de Datos y Manipulación de Texto

¡Bienvenido al primer laboratorio del **Módulo 4**! Durante las próximas 4 clases construirás un **Gestor de Plantillas para WhatsApp**: una app para crear, guardar y reutilizar mensajes. Hoy montas la base —modelar tus datos y dibujarlos en pantalla— y aprendes a **manipular texto con los métodos de String**, la habilidad que hará que tus plantillas se vean limpias y se conviertan en mensajes reales.

> ⏱️ **Checkpoints**: 4 momentos de validación (~30, ~60, ~90, ~110 min).
>
> 🧠 **Hoy NO tocamos persistencia.** Todo vive en memoria: si recargas, se pierde. Eso es a propósito — en C15 lo resolverás con `localStorage`.

## 🎯 Objetivos de Aprendizaje

1. Modelar datos con una clase (`class`) y centralizar el estado de la app en una única fuente de verdad.
2. **Generar la interfaz desde el estado** con el patrón `render()` (cambian los datos → se redibuja).
3. **Manipular texto con métodos de String**: limpiar, normalizar y transformar lo que escribe el usuario.
4. **Construir un mensaje final** sustituyendo variables dentro de una plantilla.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Estado central** | Un único objeto/lista que es la "verdad" de la app. Si algo no está ahí, no existe en pantalla. |
| **Patrón render** | Limpiar el contenedor → recorrer el estado → crear y agregar un nodo por cada dato. |
| **Métodos de String** | Un texto es un objeto con métodos: `.trim()`, `.toLowerCase()`, `.includes()`, `.replace()`, `.split()`, `.slice()`… |
| **Sustitución de variables** | Reemplazar marcadores como `{nombre}` dentro de un texto por un valor real con `.replaceAll()`. |
| **Objeto `Date`** | Representa una fecha/hora. `new Date()` da el momento actual; métodos como `.toLocaleDateString()` lo convierten en texto legible. |

## ⚙️ Setup Inicial

1. **Repositorio:** crea en GitHub un repo llamado `whatsapp-templates` y clónalo. Trabaja sobre `main`.

2. **Estructura de archivos:**
   ```
   whatsapp-templates/
   ├── index.html
   └── js/
       ├── app.js
       └── models/
           └── Template.js
   ```

3. **`index.html` base** — Tailwind por CDN (ya lo dominas de C08), un formulario y un contenedor vacío para la lista:

   ```html
   <!DOCTYPE html>
   <html lang="es">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Plantillas WhatsApp</title>
     <script src="https://cdn.tailwindcss.com"></script>
   </head>
   <body class="bg-slate-100 min-h-screen p-6">
     <h1 class="text-3xl font-bold text-center text-slate-800 mb-6">Mis Plantillas</h1>

     <!-- Dos columnas: formulario a la izquierda, tarjetas a la derecha -->
     <div class="max-w-5xl mx-auto grid gap-6 md:grid-cols-[320px_1fr]">

       <!-- Columna izquierda: formulario (no estira a lo alto con self-start) -->
       <form id="form-plantilla" class="bg-white p-4 rounded-xl shadow grid gap-2 self-start">
         <input id="titulo"  type="text" placeholder="Título"  class="p-2 border border-slate-300 rounded">
         <input id="hashtag" type="text" placeholder="hashtag" class="p-2 border border-slate-300 rounded">
         <textarea id="mensaje" rows="3" placeholder="Mensaje (usa {nombre})" class="p-2 border border-slate-300 rounded"></textarea>
         <button class="bg-emerald-600 text-white py-2 rounded">Agregar plantilla</button>
       </form>

       <!-- Columna derecha: grid de tarjetas (el JS las pinta; empieza vacío) -->
       <ul id="listaPlantillas" class="grid gap-3 sm:grid-cols-2 content-start"></ul>

     </div>

     <script src="js/models/Template.js"></script>
     <script src="js/app.js"></script>
   </body>
   </html>
   ```

   > 📌 **Convención del proyecto** (la reusarás en C14-C16): el formulario es `<form id="form-plantilla">`, la lista es `<ul id="listaPlantillas">`. No les cambies el `id`. El layout de dos columnas (formulario + grid de tarjetas) también se mantiene.

---

## 📋 Historias de Usuario

### HU1: Modelar la plantilla y centralizar el estado

> *"Como desarrollador, quiero representar cada plantilla como un objeto y guardarlas todas en una única lista, para tener un solo lugar que sea la verdad de mi app."*

**Criterios de Aceptación:**
- Cada plantilla queda representada con su **título, mensaje y hashtag**.
- Cada plantilla **registra su fecha de creación** automáticamente.
- Existe una **única lista central** que contiene todas las plantillas.
- Agregar una plantilla la **suma a esa lista** (y se puede comprobar que la lista creció).

Primero modela qué es una plantilla. En `js/models/Template.js`:

```javascript
class Template {
  constructor(titulo, mensaje, hashtag) {
    this.titulo = titulo;
    this.mensaje = mensaje;
    this.hashtag = hashtag;
    this.fecha = new Date();   // ← guarda el momento exacto de creación
  }
}
```

> 💡 **`Date`**: `new Date()` captura la fecha y hora actuales en un objeto. Por dentro guarda muchísima información; algunos métodos útiles: `.getFullYear()` (el año), `.getDate()` (el día del mes) y `.toLocaleDateString("es-PE")` (la fecha como texto legible, ej. `29/6/2026`). Hoy solo usarás `new Date()` aquí y el formato legible en la HU2.

Luego, en `js/app.js`, crea el **estado central** y una función para agregar:

```javascript
const state = { plantillas: [] };          // ← la única fuente de verdad

function agregarPlantilla(titulo, mensaje, hashtag) {
  const nueva = new Template(titulo, mensaje, hashtag);
  state.plantillas = [...state.plantillas, nueva];   // no mutamos: reasignamos
}
```

- **Checkpoint 1 (~30 min):** desde la consola llama `agregarPlantilla("Saludo", "Hola {nombre}", "ventas")` un par de veces y revisa `state.plantillas` — la lista crece.

---

### HU2: Ver las plantillas en pantalla (estado → render)

> *"Como usuario, quiero ver mis plantillas en pantalla y que aparezca la nueva apenas la agrego, sin recargar."*

**Criterios de Aceptación:**
- Todas las plantillas de la lista **aparecen en pantalla**.
- Al agregar una plantilla desde el formulario, **aparece al instante** en la lista.
- Cada plantilla muestra su **fecha de creación en formato legible**.
- La lista en pantalla refleja **exactamente** el estado: sin restos viejos ni duplicados.

La regla de oro: **cambias el estado → llamas `render()`**. Y `render()` siempre **limpia y redibuja todo** desde el estado. Aquí ya aprovechas `Date` para mostrar la fecha como texto.

```javascript
const lista = document.getElementById("listaPlantillas");

function render() {
  lista.innerHTML = "";                       // 1. limpia lo anterior
  state.plantillas.forEach(function (p) {
    const fechaTexto = p.fecha.toLocaleDateString("es-PE");   // Date → texto legible
    const li = document.createElement("li");
    li.className = "bg-white p-4 rounded-lg shadow";
    li.innerHTML = `
      <div class="flex items-start justify-between gap-2">
        <strong class="text-slate-800">${p.titulo}</strong>
        <span class="text-xs text-slate-400 shrink-0">${fechaTexto}</span>
      </div>
      <p class="text-sm text-slate-600 mt-1">${p.mensaje}</p>
      <span class="inline-block text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full mt-2">${p.hashtag}</span>`;
    lista.appendChild(li);                     // 2. agrega un nodo por dato
  });
}
```

Conecta el formulario: al enviarlo, agrega al estado y vuelve a renderizar.

```javascript
const form = document.getElementById("form-plantilla");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  agregarPlantilla(titulo.value, mensaje.value, hashtag.value);
  render();           // ← el estado cambió, redibujamos
  form.reset();
});
```

- **Checkpoint 2 (~60 min):** llena el formulario y dale "Agregar". La plantilla aparece sola en la lista, **con la fecha de hoy** en formato legible. Agrega otra: se suma sin borrar la anterior.

---

### HU3: Limpiar y normalizar el texto con métodos de String

> *"Como usuario, quiero que mis plantillas se guarden limpias y con hashtags consistentes, para que no se cuelen espacios ni campos vacíos."*

**Criterios de Aceptación:**
- Los **espacios sobrantes** al inicio y final de cada campo se eliminan.
- El **hashtag se ve siempre igual**: en minúsculas y empezando con `#` (que `Ventas`, ` ventas` y `#VENTAS` queden iguales).
- **No se puede guardar** una plantilla con título o mensaje vacíos.

Un texto es un objeto: tiene **métodos** que puedes llamarle. Aquí los aplicas a la entrada del usuario.

```javascript
function normalizarHashtag(texto) {
  const limpio = texto.trim().toLowerCase();           // sin espacios, en minúscula
  return limpio.startsWith("#") ? limpio : "#" + limpio; // asegura el #
}
```

Aplica la limpieza y valida antes de agregar:

```javascript
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const t = titulo.value.trim();
  const m = mensaje.value.trim();

  if (t.length === 0 || m.length === 0) {              // validación
    alert("Título y mensaje son obligatorios");
    return;
  }
  agregarPlantilla(t, m, normalizarHashtag(hashtag.value));
  render();
  form.reset();
});
```

- **Checkpoint 3 (~90 min):** escribe `  Ventas ` con espacios y mayúscula en el hashtag → se guarda como `#ventas`. Deja el mensaje vacío → no te deja agregar.

---

### HU4: Construir el mensaje final con variables

> *"Como usuario, quiero escribir plantillas con variables como `{nombre}` y ver una vista previa con un valor real, para reutilizar el mensaje al instante."*

**Criterios de Aceptación:**
- Una plantilla con `{nombre}` muestra una **vista previa** donde `{nombre}` fue reemplazado por un valor real.
- Si el mensaje es largo, la vista previa se muestra **recortada** (no ocupa toda la pantalla).
- Los **hashtags se muestran como etiquetas** separadas, no como un texto pegado.

Aquí está lo jugoso de la clase: **transformar texto**.

```javascript
function generarMensajeFinal(plantilla, valorNombre) {
  return plantilla.mensaje.replaceAll("{nombre}", valorNombre);  // sustituye la variable
}

function vistaPrevia(texto) {
  return texto.length > 40 ? texto.slice(0, 40) + "…" : texto;   // recorta si es largo
}
```

Úsalas dentro de `render()` para enriquecer cada `<li>`:

```javascript
const final = generarMensajeFinal(p, "Ana");
const etiquetas = p.hashtag.split(" ")                  // separa varios hashtags
  .map(h => `<span class="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">${h}</span>`)
  .join("");

li.innerHTML = `
  <div class="flex items-start justify-between gap-2">
    <strong class="text-slate-800">${p.titulo}</strong>
    <span class="text-xs text-slate-400 shrink-0">${p.fecha.toLocaleDateString("es-PE")}</span>
  </div>
  <p class="text-sm text-slate-600 mt-1">${vistaPrevia(final)}</p>
  <div class="flex gap-1 mt-2 flex-wrap">${etiquetas}</div>
`;
```

- **Checkpoint 4 (~110 min):** crea una plantilla con mensaje `Hola {nombre}, gracias por tu compra` → la vista previa muestra `Hola Ana, gracias...`. Un mensaje muy largo aparece recortado con `…`.

---

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1 — Contador de caracteres:** muestra `p.mensaje.length` en cada tarjeta (útil para WhatsApp).
- **Logro 2 — Botón Copiar:** copia el mensaje final al portapapeles con `navigator.clipboard.writeText(...)`.
- **Logro 3 — Más variables:** soporta `{nombre}` y `{producto}` encadenando `.replaceAll()`.

## 📝 Instrucciones de Entrega

1. **Documentación (`README.md`):** describe brevemente la clase `Template` y qué métodos de String usaste y para qué.
2. **Despliegue:** publica en GitHub Pages y comparte el enlace.
3. **Entrega Final:** URL del repositorio + URL del sitio desplegado.
