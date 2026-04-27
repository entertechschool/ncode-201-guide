# Guía del Facilitador - Clase 19: User Validation + Sprint 2

> Tiempo de lectura: 7 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Validación cruzada**: Intercambio estructurado de pruebas entre estudiantes siguiendo un guion fijo.
- **Balance neto**: Suma firmada (pagó − parte proporcional) que refleja la posición de cada persona.
- **Greedy de transferencias**: Estrategia que empareja mayor deudor con mayor acreedor iterativamente.
- **Manejo defensivo**: Código que anticipa fallas de LocalStorage o datos malformados.
- **Prioridad de feedback**: Distinguir crítico (bug), mayor (flujo), menor (pulido).

---

## 🔗 Analogías Útiles

**Validación cruzada <> Leer en voz alta tu propio texto:**
Cuando lees mentalmente no ves los errores; al leerlo en voz alta (o al oírlo de otro) saltan. El tester es esa lectura en voz alta para tu app.

**Balance neto <> Estado de cuenta del banco:**
No importa si hiciste mil transacciones; al final hay un saldo único. El balance neto es el saldo de cada persona en el grupo.

**Greedy <> Cambio en billetes grandes primero:**
Para pagar S/ 147 con menos billetes, usas primero un S/ 100, después S/ 40, después S/ 5. Mayor denominación primero. En transferencias, mayor deuda primero.

**Manejo defensivo <> Cinturón y airbag:**
El auto funciona sin ninguno, hasta que falla. El código funciona sin try/catch hasta que el usuario mete datos raros. Anticipar fallas es profesionalismo.

---

## 📚 Contexto Actual

### Dogfooding y la cultura de probar tu propio producto

El término "dogfooding" (eat your own dog food) nació en Microsoft en los 80s: los ingenieros debían usar las versiones beta de sus productos antes de liberarlas. Hoy Google, Atlassian, GitHub y Notion lo hacen institucionalmente. El principio es el mismo que aplicas hoy: probar con ojos ajenos expone lo que tú ya no ves.

> **Para contar en clase:** "Cuando los ingenieros de Microsoft en los 90s empezaron a usar Windows beta ellos mismos, encontraron cientos de bugs que los testers profesionales habían pasado por alto."

### El problema de Splitwise y las entrevistas técnicas

El algoritmo de minimización de transferencias entre personas es un clásico de entrevistas de Google, Meta, Uber y Airbnb. Conocido como "Cash Flow among Friends", aparece en LeetCode y en libros como Cracking the Coding Interview. Implementarlo en una clase los prepara directamente para esas conversaciones.

**Fuentes:** [Microsoft dogfooding history](https://www.microsoft.com/en-us/research/publication/eating-our-own-dog-food/){:target="_blank"}, [Splitwise algorithm](https://medium.com/@mithunmk93/algorithm-behind-splitwises-debt-simplification-feature-8ac485e97688){:target="_blank"}

---

## 🎯 Momentos Clave de la Clase

### Pregunta Detonadora

**Pregunta:** Si Ana pagó S/ 100 en una cena para 4 personas (Ana, Beto, Cami, Diana), ¿cuánto debería ser el balance de Ana al final?

**Respuesta esperada:** +75 (pagó 100, su parte es 25, balance = +75).

**Script post-votación:**
```
Facilitador: "¿Quién dijo +100?"
[Algunas manos]
Facilitador: "Pensemos: Ana también cenó. Le deben 100 menos lo que le tocaba pagar.
¿Cuánto le tocaba?"
[Voz: "25, porque son 4"]
Facilitador: "Exacto. 100 - 25 = 75. Ese es el balance neto."
```

**Tip:** Dibujar en pizarra los 4 balances (+75, -25, -25, -25) y verificar que suman 0.

### Demo Principal

**Qué mostrar:** Un par de ejemplos del algoritmo de transferencias en pizarra antes de codearlo. No saltes este paso; es la base conceptual del Sprint 2.

**Script sugerido:**
```
Facilitador: "Tenemos Ana +60, Beto -20, Cami -40.
Mayor deudor: Cami (-40). Mayor acreedor: Ana (+60).
Transferencia: Cami → Ana, min(40, 60) = 40. Cami saldado.
Ahora Ana +20, Beto -20. Transferencia: Beto → Ana, 20. Todos en cero.
Total: 2 transferencias, no 4."
```

**Plan B (si no hay pizarra):** Usar papel en cámara o compartir una nota digital con los pasos numerados.

### Transición al Lab

**Momento crítico:** Algunos estudiantes querrán saltarse la validación cruzada para ir directo al código. NO lo permitas.

**Script sugerido:**
```
Facilitador: "La validación no es opcional. Es 45 minutos, estructurados, con guion.
El compañero va a ver cosas que tú no ves. Si la saltan, el Sprint 2 se hace sobre bugs ocultos.
Nadie codea HU5 antes de entregar feedback al otro."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "El tester no es amigo"

Muchos darán feedback blando por educación.

> "No estoy aquí para que me digan que está bien. Estoy aquí para encontrar lo que no funciona."

**Dinámica sugerida:**
```
Facilitador: "Norma explícita: cada tester debe entregar al menos 2 observaciones concretas.
'Está bien' no es observación. 'El botón eliminar no hace nada en mobile' sí lo es."
```

### Dinámica 2: "Ejemplo en papel"

Cuando alguien se atora con el algoritmo greedy:

> "Déjame el teclado. Tomemos papel y resolvamos con 3 personas primero."

**Dinámica sugerida:**
```
Facilitador: "Escribe en papel: Ana +30, Beto -20, Cami -10.
Paso 1: ¿quién paga a quién primero?
Paso 2: ¿qué pasa con los balances?
Paso 3: ¿terminaste?
Ahora tradúcelo a código: while (hay deudores Y acreedores)..."
```

### Dinámica 3: "Corromper para validar"

En HU8, varios no saben cómo probar que su manejo de errores funciona.

> "Vamos juntos a DevTools → Application → LocalStorage → tu clave. Edítala con un string roto. Recarga."

**Dinámica sugerida:**
```
Facilitador: "Todos: abran DevTools, Application, LocalStorage.
Pongan el valor en `{malformado`. Recarguen.
¿Qué ven? Si ven una pantalla blanca o un alert, aún falta trabajo.
Lo que queremos: un mensaje amigable en la UI con un botón 'Empezar de cero'."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Cálculo de balance paso a paso

**Cuándo usarlo:** Si un estudiante no entiende por qué `+=` y `-=`.

```javascript
// Gasto: Ana pagó S/ 90, dividido entre Ana, Beto, Cami
// Parte individual = 90 / 3 = 30

balances.Ana += 90;   // Ana recibe crédito por lo que pagó
balances.Ana -= 30;   // Ana también consumió su parte
balances.Beto -= 30;
balances.Cami -= 30;

// Resultado: Ana +60, Beto -30, Cami -30. Suma = 0. ✓
```

**Tip de facilitación:** Hacer el cálculo en pizarra antes de mirar código.

### Ejemplo 2: Greedy con tolerancia de centavos

**Cuándo usarlo:** Cuando aparecen balances tipo "0.000001".

```javascript
// Redondeo al final para evitar basura decimal
const balanceLimpio = Math.round(balance * 100) / 100;

// En comparaciones, usar tolerancia
if (deudor.monto < 0.01) deudores.shift(); // saldado, sacarlo
```

**Tip de facilitación:** Mostrar que `0.1 + 0.2 !== 0.3` en JS. Es la razón de la tolerancia.

---

## ⚠️ Errores Comunes

- **"Mi algoritmo greedy entra en bucle infinito."** Falta shift del deudor/acreedor saldado, o la tolerancia es demasiado estricta.
- **"La suma de balances no da exacto cero."** Problema de punto flotante. Redondear al final, no en cada paso.
- **"El tester solo me dijo que estaba bonito."** Forzar entregables escritos con el guion. Sin nota escrita, no hay validación.
- **"Aparecen balances de personas que ya eliminé."** Olvida reinicializar el objeto `balances` antes de calcular.
- **"Elimina el gasto pero los balances no se actualizan."** Olvida llamar `renderBalances()` y `renderTransferencias()` después del filter.

---

## 📍 Cierre de Clase

Antes de que se vayan, asegúrate de que cada estudiante:

- [ ] Tiene las 8 HU implementadas y visibles en su app.
- [ ] Tiene su deploy público funcionando (GitHub Pages o similar).
- [ ] Corrompió su LocalStorage manualmente y la app sobrevivió.
- [ ] Sabe qué va a mostrar en sus 10 minutos de Demo Day.

**Frase de cierre sugerida:**
```
"Hoy cerraron el proyecto. Las 8 HU están. El algoritmo está. El deploy está.
Demo Day no es para construir más, es para contar lo que ya hicieron.
Vengan con el README pulido, el link del deploy a la mano, y su historia técnica preparada.
Buena suerte."
```
