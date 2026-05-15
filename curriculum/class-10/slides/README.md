<!-- .slide: data-background="#0A192F" -->
# Clase 10: Funciones y Callbacks en JavaScript
## Modularidad con funciones de orden superior

---

## TRANSICIÓN: C09 → C10

### Clase anterior (DOM como API de Objetos):
- Manipulaste el DOM con `querySelector` y `querySelectorAll`
- Transformaste Markdown a HTML con Regex y `.replace()`
- Aplicaste estilos dinámicos con JavaScript puro

### Hoy:
- Las funciones dejan de ser solo instrucciones — son **objetos que puedes pasar como argumentos**
- Modularizas la lógica del editor con funciones de orden superior
- Los callbacks permiten reutilizar transformaciones sin duplicar código

> "Una función que recibe otra función es como una máquina configurable: cambias el accesorio, cambias lo que produce."

---

## QUIZ PRE-LAB

### Pregunta:
¿Qué significa que JavaScript trate las funciones como "objetos de primera clase"?

*Toma 2-3 respuestas antes de continuar*

---

## COMPROBACIÓN

### Pregunta:
¿Cuál de estas opciones demuestra correctamente una función de orden superior?

A. `function sumar(a, b) { return a + b; }`

B. `const resultado = sumar(2, 3);`

C. `function aplicar(texto, transformacion) { return transformacion(texto); }`

D. `const texto = "hola"; texto.toUpperCase();`

---

## COMPROBACIÓN - Respuesta

**Respuesta correcta:** C

**Análisis de opciones:**
- **A:** Es una función normal — recibe números, no funciones
- **B:** Es una llamada a función — no hay funciones como argumentos
- **C:** `aplicar` recibe `transformacion` como parámetro — eso es una función de orden superior
- **D:** Es un método de string — no hay funciones pasadas como argumento

> **Clave:** Función de orden superior = recibe **o** retorna otra función. El callback es la función que se pasa como argumento.

---

## CHECKPOINT Parte 1: Botón Alternar Formato

**¿Qué debe funcionar? (45 min)**

Selecciona texto en el editor y haz clic en "Aplicar Formato":
- ✅ El texto seleccionado se envuelve en `**texto**` (negrita) o `*texto*` (cursiva)
- ✅ Al hacer clic de nuevo, el formato se quita
- ✅ El resto del texto no se modifica
- ✅ Hay una función de orden superior que recibe un callback de formato

**Problemas comunes:**
- El botón no hace nada → verificar que el `addEventListener` está conectado
- Afecta todo el texto → usar `selectionStart` / `selectionEnd` del `textarea`

---

## CHECKPOINT Parte 2: Listas Numéricas a HTML

**¿Qué debe funcionar? (60 min)**

Escribe `1. Item uno` y `2. Item dos` en el editor, luego genera el preview:
- ✅ El preview muestra `<ol><li>Item uno</li><li>Item dos</li></ol>`
- ✅ La transformación usa una función de orden superior con callback
- ✅ La numeración original se mantiene en el HTML generado

**Problemas comunes:**
- Solo convierte la primera línea → verificar flag `/gm` en el Regex
- Genera `<ul>` en lugar de `<ol>` → revisar la lógica de detección de numeración

---

## CHECKPOINT Parte 3: Resaltado de Bloques de Código

**¿Qué debe funcionar? (75 min)**

Escribe ` ```js console.log('hola') ``` ` en el editor y genera el preview:
- ✅ El preview muestra `<pre><code>console.log('hola')</code></pre>`
- ✅ El bloque tiene clase CSS de resaltado aplicada
- ✅ Múltiples bloques de código funcionan sin interferencias
- ✅ La lógica está en una función de primera clase reutilizable

**Problemas comunes:**
- Los backticks no se detectan → el Regex necesita escapar el backtick con `\``
- Solo funciona un bloque → verificar flag `/gs` para modo multilinea

---

## REFLEXIÓN: Tipos de Funciones en JavaScript

| Tipo | Ejemplo | Cuándo usarlo |
|------|---------|---------------|
| **Declarativa** | `function f() {}` | Función reutilizable con nombre claro |
| **Expresión** | `const f = function() {}` | Asignar función a variable o pasar como valor |
| **Arrow** | `const f = () => {}` | Callbacks cortos, contexto `this` heredado |
| **Orden superior** | `function f(cb) { cb() }` | Abstraer comportamiento repetible |

> **Regla memorable:** "Si lo que cambia es el comportamiento, el callback es la respuesta."

---

## REFLEXIÓN: Callbacks y el Riesgo del Callback Hell

### ¿Cuándo los callbacks se vuelven un problema?

```javascript
// ❌ Callback hell: difícil de leer y mantener
procesar(texto, function(resultado) {
  formatear(resultado, function(formateado) {
    mostrar(formateado, function() { /* ... */ });
  });
});
```

- **Anti-hype:** Los callbacks anidados en 3+ niveles se vuelven ilegibles
- **Solución futura:** Promesas y `async/await` (Code 301)

> Por ahora: mantener los callbacks en un solo nivel de profundidad

---

## TRANSICIÓN: Preview Clase 11

### Hoy lograste:
- Pasar funciones como argumentos (callbacks)
- Crear funciones de orden superior para modularizar transformaciones
- Separar la lógica del editor en archivos especializados (`format.js`, `lists.js`, `blocks.js`)

### Próxima clase (Event Handling):
- Los eventos del DOM usarán todo lo que aprendiste hoy
- `addEventListener` recibe un callback — ya sabes qué significa eso
- Construirás una interfaz que reacciona en tiempo real

---

## Preguntas de Cierre

1. ¿Cuál es la diferencia práctica entre una función normal y una función de orden superior?

2. ¿En qué parte del Editor Markdown que construiste hoy tiene más sentido un callback? ¿Por qué?

3. ¿Qué problema resolverías con funciones de orden superior que no podías resolver antes?

---

## Entrega

- URL del repositorio `markdown-editor` en GitHub (rama `lab10-funciones-callbacks`)
- URL del proyecto desplegado en GitHub Pages
- Screenshot que muestre: botón de formato funcionando, lista numerada convertida a `<ol>` y bloque de código con resaltado

### Próxima clase: Event Handling Básico en JavaScript
