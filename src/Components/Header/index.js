import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#000",
    alignContent: "center",
    height: "60px",
  },
  liNavBar: {
    padding: "0px 16px",
    color: "white",
    textDecoration: "none",
  },
  myTextStyle: {
    textDecoration: "none",
    "&:hover": {
      background: "#2979ff",
      bcolor: "white",
    },
  },
  liNavBarActive: {
    padding: "0px 16px",
    color: "white",
    background: "#2979ff",
    textDecoration: "none",
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
            to={"/"}
            className={
              window.location.pathname === "/"
                ? classes.liNavBarActive
                : classes.liNavBar
            }
          >
            <Typography variant="h6" noWrap className={classes.myTextStyle}>
              Create Items
            </Typography>
          </Link>

          <Link
            to={"/CreateBundle"}
            className={
              window.location.pathname === "/CreateBundle"
                ? classes.liNavBarActive
                : classes.liNavBar
            }
          >
            <Typography variant="h6" noWrap className={classes.myTextStyle}>
              Create Bundle
            </Typography>
          </Link>
          <Link
            to={"/ReleasedBundle"}
            className={
              window.location.pathname === "/ReleasedBundle"
                ? classes.liNavBarActive
                : classes.liNavBar
            }
          >
            <Typography variant="h6" noWrap className={classes.myTextStyle}>
              Released Bundles
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
