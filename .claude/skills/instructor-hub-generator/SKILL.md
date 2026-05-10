---
name: instructor-hub-generator
description: Genera el archivo instructor-hub/README.md para cualquier repositorio de curso de EnterTechSchool (code-101, code-201, data-101, etc.). Úsalo cuando el usuario pida crear o regenerar el hub de navegación para instructores, compartir links del curso con un nuevo instructor, o mapear el contenido de un repositorio de curso a sus URLs de GitHub Pages. El skill lee la estructura del repositorio actual y produce un documento Markdown centralizado con todos los links directos a los materiales publicados.
---

# Instructor Hub Generator

Genera un `instructor-hub/README.md` centralizado que mapea todos los materiales de un curso de EnterTechSchool a sus URLs en GitHub Pages, para que un nuevo instructor acceda a todo con un solo clic sin necesitar permisos al repositorio.

> **¿Por qué `instructor-hub/README.md` y no `INSTRUCTOR-HUB.md`?** GitHub Pages solo sirve como URL navegable los archivos `README.md` dentro de carpetas. Un archivo `.md` suelto en la raíz no tiene URL pública accesible; en cambio, `instructor-hub/README.md` queda publicado en `https://entertechschool.github.io/{repo-name}/instructor-hub/`.

## Paso 1: Descubrir el repositorio

Ejecuta este comando para obtener la URL del remote y derivar el nombre del repo:

```bash
git remote get-url origin
```

Del resultado, extrae:
- **`{repo-name}`**: la última parte de la URL (ej. `code-101-guide`, `data-101-guide`)
- **`{course-prefix}`**: el `repo-name` sin el sufijo `-guide` (ej. `code-101`, `data-101`)
- **Base URL de GitHub Pages**: `https://entertechschool.github.io/{repo-name}/`
- **Patrón de slides**: `https://entertechschool.github.io/public/slides/?class={course-prefix}_XX`

Si `git remote` falla, usa el nombre del directorio raíz del repositorio como fallback.

## Paso 2: Descubrir la carpeta de curriculum

Busca la carpeta que contiene las clases en este orden de prioridad:

1. `curriculum/` — convención estándar de EnterTechSchool
2. Si no existe, lista todas las carpetas en la raíz y busca la que contenga subcarpetas con patrón `class-XX`, `session-XX`, `clase-XX`, o simplemente carpetas con nombres numéricos (`01/`, `02/`)
3. Si aún no se identifica, revisa un nivel más de profundidad

Una vez encontrada, lista todas las subcarpetas de clase y ordénalas numéricamente.

## Paso 3: Leer la fuente de verdad

Lee el `README.md` de la raíz del repositorio. Extrae:
- **Nombre del curso** (para el título del hub)
- **Módulos**: nombre de cada módulo y qué clases abarca
- **Proyecto integrador** de cada módulo
- **Título o tema** de cada clase (la columna "Tema" de las tablas de contenido)
- **Qué clases tienen lab evaluado** (por convención, la última clase de cada módulo)

Si el README no existe o no tiene esta información estructurada, infiere lo que puedas revisando los archivos `README.md` dentro de cada carpeta de clase.

## Paso 4: Analizar cada carpeta de clase

Para cada carpeta de clase encontrada, detecta qué subdirectorios existen. Los tipos de documento estándar son:

| Ícono | Subcarpeta | Nombre del documento |
|-------|------------|----------------------|
| 📄 | *(carpeta raíz de la clase)* | Resumen de la clase |
| 🧪 | `lab/` | Laboratorio |
| 🖥️ | `slides/` | Presentación |
| 🎓 | `facilitator/` | Guía del Facilitador |
| 📝 | `test/` | Test Diagnóstico |

Si una carpeta de clase tiene subdirectorios que no siguen este patrón estándar, inclúyelos igual con un ícono genérico 📁 y el nombre de la carpeta como etiqueta.

Marca con ⭐ la última clase de cada módulo (lab evaluado).

## Paso 5: Construir las URLs

Para cada documento detectado, construye la URL de GitHub Pages:

```
{base-url}curriculum/{class-folder}/{subdirectory}/
```

Ejemplo para la clase 09, lab, del repositorio `code-101-guide`:
```
https://entertechschool.github.io/code-101-guide/curriculum/class-09/lab/
```

Para el resumen de la clase (carpeta raíz), la URL termina en la carpeta de la clase:
```
https://entertechschool.github.io/code-101-guide/curriculum/class-09/
```

## Paso 6: Generar el instructor-hub/README.md

Crea el archivo `instructor-hub/README.md` en la raíz del repositorio usando esta estructura exacta. Adapta el contenido al curso detectado.

> **Importante:** El archivo debe ser `instructor-hub/README.md` (dentro de una carpeta), NO `INSTRUCTOR-HUB.md` en la raíz. Solo los `README.md` dentro de carpetas son servidos por GitHub Pages como URLs navegables.

### Estructura del archivo

```markdown
# 📚 {Nombre del Curso} — Hub del Instructor

> Acceso rápido a todos los materiales del curso. Haz clic en cualquier enlace para abrir la vista directamente.

---

## 🗺️ Leyenda de Documentos

Cada clase cuenta con los siguientes documentos:

| Ícono | Documento | ¿Para quién? | Descripción |
|-------|-----------|--------------|-------------|
| 📄 | **Resumen de la clase** | Estudiante (pre-clase) | Resumen del tema, objetivos y material de preparación antes de llegar a la sesión. |
| 🧪 | **Laboratorio** | Estudiante (en clase) | Guía paso a paso de la práctica que se realiza durante la sesión. |
| 🖥️ | **Presentación** | Instructor (en clase) | Slides para conducir la explicación teórica. |
| 🎓 | **Guía del Facilitador** | Instructor (pre-clase) | Notas pedagógicas, tips de facilitación y contexto de la sesión. Lectura opcional pero recomendada. |
| 📝 | **Test Diagnóstico** | Estudiante (al cierre) | Evaluación al final del módulo. No afecta calificación — es control interno de avance. |

> ⭐ Las clases marcadas con estrella corresponden al **lab evaluado del módulo**.

---

> [!IMPORTANT]
> ### 🖥️ Acceso a Presentaciones — URL Patrón
>
> Para abrir la presentación de **cualquier clase**, usa la siguiente URL reemplazando `XX` con el número de clase (con ceros: `01`, `02` ... `12`):
>
> ```
> https://entertechschool.github.io/public/slides/?class={course-prefix}_XX
> ```
>
> **Ejemplos:**
> | Clase | URL directa |
> |-------|-------------|
> | Clase 01 | `https://entertechschool.github.io/public/slides/?class={course-prefix}_01` |
> | Clase 06 | `https://entertechschool.github.io/public/slides/?class={course-prefix}_06` |
> | Clase 12 | `https://entertechschool.github.io/public/slides/?class={course-prefix}_12` |

---

## {Ícono} Módulo N: {Nombre del Módulo}

**Proyecto:** {Nombre del proyecto integrador}

### Clase XX — {Tema de la clase}

| Documento | Enlace |
|-----------|--------|
| 📄 Resumen de la clase | [Ver Clase XX]({url}){:target="_blank"} |
| 🧪 Laboratorio | [Ver Lab XX]({url}/lab/){:target="_blank"} |
...

### ⭐ Clase XX — {Tema} *(Lab Evaluado)*
...

---

## 🗂️ Vista Rápida — Todos los Labs

| Clase | Tema | Lab | Tipo |
|-------|------|-----|------|
| 01 | {Tema} | [Lab 01]({url}){:target="_blank"} | Regular |
| **04** | **{Tema}** | [**Lab 04**]({url}){:target="_blank"} | ⭐ **Evaluado M1** |
...

---

*{Nombre del Curso} · EnterTechSchool*
```

### Reglas de formato

- Todos los links externos usan `{:target="_blank"}` (sintaxis Kramdown para GitHub Pages)
- Las clases evaluadas van en **negrita** en la tabla de vista rápida
- El tipo en la tabla de labs dice `Regular` o `⭐ Evaluado M{N}` (o `⭐ Demo Day M{N}` si es la última clase del curso)
- Los módulos se separan con `---`
- Si el curso tiene un número distinto de clases por módulo, agrupa según lo que indique el README

## Reglas generales

- Si no puedes determinar el nombre del módulo desde el README, usa `Módulo {N}` como fallback
- Si no puedes determinar el tema de una clase, usa el número de clase como fallback: `Clase {XX}`
- Si un tipo de documento no existe en una carpeta de clase (ej. no hay `test/`), no lo incluyas en esa clase
- Si hay tipos de documento no estándar, inclúyelos con su carpeta como nombre y el ícono 📁
- Siempre confirma al usuario la ruta del archivo generado al terminar, indicando también la URL pública: `https://entertechschool.github.io/{repo-name}/instructor-hub/`
