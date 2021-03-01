import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import List from './pages/List';

function App() {
  return <Router>
    <Switch>
      <Route path="/:page" component={List} />
      <Route exact path="/" component={List} />
    </Switch>
  </Router>;
}

export default App;
