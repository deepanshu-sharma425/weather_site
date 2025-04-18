import React, { useState, useEffect, use } from 'react';
//    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
//  const APIkey = 'db6089b5d68392b9baba26c2061a1776';
const Weatherapp=()=>{
  const[city,setcity]=useState('')
  const[weather,setweather]=useState(null)
  const APIkey = 'db6089b5d68392b9baba26c2061a1776';
  useEffect(()=>{
    if (city=='') 
      return;
    const fetchingWeather=async()=>{
      try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`)
        const data=await response.json()
        console.log(data)
        setweather(data)}
        catch(err){
          console.error('error while fetching api',err)
        }
    }
    fetchingWeather()
  }
    
  ,[city])
  return (
    <>
    <input 
    onKeyDown={(e)=>{
      if(e.key==='Enter'){
        setcity(e.target.value

        )
      }
    }}
    
    type="text" style={{backgroundColor:'grey'}
  } 
  
  
  
  
  />

  {weather ? <div>
    <p>location: {weather.location}</p>
    <p>country:{weather.sys.country}</p>
    <p>humidity: {weather.main.humidity}</p>
    <p>minimum temprature:{weather.main.temp_min}</p>
    <p>MAximum temorature: {weather.main.temp_max}</p>
  </div>:city!='' && <p>entered city does not exist</p>}
    </>
  )






}
export default Weatherapp
