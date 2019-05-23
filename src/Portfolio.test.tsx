import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./Portfolio";

describe("Portfolio component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Portfolio/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
