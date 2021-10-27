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

import "typeface-aleo";

const aleo = createTheme({
  typography: {
    fontFamily: ["Aleo", "serif"].join(","),
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#1B1811",
    },
    secondary: {
      main: "#2064f4",
    },
  },
});
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
      main: "#fff0e5",
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
    height: "58px",
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
    backgroundColor: "#fff0e5",
    "&:hover": {
      backgroundColor: "#F29559",
      color: "#000000",
    },
  },
  button2: {
    marginLeft: "30px",
    backgroundColor: "#fff0e5",
    "&:hover": {
      backgroundColor: "#F29559",
      color: "#000000",
    },
  },
  button3: {
    marginRight: "30px",
    backgroundColor: "#fff0e5",
    "&:hover": {
      backgroundColor: "#F29559",
      color: "#000000",
    },
  },

  button: {
    backgroundColor: "#fff0e5",
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
          <Grid container spacing={1}>
            <Grid item xs={2}></Grid>

            <Grid item xs={3}>
              <ThemeProvider theme={lato}>
                <Typography variant="h6" style={{ marginLeft: "0px", marginTop: "16px", fontWeight: 500 , }}>
                  LOGO
                </Typography>
              </ThemeProvider>
            </Grid>

            <Grid item xs={7}>
              <Toolbar className={classes.logo} color="secondary">
                <Link href="/">
                  <Button
                    className={classes.button}
                    style={{ borderRadius: "2px" }}
                  >
                    <Typography variant="h6" style={{ fontWeight: 500  }}>
                      Homepage
                    </Typography>
                  </Button>
                </Link>

                <Link href="/services">
                  <Button
                    className={classes.button2}
                    style={{ borderRadius: "2px" }}
                  >
                    <Typography variant="h6" style={{ fontWeight: 500  }}>
                      Services
                    </Typography>
                  </Button>
                </Link>

                <Link href="/workshops">
                  <Button
                    className={classes.button1}
                    style={{ borderRadius: "2px" }}
                  >
                    <Typography variant="h6" style={{ fontWeight: 500  }}>
                      Workshops
                    </Typography>
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    className={classes.button3}
                    style={{ borderRadius: "2px" }}
                  >
                    <Typography variant="h6" style={{ fontWeight: 500 }}>
                      Contact
                    </Typography>
                  </Button>
                </Link>

                <Link href="/about">
                  <Button
                    className={classes.button}
                    style={{ borderRadius: "2px" }}
                  >
                    <Typography variant="h6" style={{ fontWeight: 500 }}>
                      About
                    </Typography>
                  </Button>
                </Link>
              </Toolbar>
            </Grid>
          </Grid>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
