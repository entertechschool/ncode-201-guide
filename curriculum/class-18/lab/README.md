# Lab 18: Sprint 1 — HU1 a HU4

## 🎯 Objetivos

1. Construir el esqueleto HTML semántico de la Agenda de Gastos Compartidos.
2. Aplicar estilos CSS responsivos para las tres zonas principales.
3. Implementar las HU1-HU4 conectando DOM, estado y LocalStorage.

---

## 🔑 Conceptos Clave

- **Estado central** - Un objeto `state` con `{ grupo, personas, gastos }` es la única fuente de verdad.
- **Render** - Función que dibuja el DOM a partir del estado. Si el estado cambia, se vuelve a renderizar.
- **Delegación de eventos** - Un solo listener en el contenedor que maneja clicks de todos los items internos.

---

## ⚙️ Setup Inicial

Continuación del Lab 17. Verifica:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Repositorio clonado localmente | `git pull origin main` funciona sin errores |
| ☐ | `index.html` carga sin errores en consola | Live Server + F12 → Console |
| ☐ | Estructura `css/` y `js/` creada | `js/state.js`, `js/storage.js`, etc. existen |
| ☐ | Tu `SPRINTS.md` a la vista | Sabes qué 4 HU atacas hoy |

> ⚠️ Si no terminaste el Lab 17, dedica los primeros 15 minutos a ponerte al día. No avances sin el setup.

---

## Parte 1: HTML semántico y estilos base (45 min)

### 1.1 Estructura el `index.html`

Reemplaza el placeholder "En construcción…" por la estructura base. Nota los comentarios: esos son los **gaps** que debes completar.

> 💡 **Recordatorio:** El patrón `<form>` + `<label for>` + `<input required>` lo viste en C01 (forms accesibles) y lo validaste con `type/pattern/minlength` en C04. Aquí lo orquestas en una app real.

```html
<body>
  <header>
    <h1>💸 Agenda de Gastos Compartidos</h1>
    <p id="nombreGrupo"><!-- Aquí irá el nombre del grupo activo --></p>
  </header>

  <main>
    <section id="seccionGrupo" aria-label="Gestión del grupo">
      <!-- Formulario para crear grupo + input para nombre -->
      <!-- Completa: botón "Nuevo grupo" que dispara el flujo -->
    </section>

    <section id="seccionPersonas" aria-label="Integrantes">
      <h2>Integrantes</h2>
      <!-- Formulario para agregar persona (input + botón) -->
      <!-- Completa: el input debe tener un id único -->
      <ul id="listaPersonas"><!-- Render dinámico --></ul>
    </section>

    <section id="seccionGasto" aria-label="Registrar gasto">
      <h2>Registrar gasto</h2>
      <form id="formGasto">
        <!-- Completa los inputs: descripción (text), monto (number min=0.01), pagó (select) -->
        <!-- Completa los checkboxes dinámicos para "entre quiénes se divide" -->
        <button type="submit">Registrar</button>
      </form>
    </section>

    <section id="seccionGastos" aria-label="Gastos del grupo">
      <h2>Gastos</h2>
      <ul id="listaGastos"><!-- Render dinámico --></ul>
    </section>
  </main>

  <script src="js/state.js"></script>
  <script src="js/storage.js"></script>
  <script src="js/ui.js"></script>
  <script src="js/app.js"></script>
</body>
```

> 💡 **Tip:** Usar `<section>` con `aria-label` hace tu app accesible sin esfuerzo extra.

### 1.2 Estilos base en `css/styles.css`

Aplica un layout responsivo. Recomendación: mobile-first con Flexbox o Grid.

> 💡 **Recordatorio:** Las **CSS Variables** (`:root { --primary }`) son el patrón que refactorizaste en C04. Aquí defines las del proyecto.

```css
/* Variables de tema */
:root {
  --primary: /* elige un color principal */;
  --bg: /* fondo claro */;
  --text: /* texto principal */;
  --danger: /* rojo para errores y deudores */;
  --success: /* verde para acreedores */;
}

* { box-sizing: border-box; }

body {
  font-family: /* sans-serif legible */;
  margin: 0;
  padding: 1rem;
  background: var(--bg);
  color: var(--text);
}

main {
  display: /* grid o flex, tu decisión */;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}

/* Completa: estilos para section, form, listas */
/* Completa: breakpoint para pantallas > 768px si usas mobile-first */
```

✅ **Checkpoint:** Abres `index.html` y ves las 4 secciones (Grupo, Integrantes, Registrar gasto, Gastos) con separación visual clara. Se ve usable en mobile (narrow) y desktop (ancho).

---

## Parte 2: Estado central y persistencia (60 min)

### 2.1 Define el estado en `js/state.js`

```javascript
// Estado central — única fuente de verdad
const state = {
  grupo: {
    nombre: /* ¿string vacío o null? elige */,
    personas: [],   // array de strings con nombres
    gastos: []      // array de objetos Gasto
  }
};

// Clase ES6 para modelar un gasto (del Módulo 4)
class Gasto {
  constructor(descripcion, monto, pagadoPor, divididoEntre) {
    this.id = /* ¿cómo generas un id único? Date.now() es válido */;
    this.descripcion = descripcion;
    this.monto = /* convierte a número aquí */;
    this.pagadoPor = pagadoPor;
    this.divididoEntre = divididoEntre;
    this.fecha = new Date().toISOString();
  }
}
```

### 2.2 Funciones de LocalStorage en `js/storage.js`

```javascript
const STORAGE_KEY = 'gastos-compartidos-v1';

function guardarEstado() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    // ¿Qué haces si LocalStorage falla? Piensa.
    console.error('No se pudo guardar:', error);
  }
}

function cargarEstado() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return; // primera vez, estado queda como está
    const parsed = JSON.parse(raw);
    // Completa: reemplaza las propiedades de state con las de parsed
    state.grupo = /* ¿qué asignas? */;
  } catch (error) {
    // Si el JSON está corrupto, ¿qué hacemos?
    console.warn('Estado corrupto, empezando de cero');
    localStorage.removeItem(STORAGE_KEY);
  }
}
```

✅ **Checkpoint:** Abres la consola del navegador, ejecutas `guardarEstado()` y luego miras en `Application → LocalStorage` que existe la clave `gastos-compartidos-v1` con un JSON válido.

---

## Parte 3: HU1 a HU4 funcionando (75 min)

### 3.1 HU1 + HU2: Crear grupo y agregar personas (`js/ui.js` + `js/app.js`)

```javascript
// js/ui.js
function renderGrupo() {
  const titulo = document.getElementById('nombreGrupo');
  titulo.textContent = /* muestra el nombre del grupo o un placeholder si no hay */;
}

function renderPersonas() {
  const lista = document.getElementById('listaPersonas');
  lista.innerHTML = ''; // limpia antes de redibujar
  state.grupo.personas.forEach((persona) => {
    const li = document.createElement('li');
    li.textContent = persona;
    // Completa: agrega un botón × con data-persona="{nombre}" para eliminar
    lista.appendChild(li);
  });
}
```

```javascript
// js/app.js (punto de entrada)
function iniciar() {
  cargarEstado();
  renderGrupo();
  renderPersonas();
  // Completa: conecta eventos del formulario de grupo y personas
}

document.addEventListener('DOMContentLoaded', iniciar);
```

> 💡 **Tip:** Después de cada cambio al estado → `guardarEstado()` → `renderX()`. Siempre ese orden.

### 3.2 HU3: Registrar gasto

Conecta el formulario `#formGasto`:

```javascript
const form = document.getElementById('formGasto');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // 1. Lee descripción, monto, pagadoPor, divididoEntre (checkboxes seleccionados)
  // 2. Valida: monto > 0, descripción no vacía, al menos 1 persona en divididoEntre
  // 3. Si todo OK, crea new Gasto(...) y hazle state.grupo.gastos.push
  // 4. guardarEstado() + renderGastos() + form.reset()
});
```

### 3.3 HU4: Listar gastos

```javascript
function renderGastos() {
  const lista = document.getElementById('listaGastos');
  lista.innerHTML = '';
  if (state.grupo.gastos.length === 0) {
    lista.innerHTML = '<li class="vacio">Aún no hay gastos registrados</li>';
    return;
  }
  // Ordena del más reciente al más antiguo — ¿qué propiedad usas?
  const ordenados = [...state.grupo.gastos].sort(/* completa */);
  ordenados.forEach((gasto) => {
    const li = document.createElement('li');
    // Completa: muestra descripción, monto, quién pagó, entre quiénes, fecha legible
    lista.appendChild(li);
  });
}
```

✅ **Checkpoint:** Creas un grupo "Viaje a Máncora", agregas 3 personas, registras 2 gastos, recargas la página, y todo sigue ahí. La consola no tiene errores.

---

## 📁 Estructura del Proyecto al Cierre

```
gastos-compartidos/
├── index.html          # Con las 4 secciones completas
├── css/
│   └── styles.css      # Responsivo con Flexbox/Grid
├── js/
│   ├── state.js        # state + clase Gasto
│   ├── storage.js      # guardarEstado + cargarEstado
│   ├── ui.js           # renderGrupo, renderPersonas, renderGastos
│   ├── balance.js      # (vacío, para Sprint 2)
│   └── app.js          # iniciar() + listeners
├── README.md           # Actualizado con HU1-HU4 marcadas como hechas
└── .gitignore
```

---

## 📝 Entrega

### Checklist

- [ ] HU1: puedes crear un grupo con nombre.
- [ ] HU2: puedes agregar y eliminar personas.
- [ ] HU3: puedes registrar un gasto con validaciones.
- [ ] HU4: puedes ver la lista de gastos ordenada.
- [ ] Al recargar la página, todo persiste.
- [ ] Al menos 3 commits pusheados a GitHub.
- [ ] Sin errores en la consola del navegador.

### Qué entregar

- **Link a tu repositorio** con los commits del Sprint 1.
- **Screenshot** de tu app con al menos 1 grupo, 3 personas y 2 gastos visibles.

---

> ### 💡 Consejos
>
> - Codea una HU completa antes de pasar a la siguiente. No empieces las 4 en paralelo.
> - Usa `console.log(state)` seguido a seguido. Ver el estado es la mejor forma de entender qué está pasando.
> - Si el render se ve raro, problema casi siempre es olvidaste `renderX()` después de modificar el estado.
> - Los commits pequeños y frecuentes te salvan cuando algo se rompe. Puedes volver atrás con `git checkout`.
