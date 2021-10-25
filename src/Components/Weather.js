import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";


function Weather(){
    const [location,setLocation]= useState([])
    // const { city } = useParams();

function handleOnChange(event){
    let value=event.target.value
       setLocation({...location,city:value})
    }
   
        
function handleSubmit(event) {
    event.preventDefault();
   
}
 
useEffect(() => {
        const APIKEY = '1dc17c4f6cb7425a7f108ce2e2652ee4'
        console.log("CALIING WEATHER API")
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=${APIKEY}`
      )
     .then(response => response.json())
     .then(data => {console.log(data)}
    // .then(data => setLocation(data.weather))
     //Change every time location is change(state)
      })
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" id="location" value={location.city} name="city"placeholder="Enter citys" onChange={ e=>handleOnChange(e)}></input>
            <button className="btn btn-primary" onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )}
  
export default Weather;