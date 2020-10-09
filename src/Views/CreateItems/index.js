import React from "react";
import Grid from "@material-ui/core/Grid";
import FormCreateItem from "../../Components/FormCreateItem";
import ItemsList from "../../Components/ItemsList";

const CreateItems = () => {
  return (
    <div data-testid="data-test-content-create-items">
      <Grid container spacing={8}>
        <Grid item xs={6} md={6} lg={6}>
          <FormCreateItem></FormCreateItem>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <ItemsList action="createItem"></ItemsList>
        </Grid>
      </Grid>
    </div>
  );
};
export default CreateItems;
