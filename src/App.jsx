import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PagePrinc from './components/PagePrinc';
// import Research from './components/Research';
import './App.css';

function App() {
  return (
    // <Router>
    <div className="App">
      <Header active={false} />

      <PagePrinc />
      {/* <Research /> */}

      <Footer />
    </div>
    // </Router>
  );
}

export default App;
