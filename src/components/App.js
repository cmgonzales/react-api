import React, { Component } from "react";
import "../style/App.css";
import Header from "./header";
import Nav from "./navbar";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Nav />
          <Header />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
