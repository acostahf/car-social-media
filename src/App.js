import React, { Component } from "react";
import {} from "@material-ui/core";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Profile />
      </div>
    );
  }
}

export default App;
