# Rubrica - Lab Modulo 3: Editor Avanzado de Markdown

> 📋 **Documento interno para evaluadores**

## Informacion General

| Aspecto | Detalle |
|---------|---------|
| **Proyecto** | Editor Avanzado de Markdown en Vivo |
| **Modulo** | M3 — Aplicaciones Web con Objetos |
| **Clase** | C12 — Manejo de Excepciones en JavaScript |
| **Puntaje Total** | 100 puntos |

---

## Criterios de Evaluacion

### 1. Historias de Usuario implementadas (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | HU1-HU2 del lab + ≥2 HU adicionales propias, claras, funcionales y con criterios de aceptación cumplidos al 100% |
| **Bueno** | 15 | HU1-HU2 + 2 HU adicionales con criterios en su mayoría cumplidos |
| **Satisfactorio** | 10 | HU1-HU2 funcionales + 1 HU adicional con criterios parciales |
| **Bajo** | 5 | HU1-HU2 implementadas pero no funcionan correctamente |
| **No entregado** | 0 | Sin HU funcionales |

**Aspectos evaluados:**
- HU1: validación de entrada vacía con `throw`
- HU2: detección de sintaxis Markdown mal formada
- HU adicionales redactadas en formato estándar con criterios verificables
- Cada HU adicional en su propia rama y mergeada vía PR

---

### 2. Calidad técnica: DOM + funciones + eventos + excepciones (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Integra correctamente manipulación del DOM, funciones de orden superior, eventos, y manejo de excepciones con `try/catch` + `throw`; código modularizado y reutilizable |
| **Bueno** | 15 | Integra 3 de 4 conceptos del módulo correctamente, alguna inconsistencia menor |
| **Satisfactorio** | 10 | Funcional pero código repetitivo, no aprovecha modularización ni callbacks |
| **Bajo** | 5 | Errores no se capturan, eventos no se actualizan, código monolítico |
| **No entregado** | 0 | Editor no funcional |

**Aspectos evaluados:**
- Uso de `try/catch` en operaciones de transformación Markdown
- `throw new Error("mensaje")` con mensajes descriptivos al usuario
- Funciones puras y reutilizables para transformar contenido
- Manejo dinámico de eventos (input, click, keyup)
- Mensajes de error mostrados en la UI sin detener el editor

---

### 3. Presentación de funcionalidades en vivo (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Demo ≤5 min, muestra transformación Markdown→HTML en tiempo real, eventos interactivos, captura de errores en vivo, funcionalidades adicionales |
| **Bueno** | 15 | Demo muestra funcionalidades clave pero omite demostrar captura de errores |
| **Satisfactorio** | 10 | Demo entrega lo pedido pero sin mostrar interactividad completa |
| **Bajo** | 5 | Presenta pero no muestra el editor funcionando en tiempo real |
| **No entregado** | 0 | Sin presentación |

**Aspectos evaluados:**
- Tiempo: máximo 5 min, uso eficiente
- Muestra transformación Markdown→HTML en vivo (escribir y ver el resultado)
- Provoca un error intencional para mostrar que el editor no se rompe
- Demuestra al menos 1 HU adicional
- No se evalúa fluidez verbal ni nervios

---

### 4. Argumentación técnica (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Justifica ≥2 decisiones técnicas con argumentos sólidos: por qué `try/catch` en este punto y no otro, diseño de funciones reutilizables, uso del DOM para transformar/renderizar |
| **Bueno** | 15 | Justifica 1 decisión técnica claramente, responde con dificultad pero correcto |
| **Satisfactorio** | 10 | Argumentación superficial, identifica conceptos sin profundizar |
| **Bajo** | 5 | No justifica decisiones o confunde conceptos básicos |
| **No entregado** | 0 | Sin argumentación |

**Aspectos evaluados:**
- Justifica dónde colocó los `try/catch` y por qué
- Explica el diseño de funciones reutilizables (parámetros, retorno, side effects)
- Argumenta el uso de eventos del DOM para reactividad
- Si usó IA: explica qué porción del código entiende técnicamente

---

### 5. Desafío: explicación de fragmento de código solicitado por el Instructor (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Explica 1 fragmento de código a solicitud del instructor con claridad técnica, sitio desplegado en GitHub Pages funcional, README documentado con HU y decisiones técnicas |
| **Bueno** | 15 | Explica el fragmento con apoyo parcial del instructor, deploy funcional |
| **Satisfactorio** | 10 | Explica con dificultad, deploy funcional pero README incompleto |
| **Bajo** | 5 | No puede explicar el fragmento o sitio no desplegado |
| **No entregado** | 0 | Sin entregable público |

**Aspectos evaluados:**
- Capacidad para explicar el código entregado bajo demanda
- GitHub Pages cargando sin errores
- README del repo con HU implementadas y decisiones técnicas clave
- Enlace al sitio desplegado documentado

---

## Escala de Calificacion

| Rango | Nota | Descripcion |
|-------|------|-------------|
| 90-100 | A | Excelente — Dominio completo del módulo |
| 80-89 | B | Bueno — Comprensión sólida con áreas menores a mejorar |
| 70-79 | C | Satisfactorio — Cumple requisitos mínimos |
| < 70 | F | Necesita mejora — No cumple requisitos básicos |

---

## Checklist de Entrega

### Archivos Requeridos
- [ ] URL del repositorio público en GitHub
- [ ] URL de GitHub Pages funcional
- [ ] Screenshot de la captura de errores funcionando en el editor

### Documentacion
- [ ] README del repo con las HU implementadas (HU1, HU2 + adicionales)
- [ ] README del repo con decisiones técnicas clave explicadas
- [ ] Capturas de pantalla de mensajes "cargando" y de error

### Verificacion Tecnica
- [ ] Provocar entrada vacía dispara `throw` y muestra mensaje en UI
- [ ] Sintaxis Markdown inválida (`##Título`, `-elemento`) se detecta y reporta
- [ ] El editor sigue funcionando después de capturar un error
- [ ] El sitio carga sin errores en consola

---

## Notas para el Evaluador

1. **No penalices nervios en la presentación.** Lo que se evalúa es la comprensión técnica, no fluidez verbal.
2. **El uso de IA está permitido**, pero el estudiante debe poder explicar técnicamente el código que entrega. Si no puede argumentar una decisión, baja el Criterio 4.
3. **El fragmento del Criterio 5 lo eliges tú** en vivo durante la presentación — pide explícitamente "explícame este `try/catch`" o "explícame esta función de transformación" señalando una porción del código.
4. **Provoca el error intencional en la demo:** si el estudiante no muestra cómo se comporta el editor con entrada inválida, pídeselo — es parte central de la evaluación del Criterio 3.

---

## Ejemplo de Retroalimentacion

### Retroalimentacion Positiva
> "El manejo de excepciones está bien colocado en el punto crítico (al parsear el input antes de renderizar), los mensajes son útiles ('Falta espacio después de #' es mejor que 'Error de sintaxis'), y la modularización en funciones de transformación permite reutilizar el código en las HU adicionales. La argumentación sobre dónde colocar `try/catch` fue precisa."

### Areas de Mejora
> "El editor funciona pero los `try/catch` envuelven todo el flujo de renderizado en bloque grande — esto oculta de qué función vino el error. Coloca los `try/catch` cerca de cada operación riesgosa (parseo, validación, render) para que el mensaje al usuario sea específico. La HU2 detecta `##Título` pero no `-elemento` sin espacio: revisa el patrón."
