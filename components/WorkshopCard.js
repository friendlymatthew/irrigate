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

export default function WorkshopPage(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} container spacing={3}>
          <Grid item xs={12} style={{ marginBottom: "0px"}}>
              <div>
            <ThemeProvider theme={aleo}>
              <Typography variant="h6" style={{ marginLeft: "5px" }}>
                Class Title
              </Typography>
            </ThemeProvider>
            </div><div>
            <ThemeProvider theme={lato}>
              <Typography style={{ marginLeft: "5px" }}>
              Calling it their chief motivation for trying to beat the Atlanta Braves in the MLB World Series, members of the Houston Astros told reporters Tuesday that they hoped a victory would inspire kids to break the rules without punishment. “If we can go out and win this series, it will show children all over America and all over the world that you can just blatantly break the rules of your game and face no consequences whatsoever,” said Astros third baseman Alex Bregman, echoing the sentiments of his teammates that they wanted to set an example that you can just cheat your way to a World Series win and then return to in another championship just a couple years later because neither the franchise nor players involved faced any repercussions. “Hopefully our victory would give kids out there the confidence that they can chea
              </Typography>
            </ThemeProvider>
            </div>
            <br />
            <div>
                <ThemeProvider theme={lato}>
                    <Typography style={{ marginLeft: "20px" }}>
                        <div>
                        Requirements
                        </div>
                        <div style={{ marginLeft: "15px" }}>
                            - Computer
                        </div>
                        <div style={{ marginLeft: "15px" }}>
                            - Email Account
                        </div>
                    </Typography>
                </ThemeProvider>
            </div>
          </Grid>



        </Grid>
      </Grid>
    </div>
  );
}
