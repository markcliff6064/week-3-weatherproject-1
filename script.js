// OpenWeatherMap API settings
// Put your own API key inside the quotes.
const API_KEY ="717e9d114fc2da1a8ab7bcbeb8a202f3";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Get the HTML elements that JavaScript will update.
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const searchHistoryContainer = document.getElementById("search-history");

const loadingEl = document.getElementById("loading");
const errorMessageEl = document.getElementById("error-message");
const errorTextEl = document.getElementById("error-text");
const weatherDisplay = document.getElementById("weather-display");

const cityNameEl = document.getElementById("city-name");
const temperatureEl = document.getElementById("temperature");
const weatherIconEl = document.getElementById("weather-icon");
const descriptionEl = document.getElementById("description");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const feelsLikeEl = document.getElementById("feels-like");
const forecastCardsEl = document.getElementById("forecast-cards");

// Display the current weather details.

function displayCurrentWeather(data) {
    // Destructuring lets us get values from the API response.
    const { name } = data;
    const { temp, feels_like, humidity } = data.main;
    const { description, icon } = data.weather[0];
    const { speed } = data.wind;

    cityNameEl.textContent = name;
    temperatureEl.textContent = `${Math.round(temp)}°C`;
    descriptionEl.textContent = description;

    // Load the weather icon from OpenWeatherMap.
    weatherIconEl.src =
        `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIconEl.alt = description;

    humidityEl.textContent = `${humidity}%`;
    windEl.textContent = `${speed} m/s`;
    feelsLikeEl.textContent = `${Math.round(feels_like)}°C`;
}