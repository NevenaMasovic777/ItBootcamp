import React from 'react';
import './App.css';
import { Login } from './layout/public/components/login/login';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { PublicRoute } from './layout/public/publicRoute';
import { PrivateRoute } from './layout/private/privateRoute';
import { Home } from './layout/private/components/home';
import { Orders } from './layout/private/components/orders/orders';
import { Polls } from './layout/private/components/polls/polls';
import { Settings } from './layout/private/components/settings/settings';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <PublicRoute  component={Login} path="/login" />
          <PrivateRoute component={Home} path="/home" />
          <Route path="/polls" component={Polls}></Route>
          <Route path="/orders" component={Orders}></Route>
          <Route path="/settings" component={Settings}></Route>
          <Redirect from="/" to="home" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
