# Laboratorio 05: Programación Imperativa

¡Bienvenido al primer laboratorio del proyecto **Gestor de Presupuesto Personal**! Vas a aplicar **programación imperativa** — variables, condicionales, bucles y funciones — para registrar movimientos y calcular un saldo. Este lab arma las piezas que vas a refactorizar en C06 (funcional) y C07 (OOP).

> ⏱️ **Checkpoints**: 3 momentos de validación grupal (30 min, 70 min, 110 min). Mantenerse al día es clave.

## 🎯 Objetivos de Aprendizaje

1. **Declarar y usar variables** (`let`, `const`) y arrays para representar estado.
2. **Aplicar condicionales** (`if/else`) para validar entradas del usuario.
3. **Aplicar bucles** (`while`) para iterar hasta una condición de salida.
4. **Organizar el código en funciones imperativas** acopladas que modifican el estado global.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Variable global** | `let movimientos = []` declarado fuera de funciones, accesible desde cualquier parte del script. |
| **Validación con `if`** | Patrón `if (condicion_invalida) { alert(...); return; }` antes de modificar estado. |
| **Bucle `while`** | Loop que repite mientras una condición sea verdadera. Útil cuando no sabes cuántas iteraciones harás. |
| **Función imperativa** | Función que modifica estado externo (variables globales) y/o usa efectos como `prompt` o `console.log`. |

## ⚙️ Setup Inicial

1. Repositorio nuevo: `personal-budget`. Clónalo en local.
2. Estructura mínima:

```
personal-budget/
├── index.html
├── app.js
└── README.md
```

3. En `index.html` enlaza `app.js` antes de `</body>`:

```html
<script src="app.js"></script>
```

---

## Parte 1 – Variables y entrada con `prompt()` (~30 min)

> **Objetivo:** declarar el estado global y capturar un movimiento desde `prompt()`, validándolo antes de guardar.

### Sub-pasos

1.1. En `app.js`, declara el array global:

```javascript
let movimientos = [];
```

1.2. Implementa la captura inicial con `prompt`:

```javascript
const nombre = prompt('Nombre del movimiento:');
const tipo = prompt('Tipo (ingreso / egreso):');
const valor = parseFloat(prompt('Monto:'));
```

1.3. Valida con `if` antes de guardar:

```javascript
if (!nombre || (tipo !== 'ingreso' && tipo !== 'egreso') || isNaN(valor) || valor <= 0) {
  alert('Datos inválidos. Intenta de nuevo.');
} else {
  movimientos.push({ nombre, tipo, valor });
  console.log('Movimiento registrado:', movimientos);
}
```

1.4. Abre el navegador, prueba con 1 movimiento válido (`Cena`, `egreso`, `45.50`). Revisa la consola.

✅ **Checkpoint 1 (~30 min):** Al recargar la página y completar el `prompt`, ves en consola `movimientos` con 1 elemento. Si pones tipo inválido o monto cero, ves la alerta y `movimientos` queda vacío.

---

## Parte 2 – Bucle de registro con `while` (~40 min)

> **Objetivo:** permitir múltiples movimientos en una misma ejecución con un bucle `while`.

### Sub-pasos

2.1. Envuelve la captura de la Parte 1 en un `while`:

```javascript
let continuar = 'si';

while (continuar === 'si') {
  // TODO: captura nombre, tipo, valor (sub-pasos 1.2 y 1.3)

  continuar = prompt('¿Registrar otro movimiento? (si/no):');
}
```

2.2. Mueve la captura y validación de la Parte 1 dentro del `while`, antes del último `prompt`.

2.3. Verifica el flujo: el bucle debe terminar cuando el usuario responda algo distinto a `si`.

✅ **Checkpoint 2 (~70 min):** Registra 3 movimientos seguidos. Al responder `no`, el bucle termina. `console.log(movimientos)` muestra los 3 elementos.

🏆 **Reto autónomo:** acepta también `sí` con tilde y respuesta en mayúsculas (`SI`, `Si`). Pista: `.toLowerCase()` y comparar con un array de valores válidos.

---

## Parte 3 – Funciones imperativas + reporte (~45 min)

> **Objetivo:** refactorizar la lógica del `while` en 3 funciones imperativas.

### Sub-pasos

3.1. Declara las 3 funciones vacías al inicio de `app.js`:

```javascript
function registrarMovimiento() {
  // TODO: capturar y validar (mueve aquí la lógica de Parte 1)
}

function calcularTotalSaldo() {
  // TODO: retornar ingresos - egresos recorriendo el array
}

function mostrarResumen() {
  // TODO: imprimir cantidad de movimientos + saldo total + desglose por tipo
}
```

3.2. Mueve la lógica de captura+validación a `registrarMovimiento()`. La función no retorna nada — solo modifica `movimientos` (global).

3.3. Implementa `calcularTotalSaldo()` con un `for`:

```javascript
function calcularTotalSaldo() {
  let saldo = 0;
  for (let i = 0; i < movimientos.length; i++) {
    if (movimientos[i].tipo === 'ingreso') {
      saldo = saldo + movimientos[i].valor;
    } else {
      saldo = saldo - movimientos[i].valor;
    }
  }
  return saldo;
}
```

3.4. Implementa `mostrarResumen()`:

```javascript
function mostrarResumen() {
  console.log('--- Resumen Final ---');
  console.log('Total de movimientos:', movimientos.length);
  console.log('Saldo total: $' + calcularTotalSaldo().toFixed(2));
}
```

3.5. Conecta el flujo al final del archivo:

```javascript
let continuar = 'si';
while (continuar === 'si') {
  registrarMovimiento();
  continuar = prompt('¿Registrar otro movimiento? (si/no):');
}
mostrarResumen();
```

✅ **Checkpoint 3 (~110 min):** Ejecutas el flujo, registras 2 movimientos (1 ingreso de 150, 1 egreso de 45.50) y al cerrar el bucle ves en consola: "Total de movimientos: 2" y "Saldo total: $104.50".

🏆 **Reto autónomo:** agrega un desglose por tipo dentro de `mostrarResumen()`. Suma ingresos y egresos por separado e imprime ambos. Pista: dos variables acumuladoras en un solo `for`.

---

## 🌟 Logros Adicionales

- **Logro 1:** Permitir al usuario eliminar un movimiento por nombre antes de cerrar el bucle.
- **Logro 2:** Mostrar el ingreso más alto y el egreso más alto registrados.
- **Logro 3:** Validar que los nombres no se repitan.

## 📝 Instrucciones de Entrega

1. **README.md** con:
   - Explicación breve de cómo se usa el programa.
   - Listado de las 3 funciones imperativas creadas y qué hace cada una.
   - Reflexión: ¿qué pasaría si tu programa tuviera 50 funciones imperativas que comparten `movimientos`?

2. **Entrega Final:**
   - URL del repositorio en GitHub.
   - Captura de pantalla de la ejecución en consola (con al menos 3 movimientos registrados y el resumen final).

---

## 🧑‍💻 Ejemplo de Flujo Esperado (en consola)

```
Registro de Gastos
-----------------------
Nombre del movimiento: Cena
Tipo: egreso
Monto: 45.50

¿Registrar otro movimiento? (si/no): si
Nombre del movimiento: Consultoría
Tipo: ingreso
Monto: 150

¿Registrar otro movimiento? (si/no): no

--- Resumen Final ---
Total de movimientos: 2
Saldo total: $104.50
```
