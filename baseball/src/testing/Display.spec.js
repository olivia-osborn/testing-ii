import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "../components/Display";

describe("<Display />", () => {
  it("renders without crashing", () => {
    const helpers = render(<Display />);
  });
});
