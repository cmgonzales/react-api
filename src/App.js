import React, { Component } from 'react';
import Userinput from './UserInput';
import './App.css';
import Crime from './crime'


class App extends Component {
  render() {
    return (
      <div> 
      
      <Userinput/>
      <Crime/>
      </div>
    );
  }
}

export default App;
