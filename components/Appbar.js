import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import React from "react";
import Link from "next/link";

import "typeface-heebo";
import "typeface-lato";

import { Grid, Paper, Typography } from "@material-ui/core";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";

const heebo = createTheme({
  typography: {
    fontFamily: ["Heebo", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#1B1811",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

const lato = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
    fontWeightBold: true,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#1B1811",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

const useStyles = makeStyles((lato) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: "center",
    margin: 0,
    border: "1px black solid",
    height: "55px",
  },
  logo: {
    marginRight: heebo.spacing(2),
  },
  home: {
    marginRight: "500px",
    left: 5,
  },
  button1: {
    marginLeft: "30px",
    marginRight: "30px",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#F29559",
      color: "#000000",
    },
  },
  button2: {
    marginLeft: "30px",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#F29559",
      color: "#000000",
    },
  },
  button3: {
    marginRight: "30px",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#F29559",
      color: "#000000",
    },
  },

  button: {
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#F29559",
      color: "#000000",
    },
    margin: "0px",
  },
}));

export default function SimpleBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={lato}>
        <AppBar
          className={classes.appbar}
          elevation={0}
          color="secondary"
          position="static"
        >
          <Toolbar className={classes.logo} color="secondary">
            <Link href="/">
              <Button
                className={classes.button}
                style={{ borderRadius: "2px" }}
              >
                <Typography variant="h8" style={{ fontWeight: 700 }}>
                  Homepage
                </Typography>
              </Button>
            </Link>

            <Link href="/services">
              <Button
                className={classes.button2}
                style={{ borderRadius: "2px" }}
              >
                <Typography variant="h8" style={{ fontWeight: 700 }}>
                  Services
                </Typography>
              </Button>
            </Link>

            <Link href="/workshops">
              <Button
                className={classes.button1}
                style={{ borderRadius: "2px" }}
              >
                <Typography variant="h8" style={{ fontWeight: 700 }}>
                  Workshops
                </Typography>
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                className={classes.button3}
                style={{ borderRadius: "2px" }}
              >
                <Typography variant="h8" style={{ fontWeight: 700 }}>
                  Contact
                </Typography>
              </Button>
            </Link>

            <Link href="/about">
              <Button
                className={classes.button}
                style={{ borderRadius: "2px" }}
              >
                <Typography variant="h8" style={{ fontWeight: 700 }}>
                  About
                </Typography>
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
