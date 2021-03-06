import './App.css';
import {
  Router,
  Switch,
  Route,
  Link
} from "wouter";
import About from './screens/About';
import Home from './screens/Home';
import Form1 from './screens/Form1';
import Results from './screens/Results';

function App() {

  return (
    
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/form1">
          <Form1 />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
