import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './lightupssp2019/LightUp2019';
import Homepage from './Homepage';
import './style.css';
import Admin from './admin/Admin';

export default function App() {
  document.title = 'Light Up SSP'
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/2019">
          <Home />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/">
          <p>Opps! Page not found.</p>
        </Route>
      </Switch>
    </Router>
  );
}
