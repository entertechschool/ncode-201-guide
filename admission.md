# Examen de Admisión - Code 301

Este examen valida que candidatos externos poseen los conocimientos fundamentales de Code 201 necesarios para ingresar directamente al programa **Code 301 - Intermediate Software Development**.

---

## ¿Qué evalúa?

- **HTML5 y CSS Layouts** (estructura semántica, accesibilidad, Flexbox, Grid)
- **Fundamentos de JavaScript** (control de flujo, arrays, POO, prototipos)
- **DOM y Event Handling** (manipulación del DOM, callbacks, eventos, manejo de errores)
- **Estado y Persistencia** (clases ES6, patrón Store, JSON, LocalStorage)

---

## Formato

- 20 preguntas de opción múltiple
- 90 minutos de duración
- 100 puntos totales (5 puntos por pregunta)

---

## Aprobación

- ✅ **≥70 puntos:** Admitido a Code 301
- ❌ **<70 puntos:** Se recomienda completar Code 201 primero

---

## Instrucciones

1. Lee cada escenario y fragmento de código cuidadosamente
2. Selecciona la respuesta más apropiada
3. No se permite consultar materiales externos
4. Todas las preguntas tienen el mismo valor

---

**¡Éxito en tu evaluación!**

---

## BLOQUE 1: HTML5 y CSS Layouts (25 puntos)

### Pregunta 1 (5 pts) - HTML Semántico

Analiza el siguiente código HTML:

```html
<div class="header">
  <div class="logo">Mi Sitio</div>
  <div class="menu">
    <div class="link">Inicio</div>
    <div class="link">Servicios</div>
    <div class="link">Contacto</div>
  </div>
</div>
<div class="content">
  <div class="title">Bienvenidos</div>
  <div class="text">Este es el contenido principal...</div>
</div>
<div class="bottom">
  <div class="copy">© 2024</div>
</div>
```

**¿Cuál es el problema principal de este código y cómo afecta a los usuarios que usan lectores de pantalla?**

- A) El código funciona correctamente; los lectores de pantalla pueden interpretar las clases CSS para entender la estructura
- B) Falta usar `<div id="header">` en lugar de `<div class="header">` para que sea accesible
- C) El uso exclusivo de `<div>` elimina la información semántica que los lectores de pantalla necesitan para comunicar la estructura de la página (navegación, contenido principal, etc.)
- D) El problema es que faltan atributos `alt` en los elementos `<div>`

**Respuesta correcta:** C

---

### Pregunta 2 (5 pts) - Flexbox: Comportamiento

Dado el siguiente CSS aplicado a un contenedor con 5 elementos hijos de 200px de ancho cada uno:

```css
.container {
  display: flex;
  width: 800px;
  justify-content: space-between;
}

.item {
  width: 200px;
  flex-shrink: 0;
}
```

**¿Qué sucederá visualmente con los elementos?**

- A) Los 5 elementos se distribuirán uniformemente dentro de los 800px, reduciéndose proporcionalmente
- B) Los elementos desbordarán el contenedor porque `flex-shrink: 0` impide que se reduzcan, y 5×200px = 1000px > 800px
- C) Los elementos se apilarán verticalmente porque no caben en el contenedor
- D) El navegador ignorará `flex-shrink: 0` y forzará a los elementos a caber en 800px

**Respuesta correcta:** B

---

### Pregunta 3 (5 pts) - CSS Grid: Análisis de Layout

Observa el siguiente código CSS Grid:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  height: 100vh;
}
```

**¿Cuál de las siguientes afirmaciones es CORRECTA sobre este layout?**

- A) La columna central (`main`) ocupará exactamente el doble de ancho que las columnas laterales
- B) El `sidebar` ocupará 2 columnas porque está definido junto a `main main`
- C) El `header` ocupará 1/4 del alto total de la pantalla
- D) La fila del medio (`sidebar main main`) ocupará todo el espacio vertical disponible después de restar header y footer

**Respuesta correcta:** D

---

### Pregunta 4 (5 pts) - Media Queries y Responsividad

Un desarrollador escribió el siguiente código para hacer su sitio responsivo:

```css
/* Estilos base */
.container {
  display: flex;
  flex-direction: row;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .container {
    flex-direction: row;
  }
}
```

**En un dispositivo con pantalla de 400px de ancho, ¿cuál será el valor de `flex-direction`?**

- A) `column`, porque 400px es menor que 768px
- B) `row`, porque la última media query que aplica (max-width: 480px) sobreescribe las anteriores
- C) `row`, porque es el estilo base y las media queries no aplican en móviles
- D) El navegador mostrará un error porque hay conflicto entre las media queries

**Respuesta correcta:** B

---

### Pregunta 5 (5 pts) - Accesibilidad y ARIA

Un equipo de desarrollo creó el siguiente botón personalizado:

```html
<div class="btn-custom" onclick="submitForm()">
  Enviar Formulario
</div>
```

```css
.btn-custom {
  background: blue;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
}
```

**¿Qué problemas de accesibilidad tiene este código y cuál sería la solución MÁS apropiada?**

- A) Solo falta agregar `tabindex="0"` para que sea accesible por teclado
- B) El `<div>` no es anunciado como botón por lectores de pantalla, no es enfocable por teclado, y no responde a la tecla Enter. La solución es usar `<button>` nativo
- C) El problema es que falta el atributo `alt="Enviar Formulario"` en el div
- D) Solo falta agregar `role="button"` y el código será completamente accesible

**Respuesta correcta:** B

---

## BLOQUE 2: Fundamentos de JavaScript (25 puntos)

*Próximamente...*

---

## BLOQUE 3: DOM y Event Handling (25 puntos)

*Próximamente...*

---

## BLOQUE 4: Estado y Persistencia (25 puntos)

*Próximamente...*
