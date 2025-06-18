# Laboratorio 1: HTML5 Semántico y Accesibilidad

¡Bienvenido al primer laboratorio de la Landing Page de tu **producto**! En este paso inicial, nos enfocaremos en la estructura semántica de HTML5 y en la aplicación de buenas prácticas de accesibilidad para garantizar que tu sitio sea inclusivo.

> ⏱️ **Nota sobre Checkpoints**: Este laboratorio incluye tres momentos de validación grupal (a los 30, 50 y 80 minutos). Es importante mantenerse al día con estos checkpoints para aprovechar el feedback y las discusiones grupales.

## 🎯 Objetivos de Aprendizaje

1. Construir una Estructura Semántica Sólida
2. Introducir Principios de Accesibilidad
3. Uso Responsable de IA

## 🔑 Conceptos Clave

- **HTML5 Semántico:**  Uso de etiquetas (`<header>`, `<nav>`, `<section>`, `<footer>`) que describen la función del contenido, facilitando la lectura y navegación, tanto para usuarios como para motores de búsqueda.
2. **Accesibilidad en la Web (A11y):** Aplicar prácticas (como texto alternativo, roles ARIA, orden lógico de encabezados) para que cualquier persona, sin importar sus limitaciones, pueda interactuar con tu sitio.
3. **Prompt Engineering Básico:** Herramientas como ChatGPT pueden generar ejemplos de código y sugerencias semánticas, pero requieres validarlas para asegurar calidad y conformidad con buenas prácticas.

### ✅ Checkpoints de Validación

Durante el desarrollo del laboratorio, haremos tres validaciones grupales para asegurar que vamos por buen camino:

> **[30'] Check 1:** Validación de estructura semántica inicial \
> **[50'] Check 2:** Prompts y Outputs de IA \
> **[80'] Check 3:** Accesibilidad

## ⚙️ Setup Inicial

1. **Repositorio**  
   - Crea un repositorio nuevo en GitHub, por ejemplo: `product-landing-page`.
   - Clona el repositorio en tu máquina local.

2. **Consejos PRO:**
    - Es una buena idea tener una carpeta `dev` en tu computadora, y dentro, tener una carpeta con el nombre de tu usuario de github (idéntico).
    - Dentro de la carpeta con tu nombre de usuario, puedes clonar este nuevo repositorio.

3. **Estructura de Archivos**
   Organiza tu proyecto con la siguiente estructura inicial:
   ```
   product-landing-page/ 
   ├── index.html 
   ├── css/ 
   │ └── styles.css
   ├── img/ 
   └── README.md
   ```

4. **Contenido Base**
- En `index.html`, coloca el markup mínimo: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.
- En `styles.css`, configura estilos iniciales como `reset` o variables de color (opcional).

## 🏆 Historias de Usuario

1. **HU1: Navegación Accesible**  
“Como usuario con lector de pantalla, quiero un menú de navegación semánticamente correcto, para explorar la landing page fácilmente usando atajos de teclado.”

  - **Criterios de Aceptación**:  
    - Uso de `<nav>` para el menú principal dentro del `<header>`
    - Anclas (`<a>`) con textos descriptivos o `aria-label` si fuera necesario.

2. **HU2: Sección Principal "Hero"**  
"Como visitante, necesito entender inmediatamente qué producto se ofrece y su valor principal."

  - **Criterios de Aceptación**:  
    - Ubicado como primera sección dentro de `<main>`
    - Un `<section id="hero">` como contenedor
    - Un `<h1>` con el nombre del producto
    - Un tagline o descripción corta en `<p>`

3. **HU3: Secciones Informativas del Producto**  
"Como visitante, quiero conocer las características, opciones de envío y formas de pago disponibles para evaluar si el producto se ajusta a mis necesidades."

  - **Criterios de Aceptación**:
    - Utilizar correctamente la jerarquía de encabezados (h1 - h3).
    - Usar estructura semántica apropiada para listar características.
    - **[Características]**: Mostrar al menos 3 características clave, con título, descripción y elemento visual.
    - **[Opciones de envío]**: Presentar las zonas de cobertura disponibles (como listas). También los tipos de envío y costos.
    - **[Opciones de pago]**: Listar los métodos de pago aceptados, promociones o descuentos.

4. **HU4: Footer con Información de Contacto**
"Como visitante, quiero encontrar fácilmente la información de contacto y enlaces importantes al final de la página, para poder comunicarme con la empresa o acceder a recursos adicionales."

  - **Criterios de Aceptación**:
    - Email de contacto
    - Teléfono de soporte
    - Horarios de atención
    - Enlaces Importantes: Términos y condiciones
    - Redes sociales


## 🛠️ Requerimientos Técnicos

1. **HTML5 Semántico**  
- Al menos 3 secciones semánticas (`header`, `main`, `footer`).
- Jerarquía coherente de encabezados (`<h1>`, `<h2>`, `<h3>`).
- Evitar `<div>` innecesarios si existe una etiqueta semántica más apropiada.

2. **Accesibilidad**  
- Todas las imágenes deben tener atributo `alt`.
- Orden lógico del contenido para lectores de pantalla.
- Usar ARIA en casos puntuales (`role="banner"`, `role="main"`, etc.) si se justifica.

3. **Estilos CSS Básicos**
- Implementar un CSS reset o normalizer para consistencia entre navegadores
- Aplicar estilos de tipografía:
  - Fuente principal legible (tamaño mínimo 16px)
  - Paleta de colores consistente (definir variables CSS)
- Espaciado y márgenes básicos:
  - Márgenes entre secciones
  - Padding internos consistentes
  - Ancho máximo para el contenido (evitar líneas muy largas)
- Contraste adecuado para accesibilidad **(de 3:1 a 5:1)**

> 👀 No es necesario que sea responsive en esta etapa

4. **Prompt Engineering**
- Generar al menos **un prompt** para la IA solicitando sugerencias sobre la estructura semántica.
- Explicar los ajustes manuales que le hiciste a la propuesta de la IA para garantizar accesibilidad.

## 🌟 Logros Adicionales
- **Logro 1: Implementar un Modo Oscuro (Dark Mode)** \
Configura variables de CSS (por ejemplo, `--bg-color` y `--text-color`) para habilitar un esquema de colores alternativo. Permite que el usuario cambie entre modo claro y oscuro mediante un botón o detectando la preferencia del sistema operativo.

- **Logro 2: Microinteracciones y Transiciones** \
Agrega pequeñas animaciones o transiciones en elementos clave (por ejemplo, al pasar el ratón sobre los enlaces de navegación o al hacer clic en un botón). Esto mejora la experiencia de usuario y hace que la interfaz luzca más dinámica y profesional.

## 📝 Instrucciones de Entrega

1. **Documentación en README**
    - Explica la estructura semántica que elegiste y justifica tus etiquetas.  

2. **Despliegue**
    - Activa GitHub Pages en el repositorio y adjunta la URL de tu landing page accesible.

3. **Entrega Final**
    - URL del repositorio
    - URL del sitio desplegado en GitHub Pages

---

## 💡 Tips y Sugerencias

1. **Valida tu HTML**  
- Utiliza la [W3C Validator](https://validator.w3.org/){:target="_blank"} para comprobar la semántica y detectar posibles errores.

2. Utiliza [Contrastchecker](https://webaim.org/resources/contrastchecker/){:target="_blank"} para mejorar el constraste.

3. **Prueba con un Lector de Pantalla**  
- VoiceOver (macOS/iOS), NVDA (Windows) o ChromeVox (extensión de Chrome) para verificar la navegación.

4. **IA como Apoyo, no como Sustituto**  
- Pregunta, analiza y refina las sugerencias. Asegúrate de que cumplan con los lineamientos de accesibilidad.
