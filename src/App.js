import React, {Component} from 'react';
import SearchMovie from './components/searchMovie.js';
import './App.css';

class App  extends Component{
  render(){
    return (
        <div className="container">
          <h1 className="appTitle">Know your Movie</h1>
          <SearchMovie></SearchMovie>
        </div>
    )
  }
}
export default App;
