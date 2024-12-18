# Laboratorio 08: Métodos de String y Array en el Gestor de Presupuesto 🔍

## Descripción
En este laboratorio, implementarás los métodos más comunes de los objetos String y Array para mejorar tu gestor de presupuesto personal.

> En este laboratorio tendrás diversos ejercicios que puedes implementar. Intenta hacer tantos como puedas.

## 🎯 Objetivos de Aprendizaje
- Implementar métodos nativos del objeto String para manipular texto
- Utilizar métodos avanzados del objeto Array para gestionar colecciones

## 🚀 Setup Inicial

```bash
git checkout -b lab-08-array-string
```

## ✅ Instrucciones

### js/Budget.js:

1. `findTransactionById`
```javascript
// Usa Array.find() para buscar una transacción por su id
// Retorna la transacción encontrada o undefined
```

2. `filterTransactionsByType`
```javascript
// Usa Array.filter() para obtener solo las transacciones de un tipo específico
// Retorna un nuevo array con las transacciones filtradas
```

3. `getTotalByType`
```javascript
// Usa Array.reduce() para sumar todos los montos de un tipo específico
// Retorna el total como número
```

### js/Transaction.js:

4. `updateCategories`
```javascript
// Usa Array.map() para actualizar las categorías de todas las transacciones
// Retorna un nuevo array con las transacciones actualizadas
```

5. `hasTransactionsOverAmount`
```javascript
// Usa Array.some() para verificar si existe alguna transacción sobre cierto monto
// Retorna true/false
```

6. `areAllTransactionsValid`
```javascript
// Usa Array.every() para verificar que todas las transacciones tengan montos positivos
// Retorna true/false
```

7. `formatDescription`
```javascript
// Usa String.trim() para eliminar espacios en blanco al inicio y final
// Retorna la descripción limpia
```

8. `getTransactionType`
```javascript
// Usa String.toLowerCase() para normalizar el tipo de transacción
// Retorna 'ingreso' o 'gasto' en minúsculas
```

9. `splitTags`
```javascript
// Usa String.split() para convertir un string de tags en array
// Ejemplo: "comida,casa,servicios" → ["comida", "casa", "servicios"]
```

### js/app.js:

10. `searchTransactions`
```javascript
// Usa String.includes() para buscar transacciones por descripción
// Actualiza la lista mostrando solo las coincidencias
```

11. `formatAmount`
```javascript
// Usa String.replace() para dar formato a los montos
// Ejemplo: 1000 → "1,000.00"
```

12. `getMonthName`
```javascript
// Usa String.slice() para extraer y formatear el nombre del mes de una fecha
// Retorna el nombre del mes en español
```

### Control de Versiones
Realiza commits descriptivos por cada función desarrollada:
```bash
git commit -m "feat: nombre de función implementada"
```

## Instrucciones de Envío
- Actualiza el sitio en GitHub Pages
- Crea un Pull Request desde `lab-08-array-string` a `main`
- En la descripción del PR, incluye:
  - Lista de métodos String/Array implementados
- Comparte el link de tu repositorio y tu sitio publicado
