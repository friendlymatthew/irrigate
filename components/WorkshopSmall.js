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

export default function WorkshopSmallPage(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <ThemeProvider theme={aleo}>
          <Grid item xs={8} style={{ margin: "0px", marginTop: "0px" }}>
            <Typography
              variant="h6"
              style={{ marginLeft: "20px", color: "#FFFFFF", fontWeight: 700 }}
            >
              Class Title
            </Typography>
          </Grid>
        </ThemeProvider>

        <ThemeProvider theme={lato}>
          <Grid item xs={4}>
            <Button style={{ textAlign: "center", backgroundColor: "#FED66D" }}>
              <Typography style={{ color: "#10162F", fontWeight: 700 }}>
                Notes
              </Typography>
            </Button>
          </Grid>
        </ThemeProvider>
      </Grid>
    </div>
  );
}
