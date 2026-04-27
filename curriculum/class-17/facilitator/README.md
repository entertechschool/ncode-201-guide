# Guía del Facilitador - Clase 17: Ideation + Research + Stories

> Tiempo de lectura: 7 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Historia de usuario**: Funcionalidad descrita en formato "Como [rol] quiero [acción] para [beneficio]".
- **Criterio de aceptación**: Condición verificable que define "terminado" sin ambigüedad.
- **Sprint**: Iteración de trabajo con una meta concreta y un tiempo acotado.
- **MVP**: La versión más simple del producto que cumple el valor central prometido.
- **Alcance**: Lista explícita de lo que está dentro y fuera del proyecto.

---

## 🔗 Analogías Útiles

**Historia de usuario <> Pedido en un restaurante:**
El cliente no dice "usa la sartén #3 y calienta a 180°C". Dice "quiero un lomo saltado término medio". La historia es el pedido; la tarea técnica es la receta. Cuando los estudiantes escriben historias con detalle técnico, recuérdales esta analogía.

**Sprint <> Viaje en bus con paradas:**
No intentas llegar del Cusco a Lima sin parar. Te detienes en Nazca, Ica, Paracas. Cada parada es un sprint: algo concreto terminado, con punto de validación, antes de seguir.

**Alcance <> Lista de compras antes del súper:**
Sin lista, sales con cosas que no necesitabas y sin lo que buscabas. El alcance escrito es la lista del súper del proyecto.

**MVP <> Skateboard, no un coche con tres ruedas:**
La famosa imagen de Henrik Kniberg: un MVP no es media solución; es la solución mínima que ya mueve al usuario de A a B. Si tu proyecto solo muestra la pantalla pero no calcula nada, no es MVP.

---

## 📚 Contexto Actual

### Splitwise y la economía compartida: por qué este proyecto importa

Splitwise se fundó en 2011 cuando tres roommates de Boston se cansaron de pelear por cuentas. Hoy tiene más de 50 millones de usuarios en más de 190 países y procesa miles de millones de dólares en balances mensuales. El algoritmo que usan para minimizar transferencias entre miembros de un grupo es materia obligatoria en entrevistas técnicas de mid y senior level en empresas como Google, Meta y Uber.

> **Para contar en clase:** "La aplicación que van a construir es la misma idea que mueve el negocio de Splitwise. Un producto que empezó resolviendo un pleito entre roommates hoy tiene más usuarios que la población del Perú."

### Agile en Latinoamérica: la adopción silenciosa

Según el State of Agile Report 2024, el 71% de los equipos de desarrollo en Perú, Chile, Colombia y México ya usan algún framework ágil (Scrum, Kanban o híbridos). Las historias de usuario son el artefacto más común, más que las tareas tradicionales. Aprender a leerlas y escribirlas bien es una habilidad más transferible que saber un framework específico.

**Fuentes:** [Splitwise blog](https://blog.splitwise.com/){:target="_blank"}, [State of Agile Report](https://stateofagile.com/){:target="_blank"}

---

## 🎯 Momentos Clave de la Clase

### Pregunta Detonadora

**Pregunta:** Si tú y tres amigos pagan distintos gastos en un viaje a Máncora, ¿cómo calcularías quién le debe a quién al final?

**Respuesta esperada:** No hay una única correcta. Se busca que salgan 2-3 enfoques: "hoja de cálculo", "cada uno anota lo suyo y al final sumamos", "paga uno todo y después dividimos". Todas son válidas y todas son distintas a lo que van a construir.

**Script post-votación:**
```
Facilitador: "¿Alguno ha sentido que terminó pagando más que los demás en un viaje?"
[Escuchar 2-3 respuestas, típicamente hay una risa nerviosa]
Facilitador: "Eso que acaban de describir es el problema. Hoy empiezan a construir la solución."
```

**Tip:** No bajes inmediatamente al proyecto. Deja que el dolor se sienta 1-2 minutos. Eso motiva el resto de la clase.

### Demo Principal

**Qué mostrar:** Abrir [Splitwise](https://www.splitwise.com/){:target="_blank"} en el navegador y mostrar (con una cuenta propia, demo o screenshots) cómo funciona la interfaz: crear grupo, agregar gastos, ver balance.

**Script sugerido:**
```
Facilitador: "Este es Splitwise. Fíjense en 3 cosas:
  1. La lista de gastos — ordenada por fecha, muestra quién pagó qué.
  2. El panel de balances — quién debe, cuánto.
  3. Las transferencias sugeridas — la magia está aquí.
No vamos a construir todo Splitwise. Vamos a construir la versión académica: sin backend, sin login, todo en el navegador. Pero lo esencial es lo mismo."
```

**Plan B (si no hay acceso a Splitwise):** Usar el mockup ASCII del [enunciado del proyecto](../project/) como referencia. Es suficiente para transmitir la idea.

### Transición al Lab

**Momento crítico:** Algunos estudiantes van a querer empezar a codear de inmediato. Freno explícito.

**Script sugerido:**
```
Facilitador: "Hoy no vamos a tocar JavaScript. Entiendo la ansiedad. Pero si salen de aquí sin entender lo que van a construir, el próximo Sprint es un desastre.
Abran VS Code, abran el enunciado del proyecto. Van a hacer tres cosas: leer, planificar, configurar el repo. En ese orden."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Cacería de entidades"

Cuando abordan el Paso 1.1 del lab, algunos estudiantes se atrancan identificando entidades.

> "Si algo se puede crear, editar o borrar, probablemente es una entidad. Si es un verbo, no."

**Dinámica sugerida:**
```
Facilitador: "Apunten todos los sustantivos que aparecen en el enunciado."
(Esperan)
Facilitador: "Ahora marquen los que tienen datos propios (nombre, monto, id). Esos son entidades."
```

### Dinámica 2: "Dependencia cruzada"

En el Paso 2, algunos replican al dedo la distribución HU1-HU4 / HU5-HU8 sin pensar. Para romper ese automatismo:

> "¿Y si yo les dijera que la HU5 depende de algo del Sprint 1? ¿Qué cambia?"

**Dinámica sugerida:**
```
Facilitador: "Levanten la mano los que pusieron HU5 en Sprint 2 sin preguntarse nada."
(La mitad)
Facilitador: "Piensen: ¿qué información necesita HU5 (balance) para funcionar?"
(Pista que los lleva a: necesita tener gastos, o sea necesita HU3 terminada)
```

### Dinámica 3: "Alcance fuera"

El alcance "fuera" casi siempre queda pobre. Los estudiantes listan solo cosas obvias ("no va a tener IA").

> "Háganlo concreto. Si pensaron en algo cool que les daría ganas de construir, probablemente va fuera del alcance."

**Dinámica sugerida:**
```
Facilitador: "¿Alguien pensó en agregar notificaciones push? ¿En exportar a PDF? ¿En login con Google?"
(Manos arriba)
Facilitador: "Perfecto, todo eso va en 'fuera del alcance'. No lo pierdan, pero no lo construyan hoy."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Historia floja vs sólida

**Cuándo usarlo:** Cuando estén escribiendo su análisis y copien literal la HU sin entenderla.

**Historia floja:**
```
Agregar gastos al grupo.
```

**Historia sólida:**
```
Como usuario quiero registrar un gasto indicando descripción, monto y quién pagó,
para llevar cuenta de lo que se gasta.

Criterios:
- Monto debe ser > 0.
- Descripción no puede estar vacía.
- Quien pagó debe ser una persona del grupo.
```

**Tip de facilitación:** Mostrar ambas. Preguntar "¿Cuál te dice qué vas a codear?". La respuesta obvia es la lección.

### Ejemplo 2: Estructura inicial del repo

**Cuándo usarlo:** Cuando se atranquen en el Paso 3.

```
gastos-compartidos/
├── index.html
├── css/styles.css
└── js/
    ├── app.js       # entrada
    ├── state.js     # estado central
    ├── storage.js   # LocalStorage
    ├── balance.js   # cálculo
    └── ui.js        # DOM
```

**Tip de facilitación:** Enfatiza que los archivos JS pueden estar vacíos hoy. Solo la estructura y los `<script>` en el orden correcto.

---

## ⚠️ Errores Comunes

- **"El estudiante quiere inventar su propio proyecto."** Recordarle amablemente que el proyecto ya está definido. Puede proponer retos adicionales en Sprint 2, no cambiar el enunciado.
- **"Todos copian exactamente la distribución sugerida HU1-HU4 / HU5-HU8."** Fuérzalos a escribir por qué. Si no pueden justificar, no entendieron.
- **"Repositorio privado."** Pedir que lo hagan público en ese momento. Lo privado se convertirá en problema para el portafolio.
- **"Escriben 'En construcción' pero el navegador muestra consola con errores."** Verificar orden de scripts y rutas de archivos antes de pasar a Parte 3.3.

---

## 📍 Cierre de Clase

Antes de que se vayan, asegúrate de que cada estudiante:

- [ ] Tiene URL pública de su repo.
- [ ] Puede mostrar `index.html` cargando sin errores.
- [ ] Sabe qué 4 HU va a atacar en Sprint 1.
- [ ] Identificó qué HU es su reto técnico principal.

**Frase de cierre sugerida:**
```
"Hoy no escribieron código del producto, pero hicieron la parte que distingue
a un proyecto que se termina de uno que se abandona. La próxima clase empezamos
a codear con todo. Vengan descansados."
```
