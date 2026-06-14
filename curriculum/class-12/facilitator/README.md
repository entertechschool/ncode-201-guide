# Guía del Facilitador — Clase 12: Manejo de Errores y Estados (cierre M3)

> Tiempo de lectura: 8 minutos | Última clase del M3 · Lab evaluado | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **`try / catch`** (NUEVO): `try` ejecuta código que podría fallar; `catch (error)` lo atrapa para que la app no muera. `error.message` trae la descripción.
- **`throw new Error(msg)`** (NUEVO): lanzar un error propio. Interrumpe el `try` y salta al `catch`.
- **`response.ok`** (NUEVO): `fetch` **no** falla solo por un 404. Hay que revisar `response.ok` y lanzar el error manualmente. Punto clave de la clase.
- **`finally`** (NUEVO): corre **siempre**, haya éxito o error. Se usa para ocultar el spinner sin importar el resultado.
- **Estados de UI** (NUEVO): loading / success / error / empty. Una app profesional comunica en qué estado está.
- **Markdown** (NUEVO, documentación): títulos, listas, links, código. Se enseña aquí porque es la clase más liviana en JS y la entrega evaluada → se pide el `README.md`.

> ❗ **Dos baldes distintos:** los conceptos JS (try/catch/finally/ok) y la habilidad de documentación (Markdown). Markdown no es un tema de programación; es carga ligera y encaja en la clase con menos JS nuevo.

---

## 🔗 Analogías Útiles

**try/catch ⟷ Red de seguridad del trapecista:** el trapecista intenta el truco (`try`); si cae, la red lo atrapa (`catch`) y el show continúa. Sin red, una caída termina la función.

**throw ⟷ Tirar de la alarma:** cuando detectas algo mal (`!response.ok`), tú decides lanzar la alarma (`throw`) con un mensaje. No esperas a que el sistema se caiga solo.

**finally ⟷ Apagar la luz al salir:** entres como entres o salgas como salgas de la habitación, al final apagas la luz. El spinner se oculta pase lo que pase.

**response.ok ⟷ Recibir un paquete dañado:** el repartidor llegó (`fetch` no falló), pero la caja está rota (404). Tienes que **revisarla** antes de usar lo de adentro.

---

## 📚 Contexto Actual

### Por qué `fetch` no falla en 404 (el malentendido clave)

`fetch` solo rechaza su promesa si la petición **no se pudo hacer** (sin red, DNS, CORS). Si el servidor responde —aunque sea con 404— `fetch` lo considera "exitoso a nivel de red". Por eso hay que revisar `response.ok` y `throw` manualmente. Es el error conceptual #1 de la clase; insiste en él.

### Por qué `finally` y no "la línea al final del try"

Si pones `spinner.add('hidden')` al final del `try` y antes ocurre un `throw`, esa línea **nunca corre** (saltó al `catch`) y el spinner se queda pegado. `finally` garantiza que corra siempre. El reto autónomo lo demuestra en vivo.

### Por qué Markdown se enseña aquí

Es la clase con menos conceptos JS nuevos (6) y es la entrega evaluada: "documenta tu proyecto" es el momento natural. Antes (C09-C11) no se pedía README porque Markdown no se había enseñado. Desde hoy queda disponible para M4/M5.

**Fuentes:** [MDN: try...catch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch){:target="_blank"}, [MDN: Response.ok](https://developer.mozilla.org/es/docs/Web/API/Response/ok){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Refuerzo práctico | 20 min | El fallo de C11 en vivo. ¿Por qué se rompe? |
| Debate + Demo | 20 min | `try/catch`, `response.ok`, `finally`. |
| Break | 10 min | Descanso. |
| Lab (HU1-HU3 + README) | 100 min | HU1 `try/catch` · HU2 `throw`/`ok` · HU3 estados/`finally` · README |
| Síntesis + Test | 20 min | Cierre del módulo + test diagnóstico M3. |

---

## 🎯 Momentos Clave de la Clase

### Demo 1 — el fallo de C11 (3 min)
Busca "pikachuu" con la app de C11. Pantalla rota / error en consola. "Una app real no puede hacer esto. Hoy lo arreglamos."

### Demo 2 — fetch "ok" con 404 (4 min)
```javascript
const r = await fetch("https://pokeapi.co/api/v2/pokemon/xxxx");
console.log(r.ok, r.status);   // false 404 — ¡pero fetch NO lanzó error!
```
"Mira: fetch no falló. Por eso revisamos `response.ok` nosotros." **La idea central.**

### Demo 3 — el spinner pegado (3 min)
Pon el `add('hidden')` al final del `try`, fuerza un error: el spinner se queda. Muévelo a `finally`: se oculta. "Por eso existe `finally`."

### Transición al Lab
```
"HU1: envuelven el fetch en try/catch (deja de romperse).
 HU2: revisan response.ok y lanzan 'No se encontró' con throw.
 HU3: spinner + estado vacío, y finally que lo oculta siempre.
 Y documentan: su primer README en Markdown.
 Esto es evaluado — revisen la rúbrica."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "¿Falla o no?" (tras Demo 2)
Lista situaciones (sin internet / nombre inexistente / API caída 500 / nombre válido) y que digan si `fetch` rechaza o no, y si `response.ok` es true/false.

### Dinámica 2: "¿Dónde va la línea?" (en HU3)
Das una línea (`ocultarSpinner()`) y tres lugares (try, catch, finally). ¿Dónde garantiza que siempre corra?

### Dinámica 3: "Escribe el mensaje" (en HU2)
Que redacten un buen mensaje de error para "no encontrado". Compara vagos ("error") vs claros ("No se encontró 'pikachuu'").

---

## 💡 Ejemplos Listos para Usar

### El patrón completo (referencia)
```javascript
spinner.classList.remove("hidden");
try {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`No se encontró "${nombre}"`);
  const data = await response.json();
  render([adaptarPokemon(data)]);
} catch (error) {
  mensaje.textContent = error.message;
  mensaje.classList.remove("hidden");
} finally {
  spinner.classList.add("hidden");
}
```

### Markdown mínimo del README
```markdown
# Pokédex
Buscador que consume la PokeAPI.
## Tecnologías
- JavaScript (fetch, async/await)
- [PokeAPI](https://pokeapi.co/)
```

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| Buscar "xxxx" no muestra error | No revisan `response.ok` | `if (!response.ok) throw new Error(...)` |
| El spinner se queda pegado | Lo ocultan en el `try`, no en `finally` | Mover a `finally` |
| `catch` no atrapa nada | El error ocurre fuera del `try` | Envolver TODO lo que puede fallar |
| Mensaje de error vacío | Usaron `error` en vez de `error.message` | `mensaje.textContent = error.message` |
| El README no renderiza | Sintaxis Markdown mal (faltó espacio tras `#`) | `# Título`, con espacio |
| Múltiples errores se acumulan | No limpian `#mensaje` antes de cada búsqueda | `mensaje.classList.add("hidden")` al inicio |

---

## ✅ Señales de Comprensión

**ENTIENDE cuando:**
- Explica por qué `fetch` no falla en 404 y hay que revisar `response.ok`.
- Sabe que `throw` salta al `catch`.
- Justifica `finally` con el caso del spinner pegado.
- Escribe un README con la estructura básica en Markdown.

**NECESITA AYUDA cuando:**
- Espera que `fetch` lance error solo ante un 404.
- Pone el ocultar-spinner en el `try` y no entiende por qué se pega.
- Da mensajes de error vagos o usa el objeto `error` completo.
- Confunde la sintaxis básica de Markdown.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | HU1 | Con red caída, la búsqueda muestra mensaje en vez de romperse. |
| ~60' | HU2 | "pikachuu" → "No se encontró…"; "pikachu" → tarjeta. |
| ~90' | HU3 | Spinner aparece y SIEMPRE desaparece (3 escenarios); estado vacío inicial; README creado. |

---

## 🧑‍🏫 Tips de Facilitación

- **Grupo callado:** corre Demo 2 (`r.ok` con 404) y que adivinen el valor antes de verlo.
- **Alguien ya sabía try/catch:** pídele que explique por qué `fetch` no falla en 404.
- **Terminan antes:** logro de botón "reintentar" o spinner animado.
- **Para el README:** que abran un repo conocido en GitHub y miren su README como modelo.
- **Es evaluado:** recuérdales revisar la rúbrica y preparar la explicación de un fragmento.

---

## ❓ Preguntas Frecuentes

**P: ¿Por qué `fetch` no lanza error en un 404?**
R: Porque la petición sí se completó: el servidor respondió. `fetch` solo rechaza si la red falla. El 404 es una respuesta válida que debemos interpretar con `response.ok`.

**P: ¿`try/catch` sirve para cualquier error?**
R: Para errores en tiempo de ejecución dentro del `try` (incluido lo que lances con `throw`). No atrapa errores de sintaxis ni de código fuera del bloque.

**P: ¿Cuándo NO capturar un error?**
R: Cuando no puedes hacer nada útil con él y conviene que se propague (que falle ruidosamente en desarrollo). Capturar "todo y callar" esconde bugs.

**P: ¿Por qué aprender Markdown justo ahora?**
R: Es la entrega evaluada del módulo y toca documentar. Markdown es simple y lo usarás en todo repo de aquí en adelante (M4, M5, y en tu carrera).

---

## 🔗 Conexiones del Curriculum

### Construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C11 | `fetch`, `async/await` | Hoy se envuelve en `try/catch` y se valida `response.ok` |
| C10 | promesas, `.catch` | `try/catch` con `await` es el equivalente del `.catch` |
| C09 | render | Se reusa para mostrar el resultado exitoso |

### Conexión con M4

Al cerrar:

> "Cierran el M3 con una app que consume una API y no se rompe. En M4 dan el siguiente paso: **estado y persistencia** — guardar datos con `localStorage` y `JSON.stringify`/`parse`, para que la app recuerde información entre sesiones. El `try/catch` de hoy también se usa ahí (al leer datos guardados)."

---

## 🪞 Reflexión Post-Clase

- ¿Cuántos creían que `fetch` fallaría solo en un 404? Ese es el aprendizaje clave.
- ¿El reto del spinner pegado dejó clara la utilidad de `finally`?
- ¿Cuántos entregaron un README legible? Es el inicio de un hábito profesional.
- ¿La app de cada quien sobrevive a los 3 escenarios (ok / no encontrado / sin red)? Ese es el éxito del módulo.
