import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Nav/Navbar.js';
import Home from './components/Home.js';
import WomenContainer from './containers/Women/WomenContainer';
import MenContainer from './containers/Men/MenContainer';

class App extends React.Component {
  state = {
    items: [],
    orders: [],
    cart: [],
    header: "items",
    // selectedCategory: "all",
    // searchFilter: "",
    // categories: []
  }
  
  // componentDidMount(){
  //   fetch(`http://localhost:4000/items`)
  //   .then(res => res.json())
  //   .then(items => 
  //     this.setState({
  //     items
  //   }, () => this.handleCategories())
  // )}


  render(){
    return (

      <div className="App">
       
       <Navbar />
      <Switch>
       <Route exact path="/Home" 
       component={Home}/>
       <Route exact path="/Women"
       component={WomenContainer} />
       <Route exact path="/Men"
       component={MenContainer} />
       <Route path="*">
              <h1>Area 51: Access Denied!</h1>
      </Route>
            {/* {this.getCurrentPage()} */}
      </Switch>
      </div>


    )
  }
}

export default App;
