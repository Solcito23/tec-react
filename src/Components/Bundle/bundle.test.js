import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Bundle from "./index";

const mockBundle = {
  nameBundle: "Test Bundle name",
  items: [],
};
const handleChangeName = jest.fn();
const onDeleteToBundle = jest.fn();
const handleChangeTotal = jest.fn();

const renderComponent = (bundle) => {
  const mockStore = configureStore();
  const store = mockStore(mockBundle);
  render(
    <Provider store={store}>
      <Bundle
        bundle={bundle}
        handleChangeName={handleChangeName}
        onDeleteToBundle={onDeleteToBundle}
        handleChangeTotal={handleChangeTotal}
      ></Bundle>
    </Provider>
  );
};

describe("Bundle", () => {
  test("Render component bundle", () => {
    renderComponent(mockBundle);
  });
  test("search text name", () => {
    renderComponent(mockBundle);
    expect(screen.getByDisplayValue("Test Bundle name")).toBeInTheDocument();
  });

  test("render items", () => {
    mockBundle.items = [
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
    ];
    renderComponent(mockBundle);
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  test("Delete item", () => {
    renderComponent(mockBundle);
    fireEvent.click(screen.getByText(/Delete/));
    expect(onDeleteToBundle).toHaveBeenCalledTimes(1);
  });
});
