import React,{useState, useEffect} from 'react';


function FavoritesCities(){

const [city, setCity] = useState("")
const [favorites, setFavorites] = useState([])

//**************************** */
const handleOnChange = (event) =>{
  setCity(event.target.value)
}



useEffect(() => {
  fetch(`http://localhost:3000/favoritecities`
  )
  .then(response => response.json())
  .then(data => { 
  const filteredCities = data.map(city => city.title ? city.title : '');
  setFavorites(filteredCities);      
   }, [])
})

const handleSubmit= (event) => {
  event.preventDefault();
  
  if(city !==null || city !==''){
    console.log('attempting...');
  fetch(`http://localhost:3000/favoritecities`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: city
    })
  })
  .then(res => res.json())
  .then(data => { 
  //  debugger
  //  console.log(setFavorites(data))
    console.log(data);
    setFavorites([...favorites, data.title])
    console.log(data.title)
   })
  }
}

//******************************************************* */
  const showFavorites = () => {
    return (
        <ul>
          {favorites.map(favorite => <li key={favorite.id}>{favorite}</li>)}
        </ul>
      )
  }
  return(
    <div>
<h1> Welcome to Favorites cities </h1>
<form onSubmit={handleSubmit}>
  <input type="text" placeholder="Enter your city" value = {city} onChange={e=>handleOnChange(e)}></input>
  <button>SAVE CITY</button>
</form>
<hr/>
<h2> Here are my favorites: </h2>
<span>{showFavorites()}</span>
    </div>
  )}

export default FavoritesCities