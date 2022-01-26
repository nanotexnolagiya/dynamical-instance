import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = () => {
  return <h1>Hello Admin</h1>
}

const SignIn = () => {
  return <div>
    <h1>Admin Sign In</h1>
    <form action="">
      <input type="text" placeholder='Login' />
      <input type="pasword" placeholder='Password' />
      <button type='submit'>Submit</button>
    </form>
  </div>
}

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default App;