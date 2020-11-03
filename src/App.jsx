import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PagePrinc from './components/PagePrinc';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header active={false} />
      <PagePrinc />;
      <Footer />
    </div>
  );
}

export default App;
