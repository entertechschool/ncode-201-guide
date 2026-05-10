<!-- .slide: data-background="#0A192F" -->
# Clase 09: DOM como API de Objetos
## Manipulación dinámica + Tailwind formalizado

---

## 🔄 TRANSICIÓN: C08 → C09

### Clase anterior (M2):
- Prototipos en JavaScript
- Usaste un template con clases como `bg-white rounded-lg shadow p-6`
- Esas clases eran **Tailwind pasivo** — no se explicaron, solo se usaron

### Hoy (M3):
- Tratas el DOM como una **API de objetos** con propiedades y métodos
- Aprendes la **familia coherente** de APIs del DOM
- Formalizamos Tailwind: ahora sabes qué hace cada utility class

> "El HTML deja de ser texto inerte. Hoy lo manipulas como objeto vivo."

---

## ❓ QUIZ PRE-LAB

### Pregunta:

Tienes una página con 8 `<h1>`, `<h2>` y `<h3>` mezclados. Quieres **cambiarles a todos el color a rojo** desde JavaScript.

**¿Cómo lo harías sin recorrer el HTML a mano?**

*Toma 2-3 respuestas antes de continuar*

---

## 🌳 DOM como árbol de objetos

```html
<body>
  <header>...</header>
  <main>
    <h1>Título</h1>
    <p>Párrafo</p>
  </main>
</body>
```

- Cada etiqueta es un **nodo**.
- Los nodos tienen **padre**, **hijos** y **hermanos**.
- Cada nodo es un **objeto** con propiedades (`.textContent`, `.classList`, `.style`) y métodos (`.addEventListener`, `.appendChild`).

> "No selecciones lo que ya tienes en una variable: navega el árbol."

---

## 🛠️ La familia coherente de APIs del DOM

| API | Para qué |
|---|---|
| `document.querySelector('selector')` | Trae el **primer** elemento que matchea (devuelve nodo o `null`) |
| `document.querySelectorAll('selector')` | Trae **todos** los elementos que matchean (devuelve NodeList iterable) |
| `nodo.classList.add/remove/toggle()` | Modifica las clases CSS del elemento |
| `nodo.style.propiedad = 'valor'` | Modifica estilos inline |
| `texto.replace(/regex/g, '...')` | Transforma strings con expresiones regulares |

> "Son 5 APIs porque son **una sola familia**: leer y modificar nodos. No las aprendes por separado."

---

## 🎨 Tailwind formalizado

### Lo que viste pasivamente en C08:

```html
<div class="bg-white rounded-lg shadow p-6">...</div>
<button class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
  Enviar
</button>
```

### Utility-first vs Component classes

| Bootstrap (component) | Tailwind (utility) |
|---|---|
| `class="card"` | `class="bg-white rounded-lg shadow p-6"` |
| Componente cerrado | Bloques de Lego, personalizables |

**Setup hoy:** `<script src="https://cdn.tailwindcss.com"></script>`

---

## ✅ COMPROBACIÓN

### Pregunta:

Quieres aplicar fondo amarillo a **todos** los `<h2>` de la vista previa. ¿Cuál es la forma correcta?

A. `document.getElementById('h2').style.background = 'yellow'`

B. `document.querySelector('h2').style.background = 'yellow'`

C. `document.querySelectorAll('h2').forEach(h => h.style.background = 'yellow')`

D. `document.querySelectorAll('h2').style.background = 'yellow'`

---

## 💡 COMPROBACIÓN — Respuesta

**Respuesta correcta:** C

**Análisis de opciones:**
- **A:** `getElementById` solo funciona con `id`, no con etiquetas. Y solo trae UN elemento.
- **B:** `querySelector` (sin All) solo trae el **primer** `<h2>` — los demás quedan sin color.
- **C:** ✅ `querySelectorAll` devuelve TODOS, y `.forEach` aplica el cambio a cada uno.
- **D:** Un NodeList NO tiene `.style` directamente. Hay que iterar primero.

> **Clave:** "`querySelector` para 1, `querySelectorAll` + iterar para N."

---

## 🎯 CHECKPOINT HU1: Barra de herramientas

### Verificar:
Abre `index.html` en el navegador.

**¿Qué debe verse?**
- Barra fija con un botón "Generar Vista Previa".
- En móvil: la barra aparece abajo. En desktop: arriba.
- Editor y preview visibles al mismo tiempo.

**Problemas comunes:**
- Barra no fija → falta `position: fixed` o utility class equivalente (`fixed top-0 / bottom-0`).
- Editor y preview se ocultan al hacer scroll → revisar `overflow` en el contenedor.

---

## 🎯 CHECKPOINT HU2: Preview con Regex

### Verificar:
Escribe en el editor:
```
# Mi título
## Subtítulo
- Item 1
- Item 2
```

Click en "Generar Vista Previa".

**¿Qué debe verse?**
- `# Mi título` se convierte en un `<h1>` real.
- `## Subtítulo` se convierte en `<h2>`.
- Los items con `-` se convierten en `<li>` dentro de un `<ul>`.

**Problemas comunes:**
- Solo transforma el primer match → falta el flag `/g` en la regex.
- `##` se transforma como `#` doble → revisar el orden: primero `##`, luego `#`.

---

## 🎯 CHECKPOINT HU3: Contrastar Encabezados

### Verificar:
Click en el botón "Contrastar Encabezados".

**¿Qué debe verse?**
- TODOS los encabezados del preview cambian color y tamaño a la vez.
- Click de nuevo → vuelven al estilo original (toggle).

**Problemas comunes:**
- Solo cambia el primer encabezado → usaste `querySelector` en vez de `querySelectorAll`.
- El segundo click no quita el estilo → falta `classList.toggle()` o el chequeo del estado.
- Estilos no se aplican → confirma que estás iterando con `.forEach`.

---

## 🪞 REFLEXIÓN: Cuándo cada API

| Caso | API correcta |
|---|---|
| Necesitas 1 elemento por su `id` | `querySelector('#id')` |
| Necesitas 1 elemento por selector CSS | `querySelector('.clase')` |
| Necesitas TODOS los elementos de un tipo | `querySelectorAll('h2')` |
| Agregar/quitar/alternar una clase CSS | `.classList.add/remove/toggle()` |
| Aplicar un estilo puntual desde JS | `.style.propiedad = 'valor'` |
| Transformar texto con un patrón | `texto.replace(/patrón/g, '...')` |

> **Regla memorable:** "Una API por intención: selección, clase, estilo, transformación. No las mezclas."

---

## 🔮 Preview C10 + Entrega

### Hoy lograste:
- Manipular el DOM como objetos JavaScript
- Transformar Markdown a HTML con Regex
- Aplicar estilos dinámicos con `querySelectorAll` + `forEach`
- Leer Tailwind con propósito

### Próxima clase (C10):
- **Callbacks** y funciones de orden superior
- Modularizar la lógica del editor en `format.js`, `lists.js`, `blocks.js`

### Entrega:
- URL del repositorio `markdown-editor`
- URL de GitHub Pages
- GIF o screenshot del toggle "Contrastar Encabezados" funcionando

### Preguntas de cierre:
1. ¿Cuándo usarías `querySelector` y cuándo `querySelectorAll`? Da un ejemplo de cada uno.
2. ¿Qué ventaja tiene Tailwind sobre escribir tu propio CSS para este lab?
3. ¿Qué le agregarías a tu Regex para detectar **negrita** e *itálica*?
