
import React from "react";
import env from "react-dotenv";
import { useEffect, useState } from "react";
import axios from 'axios'
import { MdOutlineWindPower } from "react-icons/md";


const CITIES = [
    { name: 'Sakarya', lat: 40.78, lon: 30.40, value: 'sakarya' },
    { name: 'İzmit', lat: 40.76, lon: 29.91, value: 'izmit' },
    { name: 'İstanbul', lat: 41.01, lon: 28.97, value: 'istanbul' },
    { name: 'Trabzon', lat: 41.00, lon: 39.71, value: 'trabzon' },
    { name: 'Antalya', lat: 36.88, lon: 30.70, value: 'antalya' },
    { name: 'Van', lat: 38.49, lon: 43.47, value: 'van' },

]

export default function Weather() {
    const [weather, setWeather] = useState("")
    const [city, setCity] = useState("")
    const [wind, setWind] = useState("")
    const [feels, setFeels] = useState("")
    const [icon, setIcon] = useState("")
    const [coord, setCoord] = useState({ lat: 40.78, lon: 30.40 })


    useEffect(() => {
        const apid = process.env.REACT_APP_APP_ID
        console.log(apid)
        async function fetchWeather() {
            try {
                const result =
                    await axios.get('https://api.openweathermap.org/data/2.5/weather?',
                        {
                            params: {

                                lat: coord.lat,
                                lon: coord.lon,
                                appid: apid,

                            }
                        }
                    )
                setWeather(result.data.main.temp)
                setCity(result.data.name)
                setWind(result.data.wind.speed)
                setFeels(result.data.main.feels_like)
                setIcon(result.data.weather[0].icon)
            }
            catch (err) {
                setWeather(" ")
                setCity("")
            }
        }

        fetchWeather()
    }, [coord])

    return (
        <div className="page">
            <div className="side">
                <div className="cityName">
                    <label htmlFor="cityName">{city}</label>
                </div>
                <div className="weather">
                    <label htmlFor="weather">{Math.ceil(weather - 273.15) + "\u00B0C"}</label>
                </div>
                <div className="wind">
                    <MdOutlineWindPower />
                    <label htmlFor="wind">{wind}</label>
                </div>
                <div className="feels">
                    <label htmlFor="feels"> Hissedilen : {Math.floor(feels - 273.15) + "\u00B0C"}</label>
                </div>
                <div className="icon">
                    <img className="icon-img" alt="weather icon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`}></img>

                </div>

                <div className="buttons">
                    {
                        CITIES.map(city => (
                            <div className="city">
                                <button className="city" value={city.value} onClick={() => {
                                    setCoord({ lat: city.lat, lon: city.lon });
                                }}>{city.name}</button>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}