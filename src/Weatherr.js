import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


export default function Weatherr(){
    function handleResponse(response){
        console.log(response.data);
    }
    
    const apiKey= "ed1ac087e9a0cc53ed6f2aafa50655f1";
    let city="Kenya";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then (handleResponse)


    return(
       <div className="container">
         
<form className="mt-3"> 
  <input type="Search" placeholder="Type a city.."/>
  <input type="Submit"/>
</form>
        <h1 className="text-center">
                Weather App
            </h1>
        <div className="row">
            <div className="col-10 d-flex gap-3">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather-icon"/> <span className="fw-semibold temperature">22</span><span className="units">°C</span><span className="units">| °F </span>
            
  <span className="current-weather 
  "><div> Wind:10 km/hr
                
                </div>
              <div>
              Precipitation:0%
              </div>
              <div>
              Humidity: 60%
              </div></span>
            </div>

<div className="col-2 current-weather">
<div>
Weather
</div>
<div>
Partly cloudy
</div>
<div>
Tuesday 09:00
</div>
</div>
        </div>
       </div>
    )
    
}
