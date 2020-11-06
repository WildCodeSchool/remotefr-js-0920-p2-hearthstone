import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PagePrinc from './components/PagePrinc';
import Research from './components/Research';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header active={false} />
      <Switch>
        <Route exact path="/">
          <PagePrinc />
        </Route>
        <Route path="/research">
          <Research />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
