import React, { Component } from "react";
import Header from "./Components/Header";
import CreateItems from "./Views/CreateItems";
import CreateBundle from "./Views/CreateBundle";
import ReleasedBundle from "./Views/ReleasedBundle";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          code: "C0DE001",
          description: "This is the item description, allowing for free text",
          price: "$100",
          type: "Single",
          order: 4,
          subItems: [],
        },
        {
          code: "C0DE002",
          description: "This is the item description, allowing for free text",
          price: "$200",
          type: "Single",
          order: 3,
          subItems: [
            {
              code: "C0DE002-01",
              description:
                "This is the item description, allowing for free text",
              price: "$240",
              type: "Single",
              order: 1,
            },
          ],
        },
      ],
    };
  }

  addItem = (item) => {
    let code =
      item.code.indexOf("-") > -1 ? item.code.split("-")[0] : item.code;

    let listItems = this.state.items;
    let itemExist = listItems.find((x) => x.code === code);
    if (itemExist) {
      //CREATE SUBITEM
      let itemIndex = listItems.findIndex((x) => x.code === itemExist.code);
      itemExist.subItems.push(item);
      listItems[itemIndex] = itemExist;
    } else {
      //CREATE ITEM
      item.subItems = [];
      listItems.push(item);
    }

    listItems.sort(function (x, y) {
      return x.order - y.order;
    });

    this.setState({
      items: listItems,
    });
  };

  deleteItem = (codeItem) => {
    let listItems = this.state.items;
    let itemFind = listItems.findIndex((x) => x.code === codeItem);
    listItems.splice(itemFind, 1);
    this.setState({
      items: listItems,
    });
  };
  deleteSubItem = (codeSubItem) => {
    let listItems = this.state.items;
    let listItemsFilter = listItems.filter((item) => {
      let subItemIndex = item.subItems.findIndex((x) => x.code === codeSubItem);
      if (subItemIndex !== -1) {
        item.subItems.splice(subItemIndex, 1);
      }
      return true;
    });

    this.setState({
      items: listItemsFilter,
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <Header />
        <Router>
          <Container style={{ marginTop: "80px" }}>
            <Switch>
              <Route path="/ReleasedBundle">
                <ReleasedBundle />
              </Route>
              <Route path="/CreateBundle">
                <CreateBundle />
              </Route>
              <Route path="/">
                <CreateItems
                  items={items}
                  onItemAdd={this.addItem}
                  onItemDelete={this.deleteItem}
                  onSubItemDelete={this.deleteSubItem}
                ></CreateItems>
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
