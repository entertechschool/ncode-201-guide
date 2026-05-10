# Guía del Facilitador - Clase 15: JSON y LocalStorage

> Tiempo de lectura: 8 minutos | Tercera clase del M4 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Serialización**: convertir un objeto JS en string con `JSON.stringify(obj)`. LocalStorage solo guarda strings.
- **Deserialización**: convertir un string JSON de vuelta a objeto con `JSON.parse(str)`. Donde puede fallar.
- **LocalStorage API**: `setItem(key, value)`, `getItem(key)`, `removeItem(key)`. Datos persisten hasta que el usuario los borre.
- **`try/catch/finally` aplicado**: refuerzo de C12 (M3) ahora obligatorio en `cargarPlantillas()` — porque `JSON.parse` puede explotar con datos corruptos.

---

## 🔗 Analogías Útiles

**Serialización <> Empacar para mudanza:**
No puedes meter un sofá en una caja. Lo desarmas, empacas las piezas en una caja con etiqueta. Al llegar, lo armas. JSON es esa caja — empaca el objeto en texto plano que LocalStorage puede guardar.

**LocalStorage <> Cuaderno de notas en tu computadora:**
Cabe poca información (~5 MB). No se sincroniza con otros dispositivos. Funciona offline. Si formateas la computadora, se pierde. Útil para datos personales, inútil para datos compartidos o sensibles.

**`try/catch/finally` <> Mecánico revisando un auto usado:**
Intenta arrancar (`try`). Si no prende, busca el problema (`catch`). En cualquier caso, cierra el capó al terminar (`finally`). Aquí: intentas parsear, si falla limpias el localStorage corrupto, siempre actualizas el indicador "Listo".

---

## 📚 Contexto Actual

### LocalStorage en producción real

Empresas como Figma, Notion y Trello usan LocalStorage como caché local para responder instantáneamente antes de sincronizar con el backend. Spotify guarda volumen, tema y posición de la última canción. **No es juguete académico** — es una API que resuelve problemas reales de UX percibida.

> **Para contar en clase:** "Cuando abren Notion offline y ven sus notas, LocalStorage está trabajando. Lo que aprenden hoy es lo que ellos usan en producción."

### Por qué `try/catch/finally` es OBLIGATORIO con LocalStorage

`JSON.parse('texto-cualquiera')` lanza excepción. ¿Qué pasa si un alumno (o un hacker) abre DevTools y modifica el valor en LocalStorage a mano? La app explota. **Sin `try/catch`, una sola comilla mal puesta rompe toda la app**. M5 lo exige textualmente — aquí los alumnos aprenden el patrón.

**Fuentes:** [MDN: Web Storage API](https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API){:target="_blank"}, [MDN: try...catch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch){:target="_blank"}

---

## 🎯 Momentos Clave de la Clase

### Demo Principal — Dañar el LocalStorage en vivo

**Qué mostrar:** 3 minutos. Carga la app con plantillas. Recarga, todo OK. Abre DevTools → Application → Local Storage. Edita el valor manualmente a `no-es-json` (texto inválido). Recarga la página. La app **explota** porque `JSON.parse` falla. Ahora envuelve `JSON.parse` en `try/catch/finally` y muéstrales: la app sobrevive, muestra mensaje claro, y el indicador termina en "Listo" siempre.

**Script sugerido:**
```
Facilitador: "Mi app funciona. Pero voy a hacer algo cruel.
[Abre LocalStorage en DevTools]
Facilitador: "Cambio este valor a basura.
[Edita a algo inválido]
Facilitador: "Recargo... y la app explota.
[Muestra error en consola, pantalla rota]
Facilitador: "Ahora añado try/catch/finally...
[Refactor en vivo]
Facilitador: "Recargo... la app sobrevive, dice 'datos corruptos, empezando de cero'. Esa es la diferencia."
```

**Plan B (si la demo falla):** CodePen pre-armado con las dos versiones (con/sin try-catch) en pestañas.

### Transición al Lab

**Momento crítico:** HU1-HU3 son rutina. HU4 (`try/catch/finally`) es la clase real.

**Script sugerido:**
```
Facilitador: "HU1, HU2, HU3: guardar, cargar, reset. Rutina.
HU4 es donde su app se vuelve PROFESIONAL: protege contra datos corruptos.
Si saltan HU4, su app de M5 va a fallar el primer día que alguien toque
localStorage a mano. No es opcional."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Romper LocalStorage a propósito"

Antes del Checkpoint 4:

> "Abran DevTools → Application → Local Storage. Editen el valor a `'basura'`. Recarguen. Sin `try/catch/finally`, ¿qué pasa?"

**Dinámica sugerida:**
```
Facilitador: "¿Quién vio la app rota? Manos arriba.
[Cuenta]
Ahora envuelvan JSON.parse en try/catch/finally.
Vuelvan a romper. ¿Qué cambió?
La app SOBREVIVE. ESA es la diferencia entre prototipo y producción."
```

### Dinámica 2: "Los 3 escenarios de `finally`"

Durante HU4:

> "Prueben los 3 escenarios: vacío, válido, corrupto. Confirmen que el indicador 'Cargando…' siempre termina en 'Listo'."

**Dinámica sugerida:**
```
Facilitador: "Si el indicador queda en 'Cargando…' en algún caso, su finally está mal puesto.
Es la prueba más simple: el indicador es un termómetro. Siempre 'Listo' al final."
```

### Dinámica 3: "¿Por qué LocalStorage y no IndexedDB?"

Antes del cierre:

> "Cuándo sí y cuándo NO LocalStorage. Den 2 ejemplos de cada caso."

**Dinámica sugerida:**
```
Facilitador: "LocalStorage: notas personales, preferencias, carrito de compras local.
NO LocalStorage: 50MB de datos, sincronización entre pestañas en tiempo real,
datos sensibles (es accesible desde cualquier JS de la página).
La elección importa."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Guardar con stringify

**Cuándo usarlo:** En HU1.

```javascript
function guardarPlantillas() {
  localStorage.setItem('plantillas', JSON.stringify(store.getState().plantillas));
}
```

**Tip:** Sin `JSON.stringify`, queda `"[object Object]"` y al recuperar es basura. Insiste en este detalle.

### Ejemplo 2: Cargar con try/catch/finally (verbatim)

**Cuándo usarlo:** En HU4.

```javascript
function cargarPlantillas() {
  document.getElementById('estado').textContent = 'Cargando...';
  try {
    const raw = localStorage.getItem('plantillas');
    if (!raw) return [];
    const datos = JSON.parse(raw);
    if (!Array.isArray(datos)) throw new Error('Formato corrupto');
    return datos;
  } catch (error) {
    console.error('Error al cargar:', error);
    alert('Datos corruptos. Empezando de cero.');
    localStorage.removeItem('plantillas');
    return [];
  } finally {
    document.getElementById('estado').textContent = 'Listo';
  }
}
```

**Tip:** Resaltar las 4 secciones (`try`, validación, `catch`, `finally`) con colores en pizarra.

### Ejemplo 3: Reset

**Cuándo usarlo:** En HU3.

```javascript
function resetearPlantillas() {
  localStorage.removeItem('plantillas');
  store.setState({ ...store.getState(), plantillas: [] });
}
```

**Tip:** Notar que se actualiza tanto LocalStorage como el Store. Si solo limpian uno, queda inconsistencia.

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| Al recuperar veo `"[object Object]"` | Olvidaron `JSON.stringify` al guardar | Verificar que `setItem` siempre va con `stringify` |
| `JSON.parse` falla con `null` | Es la primera vez, no hay datos guardados | Validar `if (!raw) return [];` antes de parsear |
| El indicador queda en "Cargando..." | El `finally` no se ejecuta porque hay `return` dentro del `try` sin catch | `finally` SÍ corre con return — revisar implementación |
| La app rompe al borrar localStorage manualmente | No envolvieron `JSON.parse` en `try/catch` | Aplicar HU4 obligatoria |
| El store y el localStorage no se sincronizan | Olvidaron actualizar uno de los dos en alguna operación | Hacer que `subscribe` del Store dispare `guardarPlantillas` automáticamente |
| El operador ternario lo usan en todas partes | Querían "verse modernos" | Recordar: ternario solo si mejora claridad |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Explica sin titubeos por qué `JSON.stringify/parse` son necesarios (LocalStorage solo strings).
- Predice qué pasa con la app si `JSON.parse` falla y NO hay `try/catch`.
- Aplica `finally` para el indicador sin que se lo recuerden.

### El estudiante NECESITA AYUDA cuando:
- Llama `setItem(key, obj)` sin stringify.
- Olvida que `getItem` devuelve `null` si la clave no existe.
- Pone `removeItem` dentro del `try` en vez del `catch`.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | HU1 lista | Agregar plantilla → ver clave `plantillas` en DevTools Application con JSON válido. |
| ~60' | HU2 lista | Recargar página → plantillas siguen ahí. |
| ~80' | HU3 lista | Click "Eliminar Todo" → localStorage y store quedan vacíos. |
| ~110' | HU4 lista | Romper localStorage manualmente → app sobrevive, mensaje claro, indicador "Listo". |

---

## 🧑‍🏫 Tips de Facilitación

### Si saltan HU4 "porque ya funciona":
> "Funciona con datos limpios. Pero su app de M5 va a fallar el primer día que alguien toque localStorage. HU4 es la diferencia entre demo y producción."

### Si alguien quiere usar IndexedDB:
> "Mejor que entiendan LocalStorage primero. IndexedDB es Code 301."

### Si la mayoría termina HU3 antes:
- Mándalos directamente a HU4. No es opcional pedagógicamente.

### Si alguien pregunta por cookies:
> "Para esta clase no. Cookies tienen otros usos (sesiones del servidor). LocalStorage es lado cliente puro."

---

## ❓ Preguntas Frecuentes

### P: ¿Puedo guardar funciones en LocalStorage?
**R:** No. `JSON.stringify` ignora funciones. Solo datos (números, strings, booleans, arrays, objetos planos).

### P: ¿LocalStorage es seguro para guardar tokens de autenticación?
**R:** No. Cualquier JS de la página puede leerlo (incluye XSS). Para tokens, mejor cookies httpOnly. Esto es Code 301.

### P: ¿`sessionStorage` y `localStorage` son distintos?
**R:** Sí: `sessionStorage` muere al cerrar la pestaña, `localStorage` persiste. Misma API.

### P: ¿Cuánto cabe en LocalStorage?
**R:** ~5 MB por dominio. Suficiente para text y configs, NO para imágenes o videos.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C12 (M3) | `try/catch/finally` con spinner | Refuerzo aplicado a LocalStorage corrupto |
| C14 | Patrón Store | Hoy haces que el Store persista entre sesiones |
| C10 (M3) | Callbacks | `subscribe(guardarPlantillas)` automatiza persistencia |

### Conexión con la Próxima Clase (C16)

Al cerrar, planta la semilla:

> "Hoy persistieron datos manualmente. La próxima clase: **guardado automático** suscrito al Store (cada `setState` dispara `guardarPlantillas` solo) + **sincronización UI** + **delegación de eventos** + bonus de **cálculo sobre estado**. Es la última clase antes del proyecto integrador M5 — todo lo que viene en M5 son piezas que ya conocen."

**Pre-work implícito:** Que prueben deliberadamente romper su localStorage manualmente y compartan capturas del comportamiento (con vs sin try/catch).

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Cuántos llegaron a HU4? Si menos del 70%, refuerza al inicio de C16 antes de empezar.
- ¿Alguien intentó IndexedDB o cookies? Marca para Code 301.
- ¿Confundieron `getItem(null)` con un error real? Refuerza el "null es normal la primera vez".
- ¿La demo de "romper LocalStorage en vivo" generó el efecto deseado? Si no, prueba otra forma de mostrarlo.
