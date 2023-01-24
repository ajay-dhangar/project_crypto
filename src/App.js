import React from "react";

import {
  Exchanges,
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Navbar,
} from "./components";
import "./App.css";

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>

    <div className="homepage">
      <Homepage />
    </div>

    <div className="exchanges">
      <Exchanges />
    </div>

    <div className="cryptocurrencies">
      <Cryptocurrencies />
    </div>
    <div className="news">
      <News />
    </div>
  </div>
);

export default App;
