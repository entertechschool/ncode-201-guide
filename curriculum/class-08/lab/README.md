# Laboratorio 08: Prototipos en JavaScript

¡Bienvenido al Laboratorio 08 del proyecto **Personal Budget**! En este laboratorio, profundizaremos en el uso de prototipos en JavaScript para implementar herencia prototipal en nuestro proyecto. Además, trasladaremos los inputs y outputs gestionados previamente en consola a una interfaz de usuario web sencilla, utilizando HTML, CSS y frameworks modernos (Bootstrap o Tailwind). Esto permitirá que la aplicación sea visual, interactiva y funcional para el usuario final.

> ⏱️ **Nota sobre Checkpoints**: Este laboratorio incluye varios momentos de validación grupal. Se realizarán checkpoints específicos para cada Historia de Usuario seleccionada, permitiendo recibir feedback y ajustar la implementación en tiempo real.

## 🎯 Objetivos de Aprendizaje

1. **Comprender la cadena de prototipos (prototype chain) en JavaScript:**  
   Identificar cómo los objetos se conectan y comparten métodos a través de la cadena de prototipos.

2. **Diferenciar `prototype` y `__proto__`:**  
   Reconocer la diferencia entre la propiedad `prototype` de las funciones constructoras y la propiedad interna `__proto__` de las instancias, y aplicar estos conceptos en la implementación de herencia.

## 🔑 Conceptos Clave

1. **Prototype Chain:**  
   Mecanismo que permite a los objetos acceder a propiedades y métodos definidos en sus prototipos y en la cadena de prototipos superior.

2. **`__proto__` vs. `prototype`:**  
   Diferencia entre la referencia interna que tiene cada objeto (`__proto__`) y la propiedad `prototype` de las funciones constructoras que se utiliza para establecer la herencia.

3. **Funciones Constructoras:**  
   Patrón tradicional para crear objetos en JavaScript, permitiendo compartir métodos y propiedades a través del prototipo.

## ⚙️ Setup Inicial

1. **Repositorio**  
   - Continúa usando el repositorio existente: `personal-budget`.  

2. **Estructura de Archivos:**  
   Organiza tu proyecto con la siguiente estructura mínima:

   ```
   personal-budget/ 
   ├── index.html 
   ├── css/ 
   │ └── styles.css 
   ├── js/ 
   │ └── app.js 
   └── README.md
   ```

3. **Contenido Base:**  
- En `index.html`, incluye la estructura semántica básica (`<header>`, `<main>`, `<footer>`) y el formulario para registrar movimientos.
- En `styles.css`, define estilos iniciales y, si lo prefieres, integra un framework como Bootstrap o Tailwind para facilitar un diseño responsivo y atractivo.
- En `app.js`, implementa la lógica de prototipos y la integración con la UI.

## 🏆 Historias de Usuario

### HU1: Crear UI para la aplicación
> _"Como usuario, quiero disponer de una interfaz web sencilla y clara, construida con HTML y CSS, para trasladar los inputs y outputs en un entorno visual interactivo. La UI incluirá un formulario para capturar datos de cada movimiento (tipo, monto y descripción) y un área para visualizar los movimientos registrados, facilitando la interacción y el seguimiento del presupuesto de manera accesible y responsiva"_.

**Criterios de Aceptación:**  
  1. Crear una estructura semántica en HTML que incluya secciones como `<header>`, `<main>` y `<footer>`.
  2. Diseñar un formulario con campos para "Tipo", "Monto" y "Descripción", utilizando elementos apropiados (`<input>`, `<select>`, `<textarea>`).
  3. Aplicar estilos sencillos y responsivos con CSS o mediante Bootstrap/Tailwind.
  4. Incluir una sección en el DOM para mostrar los movimientos registrados de forma clara.

> **Checkpoint 1 (~20 min)**: Se revisará la correcta estructura del HTML, la aplicación de estilos y la integración inicial del formulario con el área de visualización.


### HU2: Herencia Prototipal para Movimientos Diferenciados
> _"Como usuario, quiero que los movimientos se clasifiquen en 'Ingreso' y 'Egreso' mediante herencia prototipal, de modo que ambos tipos compartan métodos comunes y tengan validaciones específicas adaptadas a cada caso. Al registrar un movimiento, se instanciará automáticamente el objeto adecuado (ya sea Ingreso o Egreso), garantizando la aplicación correcta de las validaciones generales y específicas."_

**Criterios de Aceptación:**  
  1. Definir una función constructora base `Movimiento` que actúe como prototipo para derivar subtipos.  
  2. Crear funciones constructoras específicas para `Ingreso` y `Egreso`, utilizando técnicas de herencia (por ejemplo, `Object.create()` o asignación del `prototype`) para heredar de `Movimiento`.  
  3. Implementar métodos comunes en el prototipo de `Movimiento` (por ejemplo, validaciones básicas y métodos de renderización) que sean reutilizables por ambas subclases.  
  4. Establecer validaciones específicas en cada subclase, como asegurar que el monto sea mayor a cero y que la descripción no esté vacía.  
  5. Verificar que al registrar un movimiento se instancie el objeto correcto y se ejecuten tanto las validaciones generales como las particulares.

> **Checkpoint 2 (~50 min):** Se evaluará la correcta creación de los subtipos, la adecuada configuración de la cadena de prototipos y la ejecución precisa de las validaciones.

### HU3: Actualización Automática de Totales mediante Herencia
> _"Como usuario, quiero que la suma total de ingresos y egresos se actualice automáticamente al registrar un movimiento, aprovechando métodos heredados a través de la cadena de prototipos. Esto permitirá mantener un resumen financiero actualizado en tiempo real sin requerir acciones adicionales, mejorando la experiencia de monitoreo y control del presupuesto."_

**Criterios de Aceptación:**  
  1. Implementar un método en el prototipo (por ejemplo, `recalcularTotales`) que recorra el array global de movimientos y calcule los totales de ingresos y egresos.  
  2. Asegurarse de que este método se invoque automáticamente cada vez que se registre un nuevo movimiento.  
  3. Integrar la actualización de totales con la interfaz de usuario para que los nuevos valores se muestren de forma inmediata en pantalla.  
  4. Validar que el cálculo de totales sea preciso y que la actualización se realice de forma eficiente.

> **Checkpoint 3 (~80 min):** Se revisará la integración del método `recalcularTotales`, verificando la exactitud de los cálculos, la actualización en tiempo real de la interfaz y la invocación automática del método tras el registro de nuevos movimientos.

## ⭐️ Logros Adicionales

- **Logro 1: Mostrar Mensaje de Confirmación**  
Como usuario, quiero ver un mensaje de confirmación en la interfaz cada vez que un movimiento se registre exitosamente, para recibir retroalimentación inmediata.

- **Logro 2: Resetear Formulario Automáticamente**  
Como usuario, deseo que el formulario se restablezca automáticamente después de registrar un movimiento, facilitando el ingreso de nuevos datos sin intervención manual.

## 📝 Instrucciones de Entrega

1. **Documentación en README:**  
- Agrega una sección con encabezado: **Backlog**
- En esta sección enumera al menos 5 posibles HU nuevas que implementarías en la aplicación.

2. **Despliegue:**  
- Publica la nueva versión del proyecto en GitHub Pages o en la plataforma que utilices para el despliegue.

3. **Entrega Final:**  
- URL del repositorio.
- URL del proyecto desplegado.
