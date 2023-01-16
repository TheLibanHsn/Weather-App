import React from "react";

export default function Tempreture({ weatherData }) {
  const { temp, temp_min, temp_max } = weatherData.main;
  const [{ icon, description }] = weatherData.weather;

  const locationDate = new Date(
    weatherData.dt * 1000 - weatherData.timezone * 1000
  );
  const formattedDate = locationDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <main className="main">
      <div className="location">
        <h3>{weatherData.name}</h3>
        <h4>{formattedDate}</h4>
      </div>
      <div className="temp">
        <h4>
          Low: <br /> {temp_min} &deg;C
        </h4>
        <h1 className="temp-value">{temp} &deg;C</h1>
        <h4>
          High: <br />
          {temp_max} &deg;C
        </h4>
      </div>
      <div className="condition">
        <h3>Feels like: {description}</h3>
        <img src={url} alt="Tempreture condition" />
      </div>
    </main>
  );
}

// url=` http://openweathermap.org/img/wn/10d@2x.png`
// {name,main:{temp, temp_min, temp_max}, sys:{country},weather[0]:{icon,description}}
// Object
// weatherData
// :
// base
// :
// "stations"
// clouds
// :
// {all: 0}
// cod
// :
// 200
// coord
// :
// {lon: 9.1896, lat: 45.4642}
// dt
// :
// 1666105852
// id
// :
// 3173435
// main
// :
// {temp: 23.63, feels_like: 23.59, temp_min: 22.76, temp_max: 24.54, pressure: 1023, …}
// name
// :
// "Milan"
// sys
// :
// {type: 2, id: 2012644, country: 'IT', sunrise: 1666071775, sunset: 1666110816}
// timezone
// :
// 7200
// visibility
// :
// 10000
// weather
// :
// [{…}]
// wind
// :
// {speed: 2.06, deg: 290}
