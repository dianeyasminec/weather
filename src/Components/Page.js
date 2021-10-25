import React from 'react';

//2nd client side 
function Page(props){
    console.log("props",props)
    const {data}= props


    return(
        <div>
          <span>{data.name},{data.sys.country}.Weather</span>
          {/* <h1>{data.main.temp}</h1> */}
           
        </div>
    )}
  
    export default Page;