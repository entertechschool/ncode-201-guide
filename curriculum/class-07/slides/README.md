# Clase 07 — Objetos Literales + POO
### Code 201 · Módulo 2

---

## 🎯 Objetivo de la Clase

- Conocer los **objetos literales** (`{ key: value }`).
- Crear **funciones constructoras** con `function Movimiento() { this... }` + `new`.
- **Refactorizar el modelo**: arrays paralelos → array de objetos.
- **Primer puente JS↔HTML**: capturar input desde un formulario.

---

## 📖 Repaso del dolor de C05/C06

```javascript
let nombres = ['Salario', 'Cena'];
let valores = [3000, -45.50];   // signo = tipo
```

**Problemas:**
- 2 push sincronizados por cada movimiento.
- Si borras de uno y no del otro → desastre silencioso.
- `tipo` codificado con el signo (poco explícito).

> Hoy lo resolvemos. De verdad.

---

## 🧱 Objeto Literal

Una colección de pares `key: value` dentro de `{}`:

```javascript
let persona = {
  nombre: 'Ana',
  edad: 30,
  pais: 'Perú'
};

console.log(persona.nombre);   // 'Ana'
persona.edad = 31;             // modificar
persona.email = 'a@mail.com';  // agregar
```

* Se accede con `.` y el nombre de la propiedad.

---

## ⚡ Array vs Objeto

| Estructura | Acceso | Cuándo |
|---|---|---|
| **Array** `[a, b, c]` | Por índice `arr[0]` | Orden + colección homogénea |
| **Objeto** `{ k: v }` | Por nombre `obj.k` | Datos heterogéneos con nombres |

> Y se combinan: **array de objetos** = lo mejor de ambos.

---

## 🪄 Shorthand Property

Si la **key** se llama igual que la **variable**:

```javascript
const nombre = 'Ana';
const edad = 30;

// Forma larga
const persona1 = { nombre: nombre, edad: edad };

// Shorthand (equivalente)
const persona2 = { nombre, edad };
```

> Vas a ver esto MUCHO en código real.

---

## 🔥 El Refactor del Modelo

```javascript
// ANTES — 2 arrays paralelos
let nombres = ['Salario', 'Cena'];
let valores = [3000, -45.50];

// AHORA — array de objetos
let movimientos = [
  { nombre: 'Salario', tipo: 'ingreso', valor: 3000 },
  { nombre: 'Cena',    tipo: 'gasto',   valor: 45.50 }
];
```

* **1 push en vez de 2.**
* **`tipo` explícito** (no más signos mentales).
* **Borrar un movimiento borra todo junto.**

---

## 🛠️ Función Constructora

```javascript
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.valor = valor;
  this.fecha = new Date().toLocaleDateString();

  this.esIngreso = function() {
    return this.tipo === 'ingreso';
  };
}
```

* **Nombre en MAYÚSCULA** (convención).
* **`this.x = ...`** guarda datos.
* **`this.metodo = function() {}`** agrega comportamiento.

---

## 🏗️ Crear Instancias con `new`

```javascript
const salario = new Movimiento('Salario', 'ingreso', 3000);
const cena = new Movimiento('Cena', 'gasto', 45.50);

console.log(salario.esIngreso());   // true
console.log(cena.esIngreso());      // false
console.log(salario.fecha);         // '24/05/2026'
```

**Qué hace `new`:**
1. Crea `{}` vacío.
2. Lo asigna a `this`.
3. Ejecuta el cuerpo de la constructora.
4. Retorna `this`.

---

## ⚠️ Cuidado con `new`

```javascript
// Con new (correcto)
const m = new Movimiento('Cena', 'gasto', 45);
// m es objeto

// Sin new (INCORRECTO)
const m = Movimiento('Cena', 'gasto', 45);
// m es undefined — y contamina el this global
```

> Por eso la convención de mayúscula: te recuerda usar `new`.

---

## 🏛️ Constructora `Presupuesto`

```javascript
function Presupuesto() {
  this.movimientos = [];

  this.agregar = function(m) {
    this.movimientos.push(m);
  };

  this.saldo = function() {
    return this.movimientos
      .filter(m => m.esIngreso())
      .reduce((acc, m) => acc + m.valor, 0)
      - this.movimientos
        .filter(m => m.esGasto())
        .reduce((acc, m) => acc + m.valor, 0);
  };
}
```

* **Encapsulación**: array + métodos JUNTOS en un objeto.

---

## 🌉 Primer Puente JS ↔ HTML

```javascript
const form = document.querySelector('#form-movimiento');

form.addEventListener('submit', function(event) {
  event.preventDefault();   // sin esto, recarga la página

  const nombre = document.querySelector('#nombre').value;
  const tipo = document.querySelector('#tipo').value;
  const valor = parseFloat(document.querySelector('#valor').value);

  miPresupuesto.agregar(new Movimiento(nombre, tipo, valor));
  form.reset();
});
```

> **HTML pre-armado**. Tú solo escribes ~5-8 líneas de JS.

---

## 🧩 Conceptos DOM mínimos

| Acción | Cómo |
|---|---|
| Buscar por id | `document.querySelector('#id')` |
| Leer input | `.value` |
| Escribir texto | `.textContent` |
| Escuchar evento | `.addEventListener('submit', fn)` |
| Evitar recarga | `event.preventDefault()` |

> El DOM completo (`createElement`, render dinámico) llega en M3.

---

## ⚙️ Estructura del Lab

| Parte | Tiempo | Contenido |
|---|---|---|
| **P0** | ~15 min | Objetos literales + shorthand |
| **P1** | ~25 min | Refactor: arrays paralelos → array de objetos |
| **P2** | ~30 min | Constructoras Movimiento + Presupuesto |
| **P3** | ~35 min | Form HTML conectado al modelo OOP |

---

## 📊 ¿Qué Ganamos con OOP?

| Antes (C05/C06) | Ahora (C07) |
|---|---|
| 2 arrays paralelos | 1 array de objetos |
| Tipo como signo | Tipo explícito |
| Funciones sueltas | Métodos en el objeto |
| Estado en globales | Estado encapsulado |
| Fragilidad sincronizada | Integridad garantizada |

---

## 🔮 Lo que viene en C08

Cada instancia tiene SUS PROPIOS métodos → **memoria duplicada**.

C08: los métodos viven en el **prototipo** — compartidos entre TODAS las instancias.

```javascript
Movimiento.prototype.esIngreso = function() {
  return this.tipo === 'ingreso';
};
```

Y se construye **herencia**: `Ingreso` e `Egreso` que heredan de `Movimiento`.

---

## 🤔 Discusión Final

- ¿Qué cambió al pasar de array paralelo a array de objetos?
- ¿Por qué `tipo: 'ingreso'` es mejor que codificar con signo?
- ¿Notas cómo los métodos del objeto VIAJAN con sus datos?

> **Reflexión:** OOP NO es "lo siguiente" — es **otra forma de organizar lo mismo**. Imperativo, funcional y OOP coexisten en código real. Hoy entendiste por qué OOP existe.

---

## ¡Gracias! 🙌
### Code 201 · Enter Tech School
