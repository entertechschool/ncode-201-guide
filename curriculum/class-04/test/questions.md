# Test Módulo 1 - Questions

> ⚠️ **Documento para facilitadores** - Contiene respuestas y retroalimentación

**10 preguntas diagnósticas**

---

## Preguntas 1-2 (Clase 01: HTML5 Semántico y Accesibilidad)

### Pregunta 1 (Conceptual)

¿Cuál es la principal ventaja de usar etiquetas semánticas como `<header>`, `<nav>` y `<section>` en lugar de solo `<div>`?

- A) Hacen que la página cargue más rápido
- B) Permiten que los lectores de pantalla y motores de búsqueda entiendan mejor la estructura del contenido
- C) Reducen la cantidad de CSS necesario para dar estilos
- D) Son obligatorias por el estándar HTML5 y generan errores si no se usan

> Respuesta: B

> **Retroalimentación:** Las etiquetas semánticas comunican significado a herramientas asistivas (lectores de pantalla) y motores de búsqueda, mejorando la accesibilidad y el SEO. No afectan el rendimiento de carga (A), no reducen el CSS requerido (C), y su uso no es obligatorio ni genera errores (D) — son una buena práctica, no una restricción técnica.

---

### Pregunta 2 (Aplicación)

Un desarrollador tiene una imagen decorativa que no aporta información al usuario. ¿Qué atributo `alt` es el más apropiado para este caso?

- A) `alt="imagen decorativa de fondo"`
- B) `alt="decoracion"`
- C) `alt=""`
- D) Omitir el atributo `alt` completamente

> Respuesta: C

> **Retroalimentación:** Para imágenes puramente decorativas, el estándar de accesibilidad (WCAG) indica usar `alt=""` (vacío). Esto indica a los lectores de pantalla que ignoren la imagen. Describir la imagen con texto (A y B) haría que los lectores de pantalla la anunciaran innecesariamente, interrumpiendo la experiencia. Omitir el atributo `alt` (D) es un error de accesibilidad: la imagen quedaría sin definición para tecnologías asistivas.

---

## Preguntas 3-4 (Clase 02: CSS Layout con Flexbox)

### Pregunta 3 (Conceptual)

¿Qué propiedad de Flexbox controla cómo se distribuyen los elementos a lo largo del eje principal (main axis)?

- A) `align-items`
- B) `flex-wrap`
- C) `justify-content`
- D) `flex-direction`

> Respuesta: C

> **Retroalimentación:** `justify-content` controla la distribución de los elementos a lo largo del **eje principal** (por defecto horizontal). `align-items` (A) controla la alineación en el eje cruzado (cross axis). `flex-wrap` (B) define si los elementos se envuelven en múltiples líneas. `flex-direction` (D) define la dirección del eje principal, pero no distribuye el espacio.

---

### Pregunta 4 (Aplicación)

Un diseñador quiere que una galería de tarjetas se organice en múltiples filas cuando no quepan en una sola línea. ¿Qué combinación de propiedades CSS es la correcta?

- A) `display: flex;` y `flex-direction: column;`
- B) `display: flex;` y `flex-wrap: wrap;`
- C) `display: block;` y `overflow: hidden;`
- D) `display: flex;` y `justify-content: space-evenly;`

> Respuesta: B

> **Retroalimentación:** `flex-wrap: wrap` permite que los elementos flexibles se distribuyan en múltiples líneas cuando no caben en una sola, creando el efecto de galería en filas. `flex-direction: column` (A) cambiaría el eje principal a vertical, apilando los elementos. `display: block` (C) no crea un contenedor flexible. `justify-content: space-evenly` (D) distribuye espacio entre elementos, pero no controla si se envuelven en múltiples líneas.

---

## Preguntas 5-6 (Clase 03: CSS Grid Layout)

### Pregunta 5 (Conceptual)

¿Qué diferencia principal existe entre CSS Grid y Flexbox para el diseño de layouts?

- A) Grid es solo para layouts de una dimensión; Flexbox permite dos dimensiones
- B) Flexbox es para layouts de una dimensión; Grid permite trabajar en dos dimensiones (filas y columnas) simultáneamente
- C) Grid solo funciona en navegadores modernos; Flexbox es compatible con todos
- D) Son idénticos; solo cambia la sintaxis

> Respuesta: B

> **Retroalimentación:** Flexbox es un modelo **unidimensional** (trabaja en una dirección a la vez: fila o columna). CSS Grid es **bidimensional**: permite controlar filas y columnas simultáneamente. La opción A invierte esta definición. C es incorrecta: ambas tecnologías tienen amplio soporte en navegadores modernos. D es incorrecta: tienen propósitos y comportamientos distintos.

---

### Pregunta 6 (Aplicación)

Un desarrollador escribe el siguiente CSS:

```css
.contenedor {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

¿Cómo se distribuye el ancho entre las tres columnas?

- A) Las tres columnas tienen el mismo ancho (33% cada una)
- B) La primera y la tercera tienen 25% del ancho; la segunda tiene 50%
- C) Las columnas tienen 100px, 200px y 100px respectivamente
- D) El navegador decide el ancho automáticamente sin seguir ninguna proporción

> Respuesta: B

> **Retroalimentación:** La unidad `fr` (fracción) distribuye el espacio disponible proporcionalmente. Con `1fr 2fr 1fr` el total es 4 fracciones: la primera ocupa 1/4 (25%), la segunda 2/4 (50%) y la tercera 1/4 (25%). La opción A sería el resultado de `1fr 1fr 1fr`. La opción C usaría unidades absolutas como `px`, no `fr`. La opción D es incorrecta: `fr` sigue una regla de proporciones exacta.

---

## Pregunta 7 (Clase 04: Aplicación Práctica)

### Pregunta 7

Un equipo trabaja en un proyecto web. Un desarrollador quiere implementar una nueva funcionalidad sin afectar el código estable de la rama `main`. ¿Cuál es el flujo correcto en Git?

- A) Hacer los cambios directamente en `main` y subirlos con `git push`
- B) Crear una nueva rama, desarrollar la funcionalidad, y abrir un Pull Request para revisión antes de fusionar con `main`
- C) Descargar el proyecto, hacer cambios locales y enviarlos por correo al líder del equipo
- D) Duplicar la carpeta del proyecto y trabajar en la copia

> Respuesta: B

> **Retroalimentación:** El flujo estándar de Git para trabajo colaborativo es: crear una rama (`git checkout -b nueva-funcionalidad`), desarrollar en ella y abrir un **Pull Request** para que el equipo revise el código antes de fusionarlo con `main`. La opción A rompe el principio de proteger la rama estable. Las opciones C y D no usan control de versiones y no permiten revisión de código ni trabajo colaborativo eficiente.

---

## Pregunta 8 (Aplicación — CSS Variables y Forms validados)

### Pregunta 8

Un desarrollador escribe el siguiente CSS:

```css
:root {
  --color-primary: #0066cc;
}

.btn {
  background: var(--color-primary);
}
```

¿Qué pasa si cambia el valor de `--color-primary` a `#ff0000`?

- A) Nada — las variables CSS no se aplican retroactivamente
- B) Todos los elementos que usan `var(--color-primary)` cambian a rojo automáticamente
- C) Hay que hacer un refresh completo del navegador para que aplique
- D) Hay que reescribir cada regla CSS individualmente

> Respuesta: B

> **Retroalimentación:** Las CSS Custom Properties son **dinámicas**: cambiar el valor en `:root` actualiza todos los lugares donde se usa `var(--token)`. Esa es exactamente la razón para definirlas. A es incorrecta — las variables CSS sí se aplican retroactivamente al recalcular estilos. C no aplica (es un cambio de código, no de runtime). D contradice el propósito de las variables.

---

## Pregunta 9 (Aplicación — Validación nativa)

### Pregunta 9

Un formulario contiene este input:

```html
<input type="email" id="correo" required minlength="5">
```

Si el usuario intenta enviar el form con el valor `abc` en este campo, ¿qué hace el navegador?

- A) Acepta el envío porque tiene texto
- B) Bloquea el envío y muestra un error nativo porque no es un email válido
- C) Acepta el envío pero marca el campo en rojo
- D) Solo bloquea si hay JavaScript validando

> Respuesta: B

> **Retroalimentación:** `type="email"` activa validación nativa del navegador, que verifica formato de email (debe contener `@` y un dominio). Como `abc` no cumple, el navegador bloquea el submit y muestra un mensaje nativo. `required` también haría falla si estuviera vacío. A es incorrecta: tener texto no basta si el tipo es email. C es incorrecta: el navegador BLOQUEA el envío, no solo lo marca. D es incorrecta: la validación nativa funciona sin JavaScript.

---

## Pregunta 10 (Autoevaluación)

### Pregunta 10

Después de completar este módulo, ¿cómo describirías tu nivel de confianza para estructurar y estilizar una página web usando HTML semántico, Flexbox profundo, Grid esencial, CSS Variables, formularios validados y Git workflow?

- A) Muy seguro/a - podría hacerlo sin ayuda
- B) Bastante seguro/a - con algo de referencia
- C) Algo inseguro/a - necesitaría bastante guía
- D) Muy inseguro/a - no sabría por dónde empezar

> ⚠️ Sin respuesta correcta - todas las opciones son válidas para diagnóstico

> **Retroalimentación:** Usa tu respuesta para planificar tu estudio. Si elegiste C o D, revisa el material del módulo o consulta con tu instructor.
