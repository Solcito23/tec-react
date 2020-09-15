import React from "react";
import { Grid, Typography } from "@material-ui/core";

function CreateBundle() {
  return (
    <div className="white">
      <Grid container spacing={8}>
        <Grid item xs={6} md={6} lg={6}>
          <Typography variant="h6">Available Items</Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Typography variant="h6">Currently Bundle</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default CreateBundle;
