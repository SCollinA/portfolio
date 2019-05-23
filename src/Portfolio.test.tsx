import * as enzyme from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import GitHub from "./GitHub/GitHub";
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

  it("renders GitHub component at '/github' path", () => {
    const portfolio = enzyme.shallow(<Portfolio/>);
    const router = portfolio.find(Router);
    expect(router.containsMatchingElement(<Route path="/github" component={GitHub}/>)).toBe(true);
  });

  it("renders Contact component at '/contact' path", () => {
    const portfolio = enzyme.shallow(<Portfolio/>);
    const router = portfolio.find(Router);
    expect(router.containsMatchingElement(<Route path="/contact" component={Contact}/>)).toBe(true);
  });
});
