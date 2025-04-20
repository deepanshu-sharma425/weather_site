import React,{useState} from 'react'
import './header.css'
import Dashboard from '../maindashboard/dashboard'
import searchIcon from '../../assets/search.png';
import logo from '../../assets/logo.png'

function Header({oncitychange}) {
    const[city,setcity]=useState('')
    function handlechange(e){
        const value=e.target.value
        setcity(value)
        
    }
    function imageclick(){
        if(city.trim()
        ){oncitychange(city)}
    }
  return (
    <>
    <div className="header">
        <div className="headerlogoimg">
            <img src={logo} alt="logo image" />
            <p>ForecastFlow</p>
        </div>

        <div className="inputbox">
            <input type="text" placeholder='Enter the City name' value={city} onChange={handlechange}
            onKeyDown={(e)=>{
                if(e.key==='Enter'){
                    imageclick()
                }
            }}
            />
            <img src={searchIcon} alt="" onClick={imageclick}/>
        </div>

        <div className="fetchingautoloco">
           
        </div>

    </div>
    
    
    
    </>

    
  )
}

export default Header