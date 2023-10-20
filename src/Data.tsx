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

const Data: React.FC = () => {
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
      <h3>Jahedus igal tunnil täna:</h3>
      {loading ? (
        <p>Laadin...</p>
      ) : weatherData ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Aeg</th>
              <th>Tegelik temperatuur (°C)</th>
              <th>Tajutav jahedus (°C)</th>
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
        <p>Andmed ei ole saadaval.</p>
      )}
      
    </div>
  );
};


export default Data;
