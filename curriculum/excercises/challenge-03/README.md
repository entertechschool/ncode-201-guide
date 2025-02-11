> **Code 201** / Ejercicios de Repaso 🚴‍♂️

# Product Showcase

## Contexto

### Problema / Oportunidad
En el comercio electrónico actual, la presentación efectiva de productos tecnológicos es crucial. Los usuarios necesitan visualizar y entender completamente un producto antes de comprarlo. Las páginas de producto tradicionales a menudo carecen de interactividad y claridad en la presentación de información técnica, lo que puede resultar en dudas o decisiones de compra inseguras.

### Solución
Desarrollar una página de producto moderna y responsiva que presente de manera clara y atractiva un producto tecnológico. La página incluirá una galería de imágenes interactiva, información detallada del producto, opciones de personalización y botones de acción claros, mejorando así la experiencia de compra del usuario.

### Historias de Usuario
- **Usuario Comprador**: Como usuario, quiero ver claramente las imágenes e información del producto para tomar una decisión informada de compra.
- **Usuario Indeciso**: Como usuario, necesito poder seleccionar cantidad y ver el precio total actualizado antes de decidir comprar.
- **Usuario Técnico**: Como usuario, deseo acceder fácilmente a las especificaciones técnicas detalladas del producto para evaluar si cumple mis necesidades.

---

## ☑️ TO-DO:

### 1. Repositorio y Estructura
- **Crear el repositorio:**
  - Nombre: `product-showcase`
  - Visibilidad: Público
  - Incluir un README y la Licencia MIT
- **Clonar el repositorio** en tu entorno local.
- **Estructura de archivos:**  
  Organiza el proyecto de la siguiente manera:
```
product-showcase/ 
├── index.html 
├── styles.css 
└── app.js
```

### 2. Semántica HTML
- **Header:**
  - Nombre de la tienda
  - Menú de navegación simple
- **Main:**
  - Sección de galería de imágenes
  - Sección de información del producto
  - Contenedor para precio y cantidad
  - Botones de acción (Agregar al Carrito, Comprar Ahora)
  - Sección de especificaciones técnicas
- **Footer:**
  - Enlaces de contacto y redes sociales
  - Información de la tienda

### 3. Estilos con CSS
- **Diseño del Header:**
  - Barra de navegación fija
  - Logo y menú responsive
- **Galería de Imágenes:**
  - Grid de imágenes con miniaturas
  - Imagen principal destacada
- **Información del Producto:**
  - Tipografía clara y jerarquía visual
  - Espaciado y márgenes consistentes
- **Botones y Elementos Interactivos:**
  - Estilos hover y focus
  - Animaciones suaves
- **Responsive Design:**
  - Breakpoints para móvil, tablet y desktop
  - Adaptación de layout según dispositivo

### 4. Funcionalidades con Javascript
1. **Galería de Imágenes:**
   - Cambiar imagen principal al hacer clic en miniaturas
   - Zoom básico en imagen principal al hover
2. **Contador de Cantidad:**
   - Incrementar/decrementar cantidad con botones + y -
   - Validar cantidad mínima y máxima
3. **Cálculo de Precio:**
   - Actualizar precio total según cantidad seleccionada
   - Mostrar formato de precio con separadores de miles
4. **Botones de Acción:**
   - Mostrar mensaje de confirmación al agregar al carrito
   - Validar selección antes de permitir compra
5. **Especificaciones Técnicas:**
   - Mostrar/ocultar detalles técnicos
   - Organizar información en tabs/acordeón
6. **Validaciones:**
   - Verificar stock disponible
   - Mostrar mensajes de error apropiados

### 5. Documentación y Despliegue
- **Documentación:**  
- Actualiza el archivo `README.md` con:
  - Una descripción del proyecto.
  - La estructura de archivos.
  - Las funcionalidades implementadas.
  - Instrucciones de uso y cualquier requerimiento especial.
- **Despliegue:**  
- Publica tu sitio utilizando GitHub Pages y comparte la URL para que pueda ser revisada.