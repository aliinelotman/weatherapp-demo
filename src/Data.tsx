import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

interface HourlyData {
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
}

interface WeatherData {
  hourly: HourlyData;
}

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.open-meteo.com/v1/forecast?latitude=58.377098&longitude=26.718277&hourly=temperature_2m,apparent_temperature&timezone=Europe%2FBerlin')
      .then((response) => response.json())
      .then((data: WeatherData) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Hourly Weather Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : weatherData ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Time</th>
              <th>Temperature (°C)</th>
              <th>Apparent Temperature (°C)</th>
            </tr>
          </thead>
          <tbody>
            {weatherData.hourly.time.map((time, index) => (
              <tr key={index}>
                <td>{time}</td>
                <td>{weatherData.hourly.temperature_2m[index]}</td>
                <td>{weatherData.hourly.apparent_temperature[index]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default App;
