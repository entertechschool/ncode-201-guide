# Laboratorio 12: Mejorando la Interfaz con DOM Avanzado 🎨

## Descripción
En este laboratorio, mejorarás la interfaz de usuario del sistema de ventas implementando patrones avanzados de manipulación del DOM. Aprenderás a crear interfaces dinámicas y eficientes utilizando características modernas de Bootstrap y JavaScript.

## 🎯 Objetivos de Aprendizaje
- Implementar interfaces dinámicas usando manipulación avanzada del DOM
- Utilizar atributos data- y la propiedad dataset para manejar datos en elementos HTML
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

### 3. Event Listeners

```javascript
// Búsqueda en tiempo real
document.querySelectorAll('input[data-table]').forEach(input => {
    input.addEventListener('input', (e) => {
        const tableId = e.target.dataset.table + 'Table';
        // Crear la función searchTable utilizando dataset para obtener el contenido concatenado de cada row.
        // searchTable(tableId, e.target.value); 
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
        // Crear la función sortTable
        // sortTable(tableId, column, currentDir);
    });
});
```

## Instrucciones de Envío
- Crea un Pull Request desde `lab-12-ui` a `main`
- En el PR incluye:
  - Capturas de la nueva interfaz
  - Ejemplos de búsqueda y ordenamiento funcionando
- Comparte el link del PR y del sitio desplegado
