import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "../App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const helpers = render(<App />);
  });

  it("renders 'Welcome to the Stadium!'", () => {
    const { getByText } = render(<App />);
    const text = getByText(/welcome to the stadium/i);
    expect(text).toBeInTheDocument();
  });
});
