import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "../components/Dashboard";

describe("<Dashboard />", () => {
  it("renders without crashing", () => {
    const helpers = render(<Dashboard />);
  });

  it("check that strikes start at 0", () => {
    const { getByText } = render(<Dashboard />);
    const strikes = getByText(/strikes: 0/i);
    expect(strikes).toBeInTheDocument();
  });

  it("check that balls start at 0", () => {
    const { getByText } = render(<Dashboard />);
    const balls = getByText(/balls: 0/i);
    expect(balls).toBeInTheDocument;
  });

  it("check that strikes increment", () => {
    const { getByTestId } = render(<Dashboard />);
    const strikeButton = getByTestId("strike-button");
    fireEvent.click(strikeButton);
    expect(getByText);
  });
});
