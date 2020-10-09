import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CreateBundle from "./index";

let wrapper;
const mockBundle = {
  items: [
    {
      code: "C0DE001",
      description: "This is the item description, allowing for free text",
      price: 100.25,
      type: "Simple",
      order: 1,
      subItems: [
        {
          code: "C0DE002-01",
          description: "This is the item description, allowing for free text",
          price: 260,
          type: "Multiple",
          order: 1,
        },
      ],
    },
  ],
};
const mockStore = configureStore();
const store = mockStore(mockBundle);
store.dispatch = jest.fn();

describe("Component CreateBundle", () => {
  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <CreateBundle />
      </Provider>
    );
  });

  afterEach(() => {
    cleanup;
  });

  test("should render CreateBundle component correctly", () => {
    const { getByTestId } = wrapper;
    expect(getByTestId("data-test-content-create-bundle")).toBeDefined();
  });

  test("should dispatch accion add to bundle", () => {
    const { getByText, getByTestId } = wrapper;
    const btnAddBundle = getByText("Add to Bundle");
    fireEvent.click(btnAddBundle);
    expect(getByTestId("data-test-name")).toBeDefined();
  });

  test("should update input of name bundle on change", () => {
    const { getByText, getByTestId } = wrapper;

    const btnAddBundle = getByText("Add to Bundle");
    fireEvent.click(btnAddBundle);

    const inputCode = getByTestId("data-test-name");
    fireEvent.change(inputCode, { target: { value: "test name bundle" } });
    expect(inputCode.value).toBe("test name bundle");
  });

  test("should update input multiple price on change", () => {
    const { getByText, getByTestId } = wrapper;

    const btnAddBundle = getByText("Add to Bundle");
    fireEvent.click(btnAddBundle);

    const multipleItems = getByTestId("data-test-multiple-price");
    fireEvent.change(multipleItems, { target: { value: "2" } });
    expect(getByTestId("data-test-priceMultiple").innerHTML).toEqual("$520.00");
  });

  test("should dispatch an action on button delete click", () => {
    const { getByText, getByTestId } = wrapper;

    const btnAddBundle = getByText("Add to Bundle");
    fireEvent.click(btnAddBundle);

    const btnDeleteToBundle = getByTestId("data-test-btnDeleteToBundle");
    fireEvent.click(btnDeleteToBundle);

    expect(getByTestId("data-test-message")).toBeDefined();
  });

  test("should dispatch an action on button accept bundle click", () => {
    const { getByText, getByTestId } = wrapper;

    const btnAddBundle = getByText("Add to Bundle");
    fireEvent.click(btnAddBundle);

    const btnAcceptBundle = getByText("Accept Bundle");
    fireEvent.click(btnAcceptBundle);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
