<!-- .slide: data-background="#0A192F" -->
# Clase 13: Modelado de Datos y Manipulación de Texto
## Code 201 · Módulo 4 · Proyecto: Gestor de Plantillas para WhatsApp

---

## 🔄 TRANSICIÓN: C12 → C13

### Clase anterior (cierre M3):
- Consumir APIs, manejar errores, cerrar la Pokédex

### Hoy (inicio M4):
- Modelar datos con `class` y un **estado central**
- Dibujar la pantalla con `render()`
- **Manipular texto** con métodos de String

> "Tu app ya no trae datos de afuera: ahora los crea, los limpia y los transforma."

---

## 🤔 QUIZ PRE-LAB

### Pregunta:

Un usuario escribe en tu formulario: `  Ventas `, otro escribe `#VENTAS` y otro `ventas`.

¿Cómo logras que las tres entradas se guarden **exactamente igual**?

*Toma 2-3 respuestas antes de continuar*

---

## ✅ COMPROBACIÓN

### Pregunta:

¿Qué hace `"  Hola ".trim().toLowerCase()`?

A. Devuelve `"  hola "` (solo baja mayúsculas)
B. Modifica la variable original a `"hola"`
C. Devuelve un texto nuevo: `"hola"`
D. Da error porque no se pueden encadenar métodos

---

## ✅ COMPROBACIÓN - Respuesta

**Respuesta correcta:** C

**Análisis de opciones:**
- **A:** `trim()` SÍ quita los espacios de los bordes; no solo baja mayúsculas.
- **B:** Los strings son inmutables; los métodos **devuelven un texto nuevo**, no mutan el original.
- **C:** Correcta. Cada método devuelve un string y el siguiente opera sobre ese resultado.
- **D:** Encadenar métodos de String es válido y muy común.

> **Clave:** Los métodos de String NO modifican el texto: devuelven uno nuevo.

---

## 🟢 CHECKPOINT HU1: Modelar y centralizar

### Verificar (en consola):
```javascript
agregarPlantilla("Saludo", "Hola {nombre}", "ventas");
state.plantillas;   // la lista creció
```

**¿Qué debe verse?**
- `state.plantillas` muestra el objeto `Template`
- Cada plantilla tiene `titulo`, `mensaje`, `hashtag` y `fecha`

**Problemas comunes:**
- `state is not defined` → revisar orden de los `<script>`

---

## 🟢 CHECKPOINT HU2: Estado → render

### Verificar:
Llena el formulario y dale "Agregar plantilla".

**¿Qué debe verse?**
- La plantilla aparece sola en la lista, sin recargar
- Muestra la **fecha de hoy** en formato legible
- Agregar otra no borra la anterior

**Problemas comunes:**
- No aparece nada → falta llamar `render()` tras agregar

---

## 🟢 CHECKPOINT HU3: Limpiar y normalizar

### Verificar:
Escribe `  Ventas ` en el hashtag y deja el mensaje vacío.

**¿Qué debe verse?**
- El hashtag se guarda como `#ventas`
- Con el mensaje vacío, **no** deja agregar (alerta)

**Problemas comunes:**
- Guarda con espacios → falta `.trim()`
- No agrega el `#` → revisar `startsWith("#")`

---

## 🟢 CHECKPOINT HU4: Mensaje final con variables

### Verificar:
Crea una plantilla con `Hola {nombre}, gracias por tu compra`.

**¿Qué debe verse?**
- La vista previa muestra `Hola Ana, gracias...`
- Un mensaje largo aparece recortado con `…`
- Los hashtags se ven como etiquetas separadas

**Problemas comunes:**
- `{nombre}` no se reemplaza → revisar `replaceAll("{nombre}", ...)`

---

## 💡 REFLEXIÓN: Inmutable vs mutable

| Acción | Resultado |
|---|---|
| `texto.trim()` | Devuelve un **texto nuevo** (no muta) |
| `state.plantillas = [...]` | **Reasignamos** el estado (no mutamos) |

> **Regla memorable:** "Cambias el estado → llamas `render()`. Y `render()` siempre limpia y redibuja todo."

---

## 🧰 REFLEXIÓN: Tu caja de herramientas de texto

### Pregunta de consolidación:

Si quieres convertir `"Promo {nombre}"` en `"Promo Ana"`, ¿qué método usas? ¿Y para partir `"#oferta #ya"` en dos etiquetas?

> Pista: uno reemplaza, el otro divide.

---

## ➡️ TRANSICIÓN: Preview C14

### Hoy lograste:
- Modelar plantillas con `class` y un estado central
- Render desde el estado (cambias datos → redibujas)
- Limpiar, normalizar y transformar texto

### Próxima clase:
- Editar y eliminar plantillas: tu estado no solo crece, también cambia y mengua

---

## 🧠 Preguntas de Cierre

1. ¿Por qué decimos que los métodos de String "no modifican el texto original"?

2. ¿Cuándo usarías `.replaceAll()` y cuándo `.split()`?

3. ¿Qué pasaría con tu app si nunca llamaras `render()` tras cambiar el estado?

---

## 📦 Entrega

- Repo `whatsapp-templates` en GitHub Pages
- `README.md` describiendo la clase `Template` y los métodos de String usados
- Screenshot de la lista con una plantilla y su vista previa con `{nombre}` reemplazado

### Próxima clase: Editar y eliminar plantillas
