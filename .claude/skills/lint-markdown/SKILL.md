---
name: lint-markdown
description: Valida Markdown para GitHub Pages: enlaces externos, escape de Liquid en código, enlaces rotos. Usar para revisar links, validar markdown, o antes de push.
allowed-tools: Read, Glob, Grep, Edit, WebFetch
---

# Lint Markdown - Validador para GitHub Pages

## Validaciones Incluidas

1. **Enlaces externos sin `{:target="_blank"}`** - Kramdown/Jekyll
2. **Código con `{{` sin escape Liquid** - Evita errores de build
3. **Enlaces rotos (HTTP 404)** - Verificación de URLs externas

---

## Cuándo Usar

| Escenario | Usar |
|-----------|------|
| Después de crear/editar archivos con enlaces | Sí |
| Antes de publicar contenido (push) | Sí |
| Mantenimiento periódico | Sí |
| Durante creación de contenido | No (mejor al final) |

---

## Proceso General

### Paso 1: Determinar alcance

Por defecto escanear `curriculum/` recursivamente. Si el usuario especifica un archivo o carpeta, usar ese alcance.

### Paso 2: Ejecutar validaciones

Ejecutar las tres validaciones y reportar resultados combinados.

### Paso 3: Reportar

Generar reporte con errores encontrados. Si el usuario solicita `--fix`, aplicar correcciones automáticas para Validación 1 y 2 (no para enlaces rotos, que requieren intervención manual).

---

## Validación 1: Enlaces Externos

### Definiciones

**Enlace externo:** URL que comienza con `http://` o `https://`

**Enlace interno (NO requiere target):**
- Anclas: `#seccion`
- Rutas relativas: `./archivo.md`, `../carpeta/`
- Rutas absolutas internas: `/curriculum/...`
- Sin protocolo

### Formato Correcto (Kramdown)

```markdown
[texto](https://url-externa.com){:target="_blank"}
```

### Detección

Usar Grep para encontrar enlaces externos sin target:
```regex
\[([^\]]+)\]\((https?://[^)]+)\)(?!\{:target)
```

Explicación:
- `\[([^\]]+)\]` - Captura el texto del enlace
- `\((https?://[^)]+)\)` - Captura URL que empieza con http(s)://
- `(?!\{:target)` - Negative lookahead: NO seguido de `{:target`

### Corrección

Agregar `{:target="_blank"}` después del enlace:
```markdown
[Google](https://google.com){:target="_blank"}
```

---

## Validación 2: Escape Liquid para Jekyll

### Problema

GitHub Pages usa Jekyll, que interpreta `{{` como sintaxis de Liquid. Esto causa errores de build cuando hay código con dobles llaves.

### Error típico
```
Liquid syntax error: Variable '{{ width: `${...}' was not properly terminated
```

### Detección

Buscar bloques de código con `{{`:
```regex
```(jsx|javascript|js|tsx|ts|json|python|py|html|css)[\s\S]*?\{\{
```

### Solución

Envolver bloques de código que contienen `{{` con tags raw/endraw de Jekyll:

````markdown
{% raw %}
```json
{
  "config": {{ "value" }}
}
```
{% endraw %}
````

### Proceso

1. Buscar bloques de código con `{{`
2. Verificar si ya tienen `{% raw %}` antes
3. Si no lo tienen, agregar `{% raw %}` antes del bloque y `{% endraw %}` después

---

## Validación 3: Enlaces Rotos (HTTP 404)

### Objetivo

Verificar que los enlaces externos devuelven HTTP 200 (o redirección válida).

### Proceso

1. Extraer todos los enlaces externos únicos (`https?://`) del alcance
2. Para cada enlace único, usar WebFetch para verificar accesibilidad
3. Reportar enlaces que devuelven 404 o error de conexión

### Consideraciones

- **Límite por ejecución:** Máximo 10 enlaces únicos por ejecución para evitar rate limiting
- **Caché de sesión:** Si un enlace ya fue verificado en la sesión actual, no repetir
- **Timeout/Error:** Si WebFetch falla con error de conexión, reportar como "No verificable"
- **Redirecciones:** Son válidas si el destino final existe (301/302 -> 200 = OK)
- **Prioridad:** Verificar primero enlaces en archivos modificados recientemente

### Detección

Usar Grep para extraer URLs únicas:
```regex
https?://[^\s\)\]"']+
```

### Códigos de Error Comunes

| Código | Significado | Acción |
|--------|-------------|--------|
| 200 | Enlace válido | Ninguna |
| 301/302 | Redirección válida | Ninguna (destino OK) |
| 404 | No encontrado | Verificar URL, buscar alternativa |
| 403 | Prohibido | Puede requerir autenticación |
| 500 | Error servidor | Reintentar más tarde |
| Timeout | Sin respuesta | Verificar URL, puede estar caído |
| SSL Error | Certificado inválido | Verificar https vs http |

---

## Reporte de Resultados

**Modo reporte (default):** No modificar archivos, solo reportar.

```markdown
# Lint Markdown - Reporte

**Alcance:** `{ruta}`
**Archivos analizados:** {N}
**Errores encontrados:** {N}

---

## Resumen

| Validación | Errores |
|------------|---------|
| Enlaces sin target | {N} |
| Liquid sin escape | {N} |
| Enlaces rotos | {N} |
| **Total** | **{N}** |

---

## 1. Enlaces sin `{:target="_blank"}`

| Archivo | Línea | Enlace |
|---------|-------|--------|
| {archivo} | {línea} | `[texto](URL)` |

**Total:** X enlaces a corregir
**Solución:** Agregar `{:target="_blank"}` después del paréntesis de cierre.

## 2. Bloques de código sin escape Liquid

| Archivo | Línea | Lenguaje |
|---------|-------|----------|
| {archivo} | {línea} | {lenguaje} |

**Total:** Y bloques a corregir
**Solución:** Envolver en `{% raw %}...{% endraw %}`.

## 3. Enlaces rotos (HTTP 404)

| Archivo | Línea | URL | Estado |
|---------|-------|-----|--------|
| {archivo} | {línea} | {URL} | {estado} |

**Total:** W enlaces rotos
**Verificados:** N de M enlaces únicos
**Solución:** Actualizar o eliminar el enlace.

---

## Archivos Limpios

<details>
<summary>Ver {Z} archivos sin problemas</summary>

- {archivo1}
- {archivo2}

</details>

---

## Recomendaciones

1. {Recomendación general si aplica}
```

---

## Ejemplos de Uso

**Escanear todo:**
```
/lint-markdown
```

**Escanear archivo específico:**
```
/lint-markdown curriculum/class-01/lab/README.md
```

**Escanear carpeta específica:**
```
/lint-markdown curriculum/class-04/
```

**Corregir automáticamente:**
```
/lint-markdown --fix
```

---

## Restricciones

- NO modificar enlaces internos (anclas, rutas relativas)
- NO modificar enlaces en bloques de código (``` o `)
- Preservar cualquier otro atributo Kramdown existente
- En modo reporte (sin `--fix`), no modificar archivos
- Reportar línea exacta del error
- Distinguir entre errores críticos (404) y warnings (target)
- Siempre verificar build de GitHub Pages después de cambios
- Los enlaces a herramientas externas pueden cambiar frecuentemente - revisar periódicamente
