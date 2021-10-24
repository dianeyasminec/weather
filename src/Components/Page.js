import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
//2nd client side 
function Page(){
    const[houston,setHouston,]= useState("Houston")
    useEffect(()=> {
        const APIKEY = '1dc17c4f6cb7425a7f108ce2e2652ee4'
        const name = 'city'
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIKEY}`
      )
      .then(response => response.json())
      .then(response => console.log(response))
      .then(data => {console.log(data)})
      }, [houston]) 

      //Use .filter to get houston weather info 
    


    return(
        <div>
            Welcome to page
        </div>
    )}
  
    export default Page;