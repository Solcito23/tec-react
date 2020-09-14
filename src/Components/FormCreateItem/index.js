import React, { useState } from "react";
import {
  TextField,
  FormControl,
  Box,
  Input,
  InputAdornment,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormGroup,
  Button,
} from "@material-ui/core";

const FormCreateItem = (props) => {
  const [item, setItem] = useState({
    code: "",
    description: "",
    price: "",
    type: "",
    order: 0,
  });

  const [type, setType] = useState("type-single");

  const handleChange = (prop) => (event) => {
    setItem({ ...item, [prop]: event.target.value });
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleClick = () => (event) => {
    event.preventDefault();
    item.type = type === "type-single" ? "Simple" : "Multiple";

    props.onItemAdd(item);
    setItem({
      code: "",
      description: "",
      price: "",
      type: "",
      order: 0,
    });

    setType("type-single");
  };

  return (
    <div>
      <FormControl fullWidth margen="normal" display="inline">
        <FormLabel>Code:</FormLabel>
        <TextField
          id="code-item"
          style={{ margin: 8 }}
          onChange={handleChange("code")}
          value={item.code}
        />
      </FormControl>
      <FormControl fullWidth margen="normal">
        <TextField
          id="description-item"
          label="Description"
          style={{ margin: 8 }}
          onChange={handleChange("description")}
          value={item.description}
        />
      </FormControl>

      <FormControl fullWidth margen="normal">
        <Input
          id="price-item"
          style={{ margin: 8 }}
          onChange={handleChange("price")}
          value={item.price}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>

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
      <FormControl margen="normal">
        <TextField
          id="order-item"
          label="Number"
          type="number"
          onChange={handleChange("order")}
          style={{ margin: 8 }}
          value={item.order}
        />
      </FormControl>
      <Box>
        <Button color="primary" variant="contained" onClick={handleClick()}>
          Create Item
        </Button>
      </Box>
    </div>
  );
};

export default FormCreateItem;
