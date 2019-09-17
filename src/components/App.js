import React, { Component } from 'react';
import '../style/App.css';
import Header from './header';
import Nav from './navbar';
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div> 
      <Nav/>
      <Header/>
      <Footer/>
      </div>
    );
  }
}

export default App;
