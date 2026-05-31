# Rubrica - Lab Modulo 2: Gestor de Presupuesto Personal

> 📋 **Documento interno para evaluadores**

## Informacion General

| Aspecto | Detalle |
|---------|---------|
| **Proyecto** | Gestor de Presupuesto Personal |
| **Modulo** | M2 — Fundamentos de Programación |
| **Clase** | C08 — Prototipos en JavaScript |
| **Puntaje Total** | 100 puntos |

---

## Criterios de Evaluacion

### 1. Historias de Usuario implementadas (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | ≥2 HU adicionales propias implementadas, claras, funcionales y con criterios de aceptación cumplidos al 100% |
| **Bueno** | 15 | 2 HU adicionales con criterios de aceptación cumplidos en su mayoría |
| **Satisfactorio** | 10 | 1 HU adicional implementada con criterios parciales |
| **Bajo** | 5 | HU planteada pero no funcional, o sin criterios verificables |
| **No entregado** | 0 | Sin HU adicionales |

**Aspectos evaluados:**
- HU redactadas en formato "Como [usuario], quiero [acción] para [beneficio]"
- Criterios de aceptación verificables
- Cada HU en su propia rama y mergeada vía PR
- Funcionalidad demostrable en el sitio público

---

### 2. Calidad técnica: paradigmas integrados (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Integra correctamente los 4 paradigmas (imperativo, funcional, OOP, prototipal), aplica buenas prácticas: funciones puras, encapsulamiento, herencia con `Object.create()`, validaciones con `instanceof` |
| **Bueno** | 15 | Integra 3 de 4 paradigmas correctamente, alguna inconsistencia menor |
| **Satisfactorio** | 10 | Integra 2 paradigmas, código funcional pero sin aprovechar todas las técnicas del módulo |
| **Bajo** | 5 | Solo usa enfoque imperativo, no aplica los conceptos del módulo |
| **No entregado** | 0 | Código no funcional o sin paradigmas reconocibles |

**Aspectos evaluados:**
- Uso de `map()`, `filter()`, `reduce()` para operaciones sobre movimientos
- Funciones constructoras con `function Constructor()` + `new`
- Métodos en `Constructor.prototype` (no en cuerpo del constructor)
- Herencia con `Object.create()` y subtipos (`Ingreso`, `Egreso`)
- Validaciones con `instanceof` y `hasOwnProperty()`

---

### 3. Presentación de funcionalidades en vivo (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Demo ≤3 min, navegación fluida, muestra filtrado/análisis/categorización dinámica, demuestra cadena de prototipos en DevTools |
| **Bueno** | 15 | Demo fluida muestra funcionalidades clave pero omite detalle de prototipos |
| **Satisfactorio** | 10 | Demo entrega lo pedido pero sin uso de DevTools |
| **Bajo** | 5 | Presenta pero no muestra la funcionalidad core del gestor |
| **No entregado** | 0 | Sin presentación |

**Aspectos evaluados:**
- Tiempo: máximo 3 min, uso eficiente
- Muestra crear movimientos (ingresos y egresos)
- Demuestra filtrado y análisis por tipo
- Abre DevTools y muestra `__proto__` para evidenciar la cadena
- No se evalúa fluidez verbal ni nervios

---

### 4. Argumentación técnica (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Justifica ≥2 decisiones técnicas con argumentos sólidos: por qué prototipos vs métodos en constructor, ventajas de herencia prototipal, eficiencia de memoria; explica cadena de prototipos al ser preguntado |
| **Bueno** | 15 | Justifica 1 decisión técnica claramente, responde con dificultad pero correcto al preguntar por prototipos |
| **Satisfactorio** | 10 | Argumentación superficial, identifica los conceptos pero sin profundizar |
| **Bajo** | 5 | No justifica decisiones técnicas o confunde conceptos básicos |
| **No entregado** | 0 | Sin argumentación |

**Aspectos evaluados:**
- Compara ventajas de prototipos vs constructor (memoria, mantenibilidad)
- Explica cuándo aplicó cada paradigma y por qué
- Distingue `__proto__` de `prototype` al ser preguntado
- Si usó IA: explica qué porción del código entiende técnicamente

---

### 5. Desafío: implementación prototipal solicitada por el Instructor (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Explica 1 fragmento de código prototipal a solicitud del instructor con claridad técnica, sitio desplegado en GitHub Pages funcional, README documentado con arquitectura de prototipos |
| **Bueno** | 15 | Explica el fragmento con apoyo parcial del instructor, deploy funcional |
| **Satisfactorio** | 10 | Explica con dificultad, deploy funcional pero README incompleto |
| **Bajo** | 5 | No puede explicar el fragmento o sitio no desplegado |
| **No entregado** | 0 | Sin entregable público |

**Aspectos evaluados:**
- Capacidad para explicar el código entregado bajo demanda
- GitHub Pages cargando sin errores
- README del repo con explicación de la arquitectura de prototipos
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
- [ ] Screenshot del PR mergeado por cada HU adicional

### Documentacion
- [ ] README del repo con retos adicionales documentados
- [ ] README del repo con explicación de la arquitectura de prototipos implementada
- [ ] README del repo con decisiones técnicas clave sobre paradigmas

### Verificacion Tecnica
- [ ] DevTools muestra la cadena de prototipos en los objetos del gestor
- [ ] `instance instanceof Movimiento` retorna `true` para movimientos válidos
- [ ] Métodos compartidos viven en `Constructor.prototype` (no en el constructor)
- [ ] El sitio carga sin errores en consola

---

## Notas para el Evaluador

1. **No penalices nervios en la presentación.** Lo que se evalúa es la comprensión técnica, no fluidez verbal.
2. **El uso de IA está permitido**, pero el estudiante debe poder explicar técnicamente el código que entrega. Si no puede argumentar una decisión, baja el Criterio 4.
3. **El fragmento del Criterio 5 lo eliges tú** en vivo durante la presentación — pide explícitamente "explícame esta función prototipal" señalando una porción del código.
4. **Distingue Criterio 2 de Criterio 4:** Criterio 2 es CÓDIGO entregado, Criterio 4 es ARGUMENTACIÓN sobre ese código.

---

## Ejemplo de Retroalimentacion

### Retroalimentacion Positiva
> "La separación de `Movimiento` como constructor base y `Ingreso`/`Egreso` como subtipos con `Object.create()` está bien implementada. La explicación de por qué los métodos viven en `prototype` vs en el constructor (memoria compartida vs duplicada) fue precisa y técnica. Excelente uso de `instanceof` para validar antes de procesar."

### Areas de Mejora
> "El gestor funciona pero los métodos de cálculo (`obtenerBalance`, `filtrarPorTipo`) están dentro del constructor en vez del prototipo — esto duplica la función por cada instancia. Mueve estos métodos a `Movimiento.prototype` para corregir el Criterio 2. La argumentación técnica fue clara pero no pudiste explicar la diferencia entre `__proto__` y `prototype` cuando se preguntó."
