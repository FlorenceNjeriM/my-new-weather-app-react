import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";
import "./index.css";

export default function WeatherInfo(props){
    return(
        <div className="weatherinfo">
              <h1 className="mt-3 text-info">
                {props.data.city}
            </h1>
        <div className="row">
            <div className="col-10  gap-3 d-flex">
              <div className="float-left">
              <WeatherIcon code= {props.data.icon} alt={props.data.description} /> 
              </div>
              <div >
              <WeatherTemperature celsius= {props.data.temperature}/>
              </div>
            
  <span className="current-weather">
    <div> Wind: {props.data.wind} km/hr
                
                </div>
              <div>
              Precipitation: 0%
              </div>
              <div>
              Humidity: {props.data.humidity}%
              </div></span>
            </div>

<div className="col-2 current-weather">
<div><strong>Weather</strong>

</div>
<div class="text-capitalize">
{props.data.description} 
</div>
<div>
<FormattedDate date={props.data.date}/>
</div>
</div>
        </div>
        </div>
      
    );
}
