import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './css/GlobalStyles'
import Context from "./context/context";
import Home from "./view/Home/Home";
import NotFound from "./view/noFound/NoFound"

function App(props) {
  return (
    <main>
      <GlobalStyle />
      <Context.Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />                 
            <Route component={NotFound} />
          </Switch>     
        </BrowserRouter>
      </Context.Provider>
          
    </main>
);
}

export default App;
