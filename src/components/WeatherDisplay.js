import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherDetails, wind } = weather;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-info">
        <img src={iconUrl} alt={weatherDetails[0].description} />
        <p className="temperature">{Math.round(main.temp)}°C</p>
        <p>Feels Like: {Math.round(main.feels_like)}°C</p>
        <p className="description">{weatherDetails[0].description}</p>
      </div>
      <div className="details">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
