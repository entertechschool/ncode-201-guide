Tienes razón. Voy a refactorizar la guía del laboratorio para hacerla más accesible y mantener un nivel de complejidad adecuado para el curso Code 201.



# Laboratorio 12: Mejorando la Interfaz con DOM Avanzado 🎨

## Descripción
En este laboratorio, mejorarás la interfaz de usuario del sistema de ventas aplicando conceptos avanzados del DOM. Aprenderás a crear tablas dinámicas, implementar búsquedas y usar Bootstrap Offcanvas para formularios.

## 🎯 Objetivos de Aprendizaje
- Manipular el DOM para crear interfaces dinámicas
- Utilizar atributos data- para almacenar información en elementos HTML
- Implementar formularios modales con Bootstrap Offcanvas
- Crear funciones de búsqueda y ordenamiento para tablas

## 🚀 Setup Inicial

### 1. Preparación del Repositorio
```bash
git checkout -b lab-12-ui
```

### 2. Estructura de Archivos
```
sales-system/
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── models/
    │   ├── Product.js  (ya existe)
    │   ├── Customer.js (ya existe)
    │   └── Sale.js     (ya existe)
    └── app.js
```

### 3. Aprendiendo con IA
Para este laboratorio, necesitarás entender mejor cómo trabajar con tablas dinámicas. Usa un prompt similar a este:

```
Soy estudiante de desarrollo web y necesito entender:

1. ¿Cómo crear filas de tabla dinámicamente con JavaScript?
2. ¿Cómo implementar búsqueda en una tabla usando el DOM?
3. ¿Cómo ordenar una tabla al hacer click en los encabezados?

Mi conocimiento actual incluye:
- Manipulación básica del DOM
- Eventos en JavaScript
- Prototipos y constructores
```

## 📋 Historias de Usuario

### HU1: Visualización en Tablas
Como usuario, necesito ver los datos organizados en tablas que me permitan:
- Buscar registros fácilmente
- Ordenar por columnas
- Ver claramente las acciones disponibles (editar/eliminar)

### HU2: Formularios en Offcanvas
Como usuario, necesito que los formularios:
- Se abran en un panel lateral
- No interrumpan la visualización de la tabla
- Se limpien al cerrarse

## ✅ Instrucciones

### 1. HTML Base

```html
<!-- Tabla de Productos (ejemplo) -->
<div class="table-container">
    <!-- Barra de búsqueda -->
    <div class="toolbar">
        <input type="search" 
               class="form-control w-25" 
               data-table="products"
               placeholder="Buscar...">
        
        <button class="btn btn-primary" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#productForm">
            Nuevo Producto
        </button>
    </div>

    <!-- Tabla -->
    <table class="table" id="productsTable">
        <thead>
            <tr>
                <th data-sort="name">Nombre</th>
                <th data-sort="price">Precio</th>
                <th data-sort="stock">Stock</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</div>

<!-- Formulario en Offcanvas -->
<div class="offcanvas offcanvas-end" id="productForm">
    <div class="offcanvas-header">
        <h5>Nuevo Producto</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
        <form id="productFormContent">
            <input type="hidden" name="id">
            <!-- campos del formulario -->
        </form>
    </div>
</div>
```

### 2. CSS Necesario

```css
/* Estilos para las tablas */
.table-container {
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Indicador de ordenamiento */
.table th[data-sort] {
    cursor: pointer;
    position: relative;
}

.table th[data-sort]::after {
    content: '↕';
    margin-left: 5px;
    opacity: 0.5;
}

.table th.sort-asc::after {
    content: '↑';
    opacity: 1;
}

.table th.sort-desc::after {
    content: '↓';
    opacity: 1;
}
```

### 3. Funciones para el DOM

```javascript
// Funciones de búsqueda
function searchTable(tableId, searchText) {
    const table = document.getElementById(tableId);
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchText.toLowerCase()) 
            ? '' 
            : 'none';
    });
}

// Funciones de ordenamiento
function sortTable(tableId, column, direction = 'asc') {
    const table = document.getElementById(tableId);
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    
    rows.sort((a, b) => {
        const aValue = a.querySelector(`td[data-${column}]`).textContent;
        const bValue = b.querySelector(`td[data-${column}]`).textContent;
        return direction === 'asc' 
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
    });
    
    // Limpiar y reagregar filas ordenadas
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
}

// Funciones de renderizado
function renderProductRow(product) {
    return `
        <tr data-id="${product.id}">
            <td data-name>${product.name}</td>
            <td data-price>${product.getFormattedPrice()}</td>
            <td data-stock>${product.stock}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" 
                        onclick="editProduct(${product.id})">
                    Editar
                </button>
                <button class="btn btn-sm btn-outline-danger"
                        onclick="deleteProduct(${product.id})">
                    Eliminar
                </button>
            </td>
        </tr>
    `;
}

// Funciones de formulario
function handleProductForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    const product = new Product(
        formData.get('name'),
        formData.get('price'),
        formData.get('stock')
    );
    
    // Agregar producto y actualizar tabla
    products.push(product);
    refreshProductsTable();
    
    // Cerrar y limpiar formulario
    const offcanvas = bootstrap.Offcanvas.getInstance(
        document.getElementById('productForm')
    );
    offcanvas.hide();
    form.reset();
}
```

### 4. Event Listeners

```javascript
// Búsqueda en tiempo real
document.querySelectorAll('input[data-table]').forEach(input => {
    input.addEventListener('input', (e) => {
        const tableId = e.target.dataset.table + 'Table';
        searchTable(tableId, e.target.value);
    });
});

// Ordenamiento por columnas
document.querySelectorAll('th[data-sort]').forEach(th => {
    th.addEventListener('click', (e) => {
        const column = e.target.dataset.sort;
        const currentDir = e.target.classList.contains('sort-asc') 
            ? 'desc' 
            : 'asc';
            
        // Actualizar estados de ordenamiento
        document.querySelectorAll('th').forEach(el => 
            el.classList.remove('sort-asc', 'sort-desc')
        );
        e.target.classList.add(`sort-${currentDir}`);
        
        // Ordenar tabla
        const tableId = e.target.closest('table').id;
        sortTable(tableId, column, currentDir);
    });
});
```

## ⭐️ Logros Adicionales

1. **Persistencia del Ordenamiento**
- Guardar la columna y dirección de ordenamiento en localStorage
- Restaurar al cargar la página

2. **Búsqueda Avanzada**
- Permitir buscar por columnas específicas
- Agregar filtros (rango de precios, stock mínimo, etc.)

## Instrucciones de Envío
- Crea un Pull Request desde `lab-12-ui` a `main`
- En el PR incluye:
  - Capturas de la interfaz mejorada
  - Ejemplos de búsqueda y ordenamiento funcionando
- Comparte el link del PR y del sitio desplegado

Esta versión simplificada:
1. Elimina los managers complejos
2. Usa funciones más directas y comprensibles
3. Mantiene la separación de responsabilidades
4. Es más apropiada para el nivel del curso
5. Facilita la comprensión de los conceptos del DOM

¿Te parece que esta versión es más adecuada para el nivel del curso?