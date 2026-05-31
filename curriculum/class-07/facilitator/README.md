# Guía del Facilitador — Clase 07: Objetos Literales + POO

> Tiempo de lectura: 8 minutos | Tercera clase del M2 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Objeto literal** (NUEVO): `{ key: value }`, acceso con `.prop`, **shorthand property** `{ nombre, tipo, valor }`. Esto es lo más importante de la clase — todo lo demás se construye sobre esto.
- **Función constructora**: nombre en mayúscula + `this.x = ...` + se invoca con `new`. Crea objetos consistentes "de un mismo tipo".
- **`this` y `new`**: dentro de la constructora `this` apunta al objeto que se crea. `new` orquesta el proceso (crea objeto vacío → asigna a this → ejecuta cuerpo → retorna this).
- **Encapsulación**: datos (propiedades) y comportamientos (métodos) viven dentro del mismo objeto.
- **Primer puente JS↔HTML**: `document.querySelector('#id').value` + `addEventListener('submit', fn)` + `event.preventDefault()` — los 3 mínimos para capturar input de un form.

---

## 🔗 Analogías Útiles

**Objeto literal <> Ficha de inscripción:**
Una ficha tiene campos con etiquetas (nombre, edad, email). Cada campo es una **propiedad**. La ficha agrupa datos heterogéneos relacionados entre sí. Un array sería una lista de fichas vacías numeradas; un objeto es UNA ficha llena.

**Constructora <> Molde de galletas:**
El molde dice qué forma tendrán las galletas. Cada galleta que sacas con el molde tiene la misma forma pero distinto sabor/color. La constructora es el molde; las instancias son las galletas.

**`this` <> "Yo" en un curriculum:**
Cuando rellenas un CV, "Yo" cambia cada vez que un nuevo postulante lo escribe. La plantilla es la misma, pero "yo" apunta a la persona actual. Dentro de la constructora, `this` apunta al objeto que se está creando AHORA.

**Encapsulación <> Caja de herramientas:**
Cada herramienta vive con las cosas que necesita: el destornillador con las puntas, el taladro con las brocas. En vez de tener todas las herramientas sueltas en el piso y todas las puntas en otra caja, cada herramienta + sus accesorios viven juntos. Un objeto encapsula datos + sus métodos.

**Array paralelo → Objeto <> Hojas separadas vs ficha unificada:**
Antes tenías una hoja con nombres y otra hoja con valores. Si las sacas del mismo orden, todo descalibra. Ahora tienes UNA ficha por movimiento con todos los datos juntos. Imposible perder la sincronización.

---

## 📚 Contexto Actual

### Por qué objetos literales primero, constructoras después

Pedagógicamente CRÍTICO. Si saltas directo a `function Movimiento() { this... }`, el alumno aprende `this` + `new` + sintaxis especial de constructora al mismo tiempo que aprende qué es un objeto. **Demasiado.**

Primero (P0+P1): "esto es un objeto, así se accede a sus propiedades, así se ven en arrays". El alumno usa objetos literales **directamente** en su código. Cuando llegue P2 con constructoras, el `this.x = ...` se vuelve "ah, está construyendo el objeto que ya entendí".

### Por qué constructoras y no `class` ES6 directamente

`class` ES6 es azúcar sobre constructoras + prototipos. Si arrancas con `class`, el alumno NO entiende qué pasa por debajo. La filosofía del M2 (y de Code 201) es: **mostrar lo que está debajo primero**. En M4 verás `class` y el alumno reconocerá: "ah, esto es lo que ya aprendí". Lo opuesto sería magia.

### Por qué un form HTML pre-armado (no creado por el alumno)

El foco de C07 es OOP. Si dedicas 30 min a escribir HTML del form, el alumno pierde el hilo. El template viene listo desde C01-C04 (form accesible + validación nativa). Aquí solo conecta JS al form. **El DOM completo (createElement, render dinámico) llega en M3.**

**Fuentes:** [MDN — Trabajando con objetos](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics){:target="_blank"}, [MDN — Constructor functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#using_a_constructor_function){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Intro + repaso | 15 min | El dolor de arrays paralelos + motivación: ¿y si fueran un objeto? |
| Demo Técnica | 20 min | Objeto literal → array de objetos → constructora con `new`. |
| Lab (P0-P3) | 105 min | P0 Objetos literales · P1 Refactor del modelo · P2 Constructoras · P3 Form HTML. |
| Cierre | 15 min | Lo que ganamos con OOP + semilla C08 (prototipos). |

---

## 🎯 Momentos Clave de la Clase

### Demo Principal — el refactor del modelo

**Qué mostrar (5 min):** lado a lado, arrays paralelos vs array de objetos.

```javascript
// ANTES
let nombres = ['Salario', 'Cena'];
let valores = [3000, -45.50];

// AHORA
let movimientos = [
  { nombre: 'Salario', tipo: 'ingreso', valor: 3000 },
  { nombre: 'Cena',    tipo: 'gasto',   valor: 45.50 }
];

// Eliminar el primer movimiento:
// ANTES: nombres.shift(); valores.shift();  ← 2 operaciones, si olvidas una, desastre
// AHORA: movimientos.shift();                ← 1 operación, integridad garantizada
```

**Script sugerido:**
```
Facilitador: "Antes el nombre y el valor eran 2 entradas separadas — si las desincronizabas,
nadie te avisaba. Era responsabilidad del programador mantenerlas alineadas.
Ahora viajan JUNTAS. Si elimino movimientos[2], elimino TODO de ese movimiento.
Es imposible desincronizar. Eso es lo que objetos nos dan."
```

**Plan B (si la demo falla):** CodePen con el `shift()` desincronizado en pizarra digital.

### Demo de constructora — del objeto literal al molde

**5 min en pizarra:**

```
1. Aquí hay un objeto literal:
   let m1 = { nombre: 'Cena', tipo: 'gasto', valor: 45.50 };

2. Y otro:
   let m2 = { nombre: 'Salario', tipo: 'ingreso', valor: 3000 };

3. Ambos tienen las MISMAS propiedades. ¿Por qué escribir el mismo molde 2 veces?

4. Hagamos una FUNCIÓN que escribe el molde:
   function Movimiento(nombre, tipo, valor) {
     this.nombre = nombre;
     this.tipo = tipo;
     this.valor = valor;
   }

5. Y la invocamos con NEW:
   let m1 = new Movimiento('Cena', 'gasto', 45.50);
   let m2 = new Movimiento('Salario', 'ingreso', 3000);
```

> El alumno entiende: la constructora es **el molde**, las instancias son las **galletas**.

### Transición al Lab

```
Facilitador: "P0 son 15 min de objetos literales SIN constructoras. NO se lo salten.
Después P1 refactoriza el modelo: si en C05/C06 tienen el código, lo cambian aquí.
P2 introduce constructoras (el molde). P3 es el form HTML.
Si NO terminan P3, está bien — el lab del módulo se evalúa en C08, no aquí."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Escribe el objeto"

Después de P0.1: pide a 3 alumnos que escriban en pizarra un objeto que describa "su mascota" o "su libro favorito". Luego comparas las propiedades:

```javascript
{ nombre: 'Firulais', edad: 5, raza: 'mestizo' }
{ titulo: 'Cien años de soledad', autor: 'GGM', paginas: 432 }
```

> Los alumnos VEN que un objeto es una "ficha" con campos. Pierden el miedo.

### Dinámica 2: "Elimina sin desincronizar"

Antes de P1: pide al grupo que imagine un caso real de bug.

```
Facilitador: "En C05 tenían nombres y valores. Si quiero borrar el movimiento #2
de Carlos, ¿qué pasos hago?"
[Alumnos: 'nombres.splice(2, 1)' y 'valores.splice(2, 1)']
Facilitador: "¿Y si olvido el segundo splice? ¿Qué le pasa a valores[2]?"
[Discusión: ahora es el monto de otro movimiento — corrupción silenciosa]
Facilitador: "Hoy con objetos, movimientos.splice(2, 1) y listo. Imposible olvidar."
```

### Dinámica 3: "Predice el constructor"

Antes de P2.4: muestra `Movimiento` y pregunta:

```
Facilitador: "Tenemos Movimiento. Ahora vamos a hacer Presupuesto.
¿Qué propiedades tendría? ¿Qué métodos?"
[Recoger ideas: this.movimientos = [], agregar, totalIngresos, saldo]
Facilitador: "OK, vamos a verificar si su intuición coincide."
[Implementan P2.4]
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Objeto literal con shorthand

**Cuándo usarlo:** P0.3 cuando explicas shorthand.

```javascript
const nombre = prompt('Nombre:');
const tipo = prompt('Tipo:');
const valor = parseFloat(prompt('Monto:'));

// Sin shorthand:
movimientos.push({ nombre: nombre, tipo: tipo, valor: valor });

// Con shorthand:
movimientos.push({ nombre, tipo, valor });
```

**Tip:** "Es legal y común. Vas a verlo MUCHO. No es magia — es solo que cuando key y variable se llaman igual, JS asume `{ nombre: nombre }`."

### Ejemplo 2: Constructor con método interno

**Cuándo usarlo:** P2.2.

```javascript
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.valor = valor;

  this.esIngreso = function() {
    return this.tipo === 'ingreso';
  };
}

const cena = new Movimiento('Cena', 'gasto', 45);
console.log(cena.esIngreso());  // false
```

**Tip:** "El método sabe quién es `this` PORQUE se invocó con `cena.esIngreso()`. El `this` es el objeto a la izquierda del punto."

### Ejemplo 3: El form connector (las 5 líneas clave)

**Cuándo usarlo:** P3.

```javascript
const form = document.querySelector('#form-movimiento');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.querySelector('#nombre').value;
  const tipo = document.querySelector('#tipo').value;
  const valor = parseFloat(document.querySelector('#valor').value);
  miPresupuesto.agregar(new Movimiento(nombre, tipo, valor));
  form.reset();
});
```

**Tip:** "Si olvidan `event.preventDefault()`, la página RECARGA al hacer submit y pierden todo. Es el error #1 de JS↔HTML."

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| `undefined is not an object` | Olvidó `new` al invocar la constructora | "Mayúscula te recuerda que NECESITAS `new`." |
| Todas las instancias comparten un mismo valor | Definió la propiedad fuera de `this` | Las propiedades VAN dentro del cuerpo con `this.x = ...`, no afuera |
| `this is undefined` adentro del método | Llamó al método sin punto | `cena.esIngreso()` — el `this` viene del objeto a la izquierda del punto |
| El form recarga la página al submit | Olvidó `event.preventDefault()` | Es la línea más importante del listener |
| `null` al hacer querySelector | El script corre antes que el HTML exista | Confirmar que `<script>` está al FINAL del `<body>` |
| `NaN` en el valor | `parseFloat(document.querySelector('#valor').value)` con input vacío | Validar `if (isNaN(valor))` antes de instanciar |
| Constructora sin mayúscula | Convención violada | Renombrar a `Movimiento` (mayúscula). Funciona igual pero es señal de novato |
| Quiere `class` ES6 desde ya | Conoce sintaxis más moderna | "En M4. Hoy entiendes lo que `class` hace POR DEBAJO." |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Diferencia objeto literal de constructora (y sabe cuándo usar cada uno).
- Explica por qué `Movimiento(...)` sin `new` falla.
- Reconoce que `cena.esIngreso()` funciona porque `this = cena`.
- Conecta el refactor del modelo con la integridad de datos.

### El estudiante NECESITA AYUDA cuando:
- Confunde `this` con una variable normal.
- Olvida `new` al crear instancias.
- Sigue usando 2 arrays paralelos (no internalizó el refactor).
- Trata métodos como funciones globales (`esIngreso(cena)` en vez de `cena.esIngreso()`).

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~15' | P0 lista | Crea un objeto literal con 3 propiedades y lee una con `.`. Identifica shorthand. |
| ~40' | P1 lista | `movimientos` es array de objetos. `registrarMovimiento` hace 1 solo push. Filtros con `.tipo` funcionan. |
| ~70' | P2 lista | Crea 3 instancias de `Movimiento` y las agrega a un `Presupuesto`. `miPresupuesto.resumen()` devuelve objeto con cantidad/totales/saldo. |
| ~105' | P3 lista | Cada submit del form crea instancia + actualiza `#saldo-total` en pantalla. Form se limpia. |

Si NO llega al Checkpoint 3 en 105 min: que cierre con P2 y termine P3 post-clase. P3 es importante pero no calificada todavía (eso es C08).

---

## 🧑‍🏫 Tips de Facilitación

### Si el grupo está callado:
- "¿Qué propiedades tendría un objeto `Producto` de un e-commerce?" — práctica de modelado.

### Si alguien ya conocía `class`:
- "Esa sintaxis llega en M4. Hoy hacemos la versión 'cruda' — y vas a ver que `class` es azúcar sobre esto."

### Si la mayoría termina P2 antes:
- Reto: implementar `obtenerMovimientosPorMes(mes)` usando la propiedad `fecha`.

### Si pregunta sobre `this` con arrow functions:
> "Arrow functions tienen `this` distinto a `function`. Hoy usamos `function` clásica adentro de la constructora. En M3/M4 lo profundizamos."

### Si el form NO funciona:
1. Revisar que `<script src="app.js">` esté al final del body.
2. Confirmar `event.preventDefault()`.
3. Verificar IDs del HTML coinciden con los selectores.

---

## ❓ Preguntas Frecuentes

### P: ¿Por qué `Movimiento` con mayúscula?
**R:** Convención. Recuerda al lector (y a ti) que es una **constructora** y que necesita `new`. Sin `new`, `Movimiento(...)` devuelve `undefined`.

### P: ¿Puedo crear el objeto literal directamente sin constructora?
**R:** Sí, totalmente: `let m = { nombre: 'Cena', tipo: 'gasto', valor: 45 }`. La constructora aporta consistencia + reutilización cuando creas MUCHOS objetos del mismo "tipo".

### P: ¿`this` es como `self` en Python?
**R:** Muy parecido — apunta al objeto actual. La diferencia: en Python `self` es explícito en cada método. En JS `this` es implícito y depende de cómo se invoque.

### P: ¿Cómo se borra una propiedad de un objeto?
**R:** `delete obj.propiedad`. Pero raramente lo necesitas — usualmente asignas `obj.prop = null` o ignoras la propiedad.

### P: ¿Para qué `event.preventDefault()`?
**R:** El navegador por defecto recarga la página al hacer submit de un form. Eso destruye tu estado JS. `preventDefault` lo evita.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C05 | Arrays + push | Hoy guardamos OBJETOS en el array |
| C06 | `.filter`, `.reduce` | Hoy operan sobre objetos: `m => m.tipo === 'ingreso'` |
| C01-C04 (M1) | `<form>`, `<input>`, `<label>` | Hoy capturas su `.value` desde JS |

### Conexión con C08 (Prototipos)

Al cerrar:

> "Cada instancia de Movimiento que crearon hoy tiene SU PROPIO `esIngreso`. Si crean 1000 movimientos, son 1000 copias del mismo método. La próxima clase aprenden **prototipos**: el método vive UNA sola vez y todas las instancias lo comparten. Y van a crear **subtipos**: `Ingreso` e `Egreso` que heredan de `Movimiento`."

**Pre-work implícito:** revisar [MDN — Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain){:target="_blank"} para tener primer contacto antes de C08.

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Cuántos olvidaron `new` al menos una vez? Si fue mayoría, refuerza la convención de mayúscula al inicio de C08.
- ¿Quién conectó P3 (form) en menos de 20 min? Son los que están listos para M3 (DOM).
- ¿Algún alumno preguntó "¿esto es como en mi otro lenguaje (Python/Java)"? Buena señal — están conectando.
- ¿La analogía del molde de galletas funcionó? Si no, prueba otra para C08.
