import React from "react";
import Navigation from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <div className="App-header">
          <Navigation />
        </div>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" exact component={Resume} />
        <Route exact path="/" component={Home} />
      </HashRouter>
    </div>
  );
}

export default App;
