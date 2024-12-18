# Laboratorio 10: Implementando Ventas en el Sistema 🛍️

## Descripción
Continuando con el desarrollo de la aplicación de ventas, implementaremos el módulo de ventas que permitirá registrar transacciones entre clientes y productos. Este módulo integrará los objetos Customer y Product creados en el laboratorio anterior.

## 🎯 Objetivos de Aprendizaje
- Implementar relaciones entre objetos usando funciones constructoras
- Manejar colecciones de objetos en JavaScript
- Gestionar el estado de múltiples objetos relacionados
- Aplicar validaciones complejas entre objetos

## 📋 Historias de Usuario

### HU 1: Registro de Ventas
Como vendedor, necesito registrar nuevas ventas en el sistema.
- Seleccionar un cliente existente
- Agregar múltiples productos con sus cantidades
- Ver el total de la venta calculado automáticamente
- Confirmar la venta solo si hay stock suficiente

### HU 2: Actualización Automática
Como vendedor, necesito que el sistema se actualice automáticamente:
- El stock de productos debe reducirse al confirmar una venta
- El contador de compras del cliente debe incrementarse
- La lista de ventas debe actualizarse en tiempo real

## ✅ Instrucciones

### 1. Nuevo Modelo de Ventas

#### js/models/Sale.js
```javascript
function Sale(customer, date = new Date()) {
    // Validar que customer sea instancia de Customer
    if (!(customer instanceof Customer)) {
        throw new Error('Cliente inválido');
    }

    // Propiedades:
    // - id (Date.now())
    // - customer
    // - products (array vacío para iniciar)
    // - total (inicia en 0)
    // - date
    // - status ('pending' | 'completed' | 'cancelled')
}

// Métodos del prototipo:
Sale.prototype.addProduct = function(product, quantity) {
    // Validar que product sea instancia de Product
    // Validar stock suficiente
    // Agregar al array products: { product, quantity }
    // Actualizar total
};

Sale.prototype.removeProduct = function(productId) {
    // Eliminar producto del array
    // Actualizar total
};

Sale.prototype.calculateTotal = function() {
    // Sumar (producto.price * cantidad) de cada item
};

Sale.prototype.complete = function() {
    // Validar que haya productos
    // Actualizar stock de cada producto
    // Incrementar contador del cliente
    // Cambiar status a 'completed'
};

Sale.prototype.renderUI = function() {
    // Retornar elemento HTML con el detalle de la venta
};
```

### 2. Actualizaciones a Modelos Existentes

#### Product.js - Agregar:
```javascript
Product.prototype.hasStock = function(quantity) {
    return this.stock >= quantity;
};
```

#### Customer.js - Agregar:
```javascript
Customer.prototype.incrementPurchases = function() {
    this.totalPurchases++;
};
```

### 3. HTML y UI

Agregar nueva pestaña de ventas:
```html
<div class="tab-pane" id="sales">
    <div class="row">
        <!-- Formulario de Venta -->
        <div class="col-md-8">
            <h3>Nueva Venta</h3>
            <form id="sale-form">
                <!-- Select para cliente -->
                <!-- Select para producto -->
                <!-- Input para cantidad -->
                <!-- Botón para agregar producto -->
                <!-- Lista de productos agregados -->
                <!-- Total -->
                <!-- Botón confirmar venta -->
            </form>
        </div>
        
        <!-- Lista de Ventas -->
        <div class="col-md-4">
            <h3>Ventas Realizadas</h3>
            <ul id="sales-list" class="list-group">
            </ul>
        </div>
    </div>
</div>
```

### 4. Lógica de Ventas (app.js)

```javascript
// Variables para la venta en curso
let currentSale = null;

function initNewSale() {
    // Crear nueva venta con el cliente seleccionado
    // Limpiar formulario
}

function handleAddProduct(event) {
    // Prevenir default
    // Obtener producto y cantidad seleccionados
    // Agregar a la venta actual
    // Actualizar UI
}

function handleCompleteSale(event) {
    // Prevenir default
    // Completar venta
    // Actualizar UI de productos (stock)
    // Actualizar UI de cliente (compras)
    // Actualizar lista de ventas
    // Iniciar nueva venta
}
```

## ⭐️ Logros Adicionales

1. **Cancelar Venta**
- Implementar método `cancel()` en Sale
- Agregar botón para cancelar venta en curso
- Restaurar stock si la venta estaba en proceso

2. **Resumen de Venta**
- Implementar método `getSummary()` en Sale
- Mostrar modal con detalle al hacer click en una venta
- Incluir información del cliente y productos

## ⚠️ Errores Comunes a Evitar

1. **Manejo de Referencias**
```javascript
// ❌ MAL: Guardar solo IDs
this.products.push(productId);

// ✅ BIEN: Guardar objeto completo
this.products.push({ product: product, quantity: quantity });
```

2. **Validaciones de Stock**
```javascript
// ❌ MAL: Validar al final
completeSale() {
    // Muy tarde para validar stock

// ✅ BIEN: Validar al agregar
addProduct() {
    if (!product.hasStock(quantity)) {
        throw new Error('Stock insuficiente');
    }
}
```

## Instrucciones de Envío
- Crea un Pull Request llamado **lab10** (`dev > main`) con tus cambios.
- En el PR incluye:
  - Capturas de una venta completa
  - Ejemplo de validaciones funcionando
- Comparte el link del PR y del sitio desplegado