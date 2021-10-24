import React, { useState } from 'react';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from '../Components/Home'
import Page from '../Components/Page'
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
      <Route path="/Page" component={Page}>
        <Page />
      </Route>
      <Route path="/FavoritesCityLists" component={FavoritesCityLists}>
        <FavoritesCityLists />
      </Route>
      {/* {move to render the first route that matches} */}
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
