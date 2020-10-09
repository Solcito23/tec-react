import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Bundle from "./index";

const mockBundle = {
  nameBundle: "Test Bundle name",
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
const handleChangeName = jest.fn();
const onDeleteToBundle = jest.fn();
const handleChangeTotal = jest.fn();
let wrapper;

describe("Component Bundle", () => {
  beforeEach(() => {
    const mockStore = configureStore();
    const store = mockStore(mockBundle);
    wrapper = render(
      <Provider store={store}>
        <Bundle
          bundle={mockBundle}
          handleChangeName={handleChangeName}
          onDeleteToBundle={onDeleteToBundle}
          handleChangeTotal={handleChangeTotal}
        ></Bundle>
      </Provider>
    );
  });

  afterEach(() => {
    cleanup;
  });

  test("should find input for the name of bundle", () => {
    const { getByTestId } = wrapper;
    expect(getByTestId("data-test-name")).toBeDefined();
  });

  test("should find button for delete item", () => {
    const { findByText } = wrapper;
    expect(findByText("Delete")).toBeDefined();
  });

  test("should dispatch an action on button delete click", () => {
    const { getByText } = wrapper;
    fireEvent.click(getByText("Delete"));
    expect(onDeleteToBundle).toHaveBeenCalledTimes(1);
  });
});
