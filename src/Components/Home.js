import React from 'react'
import {NavLink} from 'react-router-dom'
function Home(){
    
    
    return(( 
        <div>
         <header className="Weather App">
      <strong  > Welcome to my Weather App</strong><br/>
      </header>
      <span>Let's get started!</span> 
      <br/>  <br/> <br/>
        <NavLink to = "/weather" exact> {console.log('clik')}
        <button>Weather</button>
        </NavLink>
      {/* <button onClick={event=>window.location.href='/weather'}>Search for Cities</button> */}
      
        </div>
    ))
}

export default Home