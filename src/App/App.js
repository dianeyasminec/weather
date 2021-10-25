import React from 'react';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from '../Components/Home'
import FavoritesCityLists from '../Components/FavoritesCityLists'
import Weather from '../Components/Weather'
// import ReactDOM from "react-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function App() {
  
  return (
   
      <Router>
        <Switch>
       <div className="App">
         <Header/>
         <hr/>
       <Route path="/Weather" component={Weather}>
        <Weather  />
      </Route>
     
      <Route path="/FavoritesCityLists" component={FavoritesCityLists}>
        <FavoritesCityLists />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
        </div>
        </Switch>
        <Footer/>
        </Router>
  );
}

export default App;
