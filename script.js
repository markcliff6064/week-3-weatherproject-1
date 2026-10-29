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