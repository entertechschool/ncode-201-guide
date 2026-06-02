# Guía del Facilitador — Clase 06: Programación Funcional + Arrow Functions

> Tiempo de lectura: 8 minutos | Segunda clase del M2 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Arrow function** (sintaxis NUEVA): `valor => valor * 2` equivale a `function(valor) { return valor * 2 }`. Es la sintaxis dominante en JS moderno (React, Node, librerías). Hoy se introduce formalmente.
- **Función pura**: misma entrada → misma salida + sin efectos secundarios. Es la base mental del paradigma.
- **Métodos funcionales de Array**: `.map`, `.filter`, `.find`, `.some`, `.reduce`, `.forEach`. Reemplazan el `for` clásico de C05.
- **`.some()`** (NUEVO): devuelve booleano — "¿hay al menos uno que cumple?". Primo de `.find` pero responde sí/no en vez de dar el elemento.
- **`.sort()`** (NUEVO): ordena con comparador `(valorA, valorB) => valorA - valorB`. ⚠️ La excepción que **SÍ muta** — contrasta con `.map`/`.filter`. Se enseña junto a `topGastos` y la copia `[...arr]` para no mutar.
- **Inmutabilidad**: los métodos funcionales NO mutan el array original — devuelven uno nuevo. `.sort` es la excepción que confirma la regla. Concepto crítico para React y arquitecturas modernas.
- **Composición + DRY**: funciones pequeñas + reusarlas en vez de copy-paste.

---

## 🔗 Analogías Útiles

**Arrow function <> Abreviación de palabras:**
"Por favor" (3 sílabas) ↔ "Porfa" (2 sílabas). Mismo significado, menos sílabas. Para frases cortas que se dicen seguido — ideal. Para discursos formales — no. Arrow function es la abreviación: úsala donde aporta brevedad sin perder claridad.

**Función pura <> Calculadora:**
Le pides "2 + 3", siempre te dice "5". No le importa qué cálculo hiciste antes. No deja rastros en otros lados. Misma entrada → misma salida → no toca nada externo.

**`.map` <> Fábrica de cajas con transformador:**
Pasan latas por una banda. Cada lata sale pintada. Mismo número de latas que entró. La banda original sigue ahí, no se gastó.

**`.filter` <> Aduana:**
Pasan personas. Algunas pasan, otras no. El resultado: una nueva fila con solo las que pasaron.

**`.reduce` <> Cuenta del restaurante:**
Sumas plato + plato + plato → total. Empezaste en 0, terminaste en $135. El acumulador es la cuenta que va creciendo. Cada plato es el "valor actual".

---

## 📚 Contexto Actual

### Por qué arrow functions importan hoy

React, Vue, Node moderno, librerías como Lodash, RxJS — todas usan arrow functions como sintaxis por defecto. Un alumno que no las domina queda atrapado en código de hace 10 años. **Hoy las introduces formalmente; verás que en C07 y M3 vuelven todo el tiempo.**

### Por qué arrancamos con arrays de números (no objetos)

C06 funcional brilla con **arrays homogéneos** (todos números, todos strings). Los métodos se ven en su forma más pura — `valores.filter(valor => valor > 0)` es elegante porque `valor` es un número simple. Cuando llegues a objetos en C07, los métodos funcionales seguirán funcionando pero con `.filter(movimiento => movimiento.tipo === 'ingreso')` — un nivel más. Hoy: forma pura. Mañana: aplicada a objetos.

### `reduce` es el más difícil

Honestamente. Si tu grupo lo capta a la primera, son rápidos. Si no, dedica 5 min extra a la **tabla de vueltas** del lab — visualizar acumulador + valor actual + nuevo acumulador es lo que hace `click`.

**Fuentes:** [MDN — Arrow functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions){:target="_blank"}, [MDN — reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Intro + repaso | 15 min | El `for` de C05 + motivación: ¿qué tal si fuera 1 línea? |
| Demo Técnica | 20 min | `function` → arrow + `.map`/`.filter`/`.reduce` sobre array de números. |
| Lab (P0-P3) | 140 min | P0 Arrow/puras · P1 map/filter/find/some · P2 reduce/forEach · P3 composición + sort + topGastos. |
| Cierre | 15 min | ¿Qué función pura más útil hicieron? Semilla C07 (objetos). |

---

## 🎯 Momentos Clave de la Clase

### Demo Principal — la transformación

**Qué mostrar (5 min):** el `for` de C05 al lado de la versión funcional.

```javascript
// C05
let saldo = 0;
for (let i = 0; i < valores.length; i++) {
  saldo += valores[i];
}

// C06
const saldo = valores.reduce((acumulador, valor) => acumulador + valor, 0);
```

**Script sugerido:**
```
Facilitador: "5 líneas de C05 → 1 línea de C06.
¿Hace lo mismo? Sí. ¿Es más legible? Discutible, hay que conocer reduce.
Pero el ESPÍRITU es claro: dejé de decir CÓMO sumar y empecé a decir QUÉ quiero.
Eso es declarativo. Y eso es lo que React hizo popular."
```

**Plan B (si la demo falla):** CodePen pre-creado con ambas versiones lado a lado. Cambia `valores` y muestra que ambas dan lo mismo.

### Demo de arrow function — desde `function`

**5 min en pizarra**, paso por paso:

```
function duplicar(valor) {             Paso 1: la forma clásica
  return valor * 2;
}

const duplicar = (valor) => {          Paso 2: agrega const, cambia function por =>
  return valor * 2;
};

const duplicar = (valor) => valor * 2; Paso 3: 1 expresión, omite { return }

const duplicar = valor => valor * 2;   Paso 4: 1 param, omite paréntesis
```

> Hacer la transformación EN ORDEN ayuda más que mostrar la forma final de golpe.

### Transición al Lab

```
Facilitador: "El lab tiene P0 corto (arrow + pura) — NO se lo salten.
Si no captan P0, P1-P3 son ruido. Tómense los 15 min.
Después: 4 funciones para map/filter/find/some, 3 para reduce, sort + topGastos, composición.
Total ~10 funciones puras al final. Sí, son muchas. Por eso son CORTAS."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Traduce a arrow"

Después de P0.1, pasas 3 funciones `function` en pizarra y los alumnos las escriben como arrow:

```javascript
// 1)
function esPar(valor) {
  return valor % 2 === 0;
}

// 2)
function mayor(valorA, valorB) {
  return valorA > valorB ? valorA : valorB;
}

// 3)
function saludar() {
  console.log('Hola!');
}
```

**Soluciones:**
```javascript
const esPar = valor => valor % 2 === 0;
const mayor = (valorA, valorB) => valorA > valorB ? valorA : valorB;
const saludar = () => console.log('Hola!');
```

> Si más del 30% se equivoca con los paréntesis (1 param vs 2 params), refuérzalo.

### Dinámica 2: "¿Pura o impura?"

Después de P0.3, presenta 4 funciones y deben decidir:

```javascript
const cuadrado = valor => valor * valor;                  // PURA
let contador = 0;
const incrementar = () => contador++;                     // IMPURA (muta externo)
const log = msg => console.log(msg);                      // IMPURA (efecto)
const formatear = valor => `$${valor.toFixed(2)}`;        // PURA
```

Discusión: ¿`console.log` cuenta como impuro? Sí — es un efecto observable fuera de la función.

### Dinámica 3: "Tabla de reduce en vivo"

Antes de P2.1, dibuja la tabla en pizarra y van llenándola juntos:

| Vuelta | acumulador | valor | nuevo acumulador |
|---|---|---|---|
| 1 | 0 | 3000 | ? |
| 2 | ? | -45.50 | ? |
| 3 | ? | 500 | ? |

Los alumnos completan. Cuando llegan al final → "ese es tu saldo". El "click" sucede aquí.

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Arrow vs function (cuándo cada una)

**Cuándo usarlo:** si alguien pregunta "¿siempre arrow?"

```javascript
// Arrow: ideal como argumento (anónima, corta)
valores.map(valor => valor * 2);

// function: ideal para funciones nombradas reutilizables con varias líneas
function calcularInteres(monto, tasa, anios) {
  // ... 10 líneas de lógica ...
  return monto * Math.pow(1 + tasa, anios);
}
```

**Tip:** "Arrow para argumentos, function (o const arrow nombrada) para funciones que tienen nombre y se llaman desde varios lados."

### Ejemplo 2: `.filter` que NO muta

**Cuándo usarlo:** si alguien dice "filter modifica el array".

```javascript
const valores = [3000, -45.50, 500];
const ingresos = valores.filter(valor => valor > 0);

console.log(valores);   // [3000, -45.50, 500] — INTACTO
console.log(ingresos);  // [3000, 500] — NUEVO
```

**Tip:** "Si llamas filter de nuevo sobre el mismo array, da el mismo resultado. Eso es inmutabilidad."

### Ejemplo 3: reduce con valor inicial

**Cuándo usarlo:** si alguien olvida el valor inicial.

```javascript
// CORRECTO
[].reduce((acumulador, valor) => acumulador + valor, 0)   // 0 (gracias al inicial)

// INCORRECTO — reduce sin inicial sobre array vacío
[].reduce((acumulador, valor) => acumulador + valor)      // TypeError
```

**Tip:** "Siempre pon el valor inicial. Es la garantía de que reduce no falle con arrays vacíos."

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| `valores.map(...)` no cambia `valores` | El alumno esperaba mutación | Recordar: map devuelve array NUEVO. Si quieres reemplazar: `valores = valores.map(...)` |
| `reduce` retorna `NaN` | Olvidó el valor inicial sobre números | Agregar `, 0` al final del reduce |
| Arrow con `{}` no retorna nada | Confusión entre cuerpo expresión y cuerpo bloque | `valor => { valor * 2 }` ejecuta pero no retorna. Usar `valor => valor * 2` o `valor => { return valor * 2 }` |
| `find` devuelve `undefined` | El array no tiene elementos que cumplen | Validar `if (resultado !== undefined)` antes de usar |
| `valores` cambió de orden "solo" | Llamó `valores.sort()` directo — sort MUTA | Ordenar sobre copia: `[...valores].sort(...)`. Es la excepción a la inmutabilidad. |
| `[10, 2, 1].sort()` da `[1, 10, 2]` | Sort sin comparador ordena como texto | Para números SIEMPRE pasar `(valorA, valorB) => valorA - valorB` |
| `topGastos` devuelve gastos negativos | Olvidó el `.map(valor => Math.abs(valor))` antes del sort | Quitar el signo antes de ordenar y cortar |
| `SyntaxError: Identifier 'calcularSaldo' has already been declared` | Dejó `function calcularSaldo()` en `app.js` (de C05) Y `const calcularSaldo` en `functional-utils.js` | Borrar `calcularSaldo` y `mostrarResumen` de `app.js`: ahora viven en `functional-utils.js` / `imprimirReporte` (ver P3.6) |
| Los `console.log` de P1–P2 imprimen `[]` o `undefined` | `valores` está vacío (flujo de prompt aún no corre) | Para probar, hardcodear `let valores = [3000, -45.50, 500, -30]` en `app.js`; reconectar prompt en P3.6 |
| Mezcla `forEach` con `map` | "Quería transformar pero forEach no retorna" | Si transforma → `.map`. Si solo ejecuta → `.forEach` |
| Filter usa `==` en vez de `===` | Hábito de otros lenguajes | Siempre `===` en JS para comparaciones estrictas |
| Quiere "filtrar por nombre" | Pero los nombres están en otro array (paralelo) | "Hoy operamos sobre `valores`. En C07 cuando sean objetos, podrás filtrar por cualquier propiedad" |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Convierte una `function` a arrow function correctamente (paréntesis donde corresponde).
- Predice qué retorna `valores.filter(valor => valor > 1000)` sin ejecutar.
- Explica por qué `reduce` necesita un valor inicial.
- Identifica `.map` vs `.forEach` según si "quiere transformar" o "solo ejecutar".

### El estudiante NECESITA AYUDA cuando:
- Escribe `valor => { valor * 2 }` esperando que retorne (olvida `return` en cuerpo bloque).
- Usa `.forEach` para transformar y luego se queja de que el array no cambia.
- Mezcla arrow con `function this` (no aplica hoy pero puede confundir).
- No conecta que filter + reduce puede reemplazar un for con if dentro.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~15' | P0 lista | Identifica si una función es pura o no. Traduce 3 `function` a arrow correctamente. |
| ~50' | P1 lista | Las 5 funciones (`obtenerIngresos`, `obtenerGastos`, `montosAbsolutos`, `buscarPrimerGastoMayor`, `tieneGastoMayorQue` con `.some`) creadas y funcionando. El array `valores` NO se mutó. |
| ~90' | P2 lista | `imprimirReporte(nombres, valores)` muestra desglose completo con totales y saldo correctos. |
| ~140' | P3 lista | `functional-utils.js` tiene ≥10 funciones puras (incl. `topGastos` con `.sort` sin mutar) + reto autónomo intentado. |

---

## 🧑‍🏫 Tips de Facilitación

### Si el grupo está callado:
- "¿Quién puede explicar por qué `valores.map(valor => valor * 2)` no muta `valores`?" — fuerza articular inmutabilidad.

### Si alguien ya conocía arrow functions:
- Pídele que explique al grupo el caso de "arrow vs function con `this`" (preview de C07).

### Si la mayoría termina P3 antes:
- Reto avanzado: implementar `agruparPorTipo(valores)` que retorne `{ ingresos: [...], gastos: [...] }` usando reduce.

### Si alguien quiere usar `for` "porque me sale más fácil":
> "Funciona, pero el lab es C06 funcional. Reto: hazlo con `.reduce`. Si te trabas, te ayudo — pero antes intenta."

### Si surgen preguntas sobre `this` en arrow:
> "Buena pregunta para C07. Hoy no nos topa porque no usamos objetos."

---

## ❓ Preguntas Frecuentes

### P: ¿Puedo seguir usando `for` en proyectos reales?
**R:** Sí, totalmente. `for` no está muerto — es ideal para algoritmos donde necesitas controlar el índice manualmente. Pero el 80% de los casos cotidianos (transformar, filtrar, sumar) son más limpios con métodos funcionales.

### P: ¿Por qué `reduce` con valor inicial obligatorio?
**R:** Sin inicial, reduce usa `arr[0]` como inicial. Si el array está vacío, lanza TypeError. Con inicial, reduce siempre tiene "algo" con qué arrancar.

### P: ¿Funciones puras son siempre mejores?
**R:** Para LÓGICA (cálculos, transformaciones): casi siempre. Para EFECTOS (DOM, fetch, console.log): no — necesitas impuras. La buena práctica es **separar** el cálculo (puro) del output (impuro), como hicimos en P2.4 con `generarReporte` (puro) y `imprimirReporte` (impuro).

### P: ¿`.forEach` cuenta como funcional?
**R:** Estrictamente no — siempre produce efectos. Pero es "el reemplazo decente" del `for` cuando solo iteras. Acepta que es el menos "puro" del grupo.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C05 | Arrays + `for` + funciones imperativas | Hoy refactorizamos sobre el mismo proyecto: `for` → `.reduce`, función imperativa → función pura. |
| Code 101 (C11) | Funciones con `function` | Hoy se introduce la sintaxis arrow como equivalente. |

### Conexión con C07 (OOP)

Al cerrar:

> "Hoy los 2 arrays paralelos siguen siendo arrays paralelos. Cuando filtramos `valores` perdimos los nombres correspondientes — hicimos `forEach` con índice manual. En C07 los movimientos van a ser `{ nombre, tipo, valor }` en UN solo array, y todos los métodos que hoy aprendieron se vuelven MÁS expresivos."

**Pre-work implícito:** que los alumnos extiendan su `functional-utils.js` con 2-3 funciones extra del Reto Autónomo. Más práctica con `.reduce` = mejor preparación para C07.

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Cuántos alumnos seguían usando `for` aunque les pediste métodos funcionales? Si más del 30%, refuerza en C07.
- ¿La tabla de `reduce` paso a paso funcionó? Si no, prueba con otro ejemplo (multiplicación, máximo) la próxima cohorte.
- ¿Qué alumnos pidieron usar `for` por nostalgia? Identifícalos: probablemente necesitan más práctica funcional antes de C07.
- ¿Alguien dijo "esto me suena a React"? Buena señal — están conectando.
