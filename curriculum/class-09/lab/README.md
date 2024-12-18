# Laboratorio 09: Sistema de Ventas con Prototipos 🛍️

En este laboratorio, iniciarás el desarrollo de una aplicación de gestión de ventas usando Programación Orientada a Objetos mediante funciones constructoras. Implementarás la base del sistema con productos, clientes y ventas, estableciendo las relaciones entre estos objetos mediante prototipos.

## 🎯 Objetivos de Aprendizaje
- Implementar un sistema de objetos relacionados usando funciones constructoras
- Establecer relaciones modelo/instancia efectivas
- Utilizar prototipos para compartir comportamiento entre objetos
- Mantener la separación de responsabilidades entre modelos

## 🚀 Setup Inicial

### 1. Estructura del Proyecto
```bash
# Crear y configurar el repositorio
git init sales-app
cd sales-app

# Crear estructura de archivos
mkdir css js
mkdir js/models
touch index.html css/styles.css js/app.js js/models/{Product,Customer}.js
```

### 2. Sincronizar con GitHub
- Publica tu repositorio local el GitHub desde VS Code.
- Luego, crea y muévete a la rama `dev` para empezar a trabajar.

### 3. Configuración de Archivos
```html
<!-- index.html -->

<!-- dentro de head -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="css/styles.css" rel="stylesheet">

<!-- dentro de body -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/models/Product.js"></script>
<script src="js/models/Customer.js"></script>
<script src="js/app.js"></script>
```

### 4. Aprendiendo con IA
Usa este prompt para entender mejor el contexto de `this`:
```
Necesito entender el comportamiento de 'this' en JavaScript:

1. ¿Cómo funciona 'this' dentro de:
   - Funciones constructoras
   - Métodos del prototipo
   - Callbacks de eventos

2. Muestra ejemplos de:
   - Uso correcto de 'this' en constructores
   - Errores comunes y cómo evitarlos
   - Cómo mantener el contexto en callbacks

Mi conocimiento actual:
- Sé crear funciones constructoras básicas
- Entiendo qué es el prototipo
- He trabajado con eventos del DOM
```

## 📋 Historias de Usuario

### HU 1: Gestión de Productos
Como vendedor, necesito registrar nuevos productos en el sistema para mantener un catálogo actualizado.
- Registrar nombre, precio y stock inicial
- Ver el listado de productos registrados
- Visualizar el precio formateado en moneda local

### HU 2: Gestión de Clientes
Como vendedor, necesito registrar los datos de mis clientes para darles seguimiento.
- Registrar nombre y email del cliente
- Ver el listado de clientes registrados
- Mantener un contador de compras por cliente


## ✅ Instrucciones

### 1. Implementación de Modelos

#### js/models/Product.js
```javascript
function Product(name, price, stock) {
    // Propiedades:
    // - id (generar con Date.now())
    // - name
    // - price
    // - stock
    // - createdAt (new Date())
}

// Métodos del prototipo:
Product.prototype.updateStock = function(quantity) {
    // Actualiza el stock y valida que no sea negativo
};

Product.prototype.getFormattedPrice = function() {
    // Retorna el precio formateado como moneda (S/ 1,500.00)
};

Product.prototype.getProductInfo = function() {
    // retorna: Pelota Adidas - S/ 389.00 (Stock: 14)
};

Product.prototype.renderUI = function() {
    // retornar un elemento HTML `li` con la información del producto
};
```

#### js/models/Customer.js
```javascript
function Customer(name, email) {
    // Propiedades:
    // - id
    // - name
    // - email
    // - totalPurchases (inicia en 0)
    // - createdAt
}

// Métodos del prototipo:
Customer.prototype.updateEmail = function(email) {
    // Actualiza el email
};

Customer.prototype.renderUI = function() {
    // retornar un elemento HTML `li` con la información del cliente
};
```

#### Validaciones en general:
```js
// En Product
if (!name || typeof price !== 'number' || price <= 0 || stock < 0) {
    throw new Error('Datos inválidos');
}

// En Customer
if (!name || !email || !email.includes('@')) {
    throw new Error('Datos inválidos');
}
```

### 2. HTML y UI
- Implementa un Layout con pestañas (tabs) para cada módulo
    - Módulo de productos
    - Módulo de clientes
- Según el módulo, implementa un formulario para:
    - Registro de productos
    - Registro de clientes
- Según el módulo, implementa un lista para:
    - Mostrar productos y actualizar stock
    - Mostrar clientes y actualizar email

### 3. Lógica y Eventos
En app.js, implementa:
```javascript

// Funciones para manejar los formularios
function handleNewProduct(event) {
    // Prevenir el comportamiento default
    // Crear nuevo producto
    // Actualizar UI
}

function handleNewCustomer(event) {
    // Prevenir el comportamiento default
    // Crear nuevo cliente
    // Actualizar UI
}

// Funciones para manejar los updates
function handleUpdateProduct(event) {
    // Actualizar el stock de un producto
    // Actualizar UI
}

function handleUpdateCustomer(event) {
    // Actualizar el email de un cliente
    // Actualizar UI
}
```

## ⭐️ Logros Adicionales

1. **Búsqueda de Productos y Clientes**
- Agregar campo de búsqueda que filtre la lista
- Implementar métodos en los prototipos:
```js
Product.prototype.matches = function(query) {
    // Busca en nombre del producto
};
Customer.prototype.matches = function(query) {
    // Busca en nombre y email
};
```

## Instrucciones de Envío
- Crea un Pull Request llamado **lab09** (`dev > main`) con tus cambios.
    - En este PR: incluye capturas de pantalla del sistema funcionando.
- Comparte el link del PR y del sitio desplegado, como respuesta a esta tarea.
