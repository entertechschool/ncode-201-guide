📦 **Módulo 1:** Clase 1 de 4

# Clase 01: HTML5 Semántico y Accesibilidad

## Resumen

En esta clase se introducen los fundamentos de **HTML5 semántico** y **accesibilidad web (A11y)**, estableciendo las bases para construir interfaces inclusivas desde el inicio del desarrollo. A través de una guía de lectura y debate, los estudiantes confrontan mitos comunes sobre la semántica, exploran buenas prácticas de accesibilidad y evalúan el rol de la inteligencia artificial como herramienta de soporte en estos procesos.

Posteriormente, en el laboratorio, implementan una estructura web semántica accesible, utilizando etiquetas adecuadas, atributos ARIA, jerarquías de encabezado y prompts para refinar el código con IA.

---

## Estructura sugerida

| **Fase**                 | **Duración** | **Descripción**                                                                                        |
| ------------------------ | ------------ | ------------------------------------------------------------------------------------------------------ |
| **1. Introducción**      | 15 min       | Activación del tema a partir de ejemplos no accesibles y preguntas provocadoras sobre IA.              |
| **2. Debate Conceptual** | 30 min       | Discusión guiada sobre mitos y verdades del HTML semántico, la accesibilidad y la IA en el desarrollo. |
| **3. Demo Técnica**      | 20 min       | Maquetado básico guiado mostrando estructura semántica, etiquetas ARIA y jerarquías de encabezado.     |
| **4. Laboratorio**       | 100 min      | Desarrollo de una página HTML con tres checkpoints colaborativos (30, 50 y 80 min).                    |
| **5. Cierre**            | 15 min       | Retroalimentación cruzada, resolución de dudas y conexión con la clase siguiente.                      |


| **Fase**   | **Duración** | **Descripción** |
| --- | --- | --- |
| **1. Introducción y Contexto de la clase** | 15 min | Se plantea el objetivo de hacer accesible un sitio web. Se discuten ejemplo del alcance y poder de la IA en el desarrollo de código. |
| **2. Parte 1**   | 45 min | Crear la estructura base del proyecto recordando Git y Github. |
| **3. Parte 2**   | 45 min | Aplicamos estructura Semántica a la Landing Page.   |
| **5. Break 2**   | 10 min | Segundo Descanso      |
| **6. Parte 3**   | 50 min | Estado global con `zustand`: creación de store con middleware `persist`, reemplazo de `useContext`, demostración de persistencia tras reload y limpieza de props innecesarias.    |
| **7. Síntesis**  | 10 min | Revisión colectiva de decisiones técnicas: se invita a reflexionar cuál de las tres integraciones representa un salto profesional más decisivo y por qué. |

---

## 📌 Preparación para la clase

> Antes de la clase, reflexiona sobre el rol que tiene la semántica y la accesibilidad desde la primera línea de código. Considera también cómo la inteligencia artificial puede ser una aliada o una amenaza en estos procesos. El objetivo es fomentar criterios, no repetir definiciones.

#### 🧠 Preguntas reflexivas

* ¿Por qué debería importarte la accesibilidad al comenzar un nuevo proyecto web?
* ¿Cómo crees que afecta la estructura semántica al posicionamiento y mantenimiento de una página?
* ¿Puede una IA identificar correctamente elementos semánticos y accesibles? ¿Cómo validarías sus sugerencias?
* ¿A quién excluyes si ignoras buenas prácticas de accesibilidad?


#### 🧠 Lista de Mitos y Verdades para Analizar

1. Usar `<div>` para cada sección del sitio es la mejor forma de estructurar una página.  
2. La IA puede generar código HTML y sugerir etiquetas semánticas, pero el desarrollador debe revisarlas antes de usarlas.  
3. Colocar texto alternativo (`alt`) en imágenes solo sirve para mejorar el resultado en la búsqueda de Google.  
4. Solo las personas con discapacidad visual se benefician de los sitios accesibles.
5. Un buen uso de HTML5 semántico hace el proyecto más mantenible y promueve la colaboración entre desarrolladores.

> **Identifica** cuáles crees que son mitos y cuáles son verdades. Prepárate para justificar tus respuestas con evidencia de lecturas o experiencias.

#### 📚 Artículos sugeridos
- **HTML Semántico: Qué Es y Cómo Usarlo Correctamente**  
  [https://es.semrush.com/blog/html-semantico/](https://es.semrush.com/blog/html-semantico/){:target="_blank"}

- **Introducción a la Accesibilidad (W3C)**  
  [https://www.w3.org/WAI/fundamentals/accessibility-intro/es](https://www.w3.org/WAI/fundamentals/accessibility-intro/es){:target="_blank"}

- **Cómo escribir mejores prompts para la IA**  
  [https://www.promptingguide.ai/es](https://www.promptingguide.ai/es){:target="_blank"}

---

## Resultados esperados

Al finalizar esta clase, el estudiante será capaz de:

* Construir una estructura HTML semántica básica.
* Implementar atributos y roles de accesibilidad fundamentales (ARIA).
* Redactar y aplicar texto alternativo en imágenes.
* Utilizar prompts en IA para refinar maquetado, evaluando sus sugerencias críticamente.
* Organizar jerarquías de encabezado que favorezcan la navegación con lectores de pantalla.

---

## Glosario de Nuevos Términos

* **A11y**: Abreviatura de "accessibility". Prácticas para que productos digitales sean utilizables por todos.
* **ARIA**: Atributos que mejoran la accesibilidad en aplicaciones web complejas.
* **Alt text**: Descripción textual de una imagen para usuarios con discapacidad visual.
* **Screen reader**: Software que convierte texto digital en audio para navegar sitios.
* **DOM**: Representación estructurada de una página web.
* **Role attribute**: Indica el rol de un elemento para las tecnologías asistivas.
* **Keyboard navigation**: Capacidad de moverse por un sitio solo con el teclado.
* **Prompt engineering**: Técnica para generar instrucciones eficaces para IA.
