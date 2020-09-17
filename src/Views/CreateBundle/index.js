import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import ItemsList from "../../Components/ItemsList";
import Bundle from "../../Components/Bundle";
import Message from "../../Components/Commons/Message";
import { useData } from "../../Context/DataContext";

const useStyles = makeStyles((theme) => ({
  containerForm: {
    "& .MuiGrid-container#formCreateBundle": {
      alignItems: "center",
      "& label": {
        fontSize: "14px",
      },
    },
  },
  btnCreateBundle: {
    background: "#2979ff",
  },
}));

const CreateBundle = (props) => {
  const { acceptBundle } = useData();
  const classes = useStyles();
  const [bundle, setBundle] = useState({
    nameBundle: "",
    total: "0.00",
    items: [],
  });

  const handleAddItemToBundle = (item) => {
    let listItems = bundle.items;
    let priceTotal = 0;
    item.totalItem = 1;

    item.subItems.map((subItem) => {
      return (subItem.totalItem = 1);
    });

    listItems.push(item);
    priceTotal = calculateTotal(listItems);

    setBundle({
      ...bundle,
      items: listItems,
    });
    setBundle({
      ...bundle,
      total: priceTotal,
    });
  };

  const handleDeleteToBundle = (code) => {
    let listItem = bundle.items;
    let itemIndex = listItem.findIndex((x) => x.code === code);
    listItem.splice(itemIndex, 1);
    let totalPrice = calculateTotal(listItem);

    setBundle({
      ...bundle,
      items: listItem,
    });
    setBundle({
      ...bundle,
      total: totalPrice,
    });
  };

  const handleChangeName = (prop) => (event) => {
    setBundle({
      ...bundle,
      [prop]: event.target.value,
    });
  };

  const handleAcceptBundle = () => {
    acceptBundle(bundle);
    setBundle({
      ...bundle,
      nameBundle: "",
      items: [],
      total: "0.00",
    });
  };

  const handleChangeTotal = (code, typeItem) => (event) => {
    let listItems = bundle.items;
    switch (typeItem) {
      case "item":
        var indexOfItem = listItems.findIndex((x) => x.code === code);

        listItems[indexOfItem].totalItem = event.target.value;
        break;
      case "subItem":
        listItems = listItems.filter((item) => {
          let subItemIndex = item.subItems.findIndex((x) => x.code === code);

          if (subItemIndex !== -1) {
            item.subItems[subItemIndex].totalItem = event.target.value;
          }
          return true;
        });
        break;

      default:
        break;
    }
    let priceTotal = calculateTotal(listItems);

    setBundle({
      ...bundle,
      items: listItems,
    });
    setBundle({
      ...bundle,
      total: priceTotal,
    });
  };

  const calculateTotal = (listItems) => {
    let priceTotal = 0;
    console.log(listItems);
    listItems.map((item) => {
      priceTotal += item.price * item.totalItem;
      item.subItems.map((subItem) => {
        priceTotal += subItem.price * subItem.totalItem;
        return true;
      });
      return true;
    });
    return priceTotal.toFixed(2);
  };

  return (
    <div className={classes.containerForm}>
      <Grid container spacing={8}>
        <Grid item xs={7} md={7} lg={7}>
          <Typography variant="h5">Available Items</Typography>
          <ItemsList
            onAddItemToBundle={handleAddItemToBundle}
            action="createBundle"
          ></ItemsList>
        </Grid>
        <Grid item xs={5} md={5} lg={5}>
          <Typography variant="h5">Currently Bundled</Typography>

          {bundle.items.length === 0 ? (
            <div>
              <Message message={"Try adding some items to a new Bundle :)"} />
            </div>
          ) : (
            <div>
              <Bundle
                onDeleteToBundle={handleDeleteToBundle}
                bundle={bundle}
                handleChangeTotal={handleChangeTotal}
                handleChangeName={handleChangeName}
              ></Bundle>
              <Typography variant="h6">${bundle.total}</Typography>
              <Box>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.btnCreateBundle}
                  onClick={handleAcceptBundle}
                >
                  Accept Bundle
                </Button>
              </Box>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
export default CreateBundle;
