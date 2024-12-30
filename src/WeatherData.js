import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./Weatherforecast.css";

export default function WeatherData(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const apiKey = "ed1ac087e9a0cc53ed6f2aafa50655f1";
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      const filteredForecast = filterForecast(response.data.list);
      setForecast(filteredForecast); 
      setLoaded(true); 
    });
  }, [props.coordinates]);
  console.log(forecast);

 
  function filterForecast(forecasts) {
    const dailyForecasts = [];
    const datesSeen = new Set();

    forecasts.forEach((forecast) => {
      const date = forecast.dt_txt.split(" ")[0]; 
      const time = forecast.dt_txt.split(" ")[1]; 

      if (!datesSeen.has(date) && time === "12:00:00") {
        dailyForecasts.push(forecast);
        datesSeen.add(date);
      }
    });

    return dailyForecasts;
  }

  if (!loaded) {
    return null; 
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.map((dailyForecast, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
        ))}
      </div>
    </div>
  );
}
