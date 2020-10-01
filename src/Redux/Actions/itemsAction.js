export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_SUBITEM = "DELETE_SUBITEM";

const priceFormatter = (price) => {
  let value = price.toString().replace(",", "");
  value = parseFloat(value);
  return value;
};

export const add_item_action = (item) => (dispatch, state) => {
  let code = item.code.indexOf("-") > -1 ? item.code.split("-")[0] : item.code;
  let items = state().dataItems.items;
  let itemExist = items.find((x) => x.code === code);

  item.price = item.price.substring(1);
  item.price = priceFormatter(item.price);

  if (itemExist) {
    itemExist.subItems.push(item);
    item = itemExist;

    return dispatch({
      type: EDIT_ITEM,
      payload: item,
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
  let items = state().dataItems.items;
  let itemFind = items.findIndex((x) => x.code === code);
  items.splice(itemFind, 1);
  return dispatch({
    type: DELETE_ITEM,
    payload: "",
  });
};

export const delete_subItem_action = (code) => (dispatch, state) => {
  let items = state().dataItems.items;
  items.filter((item) => {
    let subItemIndex = item.subItems.findIndex((x) => x.code === code);

    if (subItemIndex !== -1) {
      item.subItems.splice(subItemIndex, 1);
    }

    return dispatch({
      type: DELETE_SUBITEM,
      payload: "",
    });
  });
};
