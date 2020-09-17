import React, { useState } from "react";

const DataContext = React.createContext();

export function DataProvider(props) {
  const [items, setItems] = useState([
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
  ]);
  const [bundles, setBundles] = useState([]);

  const addItem = (item) => {
    item.price = item.price.substring(1);
    let code =
      item.code.indexOf("-") > -1 ? item.code.split("-")[0] : item.code;

    let listItems = [...items];
    let itemExist = listItems.find((x) => x.code === code);
    if (itemExist) {
      let itemIndex = listItems.findIndex((x) => x.code === itemExist.code);
      item.price = priceFormatter(item.price);
      itemExist.subItems.push(item);
      listItems[itemIndex] = itemExist;
    } else {
      item.price = priceFormatter(item.price);
      item.subItems = [];
      listItems.push(item);
    }

    listItems.sort(function (x, y) {
      return x.order - y.order;
    });

    setItems(listItems);
  };

  const deleteItem = (codeItem) => {
    let listItems = [...items];
    let itemFind = listItems.findIndex((x) => x.code === codeItem);
    listItems.splice(itemFind, 1);
    setItems(listItems);
  };

  const deleteSubItem = (codeSubItem) => {
    let listItems = [...items];
    listItems.filter((item) => {
      let subItemIndex = item.subItems.findIndex((x) => x.code === codeSubItem);

      if (subItemIndex !== -1) {
        item.subItems.splice(subItemIndex, 1);
      }
      return true;
    });

    setItems(listItems);
  };

  const acceptBundle = (bundle) => {
    let listBundles = [...bundles];
    listBundles.push(bundle);

    setBundles(listBundles);
  };

  const deleteBundle = (idx) => {
    let listBundles = [...bundles];
    listBundles.splice(idx, 1);
    setBundles(listBundles);
  };

  const priceFormatter = (price) => {
    let value = price.toString().replace(",", "");
    value = parseFloat(value);
    return value;
  };

  const value = {
    items,
    bundles,
    addItem,
    deleteItem,
    deleteSubItem,
    acceptBundle,
    deleteBundle,
  };

  return <DataContext.Provider value={value} {...props} />;
}

export function useData() {
  const context = React.useContext(DataContext);
  return context;
}
