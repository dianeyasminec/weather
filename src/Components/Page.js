import React from 'react';


function Page(props){
    console.log("props",props)
    const {data}= props


    return(
        <div>
          <span>{data.name},{data.sys.country}.Weather</span>
          <span > As of {new Date().toLocaleDateString()}</span>
          <h1>{Math.floor(data.main.temp - 273.15)}
          <sup>o</sup>
          <span>{data.weather[0].main}</span>
          <span>{data.weather[0].description}</span>
          </h1>
          <div className="Section 1">
            <table>
              <tr>
                <td>
                  <h1>High/Low</h1>
                </td>
                <td>
                  <span>{Math.floor(data.main.temp_max - 273.15)}/{""}</span>
                  <span>{Math.floor(data.main.temp_min - 273.15)}  <sup>o</sup>C</span>
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <td>
                  <h1>Humidity</h1>
                </td>
                <td>
                  <span>{data.main.humidity} %</span>
                 
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <td>
                  <h1>Pressure</h1>
                </td>
                <td>
                  <span>{data.main.pressure} hPa </span>
                 
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <td>
                  <h1>Visibility</h1>
                </td>
                <td>
                  <span>{data.visibility} / 1000km </span>
                 
                </td>
              </tr>
            </table>
          </div>
          <br/>  <br/>
         
        </div>
    )}
  
    export default Page;