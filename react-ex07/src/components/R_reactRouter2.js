// ./src/components/R_reactRouter2.js
import React, { Component } from "react";
import { Link } from "react-router-dom";

class R_reactRouter2 extends Component {
  render() {
    return (
      <>
        <h1>path='/reactRouter2'</h1>
        <h3>R_reactRouter2</h3>
        <Link to={"/"}>reactRouter1</Link>
      </>
    );
  }
}

export default R_reactRouter2;
