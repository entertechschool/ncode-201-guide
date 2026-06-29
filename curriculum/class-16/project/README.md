# Proyecto del Módulo 4

**Gestor de Plantillas para WhatsApp**

Este proyecto consolida todo lo aprendido durante el **Módulo 4: Estado y Persistencia**. El objetivo es construir una aplicación **capaz de crear, guardar y gestionar plantillas reutilizables** de mensajes de WhatsApp, utilizando modelado de datos, manipulación del DOM, persistencia con `LocalStorage` y una arquitectura modular con módulos ESM.

> 🔥 Cada estudiante presentará su proyecto en una **demostración en vivo de máximo 10 minutos**, donde debe mostrar funcionalidades clave y argumentar técnicamente sus decisiones de implementación.

---

## 🧩 Secuencia de Laboratorios

| Laboratorio        | Contribución al Proyecto |
|--------------------|--------------------------|
| **Lab 13: Modelado de Datos y Manipulación de Texto**   | Modelar la plantilla como dato y transformar el texto del mensaje dinámicamente. |
| **Lab 14: Interacción y Datos Derivados**               | Delegación de eventos, operaciones CRUD y ordenar (sort) sobre la colección. |
| **Lab 15: JSON y LocalStorage**                         | Guardar y cargar plantillas personalizadas de forma persistente. |
| **Lab 16: Módulos ESM y Cierre**                        | Repartir el código en módulos (`state`/`storage`/`ui`/`app`) y cerrar el proyecto. |

---

## 🚀 Funcionalidad Esperada

Cada aplicación debe permitir como mínimo:

1. Crear nuevas plantillas personalizadas con nombre y contenido de mensaje.
2. Editar y eliminar plantillas ya guardadas.
3. Ver en tiempo real la vista previa del mensaje final.
4. Guardar automáticamente las plantillas en `LocalStorage`.
5. Restaurar automáticamente las plantillas al recargar la app.
6. Validar campos obligatorios y mostrar errores adecuados.

---

## 🎯 Retos

Cada estudiante implementará al menos **2 nuevas Historias de Usuario** y demostrará su funcionamiento en la presentación final.

### Modelo de Historia de Usuario:

1. **HU1: Título [Nombre claro y directo de la funcionalidad]**  
Como [tipo de usuario], quiero [acción o funcionalidad específica] para [objetivo o beneficio].
    - **Criterios de Aceptación:**
        - [Condición 1: Qué debe cumplirse para considerar esta historia completada]
        - [Condición 2: Comportamientos esperados o validaciones necesarias]
        - [Condición 3: Consideraciones adicionales de UI/UX o rendimiento]

### Implementación:
- Cada **Historia de Usuario** debe estar implementada en una rama específica. Una vez cumplidos los **criterios de aceptación**, se realizará un Pull Request hacia la rama `main`.

- El uso de herramientas de Inteligencia Artificial está permitido ✅, sin embargo, **solo debes implementar código que puedas explicar técnicamente**.


---

## ☑️ Rúbrica de Evaluación

> 📋 La rúbrica oficial (5 criterios × 20 pts = 100 pts) vive en [../lab/rubric.md](../lab/rubric.md). Evalúa: HU implementadas, calidad técnica (estado + persistencia + sincronización), presentación en vivo, argumentación técnica, y desafío (explicación de fragmento de código a solicitud del instructor + deploy).

## 📣 Presentación en Vivo

- Cada estudiante tendrá **máximo 5 minutos** para:
    1. Mostrar la app funcionando (crear, editar, eliminar, filtrar, ordenar y persistir plantillas).
    2. Explicar claramente qué retos adicionales eligió y cómo los implementó.

- Adicionalmente, tendrá **máximo 5 minutos** para:
    3. Justificar al menos **2 decisiones técnicas relevantes**.
    4. Explicar al menos **1 fragmento de código** solicitado por el **Instructor**.

## 📝 Instrucciones de envío

- **Repositorio actualizado** con ramas fusionadas en `main`.
- **URL de GitHub Pages** desplegado.
- **README actualizado** documentando:
    - Historias de usuario implementadas.
    - Decisiones técnicas clave explicadas brevemente.
    - Enlace al proyecto desplegado.

---

> ### 💡 Tips para la Presentación
>
> - **Sé claro y técnico:** Resume tus decisiones técnicas de manera precisa.
> - **Usa casos prácticos:** Muestra ejemplos concretos que justifiquen claramente tus decisiones (arquitectura modular con ESM, persistencia con LocalStorage, manejo de eventos y datos derivados).
> - **Enfócate en el pensamiento crítico:** Fundamenta tus decisiones técnicas con base en los conceptos aprendidos durante el módulo.