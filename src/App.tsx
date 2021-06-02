import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Detail } from './components/pages/Detail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/detail/:id" component={Detail} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
