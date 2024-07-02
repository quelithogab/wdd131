   // JavaScript to dynamically populate the current year
   document.getElementById('currentyear').textContent = new Date().getFullYear();

   // JavaScript to dynamically populate the last modified date
   document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;


// script.js
const apiKey = '67ab91ce2316c9e9cb76fbc0f7b4ab72'; // Replace with your actual API key
const city = 'Haiti'; // Replace with the desired city name
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
