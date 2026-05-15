<!-- .slide: data-background="#0A192F" -->
# Clase 09: DOM como API de Objetos
## Manipulación dinámica + Regex en el Editor Markdown

---

## TRANSICIÓN: C08 → C09

### Clase anterior (Prototipos):
- Moviste métodos al prototipo para optimizar memoria
- Creaste herencia con `Object.create()`
- Validaste tipos con `instanceof`

### Hoy:
- El DOM deja de ser HTML estático — es una **colección de objetos vivos**
- Seleccionas nodos con `querySelector` y `querySelectorAll`
- Transformas texto Markdown a HTML con Regex

> "El HTML que escribes es el plano. El DOM que manipulas es el edificio construido."

---

## QUIZ PRE-LAB

### Pregunta:
¿Qué diferencia hay entre `querySelector()` y `querySelectorAll()`?

*Toma 2-3 respuestas antes de continuar*

---

## COMPROBACIÓN

### Pregunta:
Tienes esta línea: `document.querySelectorAll('h1')`. ¿Qué devuelve?

A. El primer `<h1>` del documento como elemento del DOM

B. Un array normal de JavaScript con todos los `<h1>`

C. Una `NodeList` con todos los `<h1>` del documento

D. Un error porque `querySelectorAll` no acepta etiquetas, solo clases

---

## COMPROBACIÓN - Respuesta

**Respuesta correcta:** C

**Análisis de opciones:**
- **A:** Eso es `querySelector()` — solo devuelve el primero que encuentra
- **B:** Una `NodeList` no es un array; no tiene `.map()` directamente
- **C:** `querySelectorAll()` devuelve una `NodeList` iterable con todos los elementos que coinciden
- **D:** Acepta cualquier selector CSS válido: etiquetas, clases, ids, atributos

> **Clave:** `querySelector` → uno. `querySelectorAll` → todos (como NodeList)

---

## CHECKPOINT Parte 1: Barra de Herramientas

**¿Qué debe verse? (30 min)**

Abre tu proyecto en el navegador:
- ✅ Barra fija visible en la parte superior
- ✅ Botón "Generar Vista Previa" presente y visible
- ✅ Dos zonas diferenciadas: editor (izquierda) y preview (derecha)
- ✅ Scroll funciona cuando el contenido excede el espacio

**Problemas comunes:**
- Barra no está fija → verificar `position: fixed` o clase Tailwind `fixed top-0`
- Zonas no separadas → revisar Flexbox o Grid en el contenedor principal

---

## CHECKPOINT Parte 2: Preview con Regex

**¿Qué debe funcionar? (60 min)**

Escribe `# Hola Mundo` en el editor y haz clic en "Generar Vista Previa":
- ✅ El preview muestra `<h1>Hola Mundo</h1>` renderizado
- ✅ `- Item` se convierte en `<li>Item</li>` dentro de `<ul>`
- ✅ El método usado es `.replace()` con expresión regular

**Problemas comunes:**
- Regex no reemplaza → verificar flags `/g` para reemplazar todas las ocurrencias
- Preview vacío → confirmar que el evento `click` está conectado al botón

---

## CHECKPOINT Parte 3: Estilo Dinámico con querySelectorAll

**¿Qué debe funcionar? (90 min)**

Haz clic en "Contrastar Encabezados":
- ✅ Todos los `<h1>`, `<h2>`, `<h3>` del preview cambian de color/tamaño
- ✅ Al hacer clic de nuevo, el estilo vuelve al original (toggle)
- ✅ El cambio usa `querySelectorAll()` + loop sobre la NodeList

**Problemas comunes:**
- Solo cambia un encabezado → están usando `querySelector` en lugar de `querySelectorAll`
- Toggle no funciona → verificar condición booleana o clase CSS que se agrega/quita

---

## REFLEXIÓN: querySelector vs querySelectorAll

| Aspecto | `querySelector()` | `querySelectorAll()` |
|---------|-------------------|----------------------|
| **Retorna** | Primer elemento encontrado | NodeList con todos |
| **Si no hay match** | `null` | NodeList vacía |
| **Uso típico** | Un elemento único (botón, input) | Múltiples elementos (todos los h2) |
| **Iterable** | No aplica | `forEach`, `for...of` |

> **Regla memorable:** "Select**or** → uno. Select**All** → todos."

---

## REFLEXIÓN: Regex en JavaScript

### ¿Cuándo tiene sentido usar Regex?

- ✅ Transformaciones de texto con patrones predecibles (Markdown → HTML)
- ✅ Validaciones de formato (email, teléfono)
- ❌ Parsing de HTML complejo → usar el DOM directamente
- ❌ Lógica de negocio compleja → una función es más legible

> **Anti-hype:** Regex es poderoso pero difícil de mantener. Para conversiones complejas, existen librerías como `marked.js`.

---

## TRANSICIÓN: Preview Clase 10

### Hoy lograste:
- Manipular el DOM como colección de objetos
- Seleccionar múltiples nodos con `querySelectorAll()`
- Transformar Markdown a HTML con `.replace()` y Regex

### Próxima clase (Funciones y Callbacks):
- Modularizarás la lógica de conversión en funciones reutilizables
- Aprenderás a pasar funciones como argumentos (callbacks)
- Las funciones de orden superior harán tu código más limpio

---

## Preguntas de Cierre

1. ¿Por qué es útil tratar el DOM como una colección de objetos en lugar de solo "HTML"?

2. ¿En qué situación usarías Regex vs una librería como `marked.js`?

3. ¿Cómo conecta `querySelectorAll()` con lo que aprendiste sobre prototipos en la clase anterior?

---

## Entrega

- URL del repositorio `markdown-editor` en GitHub
- URL del proyecto desplegado en GitHub Pages
- Screenshot que muestre: barra, editor, preview con Markdown convertido y toggle de encabezados activo

### Próxima clase: Funciones y Callbacks en JavaScript
