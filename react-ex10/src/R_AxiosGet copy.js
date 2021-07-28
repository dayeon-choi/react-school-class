import React, { Component } from "react";

class R_AxiosGet extends Component {
  componentDidMount() {
    R_AxiosGet.get("http://data.jsontest.com/");
    // (response) => {alert(response.data.get)}
  }

  render() {
    return (
      <div>
        <h1>axios get</h1>
      </div>
    );
  }
}
export default R_AxiosGet;
