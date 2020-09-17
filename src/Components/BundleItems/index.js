import React from "react";
import { Typography, Button, Grid, Card, Link } from "@material-ui/core";
import Item from "../Item";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const BundleItems = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    removeAfterPrint: true,
    pageStyle: "*{margin:'20px'}#actions{display:none}",
  });

  const { bundle } = props;
  return (
    <div ref={componentRef}>
      <Grid container>
        <Grid item sm={8}>
          <Typography variant="h5" gutterBottom>
            {bundle.nameBundle}
          </Typography>
        </Grid>
        <Grid item sm={4} align="right" id="actions">
          <Link onClick={handlePrint} style={{ marginRight: "8px" }}>
            Print
          </Link>
          <Button
            color="secondary"
            variant="contained"
            onClick={props.handleDeleteBundle(props.idx)}
          >
            Delete
          </Button>
        </Grid>
      </Grid>

      {bundle.items.map((item) => (
        <Card
          variant="outlined"
          key={item.code}
          style={{ marginBottom: "8px" }}
        >
          <Item item={item} action="releasedBundles" bundle={bundle}></Item>
        </Card>
      ))}
    </div>
  );
};
export default BundleItems;
