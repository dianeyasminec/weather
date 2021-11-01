import React ,{ useState, useEffect }from 'react';


function FavoritesCities(){

    const [favorite,setFavorite] = useState("All")
    const [cities,setCities] = useState([])
   // const [fav_cities,setFav_cities] =useState([])
    let fav_cities
    const handleChange = (event)=> {
        setFavorite({
          ...favorite,city:event.target.value });
      }

    const handleOnSubmit= (event) =>{
      event.preventDefault()
      
      
      
        
        const newcity={id:"",title:favorite.city}
        if(favorite.city==null || favorite.city==''){
          console.log("INPUT VALUE:"+favorite.city)
          alert('Please enter a city')
          return
        }
        //debugger
        fetch(`http://localhost:3000/favoritecities`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newcity),
          })
          .then(alert("City has been added to your favorite cities!"))
          window.location.reload();
          }
          useEffect(() =>{
 
            fetch(`http://localhost:3000/favoritecities`)
               .then(response => response.json())
               .then ((data) => {
                   console.log(data)
                   //let rep={...data}
                   console.log("DATA FROM FETCH:"+JSON.stringify(data))
                   setCities(cities=>[...cities,data] )
                 
               })       
         
              
           },[setCities])
           console.log("CHECKING CITIES:"+JSON.stringify(cities))
           if(cities[0]!==undefined){
               fav_cities=cities[0].map((city) => {
              return <tr  key={city.id}><td>{city.title}</td> </tr>
                   
            })
            //setFav_cities(fav_cities=>[...fav_cities,f_cities])

           }
          

return(
    <div>
        <form>
            <input onChange={handleChange} type="text" placeholder=" city" value={favorite.city} name="city"></input>
            <button onClick={handleOnSubmit} >Save</button>
        </form>
         <table border='2'>
           <tr>
             <th>City Name</th>
           </tr>
           {fav_cities}
           </table>
          
         
         
        
         
    </div>
    )
}
export default FavoritesCities;