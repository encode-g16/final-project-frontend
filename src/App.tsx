import Event from './pages/Event';
import Home from './pages/Home'
import CreateEvent from './pages/CreateEvent'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/create-event">
            <CreateEvent />
          </Route>
          <Route path="/events/:id">
            <Event />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
