# Guía del Facilitador — Clase 08: Tailwind CSS (cierre del Módulo 2)

> Tiempo de lectura: 8 minutos | Última clase del M2 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Utility-first** (NUEVO): componer el diseño con muchas clases pequeñas en el HTML, en vez de reglas en un `.css`. Es **el mismo CSS de M1, otra notación**.
- **Dos tipos de clase:** **clase-propiedad** (`p-4` = 1 propiedad CSS) y **prefijo-modificador** (`hover:`, `md:` = aplican una clase bajo una condición). Vocabulario vs gramática.
- **Mejora progresiva por grupos:** se estiliza el Gestor capa por capa (layout → caja → estética → modificadores), un grupo de utilidades por parte.
- **Mobile-first:** las clases base = móvil; los prefijos `md:`/`lg:` agregan el desktop. El look base que arman en P1–P3 ya es el móvil.
- **P5 — conexión:** ~25 líneas de JS conectan el formulario con las clases `Movimiento`/`Presupuesto` de C07. Es **aplicación**, no tema nuevo → cierra el proyecto del módulo.

> ❗ **Única herramienta nueva: Tailwind (vía CDN).** El JS de P5 reusa lo que ya saben (eventos, `.value`, `innerHTML`). Si alguien lo siente "nuevo", recuérdale que es lo que ya hicieron antes — hoy solo lo aplican para cerrar.

---

## 🔗 Analogías Útiles

**Utility-first ⟷ Bloques de Lego:** en vez de comprar un mueble armado (un componente de Bootstrap), juntas piezas pequeñas (`flex`, `p-4`, `bg-white`) hasta lograr exactamente lo que quieres. Más piezas, pero control total.

**Clase-propiedad vs prefijo ⟷ Palabra vs conjugación:** `bg-blue-600` es una palabra; `hover:bg-blue-700` es esa palabra "conjugada" para una situación (al pasar el mouse). El prefijo no es una clase nueva — modifica **cuándo** aplica.

**Mejora progresiva ⟷ Capas de pintura:** primero el boceto (layout), luego el relleno (espaciado), luego el color (estética), luego los detalles (sombra, hover). Entre capa y capa se ve "a medio hacer" — eso es normal y demuestra qué aporta cada grupo.

**Mobile-first ⟷ Construir de lo pequeño a lo grande:** diseñas para la pantalla más chica (la base) y vas **agregando** para las grandes con `md:`. Nunca al revés.

---

## 📚 Contexto Actual

### Por qué Tailwind se enseña por GRUPOS (no por componentes)

Si construyes "tarjeta por tarjeta", cada tarjeta mezcla layout + espaciado + color + sombra a la vez, y el alumno no puede practicar **un** concepto aislado. Enseñar **por grupos** (un tipo de utilidad por parte, aplicado a toda la página) permite "hoy: espaciado → practícalo; ahora: color → practícalo". El lab es el vehículo de práctica; su estructura sigue la secuencia de conceptos.

### Por qué responsive va al FINAL

Responsive (`md:`) es un **prefijo-modificador**, igual que `hover:`. No puedes enseñar `md:grid-cols-2` sin que sepan `grid-cols-2`. Además, un prefijo necesita un look base que adaptar — y ese look base (P1–P3) **es el móvil**. Así que responsive al final no contradice mobile-first: lo cumple.

### Por qué C08 cierra el proyecto (P5)

Es la **última clase del M2**. El Gestor tenía cerebro (lógica de C07) pero no cara. C08 le da cara (Tailwind) y, en P5, la **conecta** con ~25 líneas que reusan C07. El módulo no debe terminar en una maqueta bonita pero muerta, sino en una **app real**.

**Fuentes:** [Tailwind Docs](https://tailwindcss.com/docs){:target="_blank"}, [Utility-First](https://tailwindcss.com/docs/utility-first){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Intro + contexto | 15 min | De CSS a mano (M1) a utility-first. |
| Demo Técnica | 20 min | CDN + 2 tipos de clase + mejora progresiva. |
| Lab (P0-P5) | 145 min | P0 esqueleto · P1 Layout · P2 Caja · P3 Estética · P4 Modificadores · P5 Conectar (JS). |
| Cierre | 20 min | El Gestor funcionando + síntesis del M2. |

---

## 🎯 Momentos Clave de la Clase

### Demo 1 — instalación + "magia" del CDN (3 min)
Pega `<script src="https://cdn.tailwindcss.com"></script>` y un `<h1 class="text-2xl font-bold text-blue-600">`. Recarga → estilizado sin tocar CSS. "Una línea, cero configuración."

### Demo 2 — los 2 tipos de clase (4 min)
Escribe `bg-blue-600` (propiedad) y luego `hover:bg-blue-600` (prefijo). Pasa el mouse. "El prefijo no es una clase nueva — es la misma, condicionada." Esto es **la idea que ordena toda la clase**.

### Demo 3 — la página crece por capas (5 min)
Muestra el esqueleto sin clases → agrega solo layout → solo espaciado → solo color. Que VEAN cada capa. "Entre capa y capa se ve incompleto. Eso es la prueba de qué hace cada grupo."

### Transición al Lab
```
"P0–P4 son Tailwind por capas: layout, caja, estética, modificadores.
Cada parte muestra el <body> completo con lo nuevo marcado ← Px.
P5 es el cierre: ~25 líneas de JS para que el form funcione, reusando sus clases de C07.
Al final: su Gestor desplegado y funcionando."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "¿Propiedad o prefijo?" (tras Demo 2)
Pasa 5 clases en pizarra (`p-4`, `md:flex`, `text-center`, `hover:underline`, `bg-red-50`) y que clasifiquen cada una. Refuerza la distinción que ordena todo.

### Dinámica 2: "Traduce de M1 a Tailwind" (antes de P1)
Das CSS de M1 (`display:flex; justify-content:space-between; gap:1rem`) y escriben el equivalente Tailwind (`flex justify-between gap-4`). Ven que ya lo sabían.

### Dinámica 3: "Predice el responsive" (en P4)
"`grid-cols-1 md:grid-cols-2`: ¿cómo se ve en móvil? ¿y en desktop?" Antes de probarlo en DevTools.

---

## 💡 Ejemplos Listos para Usar

### Clases dinámicas en P5 (por si preguntan)
Las clases que el JS inserta (`bg-green-50`, `bg-red-50`) **sí funcionan** con Play CDN porque observa el DOM en vivo. Tip: usar **nombres completos** condicionados (`ingreso ? 'bg-green-50' : 'bg-red-50'`), NO interpolar el color (`bg-${color}-50`), para que sea robusto.

### El JS de P5 reusa C07
```javascript
presupuesto.agregar(new Movimiento(nombre, tipo, valor));  // clases de C07
render();                                                   // pinta lista + saldo
```
"No escriben lógica nueva. Solo conectan el form a su modelo."

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| Nada se estiliza | Falta el `<script>` de Tailwind o está mal escrito | Verificar el CDN en el `<head>` |
| Una clase no hace nada | Nombre mal escrito (`bg-grey-50`, `flex-col-1`) | Tailwind ignora clases inexistentes; revisar el nombre exacto |
| El layout no es responsive | Usó `grid-cols-2` sin `md:` | Base `grid-cols-1` + `md:grid-cols-2` (mobile-first) |
| `hover:` no reacciona | Lo puso en el elemento equivocado o sin estado base | El prefijo va en el mismo elemento que cambia |
| El form recarga la página (P5) | Olvidó `event.preventDefault()` | Es la línea #1 del listener |
| `null` al hacer `getElementById` | El `id` del HTML no coincide con el del JS | Igualar los `id` exactos |
| Filas nuevas sin color (P5) | El template del `<li>` no incluye las clases | Construir el `<li>` con sus clases en el string |

---

## ✅ Señales de Comprensión

**ENTIENDE cuando:**
- Clasifica una clase como propiedad o prefijo sin dudar.
- Traduce CSS de M1 a Tailwind y viceversa.
- Explica por qué la base es el móvil y `md:` agrega el desktop.
- En P5, reconoce que reusa C07 y solo "conecta".

**NECESITA AYUDA cuando:**
- Inventa nombres de clases (no internalizó que son finitos/predecibles).
- Pone responsive como desktop-first (`grid-cols-2` + `sm:grid-cols-1`).
- Cree que P5 es "lógica nueva" en vez de aplicación.
- Olvida `preventDefault` y se frustra con la recarga.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~20' | P0 | Tailwind carga (CDN); ve el esqueleto feo pero estructurado; distingue los 2 tipos de clase. |
| ~50' | P1 | Layout aplicado: contenedor centrado, 2 columnas, filas con `justify-between`. |
| ~70' | P2 | La página respira (padding/margin/espaciado). |
| ~95' | P3 | Tarjetas blancas con sombra, color semántico verde/rojo, tipografía. |
| ~125' | P4 | Botón con hover, inputs con foco, responsive (apila en móvil, 2 col en desktop). |
| ~145' | P5 | El form agrega movimientos en vivo; lista + saldo se actualizan. **Gestor funcional.** |

---

## 🧑‍🏫 Tips de Facilitación

- **Grupo callado:** "¿A qué CSS de M1 equivale `rounded-lg`? ¿Y `flex`?" — fuerza el mapeo.
- **Alguien ya sabía Tailwind:** pídele que explique al grupo por qué `md:` es mobile-first.
- **Terminan P4 antes:** que prueben el logro de modo oscuro (`dark:`).
- **En P5, si el form no funciona:** revisar (1) scripts cargados (`oop-objects.js` antes de `app.js`), (2) `preventDefault`, (3) `id`s coinciden.
- **No te pierdas en la "pureza" de Tailwind:** la meta es que el alumno construya una UI real y la conecte, no memorizar todas las utilidades.

---

## ❓ Preguntas Frecuentes

**P: ¿Tailwind reemplaza saber CSS?**
R: No. Tailwind ES CSS con otra notación. Quien no entiende `flex` no entiende `flex` de Tailwind. Lo acelera, no lo sustituye.

**P: ¿Por qué CDN y no instalación "real"?**
R: Este curso es un sitio estático sin build. El Play CDN da Tailwind con un `<script>`. La instalación con `npm`/PostCSS es para proyectos con herramientas de build, más adelante.

**P: ¿No es mucho escribir tantas clases en el HTML?**
R: Al principio sí, pero ganas velocidad y consistencia (escala fija, nada de inventar valores). En proyectos grandes se extraen componentes; eso es Code 301.

**P: ¿El JS de P5 no es adelantar M3?**
R: No. M3 (DOM como API, `createElement`, `querySelectorAll`, regex, eventos avanzados) va mucho más profundo. P5 solo aplica lo básico ya conocido para cerrar el proyecto.

---

## 🔗 Conexiones del Curriculum

### Construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C01-C04 (M1) | CSS a mano (Flexbox, Grid, variables, media queries) | Hoy es lo mismo, en clases utilitarias |
| C07 | `class Movimiento` / `Presupuesto` | P5 reusa esas clases para que el form funcione |

### Conexión con M3 (C09+)

Al cerrar:

> "Su Gestor ya funciona con lo justo de JavaScript. En M3 profundizan el **DOM como API de objetos** (C09), callbacks (C10) y eventos (C11) sobre un proyecto nuevo (Editor de Markdown) — y **Tailwind ya lo dominan desde hoy**, así que ahí solo lo aplican."

---

## 🪞 Reflexión Post-Clase

- ¿Cuántos intentaron `grid-cols-2` directo (desktop-first)? Si fue mayoría, refuerza mobile-first.
- ¿El "2 tipos de clase" ordenó la clase, o hubo que repetirlo?
- ¿Cuántos cerraron P5 con el form funcionando? Ese es el éxito del módulo.
- ¿Alguien dijo "esto es más rápido que escribir CSS"? Buena señal — captaron el valor.
