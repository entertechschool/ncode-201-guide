function validarMonto(monto) {
	// Convierte a número y valida
	const numero = parseFloat(monto);

	if (isNaN(numero)) {
		throw new Error("El monto debe ser un número válido");
	}

	if (numero <= 0) {
		throw new Error("El monto debe ser mayor a 0");
	}

	return numero;
}

function validarTipo(tipo) {
	const tiposValidos = ["ingreso", "gasto"];

	if (!tiposValidos.includes(tipo)) {
		throw new Error("Tipo de transacción inválido");
	}

	return tipo;
}
