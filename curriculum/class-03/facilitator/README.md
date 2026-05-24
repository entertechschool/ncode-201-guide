# Guía del Facilitador - Clase 03: CSS Grid (esencial → intermedio → `grid-template-areas`)

> Tiempo de lectura: 8 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Enlaces multi-página + rutas relativas + icono SVG con `aria-label`**: `href="precios.html"`, `href="faq.html"`. El enlace FAQ se reemplaza por un icono SVG con `aria-label="Preguntas frecuentes"` — patrón moderno de UI.
- **Grid básico mobile-first**: en móvil solo `display: grid` (1 columna por defecto); media queries añaden columnas (`1fr 1fr` tablet, `1fr 1fr 1fr 1fr` y `repeat(4, 1fr)` desktop).
- **Grid intermedio**: `repeat(auto-fit, minmax(150px, 1fr))` aplicado a la sección "Marcas que confían" donde la cantidad de logos puede variar — sin media queries.
- **`grid-template-areas`**: el feature distintivo de Grid. Layouts 2D con regiones nombradas. **Flex NO puede.**
- **Heurística Grid vs Flex**: "Grid 2D, Flex 1D".

---

## 🔗 Analogías Útiles

**Grid `repeat(N, 1fr)` <> Cortar una pizza en N tajadas iguales:**
Le dices cuántas porciones quieres y cuánta separación. Cada porción es igual de grande. Listo.

**`auto-fit + minmax` <> Acomodar libros en una repisa:**
Cada libro tiene un ancho mínimo (no se aplasta). Si caben 5, hay 5. Si solo caben 3, baja a 3. La repisa decide sola.

**`grid-template-areas` <> Plano arquitectónico con nombres de habitaciones:**
Dibujas el plano: "sala sala cocina / comedor habitación habitación". Cada habitación tiene un nombre. Después decoras cada una con su mobiliario.

**Grid vs Flex <> Tablero de ajedrez vs Fila de personas:**
Ajedrez: cuadrícula 2D, cada pieza tiene su casilla. Fila: 1D, personas una al lado de otra. Ambas válidas — para distintos problemas.

---

## 📚 Contexto Actual

### `grid-template-areas`: el "Lego" de los layouts

Antes de Grid, hacer un layout de "header + sidebar + main + footer" requería floats con bugs, posicionamiento absoluto frágil o frameworks complejos. Con `grid-template-areas` literalmente DIBUJAS el layout con palabras y CSS hace el resto. **Es lo más cercano a "WYSIWYG en código" que existe en CSS.**

> **Para contar en clase:** "Cuando ven dashboards de Slack, Notion, GitHub — todos esos layouts complejos hoy se hacen con `grid-template-areas`. En 2015 esto era imposible sin hacks. Hoy es 5 líneas de CSS."

### `auto-fit + minmax`: el patrón que mata las media queries (cuando aplica)

Equipos como Netflix, Spotify y Google usan `repeat(auto-fit, minmax(...))` para sus grids de catálogo (cantidades variables que vienen de DB). El número de columnas se ajusta al dispositivo automáticamente — desde un móvil de 320px hasta un monitor 4K — sin un solo `@media`. **Pero solo aplica cuando la cantidad de items varía** — para 4 cards fijas con control fino por dispositivo, las media queries explícitas siguen ganando. Por eso en este lab se aplican en lugares distintos: media queries para `.planes` (fijo), `auto-fit + minmax` para `.logos` (variable).

**Fuentes:** [MDN: CSS Grid Layout](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout){:target="_blank"}, [Grid by Example (Rachel Andrew)](https://gridbyexample.com){:target="_blank"}

---

## 🎯 Momentos Clave de la Clase

### Demo Principal — `grid-template-areas` en vivo

**Qué mostrar:** 5 minutos. Toma un layout que con Flex sería un dolor (header + sidebar + main + footer) y resuélvelo en VIVO con `grid-template-areas`. Dibuja primero el layout en pizarra con palabras. Después transcribe a CSS. El alumno ve que el código CSS es **literalmente lo que dibujaste**.

**Script sugerido:**
```
Facilitador: "Voy a dibujar el layout que queremos. En la pizarra:
   header  header
   nav     main
   footer  footer
[Pizarra con dibujo]
Facilitador: "Ahora voy a copiar este dibujo TAL CUAL al CSS:
grid-template-areas:
  'header header'
  'nav    main'
  'footer footer';
Ven? Lo que dibujé en pizarra es el CSS. No hay magia."
[Asigna grid-area a cada elemento, refresca, layout aparece]
Facilitador: "¿Qué pasa si quiero el nav a la derecha? Cambio una línea:
  'main nav' en vez de 'nav main'.
Eso es todo. Sin tocar el HTML."
```

**Plan B (si la demo falla):** CodePen pre-creado con el ejemplo funcionando. Demuestra el cambio nav-izquierda → nav-derecha en vivo.

### Transición al Lab

**Momento crítico:** Los alumnos verán Grid esencial y dirán "OK, parecido a Flex". El click conceptual sucede en la Parte 2 con `grid-template-areas`. Refuérzalo.

**Script sugerido:**
```
Facilitador: "Parte 1 y intermedio son fáciles — Grid es como Flex pero
para grids. Parte 2 es donde Grid se vuelve INSUSTITUIBLE.
Cuando vean que Flex no puede hacer lo que ustedes van a hacer
en faq.html, entenderán para qué existe Grid."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Resuélvelo con Flex (no puedes)"

Después de aplicar `grid-template-areas` en `faq.html`:

> "¿Pueden hacer el mismo layout (header arriba + sidebar a la izquierda + main a la derecha + footer abajo) con Flex puro? Inténtenlo en 3 minutos."

**Dinámica sugerida:**
```
Facilitador: "Pueden intentar con flex-direction: column en body...
pero el sidebar y main son hermanos del header y footer.
Necesitarían anidar Flex, cambiar HTML, hacer hacks.
En cambio con Grid son 5 líneas. ESA es la diferencia."
```

### Dinámica 2: "Achica el navegador SIN DevTools"

En la Parte 1.5, después de aplicar `auto-fit + minmax` a la sección Marcas:

> "Sin abrir DevTools, agarra el borde derecho del navegador y achica lentamente. ¿Qué pasa con los 6 logos?"

**Dinámica sugerida:**
```
Facilitador: "6 → 4 → 3 → 2 columnas. Sin un solo @media.
Y si mañana agregamos 10 logos más? Funciona igual.
Por eso aquí SÍ usamos auto-fit + minmax — la cantidad es variable.
Para los 4 planes (cantidad fija) usamos media queries explícitas."
```

### Dinámica 3: "Tabla Grid vs Flex en pizarra"

En el cierre:

> "Llenemos juntos la tabla: 5 casos de uso. ¿Grid o Flex?"

Llena la tabla colaborativamente con el grupo (navbar, galería, grilla de cards, dashboard, alinear un elemento).

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Grid básico mobile-first verbatim

**Cuándo usarlo:** P1.3 (móvil base) + P1.4 (media queries).

```css
/* Móvil base — 1 columna por defecto */
.planes {
  display: grid;
  gap: 24px;
}

/* Tablet+: 2 columnas */
@media (min-width: 640px) {
  .planes { grid-template-columns: 1fr 1fr; }
}

/* Desktop+: 4 columnas */
@media (min-width: 1024px) {
  .planes { grid-template-columns: repeat(4, 1fr); }
}
```

**Tip:** Pregúntales antes de pegar: "¿Qué creen que pasa si pongo `repeat(5, 1fr)` y solo tengo 4 cards?". Respuesta: queda una columna vacía. Demuestra que Grid **siempre crea la grilla declarada**, sin importar cuántos hijos haya.

### Ejemplo 2: `grid-template-areas` verbatim

**Cuándo usarlo:** P2.2.

```css
.faq-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "nav    main"
    "footer footer";
  grid-template-columns: 200px 1fr;
}
.faq-nav  { grid-area: nav; }
.faq-main { grid-area: main; }
```

**Tip:** Antes del CSS, dibuja el layout en pizarra. El alumno escribe el CSS mirando el dibujo, no copiando código.

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| `grid-template-areas` no funciona | Falta `grid-template-columns` o `grid-template-rows` | Las áreas necesitan saber el tamaño de las columnas/filas |
| Una columna del grid no aparece | Falta `grid-area: X` en algún elemento | Verificar que cada nombre del areas tenga su asignación |
| `auto-fit` rompe con minmax(100%, 1fr) | Usar 100% como mínimo colapsa todo a 1 columna | Usar valor en px como mínimo (250px, 300px) |
| Las cards tienen alturas distintas | Es comportamiento default de Grid | Si quieren misma altura: `align-items: stretch` (default) o `grid-auto-rows: 1fr` |
| Confunden `grid-area` con `grid-template-areas` | Uno es asignación (hijos), otro es definición (padre) | Recordar: `template-areas` en el padre, `area` en cada hijo |
| Click en "Precios" da 404 | El alumno aún no creó `precios.html` o lo guardó en otra carpeta | Verificar que los 3 archivos (`index.html`, `precios.html`, `faq.html`) están en la misma carpeta raíz |
| El icono FAQ no aparece en el nav | `img/faq.svg` no descargado o ruta incorrecta | Verificar que `img/faq.svg` exista junto a `index.html` y la ruta sea relativa |
| Lector de pantalla anuncia el enlace FAQ como "imagen" | Falta `aria-label` en el `<a>` | Agregar `aria-label="Preguntas frecuentes"` al `<a>` y `alt=""` al `<img>` |
| Actualizan el nav del index pero olvidan actualizar el de precios/faq | Cada página tiene su propio header con su propio nav | Recordar: copy-paste consciente. Si agregan un enlace, debe ir en las 3 páginas |
| `gap: 8px` desborda en mobile | Padding del card + gap suman más que el ancho | Reducir gap o padding en mobile breakpoint |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Decide entre Grid y Flex en <5 segundos: "este es 2D → Grid; este es 1D → Flex".
- Dibuja un layout en pizarra ANTES de escribir `grid-template-areas` y el CSS coincide con el dibujo.
- Usa `auto-fit + minmax` sin pensar media queries cuando el caso es grilla de cards iguales.

### El estudiante NECESITA AYUDA cuando:
- Pone `display: grid` y olvida `grid-template-columns`.
- Confunde `grid-area` con `grid-template-areas`.
- Quiere meter `grid-template-areas` en cualquier layout (incluso 1D donde Flex bastaría).

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~5'  | P1.1 lista | Nav del `index.html` con 4 elementos (logo "Mi Producto", Inicio, Precios, icono FAQ con `aria-label`). Click a "Precios" y al icono FAQ dan 404 — eso es esperado por ahora |
| ~25' | P1.3 lista | `precios.html` en viewport ~400px: las 4 cards (Free, Starter, Pro, Enterprise) apiladas en 1 columna, alturas iguales, gap visible |
| ~45' | P1.4 lista | Arrastrar viewport: a 640px ven 2×2 (2 filas de 2 cards); a 1024px ven 4 cards en una sola fila |
| ~55' | P1.5 lista | Sección Marcas: arrastrar viewport sin DevTools → 6 logos se reorganizan en 2, 3, 4 cols automáticamente, **sin un solo @media** |
| ~90' | P2.2/2.3 lista | `faq.html` <640px todo apilado; ≥640px muestra "T invertida": header arriba, sidebar izq, main derecha, footer abajo |
| ~105' | Tabla Grid vs Flex | Llena con el grupo. Cada alumno puede defender al menos 3 casos |

---

## 🧑‍🏫 Tips de Facilitación

### Si alguien dice "esto es muy parecido a Flex":
> "Espera P2. Cuando llegues a `grid-template-areas` y veas que Flex NO puede hacer eso, te va a hacer click."

### Si quieren saltar a subgrid o grid-auto-flow:
> "Esos son features avanzados — Code 301. Hoy nos quedamos con los 3 niveles que cubren el 95% de los casos."

### Si la mayoría termina P1 antes:
- Mándalos al Reto Autónomo (badge "Más popular" en plan Pro) — refuerza `position: relative/absolute`.

### Si la mayoría se atrasa en P2:
- Reduce el HTML de FAQ: solo 1 categoría con 1 pregunta. El foco es `grid-template-areas`, no el contenido.

---

## ❓ Preguntas Frecuentes

### P: ¿Puedo usar `grid-template-areas` para layouts de 1 sola columna?
**R:** Funciona pero es overkill. Para 1 columna Flex es más simple. Grid brilla cuando hay 2+ columnas con filas distintas.

### P: ¿`grid-template-areas` reemplaza Flex?
**R:** NO. Son herramientas diferentes para problemas diferentes. "Grid 2D, Flex 1D".

### P: ¿Hay que aprender `subgrid`?
**R:** Hoy no. `subgrid` es Code 301. Su uso real aparece cuando trabajas con frameworks de UI.

### P: ¿Y `auto-fill` vs `auto-fit`?
**R:** Para landings usen `auto-fit`. La diferencia: `auto-fill` deja columnas vacías visibles si sobra espacio; `auto-fit` colapsa esas columnas vacías (las cards se estiran). Para portfolios y catálogos `auto-fit` se ve mejor.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C01 | Estructura HTML semántica | Las páginas nuevas reusan header/footer del index |
| C02 | Flexbox profundo + 3 breakpoints + normalización CSS | Hoy NO se aplica Flex; se compara. Los breakpoints se reusan tal cual. |

### Conexión con la Próxima Clase (C04)

Al cerrar, planta la semilla:

> "Mañana en C04 (lab calificado) refactorizas TODO el CSS de tu landing — incluyendo el de hoy — con CSS Variables. Cada `24px`, `#1a1a1a`, `200px` se vuelve `var(--gap)`, `var(--color-text)`, `var(--sidebar-width)`. Hoy escribieron mucho CSS; mañana lo hacen mantenible."

**Pre-work implícito:** Que terminen `precios.html` y `faq.html` aunque sea con datos placeholder — C04 calificado parte de ahí.

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Cuántos alumnos intentaron hacer `grid-template-areas` con Flex antes de ver la solución? (los que lo hicieron entienden mejor el "por qué Grid existe").
- ¿La heurística "Grid 2D, Flex 1D" se repitió suficiente? (debería salir en cada parte).
- ¿Alguien quiso saltar a subgrid? Marcar para Code 301.
- ¿El Reto Autónomo del badge se entendió? Si no, refuerza `position` al inicio de C04.
