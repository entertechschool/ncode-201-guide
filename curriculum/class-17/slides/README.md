<!-- .slide: data-background="#0A192F" -->
# Clase 17: Ideation + Research + Stories
## Arranca el Proyecto Integrador Final

---

## TRANSICION: Clase 16 → Clase 17

### Clase anterior:
- Cerraste el Módulo 4 con Gestor de Plantillas para WhatsApp.
- Sabes manipular estado complejo y persistirlo con JSON + LocalStorage.

### Hoy:
- Entras al último módulo: el Proyecto Final Integrador.
- Hoy NO codeas. Planificas.

> "Un proyecto bien planificado es un proyecto medio terminado."

---

## QUIZ PRE-LAB

### Pregunta:
Si tú y tres amigos pagan distintos gastos en un viaje a Máncora, ¿cómo calcularías quién le debe a quién al final?

*Toma 2-3 respuestas antes de continuar*

---

## COMPROBACION

### Pregunta:
¿Cuál es la diferencia clave entre una **historia de usuario** y una **tarea técnica**?

A. Las historias de usuario se escriben en inglés; las tareas en español.
B. Las historias describen funcionalidades desde la perspectiva del usuario; las tareas describen el trabajo técnico para implementarlas.
C. Las historias son para el diseñador; las tareas para el desarrollador.
D. No hay diferencia: son sinónimos.

---

## COMPROBACION - Respuesta

**Respuesta correcta:** B

**Análisis de opciones:**
- **A:** El idioma es irrelevante. Es una distinción de forma, no de contenido.
- **B:** Correcto. La historia dice "el usuario quiere X para Y"; la tarea dice "crear función Z, editar archivo W".
- **C:** Ambos artefactos los usa el equipo completo (PM, diseño, devs).
- **D:** Son dos niveles distintos de abstracción y confundirlos lleva a malentendidos.

> **Clave:** "Historia = para quién y por qué. Tarea = cómo."

---

## CHECKPOINT Parte 1: Lectura activa del proyecto

### Verificar:
Cada estudiante tiene su análisis inicial escrito (entidades + alcance).

**¿Qué deberías ver en pantalla?**
- Lista de al menos 3 entidades del proyecto (Grupo, Persona, Gasto…).
- `ALCANCE.md` con al menos 4 ítems "dentro" y "fuera".

**Problemas comunes:**
- Confunden entidades con acciones ("crear gasto" no es entidad) → pregunta "¿es un sustantivo?".
- Listas de alcance muy cortas → empujar 2-3 ejemplos más de "fuera".

---

## CHECKPOINT Parte 2: Planificación por sprints

### Verificar:
`SPRINTS.md` con las 8 HU distribuidas y dependencias escritas.

**¿Qué deberías ver?**
- 4 HU en Sprint 1, 4 HU en Sprint 2 (o distribución propuesta con justificación).
- Al menos 1 dependencia documentada entre historias.
- Reto técnico principal identificado.

**Problemas comunes:**
- Todos colocan exactamente HU1-HU4 / HU5-HU8 sin pensarlo → pedir que justifiquen por qué.
- Nadie identifica dependencias → señalar que HU6 (transferencias) necesita HU5 (balance).

---

## CHECKPOINT Parte 3: Repositorio configurado

### Verificar:
Repositorio en GitHub con estructura + `index.html` cargando en Live Server.

**¿Qué deberías ver?**
- URL pública de GitHub con el repo visible.
- Estructura `css/` y `js/` con los 5 archivos vacíos.
- `index.html` muestra "En construcción…" sin errores en consola.
- Al menos un commit pusheado.

**Problemas comunes:**
- Repo privado → recordar que debe ser público.
- Script sin orden correcto → `state.js` debe ir antes que `ui.js`.

---

## REFLEXION: Historias bien escritas

| Historia floja | Historia sólida |
|----------------|-----------------|
| "Agregar gastos" | "Como usuario quiero registrar un gasto con descripción, monto y quién pagó, para llevar la cuenta" |
| Sin criterios de aceptación | Con criterios verificables (monto > 0, campo obligatorio, etc.) |

> **Regla memorable**: "Una historia sin criterios de aceptación es una esperanza, no un plan."

---

## REFLEXION: El MVP honesto

### Pregunta de consolidación

Si mañana te bloqueas 2 horas con el algoritmo de transferencias, ¿sacrificas HU6 o sacrificas HU5? ¿Por qué?

*(Pista: HU5 es el balance; HU6 son las transferencias sugeridas. Una depende de la otra.)*

---

## TRANSICION: Preview Clase 18

### Hoy lograste:
- Entender el enunciado del proyecto a profundidad.
- Distribuir las 8 historias entre Sprint 1 y Sprint 2.
- Configurar tu repo con estructura profesional y primer commit.

### Próxima clase:
- **Sprint 1 completo:** construyes HTML + CSS + lógica base y dejas HU1-HU4 funcionando.
- Llegarás con el repo listo y sales con una app que ya hace algo.
