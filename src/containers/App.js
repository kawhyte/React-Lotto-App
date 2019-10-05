import React, { Component }from "react";
import { connect } from 'react-redux';
import "./App.css";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
//import Scroll from "../components/Scroll";
import Header from "../components/Header";
import { robots } from "../robots";
import { lotto } from "../lotto";
import ErrorBoundry from "../components/ErrorBoundry"
import { setSearchField} from '../actions';

// parameter state comes from index.js provider store state(rootReducers
const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
   //robots: state.requestRobots.robots
    //isPending: state.requestRobots.isPending
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    //onRequestRobots: () => dispatch(requestRobots())
  }
}



class App extends Component {

constructor() {
  super();
  this.state = { 
    robots:[],
    lotto: lotto,
    searchfield: ''
  }
}

componentDidMount(){
 
  //console.log(this.props.store.getState())
  //fetch('https://jsonplaceholder.typicode.com/users')
  // fetch('/src/lotto.js')
  // .then(response =>{

  //   return response.json()
  // })
  //  .then( users => {
  //   this.setState({robots:users})
    
  // }) 
} 

onSearchChange =(event)=> {
  this.setState( {searchfield: event.target.value});
}


  render(){

    const { searchField, onSearchChange, isPending } = this.props;
    
    const filteredRobots = lotto.filter(lotto =>{
      
    
      return lotto.ticketName.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });

  return (lotto.length === 0)? <h1>Loading...</h1> : 
    
   (
    <div className='tc'>
      <Header/> 
      <Searchbox searchChange ={this.onSearchChange}/>
      {/* <Scroll> */}
      <ErrorBoundry>
      <CardList lotto={filteredRobots} />
      {/* </Scroll> */}
      </ErrorBoundry>
    </div>
  );


  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);