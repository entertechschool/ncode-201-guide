# Rubrica - Lab Modulo 1: Product Landing Page

> 📋 **Documento interno para evaluadores**

## Informacion General

| Aspecto | Detalle |
|---------|---------|
| **Proyecto** | Product Landing Page |
| **Modulo** | M1 — Fundamentos de la Web Moderna |
| **Clase** | C04 — CSS Variables + Forms Validados + Git Workflow |
| **Puntaje Total** | 100 puntos |

---

## Criterios de Evaluacion

### 1. CSS Variables y estética (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | ≥10 tokens en `:root`, ≥6 reglas refactorizadas con `var()`, estética nueva (shadow + hover + título destacado) aplicada coherentemente |
| **Bueno** | 15 | ≥8 tokens, ≥4 reglas refactorizadas, estética nueva visible pero inconsistente en alguna sección |
| **Satisfactorio** | 10 | ≥5 tokens, ≥2 reglas refactorizadas, estética nueva mínima |
| **Bajo** | 5 | Hardcodes prevalecen, sin sistema de tokens reconocible |
| **No entregado** | 0 | No hay sistema de variables CSS |

**Aspectos evaluados:**
- Naming consistente de tokens (`--color-primary` no `--c1`)
- Uso de `var()` reemplaza valores hardcoded previos
- Estética nueva (no solo refactor: agregar shadow, hover, escalas tipográficas)
- Sitio coherente en todas las páginas con la nueva paleta

---

### 2. Formulario validado (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Los 3 escenarios de fallo bloquean el submit (vacío, email inválido, teléfono inválido), checkbox y select obligatorios, mensajes nativos en todos los campos |
| **Bueno** | 15 | Bloquea 2 de 3 escenarios, validación funciona en la mayoría de campos |
| **Satisfactorio** | 10 | Bloquea 1 escenario, validación parcial |
| **Bajo** | 5 | No bloquea el submit o no hay atributos de validación |
| **No entregado** | 0 | Formulario sin validación nativa |

**Aspectos evaluados:**
- Uso correcto de `required`, `type`, `pattern`, `minlength`
- `<select>` con opción default vacía y `required`
- `<input type="checkbox">` con `required`
- Mensajes de error visibles al intentar submit invalido

---

### 3. Git workflow (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Rama `feature/form-validado` creada, commits atómicos descriptivos, push, PR abierto y mergeado vía GitHub, `main` local sincronizado con `git pull` |
| **Bueno** | 15 | Flujo completo pero con 1-2 commits genéricos o push directo en algún momento |
| **Satisfactorio** | 10 | Rama creada y PR abierto, pero merge manual o sin sincronización local |
| **Bajo** | 5 | Push directo a `main` o sin uso de ramas/PRs |
| **No entregado** | 0 | Sin evidencia de uso de Git |

**Aspectos evaluados:**
- Rama feature creada y usada exclusivamente para el trabajo de validación
- Commits con mensajes descriptivos (no "fix" / "cambios")
- PR abierto en GitHub con descripción
- Merge realizado vía PR (no `git merge` directo en local)
- `git pull` post-merge para sincronizar `main` local

---

### 4. Presentación + argumentación técnica (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Demo de ≤3 min mostrando el sitio, explica con claridad ≥2 decisiones técnicas (tokens, validación o flujo Git), justifica uso de IA si aplica |
| **Bueno** | 15 | Demo fluida, explica 1 decisión técnica con argumentos sólidos |
| **Satisfactorio** | 10 | Demo entrega lo pedido pero argumentación superficial |
| **Bajo** | 5 | No presenta o no justifica decisiones técnicas |
| **No entregado** | 0 | Sin presentación |

**Aspectos evaluados:**
- Tiempo: máximo 3 min, uso eficiente
- Claridad al mostrar el sitio funcionando en vivo
- Argumenta al menos 2 decisiones técnicas (por qué elegiste estos tokens, por qué este flujo Git)
- Si usó IA: explica qué porción del código entiende técnicamente
- No se evalúa fluidez verbal ni nervios, sí evidencia de comprensión

---

### 5. Desafío: HU adicionales + deploy (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | ≥2 HU adicionales implementadas con criterios de aceptación cumplidos, sitio público funcional en GitHub Pages con las 3 páginas, README del repo con tabla de tokens + lista de validaciones |
| **Bueno** | 15 | 1 HU adicional implementada, deploy funcional, README documentado |
| **Satisfactorio** | 10 | Deploy funcional pero sin HU adicionales o README incompleto |
| **Bajo** | 5 | Sin deploy o sitio roto |
| **No entregado** | 0 | Sin entregable público |

**Aspectos evaluados:**
- Cada HU adicional implementada en su propia rama y mergeada vía PR
- Criterios de aceptación de cada HU verificables en el sitio público
- GitHub Pages cargando sin errores en las 3 páginas
- README del repo con tabla de tokens (nombre + valor + dónde se usa)
- README del repo con lista de validaciones (campo + atributo + descripción del error)

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
- [ ] URL de GitHub Pages funcional con las 3 páginas
- [ ] Screenshot del PR mergeado

### Documentacion
- [ ] README del repo con tabla de tokens (nombre + valor + dónde se usa)
- [ ] README del repo con lista de validaciones (campo + atributo + descripción del error)

### Verificacion Tecnica
- [ ] DevTools muestra que `var(--token)` se resuelve correctamente
- [ ] Intentar submit vacío del formulario bloquea con mensajes nativos
- [ ] El historial de Git muestra commits en rama + merge vía PR
- [ ] El sitio carga sin errores en consola

---

## Notas para el Evaluador

1. **No penalices nervios en la presentación.** Lo que se evalúa es la comprensión técnica, no fluidez verbal.
2. **El uso de IA está permitido**, pero el estudiante debe poder explicar técnicamente el código que entrega. Si no puede argumentar una decisión, baja el Criterio 4.
3. **Push directo a `main`** es el error más común — bajar Criterio 3 a "Bajo" aunque el sitio funcione perfecto.
4. **Las HU adicionales del Criterio 5** deben ir más allá del scope del lab (no contar la validación o los tokens, esos ya están en 1 y 2).

---

## Ejemplo de Retroalimentacion

### Retroalimentacion Positiva
> "Los tokens están bien nombrados (`--color-accent`, `--space-md`), la refactorización es limpia y el flujo Git muestra commits atómicos. La presentación argumentó por qué elegiste el shadow del hover sobre el del card — esa es la clase de razonamiento que buscamos."

### Areas de Mejora
> "El formulario valida 2 de 3 escenarios — el campo de teléfono acepta cualquier texto porque le falta el atributo `pattern`. Revisa la P3 del lab. Buen trabajo con los tokens y el deploy."
