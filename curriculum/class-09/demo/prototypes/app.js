// Modelo:
// forma: [estrella: 5, triangulo: 3, hexagono: 6, circulo: 0]
function MoldeGalleta(sabor, forma = "estrella") {
	this.sabor = sabor;
	this.forma = forma;
}

MoldeGalleta.prototype.puntas = function () {
	switch (this.forma) {
		case "circulo":
			return 0;
		case "triangulo":
			return 3;
		case "estrella":
			return 5;
		case "hexagono":
			return 6;
		default:
			null;
	}
};
// Estas permitiendo a todas las instancias, acceder a ".puntas".

// Instancias:
const galleta1 = new MoldeGalleta("chocolate");
const galleta2 = new MoldeGalleta("vainilla");

// Modelos:
function Camiseta(color, tipoCuello) {
	this.color = color;
	this.tipoCuello = tipoCuello;
}

Camiseta.prototype.cuello = function () {
	return this.tipoCuello.slice(-1).toUpperCase();
};

// Crear una función "cuello" en el prototipo Camiseta para que devuelva:
// una letra mayúscula que represente el tipo de cuello (V, O, U)

const camisetaAlianza = new Camiseta("azul", "tipo v");
console.log(camisetaAlianza.cuello()) // "V"

// Los modelos nos permiten crear Instancias.
// new -> palabra reservada para instanciar.
// const camisetaAlianza = new Camiseta("azul", "tipo v");
const camisetaCristal = new Camiseta("celeste", "tipo o");
const camisetaUniversitario = new Camiseta("crema", "tipo u");
