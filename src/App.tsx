import CreateEvent from './pages/CreateEvent';
import Event from './pages/Event';
import Home from './pages/Home'
import CreateEventNew from './pages/CreateEventNew';

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
          <Route exact path="/create-event-new">
            <CreateEventNew />
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
