import './App.css';
import Footer from './components/Footer';
import Articles from './components/Articles';

// import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Articles />;
      {/* <Switch>
        <Route path="" />
      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
