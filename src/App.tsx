import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import router from './router';

const App = () => (
  <BrowserRouter>
    <Switch>
      {router.map(each => (
        <Route key={each.path} exact path={each.path} component={each.component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
