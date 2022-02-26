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
    <NavLink to = "/weather" exact>
        <button>Weather</button>
    </NavLink>
      </div>
    )
 )}

export default Home