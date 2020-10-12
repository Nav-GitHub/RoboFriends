import React from 'react';
import SearchBox from './SearchBox';
import {robots} from './robots';
import CardList from './CardList';
import './App.css';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        };
    }
    
    onSearchChange= (event) => {
        this.setState({searchfield: event.target.value});
        
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots=> {
            return (robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
        })
        return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
        </div>
        );
    }    
}

export default App;