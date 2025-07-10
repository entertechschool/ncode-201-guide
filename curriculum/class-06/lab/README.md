# Laboratorio 06: Programación Funcional

En este laboratorio implementamos **programación funcional** para refactorizar el proyecto **Personal Budget**. Aplicaremos funciones puras, métodos como `map()`, `filter()` y `find()` para hacer el código más limpio y mantenible.

### 🎯 Objetivos de Aprendizaje

Al completar este laboratorio, serás capaz de:

1. **Implementar** funciones puras para manipular datos financieros
2. **Utilizar** métodos funcionales (`map()`, `filter()`, `find()`) básicos
3. **Refactorizar** código imperativo hacia enfoque funcional
4. **Aplicar** principio DRY con funciones reutilizables

### 🔑 Conceptos Clave

- **Funciones Puras**: Funciones que dependen solo de sus argumentos
- **Métodos Funcionales**: `map`, `filter`, `find` para transformar arrays
- **Principio DRY**: Evitar repetir código

### 🛠️ Tecnologías y Herramientas

**Principales**: JavaScript ES6+, Métodos de Array  
**IA Copiloto**: GitHub Copilot para sugerir implementaciones

### ⚙️ Setup Inicial

**Estructura del repositorio:**
```
personal-budget/
├── index.html
├── app.js
├── functional-utils.js    (nuevo archivo)
└── README.md
```

**Array de movimientos que manejaremos:**
```javascript
const movimientos = [
  { nombre: "Salario", tipo: "ingreso", valor: 3000 },
  { nombre: "Comida", tipo: "gasto", valor: 200 },
  { nombre: "Freelance", tipo: "ingreso", valor: 500 },
  { nombre: "Transporte", tipo: "gasto", valor: 150 }
];
```

---

## 🔧 Parte 1: Funciones Puras Básicas (~30 min)

> **Objetivo**: Crear funciones puras para extraer información

#### 1.1. Funciones de Extracción Simple

```javascript
// functional-utils.js
function obtenerNombres(movimientos) {
  return movimientos.map(mov => mov.nombre);
}

function obtenerValores(movimientos) {
  return movimientos.map(mov => mov.valor);
}

function calcularTotal(valores) {
  return valores.reduce((total, valor) => total + valor, 0);
}
```

#### 1.2. Pruebas Básicas

```javascript
console.log("Nombres:", obtenerNombres(movimientos));
console.log("Valores:", obtenerValores(movimientos));
console.log("Total:", calcularTotal(obtenerValores(movimientos)));
```

#### 1.3. 🏆 Reto Autónomo (5 min)

**Desafío**: Crea `contarPorTipo(movimientos)` que retorne `{ ingresos: 2, gastos: 2 }`

---

## ⚡ Parte 2: Filtrado y Búsqueda (~40 min)

> **Objetivo**: Usar `filter()` y `find()` para buscar datos

#### 2.1. Filtros Básicos

```javascript
function obtenerIngresos(movimientos) {
  return movimientos.filter(mov => mov.tipo === 'ingreso');
}

function obtenerGastos(movimientos) {
  return movimientos.filter(mov => mov.tipo === 'gasto');
}

function filtrarPorMonto(movimientos, minimo) {
  return movimientos.filter(mov => mov.valor >= minimo);
}
```

#### 2.2. Búsquedas Simples

```javascript
function buscarPorNombre(movimientos, nombre) {
  return movimientos.find(mov => 
    mov.nombre.toLowerCase().includes(nombre.toLowerCase())
  );
}

function obtenerPrimero(movimientos, tipo) {
  return movimientos.find(mov => mov.tipo === tipo);
}
```

#### 2.3. 🏆 Reto Autónomo (5-10 min)

**Desafío**: Implementa `obtenerTotalPorTipo(movimientos, tipo)` que calcule el total de un tipo específico.

---

## 🚀 Parte 3: Reportes Simples (~50 min)

> **Objetivo**: Combinar funciones para crear reportes básicos

#### 3.1. Reporte Financiero Básico

```javascript
function generarReporte(movimientos) {
  const ingresos = obtenerIngresos(movimientos);
  const gastos = obtenerGastos(movimientos);
  
  return {
    totalIngresos: calcularTotal(obtenerValores(ingresos)),
    totalGastos: calcularTotal(obtenerValores(gastos)),
    cantidad: movimientos.length
  };
}
```

#### 3.2. Funciones de Resumen

```javascript
function calcularBalance(movimientos) {
  const reporte = generarReporte(movimientos);
  return reporte.totalIngresos - reporte.totalGastos;
}

function obtenerPromedio(movimientos, tipo) {
  const filtrados = movimientos.filter(mov => mov.tipo === tipo);
  if (filtrados.length === 0) return 0;
  return calcularTotal(obtenerValores(filtrados)) / filtrados.length;
}
```

#### 3.3. 🏆 Reto Autónomo (5-10 min)

**Desafío**: Crea `validarPresupuesto(movimientos, limite)` que indique si los gastos superan el límite.

#### 3.4. Retos Autónomos Progresivos

**🏆 Básico** (5 min): `categorizarPorMonto(movimientos)` - agrupar en rangos bajo/medio/alto  
**🏆 Intermedio** (7 min): `analizarPatrones(movimientos)` - usar `sort()` para ordenar gastos  
**🏆 Avanzado** (10 min): `busquedaAvanzada(movimientos, criterios)` - filtros múltiples simultáneos

---

## ⭐ Logros Adicionales

#### 🏆 Logro 1: Funciones de Ordenamiento
Implementa funciones que usen `sort()` para ordenar movimientos por valor o nombre

#### 🏆 Logro 2: Análisis Estadístico  
Crea funciones para calcular mediana, moda y desviación en los montos

---

## 📝 Instrucciones de Entrega

### 1. Verificar Funcionalidad Completa
- ✅ Funciones puras básicas funcionando
- ✅ Filtros con `filter()` y `find()` operativos
- ✅ Reportes simples generando datos correctos
- ✅ Al menos 1 reto autónomo completado

### 2. Comparte por Canvas

**Repositorio**: Link de GitHub actualizado  
**Funcionalidad**: Link de GitHub Pages con demo  

**Responde brevemente**:
- ¿Qué método funcional te resultó más útil?
- ¿Cómo mejoraron las funciones puras tu código?
