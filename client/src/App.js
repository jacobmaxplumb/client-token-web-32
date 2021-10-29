import './App.css';
import LandingPage from './components/LandingPage';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <Switch>
          <ProtectedRoute something="'hello'" path="/home" component={Home} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
