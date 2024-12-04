// Arreglo para almacenar las transacciones
let transacciones = [];

// Elementos del DOM
const form = document.getElementById("transactionForm");
const lista = document.getElementById("transactionList");
const balanceElement = document.getElementById("balance");
const montoInput = document.getElementById("monto");
const montoError = document.getElementById("montoError");
const sortButton = document.getElementById("sortAmount");
let sortAscending = true;

// Función para validar el monto
function validarMonto(monto) {
	if (isNaN(monto) || monto <= 0) {
		montoError.textContent = "Por favor ingrese un monto válido mayor a 0";
		return false;
	}
	montoError.textContent = "";
	return true;
}

// Función para registrar una transacción
function registrarTransaccion(tipo, monto) {
	const transaccion = {
		tipo: tipo,
		monto: parseFloat(monto),
		fecha: new Date(),
	};

	transacciones.push(transaccion);
	actualizarUI();
}

// Función para calcular el balance
function calcularBalance() {
	return transacciones.reduce((total, transaccion) => {
		return transaccion.tipo === "ingreso" ? total + transaccion.monto : total - transaccion.monto;
	}, 0);
}

// Función para ordenar transacciones
function ordenarTransacciones() {
	transacciones.sort((a, b) => {
		return sortAscending ? a.monto - b.monto : b.monto - a.monto;
	});
	sortAscending = !sortAscending;
	actualizarUI();
}

// Función para mostrar las transacciones
function mostrarTransacciones() {
	lista.innerHTML = "";

	transacciones.forEach((transaccion) => {
		const li = document.createElement("li");
		li.className = `transaction-item ${transaccion.tipo}`;

		const fecha = transaccion.fecha.toLocaleDateString();
		const signo = transaccion.tipo === "ingreso" ? "+" : "-";

		li.innerHTML = `
            <span>${fecha}</span>
            <span>${signo}$${transaccion.monto.toFixed(2)}</span>
        `;

		lista.appendChild(li);
	});
}

// Función para actualizar la interfaz
function actualizarUI() {
	mostrarTransacciones();
	const balance = calcularBalance();
	balanceElement.textContent = `$${balance.toFixed(2)}`;
	balanceElement.className = balance >= 0 ? "ingreso" : "gasto";
}

// Event Listeners
form.addEventListener("submit", (e) => {
	e.preventDefault();

	const monto = montoInput.value;
	const tipo = document.getElementById("tipo").value;

	if (validarMonto(monto)) {
		registrarTransaccion(tipo, monto);
		form.reset();
	}
});

sortButton.addEventListener("click", ordenarTransacciones);

// Inicialización
actualizarUI();
