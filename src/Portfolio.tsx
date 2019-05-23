import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import "./Portfolio.css";

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
