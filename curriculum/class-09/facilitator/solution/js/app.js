// Almacenamiento de datos
let products = [];
let customers = [];

// Handlers para productos
function handleNewProduct(event) {
	event.preventDefault();
	const form = event.target;

	try {
		const product = new Product(form.productName.value, parseFloat(form.productPrice.value), parseInt(form.productStock.value));

		products.push(product);
		updateProductsList();
		form.reset();
	} catch (error) {
		alert(error.message);
	}
}

function handleUpdateProduct(productId, change) {
	const product = products.find((p) => p.id === productId);
	if (!product) return;

	try {
		product.updateStock(change);
		updateProductsList();
	} catch (error) {
		alert(error.message);
	}
}

// Handlers para clientes
function handleNewCustomer(event) {
	event.preventDefault();
	const form = event.target;

	try {
		const customer = new Customer(form.customerName.value, form.customerEmail.value);

		customers.push(customer);
		updateCustomersList();
		form.reset();
	} catch (error) {
		alert(error.message);
	}
}

function handleUpdateEmail(event, customerId) {
	event.preventDefault();

	const form = event.target;
	const newEmail = form.querySelector('input[type="email"]').value;
	const customer = customers.find((c) => c.id === customerId);

	if (!customer) return;

	try {
		customer.updateEmail(newEmail);
		updateCustomersList();

		// Opcional: Mostrar mensaje de éxito usando un toast de Bootstrap
		const toast = new bootstrap.Toast(
			Object.assign(document.createElement("div"), {
				className: "toast position-fixed bottom-0 end-0 m-3",
				innerHTML: `
                <div class="toast-body">
                    Email actualizado correctamente
                </div>
            `,
			})
		);
		document.body.appendChild(toast._element);
		toast.show();
		setTimeout(() => toast._element.remove(), 3000);
	} catch (error) {
		alert(error.message);
	}
}

// Funciones de actualización UI
function updateProductsList() {
	const list = document.getElementById("products-list");
	list.innerHTML = "";
	products.forEach((product) => {
		list.appendChild(product.renderUI());
	});
}

function updateCustomersList() {
	const list = document.getElementById("customers-list");
	list.innerHTML = "";
	customers.forEach((customer) => {
		list.appendChild(customer.renderUI());
	});
}

// Event Listeners
document.getElementById("product-form").addEventListener("submit", handleNewProduct);
document.getElementById("customer-form").addEventListener("submit", handleNewCustomer);
