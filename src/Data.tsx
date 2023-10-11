import axios from 'axios';

export async function fetchWeatherData() {
  try {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=58.3806&longitude=26.7251&hourly=temperature_2m,apparent_temperature,precipitation_probability,cloudcover&daily=sunrise,sunset,uv_index_max&timezone=Europe%2FBerlin');
    const weatherData = response.data;
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
