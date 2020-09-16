import React from "react";
import Card from "@material-ui/core/Card";
import Alert from "@material-ui/lab/Alert";
import Item from "../Item";
import { useData } from "../../Context/DataContext";

function ItemsList(props) {
  const { items, deleteItem, deleteSubItem } = useData();
  return (
    <div>
      {items.length === 0 && (
        <div>
          <Alert icon={false} severity="info">
            Create new items to view them here :)
          </Alert>
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
            onItemDelete={deleteItem}
            onSubItemDelete={deleteSubItem}
            onAddItemToBundle={props.onAddItemToBundle}
            action={props.action}
          ></Item>
        </Card>
      ))}
    </div>
  );
}
export default ItemsList;
