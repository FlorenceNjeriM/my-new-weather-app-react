import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./Weatherforecast.css"

export default function WeatherData(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(()=>{
        setLoaded(false);
      }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
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
        )
    } else {
        let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
        let latitude = props.coordinates.latitude;
        let longitude = props.coordinates.longitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}`

        axios.get(apiUrl).then(handleResponse)

        return null;
    }
}