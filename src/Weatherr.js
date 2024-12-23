import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


export default function Weatherr(props){
const[city, setCity]=useState(props.defaultCity);
  const [weatherData, setWeatherData]=useState ({ready:false})
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
          ready:true,
          temperature:response.data.main.temp,
          date: new Date(response.data.dt*1000),
          humidity:response.data.main.humidity,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          wind: response.data.wind.speed,
         city: response.data.name,
        })
    }
    
function search(){
  const apiKey= "ed1ac087e9a0cc53ed6f2aafa50655f1";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then (handleResponse)
}

    function handleSubmit(event){
      event.preventDefault();
      search();
    }
   
function handleCityChange(event){
setCity(event.target.value);

}

if (weatherData.ready){
    return(
       <div className="custom-container p-3">
         
<form className=" container mt-3 " onSubmit={handleSubmit}> 
  <div className="row">
    <div className="col-9">
    <input type="Search" placeholder="Enter a city.."  className="input-city form-control"  onChange={handleCityChange} />
    </div>
    <div className="col-3">
    <input type="Submit" value="Search" className="btn btn-primary w-100"/>
</div>

  </div>
 
 
</form>
        <WeatherInfo data={weatherData}/>
       </div>
    )
  } else{
   search();
    return ("loading")
  }
}
