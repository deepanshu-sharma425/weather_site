import React,{useState} from 'react'
import './header.css'



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
            <img src='../../../public/logo.png' alt="logo image" />
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
            <img src="../../../public/search.png" alt="" onClick={imageclick}/>
        </div>

        <div className="fetchingautoloco">
            <img src="../../../public/location.png" alt="" />
           <p>Location</p>
        </div>

    </div>
    
    
    
    </>

    
  )
}

export default Header