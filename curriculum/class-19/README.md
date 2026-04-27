> **Módulo 5:** Clase 3 de 4

# Clase 19: User Validation + Sprint 2

## Resumen

Tu app ya hace algo real: crea grupos, agrega personas, registra gastos y los lista persistentes. Hoy das los dos pasos que separan a un proyecto académico de un producto: **validar con usuarios reales** y **completar la lógica no trivial**. En la primera mitad de la clase un compañero probará tu app como si la usara por primera vez, y tú probarás la suya. El feedback que reciban será incómodo y valiosísimo: descubrirán bugs que no habían visto, flujos confusos que creían obvios y fricciones que solo aparecen con ojos ajenos.

En la segunda mitad, entras al reto técnico más exigente del curso: **calcular balances netos** (HU5), **sugerir transferencias mínimas** (HU6), **eliminar gastos con recálculo automático** (HU7) y **manejar errores de persistencia** (HU8). El algoritmo de transferencias mínimas es un problema que aparece en entrevistas técnicas reales — hoy lo implementas por tu cuenta.

Al cierre de la clase, tu app está lista para Demo Day: funciona, persiste, calcula correctamente y soporta errores sin romperse.

---

## ¿Por qué te sirve?

- **El feedback de usuarios es el único filtro real.** Google Ventures popularizó el formato "5 Second Test": lo que el usuario no entiende en 5 segundos se pierde. Hoy lo experimentas en carne propia.
- **El algoritmo de minimización de transferencias aparece en entrevistas de Google, Meta y Uber.** Es una variante del problema de "flujo mínimo en grafos". Implementarlo en 90 minutos te prepara para esas conversaciones.
- **Manejar errores distingue código de juguete de código profesional.** Un `try/catch` bien puesto y un mensaje claro al usuario cuando algo falla es la diferencia entre app que crashea y app que resiste.

---

## 🎯 ¿Qué haremos en clase?

1. **Probarás la app de un compañero** - Seguirás un guion de validación y registrarás observaciones.
2. **Recibirás feedback sobre tu app** - Otro compañero probará la tuya y anotará problemas.
3. **Implementarás HU5 y HU6** - Calcularás balances netos y transferencias sugeridas.
4. **Cerrarás con HU7 y HU8** - Podrás eliminar gastos con recálculo y manejarás errores de LocalStorage.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Evaluar** una interfaz con un guion de validación, distinguiendo problemas de producto de problemas de código.
2. **Incorporar** feedback estructurado en tu propio proyecto sin perder el alcance del MVP.
3. **Implementar** un algoritmo de cálculo sobre un array de objetos, transformando datos mediante iteración.
4. **Manejar** errores de LocalStorage con `try/catch` y mensajes útiles al usuario.

---

## ✅ Preparación para la Clase

### De clases anteriores

- Sprint 1 cerrado: HU1-HU4 funcionando en tu app, persistencia operativa, al menos 3 commits en GitHub.
- App pusheada a `main` antes de llegar — tu compañero necesita acceder a una versión estable.
- Papel y lápiz o una app de notas lista para anotar feedback.

### Reflexión previa

Antes de llegar a clase, reflexiona sobre:

- Si Ana pagó S/ 100 en una cena para 4 personas (incluyéndose), ¿cuánto le deben los demás? ¿Y cuánto debería quedar en su balance neto?
- ¿Cuál es el mínimo de transferencias necesarias entre 4 personas para saldar cualquier situación?
- Si tu app recibe feedback de que "la lista de gastos se ve mal en mobile", ¿eso entra en Sprint 2 o queda como reto adicional?

### Herramientas

- [ ] **App de Sprint 1 desplegada o corriendo** localmente, accesible por un compañero.
- [ ] **VS Code + Live Server** lista para el Sprint 2.
- [ ] **DevTools** para revisar consola al probar la app del compañero.

### Lectura sugerida

- [Usability heuristics de Nielsen](https://www.nngroup.com/articles/ten-usability-heuristics/){:target="_blank"} - 10 principios clásicos para evaluar interfaces.
- [Proyecto Integrador — HU5 a HU8](../class-17/project/){:target="_blank"} - Criterios de aceptación exactos.
- [Greedy algorithms explicados simple](https://www.geeksforgeeks.org/greedy-algorithms/){:target="_blank"} - El enfoque detrás del algoritmo de transferencias.

---

## Glosario

| Término | Definición |
|---------|------------|
| **Validación cruzada** | Probar el trabajo de otro y recibir el propio con un guion común de verificación. |
| **Balance neto** | Lo que una persona pagó menos su parte proporcional de los gastos donde aparece. Positivo = le deben. Negativo = debe. |
| **Transferencia mínima** | Menor cantidad de movimientos necesarios para que todos los balances queden en cero. |
| **Algoritmo greedy** | Estrategia que toma la decisión óptima en cada paso (emparejar mayor deudor con mayor acreedor). No siempre es óptimo globalmente, pero aquí sí. |
| **Mensaje de error útil** | Texto que indica qué pasó, por qué, y qué hacer. No "Error 500". |

---

## Recursos Adicionales

- [Proyecto Integrador del Módulo 5](../class-17/project/){:target="_blank"} - Referencia completa del enunciado.
- [Guion de validación cruzada](./lab/){:target="_blank"} - Lista de pasos para probar la app del compañero.
- [Try/Catch en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch){:target="_blank"} - Referencia rápida para HU8.
