---
name: class-infographic
description: Genera infografías pedagógicas en HTML/CSS a partir del contenido de una clase. Usar cuando se pida crear infografía, resumen visual, o material post-clase para WhatsApp.
allowed-tools: Read, Glob, Grep, Write, Edit
---

# Generador de Infografías de Clase

## Objetivo

Producir una infografía HTML autocontenida y un archivo de prompts para imágenes AI, a partir del contenido de una clase del curso. El instructor renderiza en browser, toma screenshot y comparte por WhatsApp post-clase. El layout está optimizado para lectura vertical en celular.

## Decisiones de Diseño

| Aspecto | Decisión |
|---------|----------|
| Bloques de contenido | Flexible: 3-5 (target 4) |
| Layout | Vertical mobile-first, ancho fijo 1080px, alto variable |
| Imágenes | Solo cuando HTML/CSS no logra transmitir el concepto |
| Archivo de prompts | `image-prompts.md` |

---

## Proceso de Generación

### Paso 1: Identificar clase y módulo

Determinar el número de clase (`X`) y módulo correspondiente. Usar fórmula:

```
Módulo = ceil(X / 4)
Posición en módulo = ((X - 1) % 4) + 1
```

### Paso 2: Leer recursos

Leer **todos** los archivos disponibles de la clase:

```
README.md                                    # Syllabus (fuente de verdad)
curriculum/class-{X}/README.md               # Tema, objetivos, glosario
curriculum/class-{X}/slides/README.md        # Conceptos enseñados
curriculum/class-{X}/lab/README.md           # Contenido práctico
curriculum/class-{X}/facilitator/README.md   # Analogías, conceptos clave
```

Si alguno no existe, continuar con los disponibles.

### Paso 3: Extraer bloques de contenido

Target: **4 bloques**. Rango permitido: **3-5**.

**MANTENER si cumple todo:**
- Tiene un modelo mental propio (es un concepto, no un paso)
- Sin él no se puede escribir código de este tema

**COMBINAR si:**
- Pertenecen a la misma categoría de acción (ej. color + font-size = propiedades visuales)
- Juntos forman un modelo mental más completo

**DESCARTAR si:**
- Es procedimiento de configuración (instalar, resetear)
- Es una referencia (tabla de colores, lista de comandos)
- Es jerga o diseño UX, no sintaxis viva
- Si quedan más de 5 bloques, descartar el de menor impacto pedagógico

**Fallback (< 3 bloques tras filtro):**
Relajar criterios progresivamente:
1. Incluir modelos conceptuales sin código (ej. arquitectura cliente-servidor)
2. Incluir tooling clave (ej. Live Server, DevTools)

**Bloques sin código:** Permitidos cuando el concepto es visual o conceptual.

### Paso 4: Generar `index.html`

Crear archivo en: `curriculum/class-{X}/infographic/index.html`

Ver secciones **Design System**, **Layout** y **Template: index.html** más abajo.

### Paso 5: Generar `image-prompts.md`

Crear archivo en: `curriculum/class-{X}/infographic/image-prompts.md`

Ver sección **Template: image-prompts.md** más abajo.

---

## Design System

```css
/* Fondo */
--bg: #060913;               /* con radial-gradient tenue para textura */

/* Fonts (Google Fonts) */
--font-title: 'Space Grotesk';
--font-body: 'Inter';
--font-code: 'JetBrains Mono';

/* Accent Colors */
--purple: #d946ef;
--green: #4ade80;
--blue: #93c5fd;
--orange: #fb923c;

/* Surfaces */
--card-bg: #0d1117;
--card-border: rgba(255, 255, 255, 0.06);

/* Text */
--text-primary: #e2e8f0;
--text-secondary: #94a3b8;
--text-muted: #64748b;
```

---

## Layout: Mobile-First Vertical

- **Ancho fijo:** `1080px` (óptimo para screenshot y WhatsApp)
- **Alto:** `auto` — crece según el contenido, no forzado
- **Estructura:** Columna única predominante, todo apilado verticalmente
- **Scroll:** Natural como una story — cada sección ocupa el ancho completo

### Patrones de Sección

| Patrón | Descripción |
|--------|-------------|
| **Hero** | Título + subtítulo + badge de módulo/clase |
| **Card Stack** | Bloques de concepto apilados verticalmente |
| **Feature** | Imagen + texto explicativo (stacked, o side-by-side si cabe) |
| **Glossary** | Términos clave en tira horizontal o lista vertical |
| **Footer** | Marca + número de clase |

### Reglas de Layout

- Cada sección ocupa el **ancho completo** del canvas
- Tarjetas con fondo `--card-bg` + bordes `--card-border` para delimitar bloques
- Espaciado generoso entre secciones (`2rem` mínimo)
- Sin grid 2x2 simétrico — si se usan columnas, que sean asimétricas o justificadas por el contenido

---

## Template: index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Tech] — [Lo que domina el alumno]</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    /* ── Reset ── */
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    /* ── Design System (reference) ──
       --bg: #060913; --card-bg: #0d1117; --card-border: rgba(255,255,255,0.06);
       --purple: #d946ef; --green: #4ade80; --blue: #93c5fd; --orange: #fb923c;
       --text-primary: #e2e8f0; --text-secondary: #94a3b8; --text-muted: #64748b;
    */

    /* ── Canvas ── */
    html { font-size: 19.2px; } /* 16px × 1.2 = +20% global */
    body {
      width: 1080px;
      margin: 0 auto;
      background: #060913;
      background-image: radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.08) 0%, transparent 60%);
      color: #e2e8f0;
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
    }

    /* ── Typography ── */
    h1, h2, h3 { font-family: 'Space Grotesk', sans-serif; }
    code, pre { font-family: 'JetBrains Mono', monospace; font-size: 0.9em; }
    pre {
      background: #161b22;
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 8px;
      padding: 1rem 1.25rem;
      overflow-x: auto;
    }

    /* ── Sections ── */
    section { padding: 2.5rem 3rem; }

    /* ── Hero ── */
    .hero {
      text-align: center;
      padding: 3.5rem 3rem 2.5rem;
    }
    .hero .badge {
      display: inline-block;
      background: rgba(217, 70, 239, 0.15);
      color: #d946ef;
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    .hero h1 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 0.5rem;
    }
    .hero .subtitle {
      font-size: 1.15rem;
      color: #94a3b8;
    }

    /* ── Cards ── */
    .card {
      background: #0d1117;
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 1.5rem;
    }
    .card h3 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }
    .card .desc {
      color: #94a3b8;
      margin-bottom: 1rem;
    }

    /* ── Accent borders ── */
    .accent-purple { border-left: 3px solid #d946ef; }
    .accent-green  { border-left: 3px solid #4ade80; }
    .accent-blue   { border-left: 3px solid #93c5fd; }
    .accent-orange { border-left: 3px solid #fb923c; }

    /* ── Glossary ── */
    .glossary {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .glossary .term {
      flex: 1 1 200px;
      background: #0d1117;
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 8px;
      padding: 1rem;
    }
    .glossary .term strong {
      display: block;
      margin-bottom: 0.25rem;
    }
    .glossary .term span {
      color: #94a3b8;
      font-size: 0.9rem;
    }

    /* ── Footer ── */
    .footer {
      text-align: center;
      padding: 2rem 3rem 3rem;
      color: #64748b;
      font-size: 0.85rem;
    }

    /* ── Images ── */
    .card img {
      max-width: 100%;
      border-radius: 8px;
      margin-top: 0.5rem;
    }
  </style>
</head>
<body>

  <!-- HERO -->
  <section class="hero">
    <div class="badge">Módulo X · Clase XX</div>
    <h1>[Tech] — [Lo que domina el alumno]</h1>
    <p class="subtitle">[Subtítulo descriptivo de 1 línea]</p>
  </section>

  <!-- BLOQUES DE CONTENIDO (3-5 cards) -->
  <section>
    <div class="card accent-purple">
      <h3>[Concepto 1]</h3>
      <p class="desc">[Definición en 1 línea]</p>
      <!-- Código de ejemplo O imagen, no ambos extensamente -->
      <pre><code>[código de ejemplo]</code></pre>
    </div>

    <div class="card accent-green">
      <h3>[Concepto 2]</h3>
      <p class="desc">[Definición en 1 línea]</p>
      <pre><code>[código de ejemplo]</code></pre>
    </div>

    <div class="card accent-blue">
      <h3>[Concepto 3]</h3>
      <p class="desc">[Definición en 1 línea]</p>
      <!-- Si este bloque necesita imagen: -->
      <img src="[concept-name].png" alt="[descripción]">
    </div>

    <div class="card accent-orange">
      <h3>[Concepto 4]</h3>
      <p class="desc">[Definición en 1 línea]</p>
      <pre><code>[código de ejemplo]</code></pre>
    </div>
  </section>

  <!-- GLOSARIO (opcional) -->
  <section>
    <div class="glossary">
      <div class="term">
        <strong>[Término]</strong>
        <span>[Definición breve]</span>
      </div>
      <!-- Repetir según necesidad -->
    </div>
  </section>

  <!-- FOOTER -->
  <section class="footer">
    [Nombre del Curso] — EnterTechSchool · Clase XX
  </section>

  <!-- ════════ EXPORT PNG ════════ -->
  <button id="export-btn" style="position:fixed;top:16px;right:16px;z-index:1000;background:rgba(13,17,23,0.85);color:#e2e8f0;border:1px solid rgba(255,255,255,0.12);padding:0.5rem 1.15rem;border-radius:999px;font-family:'Inter',sans-serif;font-size:0.85rem;font-weight:500;cursor:pointer;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);transition:opacity 0.2s">
    Exportar a PNG
  </button>

  <script>
  (function(){
    var btn = document.getElementById('export-btn');
    var originalText = btn.textContent;

    btn.addEventListener('click', function(){
      btn.disabled = true;
      btn.textContent = 'Exportando...';

      var script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      script.onload = function(){
        btn.style.display = 'none';
        document.fonts.ready.then(function(){
          html2canvas(document.body, { scale: 3, useCORS: true, windowWidth: 1080 }).then(function(canvas){
            var link = document.createElement('a');
            var title = document.title
              .toLowerCase()
              .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '');
            link.download = 'clase-XX-' + title + '.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            btn.style.display = '';
            btn.disabled = false;
            btn.textContent = originalText;
          }).catch(function(){
            btn.style.display = '';
            btn.disabled = false;
            btn.textContent = 'Error — Intenta de nuevo';
            setTimeout(function(){ btn.textContent = originalText; }, 2000);
          });
        });
      };
      script.onerror = function(){
        btn.disabled = false;
        btn.textContent = 'Error — Intenta de nuevo';
        setTimeout(function(){ btn.textContent = originalText; }, 2000);
      };
      document.head.appendChild(script);
    });
  })();
  </script>

</body>
</html>
```

> El template es una guía. Adaptar la cantidad de cards, colores de acento y secciones al contenido real de la clase.
> `[Nombre del Curso]` se obtiene del `README.md` raíz del repositorio (ej. "Code 101", "AI 101", "Code 301").
> **Exportar PNG:** Reemplazar `clase-XX-` en `link.download` con el número real de la clase (ej. `clase-05-`). Requiere internet para cargar html2canvas desde CDN (igual que Google Fonts).

---

## Template: image-prompts.md

```markdown
# Image Prompts — Clase XX: [Título]

> Prompts para generar imágenes con AI. Cada imagen corresponde a un `<img src="...">` en `index.html`.

---

## [concept-name].png

[Descripción de lo que debe mostrar el diagrama, layout y elementos.]

**OBLIGATORIO (colores):**
- Fondo: #0d1117 (dark, matchea --card-bg de la infografía)
- Texto/labels: #e2e8f0 (claro)
- [Elemento X]: #d946ef (púrpura) — para [razón]
- [Elemento Y]: #4ade80 (verde) — para [razón]

**PROHIBIDO:**
- Fondo blanco o claro
- Colores fuera de la paleta (#d946ef, #4ade80, #93c5fd, #fb923c)
- Texturas, gradientes 3D, elementos decorativos

**GRAYSCALE (todo lo demás):**
- Estructuras/bordes: #94a3b8
- Superficies: #161b22
- Texto secundario: #94a3b8

DIMENSIONS: 960x540 pixels
```

> Generar un bloque `## filename.png` por cada `<img src="...">` en el HTML.
> Si la infografía no necesita imágenes (todo es representable en HTML/CSS), este archivo solo contiene el header y una nota indicando que no se requieren imágenes.

---

## Reglas de Contenido

### Redacción

- **Título general:** `[Tech] — [Lo que domina el alumno]` (ej. "CSS — Cómo dar estilo a una web")
- **Cada bloque:** Nombre del concepto + 1 línea de definición + código de ejemplo (o imagen)
- **Cero jerga sin definir** — si usas un término técnico, explícalo en el bloque o en el glosario

### Imagen vs HTML/CSS

| Usar HTML/CSS | Solicitar imagen AI |
|---------------|---------------------|
| Sintaxis resaltada (código) | Espacial/flujo (box model, ejes flexbox) |
| Listas de propiedades con definición | Jerarquía (especificidad CSS, árbol DOM) |
| Tablas comparativas | Modelo conceptual (ciclo git, request-response) |
| Cualquier cosa textual/tabular | Valores visuales (comparativa de justify-content) |

### Restricción de redundancia

Si solicitas una imagen para un bloque, el HTML de ese bloque **solo** debe contener:
- Título (`h3`)
- Descripción corta (1 línea)
- Tag `<img>`

No duplicar en HTML la explicación que estará dentro de la imagen.

### Estilo de prompts para imágenes

- Fondo **oscuro `#0d1117`** (se funde con `--card-bg` de la infografía)
- Estructuras y bordes en **gris `#94a3b8`**, superficies en **`#161b22`**
- Texto principal en **`#e2e8f0`** (claro)
- Colores de acento **solo** de la paleta (`#d946ef`, `#4ade80`, `#93c5fd`, `#fb923c`)
- Formato de prompt con secciones **OBLIGATORIO / PROHIBIDO / GRAYSCALE** para forzar colores en generadores AI
- Sin texturas, gradientes 3D ni elementos decorativos

---

## Coherencia con Otros Recursos

La infografía es un **resumen visual post-clase**, no material de estudio independiente. Debe:

- Alinearse con los conceptos enseñados en `slides/README.md`
- Usar la misma terminología que `README.md` de la clase
- No introducir conceptos nuevos que no estén en el material de clase
- Complementar, no duplicar, el contenido del lab

---

## Validación Final

Antes de entregar, verificar:

- [ ] HTML autocontenido (dependencias externas: Google Fonts + html2canvas CDN para exportar)
- [ ] Ancho `1080px`, alto `auto`
- [ ] 3-5 bloques de contenido
- [ ] Cada `<img src="...">` tiene un bloque correspondiente en `image-prompts.md`
- [ ] Título sigue formato: `[Tech] — [Lo que domina el alumno]`
- [ ] Footer con número de clase y nombre del curso (leído del README.md raíz)
- [ ] Cero jerga sin definir
- [ ] Colores y fonts del Design System (no inventar nuevos)
- [ ] **Cero `var()` en CSS** — usar valores hardcoded (html2canvas no soporta custom properties)
- [ ] Botón "Exportar a PNG" presente con `clase-XX-` correcto en `link.download`
- [ ] Layout vertical optimizado para celular (no grids 2x2 simétricos)
- [ ] `image-prompts.md` usa formato OBLIGATORIO/PROHIBIDO con fondo oscuro `#0d1117`

---

## Ejemplo de Referencia

Ver `curriculum/class-03/infographic/` y `curriculum/class-04/infographic/` como implementaciones de referencia.
