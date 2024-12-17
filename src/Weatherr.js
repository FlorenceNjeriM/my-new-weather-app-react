import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


export default function Weatherr(){

  const [weatherData, setWeatherData]=useState ({ready:false})
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
          ready:true,
          temperature:response.data.main.temp,
          date:"Tuesday 08:00",
          humidity:response.data.main.humidity,
          description: response.data.weather[0].description,
          iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
          wind: response.data.wind.speed,
         city: response.data.name,
        })
    }
    
   
if (weatherData.ready){
    return(
       <div className="container">
         
<form className="mt-3"> 
  <input type="Search" placeholder="Enter a city.."/>
  <input type="Submit"/>
</form>
        <h1 className="text-center">
                Weather App
            </h1>
        <div className="row">
            <div className="col-10 d-flex gap-3">
            <img src={weatherData.iconUrl} alt={weatherData.description}/> <span className="fw-semibold temperature">{Math.round(weatherData.temperature)}</span><span className="units">°C</span><span className="units">| °F </span>
            
  <span className="current-weather 
  "><div> Wind: {weatherData.wind} km/hr
                
                </div>
              <div>
              Precipitation: 0%
              </div>
              <div>
              Humidity: {weatherData.humidity}%
              </div></span>
            </div>

<div className="col-2 current-weather">
<div><strong>Weather</strong>

</div>
<div>
{weatherData.description} 
</div>
<div>
{weatherData.date}
</div>
</div>
        </div>
       </div>
    )
  } else{
    const apiKey= "ed1ac087e9a0cc53ed6f2aafa50655f1";
    let city="Paris";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then (handleResponse)
    return ("loading")
  }
}
