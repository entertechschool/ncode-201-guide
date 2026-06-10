# Proyecto del Módulo 2  

**Gestor de Presupuesto Personal**

Este proyecto consolida todo lo aprendido durante el **Módulo 2: Fundamentos de Programación**. El objetivo es que cada estudiante desarrolle un gestor de presupuesto personal robusto integrando los paradigmas imperativo, funcional y orientado a objetos (`class`), y dándole una **interfaz visual con Tailwind** que el formulario actualiza en vivo.

> ⏳ Cada estudiante presentará su proyecto en una **demostración en vivo de máximo 6 minutos** ante el instructor y sus compañeros, explicando sus **decisiones técnicas clave**.

## 🧩 Relación Secuencial de Laboratorios

| **Laboratorio** | **Contribución al Proyecto** |
|---|---|
| **Lab 5: Programación Imperativa** | Sentar las bases del programa con estructuras de control, lógica condicional y funciones imperativas, creando el registro básico de movimientos financieros. |
| **Lab 6: Programación Funcional** | Refactorizar las funcionalidades del gestor con funciones puras y de orden superior (`map()`, `filter()`, `reduce()`), optimizando la gestión de datos sin efectos secundarios, promoviendo la inmutabilidad y reutilización del código. |
| **Lab 7: Programación Orientada a Objetos** | Organizar y encapsular la lógica y los datos financieros con `class` (`constructor`, `this`, `new`), construida por capas (propiedades → constructor → métodos), en las clases `Movimiento` y `Presupuesto`. |
| **Lab 8: Tailwind CSS e Interfaz** | Darle una interfaz visual moderna y responsiva al gestor con Tailwind (por grupos de clases) y **conectar el formulario con JavaScript** —reusando las clases de C07— para que la app agregue movimientos y actualice el saldo en vivo. Cierra el módulo. |

## 🎯 Retos

Cada estudiante implementará al menos **2 nuevas Historias de Usuario** y demostrará su funcionamiento en la presentación final.

### Modelo de Historia de Usuario:
1. **HU1: Título [Nombre claro y directo de la funcionalidad]**  
Como [tipo de usuario], quiero [acción o funcionalidad específica] para [objetivo o beneficio].
    - **Criterios de Aceptación:**
        - [Condición 1: Qué debe estar presente o cumplirse para considerar esta historia completada]
        - [Condición 2: Validaciones o comportamientos esperados]
        - [Condición 3: Accesibilidad o consideraciones de diseño]

### Implementación:
- Cada **Historia de Usuario** debe estar implementada en una rama con un nombre coherente. Una vez que la implementación cumpla con los **criterios de aceptación** propuestos hacer Pull Request a la rama `main`.

- El uso de herramientas de Inteligencia Artificial está permitido ✅ sin embargo, **solo debes implementar código que puedas explicar técnicamente**.

## ☑️ Rúbrica de Evaluación

> 📋 La rúbrica oficial (5 criterios × 20 pts = 100 pts) vive en [../lab/rubric.md](../lab/rubric.md). Evalúa: HU implementadas, calidad técnica (lógica + interfaz integradas), presentación en vivo, argumentación técnica, y desafío (explicación de un fragmento de código a solicitud del instructor + deploy).

## 📣 Presentación en Vivo

- Cada estudiante tendrá **máximo 3 minutos** para:
    1. Mostrar su sitio completo (navegación, responsividad, interacción).
    2. Explicar qué retos adicionales eligió y cómo los implementó.
    3. Demostrar la app funcionando: agregar un movimiento desde el formulario y ver la lista + saldo actualizarse.

- Adicionalmente, tendrá **máximo 3 minutos** para:
    4. Justificar al menos **2 decisiones técnicas relevantes** (lógica con `class`, interfaz con Tailwind, conexión)
    5. Explicar al menos **1 fragmento de código** preguntado por el **Instructor** (una clase de C07 o el listener del formulario)
    6. Mostrar el layout responsivo (móvil/escritorio) en DevTools

## 📝 Instrucciones de envío

- **Repositorio actualizado** con ramas fusionadas en `main`.
- **URL de GitHub Pages** desplegado.
- **README actualizado** documentando:
    - Retos adicionales implementados.
    - Decisiones técnicas clave sobre paradigmas de programación.
    - Explicación de la arquitectura (modelo de C07 + interfaz Tailwind).
    - Enlace al sitio desplegado.

---

> ### 💡 Tips para la Presentación
> 
> - **Sé conciso y técnico:** Explica breve pero claramente tus decisiones sobre paradigmas de programación.
> - **Muestra la app funcionando:** agrega un movimiento en vivo y muestra cómo cambian la lista y el saldo.
> - **Muestra el responsive:** usa DevTools (modo responsive) para ver el cambio móvil ↔ escritorio.
> - **Céntrate en el pensamiento crítico:** explica por qué `class` + encapsulación, y por qué utility-first/mobile-first.
> - **Conecta los puntos:** muestra cómo el formulario reusa tus clases de C07 sin reescribir lógica.