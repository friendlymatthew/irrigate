import Link from "next/link";
import React from "react";
import "typeface-heebo";
import "typeface-lato";
import Appbar from "../components/Appbar";
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
      main: "#3a10e5",
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
  art: {
    margin: 0,
    marginTop: 0,
  },
}));

export default function SidePage(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3} style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Grid item xs={5} style={{ marginBottom: "20px" }}>
          <Paper
            style={{
              backgroundColor: "#000000",
              height: "362px",
              width: "512px",
              borderRadius: "20px",
            }}
          ></Paper>
        </Grid>

        <Grid item xs={2} style={{ margin: "0px", width: "10px" }}></Grid>

        <Grid item xs={5}>
          <ThemeProvider theme={aleo}>
            <Typography
              color="primary"
              variant="h3"
              style={{ fontWeight: 600, marginBottom: "5px" }}
            >
              {props.title}
            </Typography>
          </ThemeProvider>
          <ThemeProvider theme={lato}>
            <Typography color="primary" variant="h6">
              {props.desc}
            </Typography>
            <br />
            <Link href="/services">
              <Button
                style={{ fontWeight: 600, fontSize: "16px", color: "#3a10e5" }}
                className={classes.button}
              >
                {props.buttonText}
              </Button>
            </Link>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
}
