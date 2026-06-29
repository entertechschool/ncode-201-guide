# Guía del Facilitador — Clase 16: Módulos (ESM) y Cierre del Proyecto

> Tiempo de lectura: 8 minutos | Módulo 4 · Clase 16 | **Última clase del M4 — Lab CALIFICADO + cierre** | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Módulos ESM** (NUEVO, ancla): repartir el código en archivos que comparten con `export` y consumen con `import`. Cada archivo tiene su propio ámbito; el orden de los `<script>` deja de importar.
- **`<script type="module">`** (NUEVO): activa ESM con un único punto de entrada (`app.js`). Requiere servidor local — **no** funciona con `file://`.
- **Modal de confirmación propio** (NUEVO, menor): cuadro de HTML + Tailwind que se muestra/oculta con `classList`, reutilizable guardando la acción en una variable (`accionPendiente`).
- **Estado vacío** (refuerzo): distinguir "no hay nada creado" de "el filtro no encontró nada", con un mensaje distinto para cada caso.
- **Función pura** (refuerzo): `resumen(plantillas)` recibe datos y devuelve texto sin tocar el DOM ni el estado.

> ❗ **Solo hay UN tema nuevo de peso: los módulos ESM.** El modal es un detalle de UX, y el estado vacío + resumen son integración. El resto de la clase es cerrar el proyecto del módulo.

---

## 🔗 Analogías Útiles

**Módulos ESM ⟷ Cajones rotulados:** un archivo gigante es un cajón donde tiras todo; los módulos son cajones rotulados (estado, storage, ui). Sabes exactamente dónde buscar.

**`export` / `import` ⟷ Prestar y pedir:** `export` es poner algo en la repisa común; `import` es ir a buscarlo a la repisa del vecino. Nadie grita variables al aire (globales).

**Modal reutilizable ⟷ Un guardia con instrucciones:** el modal siempre pregunta lo mismo ("¿seguro?"), pero la acción que ejecuta al confirmar se la pasas en el momento. Un solo guardia sirve para borrar una o todas.

---

## 📚 Contexto Actual

### Por qué ESM cierra el módulo

Durante M4 la app creció: estado, persistencia, filtros, orden. En un solo archivo eso ya pesa. Modularizar no agrega features — **reorganiza** lo que ya funciona. Es el paso natural cuando un proyecto madura, y es exactamente lo que hace cualquier herramienta moderna (Vite, React, Vue) por debajo.

> **Para contar en clase:** "Los `import`/`export` que aprenden hoy son los mismos que verán en cualquier proyecto profesional de frontend. No es una versión 'de juguete'."

### Por qué un modal propio y no `confirm()`

`confirm()` funciona pero es feo, no se puede estilizar y bloquea todo el navegador. Las apps reales (Gmail, Notion) construyen su propio modal. Es la diferencia entre un prototipo y algo presentable.

**Fuentes:** [MDN: Módulos JS](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules){:target="_blank"}, [MDN: type=module](https://developer.mozilla.org/es/docs/Web/HTML/Element/script/type/module){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Refuerzo | 15 min | Repaso de C15. "¿Cómo se hablan tus archivos hoy?" |
| Debate + Demo | 30 min | Globales vs ESM; demo del antes/después de `import`. |
| Lab (HU1-HU4) | 100 min | HU1 modal · HU2 estado vacío · HU3 modularizar · HU4 resumen + cierre |
| Cierre + Presentaciones | 35 min | Demos de proyecto, síntesis del módulo. |

> Ajusta los tiempos a la duración real de tu sesión. La clase es un **lab calificado** de cierre de módulo.

---

## 🎯 Momentos Clave de la Clase

### Pregunta Detonadora (QUIZ PRE-LAB)

**Pregunta:** Tu app crece y ya tienes 300 líneas en un solo archivo. ¿Qué problema empieza a aparecer?

No tiene respuesta única — busca que mencionen: difícil encontrar código, choques de nombres, dependencia del orden de los `<script>`. Conecta cualquier respuesta con "por eso existen los módulos".

### Demo Principal — el antes/después de ESM (5 min)

**Qué mostrar:** un archivo con una variable global usada por otro archivo (frágil, depende del orden). Luego el mismo código con `export const state` en `state.js` e `import { state }` en `ui.js`.

**Script sugerido:**
```
Facilitador: "Hoy sus archivos se hablan por variables globales y rezan que el orden sea correcto."
[Muestra el export/import]
Facilitador: "Con esto, cada archivo PIDE lo que necesita. El orden ya no importa."
```

**Plan B (si la demo falla):** muy probablemente sea `file://`. Abre con Live Server. Ten esto preparado: es el error #1 del día.

### Transición al Lab

**Momento crítico:** modularizar puede romper todo a la vez si lo hacen de golpe.

**Script sugerido:**
```
Facilitador: "HU1 y HU2 son detalles de UX rápidos: modal y estado vacío.
 HU3 es el corazón: mueven el código a state/storage/ui/app SIN cambiar la lógica.
 Háganlo por partes y prueben tras cada mover. Si rompe, fue el último cambio."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "¿Quién exporta qué?" (antes de HU3)
En la pizarra, lista los 4 archivos y pregunta qué debe exportar cada uno. Ayuda a que vean el mapa antes de tocar código.

### Dinámica 2: "¿Confirmas o no?" (en HU1)
Da acciones ("agregar", "editar", "vaciar todo", "eliminar una") y que decidan cuáles merecen confirmación. Solo las **irreversibles**.

### Dinámica 3: "Dos vacíos" (en HU2)
"Pantalla en blanco: ¿es que no hay nada o que el filtro no encontró?" Que vean por qué el mensaje debe diferenciar.

---

## 💡 Ejemplos Listos para Usar

### Modal reutilizable (corazón de HU1)
```javascript
function pedirConfirmacion(mensaje, accion) {
  document.getElementById("modal-texto").textContent = mensaje;
  accionPendiente = accion;            // se guarda la función
  modal.classList.remove("hidden");
}
```
"La acción se guarda en una variable; el botón Confirmar la ejecuta. Mismo modal, distintas acciones."

### Distinguir los dos vacíos (HU2)
```javascript
const vacio = state.plantillas.length === 0
  ? "Aún no tienes plantillas. ¡Crea la primera!"
  : "No se encontraron plantillas con ese filtro.";
```

### Un solo punto de entrada (HU3)
```html
<script type="module" src="js/app.js"></script>
```
"Un solo `<script>`. Los `import` traen el resto."

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|---|---|---|
| `Failed to load module script` / CORS | Abrieron con `file://` (doble clic) | Usar Live Server o `python -m http.server` |
| `404` al cargar un import | Ruta sin `./` o sin `.js` | `import { x } from "./state.js"` (ruta y extensión completas) |
| `x is not defined` tras modularizar | Olvidaron `export` o `import` de ese símbolo | Exportar en el origen, importar en el destino |
| El modal nunca aparece | No quitan la clase `hidden` | `modal.classList.remove("hidden")` |
| Borra sin preguntar | La acción no se envolvió en `pedirConfirmacion` | Pasar la acción como callback al modal |
| Mismo mensaje en ambos vacíos | No distinguen los dos casos | Comparar `state.plantillas.length === 0` |
| El resumen no se actualiza | `resumen()` no se llama en `render()` | Invocarlo dentro de `render()` |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Puede decir qué exporta cada archivo y por qué.
- Explica que ESM elimina las globales y la dependencia del orden.
- Distingue una acción que merece confirmación de una que no.
- Reconoce los dos estados vacíos como casos distintos.

### El estudiante NECESITA AYUDA cuando:
- Copia los `import` sin saber qué traen.
- Sigue abriendo con `file://` tras el primer error.
- Pide confirmación al agregar/editar (acciones reversibles).
- Pone toda la lógica en un archivo "modularizado" solo de nombre.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar | Si no cumple |
|---|---|---|---|
| ~30' | HU1 modal | Eliminar abre el modal; Cancelar conserva; Eliminar borra y persiste | Revisar `classList` y el callback |
| ~60' | HU2 estado vacío | App vacía y filtro sin match muestran mensajes distintos | Distinguir con `length === 0` |
| ~90' | HU3 ESM | Tras modularizar, la app hace TODO lo de antes | Verificar servidor local y rutas `./...js` |
| ~110' | HU4 resumen | El resumen refleja el total y cambia al agregar/eliminar | Llamar `resumen()` en `render()` |

---

## 🧑‍🏫 Tips de Facilitación

### Si el grupo está callado:
- Proyecta un archivo gigante y pregunta "¿dónde está la función de guardar?" Que sufran el desorden.

### Si alguien domina la conversación:
- "Excelente. ¿Alguien más resolvería la modularización en otro orden de archivos?"

### Si la mayoría termina antes:
- Logros adicionales: cerrar el modal al clic afuera, "deshacer" tras eliminar.

### Si la mayoría se atrasa:
- Prioriza HU3 (ESM, el tema nuevo). HU4 (resumen) puede quedar como refuerzo en casa.

### Si hay preguntas fuera de alcance:
> "Buena pregunta. Hoy enfoquémonos en cerrar bien el módulo; lo que viene después lo hablamos en su momento."

---

## 🔀 Diferenciación

### Para estudiantes avanzados:
- Modularizar también la lógica del modal en su propio archivo.
- Logro "deshacer" con un temporizador.

### Para estudiantes con dificultades:
- Modularizar de a un archivo por vez, probando entre cada paso.
- Empezar por `storage.js` (es el más contenido) antes de tocar `ui.js`.

---

## ❓ Preguntas Frecuentes

### P: ¿Por qué mi app dejó de funcionar al modularizar?
**R:** Casi siempre es `file://`. Los módulos exigen servidor local. Abre con Live Server. Segundo sospechoso: rutas de `import` sin `./` o sin `.js`.

### P: ¿Tengo que poner un `<script>` por cada archivo?
**R:** No. Solo uno con `type="module"` apuntando a `app.js`. Los `import` cargan el resto.

### P: ¿Cuándo debo pedir confirmación?
**R:** Solo en acciones irreversibles (borrar). Nunca al agregar o editar — eso molesta.

### P: ¿`confirm()` no servía?
**R:** Funciona, pero es feo y no se estiliza. El modal propio es lo que hacen las apps reales.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C15 | JSON + LocalStorage (`guardar`/`cargar`) | Pasan a `storage.js` con `export` |
| C14 | Eventos, CRUD, datos derivados | La lógica se reparte en `state.js` y `ui.js` |
| C13 | Modelado de datos (`Template`) | La clase vive ahora en `models/Template.js` |

### Conexión al cerrar el módulo

Al terminar, celebra el recorrido completo:

> "Hace cuatro clases su app no guardaba nada y vivía en un solo archivo. Hoy persiste, está organizada en módulos y la pueden mostrar como un proyecto profesional. Eso es exactamente lo que hace un desarrollador frontend."

**Pre-work / Tarea implícita:** que pulan su README y su demo antes de presentar.

---

## 🎤 Presentaciones de Cierre

### Antes de empezar
> "Este es SU momento. Han trabajado cuatro clases para llegar aquí. Muestren lo que construyeron con orgullo."

### Durante las presentaciones (máx. 10 min c/u)
- Mantén un ambiente positivo.
- Una pregunta breve a cada presentador (pídele que explique 1 decisión técnica).
- Aplaude genuinamente después de cada demo.

### Si alguien no terminó
> "Está bien no llegar al 100%. ¿Qué parte quieres mostrar?"

### Cierre de las presentaciones
> "Hace cuatro clases no sabían qué era persistir un estado. Hoy tienen una app modular, persistente y desplegada. ¡Increíble trabajo!"

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Cuántos resolvieron la modularización sin romper la app?
- ¿El error de `file://` se resolvió rápido o costó?
- ¿Las demos mostraron comprensión real o solo copia?
- ¿Qué concepto del módulo necesita refuerzo a futuro?
