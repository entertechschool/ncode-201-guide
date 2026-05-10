# Guía del Facilitador - Clase 18: Sprint 1

> Tiempo de lectura: 7 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Estado central**: Un único objeto JS que contiene toda la información viva de la app.
- **Render declarativo**: Funciones que pintan el DOM a partir del estado, no mutándolo pieza a pieza.
- **Serialización**: `JSON.stringify` convierte el estado en un string guardable en LocalStorage.
- **Commit atómico**: Un commit por cambio conceptual, no por lote.
- **Orden Estado → Storage → Render**: La secuencia correcta para que no aparezcan bugs de sincronización.

---

## 🔗 Analogías Útiles

**Estado central <> Pizarra única del equipo:**
Si cada persona del equipo tiene su propia pizarra, nadie sabe qué es verdad. Una sola pizarra compartida es la fuente de verdad. El `state` es esa pizarra; todo lo demás la consulta.

**Render <> Proyección de una diapositiva:**
La diapositiva (estado) cambia, el proyector (render) refleja el cambio. Si el proyector deja de reflejar, apagas y prendes; no pintas encima de la pantalla.

**LocalStorage <> Hoja de papel en el bolsillo:**
Cabe poca información, no se sincroniza con nadie, se pierde si se lava la ropa. Útil para notas personales, inútil para datos críticos. Importante que el alumno entienda la limitación.

**Commits atómicos <> Snapshots de videojuego:**
Si guardas justo antes de pelear con el jefe, puedes reintentar sin perder todo. Si guardas solo cuando terminas el juego, cualquier error te regresa al principio.

---

## 📚 Contexto Actual

### El patrón Flux y por qué importa aquí

En 2014 Facebook publicó el patrón Flux para manejar estado en aplicaciones complejas. La idea central: **dirección única** del flujo de datos (acción → estado → vista). Redux, Vuex, Pinia y la propia React con `useState` son descendientes directos. Lo que los estudiantes hacen hoy con `state`, `guardarEstado()` y `renderX()` es la versión vanilla del mismo principio. Entender esto ahora les ahorra semanas cuando lleguen a frameworks en Code 301.

> **Para contar en clase:** "Hoy están implementando a mano lo que React hace automático. Cuando la próxima etapa aprendan Redux, van a decir 'ah, pero esto ya lo hice'."

### LocalStorage en producción real

Empresas como Figma, Notion y Trello usan LocalStorage como caché local de datos para responder instantáneamente antes de sincronizar con el backend. No es juguete académico: es una API que resuelve problemas reales de UX percibida. Spotify la usa para recordar el volumen, el tema y la posición de la última canción.

**Fuentes:** [Flux architecture](https://facebookarchive.github.io/flux/){:target="_blank"}, [MDN LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage){:target="_blank"}

---

## 🎯 Momentos Clave de la Clase

### Pregunta Detonadora

**Pregunta:** Si tu app funciona perfecto en el navegador pero al recargar la página se pierde todo, ¿qué falta?

**Respuesta esperada:** "Persistencia", "LocalStorage", "guardar los datos en algún lado". Algunos dirán "base de datos" — es el momento de distinguir: hoy LocalStorage es nuestra base de datos.

**Script post-votación:**
```
Facilitador: "¿Alguno ha llenado un formulario largo y se le cerró el navegador por error?"
[Risas nerviosas]
Facilitador: "Eso es exactamente lo que van a evitar hoy. La app guarda cada cambio al toque."
```

### Demo Principal

**Qué mostrar:** Una app de referencia (puede ser la tuya preparada antes o un live coding de los primeros 10 minutos de Parte 1).

**Script sugerido:**
```
Facilitador: "Voy a mostrar el flujo completo: HTML → CSS → JS → LocalStorage.
  - HTML: recuerden el patrón de form accesible de C01 (<label for>, <input required>)
    y la validación nativa de C04 (type/pattern/minlength). Aquí lo orquestan en producción.
  - CSS: mobile-first, Grid para el layout. Las :root variables salen del refactor de C04.
  - JS: state único, funciones render, orden Estado→Storage→Render.
Fíjense cómo cambia el state en la consola cuando agrego una persona."
```

**Plan B (si el demo falla):** Mostrar el mockup ASCII del proyecto y dibujar en pizarra el flujo Estado → Storage → Render.

### Transición al Lab

**Momento crítico:** El lab tiene 3 partes y ~3 horas. Si alguien se atranca en Parte 1 (HTML/CSS), se queda sin tiempo para Parte 3 (la lógica, que es el núcleo).

**Script sugerido:**
```
Facilitador: "Regla de oro hoy: si en 45 minutos no terminan el HTML y CSS,
levanten la mano. No es fracaso, es pedir ayuda a tiempo.
La parte que NO pueden saltarse es la 3 (HU1-HU4). El CSS se puede pulir después."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Estado en la consola"

Cuando alguien dice "mi app no funciona", casi siempre el problema se ve en `console.log(state)`.

> "Antes de preguntarme, imprime el estado. Dime qué ves."

**Dinámica sugerida:**
```
Facilitador: "Todos a la vez: abran DevTools, escriban `state` y enter.
¿Quién ve su estado vacío cuando no debería?
¿Quién ve un array duplicado?
Esos son sus bugs, y todos tienen la misma causa: olvidaron render o guardar."
```

### Dinámica 2: "Checkpoints paralelos"

Al terminar cada Parte, parar todo el grupo:

> "Nadie pasa a la Parte siguiente hasta que todos tengan el checkpoint verde."

Esto iguala ritmo y permite al instructor dar feedback grupal en vez de 1-a-1 repetido.

**Dinámica sugerida:**
```
Facilitador: "¿Quién tiene el Checkpoint 1 verde? Manos arriba.
[Cuenta manos]
Los demás: ¿qué falta? Digan 'CSS roto', 'HTML no renderiza', 'no sé dónde estoy'.
Resolvamos juntos antes de seguir."
```

### Dinámica 3: "Pair debugging"

Cuando el bug no aparece solo, juntar a dos estudiantes:

> "Explícale a tu compañero qué esperabas que pasara y qué pasa. El 70% de las veces, al explicar, el bug aparece."

**Dinámica sugerida:**
```
Facilitador: "Los que llevan más de 10 minutos atorados, párense y busquen
al compañero del costado. Expliquen su bug en voz alta.
Si sigue sin resolverse en 5 minutos, vengan a mí."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Clase Gasto lista para copiar

**Cuándo usarlo:** Si los estudiantes olvidaron la sintaxis de clases ES6 del Módulo 4.

```javascript
class Gasto {
  constructor(descripcion, monto, pagadoPor, divididoEntre) {
    this.id = Date.now() + Math.random();
    this.descripcion = descripcion.trim();
    this.monto = Number(monto);
    this.pagadoPor = pagadoPor;
    this.divididoEntre = [...divididoEntre];
    this.fecha = new Date().toISOString();
  }
}
```

**Tip de facilitación:** Mostrarlo en pizarra, no entregar el código. Que copien a mano reinforces la sintaxis.

### Ejemplo 2: El flujo correcto de un evento submit

**Cuándo usarlo:** Cuando el formulario recarga la página o no guarda.

```javascript
form.addEventListener('submit', (e) => {
  e.preventDefault();                       // 1. no recargar
  const datos = leerFormulario();           // 2. extraer datos
  if (!esValido(datos)) return;             // 3. validar
  state.grupo.gastos.push(new Gasto(...));  // 4. modificar estado
  guardarEstado();                          // 5. persistir
  renderGastos();                           // 6. dibujar
  form.reset();                             // 7. limpiar
});
```

**Tip de facilitación:** Numerar los pasos en pizarra. "Si alguno de estos 7 pasos falta o está en otro orden, algo falla."

---

## ⚠️ Errores Comunes

- **"El formulario recarga la página cada vez que hago submit."** Falta `e.preventDefault()` al inicio del handler.
- **"Los gastos se duplican cada vez que agrego uno nuevo."** Falta `lista.innerHTML = ''` antes de volver a pintar la lista.
- **"Mi app funciona pero al recargar pierdo todo."** Olvidan llamar `cargarEstado()` en `iniciar()`, o guardan sin `JSON.stringify`.
- **"Un estudiante no lee el checkpoint antes de seguir."** Obligarlo a decirlo en voz alta antes de avanzar: los verbales no se saltan.
- **"Alguien decidió usar un framework o library externa."** Recordar que el stack está limitado a vanilla. Si ya lo metió, pedir que lo quite antes del Sprint 2.

---

## 📍 Cierre de Clase

Antes de que se vayan, asegúrate de que cada estudiante:

- [ ] Tiene HU1-HU4 funcionando al menos al nivel del checkpoint de Parte 3.
- [ ] Su app persiste datos al recargar.
- [ ] Hizo al menos 3 commits con mensajes claros y los pusheó.
- [ ] Sabe qué 4 HU le tocan en Sprint 2 (HU5-HU8).

**Frase de cierre sugerida:**
```
"Salen con una app que ya hace algo útil. La próxima clase es la prueba de fuego:
validan su trabajo con un compañero y construyen el cálculo de balances.
Es donde separa a los que entendieron de los que solo copiaron. Vengan listos."
```
