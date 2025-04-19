
import React, { useState, useEffect } from 'react';
import './dashboard.css';

function Dashboard({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const apiKey = 'b1d0579d30c58c38b4ab1543c5044ebe';

  useEffect(() => {
    if (city === '') return;

    const dataFetching = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();

        if (data.cod !== 200) {
          setWeather(null);
          setError('City not found');
          return;
        }
        setWeather(data);
        console.log(data);
        setError('');
      } catch (err) {
        console.error('Problem while fetching API', err);
        setError('Something went wrong');
      }
    };
    dataFetching();
  }, [city]);
  function getWeatherImage(condition) {
    if (!condition) return 'default.png';
    const main = condition.toLowerCase();

    if (main.includes('cloud')) return 'cloudy.png';
    if (main.includes('rain')) return 'rain.png';
    if (main.includes('clear')) return 'sunny.png';
    if (main.includes('snow')) return 'snow.png';
    if (main.includes('thunderstorm')) return 'thunder.png';

    return 'default.png';
  }
  function Nextday(props) {
    return (
      <div className="nextday">
        <div className="nextdayimgday">
          <img src={props.image} alt="" />
          <br />
          <br />
          <h4>{props.day}</h4>
          <h5 className="hello">{props.weathertype}</h5>
        </div>
        <div className="nextdayday">
          <h1>{props.nextdaytemp}</h1>
          <h2>°</h2>
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

  return (
    <>
      <div className="tempdisplayinfo">
        <div className="tempinfo">
          <img src={`../../../public/${getWeatherImage(weather?.weather?.[0]?.main)}`} alt="" />
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
          <Nextday image="/rain.png" day="Saturday" weathertype="Rainy" nextdaytemp="20" />
          <Nextday image="/rain.png" day="Sunday" weathertype="Rainy" nextdaytemp="21" />
          <Nextday image="/rain.png" day="Monday" weathertype="Rainy" nextdaytemp="19" />
          <Nextday image="/rain.png" day="Tuesday" weathertype="Rainy" nextdaytemp="22" />
        </div>
      </div>

      <div className="moreinfoweather">
        <h1>Today's Highlights</h1>
        <br />
        <br />

        <div className="moreinfoweatherblock1">
          <Smallbox
            image="/humidity.png"
            infoname="Humidity"
            about={weather ? `${weather.main.humidity}` : ''}
            symbol="%"
          />
          <Smallbox
            image="/temp.png"
            infoname="Feels Like"
            about={weather ? `${(weather.main.feels_like)}` : ''}
            symbol="°"
          />
          <Smallbox
            image="/pressure.png"
            infoname="Pressure"
            about={weather ? `${weather.main.pressure}` : ''}
            symbol="hPa"
          />
        </div>

        <br />

        <div className="moreinfoweatherblock1">
          <Smallbox
            image="/humidity.png"
            infoname="Min Temp"
            about={weather ? `${Math.round(weather.main.temp_min)}` : ''}
            symbol="°"
          />
          <Smallbox
            image="/humidity.png"
            infoname="Max Temp"
            about={weather ? `${Math.round(weather.main.temp_max)}` : ''}
            symbol="°"
          />
          <Smallbox
            image="/windspeed1.png"
            infoname="Wind Speed"
            about={weather ? `${weather.wind.speed}` : ''}
            symbol="m/s"
          />
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}
    </>
  );
}

export default Dashboard;
