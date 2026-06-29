<!-- .slide: data-background="#0A192F" -->
# Clase 14: Interacción y Datos Derivados
## Code 201 · Módulo 4 · Proyecto: Gestor de Plantillas para WhatsApp

---

## 🔁 TRANSICIÓN: Clase 13 → Clase 14

### Clase anterior:
- Modelaste la clase `Template` y el estado central
- Dibujaste la lista con `render()`

### Hoy:
- Tu app se vuelve **interactiva**: editar y eliminar
- **Delegación de eventos**: un solo listener para todo
- **Datos derivados** y orden con `.sort()`

> "El estado manda; la pantalla solo lo refleja."

---

## 🤔 QUIZ PRE-LAB

### Pregunta:

Tu lista tiene un botón "Eliminar" en cada tarjeta. Si re-dibujas la lista cada vez que cambia el estado, ¿qué pasa con los listeners que pusiste botón por botón?

*Toma 2-3 respuestas antes de continuar*

---

## ✅ COMPROBACIÓN

### Pregunta:

¿Qué es la **delegación de eventos**?

A. Poner un `addEventListener` dentro de cada `<li>` al crearlo
B. Usar `onclick=""` directamente en el HTML de cada botón
C. Poner **un solo** listener en el contenedor padre y decidir según `event.target`
D. Volver a enganchar los listeners después de cada `render()`

---

## ✅ COMPROBACIÓN - Respuesta

**Respuesta correcta:** C

**Análisis de opciones:**
- **A:** Funciona, pero los listeners mueren al re-renderizar; tendrías que recrearlos siempre.
- **B:** Mezcla HTML y JS, no escala y es difícil de mantener.
- **C:** Correcto. Un listener en el padre sobrevive a cada `render()` y atiende a todos los hijos.
- **D:** Es justo lo que la delegación te ahorra: ya no reenganchas nada.

> **Clave:** Un listener en el padre + `event.target` = atiende a N hijos sin recrearse.

---

## 📍 CHECKPOINT HU1: Eliminar (delegación)

### Verificar:
Agrega 3 plantillas y elimina la del medio.

**¿Qué debe verse?**
- Solo esa plantilla desaparece
- Las otras dos quedan intactas

**Problemas comunes:**
- No pasa nada al clic → revisa `classList.contains("btn-eliminar")`
- `id` no coincide → falta `Number(e.target.dataset.id)`

---

## 📍 CHECKPOINT HU2: Editar en su lugar

### Verificar:
Pulsa "Editar", cambia el mensaje y guarda.

**¿Qué debe verse?**
- La plantilla se actualiza en su sitio
- NO aparece una copia nueva

**Problemas comunes:**
- Crea una nueva → falta usar `state.editandoId` en el `submit`
- No carga datos → revisa `cargarEnFormulario`

---

## 📍 CHECKPOINT HU3-HU4: Stats y filtro

### Verificar:
Agrega hashtags repetidos; luego escribe en el buscador.

**¿Qué debe verse?**
- Panel: `Total: 3 | #ventas: 2 · #soporte: 1`
- Al filtrar `vent` quedan solo las `#ventas`; al borrar, vuelven todas

**Problemas comunes:**
- Stats no cambian → falta `renderStats()` al final de `render()`
- El total baja al filtrar → cuenta `plantillasVisibles()`, debe contar el estado real

---

## 📍 CHECKPOINT HU5: Ordenar con `.sort()`

### Verificar:
Cambia el selector a "Alfabético" y luego a "Más recientes".

**¿Qué debe verse?**
- Alfabético → lista ordenada A-Z
- Más recientes → arriba la última creada

**Problemas comunes:**
- El estado se desordena solo → falta copiar con `[...plantillas]` antes de `.sort()`

---

## 💡 REFLEXIÓN: Mutar vs no mutar + datos derivados

| Operación | ❌ Muta | ✅ Inmutable |
|---|---|---|
| Eliminar | `splice` | `.filter` |
| Editar | `p.titulo = ...` | `.map` + `{ ...p }` |
| Ordenar | `arr.sort()` | `[...arr].sort()` |

> **Regla memorable:** "Crea una versión nueva; no toques la original."

El `Total` y el conteo por hashtag **no se guardan**: se recalculan en cada `render()`. Por eso nunca quedan desactualizados.

---

## ➡️ TRANSICIÓN: Preview Clase 15

### Hoy lograste:
- Delegación de eventos (un listener para todo)
- CRUD completo e inmutable
- Datos derivados y orden con `.sort()`

### Próxima clase:
- **Persistencia**: tus plantillas sobrevivirán al recargar
- `localStorage` + `JSON.stringify`/`parse`

---

## 🤔 Preguntas de Cierre

1. ¿Por qué un solo listener en el padre es mejor que uno por botón?

2. ¿Cuándo usarías `.filter` y cuándo `.map` para cambiar el estado?

3. Si recargas la página ahora, ¿qué pasa con tus plantillas? (👀 C15)

---

## 📦 Entrega

- Repositorio `whatsapp-templates` con las 5 HU funcionando
- Desplegado en GitHub Pages
- README que explique tu **delegación de eventos** y tu función `contarPorHashtag`

### Próxima clase: JSON y LocalStorage
