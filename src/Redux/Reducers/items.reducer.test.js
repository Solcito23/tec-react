import reducer from "./items.reducer";
import {
  ADD_ITEM,
  DELETE_ITEM,
  ADD_SUBITEM,
  DELETE_SUBITEM,
} from "../Actions/items.action";

const initialState = [
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
        description: "This is the item description, allowing for free text",
        price: 260,
        type: "Single",
        order: 1,
      },
    ],
  },
];

describe("Reducer about items", () => {
  it("returns the initial state", () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
  it("should type add item", () => {
    expect(
      reducer(initialState, {
        type: ADD_ITEM,
        payload: {
          code: "C0DE003",
          description: "This is the item description, testing",
          price: 300,
          type: "Simple",
          order: 4,
          subItems: [],
        },
      })
    ).toEqual([
      ...initialState,
      {
        code: "C0DE003",
        description: "This is the item description, testing",
        price: 300,
        type: "Simple",
        order: 4,
        subItems: [],
      },
    ]);
  });

  it("should type add sub-item", () => {
    expect(
      reducer(initialState, {
        type: ADD_SUBITEM,
        index: 0,
        payload: {
          code: "C0DE001-01",
          description: "This is the sub item description, testing",
          price: 100,
          type: "Single",
          order: 1,
        },
      })
    ).toEqual([
      {
        code: "C0DE001",
        description: "This is the item description, allowing for free text",
        price: 100.25,
        type: "Multiple",
        order: 1,
        subItems: [
          {
            code: "C0DE001-01",
            description: "This is the sub item description, testing",
            price: 100,
            type: "Single",
            order: 1,
          },
        ],
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
            description: "This is the item description, allowing for free text",
            price: 260,
            type: "Single",
            order: 1,
          },
        ],
      },
    ]);
  });

  it("should type delete item", () => {
    expect(
      reducer(initialState, {
        type: DELETE_ITEM,
        payload: 0,
      })
    ).toEqual([
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
    ]);
  });

  it("should type delete sub-item", () => {
    expect(
      reducer(initialState, {
        type: DELETE_SUBITEM,
        payload: 0,
        index: 1,
      })
    ).toEqual([
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
        subItems: [],
      },
    ]);
  });
});
