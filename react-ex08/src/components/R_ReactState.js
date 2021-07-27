import React, { Component } from "react";

class R_ReactState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: this.propsreactString,
      StateNumber: 200,
    };
  }
  render() {
    return (
      <div style={{ padding: "0px" }}>
        {this.state.StateString}
        {this.state.StateNumber}
      </div>
    );
  }
}
export default R_ReactState;
