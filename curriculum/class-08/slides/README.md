# Clase 08: Prototipos en JavaScript

## 🎯 Objetivo General

Optimizar el **Gestor de Presupuesto Personal** implementando la cadena de prototipos en JavaScript, moviendo métodos compartidos al prototipo y creando herencia prototipal con subtipos especializados.

---

## 💡 ¿Por qué aprender Prototipos?

* **Optimización de memoria**: Métodos compartidos entre todas las instancias
* **Herencia nativa**: Base fundamental de JavaScript antes de ES6 classes
* **Preparación profesional**: Comprensión profunda del funcionamiento interno de JS

> "Los prototipos son el corazón de JavaScript: entenderlos es entender cómo realmente funciona la herencia en este lenguaje."

---

## 🧠 ¿Qué es la Cadena de Prototipos exactamente?

* **Mecanismo de herencia**: Permite a objetos acceder a métodos y propiedades de sus prototipos
* **Búsqueda automática**: JavaScript busca métodos primero en el objeto, luego en su prototipo
* **Optimización**: Un método definido una vez es usado por todas las instancias

> "Es como una cadena de bibliotecas: si no encuentras un libro en tu biblioteca personal, automáticamente buscas en la biblioteca de tu familia."

---

## 🔧 Constructor.prototype: Métodos Compartidos

```javascript
// ❌ Métodos en constructor - cada instancia tiene su propia copia
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
  this.esIngreso = function() { // Nueva función para cada instancia
    return this.tipo === 'ingreso';
  };
}

// ✅ Métodos en prototipo - compartidos entre todas las instancias
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
}
Movimiento.prototype.esIngreso = function() { // Una sola función compartida
  return this.tipo === 'ingreso';
};
```

* **Eficiencia**: Una función vs N funciones en memoria
* **Mantenimiento**: Cambios en el prototipo afectan todas las instancias
* **Debugging**: Fácil inspección en DevTools

---

## 🧩 Herencia Prototipal con Object.create()

```javascript
// Constructor padre
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.valor = valor;
}

// Constructor hijo
function Ingreso(nombre, valor, fuente) {
  Movimiento.call(this, nombre, 'ingreso', valor); // Llamar constructor padre
  this.fuente = fuente;
}

// Establecer herencia prototipal
Ingreso.prototype = Object.create(Movimiento.prototype);
Ingreso.prototype.constructor = Ingreso;

// Método especializado
Ingreso.prototype.esFijo = function() {
  return ['salario', 'pension'].includes(this.fuente);
};
```

| **Concepto** | **Descripción** | **Uso** |
|--------------|-----------------|---------|
| **Object.create()** | Crea objeto con prototipo específico | Establecer herencia |
| **call()** | Ejecuta función con contexto específico | Llamar constructor padre |
| **instanceof** | Verifica tipo de objeto | Validaciones de herencia |

---

## 🔢 Parte 1: Migración a Prototipos (~30 min)

### 🎯 Objetivo:
Optimizar funciones constructoras moviendo métodos del constructor al prototipo

### ✅ Criterios de Validación:
- ✅ Métodos movidos correctamente a `Constructor.prototype`
- ✅ Instancias acceden a métodos compartidos
- ✅ Funcionalidad idéntica con mejor rendimiento

### 🏆 Reto Autónomo:
Agregar método `obtenerInfo()` al prototipo que retorne información completa del movimiento

---

## 🏗️ Parte 2: Herencia Prototipal (~40 min)

### 🎯 Objetivo:
Crear subtipos `Ingreso` y `Egreso` que heredan de `Movimiento`

### ✅ Criterios de Validación:
- ✅ Herencia establecida con `Object.create()`
- ✅ Métodos especializados funcionando
- ✅ Validaciones con `instanceof` operativas

### 🏆 Retos Autónomos:
**Reto 1**: Implementar `filtrarPorTipo(TipoConstructor)` usando `instanceof`
**Reto 2**: Agregar `contarPorCategoria()` que analice movimientos por tipo

---

## 🌐 Parte 3: Integración UI (~50 min)

### 🎯 Objetivo:
Integrar sistema de prototipos con interface HTML Bootstrap

### ✅ Criterios de Validación:
- ✅ Interface HTML funcional con formularios dinámicos
- ✅ Herencia prototipal integrada con DOM
- ✅ Inspección de cadena visible en DevTools

### 🏆 Retos Autónomos:
**Reto 1**: Botón "Limpiar Historial" funcional
**Reto 2**: Contador de movimientos por tipo en resumen
**Reto 3**: Método `exportarDatos()` que genere JSON completo

---

## 🔍 Validación con instanceof

```javascript
// Verificar tipos en tiempo de ejecución
const salario = new Ingreso('Salario', 3000, 'salario');
const comida = new Egreso('Comida', 200, 'comida');

console.log(salario instanceof Movimiento);  // true
console.log(salario instanceof Ingreso);     // true
console.log(comida instanceof Ingreso);      // false

// Filtrar por tipo específico
function filtrarIngresos(movimientos) {
  return movimientos.filter(m => m instanceof Ingreso);
}
```

---

### 🎯 Conceptos Clave Consolidados:
* **Constructor.prototype**: Métodos compartidos para optimización
* **Herencia Prototipal**: Especialización con `Object.create()`
* **instanceof**: Validación de tipos en jerarquías
* **Cadena de prototipos**: Mecanismo de búsqueda automática

### 💭 prototype vs __proto__:
* **`prototype`**: Propiedad de funciones, define qué heredarán las instancias
* **`__proto__`**: Propiedad de objetos, apunta a su prototipo actual


### Inspección en DevTools:
* **`__proto__`**: Referencia al prototipo del objeto
* **`prototype`**: Propiedad de las funciones constructoras
* **Cadena completa**: Desde objeto hasta Object.prototype

---

## 🌉 Puente sintáctico: de constructora a `class`

Lo que escribiste en P1-P2:

```javascript
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
}
Movimiento.prototype.formatear = function() {
  return `${this.nombre}`;
};
```

Es **azúcar sintáctica** para:

```javascript
class Movimiento {
  constructor(nombre, tipo, valor) {
    this.nombre = nombre;
  }
  formatear() {
    return `${this.nombre}`;
  }
}
```

- `class` NO es un mecanismo nuevo — JS sigue usando prototipos por debajo.
- En **M4** vas a usar `class` como sintaxis principal. Ya entiendes qué pasa abajo.

---

## 💭 Síntesis y Reflexión

* ¿Cuándo usar prototipos vs métodos en constructor?
* ¿Qué ventajas tiene `instanceof` sobre typeof?
* ¿Por qué JavaScript eligió prototipos en lugar de clases tradicionales?
* ¿Qué parte te resultó más desafiante?
