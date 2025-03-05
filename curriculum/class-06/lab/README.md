# Laboratorio 06: Programación Funcional

En el sexto laboratorio seguimos avanzando el proyecto **Personal Budget**. En este laboratorio aplicarás **Programación Funcional** para resolver un conjunto de ejercicios prácticos enfocados en la transformación y manipulación de datos financieros. Aprenderás a utilizar funciones puras y funciones de orden superior como `map()`, `filter()` y `find()` para mejorar el manejo del presupuesto.

> ⏱️ **Nota sobre Checkpoints**: Este laboratorio incluye **dos momentos de validación grupal** (a los **30 y 60 minutos**). Mantente al día con estos checkpoints para recibir retroalimentación valiosa y aclarar dudas con tus compañeros e instructor.

## 🎯 Objetivos de Aprendizaje

1. **Comprender el paradigma funcional y su diferencia con el paradigma imperativo.**  
   Identificar cómo cambia la forma de resolver problemas cuando el enfoque es funcional en lugar de procedural.

2. **Aplicar funciones puras para resolver tareas específicas.**  
   Asegurar que las funciones dependan exclusivamente de sus parámetros de entrada y no generen efectos secundarios.

3. **Utilizar funciones de orden superior para transformar arrays y objetos.**  
   Practicar con `map()`, `filter()` y `find()` para manipular colecciones de datos financieros de manera declarativa.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Programación Funcional** | Paradigma basado en funciones puras, evitando efectos secundarios y promoviendo inmutabilidad. |
| **Funciones Puras** | Funciones cuyo resultado depende únicamente de sus argumentos y no modifican el estado global. |
| **Funciones de Orden Superior** | Funciones que reciben o retornan otras funciones (por ejemplo: `map`, `filter`, `find`). |
| **Declaración vs. Invocación** | Diferencia entre declarar (definir) una función y ejecutarla (invocarla). |
| **Principio DRY** | (Don’t Repeat Yourself) Principio que promueve reutilizar código mediante funciones generales, evitando duplicidad. |

## ⚙️ Setup Inicial

1. **Repositorio:**  
   Continúa trabajando en tu repositorio existente del proyecto `personal-budget`.  
   
2. **Estructura de Archivos:**  
   Verifica que mantengas la siguiente estructura:
   ```
   personal-budget/
   ├── index.html
   ├── app.js
   ├── README.md
   ```

3. **Configuración Base:**  
   - Enlaza `app.js` desde `index.html`.
   - Actualiza el `README.md` agregando:
     - ¿Qué es una función pura?
     - Diferencias entre imperativo y funcional.

## 📋 Historias de Usuario (HU)

### HU1 - Listar nombres de movimientos
> _"Como usuario, quiero obtener una lista simple con los nombres de mis movimientos financieros registrados para revisarlos fácilmente."_

- **Criterios de Aceptación:**
    - Usar `map()` para obtener solo los nombres de los movimientos registrados.
    - Mostrar la lista en consola.

- **⏱️ Checkpoint 1 ~ 30 min:**  
  Validar la creación y uso correcto de una función pura con `map()`.

### HU2 - Filtrar egresos mayores a $100
> _"Como usuario, quiero identificar rápidamente mis gastos mayores a $100 para analizar mejor mi presupuesto."_

- **Criterios de Aceptación:**
    - Usar `filter()` para obtener solo los egresos con montos mayores a $100.
    - Mostrar el resultado filtrado en consola.

### HU3 - Buscar movimiento por nombre
> _"Como usuario, necesito buscar un movimiento específico por su nombre para revisar rápidamente sus detalles."_

- **Criterios de Aceptación:**
    - Usar `find()` para localizar un movimiento según el nombre indicado.
    - Mostrar el movimiento encontrado o un mensaje claro si no existe.

- **⏱️ Checkpoint 2 ~ 60 min:**  
  Validar uso correcto y resultado esperado en funciones `filter()` y `find()`.


## 🛠️ Requerimientos Técnicos

| Requerimiento | Descripción |
|---|---|
| **Funciones Puras** | Implementa cada historia usando funciones puras sin modificar directamente el array original. |
| **Composición Funcional** | Prefiere combinar funciones pequeñas y específicas para resolver problemas complejos. |
| **Inmutabilidad** | No modificar directamente los arrays o los objetos originales. Crear nuevas copias cuando sea necesario. |

## 🌟 Logros Adicionales

- **Logro 1:** Crear una función pura que ordene los movimientos por monto, de mayor a menor, sin modificar el array original.
- **Logro 2:** Componer una función que combine `filter()` y `map()` para obtener solo los nombres de los movimientos de tipo ingreso.

## 📝 Instrucciones de Entrega

1. **README.md Documentado**  
   Debe incluir:
   - Comparación personal entre paradigmas imperativo y funcional.
   - Reflexión sobre cómo aplicaste el principio DRY.

2. **Entrega Final**  
   - URL del repositorio en GitHub.

## 🧑‍💻 Ejemplo de Salida Esperada (en consola)

```
Nombres de movimientos registrados:
['Cena', 'Consultoría', 'Supermercado', 'Libro JavaScript']

Egresos mayores a $100:
[
  { nombre: 'Supermercado', tipo: 'Egreso', monto: 150.00 },
  { nombre: 'Compra online', tipo: 'Egreso', monto: 120.00 }
]

Buscar movimiento por nombre: 'Cena'
Resultado encontrado:
{ nombre: 'Cena', tipo: 'Egreso', monto: 45.50 }
```