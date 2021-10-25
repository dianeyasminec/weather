import React ,{ useState, useEffect }from 'react';


function FavoritesCityLists(){

    const [favorite,setFavorite] = useState( [])

function handleChange(event) {
        setFavorite({
          ...favorite,city:event.target.value });
      }
    function handleOnSubmit(event){
        event.preventDefault()
        const newcity={id:"",title:favorite.city}
        fetch(`http://localhost:3000/favoritecities`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newcity),
          })
          .then(alert("City has been added to your favorite cities!"));
    }

    useEffect(() =>{
   
        fetch(` http://localhost:3000/favoritecities`)
        .then(response => response.json)
        .then (data => setFavorite({data : data}))
            console.log("")
    },[])
        
    return(
    <div>
        <form onSubmit={handleOnSubmit}>
            <input onChange={handleChange} type="text" placeholder=" city" value={favorite.city} name="city"></input>
            <button onClick={handleOnSubmit} >Save</button>
        </form>
       
    </div>
    )
}

export default FavoritesCityLists;