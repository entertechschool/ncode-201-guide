# Rubrica - Lab Modulo 4: Gestor de Plantillas para WhatsApp

> 📋 **Documento interno para evaluadores**

## Informacion General

| Aspecto | Detalle |
|---------|---------|
| **Proyecto** | Gestor de Plantillas para WhatsApp |
| **Modulo** | M4 — Eventos y Persistencia |
| **Clase** | C16 — Persistencia y Sincronización |
| **Puntaje Total** | 100 puntos |

---

## Criterios de Evaluacion

### 1. Historias de Usuario implementadas (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | HU1-HU5 del lab + ≥2 HU adicionales propias, funcionales y con criterios de aceptación cumplidos al 100% |
| **Bueno** | 15 | HU1-HU5 + 2 HU adicionales con criterios en su mayoría cumplidos |
| **Satisfactorio** | 10 | HU1-HU5 funcionales + 1 HU adicional con criterios parciales |
| **Bajo** | 5 | HU1-HU5 implementadas pero no funcionan correctamente |
| **No entregado** | 0 | Sin HU funcionales |

**Aspectos evaluados:**
- HU1: guardado automático al editar
- HU2: sincronización instantánea Store ↔ UI
- HU3: recuperación de estado al recargar
- HU4: eliminación con confirmación
- HU5: validaciones de entrada y feedback
- HU adicionales en rama propia y mergeadas vía PR

---

### 2. Calidad técnica: estado + persistencia + sincronización (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Store centralizado correcto, persistencia con `localStorage` envuelta en `try/catch`, sincronización automática estado↔UI, manejo correcto de eventos y validaciones |
| **Bueno** | 15 | Store y persistencia correctos, sincronización funciona pero con alguna inconsistencia menor |
| **Satisfactorio** | 10 | Persistencia funcional pero sin Store centralizado o sin sincronización automática |
| **Bajo** | 5 | Estado fragmentado, persistencia sin manejo de errores |
| **No entregado** | 0 | Sin persistencia funcional |

**Aspectos evaluados:**
- Store centralizado en archivo separado (`store.js` o similar)
- `localStorage.setItem` y `getItem` envueltos en `try/catch`
- Persistencia se dispara automáticamente al modificar el Store
- UI se actualiza automáticamente al cambiar el Store (no manual)
- Validaciones de campos obligatorios antes de guardar

---

### 3. Presentación de funcionalidades en vivo (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Demo ≤5 min, muestra creación/edición/restauración/visualización de plantillas, navegación clara, demuestra recuperación tras recarga |
| **Bueno** | 15 | Demo muestra funcionalidades clave pero omite demostrar recuperación tras recarga |
| **Satisfactorio** | 10 | Demo entrega lo pedido pero sin mostrar todas las HU |
| **Bajo** | 5 | Presenta pero no muestra la app funcionando correctamente |
| **No entregado** | 0 | Sin presentación |

**Aspectos evaluados:**
- Tiempo: máximo 5 min, uso eficiente
- Crea una plantilla nueva en vivo
- Edita una plantilla existente
- Recarga la página y muestra que la plantilla persiste
- Elimina con confirmación y muestra que la UI se actualiza
- No se evalúa fluidez verbal ni nervios

---

### 4. Argumentación técnica (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Justifica ≥2 decisiones técnicas con argumentos sólidos: modelado del estado, estructura del Store, estrategia de persistencia, manejo de errores en localStorage |
| **Bueno** | 15 | Justifica 1 decisión técnica claramente, responde con dificultad pero correcto a otra |
| **Satisfactorio** | 10 | Argumentación superficial, identifica conceptos sin profundizar |
| **Bajo** | 5 | No justifica decisiones o confunde Store con persistencia |
| **No entregado** | 0 | Sin argumentación |

**Aspectos evaluados:**
- Explica el modelado del estado (qué propiedades tiene una plantilla)
- Justifica la estructura del Store (centralizado vs fragmentado)
- Argumenta el uso de `try/catch` en `localStorage`
- Si usó IA: explica qué porción del código entiende técnicamente

---

### 5. Desafío: explicación de fragmento de código solicitado por el Instructor (20 puntos)

| Nivel | Puntos | Descripcion |
|-------|--------|-------------|
| **Excelente** | 20 | Explica 1 fragmento a solicitud del instructor con claridad técnica, sitio desplegado en GitHub Pages funcional, README documentado con HU y decisiones técnicas |
| **Bueno** | 15 | Explica el fragmento con apoyo parcial del instructor, deploy funcional |
| **Satisfactorio** | 10 | Explica con dificultad, deploy funcional pero README incompleto |
| **Bajo** | 5 | No puede explicar el fragmento o sitio no desplegado |
| **No entregado** | 0 | Sin entregable público |

**Aspectos evaluados:**
- Capacidad para explicar el código entregado bajo demanda
- GitHub Pages cargando sin errores
- README del repo con HU implementadas y decisiones técnicas clave
- Enlace al sitio desplegado documentado

---

## Escala de Calificacion

| Rango | Nota | Descripcion |
|-------|------|-------------|
| 90-100 | A | Excelente — Dominio completo del módulo |
| 80-89 | B | Bueno — Comprensión sólida con áreas menores a mejorar |
| 70-79 | C | Satisfactorio — Cumple requisitos mínimos |
| < 70 | F | Necesita mejora — No cumple requisitos básicos |

---

## Checklist de Entrega

### Archivos Requeridos
- [ ] URL del repositorio público en GitHub
- [ ] URL de GitHub Pages funcional
- [ ] Screenshot de la app con persistencia funcionando tras recarga

### Documentacion
- [ ] README del repo con HU implementadas (HU1-HU5 + adicionales)
- [ ] README del repo con explicación de la arquitectura del Store y persistencia
- [ ] README del repo con decisiones técnicas clave

### Verificacion Tecnica
- [ ] Crear plantilla → modificar campo → recargar página → plantilla persiste
- [ ] Eliminar plantilla con confirmación → UI se actualiza sin refresh manual
- [ ] DevTools > Application > LocalStorage muestra los datos correctamente
- [ ] El sitio carga sin errores en consola

---

## Notas para el Evaluador

1. **No penalices nervios en la presentación.** Lo que se evalúa es la comprensión técnica, no fluidez verbal.
2. **El uso de IA está permitido**, pero el estudiante debe poder explicar técnicamente el código que entrega. Si no puede argumentar una decisión, baja el Criterio 4.
3. **El fragmento del Criterio 5 lo eliges tú** en vivo durante la presentación — pide explícitamente "explícame este Store" o "explícame esta función de sincronización" señalando una porción del código.
4. **Verifica recarga en vivo:** pide al estudiante recargar la página durante la demo. Si la app no restaura el estado, es un fallo crítico del Criterio 2.

---

## Ejemplo de Retroalimentacion

### Retroalimentacion Positiva
> "El Store centralizado en `store.js` con suscripción automática a cambios está bien diseñado. La persistencia se dispara desde el Store (no desde cada componente), lo cual evita duplicación. La justificación de envolver `localStorage` en `try/catch` por cuota excedida fue precisa. La recarga funcionó al primer intento — eso confirma que la sincronización está bien."

### Areas de Mejora
> "Las plantillas se guardan correctamente pero al editar un campo, la UI no se actualiza hasta hacer clic fuera del input — falta suscribir el evento `input` además de `blur`. Revisa la HU2. La argumentación técnica fue clara pero no pudiste explicar por qué `localStorage.setItem` puede fallar (cuota excedida, modo privado) cuando se preguntó."
