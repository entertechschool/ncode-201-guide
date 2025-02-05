> **Code 201** / Ejercicios de Repaso 🚴‍♂️

# Centro Restobar

Este proyecto te permitirá demostrar los conocimientos adquiridos durante el curso Code 101 - Elementals, desarrollando una carta virtual responsiva para el Restobar Centro.

## Contexto
El restaurante y bar "Centro" se caracteriza por sus deliciosos platos peruanos y su gran variedad de tragos, 
contando con una carta de 20+ opciones entre comida y bebidas.

![Logo Centro](./logo_centro.svg)

Debido a su buena reputación en los últimos meses, ha incrementado notablemente la concurrencia, lo cuál les obliga a atender más rápido para evitar generar colas.

Se les ha ocurrido la siguiente idea:

### Problema / Oportunidad
Si tuvieramos una carta virtual que se adapte muy bien a los celulares (y a las pantallas normales), con cada opción del menú muy bien especificada (foto, nombre y precio); podríamos lograr que nuestros comensales vengan al restaurante con una muy buena idea de lo que van a pedir, y de esa forma agilizamos la toma de pedidos. 

### Solución
Crearemos un sitio web responsivo con 4 páginas, que contendrán el "Home" y los catálogos de "Entradas", "Platos de fondo" y "Bebidas" para el restobar "Centro".

## ☑️ TO-DO:
### 1. Repositorio
- Con el nombre `centro-restobar` y visibilidad `Público`
- Agrega un README y Licencia MIT
- Clonalo en tu sistema local

### 2. Estructura
```
centro-restobar/
├── index.html
├── entradas.html
├── platos.html
├── bebidas.html
├── css/
│   └── styles.css
├── assets/
│   └── images/
├── js/
│   └── app.js
└── README.md
```

### 3. Recursos
- Debes conseguir al menos 4 opciones de menú para cada categoría.
- Cada opción debe tener: imagen, nombre y precio.

### 4. Semántica HTML
Para cada página HTML, implementa:
- **Header**:
   - Logo del Restobar Centro
   - Menú de navegación con enlaces a todas las páginas
   - Título principal

- **Main**:
   - Secciones claramente definidas
   - Contenido organizado en cards/tarjetas
   - Imágenes optimizadas

- **Footer**:
   - Información de contacto
   - Enlaces a redes sociales
   - Copyright

### 5. Estilos con CSS
- **Implementa clases para:**
   - Layout principal usando Flexbox o Grid
   - Estilos de cards para los productos
   - Menú de navegación responsivo
   - Hover effects en enlaces y cards

- **Agrega Media Queries para:**
```css
/* Mobile First */
/* Tablet (min-width: 768px) */
/* Desktop (min-width: 1024px) */
```

### 6. Interacción con Javascript
- Agrega un prompt que le pregunte al usuario su **año de nacimiento**.
- Solo cuando se dirige a la página de bebidas.
```js
// Calcular la edad

// Si tiene más de 18 años, alerta de "Puedes escoger también las bebidas con alcohol"

// Si tiene menos de 18 años, alerta de "No puedes escoger bebidas con alcohol".
```

### 7. Documentación y Despliegue
- Tu documentación (README.md) debe tener:
    - Estructura de archivos del proyecto
    - Lista de los platos implementados
    - Información de contacto del autor
- Tu sitio debe estar correctamente publicado en GitHub Pages.

