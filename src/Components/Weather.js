import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
function Weather(){
    const [location,setLocation]= useState({
        city:""
    })

    function handleOnChange(event){
        let name=event.target.name
        let value=event.target.value
        if(name=== "city")
        setLocation({...location,city:value})
    }
    useEffect(()=> {
        const APIKEY = '1dc17c4f6cb7425a7f108ce2e2652ee4'
        const name = 'city'
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIKEY}`
      )
      .then(response => response.json())
      .then(response => console.log(response))
      //.then(data => setLocation(data.location))
      //Change every time location is change(state)
      }, [location])

      function handleSubmit(event) {
          event.preventDefault()
      }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name="city"placeholder="Enter city" onChange={ e=>handleOnChange(e)}></input>
            <button className="btn btn-primary" onSubmit={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )}
  
export default Weather;