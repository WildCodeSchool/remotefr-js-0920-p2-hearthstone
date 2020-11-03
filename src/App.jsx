import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD
import PagePrinc from './components/PagePrinc';
=======
import Articles from './components/Articles';
import Research from './components/Research';
>>>>>>> dev
import './App.css';

function App() {
  return (
    <div className="App">
      <Header active={false} />
<<<<<<< HEAD
      <PagePrinc />;
=======
      <Articles />
      <Research />
>>>>>>> dev
      <Footer />
    </div>
  );
}

export default App;
