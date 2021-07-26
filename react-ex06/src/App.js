import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  render() {
    console.log("Render");
    return (
      <div>
        <h1>숫자는 {this.state.count} 입니다.</h1>
        <button onClick={this.add}>+1</button>
        <button onClick={this.minus}>-1</button>
      </div>
    );
  }
}

export default App;
