# Laboratorio 5: Programación Imperativa

¡Bienvenido al primer laboratorio del proyecto **Gestor de Presupuesto Personal**! En este laboratorio, aplicarás **programación imperativa** para resolver un ejercicio práctico de control de flujo y funciones básicas. Crearás un programa que simula un **sistema de registro de actividades diarias**.

> ⏱️ **Nota sobre Checkpoints**: Este laboratorio incluye tres momentos de validación grupal (a los 30 y 60 minutos). Es importante mantenerse al día con estos checkpoints para aprovechar el feedback y las discusiones grupales.

## 🎯 Objetivos de Aprendizaje

1. **Comprender y aplicar estructuras de control de flujo para resolver problemas secuenciales.**  
   Utilizar condicionales (`if`, `else`) y bucles (`for`, `while`) para controlar el flujo de ejecución y tomar decisiones en función de condiciones específicas.

2. **Desarrollar funciones imperativas para resolver tareas específicas en un contexto procedural.**  
   Crear funciones que describan paso a paso cómo realizar tareas concretas, ejecutando acciones directamente o modificando variables globales.

## 🔑 Conceptos Clave

1. **Estructuras de Control de Flujo**  
   Herramientas fundamentales para controlar el orden de ejecución del código, permitiendo evaluar condiciones (`if`) y repetir acciones (`for`, `while`).

2. **Funciones Imperativas**  
   Bloques de código que ejecutan instrucciones secuenciales para resolver un problema específico, generalmente modificando directamente variables globales o mostrando resultados inmediatos.

## ⚙️ Setup Inicial

1. **Repositorio:**  
   Crea un repositorio nuevo llamado: `personal-budget` y clónalo en tu máquina local.

2. **Estructura de Archivos:**  
   Dentro de tu repositorio, crea la siguiente estructura:
   ```
   personal-budget/
   ├── index.html
   ├── app.js
   ├── README.md
   ```

## 📋 Historias de Usuario (HU)

### HU1 - Registrar Actividad
> _"Como usuario, quiero registrar el nombre y duración de una actividad, para llevar un control de mi tiempo."_

- **Criterios de Aceptación:**
    - El sistema solicita el nombre y duración.
    - Si el nombre está vacío o la duración es menor o igual a cero, muestra un mensaje de error.
    - Si los datos son válidos, se guarda la actividad.
- **⏱️ Checkpoint 1 ~ 30 min:** Revisar la función `registrarActividad()`: validaciones y estructura básica.

### HU2 - Mostrar Resumen
> _"Como usuario, quiero ver cuántas actividades registré y el tiempo total dedicado."_

- **Criterios de Aceptación:**
    - El sistema muestra la cantidad de actividades registradas.
    - El sistema muestra el total de minutos dedicados.
- **⏱️ Checkpoint 2 ~ 60 min:** Validar el correcto uso de `for` o `while` para recorrer el array de actividades.

## 🛠️ Requerimientos Técnicos

1. Utilizar **`prompt()`** para capturar datos del usuario y **`console.log()`** para mostrar información.
2. Utilizar **`if/else`** para validar cada actividad antes de registrarla.
3. Utilizar un **bucle `while`** para permitir el registro de múltiples actividades hasta que el usuario decida salir.
4. Crear al menos **3 funciones imperativas**:
    - `registrarActividad()`: solicita datos y valida antes de guardar.
    - `calcularTiempoTotal()`: recorre el array y suma duraciones.
    - `mostrarResumen()`: muestra la cantidad de actividades y el total de minutos.

## 🌟 Logros Adicionales

- **Logro 1:** Permitir registrar una **categoría** por actividad (ej. trabajo, ejercicio, ocio).
- **Logro 2:** Mostrar un resumen adicional por categoría (cuánto tiempo dedicó a cada una).

---

## 📝 Instrucciones de Entrega

1. **README.md**  
    Incluye una breve explicación de cómo funciona el programa y un listado de las funciones creadas.

2. **Entrega Final**  
    - URL del repositorio en GitHub.
    - Captura de pantalla de la ejecución final en consola.

---

## 🧑‍💻 Ejemplo de Flujo Esperado (en consola)

```
Registro de Actividades
-----------------------
Nombre de la actividad: Estudiar JS
Duración (minutos): 90

¿Registrar otra actividad? (si/no): si
Nombre de la actividad: Correr
Duración (minutos): 30

¿Registrar otra actividad? (si/no): no

Resumen Final
-----------------------
Total de actividades: 2
Tiempo total: 120 minutos
```
