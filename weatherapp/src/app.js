const apiKey = '3b7fa0ce94a6d300d3dee878eed6fa3e'; // Replace with your OpenWeatherMap API key
const city = 'Malmö';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const apiUrl_2 = 'https://api.openweathermap.org/data/2.5/weather?q=Malmö,se&APPID=3b7fa0ce94a6d300d3dee878eed6fa3e'
async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayWeather(data);
        //console.log("data in ", data.weather[0].description);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

  let imagePath = "";

    if (description.includes("sun")) {
      imagePath = "images/sun.jpg";
    }
    else if (description.includes("rain")) {
      imagePath = "images/rain.jpg";
    }
    else if (description.includes("cloud")) {
      imagePath = "images/cloud.jpg";
    }
    else if (description.includes("clear")) {
      imagePath = "images/clear_sky.jpg";
    }
    else {
    imagePath = "images/HD-wallpaper-brown-dog-sitting-cute-animal-brown-dog.jpg"; // Fallback image
    }

    weatherContainer.innerHTML = `
        <!-- <h2>Weather in ${city}</h2> -->
        <p>Temperature: ${parseFloat(temperature).toFixed(2)} °C</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind speed: ${windSpeed} m/s</p>
        <img src="${imagePath}" alt="${description}. A picture of the weather." style="width:200px; height:auto;">
    `;
}

document.addEventListener('DOMContentLoaded', fetchWeather);