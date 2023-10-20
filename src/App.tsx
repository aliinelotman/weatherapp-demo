import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home.tsx';
import WeatherGraph from './WeatherGraph.tsx';
import Navigationbar from './Navigationbar.tsx';

function App() {
  const [weatherData, setWeatherData] = useState<number[]>([]);

  useEffect(() => {
    fetchWeatherData()
      .then((data) => {
        // Extract 'temperature_2m' data 
        const temperature2mData = data.hourly.temperature_2m;
        if (Array.isArray(temperature2mData) && temperature2mData.length > 0) {
          setWeatherData(temperature2mData);
        } else {
          console.error('Invalid or empty temperature data.');
        }
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  // Fetch data from the API
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=58.377098&longitude=26.718277&hourly=temperature_2m&timezone=Europe%2FBerlin'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return { hourly: { temperature_2m: [] } };
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="weathergraph" element={<WeatherGraph data={weatherData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
