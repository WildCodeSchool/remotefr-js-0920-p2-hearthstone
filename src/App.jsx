import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Articles from './components/Articles';
// import { ReactComponent as YoutubeIcon } from './assets/youtube.svg';
import './App.css';

function App() {
  return (
    // <Router>
    <div className="App">
      <Header active={false} />
      <Articles />
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
