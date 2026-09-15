# Code 201 — Fundamentals of Software Development — Índice de temáticas

> Índice para consultas comerciales. Generado el 2026-09-14 a partir de `README.md` y `curriculum/class-NN/README.md`. Si se mueve, renombra o añade una clase, regenerar este archivo.
> Sílabo oficial (autoridad comercial): https://raw.githubusercontent.com/entertechschool/public-sylabus/main/code-201/index.md

**Repo:** entertechschool/ncode-201-guide · **Rama publicada:** instructor_erick · **Base raw:** https://raw.githubusercontent.com/entertechschool/ncode-201-guide/instructor_erick/

## Resumen del curso
- **Qué construye el estudiante:** Una Product Landing Page responsiva y accesible (M1), un Gestor de Presupuesto Personal con Tailwind (M2), una Pokédex que consume la PokeAPI (M3), un Gestor de Plantillas para WhatsApp con persistencia en localStorage y módulos ESM (M4) y el proyecto final individual Mi Setlist, que busca canciones en la iTunes Search API, guarda playlists en localStorage y se construye con IA como copiloto, se despliega en GitHub Pages y se presenta en un Demo Day (M5).
- **Formato según README:** 20 clases, 5 módulos de 4 clases; 123 h totales (81 h de sesiones en vivo, 36 h de trabajo asíncrono, 6 h de networking). Cada clase combina guía de lectura y debate, demo y laboratorio guiado con checkpoints. Las clases 04, 08, 12 y 16 cierran cada módulo con un lab calificado; el curso prepara para Code 301.
- **Perfil de entrada según README:** El README indica que el curso "forma desarrolladores desde cero en HTML, CSS y JavaScript"; las clases asumen Code 101 (C05 abre con repaso de variables, if/else y funciones).
- **Herramientas y tecnologías:** HTML5 semántico, ARIA, CSS3, Flexbox, CSS Grid, media queries (mobile-first), CSS Variables (custom properties), validación nativa de formularios HTML, SVG, Unsplash, Pexels, SVG Repo, Git, GitHub, ramas y Pull Requests, GitHub Pages, JavaScript (ES6+), prompt()/alert(), arrays, arrow functions, métodos funcionales (map/filter/find/reduce/forEach), objetos y clases (class, constructor, this, new), Tailwind CSS (Play CDN), DOM (createElement/appendChild, innerHTML/textContent, addEventListener), fetch, Promesas, Promise.all, async/await, JSON, PokeAPI, try/catch/finally, throw, response.ok, Markdown, métodos de String, objeto Date, delegación de eventos (event.target, dataset/data-id, classList), localStorage, JSON.stringify/JSON.parse, módulos ESM (import/export, script type="module"), .sort(), Live Server (VS Code), python -m http.server, DevTools (Console, Network, Application), herramienta de chat de IA, GitHub Copilot (@workspace), iTunes Search API, historias de usuario, sprints, MVP, code review, plan de pruebas.
- **Proyectos:** M1: Product Landing Page · M2: Gestor de Presupuesto Personal · M3: Pokédex (PokeAPI) · M4: Gestor de Plantillas para WhatsApp · M5: Mi Setlist (iTunes Search API)

## Módulo 1 — Fundamentos de la Web Moderna (clases 01–04)
**Proyecto del módulo:** Product Landing Page (landing multipágina: `index.html`, `precios.html`, `faq.html`) con estructura semántica, accesibilidad, layout Flexbox/Grid responsivo, CSS Variables, formulario validado y flujo Git con ramas y PR.

| # | Clase | Temas clave | Herramientas | Rutas |
|---|---|---|---|---|
| 01 | HTML5 Semántico, Accesibilidad y Formularios | HTML5 semántico (header, nav, main, section, footer), accesibilidad web (A11y), ARIA, roles, aria-label, alt text, lectores de pantalla, jerarquía de encabezados, navegación por teclado (Tab), formulario de contacto accesible (form, label for, input type, button submit), imágenes e iconos SVG de bancos abiertos, elección del producto de la landing, crear y clonar repositorio | HTML5, ARIA, SVG, Git, GitHub, Unsplash, Pexels, SVG Repo | `curriculum/class-01/README.md` · `curriculum/class-01/lab/README.md` |
| 02 | CSS Layout con Flexbox | Flexbox (display flex, justify-content, align-items, gap, flex-wrap, flex-grow, flex-basis), main axis / cross axis, normalización CSS y box-sizing border-box, wrapper y overflow, nav/hero/footer, tarjetas y galería de imágenes, media queries, 3 breakpoints mobile-first, accesibilidad visual (contraste, legibilidad), IA para generar y validar ejemplos de Flexbox | CSS3, Flexbox, media queries | `curriculum/class-02/README.md` · `curriculum/class-02/lab/README.md` |
| 03 | CSS Grid Esencial y Flexbox Profundo | CSS Grid mobile-first (display grid, grid-template-columns, fr, repeat), Grid intermedio (auto-fit, minmax), grid-template-areas y grid-area (layouts 2D con regiones nombradas), criterio Grid vs Flex ("Grid 2D, Flex 1D"), páginas `precios.html` (4 planes) y `faq.html` (sidebar + main), rutas relativas entre páginas, icono SVG con aria-label | CSS Grid, Flexbox, media queries | `curriculum/class-03/README.md` · `curriculum/class-03/lab/README.md` |
| 04 | CSS Moderno y Git Workflow | CSS Variables / custom properties (:root, tokens, var()), paleta y estética del producto (colores, tipografía, radius, shadow, hover), validación nativa de formularios (required, type email/tel, pattern, minlength, select, checkbox), ramas Git (git branch, git checkout -b), GitFlow básico, Pull Request y merge en GitHub, git push -u, git pull, deploy en GitHub Pages, README del repo; lab calificado del M1 | CSS Variables, HTML forms, Git, GitHub, Pull Requests, GitHub Pages | `curriculum/class-04/README.md` · `curriculum/class-04/lab/README.md` |

## Módulo 2 — Fundamentos de Programación (clases 05–08)
**Proyecto del módulo:** Gestor de Presupuesto Personal (repo `personal-budget`): lógica en JavaScript que evoluciona de imperativa a funcional y a POO con `class`, y cierra con interfaz Tailwind conectada al formulario, desplegada en GitHub Pages.

| # | Clase | Temas clave | Herramientas | Rutas |
|---|---|---|---|---|
| 05 | Programación Imperativa | Paradigma imperativo, arrays (declarar, push, length, indexación), arrays paralelos, condicionales if/else, bucles while y for, validación de input (falsy, isNaN, parseFloat), prompt() y alert(), funciones imperativas y estado global, registrar movimientos, calcular saldo y resumen | JavaScript, arrays, prompt()/alert(), Git, GitHub | `curriculum/class-05/README.md` · `curriculum/class-05/lab/README.md` |
| 06 | Programación Funcional | Arrow functions, funciones puras vs efectos secundarios, inmutabilidad, métodos funcionales de Array (map, filter, find, reduce, forEach), acumulador de reduce, refactor de for clásico a métodos funcionales, composición de funciones, principio DRY | JavaScript ES6+, arrow functions, métodos de Array | `curriculum/class-06/README.md` · `curriculum/class-06/lab/README.md` |
| 07 | Programación Orientada a Objetos con `class` | Objetos literales y propiedades, array de objetos, refactor de arrays paralelos a objetos, POO con class, constructor, this, new, instancias, métodos, encapsulación, clases Movimiento y Presupuesto (agregar, eliminar, saldo, resumen), pruebas en consola | JavaScript, class, consola del navegador | `curriculum/class-07/README.md` · `curriculum/class-07/lab/README.md` |
| 08 | Tailwind CSS e Interfaz del Gestor | Tailwind CSS utility-first, instalación por Play CDN, clases-propiedad vs prefijos-modificador (hover:, focus:, sm:/md:/lg:), grupos de utilidades (layout Flexbox/Grid, espaciado y tamaño, tipografía/color/bordes/sombra), responsive mobile-first, conectar formulario con JavaScript (input.value, submit, preventDefault), agregar movimientos y saldo en vivo, deploy en GitHub Pages; lab calificado del M2 | Tailwind CSS (Play CDN), JavaScript, DOM, GitHub Pages | `curriculum/class-08/README.md` · `curriculum/class-08/lab/README.md` |

## Módulo 3 — JavaScript Moderno y Consumo de APIs (clases 09–12)
**Proyecto del módulo:** Pokédex (repo `pokedex`): rejilla de tarjetas renderizada desde datos, cargada desde la PokeAPI con fetch/Promesas y async/await, con búsqueda por nombre, captura a la colección, paginación, manejo de errores, estados de UI y README en Markdown.

| # | Clase | Temas clave | Herramientas | Rutas |
|---|---|---|---|---|
| 09 | JavaScript Moderno y Render Dinámico | Sintaxis ES6+ (template literals, destructuring, spread, optional chaining ?., nullish ??), render dinámico del DOM (createElement, appendChild, patrón limpiar → recorrer → agregar), innerHTML vs textContent, tarjetas y badges desde un array de objetos (map + join), filtro en vivo, Tailwind aplicado | JavaScript ES6+, DOM, Tailwind CSS, Git, GitHub | `curriculum/class-09/README.md` · `curriculum/class-09/lab/README.md` |
| 10 | Datos desde la web: fetch, Promesas y JSON | Qué es una API, JSON, asincronía (los datos tardan, JS no se bloquea), fetch, Promesas (.then/.catch), response.json(), función adaptadora (adapter) de la estructura de la API, carga en paralelo con Promise.all, consumo de la PokeAPI (sin clave), ramas de lab | fetch, Promesas, JSON, PokeAPI, Git | `curriculum/class-10/README.md` · `curriculum/class-10/lab/README.md` |
| 11 | async/await y búsqueda en la API | async/await como azúcar sobre Promesas, reformular .then a await, búsqueda por nombre en la API (buscar vs filtrar), botón Capturar (crecimiento del estado sin duplicados), navegar JSON anidado (estadísticas), parámetros de ruta vs de consulta (?limit, ?offset), paginación con "Cargar más" | fetch, async/await, PokeAPI, JSON | `curriculum/class-11/README.md` · `curriculum/class-11/lab/README.md` |
| 12 | Manejo de Errores y Estados | try/catch/finally, throw new Error, response.ok y errores HTTP (404), estados de UI (cargando/spinner, éxito, error, vacío), app robusta ante red caída o nombre inexistente, mensajes de error claros, Markdown y README del proyecto; lab evaluado del M3 y test diagnóstico | JavaScript, fetch, Markdown, GitHub | `curriculum/class-12/README.md` · `curriculum/class-12/lab/README.md` |

## Módulo 4 — Estado y Persistencia (clases 13–16)
**Proyecto del módulo:** Gestor de Plantillas para WhatsApp (repo `whatsapp-templates`): estado central con clase `Template` y patrón `render()`, CRUD completo con delegación de eventos, filtro y conteo por hashtag, persistencia en localStorage con JSON, modal de confirmación, estados vacíos, orden por fecha y arquitectura en módulos ESM, con README y deploy en GitHub Pages.

| # | Clase | Temas clave | Herramientas | Rutas |
|---|---|---|---|---|
| 13 | Modelado de Datos y Manipulación de Texto | Modelado con class (Template), estado central como única fuente de verdad, patrón render() (cambian los datos → se redibuja), métodos de String (trim, toLowerCase, includes, replace, replaceAll, split, slice), normalizar hashtags, validar campos, sustitución de variables {nombre} en plantillas, generador de mensaje final, objeto Date y toLocaleDateString, formularios (submit, preventDefault) | JavaScript, class, String, Date, Tailwind CSS, VS Code + Live Server, GitHub | `curriculum/class-13/README.md` · `curriculum/class-13/lab/README.md` |
| 14 | Interacción y Datos Derivados | Delegación de eventos (un listener en el contenedor, event.target, classList.contains, data-id/dataset), CRUD completo (crear, leer, editar, eliminar) de forma inmutable (filter, map, spread), datos derivados con funciones puras (total, conteo por hashtag con reduce), filtro por hashtag sin mutar el estado | JavaScript, DOM, eventos, VS Code + Live Server | `curriculum/class-14/README.md` · `curriculum/class-14/lab/README.md` |
| 15 | JSON y LocalStorage | Persistencia en el navegador, localStorage (setItem, getItem, removeItem), serializar con JSON.stringify y deserializar con JSON.parse, cargar el estado al iniciar y sincronizar en cada cambio, protección ante datos corruptos con try/catch, operador ternario, DevTools Application → Local Storage | localStorage, JSON, DevTools | `curriculum/class-15/README.md` · `curriculum/class-15/lab/README.md` |
| 16 | Módulos ESM y Cierre | Módulos ESM (export/import, script type="module", sin variables globales, state.js/storage.js/ui.js/app.js), servidor local (Live Server, python -m http.server), modal de confirmación propio (UX antes de borrar), estados vacíos (sin datos vs sin resultados), ordenar con .sort() y comparador sin mutar, historias de usuario propias, README, deploy en GitHub Pages y demo; lab calificado del M4 | módulos ESM, Tailwind CSS, Live Server, GitHub Pages | `curriculum/class-16/README.md` · `curriculum/class-16/lab/README.md` |

## Módulo 5 — Proyecto Integrador Final (clases 17–20)
**Proyecto del módulo:** Mi Setlist: app individual que busca canciones en la iTunes Search API (estados de carga/error/vacío) y organiza playlists persistidas en localStorage sobre módulos ESM, con estadísticas, orden, confirmaciones y resistencia a datos corruptos; se planifica, construye y audita con IA, se publica en GitHub Pages y se defiende en el Demo Day. Enunciado y contrato técnico en `curriculum/class-17/project/README.md`.

| # | Clase | Temas clave | Herramientas | Rutas |
|---|---|---|---|---|
| 17 | Ideación y Planificación con IA | Planificar con IA (ciclo prompt → crítica → re-prompt), prompt estructurado (contexto, tarea, formato, restricciones), contrato técnico, MVP, historias de usuario ("Como… quiero… para…", criterios de aceptación, INVEST), auditar el output de la IA, plan de dos sprints, configurar el repo con arquitectura ESM, `HISTORIAS.md`, `SPRINTS.md`, `PROMPTS.md`, primer commit | Herramienta de chat de IA, GitHub, VS Code + Live Server, módulos ESM | `curriculum/class-17/README.md` · `curriculum/class-17/lab/README.md` · `curriculum/class-17/project/README.md` |
| 18 | Sprint 1 | IA como copiloto en modo interactivo (la IA pregunta, el estudiante decide), prompt de implementación, slices y un commit por historia, búsqueda en la iTunes Search API con fetch/async-await y estados de UI, rate limit (búsqueda con botón), playlists persistidas en localStorage, decisiones de UX y casos borde, standup y ajuste del alcance | Herramienta de IA, iTunes Search API, fetch, async/await, localStorage, DevTools | `curriculum/class-18/README.md` · `curriculum/class-18/lab/README.md` |
| 19 | IA como Corrector + Sprint 2 | IA como correctora: code review con GitHub Copilot (@workspace) contra el contrato técnico, plan de pruebas manuales de casos borde (lista vacía, datos corruptos, espacios), hallazgos por severidad (crítico/mayor/menor), replanificación del Sprint 2, cierre del MVP (estadísticas, ordenamiento, modal de confirmación, datos corruptos), 2 historias de usuario propias (favoritos, filtros, deshacer, modo oscuro), deploy en GitHub Pages | GitHub Copilot, chat de IA, GitHub Pages, VS Code + Live Server | `curriculum/class-19/README.md` · `curriculum/class-19/lab/README.md` |
| 20 | Demo Day | Presentación de 10 minutos con demo en vivo desde la URL pública, argumentación técnica de decisiones (incluida la validación de la IA), Q&A sobre el código propio sin abrir el chat de IA, plan B (screenshots), README y PROMPTS.md al día, feedback individual y conexión con Code 301 | Navegador, GitHub Pages | `curriculum/class-20/README.md` · `curriculum/class-20/lab/README.md` |

## Búsqueda rápida por tema

| Tema / palabra clave | Clase(s) |
|---|---|
| Accesibilidad, A11y, ARIA, aria-label, alt text, lectores de pantalla, navegación por teclado | 01, 03 |
| Agente de IA, auditoría de código con IA, code review con IA | 19 |
| API, APIs, consumir API, API REST pública, PokeAPI | 10, 11, 12 |
| Arrays, push, length, índices, arrays paralelos | 05, 06, 07 |
| Arrow functions, funciones flecha | 06 |
| Asincronía, código asíncrono, Promesas, .then/.catch, Promise.all | 10, 11 |
| async/await | 11, 18 |
| Bucles, loops, for, while, condicionales, if/else | 05 |
| Casos borde, plan de pruebas, testing manual, severidad de hallazgos | 19 |
| Clases, class, constructor, this, new, instancias, encapsulación | 07, 13 |
| Consola del navegador, console.log, DevTools (Console, Network, Application) | 07, 15, 18 |
| Copilot, GitHub Copilot, @workspace | 19 |
| CRUD (crear, leer, editar, eliminar) | 14, 16 |
| CSS, estilos, estética, paleta de colores, tipografía | 02, 03, 04 |
| CSS Grid, grid-template-columns, auto-fit, minmax, grid-template-areas | 03 |
| CSS Variables, custom properties, :root, tokens de diseño | 04 |
| Date, fechas, toLocaleDateString | 13 |
| Datos derivados, contadores, totales, estadísticas | 14, 19 |
| Delegación de eventos, event.target, data-id, dataset | 14 |
| Demo Day, presentación del proyecto, defensa técnica, Q&A | 20 |
| Deploy, publicar sitio, GitHub Pages, URL pública | 04, 08, 16, 19, 20 |
| Destructuring, spread, template literals, optional chaining, ES6+ | 09 |
| DOM, createElement, appendChild, innerHTML, textContent, render dinámico | 09, 13 |
| DRY, composición de funciones, refactorización | 06, 07 |
| Errores, try/catch/finally, throw, manejo de errores, response.ok, 404 | 12, 15 |
| Estado central, single source of truth, patrón render() | 13, 14, 16 |
| Estados de UI (cargando, error, vacío), spinner, estado vacío | 12, 16, 18 |
| Estructuras de datos, objetos, objetos literales, array de objetos | 07, 09 |
| Eventos, addEventListener, submit, preventDefault, input.value | 08, 13, 14 |
| fetch, consumo de datos desde la web | 10, 11, 18 |
| Filtro en vivo, buscador, búsqueda por nombre, búsqueda por hashtag | 09, 11, 14, 18 |
| Flexbox, display flex, justify-content, align-items, flex-wrap, flex-grow, flex-basis | 02, 03 |
| Formularios, form, label, input, validación de formularios, required, pattern | 01, 04, 08 |
| Frameworks CSS, utility-first, Tailwind CSS, Play CDN | 08, 09, 13, 16 |
| Funciones, funciones puras, efectos secundarios, inmutabilidad | 05, 06, 14 |
| Git, GitHub, repositorio, clonar, commit, push | 01, 04, 05, 17, 18 |
| Git branches, ramas, Pull Request, PR, merge, git pull, GitFlow | 04 |
| Historias de usuario, criterios de aceptación, MVP, INVEST | 16, 17, 18, 19 |
| HTML, HTML5 semántico, etiquetas semánticas, header/nav/main/section/footer | 01 |
| Imágenes, SVG, iconos, bancos de imágenes (Unsplash, Pexels, SVG Repo) | 01, 03 |
| Inteligencia artificial, IA, ChatGPT, chat de IA, prompts, prompt engineering, copiloto de IA | 02, 17, 18, 19, 20 |
| iTunes Search API, catálogo de música, playlists | 17, 18, 19, 20 |
| JavaScript, JS, lógica de programación | 05–20 |
| JSON, JSON.stringify, JSON.parse, serializar, deserializar | 10, 15 |
| Landing page, página web, sitio multipágina, página de precios, FAQ | 01, 02, 03, 04 |
| Live Server, servidor local, python -m http.server | 13, 16, 17, 18, 19 |
| localStorage, persistencia, guardar datos en el navegador, almacenamiento del cliente | 15, 16, 18 |
| map, filter, find, reduce, forEach, métodos de Array | 06, 09, 14 |
| Markdown, README, documentación del proyecto | 04, 12, 16, 20 |
| Media queries, breakpoints, responsive, diseño responsivo, mobile-first | 02, 03, 08 |
| Modal, confirmación antes de borrar, UX | 16, 19 |
| Módulos ESM, import/export, script type="module", modularización | 16, 17, 19 |
| Normalización CSS, box-sizing, reset CSS | 02 |
| Ordenar, .sort(), comparador | 16, 19 |
| Paginación, query params, ?limit, ?offset, parámetros de ruta | 11 |
| Paradigmas de programación (imperativo, funcional, POO) | 05, 06, 07 |
| Pokédex, Pokémon | 09, 10, 11, 12 |
| Portafolio, proyecto para CV, app pública | 19, 20 |
| Presupuesto personal, gestor de gastos e ingresos, saldo | 05, 06, 07, 08 |
| Programación funcional | 06, 14 |
| Programación imperativa, estado global, prompt(), alert() | 05 |
| Programación orientada a objetos, POO, OOP | 07 |
| Rate limit, límite de solicitudes de una API | 18 |
| Scrum, ágil, sprints, standup, planificación por sprints | 17, 18, 19 |
| String, métodos de texto, trim, toLowerCase, replace, replaceAll, split, slice, normalizar texto | 13 |
| Tailwind CSS | 08, 09, 13, 16 |
| Test diagnóstico de módulo | 12 |
| Ternario, operador ternario | 15 |
| VS Code, Visual Studio Code | 13, 14, 17, 18, 19, 20 |
| WhatsApp, plantillas de mensajes, variables {nombre} | 13, 14, 15, 16 |
| Code 301, continuidad del curso | 20 |

## Lo que NO cubre (según el material)
- Tailwind se usa solo por Play CDN: "para un sitio estático NO necesitas `npm` ni compilar" (C08).
- La validación de formularios en M1 es nativa HTML, "sin una línea de JavaScript" (C04).
- En C07 "NO se escribe HTML/CSS ni se conecta a la página — todo es lógica en consola" (C07).
- En C10 "`async/await` no se ve hoy: hoy se consume con `.then`" (llega en C11).
- Los módulos ESM "no funcionan abriendo el HTML con doble clic (`file://`)": se requiere servidor local (C16).
- La PokeAPI "es gratuita y no necesita clave" (C10); no se usan claves de API.
- La conexión real UI↔lógica (clicks, formularios en vivo) llega en M3 con el DOM (C07); en M2 solo se conecta el formulario del Gestor (C08).

## Excepciones de rutas
Ninguna. Las 20 clases siguen `curriculum/class-NN/README.md` + `curriculum/class-NN/lab/README.md`. Adicionalmente, el enunciado y contrato técnico del proyecto final vive en `curriculum/class-17/project/README.md` (referenciado desde las clases 17–20) y las clases 04, 08, 12 y 16 tienen `curriculum/class-NN/project/README.md` con el proyecto integrador de cada módulo.

## Discrepancias con el sílabo oficial
- **Perfil de entrada (RESUELTO):** `curriculum/class-01/README.md` no enseña HTML/CSS desde cero (entra directo a semántica, ARIA y formularios accesibles) y `curriculum/class-05/README.md` abre con "Repaso de Code 101 (variables, if/else, funciones)", confirmando que el curso asume conocimientos previos. Se corrigió el README raíz (`README.md`), que decía "forma desarrolladores desde cero en HTML, CSS y JavaScript", para que sea consistente con el sílabo ("conocimientos básicos de HTML, CSS y lógica con JavaScript"). El sílabo no se tocó.
- **Duración en semanas:** no es una contradicción real — el README simplemente no menciona semanas (solo horas), y ningún material contradice las "10 semanas (123 horas)" del sílabo. Se dejó sin cambios, según instrucción explícita de no tocar esta cifra salvo contradicción inequívoca.
- **Títulos de clase (RESUELTO):** al reabrir `curriculum/class-NN/README.md` de cada clase, los títulos reales de las clases 05, 06, 07 y 18 SÍ coinciden con el sílabo (este índice estaba desactualizado en esas filas: son "Programación Imperativa + Arrays", "Programación Funcional + Arrow Functions", "Objetos + POO con `class`" y "Sprint 1 — Construcción del proyecto" respectivamente). Solo las clases 04, 12 y 16 tenían títulos reales distintos al sílabo, y se corrigió el sílabo: C04 → "CSS Variables + Forms Validados + Git Workflow", C12 → "Manejo de Errores y Estados (cierre del Módulo 3)", C16 → "Módulos (ESM) y Cierre del Proyecto".
- Número de módulos (5), nombres de módulos, proyectos integradores (Product Landing Page, Gestor de Presupuesto Personal, Pokédex/PokeAPI, Gestor de Plantillas para WhatsApp, Mi Setlist/iTunes Search API) y herramientas coinciden.
- Ninguna discrepancia pendiente sin resolver.
