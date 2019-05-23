import React from "react";
import "./Portfolio.css";
import { BrowserRouter as Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const Portfolio: React.FC = () => {
  return (
    <div className="Portfolio">
      <Router history={createBrowserHistory()}>
        <Route/>
      </Router>
    </div>
  );
};

export default Portfolio;
