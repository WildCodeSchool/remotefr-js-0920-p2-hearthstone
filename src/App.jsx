import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Research from './components/Research';
import './App.css';

// import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header active={false} />
      <Articles />
      <Research />
      <Footer />
    </div>
  );
}

export default App;
