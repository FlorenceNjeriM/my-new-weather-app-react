import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherData from "./WeatherData.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


export default function Weatherr(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false })
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    })
  }

  function search() {
    const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
    axios.get(apiUrl).then(handleResponse)
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);

  }

  if (weatherData.ready) {
    return (
      <div className="custom-container p-3">

        <form className=" container mt-3 " onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input type="Search" placeholder="Enter a city.." className="input-city form-control" onChange={handleCityChange} />
            </div>
            <div className="col-3">
              <input type="Submit" value="Search" className="btn btn-primary w-100" />
            </div>

          </div>


        </form>
        <WeatherInfo data={weatherData} />
        <div>
          <WeatherData coordinates={weatherData.coordinates} />
        </div>
      </div>
    )
  } else {
    search();
    return ("loading")
  }
}