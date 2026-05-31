# Laboratorio 07: Objetos Literales + Programación Orientada a Objetos

En esta clase resuelves el dolor de los **2 arrays paralelos** de C05/C06. Aprendes **objetos literales** (`{ key: value }`) y **funciones constructoras** (`function Movimiento() { this.x = ... }`). Refactorizas el proyecto **Gestor de Presupuesto Personal** para que cada movimiento sea un objeto rico — y al final conectas todo con un **formulario HTML** (primer puente JS↔HTML del curso).

> ⏱️ **Checkpoints**: 4 momentos de validación grupal (~25 min, ~65 min, ~95 min, ~125 min).

## 🎯 Objetivos de Aprendizaje

1. **Crear objetos literales** con `{ key: value }` y leer/escribir propiedades con `obj.prop`.
2. **Implementar funciones constructoras** con `function Constructor() {}` + `this` + `new`.
3. **Refactorizar** el modelo de 2 arrays paralelos a UN array de objetos.
4. **Conectar JS con HTML** capturando inputs de un form (primer puente JS↔HTML).

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Objeto literal** | Colección de pares `key: value` declarada con `{}`. `let p = { nombre: 'Ana', edad: 30 }` |
| **Acceso a propiedad** | `obj.prop` para leer o escribir. `p.nombre` → `'Ana'`. `p.edad = 31` modifica. |
| **Shorthand property** | Si la key es igual al nombre de la variable, escribes solo una vez: `{ nombre }` equivale a `{ nombre: nombre }`. |
| **Función constructora** | Función que crea objetos cuando se llama con `new`. Por convención su nombre arranca en mayúscula. |
| **`this`** | Dentro de una constructora, `this` apunta al objeto que se está creando. |
| **`new`** | Operador que invoca la constructora y devuelve el objeto recién creado. |
| **Método** | Función adentro de un objeto. Se llama con `obj.metodo()`. |
| **DOM básico** | `document.querySelector('#id')` para encontrar un elemento + `.value` para leer su contenido. |
| **`event.preventDefault()`** | Evita que el navegador recargue al hacer submit del form. |

## ⚙️ Setup Inicial

Seguimos en el mismo repo `personal-budget`. Nuevo archivo:

```
personal-budget/
├── index.html
├── app.js
├── functional-utils.js     (de C06)
├── oop-objects.js          (NUEVO)
└── README.md
```

En `index.html` enlaza el nuevo archivo:

```html
<script src="oop-objects.js"></script>
<script src="functional-utils.js"></script>
<script src="app.js"></script>
```

---

## Parte 0 — Objetos Literales (~15 min)

> **Objetivo:** entender la sintaxis y mecánica básica de objetos antes de tocar constructoras.

### 0.1 Sintaxis de objeto literal

Un **objeto literal** agrupa datos relacionados como pares `key: value`:

```javascript
let persona = {
  nombre: 'Ana',
  edad: 30,
  pais: 'Perú'
};

console.log(persona.nombre);   // 'Ana'
console.log(persona.edad);     // 30
```

* `{}` declara un objeto.
* Cada propiedad es `key: value` separadas por **coma**.
* Se accede con `.` y el nombre de la propiedad.

### 0.2 Leer y modificar propiedades

```javascript
persona.nombre = 'Beatriz';       // modificar
persona.email = 'b@mail.com';     // agregar propiedad nueva
console.log(persona);
// { nombre: 'Beatriz', edad: 30, pais: 'Perú', email: 'b@mail.com' }
```

> 💡 Diferencia clave con arrays: en arrays accedes por **índice** (`arr[0]`); en objetos accedes por **nombre de propiedad** (`obj.nombre`).

### 0.3 Shorthand property (azúcar sintáctica)

Cuando la **key** y el **nombre de la variable** son iguales, puedes escribirlo solo una vez:

```javascript
const nombre = 'Ana';
const edad = 30;

// Forma larga
const persona1 = { nombre: nombre, edad: edad };

// Shorthand (equivalente)
const persona2 = { nombre, edad };
```

Vas a ver esto MUCHO en código real.

### 0.4 Array de objetos

Puedes meter objetos dentro de un array:

```javascript
const personas = [
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Carlos', edad: 25 }
];

console.log(personas[0].nombre);  // 'Ana'
console.log(personas[1].edad);    // 25
```

> 💡 **Combinación poderosa**: un array de objetos te da lo mejor de los dos mundos — orden + nombres descriptivos. **Esto es lo que va a reemplazar los arrays paralelos.**

✅ **Checkpoint 0 (~15 min):** sabes declarar objetos literales, acceder a propiedades con `.`, usar shorthand, y leer un array de objetos.

---

## Parte 1 — Refactor del modelo: arrays paralelos → array de objetos (~25 min)

> **Objetivo:** eliminar el dolor de C05/C06. Los 2 arrays paralelos se convierten en UN array de objetos.

### 1.1 Lado a lado: el antes y el después

```javascript
// ANTES (C05/C06) — 2 arrays paralelos, frágiles
let nombres = ['Salario', 'Cena'];
let valores = [3000, -45.50];

// AHORA (C07) — 1 array de objetos, integridad garantizada
let movimientos = [
  { nombre: 'Salario', tipo: 'ingreso', valor: 3000 },
  { nombre: 'Cena', tipo: 'gasto', valor: 45.50 }
];
```

**Ganancias inmediatas:**
- **Una sola estructura** que mantener (no 2, no 3).
- **`tipo` es explícito** — ya no codificamos ingreso/gasto con el signo del número.
- **Si borras un movimiento, borras todo junto** — imposible desincronizar.
- **Los nombres ahora viajan con su valor** — `movimientos[5].nombre` y `movimientos[5].valor` están unidos para siempre.

### 1.2 Reescribe `registrarMovimiento()` para usar objetos

En `app.js`, modifica la captura. Usa **shorthand** donde puedas:

```javascript
let movimientos = [];

function registrarMovimiento() {
  const nombre = prompt('Nombre del movimiento:');
  const tipo = prompt('Tipo (ingreso / gasto):');
  const valor = parseFloat(prompt('Monto:'));

  if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(valor) || valor <= 0) {
    alert('Datos inválidos.');
    return;
  }

  // 1 push en vez de 2. Shorthand para nombre, tipo, valor.
  movimientos.push({ nombre, tipo, valor });
}
```

> 💡 **Compara con C05**: antes hacías `nombres.push(nombre)` + `valores.push(valor)` con conversión de signo. Ahora: **un solo `push`**, y `tipo` es explícito.

### 1.3 Refactor de las funciones funcionales de C06

Tus funciones funcionales ahora pueden filtrar/buscar **por cualquier propiedad**:

```javascript
const obtenerIngresos = movs => movs.filter(m => m.tipo === 'ingreso');

const obtenerGastos = movs => movs.filter(m => m.tipo === 'gasto');

const buscarPorNombre = (movs, texto) =>
  movs.find(m => m.nombre.toLowerCase().includes(texto.toLowerCase()));

const totalIngresos = movs =>
  obtenerIngresos(movs).reduce((acc, m) => acc + m.valor, 0);

const totalGastos = movs =>
  obtenerGastos(movs).reduce((acc, m) => acc + m.valor, 0);

const calcularSaldo = movs => totalIngresos(movs) - totalGastos(movs);
```

> 💡 Ahora `.filter(m => m.tipo === 'ingreso')` es legible — no necesitamos la convención de signos. El objeto **dice explícitamente** qué tipo es.

✅ **Checkpoint 1 (~40 min):** tu `movimientos` es array de objetos. Registras 3 movimientos con `prompt` y la consola muestra `[{ nombre, tipo, valor }, ...]`. Las funciones de filtro funcionan por `m.tipo`.

🏆 **Reto autónomo:** crea `agruparPorTipo(movs)` que devuelva `{ ingresos: [...], gastos: [...] }` usando `.reduce`.

---

## Parte 2 — Funciones Constructoras (~30 min)

> **Objetivo:** crear objetos con un "tipo personalizado" — `Movimiento` — usando función constructora + `new` + `this`.

### 2.1 ¿Para qué constructoras si ya tengo objetos literales?

Hasta ahora cada movimiento es `{ nombre, tipo, valor }` escrito a mano. Pero ¿qué pasa si:
- Quiero que **todo movimiento tenga una fecha automática**?
- Quiero que **cada movimiento sepa decir si es ingreso** (sin tener que recordar la lógica afuera)?
- Quiero que **crear un movimiento sea una sola línea reutilizable**?

Para eso existen las **funciones constructoras**: un molde que crea objetos consistentes con datos + comportamiento.

### 2.2 Tu primera constructora

En `oop-objects.js`:

```javascript
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.valor = valor;
  this.fecha = new Date().toLocaleDateString();

  this.esIngreso = function() {
    return this.tipo === 'ingreso';
  };

  this.esGasto = function() {
    return this.tipo === 'gasto';
  };
}
```

**Reglas de constructora:**
- **Nombre en MAYÚSCULA** (`Movimiento`, no `movimiento`) — convención que la marca como constructora.
- **`this.propiedad = valor`** dentro del cuerpo guarda datos en el objeto que se crea.
- **`this.metodo = function() {...}`** agrega comportamiento al objeto.

### 2.3 Crear instancias con `new`

```javascript
const salario = new Movimiento('Salario', 'ingreso', 3000);
const cena = new Movimiento('Cena', 'gasto', 45.50);

console.log(salario.nombre);       // 'Salario'
console.log(salario.fecha);        // '24/05/2026' (fecha de hoy)
console.log(salario.esIngreso());  // true
console.log(cena.esGasto());       // true
```

**Qué hace `new`:**
1. Crea un objeto vacío `{}`.
2. Lo asigna a `this`.
3. Ejecuta el cuerpo de la constructora (que llena `this` con propiedades y métodos).
4. Retorna `this`.

> ⚠️ **Sin `new`**, la constructora no funciona. `Movimiento('Salario', 'ingreso', 3000)` (sin `new`) NO retorna un objeto — retorna `undefined`. Y peor, contamina el `this` global.

### 2.4 Constructora `Presupuesto` que gestiona los movimientos

```javascript
function Presupuesto() {
  this.movimientos = [];

  this.agregar = function(movimiento) {
    this.movimientos.push(movimiento);
  };

  this.totalIngresos = function() {
    return this.movimientos
      .filter(m => m.esIngreso())
      .reduce((acc, m) => acc + m.valor, 0);
  };

  this.totalGastos = function() {
    return this.movimientos
      .filter(m => m.esGasto())
      .reduce((acc, m) => acc + m.valor, 0);
  };

  this.saldo = function() {
    return this.totalIngresos() - this.totalGastos();
  };

  this.resumen = function() {
    return {
      cantidad: this.movimientos.length,
      totalIngresos: this.totalIngresos(),
      totalGastos: this.totalGastos(),
      saldo: this.saldo()
    };
  };
}
```

> 💡 **Encapsulación**: `Presupuesto` tiene SU array de movimientos Y los métodos que operan sobre ellos, todos juntos. Antes el array estaba "suelto" en una global; ahora vive dentro del objeto. Es el alma de OOP.

### 2.5 Prueba el modelo completo

```javascript
const miPresupuesto = new Presupuesto();
miPresupuesto.agregar(new Movimiento('Salario', 'ingreso', 3000));
miPresupuesto.agregar(new Movimiento('Cena', 'gasto', 45.50));
miPresupuesto.agregar(new Movimiento('Freelance', 'ingreso', 500));

console.log(miPresupuesto.resumen());
// { cantidad: 3, totalIngresos: 3500, totalGastos: 45.50, saldo: 3454.50 }
```

✅ **Checkpoint 2 (~70 min):** creas 3 instancias de `Movimiento` y las agregas a una instancia de `Presupuesto`. `miPresupuesto.resumen()` devuelve un objeto con cantidad, totales y saldo correctos.

🏆 **Reto autónomo:** agrega un método `formatear()` al constructor `Movimiento` que retorne un string como `"Salario: +$3000"` para ingresos o `"Cena: -$45.50"` para gastos.

---

## Parte 3 — Primer puente JS ↔ HTML (~35 min)

> **Objetivo:** capturar input desde un formulario HTML real (no más `prompt`). Es el primer puente entre tu código y la página.
>
> ⚠️ El HTML del form viene **pre-armado** en el template del lab. **No modifiques el HTML** — concéntrate en escribir ~5-8 líneas de JS nuevas.

### 3.1 Template HTML pre-armado

En `index.html` (ya incluido en el repo template del lab) tienes:

```html
<form id="form-movimiento">
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" required>

  <label for="tipo">Tipo</label>
  <select id="tipo" required>
    <option value="">Selecciona</option>
    <option value="ingreso">Ingreso</option>
    <option value="gasto">Gasto</option>
  </select>

  <label for="valor">Monto</label>
  <input type="number" id="valor" min="0.01" required>

  <button type="submit">Agregar</button>
</form>

<p>Saldo total: <span id="saldo-total">0</span></p>
```

> 💡 Reconoces este patrón: form accesible de C01 + validación nativa de C04.

### 3.2 Conceptos DOM nuevos (mínimos)

| Concepto | Para qué |
|---|---|
| **`document.querySelector('#id')`** | Encuentra un elemento por su `id`. Devuelve el elemento (o `null` si no existe). |
| **`.value`** | Lee (o escribe) el contenido de un input/select. |
| **`.textContent`** | Lee/escribe el texto adentro de cualquier elemento. |
| **`element.addEventListener('evento', fn)`** | Llama `fn` cuando ocurra el evento (`'click'`, `'submit'`, etc.). |
| **`event.preventDefault()`** | Evita el comportamiento por defecto del navegador (en submit: recargar la página). |

### 3.3 Conecta el form al modelo OOP

En `app.js` después de definir `Presupuesto`:

```javascript
const form = document.querySelector('#form-movimiento');
const saldoSpan = document.querySelector('#saldo-total');
const miPresupuesto = new Presupuesto();

form.addEventListener('submit', function(event) {
  event.preventDefault();   // sin esto, la página recarga

  const nombre = document.querySelector('#nombre').value;
  const tipo = document.querySelector('#tipo').value;
  const valor = parseFloat(document.querySelector('#valor').value);

  const movimiento = new Movimiento(nombre, tipo, valor);
  miPresupuesto.agregar(movimiento);

  saldoSpan.textContent = '$' + miPresupuesto.saldo().toFixed(2);

  console.log('Agregado:', movimiento);
  console.log('Estado:', miPresupuesto.movimientos);

  form.reset();   // limpia el form
});
```

### 3.4 Prueba en navegador

1. Abre `index.html` en navegador.
2. Abre DevTools (F12 → Console).
3. Llena el form 3 veces (1 ingreso, 2 gastos) y haz submit cada vez.
4. Verifica:
   - El `saldo-total` se actualiza en pantalla.
   - La consola muestra el array `miPresupuesto.movimientos` con todas las instancias.
   - Cada movimiento es **una instancia de `Movimiento`** (tiene `nombre`, `tipo`, `valor`, `fecha`, `esIngreso()`, `esGasto()`).
   - El form se limpia después de cada envío.

✅ **Checkpoint 3 (~105 min):** cada submit del form crea una nueva instancia de `Movimiento` y la agrega al `Presupuesto`. El saldo en pantalla se actualiza solo.

🏆 **Reto autónomo:** agrega validación pre-instancia: si el `tipo` no es válido o el `valor` es 0 o negativo, **no agregues** y muestra `alert`. Pista: condición antes de crear el `new Movimiento(...)`.

> 📝 **Lo que NO haces aquí:** `createElement`, lista dinámica de `<li>`, eventos múltiples (delete, edit). Eso es M3. Aquí: solo capturar input y actualizar UN texto.

---

## ⭐ Logros Adicionales

- **Logro 1 — Lista en pantalla:** después de cada submit, muestra el nombre y monto del movimiento en un `<ul>` ya pre-armado en el HTML. Pista: `ul.innerHTML += '<li>...</li>'` (en M3 verás la forma correcta con `createElement`).
- **Logro 2 — Validación con `esValido()`:** agrega un método `esValido()` al constructor `Movimiento` que retorne `true/false` validando todos sus campos. Refactoriza el listener del form para usarlo.
- **Logro 3 — Alerta de gastos:** método `verificarLimites()` en `Presupuesto` que alerte cuando gastos superen 80% de ingresos.

---

## 📝 Instrucciones de Entrega

1. **`oop-objects.js`** con `Movimiento` y `Presupuesto`.
2. **`app.js`** con el listener del form conectado al modelo.
3. **README.md** con:
   - Explicación breve del refactor: ¿qué era array paralelo, qué es ahora array de objetos?
   - Lista de propiedades y métodos de cada constructora.
   - **Reflexión obligatoria:** *Compara cómo eliminabas un movimiento en C05 (2 splices) con cómo lo harías ahora (1 splice sobre array de objetos). ¿Es más seguro? ¿Por qué?*
4. **Entrega Final:**
   - URL del repositorio.
   - URL de GitHub Pages funcional.
   - Captura del form + consola con 3 movimientos creados como instancias.

---

## 🔮 Lo que viene en C08

Cada instancia de `Movimiento` que creas hoy tiene SUS PROPIOS métodos (`esIngreso`, `esGasto`) — eso es **memoria duplicada**. Si creas 1000 movimientos, son 1000 copias del mismo `esIngreso()`. En C08 vas a aprender **prototipos**: una forma de **compartir** métodos entre todas las instancias usando memoria una sola vez. Además crearás subtipos `Ingreso` e `Egreso` que heredan de `Movimiento`.

> Y en M4 verás que la sintaxis `class` de ES6 es **azúcar sobre prototipos**. Lo que escribes hoy es la base real.
