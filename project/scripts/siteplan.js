// JavaScript to dynamically populate the current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// JavaScript to dynamically populate the last modified date
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

//Menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggleMenuButton();
    });

    function toggleMenuButton() {
        menuToggle.classList.toggle('open');
    }
});


// The weather
const apiKey = '67ab91ce2316c9e9cb76fbc0f7b4ab72'; 
const city = 'Haiti'; 
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Function to calculate wind chill factor in metric units
function calculateWindChill(temp, wind) {
    // Wind chill calculation for metric (Celsius and m/s)
    return temp - wind;
}

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const temperature = data.main.temp;
        const windSpeed = data.wind.speed;
        const conditions = data.weather[0].description;

        // Display temperature, wind speed, and conditions
        document.getElementById('temperature').textContent = `${temperature.toFixed(2)}°C`;
        document.getElementById('windSpeed').textContent = `${windSpeed.toFixed(2)} m/s`;
        document.getElementById('Conditions').textContent = conditions.charAt(0).toUpperCase() + conditions.slice(1);

        // Calculate and display wind chill factor
        const windChillFactor = calculateWindChill(temperature, windSpeed);
        document.getElementById('windChill').textContent = `${windChillFactor.toFixed(2)}°C`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('temperature').textContent = 'N/A';
        document.getElementById('windSpeed').textContent = 'N/A';
        document.getElementById('Conditions').textContent = 'N/A';
        document.getElementById('windChill').textContent = 'N/A';
    }
}

// Fetch and display weather data when the page loads
document.addEventListener('DOMContentLoaded', fetchWeatherData);


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
        alert('Have a nice day!');
        cart = [];
        displayCart();
    }
}

// Array
const purposes = [
    {
      id: 'po-1908',
      name: 'Products Order',
      avg_rating: 4.3
    },
    {
      id: 'ws-2100',
      name: 'Website Suggestion',
      avg_rating: 3.0
    },
    {
      id: 'rq-1987',
      name: 'Reservation Question',
      avg_rating: 2.1
    },
    {
      id: 'qp-2000',
      name: 'Quality of our products',
      avg_rating: 5.0
    },
  ];

  // Populate product options dynamically
  const purposeSelect = document.getElementById('purposeMessage');
  purposes.forEach(purposes => {
    const option = document.createElement('option');
    option.value = purposes.id;
    option.textContent = purposes.name;
    purposeSelect.appendChild(option);
  });


  // Increment review counter in localStorage on form submission
  document.querySelector('form').addEventListener('submit', function() {
    if (localStorage.getItem('reviewCount')) {
      localStorage.setItem('reviewCount', parseInt(localStorage.getItem('reviewCount')) + 1);
    } else {
      localStorage.setItem('reviewCount', 1);
    }
  });

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formResponse = document.getElementById('formResponse');

    formResponse.innerHTML = `<p>Thank you, ${name}. Your message has been sent!</p>`;
    document.getElementById('submit_contact').reset();
}
