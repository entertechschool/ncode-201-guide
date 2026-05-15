# Guía del Facilitador - Clase 16: Persistencia y Sincronización

> Tiempo de lectura: 8 minutos | **Última clase del M4 — Lab CALIFICADO + Test del módulo** | Prepárate antes de clase

---

## 📦 Antes de Llegar (Preparativos Obligatorios)

C16 cierra el M4. Tiene **tres responsabilidades**:

1. **Lab calificado** (delegación de eventos + bonus cálculo sobre estado).
2. **Test diagnóstico M4** en Blackboard (8 preguntas).
3. **Bloque puente al M5**: cálculo sobre estado como preparación para los balances de la Agenda de Gastos.

**Preparativos:**
- Verifica que Blackboard tenga publicado el test del M4 antes de la clase.
- Ten DevTools listos para mostrar "Event Listeners" en el panel de Elements.
- Prepara una pizarra (física o digital) para dibujar "1 listener vs N listeners".

---

## 🔑 Conceptos Clave

- **Guardado automático**: el Store se suscribe a sí mismo — cada `setState` dispara `guardarPlantillas`. No hay botones "guardar manual".
- **Sincronización Store ↔ UI**: el `subscribe` ya lo hace. Hoy lo verifican en producción real.
- **Delegación de eventos**: UN listener en el contenedor que atiende clicks de N botones internos vía `event.target`.
- **Cálculo sobre estado (bonus)**: función pura `(state) → resultado derivado`. Patrón base para los balances de M5.

---

## 🔗 Analogías Útiles

**Guardado automático <> Autoguardado de Google Docs:**
Nunca presionas "Guardar". Cada tecla queda guardada. El `subscribe` del Store es ese autoguardado: el cambio se persiste sin que el usuario lo pida.

**Delegación <> Recepcionista de un edificio:**
En vez de tener un guardia por cada piso, hay UN recepcionista en la planta baja. Cualquier visitante pasa por ahí y el recepcionista pregunta "¿a qué piso?". Un listener, N pisos.

**Cálculo sobre estado <> Calculadora de gastos del grupo:**
Tú no anotas "Juan debe 50 a María". Anotas los gastos individuales y la calculadora **deriva** quién debe a quién. La función `calcularEstadisticas(state)` deriva información, no la guarda.

---

## 📚 Contexto Actual

### Delegación: la diferencia entre 5 listeners y 5000

Si renderizas una lista de 5000 items con un listener por cada uno, el navegador asigna 5000 listeners en memoria. Si usas delegación, uno solo. **Diferencia perceptible en performance** en apps reales. React lo hace por debajo de manera nativa — el `onClick` de un componente se delega al root del documento.

> **Para contar en clase:** "Cuando lleguen a React, su `onClick` es delegación. Hoy entienden por qué funciona."

### Cálculo sobre estado: el patrón que paga sueldos

Toda app moderna tiene "panels", "dashboards" o "stats". Todos calculan datos derivados del estado. Power BI, Tableau, Google Analytics — el patrón base es `función pura(datos) → resultado`. Lo que aprenden hoy con plantillas se aplica en M5 a balances de gastos.

**Fuentes:** [MDN: Event Delegation](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events#delegaci%C3%B3n_de_eventos){:target="_blank"}, [Patterns: Selectors / Derived state](https://redux.js.org/usage/deriving-data-selectors){:target="_blank"}

---

## 🎯 Momentos Clave de la Clase

### Demo Principal — 1 listener vs N listeners en DevTools

**Qué mostrar:** 3 minutos. Primero, la versión "ingenua": 1 listener por cada botón eliminar. Renderizas 5 plantillas → en DevTools (Elements → Event Listeners) hay 5 listeners. Ahora la versión con delegación: 1 listener en el `<ul>`. Renderizas 100 plantillas → sigue habiendo 1 solo listener.

**Script sugerido:**
```
Facilitador: "Versión 1: un listener por cada botón.
[Renderiza 5, muestra 5 listeners en DevTools]
Facilitador: "Versión 2: delegación. UN listener en el padre.
[Refactor en vivo]
Facilitador: "Ahora renderizo 100 plantillas...
[Muestra 1 solo listener]
Facilitador: "Mismo comportamiento, 100x menos memoria. ESO es delegación."
```

**Plan B (si la demo falla):** Capturas de pantalla pre-tomadas mostrando "5 listeners" y "1 listener" en DevTools.

### Transición al Lab

**Momento crítico:** HU3 (delegación) es la HU pedagógica más importante. HU1 y HU2 son aplicación rutinaria del Store. El bonus es opcional pero crítico para M5.

**Script sugerido:**
```
Facilitador: "HU1 y HU2 las hacen rápido — es Store aplicado.
HU3 es la HU del concepto: UN listener para N botones.
Si tienen 5 .addEventListener en su código, retroceden.
El bonus de cálculo es opcional, pero CRÍTICO para M5. Si pueden, llegan."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Cuenten los listeners"

Durante HU3:

> "Abran DevTools → Elements → seleccionen el `<ul>` → panel Event Listeners. ¿Cuántos ven? Deben ver UNO solo."

**Dinámica sugerida:**
```
Facilitador: "Si ven más de uno, suscribieron listeners de más.
Si ven cero, no aplicaron addEventListener al contenedor.
Si ven 5, no usaron delegación — agregaron uno por botón.
La cuenta correcta es: UNO."
```

### Dinámica 2: "El bonus es M5 disfrazado"

Al llegar al bonus:

> "Esta función `calcularEstadisticas(state)` es el patrón EXACTO que van a usar en M5 para calcular balances. Cada balance es una función pura sobre los gastos."

**Dinámica sugerida:**
```
Facilitador: "Mañana, en M5, van a calcular: '¿cuánto debe Juan a María?'
Esa función va a recibir `state.grupo.gastos` y va a retornar balances.
Es EL MISMO patrón. Hoy con plantillas, mañana con gastos."
```

### Dinámica 3: "Sin recargar"

Después de HU2:

> "Hagan cualquier acción CRUD. Mira la UI. ¿Refrescaron la página manualmente?"

**Dinámica sugerida:**
```
Facilitador: "Si tuvieron que recargar para ver el cambio, su subscribe está mal.
Cero recargas. El Store + LocalStorage + subscribe = mágia."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Guardado automático suscrito

**Cuándo usarlo:** Inicio de HU1.

```javascript
// Después de definir store y guardarPlantillas:
store.subscribe(state => {
  localStorage.setItem('plantillas', JSON.stringify(state.plantillas));
});
```

**Tip:** Una línea, persistencia automática. Cualquier `setState` ahora guarda. Es la magia del Store.

### Ejemplo 2: Delegación (verbatim del lab)

**Cuándo usarlo:** HU3.

```javascript
document.querySelector('#listaPlantillas').addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-eliminar')) {
    const id = event.target.dataset.id;
    if (confirm('¿Eliminar esta plantilla?')) {
      store.setState({
        ...store.getState(),
        plantillas: store.getState().plantillas.filter(p => p.id !== id)
      });
    }
  }
});
```

**Tip:** Resaltar `event.target` — es el botón clickeado, NO el contenedor. La distinción clave de delegación.

### Ejemplo 3: Cálculo sobre estado (bonus)

**Cuándo usarlo:** Al llegar al bonus.

```javascript
function calcularEstadisticas(state) {
  return {
    total: state.plantillas.length,
    porCategoria: state.plantillas.reduce((acc, p) => {
      acc[p.categoria] = (acc[p.categoria] || 0) + 1;
      return acc;
    }, {})
  };
}
```

**Tip:** "Función pura: recibe state, devuelve resultado. No modifica nada. En M5 esto es 'función pura: recibe gastos, devuelve balances'."

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| Click en eliminar no hace nada | El `event.target.classList.contains` no matchea | Verificar que los botones renderizados tengan `class="btn-eliminar"` |
| Múltiples listeners en el contenedor | Llamaron `addEventListener` dentro de `renderizar` | Mover el listener al setup, NO al render |
| `event.target.dataset.id` es undefined | Olvidaron `data-id="${p.id}"` en el HTML del botón | Verificar template del botón |
| Confirmación dispara dos veces | Hay un listener antiguo Y uno nuevo | Limpiar listeners viejos o no re-suscribir |
| El subscribe del autoguardado no se dispara | Olvidaron usar `store.setState` (mutaron directo) | Refuerzo: siempre vía setState |
| El bonus modifica el state | Pusieron `state.plantillas = ...` dentro del cálculo | Función pura: NO modifica, retorna |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- En DevTools verifica que hay UN solo listener en el contenedor.
- Sabe explicar por qué `event.target` (no `event.currentTarget`) en delegación.
- Diseña funciones de cálculo sin tocar el estado.

### El estudiante NECESITA AYUDA cuando:
- Sigue agregando un listener por cada botón.
- Confunde `target` con `currentTarget`.
- Pone lógica de cálculo dentro del render.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | HU1 lista | Agregar plantilla → DevTools Application muestra el cambio en LocalStorage al instante (sin guardar manual). |
| ~60' | HU2 lista | CRUD completo sin recargar. UI sincronizada con Store sin llamadas manuales a render. |
| ~90' | HU3 lista | DevTools: UN listener en el `<ul>` aunque haya 5+ botones. Confirmación previa al eliminar. |
| ~110' | Bonus (opcional) | Panel de estadísticas actualizado en tiempo real al modificar plantillas. |

---

## 📊 Test Diagnóstico del Módulo

### Logística (30 min total)

| Actividad | Tiempo | Qué hacer |
|---|---|---|
| Test en Blackboard | 15 min | Proyectar countdown, ambiente silencioso |
| Revisión en vivo | 15 min | Compartir pantalla Blackboard, solo estadísticas (no nombres) |

### Durante el test

> "Tienen 15 minutos. Es individual y a libro cerrado. No afecta calificación — diagnóstico para nosotros antes de M5."

**Tips:**
- Proyectar un timer en pantalla.
- Pregunta 7 evalúa el patrón Store + subscribe + persistencia + UI. Si <60% acierta, refuerza al inicio de M5.

### Revisión de resultados

**Qué buscar:**
- Q3 (Patrón Store): si <70%, refuerza C14 antes de M5.
- Q4 (inmutabilidad): si <70%, advertir que M5 simplifica a `.push` pero saben por qué hay alternativas.
- Q7 (sincronización completa): es la pregunta clave — si dominan eso, están listos para M5.

---

## 🧑‍🏫 Tips de Facilitación

### Si saltan el bonus:
- Está OK — es opcional. Pero recomienda fuerte que lo hagan post-clase. M5 lo asume conocido.

### Si la mayoría está atrasada:
- Sacrifica el bonus de cálculo, NO el test diagnóstico (está agendado en Blackboard).
- HU3 (delegación) es no-negociable. Es el concepto pedagógico de la clase.

### Si alguien quiere usar `event.currentTarget`:
> "En delegación quieres el botón clickeado (`event.target`), no el contenedor (`currentTarget`). Diferencia sutil pero clave."

---

## ❓ Preguntas Frecuentes

### P: ¿Por qué no agregar un listener por botón si funciona?
**R:** Funciona, pero no escala. 100 listeners = 100x memoria. Delegación = 1 listener para cualquier cantidad de botones.

### P: ¿Qué pasa si tengo varios contenedores con botones similares?
**R:** Un listener por contenedor. La delegación se aplica al ancestro común más cercano de los botones que quieres atender.

### P: ¿El bonus de cálculo es funcional puro?
**R:** Sí — recibe state, devuelve resultado. No muta. Si tuvieran que recordar de C06, es el mismo patrón aplicado.

### P: ¿Y si quiero cancelar la eliminación dentro del confirm?
**R:** `confirm()` retorna `true`/`false`. Solo ejecutas `setState` si retorna `true`. Ya está en el ejemplo del lab.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C11 (M3) | `addEventListener` + `event.target` | Hoy lo usas para delegación |
| C12 (M3) | Bonus de `createElement` | Hoy renderizas dinámicamente con eso |
| C14 | Patrón Store con subscribe | Hoy lo combinas con persistencia automática |
| C15 | LocalStorage + try/catch/finally | Hoy es automático vía subscribe |
| C06 (M2) | `reduce` y funciones puras | El bonus de cálculo los reutiliza |

### Conexión con M5

Al cerrar, planta la semilla:

> "Hoy cerramos M4. Lo que aprendieron en estas 4 clases ES el proyecto final: clase Gasto (C13) + Store de gastos (C14) + persistencia robusta con try/catch (C15) + delegación + cálculo sobre estado (C16). No hay conceptos nuevos en M5 — es ARMAR todo en un proyecto real: la Agenda de Gastos Compartidos. Vienen 4 clases de aplicación pura."

**Pre-work implícito:** Que revisen el enunciado del proyecto M5 (Agenda de Gastos) y identifiquen qué pieza de C13-C16 resuelve cada HU del proyecto.

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Cuántos completaron el bonus en clase vs post-clase? Si <30% en clase, ajusta tiempos.
- ¿La demo "1 vs N listeners" hizo click? Si no, prueba mostrar DevTools en directo en otra cohorte.
- ¿El test del M4 reveló debilidad en `subscribe`? Si sí, refuerza al inicio de M5 C18.
- ¿Identificaron correctamente que el bonus de cálculo prefiguras balances? Si sí, M5 va a fluir.
- Felicítalos — terminaron el contenido conceptual del curso. M5 es aplicación.
