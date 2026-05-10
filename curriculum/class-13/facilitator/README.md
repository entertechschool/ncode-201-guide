# Guía del Facilitador - Clase 13: Modelado de Objetos y Estado

> Tiempo de lectura: 8 minutos | Primera clase del M4 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **`class` ES6**: sintaxis moderna para definir objetos con propiedades y métodos. **Recordatorio:** C08 (M2) ya cerró que es azúcar sintáctica sobre prototipos — aquí la usamos sin debate.
- **Estado local (instancia)**: información propia de cada objeto creado con `new Template(...)`. Una plantilla tiene su título, su mensaje, su hashtag.
- **Estado global (app)**: información compartida por la aplicación completa. El array de TODAS las plantillas vive aquí.
- **Modelo de dominio**: la clase `Template` ES el modelo. Decidir qué propiedades tiene es una decisión profesional, no técnica.

---

## 🔗 Analogías Útiles

**Estado local <> Identificación personal:**
Cada persona tiene su DNI, nombre, edad. Esos datos viven en cada persona, no en una lista compartida. La instancia `template1` tiene su `titulo`, su `mensaje` — distintos de `template2`.

**Estado global <> Lista de asistencia del salón:**
El salón tiene UNA lista que dice quién está hoy. No cada persona carga su propia lista — sería caos. El array `plantillas` es esa lista de asistencia única.

**Clase `class` <> Molde para hacer galletas:**
El molde no es una galleta. Es la forma que produce galletas idénticas estructuralmente, pero cada una puede tener distinto sabor (datos). `class Template { ... }` es el molde; cada `new Template(...)` es una galleta.

**`extends` (NO en esta clase) <> Especialización en medicina:**
Sería como decir "ginecólogo extiende de médico". Es útil pero NO lo vas a usar hoy ni en M5. Si surge, redirígelo a Code 301.

---

## 📚 Contexto Actual

### Por qué `class` ES6 ganó el debate (y por qué C08 ya lo zanjó)

La sintaxis `class` se introdujo en ECMAScript 2015 (ES6). Antes existían funciones constructoras, y ambas conviven hasta hoy. **Internamente JavaScript sigue usando prototipos** — `class` es solo sintaxis más legible. En C08 (M2) los alumnos ya hicieron el ejercicio: reescribieron `Movimiento` con `class` y comprobaron que funciona idéntico. Aquí ya partimos de `class` sin reabrir el debate.

> **Para contar en clase:** "Si alguien quiere debatir `class` vs constructor, recuérdale C08. Hoy estamos sobre ese conocimiento, no debajo."

### Estado: el concepto que separa scripts de aplicaciones

Una página estática no tiene estado. Una app sí. Slack, Notion, Figma, Spotify — todas son objetos vivos cuyo "momento actual" cambia con cada acción del usuario. Lo que distingue a un dev junior de uno sólido es saber **dónde vive cada pedazo de estado y quién puede cambiarlo**. Hoy empezamos esa conversación.

**Fuentes:** [MDN: Classes](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes){:target="_blank"}, [TC39: ES6 Spec](https://tc39.es/ecma262/){:target="_blank"}

---

## 🎯 Momentos Clave de la Clase

### Demo Principal — Dos plantillas, dos estados locales

**Qué mostrar:** 3 minutos en vivo. Crear `class Template` con constructor de 3 propiedades. Hacer `const t1 = new Template('Saludo', '¡Hola!', '#bienvenida')` y `const t2 = new Template('Despedida', '¡Adiós!', '#chao')`. Mostrar en consola que `t1` y `t2` tienen **propiedades distintas** pero **misma estructura**. Luego: agregar ambas a un array global `plantillas = []`. Mostrar que el array es el estado global, cada `Template` es estado local.

**Script sugerido:**
```
Facilitador: "Voy a crear DOS plantillas. Cada una tiene su título, su mensaje, su hashtag.
[Crear t1, t2 en consola]
Facilitador: "Ahora las meto en un array global. ¿Qué cambia conceptualmente?"
[Respuestas esperadas]
Facilitador: "Cada Template sigue siendo su mundo. El array es OTRA cosa: la lista que la app
conoce. Esa distinción — local vs global — es lo central de hoy."
```

**Plan B (si la demo falla):** Tener una página HTML simple pre-creada con el `class` y la creación de 2 instancias. Solo se ejecuta en consola.

### Transición al Lab

**Momento crítico:** Los alumnos pueden mezclar las propiedades del modelo con la estructura del array global. Aclarar antes de empezar.

**Script sugerido:**
```
Facilitador: "HU1: clase Template con 3 propiedades obligatorias + 2 que ustedes elijan.
HU2: array global. NO un array por cada instancia — UNO solo para toda la app.
HU3: render mostrando ambos niveles.
Si una HU se siente como otra, paren y pregunten."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Inventen sus 2 propiedades"

Cuando lleguen a HU1, pausa la clase 3 minutos:

> "Las 3 propiedades obligatorias son titulo, mensaje, hashtag. Ustedes deciden 2 más. ¿Cuáles? Compartan en el chat."

**Dinámica sugerida:**
```
Facilitador: "Veo: 'fechaCreacion', 'categoria', 'destinatario', 'usado'...
Cada decisión revela qué problema están imaginando.
Una plantilla de WhatsApp del mundo real — ¿qué necesita?
Esa decisión define su modelo. No hay respuesta única."
```

### Dinámica 2: "¿Local o global?"

Antes de HU3, lanza 4 preguntas rápidas:

> "Levanten la mano: ¿el título de la plantilla es local o global? ¿La lista de plantillas? ¿El usuario logueado? ¿La fecha de hoy?"

**Dinámica sugerida:**
```
Facilitador: "Título: ¿local o global?"
[Manos]
Facilitador: "Local — cada plantilla tiene el suyo. Lista: ¿local o global?"
[Manos]
Facilitador: "Global — toda la app comparte. Y el usuario logueado, ¿qué piensan?"
[Discusión: es global, vive en la app, no en cada plantilla]
```

### Dinámica 3: "Que NO use extends"

Si alguien intenta usar `extends`:

> "Excelente que sepas eso. Pero hoy nos quedamos en `class` plana. Veremos por qué en M5."

**Dinámica sugerida:**
```
Facilitador: "Si haces `class TemplateUrgente extends Template`, tu modelo se vuelve más rígido.
En M5 vas a ver que con clases planas + un campo `prioridad` resuelves lo mismo
con menos código. Code 301 entrará al cuándo SÍ heredar."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Constructor mínimo

**Cuándo usarlo:** Si alguien se traba con la sintaxis ES6.

```javascript
class Template {
  constructor(titulo, mensaje, hashtag, categoria, fechaCreacion) {
    this.titulo = titulo;
    this.mensaje = mensaje;
    this.hashtag = hashtag;
    this.categoria = categoria;
    this.fechaCreacion = fechaCreacion;
  }

  mostrar() {
    return `[${this.categoria}] ${this.titulo}: ${this.mensaje} ${this.hashtag}`;
  }
}
```

**Tip:** Resalta que `constructor` se llama automáticamente con `new`. No es un método regular.

### Ejemplo 2: Estado global como variable módulo

**Cuándo usarlo:** Si confunden estado global con variables de constructor.

```javascript
// Estado global de la app
const plantillas = [];

function agregarPlantilla(t) {
  plantillas.push(t);
}

// Cada plantilla tiene su estado local
const t1 = new Template('Saludo', '¡Hola!', '#bienvenida');
agregarPlantilla(t1);
```

**Tip:** Dibuja en pizarra una caja grande `plantillas[]` con 2 cajitas dentro (`t1`, `t2`).

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| `Cannot read property of undefined` al llamar método | Olvidó `new` antes del constructor | Recordar: `class` siempre con `new` |
| Cada plantilla tiene su propio array `plantillas` | Confundieron estado global con propiedad de instancia | Mover el array fuera de la clase, al scope superior |
| Quieren usar `extends` "porque queda elegante" | Sobreingeniería para M5 | Redirigir: clase plana basta, `extends` es Code 301 |
| `this` es undefined dentro de método | Llamaron al método sin instancia (`Template.mostrar()` en vez de `t1.mostrar()`) | Recordar que los métodos viven en instancias |
| Mezclan `function Template()` con `class Template` | Mezclando sintaxis viejo + nuevo | Quédate solo con `class` — la equivalencia ya quedó cerrada en C08 |
| El render muestra `[object Object]` | Olvidaron usar `.titulo`/`.mensaje` o tienen `JSON.stringify` mal | Inspeccionar la instancia en consola primero |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Explica sin titubeos por qué `t1.titulo` y `t2.titulo` son distintos aunque la clase es la misma.
- Identifica que el array `plantillas` NO es propiedad de la clase.
- Decide sus 2 propiedades adicionales con un caso de uso real en mente, no por relleno.

### El estudiante NECESITA AYUDA cuando:
- Pone el array `plantillas` como `this.plantillas` dentro del constructor.
- Llama `Template(...)` sin `new` y obtiene `undefined`.
- Inventa `extends` "porque vio uno en internet".

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | HU1 lista | En consola: `new Template('a','b','c',...)` produce un objeto con todas las propiedades visibles. |
| ~60' | HU2 lista | Array global `plantillas` existe. Funciones para agregar/eliminar funcionan. Verifico con 3 instancias. |
| ~90' | HU3 lista | La página muestra una lista de plantillas (estado global) y cada una expone sus propiedades (estado local). |

---

## 🧑‍🏫 Tips de Facilitación

### Si alguien menciona prototipos:
> "Bien que lo recuerdes. Hoy estamos sobre ese conocimiento (lo cerramos en C08). Hoy modelas con `class` directamente."

### Si alguien pregunta por `extends`:
> "Buena curiosidad. Es Code 301. Para M5 vas a usar clases planas — vas a ver que basta."

### Si la mayoría termina HU2 antes:
- Mándalos a HU3, no permitas que empiecen "modos visuales avanzados". El foco hoy es claridad estado local/global.

### Si llegan al "modo grilla" (logro extra) sin entender bien la HU3:
- Pídeles que primero expliquen en sus palabras qué cambia entre estado local y global. Si no pueden, el logro extra no aporta.

---

## ❓ Preguntas Frecuentes

### P: ¿Por qué la clase Template no tiene un método estático para obtener todas las plantillas?
**R:** Porque eso mezclaría estado global con la definición del modelo. La clase modela UNA plantilla. La app maneja la colección. Separación de responsabilidades.

### P: ¿Puedo usar `Object.freeze` para hacer las instancias inmutables?
**R:** Funcionalmente sí, pero no es scope de hoy. Inmutabilidad la trabajan en C14 a nivel de array, no de objeto individual.

### P: ¿Y si necesito una "Plantilla Premium" con campos extras?
**R:** En el M5 vas a ver que se resuelve mejor con un campo `tipo: 'premium'` que con herencia. Mantén una clase, agrega campos.

### P: ¿Qué pasa si dos plantillas tienen el mismo título?
**R:** Es estado local — pueden coexistir sin colisión. Si quieres unicidad, agrega un `id`. Buena pregunta para C14.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C07 (M2) | Function constructor + `this` | La sintaxis cambió a `class`, el mecanismo es el mismo. |
| C08 (M2) | Puente sintáctico class ↔ prototipos | Esta clase asume ese puente cerrado. NO se reabre. |
| C12 (M3) | DOM con createElement | Hoy usas eso para renderizar las plantillas. |

### Conexión con la Próxima Clase (C14)

Al cerrar, planta la semilla:

> "Hoy crearon el modelo (clase Template) y un array global. Pero ese array está suelto: cualquiera lo modifica, nadie se entera de los cambios. La próxima clase aprenden el **Patrón Store** — `subscribe`, `getState`, `setState`, `notify` — que controla quién puede cambiar el estado y notifica automáticamente a la UI cuando cambia. Es el patrón que React, Vue y Redux usan adentro."

**Pre-work implícito:** Pídeles que piensen "¿qué problemas tendría mi app si tengo 50 funciones tocando el array `plantillas`?" — la respuesta es exactamente el problema que Store resuelve.

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Alguien insistió en usar `extends`? Si sí, marca para seguimiento en M5 (puede saturarse con sobreingeniería).
- ¿Las 2 propiedades extra que eligieron muestran pensamiento de producto? Si todas pusieron lo mismo, fuiste muy directivo.
- ¿Confundieron estado local con global más de 2 veces? Refuerza con un mini-ejercicio al inicio de C14.
- ¿Alguien preguntó por inmutabilidad? Marcalo — está listo para entender C14 con profundidad.
