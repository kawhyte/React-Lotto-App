import React, { Component }from "react";
import "./App.css";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import Header from "../components/Header";
import { robots } from "../robots";
import { lotto } from "../lotto";


class App extends Component {

constructor() {
  super();
  this.state = { 
    lotto: lotto,
   searchfeild: ''
  }
}

/* componentDidMount(){
  //fetch('https://jsonplaceholder.typicode.com/users')
  fetch('/src/lotto.js')
  .then(response =>{

    return response.json()
  })
   .then( users => {
    this.setState({robots:users})
    
  }) 
} */

onSearchChange =(event)=> {
  this.setState( {searchfeild: event.target.value});
}


  render(){

    const filteredRobots = this.state.lotto.filter(lotto =>{
    
      return lotto.ticketName.toLowerCase().includes(this.state.searchfeild.toLowerCase())
    });

  return (this.state.lotto.length === 0)? <h1>Loading...</h1> : 
    
   (
    <div className='tc'>
      <Header/> 
      <Searchbox searchChange ={this.onSearchChange}/>
      {/* <Scroll> */}
      <CardList lotto={filteredRobots} />
      {/* </Scroll> */}
    </div>
  );


  }
};

export default App;
