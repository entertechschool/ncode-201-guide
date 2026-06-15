# Code 201 - Fundamentals Software Development

## Objetivos
1. **Consolidar Fundamentos Técnicos**  
   - Asimilar conceptos avanzados de HTML5 y CSS (Layouts con Flexbox, Grid y Frameworks Modernos).  
   - Fortalecer las bases de la programación en JavaScript (imperativo, funcional y orientado a objetos).  
   - Explorar el render dinámico del DOM, el consumo de APIs (`fetch`/`async/await`) y la persistencia de datos (LocalStorage y JSON).  

2. **Fomentar el Uso Efectivo de la IA**  
   - Emplear la IA para aprender y producir soluciones de software, complementando la instrucción humana.  
   - Desarrollar criterio y responsabilidad al validar código y contenidos generados por IA.  

3. **Desarrollar Proyectos Reales**  
   - Integrar los conocimientos adquiridos en un proyecto práctico que simula retos de la industria.  
   - Adquirir experiencia en trabajo colaborativo (equipo, metodología y revisión de pares).  
   - Presentar entregables funcionales y medibles, con base en historias de usuario y sprints iterativos.  

4. **Cultivar Competencias Profesionales (Soft Skills)**  
   - Fortalecer la comunicación efectiva, el trabajo en equipo y la mentalidad de crecimiento.  
   - Construir redes de contacto (networking) con profesionales y compañeros para el futuro profesional.
   - Desarrollar pensamiento crítico y capacidad de argumentación técnica a través de debates estructurados.
   - Fortalecer la comunicación efectiva mediante la participación en discusiones técnicas guiadas.

5. **Preparar el Camino hacia Code 301**  
   - Sentar las bases conceptuales y prácticas necesarias para enfrentar desafíos más complejos en el siguiente curso.  
   - Al término de Code 201 (2.5 meses), el estudiante estará listo para profundizar en Code 301 (4.5 meses) y completar su formación como **Software Developer** listo para el mercado laboral.

## Módulos y Clases

### Módulo 1: Fundamentos de la Web Moderna
1. **HTML5 Semántico y Accesibilidad** (180 min, blend)
2. **CSS Layout con Flexbox** (180 min, blend)
3. **CSS Grid Layout** (180 min, blend)
4. **Frameworks CSS Modernos** (180 min, blend)
- **Presentación del Proyecto Integrador** (180 min, demo)

> #### Proyecto Integrador: **Product Landing Page**
> Un Landing Page que mostrará las caraterísticas clave de un producto, y que permite la navegación usando estándares actuales de semántica y accesibilidad. Adicionalmente, está consutrído con un Layout Responsive, utilizando tecnologías como Flexbox, Grid y frameworks modernos.

### Módulo 2: Fundamentos de Programación

5. **Programación Imperativa** (180 min, blend)
   - Usar variables globales y mutación directa para demostrar el paradigma base
   - Enfatizar loops (`for`, `while`) y condicionales (`if/else`) como herramientas principales
   - Construir funcionalidad básica del presupuesto con enfoque paso-a-paso
6. **Programación Funcional** (180 min, blend)
   - **USAR**: Funciones puras, `map()`, `filter()`, `reduce()` como métodos principales
   - **USAR**: Principio DRY y composición de funciones pequeñas
   - **NO USAR**: Funciones complejas como `sort()` como obligatorias (solo en retos opcionales)
   - Refactorizar código imperativo hacia transformaciones declarativas
7. **Programación Orientada a Objetos con `class`** (180 min, blend)
   - **USAR**: `class` + `constructor` + `new`, construida por capas (propiedades → constructor → métodos)
   - **USAR**: `this.propiedad` para estado y métodos dentro de la clase para comportamiento
   - **USAR**: Encapsulación en una clase `Presupuesto` (datos + métodos juntos)
   - **NO USAR**: Herencia (`extends`/`super`) ni prototipos (unidad de POO posterior)
8. **Tailwind CSS e Interfaz del Gestor** (180 min, blend)
   - **USAR**: Tailwind por Play CDN (un `<script>`, sin build) y clases utilitarias por grupos
   - **USAR**: Mejora progresiva por capas (layout → caja → estética → modificadores) sobre el Gestor
   - **USAR**: Conectar el formulario con JavaScript (reusando las clases de C07) para cerrar el proyecto
   - **NO USAR**: `npm`/build de Tailwind; DOM avanzado (eso es M3)

#### Enfoque Pedagógico

- **Progresión**: Imperativo → Funcional → OOP (`class`) → Interfaz (Tailwind + conexión) (sin saltos conceptuales)
- **Proyecto continuado**: Mismo codebase evoluciona clase a clase hasta convertirse en una app funcional
- **Refactoring guiado**: Cada clase mejora la estructura del código anterior
- **Debugging intensivo**: Usar `console.log()`, breakpoints y DevTools (modo responsive, inspección de clases)

> #### Proyecto Integrador: **Gestor de Presupuesto Personal**
> Una aplicación web sencilla que permite gestionar un presupuesto mensual, registrando ingresos y gastos, categorizándolos y visualizando un balance actualizado. El proyecto evoluciona clase a clase, pasando de una solución imperativa a un sistema basado en objetos (`class`), con cálculos funcionales y una interfaz visual con Tailwind que el formulario actualiza en vivo.


### Módulo 3: JavaScript Moderno y Consumo de APIs
9. **JavaScript Moderno y Render Dinámico** (180 min, blend)
10. **Datos desde la web: fetch, Promesas y JSON** (180 min, blend)
11. **async/await y búsqueda en la API** (180 min, blend)
12. **Manejo de Errores y Estados** (180 min, blend)
- **Presentación del Proyecto Integrador** (180 min, demo)

#### Subtemas complementarios:
- Sintaxis ES6+ (template literals, destructuring, spread, optional chaining)
- Render dinámico del DOM (`createElement` / `appendChild`)
- JSON como formato de intercambio (lectura, no persistencia — eso es M4)
- API REST pública vía CDN (PokeAPI, sin clave)
- Estados de UI (carga / error / vacío) y Markdown para documentar

> #### Proyecto Integrador: **Pokédex**
> El proyecto consiste en desarrollar una Pokédex que consume la **PokeAPI**: los estudiantes parten renderizando datos locales con sintaxis moderna de JavaScript (template literals, destructuring, `createElement`), aprenden a manejar operaciones asíncronas con Promesas, reemplazan los datos locales por llamadas reales con `fetch` + `async/await` interpretando respuestas JSON, y finalmente hacen la app robusta con manejo de errores (`try/catch/finally`, validación de `response.ok`) y estados de UI, documentando el proyecto en Markdown. Cubre así todos los temas fundamentales del Módulo 3.
>
> **Características clave**:
> - Estilización con Tailwind CSS (reusada de M2)
> - Buscador de Pokémon por nombre
> - Consumo de una API real (PokeAPI, sin clave)
> - Render dinámico de tarjetas desde datos
> - Estados de carga, error y vacío
> - README documentado en Markdown
> - Diseño responsivo

### Módulo 4: Estado y Persistencia
13. **Modelado de Objetos y Estado** (180 min, blend)
14. **App State Management (Patrón Store)** (180 min, blend)
15. **JSON y LocalStorage** (180 min, blend)
16. **Persistencia y Sincronización** (180 min, blend)
- **Presentación del Proyecto Integrador** (180 min, demo)

#### Subtemas complementarios:
- Clases en Javascript (sintaxis moderna)
- Estado una aplicación
- Mutabilidad vs Inmutabilidad
- Serialización y Deserialización
- Operador ternario

> #### Proyecto Integrador: **Gestor de Plantillas para WhatsApp**
> Este proyecto consiste en desarrollar una aplicación web interactiva para gestionar plantillas personalizadas destinadas a facilitar la atención rápida y efectiva de clientes o usuarios a través de WhatsApp. La aplicación permitirá crear, editar, eliminar y consultar fácilmente las plantillas guardadas, ofreciendo funcionalidades avanzadas como filtrado rápido mediante hashtags relacionados. Se utilizarán técnicas avanzadas de gestión del estado centralizado, persistencia de datos mediante JSON y LocalStorage, y una interfaz responsiva diseñada para maximizar la usabilidad tanto en escritorio como en dispositivos móviles.
>
> **Características clave**:
> - Creación, edición y eliminación (CRUD) intuitiva de plantillas.
> - Filtrado rápido de plantillas por hashtags (#ventas, #soporte, #preguntas).
> - Persistencia robusta en LocalStorage, asegurando continuidad del trabajo.
> - Interfaz clara, simple y altamente responsiva.
> - Copia rápida de contenido al portapapeles para facilitar el uso inmediato en WhatsApp Web.

### Módulo 5: Proyecto Integrador Final
17. **Ideation + Research + Stories** (180 min, project)
18. **Sprint 1** (180 min, project)
19. **User Validation + Sprint 2** (180 min, project)
20. **Demo Day** (180 min, project)

#### Enfoque Pedagógico

- **Proyecto predefinido** común a toda la cohorte (no cada alumno inventa uno distinto).
- **Integrador**: consolida los aprendizajes de los Módulos 1 al 4 en una sola aplicación.
- **Metodología ágil** por sprints con validación cruzada entre compañeros.
- **El instructor asume el rol del "cliente académico"** del proyecto: presenta el enunciado, guía la descomposición, valida avances y evalúa el entregable final con rúbrica.

> #### Proyecto Integrador: **Agenda de Gastos Compartidos**
> Una aplicación web para registrar gastos entre amigos, roommates o equipos pequeños y calcular automáticamente quién le debe a quién (estilo Splitwise simplificado). El estudiante crea grupos, agrega personas, registra gastos con descripción y divisiones, y la app muestra el balance neto de cada integrante y sugiere las transferencias mínimas para saldar todo. El proyecto integra los aprendizajes de los Módulos 1 al 4 en una sola aplicación funcional y portafoliable.
>
> **Características clave**:
> - Creación de grupos con múltiples integrantes.
> - Registro de gastos: quién pagó, monto, descripción y entre quiénes se divide.
> - Cálculo automático del balance neto de cada persona.
> - Sugerencia de transferencias mínimas para saldar el grupo.
> - Eliminación de gastos con recálculo automático.
> - Interfaz responsiva y validación de entradas.
> - Persistencia completa en LocalStorage (grupo + gastos + integrantes).