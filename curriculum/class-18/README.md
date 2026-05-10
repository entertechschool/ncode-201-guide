> **Módulo 5:** Clase 2 de 4

# Clase 18: Sprint 1 — Construcción base del proyecto

## Resumen

Después de planificar el proyecto, hoy empiezas a construir. En esta clase levantas la **primera versión funcional** de tu Agenda de Gastos Compartidos: el HTML semántico que estructura la interfaz, el CSS responsivo que la hace usable en cualquier pantalla y el JavaScript que permite **crear un grupo, agregar personas, registrar gastos y verlos listados**. Al cierre de la sesión, tu app no calcula balances todavía, pero ya hace algo real: guarda información y la muestra.

Este es el sprint donde conectas todo lo aprendido en los Módulos 1, 2 y 4: layout con Flexbox o Grid (C02–C03), **formularios accesibles de C01 con validación nativa de C04**, **CSS Variables (`:root`) introducidas en C04**, clases ES6 para modelar un gasto, eventos del DOM para capturar formularios y LocalStorage para que nada se pierda al recargar. No vas a aprender nada conceptualmente nuevo hoy. Vas a **aplicar en conjunto** lo que hasta ahora viste por separado.

El objetivo no es terminar el proyecto, es tener las **HU1 a HU4 funcionando** y un commit pusheado al cierre de la clase. El cálculo de balances y las transferencias llegan en la Clase 19.

---

## ¿Por qué te sirve?

- **Integrar tecnologías es el día a día de un dev.** Saber HTML, CSS y JS por separado es una cosa; orquestarlos en una app que guarda estado es otra distinta, y es la habilidad que te contratan.
- **El primer sprint define el ritmo.** Estudios de equipos ágiles muestran que los proyectos que llegan al 50% antes de la mitad del tiempo tienen 3x más probabilidad de terminarse. Arrancar bien hoy te salva la Clase 19.
- **Tu repo crece y se vuelve portafolio.** Cada commit con mensaje claro es una línea en tu historia profesional. En entrevistas, los reclutadores miran tu gráfico de actividad antes que tu CV.

---

## 🎯 ¿Qué haremos en clase?

1. **Revisaremos tu plan** - Recordarás las HU de Sprint 1 y qué significa "terminar" cada una.
2. **Construirás el esqueleto HTML** - Estructurarás las tres zonas: integrantes, formulario de gasto y lista de gastos.
3. **Aplicarás estilos con CSS** - Darás diseño responsivo usando Flexbox o Grid.
4. **Implementarás la lógica base** - Codearás HU1 (crear grupo), HU2 (agregar personas), HU3 (registrar gasto) y HU4 (listar gastos) con LocalStorage.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Estructurar** una interfaz web con HTML semántico para una aplicación de gestión.
2. **Aplicar** CSS responsivo usando Flexbox/Grid sobre un layout real con múltiples zonas.
3. **Implementar** funcionalidades CRUD básicas (crear, listar) conectando formularios con estado centralizado.
4. **Persistir** el estado en LocalStorage con serialización JSON y recuperación al recargar.

---

## ✅ Preparación para la Clase

### De clases anteriores

- Clase 17 terminada: repositorio creado, estructura de carpetas (`css/`, `js/`), `index.html` con placeholder y scripts en orden correcto.
- `SPRINTS.md` con tu distribución de las 8 HU entre Sprint 1 y Sprint 2.
- Fresco de los Módulos 1-4: Flexbox/Grid, clases ES6, eventos del DOM y LocalStorage.

### Reflexión previa

Antes de llegar a clase, reflexiona sobre:

- Si tuvieras que elegir entre "se ve bonito pero no guarda nada" o "no se ve bien pero guarda todo correctamente", ¿cuál priorizarías hoy y por qué?
- ¿Qué pasa en tu app si el usuario cierra la pestaña mientras está registrando un gasto? ¿Se pierde?

### Herramientas

- [ ] **VS Code** con Live Server corriendo tu proyecto.
- [ ] **Navegador** con DevTools abierto (pestañas Console y Application).
- [ ] **Terminal** lista para `git add / commit / push` frecuentes.

### Lectura sugerida

- [Formularios accesibles con labels](https://developer.mozilla.org/es/docs/Learn/Forms/Basic_native_form_controls){:target="_blank"} - Cómo conectar `<label>` con `<input>` correctamente.
- [LocalStorage API](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage){:target="_blank"} - Referencia rápida de `setItem`, `getItem`, `removeItem`.
- [CSS Tricks — A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/){:target="_blank"} - Referencia visual rápida.

---

## Glosario

| Término | Definición |
|---------|------------|
| **HTML semántico** | Uso de etiquetas que describen el propósito del contenido (`<header>`, `<section>`, `<form>`, `<ul>`) en lugar de solo `<div>`. |
| **Estado centralizado** | Un único objeto JavaScript que contiene toda la información viva de la app (integrantes, gastos). |
| **CRUD** | Create, Read, Update, Delete. Las 4 operaciones básicas sobre datos. Hoy trabajas Create y Read. |
| **Serialización** | Convertir un objeto JS en un string (`JSON.stringify`) para poder guardarlo en LocalStorage. |
| **Commit atómico** | Un commit por cambio conceptual claro. No mezclar "agregué personas + cambié colores" en el mismo commit. |

---

## Recursos Adicionales

- [Proyecto Integrador del Módulo 5](../class-17/project/){:target="_blank"} - Enunciado, historias de usuario y criterios de aceptación.
- [Mensajes de commit convencionales](https://www.conventionalcommits.org/es/v1.0.0/){:target="_blank"} - Formato `feat: ...`, `fix: ...`, `docs: ...`.
- [Responsive design patterns](https://web.dev/patterns/layout/){:target="_blank"} - Patrones comunes para layouts responsivos con Grid y Flexbox.
