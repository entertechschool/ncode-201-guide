# Guía del Facilitador — Clase 11: async/await y búsqueda en la API

> Tiempo de lectura: 8 minutos | Módulo 3 · Clase 11 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **`async` / `await`** (NUEVO): `async` marca una función asíncrona; `await` pausa hasta que una promesa resuelva y entrega el valor directo. Es **azúcar sobre las Promesas** de C10 — la misma lógica, escrita como pasos secuenciales.
- **Reformular** (NUEVO como práctica): reescribir la carga de C10 (`.then`/`Promise.all`) con `async/await`. Mismo resultado, más legible. No es una tecnología distinta.
- **Búsqueda en la API** (NUEVO): el buscador deja de **filtrar** lo local y pasa a **consultar** la API por nombre (`/pokemon/{nombre}`), para traer Pokémon que no están en la rejilla.
- **Capturar / hacer crecer el estado** (NUEVO): un botón **Capturar** en la tarjeta del resultado lo agrega al array `pokedex` (sin duplicar) y re-renderiza. Primer roce con "el estado de la app crece según el usuario" (se formaliza en M4).
- **Explorar la respuesta** (NUEVO): la API devuelve mucho más de lo que se usa (`stats`, `height`, `weight`…). Se extiende `adaptarPokemon` para leer `data.stats` (navegar JSON anidado) y se muestra el detalle en el resultado.
- **Parámetro de ruta vs de consulta** (NUEVO): `/pokemon/pikachu` es un parámetro de **ruta** (qué recurso); `?limit=12&offset=0` son parámetros de **consulta** (cómo: cuántos y desde dónde). El "Cargar más" pagina subiendo `offset`.

> ❗ **El render no cambia.** `crearTarjeta`/`render` de C09-C10 se reusan. `adaptarPokemon` solo se **extiende** (stats). Cambia **cómo se escribe** la asincronía (`await`) y **qué hace el buscador** (buscar + mostrar detalle + capturar), más un "Cargar más" con paginación.

---

## 🔗 Analogías Útiles

**`async/await` ⟷ Receta vs notas al margen:** `.then` encadenado es como instrucciones con flechas y saltos; `async/await` es la receta leída de arriba a abajo. Mismo plato, más claro.

**Filtrar vs buscar ⟷ Buscar en tu cajón vs ir a la tienda:** filtrar (C10) es revisar lo que ya tienes en casa; buscar en la API (C11) es ir a la tienda por algo que no tienes y traerlo.

**Capturar ⟷ Coleccionar:** ves al Pokémon (búsqueda) y decides **capturarlo** con el botón → se suma a tu álbum. El álbum (`pokedex`) es el estado; `render` lo muestra.

---

## 📚 Contexto Actual

### Por qué se "reformula" en vez de enseñar `async/await` de cero

Ya escribieron promesas con `.then` en C10. Reescribir ESE código con `async/await` hace tangible que son lo mismo: ven el antes/después con su propio código. Es más sólido que presentar `async/await` como algo nuevo y desconectado.

### Por qué el buscador evoluciona

En C10 el buscador filtraba lo cargado — útil, pero limitado a la rejilla. Buscar en la API es el salto natural: traer cualquier recurso. Y agregarlo a la colección conecta con la idea de **estado** que domina M4. Todo lo que se construye hoy **perdura**.

### La frontera con M4

Hoy la colección (`pokedex`) crece en memoria. **Persistirla** entre visitas (localStorage, `JSON.stringify/parse`) es M4. No lo toques aquí.

**Fuentes:** [MDN: async/await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function){:target="_blank"}, [PokeAPI](https://pokeapi.co/docs/v2){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Refuerzo | 15 min | El `.then` de C10. "¿Se lee más claro?" |
| Debate Técnico | 30 min | `async/await` como azúcar; filtrar vs buscar. |
| Demo | 15 min | El mismo `fetch` con `.then` y con `async/await`. |
| Lab (HU1-HU5) | 100 min | HU1 reformular · HU2 buscar · HU3 capturar · HU4 stats (explorar respuesta) · HU5 cargar más (params de consulta) |
| Cierre | 20 min | Síntesis + el error de "no existe" → C12. |

---

## 🎯 Momentos Clave de la Clase

### Demo 1 — el mismo código, dos formas (4 min)
Escribe `fetch(url).then(r => r.json()).then(d => console.log(d))`. Luego reescríbelo con `async/await`. "Mismo resultado. El segundo se lee como una receta. `async/await` no reemplaza promesas: las escribe distinto."

### Demo 2 — filtrar vs buscar (3 min)
Con la rejilla de C10 cargada, filtra "char" (no aparece nada si charizard no estaba). Luego busca "charizard" en la API → aparece. "Filtrar solo ve tu cajón; buscar va a la tienda."

### Demo 3 — capturar hace crecer la colección (3 min)
Busca un Pokémon y pulsa **Capturar**: se suma a la rejilla. Captura uno repetido: no se duplica. "`pokedex` es el estado; capturar lo hace crecer."

### Transición al Lab
```
"HU1: reescriben la carga de C10 con async/await (mismo resultado, más claro).
 HU2: el buscador ahora consulta la API por nombre (clic/Enter).
 HU3: un botón Capturar en la tarjeta suma el Pokémon a la rejilla, sin duplicar.
 HU4: extienden adaptarPokemon con data.stats y muestran las estadísticas en el resultado.
 HU5: 'Cargar más' con ?limit y ?offset → paginan la lista (parámetros de consulta).
 Si buscan algo que no existe, se rompe. Eso lo arreglamos en C12."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Traduce a await" (en HU1)
Das una cadena `.then` y piden reescribirla con `async/await`. Ven que es lo mismo.

### Dinámica 2: "¿filtra o busca?" (en HU2)
Describe escenarios ("quiero ver los de tipo fuego que ya cargué" vs "quiero traer a mewtwo") y que digan si es filtrar (local) o buscar (API).

### Dinámica 3: "¿se duplica?" (en HU3)
"Si busco pikachu y ya estaba, ¿qué debe pasar?" → no duplicar. Discute el `some`.

---

## 💡 Ejemplos Listos para Usar

### `await` necesita `async`
```javascript
async function buscarPokemon(nombre) {   // sin async, el await falla
  const data = await obtenerPokemon(nombre);
  return adaptarPokemon(data);
}
```

### Evitar duplicados
```javascript
if (!pokedex.some(p => p.nombre === pokemon.nombre)) pokedex.push(pokemon);
```
"`some` revisa si ya está; solo agrega si no."

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| `await is only valid in async function` | Usaron `await` sin `async` | Marcar la función con `async` |
| La búsqueda no hace nada | El `id` del input/botón no coincide | Verificar `#buscador` y `#btn-buscar` |
| Funciona "pikachu" pero no "Pikachu" | La API espera minúsculas | `nombre.toLowerCase()` |
| Tras capturar no vuelve la rejilla | `capturar` no llama a `render(pokedex)` | Llamar `render(pokedex)` dentro de `capturar` |
| El botón "Capturar" sale en TODAS las tarjetas | Lo metieron dentro de `crearTarjeta` (C09) | Agregar el botón solo al nodo del resultado (`mostrarResultado`) |
| Se duplican los Pokémon | No revisan con `some` antes de `push` | Agregar el chequeo de duplicado |
| Las stats salen en TODAS las tarjetas | Las metieron en `crearTarjeta` (C09) | Agregarlas solo al nodo del resultado (`mostrarResultado`) |
| "Cargar más" trae siempre los mismos | No suben `offset` (o lo declaran dentro de la función) | `let offset = 0` a nivel de módulo; `offset += 12` tras cada carga |
| Pantalla en blanco al buscar algo raro | El nombre no existe (404) → falla | Es esperado; se maneja en C12 |

---

## ✅ Señales de Comprensión

**ENTIENDE cuando:**
- Reescribe una cadena `.then` como `async/await` sin dudar.
- Explica que `async/await` es la misma promesa, más legible.
- Distingue filtrar (local) de buscar (API).
- Entiende que `pokedex` es el estado y que crece sin duplicar.

**NECESITA AYUDA cuando:**
- Usa `await` sin `async`.
- Cree que `async/await` reemplaza/elimina las promesas.
- Espera que el buscador encuentre algo que nunca cargó (sin ir a la API).
- Duplica Pokémon al capturar.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~15' | HU1 | La rejilla carga igual que en C10, pero el código usa `async/await`. |
| ~35' | HU2 | Buscar "charizard" (no estaba) lo muestra, traído de la API. |
| ~55' | HU3 | El resultado tiene botón **Capturar**; al pulsarlo se suma a la rejilla; un repetido no se duplica. |
| ~75' | HU4 | El resultado de búsqueda muestra las estadísticas (HP, ataque…) además de imagen y tipos. |
| ~95' | HU5 | "Cargar más" trae más Pokémon (`?limit`/`?offset`); al repulsar, otra página; sin duplicar. |

---

## 🧑‍🏫 Tips de Facilitación

- **Grupo callado:** muestra el antes/después (`.then` vs `await`) y que voten cuál se lee mejor.
- **Alguien ya sabía async/await:** pídele que explique por qué `await` necesita `async`.
- **Terminan antes:** logro de stats con barras o quitar de la Pokédex.
- **Si la red falla:** ten un Pokémon ya cargado; demuestra el concepto con datos en consola.
- **No adelantes el manejo de errores:** que vivan el fallo de "no existe" hoy; mañana (C12) lo resuelven.

---

## ❓ Preguntas Frecuentes

**P: ¿`async/await` reemplaza a `.then`?**
R: No. Es otra forma de escribir lo mismo, más legible para código secuencial. `.then` sigue siendo válido. Saber ambos es lo profesional.

**P: ¿Por qué buscar en la API si ya tengo la rejilla?**
R: La rejilla solo tiene unos pocos. Buscar en la API te da acceso a **cualquier** Pokémon (1000+), aunque no lo hayas cargado.

**P: ¿Por qué evitar duplicados?**
R: Porque `pokedex` es una colección; capturar el mismo dos veces ensucia el estado y la UI. `some` lo previene.

**P: ¿Y si quiero que la colección se guarde al recargar?**
R: Eso es **persistencia** (localStorage + JSON), tema de M4. Hoy la colección vive en memoria.

---

## 🔗 Conexiones del Curriculum

### Construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C10 | `fetch`, Promesas, `Promise.all`, `adaptarPokemon`, `pokedex` | Se reformula con `await`; el buscador pasa a la API |
| C09 | `render`, `crearTarjeta`, eventos | Se reusan para mostrar y para el buscador |

### Conexión con C12

Al cerrar:

> "Hoy tu Pokédex busca y crece con datos reales. Pero si buscas un nombre que no existe, se rompe — y una app real no puede hacer eso. En C12, la última clase, aprenden a **manejar errores** con `try/catch`, mostrar estados de carga y error, y cierran el proyecto con un README."

---

## 🪞 Reflexión Post-Clase

- ¿Cuántos vieron claro que `async/await` es "la misma promesa, más legible"?
- ¿La distinción filtrar vs buscar hizo clic?
- ¿Entendieron `pokedex` como estado que crece?
- ¿Vivieron el fallo al buscar algo inexistente? Eso prepara C12.
