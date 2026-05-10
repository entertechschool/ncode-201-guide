> 📦 **Módulo 3:** Clase 09 de 12

# Clase 09: DOM como API de Objetos

## Resumen

En la Clase 09 se trabaja activamente sobre la manipulación avanzada del DOM (Document Object Model), destacando cómo JavaScript permite tratar los elementos HTML como objetos, con propiedades y métodos propios. Durante esta sesión se enfatiza la importancia de entender y utilizar la jerarquía y las relaciones del DOM (padres, hijos y hermanos), integrando una visión práctica de JavaScript orientado a objetos.

Esta clase también **formaliza Tailwind CSS** como utility-first framework. Los estudiantes ya lo vieron pasivamente en el template del lab de C08 (M2). Aquí lo aprenden conscientemente: qué son las utility classes, por qué funcionan en el HTML del template y cómo aplicarlas con propósito en su propio markup.

Se utilizan tres recursos fundamentales:

1. **Guía de Lectura y Debate**: Análisis crítico sobre mitos y verdades relacionados con la selección dinámica de nodos y uso de Regex.
2. **Guía de Laboratorio**: Implementación práctica de una barra de herramientas dinámica, selección y transformación del contenido mediante Regex y métodos del DOM, usando Tailwind para los estilos.

## Estructura Sugerida

| **Fase**                 | **Duración** | **Descripción**                                                                                  |
|--------------------------|--------------|--------------------------------------------------------------------------------------------------|
| **1. Refuerzo Inicial**  | 15 min       | Repaso breve de conceptos previos de JavaScript OOP y DOM básico.                               |
| **2. Debate Técnico**    | 30 min       | Discusión sobre selección dinámica de nodos y el uso eficiente de Regex.                      |
| **3. Demostración**      | 15 min       | Demo técnica sobre manipulación avanzada del DOM y ejemplos prácticos con Regex.              |
| **4. Laboratorio**       | 100 min      | Implementación guiada del laboratorio con validación mediante checkpoints (30', 60', 90').   |
| **5. Cierre**            | 20 min       | Retroalimentación grupal sobre logros, dificultades y conclusiones de aprendizaje.            |

---

## Resultados Esperados

Al culminar esta clase, los estudiantes serán capaces de manipular el DOM usando técnicas avanzadas con JavaScript, comprender claramente la estructura jerárquica del DOM y utilizar expresiones regulares (Regex) para transformar dinámicamente contenido Markdown a HTML.

### Podrán hacer

- Seleccionar y manipular elementos del DOM mediante métodos como `querySelector()` y `querySelectorAll()`.
- Aplicar Regex básico para transformar contenido textual, específicamente desde Markdown a HTML.
- Crear interfaces responsivas que se adapten dinámicamente según el tipo de dispositivo.

### Podrán explicar

- La importancia y funcionamiento de la jerarquía y relaciones DOM (padres, hijos, hermanos).
- Las ventajas de usar Regex para transformación de texto frente al uso de librerías externas.
- Las diferencias técnicas entre métodos de selección como `querySelector()`, `querySelectorAll()` y métodos más tradicionales (`getElementById`).

### Podrán implementar

- Una barra de herramientas dinámica adaptada a diferentes tipos de dispositivo.
- Generación automática y dinámica de una vista previa HTML desde texto Markdown, usando métodos `.replace()` y Regex.
- Estilos dinámicos aplicados mediante selección múltiple de elementos usando `querySelectorAll()`.
- Estilos del editor con **Tailwind CSS** (utility classes) — formalizando lo visto pasivamente en C08.

---

## 🎨 Tailwind CSS — formalización

En C08 (M2) usaron un template HTML con clases como `bg-white rounded-lg shadow p-6` y `flex flex-col md:flex-row gap-4`. Esas son **utility classes de Tailwind**.

### Utility-first vs Component classes

| Bootstrap (component classes) | Tailwind (utility classes) |
|---|---|
| `<div class="card">` | `<div class="bg-white rounded-lg shadow p-6">` |
| `<button class="btn btn-primary">` | `<button class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">` |
| Componente prediseñado, dificulta personalizar | Bloques de Lego, total control desde el HTML |

### Tabla de utility classes más usadas

| Categoría | Ejemplos |
|---|---|
| Layout | `flex`, `grid`, `block`, `hidden`, `flex-col`, `flex-row` |
| Spacing | `p-4` (padding), `m-2` (margin), `gap-4`, `space-y-2` |
| Alignment | `justify-center`, `items-center`, `text-center` |
| Colors | `bg-white`, `bg-blue-600`, `text-gray-700` |
| Borders | `rounded`, `rounded-lg`, `border`, `border-gray-300` |
| Effects | `shadow`, `shadow-lg`, `hover:bg-blue-700` |

### Setup en este lab

Tailwind se carga con **Play CDN** (igual que en C08):

```html
<script src="https://cdn.tailwindcss.com"></script>
```

No requiere build step. Para producción real se compilaría, pero para aprender alcanza con el CDN.


