import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./Weatherforecast.css";

export default function WeatherData(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    // Filter the list to show one forecast per day (e.g., at 12:00 PM)
    const dailyForecasts = response.data.list.filter((item) =>
      item.dt_txt.includes("12:00:00")
    );
    setForecast(dailyForecasts);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
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
  } else {
    let apiKey = "ed1ac087e9a0cc53ed6f2aafa50655f1";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
