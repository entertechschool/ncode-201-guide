# Laboratorio 06: Refactorizando el Gestor de Presupuesto 🔄

## Descripción
En este laboratorio, mejorarás la aplicación de gestión de presupuestos personales del Lab 05, implementando los principios de programación funcional y DRY (Don't Repeat Yourself). Transformarás el código existente para hacerlo más eficiente, mantenible y escalable.

## 🎯 Objetivos de Aprendizaje
- Aplicar principios de programación funcional en JavaScript
- Implementar el principio DRY para eliminar código redundante
- Crear funciones puras que procesan datos sin efectos secundarios
- Refactorizar código existente para mejorar su calidad y mantenibilidad

## 🚀 Setup Inicial

### 1. Preparación del Repositorio
- Asegúrate de estar trabajando en una nueva rama:
```bash
git checkout -b lab-06-refactor
```

### 2. Estructura de Archivos Mejorada
```
personal-budget/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── utils.js
│   └── validators.js
```

### 3. Aprendiendo con IA
Para este laboratorio, necesitarás reforzar tus conocimientos sobre programación funcional en JavaScript. Usa un prompt similar a este:

```
Soy estudiante de desarrollo web y estoy aprendiendo JavaScript. Necesito entender mejor los conceptos de programación funcional:

1. Qué son las funciones puras (con ejemplos)
2. Usar métodos de array como map, filter y reduce
3. Ver ejemplos de cómo refactorizar código usando estos conceptos

Mi conocimiento actual incluye:
- JavaScript básico: variables, funciones, arrays
- Bucles for y while
- Manipulación básica del DOM
```

### 4. Precauciones 🔴

Ten en cuenta que, si bien la IA es una herramienta poderosa para el aprendizaje, **usarla en exceso puede obstaculizar tu desarrollo como programador**. Está bien consultarla para entender conceptos específicos (como el uso de programación funcional en el punto 3), pero **resolver el laboratorio completo con IA te privará de la valiosa experiencia** de enfrentarte a problemas reales y desarrollar tu propio 🧠 pensamiento lógico. 

> 💻 La práctica activa de escribir código, cometer errores y depurarlos es esencial para construir una base sólida de habilidades técnicas. Recuerda: la IA debe ser tu apoyo para aprender, no **un atajo para evitar el proceso de aprendizaje**.

## ✅ Instrucciones

### 1. Refactorización del HTML (index.html)
- Mejora la estructura semántica del HTML usando las etiquetas adecuadas (main, section, h2, etc.)
- Incluye los nuevos archivos JavaScript modularizados (el orden es importante)
- Implementa un contenedor para el balance total con esta estructura:
    - section > h2 **Balance: XXX**
    - _Debe tener el diseño de una tarjeta_

### 2. Modularización de JavaScript

#### utils.js
- Implementa funciones utilitarias puras:
- `calcularBalance(transacciones)`
```javascript
const calcularBalance = (transacciones) => {
  return transacciones.reduce((total, trans) => {
    // lógica del cálculo
  }, 0);
};
```
- `formatearMonto(monto, moneda)`

#### validators.js
Crea funciones de validación:
- `validarMonto(monto)`
- `validarTipo(tipo)`

#### app.js
Refactoriza el código principal:
1. Reemplaza los bucles for por métodos funcionales (map, filter, reduce)
2. Implementa funciones específicas para cada tarea
3. Elimina cualquier variable global innecesaria

### 3. Mejoras en CSS
> ⚠️ Si tu proyecto actualmente utiliza bootstrap, tendrás que remover esta librería externa para poder trabajar este punto.

Organiza tu archivo styles.css siguiendo estas pautas:

- Define al menos 3 variables CSS para elementos comunes:
```css
/* Ejemplo: */
:root {
  --color-primary: #2557a7;
  --border-radius: 4px;
}
```
- Implementa al menos 3 clases utilitarias reutilizables:
```css
/* Ejemplo: */
.text-primary {
    color: var(--color-primary);
}
.rounded {
    border-radius: var(--border-radius);
}
```

### 4. Control de versiones con Git
- Realiza al menos 3 commits significativos y descriptivos:
    - Haz commits pequeños y frecuentes
    - Usa mensajes claros que sigan esta estructura
    ```bash
    git commit -m "feat: agrega funciones puras para cálculos"
    git commit -m "refactor: modulariza código en utils.js"
    git commit -m "style: implementa variables css"
    ```
- Documenta al menos 3 cambios en el archivo `README.md`:
```
- Modularización de...
- Implementación de..
- Mejoras de...
- Optimización de...
```

- Crea un Pull Request:
    - Sube tus cambios a GitHub
    - Crea un PR desde la rama `lab-06-refactor` a `main`
    - En la descripción del PR, detalla **qué cambios realizaste**
    - Confirma el PR y haz el merge con main, desde Github.


## Logros adicionales

1. **Estilos dinámicos para el balance:** Crea una función pura `getBalanceClass` que determine la clase según el monto:
```
hasta 500 => .low-balance
hasta 1000 => .regular-balance
superior a 1000 => .extra-balance
```
Esta función debe utilizar la propiedad `classList` del elemento del DOM.

Estas clases deben estar creadas en tu hoja de estilos `styles.css` y deben mostrar el balance en 3 colores diferentes según el monto.

## Instrucciones de envío
- Publica la página usando GitHub Pages
- Envía los enlaces de tu repositorio, sitio publicado y también del Pull Request realizado.