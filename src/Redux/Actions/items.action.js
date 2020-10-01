export const ADD_ITEM = "ADD_ITEM";
export const ADD_SUBITEM = "ADD_SUBITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_SUBITEM = "DELETE_SUBITEM";

const priceFormatter = (price) => {
  let value = price.toString().replace(",", "");
  value = parseFloat(value);
  return value;
};

export const add_item_action = (item) => (dispatch, state) => {
  let code = item.code.indexOf("-") > -1 ? item.code.split("-")[0] : item.code;
  let items = state().items;
  let itemExist = items.find((x) => x.code === code);
  item.price = item.price.substring(1);
  item.price = priceFormatter(item.price);

  if (itemExist) {
    let itemIndex = items.findIndex((x) => x.code === code);

    return dispatch({
      type: ADD_SUBITEM,
      payload: item,
      index: itemIndex,
    });
  } else {
    item.subItems = [];

    return dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  }
};

export const delete_item_action = (code) => (dispatch, state) => {
  let items = state().items;
  let itemFind = items.findIndex((x) => x.code === code);

  return dispatch({
    type: DELETE_ITEM,
    payload: itemFind,
  });
};

export const delete_subItem_action = (code) => (dispatch, state) => {
  let items = state().items;
  items.forEach((item, idx) => {
    let subItemIndex = item.subItems.findIndex((x) => x.code === code);

    if (subItemIndex !== -1) {
      return dispatch({
        type: DELETE_SUBITEM,
        payload: subItemIndex,
        index: idx,
      });
    }
  });
};
