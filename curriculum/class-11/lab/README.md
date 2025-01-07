# Laboratorio 11: Manipulación del DOM con Prototipos 🔄

## Descripción
En este laboratorio, continuarás desarrollando el sistema de ventas enfocándote en la manipulación del DOM mediante prototipos. Implementarás una interfaz dinámica que permita visualizar y actualizar el estado de productos, clientes y ventas de manera eficiente y mantenible.

## 🎯 Objetivos de Aprendizaje
- Manipular el DOM de forma estructurada usando prototipos
- Implementar patrones de delegación de eventos
- Mantener sincronizado el estado de los objetos con la UI
- Aplicar el principio DRY en la manipulación del DOM

## 📋 Historias de Usuario

### HU 1: Visualización Dinámica
Como vendedor, necesito que la interfaz se actualice automáticamente cuando:
- Agrego/elimino productos de una venta
- Cambio el estado de una venta
- Actualizo el stock de productos

### HU 2: Interacción Eficiente
Como vendedor, necesito poder:
- Editar productos directamente en la lista
- Ver detalles expandibles de cada venta
- Filtrar ventas por estado o cliente

## 🚀 Setup Inicial

### 1. Estructura del Proyecto
```bash
git checkout -b lab-11-dom

# Nuevos archivos
touch js/ui/DOMManager.js
touch js/ui/EventHandler.js
```

### 2. Aprendiendo con IA
```
Soy estudiante de desarrollo web y necesito entender:

1. Cómo mantener sincronizados objetos JavaScript con el DOM
2. Mejores prácticas para crear/actualizar elementos dinámicamente
3. Patrones para manejar eventos en listas dinámicas

Mi conocimiento incluye:
- JavaScript: prototipos, constructores
- DOM: createElement, appendChild
- Eventos: addEventListener
```

## ✅ Instrucciones

### 1. Gestor del DOM (DOMManager.js)

```javascript
function DOMManager() {
    this.containers = {
        products: document.getElementById('products-list'),
        customers: document.getElementById('customers-list'),
        sales: document.getElementById('sales-list')
    };
}

DOMManager.prototype.createProductCard = function(product) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3', 'product-card');
    card.dataset.productId = product.id;
    
    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <div class="stock-control">
                <button class="btn btn-sm btn-danger">-</button>
                <span class="mx-2">${product.stock}</span>
                <button class="btn btn-sm btn-success">+</button>
            </div>
        </div>
    `;
    
    return card;
};

DOMManager.prototype.updateProductCard = function(product) {
    const card = document.querySelector(`[data-product-id="${product.id}"]`);
    if (!card) return;
    
    // Actualizar solo lo necesario
    card.querySelector('.card-title').textContent = product.name;
    card.querySelector('.stock-control span').textContent = product.stock;
};

// Métodos similares para Customer y Sale...
```

### 2. Manejador de Eventos (EventHandler.js)

```javascript
function EventHandler(domManager) {
    this.domManager = domManager;
    this.setupEventListeners();
}

EventHandler.prototype.setupEventListeners = function() {
    // Delegación de eventos para productos
    this.domManager.containers.products.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        if (!productCard) return;

        if (e.target.matches('.btn-danger')) {
            this.handleDecrementStock(productCard);
        } else if (e.target.matches('.btn-success')) {
            this.handleIncrementStock(productCard);
        }
    });

    // Más manejadores de eventos...
};

EventHandler.prototype.handleDecrementStock = function(productCard) {
    const productId = productCard.dataset.productId;
    const product = // obtener producto por id
    
    try {
        product.updateStock(-1);
        this.domManager.updateProductCard(product);
    } catch (error) {
        alert('No hay suficiente stock');
    }
};
```

### 3. Actualizaciones a los Modelos

#### Product.js
```javascript
Product.prototype.toCardElement = function() {
    return this.domManager.createProductCard(this);
};

Product.prototype.updateDOM = function() {
    this.domManager.updateProductCard(this);
};
```

#### Sale.js
```javascript
Sale.prototype.toListElement = function() {
    return this.domManager.createSaleItem(this);
};

Sale.prototype.expandDetails = function() {
    this.domManager.showSaleDetails(this);
};
```

### 4. Inicialización (app.js)

```javascript
// Inicialización
const domManager = new DOMManager();
const eventHandler = new EventHandler(domManager);

// Crear instancias iniciales
const product1 = new Product('Laptop', 1299.99, 10);
product1.toCardElement(); // Agregar al DOM

// Actualizar UI
function refreshUI() {
    domManager.refreshAll();
}
```

## ⭐️ Logros Adicionales

1. **Animaciones Suaves**
```javascript
DOMManager.prototype.animateUpdate = function(element) {
    element.classList.add('highlight');
    setTimeout(() => {
        element.classList.remove('highlight');
    }, 1000);
};
```

2. **Modo Edición Inline**
```javascript
DOMManager.prototype.enableEditMode = function(element) {
    // Convertir texto en input
    // Manejar guardado al perder foco
};
```

## ⚠️ Errores Comunes

1. **Manipulación Excesiva del DOM**
```javascript
// ❌ MAL: Recrear todo el elemento
card.innerHTML = `<div>...</div>`;

// ✅ BIEN: Actualizar solo lo necesario
card.querySelector('.stock').textContent = newValue;
```

2. **Event Listeners Duplicados**
```javascript
// ❌ MAL: Agregar listener a cada botón
buttons.forEach(btn => btn.addEventListener('click', handler));

// ✅ BIEN: Usar delegación de eventos
container.addEventListener('click', handleClick);
```

## Instrucciones de Envío
- Crea un Pull Request desde `lab-11-dom` a `main`
- Incluye en el PR:
  - Ejemplos de manipulación del DOM
  - Demo de eventos funcionando
- Comparte el link del PR y tu sitio desplegado