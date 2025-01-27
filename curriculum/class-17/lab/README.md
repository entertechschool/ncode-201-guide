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
├── docs/
│   ├── team.md
│   ├── requirements.md
│   ├── user-stories.md
│   └── wireframes/ <-- imagenes
├── README.md
└── .gitignore
```

### 2. Configuración de Github
- Agregar integrantes
- Crear ramas necesarias

### 3. Configurar Trello
- Crear nuevo board: `nombre-proyecto`
- Columnas iniciales:
  - Backlog
  - To Do
  - In Progress
  - Done
- Labels de sprints

### 4. Roles del Equipo
> `team.md`
- Definir líder técnico
- Asignar roles complementarios:
  - Documentación
  - Frontend
  - Gestión de datos

## 📋 Retos a Cumplir

### 1. Documento de Requerimientos (requirements.md)
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

### 2. Historias de Usuario (user-stories.md)
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
- Enlaces a los documentos (`docs/`)

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
   - Documentos en /docs
   - Todos los integrantes como colaboradores

2. Link al board de Trello con:
   - Historias de usuario como cards
   - Miembros asignados
   - Labels organizados

## ⚠️ Consideraciones Importantes
- Mantén el alcance realista para 3 sprints
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