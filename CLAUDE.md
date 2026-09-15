# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Repositorio del curso **Code 201 — Fundamentals of Software Development** de EnterTechSchool. Sitio estático generado con Jekyll y publicado en GitHub Pages. No hay servidor de aplicación, base de datos ni framework JavaScript.

## Flujo de trabajo

No hay Gemfile local ni pipeline de CI propio. El build lo ejecuta GitHub Pages automáticamente al hacer push.

```bash
# Desarrollo: trabajar en rama de trabajo, pushear para ver en Pages
git push origin v2-sin-empresa

# Cuando Donatto dé luz verde, merge a main
# (Pages está configurado para desplegar desde v2-sin-empresa mientras se revisa)
```

Para validar Markdown antes de pushear, ejecutar el skill `lint-markdown` desde Claude Code.

## Fuente de verdad (jerarquía)

```
README.md (sílabo)  →  context/course_syllabus.md  →  archivos de clase
```

Si un archivo de clase contradice `README.md`, el sílabo gana. Leer siempre `README.md` antes de generar o modificar contenido de clase.

## Arquitectura del contenido

```
curriculum/class-{01..20}/
  README.md          # Resumen pre-clase para el estudiante
  lab/README.md      # Laboratorio paso a paso
  slides/README.md   # Presentación reveal.js (separador ---)
  facilitator/README.md  # Guía pedagógica (solo instructores)
  test/              # Solo class-12 está activo (test diagnóstico M3)
  project/           # Proyectos integradores (clases 04, 08, 12, 16, 17)
```

Las skills de generación viven en `.claude/skills/`. El pipeline para un módulo nuevo es:

```
module-planner → class-readme → class-lab → class-slides → class-facilitator
→ module-test → evaluation-class → lint-markdown
```

## Jekyll — cosas no obvias

**Layouts disponibles:**
- `default` — layout principal con header Enter, sección centrada, footer
- `minimal` — layout limpio sin chrome, usado por páginas de respuesta del test (`tests/t0X/`)

**Liquid gotcha:** cualquier `{{` en un archivo `.md` que Jekyll procese rompe el build ("could not find expected ':'"). Si un archivo tiene `{{` en ejemplos de código, o excluirlo en `_config.yml` o escapar con `{% raw %}...{% endraw %}`.

**`_config.yml` exclude activo:**
```yaml
exclude:
  - dev/          # notas internas — NO publicar
  - tests/        # tests t01-t06 ocultos, no eliminados
  - curriculum/class-04/test/   # M1 — oculto
  - curriculum/class-08/test/   # M2 — oculto
  - curriculum/class-16/test/   # M4 — oculto
  # class-12/test/ es el ÚNICO test activo (M3, 5 preguntas)
```

**Links en Markdown:**
```markdown
# Externos: SIEMPRE con {:target="_blank"}
[MDN](https://developer.mozilla.org/){:target="_blank"}

# Internos: NUNCA con target
[Clase 01](../class-01/)
```

## Convenciones de contenido

- **Idioma:** Español latinoamericano, UTF-8 puro (tildes directas, nunca `\u00XX`)
- **Límites:** README ≤150 líneas, lab ≤200, slides ≤13, facilitator <300
- **Gaps en labs:** estilo `comment-placeholders` (`// TU CÓDIGO AQUÍ`)
- **Checkpoints:** describir lo que el estudiante debe VER en pantalla (estilo visual)
- **MAX_TWO_NEW_TOOLS:** máximo 2 APIs/herramientas nuevas por clase
- **Emojis:** estratégicos en headers, no decorativos

## Estado actual de la rama `v2-sin-empresa`

- Reformulación completa del Módulo 5 aplicada (proyecto "Agenda de Gastos Compartidos")
- Pendiente: feedback de Donatto → merge a `main` → restaurar Pages a `main`
- Hub del instructor: `instructor-hub/README.md` (URL pública: `https://entertechschool.github.io/ncode-201-guide/instructor-hub/`)
- Donatto no tiene acceso al repo; solo ve el hub vía GitHub Pages

## Archivos clave de referencia

| Archivo | Propósito |
|---|---|
| `README.md` | Sílabo del curso (fuente de verdad) |
| `AGENTS.md` | Reglas completas para agentes: convenciones, scaffolding, pipeline, principios pedagógicos |
| `context/course_syllabus.md` | Detalle pedagógico por módulo (proyectos, subtemas, enfoques) |
| `instructor-hub/README.md` | Hub público de links para el instructor |
| `curriculum/class-17/project/README.md` | Fuente de verdad del Proyecto Integrador M5 (8 HUs, rúbrica) |
| `_config.yml` | Config de Jekyll + lista de exclusiones del build |
| `.claude/skills/` | Skills compartidas de generación de contenido |
