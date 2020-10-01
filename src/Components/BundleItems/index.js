import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Grid,
  Card,
  Link,
  Divider,
} from "@material-ui/core";
import Item from "../Item";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useDispatch } from "react-redux";
import { delete_bundle_action } from "../../Redux/Actions/bundle.action";

const useStyles = makeStyles((theme) => ({
  containerBundle: {
    "& a": {
      marginRight: "16px",
    },
  },
  dividerBundle: {
    margin: "16px 0px",
    borderBottom: "1px dashed rgba(0, 0, 0, 0.12)",
    background: "none",
  },
}));

const BundleItems = (props) => {
  const { bundle } = props;
  const classes = useStyles();
  const componentRef = useRef();
  const dispatch = useDispatch();

  const handleDeleteBundle = (idx) => (event) => {
    dispatch(delete_bundle_action(idx));
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    removeAfterPrint: true,
    pageStyle: "*{margin:'20px'}#actions{display:none}",
  });

  return (
    <div className={classes.containerBundle} ref={componentRef}>
      <Grid container>
        <Grid item sm={8}>
          <Typography variant="h5" gutterBottom>
            {bundle.nameBundle}
          </Typography>
        </Grid>
        <Grid item sm={4} align="right" id="actions">
          <Link onClick={handlePrint}>Print</Link>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleDeleteBundle(props.idx)}
          >
            Delete
          </Button>
        </Grid>
      </Grid>

      {bundle.items.map((item) => (
        <Card variant="outlined" key={item.code}>
          <Item item={item} action="releasedBundles" bundle={bundle}></Item>
        </Card>
      ))}
      <Divider className={classes.dividerBundle} />
    </div>
  );
};
export default BundleItems;
