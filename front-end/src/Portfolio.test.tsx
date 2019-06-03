import * as enzyme from "enzyme";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { client } from "./apollo/client";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import GitHub from "./GitHub/GitHub";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import Portfolio from "./Portfolio";
import Resume from "./Resume/Resume";

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

  it("renders NavBar component on all paths", () => {
    const portfolio = enzyme.shallow(<Portfolio/>);
    const router = portfolio.find(Router);
    expect(router.containsMatchingElement(<Route path="/" component={NavBar}/>)).toBe(true);
  });

  it("has an Apollo Provider with a client as a child", () => {
    const portfolio = enzyme.shallow(<Portfolio/>);
    expect(portfolio.find(ApolloProvider).exists()).toBe(true);
    expect(portfolio.find(ApolloProvider).prop("client")).toBe(client);
  });

  it("renders Resume component at '/resume' path", () => {
    const portfolio = enzyme.shallow(<Portfolio/>);
    const router = portfolio.find(Router);
    expect(router.containsMatchingElement(<Route path="/resume" component={Resume}/>)).toBe(true);
  });

  it("renders Footer component on all paths", () => {
    const portfolio = enzyme.shallow(<Portfolio/>);
    const router = portfolio.find(Router);
    expect(router.containsMatchingElement(<Route path="/" component={Footer}/>)).toBe(true);
  });
});
