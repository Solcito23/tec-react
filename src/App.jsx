import React from "react";
import Header from "./Components/Header";
import CreateItems from "./Views/CreateItems";
import CreateBundle from "./Views/CreateBundle";
import ReleasedBundle from "./Views/ReleasedBundle";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";

export default () => (
  <DataProvider>
    <App></App>
  </DataProvider>
);

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Container style={{ marginTop: "80px" }}>
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
        </Container>
      </Router>
    </div>
  );
}
