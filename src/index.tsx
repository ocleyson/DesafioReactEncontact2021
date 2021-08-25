import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import reportWebVitals from "./reportWebVitals";
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Switch>
          <Route exact path="/">
            <h1>home</h1>
          </Route>
        </Switch>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
