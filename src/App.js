import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Search from './containers/Search/Search';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route path="/" exact component={Search} />
      </Switch>
    </div>
  );
}

export default App;
