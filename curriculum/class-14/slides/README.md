# Clase 14: Patrón Store

## 🎯 Módulo 4 — Estado y Persistencia
**Duración total:** 180 minutos

---

## 🧠 ¿Qué problema resuelve un Store?

* Sin Store: cualquier función puede mutar el estado global.
* Con Store: el estado tiene **una API controlada** (`getState`, `setState`).
* Cuando el estado cambia, los suscriptores **se enteran automáticamente**.

> "Es la diferencia entre 50 personas escribiendo en la misma pizarra vs 50 personas suscritas a un canal."

---

## 🛠️ El Store completo en 6 piezas

```javascript
const store = {
  state: { plantillas: [] },
  listeners: [],

  getState() { return this.state; },
  setState(newState) {
    this.state = newState;
    this.notify();
  },
  subscribe(listener) { this.listeners.push(listener); },
  notify() { this.listeners.forEach(fn => fn(this.state)); }
};
```

* `getState` → leer (nunca tocar `state` directo).
* `setState` → cambiar (dispara `notify` automático).
* `subscribe` → registrar oyentes.
* `notify` → avisar a todos los oyentes.

---

## ✨ Cómo se usa

```javascript
function renderizar(state) {
  // dibuja según state.plantillas
}

store.subscribe(renderizar);

// Más tarde, en algún handler:
store.setState({
  ...store.getState(),
  plantillas: [...store.getState().plantillas, nueva]
});
// La UI se actualizó SOLA.
```

> Nunca más llamas `renderizar()` a mano. El store lo hace.

---

## 🔒 Inmutabilidad con spread

❌ Mutación directa (rompe el patrón):

```javascript
state.plantillas.push(nueva);
```

✅ Crear un array nuevo:

```javascript
[...state.plantillas, nueva]    // agregar
state.plantillas.filter(p => p.id !== id)   // eliminar
state.plantillas.map(p => p.id === id ? {...p, ...cambios} : p)   // editar
```

> "Cada `setState` produce un estado nuevo, no muta el anterior."

---

## 🎯 Lab guiado

**Repositorio:** `whatsapp-templates`

**HU0 (~30 min):** Implementar el Store completo (subscribe/getState/setState/notify).
**HU1 (~50 min):** Mostrar plantillas leyendo del Store.
**HU2 (~70 min):** Agregar plantillas con spread + setState.
**HU3 (~90 min):** Eliminar plantillas con filter + setState.

---

## ⚖️ Comparativa: con vs sin Store

| Aspecto | Sin Store | Con Store |
|---|---|---|
| Mutación de estado | Cualquier función | Solo `setState` |
| Sincronización UI | Manual (cada cambio) | Automática (subscribe) |
| Debuggeable | Difícil — quién cambió qué | Fácil — todo pasa por un punto |
| Escalabilidad | Frágil | Robusta |

---

## 🤔 Discusión final

* ¿Qué pasa si en HU0 olvidan llamar `notify()` dentro de `setState`?
* ¿Por qué inmutabilidad con `[...array, x]` y no `push`?
* ¿Cuántos suscriptores podría tener un store en una app real?

> **Reflexión:** "Hoy aprendieron sin saberlo el patrón base de React y Redux. La próxima vez que vean Redux, sentirán déjà vu."

---

## ⏭️ Próxima clase: persistencia

Hoy el estado vive en memoria. Si recargan, desaparece. **C15: JSON + LocalStorage** con `try/catch/finally` (refuerzo de C12).
