import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherApp from './component'

function App() {
  const[weather,Setweather]=useState(null)
  const fetching_weather=async(cityName)=>{
    const[Weather,SetWEather]=useState(null)
    try{
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=YOUR_API_KEY&units=metric`)
      const data=await response.json()
      Setweather(data)
    }
    catch(err){
      console.log(err)
    }
  }
  function handle(e){
    e.preventdefault()
  }
  const[Search,Setsearch]=useState('')

  return (
    <div>
      <WeatherApp/>
      
    </div>
  )
}

export default App
