import React from "react";
import R_AxiosGet from "./R_AxiosGet copy";
import R_AxiosPost from "./R_AxiosPut";

function App() {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <R_AxiosGet />
      <R_AxiosPost />
    </div>
  );
}

export default App;
