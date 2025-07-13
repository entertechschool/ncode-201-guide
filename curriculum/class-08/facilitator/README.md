# Guía del Facilitador: Prototipos en JavaScript

## 1. El momento pedagógico clave

Los estudiantes llegan a esta clase habiendo dominado funciones constructoras y el concepto de `this`, pero ahora deben experimentar la transformación mental más profunda del módulo: entender que JavaScript no solo permite crear objetos, sino que tiene un sistema de herencia nativo basado en prototipos que es fundamentalmente diferente a las clases tradicionales. El "click" conceptual aquí es reconocer que cada método que colocan en el constructor está creando una nueva función en memoria para cada instancia, y que existe una forma más elegante y eficiente de compartir comportamientos.

```javascript
// El "antes" - ineficiencia de memoria
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
  this.calcularImpacto = function() { // Nueva función para cada instancia
    return this.tipo === 'ingreso' ? this.valor : -this.valor;
  };
}

// El "después" - optimización con prototipos
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
}
Movimiento.prototype.calcularImpacto = function() { // Una función compartida
  return this.tipo === 'ingreso' ? this.valor : -this.valor;
};
```

Este cambio representa la maduración hacia un pensamiento arquitectónico más sofisticado, donde la eficiencia de recursos y la escalabilidad se vuelven consideraciones primarias, preparándolos para el pensamiento que necesitarán en frameworks como React donde la optimización de componentes es crucial.

## 2. Constructor.prototype: Más que optimización de memoria

La decisión de enseñar `Constructor.prototype` como patrón fundamental no es una reliquia del pasado, es preparación estratégica para comprender cómo funciona JavaScript internamente. Los estudiantes necesitan entender que incluso cuando usen la sintaxis `class` en Code 301, bajo el capó JavaScript sigue usando el sistema de prototipos que están aprendiendo ahora.

```javascript
// Patrón prototipal: el mecanismo real de JavaScript
function Presupuesto() {
  this.movimientos = [];
}

// Métodos compartidos en el prototipo
Presupuesto.prototype.agregarMovimiento = function(movimiento) {
  this.movimientos.push(movimiento);
  this.actualizarBalance(); // Método interno que también usa prototipos
};

Presupuesto.prototype.actualizarBalance = function() {
  // Lógica compartida entre todas las instancias
  console.log(`Balance actual: ${this.calcularTotal()}`);
};

// Cada instancia accede a los mismos métodos en memoria
const presupuesto1 = new Presupuesto();
const presupuesto2 = new Presupuesto();
console.log(presupuesto1.agregarMovimiento === presupuesto2.agregarMovimiento); // true
```

Esta comprensión profunda les permitirá entender por qué React puede re-renderizar componentes eficientemente, por qué los hooks funcionan como funcionan, y por qué las optimizaciones de performance en aplicaciones modernas son posibles.

## 3. Object.create() vs. la sobrecarga de herencia tradicional

En lugar de introducir conceptos complejos de herencia múltiple o patrones académicos, usamos `Object.create()` como la herramienta precisa para establecer relaciones prototipos de manera explícita y controlada. Esta elección pedagógica evita la confusión de sintaxis mientras enfoca en el concepto fundamental.

```javascript
// Herencia prototipal explícita y limpia
function Ingreso(nombre, valor, fuente) {
  Movimiento.call(this, nombre, 'ingreso', valor); // Llamada explícita al constructor padre
  this.fuente = fuente;
}

// Establecimiento claro de la cadena prototipal
Ingreso.prototype = Object.create(Movimiento.prototype);
Ingreso.prototype.constructor = Ingreso; // Importante para instanceof

// Especialización sin romper la cadena
Ingreso.prototype.esFijo = function() {
  return ['salario', 'pension', 'renta'].includes(this.fuente);
};
```

La belleza de este enfoque es que cada paso es explícito y debuggeable. Los estudiantes pueden inspeccionar cada parte de la cadena en DevTools y entender exactamente qué está sucediendo, preparándolos para diagnosticar problemas en aplicaciones más complejas.

## 4. instanceof y hasOwnProperty: Validación en tiempo real

Estos métodos no son curiosidades técnicas, son herramientas de supervivencia en aplicaciones complejas donde la validación de tipos se vuelve crítica. Los estudiantes deben experimentar la potencia de tener validaciones robustas que funcionen a través de jerarquías de herencia.

```javascript
// Validación sofisticada en sistemas complejos
function validarMovimiento(obj) {
  // Verificar que es instancia de la jerarquía correcta
  if (!(obj instanceof Movimiento)) {
    throw new Error('Objeto debe ser instancia de Movimiento');
  }
  
  // Verificar propiedades propias vs heredadas
  if (!obj.hasOwnProperty('valor') || !obj.hasOwnProperty('fecha')) {
    throw new Error('Faltan propiedades requeridas');
  }
  
  // Validación específica por tipo
  if (obj instanceof Ingreso && !obj.hasOwnProperty('fuente')) {
    throw new Error('Ingreso debe tener fuente definida');
  }
  
  return true;
}

// Filtrado inteligente por tipo
function separarPorTipo(movimientos) {
  return {
    ingresos: movimientos.filter(m => m instanceof Ingreso),
    egresos: movimientos.filter(m => m instanceof Egreso),
    ingresosFijos: movimientos.filter(m => m instanceof Ingreso && m.esFijo())
  };
}
```

Esta capacidad de validación y filtrado dinámico es exactamente lo que necesitarán en React cuando trabajen con props, estado y componentes condicionales.

## 5. Cadena de prototipos: La unidad fundamental de escalabilidad

La cadena de prototipos no es un concepto abstracto, es el mecanismo que permite que las aplicaciones JavaScript escalen sin colapsar bajo su propio peso. Los estudiantes deben experimentar cómo una decisión arquitectónica al nivel de prototipos impacta la performance y mantenibilidad de toda la aplicación.

Los principios universales que internalizan aquí son:
- **Delegación eficiente**: Un método definido una vez, usado por miles de instancias
- **Extensibilidad controlada**: Nuevos comportamientos sin modificar código existente
- **Debugging predecible**: Cadena de búsqueda clara y rastreable

```javascript
// Extensibilidad sin modificación
// Después de que la aplicación está en producción, podemos agregar:
Movimiento.prototype.convertirMoneda = function(tasaCambio) {
  return this.valor * tasaCambio;
};

// Inmediatamente disponible para todas las instancias existentes
// Sin necesidad de modificar código o recrear objetos
```

## 6. Bootstrap integration: Pragmatismo sobre purismo UI

La decisión de usar Bootstrap en lugar de CSS puro es estratégicamente pragmática. Los estudiantes necesitan experimentar cómo los sistemas de prototipos interactúan con frameworks UI reales, no con ejemplos académicos. Bootstrap les permite crear interfaces profesionales rápidamente mientras se enfocan en la lógica prototipal.

```javascript
// Integración realista con frameworks UI
function renderizarMovimiento(movimiento) {
  const tipoClase = movimiento instanceof Ingreso ? 'alert-success' : 'alert-danger';
  const icono = movimiento instanceof Ingreso ? '💰' : '💸';
  
  return `
    <div class="alert ${tipoClase} d-flex justify-content-between">
      <span>${icono} ${movimiento.formatear()}</span>
      <small>${movimiento.constructor.name}</small>
    </div>
  `;
}
```

Esta integración les enseña que los prototipos no existen en el vacío, sino que forman parte de un ecosistema más amplio de herramientas y frameworks.

## 7. Gestión de la frustración inicial

**Frustración típica:** "¿Por qué no puedo poner simplemente todos los métodos en el constructor? Es más fácil."

**Estrategia de facilitación:** Reconoce que la simplicidad inicial es tentadora, pero usa la analogía de la biblioteca: "Si cada persona llevara todos los libros que necesita en su mochila, sería más 'simple' no tener que ir a la biblioteca, pero imagina el peso. Los prototipos son la biblioteca compartida."

**Pregunta clave para la clase:** "Si tu aplicación tuviera 10,000 movimientos, ¿preferirías 10,000 copias de la función `calcularImpacto()` o una sola función compartida?"

**Frustración típica:** "No entiendo cuándo usar `prototype` vs cuándo usar `__proto__`."

**Estrategia de facilitación:** Mantén `__proto__` como herramienta de inspección únicamente. Enfoca en que `prototype` es para desarrolladores (cuando escribes código) y `__proto__` es para JavaScript interno (cuando debuggeas).

**Pregunta clave para la clase:** "¿Alguna vez escribirías código que modifique `__proto__` directamente, o es solo para entender qué está pasando cuando debuggeas?"

## 8. El error más común: Romper la cadena prototipal

```javascript
// ❌ Error típico que cometerán
function Ingreso(nombre, valor, fuente) {
  Movimiento.call(this, nombre, 'ingreso', valor);
  this.fuente = fuente;
}

// Asignación directa que rompe instanceof
Ingreso.prototype = Movimiento.prototype; // ¡MALO!

// ✅ Versión correcta con explicación
Ingreso.prototype = Object.create(Movimiento.prototype);
Ingreso.prototype.constructor = Ingreso;

// Verificación que funciona correctamente
const ingreso = new Ingreso('Salario', 3000, 'trabajo');
console.log(ingreso instanceof Ingreso); // true
console.log(ingreso instanceof Movimiento); // true - ¡esto es lo importante!
```

Este error es pedagógicamente perfecto porque enseña la diferencia entre referencia y herencia. Úsalo para explicar que `Object.create()` establece una nueva cadena, mientras que la asignación directa crea una referencia compartida que rompe la especialización.

## 9. Señales de comprensión exitosa

Al final de la clase, busca estas evidencias de comprensión genuina:

- **Vocabulario preciso**: Distinguen claramente entre "prototipo", "cadena prototipal" y "herencia prototipal"
- **Pensamiento en optimización**: Automáticamente consideran la eficiencia de memoria al diseñar objetos
- **Debugging instintivo**: Usan DevTools para inspeccionar la cadena prototipal cuando algo no funciona

**Pregunta de validación final:** "Si quisieras agregar un método `exportarCSV()` a todos los movimientos existentes y futuros en tu aplicación, sin modificar el código de los constructores, ¿cómo lo harías?"

Solo responden correctamente si proponen agregar el método al prototipo después de que los constructores ya están definidos, demostrando que entienden la naturaleza dinámica y extensible de los prototipos.

## 10. Preparación para la siguiente clase

Los conceptos de esta clase son prerrequisito directo para DOM como API de objetos. La próxima clase usará la mentalidad prototipal para entender cómo `document.querySelector()` retorna objetos con métodos heredados, y cómo los eventos son objetos con su propia cadena prototipal.

**Conceptos que DEBEN estar sólidos:**
- **Cadena de prototipos**: Deben poder rastrear mentalmente la búsqueda de un método
- **Object.create() vs asignación directa**: Sin confusión sobre cuándo usar cada uno

**Conceptos que pueden seguir madurando:**
- **Cuándo usar herencia vs composición**: La intuición arquitectónica se desarrolla con práctica
- **Performance de prototipos**: Los matices de optimización vienen con experiencia

La clase fue exitosa si los estudiantes salen pensando: *"Ahora entiendo que JavaScript tiene un sistema de herencia nativo que es diferente pero más flexible que las clases tradicionales, y puedo usar este conocimiento para escribir código más eficiente y escalable."*

## Notas técnicas y troubleshooting

### Configuración crítica
- Verificar que Bootstrap CDN funciona antes de empezar
- Confirmar que DevTools está disponible para inspección de prototipos

### Errores comunes del entorno
- **Error**: `Cannot read property 'prototype' of undefined`
- **Solución**: Verificar que las funciones constructoras están declaradas antes de intentar extender sus prototipos
- **Prevención**: Usar el patrón de declarar todos los constructores primero, luego todos los prototipos

### Errores comunes de concepto
- **Error**: `instanceof` retorna `false` después de herencia
- **Solución**: Verificar que se usó `Object.create()` y no asignación directa
- **Prevención**: Crear un checklist: "¿Usé Object.create()? ¿Restablecí el constructor?"

### Recursos de emergencia
- [MDN: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- Código de ejemplo para compartir pantalla si hay problemas técnicos:

```javascript
// Ejemplo de rescate completo
function Animal(nombre) {
  this.nombre = nombre;
}

Animal.prototype.hablar = function() {
  return `${this.nombre} hace un sonido`;
};

function Perro(nombre, raza) {
  Animal.call(this, nombre);
  this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.hablar = function() {
  return `${this.nombre} ladra`;
};

const miPerro = new Perro('Max', 'Labrador');
console.log(miPerro.hablar()); // "Max ladra"
console.log(miPerro instanceof Perro); // true
console.log(miPerro instanceof Animal); // true
```
