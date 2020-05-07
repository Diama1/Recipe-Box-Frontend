import React from "react";
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import "../assets/style.scss";
import Recipe from './home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component= {Recipe} />
    </Switch>
  </BrowserRouter>
)
export default App;
