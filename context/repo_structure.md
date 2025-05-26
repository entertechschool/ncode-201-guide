# Estructura de Repositorios en Enter Tech School

Este documento describe la estructura de los dos repositorios principales del programa Enter Tech School:
- `ncode-201-guide`: Contenido específico del curso Code 201
- `common_curriculum`: Recursos pedagógicos y curriculares compartidos entre todos los cursos

## Repositorio: common_curriculum

### Estructura de Directorios
```
common_curriculum/
├── core/
│   ├── learning_system.md        # Sistema pedagógico "Learning by Critical Thinking" (LCT)
│   └── program_full_syllabus.md  # Currícula completa de los 3 niveles del programa
```

- **core/learning_system.md:** Contiene la metodología pedagógica completa del sistema "Learning by Critical Thinking" (LCT) que debe ser consultado SIEMPRE al inicio de cada sesión para asegurar coherencia metodológica.
- **core/program_full_syllabus.md:** Incluye la currícula completa de los 3 niveles del programa (Code 101, 201, 301) para mantener coherencia curricular y entender la progresión del estudiante.

## Repositorio: ncode-201-guide

### Organización General

El repositorio está organizado principalmente por sesiones de clase dentro de la carpeta `curriculum`, siguiendo una estructura estandarizada que facilita el acceso a los diferentes tipos de recursos para cada sesión.

### Silabo Actualizado del Curso
> Utilizar el silabo actualizado antes de generar cualquier material académico.
Se encuentra en la ruta relativa: context/course_syllabus.md

### Estructura de Directorios
```
ncode-201-guide/
├── context/
│   ├── course_syllabus.md        # Silabo actualizado del curso
├── curriculum/
│   ├── class-01/
│   │   ├── README.md             # Revisión general de la clase 01 y guía de preparación para el estudiante.
│   │   ├── lab/
│   │   │   ├── README.md         # Guía del laboratorio 01
│   │   │   └── [otros archivos]  # Recursos adicionales del laboratorio
│   │   ├── slides/
│   │   │   ├── README.md         # Contenido para Slides generados por "reveal.js"
│   │   └── [otros recursos]      # Materiales adicionales para la clase
│   ├── class-02/
│   │   ├── [estructura similar]
...
│   └── class-12/
│       ├── [estructura similar]
```

### Convención de Nomenclatura

- Las carpetas de clase siguen el formato: `class-XX` donde XX es el número de la sesión (del 01 al 12)
- Los archivos principales tienen nombres estandarizados:
  - `README.md`: Contiene la revisión general de la clase y guía de preparación para el estudiante
  - Carpeta `lab/`: Contiene materiales relacionados con el laboratorio práctico
    - `lab/README.md`: Guía con las instrucciones específicas para el laboratorio
  - Carpeta `slides/`: Contiene materiales relacionados con los slides de moderación.
    - `slides/README.md`: Archivo de input que tiene el contenido de los slides generados por una aplicación hecha con "reveal.js"

### Acceso Eficiente

Para acceder eficientemente a los recursos:

1. Determina primero el número de clase (01-20)
2. Identifica el tipo de recurso (revisión general, guía de debate, laboratorio, slides)
3. Utiliza la estructura estandarizada para formar la ruta:
   - `curriculum/class-XX/README.md` para revisión general de la clase y guía de preparación
   - `curriculum/class-XX/lab/README.md` para laboratorio
   - `curriculum/class-XX/slides/README.md` para slides

### Recursos Especiales

Es posible que existan recursos adicionales dentro de cada carpeta de clase, que pueden incluir:
- Presentaciones
- Código de ejemplo
- Recursos complementarios
- Materiales de apoyo visual

## Protocolo de Acceso Recomendado

### Al Inicio de Cada Sesión
**SIEMPRE consultar en este orden:**
1. `common_curriculum/core/learning_system.md` - Sistema pedagógico actualizado
2. `common_curriculum/core/program_full_syllabus.md` - Currícula completa del programa
3. `ncode-201-guide/context/course_syllabus.md` - Syllabus específico del curso Code 201

### Para Contenido de Clases Específicas
**Acceder según necesidad:**
- `ncode-201-guide/curriculum/class-XX/README.md` - Contenido de la clase
- `ncode-201-guide/curriculum/class-XX/lab/README.md` - Laboratorios
- `ncode-201-guide/curriculum/class-XX/slides/README.md` - Materiales de presentación

Esta estructura asegura coherencia metodológica y curricular en todo el programa educativo.