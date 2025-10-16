# Laboratorio 17: Descubriendo el Proyecto Final 🔍

## Descripción
En este laboratorio, trabajarás con tu equipo para analizar un problema real de una empresa, definir los requerimientos iniciales y crear la documentación base del proyecto. Aprenderás a usar herramientas de IA para explorar soluciones técnicas y documentarlas efectivamente.

## 🎯 Objetivos de Aprendizaje
- Analizar y documentar requerimientos técnicos para una solución web
- Comprender cómo utilizar la metodología AGILE en gestión de proyectos
- Crear historias de usuario efectivas que guíen el desarrollo
- Utilizar IA estratégicamente para explorar soluciones técnicas

> 🔴 **IMPORTANTE:** \
> Este es el inicio del proyecto final. Será realizado a lo largo de 4 laboratorios y al finalizar se presentará la solución en un Demo Day. \
> Es muy importante considerar que se busca la **implementación de una solución a nivel de MVP**, y no una solución perfecta, ya que el tiempo será el principal desafío.

## 🧠 Conceptos Clave
1. Análisis de requerimientos
2. Gestión ágil de proyectos y MVP
3. Historias de usuario
4. Documentación técnica
5. Alcance del proyecto (scope)
6. Arquitectura de solución web

## 🚀 Setup Inicial

### 1. Repositorio grupal
```bash
# Crear nuevo repositorio en GitHub
nombre-proyecto/
├── README.md  <-- equipo, requerimientos, historias de usuario
├── prompt.md  <-- System Prompt
├── wireframes/ <-- imagenes
├── ... <-- archivos / directorios del código
└── .gitignore
```

### 2. Configuración de Github
- Agregar integrantes
- Crear ramas necesarias
   - main
   - dev (o nombre_alumno, a elección del instructor)

### 3. System Prompt
> `prompt.md`
- Conocimientos del estudiante (101 + 201)
- Stack del proyecto
- Alcance del proyecto (lo que NO se tocará)
- Rol de la IA en el proyecto

## 📋 Retos a Cumplir

### 1. Documentación de Requerimientos (README.md)
Usando IA como asistente de documentación:

a) Analizar el problema:
- Descripción del negocio
- Dolor actual (pain point)
- Beneficios esperados

b) Definir el alcance:
- Funcionalidades core
- Restricciones técnicas
- Entregables mínimos

c) Wireframes y bocetos:
- Mapa del sitio
- Interfaces de baja fidelidad
- Flujos

d) Estructurar el documento:
- Ordenar lógicamente
- Filtrar los resultados clave
- Mantener el formato markdown

### 2. Historias de Usuario (README.md)
Para cada funcionalidad core:

```markdown
### Historia de Usuario: [Título]
Como [rol]
Quiero [acción]
Para [beneficio]

#### Criterios de Aceptación:
1. Dado [contexto]
   Cuando [evento]
   Entonces [resultado]

#### Notas Técnicas:
- Componentes necesarios
- Modelos de datos
- Interacciones
```

### 3. README.md del Proyecto
Documentar:
- Descripción general
- Tecnologías a utilizar
- Imágenes a los wireframes (opcional)

## 🛠️ Herramientas de IA Recomendadas

### 1. Para Análisis
Prompt sugerido:
```
Actúa como consultor técnico. Necesito analizar este problema:
[descripción del problema]

Por favor ayúdame a:
1. Identificar los principales pain points
2. Sugerir posibles soluciones técnicas
3. Listar consideraciones importantes
```

### 2. Para Documentación
Prompt sugerido:
```
Eres un Technical Writer. Necesito documentar:
[aspecto técnico]

Por favor genera:
1. Descripción clara y concisa
2. Ejemplos relevantes
3. Consideraciones técnicas importantes
```

## 📤 Instrucciones de Envío

### Entregables Grupales
1. Link al repositorio con:
   - README.md completo
   - Todos los integrantes como colaboradores

2. Link a la primera versión de la web desplegada
   - Github Pages
   - Home page
   - header y footer

## ⚠️ Consideraciones Importantes
- Mantén el alcance realista para 2 semanas
- Mantén el concepto de MVP
- Enfócate en funcionalidades core
- Documenta asunciones importantes
- Usa la IA como herramienta de apoyo, no como solución completa

## 💡 Consejos para el Éxito
- Divide el tiempo equitativamente entre análisis y documentación
- Valida ideas con el instructor
- Itera sobre la documentación
- Usa diagramas simples cuando sea necesario
- Mantén las historias de usuario enfocadas y específicas