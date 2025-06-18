# Clase 04 – Frameworks CSS Modernos

## 🎯 Objetivo General

Explorar y aplicar frameworks CSS modernos como **Bootstrap** y **Tailwind CSS** para agilizar la creación de interfaces visuales en el proyecto de la Landing Page.

---

## 💡 ¿Por qué usar Frameworks CSS?

* Aceleran el desarrollo usando componentes preconstruidos.
* Garantizan consistencia visual sin escribir todo desde cero.
* Permiten enfocarse en estructura y accesibilidad.

> "Los frameworks CSS son como tener una caja de herramientas lista: solo necesitas ensamblar las piezas."

---

## 🛠️ Bootstrap vs Tailwind

| Característica       | Bootstrap                    | Tailwind CSS                    |
| -------------------- | ---------------------------- | ------------------------------- |
| Estilo               | Prediseñado                  | Altamente personalizable        |
| Filosofía            | Componentes listos para usar | Utilidades que componen estilos |
| Curva de aprendizaje | Más suave para principiantes | Requiere conocer muchas clases  |
| Flexibilidad         | Limitada sin sobrescribir    | Alta, desde el HTML             |

---

## 🔢 Parte 1: Bootstrap y Rama `bootstrap`

### Componente: Tarjeta de Producto

```html
<div class="card" style="width: 18rem;">
  <img src="img/producto.jpg" class="card-img-top" alt="Imagen del producto">
  <div class="card-body">
    <h5 class="card-title">Producto Destacado</h5>
    <p class="card-text">Descripción breve del producto.</p>
    <a href="#" class="btn btn-primary">Comprar ahora</a>
  </div>
</div>
```

> Tip: Copia componentes desde [getbootstrap.com](https://getbootstrap.com) y adáptalos a tu proyecto.

---

## 🔢 Parte 2: Tailwind CSS en la Rama `tailwind`

### Componente: Testimonio

```html
<div class="bg-white p-6 rounded-lg shadow-md max-w-sm">
  <h2 class="text-xl font-bold mb-2">Testimonio</h2>
  <p class="text-gray-700">“Este producto superó mis expectativas.”</p>
  <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Leer más
  </button>
</div>
```

> Tip: Usa clases como bloques de Lego. La documentación en [tailwindcss.com/docs](https://tailwindcss.com/docs) te muestra todo lo que puedes construir.

---

## 📂 Parte 3: Ramas y Pull Requests

1. Sube ambas ramas:

```bash
git push origin bootstrap
git push origin tailwind
```

2. Crea un Pull Request de `bootstrap` a `main`. Revisa, comenta y fusiona.

3. Luego, cambia a `main` y crea un Pull Request desde `tailwind`. Revisa conflictos o solicita ayuda si es necesario.

```bash
git checkout main
git pull origin main
```

> Tip: Siempre sincroniza tu rama `main` antes de comenzar una nueva para evitar conflictos más adelante.

---

## 🤔 Discusión Final

* ¿Qué diferencias notaste entre Bootstrap y Tailwind?
* ¿Con cuál te sentiste más cómodo al estilizar?
* ¿Qué parte del trabajo con ramas en Git te pareció más desafiante?

> **Reflexiones:**
>
> * ¿Cuál framework usarías en tu próximo proyecto y por qué?
> * ¿Qué superpoder visual sentiste que ganaste hoy?
