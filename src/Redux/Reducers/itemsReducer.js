const {
  ADD_ITEM,
  DELETE_ITEM,
  GET_ITEMS,
  EDIT_ITEM,
  DELETE_SUBITEM,
} = require("../Actions/itemsAction");

const default_items = {
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
          description: "This is the item description, allowing for free text",
          price: 240,
          type: "Single",
          order: 1,
        },
      ],
    },
  ],
};

const items = (state = default_items, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case EDIT_ITEM: {
      return {
        ...state,
        items: [...state.items],
      };
    }
    case DELETE_ITEM:
      return {
        ...state,
        items: [...state.items],
      };

    case DELETE_SUBITEM:
      return {
        ...state,
        items: [...state.items],
      };

    default:
      return state;
  }
};

export default items;
