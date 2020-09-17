import React from "react";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  containerMessage: {
    height: "200px",
    alignItems: "center",
    "& .MuiAlert-message": {
      margin: "auto",
    },
  },
}));

const Message = (props) => {
  const { message } = props;
  const classes = useStyles();
  return (
    <div>
      <Alert className={classes.containerMessage} icon={false} severity="info">
        <Typography variant="subtitle1">{message}</Typography>
      </Alert>
    </div>
  );
};
export default Message;
