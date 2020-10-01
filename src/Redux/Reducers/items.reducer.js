import {
  ADD_ITEM,
  DELETE_ITEM,
  ADD_SUBITEM,
  DELETE_SUBITEM,
} from "../Actions/items.action";

const default_items = [
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

const items = (state = default_items, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return [...state, action.payload];
    }
    case ADD_SUBITEM: {
      return Object.assign([], state, {
        [action.index]: {
          ...state[action.index],
          subItems: [...state[action.index].subItems, action.payload],
        },
      });
    }
    case DELETE_ITEM:
      let newState = [...state];
      newState.splice(action.payload, 1);
      return newState;

    case DELETE_SUBITEM:
      let auxState = [...state];
      auxState[action.index].subItems.splice(action.payload, 1);
      return auxState;

    default:
      return state;
  }
};

export default items;
