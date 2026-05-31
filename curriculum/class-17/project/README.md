# Proyecto del Módulo 5

**Agenda de Gastos Compartidos**

Este es el **Proyecto Integrador Final** del curso Code 201. Consolida todo lo aprendido en los Módulos 1 al 4 en una sola aplicación web: layout responsivo con HTML + CSS, lógica algorítmica en JavaScript, manipulación del DOM con eventos y manejo de excepciones, y estado complejo persistido con JSON + LocalStorage.

A diferencia de los proyectos de los módulos anteriores, este proyecto es **común a toda la cohorte** y se desarrolla en **4 sesiones guiadas por el instructor** usando metodología ágil por sprints.

> 🔥 Cada estudiante presentará su proyecto en un **Demo Day** con **máximo 10 minutos** por presentación, donde debe demostrar funcionalidades clave y argumentar técnicamente sus decisiones de implementación.

---

## 🎯 Objetivo del Proyecto

Construir una aplicación web que permita a grupos de amigos, roommates o equipos pequeños **registrar gastos compartidos** y **calcular automáticamente quién le debe a quién**. La app calcula el balance neto de cada persona y sugiere las transferencias mínimas necesarias para saldar el grupo.

Inspiración: Splitwise simplificado, sin backend, con persistencia local.

---

## 👤 Usuario Objetivo

Grupos de 2 a 10 personas que comparten gastos recurrentes:

- Viajes entre amigos (Máncora, Cusco, Tarapoto).
- Roommates que comparten arriendo, servicios y compras del hogar.
- Parejas que llevan cuentas juntas.
- Equipos pequeños en salidas y eventos.

---

## 🧩 Secuencia de Clases

| Clase | Fase | Contribución al Proyecto |
|-------|------|--------------------------|
| **Clase 17: Ideation + Research + Stories** | Planificación | Analizar el proyecto, descomponer en historias y planificar sprints. |
| **Clase 18: Sprint 1** | Construcción base | HTML semántico, diseño responsivo, estado inicial, agregar personas y gastos. |
| **Clase 19: User Validation + Sprint 2** | Validación + cierre | Validación con compañeros, cálculo de balances, transferencias sugeridas, persistencia. |
| **Clase 20: Demo Day** | Presentación | Demo en vivo, evaluación con rúbrica y cierre del curso. |

---

## 🚀 Funcionalidad Esperada (MVP)

La aplicación debe permitir como mínimo:

1. **Crear un grupo** con un nombre descriptivo (ej: "Viaje a Máncora", "Depto Miraflores").
2. **Agregar y eliminar personas** del grupo.
3. **Registrar un gasto** indicando: quién pagó, monto, descripción y entre quiénes se divide.
4. **Ver la lista de gastos** del grupo ordenada por fecha de registro.
5. **Calcular el balance neto** de cada persona (positivo = le deben, negativo = debe).
6. **Sugerir transferencias mínimas** para saldar todas las deudas del grupo.
7. **Eliminar un gasto** con recálculo automático del balance.
8. **Validar entradas**: montos positivos, campos obligatorios, al menos un pagador y un receptor.
9. **Persistir el grupo completo** (integrantes + gastos) en LocalStorage.
10. **Restaurar automáticamente** el grupo al recargar la página.

---

## 📖 Historias de Usuario (pre-redactadas)

Las siguientes historias son el **core del proyecto** y se distribuyen entre los dos sprints. Cada estudiante las implementa sobre su propio repositorio.

### Sprint 1 — Construcción base

#### HU1: Crear un grupo

**Como** usuario, **quiero** crear un grupo con un nombre, **para** organizar gastos de una situación específica (viaje, depto, salida).

**Criterios de Aceptación:**
- Al hacer clic en "Nuevo grupo" se pide un nombre.
- El nombre del grupo se muestra en el encabezado de la app.
- El grupo queda guardado en LocalStorage al crearse.
- Si ya hay un grupo activo, se pregunta antes de reemplazarlo.

#### HU2: Agregar y eliminar personas

**Como** usuario, **quiero** agregar y eliminar personas del grupo, **para** reflejar quiénes realmente participan de los gastos.

**Criterios de Aceptación:**
- Se puede agregar una persona escribiendo su nombre y presionando Enter o un botón.
- Los nombres se muestran en una lista visible.
- Cada persona se puede eliminar con un botón × al costado de su nombre.
- No se permite agregar dos personas con el mismo nombre.
- El grupo debe tener al menos 2 personas para poder registrar gastos.

#### HU3: Registrar un gasto simple

**Como** usuario, **quiero** registrar un gasto indicando quién pagó, cuánto y qué fue, **para** llevar cuenta de lo que se gasta.

**Criterios de Aceptación:**
- Formulario con: descripción (texto), monto (número > 0), quién pagó (select de personas del grupo), entre quiénes se divide (checkboxes).
- Al enviar, el gasto aparece en la lista de gastos con fecha y hora.
- Si el monto es 0 o negativo, se muestra error y no se registra.
- Si no hay al menos una persona marcada en "entre quiénes se divide", se muestra error.
- El gasto queda guardado en LocalStorage.

#### HU4: Ver la lista de gastos

**Como** usuario, **quiero** ver todos los gastos registrados del grupo, **para** saber qué se ha gastado.

**Criterios de Aceptación:**
- Los gastos se muestran en una lista ordenada por fecha (más reciente arriba).
- Cada ítem muestra: descripción, monto, quién pagó, entre quiénes se divide, fecha.
- Si no hay gastos, se muestra un estado vacío amigable ("Aún no hay gastos registrados").

### Sprint 2 — Cálculo, validación y cierre

#### HU5: Calcular el balance neto

**Como** usuario, **quiero** ver cuánto debe o le deben a cada persona, **para** entender la situación económica del grupo.

**Criterios de Aceptación:**
- Se muestra una tabla o panel con el nombre de cada persona y su balance neto.
- Balance positivo (le deben): se muestra en verde con signo `+`.
- Balance negativo (debe): se muestra en rojo con signo `−`.
- Balance cero: se muestra en color neutro.
- El balance se recalcula automáticamente al agregar o eliminar gastos.

#### HU6: Ver transferencias sugeridas

**Como** usuario, **quiero** ver qué transferencias debe hacer cada persona para saldar el grupo, **para** cerrar cuentas con el menor número de movimientos.

**Criterios de Aceptación:**
- Se muestra una lista de transferencias con el formato "X debe transferir a Y: S/ monto".
- El algoritmo minimiza el número total de transferencias.
- Si el grupo ya está saldado (todos con balance 0), se muestra "¡Grupo saldado! 🎉".
- La sección se actualiza automáticamente al modificar gastos.

#### HU7: Eliminar un gasto

**Como** usuario, **quiero** eliminar un gasto mal registrado, **para** corregir errores sin empezar de cero.

**Criterios de Aceptación:**
- Cada gasto tiene un botón "eliminar" con confirmación previa.
- Al confirmar, el gasto desaparece de la lista y se elimina de LocalStorage.
- El balance neto y las transferencias sugeridas se recalculan al instante.

#### HU8: Persistencia completa y recuperación ante errores

**Como** usuario, **quiero** que el grupo y sus gastos sobrevivan al recargar la página, **para** no perder información.

**Criterios de Aceptación:**
- Al recargar, el grupo, sus personas y sus gastos se muestran como estaban.
- Si LocalStorage tiene datos corruptos, la app no se rompe: muestra un mensaje y ofrece "Empezar de cero".
- El acceso a LocalStorage está envuelto en try/catch para capturar errores.

---

## 🏆 Retos Adicionales (opcional, para puntaje extra)

Cada estudiante puede implementar **historias propias adicionales** para destacar en la presentación:

- **HU extra: División desigual** — permitir que una persona pague más que las demás (porcentajes personalizados).
- **HU extra: Múltiples grupos** — gestionar más de un grupo simultáneamente y cambiar entre ellos.
- **HU extra: Exportar a texto** — generar un resumen en texto plano para copiar y compartir por WhatsApp.
- **HU extra: Modo oscuro** — toggle claro/oscuro persistente.
- **HU extra: Filtrar gastos** — por persona que pagó o por rango de montos.

---

## ⚙️ Stack Técnico

- **HTML5** semántico (sin frameworks de UI).
- **CSS3** con Flexbox y/o Grid. Se permite variables CSS. No se permite Bootstrap/Tailwind obligatoriamente (opcional a criterio del estudiante).
- **JavaScript vanilla** (sin React, Vue, etc.). Se permite usar clases ES6 y arrow functions del Módulo 4.
- **LocalStorage** para persistencia.
- **Git + GitHub** para versionado.
- **GitHub Pages** (o similar) para el deploy del MVP.

> **No se permite:** librerías de manejo de estado (Redux, etc.), frameworks JS, backend.

---

## 📁 Estructura de Archivos Sugerida

```
gastos-compartidos/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js             # Punto de entrada, inicialización
│   ├── state.js           # Estado central del grupo (personas + gastos)
│   ├── storage.js         # Funciones de LocalStorage (save/load/clear)
│   ├── balance.js         # Cálculo de balances y transferencias
│   └── ui.js              # Renderizado y eventos del DOM
├── README.md              # Documentación del proyecto
└── .gitignore
```

---

## ☑️ Rúbrica de Evaluación

> 📋 La rúbrica oficial (5 criterios × 20 pts = 100 pts, aprobación mínima 70/100) vive en [../lab/rubric.md](../lab/rubric.md). Evalúa: funcionalidades del MVP (HU1-HU8), calidad técnica, historias adicionales, presentación en vivo (Demo Day C20), y argumentación técnica + Q&A.

---

## 📣 Presentación — Demo Day (Clase 20)

Cada estudiante tendrá **máximo 10 minutos en total**, distribuidos en:

1. **Demo en vivo (5 min):** crear un grupo, agregar personas, registrar gastos, mostrar balance y transferencias sugeridas, eliminar un gasto.
2. **Argumentación técnica (3 min):** explicar 2 decisiones técnicas importantes (ej: cómo modeló el estado, cómo implementó el algoritmo de transferencias, cómo manejó los errores de LocalStorage).
3. **Q&A con el instructor (2 min):** responder preguntas sobre fragmentos de código específicos.

---

## 📝 Instrucciones de Envío

Al cierre del Demo Day, cada estudiante debe entregar:

- **Repositorio de GitHub** con commits frecuentes a lo largo de los sprints.
- **URL pública del deploy** (GitHub Pages u otro).
- **README.md del proyecto** que documente:
    - Historias de usuario implementadas (base + adicionales).
    - Decisiones técnicas clave explicadas brevemente.
    - Enlace al deploy.
    - Instrucciones para correr localmente.

---

## 🛠️ Material de Apoyo

### Mockup conceptual (referencial)

```
┌────────────────────────────────────────────────┐
│  💸 Agenda de Gastos — "Viaje a Máncora"       │
├────────────────────────────────────────────────┤
│                                                │
│  👥 Integrantes:                               │
│  [Ana] [Beto] [Cami] [Diana] [+ agregar]       │
│                                                │
├────────────────────────────────────────────────┤
│  ➕ Nuevo gasto                                 │
│  [Descripción______] [Monto___] [Pagó ▼]       │
│  ☐ Ana ☐ Beto ☐ Cami ☐ Diana      [Registrar]  │
├────────────────────────────────────────────────┤
│  📋 Gastos                                      │
│  • Cena el sábado — S/ 120 — Pagó Ana          │
│  • Gasolina — S/ 80 — Pagó Beto                │
│  ...                                            │
├────────────────────────────────────────────────┤
│  📊 Balances                                    │
│  Ana   +45.00                                  │
│  Beto  +20.00                                  │
│  Cami  −30.00                                  │
│  Diana −35.00                                  │
├────────────────────────────────────────────────┤
│  🔄 Transferencias sugeridas                    │
│  Cami → Ana: S/ 30.00                          │
│  Diana → Ana: S/ 15.00                         │
│  Diana → Beto: S/ 20.00                        │
└────────────────────────────────────────────────┘
```

### Pistas técnicas clave

- **Modelado del estado:** usar un objeto con estructura `{ grupo: { nombre, personas: [], gastos: [] } }`. Cada gasto: `{ id, descripcion, monto, pagadoPor, divididoEntre: [], fecha }`.
- **Algoritmo de balances:** por cada persona, sumar lo que pagó y restar su parte proporcional en los gastos donde aparece como divisor.
- **Algoritmo de transferencias mínimas:** separar deudores y acreedores, emparejar el mayor deudor con el mayor acreedor, transferir el mínimo de ambos montos, repetir hasta saldar.
- **Persistencia:** envolver `localStorage.setItem` y `localStorage.getItem` en `try/catch`. Si el parse falla, retornar estado vacío y mostrar mensaje al usuario.

---

> ### 💡 Tips para el Desarrollo
>
> - **Empieza por el estado:** define cómo vas a modelar un gasto y una persona antes de tocar HTML.
> - **Usa commits pequeños:** uno por historia de usuario o por criterio de aceptación cumplido.
> - **Haz commits aunque no funcione todo:** los avances parciales son valiosos.
> - **Prueba con datos reales:** simula un viaje con amigos para detectar casos borde.
> - **No dejes el algoritmo de transferencias para el último día:** es el reto técnico más alto del proyecto.

---

> ### ⚠️ Limitaciones conocidas (parte del diseño pedagógico)
>
> - Sin backend: los datos viven solo en el navegador del usuario. No se sincroniza entre dispositivos.
> - LocalStorage tiene un límite de ~5MB — suficiente para cientos de gastos pero no para millones.
> - Sin autenticación: cualquiera con acceso al navegador ve el grupo. No es apto para datos sensibles reales.
>
> Estas limitaciones se discuten explícitamente en Clase 17 como parte del alcance del MVP.
