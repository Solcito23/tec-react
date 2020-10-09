import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Item from "./index";

const mockBundle = {
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
          type: "Multiple",
          order: 1,
        },
      ],
    },
  ],
};

const onAddItemToBundle = jest.fn();
const onDeleteToBundle = jest.fn();
const handleChangeTotal = jest.fn();
let actionAddBundle = "addBundle";
let actionCreateItem = "createItem";
let actionCreateBundle = "createBundle";

const mockStore = configureStore();
const store = mockStore(mockBundle);
store.dispatch = jest.fn();

const renderComponent = (action) => {
  return render(
    <Provider store={store}>
      <Item
        item={mockBundle.items[0]}
        onAddItemToBundle={onAddItemToBundle}
        onDeleteToBundle={onDeleteToBundle}
        handleChangeTotal={handleChangeTotal}
        action={action}
      />
    </Provider>
  );
};

describe("Component Item", () => {
  test("should render Item component correctly", () => {
    const { getByTestId } = renderComponent(actionAddBundle);
    expect(getByTestId("data-content-item")).toBeDefined();
  });

  test("should dispatch an action on button delete item click", () => {
    const { getByTestId } = renderComponent(actionCreateItem);
    const btnDelete = getByTestId("test-id-delete-item");
    fireEvent.click(btnDelete);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  test("should dispatch an action on button delete sub-item click", () => {
    const { getByTestId } = renderComponent(actionCreateItem);
    const btnDelete = getByTestId("test-id-delete-subitem");
    fireEvent.click(btnDelete);
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  test("should dispatch an action on button add to bundle click", () => {
    const { getByText } = renderComponent(actionCreateBundle);
    const btnAddBundle = getByText("Add to Bundle");
    fireEvent.click(btnAddBundle);
    expect(onAddItemToBundle).toHaveBeenCalledTimes(1);
  });
});
