import React from "react";
import {
  CardContent,
  Typography,
  CardHeader,
  Button,
  Divider,
  Card,
} from "@material-ui/core";

const Item = (props) => {
  const handleClick = (code) => (event) => {
    event.preventDefault();
    props.onItemDelete(code);
  };

  const handleClickSubItem = (code) => (event) => {
    event.preventDefault();
    props.onSubItemDelete(code);
  };

  const renderSubItems = (item) => {
    return (
      <Card variant="outlined" key={item.code}>
        <CardHeader
          action={
            <Button
              color="secondary"
              variant="contained"
              onClick={handleClickSubItem(item.code)}
            >
              Delete
            </Button>
          }
          title={
            <Typography style={{ fontSize: "14px" }} color="textSecondary">
              {item.code}
            </Typography>
          }
          style={{ background: "#eee" }}
        />
        <Divider spacing={2} />
        <CardContent>
          <Typography variant="body1" color="textSecondary">
            {item.description}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {item.price}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {item.type}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const { item } = props;
  return (
    <div>
      <CardHeader
        action={
          <Button
            color="secondary"
            variant="contained"
            onClick={handleClick(item.code)}
          >
            Delete
          </Button>
        }
        title={
          <Typography style={{ fontSize: "14px" }} color="textSecondary">
            {item.code}
          </Typography>
        }
      />
      <Divider spacing={2} />
      <CardContent>
        <Typography variant="body1" color="textSecondary">
          {item.description}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {item.price}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {item.type}
        </Typography>
        {props.item.subItems.length > 0 && (
          <Typography variant="body2" mb={2} color="textPrimary" gutterBottom>
            Sub-items
          </Typography>
        )}
        {props.item.subItems.length > 0 && item.subItems.map(renderSubItems)}
      </CardContent>
    </div>
  );
};
export default Item;
