import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeather } from './services/weatherService';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    try {
      const data = await fetchWeather(city);
      console.log("worked");
      setWeatherData(data);
    } catch (err) {
      setError('City not found or API error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Comp3123 - Weather App</h1>
        <Search onSearch={handleSearch} />
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {weatherData && <WeatherDisplay weather={weatherData} />}
      </div>
    </div>
  );
}

export default App;
