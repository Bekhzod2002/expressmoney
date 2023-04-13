import React from "react";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "../../Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="home">
        <div className="home__container">
          <Header/>
          <div className="home__wrapper">
            <Routes>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
            </Routes>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
