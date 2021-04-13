import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.scss';
import '../components/Loading.css';
import Scroll from '../components/Scroll.js';

class App extends Component {
 constructor(){
    super(); 
    this.state = {
         robots : [],
         searchField : ''
     }
 }

 componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({robots:users}));

 }

 
onSearchChange = (event) => {
    this.setState({searchField : event.target.value}) 
    }
    
    render() {
    const {robots, searchField} = this.state;

    const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
           });
    return !robots.length ?
        <div>
        <div class="loader">Loading...</div>
        </div>
        :
        (

  <div> 
  <div>
  <div class="container">
  <div class="glitch " data-text="ROBOFRIENDS">ROBOFRIENDS</div>
  <div class="glow ">ROBOFRIENDS</div>
  </div>
  </div>
  
  
  <div id = 'dunno' className = 'tc '>
    <SearchBox searchChange= {this.onSearchChange}/>
    <Scroll>
    <CardList robots={filteredRobots}/>
    </Scroll>
    </div>
    </div>
    )
}
}
export default App;