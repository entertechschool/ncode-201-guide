// Calcula el balance total de las transacciones
function calcularBalance(transacciones) {
	return transacciones.reduce(function (total, transaccion) {
		if (transaccion.tipo === "ingreso") {
			return total + transaccion.monto;
		} else {
			return total - transaccion.monto;
		}
	}, 0);
}

// Determina la clase CSS según el monto del balance
function getBalanceClass(balance) {
	if (balance <= 500) {
		return "low-balance";
	}
	if (balance <= 1000) {
		return "regular-balance";
	}
	return "extra-balance";
}

// Formatea el monto a moneda
function formatearMonto(monto, moneda = "S/ ") {
	// Convierte el número a string con 2 decimales
	const numeroFormateado = Number(monto).toFixed(2);

	// Agrega la moneda al inicio
	return moneda + numeroFormateado;
}
