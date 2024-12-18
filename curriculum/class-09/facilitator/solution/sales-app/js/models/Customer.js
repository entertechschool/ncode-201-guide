function Customer(name, email) {
	// Validaciones
	if (!name || name.trim() === "") {
		throw new Error("El nombre es requerido");
	}
	if (!email || !email.includes("@")) {
		throw new Error("Email inválido");
	}

	// Propiedades
	this.id = Date.now();
	this.name = name.trim();
	this.email = email.toLowerCase();
	this.totalPurchases = 0;
	this.createdAt = new Date();
}

Customer.prototype.updateEmail = function (email) {
	if (!email || !email.includes("@")) {
		throw new Error("Email inválido");
	}
	this.email = email.toLowerCase();
};

Customer.prototype.renderUI = function () {
	const li = document.createElement("li");
	li.className = "list-group-item";
	li.innerHTML = `
        <div class="accordion" id="accordion-${this.id}">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h6 class="mb-0">${this.name}</h6>
                    <small class="text-muted">${this.email}</small>
                </div>
                <div>
                    <span class="badge bg-primary rounded-pill me-2">
                        ${this.totalPurchases} compras
                    </span>
                    <button class="btn btn-sm btn-outline-primary" 
                            type="button"
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse-${this.id}">
                        Editar Email
                    </button>
                </div>
            </div>
            
            <div id="collapse-${this.id}" class="collapse mt-3" data-bs-parent="#accordion-${this.id}">
                <form onsubmit="handleUpdateEmail(event, ${this.id})" class="d-flex gap-2">
                    <input type="email" 
                           class="form-control form-control-sm" 
                           placeholder="Nuevo email"
                           value="${this.email}"
                           required>
                    <button type="submit" class="btn btn-sm btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    `;
	return li;
};
