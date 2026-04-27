> **Módulo 5:** Clase 1 de 4

# Clase 17: Ideation + Research + Stories

## Resumen

Llegaste al último módulo de Code 201 y entras al territorio donde todo lo aprendido se combina: HTML semántico, CSS responsivo, lógica en JavaScript, DOM, eventos, manejo de errores y persistencia con LocalStorage. Durante las próximas cuatro clases construirás una aplicación real de principio a fin: **Agenda de Gastos Compartidos**, una app inspirada en Splitwise que registra gastos entre amigos, roommates o equipos y calcula automáticamente quién le debe a quién.

En esta primera clase no escribirás código del producto aún. Lo que harás es entender el proyecto a fondo, descomponerlo en historias de usuario manejables y planificar cómo abordarlo en dos sprints. Este paso es el que suelen saltarse los desarrolladores junior, y es justamente el que separa un proyecto terminado de uno abandonado a mitad de camino.

Al final de la clase tendrás tu repositorio configurado, tu plan de ataque por sprint y una visión clara de qué vas a construir la próxima sesión.

---

## ¿Por qué te sirve?

- **El 70% del tiempo de un proyecto profesional se va en entender qué construir, no en construirlo.** Empresas como GitLab, Stripe y Basecamp tienen documentos de "product spec" de 20+ páginas antes de escribir la primera línea de código.
- **Las historias de usuario son el lenguaje común entre desarrolladores, diseñadores y producto.** Aprender a leerlas y descomponerlas bien te hace valioso en cualquier equipo ágil.
- **El algoritmo de división de gastos es un clásico de entrevistas técnicas.** Splitwise, Venmo y cientos de apps lo implementan. Tenerlo en tu portafolio demuestra pensamiento algorítmico, no solo UI.

---

## 🎯 ¿Qué haremos en clase?

1. **Conoceremos el proyecto** - El instructor presentará el enunciado oficial de Agenda de Gastos Compartidos y responderá dudas de alcance.
2. **Descompondrás el proyecto** - Revisarás las 8 historias de usuario pre-redactadas y entenderás qué resuelve cada una.
3. **Planificarás tus sprints** - Asignarás historias a Sprint 1 (construcción base) y Sprint 2 (cálculo y cierre) según la guía entregada.
4. **Configurarás tu repositorio** - Crearás la estructura inicial de archivos, el README y el primer commit en GitHub.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Interpretar** el enunciado de un proyecto académico y traducirlo a funcionalidades concretas.
2. **Descomponer** un proyecto en historias de usuario con criterios de aceptación verificables.
3. **Planificar** una entrega por sprints identificando dependencias entre funcionalidades.
4. **Configurar** un repositorio de proyecto con estructura de archivos profesional y documentación inicial.

---

## ✅ Preparación para la Clase

### De clases anteriores

- Tu cuenta de **GitHub** activa y conectada a tu Git local (lo usaste desde la Clase 01).
- **VS Code** con las extensiones habituales (Live Server, Prettier).
- Los conceptos de los Módulos 1-4 frescos: HTML semántico, Flexbox/Grid, clases ES6, eventos del DOM, try/catch y LocalStorage.

### Reflexión previa

Antes de llegar a clase, reflexiona sobre:

- La última vez que compartiste un gasto con amigos (un viaje, un depto, una cena grupal): ¿cómo llevaron la cuenta? ¿Quedó alguien sintiendo que pagó de más?
- Si tuvieras que modelar en código a una persona y un gasto, ¿qué datos mínimos tendría cada uno?
- ¿Qué parte del proyecto te intimida más: el layout, la lógica de cálculo o la persistencia?

### Herramientas

- [ ] **GitHub** - Sesión iniciada y lista para crear un repositorio nuevo.
- [ ] **VS Code** - Carpeta de trabajo lista para el proyecto.
- [ ] **Navegador moderno** (Chrome, Firefox o Edge) con DevTools.

### Lectura sugerida

- [Qué es una historia de usuario](https://www.atlassian.com/es/agile/project-management/user-stories){:target="_blank"} - Introducción corta de Atlassian al formato "Como… quiero… para…".
- [Cómo funciona Splitwise](https://blog.splitwise.com/2012/07/24/splitwise-in-30-seconds/){:target="_blank"} - La inspiración directa de tu proyecto, explicada en 30 segundos.
- [Documento oficial del proyecto](./project/){:target="_blank"} - Enunciado, historias y rúbrica del Módulo 5.

---

## Glosario

| Término | Definición |
|---------|------------|
| **Historia de usuario** | Descripción breve de una funcionalidad desde la perspectiva del usuario final, con formato "Como [rol] quiero [acción] para [beneficio]". |
| **Criterio de aceptación** | Condición verificable que debe cumplirse para considerar una historia como completada. Sin ambigüedades. |
| **Sprint** | Iteración de trabajo acotada en tiempo donde se entrega un conjunto específico de historias. En este módulo hay 2 sprints. |
| **MVP** | Minimum Viable Product: la versión más simple del producto que cumple con el valor central prometido. |
| **Alcance (scope)** | Lista explícita de lo que está dentro y fuera del proyecto. Evita que el trabajo crezca sin control. |
| **Balance neto** | En el proyecto: suma de lo que una persona pagó menos su parte proporcional de los gastos donde participa. |

---

## Recursos Adicionales

- [Proyecto Integrador del Módulo 5](./project/){:target="_blank"} - Enunciado completo, historias de usuario, rúbrica y material de apoyo.
- [INVEST: buenas historias de usuario](https://www.agilealliance.org/glossary/invest/){:target="_blank"} - Los 6 atributos que debe tener una buena historia.
- [Ejemplos de criterios de aceptación](https://www.altexsoft.com/blog/business/acceptance-criteria-purposes-formats-and-best-practices/){:target="_blank"} - Guía práctica con ejemplos reales.
