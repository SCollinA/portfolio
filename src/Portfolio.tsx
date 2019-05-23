import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GitHub from "./GitHub/GitHub";
import Home from "./Home/Home";
import "./Portfolio.css";

const Portfolio: React.FC = () => {
  return (
    <div className="Portfolio">
      <Router>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/github" component={GitHub}/>
      </Router>
    </div>
  );
};

export default Portfolio;
