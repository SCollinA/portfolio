import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import GitHub from "./GitHub/GitHub";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import "./Portfolio.css";

const Portfolio: React.FC = () => {
  return (
    <div className="Portfolio">
      <Router>
        <Route path="/" component={NavBar}/>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/github" component={GitHub}/>
        <Route exact={true} path="/contact" component={Contact}/>
      </Router>
    </div>
  );
};

export default Portfolio;
