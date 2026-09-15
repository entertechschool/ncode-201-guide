# Proyecto del Módulo 3

**Pokédex — buscador que consume la PokeAPI**

Este proyecto consolida todo lo aprendido durante el **Módulo 3: JavaScript Moderno y Consumo de APIs**. El objetivo es que cada estudiante desarrolle una Pokédex que consume una API real, integrando sintaxis moderna de JavaScript, render dinámico del DOM, asincronía con `fetch`/`async/await`, y manejo robusto de errores y estados de UI, creando una aplicación interactiva y confiable.

> ⏳ Cada estudiante presentará su proyecto en una **presentación en vivo de máximo 10 minutos** (5 de demostración + 5 de argumentación técnica), explicando sus **decisiones técnicas clave**.

---

## 🧩 Relación Secuencial de Laboratorios

| **Laboratorio** | **Contribución al Proyecto** |
| --- | --- |
| **Lab 9: JavaScript Moderno y Render Dinámico** | Construir la base de la Pokédex renderizando tarjetas desde un array local con `createElement`, template literals, destructuring y optional chaining. |
| **Lab 10: Datos desde la web (fetch, Promesas y JSON)** | Reemplazar el array local por datos reales de la PokeAPI con `fetch` y Promesas (`.then`/`.catch`), adaptar la estructura JSON y cargar la rejilla en paralelo con `Promise.all`. |
| **Lab 11: async/await y búsqueda en la API** | Reformular la carga con `async/await`, buscar Pokémon por nombre en la API y **capturarlos** (botón en la tarjeta) en la colección (`pokedex`) sin duplicar. |
| **Lab 12: Manejo de Errores y Estados** | Hacer la app robusta con `try/catch/finally`, validación de `response.ok` (404) y estados de carga/error (en la búsqueda y la carga), y documentar el proyecto en Markdown. |

## 🎯 Retos

Cada estudiante implementará al menos **2 nuevas Historias de Usuario** y demostrará su funcionamiento en la presentación final.

### Modelo de Historia de Usuario:

1. **HU1: Título [Nombre claro y directo de la funcionalidad]**  
Como [tipo de usuario], quiero [acción o funcionalidad específica] para [objetivo o beneficio].
    - **Criterios de Aceptación:**
        - [Condición 1: Qué debe cumplirse para considerar esta historia completada]
        - [Condición 2: Comportamientos esperados o validaciones necesarias]
        - [Condición 3: Consideraciones adicionales de UI/UX o manejo de errores]

> 💡 Ideas de retos: buscar por número además de por nombre; mostrar las estadísticas (`stats`) con barras; una lista inicial con `?limit=N`; filtrar por tipo; botón "reintentar" tras un error.

### Implementación:
- Cada **Historia de Usuario** debe estar implementada en una rama específica. Una vez cumplidos los **criterios de aceptación**, se realizará un Pull Request hacia la rama `main`.

- El uso de herramientas de Inteligencia Artificial está permitido ✅, sin embargo, **solo debes implementar código que puedas explicar técnicamente**.

## ☑️ Rúbrica de Evaluación

> 📋 La rúbrica oficial (5 criterios × 20 pts = 100 pts) vive en [../lab/rubric.md](../lab/rubric.md). Evalúa: HU implementadas, calidad técnica (async + fetch + manejo de errores), presentación en vivo, argumentación técnica, y desafío (explicación de fragmento de código a solicitud del instructor + deploy + README).

## 📣 Presentación en Vivo

- Cada estudiante tendrá **máximo 5 minutos** para:
    1. Mostrar la Pokédex funcionando (búsqueda de un Pokémon real, render de la tarjeta y funcionalidades adicionales).
    2. Explicar claramente qué retos adicionales eligió y cómo los implementó.

- Adicionalmente, tendrá **máximo 5 minutos** para:
    3. Justificar al menos **2 decisiones técnicas relevantes** (flujo async, manejo de errores, render).
    4. Explicar al menos **1 fragmento de código** solicitado por el **Instructor**.
    5. Provocar un error (buscar un Pokémon inexistente) para demostrar que la app no se rompe.

## 📝 Instrucciones de envío

- **Repositorio actualizado** con ramas fusionadas en `main`.
- **URL de GitHub Pages** desplegado.
- **README.md en Markdown** documentando:
    - Historias de usuario implementadas.
    - Decisiones técnicas clave explicadas brevemente.
    - Tecnologías usadas (`fetch`, `async/await`, Tailwind, PokeAPI).
    - Enlace al proyecto desplegado.

---

> ### 💡 Tips para la Presentación
>
> - **Sé claro y técnico:** resume tus decisiones técnicas de manera precisa.
> - **Muestra los estados:** demuestra la búsqueda exitosa, el "no encontrado" y el spinner.
> - **Enfócate en el pensamiento crítico:** fundamenta por qué validas `response.ok` y por qué usas `finally`.
