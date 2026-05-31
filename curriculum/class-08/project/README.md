# Proyecto del Módulo 2  

**Gestor de Presupuesto Personal**

Este proyecto consolida todo lo aprendido durante el **Módulo 2: Fundamentos de Programación**. El objetivo es que cada estudiante desarrolle un gestor de presupuesto personal robusto integrando los paradigmas imperativo, funcional y orientado a objetos, además del entendimiento profundo sobre prototipos y herencia en JavaScript.

> ⏳ Cada estudiante presentará su proyecto en una **demostración en vivo de máximo 6 minutos** ante el instructor y sus compañeros, explicando sus **decisiones técnicas clave**.

## 🧩 Relación Secuencial de Laboratorios

| **Laboratorio** | **Contribución al Proyecto** |
|---|---|
| **Lab 5: Programación Imperativa** | Sentar las bases del programa con estructuras de control, lógica condicional y funciones imperativas, creando el registro básico de movimientos financieros. |
| **Lab 6: Programación Funcional** | Refactorizar las funcionalidades del gestor con funciones puras y de orden superior (`map()`, `filter()`, `reduce()`), optimizando la gestión de datos sin efectos secundarios, promoviendo la inmutabilidad y reutilización del código. |
| **Lab 7: Programación Orientada a Objetos** | Organizar y encapsular lógica y datos financieros en objetos creados con funciones constructoras (`function Constructor() {}` + `new`), consolidando validaciones, métodos de cálculos y presentaciones en DOM usando `this.propiedad` y `this.metodo`. |
| **Lab 8: Prototipos en JavaScript** | Optimizar el gestor implementando la cadena de prototipos (`Constructor.prototype.metodo`), estableciendo métodos compartidos para mejor eficiencia de memoria y creando herencia prototipal con subtipos especializados (`Ingreso`, `Egreso`) usando `Object.create()` e `instanceof`.|

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

> 📋 La rúbrica oficial (5 criterios × 20 pts = 100 pts) vive en [../lab/rubric.md](../lab/rubric.md). Evalúa: HU implementadas, calidad técnica (paradigmas integrados), presentación en vivo, argumentación técnica, y desafío (explicación de código prototipal a solicitud del instructor + deploy).

## 📣 Presentación en Vivo

- Cada estudiante tendrá **máximo 3 minutos** para:
    1. Mostrar su sitio completo (navegación, responsividad, interacción).
    2. Explicar qué retos adicionales eligió y cómo los implementó.
    3. Demostrar funcionalidades específicas de prototipos (herencia, validaciones con `instanceof`).

- Adicionalmente, tendrá **máximo 3 minutos** para:
    4. Justificar al menos **2 decisiones técnicas relevantes** sobre paradigmas de programación
    5. Justificar al menos **1 implementación de código prototipal** preguntado por el **Instructor**
    6. Explicar la cadena de prototipos de sus objetos usando DevTools

## 📝 Instrucciones de envío

- **Repositorio actualizado** con ramas fusionadas en `main`.
- **URL de GitHub Pages** desplegado.
- **README actualizado** documentando:
    - Retos adicionales implementados.
    - Decisiones técnicas clave sobre paradigmas de programación.
    - Explicación de la arquitectura de prototipos implementada.
    - Enlace al sitio desplegado.

---

> ### 💡 Tips para la Presentación
> 
> - **Sé conciso y técnico:** Explica breve pero claramente tus decisiones sobre paradigmas de programación.
> - **Muestra la cadena de prototipos:** Usa DevTools para demostrar herencia prototipal.
> - **Usa ejemplos concretos:** Muestra casos donde `instanceof` y métodos especializados agregan valor.
> - **Céntrate en el pensamiento crítico:** Explica por qué elegiste prototipos vs métodos en constructor.
> - **Demuestra eficiencia:** Compara memoria usada entre enfoques diferentes.