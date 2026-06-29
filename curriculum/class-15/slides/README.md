<!-- .slide: data-background="#0A192F" -->
# Clase 15: JSON y LocalStorage
## Que tus plantillas sobrevivan a la recarga

---

## 🔁 TRANSICIÓN: C14 → C15

### Clase anterior:
- Tu app gestiona el estado (`state.plantillas`)
- CRUD completo: crear, editar, eliminar

### Hoy:
- Que ese estado **no se pierda** al recargar
- `localStorage` + `JSON` = persistencia

> "Hasta ayer tu app olvidaba todo al recargar. Hoy aprende a recordar."

---

## 🤔 QUIZ PRE-LAB

### Pregunta:
Tu app guarda un array de objetos. Pero `localStorage` **solo guarda texto**.

¿Cómo metes una lista de objetos dentro de algo que solo acepta texto?

*Toma 2-3 respuestas antes de continuar*

---

## ✅ COMPROBACIÓN

### Pregunta:
Guardaste tus plantillas con `JSON.stringify` y al recargar las lees con `JSON.parse`. La fecha que mostrabas con `.toLocaleDateString()` ahora falla. ¿Por qué?

A. `JSON.parse` está mal escrito
B. `localStorage` borra las fechas
C. JSON convirtió el `Date` en texto; hay que rehidratarlo con `new Date(...)`
D. Las fechas no se pueden guardar nunca

---

## ✅ COMPROBACIÓN - Respuesta

**Respuesta correcta:** C

**Análisis de opciones:**
- **A:** `JSON.parse` reconstruye bien; el problema no es la sintaxis.
- **B:** `localStorage` guarda lo que le des; no borra nada selectivamente.
- **C:** ✔ JSON solo guarda datos simples. Un `Date` se vuelve string; al cargar reconstruyes con `new Date(p.fecha)`.
- **D:** Sí se pueden guardar (como texto), solo hay que rehidratarlas al leer.

> **Clave:** JSON guarda **datos simples**, no tipos como `Date`. Rehidrata al cargar.

---

## 📌 CHECKPOINT HU1: Guardar en el navegador

### Verificar:
*DevTools → Application → Local Storage*

**¿Qué debe verse?**
- La clave `whatsapp-templates` con tus datos en texto
- Se actualiza sola al agregar / editar / eliminar

**Problemas comunes:**
- No aparece nada → `guardar()` no se llama dentro de `render()`

---

## 📌 CHECKPOINT HU2: Recuperar al abrir

### Verificar:
Crea 2 plantillas y **recarga la página**

**¿Qué debe verse?**
- Las plantillas siguen ahí tras recargar
- Las fechas se muestran correctas (rehidratadas)

**Problemas comunes:**
- Lista vacía al recargar → falta `state.plantillas = cargar()` al arrancar
- Error con la fecha → falta `new Date(p.fecha)` en `render()`

---

## 📌 CHECKPOINT HU3: A prueba de datos corruptos

### Verificar:
En *DevTools* edita la clave y déjala inválida (ej. `[{titulo`), recarga

**¿Qué debe verse?**
- La app **no explota**: arranca vacía y sigue usable
- En consola aparece el aviso de datos corruptos

**Problemas comunes:**
- Pantalla en blanco → falta el `try/catch` alrededor de `JSON.parse`

---

## 📌 CHECKPOINT HU4: Vaciar + indicador

### Verificar:
Pulsa "Vaciar todo", luego agrega una plantilla

**¿Qué debe verse?**
- La lista y el Local Storage quedan limpios
- El indicador `#estado` cambia ("Vacío" → "Guardado ✓")

**Problemas comunes:**
- El navegador conserva datos → falta `localStorage.removeItem(CLAVE)`

---

## 🪞 REFLEXIÓN: Memoria vs Persistencia

| Aspecto | En memoria (C13–C14) | Persistido (C15) |
|---|---|---|
| Vive en | Una variable | `localStorage` |
| Al recargar | Se pierde | Sobrevive |
| Formato | Objeto | Texto (JSON) |

> **Regla memorable:** "El estado en memoria se olvida; el estado persistido recuerda."

---

## 🪞 REFLEXIÓN: ¿Por qué `try/catch` al parsear?

### Pregunta de consolidación
El usuario nunca toca tu código, pero los datos guardados **sí** pueden corromperse (otra pestaña, manipulación manual, un bug viejo).

¿Vale la pena envolver `JSON.parse` aunque "casi nunca falle"?

---

## 🚀 TRANSICIÓN: Lo que viene (C16)

### Hoy lograste:
- Guardar el estado con `localStorage` + `JSON.stringify`
- Cargarlo al abrir con `JSON.parse`
- Blindar la carga con `try/catch`

### Próxima clase:
- **C16 cierra el Módulo 4**: integras estado + persistencia y pules tu Gestor de Plantillas.

---

## ❓ Preguntas de Cierre

1. ¿Por qué `localStorage` necesita que conviertas tus objetos a texto antes de guardarlos?

2. ¿En qué situaciones reales usarías persistencia en el cliente y en cuáles NO?

3. ¿Qué le pasaría a tu app si quitaras el `try/catch` y alguien manipulara los datos guardados?

---

## 📦 Entrega

- Repositorio `whatsapp-templates` con persistencia funcionando
- README explicando cómo guardas / cargas y por qué usas `try/catch`
- Sitio desplegado en GitHub Pages
- Screenshot de *DevTools → Local Storage* con tus datos

### Próxima clase: Cierre del Módulo 4
