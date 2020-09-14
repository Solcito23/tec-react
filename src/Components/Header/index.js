import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#000",
    alignContent: "center",
    height: "60px",
  },
  liNavBar: {
    lineHeight: "4",
    padding: "0px 16px",
    color: "white",
  },
  "&:hover": {
    background: "#2979ff",
    bcolor: "white",
  },
  liNavBarActive: {
    background: "#2979ff",
  },
  offset: "80px",
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar classes={{ root: classes.appBar }}>
        <Toolbar>
          <Link
            classes={{ root: classes.liNavBar }}
            underline="none"
            onClick={() => {
              alert("Create Items");
            }}
          >
            Create Items
          </Link>

          <Link
            classes={{ root: classes.liNavBar }}
            underline="none"
            onClick={() => {
              alert("Create Bundle");
            }}
          >
            Create Bundle
          </Link>
          <Link
            classes={{ root: classes.liNavBar }}
            underline="none"
            onClick={() => {
              alert("Released Bundles");
            }}
          >
            Released Bundles
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
