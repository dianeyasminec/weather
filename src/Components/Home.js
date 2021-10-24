import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
//Route 1 client-side
function Home(){
    return(( 
        <div>
         <header className="Weather App">
      <strong> Welcome to my Weather App</strong>
      <a href="/Weather">TEST</a>
      </header>
        </div>
    ))
}

export default Home