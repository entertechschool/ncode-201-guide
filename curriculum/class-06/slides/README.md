# Clase 06 — Programación Funcional + Arrow Functions
### Code 201 · Módulo 2

---

## 🎯 Objetivo de la Clase

- Conocer las **arrow functions** (`=>`).
- Aplicar métodos funcionales: `.map`, `.filter`, `.find`, `.some`, `.reduce`, `.forEach`.
- Ordenar con `.sort()` y entender que **muta** el array.
- Refactorizar el `for` de C05 en **una sola línea**.
- Entender qué es una **función pura**.

---

## 📖 Repaso de C05

```javascript
// El for que escribimos para calcular saldo:
let saldo = 0;
for (let i = 0; i < valores.length; i++) {
  saldo = saldo + valores[i];
}
```

Hoy lo reemplazamos por:

```javascript
const saldo = valores.reduce((acc, v) => acc + v, 0);
```

> Una línea. Misma lógica. Pero hay 2 conceptos nuevos: arrow + reduce.

---

## ➡️ Arrow Function — la forma corta

```javascript
// Forma "function" (la que conoces)
function duplicar(x) {
  return x * 2;
}

// Forma arrow function (equivalente)
const duplicar = x => x * 2;
```

* Sin `function`, sin `{}`, sin `return`.
* `x => x * 2` = "recibe x, devuelve x * 2".

> Se usa MUCHO como argumento de otros métodos.

---

## 🪄 Reglas de la flecha

| Caso | Sintaxis |
|---|---|
| 0 parámetros | `() => ...` |
| 1 parámetro | `x => ...` (sin paréntesis) |
| 2+ parámetros | `(a, b) => ...` |
| Cuerpo 1 expresión | omite `{}` y `return` |
| Cuerpo multilínea | `{ ...; return X; }` |

```javascript
const sumar = (a, b) => a + b;
const saludar = () => console.log('Hola');
const formatear = v => `$${v.toFixed(2)}`;
```

---

## ✨ Función Pura

Una función es **pura** si:
1. **Mismo input → mismo output**, siempre.
2. **No produce efectos** (no `console.log`, no muta variables externas).

```javascript
// PURA
const cuadrado = x => x * x;

// IMPURA — depende de variable externa
let factor = 10;
const escalar = x => x * factor;
```

> Las puras son fáciles de testear: no dependen de nada externo.

---

## 🔄 `.map()` — Transformar

```javascript
const valores = [3000, -45.50, 500, -30];

const enSoles = valores.map(v => v * 4);
// [12000, -182, 2000, -120]

// El array original NO se mutó:
console.log(valores); // [3000, -45.50, 500, -30]
```

* Devuelve un array del **mismo tamaño**.
* Cada elemento se transforma con la función que pasas.

---

## 🔍 `.filter()` — Filtrar

```javascript
const ingresos = valores.filter(v => v > 0);
// [3000, 500]

const gastos = valores.filter(v => v < 0);
// [-45.50, -30]
```

* Devuelve un array **menor o igual**.
* Conserva solo donde la función retorna `true`.

---

## 🎯 `.find()` — Buscar el primero

```javascript
const primerGasto = valores.find(v => v < 0);
// -45.50 (NO array — el valor directo)

const enorme = valores.find(v => v > 100000);
// undefined (no encontró)
```

* `.filter` → array
* `.find` → un elemento (o `undefined`)

---

## ❓ `.some()` — ¿existe al menos uno?

```javascript
const hayGastos = valores.some(v => v < 0);
// true

const hayMillonario = valores.some(v => v > 100000);
// false
```

* Devuelve un **booleano** (`true`/`false`).
* `.find` te da el elemento; `.some` solo dice **si existe**.

> Ideal para condiciones en un `if`.

---

## 🔥 `.reduce()` — El más poderoso

```javascript
const saldo = valores.reduce((acc, v) => acc + v, 0);
```

| Vuelta | acc | v | nuevo acc |
|---|---|---|---|
| 1 | 0 | 3000 | 3000 |
| 2 | 3000 | -45.50 | 2954.50 |
| 3 | 2954.50 | 500 | 3454.50 |
| 4 | 3454.50 | -30 | 3424.50 |

> Suma, máximo, agrupar, contar... TODO se puede con reduce.

---

## 🔁 `.forEach()` — Efecto sin retorno

```javascript
valores.forEach((v, i) => {
  console.log(`Movimiento ${i + 1}: ${v}`);
});
```

| Método | Retorna | Para |
|---|---|---|
| `.map` | array | transformar |
| `.forEach` | nada | efectos (imprimir, llamar otras funciones) |

> `.forEach` es la alternativa "decente" al `for` cuando solo iteras.

---

## 🧬 Composición — funciones pequeñas combinadas

```javascript
const obtenerIngresos = v => v.filter(x => x > 0);

const totalIngresos = v =>
  obtenerIngresos(v).reduce((acc, x) => acc + x, 0);

const promedioIngresos = v => {
  const ing = obtenerIngresos(v);
  return ing.length === 0 ? 0 : totalIngresos(v) / ing.length;
};
```

> Funciones pequeñas → funciones grandes. **DRY** en acción.

---

## ↕️ `.sort()` — Ordenar

```javascript
const nums = [3000, -45.50, 500, -30];

nums.sort((a, b) => a - b);   // ascendente
nums.sort((a, b) => b - a);   // descendente
```

* Comparador: `a - b` sube, `b - a` baja.
* ⚠️ **`.sort()` MUTA** el original (a diferencia de `.map`/`.filter`).
* Para no mutar: `[...valores].sort(...)`.

> Sin comparador ordena como TEXTO: `[10, 2].sort()` → `[10, 2]` mal.

---

## 🔗 Method Chaining

```javascript
const topGastos = (valores, n) =>
  [...valores]
    .filter(v => v < 0)
    .map(v => Math.abs(v))
    .sort((a, b) => b - a)
    .slice(0, n);
```

* El resultado de un método es la entrada del siguiente.
* `[...valores]` mantiene la función **pura** (sort solo muta la copia).
* Sin chaining serían 4 variables intermedias.

---

## ⚙️ Estructura del Lab

| Parte | Tiempo | Contenido |
|---|---|---|
| **P0** | ~15 min | Arrow functions + funciones puras |
| **P1** | ~35 min | `.map` · `.filter` · `.find` · `.some` |
| **P2** | ~40 min | `.reduce` · `.forEach` + reporte |
| **P3** | ~50 min | Composición + `.sort` + `topGastos` + DRY |

---

## ⚠️ Nota intencional del modelo

Los métodos funcionales se aplican sobre `valores` (array de números).

Cuando necesitamos cruzar con `nombres`, lo hacemos manualmente con index:

```javascript
valores.forEach((v, i) => console.log(nombres[i], v));
```

> En C07 cuando volvamos a `[{ nombre, valor }]`, este awkwardness desaparece.

---

## 📊 Trade-offs Funcional vs Imperativo

### ✅ Ventajas funcional
- Menos código, más legible.
- No muta — predecible.
- Funciones puras → testeables.

### ⚠️ Limitaciones
- Curva de aprendizaje (sobre todo `reduce`).
- Para operaciones que SÍ tienen efecto (DOM, fetch), sigues necesitando imperativo.

---

## 🔮 Lo que viene en C07 (OOP)

Los 2 arrays paralelos se vuelven UN solo array de objetos:

```javascript
let movimientos = [
  { nombre: 'Salario', tipo: 'ingreso', valor: 3000 },
  { nombre: 'Cena', tipo: 'gasto', valor: 45.50 }
];

// Tus funciones funcionales siguen funcionando:
movimientos.filter(m => m.tipo === 'ingreso');
movimientos.find(m => m.nombre === 'Cena');
```

---

## 🤔 Discusión Final

- ¿Qué función pura nueva creaste que más te gustó?
- ¿Te resultó más difícil `.reduce` o aceptar que `.map` no muta?
- ¿En qué cambia tu código sabiendo que ahora puedes filtrar/transformar sin un solo `for`?

> **Reflexión:** programación funcional NO reemplaza imperativa — la complementa. Hay momentos para cada una. La clave es saber cuándo.

---

## ¡Gracias! 🙌
### Code 201 · Enter Tech School
