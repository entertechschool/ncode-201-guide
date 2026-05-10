> 📦 **Módulo 1:** Clase 4 de 4 — Lab CALIFICADO

# Clase 04: CSS Moderno y Git Workflow

## Resumen
En la Clase 04 consolidas tu base de frontend profesional con tres herramientas que vas a usar en cada proyecto del curso: **CSS Variables (`:root`)** para refactorizar tu landing sin librerías, **formularios validados con HTML nativo** (`required`, `type`, `pattern`, `<select>`, `<input type="checkbox">`) y un **Git workflow profesional** completo (branches, commits, Pull Requests y resolución de conflictos). Es la última clase del M1, evaluada con rúbrica.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
| --- | --- | --- |
| **1. Introducción y contexto** | 15 min | Por qué Variables CSS reemplazan al "modo framework" para muchos proyectos; por qué forms validados con HTML nativo son crucial para M5; por qué el flujo Git profesional importa. |
| **2. Parte 1 – CSS Variables** | 20 min | Refactorizar el landing extrayendo colores, espacios y tipografía a `:root { --token }`. |
| **3. Parte 2 – Formularios validados** | 25 min | Sobre el form de C01, agregar `required`, `type="email"`, `pattern`, `minlength`, `<select>`, `<input type="checkbox">`. |
| **4. Parte 3 – Git workflow** | 20 min | Branch `feature/contacto-validado`, commits progresivos, push, Pull Request, merge. |
| **5. Parte 4 – Desafío: Merge conflict** | 15 min | Resolver un conflicto prefabricado entre 2 ramas, eliminar marcadores, commit de resolución. |
| **6. Parte 5 – Deploy** | 10 min | Push a `main`, verificar GitHub Pages, agregar URL al README. |
| **7. Cierre y Síntesis** | 15 min | Discusión: Variables CSS vs framework, validación nativa vs JS, flujo Git profesional. |

> ⚠️ **Lab calificado:** Esta clase es la única calificada del M1. La P4 (Desafío Merge Conflict) puede completarse post-clase si el tiempo no alcanza.

---

## 📌 Preparación para la clase

> Antes de llegar a clase, piensa en estas preguntas y conversa con tus compañeros si lo deseas:

#### 🧠 Preguntas para reflexionar

1. ¿Qué problema resuelve definir colores en `:root` en vez de repetirlos en cada regla CSS?
2. ¿Cuándo una validación nativa (`required`, `type="email"`) es suficiente y cuándo necesitas JavaScript?
3. ¿Qué diferencia hay entre `pattern` y `minlength`?
4. ¿Por qué nadie debería pushear directo a `main` en un equipo profesional?
5. ¿Qué pasa si dos ramas modifican la misma línea de un archivo? ¿Quién decide qué versión sobrevive?

#### 📚 Recursos sugeridos

- [CSS Custom Properties (MDN)](https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties){:target="_blank"}
- [Validación nativa de formularios (MDN)](https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation){:target="_blank"}
- [Pro Git Book — Branching](https://git-scm.com/book/es/v2/Ramificaciones-en-Git-%C2%BFQu%C3%A9-es-una-rama%3F){:target="_blank"}
- [Resolver conflictos de merge (GitHub Docs)](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line){:target="_blank"}

---

## Resultados esperados

Al concluir la Clase 04, los estudiantes habrán consolidado las bases de frontend profesional que aplicarán en cada módulo del curso. En detalle:

### Podrán hacer
1. **Refactorizar con CSS Variables**: extraer colores, espacios y tipografía a `:root` y aplicar `var(--token)` en sus reglas.
2. **Validar formularios con HTML nativo**: usar `required`, `type`, `pattern`, `minlength` para validación sin JavaScript.
3. **Trabajar con Git profesionalmente**: crear branches, hacer commits atómicos, abrir Pull Requests, resolver conflictos y mergear.

### Podrán explicar
1. **Por qué Variables CSS reemplazan al "modo framework"** para muchos proyectos: consistencia sin agregar librería.
2. **Cuándo validación nativa es suficiente y cuándo necesitas JS**: nativa para formato y obligatoriedad; JS para reglas de negocio.
3. **Por qué el flujo branch + PR + merge** protege la rama `main` y permite revisión de código.

### Podrán implementar
1. **Sistema de tokens CSS** en `:root` aplicado al landing.
2. **Formulario con validación nativa completa**: `required`, `type="email"`, `pattern`, `<select>`, `<input type="checkbox">`.
3. **Workflow Git completo**: branch → commits → push → PR → merge → resolver un conflicto manual.

## Glosario de Nuevos Términos

- **CSS Custom Property (Variable CSS):** Token definido con `--nombre` en `:root` y usado con `var(--nombre)`.
- **Validación nativa**: Reglas que el navegador valida sin JavaScript, declaradas en HTML (`required`, `type`, `pattern`, `minlength`).
- **`pattern`:** Atributo de `<input>` que recibe una regex para validar el formato del valor.
- **Rama (Branch):** Línea independiente de desarrollo en Git para trabajar en funcionalidades específicas.
- **Pull Request:** Solicitud para fusionar cambios de una rama a la principal tras revisión.
- **Merge conflict:** Situación en que dos ramas modifican la misma porción de un archivo y Git no puede resolverlo automáticamente. Se identifica por marcadores `<<<<<<<`, `=======`, `>>>>>>>` en el archivo.
