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
    const { getByTestId, getByText } = render(<Dashboard />);
    const strikeButton = getByTestId("strike-button");
    fireEvent.click(strikeButton);
    const text = getByText(/strikes: 1/i);
    expect(text).toBeInTheDocument();
  });

  it("check that balls increment", () => {
    const { getByTestId, getByText } = render(<Dashboard />);
    const ballButton = getByTestId("ball-button");
    fireEvent.click(ballButton);
    const text = getByText(/balls: 1/i);
    expect(text).toBeInTheDocument();
  });

  it("checks that strikes don't go above 2", () => {
    const { getByTestId, getByText } = render(<Dashboard />);
    const strikeButton = getByTestId("strike-button");
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    const text = getByText(/strikes: 0/i);
    expect(text).toBeInTheDocument();
  });

  it("checks that balls don't go above 3", () => {
    const { getByTestId, getByText } = render(<Dashboard />);
    const ballButton = getByTestId("ball-button");
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    const text = getByText(/balls: 0/i);
    expect(text).toBeInTheDocument();
  });
});
