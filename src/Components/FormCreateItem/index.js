import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  FormControl,
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormGroup,
  Button,
  Grid,
} from "@material-ui/core";
import CurrencyInput from "react-currency-input";
import BootstrapInput from "./BootstrapInput";

const useStyles = makeStyles((theme) => ({
  inputCustom: {
    border: "1px solid #ced4da",
    borderRadius: 4,
    fontSize: 14,
    height: "30px",
  },
}));

const FormCreateItem = (props) => {
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

  const handleFinancial = (x) => {
    var newValue = Number.parseFloat(x).toFixed(2);
    setItem({ ...item, ["price"]: newValue });
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleClick = () => (event) => {
    event.preventDefault();
    item.type = type === "type-single" ? "Simple" : "Multiple";

    //VALIDATION EMPTY
    if (validationForm()) {
      props.onItemAdd(item);
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

  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item sm={2} align="right">
          <FormLabel>Code:</FormLabel>
        </Grid>
        <Grid item sm={8}>
          <FormControl fullWidth margen="normal">
            <BootstrapInput
              id="code-item"
              style={{ margin: 8 }}
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
        <Grid item sm={8}>
          <FormControl fullWidth margen="normal">
            <BootstrapInput
              id="description-item"
              style={{ margin: 8 }}
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
        <Grid item sm={8}>
          <FormControl fullWidth margen="normal">
            <CurrencyInput
              value={item.price}
              precision="2"
              prefix="$"
              className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"
              onChangeEvent={handleChange("price")}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={2} align="right">
          <FormLabel>Type:</FormLabel>
        </Grid>
        <Grid item sm={8}>
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
        <Grid item sm={8}>
          <FormControl margen="normal">
            <BootstrapInput
              id="order-item"
              type="number"
              onChange={handleChange("order")}
              style={{ margin: 8 }}
              value={item.order}
              inputProps={{
                min: 0,
              }}
            ></BootstrapInput>
          </FormControl>
        </Grid>
      </Grid>

      <Box>
        <Button color="primary" variant="contained" onClick={handleClick()}>
          Create Item
        </Button>
      </Box>
    </div>
  );
};

export default FormCreateItem;
