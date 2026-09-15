# Guía del Facilitador — Clase 07: Objetos + POO con `class`

> Tiempo de lectura: 8 minutos | Tercera clase del M2 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Objeto literal** (NUEVO): `{ key: value }`, acceso/modificación con `.prop`. Es la base — todo lo demás se construye sobre esto.
- **`class`** (NUEVO): el **molde** para crear muchos objetos con la misma forma y comportamiento. Se enseña **por capas**: propiedades → constructor → métodos.
- **`constructor` + `this` + `new`**: el `constructor` corre al hacer `new` e inicializa las propiedades con `this` (el objeto que se está creando).
- **Método**: función dentro de la clase que usa las propiedades (`this.x`).
- **Encapsulación**: datos (propiedades) + comportamientos (métodos) viven dentro del mismo objeto (`class Presupuesto`).

> ❗ C07 es **solo lógica, en consola**. No hay HTML/CSS ni DOM (eso es C08/M3). No hay herencia ni prototipos (unidad de POO posterior).

---

## 🔗 Analogías Útiles

**Objeto literal ⟷ Ficha de inscripción:** una ficha tiene campos con etiquetas (nombre, edad). Cada campo es una **propiedad**. Un array sería una pila de fichas numeradas; un objeto es UNA ficha llena.

**`class` ⟷ Molde de galletas:** el molde define la forma; cada galleta sale igual de forma pero con distinto sabor. La clase es el molde; las **instancias** (`new`) son las galletas.

**`this` ⟷ "Yo" en un CV:** la plantilla del CV es la misma, pero "Yo" apunta al postulante que lo está llenando AHORA. Dentro de la clase, `this` apunta al objeto que se crea en ese momento.

**Encapsulación ⟷ Caja de herramientas:** cada herramienta vive con sus accesorios (taladro + brocas), no todo suelto. Un objeto encapsula datos + sus métodos.

**Arrays paralelos → Objeto ⟷ Hojas sueltas vs ficha unificada:** antes una hoja de nombres y otra de valores; si las descalibras, todo se corrompe. Ahora UNA ficha por movimiento, imposible desincronizar.

---

## 📚 Contexto Actual

### Por qué objetos primero, `class` después

Pedagógicamente CRÍTICO. Si saltas directo a `class`, el alumno aprende `class` + `constructor` + `this` + `new` al mismo tiempo que aprende qué es un objeto. **Demasiado.** Primero (P0+P1) usa objetos literales directamente; cuando llegue `class` (P2), el `this.x = ...` se siente "ah, está armando el objeto que ya entendí".

### Por qué `class` y NO funciones constructoras

En M2 ya **no enseñamos prototipos** (se difieren). La única razón para empezar con funciones constructoras era revelar después "class es azúcar sobre prototipos" — sin esa revelación, las constructoras son solo una forma más vieja y enredada de lo mismo. Ventajas de `class`: (1) transición casi nula desde el objeto literal (el `metodo() {}` se escribe igual); (2) **más seguro** — sin `new` lanza un error claro; (3) es el estándar moderno.

### Por qué construir `class` por capas (no de golpe)

Mostrar la clase completa de una abruma. La secuencia **propiedades → constructor → métodos** hace que cada capa **motive** la siguiente: "asignar propiedades a mano es tedioso → el constructor las pone solas → ahora dales comportamiento con métodos". Es construcción de aprendizaje, no volcado.

**Fuentes:** [MDN — Trabajando con objetos](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics){:target="_blank"}, [MDN — Classes](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Intro + repaso | 15 min | El dolor de arrays paralelos + motivación: ¿y si fueran un objeto? |
| Demo Técnica | 20 min | Objeto literal → array de objetos → `class` por capas. |
| Lab (P0-P3) | 120 min | P0 Objetos · P1 Refactor del modelo · P2 `class` por capas · P3 `class Presupuesto`. |
| Cierre | 15 min | Qué ganamos con objetos + `class` · semilla C08 (interfaz con Tailwind). |

---

## 🎯 Momentos Clave de la Clase

### Demo Principal — el refactor del modelo (5 min)

Lado a lado, arrays paralelos vs array de objetos:

```javascript
// ANTES
let nombres = ['Salario', 'Cena'];
let valores = [3000, -45.50];          // tipo por signo

// AHORA
let movimientos = [
  { nombre: 'Salario', tipo: 'ingreso', valor: 3000 },
  { nombre: 'Cena',    tipo: 'gasto',   valor: 45.50 }
];

// Eliminar el primer movimiento:
// ANTES: nombres.shift(); valores.shift();  ← 2 ops; si olvidas una, corrupción silenciosa
// AHORA: movimientos.shift();               ← 1 op, integridad garantizada
```

> **Script:** "Antes el nombre y el valor eran entradas separadas. Si las desincronizabas, nadie te avisaba. Ahora viajan JUNTAS — imposible desincronizar."

⚠️ **Aviso clave del refactor:** con `tipo` explícito y `valor` positivo, **`calcularSaldo` cambia** (ya no es sumar el array; es `ingresos - gastos`) y **`imprimirReporte` pasa de `(nombres, valores)` a `(movimientos)`**. Es el punto donde más alumnos se traban.

### Demo de `class` por capas (5 min en pizarra)

```
1. Molde vacío + propiedades a mano:
   class Movimiento {}
   const m = new Movimiento();  m.nombre = 'Cena';  m.valor = 45.5;
   → "ponerlas a mano cada vez es tedioso..."

2. Constructor: las pone solas
   class Movimiento { constructor(nombre, tipo, valor) { this.nombre = nombre; ... } }
   const cena = new Movimiento('Cena', 'gasto', 45.5);

3. Métodos: comportamiento sobre las propiedades
   esIngreso() { return this.tipo === 'ingreso'; }
```

> El alumno ve la clase **nacer por capas**, no caer del cielo completa.

### Transición al Lab

```
"P0 son 15 min de objetos básicos. P1 refactoriza TODO el código de C06
(registrarMovimiento, las funciones, imprimirReporte) — ojo con calcularSaldo.
P2 construye class por capas. P3 encapsula en Presupuesto.
Todo en consola: hoy no se toca HTML."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Escribe el objeto" (tras P0.1)
3 alumnos escriben en pizarra un objeto de "su mascota" o "su libro favorito"; comparas las propiedades. Pierden el miedo: un objeto es una "ficha" con campos.

### Dinámica 2: "Elimina sin desincronizar" (antes de P1)
"En C05 tenías `nombres` y `valores`. ¿Cómo borras el movimiento #2? ¿Y si olvidas el segundo `splice`?" → discusión sobre corrupción silenciosa → "hoy con objetos, `movimientos.splice(2,1)` y listo."

### Dinámica 3: "Predice `Presupuesto`" (antes de P3)
"Ya tienen `class Movimiento`. Ahora `class Presupuesto`: ¿qué propiedad tendría? ¿qué métodos?" → recoger ideas (`this.movimientos = []`, `agregar`, `saldo`, `resumen`) → implementan P3 y verifican su intuición.

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: el `this` se decide al invocar

```javascript
const cena = new Movimiento('Cena', 'gasto', 45);
cena.esIngreso();   // this = cena (el objeto a la izquierda del punto)
```
**Tip:** "El método sabe quién es `this` PORQUE se invocó con `cena.esIngreso()`."

### Ejemplo 2: la trampa del refactor (`calcularSaldo`)

```javascript
// ❌ Heredado de C06 (valores con signo): ahora da MAL el saldo
const calcularSaldo = movimientos =>
  movimientos.reduce((a, m) => a + m.valor, 0);   // suma TODO como si fuera ingreso

// ✅ Correcto: el tipo es explícito, valor es positivo
const calcularSaldo = movimientos =>
  totalIngresos(movimientos) - totalGastos(movimientos);
```
**Tip:** "Si copian `calcularSaldo` de C06 tal cual, el saldo sale inflado. El signo ya no existe."

### Ejemplo 3: clase vacía → con constructor

```javascript
class Movimiento {}                     // molde vacío, instancia "manual"
const a = new Movimiento(); a.nombre = 'Cena';

class Movimiento {                       // con constructor: automático
  constructor(nombre, tipo, valor) { this.nombre = nombre; this.tipo = tipo; this.valor = valor; }
}
const b = new Movimiento('Cena', 'gasto', 45);
```
**Tip:** "Mismas propiedades; el constructor solo automatiza lo que hacías a mano."

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| `Class constructor ... cannot be invoked without 'new'` | Llamó la clase sin `new` | Siempre `new Movimiento(...)` |
| Saldo inflado / incorrecto | Copió `calcularSaldo` de C06 (suma con signo) | Ahora `saldo = totalIngresos - totalGastos` |
| `imprimirReporte` falla | Sigue pasando `(nombres, valores)` | Ahora recibe `(movimientos)` — un solo array |
| `montosAbsolutos` ya no se usa | Quedó de C06 para quitar el signo | Bórrala: `valor` ya es positivo |
| `this is undefined` en un método | Llamó el método sin punto | `cena.esIngreso()` — `this` viene del objeto a la izquierda |
| Propiedad compartida entre instancias | Definió el dato fuera del `constructor` | Las propiedades van en el `constructor` con `this.x = ...` |
| Sigue con 2 arrays paralelos | No internalizó el refactor | Volver a la Dinámica 2 (desincronización) |

---

## ✅ Señales de Comprensión

**ENTIENDE cuando:**
- Diferencia objeto literal de `class` (instancia vs molde).
- Explica que el `constructor` "pone las propiedades" al hacer `new`.
- Reconoce que `cena.esIngreso()` funciona porque `this = cena`.
- Corrige `calcularSaldo` al nuevo modelo sin ayuda.

**NECESITA AYUDA cuando:**
- Confunde `this` con una variable normal.
- Olvida `new` al crear instancias.
- Mantiene 2 arrays paralelos.
- Trata métodos como funciones globales (`esIngreso(cena)` en vez de `cena.esIngreso()`).

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~15' | P0 | Crea un objeto con 3 propiedades y lee/modifica una con `.`. |
| ~50' | P1 | `movimientos` es array de objetos; `registrarMovimiento` hace 1 push; `calcularSaldo` resta gastos; `imprimirReporte(movimientos)` correcto. |
| ~90' | P2 | Construyó `Movimiento` por capas; crea instancias con `new`; `.formatear()` y `.esIngreso()` funcionan. |
| ~120' | P3 | `miPresupuesto.resumen()` devuelve cantidad/ingresos/gastos/saldo; `eliminar` y `buscarPorNombre` funcionan. |

---

## 🧑‍🏫 Tips de Facilitación

- **Grupo callado:** "¿Qué propiedades tendría un objeto `Producto` de un e-commerce?" — práctica de modelado.
- **Alguien ya conocía `class`:** pídele que explique al grupo qué hace `new` por dentro (crea el objeto, corre el constructor).
- **Terminan P2 antes:** reto `obtenerMovimientosPorMes(mes)` usando la propiedad `fecha`.
- **Preguntan por herencia (`extends`):** "Es la unidad de POO posterior. Hoy: una sola clase, sin herencia."
- **Preguntan por arrow `this`:** "Hoy los métodos de `class` usan `this` clásico. Las diferencias con arrow las vemos más adelante."

---

## ❓ Preguntas Frecuentes

**P: ¿Cuál es la diferencia entre la clase y la instancia?**
R: La clase es el **molde** (`class Movimiento`); la instancia es un **objeto concreto** creado con `new Movimiento(...)`. Una clase, muchas instancias.

**P: ¿Puedo usar un objeto literal en vez de una clase?**
R: Sí: `{ nombre: 'Cena', tipo: 'gasto', valor: 45 }`. La clase aporta consistencia + métodos compartidos cuando creas MUCHOS objetos del mismo "tipo".

**P: ¿`this` es como `self` en Python?**
R: Muy parecido — apunta al objeto actual. En Python `self` es explícito en cada método; en JS `this` es implícito y depende de cómo se invoque.

**P: ¿Por qué los nombres de clase van en mayúscula (`Movimiento`)?**
R: Convención: señala que es una clase y que se usa con `new`.

---

## 🔗 Conexiones del Curriculum

### Construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C05 | Arrays + `push` | Hoy guardamos OBJETOS (instancias) en el array |
| C06 | `.filter`, `.reduce` | Hoy operan sobre objetos: `m => m.tipo === 'ingreso'` — y se corrigen al nuevo modelo |

### Conexión con C08 (Tailwind)

Al cerrar:

> "El modelo del Gestor ya está completo, pero solo lo ven en consola. En C08 aprenden **Tailwind CSS** para darle una **interfaz visual** — el Gestor por fin tendrá cara. Conectar esa UI a estas clases (clicks, formulario en vivo) es M3, con el DOM."

**Más adelante (unidad de POO):** `extends`/`super` (herencia), polimorfismo y los prototipos que `class` usa por debajo.

---

## 🪞 Reflexión Post-Clase

- ¿Cuántos olvidaron `new` al menos una vez? Si fue mayoría, refuerza al inicio de C08.
- ¿Cuántos copiaron `calcularSaldo` de C06 sin corregirlo? Es el error más típico del refactor.
- ¿La construcción de `class` por capas funcionó, o hubo que volver a "propiedad → constructor"?
- ¿Algún alumno conectó con otro lenguaje (Python/Java)? Buena señal — están generalizando POO.
