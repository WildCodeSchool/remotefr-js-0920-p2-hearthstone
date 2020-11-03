import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Articles from './components/Articles';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header active={false} />
      <Articles />;
      <Footer />
    </div>
  );
}

export default App;
