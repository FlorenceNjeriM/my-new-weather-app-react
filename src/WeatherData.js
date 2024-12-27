import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./Weatherforecast.css"

export default function WeatherData (props){
    function handleResponse(response){
        console.log (response.data);
    }
console.log(props)

   let apiKey= "ed1ac087e9a0cc53ed6f2aafa50655f1";
let latitude=props.coordinates.lat;
let longitude=props.coordinates.lon;
   let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)

    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
               <div className="WeatherForecast-day"> Thu 
               </div> 
               <div className="WeatherForecast-icon"><WeatherIcon code="13n"  width={45} height={45}/></div> 
               <div className="WeatherForecast-temperature"> <span className="temp-max">19°</span> <span className="temp-min">10°</span>  
                </div> 
                </div>
               
            </div>
        </div>
    )
}