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


// Display the forecast as five cards.
function displayForecast(data) {
    // Clear the previous forecast before adding new cards.
    forecastCardsEl.innerHTML = "";

    const dailyData = filterDailyForecast(data.list);

    dailyData.forEach(function(day) {
        const date = new Date(day.dt * 1000);

        // Get a short day name, such as Mon or Tue.
        const dayName = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        const { icon, description } = day.weather[0];
        const tempHigh = Math.round(day.main.temp_max);
        const tempLow = Math.round(day.main.temp_min);

        // Create a new card for this day.
        const card = document.createElement("div");
        card.className = "forecast-card";

        // Add the day, icon, and temperatures to the card.
        card.innerHTML = `
            <div class="day">${dayName}</div>
            <img
                src="https://openweathermap.org/img/wn/${icon}@2x.png"
                alt="${description}"
            >
            <div class="temp-high">${tempHigh}°C</div>
            <div class="temp-low">${tempLow}°C</div>
        `;

        // Put the card inside the forecast section.
        forecastCardsEl.appendChild(card);
    });
}

// Keep one forecast entry for each calendar day.
function filterDailyForecast(list) {
    const days = {};

    list.forEach(function(item) {
        // Convert the API timestamp into a date.
        const date = new Date(item.dt * 1000);
        const dateKey = date.toLocaleDateString("en-CA");

        // Keep the first entry we find for each date.
        if (!days[dateKey]) {
            days[dateKey] = item;
        }
    });

    // Convert the dates into an array.
    const allDays = Object.values(days);

    // Skip today and return up to the next five dates.
    return allDays.slice(1, 6);
}
