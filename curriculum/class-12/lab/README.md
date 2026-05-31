# Laboratorio 12: Manejo de Excepciones en Javascript

📘 Bienvenido al **laboratorio 12** de tu proyecto integrador. En esta sesión trabajaremos exclusivamente el manejo de **excepciones en operaciones de validación y transformación de texto Markdown**, sin depender de carga de archivos externos. El objetivo es robustecer el editor capturando errores en entradas erróneas o mal estructuradas por parte del usuario.

## 🎯 Objetivos de Aprendizaje

1. **Comprender el concepto de Excepciones en JavaScript**  
   - Qué es una excepción, cuándo ocurre y cómo debe manejarse.  
   - Su utilidad para anticipar fallas y brindar retroalimentación controlada.

2. **Manejar validaciones con `try/catch` y `throw`**  
   - Detectar entradas vacías, sintaxis mal estructurada o uso incorrecto de Markdown.  
   - Lanzar errores personalizados que ayuden al usuario a corregir su contenido.

## 🔑 Conceptos Clave

1. **Excepción**  
   Evento inesperado que interrumpe la ejecución normal del programa.

2. **try...catch**  
   Estructura para capturar y manejar errores sin detener el flujo general de ejecución.

3. **throw**  
   Herramienta para lanzar manualmente un error con un mensaje específico cuando se detecta una condición inválida.

## ⚙️ Setup Inicial

1. **Repositorio**  
   - Continúa trabajando en tu repositorio del editor de Markdown.  
   - Crea una rama nueva llamada `lab12-excepciones`.

2. **Librería Marked**
   - Enlaza marked vía CDN en tu index.html:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
   ```
   > Es importante importar la librería marked ANTES de tu script de lógica `app.js`



## 🏆 Historias de Usuario

1. **HU1: Validación de entrada vacía**  
   > "Como usuario, quiero recibir un mensaje si intento procesar Markdown sin haber escrito nada."

   - Criterios de aceptación:
     - Validación con `if` dentro de `try`.
     - `throw new Error("No se ingresó contenido")`.
     - Mensaje claro mostrado en la interfaz.
   
   - **[30'] Checkpoint 1:** Validación de entrada vacía o inválida con `throw`.

2. **HU2: Validación de sintaxis Markdown mal formada**  
   > "Como usuario, quiero que el sistema detecte si escribí encabezados o listas con errores."

   - Criterios de aceptación:
     - Detección de patrones como `##Título`, `-elemento` sin espacio, etc.
     - Lanzar errores con `throw` y capturarlos con `catch`.
     - Mensajes descriptivos en UI sin detener el flujo.
   
   - **[60'] Checkpoint 2:** Manejo adecuado de errores durante la conversión con `marked()`.

3. **HU3: Manejo general de errores inesperados en la conversión**  
   > "Como usuario, quiero que si hay un error interno durante la conversión, se me notifique sin que el editor se bloquee."

   - Criterios de aceptación:
     - Envolver `marked()` en `try/catch`.
     - Captura de errores con `console.error` + alerta visual o log en interfaz.
   
   - **[90'] Checkpoint 3:** Comunicación clara al usuario de errores capturados.

### HU4: Indicador de procesamiento con `finally`

> "Como usuario, cuando la conversión toma tiempo, quiero ver un spinner que aparezca antes y se oculte cuando termine — **incluso si la conversión falla**. La UI debe quedar consistente sin importar qué pase."

Para garantizar que el spinner se oculte sin importar si hay error, se usa `finally`.

#### Sub-pasos

4.1. Agrega al `index.html` un spinner oculto:

```html
<div id="spinner" class="hidden">Procesando...</div>
```

Y en `styles.css`:

```css
.hidden { display: none; }
```

4.2. Asegúrate de tener una zona donde mostrar errores en `index.html` (probablemente la creaste en HU1):

```html
<div id="error" class="hidden"></div>
```

Define la función `mostrarError` y modifica la función que procesa el Markdown para usar `try/catch/finally`:

```javascript
function mostrarError(mensaje) {
  const errorBox = document.getElementById('error');
  errorBox.textContent = mensaje;
  errorBox.classList.remove('hidden');
}

function procesarMarkdown(texto) {
  document.getElementById('spinner').classList.remove('hidden');
  document.getElementById('error').classList.add('hidden'); // limpia errores previos

  try {
    if (!texto || texto.trim() === '') {
      throw new Error('El editor está vacío');
    }
    const html = marked.parse(texto);
    document.getElementById('preview').innerHTML = html;
  } catch (error) {
    mostrarError(error.message);
  } finally {
    document.getElementById('spinner').classList.add('hidden');
  }
}
```

> 💡 **Nota:** `#preview` ya lo tienes desde C09 (es donde se renderiza la vista previa). `#spinner` lo agregaste en 4.1. `#error` lo agregas ahora si no existía.

4.3. Verifica los **3 escenarios** y observa el spinner en cada uno:

- Editor con texto válido → spinner aparece y desaparece, preview se actualiza.
- Editor vacío → spinner aparece, error se muestra, **spinner desaparece** igual.
- Markdown malformado (provoca excepción de `marked.parse`) → spinner aparece, error se muestra, **spinner desaparece** igual.

✅ **Checkpoint:** en los 3 casos, el spinner termina oculto. **Esa es la garantía de `finally`** — el código corre sin importar si hubo éxito o error.

🏆 **Reto autónomo (5 min):** ¿Qué pasaría si pones el `classList.add('hidden')` dentro del `try` en lugar del `finally`? Pruébalo eliminando el bloque `finally` y poniendo la línea al final del `try`. Observa qué ocurre cuando hay un error.

> 💡 **Lo que viene en M5:** este patrón es exactamente lo que usarás en HU8 (cargar de LocalStorage) — `try { JSON.parse(localStorage.getItem(...)) } catch { ... } finally { ... }`. Te garantiza que la UI nunca queda en estado inconsistente.

---

## Cierre — Bonus: Renderizado dinámico de listas (~15 min)

> Este bloque NO es una HU obligatoria. Es una **herramienta crítica** que vas a necesitar en M5 (Proyecto Final). Si la clase se está pasando, queda como **tarea autónoma post-clase**.

Hasta ahora actualizaste el DOM con `.innerHTML` o `.textContent` sobre un nodo existente. Para **crear nodos nuevos desde JS**:

### Patrón base

```javascript
const items = ['Manzana', 'Pera', 'Plátano'];
const lista = document.querySelector('#mi-lista');

items.forEach(function(item) {
  const li = document.createElement('li');     // crea el nodo
  li.textContent = item;                        // le da contenido
  lista.appendChild(li);                        // lo inserta en el DOM
});
```

### Aplicación al editor: lista de errores

Si la validación detecta varios errores en el Markdown, podemos mostrar la **lista** de errores en vez de uno solo.

#### Sub-pasos del bonus

C.1. Agrega al `index.html`:

```html
<ul id="lista-errores"></ul>
```

C.2. En `app.js`, escribe una función que reciba un array de errores y los renderice como `<li>`:

```javascript
function renderizarErrores(errores) {
  const lista = document.querySelector('#lista-errores');
  lista.innerHTML = '';  // limpia errores previos

  errores.forEach(function(error) {
    const li = document.createElement('li');
    li.textContent = error;
    li.classList.add('error-item');
    lista.appendChild(li);
  });
}

// Prueba
renderizarErrores([
  'Línea 3: encabezado mal cerrado',
  'Línea 7: lista sin guion inicial',
  'Línea 12: bloque de código sin triple backtick de cierre'
]);
```

C.3. Verifica que aparezcan los 3 `<li>` en el DOM.

✅ **Checkpoint:** abre DevTools (F12 → Elements) y observa cómo `<ul id="lista-errores">` ahora tiene 3 `<li>` que **NO están en el HTML estático** — son creados por JS.

### Por qué importa para M5

En M5 construyes una **Agenda de Gastos**. Cada vez que se agregue una persona, un gasto o una transferencia sugerida, debe aparecer un nuevo `<li>` (o `<tr>`, o `<div>`) en el DOM **sin recargar la página**. El patrón `createElement` + `appendChild` es exactamente eso. Hoy lo viste con errores; en M5 lo aplicarás a personas, gastos y balances.

---

## 🌟 Logros Adicionales

1. **Logro 1: Simular errores intencionales**  
   - Crear un botón que inyecte texto erróneo para probar el manejo de excepciones.

2. **Logro 2: Cancelar la conversión en caso de error**  
   - Impedir ejecución de `marked()` si se detecta fallo previo.

## Rubrica de Evaluacion

| Criterio | Excelente (20) | Bueno (15) | Satisfactorio (10) | Bajo (5) |
|----------|----------------|------------|---------------------|----------|
| **HU implementadas** | HU1-HU2 del lab + ≥2 HU adicionales propias, funcionales y con criterios al 100% | HU1-HU2 + 2 HU con criterios en su mayoría cumplidos | HU1-HU2 funcionales + 1 HU adicional parcial | HU1-HU2 implementadas pero no funcionan |
| **Calidad técnica: DOM + funciones + eventos + excepciones** | Integra DOM, funciones de orden superior, eventos, `try/catch` + `throw`; código modular y reutilizable | Integra 3 de 4 conceptos correctamente | Funcional pero código repetitivo, sin modularización | Errores no capturados, código monolítico |
| **Presentación de funcionalidades en vivo** | Demo ≤5 min, transformación Markdown→HTML en vivo, eventos interactivos, captura de errores demostrada | Demo muestra funcionalidades pero omite captura de errores | Demo entrega lo pedido sin mostrar interactividad completa | Presenta pero no muestra editor en tiempo real |
| **Argumentación técnica** | Justifica ≥2 decisiones (dónde poner `try/catch`, diseño de funciones reutilizables, uso del DOM) | Justifica 1 decisión claramente | Argumentación superficial sin profundizar | No justifica o confunde conceptos básicos |
| **Desafío: explicación de fragmento solicitado** | Explica 1 fragmento a solicitud del instructor con claridad, deploy funcional, README documentado | Explica con apoyo parcial, deploy funcional | Explica con dificultad, README incompleto | No puede explicar o sin deploy |

**Total: 100 puntos** (5 criterios x 20 pts)

| Nota | Rango |
|------|-------|
| A | 90-100 |
| B | 80-89 |
| C | 70-79 |
| F | < 70 |

---

## 📝 Instrucciones de Entrega

1. **Documentación en README**  
   - Explica cómo usaste las promesas o el bloque try/catch en cada historia de usuario.  
   - Añade capturas de pantalla de los mensajes de “cargando…” y de error.

2. **Despliegue**  
   - Fusiona tu rama `lab12-excepciones` a `main` y actualiza la versión desplegada en GitHub Pages (o la plataforma que uses).

3. **Entrega Final**  
   - URL del repositorio.  
   - URL del sitio desplegado.