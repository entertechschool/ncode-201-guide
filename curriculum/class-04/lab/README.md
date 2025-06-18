# Laboratorio 04: Frameworks CSS Modernos

En este laboratorio integrarás **Bootstrap** y **Tailwind CSS** en tu Product Landing Page, aprendiendo a usar componentes y utilidades predefinidas para agilizar tu desarrollo.

### 🎯 Objetivos de Aprendizaje

* Integrar frameworks CSS modernos para estilizar interfaces.
* Aplicar componentes y clases de utilidad.
* Utilizar ramas de Git para organizar el trabajo.

### 🔑 Conceptos Clave

* **Component Class:** Componentes preconstruidos como botones, tarjetas y menús, que aceleran la maquetación.
* **Utility Class:** Clases específicas que permiten aplicar estilos directamente desde HTML.
* **Rama (Branch):** Línea de desarrollo paralela en Git para trabajar sin afectar la versión principal.

---

## Parte 1 – Ramas y Setup de Bootstrap

> Requisitos previos: Tener el repositorio base actualizado.

1. Crea y cámbiate a una rama nueva:

```bash
git checkout -b bootstrap
```

2. Abre `compra.html` y enlaza Bootstrap desde CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

3. Reestructura el layout usando clases de Bootstrap (`container`, `row`, `col`, `card`, `btn`, etc.).

> Tip: Usa los componentes oficiales de Bootstrap desde [getbootstrap.com](https://getbootstrap.com).

🏆 **Reto autónomo:**

* Personaliza los colores del botón principal adaptándolo al branding del producto mediante variables de Bootstrap.

---

## Parte 2 – Tailwind CSS en Landing Page y Testimonios

1. Asegúrate de estar en la rama `main` antes de crear la nueva rama:

```bash
git checkout main
git pull
```

2. Luego crea y cámbiate a la rama:

```bash
git checkout -b tailwind
```

3. Configura Tailwind CSS (usando CDN o instalación simple):

```html
<script src="https://cdn.tailwindcss.com"></script>
```

4. Aplica clases utilitarias en `index.html` y `testimonios.html` para organizar y estilizar la página.

> Tip: Usa la documentación oficial [tailwindcss.com/docs](https://tailwindcss.com/docs) para copiar clases rápidas.

🏆 **Reto autónomo:**

* Aplica una animación sutil en los botones de la sección “Características” y en las tarjetas de testimonios.

---

## Parte 3 – Fusión de ramas y Pull Request

1. Sube ambas ramas al repositorio remoto:

```bash
git push origin bootstrap
git push origin tailwind
```

2. En GitHub, crea un Pull Request desde `bootstrap` hacia `main`.

   * Revísalo, valida los cambios y haz el merge.

3. Luego cambia a `main`, actualízala y crea otro Pull Request desde `tailwind`:

```bash
git checkout main
git pull origin main
```

4. Resuelve cualquier conflicto si aparece, o pide apoyo a tu instructor para completar la fusión.

> Tip: Siempre actualiza tu rama `main` antes de fusionar nuevas ramas para evitar sobrescribir cambios.

🏆 **Reto autónomo:**

* Crea una nueva rama `landing-v2` desde `main` e implementa una mejora visual que hayas aprendido, como reorganizar secciones con clases utilitarias nuevas.

---

## ⭐ Logros Adicionales

### 🏆 Logro 1: Personalización de Bootstrap

* Cambia colores y tipografía mediante variables CSS.

### 🏆 Logro 2: Microinteracciones con Tailwind

* Usa `transition`, `hover`, `ease-in-out`, etc., para enriquecer botones y tarjetas.

---

## 📝 Instrucciones de Entrega

* Actualiza el README incluyendo:
  * Qué framework te resultó más cómodo y por qué.
  * Comandos usados para trabajar con ramas.
* Publica el proyecto actualizado en GitHub Pages.
* Entrega:
  * URL del repositorio
  * URL del despliegue en GitHub Pages
