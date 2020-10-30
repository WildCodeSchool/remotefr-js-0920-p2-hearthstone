import React from 'react';
import Header from './components/Header';
import './App.css';
// import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header active={false} />
      {/* <Switch>
        <Route path="" />
      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
