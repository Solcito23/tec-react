import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    margin: "8px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      boxShadow: "rgba(63, 81, 181, 0.25) 0 0 0 0.2rem",
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

export default BootstrapInput;
