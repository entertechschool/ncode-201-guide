// Variables globales
const form = document.getElementById("transaction-form");
const balanceAmount = document.getElementById("balance-amount");
const transactionsList = document.getElementById("transactions-list");
let transacciones = [];

// Actualizar balance
function actualizarBalance() {
	const balance = calcularBalance(transacciones);
	balanceAmount.textContent = formatearMonto(balance);

	// Actualizar clase según el balance
	balanceAmount.classList.remove("low-balance", "regular-balance", "extra-balance");
	balanceAmount.classList.add(getBalanceClass(balance));
}

// Actualizar lista de transacciones
function actualizarListaTransacciones() {
	transactionsList.innerHTML = "";
	const fragmento = document.createDocumentFragment();

	transacciones.map(crearElementoTransaccion).forEach(function (elemento) {
		fragmento.appendChild(elemento);
	});

	transactionsList.appendChild(fragmento);
}

// Agregar nueva transacción
function agregarTransaccion(monto, tipo) {
	transacciones.push({
		monto: monto,
		tipo: tipo,
		fecha: new Date(),
	});

	actualizarBalance();
	actualizarListaTransacciones();
}

// Manejador del formulario
function manejarFormulario(event) {
	event.preventDefault();

	try {
		const formData = new FormData(event.target);
		const monto = validarMonto(formData.get("monto"));
		const tipo = validarTipo(formData.get("tipo"));

		agregarTransaccion(monto, tipo);
		event.target.reset();
	} catch (error) {
		alert(error.message);
	}
}

// Inicialización
function inicializar() {
	form.addEventListener("submit", manejarFormulario);
	actualizarBalance();
}

// Iniciar la aplicación
inicializar();
