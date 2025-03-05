# Laboratorio 05: Programación Imperativa

¡Bienvenido al primer laboratorio del proyecto **Gestor de Presupuesto Personal**! En este laboratorio, aplicarás **programación imperativa** para desarrollar un programa que te permita registrar y controlar tus **gastos diarios**, consolidando el uso de **estructuras de control de flujo** y **funciones imperativas**.

> ⏱️ **Nota sobre Checkpoints**: Este laboratorio incluye tres momentos de validación grupal (a los 30 y 60 minutos). Es importante mantenerse al día con estos checkpoints para aprovechar el feedback y las discusiones grupales.

## 🎯 Objetivos de Aprendizaje

1. **Comprender y aplicar estructuras de control de flujo para resolver problemas secuenciales.**  
   Utilizar condicionales (`if`, `else`) y bucles (`for`, `while`) para controlar el flujo de ejecución y tomar decisiones en función de condiciones específicas.

2. **Desarrollar funciones imperativas para resolver tareas específicas en un contexto procedural.**  
   Crear funciones que describan paso a paso cómo registrar gastos, calcular totales y mostrar resúmenes, ejecutando acciones directamente o modificando variables globales.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Estructuras de Control de Flujo** | Herramientas para controlar el orden de ejecución, evaluando condiciones (`if`, `else`) o repitiendo acciones (`for`, `while`). |
| **Funciones Imperativas** | Bloques de código que ejecutan instrucciones secuenciales y modifican variables globales para resolver un problema específico. |

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

### HU1 - Registrar Gasto
> _"Como usuario, quiero registrar el nombre, el tipo y el monto de un movimiento para llevar un control de mi presupuesto."_

- **Criterios de Aceptación:**
    - El sistema solicita:
        - Nombre del gasto
        - Tipo (Ingreso / Egreso)
        - Monto gastado
    - Si alguno de los campos es inválido (nombre vacío, monto menor o igual a cero), se muestra un mensaje de error y se vuelve a solicitar.
    - Si los datos son válidos, se guarda el movimiento.

- **⏱️ Checkpoint 1 ~ 30 min:** Revisar la función `registrarMovimiento()`: validaciones y estructura básica.

### HU2 - Mostrar Resumen General
> _"Como usuario, quiero ver cuántos movimientos he registrado y el saldo total (ingresos - egresos)."_

- **Criterios de Aceptación:**
    - El sistema muestra:
        - Cantidad de movimientos registrados.
        - Monto total del saldo.
- **⏱️ Checkpoint 2 ~ 60 min:** Validar el correcto uso de `for` o `while` para recorrer el array de movimientos.


### HU3 - Mostrar Resumen por Tipo
> _"Como usuario, quiero ver cuánto ha sumado cada tipo para analizar mis hábitos de gastos e ingresos."_

- **Criterios de Aceptación:**
    - El sistema muestra un listado de tipos y el total registrado en cada uno.
    - Solo muestra tipos con al menos un movimiento registrado.

## 🛠️ Requerimientos Técnicos

1. Utilizar **`prompt()`** para capturar datos del usuario y **`console.log()`** para mostrar información.
2. Utilizar **`if/else`** para validar cada gasto antes de registrarlo.
3. Utilizar un **bucle `while`** para permitir el registro de múltiples movimientos hasta que el usuario decida salir.
4. Crear al menos **3 funciones imperativas**:
    - `registrarMovimiento()`: solicita y valida datos, y guarda cada movimiento.
    - `calcularTotalSaldo()`: recorre el array y suma (o resta) los montos.
    - `mostrarResumen()`: muestra cantidad de movimientos, total de gastos y total de ingresos.

## 🌟 Logros Adicionales

- **Logro 1:** Permitir al usuario eliminar un movimiento por nombre.
- **Logro 2:** Mostrar el egreso más alto registrado, y el ingreso más alto.


## 📝 Instrucciones de Entrega

1. **README.md**  
    Incluye:
    - Breve explicación de cómo funciona el programa.
    - Listado de funciones creadas.
    - Reflexión sobre cómo las estructuras de control de flujo facilitaron el desarrollo.

2. **Entrega Final**  
    - URL del repositorio en GitHub.
    - Captura de pantalla de la ejecución final en consola.

---

## 🧑‍💻 Ejemplo de Flujo Esperado (en consola)

```
Registro de Gastos
-----------------------
Nombre del movimiento: Cena
Tipo: Egreso
Monto: 45.50

¿Registrar otro movimiento? (si/no): si
Nombre del movimiento: Consultoría
Tipo: Ingreso
Monto: 150

¿Registrar otro movimiento? (si/no): no

Resumen Final
-----------------------
Total de movimientos registrados: 2
Saldo total: $104.50

Desglose por tipo:
- Egresos: $45.50
- Ingresos: $150.00
```