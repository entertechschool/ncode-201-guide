# Guía del Facilitador - Clase 12: Manejo de Excepciones

> Tiempo de lectura: 8 minutos | **Lab CALIFICADO + Test Diagnóstico del M3** | Prepárate antes de clase

---

## 📦 Antes de Llegar (Preparativos Obligatorios)

C12 cierra el M3. Tiene **tres responsabilidades simultáneas**:

1. **Lab calificado** sobre manejo de excepciones (rúbrica referencial al final del lab).
2. **Test diagnóstico del M3** (5 preguntas en Canvas — única clase del curso con test activo).
3. **Bloque puente al M5** con el bonus de `createElement` (no obligatorio pero crítico).

**Preparativos:**
- Verifica que Canvas tenga publicado el test del M3 antes de la clase.
- Ten listo el repo template del editor de Markdown con `marked` ya enlazado (los alumnos vienen de C11).
- Prepara un timer visible para los 15 min del test.

---

## 🔑 Conceptos Clave

- **`try/catch`**: estructura para envolver código que puede fallar y capturar el error sin detener la app.
- **`throw new Error('mensaje')`**: lanza una excepción controlada con mensaje descriptivo.
- **`finally`**: bloque que se ejecuta **siempre**, hubo éxito o error. Garantiza limpieza de UI.
- **`createElement` + `appendChild`** (bonus): crear nodos DOM desde JS — preparación para M5.

---

## 🔗 Analogías Útiles

**`try/catch` <> Red de seguridad del circo:**
El trapecista hace su acto (`try`). Si falla, cae en la red (`catch`) — no se rompe la nuca. Sin red, un fallo termina el espectáculo. La red **no evita la caída**, solo evita que sea fatal.

**`finally` <> Apagar las luces del salón al terminar:**
Hagas lo que hagas durante el evento (presentación exitosa o cancelación de emergencia), al final alguien apaga las luces. `finally` es ese alguien. Garantiza que la UI termine consistente.

**`throw` <> Levantar la mano en el aeropuerto:**
Cuando el escáner detecta un objeto prohibido, el operador **detiene la fila** y avisa. No deja pasar y luego "ya veremos". `throw` hace eso: detiene el flujo en el momento exacto del problema, con un mensaje claro.

**`createElement` <> Imprimir una etiqueta y pegarla:**
El HTML estático es como etiquetas pre-impresas. `createElement` es imprimir una etiqueta nueva en el momento (con el nombre exacto del producto que llegó) y pegarla. M5 las imprime constantemente.

---

## 📚 Contexto Actual

### Por qué `finally` es la clave de UIs profesionales

Aplicaciones como Slack, Notion o Figma muestran spinners ("guardando…") que **siempre se ocultan**, incluso si la operación falla. ¿Cómo? `finally`. Si solo confías en `try`, un error deja el spinner girando para siempre. Si solo confías en `catch`, escribes la lógica de cleanup dos veces (una en `try`, otra en `catch`). `finally` la centraliza.

> **Para contar en clase:** "Cuando ven una app profesional que NUNCA se queda con un loading infinito, hay un `finally` haciendo su trabajo."

### El patrón se repite en cada framework

React tiene `useEffect` con cleanup, Vue tiene `onUnmounted`, Angular tiene `ngOnDestroy`. Todos resuelven el mismo problema: **garantizar limpieza sin importar el flujo**. Lo que están aprendiendo hoy con `finally` es la versión vanilla de un patrón que verán en cada framework moderno.

**Fuentes:** [MDN: try...catch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch){:target="_blank"}, [MDN: Document.createElement](https://developer.mozilla.org/es/docs/Web/API/Document/createElement){:target="_blank"}

---

## 🎯 Momentos Clave de la Clase

### Demo Principal — El spinner que NO se oculta

**Qué mostrar:** 3 minutos de demo en vivo. Editor con Markdown válido → procesa, spinner aparece y desaparece. Editor vacío → spinner aparece, error se muestra, **spinner NO desaparece** (porque el cleanup está dentro del `try`). Mover el cleanup a `finally` → ahora SÍ desaparece en ambos casos.

**Script sugerido:**
```
Facilitador: "Miren mi spinner. Texto válido → todo bien, desaparece.
[Demo path feliz]
Facilitador: "Ahora dejo el editor vacío y proceso.
[Demo path triste - spinner queda visible]
Facilitador: "¿Ven? El error fue capturado, pero el spinner quedó girando.
Es lo que pasa cuando el cleanup vive en el lugar equivocado.
Muevo esta línea a finally..."
[Refactor en vivo]
Facilitador: "Ahora pruebo de nuevo con editor vacío. Spinner aparece, error sale, spinner se oculta.
ESO es finally."
```

**Plan B (si la demo falla):** Tener un CodePen pre-creado con ambas versiones lado a lado. Cambiar entre tabs.

### Transición al Lab

**Momento crítico:** Los alumnos pueden tratar HU1-HU3 como "más try/catch" y subestimar HU4. La HU4 es **el momento conceptual de la clase**.

**Script sugerido:**
```
Facilitador: "HU1-HU3 las hacen rápido — try/catch ya lo entendieron.
HU4 es la HU clave: cuando lleguen ahí, paren y prueben los 3 escenarios.
Si el spinner NO se oculta en alguno, su finally está mal puesto."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Romper el finally a propósito"

Después del Checkpoint 4 (HU4 lista), reta a la clase:

> "¿Qué pasa si pongo `classList.add('hidden')` dentro del try en vez del finally?"

**Dinámica sugerida:**
```
Facilitador: "Hagan el cambio. Quiten finally, muevan la línea al try.
Prueben los 3 escenarios.
Cuando vean el spinner que NO se oculta con error, levanten la mano.
[Cuenta manos]
Esa es la razón EXACTA por la que existe finally."
```

### Dinámica 2: "Cuándo NO capturar"

Antes del Checkpoint 2, lanza el debate del README:

> "¿Cuándo NO deberíamos usar try/catch?"

**Dinámica sugerida:**
```
Facilitador: "Si yo divido por cero y no lo capturo, ¿qué pasa?
[Respuestas: 'se cae', 'sale Infinity'...]
Facilitador: "Si capturo todos los errores 'por si acaso', ¿qué problema causa?
[Respuestas: 'no me entero de bugs reales']
Facilitador: 'Capturar de más esconde bugs. Capturar de menos rompe UX.
La regla: capturas lo que sabes manejar.'"
```

### Dinámica 3: "Bonus opcional — preview a M5"

Al llegar al bloque bonus (`createElement`), enmarcalo:

> "Esto NO es HU calificada. Es el adelanto de M5 — si la clase se pasa, lo dejan como tarea."

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: HU4 verbatim (el spinner con finally)

**Cuándo usarlo:** Si alguien copia mal de las slides.

```javascript
function procesarMarkdown(texto) {
  document.getElementById('spinner').classList.remove('hidden');
  try {
    if (!texto || texto.trim() === '') throw new Error('El editor está vacío');
    document.getElementById('preview').innerHTML = marked.parse(texto);
  } catch (error) {
    mostrarError(error.message);
  } finally {
    document.getElementById('spinner').classList.add('hidden');
  }
}
```

**Tip:** En pizarra, numera las 3 secciones (try → catch → finally) como pasos secuenciales obligatorios.

### Ejemplo 2: createElement aplicado al editor (bonus)

**Cuándo usarlo:** Si llegan al bonus con tiempo y necesitan un caso de uso.

```javascript
function renderizarErrores(errores) {
  const lista = document.querySelector('#lista-errores');
  lista.innerHTML = '';
  errores.forEach(err => {
    const li = document.createElement('li');
    li.textContent = err;
    lista.appendChild(li);
  });
}
```

**Tip:** Resaltar `lista.innerHTML = ''` al inicio — sin esa línea, los errores se acumulan en cada llamada.

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| El spinner se queda visible tras un error | `classList.add('hidden')` está dentro del `try` en vez del `finally` | Mover esa línea al bloque `finally` |
| `marked is not defined` | Olvidaron el CDN de `marked` en index.html | Verificar `<script src="...marked.min.js">` antes de `app.js` |
| `catch` atrapa el error pero la app se sigue rompiendo | Hicieron `console.log(error)` pero no `mostrarError(error.message)` | Mostrar el error en la UI, no solo en consola |
| Los `<li>` se duplican al re-renderizar | Falta `lista.innerHTML = ''` antes del `forEach` | Limpiar la lista antes de rellenarla |
| El `throw` no se ve en consola | Está dentro de un `try` que lo captura, lo cual es correcto | Verificar que el catch sí muestre el mensaje |
| Confunden `throw new Error('x')` con `throw 'x'` | Ambas funcionan, pero `Error` da stack trace | Usar siempre `new Error(...)` por convención |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Predice en qué casos `finally` se ejecuta (respuesta: siempre).
- Explica por qué `finally` y no `catch` para ocultar el spinner.
- Identifica el patrón `try → throw → catch → finally` sin mirar apuntes.

### El estudiante NECESITA AYUDA cuando:
- Pone toda la lógica dentro del `try` "por seguridad".
- Confunde `finally` con `else` (no son lo mismo).
- Captura el error pero no le da retroalimentación al usuario.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | HU1 lista | Editor vacío → se muestra mensaje "No se ingresó contenido" en la UI (no solo consola). |
| ~60' | HU2 lista | Markdown malformado (ej. `##Título`) → mensaje descriptivo del problema. |
| ~90' | HU3 lista | Forzar error en `marked.parse` → la app sigue funcionando, mensaje claro al usuario. |
| ~110' | HU4 lista | Los 3 escenarios (válido, vacío, malformado): el spinner siempre termina oculto. |
| ~125' | Bonus (opcional) | `<ul id="lista-errores">` tiene `<li>` creados por JS, visibles en DevTools Elements. |

---

## 📊 Test Diagnóstico del Módulo

### Logística (30 min total)

| Actividad | Tiempo | Qué hacer |
|---|---|---|
| Test en Canvas | 15 min | Proyectar countdown, ambiente silencioso |
| Revisión en vivo | 15 min | Compartir pantalla Canvas, solo estadísticas (no nombres) |

### Durante el test

> "Tienen 15 minutos. Es individual y a libro cerrado. Recuerden: esto NO afecta su calificación — es para que **nosotros** sepamos qué temas del M3 necesitan más práctica antes de empezar M4."

**Tips:**
- Proyectar un timer en pantalla.
- Circular por el salón sin presionar (los alumnos sienten la presencia).
- Tener Canvas listo en la pestaña de "Estadísticas de Quiz" para mostrar al final.

### Revisión de resultados

**Qué buscar:**
- Preguntas con <60% acierto → tema que necesita refuerzo asíncrono o repaso en M4.
- Preguntas con >90% acierto → tema dominado, celebrar.
- Pregunta de autoevaluación → termómetro de confianza del grupo de cara a M4.

---

## 🧑‍🏫 Tips de Facilitación

### Si la clase se pasa de tiempo:
- HU4 es obligatoria. El bonus (createElement) puede quedar como tarea con instrucciones claras del lab/README.md.
- NO sacrifiques el test del M3 — está agendado en Canvas.

### Si alguien quiere usar `Promise` o `async/await`:
> "Excelente que ya conozcan ese tema. Hoy nos quedamos con `try/catch` sincrónico — las promesas son Code 301. Tu solución funciona, pero por consistencia con el grupo, mantente con el patrón de hoy."

### Si la mayoría termina HU3 antes:
- Mándalos directo a HU4. El bonus también es buen destino.

---

## ❓ Preguntas Frecuentes

### P: ¿Puedo usar `try` sin `catch`?
**R:** No directamente en sincrónico. Si pones `try { ... } finally { ... }` sin catch, los errores se propagan hacia arriba pero el `finally` igual corre. En esta clase usamos siempre los 3 bloques.

### P: ¿Qué diferencia hay entre `throw 'error'` y `throw new Error('error')`?
**R:** Funcionalmente similares, pero `new Error` te da stack trace para debugging. Convención de la industria: siempre `new Error(...)`.

### P: ¿`finally` corre incluso si hago `return` dentro del `try`?
**R:** Sí. `finally` corre **siempre** — antes de que la función retorne. Es exactamente lo que lo hace útil.

### P: ¿El bonus de `createElement` es obligatorio para el lab calificado?
**R:** No. La rúbrica evalúa HU1-HU4. El bonus es preparación opcional para M5.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C09 | DOM + querySelector | Hoy lo usas con `getElementById` para mostrar/ocultar el spinner |
| C10 | Callbacks + funciones de orden superior | El `forEach` del bonus es callback puro |
| C11 | `addEventListener` + `preventDefault` | Hoy capturas errores en handlers de eventos |

### Conexión con M4 y M5

Al cerrar, planta la semilla:

> "Hoy cerramos M3. En M4 vamos a guardar estado en LocalStorage — y `JSON.parse` puede tirar excepción si los datos están corruptos. Adivinen qué patrón van a usar para protegerlo... exacto: `try { JSON.parse(...) } catch { ... } finally { ... }`. Lo que hicieron hoy se vuelve obligatorio en M5 HU8."

> "Y el bonus de createElement no era anecdótico — en M5 cada gasto, persona y transferencia es un `<li>` creado por JS, no hardcodeado en HTML."

**Pre-work implícito:** Que prueben deliberadamente sus 3 escenarios de finally y compartan screenshots del spinner ocultándose en cada caso.

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Cuántos pudieron completar HU4 en clase (vs post-clase)? Si <50%, refuerza el patrón al inicio de M4 C15.
- ¿El test del M3 reveló debilidades en `finally` específicamente? Identifica esos alumnos para seguimiento.
- ¿Cuántos llegaron al bonus de `createElement`? Si pocos, asegúrate de que M5 C18 lo presente como recordatorio, no como tutorial nuevo.
- ¿Algún alumno propuso `async/await` espontáneamente? Marcalo para Code 301 — probablemente ya está listo.
