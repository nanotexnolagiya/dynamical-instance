import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = () => {
  return <h1>This is Home page</h1>
}

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;