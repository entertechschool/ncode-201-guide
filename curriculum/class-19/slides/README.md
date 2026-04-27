<!-- .slide: data-background="#0A192F" -->
# Clase 19: User Validation + Sprint 2
## Validas, calculas y cierras el proyecto

---

## TRANSICION: Clase 18 → Clase 19

### Clase anterior:
- Sprint 1 cerrado: HU1-HU4 funcionando con persistencia.
- Tu app crea grupos, registra gastos y los lista.

### Hoy:
- Validas tu trabajo con otro estudiante.
- Implementas lo más duro del proyecto: balances y transferencias mínimas.

> "Si sobrevives al feedback y al algoritmo de hoy, Demo Day es tuyo."

---

## QUIZ PRE-LAB

### Pregunta:
Si Ana pagó S/ 100 en una cena para 4 personas (Ana, Beto, Cami, Diana), ¿cuánto debería ser el balance de Ana al final?

*Toma 2-3 respuestas antes de continuar*

---

## COMPROBACION

### Pregunta:
Ana, Beto y Cami tienen balances +60, -20, -40. ¿Cuántas transferencias mínimas se necesitan para saldar el grupo?

A. 1 transferencia
B. 2 transferencias
C. 3 transferencias
D. Depende de quién transfiera primero

---

## COMPROBACION - Respuesta

**Respuesta correcta:** B

**Análisis de opciones:**
- **A:** Una sola no alcanza porque Ana tiene que recibir de dos deudores distintos.
- **B:** Correcto. Beto → Ana: 20. Cami → Ana: 40. Dos transferencias, todos saldados.
- **C:** Podrías hacer más, pero son redundantes. El objetivo es mínimo.
- **D:** El resultado mínimo no depende del orden si aplicas greedy correctamente.

> **Clave:** "Con N personas, el mínimo de transferencias está entre 0 y N-1."

---

## CHECKPOINT Parte 1: Validación cruzada

### Verificar:
Cada estudiante tiene feedback escrito (no verbal) y clasificado por severidad.

**¿Qué deberías ver en pantalla?**
- `FEEDBACK.md` con al menos 3 observaciones concretas.
- Clasificación: crítico / mayor / menor.
- Al menos un bug crítico arreglado antes de pasar a Parte 2.

**Problemas comunes:**
- Feedback vago ("se ve feo") → pedir específico: "¿qué exactamente se ve feo?".
- Tester amigable que solo dice "está bien" → recordar que el favor es detectar, no aprobar.

---

## CHECKPOINT Parte 2: Balances y transferencias

### Verificar:
Con 3 personas y 3 gastos variados, los números cuadran.

**¿Qué deberías ver?**
- Suma total de balances = 0 (con tolerancia de redondeo).
- Al aplicar mentalmente las transferencias sugeridas, todos quedan en cero.
- Mensaje "¡Grupo saldado! 🎉" si no hay deudas.

**Problemas comunes:**
- Redondeo mete centavos fantasma → usar `Math.round(x * 100) / 100` al final.
- No separar deudores/acreedores → el algoritmo no funciona.

---

## CHECKPOINT Parte 3: Eliminar + errores

### Verificar:
Eliminar gasto actualiza todo. LocalStorage corrupto no crashea.

**¿Qué deberías ver?**
- Eliminar gasto → balances y transferencias se recalculan sin recargar.
- LocalStorage corrupto manualmente → app muestra mensaje, ofrece "Empezar de cero".
- Sin errores rojos en la consola.

**Problemas comunes:**
- Eliminar no actualiza balances → falta llamar `renderBalances()` en el handler.
- `alert()` en lugar de mensaje en DOM → menos profesional en Demo Day.

---

## REFLEXION: Por qué el algoritmo greedy funciona aquí

| Enfoque inocente | Enfoque greedy |
|------------------|----------------|
| Cada deudor paga a cualquier acreedor el monto completo | Mayor deudor paga al mayor acreedor el mínimo entre ambos |
| Hasta N×M transferencias | Máximo N-1 transferencias |

> **Regla memorable:** "Emparejar los extremos minimiza el trabajo del medio."

---

## REFLEXION: Validar ≠ aprobar

### Pregunta de consolidación

Tu compañero te dijo "está todo bien, funciona". ¿Eso es validación útil?

*(Pista: el objetivo del tester es encontrar problemas, no tranquilizar al programador.)*

---

## TRANSICION: Preview Clase 20

### Hoy lograste:
- Feedback real incorporado en tu app.
- 8 HU terminadas (proyecto MVP completo).
- Algoritmo de transferencias implementado.

### Próxima clase:
- **Demo Day.** 10 minutos por estudiante: demo en vivo + argumentación técnica + Q&A.
- Llegas con app desplegada, README cuidado y tu historia lista.
