import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../css/new.css";
import HeaderAdmin from "./Header/Header admin";
import LoginForm from "./LoginForm";
import Footer from "./Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAdmin />
        <Route exact path={"/"}>
          <LoginForm />
        </Route>
        <Footer />
      </div>
    );
  }
}

export default App;
