import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layouts/NavBar";
import Index from "./components/layouts/Index";
import { Provider } from "./Context";
import Lyrics from "./components/tracks/Lyrics";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <>
            <NavBar title="Rect.tsx" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
