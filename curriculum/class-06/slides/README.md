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
const saldo = valores.reduce((acumulador, valor) => acumulador + valor, 0);
```

> Una línea. Misma lógica. Pero hay 2 conceptos nuevos: arrow + reduce.

---

## ➡️ Arrow Function — la forma corta

```javascript
// Forma "function" (la que conoces)
function duplicar(valor) {
  return valor * 2;
}

// Forma arrow function (equivalente)
const duplicar = valor => valor * 2;
```

* Sin `function`, sin `{}`, sin `return`.
* `valor => valor * 2` = "recibe valor, devuelve valor * 2".

> Se usa MUCHO como argumento de otros métodos.

---

## 🪄 Reglas de la flecha

| Caso | Sintaxis |
|---|---|
| 0 parámetros | `() => ...` |
| 1 parámetro | `valor => ...` (sin paréntesis) |
| 2+ parámetros | `(valorA, valorB) => ...` |
| Cuerpo 1 expresión | omite `{}` y `return` |
| Cuerpo multilínea | `{ ...; return X; }` |

```javascript
const sumar = (valorA, valorB) => valorA + valorB;
const saludar = () => console.log('Hola');
const formatear = valor => `$${valor.toFixed(2)}`;
```

---

## ✨ Función Pura

Una función es **pura** si:
1. **Mismo input → mismo output**, siempre.
2. **No produce efectos** (no `console.log`, no muta variables externas).

```javascript
// PURA
const cuadrado = valor => valor * valor;

// IMPURA — depende de variable externa
let factor = 10;
const escalar = valor => valor * factor;
```

> Las puras son fáciles de testear: no dependen de nada externo.

---

## 🔄 `.map()` — Transformar

```javascript
const valores = [3000, -45.50, 500, -30];

const enDolares = valores.map(valor => valor / 4);
// [750, -11.375, 125, -7.5]

// El array original NO se mutó:
console.log(valores); // [3000, -45.50, 500, -30]
```

* Devuelve un array del **mismo tamaño**.
* Cada elemento se transforma con la función que pasas.

---

## 🔍 `.filter()` — Filtrar

```javascript
const ingresos = valores.filter(valor => valor > 0);
// [3000, 500]

const gastos = valores.filter(valor => valor < 0);
// [-45.50, -30]
```

* Devuelve un array **menor o igual**.
* Conserva solo donde la función retorna `true`.

---

## 🎯 `.find()` — Buscar el primero

```javascript
const primerGasto = valores.find(valor => valor < 0);
// -45.50 (NO array — el valor directo)

const enorme = valores.find(valor => valor > 100000);
// undefined (no encontró)
```

* `.filter` → array
* `.find` → un elemento (o `undefined`)

---

## ❓ `.some()` — ¿existe al menos uno?

```javascript
const hayGastos = valores.some(valor => valor < 0);
// true

const hayMillonario = valores.some(valor => valor > 100000);
// false
```

* Devuelve un **booleano** (`true`/`false`).
* `.find` te da el elemento; `.some` solo dice **si existe**.

> Ideal para condiciones en un `if`.

---

## 🔥 `.reduce()` — El más poderoso

```javascript
const saldo = valores.reduce((acumulador, valor) => acumulador + valor, 0);
```

| Vuelta | acumulador | valor | nuevo acumulador |
|---|---|---|---|
| 1 | 0 | 3000 | 3000 |
| 2 | 3000 | -45.50 | 2954.50 |
| 3 | 2954.50 | 500 | 3454.50 |
| 4 | 3454.50 | -30 | 3424.50 |

> Suma, máximo, agrupar, contar... TODO se puede con reduce.

---

## 🔁 `.forEach()` — Efecto sin retorno

```javascript
valores.forEach((valor, indice) => {
  console.log(`Movimiento ${indice + 1}: ${valor}`);
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
const obtenerIngresos = valores => valores.filter(valor => valor > 0);

const totalIngresos = valores =>
  obtenerIngresos(valores).reduce((acumulador, valor) => acumulador + valor, 0);

const promedioIngresos = valores => {
  const ingresos = obtenerIngresos(valores);
  return ingresos.length === 0 ? 0 : totalIngresos(valores) / ingresos.length;
};
```

> Funciones pequeñas → funciones grandes. **DRY** en acción.

---

## ↕️ `.sort()` — Ordenar

```javascript
const numeros = [3000, -45.50, 500, -30];

numeros.sort((valorA, valorB) => valorA - valorB);   // ascendente
numeros.sort((valorA, valorB) => valorB - valorA);   // descendente
```

* Comparador: `valorA - valorB` sube, `valorB - valorA` baja.
* ⚠️ **`.sort()` MUTA** el original (a diferencia de `.map`/`.filter`).
* Para no mutar: `[...valores].sort(...)`.

> Sin comparador ordena como TEXTO: `[10, 2].sort()` → `[10, 2]` mal.

---

## 🔗 Method Chaining

```javascript
const topGastos = (valores, cantidad) =>
  [...valores]
    .filter(valor => valor < 0)
    .map(valor => Math.abs(valor))
    .sort((valorA, valorB) => valorB - valorA)
    .slice(0, cantidad);
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
valores.forEach((valor, indice) => console.log(nombres[indice], valor));
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
movimientos.filter(movimiento => movimiento.tipo === 'ingreso');
movimientos.find(movimiento => movimiento.nombre === 'Cena');
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
