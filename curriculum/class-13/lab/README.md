# Laboratorio 13: Animaciones CSS en el Vote Tracker 🎯

## Descripción
En este laboratorio, iniciarás el desarrollo de una aplicación de votación (Vote Tracker) de productos de tecnología. Implementarás el layout de la interfaz y las animaciones CSS para mejorar la experiencia del usuario. Aprenderás a usar pseudo-selectores y transiciones mientras construyes una interfaz interactiva y atractiva.

**Esta laboratorio se centra en la interfaz. En los siguientes laboratorios, te centrarás en las funcionalidades y la persistencia de datos**.

## 🎯 Objetivos de Aprendizaje
- Implementar animaciones CSS usando pseudo-selectores y transiciones
- Utilizar IA para generar y entender código CSS más complejo
- Crear interfaces interactivas que respondan al comportamiento del usuario

## 🚀 Setup Inicial

### 1. Preparación del Repositorio:
- Crea un nuevo repositorio con el nombre `vote-tracker`
- Clona el repositorio en tu local:
```bash
git clone [URL_REPOSITORIO]
cd vote-tracker
git checkout -b lab-13-animations
```

### 2. Estructura de Archivos
```
vote-tracker/
├── index.html
├── stats.html
├── css/
│   ├── reset.css
│   └── styles.css
├── js/
│   ├── app.js
│   └── Product.js
└── README.md
```

### 3. Layout
- Utiliza una herramienta de IA para generar una interfaz responsiva con estas características:
    - header: 10% del viewport
        - Logo + navbar (Productos, Estadísticas)
    - body: 80% del viewport
        - Contenedor que envolverá a los productos que van a aparecer
        - Distribución en columna hasta 400px, luego en fila
    - footer: 10% del viewport

### 4. Recursos
- [Logo Vote Tracker](./assets/vote_tracker_logo.png){:target="_blank"}
- [JSON de Productos](./assets/products.json){:target="_blank"}

**Productos de muestra:**
- [game_boy_color.png](./assets/game_boy_color.png){:target="_blank"}
- [ipod_classic.png](./assets/ipod_classic.png){:target="_blank"}
- [playstation_2.png](./assets/playstation_2.png){:target="_blank"}

## 📋 Historias de Usuario

### HU1: Visualización de Productos
Como usuario, necesito ver dos productos lado a lado para poder compararlos y elegir mi favorito:
- Ver imágenes de igual tamaño
- Tener indicadores visuales al pasar el mouse sobre cada producto
- Ver una animación suave al seleccionar un producto

### HU2: Feedback Visual
Como usuario, necesito feedback visual claro cuando interactúo con la aplicación:
- Ver cuál producto está seleccionado
- Recibir confirmación visual al registrar mi voto
- Ver transiciones suaves entre diferentes estados de la interfaz

## 🛠️ Requerimientos Técnicos

### CSS
1. Implementar al menos 3 pseudo-selectores diferentes:
   - `:hover` para efectos al pasar el mouse
   - `:active` para el estado de click
   - `:nth-child()` para estilos alternados

2. Crear transiciones para:
   - Cambios de tamaño
   - Cambios de opacidad
   - Transformaciones (scale, etc)

3. Usar variables CSS para:
   - Colores principales
   - Tiempos de transición
   - Valores de transformación

### JavaScript
1. Agregar/remover clases para:
   - Marcar elementos seleccionados
   - Activar animaciones
   - Gestionar estados de la interfaz

### Prompt Engineering
Desarrollar prompts efectivos para:
- Generar código CSS para animaciones específicas
- Entender mejores prácticas de transiciones
- Debuggear problemas de animación

## 🎨 Guía de Estilos

### Variables CSS Requeridas
```css
:root {
  /* Colores */
  --primary-color: ...
  --secondary-color: ...
  --accent-color: ...

  /* Transiciones */
  --transition-fast: ...
  --transition-normal: ...
  --transition-slow: ...
}
```

### Elementos a Animar
1. Contenedores de productos
2. Botones de votación
3. Mensajes de feedback
4. Contador de los ciclos

## 🌟 Logros Adicionales
1. Implementar animaciones personalizadas con @keyframes
2. Crear un modo oscuro

## 📝 Instrucciones de Envío
1. Actualiza el README.md con:
   - Descripción del proyecto
   - Los valores de tus variables CSS
   - La imagen del wireframe de tu layout (laptop y celular)

2. Crea un Pull Request que incluya:
   - Todos los cambios en la rama lab-13-animations

3. Despliega en GitHub Pages

4. Entrega:
   - URL del repositorio
   - URL del sitio desplegado
   - URL del Pull Request


