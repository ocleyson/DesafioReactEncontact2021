import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import reportWebVitals from "./reportWebVitals";
import App from './components/App';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Switch>
          <Route path="/:filter?">
            <Home />
          </Route>
        </Switch>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
