import React,{useState, useEffect} from 'react';
import data from './data/db.json';

function FavoritesCities(){
const [city, setCity] = useState("")
const [favorites, setFavorites] = useState([])

const addToFavorites = data => {
  setFavorites(favorites => [...favorites, data]);
}

//**************************** */
const handleOnChange = (event) =>{
  setCity(event.target.value)
}

const getData = () => {
  fetch(`http://localhost:3000/favoritecities`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
  .then(data => { 
  const filteredCities = data.map(city => city.title ? city.title : '');
  setFavorites(filteredCities);      
   })
}

useEffect(() => {
  getData();
}, [])

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
  .then(() => { 
    console.log('success!!');
    getData();
   })
  }
}

//******************************************************* */
  const showFavorites = () => {
    return (
      <>
        <ul>
          {favorites.map(favorite => favorite ? <li>{favorite}</li> : '')}
        </ul>
      </>
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