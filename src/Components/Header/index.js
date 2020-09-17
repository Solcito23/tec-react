import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#000",
    alignContent: "center",

    "& a": {
      padding: "0px 16px",
      margin: "0px 4px",
      color: "white",
      textDecoration: "none",
      height: "60px",
      "& h6": {
        lineHeight: "60px",
      },
    },
    "& a.liNavBarActive": {
      background: "#2979ff",
    },
    "& a:hover": {
      background: "#2979ff",
      bcolor: "white",
    },
  },

  offset: "80px",
}));

export default function Header() {
  const classes = useStyles();
  let url = useLocation();
  let location = url.pathname;
  return (
    <div>
      <AppBar classes={{ root: classes.appBar }}>
        <Toolbar>
          <Link
            exact="true"
            to={"/"}
            className={location === "/" ? "liNavBarActive" : ""}
          >
            <Typography variant="subtitle1" noWrap>
              Create Items
            </Typography>
          </Link>

          <Link
            to={"/CreateBundle"}
            className={location === "/CreateBundle" ? "liNavBarActive" : ""}
          >
            <Typography variant="subtitle1" noWrap>
              Create Bundle
            </Typography>
          </Link>
          <Link
            to={"/ReleasedBundle"}
            className={location === "/ReleasedBundle" ? "liNavBarActive" : ""}
          >
            <Typography variant="subtitle1" noWrap>
              Released Bundles
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
