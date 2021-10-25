import React from 'react'
import {getFavoriteCities} from './data/data'
//Route 1 client-side
function Home(){
    
    let f_cities={getFavoriteCities}
    console.log("f cities: " + f_cities.length)
    return(( 
        <div>
         <header className="Weather App">
      <strong> Welcome to my Weather App</strong><br/>
      <h3>Your favrite cities</h3>
      <ul>
          <li>{f_cities[0]}</li>
      </ul>
      </header>
      <button onClick={event=>window.location.href='/Weather'}>Search for Cities</button>
      
        </div>
    ))
}

export default Home