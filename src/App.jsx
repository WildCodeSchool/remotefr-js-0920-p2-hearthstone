import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticlesImage from './components/ArticlesImage';
import './App.css';

// import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header active={false} />
      <ArticlesImage />;{/* <Switch>
        <Route path="" />
      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
