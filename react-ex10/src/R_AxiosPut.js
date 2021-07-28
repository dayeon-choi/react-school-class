import React, { Component } from "react";

class R_AxiosPost extends Component {
  componentDidMount() {
    R_AxiosPost.post("http://data.jsontest.com/", {
      a: "react",
      b: 200,
    }).then((response) => {
      alert(response.data.data);
    });
  }

  render() {
    return (
      <div>
        <h1>axios post</h1>
      </div>
    );
  }
}
export default R_AxiosPost;
