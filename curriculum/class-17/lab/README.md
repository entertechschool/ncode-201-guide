# Lab 17: Entendiendo y Planificando tu Proyecto Final



## 🎯 Objetivos

1. Interpretar el enunciado del proyecto Agenda de Gastos Compartidos y sus 8 historias de usuario.
2. Planificar la distribución de trabajo entre Sprint 1 y Sprint 2 con criterios propios.
3. Configurar el repositorio inicial con estructura de archivos, README y primer commit funcional.

---

## 🔑 Conceptos Clave

- **Historia de usuario** - Funcionalidad descrita desde la perspectiva de quien la usa.
- **Criterio de aceptación** - Condición verificable que define "terminado".
- **Sprint** - Ventana de trabajo con un objetivo concreto (Sprint 1: base funcional, Sprint 2: cálculo y cierre).
- **Alcance** - Lo que el proyecto incluye y lo que deja fuera intencionalmente.

---

## ⚙️ Setup Inicial

Esta clase abre el Módulo 5. Verifica que tengas todo listo antes de empezar:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Cuenta de GitHub activa | Puedes ingresar a `github.com` con tu usuario |
| ☐ | Git configurado localmente | `git config user.name` retorna tu nombre |
| ☐ | VS Code instalado | Abre desde la terminal con `code .` |
| ☐ | Leíste el [enunciado del proyecto](../project/) | Sabes qué es "Agenda de Gastos Compartidos" en una línea |

> ⚠️ Si no terminaste la lectura del enunciado, tómate 10 minutos ahora. El resto del lab depende de entenderlo.

---

## Parte 1: Lectura activa del proyecto (30 min)

### 1.1 Identifica las entidades del proyecto

Lee el [enunciado del proyecto](../project/) con calma. En una hoja o archivo de texto, responde:

```markdown
<!-- Tu análisis inicial -->
## Entidades principales
1. ¿Cuáles son los "sustantivos importantes" del proyecto?
   (pista: hay al menos 3 — completa con los que identifiques)
   - _____________
   - _____________
   - _____________

## Relaciones
2. ¿Qué entidad "contiene" a las otras?
3. ¿Qué dato une a un gasto con las personas involucradas?
```

> 💡 **Tip:** Si dudas, relee las 8 historias de usuario. Los sustantivos que se repiten son pistas fuertes.

### 1.2 Define el alcance de tu MVP

Crea un archivo `ALCANCE.md` (temporal, en tu carpeta local) y completa:

```markdown
## Dentro del alcance (lo que SÍ voy a construir)
- [ ] Crear grupos
- [ ] ...completa según las HU1-HU8...

## Fuera del alcance (lo que NO voy a construir, aunque sería interesante)
- [ ] Multi-usuario real (backend)
- [ ] ...completa con 2-3 más...
```

✅ **Checkpoint:** Tienes identificadas al menos 3 entidades del proyecto y una lista de "dentro" y "fuera" del alcance con al menos 4 ítems por lado.

---

## Parte 2: Planificación por sprints (30 min)

### 2.1 Revisa la distribución propuesta

El [enunciado del proyecto](../project/) sugiere una distribución: **HU1-HU4 en Sprint 1** (construcción base) y **HU5-HU8 en Sprint 2** (cálculo y cierre). Tu tarea aquí es **confirmar que te hace sentido** o proponer ajustes.

Crea un archivo `SPRINTS.md` en tu carpeta local:

```markdown
## Sprint 1 (Clase 18) — Meta: [escribe en 1 línea qué se ve funcionando al final]
- HU__: ______
- HU__: ______
- HU__: ______
- HU__: ______

## Sprint 2 (Clase 19) — Meta: [escribe en 1 línea qué se ve funcionando al final]
- HU__: ______
- HU__: ______
- HU__: ______
- HU__: ______

## Dependencias detectadas
- Para implementar HU__ necesito tener antes HU__ porque _______.
```

> 💡 **Tip:** No hay una sola respuesta correcta. Si detectas una dependencia que obliga a cambiar el orden, documéntala y propón el cambio.

### 2.2 Identifica tu reto técnico principal

De las 8 historias, responde:

```markdown
## Mi reto técnico principal
La historia que más me intimida es la HU__ porque _______.
Primera idea de cómo atacarla: _______.
```

✅ **Checkpoint:** Tienes `SPRINTS.md` completo con 8 historias distribuidas, al menos 1 dependencia documentada y tu reto técnico identificado.

---

## Parte 3: Configurar tu repositorio (60 min)

### 3.1 Crea el repositorio en GitHub

1. Entra a GitHub y crea un repositorio nuevo:
   - Nombre sugerido: `gastos-compartidos` (o uno propio que tenga sentido).
   - Visibilidad: **Público** (irá a tu portafolio).
   - Inicializa con `README.md` y `.gitignore` (template: Node).

2. Clónalo en tu máquina:

```bash
git clone https://github.com/TU_USUARIO/gastos-compartidos.git
cd gastos-compartidos
```

### 3.2 Crea la estructura de archivos

Dentro de la carpeta, crea la estructura sugerida por el enunciado:

```
gastos-compartidos/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── state.js
│   ├── storage.js
│   ├── balance.js
│   └── ui.js
├── README.md
└── .gitignore
```

> 💡 **Tip:** Los archivos `.js` pueden estar vacíos por ahora. Solo la estructura.

### 3.3 Escribe el `index.html` base

Completa el esqueleto mínimo para que el navegador cargue todo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><!-- ¿Cómo se llamará la app en la pestaña del navegador? --></title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <h1>💸 Agenda de Gastos Compartidos</h1>
  <!-- Aquí irán las secciones principales; por ahora solo un placeholder -->
  <p>En construcción…</p>

  <!-- Scripts: orden importa. state y storage antes que ui y app -->
  <script src="js/state.js"></script>
  <script src="js/storage.js"></script>
  <script src="js/balance.js"></script>
  <script src="js/ui.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
```

### 3.4 Actualiza el `README.md` del repo

Abre `README.md` y escribe tu versión inicial. Incluye al menos:

```markdown
# Agenda de Gastos Compartidos

[Una línea describiendo qué hace la app]

## Stack
- HTML5 + CSS3 + JavaScript vanilla
- LocalStorage para persistencia

## Historias de usuario a implementar
- HU1: ...
- HU2: ...
(...las 8)

## Cómo correr el proyecto localmente
1. Clonar el repo
2. Abrir `index.html` con Live Server
```

### 3.5 Primer commit y push

```bash
git add .
git commit -m "chore: setup inicial del proyecto"
git push origin main
```

✅ **Checkpoint:** Al abrir tu repo en GitHub ves la estructura de carpetas, el `README.md` con las 8 HU listadas, y al abrir `index.html` con Live Server aparece "En construcción…" sin errores en la consola.

---

## 📁 Estructura Final del Proyecto

Al cierre de la clase tu repositorio debe verse así:

```
gastos-compartidos/
├── index.html          # Esqueleto con título y placeholder
├── css/
│   └── styles.css      # Vacío, listo para Sprint 1
├── js/
│   ├── app.js
│   ├── state.js
│   ├── storage.js
│   ├── balance.js
│   └── ui.js           # Todos vacíos, listos para Sprint 1
├── README.md           # Con stack, HU listadas y cómo correr
├── ALCANCE.md          # (opcional, tu análisis)
├── SPRINTS.md          # (opcional, tu planificación)
└── .gitignore
```

---

## Rubrica de Evaluacion

> ⚠️ Esta rúbrica evalúa el **Proyecto Integrador Final M5** (Agenda de Gastos Compartidos), que se entrega y presenta en el **Demo Day (Clase 20)**. Se publica desde C17 para que la conozcas desde el primer día del módulo.

| Criterio | Excelente (20) | Bueno (15) | Satisfactorio (10) | Bajo (5) |
|----------|----------------|------------|---------------------|----------|
| **Funcionalidades del MVP** | Las 8 HU base (HU1-HU8) implementadas y funcionando al 100% | 6-7 HU funcionales, 1-2 con bugs menores | 4-5 HU funcionales, resto incompletas | <4 HU funcionales o flujo principal roto |
| **Calidad Técnica** | Estado centralizado, `localStorage` con `try/catch`, código separado (state, storage, balance, ui, app), algoritmo de transferencias mínimo | Estado correcto, persistencia funcional, código separado pero con lógica filtrada | Funcional pero monolítico o sin manejo de errores | Código sin estructura, estado fragmentado |
| **Historias Adicionales / Retos** | ≥2 HU adicionales del listado o propias aprobadas, completas con criterios cumplidos | 1 HU adicional con criterios al 100% | 1 HU adicional parcial | HU planteada pero no funciona |
| **Presentación en Vivo — Demo Day** | Demo clara en ≤10 min, flujo completo (grupo→personas→gastos→balance→transferencias→eliminar), sin errores en vivo | Demo cubre flujo principal pero omite alguna funcionalidad o tiene tropiezos | Demo entrega lo pedido pero excede tiempo u omite funcionalidades | Demo confusa, app falla en vivo |
| **Argumentación Técnica + Q&A** | Justifica ≥2 decisiones (modelado del estado, algoritmo de transferencias, manejo de errores) y responde correctamente Q&A sobre fragmento solicitado | Justifica 1 decisión claramente, responde Q&A con dificultad | Argumentación superficial sin profundizar | No justifica o no responde Q&A básico |

**Total: 100 puntos** (5 criterios x 20 pts). **Aprobación mínima: 70/100**

| Nota | Rango |
|------|-------|
| A | 90-100 |
| B | 80-89 |
| C | 70-79 |
| F | < 70 |

---

## 📝 Entrega

### Checklist

- [ ] Repositorio público en GitHub con el nombre del proyecto.
- [ ] Estructura de carpetas creada (css/, js/).
- [ ] `index.html` carga sin errores en el navegador.
- [ ] `README.md` del repo con stack, 8 HU y cómo correr.
- [ ] Al menos un commit con mensaje claro.
- [ ] `SPRINTS.md` con tu plan de distribución (aunque sea local).

### Qué entregar

- **Link a tu repositorio de GitHub** por el canal habitual (Blackboard / formulario).
- **Screenshot** de `index.html` abierto en el navegador mostrando "En construcción…".

---

> ### 💡 Consejos
>
> - No intentes codear las historias hoy. Hoy es planificar. Si sales con la cabeza clara sobre qué construir la próxima clase, ganaste.
> - Si una historia no te queda clara, anótala y pregúntale al instructor. Las dudas a tiempo ahorran horas de refactor después.
> - Tu `README.md` es la cara de tu proyecto en GitHub. Escríbelo pensando en que un reclutador pueda leerlo.
