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
import { useDispatch } from "react-redux";
import {
  delete_item_action,
  delete_subItem_action,
} from "../../Redux/Actions/items.action";

const Item = (props) => {
  const dispatch = useDispatch();
  const { item } = props;
  const options = { style: "currency", currency: "USD" };
  const twoDecimalFormat = new Intl.NumberFormat("en-US", options);

  const handleClickDeleteItem = (code) => (event) => {
    dispatch(delete_item_action(code));
  };

  const handleClickSubItem = (code) => (event) => {
    dispatch(delete_subItem_action(code));
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
            {twoDecimalFormat.format(item.price)}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {item.type}
          </Typography>
          {item.type === "Multiple"
            ? renderMultiplePrice(item, "subItem", props.action)
            : ""}
        </CardContent>
      </Card>
    );
  };

  const renderButton = (action, item) => {
    switch (action) {
      case "createItem":
        return (
          <Button
            color="secondary"
            variant="contained"
            onClick={handleClickDeleteItem(item.code)}
          >
            Delete
          </Button>
        );
      case "addBundle":
        return (
          <Button
            color="secondary"
            variant="contained"
            onClick={handleClickDeleteToBundle(item.code)}
          >
            Delete
          </Button>
        );
      case "createBundle":
        return (
          <Button
            color="default"
            variant="outlined"
            onClick={handleClickAddBundle(item)}
          >
            Add to Bundle
          </Button>
        );
      case "releasedBundles":
        return (
          <Typography variant="h5" color="textSecondary">
            {twoDecimalFormat.format(props.bundle.total)}
          </Typography>
        );
      default:
        return null;
    }
  };

  const renderMultiplePrice = (item, typeItem, action) => {
    switch (action) {
      case "addBundle":
        return (
          <Grid container style={{ alignItems: "center" }}>
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
                {twoDecimalFormat.format(item.price * item.totalItem)}
              </Typography>
            </Grid>
          </Grid>
        );
      case "releasedBundles":
        return (
          <Typography variant="body1" color="textSecondary">
            {twoDecimalFormat.format(item.price * item.totalItem)}
            (x {item.totalItem})
          </Typography>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <CardHeader
        action={renderButton(props.action, item)}
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
          {twoDecimalFormat.format(item.price)}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {item.type}
        </Typography>
        {item.type === "Multiple"
          ? renderMultiplePrice(item, "item", props.action)
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
