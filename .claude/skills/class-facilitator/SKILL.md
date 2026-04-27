---
name: class-facilitator
description: Genera guías de facilitador para clases del curso. Usar cuando se pida crear guía de facilitador, guía del instructor, material para el profesor, o facilitator guide.
allowed-tools: Read, Glob, Grep, WebSearch, WebFetch, Write, Edit
---

# Generador de Guías de Facilitador

## Objetivo

Crear guías de referencia rápida (lectura 5-10 min antes de clase) para instructores del curso. El tono debe ser narrativo estilo Medium.com con párrafos cortos (3-5 líneas máximo). Es el "cheat sheet" del instructor: todo lo que necesita saber sin leer documentos extensos.

## Audiencia

Esta guía es para **instructores**, no para estudiantes. El tono es de mentor-a-mentor, reflexivo y práctico.

## Proceso

0. **Leer scaffolding del curso**: `AGENTS.md`
   - Identificar: nombre del curso, nivel (`course_level`), duración de clase, módulos, proyecto por módulo
   - `checkpoint_style` → formato de validación en tabla de checkpoints
   - Tabla de Autonomía → calibrar nivel de intervención y ejemplos
   - `scaffolding_style` → calibrar "hand-holding" en dinámicas
   - Archivos complementarios del curso (debate.md, herramientas.md, etc.)

1. **Leer el contenido de la clase**: README.md, lab/README.md, slides/README.md, y cualquier archivo complementario (debate.md, etc.)
2. **Investigar contexto**: Usar WebSearch para obtener datos reales y actuales sobre las tecnologías/temas de la clase
3. **Generar el archivo**: `curriculum/class-XX/facilitator/README.md`
4. **Preservar archivos complementarios**: Si existen archivos como `facilitator/herramientas.md`, NO eliminarlos ni sobreescribirlos.

## Estructura del Documento

```markdown
# Guía del Facilitador - Clase XX: [Título]

> Tiempo de lectura: X minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **[Concepto 1]**: Definición de 1 línea.
- **[Concepto 2]**: Definición de 1 línea.
- **[Concepto 3]**: Definición de 1 línea.
(3-5 conceptos máximo, solo lo esencial)

---

## 🔗 Analogías Útiles

**[Idea compleja] <> [Analogía simple]:**
Explicación de por qué funciona esta analogía. 2-3 líneas máximo.

(3-4 analogías listas para usar en clase)

---

## 📚 Contexto Histórico / Contexto Actual

### [Tecnología/Tema]: [Título narrativo]

Historia real o contexto actual con datos verificados:
- Quién la creó y cuándo (o qué está pasando en la industria)
- El problema que intentaba resolver (o por qué es relevante hoy)
- Datos curiosos o impactantes
- Conexión con lo que veremos hoy

> **Para contar en clase:** "Cita memorable o dato impactante"

### [Tecnología/Tema 2]: [Título narrativo]

(Repetir formato. Máximo 2 por clase. Incluir fuentes)

**Fuentes:** [Link 1](url), [Link 2](url)

---

## 🎯 Momentos Clave de la Clase

### Pregunta Detonadora

> Incluir solo si la clase tiene pregunta detonadora en slides.

**Pregunta:** [La pregunta exacta del slide]

**Respuesta correcta:** [Letra] - [Opción]

**Por qué las otras NO:**
| Opción | Por qué NO |
|--------|-----------|
| A | [Explicación concisa] |
| B | [Explicación concisa] |
| C | [Explicación concisa] |

**Script post-votación:**
```
Facilitador: "¿Quién votó A? ¿Por qué?"
[Escuchar respuestas]
Facilitador: "Interesante. La respuesta es [X] porque [razón clave]."
```

**Tip:** No revelar la respuesta inmediatamente. Dejar que debatan 1-2 minutos.

### Demo Principal

**Qué mostrar:** [Descripción específica de la demo]

**Script sugerido:**
```
Facilitador: "Voy a mostrarles cómo [tarea]..."
[Hacer la demo]
Facilitador: "¿Notaron cómo [punto clave]?"
```

**Plan B (si la demo falla):** [Alternativa concreta]

### Transición al Lab

**Momento crítico:** La transición de la demo al lab es donde más estudiantes se pierden.

**Script sugerido:**
```
Facilitador: "Ahora ustedes van a hacer algo similar. Abran [herramienta]..."
Facilitador: "El primer paso es [paso]. Levanten la mano cuando tengan [checkpoint]."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "[Nombre descriptivo]"

Contexto de cuándo usar esta dinámica.

> "Narrativa o script sugerido para el facilitador"

**Dinámica sugerida:**
```
Facilitador: "Pregunta inicial"
(Reacción esperada)
Facilitador: "Seguimiento"
```

(2-3 dinámicas con diálogos ejemplo)

---

## 📋 Guía de Debate

> Incluir solo si la clase tiene debate.md.

### Pregunta principal
[Pregunta del debate.md]

### Posibles perspectivas
1. **Perspectiva A:** [Descripción]
2. **Perspectiva B:** [Descripción]
3. **Perspectiva C:** [Descripción]

### Cómo moderar
- Si el grupo está callado: [Estrategia]
- Si se desvían del tema: [Estrategia]
- Si hay conflicto: [Estrategia]

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: [Nombre del ejemplo]

**Cuándo usarlo:** Contexto específico.

```código
// Código o ejemplo copiable y funcional
```

**Tip de facilitación:** Consejo específico para presentar este ejemplo.

(3-4 ejemplos con contenido copiable)

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| "Error message" o síntoma | Causa del error | Solución específica |

(4-6 errores típicos de estudiantes)

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Puede explicar [concepto] en sus propias palabras
- Puede predecir el resultado de [ejemplo]
- Puede modificar el ejemplo para [variación]

### El estudiante NECESITA AYUDA cuando:
- Copia sin modificar
- No puede explicar qué hace su trabajo
- Tiene el mismo error repetidamente

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar | Si no cumple |
|--------|------------|--------------|--------------|
| XX | Hito 1 | Qué debe verse/funcionar | Acción correctiva |
| XX | Hito 2 | Qué debe verse/funcionar | Acción correctiva |

> Formato de "Cómo validar" debe coincidir con `checkpoint_style` de AGENTS.md.

---

## 🧑‍🏫 Tips de Facilitación

### Si el grupo está callado:
- Hacer preguntas específicas a personas específicas (con respeto)
- Compartir tu propia experiencia primero

### Si alguien domina la conversación:
- "Excelente punto. ¿Alguien más tiene una perspectiva diferente?"
- Redirigir: "Guardemos eso para después."

### Si la mayoría termina antes:
- Sugerir logros adicionales
- Rol de mentor de pares

### Si la mayoría se atrasa:
- Identificar qué recortar
- Priorizar los checkpoints esenciales

### Si hay preguntas fuera de alcance:
> "Excelente pregunta. Eso lo veremos en [clase/módulo siguiente]. Por ahora enfoquémonos en [tema actual]."

---

## 🔀 Diferenciación

### Para estudiantes avanzados:
- Sugerir logros adicionales temprano
- Preguntas de extensión: "[Pregunta avanzada]"
- Rol de mentor de pares

### Para estudiantes con dificultades:
- Pair programming con estudiante avanzado
- Checkpoint intermedio adicional
- Versión simplificada del ejercicio

---

## ❓ Preguntas Frecuentes

### P: [Pregunta común]
**R:** [Respuesta clara y concisa]

### P: [Pregunta común]
**R:** [Respuesta clara y concisa]

(2-4 preguntas relevantes al tema de la clase)

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|-------|----------|-----------------|
| [XX-1] | [Concepto] | [Conexión] |

### Conexión con la Próxima Clase

Al cerrar, planta la semilla:

> "La próxima clase vamos a [preview]. Lo que aprendieron hoy de [concepto] les va a servir para [aplicación futura]."

**Pre-work / Tarea implícita:** [Sugerencia de reflexión o preparación]

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Qué funcionó bien hoy?
- ¿Qué ajustaría para la próxima vez?
- ¿Qué estudiantes necesitan seguimiento?
- ¿Algún concepto necesita refuerzo en la siguiente clase?
```

## Notas de Estilo

- **Tono**: Narrativo, como artículo de Medium. Mentor hablando a mentor.
- **Párrafos**: Cortos (3-5 líneas máximo)
- **Emojis**: Solo en headers de sección para escaneo visual
- **Código/Ejemplos**: Siempre funcionales y copiables
- **Analogías**: Cotidianas y universales (no técnicas)
- **Datos históricos/actuales**: Siempre verificados con WebSearch, incluir fuentes
- **Scripts de diálogo**: Listos para usar, 4-6 líneas máximo

### Densidad

- **Analogías:** Máximo 1 párrafo (2-3 líneas). Si necesita más, es demasiado compleja.
- **Ejemplos:** No repetir código del lab salvo versión simplificada para demo.
- **Contexto histórico/actual:** Máximo 2 tecnologías/temas por clase. Elegir los más impactantes.
- **Dinámicas:** Diálogos ejemplo: 4-6 líneas de script. El facilitador improvisa el resto.
- **Longitud total:** < 300 líneas.

---

## Secciones Condicionales

Algunas secciones solo aplican si el curso las utiliza. Verificar en AGENTS.md y en los archivos de la clase:

| Sección | Condición |
|---------|-----------|
| Pregunta Detonadora | Solo si slides tienen pregunta detonadora |
| Guía de Debate | Solo si existe `debate.md` en la clase |
| Ejemplos con código | Solo si la clase involucra código/herramientas |

---

## Calibración por Módulo

Leer Tabla de Autonomía en `AGENTS.md > ## Scaffolding`. Ajustar según el nivel de autonomía del módulo:

| Aspecto | Módulo inicial (más guiado) | Módulo intermedio | Módulo avanzado (más autónomo) |
|---------|----------------------------|-------------------|-------------------------------|
| Ejemplos listos | 3-4 completos | 2-3 con gaps menores | 1-2 con pseudocódigo |
| Errores comunes | Setup y sintaxis | Lógica y conexiones | Debugging y diseño |
| Dinámicas | Facilitador lidera demo | Estudiantes intentan primero | Estudiantes resuelven, facilitador guía |
| Checkpoints | Verificar visual | Verificar comportamiento | Verificar criterios |

> Para cursos con `course_level=1` (ver AGENTS.md), la progresión es sutil: el módulo inicial es muy guiado, el final solo ligeramente menos.

---

## Template Adicional: Clases de Cierre de Módulo

> Verificar en AGENTS.md cuáles son las clases de cierre de módulo (típicamente 4, 8). La clase final del curso (típicamente 12) tiene formato especial (Demo Day).

Las clases de cierre de módulo requieren secciones adicionales:

### Sección: 📊 Test Diagnóstico del Módulo

```markdown
## 📊 Test Diagnóstico del Módulo

### Logística (30 min total)

| Actividad | Tiempo | Qué hacer |
|-----------|--------|-----------|
| Test en Canvas | 15 min | Proyectar countdown, ambiente silencioso |
| Revisión en vivo | 15 min | Compartir pantalla Canvas, solo estadísticas |

### Durante el test

> "Tienen 15 minutos. Es individual y a libro cerrado. Recuerden: esto NO afecta su calificación—es para que nosotros sepamos qué temas necesitan más práctica."

**Tips:**
- Proyectar un timer en pantalla
- Mantener ambiente silencioso
- Circular por el salón sin presionar

### Revisión de resultados

**Preparación:** En Canvas, ir a "Estadísticas de Quiz" (NO muestra nombres)

**Qué buscar:**
- Preguntas con <60% acierto → tema que necesita refuerzo
- Preguntas con >90% acierto → tema dominado, celebrar
- Pregunta de autoevaluación → termómetro de confianza del grupo
```

### Sección: 🎤 Presentaciones de Cierre

```markdown
## 🎤 Presentaciones de Cierre

### Antes de empezar
> "Este es SU momento. Han trabajado X clases para llegar aquí..."

### Durante presentaciones
- Mantener ambiente positivo
- Una pregunta breve a cada presentador
- Aplaudir genuinamente después de cada uno

### Si alguien no terminó
> "Está bien no haber terminado al 100%. ¿Qué parte quieres mostrar?"

### Cierre de las Presentaciones
> "Hace X clases no sabían qué era [tema]. Hoy tienen [logro]. ¡Increíble!"
```

### Checkpoints para Clases de Cierre

Los checkpoints deben incluir explícitamente las actividades de cierre con sus tiempos. Consultar AGENTS.md para la duración exacta de la clase y distribuir proporcionalmente.

> **IMPORTANTE:** NO usar "Demo Day" para clases de cierre de módulo. "Demo Day" es exclusivo de la clase final del curso.

---

## Validación Final

- [ ] < 300 líneas
- [ ] Paso 0 ejecutado: curso, nivel y scaffolding leídos de AGENTS.md
- [ ] Secciones core: Conceptos, Analogías, Contexto, Dinámicas, Errores, Checkpoints
- [ ] Momentos Clave: pregunta detonadora (si aplica) con respuesta + por qué las otras NO
- [ ] Al menos 1 demo con Plan B
- [ ] Señales de comprensión claras
- [ ] Checkpoints con tiempos que suman la duración de clase (ver AGENTS.md)
- [ ] Conexiones con clases anteriores y siguientes
- [ ] Tips de facilitación para situaciones comunes
- [ ] Preguntas frecuentes relevantes
- [ ] Reflexión post-clase
- [ ] Secciones condicionales incluidas solo si aplican (debate, código, etc.)
- [ ] Para clases de cierre: test diagnóstico + presentaciones
- [ ] Tono narrativo, párrafos cortos
- [ ] Encoding UTF-8 verificado
- [ ] Sin nombres de curso, tecnologías, o duraciones hardcodeadas (todo viene de AGENTS.md)

## Ejemplo de Referencia

Ver implementaciones existentes en: `curriculum/class-*/facilitator/README.md`

