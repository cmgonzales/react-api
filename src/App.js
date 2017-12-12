import React, { Component } from 'react';
import './App.css';
import Crime from './crime';
import Nav from './navbar';


class App extends Component {
  render() {
    return (
      <div> 
      <Nav/>
      <Crime/>
      </div>
    );
  }
}

export default App;
