import React from "react";
import Grid from "@material-ui/core/Grid";
import FormCreateItem from "../../Components/FormCreateItem";
import ItemsList from "../../Components/ItemsList";
const CreateItems = (props) => {
  return (
    <div className="white">
      <Grid container spacing={8}>
        <Grid item xs={6} md={6} lg={6}>
          <FormCreateItem onItemAdd={props.onItemAdd}></FormCreateItem>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <ItemsList
            items={props.items}
            onItemDelete={props.onItemDelete}
            onSubItemDelete={props.onSubItemDelete}
          ></ItemsList>
        </Grid>
      </Grid>
    </div>
  );
};
export default CreateItems;
