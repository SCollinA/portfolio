import React from "react";
import ReactDOM from "react-dom";
import * as enzyme from "enzyme";
import Portfolio from "./Portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";

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

});
