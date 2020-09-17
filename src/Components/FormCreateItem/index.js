import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormGroup,
  Button,
  Grid,
} from "@material-ui/core";
import CurrencyInput from "react-currency-input";
import BootstrapInput from "../Commons/BootstrapInput";
import { useData } from "../../Context/DataContext";

const useStyles = makeStyles((theme) => ({
  priceInput: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    margin: "8px",
    "&:focus": {
      borderColor: theme.palette.primary.main,
      boxShadow: "rgba(63, 81, 181, 0.25) 0 0 0 0.2rem",
    },
  },
  containerForm: {
    "& .MuiGrid-container": {
      alignItems: "center",
      "& label": {
        fontSize: "14px",
      },
    },
    "& .MuiRadio-colorPrimary.Mui-checked": {
      color: "#2979ff",
    },
  },
  btnCreateItem: {
    margin: "8px",
    background: "#2979ff",
  },
}));

const FormCreateItem = (props) => {
  const { addItem } = useData();
  const classes = useStyles();
  const [item, setItem] = useState({
    code: "",
    description: "",
    price: "0.00",
    type: "",
    order: 0,
  });
  const [type, setType] = useState("type-single");

  const [fieldRequeried, setError] = useState({
    codeError: false,
    descriptionError: false,
  });

  const handleChange = (prop) => (event) => {
    setItem({ ...item, [prop]: event.target.value });
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleClick = () => {
    item.type = type === "type-single" ? "Simple" : "Multiple";

    //EMPTY VALIDATION
    if (validationForm()) {
      addItem(item);
      setItem({
        code: "",
        description: "",
        price: "0.00",
        type: "",
        order: 0,
      });

      setType("type-single");
    }
  };

  const validationForm = () => {
    let validateForm = true;
    if (item.code === "" || item.description === "") {
      validateForm = false;
      setError({
        codeError: item.code === "",
        descriptionError: item.description === "",
      });
    }
    return validateForm;
  };

  return (
    <div className={classes.containerForm}>
      <Grid container>
        <Grid item sm={2} align="right">
          <FormLabel>Code:</FormLabel>
        </Grid>
        <Grid item sm={10}>
          <FormControl fullWidth margen="normal">
            <BootstrapInput
              id="code-item"
              onChange={handleChange("code")}
              value={item.code}
              error={fieldRequeried.codeError}
              inputProps={{
                maxLength: 14,
              }}
            ></BootstrapInput>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={2} align="right">
          <FormLabel>Description:</FormLabel>
        </Grid>
        <Grid item sm={10}>
          <FormControl fullWidth margen="normal">
            <BootstrapInput
              id="description-item"
              onChange={handleChange("description")}
              error={fieldRequeried.descriptionError}
              value={item.description}
              multiline
              rows={3}
            ></BootstrapInput>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={2} align="right">
          <FormLabel>Price:</FormLabel>
        </Grid>
        <Grid item sm={10}>
          <FormControl fullWidth margen="normal">
            <CurrencyInput
              className={classes.priceInput}
              value={item.price}
              precision="2"
              prefix="$"
              onChangeEvent={handleChange("price")}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={2} align="right">
          <FormLabel>Type:</FormLabel>
        </Grid>
        <Grid item sm={10}>
          <FormGroup row style={{ margin: 8 }}>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              value={type}
              onChange={handleChangeType}
            >
              <FormControlLabel
                value="type-single"
                name="type"
                control={<Radio color="primary" />}
                label="Single"
              />
              <FormControlLabel
                value="type-multiple"
                name="type"
                control={<Radio color="primary" />}
                label="Multiple"
              />
            </RadioGroup>
          </FormGroup>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={2} align="right">
          <FormLabel>Order:</FormLabel>
        </Grid>
        <Grid item sm={4}>
          <FormControl margen="normal">
            <BootstrapInput
              id="order-item"
              type="number"
              onChange={handleChange("order")}
              value={item.order}
              inputProps={{
                min: 0,
              }}
            ></BootstrapInput>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={2}></Grid>
        <Grid item align="right">
          <Button
            color="primary"
            variant="contained"
            className={classes.btnCreateItem}
            onClick={() => handleClick()}
          >
            Create Item
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormCreateItem;
