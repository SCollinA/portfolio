import * as enzyme from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import Portfolio from "./Portfolio";

describe("Portfolio component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Portfolio/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a router as a child", () => {
    const portfolio = enzyme.shallow(<Portfolio/>);
    expect(portfolio.find(Router).exists()).toBe(true);
  });

  it("renders Home component at '/' path", () => {
    const portfolio = enzyme.shallow(<Portfolio/>);
    const router = portfolio.find(Router);
    expect(router.containsMatchingElement(<Route path="/" component={Home}/>)).toBe(true);
  });

});
