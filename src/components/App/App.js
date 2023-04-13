import React from "react";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.scss";

const AppContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: grid;
  justify-content: center;
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
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
      </AppHomecontainer>
    </AppContainer>
  );
}

export default App;
