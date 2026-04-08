# Test Módulo 2 - Questions

> ⚠️ **Documento para facilitadores** - Contiene respuestas y retroalimentación

**8 preguntas diagnósticas**

---

## Preguntas 1-2 (Clase 05: Programación Imperativa)

### Pregunta 1 (Conceptual)

¿Cuál de las siguientes afirmaciones describe mejor el paradigma de **programación imperativa**?

- A) Se enfoca en describir *qué* resultado se desea, dejando al intérprete decidir *cómo* obtenerlo
- B) Describe paso a paso *cómo* realizar una tarea, modificando el estado del programa mediante instrucciones secuenciales
- C) Organiza el código exclusivamente en objetos que encapsulan datos y comportamientos
- D) Prohíbe el uso de variables y estructuras de control como `if` o `for`

> Respuesta: B

> **Retroalimentación:** La programación imperativa se caracteriza por describir el *cómo*: instrucciones secuenciales que van modificando el estado (variables, arrays) paso a paso. La opción A describe la programación declarativa/funcional. La opción C corresponde a POO. La opción D es falsa: las estructuras de control son herramientas centrales del enfoque imperativo.

---

### Pregunta 2 (Aplicación)

Observa el siguiente código imperativo:

```javascript
let total = 0;
const gastos = [50, 120, 30, 80];
for (let i = 0; i < gastos.length; i++) {
  total = total + gastos[i];
}
console.log(total);
```

¿Qué valor imprime el `console.log` y qué característica imperativa utiliza?

- A) Imprime `280` y utiliza mutación de una variable global (`total`) mediante un bucle
- B) Imprime `[50, 120, 30, 80]` porque el bucle recorre el array sin modificarlo
- C) Imprime `undefined` porque `total` no se inicializa correctamente
- D) Imprime `4` porque solo cuenta la cantidad de elementos del array

> Respuesta: A

> **Retroalimentación:** El bucle `for` suma cada elemento del array a la variable `total` (50+120+30+80 = 280). Esto ejemplifica una característica típica del paradigma imperativo: **mutar una variable externa** paso a paso dentro de un loop. Las otras opciones son incorrectas: `total` sí se inicializa en `0` (descarta C), el bucle sí acumula un valor numérico (descarta B y D).

---

## Preguntas 3-4 (Clase 06: Programación Funcional)

### Pregunta 3 (Conceptual)

¿Cuál de las siguientes es una característica obligatoria de una **función pura**?

- A) Debe usar `console.log()` para mostrar sus resultados
- B) Debe modificar al menos una variable global para ser considerada útil
- C) Debe retornar siempre el mismo resultado para los mismos argumentos y no producir efectos secundarios
- D) Debe estar escrita siempre usando arrow functions (`=>`)

> Respuesta: C

> **Retroalimentación:** Una función pura cumple dos reglas: (1) dado el mismo input, siempre retorna el mismo output, y (2) no produce efectos secundarios (no modifica variables externas, no imprime, no lee/escribe archivos, etc.). La opción A y B describen efectos secundarios, que hacen a una función **impura**. La opción D es falsa: una función pura puede escribirse con `function` tradicional o arrow function; la sintaxis no determina la pureza.

---

### Pregunta 4 (Aplicación)

Dado el siguiente array de movimientos, ¿qué método funcional usarías para obtener un **nuevo array** que contenga solo los movimientos cuyo `monto` sea mayor a 100?

```javascript
const movimientos = [
  { tipo: "gasto", monto: 50 },
  { tipo: "gasto", monto: 200 },
  { tipo: "ingreso", monto: 150 }
];
```

- A) `movimientos.map(m => m.monto > 100)`
- B) `movimientos.filter(m => m.monto > 100)`
- C) `movimientos.find(m => m.monto > 100)`
- D) `movimientos.forEach(m => m.monto > 100)`

> Respuesta: B

> **Retroalimentación:** `filter()` retorna un **nuevo array** con todos los elementos que cumplen la condición — exactamente lo que pide el enunciado. `map()` (A) transformaría cada elemento, retornando un array de booleanos `[false, true, true]`, no los objetos. `find()` (C) retornaría solo el **primer** elemento que cumpla la condición, no todos. `forEach()` (D) no retorna nada (retorna `undefined`), solo itera.

---

## Preguntas 5-6 (Clase 07: Programación Orientada a Objetos)

### Pregunta 5 (Conceptual)

En JavaScript, ¿cuál es el propósito de la palabra clave `new` al invocar una función constructora como `new Movimiento("gasto", 100)`?

- A) Ejecuta la función constructora pero descarta su resultado
- B) Crea un nuevo objeto vacío, lo vincula al constructor y permite que `this` dentro de la función apunte a ese nuevo objeto
- C) Convierte cualquier función en una función pura sin efectos secundarios
- D) Hace que la función se ejecute de manera asíncrona

> Respuesta: B

> **Retroalimentación:** Cuando usas `new` con una función constructora, JavaScript: (1) crea un objeto vacío, (2) vincula `this` dentro del constructor a ese objeto, (3) ejecuta el cuerpo del constructor (asignando propiedades con `this.x = ...`), y (4) retorna el nuevo objeto automáticamente. Las opciones A, C y D describen comportamientos inexistentes: `new` no descarta resultados, no convierte funciones en puras, ni genera ejecución asíncrona.

---

### Pregunta 6 (Aplicación)

Observa el siguiente código:

```javascript
function Movimiento(tipo, monto) {
  this.tipo = tipo;
  this.monto = monto;
}
const m1 = new Movimiento("gasto", 200);
console.log(m1.monto);
```

¿Qué imprime en consola y por qué?

- A) `undefined`, porque `this.monto` no se asignó correctamente
- B) `"gasto"`, porque `monto` siempre toma el valor del primer argumento
- C) `200`, porque `new` crea el objeto y asigna `monto = 200` al `this` del nuevo objeto
- D) Un error, porque falta la sintaxis `class` para crear objetos

> Respuesta: C

> **Retroalimentación:** `new Movimiento("gasto", 200)` crea un nuevo objeto donde `this.tipo = "gasto"` y `this.monto = 200`. Al acceder a `m1.monto` se obtiene `200`. La opción A es incorrecta: `this.monto` sí se asigna. La B confunde los argumentos. La D es falsa: en Code 201 se usan **funciones constructoras** con `new`, no la sintaxis `class` (esa se reserva para Code 301).

---

## Pregunta 7 (Clase 08: Aplicación Práctica - Prototipos)

### Pregunta 7

En el Gestor de Presupuesto, quieres que **todas las instancias** de `Movimiento` compartan el mismo método `describir()` sin duplicarlo en memoria por cada objeto. ¿Cuál es la forma correcta de definirlo?

- A) Asignar `this.describir = function() {...}` dentro del constructor
- B) Asignar `Movimiento.prototype.describir = function() {...}` fuera del constructor
- C) Declarar `describir()` como una función global al inicio del archivo
- D) Usar `Object.create(describir)` dentro del constructor

> Respuesta: B

> **Retroalimentación:** Al asignar métodos al **prototipo** del constructor (`Movimiento.prototype.describir = ...`), el método vive **una sola vez** en memoria y todas las instancias lo comparten a través de la cadena de prototipos. La opción A funciona, pero crea una copia del método en **cada instancia**, desperdiciando memoria — justamente lo que los prototipos buscan evitar. La opción C no asocia el método al constructor ni permite usar `this` para acceder al estado del objeto. La D malinterpreta el uso de `Object.create()`, que sirve para establecer herencia entre prototipos, no para definir métodos.

---

## Pregunta 8 (Autoevaluación)

### Pregunta 8

Después de completar este módulo, ¿cómo describirías tu nivel de confianza para **refactorizar una aplicación JavaScript desde programación imperativa hacia un modelo orientado a objetos con prototipos**?

- A) Muy seguro/a - podría hacerlo sin ayuda
- B) Bastante seguro/a - con algo de referencia
- C) Algo inseguro/a - necesitaría bastante guía
- D) Muy inseguro/a - no sabría por dónde empezar

> ⚠️ Sin respuesta correcta - todas las opciones son válidas para diagnóstico

> **Retroalimentación:** Usa tu respuesta para planificar tu estudio. Si elegiste C o D, revisa el material del módulo o consulta con tu instructor.
