# Clase 201-04: Frameworks CSS Modernos

## Enter Tech School

---

## Agenda

- ¿Qué es React?
- Componentes y JSX
- Estado y Propiedades
- Ejercicio Práctico

---

## ¿Qué es React?

- Biblioteca JavaScript para construir interfaces de usuario
- Desarrollada por Facebook (ahora Meta)
- Basada en componentes reutilizables

--

### Ventajas de React

- Virtual DOM para renderizado eficiente
- Flujo de datos unidireccional
- Gran ecosistema y comunidad
- Compatible con otras bibliotecas/frameworks

---

## Componentes y JSX

```jsx
// Un componente funcional simple
function Saludo(props) {
  return <h1>¡Hola, {props.nombre}!</h1>;
}

// Uso del componente
<Saludo nombre="Estudiante" />
```

--

### Tipos de componentes

1. **Componentes funcionales**:
   - Más simples y modernos
   - Usan Hooks para estado y efectos

2. **Componentes de clase**:
   - Tradicionales
   - Métodos de ciclo de vida

---

## Estado y Props

- **Props**: Datos pasados de un componente padre a hijo
- **Estado**: Datos gestionados dentro del componente

--

### Ejemplo de Estado (Hooks)

```jsx
import React, { useState } from 'react';

function Contador() {
  // Declara una variable de estado llamada "contador"
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Haz clic
      </button>
    </div>
  );
}
```

---

## Ejercicio Práctico

Crear un componente `TarjetaUsuario` que:

1. Reciba props para nombre, email y avatar
2. Tenga un estado para "mostrar detalles"
3. Muestre u oculte el email al hacer clic

--

### Solución

```jsx
function TarjetaUsuario({ nombre, email, avatar }) {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  
  return (
    <div className="tarjeta">
      <img src={avatar} alt={nombre} />
      <h3>{nombre}</h3>
      
      {mostrarDetalles && <p>{email}</p>}
      
      <button onClick={() => setMostrarDetalles(!mostrarDetalles)}>
        {mostrarDetalles ? 'Ocultar detalles' : 'Mostrar detalles'}
      </button>
    </div>
  );
}
```

---

## Recursos Adicionales

- [Documentación oficial de React](https://reactjs.org/)
- [Tutorial de React](https://reactjs.org/tutorial/tutorial.html)
- [Create React App](https://create-react-app.dev/)

---

# ¡Gracias!

## ¿Preguntas?