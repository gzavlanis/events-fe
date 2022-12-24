import React from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import "./weather_styles.css";

export default function WeatherApp(){
    const {data, isLoading, errorMessage}= useOpenWeather({ key: '7ad07aac9b0943040a4abdd2c23dfc4e', lat: '37.983810', lon: '23.727539', lang: 'en', unit: 'metric',});
    return(
        <ReactWeather isLoading= {isLoading} errorMessage= {errorMessage} data= {data} lang= "en" locationLabel= "Athens"
            unitsLabels= {{ temperature: 'C', windSpeed: 'km/h' }} showForecast= {false}/>
    );
};