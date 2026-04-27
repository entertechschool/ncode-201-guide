---
name: module-test
description: Genera tests diagnósticos por módulo. Usar cuando se pida crear test, quiz, evaluación diagnóstica, o checkpoint de módulo.
allowed-tools: Read, Glob, Grep, Write, Edit
---

# Generador de Tests Diagnósticos por Módulo

## Objetivo

Crear tests de verificación rápida (15 min) para evaluar comprensión al final de cada módulo. Los tests son **diagnósticos internos** - NO afectan la calificación del estudiante.

## Propósito del Test

- Control interno de avance del grupo
- Identificar temas que necesitan refuerzo
- Ajustar ritmo/contenido si es necesario
- Medir satisfacción de forma imperceptible (pregunta 8)

---

## Cuándo Usar

| Escenario | Usar |
|-----------|------|
| Al completar las clases de un módulo (clase de cierre) | Sí |
| Para crear evaluación formativa/diagnóstica | Sí |
| Durante el desarrollo de clases individuales | No |

---

## Proceso de Generación

### Paso 0: Leer contexto del curso

```bash
# OBLIGATORIO: leer AGENTS.md y README.md (syllabus) del repositorio
# para obtener:
# - Nombre y código del curso (ej: Code 101, AI 101, Data 101)
# - Estructura de módulos (cuántos módulos, cuántas clases por módulo)
# - Clases de cierre de módulo (ej: 4, 8, 12)
# - Temas por clase
# - Nivel del estudiante y prerrequisitos
# - Plataforma de evaluación (Canvas, Google Forms, etc.)
```

**Regla:** NUNCA hardcodear nombre del curso, tecnologías o estructura. Todo se lee de AGENTS.md/README.md.

### Paso 1: Identificar contexto del módulo

Determinar:
- Número de clase de cierre (leído del syllabus)
- Módulo correspondiente
- Rango de clases que cubre el test (ej: clases 1-4 del módulo)

### Paso 2: Leer contenido del módulo

```bash
# Leer READMEs de las clases del módulo
curriculum/class-{X-3}/README.md
curriculum/class-{X-2}/README.md
curriculum/class-{X-1}/README.md
curriculum/class-{X}/README.md

# Leer slides para conceptos clave
curriculum/class-{X-3}/slides/README.md
curriculum/class-{X-2}/slides/README.md
curriculum/class-{X-1}/slides/README.md
curriculum/class-{X}/slides/README.md
```

### Paso 3: Generar archivos

1. `test/README.md` - Info para estudiante
2. `test/questions.md` - 8 preguntas con respuestas y retroalimentación (facilitador)

---

## Estructura de Archivos

```
curriculum/class-XX/test/
├── README.md        # Info para estudiante (qué esperar)
└── questions.md     # Preguntas con respuestas y retroalimentación (copy-paste a plataforma LMS)
```

**Ubicación:** Solo en clases de cierre de módulo (determinadas en Paso 0)

---

## Template: test/README.md (estudiante)

```markdown
# Test Diagnóstico - Módulo [N]: [Título del Módulo]

## Información General

| Aspecto | Detalle |
|---------|---------|
| **Módulo** | [N] |
| **Clases cubiertas** | [Primera] - [Última] |
| **Duración** | 15 minutos |
| **Preguntas** | 8 (opción múltiple) |
| **Tipo** | Diagnóstico (formativo) |

---

## ¿Qué evalúa?

Este test verifica tu comprensión de los conceptos de las Clases [X-3] a [X]:

| Clase | Temas |
|-------|-------|
| Clase [X-3] | [Tema principal] |
| Clase [X-2] | [Tema principal] |
| Clase [X-1] | [Tema principal] |
| Clase [X] | [Tema principal] |

---

## Instrucciones

1. Se realiza en [plataforma] durante la clase
2. Tienes 15 minutos
3. Individual y sin materiales de apoyo

> **Nota:** Este test es diagnóstico - nos ayuda a identificar qué temas necesitan más práctica. **No afecta tu calificación**.

---

## Después del Test

- Revisa tus respuestas incorrectas
- Vuelve al material de la clase correspondiente
- Pregunta a tu instructor si algo no quedó claro
```

---

## Template: test/questions.md (facilitador)

```markdown
# Test Módulo [N] - Questions

> ⚠️ **Documento para facilitadores** - Contiene respuestas y retroalimentación

**8 preguntas diagnósticas**

---

## Preguntas 1-2 (Clase [X-3]: [Tema])

### Pregunta 1 (Conceptual)

[Pregunta sobre concepto fundamental de la clase X-3]

- A) [Opción]
- B) [Opción]
- C) [Opción]
- D) [Opción]

> Respuesta: [Letra]

> **Retroalimentación:** [Por qué es correcta y por qué las otras no]

---

### Pregunta 2 (Aplicación)

[Pregunta de aplicación sobre la clase X-3]

- A) [Opción]
- B) [Opción]
- C) [Opción]
- D) [Opción]

> Respuesta: [Letra]

> **Retroalimentación:** [Explicación]

---

## Preguntas 3-4 (Clase [X-2]: [Tema])

### Pregunta 3 (Conceptual)

[Pregunta sobre concepto de la clase X-2]

- A) [Opción]
- B) [Opción]
- C) [Opción]
- D) [Opción]

> Respuesta: [Letra]

> **Retroalimentación:** [Explicación]

---

### Pregunta 4 (Aplicación)

[Pregunta de aplicación sobre la clase X-2]

- A) [Opción]
- B) [Opción]
- C) [Opción]
- D) [Opción]

> Respuesta: [Letra]

> **Retroalimentación:** [Explicación]

---

## Preguntas 5-6 (Clase [X-1]: [Tema])

### Pregunta 5 (Conceptual)

[Pregunta sobre concepto de la clase X-1]

- A) [Opción]
- B) [Opción]
- C) [Opción]
- D) [Opción]

> Respuesta: [Letra]

> **Retroalimentación:** [Explicación]

---

### Pregunta 6 (Aplicación)

[Pregunta de aplicación sobre la clase X-1]

- A) [Opción]
- B) [Opción]
- C) [Opción]
- D) [Opción]

> Respuesta: [Letra]

> **Retroalimentación:** [Explicación]

---

## Pregunta 7 (Clase [X]: Aplicación Práctica)

### Pregunta 7

[Caso práctico que integre conceptos del módulo / aplicación del proyecto]

- A) [Opción]
- B) [Opción]
- C) [Opción]
- D) [Opción]

> Respuesta: [Letra]

> **Retroalimentación:** [Explicación detallada]

---

## Pregunta 8 (Autoevaluación)

### Pregunta 8

Después de completar este módulo, ¿cómo describirías tu nivel de confianza
para [APLICACIÓN PRINCIPAL DEL MÓDULO]?

- A) Muy seguro/a - podría hacerlo sin ayuda
- B) Bastante seguro/a - con algo de referencia
- C) Algo inseguro/a - necesitaría bastante guía
- D) Muy inseguro/a - no sabría por dónde empezar

> ⚠️ Sin respuesta correcta - todas las opciones son válidas para diagnóstico

> **Retroalimentación:** Usa tu respuesta para planificar tu estudio. Si elegiste C o D, revisa el material del módulo o consulta con tu instructor.
```

**Nota:** La Pregunta 8 mide satisfacción de forma imperceptible. No tiene respuesta correcta.

---

## Reglas de Contenido

### Distribución de Preguntas (7 técnicas + 1 autoevaluación)

| Pregunta | Clase | Tipo |
|----------|-------|------|
| 1 | Clase X-3 | Conceptual |
| 2 | Clase X-3 | Aplicación |
| 3 | Clase X-2 | Conceptual |
| 4 | Clase X-2 | Aplicación |
| 5 | Clase X-1 | Conceptual |
| 6 | Clase X-1 | Aplicación |
| 7 | Clase X | Aplicación práctica (integradora) |
| 8 | — | Autoevaluación (satisfacción oculta) |

### Tipos de Preguntas (1-7)

| Tipo | Ejemplo |
|------|---------|
| Definición | "¿Qué es...?" |
| Propósito | "¿Para qué sirve...?" |
| Comparación | "¿Cuál es la diferencia entre...?" |
| Aplicación | "¿Cómo se hace...? / ¿Qué herramienta usarías para...?" |
| Resultado | "¿Qué sucede al ejecutar...?" |

### Código en Preguntas (solo cursos de programación)

Si el curso incluye programación, las preguntas pueden contener snippets de código:

- Máximo 5 líneas
- Sin dependencias externas
- Resultado predecible
- Usar bloques de código con el lenguaje correcto

### Formato de Opciones

- 4 opciones (A, B, C, D)
- Solo UNA respuesta correcta
- Distractores plausibles pero claramente incorrectos
- Evitar "Todas las anteriores" o "Ninguna de las anteriores"
- Evitar enunciados negativos ("¿Cuál NO es...?")

### Distractores Efectivos

Los distractores (opciones incorrectas) deben ser:
- **Plausibles:** Parecen correctas a primera vista
- **Basados en errores comunes:** Reflejan confusiones típicas de estudiantes
- **Similares en longitud:** No muy cortas ni muy largas vs la correcta
- **Educativos:** Revelan malentendidos comunes

### Nivel de Dificultad

- Adaptar al nivel del curso (leído de AGENTS.md/README.md)
- Preguntas deben ser **conceptuales**, no pedir escribir código extenso
- Pueden incluir snippets cortos (3-5 líneas) para analizar si aplica
- Enfocarse en "por qué" más que en memorización pura
- Considerar prerrequisitos del estudiante

---

## Validación Final

- [ ] Paso 0 completado: se leyó AGENTS.md/README.md antes de generar
- [ ] README.md es conciso y NO menciona "umbral de aprobación"
- [ ] README.md tiene nota de "NO afecta calificación"
- [ ] README.md incluye sección "Después del Test"
- [ ] questions.md tiene exactamente 8 preguntas (7 técnicas + 1 autoevaluación)
- [ ] Preguntas 1-7: 4 opciones con respuesta marcada `> Respuesta: X`
- [ ] Preguntas 1-7: retroalimentación incluida para cada pregunta
- [ ] Pregunta 8: autoevaluación sin respuesta correcta
- [ ] Distribución: Conceptual + Aplicación por clase (1+1, 1+1, 1+1) + 1 integradora + 1 autoevaluación
- [ ] Formato compatible con plataforma LMS (copy-paste)
- [ ] Nivel apropiado para el curso (verificado contra AGENTS.md)
- [ ] Sin nombres de curso, tecnologías o módulos hardcodeados (todo leído del syllabus)
- [ ] Encoding UTF-8 verificado

---

## Notas Importantes

1. **Agnóstico:** Este skill funciona para cualquier curso — lee contexto de AGENTS.md/README.md
2. **Timing:** El test se toma a mitad de la clase de cierre de módulo
3. **Propósito:** Diagnóstico interno, NO calificación
4. **LMS:** El formato de `questions.md` es copy-paste directo a Canvas, Google Forms, u otra plataforma
5. **Retroalimentación:** Cada pregunta incluye explicación — útil para el facilitador y para revisión post-test
