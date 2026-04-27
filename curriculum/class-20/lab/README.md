# Lab 20: Demo Day — Presentación y Evaluación

## 🎯 Objetivos

1. Presentar tu Agenda de Gastos Compartidos en 10 minutos con demo en vivo.
2. Argumentar al menos 2 decisiones técnicas con lenguaje preciso.
3. Responder preguntas del instructor y compañeros sin perder el hilo.

---

## 🔑 Formato de tu presentación (10 min)

| Bloque | Tiempo | Qué hacer |
|--------|--------|-----------|
| **1. Demo en vivo** | 5 min | Crear grupo → agregar 3-4 personas → registrar 2-3 gastos → mostrar balances → mostrar transferencias → eliminar un gasto |
| **2. Argumentación técnica** | 3 min | Explicar 2 decisiones clave (modelado, algoritmo, manejo de errores, UX) |
| **3. Q&A** | 2 min | Responder 1-2 preguntas del instructor sobre tu código |

---

## ⚙️ Checklist Pre-Presentación (hacer HOY, antes de que empiece la clase)

| ✓ | Item | Verificación |
|---|------|--------------|
| ☐ | Deploy público responde | Abre la URL desde otro navegador/dispositivo |
| ☐ | Crear grupo funciona en el deploy | Prueba el flujo completo |
| ☐ | LocalStorage funciona en el deploy | Recarga la página y los datos siguen |
| ☐ | README del repo pulido | Descripción, stack, HU, decisiones, cómo correr |
| ☐ | 3 screenshots de respaldo | Principal, balances, transferencias |
| ☐ | Guion mental ensayado | Hiciste el demo al menos 1 vez solo |

> ⚠️ Si tu deploy falla 30 minutos antes de empezar, avisa al instructor. Tienes plan B (screenshots + explicación oral).

---

## 🎤 Tu Argumentación Técnica (3 min)

Elige **2 decisiones** para explicar. Ejemplos de buenas decisiones para argumentar:

- **Modelado del estado:** por qué elegiste un objeto `{ grupo, personas, gastos }` y no otros.
- **Algoritmo de transferencias:** por qué greedy y no fuerza bruta.
- **Manejo de errores:** por qué validaste en HTML, en JS y en LocalStorage (las 3 capas).
- **Render declarativo:** por qué una función `renderX()` que repinta todo en lugar de mutar el DOM pieza a pieza.
- **Persistencia:** por qué LocalStorage y qué harías diferente con backend.

**Fórmula sugerida:**
> "Decidí usar [X] porque [razón técnica]. La alternativa era [Y], pero [desventaja]. La consecuencia fue [resultado]."

---

## ❓ Preguntas típicas del Q&A

Prepárate para responder cualquiera de estas (el instructor elegirá 1-2):

1. Si el grupo tuviera 1000 personas, ¿tu algoritmo escala?
2. ¿Qué pasa si dos usuarios editan el mismo grupo en pestañas distintas?
3. ¿Cómo harías para que funcione offline completamente?
4. Si tuvieras que migrar a backend, ¿por dónde empezarías?
5. ¿Qué harías diferente si volvieras a empezar el proyecto?

> 💡 **Tip:** Si no sabes, es válido decir "no lo resolví en este MVP, pero lo atacaría con X". Honestidad > improvisar.

---

## 📝 Entrega Final

- [ ] Link al repositorio público en GitHub (estará público después del curso también).
- [ ] Link al deploy funcional.
- [ ] README con:
    - Descripción de la app
    - Stack técnico
    - Listado de HU implementadas (base + adicionales)
    - 2 decisiones técnicas explicadas
    - Instrucciones para correr localmente
- [ ] Auto-evaluación con la [rúbrica oficial](../class-17/project/) (informal, solo para ti).

---

## ⏱️ Estructura de la sesión

- **Minutos 0-10:** Verificación general, conexión de proyector, llamado a lista.
- **Minutos 10-170:** Presentaciones (10 min × cantidad de estudiantes + 2 min de transición).
- **Minutos 170-180:** Cierre del curso, feedback individual, ruta hacia Code 301.

> La lista de orden de presentación se sortea al inicio.

---

> ### 💡 Consejos finales
>
> - No leas el código en vivo. La demo es tu app funcionando, no una lectura de archivos.
> - Si algo falla, respira. Pasa al plan B sin disculparte excesivamente.
> - Habla con volumen y pausas. La claridad supera a la velocidad.
> - Termina en los 10 minutos. Exceder tiempo afecta tu evaluación de "Presentación".

**¡Es el último lab del curso. Disfrútalo. Ya lo lograste.**
