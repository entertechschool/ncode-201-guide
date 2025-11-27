# Clase 08: Integrando los 3 Paradigmas

## 🎯 Objetivo General

Consolidar los tres paradigmas de programación (Imperativo, Funcional, POO) resolviendo un mismo problema con cada enfoque para comparar ventajas y desventajas.

---

## 💡 ¿Por qué comparar paradigmas?

* **Versatilidad**: Diferentes problemas requieren diferentes enfoques
* **Decisiones informadas**: Saber cuándo usar cada paradigma
* **Código profesional**: En proyectos reales se combinan paradigmas

> "No existe el paradigma perfecto, solo el más adecuado para cada situación."

---

## 🔄 Repaso: Los 3 Paradigmas

| Paradigma | Enfoque | Palabras clave |
|-----------|---------|----------------|
| **Imperativo** | *Cómo* hacerlo | `for`, `while`, `if`, variables mutables |
| **Funcional** | *Qué* queremos | `map`, `filter`, funciones puras, inmutabilidad |
| **POO** | *Quién* lo hace | `new`, `this`, constructoras, métodos |

---

## 📊 Ejemplo Comparativo: Filtrar números pares

### Imperativo
```javascript
let numeros = [1, 2, 3, 4, 5, 6];
let pares = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  }
}
```

### Funcional
```javascript
const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter(n => n % 2 === 0);
```

### POO
```javascript
function ListaNumeros(numeros) {
  this.numeros = numeros;

  this.filtrarPares = function() {
    return this.numeros.filter(n => n % 2 === 0);
  };
}

const lista = new ListaNumeros([1, 2, 3, 4, 5, 6]);
const pares = lista.filtrarPares();
```

---

## 🧠 ¿Cuándo usar cada paradigma?

| Situación | Paradigma recomendado |
|-----------|----------------------|
| Scripts simples, operaciones paso a paso | **Imperativo** |
| Transformar datos, procesamiento de arrays | **Funcional** |
| Modelar entidades con estado y comportamiento | **POO** |
| Validaciones simples | **Imperativo** |
| Pipelines de datos | **Funcional** |
| Aplicaciones con múltiples objetos relacionados | **POO** |

---

## ⚖️ Ventajas y Desventajas

### Imperativo
| ✅ Ventajas | ❌ Desventajas |
|------------|---------------|
| Fácil de entender paso a paso | Variables globales = bugs |
| Control total del flujo | Difícil de mantener |
| Familiar para principiantes | Código repetitivo |

### Funcional
| ✅ Ventajas | ❌ Desventajas |
|------------|---------------|
| Predecible (funciones puras) | Curva de aprendizaje |
| Fácil de testear | Puede ser menos intuitivo |
| Código conciso | Debugging más complejo |

### POO
| ✅ Ventajas | ❌ Desventajas |
|------------|---------------|
| Organización clara | Más código inicial |
| Reutilizable | Puede ser sobre-engineered |
| Modela el mundo real | Requiere planificación |

---

## 🔧 El Problema del Laboratorio

**Gestor de Tareas** con:
- Agregar tareas (nombre + prioridad)
- Filtrar por prioridad
- Marcar como completada
- Contar completadas

Lo resolverás **3 veces**, una con cada paradigma.

---

## 📋 Estructura del Laboratorio

| Parte | Paradigma | Tiempo | Archivo |
|-------|-----------|--------|---------|
| 1 | Imperativo | 25 min | `imperativo.js` |
| 2 | Funcional | 25 min | `funcional.js` |
| 3 | POO | 25 min | `poo.js` |
| 4 | Reflexión | 15 min | `README.md` |

---

## 📊 Rúbrica de Evaluación

| Criterio | Puntos |
|----------|--------|
| Solución Imperativa correcta | 25 pts |
| Solución Funcional correcta | 25 pts |
| Solución POO correcta | 25 pts |
| Reflexión + Código limpio | 25 pts |
| **Total** | **100 pts** |

---

## 💭 Síntesis y Reflexión

### Preguntas clave:
* ¿Cuál paradigma te resultó más natural?
* ¿En qué proyecto real usarías cada uno?
* ¿Se pueden combinar en un mismo proyecto?

### Próximo módulo:
**Módulo 3: Manipulación del DOM** - Aplicaremos estos paradigmas para crear interfaces interactivas.
