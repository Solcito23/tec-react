import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import BundleItems from "./index";
import thunk from "redux-thunk";
import { delete_bundle_action } from "../../Redux/Actions/bundle.action";

const middlewares = [thunk];
const mockBundle = {
  nameBundle: "Test Bundle name",
  total: 460,
  items: [
    {
      code: "C0DE002",
      description: "This is the item description, allowing for free text",
      price: 200,
      type: "Single",
      order: 2,
      subItems: [
        {
          code: "C0DE002-01",
          description: "This is the item description, allowing for free text",
          price: 260,
          type: "Single",
          order: 1,
        },
      ],
    },
  ],
};
let wrapper;

describe("Component BundleItem", () => {
  const mockStore = configureStore(middlewares);
  const store = mockStore(mockBundle);
  store.dispatch = jest.fn();
  const deleteItemIndex = 0;
  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <BundleItems bundle={mockBundle} idx={deleteItemIndex}></BundleItems>
      </Provider>
    );
  });

  afterEach(() => {
    cleanup;
  });

  test("search text name", () => {
    const { getByTestId } = wrapper;
    expect(getByTestId("data-test-name")).toBeDefined();
  });

  test("delete bundle", () => {
    const { getByTestId, debug } = wrapper;
    const btnDelete = getByTestId("data-test-delete");
    fireEvent.click(btnDelete);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
