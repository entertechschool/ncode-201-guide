# Laboratorio 08: Integrando los 3 Paradigmas

Este laboratorio es la **evaluación final del Módulo 2**. Resolverás un mismo problema usando los tres paradigmas de programación: Imperativo, Funcional y POO. Esto te permitirá comparar enfoques y demostrar dominio de los conceptos fundamentales.

### 🎯 Objetivos de Aprendizaje

Al completar este laboratorio, serás capaz de:

1. **Implementar** soluciones usando paradigma Imperativo, Funcional y POO
2. **Comparar** las diferencias entre cada enfoque
3. **Reflexionar** sobre cuándo usar cada paradigma

---

## 📋 El Problema: Gestor de Tareas

Implementarás un **Gestor de Tareas** simple con las siguientes funcionalidades:

- Agregar tareas (con nombre y prioridad: alta, media, baja)
- Listar todas las tareas
- Filtrar tareas por prioridad
- Contar tareas completadas vs pendientes
- Marcar tarea como completada

**Datos de ejemplo:**
```javascript
// Estructura de una tarea
{ nombre: 'Estudiar JavaScript', prioridad: 'alta', completada: false }
```

---

## Parte 1: Solución Imperativa (~25 min)

> **Objetivo**: Resolver el problema usando variables globales, bucles y condicionales

Crea el archivo `imperativo.js`:

```javascript
// Estado global
let tareas = [];

// Agregar tarea
function agregarTarea(nombre, prioridad) {
  // Usa push para agregar al array
  // Valida que nombre no esté vacío
}

// Listar tareas
function listarTareas() {
  // Usa un bucle for para recorrer e imprimir
}

// Filtrar por prioridad
function filtrarPorPrioridad(prioridad) {
  // Usa un bucle for y un array auxiliar
  // Retorna las tareas que coincidan
}

// Contar completadas
function contarCompletadas() {
  // Usa un bucle for con contador
}

// Marcar como completada
function marcarCompletada(nombre) {
  // Busca la tarea con un bucle y modifica directamente
}
```

### ✅ Checkpoint Parte 1
- [ ] Funciones implementadas con bucles `for`
- [ ] Variables globales para el estado
- [ ] Mutación directa de datos

---

## Parte 2: Solución Funcional (~25 min)

> **Objetivo**: Resolver el problema usando funciones puras y métodos de array

Crea el archivo `funcional.js`:

```javascript
// Funciones puras - no modifican el array original

function crearTarea(nombre, prioridad) {
  // Retorna un nuevo objeto tarea
  return { nombre, prioridad, completada: false };
}

function agregarTarea(tareas, nuevaTarea) {
  // Retorna un NUEVO array con la tarea agregada (spread operator)
  return [...tareas, nuevaTarea];
}

function filtrarPorPrioridad(tareas, prioridad) {
  // Usa filter()
}

function contarCompletadas(tareas) {
  // Usa filter() y length
}

function marcarCompletada(tareas, nombre) {
  // Usa map() para retornar nuevo array
  // No modifica el original
}

function obtenerNombres(tareas) {
  // Usa map() para extraer solo los nombres
}
```

### ✅ Checkpoint Parte 2
- [ ] Funciones puras (sin efectos secundarios)
- [ ] Uso de `map()`, `filter()`, `find()`
- [ ] Spread operator para inmutabilidad
- [ ] No hay variables globales mutables

---

## Parte 3: Solución POO (~25 min)

> **Objetivo**: Resolver el problema usando funciones constructoras y métodos

Crea el archivo `poo.js`:

```javascript
// Función constructora para Tarea
function Tarea(nombre, prioridad) {
  this.nombre = nombre;
  this.prioridad = prioridad;
  this.completada = false;

  this.marcarCompletada = function() {
    this.completada = true;
  };

  this.obtenerInfo = function() {
    const estado = this.completada ? '✓' : '○';
    return `${estado} ${this.nombre} [${this.prioridad}]`;
  };
}

// Función constructora para GestorTareas
function GestorTareas() {
  this.tareas = [];

  this.agregar = function(nombre, prioridad) {
    // Crea instancia de Tarea y la agrega
  };

  this.listar = function() {
    // Retorna info de todas las tareas
  };

  this.filtrarPorPrioridad = function(prioridad) {
    // Filtra y retorna tareas
  };

  this.contarCompletadas = function() {
    // Cuenta tareas completadas
  };

  this.buscarTarea = function(nombre) {
    // Busca y retorna una tarea por nombre
  };
}
```

### ✅ Checkpoint Parte 3
- [ ] Función constructora `Tarea` con propiedades y métodos
- [ ] Función constructora `GestorTareas` que administra tareas
- [ ] Uso correcto de `this` y `new`
- [ ] Instancias creadas y funcionando

---

## Parte 4: Reflexión Comparativa (~15 min)

Completa la siguiente tabla en tu README.md:

| Aspecto | Imperativo | Funcional | POO |
|---------|------------|-----------|-----|
| **Estado** | Global/mutable | Inmutable | Encapsulado |
| **Legibilidad** | ¿? | ¿? | ¿? |
| **Mantenibilidad** | ¿? | ¿? | ¿? |
| **Líneas de código** | ¿? | ¿? | ¿? |
| **Mejor para...** | ¿? | ¿? | ¿? |

**Responde brevemente:**
1. ¿Cuál paradigma te resultó más fácil de implementar? ¿Por qué?
2. ¿En qué tipo de proyecto usarías cada uno?
3. ¿Se pueden combinar? ¿Cómo?

---

## 📊 Rúbrica de Evaluación (100 pts)

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Solución Imperativa** | 25 pts | Funciones con bucles, variables globales, código funcional |
| **Solución Funcional** | 25 pts | Funciones puras, `map`/`filter`/`find`, inmutabilidad |
| **Solución POO** | 25 pts | Constructoras `Tarea` y `GestorTareas`, uso de `this`/`new` |
| **Reflexión + Código limpio** | 25 pts | Tabla comparativa completa, respuestas reflexivas, código organizado |

### Escala de calificación por sección (0-25 pts):

| Puntos | Nivel |
|--------|-------|
| 25 | Excelente - Completo y correcto |
| 20 | Bueno - Funcional con detalles menores |
| 15 | Satisfactorio - Funciona parcialmente |
| 10 | En desarrollo - Intento incompleto |
| 0 | No entregado |

---

## 📝 Instrucciones de Entrega

### Estructura esperada:
```
lab-08-paradigmas/
├── imperativo.js
├── funcional.js
├── poo.js
├── index.html (opcional - para probar)
└── README.md (con tabla comparativa)
```

### Comparte por Canvas:
1. **Link del repositorio** con los 3 archivos
2. **Capturas de consola** mostrando cada solución funcionando
3. **README.md** con la tabla comparativa y reflexiones

---

## ⭐ Logro Adicional

**Desafío**: Crea un `index.html` con una interfaz simple que permita:
- Seleccionar qué paradigma usar (dropdown)
- Agregar tareas visualmente
- Ver la lista de tareas actualizada

Este logro demuestra capacidad de integrar los 3 paradigmas en una aplicación real.
