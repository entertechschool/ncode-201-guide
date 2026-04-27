---
name: class-readme
description: Genera o refactoriza READMEs de clase para estudiantes. Usa cuando necesites crear un nuevo README de clase, refactorizar uno existente, o cuando el usuario mencione "README de clase", "documentación de clase", o "preparación del estudiante".
---

# Generador de README de Clase

Este skill genera READMEs de clase para **cualquier curso** de EnterTechSchool. El documento es leído por el **estudiante ANTES de llegar a clase**.

## Paso 0: Leer Contexto del Curso

**Antes de generar cualquier contenido**, leer:

1. **`AGENTS.md`** (raíz) — Obtener: nombre del curso, audiencia, tono, nivel, convenciones de encoding/enlaces, scaffolding
2. **`README.md`** (raíz) — Syllabus: tema de la clase, módulo, proyecto integrador, herramientas
3. **`curriculum/class-{XX-1}/README.md`** — Clase anterior (para continuidad narrativa)
4. **`MODULE-PLAN.md`** del módulo (si existe) — Blueprint aprobado

**Derivar de estos archivos** (NUNCA hardcodear):

- Nombre y nivel del curso
- Audiencia y tono específicos
- Herramientas y tecnologías
- Proyecto integrador del módulo
- Convenciones de enlaces (`{:target="_blank"}` para externos, etc.)

---

## Principios Fundamentales

| Principio | Descripción |
|-----------|-------------|
| **Audiencia** | Estudiante que lee ANTES de llegar a clase (leer perfil de `AGENTS.md`) |
| **Tono** | Segunda persona: "descubrirás", "implementarás", "construirás" |
| **Propósito** | Motivar, preparar, dar contexto — NO enseñar |
| **Evitar** | Jerga pedagógica ("Warm-up", "Momento WOW", "Validación"), tiempos exactos, fases internas |

---

## Proceso de Generación

### Paso 1: Identificar Contexto

```
1. Obtener número de clase (XX)
2. Calcular módulo: M = floor((XX-1)/4) + 1
3. Calcular posición en módulo: P = ((XX-1) % 4) + 1
4. Identificar si es lab calificado: P == 4
5. Leer clase anterior para conexión narrativa
```

### Paso 2: Leer Recursos

```bash
# Syllabus (fuente de verdad)
README.md

# Si existe MODULE-PLAN
curriculum/module-{N}/MODULE-PLAN.md

# Clase anterior (continuidad)
curriculum/class-{XX-1}/README.md

# Lab de esta clase (si existe, para entender qué se construye)
curriculum/class-{XX}/lab/README.md
```

### Paso 3: Generar Contenido

Aplicar el template de abajo, adaptando al nivel y audiencia del curso.

### Paso 4: Verificar con Checklist

Validar TODOS los criterios antes de finalizar.

---

## Template de Estructura

```markdown
> **Módulo [M]:** Clase [P] de 4

# Clase [XX]: [Título de la Clase]

## Resumen

[2-3 párrafos en segunda persona.
- Motivacional pero realista (sin hype exagerado).
- Conectar con lo aprendido en clases anteriores.
- Describir qué hará el estudiante y por qué importa.
- Máximo 150 palabras.]

---

## ¿Por qué te sirve?

- **[Dato concreto o estadística]** - [Contexto histórico, de industria o de adopción]
- **[Aplicación práctica]** - [Ejemplo real: empresas, productos, o día a día]
- **[Valor profesional]** - [Cómo esto fortalece tu carrera]

---

## 🎯 ¿Qué haremos en clase?

1. **[Verbo en primera persona plural]** - [Breve descripción, 10-15 palabras]
2. **[Verbo en segunda persona]** - [Breve descripción]
3. **[Verbo en segunda persona]** - [Breve descripción]
4. **[Verbo en segunda persona]** - [Breve descripción]

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **[Verbo de acción]** [objetivo medible y específico]
2. **[Verbo de acción]** [objetivo medible y específico]
3. **[Verbo de acción]** [objetivo medible y específico]
4. **[Verbo de acción]** [objetivo medible y específico]

---

## ✅ Preparación para la Clase

### De clases anteriores

- [Concepto/código/proyecto de la clase anterior que se usará]
- [Requisito que debe estar funcionando] (si aplica)

### Reflexión previa

Antes de llegar a clase, reflexiona sobre:

- [Pregunta reflexiva que conecte el tema con la experiencia del estudiante]
- [Pregunta que motive curiosidad sobre el tema]

### Herramientas

- [ ] **[Herramienta]** - [Link o instrucción]
- [ ] **[Herramienta/cuenta]** - [Instrucción específica] (si aplica)

### Lectura sugerida

- [{Título del recurso}]({URL}){:target="_blank"} - [1 línea de contexto]

---

## Glosario

| Término | Definición |
|---------|------------|
| **[Término 1]** | [Definición clara y concisa, 1-2 líneas] |
| **[Término 2]** | [Definición clara y concisa] |
| **[Término 3]** | [Definición clara y concisa] |
| **[Término 4]** | [Definición clara y concisa] |

---

## Recursos Adicionales

- [{Recurso 1}]({URL}){:target="_blank"} - [Contexto breve]
- [{Recurso 2}]({URL}){:target="_blank"} - [Contexto breve]
```

---

## Verbos de Acción para Objetivos

Usar verbos medibles de la taxonomía de Bloom:

| Nivel | Verbos |
|-------|--------|
| Recordar | Identificar, listar, nombrar |
| Comprender | Explicar, describir, interpretar |
| Aplicar | Implementar, usar, construir |
| Analizar | Comparar, diferenciar, organizar |
| Evaluar | Justificar, criticar, defender |
| Crear | Diseñar, desarrollar, producir |

---

## Ejemplos de Secciones Bien Escritas

### Resumen

> En esta clase, descubrirás cómo funciona la web moderna—desde que escribes una URL hasta que ves una página en tu navegador. Es un viaje fascinante que involucra clientes, servidores, protocolos y código.
>
> Configurarás tu entorno de desarrollo profesional con Visual Studio Code, el editor que usan millones de desarrolladores en el mundo.
>
> Al final de la clase, tendrás tu primera página web funcionando con tu nombre, foto y hobbies.

### ¿Por qué te sirve?

> - **El 90% de las APIs profesionales usan middleware.** Express, Fastify, Koa, Hono—todos se basan en este patrón. Entenderlo es obligatorio para backend.
>
> - **Netflix, Spotify, y Uber usan middleware para autenticación.** Cada request pasa por capas que verifican tokens, registran logs, y manejan errores antes de llegar a tu código.
>
> - **Un buen sistema de middleware reduce bugs en producción.** Centralizar el manejo de errores significa arreglar un solo lugar, no 50 endpoints.

### 🎯 ¿Qué haremos en clase?

> 1. **Exploraremos cómo funciona la web** - Descubrirás qué pasa "detrás de escenas" cuando visitas un sitio.
> 2. **Configurarás VS Code** - Instalarás las extensiones que usan los desarrolladores profesionales.
> 3. **Crearás tu primera página** - Escribirás HTML real y verás los cambios en tiempo real.
> 4. **Mostrarás tu trabajo** - Presentarás tu página al grupo.

### ✅ Preparación para la Clase

> ### Reflexión previa
>
> Antes de llegar a clase, reflexiona sobre:
>
> - ¿Qué tarea repetitiva de tu trabajo te gustaría automatizar?
> - Si pudieras delegar una tarea a un asistente, ¿cuál sería?
>
> ### Herramientas
>
> - [ ] **Claude** - Cuenta creada en claude.ai (versión gratuita es suficiente)
> - [ ] **Google Docs** - Para guardar tus entregables

---

## Lo que NO va en este README

| Contenido | Pertenece a |
|-----------|-------------|
| Tiempos por fase (10 min, 50 min, 90 min) | `facilitator/README.md` |
| Nombres de fases (Warm-up, Demo, Validación) | `facilitator/README.md` |
| Tabla de estructura de clase con duraciones | `facilitator/README.md` |
| Estrategias de enseñanza | `facilitator/README.md` |
| Cómo manejar errores comunes de estudiantes | `facilitator/README.md` |
| Señales de comprensión vs confusión | `facilitator/README.md` |
| Tips para diferenciación | `facilitator/README.md` |
| Gestión del tiempo | `facilitator/README.md` |
| Código paso a paso | `lab/README.md` |
| Checkpoints técnicos | `lab/README.md` |
| Referencias a rúbricas | Documento interno, no mencionar |

---

## Referencias de Estilo

| Aspecto | Guía |
|---------|------|
| **Tono** | Profesional, inspirador, segunda persona (adaptar nivel según `AGENTS.md`) |
| **Longitud** | ≤ 150 líneas |
| **Emojis** | Estratégicos en headers para escaneo visual, no decorativos |
| **Enlaces externos** | Según convención de `AGENTS.md` (típicamente `{:target="_blank"}`) |
| **Encoding** | UTF-8 puro (tildes directas, nunca escapes Unicode) |

---

## Checklist de Verificación

Antes de finalizar, verificar:

- [ ] ¿Se leyó `AGENTS.md` y `README.md` antes de generar?
- [ ] ¿Está en segunda persona? ("descubrirás", no "los estudiantes descubrirán")
- [ ] ¿Tiene sección "¿Por qué te sirve?" con datos concretos?
- [ ] ¿La sección "¿Qué haremos?" NO tiene tiempos ni jerga pedagógica?
- [ ] ¿Los objetivos usan verbos de acción medibles (Bloom)?
- [ ] ¿La preparación incluye reflexión, herramientas Y lectura sugerida?
- [ ] ¿Menciona prerrequisitos de clases anteriores (si aplica)?
- [ ] ¿El glosario tiene 4-6 términos nuevos de la clase?
- [ ] ¿NO tiene tiempos, fases, tabla de estructura ni código?
- [ ] ¿NO tiene información que pertenezca al facilitator o al lab?
- [ ] ¿Enlaces externos usan la convención de `AGENTS.md`?
- [ ] ¿Encoding UTF-8 verificado (sin `�` ni escapes)?
- [ ] ¿Máximo ~150 líneas?

---

## Output

- **Ubicación:** `curriculum/class-{XX}/README.md`
- **Formato:** Markdown UTF-8
- **Longitud:** ≤ 150 líneas
