// Product data
const products = [
    { id: 1, name: "Product 1", price: 29.99, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 19.99, image: "product2.jpg" },
    // Add more products here
];

// Shopping cart
const cart = [];

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsElement = document.querySelector('.cart-items');
    cartItemsElement.innerHTML = '';

    cart.forEach(product => {
        const cartItemElement = document.createElement('li');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="50">
            ${product.name} - $${product.price}
            <button onclick="removeFromCart(${product.id})">Remove</button>
        `;
        cartItemsElement.appendChild(cartItemElement);
    });

    updateTotalPrice();
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    const index = cart.findIndex(p => p.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

// Function to update the total price
function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
    cart.forEach(product => {
        totalPrice += product.price;
    });
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Dynamically add products to the product container
const productContainer = document.querySelector('.product-container');
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productElement);
});

// Initialize the cart
updateCart();