import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Link, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#000",
    alignContent: "center",
    height: "60px",
  },
  liNavBar: {
    padding: "0px 16px",
    color: "white",
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
            href="/"
            underline="none"
            classes={
              window.location.pathname === "/"
                ? { root: classes.liNavBarActive }
                : { root: classes.liNavBar }
            }
          >
            <Typography variant="h6" noWrap className={classes.myTextStyle}>
              Create Items
            </Typography>
          </Link>

          <Link
            href="/CreateBundle"
            underline="none"
            classes={
              window.location.pathname === "/CreateBundle"
                ? { root: classes.liNavBarActive }
                : { root: classes.liNavBar }
            }
          >
            <Typography variant="h6" noWrap className={classes.myTextStyle}>
              Create Bundle
            </Typography>
          </Link>
          <Link
            href="/ReleasedBundle"
            classes={
              window.location.pathname === "/ReleasedBundle"
                ? { root: classes.liNavBarActive }
                : { root: classes.liNavBar }
            }
            underline="none"
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
