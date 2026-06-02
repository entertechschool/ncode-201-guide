# Laboratorio 06: Programación Funcional + Arrow Functions

En esta clase **refactorizas el proyecto C05** usando programación funcional. El `for` que escribiste en C05 va a **desaparecer** — vas a sustituirlo por `.map()`, `.filter()`, `.find()`, `.some()`, `.reduce()` y `.forEach()`, y ordenarás datos con `.sort()`. Conoces las **arrow functions** (`=>`) — la sintaxis corta que vas a ver en TODO código JS moderno (React, Node, librerías).

> ⏱️ **Checkpoints**: 4 momentos de validación grupal (~15 min, ~50 min, ~90 min, ~140 min).

## 🎯 Objetivos de Aprendizaje

1. **Escribir arrow functions** y reconocer su equivalencia con `function`.
2. **Aplicar métodos funcionales** de Array: `.map()`, `.filter()`, `.find()`, `.some()`, `.reduce()`, `.forEach()`.
3. **Ordenar arrays** con `.sort()` y entender que **muta** el original (cómo evitarlo con copia).
4. **Identificar funciones puras** vs. funciones imperativas.
5. **Refactorizar** el `for` clásico de C05 a métodos funcionales.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Arrow function** | Sintaxis corta para funciones. `x => x * 2` equivale a `function(x) { return x * 2 }`. Útil para pasar funciones como argumento. |
| **Función pura** | Misma entrada → misma salida. **No** modifica nada fuera de sí misma. No usa `console.log`, no muta arrays externos. |
| **Inmutabilidad** | No modificar el array original. Los métodos funcionales devuelven **arrays nuevos**. |
| **`.map(fn)`** | Transforma cada elemento → nuevo array del mismo tamaño. |
| **`.filter(fn)`** | Conserva solo elementos que cumplen condición → nuevo array menor o igual. |
| **`.find(fn)`** | Retorna el **primer** elemento que cumple condición (no array). |
| **`.some(fn)`** | Retorna `true` si **al menos un** elemento cumple la condición. Devuelve booleano. |
| **`.reduce(fn, inicial)`** | Acumula los elementos en un solo valor (suma, máximo, promedio...). |
| **`.forEach(fn)`** | Ejecuta una acción por cada elemento. No retorna nada — solo efecto. |
| **`.sort(fn)`** | Ordena el array según el comparador `(a, b) => a - b`. ⚠️ **Muta** el array original. |

## ⚙️ Setup Inicial

Trabajamos sobre el mismo repositorio `personal-budget` de C05. Crea un archivo nuevo:

```
personal-budget/
├── index.html
├── app.js                  (de C05)
├── functional-utils.js     (NUEVO)
└── README.md
```

En `index.html` enlaza el nuevo archivo:

```html
<script src="functional-utils.js"></script>
<script src="app.js"></script>
```

> ⚠️ El orden importa: `functional-utils.js` se carga primero para que las funciones estén disponibles cuando `app.js` corre.

**Recordatorio del modelo de datos de C05:**

```javascript
let nombres = ['Salario', 'Cena', 'Freelance', 'Transporte'];
let valores = [3000, -45.50, 500, -30];
```

**Convención de signos**: positivo = ingreso, negativo = gasto.

> 🧪 **Datos de prueba (importante):** en C05 tu `app.js` arranca con `let valores = []` y se llena por `prompt`. Para probar las funciones de P1–P3 **sin escribir prompts cada vez**, en tu `app.js` reemplaza temporalmente esas líneas vacías por el array de ejemplo de arriba (`let valores = [3000, -45.50, 500, -30]`) y haz ahí mismo los `console.log` de prueba. Así los resultados coinciden con los comentarios de cada parte. **`functional-utils.js` solo contiene funciones — nunca declares `nombres` ni `valores` ahí** (estarían duplicados con `app.js`). En **P3.6** vuelves a dejar los arrays vacíos y reconectas el flujo real de `prompt`.

---

## Parte 0 — Arrow Functions y Funciones Puras (~15 min)

> Antes de tocar métodos de array, necesitas conocer una sintaxis nueva y un concepto que define todo el paradigma.

### 0.1 Arrow function: la forma corta de declarar funciones

Mira la equivalencia:

```javascript
// Forma "function" (la que conoces de C05 y Code 101)
function duplicar(x) {
  return x * 2;
}

// Forma "arrow function" (equivalente)
const duplicar = (x) => {
  return x * 2;
};

// Versión COMPACTA: si el cuerpo es 1 sola expresión, omites { return ... }
const duplicar = (x) => x * 2;

// Si hay 1 solo parámetro, omites los paréntesis
const duplicar = x => x * 2;
```

**Reglas de simplificación:**
| Caso | Sintaxis |
|---|---|
| 0 parámetros | `() => ...` |
| 1 parámetro | `x => ...` (sin paréntesis) |
| 2+ parámetros | `(a, b) => ...` (con paréntesis) |
| Cuerpo de 1 expresión | omite `{}` y `return` |
| Cuerpo de varias líneas | `{ ...; return X; }` |

### 0.2 ¿Cuándo se usa arrow vs `function`?

- **Arrow** → cuando la pasas como **argumento** a otra función (es el 90% de su uso). Ej: `valores.map(v => v * 2)`.
- **`function`** → cuando declaras una función con nombre que vas a llamar varias veces.

> 💡 Hoy todas las funciones que paso a `.map`, `.filter`, etc. serán arrow.

### 0.3 Función pura

Una función es **pura** si:
1. **Misma entrada → misma salida**, siempre (sin importar el contexto).
2. **No produce efectos secundarios**: no toca variables externas, no `console.log`, no mutaciones.

```javascript
// PURA
const cuadrado = x => x * x;

// IMPURA: lee variable externa
let factor = 10;
const multiplicar = x => x * factor;   // depende de `factor`

// IMPURA: produce efecto
const imprimir = x => console.log(x);   // efecto = imprimir
```

> 💡 Las funciones puras son fáciles de testear (no dependen de nada externo) y fáciles de razonar (siempre comportan igual).

✅ **Checkpoint 0 (~15 min):** sabes leer una arrow function compacta y puedes decir si una función es pura o no.

---

## Parte 1 — `.map()`, `.filter()`, `.find()` (~35 min)

> **Objetivo:** transformar y filtrar arrays sin escribir un solo `for`.

### 1.1 `.map()` — transformar cada elemento

```javascript
const valores = [3000, -45.50, 500, -30];

// Convertir todos los valores a soles (asumiendo dólares × 4)
const enSoles = valores.map(v => v * 4);
console.log(enSoles);   // [12000, -182, 2000, -120]

// El array original NO se mutó
console.log(valores);   // [3000, -45.50, 500, -30]
```

**Reglas de `.map`:**
- Devuelve un array **del mismo tamaño** que el original.
- Cada elemento se transforma con la arrow function que le pasas.
- El array original queda intacto (inmutabilidad).

### 1.2 `.filter()` — conservar solo lo que cumple

```javascript
// Solo ingresos (positivos)
const ingresos = valores.filter(v => v > 0);
console.log(ingresos);   // [3000, 500]

// Solo gastos (negativos)
const gastos = valores.filter(v => v < 0);
console.log(gastos);     // [-45.50, -30]

// Gastos grandes (mayor a 40 en valor absoluto)
const grandes = gastos.filter(g => g < -40);
console.log(grandes);    // [-45.50]
```

**Reglas de `.filter`:**
- Devuelve un array **menor o igual** al original.
- Conserva solo los elementos donde la función retorna `true`.

### 1.3 `.find()` — encontrar el primero que cumple

```javascript
// Primer gasto (no array — el VALOR directo)
const primerGasto = valores.find(v => v < 0);
console.log(primerGasto);   // -45.50

// Si no encuentra nada → undefined
const ingresoGigante = valores.find(v => v > 100000);
console.log(ingresoGigante); // undefined
```

**Diferencia clave:**
- `.filter` → array (puede estar vacío)
- `.find` → un solo elemento (o `undefined`)

### 1.4 `.some()` — ¿existe al menos uno?

A veces no quieres el elemento ni la lista — solo saber **si hay alguno** que cumple. Para eso está `.some()`, que devuelve un **booleano**:

```javascript
// ¿Hay al menos un gasto?
const hayGastos = valores.some(v => v < 0);
console.log(hayGastos);   // true

// ¿Algún movimiento supera los $1000?
const hayMontoGrande = valores.some(v => Math.abs(v) > 1000);
console.log(hayMontoGrande);   // true (3000)

// ¿Algún ingreso enorme?
const hayMillonario = valores.some(v => v > 100000);
console.log(hayMillonario);   // false
```

**Diferencia con `.find()`:**
- `.find` → te da el **elemento** (o `undefined`).
- `.some` → te da `true`/`false`. Ideal para condiciones en un `if`.

> 💡 `.some()` para en cuanto encuentra el primero que cumple — no recorre el array completo si no hace falta.

### 1.5 Aplica al proyecto

En `functional-utils.js` crea estas funciones puras:

```javascript
const obtenerIngresos = valores => valores.filter(v => v > 0);

const obtenerGastos = valores => valores.filter(v => v < 0);

const aplicarTasa = (valores, tasa) => valores.map(v => v * tasa);

const buscarPrimerGastoMayor = (valores, monto) =>
  valores.find(v => v < -monto);

const tieneGastoMayorQue = (valores, monto) =>
  valores.some(v => v < -monto);
```

Y prueba en `app.js`:

```javascript
console.log('Ingresos:', obtenerIngresos(valores));
console.log('Gastos:', obtenerGastos(valores));
console.log('En soles:', aplicarTasa(valores, 4));
console.log('Primer gasto > $40:', buscarPrimerGastoMayor(valores, 40));
console.log('¿Hay gastos > $40?:', tieneGastoMayorQue(valores, 40));
```

✅ **Checkpoint 1 (~50 min):** las 5 funciones funcionan, el array `valores` original NO cambió después de aplicar `.map()` y `.filter()`, y `tieneGastoMayorQue` devuelve `true`/`false` (no un número).

🏆 **Reto autónomo:** crea `primerIngresoSiHayGastos(valores)`: si `.some()` detecta al menos un gasto, devuelve el primer ingreso con `.find()`; si no hay gastos, devuelve `null`.

---

## Parte 2 — `.reduce()` y `.forEach()` (~40 min)

> **Objetivo:** acumular en un solo valor (saldo, máximo, promedio) y ejecutar efectos por elemento.

### 2.1 `.reduce()` — acumular en un solo valor

El `for` de C05 calculaba el saldo:

```javascript
// C05 — imperativo
let saldo = 0;
for (let i = 0; i < valores.length; i++) {
  saldo = saldo + valores[i];
}
```

En C06 es **una línea**:

```javascript
// C06 — funcional
const saldo = valores.reduce((acc, v) => acc + v, 0);
```

**Disección de `.reduce`:**

```javascript
valores.reduce((acumulador, valorActual) => nuevoAcumulador, valorInicial)
```

- **`acumulador`** → el resultado parcial que se va construyendo.
- **`valorActual`** → el elemento que se procesa en cada vuelta.
- **`valorInicial`** → con qué arranca el acumulador (aquí `0`).

Paso a paso para `[3000, -45.50, 500]` con inicial `0`:

| Vuelta | `acc` | `v` | Nuevo `acc` |
|---|---|---|---|
| 1 | 0 | 3000 | 3000 |
| 2 | 3000 | -45.50 | 2954.50 |
| 3 | 2954.50 | 500 | 3454.50 |

Resultado final: `3454.50`.

> 💡 `.reduce` es **el más poderoso** de los métodos funcionales: con él puedes sumar, contar, encontrar máximo, agrupar... Lo demás (`.map`, `.filter`) son casos especiales más legibles.

### 2.2 Funciones puras con `.reduce`

```javascript
const calcularSaldo = valores =>
  valores.reduce((acc, v) => acc + v, 0);

const totalIngresos = valores =>
  obtenerIngresos(valores).reduce((acc, v) => acc + v, 0);

const totalGastos = valores =>
  obtenerGastos(valores).reduce((acc, v) => acc + v, 0);

const valorMaximo = valores =>
  valores.reduce((max, v) => v > max ? v : max, valores[0]);
```

> 💡 **Composición**: `totalIngresos` usa `obtenerIngresos` y le aplica `.reduce`. Funciones pequeñas combinadas → funciones grandes. **Eso es composición.**

### 2.3 `.forEach()` — efecto sin retorno

Cuando solo quieres **hacer algo con cada elemento** (imprimir, registrar) sin transformar el array, usas `.forEach`:

```javascript
valores.forEach((v, i) => {
  console.log(`Movimiento ${i + 1}: ${v}`);
});
```

**Diferencia con `.map`:**
- `.map` → **retorna** un array transformado. Para hacer cosas.
- `.forEach` → **no retorna nada**. Solo ejecuta. Para efectos.

> ⚠️ `.forEach` NO es funcional puro (produce efectos), pero es la alternativa "decente" al `for` clásico cuando solo necesitas iterar para imprimir o llamar otras funciones.

### 2.4 Refactor del reporte

En `functional-utils.js`:

```javascript
const generarReporte = valores => ({
  cantidad: valores.length,
  totalIngresos: totalIngresos(valores),
  totalGastos: totalGastos(valores),
  saldo: calcularSaldo(valores),
});

const imprimirReporte = (nombres, valores) => {
  console.log('--- Resumen Final ---');
  console.log('Total movimientos:', valores.length);

  valores.forEach((v, i) => {
    const tipo = v > 0 ? 'ingreso' : 'gasto';
    console.log(`  ${i + 1}. ${nombres[i]} (${tipo}): $${Math.abs(v).toFixed(2)}`);
  });

  const reporte = generarReporte(valores);
  console.log('Total ingresos: $' + reporte.totalIngresos.toFixed(2));
  console.log('Total gastos: $' + Math.abs(reporte.totalGastos).toFixed(2));
  console.log('Saldo: $' + reporte.saldo.toFixed(2));
};
```

> 💡 **`generarReporte` es PURA** (recibe `valores`, retorna un objeto). **`imprimirReporte` es IMPURA** (`console.log` es efecto). Es buena práctica separar el cálculo (puro) del output (impuro).

> ⚠️ **Nota intencional**: `imprimirReporte` necesita `nombres` y `valores` por separado porque son **arrays paralelos**. En C07 verás cómo objetos eliminan esta torpeza.

✅ **Checkpoint 2 (~90 min):** `imprimirReporte(nombres, valores)` muestra el desglose completo con nombres, montos, totales y saldo final.

🏆 **Reto autónomo:** crea `promedioMovimiento(valores)` que retorne el promedio absoluto de los movimientos. Pista: `.reduce` para sumar abs y dividir por `length`.

---

## Parte 3 — Composición + `.sort()` + DRY (~50 min)

> **Objetivo:** combinar funciones pequeñas, ordenar arrays con `.sort()` y resolver casos reales (top N) sin repetir código.

### 3.1 Composición — funciones pequeñas combinadas

Caso real: "¿Cuál es el promedio de mis ingresos?"

```javascript
const promedioIngresos = valores => {
  const ingresos = obtenerIngresos(valores);
  if (ingresos.length === 0) return 0;
  return ingresos.reduce((acc, v) => acc + v, 0) / ingresos.length;
};
```

Esta función usa 2 funciones (filter + reduce) en cadena. Lo elegante: cada parte tiene una sola responsabilidad.

### 3.2 Refactor: usar funciones que ya tienes

```javascript
const promedioIngresos = valores => {
  const ingresos = obtenerIngresos(valores);
  if (ingresos.length === 0) return 0;
  return totalIngresos(valores) / ingresos.length;
};
```

> 💡 **Principio DRY** (Don't Repeat Yourself): si ya tienes `totalIngresos`, NO escribas el `.reduce` otra vez. Reusa.

### 3.3 `.sort()` — ordenar el array

`.sort()` ordena los elementos. Para números **siempre** le pasas un **comparador** `(a, b)`:

```javascript
const nums = [3000, -45.50, 500, -30];

// Ascendente (menor a mayor)
nums.sort((a, b) => a - b);   // [-45.50, -30, 500, 3000]

// Descendente (mayor a menor)
nums.sort((a, b) => b - a);   // [3000, 500, -30, -45.50]
```

**Regla del comparador:**
- `a - b` → **ascendente** (de menor a mayor).
- `b - a` → **descendente** (de mayor a menor).

> ⚠️ **`.sort()` MUTA el array original** — rompe la inmutabilidad que vimos en P0. A diferencia de `.map`/`.filter`, NO devuelve una copia: reordena el array sobre el que lo llamas.

```javascript
const original = [3, 1, 2];
original.sort((a, b) => a - b);
console.log(original);   // [1, 2, 3] — ¡cambió!
```

Para ordenar **sin mutar**, primero copias con el spread `[...]`:

```javascript
const ordenado = [...valores].sort((a, b) => b - a);
console.log(valores);   // intacto
console.log(ordenado);  // copia ordenada
```

> 💡 Sin comparador, `.sort()` ordena como **texto**: `[10, 2, 1].sort()` da `[1, 10, 2]` (porque `"10" < "2"`). Por eso para números SIEMPRE usa `(a, b) => a - b`.

### 3.4 `topGastos(valores, n)` — los N gastos más grandes

Combinamos lo aprendido en una función pura: filtra gastos, quita el signo, ordena de mayor a menor y toma los primeros `n`:

```javascript
const topGastos = (valores, n) =>
  [...valores]
    .filter(v => v < 0)
    .map(v => Math.abs(v))
    .sort((a, b) => b - a)
    .slice(0, n);
```

Pruébalo en `app.js`:

```javascript
console.log('Top 2 gastos:', topGastos(valores, 2));   // [45.5, 30]
```

> 💡 Empezamos con `[...valores]` (copia) para que la función sea **pura**: aunque `.sort()` muta, solo muta la copia, no el array que recibió.

### 3.5 Encadenar métodos: el chaining que ya usaste

Mira de nuevo `topGastos` — eso ES **method chaining**: el resultado de un método es la entrada del siguiente, todo en una sola expresión.

```javascript
[...valores]
  .filter(v => v < 0)    // solo gastos
  .map(v => Math.abs(v)) // quita el signo
  .sort((a, b) => b - a) // ordena de mayor a menor
  .slice(0, n);          // toma los primeros n
```

Sin chaining serían 4 variables intermedias. Ahora, si quieres la **suma** de esos top N en vez de la lista, reusa `topGastos` (DRY) y encadenas un `.reduce`:

```javascript
const sumaTopGastos = (valores, n) =>
  topGastos(valores, n).reduce((acc, v) => acc + v, 0);

console.log('Suma top 2 gastos:', sumaTopGastos(valores, 2));   // 75.5
```

> 💡 No reescribas el `filter`/`map`/`sort`: ya vive en `topGastos`. Componer funciones que ya tienes es el corazón del paradigma funcional.

### 3.6 Conecta al `app.js` final

```javascript
// app.js (versión funcional)
let nombres = [];
let valores = [];

// Captura imperativa (C05) — la mantenemos
function registrarMovimiento() {
  const nombre = prompt('Nombre del movimiento:');
  const tipo = prompt('Tipo (ingreso / gasto):');
  const monto = parseFloat(prompt('Monto:'));

  if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <= 0) {
    alert('Datos inválidos.');
    return;
  }

  const valor = tipo === 'ingreso' ? monto : -monto;
  nombres.push(nombre);
  valores.push(valor);
}

let continuar = 'si';
while (continuar === 'si') {
  registrarMovimiento();
  continuar = prompt('¿Registrar otro movimiento? (si/no):');
}

// Reporte funcional (C06) — todo del archivo functional-utils.js
imprimirReporte(nombres, valores);
console.log('Promedio de ingresos: $' + promedioIngresos(valores).toFixed(2));
```

✅ **Checkpoint 3 (~140 min):** ejecutas el flujo, registras 4 movimientos (2 ingresos, 2 gastos), y el reporte muestra cantidad, ingresos totales, gastos totales, saldo y promedio de ingresos correctos. `topGastos(valores, 2)` devuelve los 2 gastos más grandes sin mutar `valores`. Tu `functional-utils.js` tiene al menos 10 funciones puras.

🏆 **Reto autónomo:** crea `validarPresupuesto(valores, limite)` que retorne `true` si el total de gastos NO supera el límite. Pista: compara `Math.abs(totalGastos(valores))` con `limite`.

---

## 🌟 Logros Adicionales

- **Logro 1 — Estadística:** funciones `mediana`, `desviacionEstandar` sobre `valores`.
- **Logro 2 — Categorización:** función `categorizarPorMonto(valores)` que devuelva `{ bajo: [...], medio: [...], alto: [...] }`.
- **Logro 3 — `.every()`:** prima de `.some()` — crea `todosLosIngresosSuperan(valores, monto)` que devuelva `true` solo si TODOS los ingresos superan `monto`.

---

## 📝 Instrucciones de Entrega

1. **`functional-utils.js`** con al menos 10 funciones puras (incluyendo `tieneGastoMayorQue` con `.some()` y `topGastos` con `.sort()`).
2. **`app.js`** que use esas funciones para generar el reporte completo.
3. **Entrega Final:**
   - URL del repositorio en GitHub.
   - Captura de la consola con el reporte completo.
