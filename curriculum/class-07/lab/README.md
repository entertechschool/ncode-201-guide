# Laboratorio 07: Programación Orientada a Objetos

¡Continuamos con el proyecto **Personal Budget**, esta vez llevando el código hacia un enfoque orientado a objetos! En este laboratorio, aprenderás a **crear objetos** en JavaScript, encapsulando datos y lógica en entidades más organizadas.

> ⏱️ **Nota sobre Checkpoints**: Este laboratorio incluye **dos momentos de validación** (aprox. a los 30 y 60 minutos). Participar activamente te permitirá intercambiar criterios con tus compañeros, reforzando la conexión entre la **discusión teórica** y la **implementación práctica**.

---

## 🎯 Objetivos de Aprendizaje

1. **Implementar Funciones Constructoras en JavaScript**  
   Crear entidades de tu presupuesto (por ejemplo, “Movimiento”, “Usuario” u otros) usando la sintaxis tradicional con `function Nombre(...) { … }` y la palabra clave `new`.  
   
2. **Encapsular Datos y Lógica**  
   Refactorizar tu código “plano” (arrays o variables sueltas) para que la validación y manejo de datos estén dentro de los objetos, promoviendo un diseño más organizado y escalable.  

3. **Integrar la Orientación a Objetos en el Flujo de la Aplicación**  
   Sustituir partes clave del código existente, asegurando que las instancias creadas con funciones constructoras realicen las operaciones de registro, cálculo y visualización de forma coherente.  

4. **Primer Vistazo a los Prototipos y DOM**  
   (Opcional) Crear un método (por ejemplo, `render()`) asignado al prototipo para mostrar la información de cada objeto en la interfaz web, sentando la base para profundizar en prototipos en una clase futura.

## 🔑 Conceptos Clave

- **Objetos**: Estructuras que contienen propiedades y métodos relacionados, unificando datos y comportamientos.
- **Abstracción**: Principio para simplificar la realidad, enfocándose en los atributos y métodos esenciales (por ejemplo, qué datos representa un “Movimiento” y qué hace).
- **Programación Orientada a Objetos**: Paradigma que organiza el código en entidades llamadas objetos, facilitando escalabilidad y mantenibilidad.
- **Funciones Constructoras**: Mecanismo “clásico” de JavaScript para crear objetos y reutilizar propiedades y métodos, previo a la introducción formal de clases en ES6.

## ⚙️ Setup Inicial

1. **Repositorio**  
   - Continúa usando el repositorio existente: `personal-budget`.  

2. **Configuraciones Previas**  
   - Verifica que tu proyecto ya soporta la lógica de gastos/ingresos (de laboratorios anteriores).
   - Decide qué parte del flujo refactorizarás primero con objetos (por ejemplo, el registro de movimientos).

---

## 📋 Historias de Usuario (HU)

### HU1 - Crear Objeto “Movimiento”
> _“Como desarrollador, quiero representar cada movimiento (ingreso o egreso) con un objeto, para encapsular la validación y el almacenamiento de datos.”_

- **Criterios de Aceptación**:
  1. Definir la función constructora `Movimiento(tipo, monto, descripcion)` que asigne valores a `this`.
  2. Validar datos mínimos (tipo válido, monto mayor que 0, descripción no vacía).
  3. Instanciar al menos un objeto usando `new Movimiento(...)`.

> **Checkpoint 1 (~30 min)**: Validar que la función constructora cree objetos correctamente y maneje los datos esperados.


### HU2 - Refactorizar el Registro de Movimientos
> _“Como usuario, quiero seguir registrando mis ingresos y egresos, pero ahora manteniendo cada uno como un objeto independiente, con su propia lógica de validación básica.”_

- **Criterios de Aceptación**:
  1. Reemplazar el antiguo proceso de registro (posiblemente basado en arrays u objetos literales) por instancias de `Movimiento`.
  2. Mantener la funcionalidad previa (ej. prompts, input en el DOM) y al final almacenar los objetos resultantes en un array global `movimientos` (o similar).
  3. Verificar que los cálculos de totales, filtros o resúmenes sigan funcionando (aunque ahora cada entrada es un objeto).

> **Checkpoint 2 (~60 min)**: Revisar el flujo de registro; cada nuevo movimiento debe ser un **objeto** creado con la función constructora.


### HU3 - Renderizar Objetos en el DOM
> _“Como usuario, quiero ver una representación de cada movimiento en la interfaz web, facilitando la visualización de mi presupuesto.”_

- **Criterios de Aceptación**:
  1. Crear un método (por ejemplo, `Movimiento.prototype.render = function() { … }`) que devuelva o inserte un bloque HTML representando el movimiento.
  2. Tras registrar un movimiento, llamar a `movimiento.render()` para mostrarlo en la interfaz.

*(Esta historia te prepara para la siguiente clase, donde profundizarás en prototipos y herencia prototipal.)*


## 🛠️ Requerimientos Técnicos

1. **Uso de Funciones Constructoras**  
- Definir funciones como `function Movimiento(tipo, monto, descripcion) { … }`.
- Usar `new Movimiento()` para crear instancias.  

2. **Encapsular la Lógica de Validación**  
- Validar datos en el constructor o en funciones auxiliares, lanzando mensajes de error o retornando algo manejable si el input es incorrecto.  

3. **Integrar Objetos en el Flujo del Proyecto**  
- Reemplazar estructuras planas por objetos en las partes clave (por ejemplo, cada registro de gasto/ingreso se maneja ahora con una instancia de `Movimiento`).  

4. **Renderización en el DOM**  
- Implementa un método `render` para conectar la lógica con la capa de presentación (DOM).

## 🌟 Logros Adicionales

1. **Logro 1: Métodos Auxiliares**  
- Crear métodos específicos dentro del constructor (o asociados a cada instancia) para formatear montos, calcular impuestos, etc.  
- Evitar la dispersión de lógica por todo el código, centralizando las acciones en su objeto correspondiente.

2. **Logro 2: Reporte de Validaciones**  
- Configurar un sistema que acumule los errores de validación (por ejemplo, en un array) y los muestre en la interfaz, en lugar de solo usar `alert()` o `console.log()`.

3. **Logro 3: Vista en Tabla o Tarjetas (DOM)**  
- Dar estilo a la representación de cada movimiento (ya sea en una tabla o tarjetas), aprovechando Bootstrap, Tailwind o CSS propio.


## 📝 Instrucciones de Entrega

1. **Despliegue**  
- Publica la nueva versión del proyecto en GitHub Pages o el método que uses.  
- Verifica que el registro y visualización de los objetos funcionen correctamente.

2. **Entrega Final**  
- URL del repositorio.  
- URL del proyecto desplegado.
