import { useState } from 'react';

const WeatherApp = () => {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState(null);
  const apiKey = 'b1d0579d30c58c38b4ab1543c5044ebe';

  const fetchWeather = async () => {
    if (!search.trim()) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🌦️ Weather Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '10px', width: '200px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Search</button>
      </form>

      {weather && weather.main ? (
        <div style={{ marginTop: '20px' }}>
          <h2>{weather.name}, {weather.sys?.country}</h2>
          <p>🌡️ Temp: {weather.main.temp} °C</p>
          <p>☁️ Weather: {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
        </div>
      ) : weather && weather.message ? (
        <p style={{ color: 'red', marginTop: '20px' }}>⚠️ {weather.message}</p>
      ) : null}
    </div>
  );
};

export default WeatherApp;
