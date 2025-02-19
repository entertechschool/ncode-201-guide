# Laboratorio 2: CSS Layout con Flexbox

¡Bienvenido al segundo laboratorio de la Landing Page de tu **producto**! En este paso, aplicarás las técnicas de **CSS Flexbox** para organizar visualmente la estructura de tu página, manteniendo la coherencia y accesibilidad.

## 🎯 Objetivos de Aprendizaje

1. Construir un Layout Responsivo utilizando Flexbox
2. Alinear y distribuir elementos de forma flexible
3. Mantener la accesibilidad visual en diferentes tamaños de pantalla

## 🔑 Conceptos Clave

- **display: flex**  
- **justify-content** y **align-items**  
- **flex-wrap** y **flex-grow**  
- **Media queries** para responsividad

### ⏱️ Checkpoints de Validación
> **Nota:** Este laboratorio incluye tres momentos de validación grupal (a los 30, 50 y 80 minutos). Aprovecha estos momentos para recibir feedback y participar en las discusiones grupales.

## 🏗️ Setup Inicial

1. **Repositorio**  
   - Usa el repositorio de la clase anterior.

2. **Archivos CSS:**
   - Mantén `styles.css` y amplíalo con nuevas reglas de Flexbox.

3. **Contenido Base:**
   - Evita usar `<div>` de manera excesiva. Utiliza etiquetas semánticas para estructurar las secciones.
   - Aplica **overflow** cuando el contenido exceda el espacio visible.

## 📋 Historias de Usuario

1. **HU1: Navegación Flexible**  
"Como usuario, quiero que el menú de navegación se alinee horizontalmente y se ajuste automáticamente en pantallas pequeñas."  
  - **Criterios de Aceptación:**  
    - Menú principal con `display: flex` y alineación horizontal
    - Uso de `justify-content: space-between` para distribuir los elementos

2. **HU2: Secciones Adaptables**  
"Como visitante, quiero que cada sección se ajuste a diferentes tamaños de pantalla manteniendo su diseño."
  - **Criterios de Aceptación:**  
    - Contenido centrado con `align-items: center`
    - Ajuste mediante `flex-wrap` en pantallas pequeñas

3. **HU3: Galería de Imágenes del Producto**  
"Como usuario, quiero ver una sección llamada 'Galería de Imágenes' con fotos del producto dispuestas en una cuadrícula flexible."  
  - **Criterios de Aceptación:**  
    - Nueva sección `<section>` titulada “Galería de Imágenes”
    - Galería con `display: flex` y `flex-wrap: wrap`
    - Uso de media queries para cambiar el número de columnas

## 🛠️ Requerimientos Técnicos

- Utilizar `display: flex` en los principales contenedores (`header`, `main`, `footer`).
- Alinear elementos usando `justify-content` y `align-items`.
- Crear la sección de galería utilizando `flex-wrap`.
- Aplicar media queries para adaptar el diseño a tamaños pequeños y medianos.
- Usar `overflow` para controlar el contenido que excede los límites.

## 🏆 Logros Adicionales

- **Logro 1: Sección de Testimonios**  
Agrega una nueva sección titulada “Testimonios” en la misma página, mostrando opiniones de clientes en formato de tarjetas (cards). Utiliza Flexbox para organizar las tarjetas de forma adaptable y estética.

- **Logro 2: Animaciones con CSS** 
Implementa microinteracciones o animaciones sutiles en elementos clave, como botones, imágenes de la galería o enlaces del menú. Usa propiedades como `transition` y `transform` para lograr efectos visuales atractivos.

## 📝 Instrucciones de Entrega

1. **Documentación en README**  
   - Crea una sección donde especifiques los'break points' de tus media-queries implementados.

2. **Despliegue**  
   - Publica la nueva versión en GitHub Pages.

3. **Entrega Final**  
   - URL del repositorio  
   - URL de la página desplegada

---

## 💡 Tips y Buenas Prácticas

- Usa `gap` para separar los elementos dentro de los contenedores Flexbox.
- Mantén el código CSS limpio y comentado.
- Valida la página usando herramientas como [W3C Validator](https://validator.w3.org/){:target="_blank"}
