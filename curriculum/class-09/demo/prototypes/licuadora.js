function generateRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Declarar (comprar):
function licuadora(ingredientes) {
	// Desordenar el arreglo:
	const ingredientes_desordenados = [];
	while (ingredientes_desordenados.length < ingredientes.length) {
		const random = generateRandom(0, ingredientes.length - 1);
		console.log(random);
		const randomIngrediente = ingredientes[random];
		if (!ingredientes_desordenados.includes(randomIngrediente)) {
			ingredientes_desordenados.push(randomIngrediente);
		}
	}

	// Convertir en una cadena, separando elementos por un "punto":
	return ingredientes_desordenados.join(".").replaceAll("a", "");
}

// Invocación = Llamada (call) = (usar):
const batido = licuadora(["zanahoria", "naranja", "kion", "agua", "azucar"]);

// Mi amigo necesita una maquina para hacer un batido:
function amigo(maquina) {
	const puertaCasa = prompt("La puerta se abrió?"); // no depende de js.
	if (puertaCasa == "si") {
		setTimeout(() => {
			console.log("");
			const batido = maquina(["manzana", "fresa", "melon", "huevo", "zanahoria", "naranja", "kion", "agua", "azucar"]); // NOTESE que aquí SI coloca paréntesis.
			console.log(batido);
		}, 2000);
	} else {
		console.log("Lo siento, no hay nadie en casa");
	}
}

// Yo le voy a prestar mi licuadora:
console.log("Yo le prestaré mi licuadora");
const ultimoBatido = licuadora(["zanahoria", "naranja", "kion", "agua", "azucar"]);
console.log("Pero antes, haré mi último batido:", ultimoBatido);

amigo(licuadora); // NOTESE: que la presto apagada. Es decir, sin paréntesis.
// Es decir, "amigo" es una función que recibe una función callback, llamada "licuadora"
// la función "amigo" podrá llamar/invocar a la licuadora cuando quiera.
