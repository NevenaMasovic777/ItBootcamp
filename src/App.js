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
import { NewPoll } from './layout/private/components/polls/new-poll';
import { PollResults } from './layout/private/components/polls/poll-results';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <PublicRoute  component={Login} path="/login" />
          <PrivateRoute component={Home} path="/home" />
          <Route exact path="/polls" component={Polls}></Route>
          <Route exact path="/orders" component={Orders}></Route>
          <Route exact path="/settings" component={Settings}></Route>
          <Route exact path = "/newpoll" component={NewPoll}></Route>
          <Route exact path="/results" component={PollResults}></Route>
          <Redirect from="/" to="home" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
