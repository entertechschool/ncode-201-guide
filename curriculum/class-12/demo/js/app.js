// Almacenamiento de datos
let products = [];
let currentSortConfig = {
    column: null,
    direction: 'asc'
};

// Funciones de búsqueda
function searchTable(tableId, searchText) {
    const tbody = document.querySelector(`#${tableId} tbody`);
    const rows = tbody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchText.toLowerCase()) 
            ? '' 
            : 'none';
    });
}

// Funciones de ordenamiento
function sortTable(tableId, column, direction = 'asc') {
    const tbody = document.querySelector(`#${tableId} tbody`);
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    rows.sort((a, b) => {
        const aValue = a.querySelector(`td[data-${column}]`).textContent;
        const bValue = b.querySelector(`td[data-${column}]`).textContent;
        
        if (column === 'price') {
            // Extraer números de formato "S/ XX.XX"
            const aNum = parseFloat(aValue.replace('S/ ', ''));
            const bNum = parseFloat(bValue.replace('S/ ', ''));
            return direction === 'asc' ? aNum - bNum : bNum - aNum;
        } else if (column === 'stock') {
            // Comparar como números
            return direction === 'asc' 
                ? Number(aValue) - Number(bValue)
                : Number(bValue) - Number(aValue);
        } else {
            // Comparar como texto
            return direction === 'asc' 
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
        }
    });
    
    // Guardar configuración actual
    currentSortConfig = { column, direction };
    
    // Actualizar UI
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
    
    // Actualizar indicadores de ordenamiento
    const headers = document.querySelectorAll(`#${tableId} th[data-sort]`);
    headers.forEach(header => {
        header.classList.remove('sort-asc', 'sort-desc');
        if (header.dataset.sort === column) {
            header.classList.add(`sort-${direction}`);
        }
    });
}

// Funciones CRUD
function addProduct(product) {
    products.push(product);
    refreshProductsTable();
}

function deleteProduct(id) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        refreshProductsTable();
    }
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        const form = document.getElementById('productFormContent');
        form.elements['id'].value = product.id;
        form.elements['name'].value = product.name;
        form.elements['price'].value = product.price;
        form.elements['stock'].value = product.stock;
        
        const offcanvas = new bootstrap.Offcanvas('#productForm');
        offcanvas.show();
    }
}

// Funciones de UI
function refreshProductsTable() {
    const tbody = document.querySelector('#productsTable tbody');
    tbody.innerHTML = products
        .map(product => product.toTableRow())
        .join('');
        
    // Mantener ordenamiento actual
    if (currentSortConfig.column) {
        sortTable(
            'productsTable',
            currentSortConfig.column,
            currentSortConfig.direction
        );
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Manejar búsqueda
    const searchInputs = document.querySelectorAll('input[data-table]');
    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            searchTable(e.target.dataset.table, e.target.value);
        });
    });

    // Manejar ordenamiento
    const sortHeaders = document.querySelectorAll('th[data-sort]');
    sortHeaders.forEach(header => {
        header.addEventListener('click', (e) => {
            const column = e.target.dataset.sort;
            const currentDir = e.target.classList.contains('sort-asc')
                ? 'desc'
                : 'asc';
            
            const tableId = e.target.closest('table').id;
            sortTable(tableId, column, currentDir);
        });
    });

    // Manejar formulario de producto
    const productForm = document.getElementById('productFormContent');
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const id = formData.get('id');
        
        if (id) {
            // Actualizar producto existente
            const product = products.find(p => p.id === Number(id));
            if (product) {
                product.name = formData.get('name');
                product.price = Number(formData.get('price'));
                product.stock = Number(formData.get('stock'));
                refreshProductsTable();
            }
        } else {
            // Crear nuevo producto
            const product = new Product(
                formData.get('name'),
                formData.get('price'),
                formData.get('stock')
            );
            addProduct(product);
        }
        
        // Cerrar y limpiar formulario
        const offcanvas = bootstrap.Offcanvas.getInstance('#productForm');
        offcanvas.hide();
        e.target.reset();
    });
    
    // Limpiar formulario al cerrar offcanvas
    const offcanvasForm = document.getElementById('productForm');
    offcanvasForm.addEventListener('hidden.bs.offcanvas', () => {
        productForm.reset();
        productForm.elements['id'].value = '';
    });
});