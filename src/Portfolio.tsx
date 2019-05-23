import React from "react";
import "./Portfolio.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./Home/Home";

const Portfolio: React.FC = () => {
  return (
    <div className="Portfolio">
      <Router>
        <Route path="/" component={Home}/>
      </Router>
    </div>
  );
};

export default Portfolio;
