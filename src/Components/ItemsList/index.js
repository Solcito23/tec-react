import React from "react";
import Card from "@material-ui/core/Card";
import Alert from "@material-ui/lab/Alert";
import Item from "../Item";

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { items } = this.props;

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
              onItemDelete={this.props.onItemDelete}
              onSubItemDelete={this.props.onSubItemDelete}
            ></Item>
          </Card>
        ))}
      </div>
    );
  }
}
export default ItemsList;
