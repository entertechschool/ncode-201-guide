# Laboratorio 1: HTML5 Semántico y Accesibilidad

¡Bienvenido al primer laboratorio de la Landing Page de tu **producto**! En este paso inicial, nos enfocaremos en la estructura semántica de HTML5 y en la aplicación de buenas prácticas de accesibilidad para garantizar que tu sitio sea inclusivo.

## 🎯 Objetivos de Aprendizaje

1. Construir una Estructura Semántica Sólida

2. Introducir Principios de Accesibilidad

3. Uso Responsable de IA

## Conceptos Clave

1. **HTML5 Semántico**  

2. **Accesibilidad en la Web (A11y)**

3. **Prompt Engineering Básico**  

## 🚀 Setup Inicial

1. **Repositorio**  
   - Crea un repositorio nuevo en GitHub, por ejemplo: `product-landing-page`.
   - Clona el repositorio en tu máquina local.
> 💡 Consejo PRO: \
> Es una buena idea tener una carpeta `dev` en tu computadora, y dentro, tener una carpeta con el nombre de tu usuario de github (idéntico).
> Dentro de la carpeta con tu nombre de usuario, puedes clonar este nuevo repositorio.


2. **Estructura de Archivos**  
   Organiza tu proyecto con la siguiente estructura inicial:
   ```
   product-landing-page/ 
   ├── index.html 
   ├── css/ 
   │ └── styles.css 
   ├── img/ 
   └── README.md
   ```

3. **Contenido Base**  
- En `index.html`, coloca el markup mínimo: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.
- En `styles.css`, configura estilos iniciales como `reset` o variables de color (opcional).

## 🏆 Historias de Usuario

1. **HU1: Sección Principal (Hero) con Encabezado Semántico**  
“Como visitante, quiero ver inmediatamente el nombre del producto y una breve descripción, para comprender la propuesta de valor y navegar fácilmente a más detalles.”

- **Criterios de Aceptación**:  
  - Uso de `<header>` con un `<h1>` claro que describa el producto.  
  - Un texto de descripción en un `<p>` o `<section>`.

2. **HU2: Navegación Accesible**  
“Como usuario con lector de pantalla, quiero un menú de navegación semánticamente correcto, para explorar la landing page fácilmente usando atajos de teclado.”

- **Criterios de Aceptación**:  
  - Uso de `<nav>` para el menú principal.  
  - Anclas (`<a>`) con textos descriptivos o `aria-label` si fuera necesario.

## 🛠️ Requerimientos Técnicos

1. **HTML5 Semántico**  
- Al menos 3 secciones semánticas (`header`, `main`, `footer`).
- Jerarquía coherente de encabezados (`<h1>`, `<h2>`, `<h3>`).
- Evitar `<div>` innecesarios si existe una etiqueta semántica más apropiada.

2. **Accesibilidad**  
- Todas las imágenes deben tener atributo `alt`.
- Orden lógico del contenido para lectores de pantalla.
- Usar ARIA en casos puntuales (`role="banner"`, `role="main"`, etc.) si se justifica.

3. **Prompt Engineering**  
- Generar al menos **un prompt** para la IA solicitando sugerencias sobre la estructura semántica.
- Explicar los ajustes manuales que le hiciste a la propuesta de la IA para garantizar accesibilidad.

## 📝 Instrucciones de Entrega

1. **Documentación en README**
    - Explica la estructura semántica que elegiste y justifica tus etiquetas.  
    - Incluye el prompt usado con la IA y describe cómo validaste la respuesta.

2. **Despliegue**
    - Activa GitHub Pages en el repositorio y adjunta la URL de tu landing page accesible.

3. **Entrega Final**
    - URL del repositorio
    - URL del sitio desplegado en GitHub Pages

---

## 💡 Tips y Sugerencias

1. **Valida tu HTML**  
- Utiliza la [W3C Validator](https://validator.w3.org/) para comprobar la semántica y detectar posibles errores.

2. **Prueba con un Lector de Pantalla**  
- VoiceOver (macOS/iOS), NVDA (Windows) o ChromeVox (extensión de Chrome) para verificar la navegación.

3. **IA como Apoyo, no como Sustituto**  
- Pregunta, analiza y refina las sugerencias. Asegúrate de que cumplan con los lineamientos de accesibilidad.
