# Guía del Facilitador: Integrando los 3 Paradigmas

## 1. El momento pedagógico clave

Esta clase es el cierre del Módulo 2 y representa la consolidación de todo lo aprendido. Los estudiantes han experimentado tres formas diferentes de pensar sobre programación: Imperativo (clase 05), Funcional (clase 06) y POO (clase 07). El "click" de esta sesión es que **no existe un paradigma superior**, sino que cada uno tiene su lugar según el problema a resolver.

```javascript
// El mismo problema, tres mentalidades
// Imperativo: "Voy paso a paso modificando datos"
// Funcional: "Transformo datos sin modificar originales"
// POO: "Creo objetos que saben hacer cosas"
```

El objetivo no es que elijan un paradigma favorito, sino que desarrollen **criterio** para elegir el adecuado según el contexto.

## 2. Estructura de la sesión

### Fase 1: Introducción y Contexto (15 min)
- Repaso rápido de los 3 paradigmas con ejemplos de una línea
- Presentar el problema: **Gestor de Tareas**
- Explicar que lo resolverán 3 veces

### Fase 2: Demo Comparativa (20 min)
- Mostrar el mismo problema simple resuelto con cada paradigma
- Usar ejemplo de "filtrar números pares" o similar
- Destacar las diferencias visuales en el código

### Fases 3-5: Laboratorio (75 min total)
- Parte 1: Solución Imperativa (25 min)
- Parte 2: Solución Funcional (25 min)
- Parte 3: Solución POO (25 min)

### Fase 6: Reflexión (15 min)
- Completar tabla comparativa
- Discusión grupal: ¿cuál les resultó más natural?

### Fase 7: Síntesis y Cierre (15 min)
- Recapitulación del módulo completo
- Conexión con Módulo 3: DOM

## 3. Puntos clave por paradigma

### Imperativo - Lo que deben demostrar:
```javascript
// Variables globales
let tareas = [];

// Bucles explícitos
for (let i = 0; i < tareas.length; i++) {
  // Modificación directa
}

// Estado mutable
tareas.push(nuevaTarea);
```

### Funcional - Lo que deben demostrar:
```javascript
// Sin variables globales mutables
const agregarTarea = (tareas, nueva) => [...tareas, nueva];

// Métodos de array
const filtrar = tareas.filter(t => t.prioridad === 'alta');

// Inmutabilidad
const marcar = tareas.map(t =>
  t.nombre === nombre ? {...t, completada: true} : t
);
```

### POO - Lo que deben demostrar:
```javascript
// Funciones constructoras (NO clases ES6)
function Tarea(nombre, prioridad) {
  this.nombre = nombre;
  this.prioridad = prioridad;

  this.marcar = function() {
    this.completada = true;
  };
}

// Instanciación con new
const tarea = new Tarea('Estudiar', 'alta');
```

## 4. Errores comunes y cómo abordarlos

### Error: Mezclar paradigmas sin darse cuenta
```javascript
// ❌ Estudiante usa filter() en solución "imperativa"
function filtrarImperativo(tareas, prioridad) {
  return tareas.filter(t => t.prioridad === prioridad); // Esto es funcional
}

// ✅ Solución imperativa real
function filtrarImperativo(tareas, prioridad) {
  let resultado = [];
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].prioridad === prioridad) {
      resultado.push(tareas[i]);
    }
  }
  return resultado;
}
```

**Estrategia**: Enfatiza que el objetivo es practicar cada paradigma en su forma pura, aunque en proyectos reales se combinan.

### Error: Usar `class` en lugar de funciones constructoras
```javascript
// ❌ Esto NO es lo que queremos en este curso
class Tarea {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// ✅ Esto SÍ es lo que enseñamos
function Tarea(nombre) {
  this.nombre = nombre;
}
```

**Estrategia**: Recuerda que las clases ES6 se verán en Code 301. En este curso usamos funciones constructoras para entender los fundamentos.

## 5. Gestión del tiempo

| Actividad | Tiempo | Señales de alerta |
|-----------|--------|-------------------|
| Intro + Demo | 35 min | Si pasa de 40 min, acorta demo |
| Parte Imperativa | 25 min | Si más del 50% no termina, dar más pistas |
| Parte Funcional | 25 min | Esta suele ser la más rápida |
| Parte POO | 25 min | Puede necesitar más tiempo |
| Reflexión + Cierre | 30 min | No recortar, es evaluación importante |

## 6. Rúbrica de evaluación

Este laboratorio es la **evaluación del Módulo 2** (100 pts):

| Criterio | Puntos | Qué buscar |
|----------|--------|------------|
| Imperativa | 25 | Bucles `for`, variables mutables, sin `map`/`filter` |
| Funcional | 25 | Funciones puras, `map`/`filter`, spread operator |
| POO | 25 | Constructoras, `this`, `new`, métodos |
| Reflexión | 25 | Tabla completa, respuestas reflexivas |

## 7. Señales de comprensión exitosa

Al final de la clase, los estudiantes deben poder:

1. **Identificar** qué paradigma está usando un código dado
2. **Explicar** una ventaja y desventaja de cada paradigma
3. **Decidir** qué paradigma usarían para un problema dado

**Pregunta de validación**: "Si tuvieras que procesar un archivo CSV con 10,000 registros, ¿qué paradigma elegirías y por qué?"

Respuesta esperada: Funcional, porque permite transformar datos sin modificar originales, es predecible y se puede encadenar operaciones.

## 8. Preparación para el Módulo 3

Esta clase prepara para **DOM como API de objetos**:

- Los nodos del DOM son objetos con propiedades y métodos
- Usaremos una mezcla de paradigmas:
  - POO: `document.querySelector()` retorna objetos
  - Funcional: Transformar listas de elementos
  - Imperativo: Event handlers que modifican estado

**Mensaje de cierre**: "Ahora tienen tres herramientas en su caja. En el próximo módulo veremos cómo el navegador las usa todas para crear interfaces interactivas."

## 9. Recursos de emergencia

Si hay problemas técnicos, usar estos ejemplos simplificados:

```javascript
// Ejemplo mínimo de cada paradigma
const numeros = [1, 2, 3, 4, 5];

// Imperativo
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

// Funcional
const sumaFunc = numeros.reduce((acc, n) => acc + n, 0);

// POO
function Calculadora(numeros) {
  this.numeros = numeros;
  this.sumar = function() {
    return this.numeros.reduce((a, b) => a + b, 0);
  };
}
const calc = new Calculadora(numeros);
calc.sumar();
```

## 10. Checklist pre-clase

- [ ] Slides listos con tabla comparativa
- [ ] Código de ejemplo para cada paradigma
- [ ] Rúbrica visible para estudiantes
- [ ] Tiempo asignado para reflexión (no recortar)
