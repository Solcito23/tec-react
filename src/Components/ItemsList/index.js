import React from "react";
import Card from "@material-ui/core/Card";
import Message from "../Commons/Message";
import Item from "../Item";
import { useData } from "../../Context/DataContext";
import { useSelector } from "react-redux";

function ItemsList(props) {
  const items = useSelector((state) => state.dataItems.items);
  console.log("En componente ", items);
  //const { items, deleteItem, deleteSubItem } = useData();
  return (
    <div>
      {items.length === 0 && (
        <div>
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
            //onItemDelete={deleteItem}
            //onSubItemDelete={deleteSubItem}
            onAddItemToBundle={props.onAddItemToBundle}
            action={props.action}
          ></Item>
        </Card>
      ))}
    </div>
  );
}
export default ItemsList;
