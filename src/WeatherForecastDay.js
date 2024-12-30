import React from "react";
import WeatherIcon from "./WeatherIcon";

 export default function WeatherForecastDay(props){
function forecastDay(){
    let date=new Date(props.data.dt*1000);
    let day=date.getDay();
    let days= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
}

    function maxTemperature(){
        let temp= Math.round(props.data.main.temp_max);
        return `${temp}°`
        }

        function minTemperature(){
            let temp= Math.round(props.data.main.temp_min);
            return `${temp}°`
            }
    

return(
    <div>
        <div className="WeatherForecast-day">{forecastDay()}
               </div> 
               <div className="WeatherForecast-icon"><WeatherIcon code={props.data.weather[0].icon}  width={45} height={45}/></div> 
               <div className="WeatherForecast-temperature"> <span className="temp-max">{maxTemperature()}</span> <span className="temp-min">{minTemperature()}</span>  
                </div> 
    </div>
)
}