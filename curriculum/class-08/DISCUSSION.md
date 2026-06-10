# Lectura y Debate 08

## 🎯 Objetivos de la Lectura y el Debate
Debatir en esta sesión te permitirá analizar críticamente el enfoque **utility-first** de Tailwind CSS frente al CSS que escribiste a mano en M1. Comprenderás qué es una **clase-propiedad** y un **prefijo-modificador**, por qué Tailwind es **mobile-first**, y cuándo conviene (o no) este enfoque. El debate te ayudará a entender que Tailwind no reemplaza saber CSS — lo acelera.

## 🔑 Conceptos Clave a profundizar
- **Utility-first:** componer el diseño con muchas clases pequeñas en el HTML, en vez de escribir reglas en un archivo `.css`. Cada clase equivale a una propiedad CSS que ya conoces de M1.
- **Clase-propiedad vs prefijo-modificador:** una clase = una propiedad (`p-4`, `bg-white`); un prefijo (`hover:`, `md:`) hace que una clase aplique bajo una condición.
- **Mobile-first:** las clases base aplican a móvil; los prefijos `md:`/`lg:` agregan estilos para pantallas grandes.

## 📚 Artículos recomendados para leer
- [Tailwind CSS — Utility-First Fundamentals](https://tailwindcss.com/docs/utility-first){:target="_blank"}

- [Tailwind CSS — Responsive Design](https://tailwindcss.com/docs/responsive-design){:target="_blank"}

- [Tailwind CSS — Hover, Focus & Other States](https://tailwindcss.com/docs/hover-focus-and-other-states){:target="_blank"}

## ☑️ Lista de Mitos y Verdades para Analizar
1. "Usar Tailwind significa que ya no necesitas entender CSS."

2. "Una clase de Tailwind como `text-center` equivale exactamente a una propiedad CSS (`text-align: center`)."

3. "Escribir muchas clases en el HTML es siempre peor que tener un archivo `.css` separado."

4. "El prefijo `md:` es una media query escrita en notación corta; sin él, la clase aplica desde móvil."

5. "Tailwind necesita obligatoriamente `npm` y un paso de compilación para funcionar."

> **Instrucción:** Identifica cuáles de las afirmaciones anteriores consideras mitos y cuáles verdades, y prepárate para justificar tus respuestas con evidencia de las lecturas recomendadas o basándote en lo que ya sabes de CSS desde M1.
