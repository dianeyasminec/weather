import React from 'react';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from '../Components/Home'
import FavoritesCities from '../Components/FavoritesCities'
import Weather from '../Components/Weather'
// import ReactDOM from "react-dom";
import Navigation from "../Components/Navigation";


function App() {
  
  return (
   
      <Router>
        <Switch>
       <div className="App">
         <Navigation />
         <hr/>
         <Route exact path="/" component={Home}/>
       <Route exact path="/weather" component={Weather}/>
      <Route path="/favoritesCities" component={FavoritesCities}/>
      </div>
        </Switch>
        </Router>
  );
}

export default App;
