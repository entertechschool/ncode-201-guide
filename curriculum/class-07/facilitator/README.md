# Guía del Facilitador: Programación Orientada a Objetos

## 1. El momento pedagógico clave

Los estudiantes llegan a esta clase con una mentalidad completamente funcional después de haber experimentado las transformaciones elegantes de `map()`, `filter()` y `reduce()`. El "click" mental que deben experimentar aquí no es solo entender la sintaxis de funciones constructoras, sino reconocer que la arquitectura de software tiene múltiples paradigmas y que cada uno resuelve problemas específicos de manera diferente.

```javascript
// El "antes" - pensamiento funcional puro
const calcularBalance = (movimientos) => {
  return movimientos
    .filter(m => m.tipo === 'ingreso')
    .reduce((total, m) => total + m.valor, 0) - 
  movimientos
    .filter(m => m.tipo === 'gasto')  
    .reduce((total, m) => total + m.valor, 0);
};

// El "después" - pensamiento orientado a objetos
function Presupuesto() {
  this.movimientos = [];
  this.calcularBalance = function() {
    return this.obtenerIngresos() - this.obtenerGastos();
  };
}
```

Este cambio marca la transición desde "¿cómo proceso estos datos?" hacia "¿cómo organizo este comportamiento?". Es fundamental porque prepara la mentalidad arquitectónica que necesitarán para frameworks modernos como React, donde todo es un componente con estado y comportamiento encapsulado.

## 2. Funciones Constructoras: Más que alternativa a `class`

La decisión de enseñar funciones constructoras antes que la sintaxis `class` ES6 no es nostálgica, es estratégicamente pedagógica. Los estudiantes necesitan entender cómo JavaScript realmente construye objetos bajo el capó antes de usar abstracciones sintácticas que ocultan esta mecánica.

```javascript
// Función constructora: el mecanismo real de JavaScript
function Movimiento(nombre, tipo, valor) {
  // `this` se crea automáticamente cuando usas `new`
  this.nombre = nombre;        // Propiedad de instancia
  this.tipo = tipo;
  this.valor = valor;
  this.fecha = new Date();
  
  // Método como propiedad de función
  this.esIngreso = function() {
    return this.tipo === 'ingreso';  // `this` referencia la instancia
  };
}

// Cada instancia tiene sus propias copias de todo
const salario = new Movimiento('Salario', 'ingreso', 3000);
console.log(salario.esIngreso()); // true
```

La comprensión profunda de `this`, `new`, y la creación manual de objetos es crucial porque cuando lleguen a React, entenderán por qué `this.setState()` funciona como funciona, y por qué los arrow functions tienen problemas con `this` en métodos de clase.

## 3. `this` vs. la complejidad de contextos

El concepto de `this` es donde muchos bootcamps fracasan porque lo enseñan como una regla abstracta en lugar de como el mecanismo fundamental de contexto en JavaScript. En esta clase, `this` debe entenderse como "el objeto que está siendo construido o manipulado en este momento".

```javascript
function Presupuesto() {
  this.movimientos = [];
  this.meta = 0;
  
  this.agregarMovimiento = function(movimiento) {
    // `this` aquí siempre referencia la instancia de Presupuesto
    this.movimientos.push(movimiento);
    this.recalcularEstado(); // método interno
  };
  
  this.recalcularEstado = function() {
    // Evitamos el problema de contexto perdido manteniendo todo dentro del constructor
    console.log(`Balance actual: ${this.calcularBalance()}`);
  };
}

// El patrón claro: `new` + función constructora = contexto garantizado
const miPresupuesto = new Presupuesto();
```

Esta comprensión sólida de `this` previene la confusión que viene después con arrow functions, métodos de array, y event handlers en el DOM.

## 4. Encapsulación: Sintaxis con propósito arquitectónico

La encapsulación en esta clase no es un concepto académico, es una necesidad práctica. Los estudiantes vienen de funciones que operan sobre datos externos y deben adoptar la mentalidad de "datos y comportamientos que van juntos, viven juntos".

```javascript
// Encapsulación efectiva: todo lo relacionado con un movimiento vive en Movimiento
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.valor = valor;
  this.fecha = new Date().toLocaleDateString();
  
  // Validaciones encapsuladas
  this.esValido = function() {
    return this.valor > 0 && ['ingreso', 'gasto'].includes(this.tipo);
  };
  
  // Transformaciones encapsuladas  
  this.formatearPorTipo = function() {
    return this.tipo === 'ingreso' ? `+$${this.valor}` : `-$${this.valor}`;
  };
}
```

Esta organización prepara para el pensamiento de componentes donde cada pieza de la UI es responsable de su propio estado y comportamiento.

## 5. Instanciación: La unidad fundamental de escalabilidad

Cada instancia que crean con `new` es una unidad independiente con su propio estado. Esto es fundamentalmente diferente al paradigma funcional donde todo state era externo. Los estudiantes deben experimentar la libertad de crear múltiples presupuestos sin interferencia entre ellos.

Los principios universales que aprenden aquí son:
- **Aislamiento de estado**: Cada instancia mantiene su propio estado sin contaminación
- **Composición**: Los objetos complejos se construyen combinando objetos simples  
- **Responsabilidad única**: Cada constructor tiene una responsabilidad clara y específica

```javascript
// Múltiples instancias = múltiples contextos independientes
const presupuestoPersonal = new Presupuesto();
const presupuestoFamiliar = new Presupuesto();

presupuestoPersonal.agregarMovimiento(new Movimiento('Salario', 'ingreso', 3000));
presupuestoFamiliar.agregarMovimiento(new Movimiento('Mercado', 'gasto', 500));

// Cada uno mantiene su estado independiente
console.log(presupuestoPersonal.movimientos.length); // 1
console.log(presupuestoFamiliar.movimientos.length);  // 1
```

## 6. Funciones vs Constructores: Pragmatismo sobre purismo

Los puristas del paradigma funcional argumentarán que los objetos introducen complejidad innecesaria. Sin embargo, para estudiantes que se dirigen hacia el ecosistema profesional de JavaScript (React, Node.js, frameworks), la orientación a objetos es inevitable y necesaria.

```javascript
// Pragmático: usar constructores cuando la agrupación lógica lo justifica
function Presupuesto() {
  this.movimientos = [];
  
  // Múltiples métodos relacionados agrupados logicamente
  this.agregarMovimiento = function(movimiento) { /*...*/ };
  this.eliminarMovimiento = function(index) { /*...*/ };
  this.editarMovimiento = function(index, nuevoDatos) { /*...*/ };
  this.obtenerResumen = function() { /*...*/ };
}

// En lugar de 4 funciones separadas que necesitan pasar el array como parámetro
```

La realidad es que el código profesional usa paradigmas híbridos. Esta clase enseña cuándo la agrupación orientada a objetos es superior a funciones dispersas.

## 7. Gestión de la frustración inicial

**Frustración típica:** "Esto es más complejo que las funciones puras. ¿Por qué no seguimos usando `map()` y `filter()`?"

**Estrategia de facilitación:** Reconoce que la complejidad aumentó, pero enfoca en el *tipo* de complejidad. No es complejidad técnica arbitraria, es complejidad arquitectónica que resuelve problemas reales de organización y escalabilidad.

**Pregunta clave para la clase:** "Si tuvieras que agregar 15 métodos más para manejar presupuestos, ¿prefieres 15 funciones separadas que todas necesitan recibir el mismo array como parámetro, o un objeto que ya tiene todo agrupado?"

**Frustración típica:** "`this` cambia de significado y me confunde."

**Estrategia de facilitación:** Mantén `this` siempre dentro del contexto de constructores durante esta clase. No introducir métodos de arrays, event handlers, o arrow functions que cambien el contexto. La confusión viene de ejemplos prematuros.

**Pregunta clave para la clase:** "Dentro de una función constructora, ¿`this` puede ser otra cosa que no sea el objeto que se está creando?"

## 8. El error más común: Llamar constructores sin `new`

```javascript
// ❌ Error típico que cometerán
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.valor = valor;
}

const movimiento = Movimiento('Salario', 'ingreso', 3000); // Sin `new`
console.log(movimiento); // undefined
console.log(nombre); // 'Salario' - contaminó el global scope

// ✅ Versión correcta con explicación
const movimiento = new Movimiento('Salario', 'ingreso', 3000);
console.log(movimiento.nombre); // 'Salario'
// `new` creó un objeto, enlazó `this` a ese objeto, y retornó el objeto automáticamente
```

Este error es pedagógicamente perfecto porque enseña la diferencia fundamental entre invocar una función y construir un objeto. Úsalo para explicar que `new` no es cosmético, es funcionalmente esencial para la construcción de objetos.

## 9. Señales de comprensión exitosa

Al final de la clase, busca estas evidencias de comprensión genuina:

- **Vocabulario apropiado**: Usan "instancia", "constructor", "encapsular" naturalmente, no "función que crea objetos"
- **Pensamiento arquitectónico**: Agrupan automáticamente datos y comportamientos relacionados sin ser dirigidos
- **Comprensión del flujo**: Pueden explicar paso a paso qué sucede cuando llamas `new Constructor()`

**Pregunta de validación final:** "Si quisieras crear un sistema para manejar estudiantes de un bootcamp, cada uno con nombre, progreso, y métodos para calificar tareas, ¿cómo lo organizarías usando lo que aprendiste hoy?"

Solo responden correctamente si pueden diseñar un constructor `Estudiante` con propiedades y métodos encapsulados, no si proponen funciones separadas.

## 10. Preparación para la siguiente clase

Los conceptos de esta clase son prerrequisito directo para prototipos y herencia. La próxima clase introducirá `Constructor.prototype` para compartir métodos entre instancias, optimizando memoria y creando jerarquías.

**Conceptos que DEBEN estar sólidos:**
- **Función constructora vs función regular**: Deben distinguir inmediatamente por nomenclatura y uso de `new`
- **`this` en contexto de constructor**: Sin confusión sobre a qué referencia dentro del constructor

**Conceptos que pueden seguir madurando:**
- **Cuándo usar objetos vs funciones**: La intuición arquitectónica se desarrolla con práctica
- **Patrones de organización**: Mejora con exposición a más casos de uso

La clase fue exitosa si los estudiantes salen pensando: *"Ahora puedo organizar mi código como entidades que tienen tanto datos como comportamientos, en lugar de solo funciones que procesan datos externos."*

## Notas técnicas y troubleshooting

### Configuración crítica
- Validar que todos tienen `console.log` visible en DevTools antes de empezar
- Confirmar que pueden crear archivos `.js` y vincularlos a HTML

### Errores comunes del entorno
- **Error**: `Uncaught ReferenceError: Movimiento is not defined`
- **Solución**: Verificar que el script esté correctamente vinculado y que la función constructora esté declarada antes de usarse
- **Prevención**: Usar `<script>` al final del `<body>` y declarar constructores al inicio del archivo

### Errores comunes de concepto
- **Error**: `Cannot read property 'nombre' of undefined` después de llamar constructor sin `new`
- **Solución**: Mostrar la diferencia lado a lado con y sin `new`
- **Prevención**: Crear un checklist: "¿Usé `new`? ¿La función empieza con mayúscula?"

### Recursos de emergencia
- [MDN: Constructor functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#using_a_constructor_function)
- Código de ejemplo para compartir pantalla si hay problemas técnicos:

```javascript
// Ejemplo de rescate completo
function EjemploBasico(nombre) {
  this.nombre = nombre;
  this.saludar = function() {
    return `Hola, soy ${this.nombre}`;
  };
}

const ejemplo = new EjemploBasico('Estudiante');
console.log(ejemplo.saludar());
```