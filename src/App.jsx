import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Articles from './components/Articles';
import './App.css';

// import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header active={false} />
      <Articles />;
      {/* <Switch>
        <Route path="" />
      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
