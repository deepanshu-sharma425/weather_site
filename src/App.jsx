import React,{useState} from 'react'
import './App.css'
import Header from './component/header/header'
import Dashboard from './component/maindashboard/dashboard'

function App() {
  const[selectedcity,setselectedcity]=useState('')
  function handlecitychange(cityname){
    setselectedcity(cityname)
  }


  return (
    <div>
      <Header oncitychange={handlecitychange}/>
      <Dashboard city={selectedcity}/>
        
    </div>
  )
}

export default App
