"use client";
import { useState } from "react";

export default function Page(){
    const [weather, setWeather] = useState(null);
    
    async function getWeather(){
        console.log("Clicked...")
        const response = await fetch ("https://api.open-meteo.com/v1/forecast?latitude=31.3256&longitude=75.5792&current=temperature_2m,wind_speed_10m");
        const data = await response.json();

        setWeather(data.current.temperature_2m);        
    }

    return(
        <>
        <div>
            <h2>Weater</h2>
            <button onClick={getWeather}>
                getWeather
            </button>
            {/* <p>Temperature: {weather}C</p> */}
            <p>
                Temperature: {weather !== null ? `${weather}°C` : "Click Get Weather"}
            </p>
        </div>
        </>
    )

}