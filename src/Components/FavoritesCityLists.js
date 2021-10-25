import React ,{ useState }from 'react';

//route client 3 
//add and saved favorites city 




function FavoritesCityLists(){
    function handleSubmit(event){
        event.preventDefault();
       } 

    function handleOnChange(event){
        let name = event.target.name
        let value = event.target.value
            if(name ===" city"){
               setFavorite({...favorite, city:value})
           }
        }
        const [favorite, setFavorite]= useState()

    return(
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleOnChange} type="text" placeholder=" city"  name="city"></input>
            <button onClick type="submit">Save</button>
        </form>
    </div>
    )
}

export default FavoritesCityLists;