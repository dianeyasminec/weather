import React,{useState} from 'react';
import Page from './Page'
import {NavLink} from 'react-router-dom'


function Weather() {

    const [location,setLocation]= useState([])
    const [weather, setWeather] = useState([])

const handleOnChange =(event)=>{
    let value=event.target.value
       setLocation({...location,city:value})
    }
   
        
const handleSubmit= (event) =>{
    event.preventDefault();
        const APIKEY = '1dc17c4f6cb7425a7f108ce2e2652ee4'
        console.log("CALIING WEATHER API")
        
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=${APIKEY}`
      )
     .then(response => response.json())
     .then((data) => setWeather({data : data}),[])
     console.log("")
    
}
    
return(
    <div>
            <form onSubmit={handleSubmit}>
            <input type="text" id="location" value={location.city} name="city"placeholder="Enter citys" onChange={ e=>handleOnChange(e)}></input>
            <button className="btn btn-primary" onClick={handleSubmit}>SUBMIT</button>
            </form>

            {
                weather.data !== undefined?
            
            <div>
            <Page data = {weather.data}/>
           
            
            </div>
            :null
            }
        <br/>  <br/>
    <NavLink to = "/favoritesCities" exact> {console.log('clik')}
        <button>FavoritesCities</button>
    </NavLink>

 </div>
    )}
  
export default Weather;