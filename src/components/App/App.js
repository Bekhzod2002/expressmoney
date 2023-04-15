import React from "react";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.scss";
import HowReceive from "../../pages/HowReceive/HowReceive";
import Repay from "../../pages/Repay/Repay";

const AppContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: grid;
  background: #ffffff;
`;

const AppHomecontainer = styled.div`
  width: 100%;
  height: auto;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <AppHomecontainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-receive" element={<HowReceive />} />
          <Route path="/repay" element={<Repay />} />
          <Route />
          <Route />
          <Route />
        </Routes>
      </AppHomecontainer>
    </AppContainer>
  );
}

export default App;
