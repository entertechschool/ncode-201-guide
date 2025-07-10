# Clase 06: Programación Funcional

## 🎯 Objetivo General

Refactorizar el proyecto **Personal Budget** aplicando paradigma funcional con funciones puras y métodos como `map()`, `filter()` y `find()` para crear código más limpio y mantenible.

---

## 💡 ¿Por qué aprender Programación Funcional?

* **Código más predecible**: Funciones puras eliminan efectos secundarios inesperados
* **Facilita testing**: Mismos inputs = mismos outputs siempre
* **Preparación profesional**: Paradigma usado en React, frameworks modernos y equipos ágiles

> "La programación funcional es como cocinar con recetas exactas: mismo ingrediente, mismo resultado cada vez."

---

## 🧠 ¿Qué es Programación Funcional exactamente?

* **Paradigma declarativo**: Describes QUÉ quieres, no CÓMO lograrlo
* **Funciones puras**: No modifican estado externo, solo transforman datos
* **Inmutabilidad**: Crear nuevos datos en lugar de modificar existentes

> "En lugar de 'modificar paso a paso', piensa 'transformar de una vez'."

---

## 🔧 Funciones Puras vs Impuras

```javascript
// ❌ Función IMPURA (modifica variable externa)
let total = 0;
function sumarImpuro(valor) {
  total += valor; // ¡Efecto secundario!
  return total;
}

// ✅ Función PURA (solo depende de sus parámetros)
function sumarPuro(valorActual, valorNuevo) {
  return valorActual + valorNuevo; // Sin efectos secundarios
}
```

* **Puras**: Predecibles, testeables, reutilizables
* **Impuras**: Pueden tener comportamientos inesperados

---

## 🧩 Métodos Funcionales Básicos

```javascript
const movimientos = [
  { nombre: "Salario", tipo: "ingreso", valor: 3000 },
  { nombre: "Comida", tipo: "gasto", valor: 200 },
  { nombre: "Freelance", tipo: "ingreso", valor: 500 }
];

// map() - Transforma cada elemento
const nombres = movimientos.map(mov => mov.nombre);

// filter() - Filtra elementos que cumplen condición
const ingresos = movimientos.filter(mov => mov.tipo === 'ingreso');

// find() - Encuentra el primer elemento que cumple condición
const salario = movimientos.find(mov => mov.nombre === 'Salario');
```

| **Método** | **Retorna** | **Uso Principal** |
|------------|-------------|-------------------|
| `map()` | Nuevo array del mismo tamaño | Transformar datos |
| `filter()` | Nuevo array (puede ser menor) | Filtrar datos |
| `find()` | Un elemento o undefined | Buscar elemento específico |

---

## 🔢 Parte 1: Funciones Puras Básicas (~30 min)

### 🎯 Objetivo:
Crear funciones puras para extraer información sin modificar datos originales

### ✅ Criterios de Validación:
- ✅ Funciones `obtenerNombres()` y `obtenerValores()` implementadas con `map()`
- ✅ Función `calcularTotal()` usando `reduce()`
- ✅ Todas las funciones son puras (no modifican arrays originales)

---

## ⚡ Parte 2: Filtrado y Búsqueda (~40 min)

### 🎯 Objetivo:
Implementar sistema de filtrado usando `filter()` y `find()`

### ✅ Criterios de Validación:
- ✅ Funciones de filtrado (`obtenerIngresos()`, `obtenerGastos()`) operativas
- ✅ Funciones de búsqueda (`buscarPorNombre()`) funcionando correctamente
- ✅ Reto autónomo: `obtenerTotalPorTipo()` completado

### 🏆 Reto en Vivo (5-10 min):
**Implementa** `filtrarPorMonto(movimientos, minimo)` que retorne movimientos >= al monto mínimo

---

## 🚀 Parte 3: Sistema de Reportes (~50 min)

### 🎯 Objetivo:
Crear reportes financieros combinando múltiples funciones puras

### ✅ Criterios de Validación:
- ✅ Función `generarReporte()` produce objeto con totales correctos
- ✅ Función `calcularBalance()` retorna diferencia ingresos-gastos
- ✅ Función `obtenerPromedio()` calcula promedios por tipo

### 🏆 Reto en Vivo (5-10 min):
**Desarrolla** `validarPresupuesto(movimientos, limite)` que indique si gastos exceden límite

### 🎯 Retos Autónomos Progresivos:
- **🏆 Básico**: Categorizar por rangos de monto
- **🏆 Intermedio**: Análisis con ordenamiento (`sort()`)
- **🏆 Avanzado**: Búsqueda con criterios múltiples

---

## 💭 Demo y Debate Técnico

### 🤔 Preguntas para Discutir:

* **¿Cuándo prefieres usar `map()` en lugar de un `for` loop?**
* **¿Qué ventajas reales observas al usar funciones puras?**
* **¿En qué situaciones `filter()` es más claro que escribir condiciones manuales?**
* **¿Cómo ayuda la inmutabilidad al debugging?**

### 💻 Demo en Vivo:
Comparación lado a lado: **Código imperativo vs Código funcional**

---

## 🧠 Síntesis y Cierre

### 🎉 ¿Qué lograste hoy?

* **Implementaste** funciones puras para manipular datos financieros
* **Aplicaste** métodos funcionales (`map`, `filter`, `find`) efectivamente  
* **Refactorizaste** código imperativo hacia enfoque declarativo
* **Creaste** sistema de reportes usando composición de funciones

### 🔜 Próxima Clase: Programación Orientada a Objetos

* **Encapsulación**: Agrupar datos y comportamientos
* **Clases y objetos**: Estructurar código de manera escalable
* **Métodos vs funciones**: Comportamientos asociados a entidades

> "De funciones puras a objetos inteligentes: el siguiente nivel de organización del código."
