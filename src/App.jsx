import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PagePrinc from './components/PagePrinc';
import Research from './components/Research';
import './App.css';

const cards = [
  {
    id: 1,
    name: 'Jongleuse de lames',
    rarity: 'rare',
    mana: '6',
    class: 'demon-hunter',
  },
  {
    id: 2,
    name: 'Whatley, maître de la piste',
    rarity: 'légendaire',
    mana: '5',
    class: 'warrior',
  },
  {
    id: 3,
    name: 'Griffon du manège',
    rarity: 'common',
    mana: '5',
    class: 'paladin',
  },
];

function App() {
  return (
    <div className="App">
      <Header active={false} />
      <Switch>
        <Route exact path="/">
          <PagePrinc />
        </Route>
        <Route path="/research">
          <Research singleCard={cards} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
