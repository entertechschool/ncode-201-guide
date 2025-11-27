# Laboratorio 07: Programación Orientada a Objetos

En este laboratorio refactorizamos el proyecto **Gestor de Presupuesto Personal** aplicando programación orientada a objetos con funciones constructoras. Transformaremos las funciones puras del laboratorio anterior en objetos que encapsulen tanto datos como comportamientos, creando un código más organizado y escalable.

Como parte de nuestro proyecto **Gestor de Presupuesto Personal**, esta transición hacia OOP nos permitirá agrupar la lógica relacionada y crear múltiples instancias de movimientos y presupuestos.

### 🎯 Objetivos de Aprendizaje

Al completar este laboratorio, serás capaz de:

1. **Implementar** funciones constructoras usando `function Constructor() {}` y `new`
2. **Encapsular** datos y comportamientos en objetos usando `this.propiedad` y `this.metodo`
3. **Refactorizar** código funcional hacia un enfoque orientado a objetos mantenible
4. **Crear** múltiples instancias de objetos para representar entidades del dominio

### 🔑 Conceptos Clave

- **Función Constructora**: Función especial que crea y configura objetos nuevos usando `new`
- **`this` keyword**: Referencia al objeto que está siendo creado o manipulado
- **Instanciación**: Proceso de crear objetos específicos desde una función constructora
- **Encapsulación**: Agrupar datos (propiedades) y comportamientos (métodos) relacionados

### ⚙️ Setup Inicial

**Estructura del repositorio:**
```
personal-budget/
├── index.html
├── app.js
├── functional-utils.js    (del laboratorio anterior)
├── oop-objects.js         (nuevo archivo)
└── README.md
```

**Datos base que manejaremos:**
```javascript
// En lugar de arrays simples, crearemos objetos con comportamientos
const presupuesto = new Presupuesto();
presupuesto.agregarMovimiento(new Movimiento('Salario', 'ingreso', 3000));
presupuesto.agregarMovimiento(new Movimiento('Comida', 'gasto', 200));
```

---

## Parte 1: Funciones Constructoras Básicas (~30 min)

> **Objetivo**: Crear las primeras funciones constructoras para representar entidades del presupuesto

#### 1.1. Constructor de Movimiento

Crea el archivo `oop-objects.js` y define la función constructora para movimientos:

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
  
  this.esGasto = function() {
    return this.tipo === 'gasto';
  };
}
```

#### 1.2. Instanciación de Objetos

Prueba la creación de objetos:

```javascript
// ✅ Usar new Constructor() para crear instancias
const salario = new Movimiento('Salario', 'ingreso', 3000);
const comida = new Movimiento('Comida', 'gasto', 200);

console.log('Salario es ingreso:', salario.esIngreso()); // true
console.log('Comida es gasto:', comida.esGasto()); // true
```

#### 1.3. Validación de Instancias

Verifica que los objetos se crean correctamente:

```javascript
console.log('Salario:', salario);
console.log('Tipo de salario:', typeof salario); // object
console.log('Propiedades:', salario.nombre, salario.tipo, salario.valor);
```

#### 1.4. 🏆 Reto Autónomo (5 min)

**Desafío**: Agrega un método `formatear()` al constructor `Movimiento` que retorne un string como `"Salario: +$3000"` para ingresos o `"Comida: -$200"` para gastos.

---

## Parte 2: Constructor de Presupuesto (~40 min)

> **Objetivo**: Crear el objeto principal que administre múltiples movimientos

#### 2.1. Constructor Principal

Implementa la función constructora que administre el presupuesto completo:

```javascript
function Presupuesto() {
  // Estado: array de movimientos
  this.movimientos = [];
  this.fechaCreacion = new Date().toLocaleDateString();
  
  // Comportamiento: agregar movimientos
  this.agregarMovimiento = function(movimiento) {
    if (movimiento instanceof Movimiento) {
      this.movimientos.push(movimiento);
      return true;
    }
    return false;
  };
  
  // Comportamiento: obtener totales
  this.obtenerTotalIngresos = function() {
    return this.movimientos
      .filter(mov => mov.esIngreso())
      .reduce((total, mov) => total + mov.valor, 0);
  };
  
  this.obtenerTotalGastos = function() {
    return this.movimientos
      .filter(mov => mov.esGasto())
      .reduce((total, mov) => total + mov.valor, 0);
  };
}
```

#### 2.2. Métodos de Análisis

Agrega métodos más sofisticados:

```javascript
// Continúa en el constructor Presupuesto
this.calcularBalance = function() {
  return this.obtenerTotalIngresos() - this.obtenerTotalGastos();
};

this.obtenerResumen = function() {
  return {
    totalIngresos: this.obtenerTotalIngresos(),
    totalGastos: this.obtenerTotalGastos(),
    balance: this.calcularBalance(),
    cantidadMovimientos: this.movimientos.length
  };
};
```

#### 2.3. 🏆 Reto Autónomo (5-10 min)

**Desafío**: Implementa `obtenerMovimientosPorTipo(tipo)` que retorne todos los movimientos de un tipo específico.

**Pista**: Usa `filter()` comparando `mov.tipo` con el parámetro recibido.

---

## Parte 3: Sistema Completo y Funcionalidades Avanzadas (~50 min)

> **Objetivo**: Integrar todo en un sistema funcional con características avanzadas

#### 3.1. Instanciación y Uso Completo

Crea una instancia completa del sistema:

```javascript
// Crear presupuesto principal
const miPresupuesto = new Presupuesto();

// Agregar varios movimientos
miPresupuesto.agregarMovimiento(new Movimiento('Salario', 'ingreso', 3000));
miPresupuesto.agregarMovimiento(new Movimiento('Freelance', 'ingreso', 500));
miPresupuesto.agregarMovimiento(new Movimiento('Comida', 'gasto', 200));
miPresupuesto.agregarMovimiento(new Movimiento('Transporte', 'gasto', 150));

// Verificar funcionalidad
console.log('Resumen:', miPresupuesto.obtenerResumen());
```

#### 3.2. Validación y Métodos Auxiliares

Agrega métodos de validación y utilidad:

```javascript
// En constructor Presupuesto, agregar:
this.eliminarMovimiento = function(indice) {
  if (indice >= 0 && indice < this.movimientos.length) {
    return this.movimientos.splice(indice, 1)[0];
  }
  return null;
};

this.buscarMovimiento = function(nombre) {
  return this.movimientos.find(mov => 
    mov.nombre.toLowerCase().includes(nombre.toLowerCase())
  );
};

this.validarPresupuesto = function() {
  return this.movimientos.every(mov => mov instanceof Movimiento);
};
```

#### 3.3. 🏆 Reto Autónomo (5-10 min)

**Desafío**: Implementa `obtenerPromedioGastos()` que calcule el promedio de todos los gastos registrados.

**Pista**: Usa `obtenerTotalGastos()` y divide entre la cantidad de gastos.

---

## ⭐ Logros Adicionales

Para estudiantes que completan el laboratorio antes del tiempo asignado:

#### 🏆 Logro 1: Verificar Límites

**Desafío**: Implementa `verificarLimites()` que alerte cuando gastos superen el 80% de ingresos.

#### 🏆 Logro 2: Validación Robusta

**Desafío**: Implementa validación completa en todos los constructores con manejo de errores

**Tareas específicas**:
- Validar tipos de datos en constructores
- Implementar método `esValido()` en cada objeto
- Crear mensajes de error descriptivos

#### 🏆 Logro 3: Interfaz de Usuario Básica

**Desafío**: Conecta los objetos con el DOM para crear una interfaz funcional

**Tareas específicas**:
- Crear formulario HTML para agregar movimientos
- Mostrar resumen del presupuesto en tiempo real
- Implementar lista dinámica de movimientos

---

## 📝 Instrucciones de Entrega

### 1. Verificar Funcionalidad Completa
- ✅ Funciones constructoras implementadas con `function Constructor() {}`
- ✅ Uso correcto de `new` para instanciación
- ✅ Métodos implementados con `this.metodo = function() {}`
- ✅ Sistema de presupuesto funcionando con múltiples objetos

### 2. Comparte por Canvas

**Repositorio**:
- Comparte el link de tu repositorio con el código OOP funcional
- Incluye un README.md explicando la transición funcional → OOP

**Funcionalidad**:
- Comparte el link de GitHub Pages con demo operativa
- Incluye capturas de consola mostrando objetos creados

**Responde brevemente**:
- ¿Qué ventajas observaste al usar objetos vs funciones puras?
- ¿Cómo cambió la organización de tu código con constructores?
- ¿Qué diferencias notaste entre funciones y métodos?
- ¿Cómo se conecta este laboratorio con el Gestor de Presupuesto Personal?
