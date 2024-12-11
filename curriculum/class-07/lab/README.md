# Laboratorio 07: POO en el Gestor de Presupuesto 🧪

## Descripción
En este laboratorio, evolucionarás tu aplicación de gestión de presupuestos personales implementando Programación Orientada a Objetos mediante funciones constructoras. Transformarás las transacciones en objetos y organizarás el código usando prototipos para mejorar su estructura y mantenibilidad.

## 🎯 Objetivos de Aprendizaje
- Implementar funciones constructoras en JavaScript
- Utilizar el prototipo para compartir métodos
- Transformar funciones independientes en métodos de objetos
- Crear objetos relacionados que trabajen juntos

## 🚀 Setup Inicial

### 1. Preparación del Repositorio
```bash
git checkout -b lab-07-objetos
```

### 2. Nueva Estructura de Archivos
```
personal-budget/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── utils.js
│   ├── validators.js
│   ├── Transaction.js   <-- Nuevo
│   └── Budget.js        <-- Nuevo
```

### 3. Aprendiendo con IA
Para este laboratorio, necesitarás comprender los fundamentos de POO con funciones constructoras en JavaScript. Usa un prompt similar a este:

```
Soy estudiante de desarrollo web aprendiendo JavaScript. Necesito entender:

1. Qué son las funciones constructoras y cómo usarlas
2. Cómo funciona el prototipo en JavaScript
3. Ver ejemplos de cómo agregar métodos al prototipo
4. Diferencias entre this en funciones constructoras vs funciones normales

Mi conocimiento incluye:
- JavaScript: variables, funciones, arrays
- Programación funcional básica
- Manipulación del DOM
```

### 4. Precauciones 🔴
Recuerda que la IA es una herramienta de apoyo. Para este laboratorio:
- Intenta diseñar la estructura de objetos por tu cuenta
- Usa la IA para entender conceptos específicos de prototipos
- Escribe el código tú mismo, incluso si cometes errores
- Aprende a debuggear usando console.log para ver el valor de 'this'

## ✅ Instrucciones

### 1. Definición de Constructores y Prototipos

#### Transaction.js
```javascript
// Constructor
function Transaction(type, amount) {
// - id único (usar Date.now())
// - tipo (ingreso/gasto)
// - descripción
// - monto
// - fecha de creación
}

Transaction.prototype.getFormattedDate = function() {
  // Retorna la fecha como String en formato legible
};

Transaction.prototype.getSignedAmount = function() {
  // Retorna el monto con signo según tipo
};
```

#### Budget.js
```javascript
// Constructor
function Budget() {
  // Inicializa un array vacío para las transacciones
}

Budget.prototype.add()
// Agrega una nueva transacción al array

Budget.prototype.remove()
// Elimina una transacción por id

Budget.prototype.calculateTotal()
// Calcula el total sumando los montos con signo
```

### 2. Modificaciones en utils.js
Mueve las funciones de cálculo existentes al prototipo de Budget:

```js
// Convertir estas funciones:
calcularBalance()
formatearMonto()

// En métodos del prototipo de Budget:
Budget.prototype.calculateBalance()
Budget.prototype.formatAmount()
```

### 3. Modificaciones en validators.js
Agrega validaciones para objetos:
```js
// Agregar estas funciones:
function isValidTransaction(transaction)
// Valida que la transacción tenga todas las propiedades necesarias

function isValidBudget(budget)
// Valida que el presupuesto sea una instancia correcta de Budget
```


### 4. Modificaciones en app.js
Actualiza el código principal para usar los constructores:
```js
// Crear instancias globales
var presupuesto = new Budget();

// En el evento submit:
function handleSubmit(event) {
  // 1. Crear nueva transacción con el constructor
  // 2. Agregar al presupuesto usando el método add
  // 3. Actualizar UI usando los métodos del prototipo
}
```

### 5. Mejoras en el HTML
```html
<form id="transaction-form">
  <input type="text" id="description" placeholder="Descripción" required>
  <input type="number" id="amount" placeholder="Monto" required>
  <select id="type">
    <option value="ingreso">Ingreso</option>
    <option value="gasto">Gasto</option>
  </select>
  <button type="submit">Agregar</button>
</form>

<div id="transactions-container">
  <h3>Total: $<span id="total">0.00</span></h3>
  <ul id="transactions-list"></ul>
</div>
```

### 6. Control de Versiones
- Realiza commits descriptivos siguiendo el formato:
```bash
git commit -m "feat: implementa constructor Transaction"
git commit -m "feat: implementa constructor Budget"
git commit -m "refactor: utils y validators"
git commit -m "refactor: html y app"
```

## 🌟 Logros Adicionales

1. **Validación de Objetos**

Implementa un método en el prototipo de Transaction que valide:

- Que el monto sea positivo
- Que el tipo sea uno de los permitidos
- Que la descripción no esté vacía
- El método debe retornar true/false según la validación
- Úsalo antes de agregar nuevas transacciones

2. **Categorización de Transacciones**

Agrega una propiedad 'categoría' al constructor Transaction
Implementa un método que filtre transacciones por categoría
- Las categorías para gastos deben ser:
  - Alimentación
  - Transporte
  - Servicios
  - Otros

- Las categorías para ingresos deben ser:
  - Salario
  - Ventas
  - Otros

- Muestra subtotales por categoría

## Instrucciones de Envío
- Actualiza el sitio en GitHub Pages
- Crea un Pull Request desde la rama `lab-07-poo` > `main`
- Incluye en el PR:
  - Lista de cambios implementados
  - Explicación de cómo usaste los prototipos para mejorar tu código