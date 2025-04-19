import React,{useState,useEffect} from 'react'

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
      console.error("problem while fetching api")
    }

    }
    datafetching()
  },[city])
  function Nextday(props){
    return(
      <>
      <div className="nextday">
        <div className="nextdayimgday">
          <img src="" alt="" />
          <h6>{props.day}</h6>
          <p>{props.weathertype}</p>
        </div>
        <h3>{props.nextdaytemp}</h3>
      </div>
      </>
    )
  }

    


  return (
    <>
    <div className="tempdisplayinfo">
      <div className="tempinfo">
        <img src="" alt="" />
        <div className="locoinfotemp">
          <div className="lococloudy">
            <p>uk,uk</p>
            <p>party cloudy</p>
          </div>
          <div className="tempdisplay">28.c</div>
          

        </div>
      </div>
    </div>
    <Nextday/>


    
    </>
  )
}

export default Dashboard