import React from "react";
import {
  CardContent,
  Typography,
  CardHeader,
  Button,
  Divider,
  Card,
  FormControl,
  Grid,
} from "@material-ui/core";
import BootstrapInput from "../Commons/BootstrapInput";

const Item = (props) => {
  const handleClick = (code) => (event) => {
    event.preventDefault();
    props.onItemDelete(code);
  };

  const handleClickSubItem = (code) => (event) => {
    event.preventDefault();
    props.onSubItemDelete(code);
  };

  const handleClickAddBundle = (item) => (event) => {
    event.preventDefault();
    props.onAddItemToBundle(item);
  };

  const handleClickDeleteToBundle = (code) => (event) => {
    event.preventDefault();
    props.onDeleteToBundle(code);
  };

  const renderSubItems = (item) => {
    return (
      <Card variant="outlined" key={item.code}>
        <CardHeader
          action={
            props.action === "createItem" && (
              <Button
                color="secondary"
                variant="contained"
                onClick={handleClickSubItem(item.code)}
              >
                Delete
              </Button>
            )
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
            ${item.price}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {item.type}
          </Typography>
          {item.type === "Multiple" && props.action === "addBundle"
            ? renderMultiplePrice(item, "subItem")
            : ""}
        </CardContent>
      </Card>
    );
  };

  const renderMultiplePrice = (item, typeItem) => {
    return (
      <Grid container>
        <Grid item sm={3}>
          <FormControl fullWidth margen="normal">
            <BootstrapInput
              id="multiple-item"
              type="number"
              style={{ margin: 8 }}
              value={item.totalItem}
              onChange={props.handleChangeTotal(item.code, typeItem)}
              inputProps={{
                min: 1,
              }}
            ></BootstrapInput>
          </FormControl>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="body1" color="textSecondary">
            ${item.price * item.totalItem}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  const { item } = props;
  return (
    <div>
      <CardHeader
        action={
          props.action === "createItem" ? (
            <Button
              color="secondary"
              variant="contained"
              onClick={handleClick(item.code)}
            >
              Delete
            </Button>
          ) : props.action === "addBundle" ? (
            <Button
              color="secondary"
              variant="contained"
              onClick={handleClickDeleteToBundle(item.code)}
            >
              Delete
            </Button>
          ) : (
            <Button
              color="default"
              variant="outlined"
              onClick={handleClickAddBundle(item)}
            >
              Add to Bundle
            </Button>
          )
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
          ${item.price}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {item.type}
        </Typography>
        {item.type === "Multiple" && props.action === "addBundle"
          ? renderMultiplePrice(item, "item")
          : ""}

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
