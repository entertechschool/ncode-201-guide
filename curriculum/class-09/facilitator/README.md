# Guía del Facilitador — Clase 09: JavaScript Moderno y Render Dinámico

> Tiempo de lectura: 8 minutos | Apertura del Módulo 3 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Template literal** (NUEVO): string con backticks que interpola valores (`${...}`) y admite varias líneas. Reemplaza la concatenación con `+`. Es la base para construir HTML legible.
- **Patrón render** (NUEVO): limpiar el contenedor (`innerHTML = ""`) → recorrer los datos → crear un nodo por cada uno y agregarlo. La UI deja de ser HTML fijo y pasa a ser **un reflejo de los datos**.
- **`createElement` / `appendChild`** (NUEVO): crear nodos del DOM desde JS e insertarlos. Distinguir `innerHTML` (interpreta HTML) de `textContent` (texto plano).
- **Destructuring** (NUEVO): `const { name, types } = pokemon` saca propiedades a variables en una línea.
- **Spread `...` y optional chaining `?.`** (NUEVOS): combinar arrays/objetos y acceder a datos anidados que podrían faltar sin romper el programa.

> ❗ **Nada de internet hoy.** Se trabaja con un array local que tiene **la forma exacta de la API real** (C11). Así el alumno aprende a *renderizar* sin el ruido de la red. En C11 solo cambia la **fuente** de los datos, no el render.

---

## 🔗 Analogías Útiles

**Template literal ⟷ Formulario con espacios en blanco:** `` `Hola, ${nombre}!` `` es una plantilla con huecos; `${...}` es el hueco que se rellena con el valor real. Mucho más claro que pegar trozos con `+`.

**Patrón render ⟷ Imprimir etiquetas desde una base de datos:** no escribes cada etiqueta a mano; tienes una plantilla y una lista, y la impresora genera una etiqueta por fila. Si agregas una fila, sale una etiqueta más. Igual con `forEach` + `appendChild`.

**Destructuring ⟷ Vaciar los bolsillos sobre la mesa:** en vez de meter la mano al bolsillo (`pokemon.`) cada vez, sacas todo lo que necesitas de una y lo tienes a la vista.

**Optional chaining ⟷ Tocar antes de pisar:** `?.` pregunta "¿existe esto?" antes de avanzar. Si no existe, se detiene con cuidado (`undefined`) en vez de caerse (error).

---

## 📚 Contexto Actual

### Por qué se enseña render dinámico desde la primera clase del módulo

Toda app web real (un feed, una tienda, una Pokédex) **genera su HTML desde datos**, no lo escribe a mano. Es la habilidad que conecta "tengo datos" con "el usuario los ve". Al dominarla con datos locales hoy, en C11 el salto a datos reales de la API es mínimo: cambia de dónde vienen los datos, no qué se hace con ellos.

### Por qué datos locales antes que la API

Si introdujéramos `fetch` hoy, el alumno pelearía con dos cosas nuevas a la vez (la red **y** el render). Separarlas es deliberado: C09 = render, C10 = asincronía, C11 = ambas juntas con datos reales.

### Por qué sintaxis moderna (ES6+)

Es lo que toda empresa espera de un dev JS hoy. Template literals, destructuring y optional chaining no son "azúcar opcional": aparecen en todo código profesional. Se enseñan en su contexto natural (construir tarjetas), no como lista de sintaxis aislada.

**Fuentes:** [MDN: Template literals](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals){:target="_blank"}, [MDN: Destructuring](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Refuerzo + contexto | 15 min | Arrays de objetos (C06), DOM básico. Presentar el proyecto Pokédex. |
| Debate Técnico | 30 min | Sintaxis moderna y render dinámico vs HTML a mano. |
| Demo | 15 min | De un array a tarjetas en pantalla. |
| Lab (HU1-HU3) | 100 min | HU1 maqueta · HU2 render dinámico · HU3 destructuring/spread/`?.` |
| Cierre | 20 min | Síntesis + puente a la asincronía (C10). |

---

## 🎯 Momentos Clave de la Clase

### Demo 1 — template literal vs concatenación (3 min)
Escribe `"Hola, " + nombre + "!"` y luego `` `Hola, ${nombre}!` ``. "Mismo resultado, pero el segundo se lee. Y permite varias líneas — clave para HTML."

### Demo 2 — el array manda (5 min)
Muestra `render(pokemonLocal)` pintando 6 tarjetas. Borra un elemento del array, recarga: una tarjeta menos. "No tocaste el HTML. Cambiaste los datos y la UI siguió." **Esta es la idea que ordena toda la clase.**

### Demo 3 — `?.` salva la vida (3 min)
Pon `sprites: {}` en un Pokémon. Sin `?.`: error rojo en consola, app rota. Con `?.`: placeholder, app viva. "Los datos reales SIEMPRE tienen huecos. `?.` es tu cinturón de seguridad."

### Transición al Lab
```
"HU1: maqueten UNA tarjeta con Tailwind, para ver el objetivo.
 HU2: que el JS genere las 6 desde el array (el patrón render).
 HU3: refactorizan con destructuring, agregan los tipos y blindan con ?.
 Al final: una Pokédex que se pinta sola desde los datos."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "¿Qué imprime?" (tras Demo 1)
Pon `` `Tengo ${2 + 3} pokémon` `` en pizarra. ¿Imprime `2 + 3` o `5`? (Imprime `5` — `${}` evalúa la expresión.)

### Dinámica 2: "Arma el destructuring" (antes de HU3)
Das `const pokemon = { name: "eevee", id: 133 }` y piden sacar `name` e `id` en una línea. Comparan con hacerlo en dos.

### Dinámica 3: "Predice el render" (en HU2)
"Si el array tiene 3 Pokémon, ¿cuántas veces corre `crearTarjeta`? ¿Y cuántos `appendChild`?" Antes de probarlo.

---

## 💡 Ejemplos Listos para Usar

### innerHTML vs textContent (por si preguntan)
```javascript
el.innerHTML  = "<b>hola</b>";   // se ve: hola (en negrita)
el.textContent = "<b>hola</b>";  // se ve: <b>hola</b> (literal)
```
"`innerHTML` cuando construyes etiquetas; `textContent` cuando metes solo texto del usuario (más seguro)."

### .map + .join para los badges
```javascript
types.map(t => `<span>${t.type.name}</span>`).join("")
```
"`.map` te da un array de strings; `.join("")` los pega en uno solo para meterlo al HTML."

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| Las tarjetas no aparecen | `app.js` cargado antes del `<div id="resultado">` o `id` mal escrito | El `<script>` va al final del `<body>`; verificar el `id` |
| Sale `[object Object]` | Interpolaron un objeto, no una propiedad | Usar `${pokemon.name}`, no `${pokemon}` |
| Se duplican las tarjetas al re-renderizar | Falta `innerHTML = ""` al inicio de `render` | Limpiar el contenedor primero |
| `cannot read property 'front_default' of undefined` | Acceso sin `?.` a un dato que falta | `sprites?.front_default ?? respaldo` |
| Solo se ve el último tipo | Usaron `=` en vez de `.map`/`.join` para varios | Recorrer el array `types` con `.map` |
| El HTML sale como texto | Usaron `textContent` en vez de `innerHTML` | Para etiquetas, `innerHTML` |

---

## ✅ Señales de Comprensión

**ENTIENDE cuando:**
- Convierte una concatenación en template literal sin dudar.
- Explica que cambiar el array cambia la UI (sin tocar HTML).
- Sabe cuándo usar `innerHTML` vs `textContent`.
- Reconoce que `?.` evita el error con datos faltantes.

**NECESITA AYUDA cuando:**
- Sigue concatenando con `+` y se pierde entre comillas.
- Escribe las 6 tarjetas a mano en el HTML (no captó el patrón render).
- Interpola el objeto entero y le sale `[object Object]`.
- No entiende por qué la app se rompe con un dato faltante.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | HU1 | Ve una tarjeta de ejemplo bien maquetada con Tailwind dentro de la rejilla. |
| ~60' | HU2 | Las 6 tarjetas se generan desde el array; al borrar un dato, desaparece la tarjeta. |
| ~90' | HU3 | Tarjetas con destructuring + badges de todos los tipos; no se rompe sin imagen (`?.`). |

---

## 🧑‍🏫 Tips de Facilitación

- **Grupo callado:** "¿Cómo escribirías `'Hola ' + nombre` como template literal?" — fuerza la práctica.
- **Alguien ya sabía ES6:** pídele que explique al grupo la diferencia `innerHTML`/`textContent`.
- **Terminan antes:** que hagan el logro de color por tipo (objeto `{ fire: "bg-red-200", ... }`).
- **Si se atascan en el render:** que dibujen el flujo en papel — "limpiar, recorrer, crear, agregar" — antes de codear.
- **No te pierdas en toda la sintaxis ES6:** la meta es que rendericen datos; destructuring/spread/`?.` se aprenden aplicándolos, no memorizándolos.

---

## ❓ Preguntas Frecuentes

**P: ¿Por qué no usamos la API real desde hoy?**
R: Para separar el render (hoy) de la red (C11). Dos cosas nuevas a la vez confunden. El array local tiene la misma forma que la API, así que el render que escriben hoy servirá igual en C11.

**P: ¿`createElement` o `innerHTML`? ¿Cuál es mejor?**
R: Ambos se usan. Hoy combinamos: `createElement` para el contenedor de la tarjeta y `innerHTML` para su contenido. Es un patrón común y legible para empezar.

**P: ¿El optional chaining no es "esconder" errores?**
R: No: es manejar datos que legítimamente pueden faltar (un Pokémon sin cierto sprite). En C12 verán el manejo de errores "de verdad" (try/catch) para fallos reales.

**P: ¿Esto es lo mismo que React?**
R: Es la idea base (UI = función de los datos) que React lleva más lejos. Entender el render manual hoy hace que un framework después tenga sentido.

---

## 🔗 Conexiones del Curriculum

### Construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C06 | `.map()`, arrays de objetos | Hoy `.map()` construye los badges de tipo |
| C07 | objetos / `class` | Cada Pokémon es un objeto; se leen sus propiedades |
| C08 | Tailwind | Estiliza las tarjetas (ya lo dominan; aquí lo aplican) |

### Conexión con C10

Al cerrar:

> "Hoy los datos estaban listos en un array. Pero una API real **tarda** en responder — no puedes asumir que los datos llegan al instante. En C10 aprenden cómo JavaScript maneja eso: **asincronía y Promesas**, simulando la demora antes de tocar la red real en C11."

---

## 🪞 Reflexión Post-Clase

- ¿Cuántos intentaron escribir las tarjetas a mano antes de captar el patrón render?
- ¿La demo de "borrar un dato → desaparece la tarjeta" hizo clic?
- ¿El error de dato faltante (sin `?.`) lo vivieron en carne propia? Eso lo fija.
- ¿Alguien preguntó "¿y si fueran 1000 Pokémon?"? Excelente — captaron por qué el render dinámico importa.
