# Clase 07: Programación Orientada a Objetos

## 🎯 Objetivo General

Refactorizar el **Gestor de Presupuesto Personal** aplicando programación orientada a objetos con funciones constructoras, transformando funciones puras en objetos que encapsulen datos y comportamientos.

---

## 💡 ¿Por qué aprender Programación Orientada a Objetos?

* **Organización de código**: Agrupa datos y comportamientos relacionados en un solo lugar
* **Reutilización**: Crea múltiples instancias con las mismas características pero datos diferentes
* **Preparación profesional**: Base fundamental para frameworks modernos y patrones de diseño

> "La programación orientada a objetos es como organizar tu casa: cada objeto tiene su lugar y sabe exactamente qué debe hacer."

---

## 🧠 ¿Qué es una Función Constructora exactamente?

* **Función especial**: Crea y configura objetos nuevos usando la palabra clave `new`
* **Convención de nomenclatura**: Comienza con mayúscula (PascalCase)
* **Contexto de uso**: Cuando necesitas crear múltiples objetos con la misma estructura

> "Una función constructora es como un molde: defines una vez y produces tantos objetos como necesites."

---

## 🔧 Función Constructora Básica

```javascript
// Función constructora para Movimiento
function Movimiento(nombre, tipo, valor) {
  // ✅ Usar this.propiedad para el estado
  this.nombre = nombre;
  this.tipo = tipo;
  this.valor = valor;
  this.fecha = new Date().toLocaleDateString();
  
  // ✅ Usar this.metodo = function() {} para comportamientos
  this.esIngreso = function() {
    return this.tipo === 'ingreso';
  };
}
```

* **`this` keyword**: Referencia al objeto que está siendo creado
* **Propiedades**: Datos específicos del objeto (`this.nombre`)
* **Métodos**: Comportamientos del objeto (`this.esIngreso`)

---

## 🧩 Instanciación de Objetos

```javascript
// Crear instancias usando 'new'
const salario = new Movimiento('Salario', 'ingreso', 3000);
const comida = new Movimiento('Comida', 'gasto', 200);

// Usar las instancias
console.log(salario.nombre); // "Salario"
console.log(salario.esIngreso()); // true
console.log(comida.esIngreso()); // false
```

| **Concepto** | **Descripción** | **Ejemplo** |
|--------------|-----------------|-------------|
| **new** | Palabra clave para crear instancias | `new Movimiento()` |
| **Instancia** | Objeto específico creado | `salario`, `comida` |
| **Encapsulación** | Datos y métodos juntos | `salario.esIngreso()` |

---

## 🔢 Parte 1: Funciones Constructoras Básicas (~30 min)

### 🎯 Objetivo:
Crear las primeras funciones constructoras para `Movimiento` y `Presupuesto`

### ✅ Criterios de Validación:
- ✅ Función constructora `Movimiento` con propiedades y métodos
- ✅ Función constructora `Presupuesto` con array de movimientos
- ✅ Instanciación correcta usando `new`

---

## 🧮 Parte 2: Encapsulación de Comportamientos (~40 min)

### 🎯 Objetivo:
Implementar métodos en las funciones constructoras para manejar la lógica del presupuesto

### ✅ Criterios de Validación:
- ✅ Método `agregarMovimiento()` en Presupuesto
- ✅ Método `calcularBalance()` funcionando
- ✅ Reto en vivo: Método `filtrarPorTipo()` completado

### 🚀 Reto en Vivo (10 min):
Implementar `filtrarPorTipo(tipo)` que retorne solo ingresos o gastos

---

## 📊 Parte 3: Captura desde Formulario (~35 min)

### 🎯 Objetivo:
Conectar tu modelo OOP con un formulario HTML pre-armado. El alumno escribe SOLO el JS de captura.

### El puente JS ↔ Form (4 líneas clave)

```javascript
const form = document.querySelector('#form-movimiento');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.querySelector('#nombre').value;
  const tipo = document.querySelector('#tipo').value;
  const valor = parseFloat(document.querySelector('#valor').value);
  miPresupuesto.agregarMovimiento(new Movimiento(nombre, tipo, valor));
  form.reset();
});
```

### ✅ Criterios de Validación:
- ✅ El form HTML viene pre-armado (no se modifica)
- ✅ `event.preventDefault()` evita la recarga
- ✅ Cada submit agrega una instancia al `Presupuesto`
- ✅ La consola muestra el array de movimientos creciendo

> ⚠️ Esta clase NO es "DOM completo" — solo captura de input. Render dinámico y manipulación de nodos llega en M3.

---

## 🌟 Logros Adicionales

### Logro 1: Persistencia Básica
* Método `exportarJSON()` que convierta el presupuesto a JSON
* Método `importarJSON()` que restaure desde JSON

### Logro 2: Métodos de Análisis
* `obtenerPromedioGastos()` y `obtenerMayorGasto()`
* Dashboard visual con estadísticas automáticas

---

## 💭 Síntesis y Reflexión

### 🎯 Conceptos Clave Consolidados:
* **Función Constructora**: Molde para crear objetos
* **`this` keyword**: Contexto del objeto actual
* **Encapsulación**: Datos y comportamientos unidos
* **Instanciación**: Crear objetos específicos con `new`

### ❓ Preguntas de Reflexión:
* ¿Cómo cambió la organización de tu código?
* ¿Qué ventajas notas al usar objetos vs funciones puras?
* ¿Qué parte te resultó más desafiante?