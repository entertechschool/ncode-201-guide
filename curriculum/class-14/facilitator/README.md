# Guía del Facilitador - Clase 14: Patrón Store

> Tiempo de lectura: 8 minutos | Segunda clase del M4 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Patrón Store**: objeto único que centraliza el estado de la app y controla quién lo lee y lo modifica. Una sola fuente de verdad.
- **`getState`**: método para leer el estado actual. Nunca acceso directo a `state`.
- **`setState`**: método para reemplazar el estado por uno nuevo (inmutable). Internamente dispara `notify`.
- **`subscribe`**: registrar una función que se ejecutará cada vez que el estado cambie. La UI se suscribe y deja de necesitar llamadas manuales a `renderizar`.
- **`notify`**: avisa a TODOS los suscriptores que el estado cambió. Lo dispara `setState` automáticamente.

---

## 🔗 Analogías Útiles

**Store <> Pizarra del equipo con un facilitador:**
Nadie puede borrar la pizarra directamente. Para cambiar lo que está escrito, le pides al facilitador. Él aplica el cambio Y avisa al equipo. Eso es exactamente `setState` + `notify`.

**`subscribe` <> Suscripción a un canal:**
Cuando te suscribes a un canal de noticias, recibes cada nueva publicación sin tener que entrar a buscar. Tu función "se suscribe" y el store le manda el nuevo estado automáticamente.

**Inmutabilidad <> Tener fotocopias del documento:**
En vez de tachar y reescribir el original, sacas una fotocopia, modificas la copia y la pones encima. Si algo sale mal, el original sigue ahí. `[...state.plantillas, nueva]` es la fotocopia.

**Sin Store <> Sin Store con 50 funciones:**
Imagina 50 personas con marcadores escribiendo en la misma pizarra al mismo tiempo. Nadie sabe quién cambió qué. Eso es estado global sin Store.

---

## 📚 Contexto Actual

### El Patrón Store: de Facebook a tu app vanilla

En 2014 Facebook publicó **Flux** — un patrón arquitectónico donde el estado fluye en una sola dirección: acción → store → vista. Redux (2015), Vuex, Pinia y `useReducer` de React son descendientes directos. Lo que tus alumnos hacen hoy con `store.getState/setState/subscribe` es Redux en versión mínima viable, sin librerías.

> **Para contar en clase:** "El día que aprendan Redux van a decir 'esto ya lo hice en clase'. La sintaxis cambia, el patrón es idéntico."

### Inmutabilidad: el bug invisible que mata apps

Cuando dos partes del código tienen referencia al mismo array y una lo muta, la otra ve cambios que no pidió. Es el bug más frustrante de debuggear porque no hay error explícito — solo comportamiento raro. El patrón `[...arr, nuevo]` evita esto porque cada `setState` produce un array nuevo, no muta el anterior.

**Fuentes:** [Flux architecture](https://facebookarchive.github.io/flux/){:target="_blank"}, [Redux docs](https://redux.js.org){:target="_blank"}

---

## 🎯 Momentos Clave de la Clase

### Demo Principal — El store completo en 30 líneas

**Qué mostrar:** 4 minutos en vivo. Construye el objeto `store` con `state`, `listeners`, `getState`, `setState`, `subscribe`, `notify`. Crea una función `renderizar` y `store.subscribe(renderizar)`. Llama `store.setState({ plantillas: [...] })` desde la consola — la pantalla se actualiza sola. Llama dos veces más — se actualiza dos veces más, sin que invoques `renderizar` manualmente.

**Script sugerido:**
```
Facilitador: "Miren mi consola. Voy a cambiar el estado tres veces seguidas:
[store.setState({...}) x3]
Facilitador: "¿Vieron? Yo no llamé a renderizar ni una sola vez.
El store lo hizo por mí porque renderizar está suscrito. Esa es la magia."
```

**Plan B (si la demo falla):** Tener un CodePen pre-armado con la demo funcionando. Mostrar y narrar.

### Transición al Lab

**Momento crítico:** La HU0 (Store completo) es el corazón de la clase. Si la pasan rápido, HU1-HU3 son consecuencia natural. Si la pasan sin entender, no hay forma de salvar HU1-HU3.

**Script sugerido:**
```
Facilitador: "HU0 es donde van a pelear. NO sigan a HU1 hasta que su demo funcione:
agregar al store debe disparar render sin que ustedes lo llamen.
Si llaman render manualmente, retrocedan."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Buscar la llamada manual"

Después del Checkpoint 1, pide a los alumnos que revisen su código:

> "Si ven una sola línea que diga `renderizar()` fuera del `subscribe`, levanten la mano."

**Dinámica sugerida:**
```
Facilitador: "Cada `renderizar()` manual es una oportunidad de bug.
Si su store funciona bien, NUNCA tienen que llamarlo a mano.
Solo `store.setState(...)`. El render se dispara solo."
```

### Dinámica 2: "Romper la inmutabilidad a propósito"

Después de HU2:

> "Cambien `[...state.plantillas, nueva]` por `state.plantillas.push(nueva)`. Recarguen y prueben."

**Dinámica sugerida:**
```
Facilitador: "¿Qué pasó? Aparentemente nada. La app sigue funcionando.
Pero ahora pierden la capacidad de comparar 'antes vs después'.
Si después agregan undo/redo, este pequeño cambio rompe TODO.
Por eso inmutabilidad."
```

### Dinámica 3: "Suscribir dos funciones"

Reto rápido al final del lab:

> "Suscriban una segunda función `console.log` al store. ¿Qué pasa al hacer `setState`?"

**Dinámica sugerida:**
```
Facilitador: "Ahora son DOS suscriptores. Cada cambio dispara las dos.
Imaginen 5 componentes UI suscritos al mismo store. Ese es el poder."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Store completo (mínimo viable)

**Cuándo usarlo:** Si alguien se atasca en HU0.

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

**Tip:** En pizarra, dibuja flechas: `setState → state se reemplaza → notify → cada listener corre`.

### Ejemplo 2: Agregar inmutablemente

**Cuándo usarlo:** Si alguien hace `state.plantillas.push(...)`.

```javascript
const actual = store.getState();
store.setState({
  ...actual,
  plantillas: [...actual.plantillas, nueva]
});
```

**Tip:** "El spread es tu mejor amigo. Si no lo usas, mutas. Si mutas, el subscribe puede no detectar el cambio en frameworks reales."

### Ejemplo 3: Render reactivo

**Cuándo usarlo:** Si confunden HU0 con HU1.

```javascript
function renderizar(state) {
  const lista = document.querySelector('#listaPlantillas');
  lista.innerHTML = '';
  state.plantillas.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p.titulo;
    lista.appendChild(li);
  });
}

store.subscribe(renderizar);
renderizar(store.getState()); // primera vez
```

**Tip:** Esa primera llamada manual es porque `subscribe` no dispara inmediatamente. Es la única vez que `renderizar` se llama a mano.

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| `renderizar` se llama dos veces por cada cambio | Suscribieron dos veces la misma función | Una sola llamada a `subscribe` por listener |
| `setState` no dispara el render | Olvidaron llamar `this.notify()` dentro de `setState` | Revisar la implementación del Store |
| La lista no se actualiza visualmente | Mutaron con `push` en vez de `setState` | Reemplazar `push` por spread + setState |
| `this` es undefined en `notify` | Llamaron `setState` como callback sin `bind` | Usar arrow functions o estructura como en el ejemplo |
| Después de `setState`, `getState` devuelve lo viejo | Asignaron a `state` con `=` en vez de pasar por `setState` | Solo `setState` puede modificar; nunca `store.state = ...` directo |
| Render dispara render dispara render… | Dentro de `renderizar` están haciendo `setState` | Render solo lee del estado, nunca lo modifica |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Explica sin titubeos por qué `subscribe` se llama UNA vez pero se ejecuta MUCHAS.
- Distingue `getState` (leer) de `setState` (cambiar) sin confundir.
- Reemplaza `.push()` por spread sin que se lo recuerden.

### El estudiante NECESITA AYUDA cuando:
- Llama a `renderizar()` manualmente después de cada `setState`.
- Hace `store.state = nuevoEstado` directo, sin pasar por `setState`.
- No entiende por qué `state.plantillas.push(x)` "también funciona visualmente".

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | HU0 lista | Desde consola: `store.setState({plantillas:[{titulo:'X'}]})` actualiza la UI sin llamadas manuales. |
| ~60' | HU1+HU2 listas | Submit del form agrega plantilla. Aparece en pantalla. El array NO es mutado (verificable con `Object.isFrozen` o comparando referencias antes/después). |
| ~90' | HU3 lista | Click en botón eliminar → plantilla desaparece. Sin recarga. Estado consistente. |

---

## 🧑‍🏫 Tips de Facilitación

### Si alguien dice "esto es muy parecido a React":
> "Exacto. Lo que aprenden hoy en vanilla es el patrón que React encapsula en `useState`. Cuando lleguen a React no van a aprender un patrón nuevo — solo otra sintaxis."

### Si alguien quiere usar Redux directo:
> "Mejor entiendan el patrón sin librería primero. Cuando agreguen Redux, sabrán qué problema resuelve y por qué."

### Si la mayoría termina antes:
- Pídeles agregar un **segundo subscriber** que loguee cambios al store. Esto refuerza el patrón sin agregar complejidad.

### Si están atorados en HU0:
- Pasa a una pizarra y dibuja la secuencia: `setState → state cambia → notify → listeners corren`. Sin código.

---

## ❓ Preguntas Frecuentes

### P: ¿Por qué no usar simplemente `addEventListener` para sincronizar UI?
**R:** Funciona, pero acopla cada cambio del estado con un evento DOM. El Store desacopla: el estado puede cambiar por mil razones, todas pasan por `setState`.

### P: ¿Puedo tener varios stores?
**R:** Técnicamente sí, en producción a veces sí (auth store + ui store). Para esta clase, **uno solo**. Más stores = más complejidad sin beneficio aquí.

### P: ¿`setState` es síncrono?
**R:** En esta implementación vanilla sí — los listeners corren inmediatamente. En React es asíncrono (batched). Diferencia que verán en Code 301.

### P: ¿Y la inmutabilidad con objetos anidados?
**R:** Para esta clase basta con spread superficial. Inmutabilidad profunda (Immer, Immutable.js) es Code 301.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C13 | Estado local vs global | Hoy le pones una API formal al estado global. |
| C10 (M3) | Callbacks como ciudadanos de primera clase | `subscribe` es callback puro. |
| C11 (M3) | `addEventListener` | El submit del form dispara `setState`. |

### Conexión con la Próxima Clase (C15)

Al cerrar, planta la semilla:

> "Hoy tienen un Store funcionando. Pero si cierran el navegador y vuelven a abrir, todo desaparece. La próxima clase aprenden **JSON + LocalStorage** para que ese estado persista. Y agregamos `try/catch/finally` (refuerzo de C12) para que la app no se rompa si LocalStorage tiene datos corruptos. Es la combinación obligatoria para M5."

**Pre-work implícito:** Que prueben recargar su app hoy y vean cómo todo se pierde. Esa fricción motiva C15.

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Cuántos siguieron llamando `renderizar()` manualmente después de HU0? Si más del 30%, refuerza en C15 antes de empezar.
- ¿Alguien intentó mutar con `push`? Marca como "necesita refuerzo de inmutabilidad" antes de Code 301.
- ¿Cuántos preguntaron por React/Redux? Buena señal — están conectando con el ecosistema mayor.
- ¿La HU0 tomó más de 40 min para el promedio? Considera dar más tiempo de demo en la próxima cohorte.
