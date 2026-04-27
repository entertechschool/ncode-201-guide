<!-- .slide: data-background="#0A192F" -->
# Clase 18: Sprint 1
## Construcción base de la Agenda de Gastos Compartidos

---

## TRANSICION: Clase 17 → Clase 18

### Clase anterior:
- Entendiste el proyecto y planificaste los sprints.
- Configuraste tu repo con estructura profesional.

### Hoy:
- Empiezas a codear. Sales con HU1-HU4 funcionando.
- Integras HTML + CSS + JS + LocalStorage en una sola app.

> "Si hoy termina con algo que guarda y muestra datos, ganaste el sprint."

---

## QUIZ PRE-LAB

### Pregunta:
Si tu app funciona perfecto en el navegador pero al recargar la página se pierde todo, ¿qué falta?

*Toma 2-3 respuestas antes de continuar*

---

## COMPROBACION

### Pregunta:
Cuando agregas una persona al grupo, ¿en qué orden deben ocurrir las cosas?

A. Render → modificar estado → guardar en LocalStorage
B. Modificar estado → guardar en LocalStorage → render
C. Guardar en LocalStorage → modificar estado → render
D. Los tres pasos son independientes; no importa el orden.

---

## COMPROBACION - Respuesta

**Respuesta correcta:** B

**Análisis de opciones:**
- **A:** El render usaría datos viejos; la UI mostraría el estado anterior.
- **B:** Correcto. Primero cambias la verdad (estado), la persistes, y luego dibujas.
- **C:** LocalStorage guardaría un estado sin el cambio que acabas de hacer.
- **D:** Sí importa. El orden incorrecto mete bugs difíciles de detectar.

> **Clave:** "Estado → Storage → Render. Siempre en ese orden."

---

## CHECKPOINT Parte 1: HTML y CSS base

### Verificar:
Las 4 secciones visibles con diseño responsivo.

**¿Qué deberías ver en pantalla?**
- Zonas claramente separadas: Grupo, Integrantes, Registrar, Gastos.
- En mobile (360px): zonas apiladas verticalmente.
- En desktop (>768px): distribución en 2 columnas o similar.

**Problemas comunes:**
- Solo `<div>` sin `<section>` → recordar semántica.
- Fuente gigante en mobile → falta `<meta viewport>` o `box-sizing`.

---

## CHECKPOINT Parte 2: Estado y storage

### Verificar:
Console → `state` muestra el objeto. Application → LocalStorage tiene la clave.

**¿Qué deberías ver?**
- `state.grupo.personas` es un array.
- Al ejecutar `guardarEstado()`, aparece `gastos-compartidos-v1` en DevTools.
- Al recargar y ejecutar `cargarEstado()`, el estado se reconstruye.

**Problemas comunes:**
- Guardar sin JSON.stringify → LocalStorage solo acepta strings.
- Olvidar try/catch → si el JSON está corrupto, la app crashea al cargar.

---

## CHECKPOINT Parte 3: HU1-HU4 funcionando

### Verificar:
Flujo completo: crear grupo → agregar 3 personas → registrar 2 gastos → ver lista → recargar → todo sigue.

**¿Qué deberías ver?**
- Nombre del grupo en el header.
- Lista de personas con botón × en cada una.
- Formulario valida monto > 0 y descripción no vacía.
- Lista de gastos ordenada del más reciente al más antiguo.
- Al recargar, nada se pierde.

**Problemas comunes:**
- Formulario recarga la página → falta `e.preventDefault()`.
- Gastos se duplican al renderizar → falta limpiar `innerHTML = ''` antes.

---

## REFLEXION: Una fuente de verdad

| Enfoque frágil | Enfoque sólido |
|----------------|----------------|
| Guardar datos en el DOM (atributos, textContent) | Estado en JS + DOM como reflejo |
| Dos funciones que modifican listas distintas | Una función que modifica `state` + render |

> **Regla memorable:** "El DOM es una proyección del estado, no su contenedor."

---

## REFLEXION: Validación en el formulario

### Pregunta de consolidación

Si un usuario malicioso pone `-50` como monto en el input, ¿tu app permite registrar el gasto? ¿Cómo lo validaste: con `required`, con `min=0.01` en HTML, con if en JS, o con las 3 capas?

*(Pista: cinturón + tirantes es buena práctica.)*

---

## TRANSICION: Preview Clase 19

### Hoy lograste:
- App que crea grupos, agrega personas, registra y lista gastos.
- Estado central + LocalStorage funcionando.
- Primer Sprint cerrado.

### Próxima clase:
- **Validación cruzada** con un compañero: pruebas su app y él prueba la tuya.
- **Sprint 2:** el reto grande — calcular balances y sugerir transferencias mínimas.
