// --- Condicionales
const clima = "frío"; // Cambia este valor para probar: "lluvia", "sol", "frío"

if (clima === "lluvia") {
  console.log("Lleva un paraguas.");
} else if (clima === "sol") {
  console.log("Usa gafas de sol.");
} else if (clima === "frío") {
  console.log("Ponte una chaqueta.");
} else {
  console.log("Clima desconocido, prepárate para cualquier cosa.");
}

// Usando operador ternario
const decision =
  clima === "lluvia" ? "Lleva un paraguas." :
    clima === "sol" ? "Usa gafas de sol." :
      clima === "frío" ? "Ponte una chaqueta." :
        "Clima desconocido, prepárate para cualquier cosa.";

console.log(decision);

// Usando switch
switch (clima) {
  case "lluvia":
    console.log("Lleva un paraguas.");
    break;
  case "sol":
    console.log("Usa gafas de sol.");
    break;
  case "frío":
    console.log("Ponte una chaqueta.");
    break;
  default:
    console.log("Clima desconocido, prepárate para cualquier cosa.");
}

// --- Arreglos
const ropa = ["camiseta", "pantalón", "calcetines"];
console.log(ropa[0]); // "camiseta"
console.log(ropa[2]); // "calcetines"

ropa.push("chaqueta"); // Agrega al final
console.log(ropa); // ["camiseta", "pantalón", "calcetines", "chaqueta"]

ropa.pop(); // Elimina el último
console.log(ropa); // ["camiseta", "pantalón", "calcetines"]

console.log(ropa.indexOf("pantalón")); // 1 (posición)
console.log(ropa.includes("chaqueta")); // false (no está en el arreglo)

// --- Bucles
const invitados = ["Ana", "Luis", "Carlos", "María"];

// Usando un bucle for
for (let i = 0; i < invitados.length; i++) {
    console.log(`Hola, ${invitados[i]}!`);
}

// Usando un bucle for...of
for (const invitado of invitados) {
    console.log(`Bienvenido/a, ${invitado}!`);
}

// Usando un bucle while
let index = 0;
while (index < invitados.length) {
    console.log(`Es un placer verte, ${invitados[index]}!`);
    index++;
}
