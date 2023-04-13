import React from "react";
import Header from "../Header/Header";
import Home from '../../pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.scss";
 
const AppContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  justify-content: flex-start;
  background: red;
  justify-content: center;
`;

const AppHomecontainer = styled.div`
  width: 100%;
  height: auto;
`

function App() {
  return (
    
        <AppContainer className="home__container">
          <Header/>
          <AppHomecontainer className="home__wrapper">
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
            </Routes>


          </AppHomecontainer>
        </AppContainer>
  );
}

export default App;
