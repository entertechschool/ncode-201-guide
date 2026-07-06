# Guía del Facilitador - Clase 15: JSON y LocalStorage

> Tiempo de lectura: 8 minutos | Tercera clase del M4 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **`localStorage`** (NUEVO): almacén del navegador clave→texto. `setItem`, `getItem`, `removeItem`. Persiste hasta que el usuario lo borra.
- **Serializar / deserializar** (NUEVO): `JSON.stringify(obj)` convierte un objeto a texto guardable; `JSON.parse(texto)` lo reconstruye. En M3 solo *leían* JSON de una API; hoy lo *escriben* para persistir.
- **`try/catch` sobre `JSON.parse`** (refuerzo de C12): `JSON.parse` lanza error con texto corrupto. Envolverlo evita que un dato dañado rompa la app.
- **Rehidratar fechas** (detalle clave del lab): JSON convierte un `Date` en string. Al cargar, hay que reconstruirlo con `new Date(p.fecha)`.

> ❗ **Solo 2 herramientas nuevas:** `localStorage` y `JSON.stringify`/`parse`. El operador ternario y `try/catch` son refuerzo. No introduzcas `sessionStorage`, cookies ni IndexedDB.

---

## 🔗 Analogías Útiles

**Serializar ⟷ Empacar para mudanza:** no metes un sofá en una caja; lo desarmas, empacas las piezas y las armas al llegar. `JSON.stringify` empaca tu objeto en texto que `localStorage` puede guardar; `JSON.parse` lo arma de vuelta.

**`localStorage` ⟷ Cuaderno pegado a tu navegador:** cabe poco, no se sincroniza entre dispositivos, funciona offline y sobrevive a recargas. Ideal para datos personales de la app.

**`try/catch` ⟷ Red de seguridad del trapecista:** el salto (parsear) casi siempre sale bien, pero la red existe para el día que no. Sin red, una sola caída (dato corrupto) tumba toda la función.

---

## 📚 Contexto Actual

### `localStorage` en producción real

Figma, Notion y Trello usan `localStorage` como caché local para responder al instante antes de sincronizar con el backend. Spotify guarda volumen, tema y la última canción. **No es un juguete académico**: resuelve UX percibida real.

> **Para contar en clase:** "Cuando abren Notion y ven sus notas al instante, `localStorage` está trabajando. Lo de hoy es lo que ellos usan en producción."

### Por qué el `try/catch` no es opcional

`JSON.parse('texto-cualquiera')` lanza excepción. Si alguien abre DevTools y edita el valor a mano (o un bug viejo dejó datos malformados), la carga falla y la app queda en blanco. **Una comilla mal puesta puede tumbar toda la app.** El proyecto M5 lo exige textualmente; aquí lo aprenden.

**Fuentes:** [MDN: Web Storage API](https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API){:target="_blank"}, [MDN: try...catch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch){:target="_blank"}

---

## 🎯 Momentos Clave de la Clase

### Pregunta Detonadora (QUIZ PRE-LAB)

**Pregunta:** "`localStorage` solo guarda texto. ¿Cómo metes una lista de objetos dentro de algo que solo acepta texto?"

**Respuesta esperada (no la des de inmediato):** hay que **convertir** el objeto a texto (`JSON.stringify`) y al leer **reconstruirlo** (`JSON.parse`).

**Tip:** Deja que propongan ("¿guardo cada campo por separado?"). Llega solo a la idea de serializar; ahí entra la demo.

### Demo Principal — Dañar el `localStorage` en vivo

**Qué mostrar (3 min):** carga la app con plantillas. Recarga: todo OK. Abre DevTools → Application → Local Storage. Edita el valor a `[{titulo` (inválido). Recarga: la app **explota** porque `JSON.parse` falla. Ahora envuelve `JSON.parse` en `try/catch` y repite: la app sobrevive, arranca vacía, y en consola aparece el aviso.

**Script sugerido:**
```
Facilitador: "Mi app funciona. Voy a hacer algo cruel."
[Abre Local Storage en DevTools y edita el valor a basura]
Facilitador: "Recargo... y la app explota."
[Muestra el error en consola, pantalla rota]
Facilitador: "Ahora envuelvo JSON.parse en try/catch..."
[Refactor en vivo]
Facilitador: "Recargo... sobrevive y avisa 'datos corruptos'. Esa es la diferencia."
```

**Plan B (si la demo falla):** CodePen pre-armado con las dos versiones (con / sin `try/catch`) en pestañas.

### Transición al Lab

**Momento crítico:** HU1–HU2 son la mecánica de guardar/cargar. HU3 (`try/catch`) es lo que vuelve la app profesional.

**Script sugerido:**
```
Facilitador: "HU1 guarda, HU2 carga, HU4 vacía, HU5 recuerda el filtro. Mecánica.
HU3 es donde su app se vuelve PROFESIONAL: aguanta datos corruptos.
Si la saltan, su app de M5 fallará el primer día que alguien toque localStorage."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Romper el `localStorage` a propósito" (en HU3)

> "Abran DevTools → Application → Local Storage. Editen el valor a `[{titulo`. Recarguen. Sin `try/catch`, ¿qué pasa?"

**Dinámica sugerida:**
```
Facilitador: "¿Quién vio la app rota? Manos arriba."
[Cuenta]
Facilitador: "Ahora envuelvan JSON.parse en try/catch. Vuelvan a romper."
Facilitador: "La app SOBREVIVE. Esa es la diferencia entre prototipo y producción."
```

### Dinámica 2: "¿Dónde quedó mi fecha?" (en HU2)

> "Recargaron y la fecha falla. ¿Por qué? ¿Qué tipo era antes y qué tipo es ahora?"

**Dinámica sugerida:**
```
Facilitador: "Antes era un objeto Date. Tras JSON, es un string."
Facilitador: "JSON solo guarda datos simples. Rehidraten con new Date(p.fecha) en render()."
```

### Dinámica 3: "¿Cuándo SÍ y cuándo NO `localStorage`?" (antes del cierre)

> "Den 2 ejemplos donde usarían persistencia en el cliente y 2 donde NO."

**Dinámica sugerida:**
```
Facilitador: "SÍ: preferencias, borradores, una colección personal como la de hoy.
NO: datos sensibles (cualquier JS de la página los lee), o datos que deben compartirse entre usuarios."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Guardar con `stringify` (HU1)

```javascript
function guardar() {
  localStorage.setItem(CLAVE, JSON.stringify(state.plantillas));
}
```

**Tip:** Sin `JSON.stringify`, queda `"[object Object]"` y al recuperar es basura. Insiste en este detalle.

### Ejemplo 2: Cargar con `try/catch` (HU3)

```javascript
function cargar() {
  const guardado = localStorage.getItem(CLAVE);
  if (!guardado) return [];
  try {
    return JSON.parse(guardado);
  } catch (error) {
    console.warn("Datos corruptos, empiezo de cero:", error);
    return [];
  }
}
```

**Tip:** Resalta las 3 partes: el caso "no hay nada" (`return []`), el intento (`try`) y la red (`catch`).

### Ejemplo 3: Rehidratar la fecha en `render()` (HU2)

```javascript
// p.fecha llega como string tras JSON.parse → reconstruir
const texto = new Date(p.fecha).toLocaleDateString("es-PE");
```

**Tip:** Es la lección viva de "JSON solo guarda datos simples".

### Ejemplo 4: Vaciar con `removeItem` (HU4)

```javascript
state.plantillas = [];
localStorage.removeItem(CLAVE);
render();
```

**Tip:** Si solo limpian el estado y no el navegador, al recargar reaparecen. Hay que limpiar ambos.

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| Al recuperar veo `"[object Object]"` | Olvidaron `JSON.stringify` al guardar | `setItem` siempre con `JSON.stringify` |
| No aparece nada en Local Storage | `guardar()` no se llama tras los cambios | Llamar `guardar()` dentro de `render()` |
| Lista vacía al recargar | No cargan el estado al arrancar | `state.plantillas = cargar()` antes del primer `render()` |
| `Invalid Date` o error con la fecha | `p.fecha` es string tras JSON | Rehidratar con `new Date(p.fecha)` en `render()` |
| Pantalla en blanco al recargar | `JSON.parse` falló con dato corrupto | Envolver en `try/catch` (HU3) |
| Al recargar reaparecen tras vaciar | Solo limpiaron el estado, no el navegador | Añadir `localStorage.removeItem(CLAVE)` |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Explica por qué `JSON.stringify`/`parse` son necesarios (`localStorage` solo guarda texto).
- Predice que sin `try/catch` un dato corrupto rompe la app.
- Entiende que un `Date` se vuelve string y hay que rehidratarlo.

### El estudiante NECESITA AYUDA cuando:
- Llama `setItem(CLAVE, objeto)` sin `stringify`.
- Olvida que `getItem` devuelve `null` la primera vez.
- Copia el `try/catch` sin saber qué lo dispara.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | HU1 | Agregar plantilla → ver la clave `whatsapp-templates` en DevTools → Local Storage con JSON. |
| ~55' | HU2 | Recargar la página → las plantillas siguen ahí con su fecha correcta. |
| ~80' | HU3 | Corromper la clave a mano y recargar → la app no explota, arranca vacía, avisa en consola. |
| ~100' | HU4 | "Vaciar todo" deja lista y Local Storage limpios; el indicador `#estado` cambia. |
| ~115' | HU5 | Escribir un filtro y recargar → el filtro sigue aplicado y el buscador lo muestra. |

---

## 🧑‍🏫 Tips de Facilitación

### Si saltan HU3 "porque ya funciona":
> "Funciona con datos limpios. Pero su app de M5 fallará el primer día que alguien toque localStorage. HU3 es la diferencia entre demo y producción."

### Si alguien pregunta por `sessionStorage`, cookies o IndexedDB:
> "Hoy solo `localStorage`. Lo otro tiene otros usos y lo verán más adelante. Una herramienta nueva a la vez."

### Si la mayoría termina HU2 antes:
- Mándalos directo a HU3. No es opcional pedagógicamente.

### Si abusan del operador ternario:
> "El ternario es para asignaciones simples. Si necesitan anidar dos, usen `if`. Claridad antes que ser cortos."

---

## ❓ Preguntas Frecuentes

### P: ¿Puedo guardar funciones o un `Date` en `localStorage`?
**R:** Funciones, no (`JSON.stringify` las ignora). Un `Date` se guarda como texto y al leer hay que rehidratarlo con `new Date(...)`. Solo datos simples sobreviven intactos.

### P: ¿`getItem` de una clave que no existe es un error?
**R:** No. Devuelve `null`. Por eso el `if (!guardado) return []` antes de parsear: la primera vez es normal que no haya nada.

### P: ¿Cuánto cabe en `localStorage`?
**R:** ~5 MB por dominio. Suficiente para texto y configuraciones, no para imágenes o videos.

### P: ¿Y si quiero guardado automático sin pensar en cada acción?
**R:** Ya lo tienen: `guardar()` vive dentro de `render()`, y todo cambio termina en `render()`. Persistencia automática sin botón.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C12 (M3) | `try/catch` | Refuerzo aplicado a `JSON.parse` de datos corruptos |
| C13–C14 | Estado (`state.plantillas`), `render()` | Hoy ese estado persiste entre sesiones |
| M3 | Leer JSON de una API | Hoy invierten el flujo: *escriben* JSON para guardar |

### Conexión con la Próxima Clase (C16)

Al cerrar, planta la semilla:

> "Hoy su Gestor de Plantillas recuerda lo que escriben, aunque cierren el navegador. C16 cierra el Módulo 4: integran estado y persistencia, pulen la app y la dejan lista para el proyecto integrador. Todo lo que viene en M5 son piezas que ya conocen."

**Pre-work implícito:** Que rompan deliberadamente su `localStorage` y comparen el comportamiento con y sin `try/catch`.

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Cuántos llegaron a HU3? Si menos del 70%, refuerza al inicio de C16.
- ¿Entendieron por qué la fecha falla tras recargar? Es el "ajá" más común de la clase.
- ¿Alguien preguntó por cookies / IndexedDB? Recuérdate de no abrir ese tema aquí.
- ¿La demo de "romper el localStorage" generó el efecto deseado? Si no, prueba otra forma de mostrarlo.
