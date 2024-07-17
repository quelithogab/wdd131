// JavaScript to dynamically populate the current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// JavaScript to dynamically populate the last modified date
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

let cart = [];

function addToCart(product, price, quantity) {
    quantity = parseInt(quantity);
    cart.push({ product, price, quantity });
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartDiv.innerHTML += `<p>${item.product} - $${item.price} x ${item.quantity} = $${item.price * item.quantity} <button onclick="removeFromCart(${index})">Remove</button></p>`;
    });
    cartDiv.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your order!');
        cart = [];
        displayCart();
    }
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formResponse = document.getElementById('formResponse');

    // Here you would typically send the form data to a server
    // For this example, we just display a message
    formResponse.innerHTML = `<p>Thank you, ${name}. Your message has been sent!</p>`;
    document.getElementById('contactForm').reset();
}
