function Product(name, price, stock) {
	// Validaciones
	if (!name || name.trim() === "") {
		throw new Error("El nombre es requerido");
	}
	if (typeof price !== "number" || price <= 0) {
		throw new Error("El precio debe ser un número positivo");
	}
	if (typeof stock !== "number" || stock < 0) {
		throw new Error("El stock debe ser un número no negativo");
	}

	// Propiedades
	this.id = Date.now();
	this.name = name.trim();
	this.price = price;
	this.stock = stock;
	this.createdAt = new Date();
}

Product.prototype.updateStock = function (quantity) {
	const newStock = this.stock + quantity;
	if (newStock < 0) {
		throw new Error("Stock insuficiente");
	}
	this.stock = newStock;
};

Product.prototype.getFormattedPrice = function () {
	return `S/ ${this.price.toFixed(2)}`;
};

Product.prototype.getProductInfo = function () {
	return `${this.name} - ${this.getFormattedPrice()} (Stock: ${this.stock})`;
};

Product.prototype.renderUI = function () {
	const li = document.createElement("li");
	li.className = "list-group-item d-flex justify-content-between align-items-center";
	li.innerHTML = `
        <span>${this.getProductInfo()}</span>
        <div class="btn-group">
            <button class="btn btn-sm btn-success" onclick="handleUpdateProduct(${this.id}, 1)">+</button>
            <button class="btn btn-sm btn-danger" onclick="handleUpdateProduct(${this.id}, -1)">-</button>
        </div>
    `;
	return li;
};
