import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return(
        <div className="weatherinfo">
              <h1 className="mt-3 text-info">
                {props.data.city}
            </h1>
        <div className="row">
            <div className="col-10 d-flex gap-3">
            <img src={props.data.iconUrl} alt={props.data.description} className="img-fluid max-width:100% height:auto"/> 
            <div className="fw-semibold temperature"><span >{Math.round(props.data.temperature)}</span></div>
            <div  className="units"><span>°C</span><span> | °F </span></div>
            
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
