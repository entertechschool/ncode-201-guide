# Rubrica - Lab Modulo 5: Agenda de Gastos Compartidos (Proyecto Integrador Final)

> 📋 **Documento interno para evaluadores**

> ⚠️ **Nota especial:** Esta rúbrica evalúa el **Proyecto Integrador Final de M5** que se entrega y presenta en el **Demo Day (Clase 20)**. El lab de la Clase 17 es solo el kickoff de planificación; las HU1-HU8 se construyen durante los Sprints 1 y 2 (Clases 18-19). La rúbrica se publica en C17 para que el estudiante la conozca desde el primer día del módulo.

## Informacion General

| Aspecto | Detalle |
|---------|---------|
| **Proyecto** | Agenda de Gastos Compartidos |
| **Modulo** | M5 — Proyecto Integrador (Code 201 Final) |
| **Clase** | C17 (kickoff) → C20 (Demo Day, entrega y presentación) |
| **Puntaje Total** | 100 puntos. Aprobación mínima: 70/100 |

---

## Criterios de Evaluacion

### 1. Funcionalidades del MVP (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Las 8 historias base (HU1-HU8) están implementadas y funcionan correctamente al 100% |
| **Bueno** | 15 | 6-7 HU funcionales, 1-2 con bugs menores que no rompen el flujo |
| **Satisfactorio** | 10 | 4-5 HU funcionales, el resto incompletas o rotas |
| **Bajo** | 5 | <4 HU funcionales o el flujo principal no completa |
| **No entregado** | 0 | App no funciona o sin MVP entregable |

**Aspectos evaluados:**
- HU1: crear grupo con nombre
- HU2: agregar y eliminar personas (sin duplicados, mínimo 2)
- HU3: registrar gasto con validaciones (monto >0, descripción, divididoEntre)
- HU4: ver lista de gastos ordenada por fecha
- HU5: calcular balance neto (positivo verde, negativo rojo)
- HU6: transferencias mínimas sugeridas
- HU7: eliminar gasto con confirmación + recálculo
- HU8: persistencia completa + recuperación ante datos corruptos

---

### 2. Calidad Técnica (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Estado centralizado correcto, `localStorage` con `try/catch`, código organizado en archivos separados (state, storage, balance, ui, app), algoritmo de transferencias mínimo |
| **Bueno** | 15 | Estado correcto, persistencia funcional, código separado en archivos pero con alguna lógica filtrada |
| **Satisfactorio** | 10 | Funcional pero todo el código en un solo archivo o sin manejo de errores en localStorage |
| **Bajo** | 5 | Código monolítico, estado fragmentado, sin manejo de errores |
| **No entregado** | 0 | Sin estructura técnica reconocible |

**Aspectos evaluados:**
- Estado centralizado en `state.js` con estructura `{ grupo: { nombre, personas: [], gastos: [] } }`
- `storage.js` envuelve `localStorage.setItem`/`getItem` en `try/catch`
- `balance.js` con cálculo de balance neto y algoritmo de transferencias mínimas
- `ui.js` con renderizado y eventos del DOM
- Validaciones de campos obligatorios y montos positivos
- HTML semántico, CSS responsivo (Flexbox/Grid)

---

### 3. Historias Adicionales / Retos (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | ≥2 HU adicionales del listado de retos (o propias aprobadas) implementadas completamente con criterios cumplidos |
| **Bueno** | 15 | 1 HU adicional implementada con criterios cumplidos al 100% |
| **Satisfactorio** | 10 | 1 HU adicional implementada parcialmente |
| **Bajo** | 5 | HU adicional planteada pero no funciona |
| **No entregado** | 0 | Sin HU adicionales |

**Aspectos evaluados:**
- División desigual (porcentajes personalizados)
- Múltiples grupos simultáneos
- Exportar resumen a texto plano (para WhatsApp)
- Modo oscuro persistente
- Filtrar gastos por persona o rango
- O cualquier HU propia aprobada por el instructor

---

### 4. Presentación en Vivo — Demo Day (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Demo clara en ≤10 min mostrando flujo completo (crear grupo → personas → gastos → balance → transferencias → eliminar), navegación fluida, sin errores en vivo |
| **Bueno** | 15 | Demo cubre el flujo principal pero omite alguna funcionalidad clave o tiene 1-2 tropiezos |
| **Satisfactorio** | 10 | Demo entrega lo pedido pero excede tiempo o omite funcionalidades importantes |
| **Bajo** | 5 | Demo confusa, no muestra el flujo completo, app falla en vivo |
| **No entregado** | 0 | Sin presentación |

**Aspectos evaluados:**
- Tiempo: máximo 5 min para demo en vivo (parte del bloque de 10 min total)
- Crea grupo nuevo durante la demo
- Agrega ≥3 personas
- Registra ≥3 gastos diferentes
- Muestra balance y transferencias sugeridas
- Elimina al menos 1 gasto y muestra el recálculo automático
- No se evalúa fluidez verbal ni nervios

---

### 5. Argumentación Técnica + Q&A (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Justifica ≥2 decisiones técnicas (modelado del estado, algoritmo de transferencias, manejo de errores) con argumentos sólidos; responde correctamente Q&A sobre fragmento específico solicitado por el instructor |
| **Bueno** | 15 | Justifica 1 decisión técnica con claridad, responde con dificultad pero correcto a Q&A |
| **Satisfactorio** | 10 | Argumentación superficial, identifica conceptos sin profundizar |
| **Bajo** | 5 | No justifica decisiones o no puede responder Q&A básico |
| **No entregado** | 0 | Sin argumentación |

**Aspectos evaluados:**
- Tiempo: 3 min argumentación + 2 min Q&A (parte del bloque de 10 min total)
- Explica modelado del estado (estructura del objeto grupo)
- Justifica el algoritmo de transferencias mínimas (separar deudores/acreedores, emparejar, repetir)
- Explica manejo de errores en `localStorage` (try/catch, datos corruptos)
- Responde Q&A sobre 1 fragmento de código que elige el instructor
- Si usó IA: explica qué porción del código entiende técnicamente

---

## Escala de Calificacion

| Rango | Nota | Descripcion |
|-------|------|-------------|
| 90-100 | A | Excelente — Dominio completo del curso Code 201 |
| 80-89 | B | Bueno — Comprensión sólida con áreas menores a mejorar |
| 70-79 | C | Satisfactorio — Cumple requisitos mínimos de aprobación |
| < 70 | F | No aprueba — Requiere completar trabajo antes de cierre |

---

## Checklist de Entrega

### Archivos Requeridos
- [ ] URL del repositorio público en GitHub
- [ ] URL del deploy en GitHub Pages funcional
- [ ] Commits frecuentes durante los Sprints 1 y 2 (no solo commits del día final)

### Documentacion
- [ ] README del repo con HU implementadas (HU1-HU8 + adicionales)
- [ ] README del repo con decisiones técnicas clave explicadas brevemente
- [ ] README del repo con instrucciones para correr localmente
- [ ] README del repo con enlace al deploy

### Verificacion Tecnica
- [ ] Crear grupo → agregar personas → registrar gastos → ver balance correcto
- [ ] Algoritmo de transferencias minimiza el número total de movimientos
- [ ] Recargar página: grupo + personas + gastos persisten
- [ ] DevTools > Application > LocalStorage muestra los datos estructurados
- [ ] Borrar manualmente LocalStorage o corromper datos → app no se rompe, muestra mensaje y ofrece "Empezar de cero"
- [ ] El sitio carga sin errores en consola

---

## Notas para el Evaluador

1. **No penalices nervios en la presentación.** Lo que se evalúa es la comprensión técnica, no fluidez verbal.
2. **El uso de IA está permitido**, pero el estudiante debe poder explicar técnicamente el código que entrega. Si no puede argumentar una decisión, baja el Criterio 5.
3. **El fragmento del Criterio 5 (Q&A) lo eliges tú** en vivo durante la presentación — pide explícitamente "explícame el algoritmo de transferencias mínimas" o "explícame cómo modelaste un gasto" señalando una porción del código.
4. **El algoritmo de transferencias es el reto técnico más alto** del proyecto. Si el estudiante no lo implementó (o lo copió sin entenderlo), baja Criterios 1 y 5.
5. **Verifica commits frecuentes:** si solo hay commits del día final del Sprint 2, indica que no siguió el ritmo de los sprints. Bajar Criterio 2.
6. **Aprobación mínima 70/100.** Si el puntaje es < 70, el estudiante debe completar el trabajo faltante antes del cierre formal del curso.

---

## Ejemplo de Retroalimentacion

### Retroalimentacion Positiva
> "Las 8 HU base están todas funcionales, el algoritmo de transferencias mínimas minimiza correctamente los movimientos (verificado con un grupo de 4 personas con balances dispares), y la separación de archivos (`state.js`, `storage.js`, `balance.js`, `ui.js`) facilita el mantenimiento. La argumentación sobre el modelado del estado como objeto único vs múltiples arrays fue precisa. La HU adicional de exportar a WhatsApp es un detalle pro que muestra atención al usuario final."

### Areas de Mejora
> "Las HU1-HU7 funcionan correctamente pero la HU8 (persistencia + recuperación ante errores) está incompleta: al corromper manualmente los datos en LocalStorage, la app muestra 'Cannot read property' en consola en vez de un mensaje al usuario y opción de 'Empezar de cero'. Revisa el `try/catch` en `storage.js`. El algoritmo de transferencias funciona pero genera N transferencias en vez de minimizarlas — revisa la estrategia de emparejar mayor deudor con mayor acreedor."
