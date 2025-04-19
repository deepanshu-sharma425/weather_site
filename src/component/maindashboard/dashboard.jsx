import React,{useState,useEffect} from 'react'
import './dashboard.css'
function Dashboard({city}) {
  const[weather,setweather]=useState(null)
  const apiKey = 'b1d0579d30c58c38b4ab1543c5044ebe';
  useEffect(()=>{
    if(city='')return;
    const datafetching=async()=>{
      try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        const data=await response.json()
        console.log(data)
        setweather(data)
    }
    catch(err){
      console.error("problem while fetching api",err)
    }

    }
    datafetching()
  },[city])
  function Nextday(props){
    return(
      <>
      <div className="nextday">
        <div className="nextdayimgday">
          <img src={props.image} alt="" />
          <br />
          <br />
          <h4>{props.day}</h4>
          <h5>{props.weathertype}</h5>
        </div>
        <div className="nextdayday">
        <h1>{props.nextdaytemp}</h1>
        <h2>o</h2>
        </div>
        

      </div>
      </>
    )
  }

    


  return (
    <>
    <div className="tempdisplayinfo">
      <div className="tempinfo">
        <img src="../../../public/cloudy.png" alt="cloudy" />
        <div className="locoinfotemp">
          <div className="lococloudy">
            <h2>London,UK</h2>
            <br />
            <p>party cloudy</p>
          </div>
          <div className="tempdisplay">
            <h1>28</h1>
            <h2>o</h2>
          </div>
          

        </div>
      </div>
      <div className="additional">
        <Nextday image='rain.png' day='saturday' weathertype='rainy' nextdaytemp='200 '/>
        <Nextday image='rain.png' day='saturday' weathertype='rainy' nextdaytemp='200'/>
      </div>

    </div>
    


    
    </>
  )
}

export default Dashboard