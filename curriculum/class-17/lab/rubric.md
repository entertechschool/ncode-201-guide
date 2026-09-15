# Rúbrica - Lab Módulo 5: Mi Setlist (Proyecto Integrador Final)

> 📋 **Documento interno para evaluadores**

> ⚠️ **Nota especial:** Esta rúbrica evalúa el **Proyecto Integrador Final de M5**, que se entrega y presenta en el **Demo Day (Clase 20)**. La Clase 17 es el kickoff de planificación; el MVP se construye durante los Sprints 1 y 2 (Clases 18-19) con la IA como copiloto. La rúbrica se publica desde C17 para que el estudiante la conozca desde el primer día del módulo.

## Información General

| Aspecto | Detalle |
|---------|---------|
| **Proyecto** | Mi Setlist (iTunes Search API + playlists persistidas) |
| **Módulo** | M5 — Proyecto Integrador (Code 201 Final) |
| **Clase** | C17 (kickoff) → C20 (Demo Day, entrega y presentación) |
| **Puntaje Total** | 100 puntos. Aprobación mínima: 70/100 |

---

## Criterios de Evaluación

### 1. Funcionalidades del MVP (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | Los 10 puntos del MVP implementados y funcionando al 100% |
| **Bueno** | 15 | 8-9 puntos funcionales, 1-2 con bugs menores que no rompen el flujo |
| **Satisfactorio** | 10 | 6-7 puntos funcionales, el resto incompletos |
| **Bajo** | 5 | <6 puntos funcionales o el flujo principal roto |
| **No entregado** | 0 | App no funciona o sin MVP entregable |

**Aspectos evaluados (los 10 del MVP):**
- Búsqueda en la API con resultados visuales (carátula, nombre, artista, duración)
- Estados de carga / error / vacío en la búsqueda
- Crear playlists con nombre; agregar canciones desde resultados
- Ver contenido de playlist con fecha de agregado
- Quitar canciones / eliminar playlists con modal de confirmación propio
- Duración total formateada + estadísticas (canciones, género top, artista top)
- Ordenar canciones (fecha y alfabético)
- Persistencia completa + recuperación ante datos corruptos ("Empezar de cero")

---

### 2. Calidad Técnica (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | Contrato técnico respetado por completo: ESM, estado central + render, CRUD inmutable, try/catch en storage, delegación de eventos |
| **Bueno** | 15 | Arquitectura correcta con desvíos menores (alguna mutación aislada, un listener por ítem) |
| **Satisfactorio** | 10 | Funcional pero monolítico o sin manejo de errores en localStorage |
| **Bajo** | 5 | Código sin estructura, estado fragmentado, contrato ignorado |
| **No entregado** | 0 | Sin estructura técnica reconocible |

**Aspectos evaluados:**
- Módulos ESM: `models/Cancion.js`, `state.js`, `storage.js`, `api.js`, `ui.js`, `app.js` con `import`/`export`
- Patrón "cambias estado → guardar() → render()"
- CRUD inmutable (`.filter`/`.map`/spread) e ids con `crypto.randomUUID()`
- `storage.js` con `try/catch` y rehidratación de fechas
- Adaptación del JSON de la API a un modelo propio limpio
- HTML semántico, CSS responsivo

---

### 3. Uso Responsable de IA + HU Propia (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | `PROMPTS.md` con prompts contextualizados (contrato + HU) y decisiones registradas (10) + ≥1 HU propia completa con criterios cumplidos (10) |
| **Bueno** | 15 | `PROMPTS.md` completo + HU propia implementada con detalles menores pendientes |
| **Satisfactorio** | 10 | Solo una de las dos mitades cumplida (registro O HU propia) |
| **Bajo** | 5 | `PROMPTS.md` de trámite (prompts sueltos sin contexto) y HU propia no funcional |
| **No entregado** | 0 | Sin registro de IA y sin HU propia |

**Aspectos evaluados:**
- Los prompts muestran el método del módulo: contexto (contrato) + tarea + formato + restricciones
- Las 2 HUs propias están definidas en `HISTORIAS.md` con criterios orientados a resultado
- La HU propia implementada funciona y está en la demo
- Coherencia: lo que dice `PROMPTS.md` coincide con lo que el alumno explica en Q&A

---

### 4. Presentación en Vivo — Demo Day (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | Demo clara en ≤10 min sobre la URL pública: flujo completo (buscar → agregar → stats → ordenar → eliminar con modal → recargar) + HU propia, sin errores en vivo |
| **Bueno** | 15 | Cubre el flujo principal pero omite una funcionalidad o tiene 1-2 tropiezos |
| **Satisfactorio** | 10 | Entrega lo pedido pero excede tiempo u omite funcionalidades importantes |
| **Bajo** | 5 | Demo confusa, sin flujo completo, app falla sin plan B |
| **No entregado** | 0 | Sin presentación |

**Aspectos evaluados:**
- La demo corre sobre el deploy público (no localhost, salvo plan B declarado)
- La recarga en vivo demuestra la persistencia
- El modal de confirmación propio aparece al eliminar
- La HU propia se muestra como cierre
- No se evalúan nervios ni fluidez verbal

---

### 5. Argumentación Técnica + Q&A (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | Justifica ≥2 decisiones (≥1 sobre la IA: qué pidió, qué recibió, qué cambió y por qué) y explica correctamente el fragmento de código que el instructor elija |
| **Bueno** | 15 | Justifica 1 decisión con claridad; responde el Q&A con dificultad pero correcto |
| **Satisfactorio** | 10 | Argumentación superficial; en Q&A describe el código sin explicar el porqué |
| **Bajo** | 5 | No justifica decisiones o no puede explicar su propio código |
| **No entregado** | 0 | Sin argumentación |

**Aspectos evaluados:**
- Al menos una decisión narra el ciclo con la IA (propuesta → crítica → decisión propia)
- El Q&A se hace sobre el repo del alumno: el instructor elige el fragmento (adaptador de API, CRUD inmutable, stats o HU propia)
- **Regla de oro del módulo:** código que el alumno no puede explicar baja este criterio, aunque la app funcione

---

## Escala de Calificación

| Rango | Nota | Descripción |
|-------|------|-------------|
| 90-100 | A | Excelente — Dominio completo del curso Code 201 |
| 80-89 | B | Bueno — Comprensión sólida con áreas menores a mejorar |
| 70-79 | C | Satisfactorio — Cumple requisitos mínimos de aprobación |
| < 70 | F | No aprueba — Requiere completar trabajo antes del cierre |

---

## Checklist de Entrega

### Archivos Requeridos
- [ ] URL del repositorio público en GitHub
- [ ] URL del deploy en GitHub Pages funcional
- [ ] Commits frecuentes durante los Sprints 1 y 2 (no solo del día final)

### Documentación
- [ ] `README.md` del repo: descripción, stack, HUs implementadas (base + propias), decisiones técnicas, cómo correr
- [ ] `HISTORIAS.md` con las HUs derivadas en C17 + las 2 propias
- [ ] `PROMPTS.md` con el registro del trabajo con la IA

### Verificación Técnica
- [ ] Buscar → agregar a playlist → recargar: todo persiste
- [ ] Duración total y estadísticas correctas con ≥5 canciones
- [ ] Corromper LocalStorage manualmente → la app ofrece "Empezar de cero", no crashea
- [ ] El sitio público carga sin errores en consola

---

## Notas para el Evaluador

1. **No penalices nervios.** Se evalúa comprensión técnica, no fluidez verbal.
2. **La IA es parte oficial del flujo** — lo que se evalúa es la dirección y validación, nunca "cuánta IA usó". Un `PROMPTS.md` corto y honesto vale más que 20 prompts pegados.
3. **El fragmento del Q&A elígelo tú** cruzando el repo con tus notas de C18-C19 (HU propia prometida, zonas frágiles vistas en rondas).
4. **Si la respuesta del Q&A suena memorizada**, repregunta con una variación pequeña ("¿y si quisiera ordenar por artista?").
5. **Commits solo del día final** = no siguió el ritmo de sprints → baja Criterio 2.
6. **Aprobación mínima 70/100.** Si es < 70, el estudiante completa el trabajo faltante antes del cierre formal.

---

## Ejemplo de Retroalimentación

### Retroalimentación Positiva
> "El MVP completo funciona sobre el deploy, la recarga en vivo demostró la persistencia y tu modal propio se ve profesional. Tu argumentación sobre por qué rechazaste el debounce que te propuso la IA (rate limit + simplicidad) fue exactamente el tipo de criterio que buscamos. La HU propia de favoritos con filtro está bien lograda y tu explicación del adaptador de la API en el Q&A fue precisa."

### Áreas de Mejora
> "La búsqueda y las playlists funcionan, pero al corromper LocalStorage la app muestra 'Cannot read property' en vez de ofrecer 'Empezar de cero' — revisa el try/catch de `storage.js` y la validación de estructura. En el Q&A pudiste describir qué hace `calcularEstadisticas` pero no por qué es una función pura que recibe el estado; repasa datos derivados (C14). Tu `PROMPTS.md` registra prompts pero no las decisiones que tomaste — el registro es de decisiones, no solo de pedidos."
