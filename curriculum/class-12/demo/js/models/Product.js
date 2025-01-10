function Product(name, price, stock) {
    this.id = Date.now();
    this.name = name;
    this.price = Number(price);
    this.stock = Number(stock);
    this.createdAt = new Date();
}

Product.prototype.getFormattedPrice = function() {
    return `S/ ${this.price.toFixed(2)}`;
};

Product.prototype.updateStock = function(quantity) {
    const newStock = this.stock + Number(quantity);
    if (newStock >= 0) {
        this.stock = newStock;
        return true;
    }
    return false;
};

Product.prototype.toTableRow = function() {
    return `
        <tr data-id="${this.id}">
            <td data-name>${this.name}</td>
            <td data-price>${this.getFormattedPrice()}</td>
            <td data-stock>${this.stock}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" 
                        onclick="editProduct(${this.id})">
                    Editar
                </button>
                <button class="btn btn-sm btn-outline-danger"
                        onclick="deleteProduct(${this.id})">
                    Eliminar
                </button>
            </td>
        </tr>
    `;
};