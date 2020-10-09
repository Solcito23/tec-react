import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import BundleList from "./index";

const mockBundleEmpty = {
  bundles: [],
};
const mockBundle = {
  bundles: [
    {
      name: "Bundle 1",
      total: 260,
      items: [
        {
          code: "C0DE001",
          description: "This is the item description, allowing for free text",
          price: 100.25,
          type: "Multiple",
          order: 1,
          subItems: [],
        },
        {
          code: "C0DE002",
          description: "This is the item description, allowing for free text",
          price: 200,
          type: "Single",
          order: 2,
          subItems: [
            {
              code: "C0DE002-01",
              description:
                "This is the item description, allowing for free text",
              price: 260,
              type: "Single",
              order: 1,
            },
          ],
        },
      ],
    },
  ],
};

const onAddItemToBundle = jest.fn();
let wrapper;

describe("Component BundleList", () => {
  const mockStore = configureStore();
  const store = mockStore(mockBundle);
  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <BundleList />
      </Provider>
    );
  });
  afterEach(() => {
    cleanup;
  });

  test("render list of bundles", () => {
    const { getByTestId } = wrapper;
    expect(getByTestId("data-test-content")).toBeDefined();
  });

  test("render content not bundles", () => {
    const storeEmpty = mockStore(mockBundleEmpty);
    const { getByTestId } = render(
      <Provider store={storeEmpty}>
        <BundleList />
      </Provider>
    );
    expect(getByTestId("data-test-content-message")).toBeDefined();
  });
});
