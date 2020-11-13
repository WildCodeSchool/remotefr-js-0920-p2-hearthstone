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
];
    
const avatars = [
  {
    name: 'Cyrille Fabre',
    bigUrl: '../assets/AvatarCarteCyrille.png',
  },
  {
    name: 'Justine Pain',
    bigUrl: '../assets/AvatarCarteJustine.png',
  },
  {
    name: 'Vivien Michelesi',
    bigUrl: '../assets/AvatarCarteVivien.png',
  },
];

const socialNetworks = [
  {
    name: 'Youtube',
    imgUrl: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIyNC4xMTMyODEgMzAzLjk2MDkzOCA4My4yNzM0MzgtNDcuOTYwOTM4LTgzLjI3MzQzOC00Ny45NjA5Mzh6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMzYzMjgxIDAtMjU2IDExNC42MzY3MTktMjU2IDI1NnMxMTQuNjM2NzE5IDI1NiAyNTYgMjU2IDI1Ni0xMTQuNjM2NzE5IDI1Ni0yNTYtMTE0LjYzNjcxOS0yNTYtMjU2LTI1NnptMTU5Ljk2MDkzOCAyNTYuMjYxNzE5czAgNTEuOTE3OTY5LTYuNTg1OTM4IDc2Ljk1MzEyNWMtMy42OTE0MDYgMTMuNzAzMTI1LTE0LjQ5NjA5NCAyNC41MDc4MTItMjguMTk5MjE5IDI4LjE5NTMxMi0yNS4wMzUxNTYgNi41ODk4NDQtMTI1LjE3NTc4MSA2LjU4OTg0NC0xMjUuMTc1NzgxIDYuNTg5ODQ0cy05OS44Nzg5MDYgMC0xMjUuMTc1NzgxLTYuODUxNTYyYy0xMy43MDMxMjUtMy42ODc1LTI0LjUwNzgxMy0xNC40OTYwOTQtMjguMTk5MjE5LTI4LjE5OTIxOS02LjU4OTg0NC0yNC43Njk1MzEtNi41ODk4NDQtNzYuOTQ5MjE5LTYuNTg5ODQ0LTc2Ljk0OTIxOXMwLTUxLjkxNDA2MiA2LjU4OTg0NC03Ni45NDkyMTljMy42ODc1LTEzLjcwMzEyNSAxNC43NTc4MTItMjQuNzczNDM3IDI4LjE5OTIxOS0yOC40NjA5MzcgMjUuMDM1MTU2LTYuNTg5ODQ0IDEyNS4xNzU3ODEtNi41ODk4NDQgMTI1LjE3NTc4MS02LjU4OTg0NHMxMDAuMTQwNjI1IDAgMTI1LjE3NTc4MSA2Ljg1MTU2MmMxMy43MDMxMjUgMy42ODc1IDI0LjUwNzgxMyAxNC40OTYwOTQgMjguMTk5MjE5IDI4LjE5OTIxOSA2Ljg1MTU2MiAyNS4wMzUxNTcgNi41ODU5MzggNzcuMjEwOTM4IDYuNTg1OTM4IDc3LjIxMDkzOHptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg==`,
    url: 'https://www.youtube.com/channel/UCVia_crjzJylRmGq7SHTiaw',
  },
  {
    name: 'Twitter',
    imgUrl: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMzYzMjgxIDAtMjU2IDExNC42MzY3MTktMjU2IDI1NnMxMTQuNjM2NzE5IDI1NiAyNTYgMjU2IDI1Ni0xMTQuNjM2NzE5IDI1Ni0yNTYtMTE0LjYzNjcxOS0yNTYtMjU2LTI1NnptMTE2Ljg4NjcxOSAxOTkuNjAxNTYyYy4xMTMyODEgMi41MTk1MzIuMTY3OTY5IDUuMDUwNzgyLjE2Nzk2OSA3LjU5Mzc1IDAgNzcuNjQ0NTMyLTU5LjEwMTU2MyAxNjcuMTc5Njg4LTE2Ny4xODM1OTQgMTY3LjE4MzU5NGguMDAzOTA2LS4wMDM5MDZjLTMzLjE4MzU5NCAwLTY0LjA2MjUtOS43MjY1NjItOTAuMDY2NDA2LTI2LjM5NDUzMSA0LjU5NzY1Ni41NDI5NjkgOS4yNzczNDMuODEyNSAxNC4wMTU2MjQuODEyNSAyNy41MzEyNSAwIDUyLjg2NzE4OC05LjM5MDYyNSA3Mi45ODA0NjktMjUuMTUyMzQ0LTI1LjcyMjY1Ni0uNDc2NTYyLTQ3LjQxMDE1Ni0xNy40NjQ4NDMtNTQuODk0NTMxLTQwLjgxMjUgMy41ODIwMzEuNjg3NSA3LjI2NTYyNSAxLjA2MjUgMTEuMDQyOTY5IDEuMDYyNSA1LjM2MzI4MSAwIDEwLjU1ODU5My0uNzIyNjU2IDE1LjQ5NjA5My0yLjA3MDMxMi0yNi44ODY3MTgtNS4zODI4MTMtNDcuMTQwNjI0LTI5LjE0NDUzMS00Ny4xNDA2MjQtNTcuNTk3NjU3IDAtLjI2NTYyNCAwLS41MDM5MDYuMDA3ODEyLS43NSA3LjkxNzk2OSA0LjQwMjM0NCAxNi45NzI2NTYgNy4wNTA3ODIgMjYuNjEzMjgxIDcuMzQ3NjU3LTE1Ljc3NzM0My0xMC41MjczNDQtMjYuMTQ4NDM3LTI4LjUyMzQzOC0yNi4xNDg0MzctNDguOTEwMTU3IDAtMTAuNzY1NjI0IDIuOTEwMTU2LTIwLjg1MTU2MiA3Ljk1NzAzMS0yOS41MzUxNTYgMjguOTc2NTYzIDM1LjU1NDY4OCA3Mi4yODEyNSA1OC45Mzc1IDEyMS4xMTcxODcgNjEuMzk0NTMyLTEuMDA3ODEyLTQuMzA0Njg4LTEuNTI3MzQzLTguNzg5MDYzLTEuNTI3MzQzLTEzLjM5ODQzOCAwLTMyLjQzNzUgMjYuMzE2NDA2LTU4Ljc1MzkwNiA1OC43NjU2MjUtNTguNzUzOTA2IDE2LjkwMjM0NCAwIDMyLjE2Nzk2OCA3LjE0NDUzMSA0Mi44OTA2MjUgMTguNTY2NDA2IDEzLjM4NjcxOS0yLjY0MDYyNSAyNS45NTcwMzEtNy41MzEyNSAzNy4zMTI1LTE0LjI2MTcxOS00LjM5NDUzMSAxMy43MTQ4NDQtMTMuNzA3MDMxIDI1LjIyMjY1Ny0yNS44Mzk4NDQgMzIuNSAxMS44ODY3MTktMS40MjE4NzUgMjMuMjE0ODQ0LTQuNTc0MjE5IDMzLjc0MjE4Ny05LjI1MzkwNi03Ljg2MzI4MSAxMS43ODUxNTYtMTcuODM1OTM3IDIyLjEzNjcxOS0yOS4zMDg1OTMgMzAuNDI5Njg3em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9zdmc+`,
    url: 'https://twitter.com/playhearthstone',
  },
];

const websiteUrl = [
  {
    name: 'Hearthstone',
    url: 'https://playhearthstone.com/fr-fr',
  },
  {
    name: 'Blizzard',
    url: 'https://www.blizzard.com/fr-fr/',
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
      <Footer
        avatar={avatars}
        socialNetwork={socialNetworks}
        websiteUrl={websiteUrl}
      />
    </div>
  );
}

export default App;
