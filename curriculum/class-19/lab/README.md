# Lab 19: User Validation + Sprint 2 — HU5 a HU8

## 🎯 Objetivos

1. Validar la app de un compañero con un guion estructurado y recibir feedback del tuyo.
2. Implementar HU5 (balances) y HU6 (transferencias sugeridas) con lógica algorítmica.
3. Completar HU7 (eliminar gastos) y HU8 (manejo robusto de errores de LocalStorage).

---

## 🔑 Conceptos Clave

- **Guion de validación** - Lista fija de acciones que todo tester sigue, para comparar resultados.
- **Balance neto** - Suma firmada: `(loQuePagó) - (suParteEnLosGastosQueParticipó)`.
- **Greedy de transferencias** - Emparejar iterativamente el mayor deudor con el mayor acreedor.
- **Manejo defensivo** - Asumir que LocalStorage puede fallar y anticipar caminos alternativos.

---

## ⚙️ Setup Inicial

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | App del Sprint 1 corriendo | HU1-HU4 funcionan en Live Server |
| ☐ | Cambios pusheados a `main` | `git status` limpio |
| ☐ | `js/balance.js` vacío listo | Archivo existe aunque sin contenido aún |
| ☐ | Papel o nota digital abierta | Para anotar feedback al validar |

> ⚠️ Si tu Sprint 1 no está cerrado, dedica los primeros 20 minutos a completarlo. Pide apoyo al instructor.

---

## Parte 1: Validación cruzada (45 min)

### 1.1 Intercambia con un compañero

Formarás pareja con otro estudiante. Cada uno va a probar la app del otro durante **15 minutos**, siguiendo el guion fijo. El otro observa en silencio y anota.

### 1.2 Guion de validación (copia esto en una nota)

```markdown
## Validación cruzada — App de: _____________
Tester: _____________

### Tareas a ejecutar
- [ ] Crear un grupo llamado "Viaje de prueba"
- [ ] Agregar 3 personas: Ana, Beto, Cami
- [ ] Registrar 2 gastos: "Cena S/ 90 pagó Ana" y "Taxi S/ 30 pagó Beto"
- [ ] Recargar la página
- [ ] Intentar registrar un gasto con monto 0

### Observaciones
- ¿Qué fue intuitivo? _____
- ¿Qué fue confuso? _____
- ¿Algún error visible en pantalla? _____
- ¿Algún error en la consola (F12)? _____
- ¿Qué mejoraría si fuera mi app? _____
```

✅ **Checkpoint Parte 1:** Tienes la nota de tu compañero con observaciones concretas sobre tu app y tú le entregaste la tuya con las tuyas sobre la suya.

### 1.3 Prioriza el feedback recibido

En un archivo `FEEDBACK.md` local, clasifica:

```markdown
## Feedback recibido

### Crítico (bug que rompe HU) — arreglar HOY
- _____

### Mayor (flujo confuso) — evaluar si entra hoy o queda para retos
- _____

### Menor (pulido visual) — NO entra hoy, puede quedar de reto
- _____
```

> 💡 **Tip:** Si un crítico no lo tenías detectado, arréglalo antes de pasar a Parte 2. Los bugs base invalidan el cálculo de balances.

---

## Parte 2: HU5 + HU6 — Balances y transferencias (75 min)

### 2.1 HU5: Calcular balance neto en `js/balance.js`

```javascript
function calcularBalances() {
  const balances = {};
  // Inicializa balance en 0 para cada persona
  state.grupo.personas.forEach((p) => { balances[p] = 0; });

  state.grupo.gastos.forEach((gasto) => {
    // Suma al balance de quien pagó el monto completo
    balances[gasto.pagadoPor] += /* ¿qué valor? */;

    // Resta la parte proporcional a cada persona entre las que se dividió
    const parteIndividual = /* monto ÷ cuántos dividen */;
    gasto.divididoEntre.forEach((persona) => {
      balances[persona] -= parteIndividual;
    });
  });

  return balances;
}
```

Conecta con el render:

```javascript
function renderBalances() {
  const balances = calcularBalances();
  const contenedor = document.getElementById('seccionBalances');
  // Completa: pinta cada persona con su balance
  // Positivo en verde, negativo en rojo, cero en neutro
}
```

> 💡 **Tip:** Las diferencias pequeñas por decimales (0.000001) pueden hacer que "saldado" se vea como "debe 0.00001". Usa `Math.round(balance * 100) / 100` al final.

### 2.2 HU6: Transferencias sugeridas (algoritmo greedy)

```javascript
function calcularTransferencias() {
  const balances = calcularBalances();

  // Separa en deudores (balance < 0) y acreedores (balance > 0)
  const deudores = [];
  const acreedores = [];
  for (const persona in balances) {
    const b = balances[persona];
    if (b < -0.01) deudores.push({ persona, monto: -b });
    else if (b > 0.01) acreedores.push({ persona, monto: b });
  }

  const transferencias = [];
  // Ordena: mayor deudor vs mayor acreedor
  while (deudores.length > 0 && acreedores.length > 0) {
    deudores.sort((a, b) => b.monto - a.monto);
    acreedores.sort((a, b) => b.monto - a.monto);

    const d = deudores[0];
    const a = acreedores[0];
    const pago = Math.min(d.monto, a.monto);

    transferencias.push({
      de: d.persona,
      a: a.persona,
      monto: Math.round(pago * 100) / 100
    });

    d.monto -= pago;
    a.monto -= pago;

    // Si alguno quedó saldado, sácalo
    if (d.monto < 0.01) deudores.shift();
    if (a.monto < 0.01) acreedores.shift();
  }

  return transferencias;
}
```

✅ **Checkpoint Parte 2:** Agregas 3 personas, registras 3 gastos variados, y ves:
- Balances con signo correcto (suma total = 0).
- Lista de transferencias que al aplicarlas mentalmente saldan a todos.
- Si el grupo ya está saldado, ves "¡Grupo saldado! 🎉".

---

## Parte 3: HU7 + HU8 — Eliminar y manejar errores (60 min)

### 3.1 HU7: Eliminar gasto con recálculo

```javascript
function eliminarGasto(id) {
  const confirmar = confirm('¿Eliminar este gasto?');
  if (!confirmar) return;

  state.grupo.gastos = state.grupo.gastos.filter(/* ¿qué condición? */);
  guardarEstado();
  renderGastos();
  renderBalances();       // recalcula automáticamente
  renderTransferencias(); // recalcula automáticamente
}
```

Conecta cada gasto en la lista con un botón eliminar (usa delegación de eventos):

```javascript
document.getElementById('listaGastos').addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-eliminar')) {
    const id = /* ¿de dónde lo sacas? pista: dataset */;
    eliminarGasto(id);
  }
});
```

### 3.2 HU8: Manejo robusto de LocalStorage

Refuerza `js/storage.js` para no crashear ante errores:

```javascript
function cargarEstado() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    // Validación defensiva: ¿tiene la forma esperada?
    if (!parsed || !parsed.grupo || !Array.isArray(parsed.grupo.personas)) {
      throw new Error('Estructura inesperada');
    }
    state.grupo = parsed.grupo;
  } catch (error) {
    console.warn('Estado corrupto, ofreciendo reinicio');
    mostrarErrorDeCarga(error);
  }
}

function mostrarErrorDeCarga(error) {
  // Completa: muestra un mensaje en el DOM (no alert)
  // "Los datos guardados no se pudieron cargar. ¿Empezar de cero?"
  // Con un botón que haga localStorage.removeItem(STORAGE_KEY) y recargue.
}
```

> 💡 **Tip para probar HU8:** En DevTools → Application → LocalStorage → edita manualmente el valor a algo corrupto (`{malformado}`) y recarga. Tu app debe mostrar el mensaje, no crashear.

✅ **Checkpoint Parte 3:** Eliminas un gasto y los balances se actualizan sin recargar. Corrompes manualmente el LocalStorage y la app ofrece "Empezar de cero" en lugar de crashear.

---

## 📁 Estructura del Proyecto al Cierre

```
gastos-compartidos/
├── index.html          # Con secciones de Balances y Transferencias agregadas
├── css/
│   └── styles.css      # Estilos para balance positivo/negativo/cero
├── js/
│   ├── state.js
│   ├── storage.js      # Con manejo robusto de errores (HU8)
│   ├── ui.js           # Con renderBalances, renderTransferencias
│   ├── balance.js      # calcularBalances + calcularTransferencias
│   └── app.js
├── README.md           # 8 HU marcadas como hechas + link al deploy
├── FEEDBACK.md         # Feedback recibido con prioridades
└── .gitignore
```

---

## 📝 Entrega

### Checklist

- [ ] HU5: balances calculados correctamente (suma = 0).
- [ ] HU6: transferencias sugeridas mínimas.
- [ ] HU7: eliminar gasto con recálculo automático.
- [ ] HU8: LocalStorage corrupto no crashea la app.
- [ ] `FEEDBACK.md` con feedback recibido clasificado.
- [ ] App desplegada públicamente (GitHub Pages o similar).
- [ ] Al menos 4 commits nuevos pusheados en este sprint.

### Qué entregar

- **Link al repositorio** con el código del Sprint 2.
- **Link al deploy público** (GitHub Pages recomendado).
- **Screenshot** de tu app con balances y transferencias visibles.

---

> ### 💡 Consejos
>
> - Arregla primero los críticos que detectó tu compañero. Un bug base invalida todo el cálculo.
> - El algoritmo de transferencias parece complicado pero se entiende con un ejemplo en papel: dibuja 3 personas con balances +30, -20, -10 y aplica el greedy paso a paso.
> - La HU8 no es opcional: un app que crashea por datos corruptos se ve poco profesional en Demo Day.
> - Si llegas temprano al final, trabaja en 1 reto adicional del enunciado (división desigual, modo oscuro, exportar a WhatsApp). Eso te suma en rúbrica.
