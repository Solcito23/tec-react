import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Component App", () => {
  test("should render App component correctly", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("container-main")).toBeDefined();
  });
});
