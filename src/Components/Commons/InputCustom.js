import React from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core//TextField";

const styles = withStyles((theme) => ({
  textFieldRoot: {
    padding: 0,
    "label + &": {
      marginTop: "2px",
    },
  },
  textFieldError: {
    border: "1px solid red",
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: "white",
    border: "2px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    width: "calc(100% - 24px)",
    // transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
}));

const CustomizedInputs = (props) => {
  const { classes } = props;
  let errorVariable = false;
  const checkField = () => {
    // some condition to check for error
    errorVariable = true;
  };

  return (
    <div className={classes.container}>
      <TextField
        defaultValue="react-bootstrap"
        label="Bootstrap"
        id="bootstrap-input"
        onChange={checkField}
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: errorVariable
              ? classes.textFieldError
              : classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}
      />
    </div>
  );
};

export default withStyles()(CustomizedInputs);
