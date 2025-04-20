
import React, { useState, useEffect } from 'react';
import './dashboard.css';
import ErrorPage from '../error/error';
import cloudy from '../../assets/cloudy.png'
import aqi from '../../assets/aqi.png'
import clear from '../../assets/sunny.png';
import humidity from '../../assets/humidity.png'
import rain from '../../assets/rain.png';
import sunny from '../../assets/sunny.png';
import snow from '../../assets/snow.png';
import thunder from '../../assets/thunder.png';
import windspeed from '../../assets/windspeed1.png';
import pressure from '../../assets/pressure.png';
import pm2 from '../../assets/pm2.5.png';
import pm10 from '../../assets/pm10.png';
import ozone from '../../assets/ozone.png';
import temp from '../../assets/temp.png';





function Dashboard({ city, setLoading }) {
  const [weather, setWeather] = useState(null);
  const [forecast, setforecast] = useState(null)





  const [error, setError] = useState('');
  const apiKey = 'b1d0579d30c58c38b4ab1543c5044ebe';
  const [pollution, setpollution] = useState(null)

  useEffect(() => {
    if (city === '') return;

    const dataFetching = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();

        if (data.cod !== 200) {
          setWeather(null);
          setError('City not found');
          setLoading(false);
          return;
        }

        setWeather(data);
        setError('');

        const { lat, lon } = data.coord;

        const weatherforecastres = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        const weatherforecastdata = await weatherforecastres.json();
        setforecast(weatherforecastdata);

        const pollutiondatares = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const pollutionresdata = await pollutiondatares.json();
        setpollution(pollutionresdata);

      } catch (err) {
        console.error('Problem while fetching API', err);
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    dataFetching();
  }, [city]);

  function getWeatherImage(condition) {
    if (!condition) return defaultImg;
    const main = condition.toLowerCase();

    if (main.includes('cloud')) return cloudy;
    if (main.includes('rain')) return rain;
    if (main.includes('clear')) return clear;
    if (main.includes('snow')) return snow;
    if (main.includes('thunder')) return thunder;

    return defaultImg;



  }
  function aqihandle(aqi) {
    switch (aqi) {
      case 1:
        return { level: "Good", color: "#009966" };
      case 2:
        return { level: "Fair", color: "#ffde33" };
      case 3:
        return { level: "Moderate", color: "#ff9933" };
      case 4:
        return { level: "Poor", color: "#cc0033" };
      case 5:
        return { level: "Very Poor", color: "#660099" };
      default:
        return { level: "Unknown", color: "#999999" };
    }
  }
  function Nextday(props) {
    return (
      <div className="nextday">
        <div className="nextdayimgday">
          <img src={props.image} alt={props.textt} />
          <br />
          <br />
          <h4>{props.date}</h4>
          <h5 className="hello">{props.weathertype}</h5>
        </div>
        <div className="nextdayday">
          <h1>{props.nextdaytemp}</h1>

        </div>
      </div>
    );
  }
  function Smallbox(props) {
    return (
      <div className="small">
        <img src={props.image} alt="" />
        <h4 className="nmnmn">{props.infoname}</h4>
        <div className="tempsmall">
          <h1>{props.about}</h1>
          <h2 className="infoinfonew">{props.symbol}</h2>
        </div>
      </div>
    );
  }
  if (error) {
    return (<ErrorPage />)
  }

  return (
    <>
      <div className="tempdisplayinfo">
        <div className="tempinfo">
          {weather ? <img src={getWeatherImage(weather?.weather?.[0]?.main)} alt="" /> : ''}
          <div className="locoinfotemp">
            <div className="lococloudy">
              <h2>{weather ? `${weather.name}, ${weather.sys.country}` : ''}</h2>
              <br />
              <p>{weather ? `${weather.weather[0].description}` : ''}</p>
            </div>
            <div className="tempdisplay">
              {weather ? (
                <>
                  <h1>{(weather.main.temp)}</h1>
                  <h2>°</h2>
                </>
              ) : (
                <h3></h3>
              )}
            </div>
          </div>
        </div>

        <div className="additional">
          <Nextday
            image={forecast && forecast.list[6] ? getWeatherImage(forecast.list[6].weather[0].main) : ''}


            date={forecast && forecast.list[6] ? new Date(forecast.list[6].dt * 1000).toLocaleDateString() : ''}
            weathertype={forecast && forecast.list[6] ? forecast.list[6].weather[0].main : ''}
            nextdaytemp={forecast && forecast.list[6] ? `${Math.floor(forecast.list[6].main.temp)} °C` : ''}
          />
          <Nextday
            image={forecast && forecast.list[10] ? getWeatherImage(forecast.list[10].weather[0].main) : ''}
            date={forecast && forecast.list[10] ? new Date(forecast.list[10].dt * 1000).toLocaleDateString() : ''}
            weathertype={forecast && forecast.list[10] ? forecast.list[10].weather[0].main : ''}
            nextdaytemp={forecast && forecast.list[10] ? `${Math.floor(forecast.list[10].main.temp)} °C` : ''}
          />
          <Nextday
            image={forecast && forecast.list[18] ? getWeatherImage(forecast.list[18].weather[0].main) : ''}
            date={forecast && forecast.list[18] ? new Date(forecast.list[18].dt * 1000).toLocaleDateString() : ''}
            weathertype={forecast && forecast.list[18] ? forecast.list[18].weather[0].main : ''}
            nextdaytemp={forecast && forecast.list[18] ? `${Math.floor(forecast.list[18].main.temp)} °C` : ''}
          />
          <Nextday
            image={forecast && forecast.list[32] ? getWeatherImage(forecast.list[32].weather[0].main) : ''}
            date={forecast && forecast.list[32] ? new Date(forecast.list[32].dt * 1000).toLocaleDateString() : ''}
            weathertype={forecast && forecast.list[32] ? forecast.list[32].weather[0].main : ''}
            nextdaytemp={forecast && forecast.list[32] ? `${Math.floor(forecast.list[32].main.temp)} °C` : ''}
          />
        </div>
      </div>

      <div className="onemorecontainer">
        <div className="moreinfoweather">
          <h1>Today's Highlights</h1>
          <br />
          <br />
          <div className="moreinfoweatherblock1">
            <Smallbox
              image={humidity}
              infoname="Humidity"
              about={weather ? `${weather.main.humidity} %` : ''}
              symbol=""
            />
            <Smallbox
              image={temp}
              infoname="Feels Like"
              about={weather ? `${(weather.main.feels_like)} °C` : ''}
              symbol=""
            />
          </div>
          <br />
          <br />
          <div className="moreinfoweatherblock1">
            <Smallbox
              image={pressure}
              infoname="Pressure"
              about={weather ? `${weather.main.pressure} hpa` : ''}
              symbol=""
            />
            <Smallbox
              image={windspeed}
              infoname="Wind Speed"
              about={weather ? `${weather.wind.speed} m/s` : ''}
            />
          </div>
        </div>
        <div className="moreinfoweather">
          <h1>Air Quality</h1>
          <br />
          <br />

          <div className="moreinfoweatherblock1">
            <Smallbox
              image={aqi}
              infoname="AQI"
              about={pollution ? aqihandle(pollution.list[0].main.aqi).level : ''}
              symbol=""
            />
            <Smallbox
              image={ozone}
              infoname="Ozone"
              about={pollution ? `${pollution?.list?.[0]?.components?.o3
                } µg/m³` : ''}
              symbol=""
            />
          </div>
          <br />
          <div className="moreinfoweatherblock1">
            <Smallbox
              image={pm10}
              infoname="PM 10"
              about={pollution ? `${pollution?.list?.[0]?.components?.pm10} µg/m³` : ''}
              symbol=""
            />
            <Smallbox
              image={pm2}
              infoname="PM 2.5"
              about={pollution ? `${pollution?.list?.[0]?.components?.pm2_5} µg/m³` : ''}
              symbol=""
            />
          </div>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
    </>
  );
}
export default Dashboard;
