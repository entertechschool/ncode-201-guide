<!-- .slide: data-background="#0A192F" -->
# Clase 14: App State Management
## Patrón Store — estado centralizado e inmutable

---

## TRANSICIÓN: C13 → C14

### Clase anterior (Modelado de Objetos ES6):
- Modelaste entidades con `class` y constructor
- Separaste estado local por instancia
- Identificaste el problema: ¿qué pasa cuando múltiples partes de la app necesitan el mismo dato?

### Hoy:
- El estado disperso genera bugs difíciles de rastrear
- El **Patrón Store** centraliza el estado en un único objeto controlado
- Modificar el estado siempre pasa por funciones — nunca directo

> "Una app sin Store es como una oficina donde cualquiera puede editar el documento original. Con Store, hay un solo archivero con llaves."

---

## QUIZ PRE-LAB

### Pregunta:
¿Qué problema genera modificar el estado de una app directamente desde distintos lugares del código?

*Toma 2-3 respuestas antes de continuar*

---

## COMPROBACIÓN

### Pregunta:
¿Cuál de estas implementaciones respeta la inmutabilidad del estado al agregar una plantilla?

A. `store.plantillas.push(nuevaPlantilla)`

B. `store.plantillas = store.plantillas.concat(nuevaPlantilla)`

C. `store.plantillas[store.plantillas.length] = nuevaPlantilla`

D. `nuevaPlantilla.id = store.plantillas.length; store.plantillas.add(nuevaPlantilla)`

---

## COMPROBACIÓN - Respuesta

**Respuesta correcta:** B

**Análisis de opciones:**
- **A:** `.push()` muta el array original — viola la inmutabilidad
- **B:** `.concat()` devuelve un **nuevo array** sin tocar el original — correcto
- **C:** Asignación directa por índice — también muta el array original
- **D:** Los arrays no tienen `.add()` en JavaScript — error de sintaxis

> **Clave:** Inmutabilidad = nunca modificar, siempre crear uno nuevo con los cambios

---

## CHECKPOINT HU1: Estado centralizado visible

**¿Qué debe verse? (30 min)**

Abre tu proyecto en el navegador:
- ✅ `store.js` exporta (o define globalmente) un objeto con `plantillas: []`
- ✅ Al cargar la página, se muestran las 2 plantillas precargadas
- ✅ El DOM se actualiza leyendo desde la Store, no con datos hardcodeados en HTML

**Problemas comunes:**
- La página carga vacía → verificar que la función de render se llama en el `DOMContentLoaded`
- Datos hardcodeados en HTML → mover los datos iniciales al array en `store.js`

---

## CHECKPOINT HU2: Agregar plantilla sin mutar el estado

**¿Qué debe funcionar? (70 min)**

Completa el formulario y presiona "Guardar":
- ✅ La nueva plantilla aparece en pantalla sin recargar la página
- ✅ El array original no fue mutado — se creó uno nuevo con `.concat()` o spread `[...plantillas, nueva]`
- ✅ El formulario se limpia después de guardar

**Problemas comunes:**
- La plantilla se agrega pero la vista no actualiza → la función de render no se vuelve a llamar tras el cambio de estado
- Formulario no se limpia → usar `form.reset()` o limpiar los inputs manualmente

---

## CHECKPOINT HU3: Eliminar sin mutar el array

**¿Qué debe funcionar? (90 min)**

Haz clic en el botón eliminar de una plantilla:
- ✅ La plantilla desaparece de la interfaz sin recargar
- ✅ El array de estado se reemplaza con `.filter()` — sin mutar el original
- ✅ Las demás plantillas no se ven afectadas

**Problemas comunes:**
- Elimina la plantilla equivocada → verificar que el `id` o índice se pasa correctamente al handler
- El array no se actualiza → confirmar que `store.plantillas` se reasigna con el resultado del `.filter()`

---

## REFLEXIÓN: Mutabilidad vs Inmutabilidad

| Operación | Muta el original | Inmutable |
|-----------|-----------------|-----------|
| Agregar | `push()` ❌ | `.concat()` o `[...arr, nuevo]` ✅ |
| Eliminar | `splice()` ❌ | `.filter()` ✅ |
| Modificar | `arr[i] = x` ❌ | `.map()` con condición ✅ |

> **Regla memorable:** "Si el método original cambia, usaste mutación. Si recibes uno nuevo, usaste inmutabilidad."

---

## REFLEXIÓN: ¿Por qué centralizar el estado?

### Sin Store:
- El estado vive en variables dispersas en distintos archivos
- Un cambio en un lugar puede romper otro sin que lo notes
- Depurar requiere rastrear múltiples fuentes de verdad

### Con Store:
- Un solo lugar para leer y modificar el estado
- Los cambios son predecibles y rastreables
- **Anti-hype:** Una Store básica no reemplaza Redux ni Zustand — para apps grandes, necesitarás herramientas más robustas

---

## TRANSICIÓN: Preview Clase 15

### Hoy lograste:
- Centralizar el estado en un objeto Store
- Agregar y eliminar datos de forma inmutable (`.concat()`, `.filter()`)
- Sincronizar el DOM con el estado tras cada cambio

### Próxima clase (JSON y LocalStorage):
- El estado que construiste hoy desaparece al recargar la página
- `localStorage` lo persiste entre sesiones
- `JSON.stringify` y `JSON.parse` serializan tu Store para guardarla

---

## Preguntas de Cierre

1. ¿Por qué mutar el estado directamente genera bugs difíciles de encontrar?

2. ¿En qué se parece el Patrón Store a lo que aprendiste sobre clases ES6 en la clase anterior?

3. ¿Qué le falta a esta Store para que los datos sobrevivan al recargar la página?

---

## Entrega

- URL del repositorio `whatsapp-templates` en GitHub (rama `lab14-store`)
- URL del proyecto desplegado en GitHub Pages
- En el `README.md` del repo: explica cómo implementaste la Store y qué decisiones tomaste para mantener la inmutabilidad

### Próxima clase: JSON y LocalStorage
