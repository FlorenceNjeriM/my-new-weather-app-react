import React, {useState} from "react";
import "./index.css";

export default function WeatherTemperature(props) {
    const [unit, setUnit]= useState("metrics");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }
    
    function fahrenheit(){
        return (props.celsius * 9) / 5 + 32;   
    }
    if (unit==="celsius"){
        return (
            <div className="d-flex">
              <span className="fw-semibold temperature">
                {Math.round(props.celsius)}
              </span>
              <div>  <span className="units">
                <span>°C</span>
                <span> | <a href="/" onClick={showFahrenheit}> °F</a> </span>
              </span></div>
            
            </div>
          );
    }else{
        return (
            <div className="d-flex">
              <span className="fw-semibold temperature">
                {Math.round(fahrenheit())}
              </span>
              <div>  <span className="units">
                <span><a href="/" onClick={showCelsius}>°C </a></span>
                <span> | °F </span>
              </span></div>
            
            </div>
          );
    }
 
}

