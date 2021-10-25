import React from 'react'
//Route 1 client-side
function Home(){
    
    
    return(( 
        <div>
         <header className="Weather App">
      <strong> Welcome to my Weather App</strong><br/>
      </header>
      <span>Let's get started!</span> 
      <br/>  <br/> <br/>
      <button onClick={event=>window.location.href='/Weather'}>Search for Cities</button>
      
        </div>
    ))
}

export default Home