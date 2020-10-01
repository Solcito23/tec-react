import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Components/Header";
import CreateItems from "./Views/CreateItems";
import CreateBundle from "./Views/CreateBundle";
import ReleasedBundle from "./Views/ReleasedBundle";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./Redux/store";

import { Provider } from "react-redux";

const useStyles = makeStyles(() => ({
  container: {
    background: "white",
    padding: "32px",
    marginTop: "100px",
  },
}));

export default () => (
  <Provider store={store}>
    <App></App>
  </Provider>
);

function App() {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <Header />

        <Container>
          <div className={classes.container}>
            <Switch>
              <Route path="/ReleasedBundle">
                <ReleasedBundle />
              </Route>
              <Route path="/CreateBundle">
                <CreateBundle />
              </Route>
              <Route path="/">
                <CreateItems></CreateItems>
              </Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </div>
  );
}
