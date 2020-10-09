import React from "react";
import Card from "@material-ui/core/Card";
import Message from "../Commons/Message";
import Item from "../Item";
import { useSelector } from "react-redux";

function ItemsList(props) {
  const items = useSelector((state) => state.items);
  return (
    <div data-testid="data-test-content">
      {items.length === 0 && (
        <div data-testid="data-test-content-message">
          <Message message={"Create new items to view them here :)"} />
        </div>
      )}
      {items.map((item) => (
        <Card
          variant="outlined"
          key={item.code}
          style={{ marginBottom: "8px" }}
        >
          <Item
            item={item}
            onAddItemToBundle={props.onAddItemToBundle}
            action={props.action}
          ></Item>
        </Card>
      ))}
    </div>
  );
}
export default ItemsList;
