import React from "react";
import styled from "styled-components";

import { Route, BrowserRouter , Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import CharList from "./components/CharList";
import SoloChar from "./components/SoloChar";
import Episodes from "./components/Episodes"

export default function App(props) {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Switch>
         
          <Route path="/chars/:id" component={SoloChar}/>
          <Route path="/chars" component={CharList} />
          <Route path="/" exact component={CharList} />
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1c75e9;
  a:hover {
    text-decoration: none;
  }
`;
