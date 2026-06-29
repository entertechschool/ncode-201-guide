# Code 201 — Fundamentals of Software Development

Repositorio del curso **Code 201** de [EnterTechSchool](https://www.enter.edu.pe){:target="_blank"}. Contiene el currículum completo: resúmenes de clase, laboratorios, slides, guías de facilitador y tests. El curso forma desarrolladores desde cero en HTML, CSS y JavaScript, preparándolos para Code 301.

📚 **Hub del instructor:** [entertechschool.github.io/ncode-201-guide/instructor-hub/](https://entertechschool.github.io/ncode-201-guide/instructor-hub/){:target="_blank"}

---

## Duración

| Modalidad | Horas |
|-----------|-------|
| Sesiones en vivo | 81 h |
| Trabajo asíncrono | 36 h |
| Networking | 6 h |
| **Total** | **123 h** |

---

## Sílabo del Curso

### Módulo 1 — Fundamentos de la Web Moderna
> **Proyecto Integrador:** Product Landing Page

1. HTML5 Semántico, Accesibilidad y Formularios
    - Estructura semántica con etiquetas HTML5, buenas prácticas de accesibilidad y formularios accesibles (`<form>`, `<label for>`, `<input>`).
2. CSS Layout con Flexbox
    - Fundamentos de `Flexbox` (incluyendo `flex-grow`) y construcción de layouts responsivos verificables.
3. CSS Grid Esencial y Flexbox Profundo
    - Grid esencial con `grid-template-columns`, refuerzo de Flexbox (`flex-basis`, `align-self`) y responsividad con media queries.
4. CSS Moderno y Git Workflow
    - CSS Variables (`:root { --token }`), formularios validados con HTML nativo (`required`, `type`, `pattern`), branches, Pull Requests y resolución de conflictos.

### Módulo 2 — Fundamentos de Programación
> **Proyecto Integrador:** Gestor de Presupuesto Personal

5. Programación Imperativa
    - Variables, loops (`for`, `while`) y condicionales como herramientas principales.
6. Programación Funcional
    - Funciones puras, `map()`, `filter()`, `reduce()` y principio DRY.
7. Programación Orientada a Objetos con `class`
    - Clases con `class`, `constructor`, `this` y `new`, construidas por capas (propiedades → constructor → métodos) y encapsulación.
8. Tailwind CSS e Interfaz del Gestor
    - Utility-first con Tailwind (Play CDN), construcción de la UI por grupos de clases (layout, espaciado, estética, modificadores) y conexión del formulario con JavaScript para cerrar el proyecto del módulo.

### Módulo 3 — JavaScript Moderno y Consumo de APIs
> **Proyecto Integrador:** Pokédex (consume la PokeAPI)

9. JavaScript Moderno y Render Dinámico
    - Sintaxis ES6+: template literals, destructuring, spread y optional chaining.
    - Generar HTML desde datos con `createElement` / `appendChild` (patrón render).
10. Datos desde la web: fetch, Promesas y JSON
    - Consumo de una API real con `fetch`, Promesas (`.then`/`.catch`) y el formato JSON.
    - Adaptación de la estructura de la API y carga en paralelo con `Promise.all`.
11. async/await y búsqueda en la API
    - Reformulación del código asíncrono con `async/await` (azúcar sobre Promesas).
    - Búsqueda de recursos por nombre en la API y crecimiento del estado (la colección).
12. Manejo de Errores y Estados
    - `try`, `catch`, `finally`, `throw` y validación de `response.ok`.
    - Estados de UI (carga / error / vacío) y documentación con Markdown.

### Módulo 4 — Estado y Persistencia
> **Proyecto Integrador:** Gestor de Plantillas para WhatsApp

13. Modelado de Datos y Manipulación de Texto
    - Estado central y patrón `render()`; métodos de String y objeto `Date`.
14. Interacción y Datos Derivados
    - Delegación de eventos, CRUD completo, `.sort()` y funciones puras sobre el estado.
15. JSON y LocalStorage
    - Serialización con `JSON.stringify` / `JSON.parse` y persistencia en `localStorage`.
16. Módulos ESM y Cierre
    - Modularización con `import` / `export`, confirmaciones de UX y cierre del proyecto.

### Módulo 5 — Proyecto Integrador Final
> **Proyecto Integrador:** Agenda de Gastos Compartidos

17. Ideation + Research + Stories
    - Análisis del proyecto predefinido y descomposición en historias de usuario.
    - Planificación por sprints con criterios de aceptación verificables.
18. Sprint 1
    - Construcción de la primera versión funcional (HU1–HU4).
    - Estructura HTML, diseño CSS y lógica base en JavaScript.
19. User Validation + Sprint 2
    - Validación cruzada con compañeros y feedback estructurado.
    - Implementación de funcionalidades restantes y persistencia (HU5–HU8).
20. Demo Day
    - Presentación formal del proyecto con rúbrica de 100 puntos.
    - Cierre del curso y conexión con Code 301.

> El Proyecto Integrador de M5 integra los aprendizajes de los Módulos 1 al 4: layout responsivo, lógica algorítmica, consumo de APIs con `fetch` y manejo de errores, y estado persistido con LocalStorage.
