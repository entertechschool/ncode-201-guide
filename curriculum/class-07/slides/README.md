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

## 📊 Parte 3: Refactorización Completa (~50 min)

### 🎯 Objetivo:
Reemplazar toda la lógica funcional con objetos y conectar con el DOM

### ✅ Criterios de Validación:
- ✅ Interfaz HTML conectada con objetos
- ✅ Formularios creando instancias de Movimiento
- ✅ Reto en vivo: Validaciones de datos completadas

### 🚀 Reto en Vivo (10 min):
Agregar validación que impida valores negativos en ingresos

### 🏆 Retos Autónomos (25 min):

**Reto Básico**: Método `obtenerResumen()` que retorne objeto con totales
**Reto Intermedio**: Método `eliminarMovimiento(id)` por posición
**Reto Avanzado**: Implementar `editarMovimiento(id, nuevosDatos)`

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