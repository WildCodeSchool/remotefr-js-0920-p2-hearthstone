import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PagePrinc from './components/PagePrinc';
import Research from './components/Research';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header active={false} />
      <PagePrinc />
      <Research />
      <Footer />
    </div>
  );
}

export default App;
