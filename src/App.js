import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="*" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
