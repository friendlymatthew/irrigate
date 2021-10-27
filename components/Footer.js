import React from "react";
import "typeface-heebo";
import "typeface-lato";
import { Grid, Button, Paper, Typography } from "@material-ui/core";
import Footer from "../components/Footer";
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
  },
  palette: {
    primary: {
      main: "#1B1811",
    },
    secondary: {
      main: "#558B62",
    },
  },
});

const lato = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
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

const scaffold = createTheme({
  palette: {
    primary: {
      main: "#1B1811",
    },
    secondary: {
      main: "#2064f4",
    },
  },
});

const useStyles = makeStyles((scaffold) => ({
  paper: {
    padding: scaffold.spacing(1),
  },
  artpaper: {},
  button: {
    display: "inline-block",
    padding: 0,
    minHeight: 0,
    minWidth: 0,
  },
}));

export default function FooterPage() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        item
        xs={12}
        container spacing={4}
        style={{ margin: "0px", backgroundColor: "#10162F" }}
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Grid item xs={12} style={{ marginBottom: "0px" }}>
            <ThemeProvider theme={aleo}>
              <Typography
                variant="h6"
                style={{ color: "#FFFFFF", fontWeight: 700 }}
              >
                Initiative
              </Typography>
              <br></br>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "0px" }}>
            <ThemeProvider theme={aleo}>
              <div style={{ marginTop: "20px" }}>
                <Typography
                  variant="h8"
                  style={{ color: "#FFFFFF", fontWeight: 600 }}
                >
                  About
                </Typography>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Typography
                  variant="h8"
                  style={{ color: "#FFFFFF", fontWeight: 600 }}
                >
                  Contact
                </Typography>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Typography
                  variant="h8"
                  style={{ color: "#FFFFFF", fontWeight: 600 }}
                >
                  Services
                </Typography>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Typography
                  variant="h8"
                  style={{ color: "#FFFFFF", fontWeight: 600 }}
                >
                  Workshops
                </Typography>
              </div>
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <ThemeProvider theme={aleo}>
            <div>
              <Typography
                variant="h6"
                style={{ color: "#FFFFFF", fontWeight: 700 }}
              >
                Resources
              </Typography>
            </div>
            <br />
            <div style={{ marginTop: "20px" }}>
              <Typography
                variant="h8"
                style={{ color: "#FFFFFF", fontWeight: 600 }}
              >
                Past Workshops
              </Typography>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Typography
                variant="h8"
                style={{ color: "#FFFFFF", fontWeight: 600 }}
              >
                Past Projects
              </Typography>
            </div>
          </ThemeProvider>
        </Grid>
        <Grid item xs={2}>
          <ThemeProvider theme={aleo}>
            <div>
              <Typography
                variant="h6"
                style={{ color: "#FFFFFF", fontWeight: 700 }}
              >
                Jobs
              </Typography>
            </div>
            <br />
            <div style={{ marginTop: "20px" }}>
              <Typography
                variant="h8"
                style={{ color: "#FFFFFF", fontWeight: 600 }}
              >
                Openings
              </Typography>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Typography
                variant="h8"
                style={{ color: "#FFFFFF", fontWeight: 600 }}
              >
                Application
              </Typography>
            </div>
          </ThemeProvider>
        </Grid>
        <Grid item xs={4} container spacing={4}>
          <Grid
            item
            xs={12}
            style={{
              height: "10px",
              marginBottom: "80px",
            }}
          >
            <ThemeProvider theme={aleo}>
              <div>
                <Typography
                  variant="h6"
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  Everybody deserves to be online.
                </Typography>
              </div>
              <br />
              <div>
                <Typography
                  variant="h6"
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  Interested in funding?
                </Typography>
              </div>
            </ThemeProvider>
            <ThemeProvider theme={lato}>
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                <Button
                  style={{ textAlign: "center", backgroundColor: "#FED66D" }}
                >
                  <Typography style={{ color: "#10162F", fontWeight: 700 }}>
                    Contact
                  </Typography>
                </Button>
              </div>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
