import './App.css';
import LandingPage from './components/LandingPage';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import { login, logout } from './services/firebase.service';
import { getHealth, getProtected } from './services/backend.service';

function App() {
  const signin = () => {
    login();
  }

  const signout = () => {
    logout();
  }

  return (
    <Router>
      <div className="App">
        <button onClick={signin}>login</button>
        <button onClick={signout}>logout</button>
        <button onClick={() => getHealth()}>health</button>
        <button onClick={() => getProtected()}>protected</button>
        <ul>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <Switch>
          <ProtectedRoute path="/home" title="Home" component={Home} />
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
