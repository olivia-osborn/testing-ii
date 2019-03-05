import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Stadium!</h1>
        <Dashboard />
      </div>
    );
  }
}

export default App;
