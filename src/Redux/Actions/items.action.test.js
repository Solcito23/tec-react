import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  add_item_action,
  delete_item_action,
  delete_subItem_action,
} from "./items.action";

const mockStoreData = {
  items: [
    {
      code: "C0DE000",
      description: "This is the item description, testing",
      price: 300,
      type: "Simple",
      order: 1,
      subItems: [
        {
          code: "C0DE000-01",
          description: "This is the item description, testing",
          price: 200,
          type: "Simple",
          order: 1,
        },
      ],
    },
  ],
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(mockStoreData);

describe("items action", () => {
  afterEach(() => {
    store.clearActions();
  });
  it("should add the item", () => {
    const item = {
      code: "C0DE001",
      description: "This is the item description, testing",
      price: "$100.00",
      type: "Simple",
      order: 1,
      subItems: [],
    };
    store.dispatch(add_item_action(item));
    expect(store.getActions()).toEqual([
      {
        type: "ADD_ITEM",
        payload: item,
      },
    ]);
  });
  it("should delete the item", () => {
    store.dispatch(delete_item_action("C0DE000"));
    expect(store.getActions()).toEqual([{ type: "DELETE_ITEM", payload: 0 }]);
  });

  it("should delete the sub-item", () => {
    store.dispatch(delete_subItem_action("C0DE000-01"));
    expect(store.getActions()).toEqual([
      { type: "DELETE_SUBITEM", payload: 0, index: 0 },
    ]);
  });
});
