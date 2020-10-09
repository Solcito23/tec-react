import React from "react";

import { FormLabel, FormControl, Grid, Card } from "@material-ui/core";
import BootstrapInput from "../Commons/BootstrapInput";
import Item from "../Item";

const Bundle = (props) => {
  const { bundle } = props;
  return (
    <div>
      <Grid container id="formCreateBundle">
        <Grid item sm={1}>
          <FormLabel>Name:</FormLabel>
        </Grid>
        <Grid item sm={11}>
          <FormControl fullWidth margen="normal">
            <BootstrapInput
              id="name-bundle"
              data-testid="data-test-name"
              value={bundle.nameBundle}
              onChange={props.handleChangeName("nameBundle")}
              inputProps={{
                maxLength: 14,
              }}
            ></BootstrapInput>
          </FormControl>
        </Grid>
      </Grid>
      {bundle.items.map((item) => (
        <Card
          variant="outlined"
          key={item.code}
          style={{ marginBottom: "8px" }}
        >
          <Item
            action="addBundle"
            item={item}
            onDeleteToBundle={props.onDeleteToBundle}
            handleChangeTotal={props.handleChangeTotal}
          ></Item>
        </Card>
      ))}
    </div>
  );
};
export default Bundle;
