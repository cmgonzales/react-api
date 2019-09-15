import React, { Component } from 'react';
import '../style/App.css';
import Header from './header';
import Nav from './navbar';
import History from './history'

class App extends Component {
  render() {
    return (
      <div> 
      <Nav/>
      <Header/>
      <History/>
      </div>
    );
  }
}

export default App;
