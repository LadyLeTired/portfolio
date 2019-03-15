import React, { Component } from "react";
import { Navbar, Routes, CartoonyAmber } from "./Components";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        <CartoonyAmber />
      </div>
    );
  }
}

export default App;
