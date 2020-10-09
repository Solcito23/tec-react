import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import ReleasedBundle from "./index";

const mockStore = configureStore();
const store = mockStore({ bundles: [] });

describe("Component ReleasedBundle", () => {
  test("should render ReleasedBundle component correctly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ReleasedBundle />
      </Provider>
    );
    expect(getByTestId("data-test-content-message")).toBeDefined();
  });
});
