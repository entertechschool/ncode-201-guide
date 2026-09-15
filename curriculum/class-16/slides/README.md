<!-- .slide: data-background="#0A192F" -->
# Clase 16: Módulos (ESM) y Cierre
## Code 201 · Módulo 4 · Proyecto: Gestor de Plantillas

---

## TRANSICIÓN: C15 → C16

### Clase anterior:
- Tu app **persiste** con JSON + LocalStorage
- Crear, editar, eliminar, filtrar

### Hoy:
- Repartir el código en **módulos ESM**
- Modal de confirmación propio + estado vacío
- **Cerrar** el proyecto del módulo

> "Hoy dejas tu app lista para mostrar."

---

## QUIZ PRE-LAB

### Pregunta:
Tu app crece y ya tienes 300 líneas en un solo archivo. ¿Qué problema empieza a aparecer?

*Toma 2-3 respuestas antes de continuar*

---

## COMPROBACIÓN

### ¿Por qué los módulos ESM no funcionan al abrir el HTML con doble clic?

A. Porque Tailwind bloquea el acceso a archivos
B. Porque `file://` no permite cargar módulos por seguridad; necesitas un servidor
C. Porque falta declarar las variables globales
D. Porque el navegador no entiende `import`

---

## COMPROBACIÓN - Respuesta

**Respuesta correcta:** B

**Análisis de opciones:**
- **A:** Tailwind no tiene nada que ver con la carga de módulos.
- **B:** Correcto. Los módulos se cargan por HTTP; con `file://` el navegador los bloquea. Usa Live Server o `python -m http.server`.
- **C:** Justo lo contrario: ESM **elimina** la necesidad de globales.
- **D:** El navegador sí entiende `import`; el problema es el protocolo `file://`.

> **Clave:** ESM necesita un servidor local. GitHub Pages también funciona.

---

## CHECKPOINT HU1: Modal de confirmación

### Verificar:
Pulsa eliminar → aparece tu modal propio

**¿Qué debe verse?**
- "Cancelar" deja la plantilla intacta
- "Eliminar" la borra y, al recargar, no vuelve

**Problemas comunes:**
- El modal no aparece → revisa `classList.remove("hidden")`
- Borra sin preguntar → faltó envolver la acción en `pedirConfirmacion`

---

## CHECKPOINT HU2: Estado vacío amigable

### Verificar:
App sin plantillas y filtro sin resultados

**¿Qué debe verse?**
- Sin datos: "Aún no tienes plantillas. ¡Crea la primera!"
- Filtro sin match: "No se encontraron plantillas"

**Problemas comunes:**
- Mismo mensaje en ambos casos → distingue con `state.plantillas.length === 0`

---

## CHECKPOINT HU3: Modularizar con ESM

### Verificar:
Tras separar en `state` / `storage` / `ui` / `app`, la app hace **todo lo de antes**

**¿Qué debe funcionar?**
- Crear, editar, eliminar, filtrar, persistir

**Problemas comunes:**
- "Failed to load module" → usa servidor local, no `file://`
- 404 en import → ruta con `./` y extensión `.js`

---

## CHECKPOINT HU4: Ordenar la colección

### Verificar (~110 min):
Un selector reordena la lista por fecha al instante

**¿Qué debe verse?**
- "Más antiguas" → sube la primera plantilla que creaste
- "Más recientes" → aparece primero la última
- El orden se mantiene al filtrar

**Problemas comunes:**
- No reordena → falta llamar `render()` en el `change`
- Se desordena el estado → `.sort()` muta; copia con `[...]` antes

---

## REFLEXIÓN: Globales vs Módulos

| Aspecto | Antes (globales) | Con ESM |
|---------|------------------|---------|
| Comunicación | Variables globales | `export` / `import` |
| Orden de `<script>` | Importa mucho | Ya no importa |
| Ámbito | Compartido (choques) | Propio por archivo |

> **Regla:** un archivo, una responsabilidad. Y `.sort()` **muta** el array: por eso `ordenar(plantillas)` copia con `[...]` antes de ordenar.

---

## 🎉 Cierre del Módulo 4

### Hoy lograste:
- Modularizar tu app con ESM
- Confirmaciones, estado vacío y orden por fecha
- Sincronización completa estado ↔ storage ↔ UI

### En este módulo:
- De eventos y datos derivados → a persistencia → a una app organizada y entregable

> "Hace 4 clases tu app no guardaba nada. Hoy es un proyecto completo."

---

## Preguntas de Cierre

1. ¿Por qué separar `state`, `storage` y `ui` en archivos distintos?

2. ¿Cuándo SÍ y cuándo NO pedir una confirmación al usuario?

3. ¿Qué decisión técnica de tu proyecto defenderías en la demo?

---

## Entrega

- Repo `whatsapp-templates` con **2 HUs propias** fusionadas en `main`
- **README** con app, arquitectura ESM y persistencia
- **URL de GitHub Pages** desplegada
- **Demo en vivo (máx. 10 min)** + 2 decisiones técnicas
- Screenshot del flujo completo funcionando

### ¡Felicidades por cerrar el Módulo 4! 🙌
