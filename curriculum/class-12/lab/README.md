# Laboratorio 12: Mejorando la Interfaz con DOM Avanzado 🎨

## Descripción
En este laboratorio, mejorarás la interfaz de usuario del sistema de ventas implementando patrones avanzados de manipulación del DOM. Aprenderás a crear interfaces dinámicas y eficientes utilizando características modernas de Bootstrap y JavaScript.

## 🎯 Objetivos de Aprendizaje
- Implementar interfaces dinámicas usando manipulación avanzada del DOM
- Utilizar atributos data- y la propiedad dataset para manejar datos en elementos HTML
- Crear componentes reutilizables para formularios usando Bootstrap Offcanvas
- Implementar funcionalidades de búsqueda y ordenamiento en tablas dinámicas

## 🚀 Setup Inicial

### 1. Preparación del Repositorio
```bash
git checkout -b lab-12-ui
```

### 2. Actualización de Dependencias
```html
<!-- Asegúrate de tener Bootstrap 5.3 o superior -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

### 3. Aprendiendo con IA
Para este laboratorio, necesitarás entender mejor los atributos data- y el dataset. Usa un prompt similar a este:

```
Soy estudiante de desarrollo web y necesito entender:

1. ¿Qué son los atributos data- en HTML?
2. ¿Cómo acceder a ellos usando dataset en JavaScript?
3. ¿Cuáles son las mejores prácticas para usar data- en tablas dinámicas?

Mi conocimiento actual incluye:
- Manipulación básica del DOM
- Eventos en JavaScript
- Bootstrap 5
```

## 📋 Historias de Usuario

### HU1: Interfaz de Tablas
Como usuario, necesito ver los datos en tablas ordenadas y buscables para encontrar información rápidamente.
- Ver productos, clientes y ventas en tablas separadas
- Buscar registros por cualquier campo
- Ordenar registros por columnas específicas

### HU2: Formularios Modales
Como usuario, necesito formularios que no interrumpan mi flujo de trabajo.
- Agregar/editar registros en paneles laterales
- Ver formularios sin perder el contexto de la tabla
- Recibir feedback visual de las acciones realizadas

## ✅ Instrucciones

### 1. Implementación de Tablas Dinámicas

#### HTML Base para Tablas
```html
<div class="table-container">
  <!-- Barra de herramientas -->
  <div class="toolbar">
    <input type="search" class="search-input" data-table="products-table">
    <button class="btn-add" data-bs-toggle="offcanvas" data-bs-target="#productForm">
      Nuevo
    </button>
  </div>

  <!-- Tabla -->
  <table class="table" id="productsTable">
    <thead>
      <tr>
        <th data-sort="name">Nombre</th>
        <th data-sort="price">Precio</th>
        <!-- más columnas -->
      </tr>
    </thead>
    <tbody>
      <!-- Se llena dinámicamente -->
    </tbody>
  </table>
</div>
```

#### Implementación del Offcanvas
```html
<div class="offcanvas offcanvas-end" id="productForm">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Nuevo Producto</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <form id="productFormContent" data-model="product">
      <!-- campos del formulario -->
    </form>
  </div>
</div>
```

### 2. JavaScript para Tablas Dinámicas

#### TableManager.js
```javascript
function TableManager(tableId) {
    this.table = document.getElementById(tableId);
    this.tbody = this.table.querySelector('tbody');
    this.headers = this.table.querySelectorAll('th[data-sort]');
}

TableManager.prototype.init = function() {
    // Inicializar búsqueda
    // Inicializar ordenamiento
    // Configurar observadores
};

TableManager.prototype.search = function(query) {
    // Implementar búsqueda en todas las columnas
};

TableManager.prototype.sort = function(column, direction) {
    // Implementar ordenamiento por columna
};

TableManager.prototype.render = function(data) {
    // Renderizar datos en la tabla
};
```

### 3. Implementación de Formularios Dinámicos

#### FormManager.js
```javascript
function FormManager(formId, model) {
    this.form = document.getElementById(formId);
    this.model = model;
    this.offcanvas = bootstrap.Offcanvas.getInstance(
        this.form.closest('.offcanvas')
    );
}

FormManager.prototype.init = function() {
    // Configurar eventos del formulario
    // Manejar submit
    // Limpiar al cerrar
};

FormManager.prototype.populateForm = function(data) {
    // Llenar formulario para edición
};

FormManager.prototype.getFormData = function() {
    // Obtener datos del formulario
};
```

### 4. Integración en app.js

```javascript
// Inicializar managers
const productTable = new TableManager('productsTable');
const productForm = new FormManager('productFormContent', 'product');

// Conectar modelos con UI
Product.prototype.toTableRow = function() {
    // Crear tr con datos del producto
    // Agregar data-attributes necesarios
};

// Actualizar métodos existentes para usar nuevos managers
function handleNewProduct(event) {
    // Usar FormManager para procesar datos
    // Actualizar tabla usando TableManager
}
```

## ⭐️ Logros Adicionales

1. **Persistencia de Ordenamiento**
- Guardar el estado de ordenamiento en localStorage
- Restaurar al cargar la página

2. **Búsqueda Avanzada**
- Permitir búsqueda por rangos en campos numéricos
- Implementar filtros múltiples

## ⚠️ Errores Comunes a Evitar

1. **Manejo del DOM**
```javascript
// ❌ MAL: Múltiples queries al DOM
rows.forEach(row => {
    document.querySelector(/* ... */);
});

// ✅ BIEN: Cachear referencias al DOM
const rowsContainer = document.querySelector(/* ... */);
rows.forEach(row => {
    // usar rowsContainer
});
```

2. **Eventos y Performance**
```javascript
// ❌ MAL: Evento por cada fila
rows.forEach(row => {
    row.addEventListener(/* ... */);
});

// ✅ BIEN: Delegación de eventos
table.addEventListener('click', event => {
    const row = event.target.closest('tr');
    if (row) {
        // manejar evento
    }
});
```

## Instrucciones de Envío
- Crea un Pull Request desde `lab-12-ui` a `main`
- En el PR incluye:
  - Capturas de la nueva interfaz
  - Ejemplos de búsqueda y ordenamiento funcionando
- Comparte el link del PR y del sitio desplegado
