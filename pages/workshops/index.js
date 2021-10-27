import React from "react";
import "typeface-heebo";
import "typeface-lato";
import Appbar from "../../components/Appbar";
import {
  Grid,
  Button,
  Paper,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";
import "typeface-aleo";
import WorkshopCard from "../../components/WorkshopCard"
import WorkshopSmall from "../../components/WorkshopSmall"

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

export default function ServicePage() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={scaffold}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Appbar />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} container spacing={3}>
            <Grid item xs={12}>
              <ThemeProvider theme={aleo}>
                <Typography variant="h6">
                  We strive to educate blah blah blah
                </Typography>
              </ThemeProvider>
            </Grid>

            <ThemeProvider theme={lato}>
              <Grid
                item
                xs={8}
                style={{ marginRight: "0px", border: "2px solid #10162F" }}
              
              >
                <div>
                <Typography variant="h6" style={{ textAlign: "center", marginLeft: "5px", fontWeight: 700 }}>
                  Upcoming Workshop
                </Typography>
                </div>
                <br />
                <div>
                  <WorkshopCard />
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                style={{ backgroundColor: "#10162f", marginLeft: "0px", border: "2px solid #10162F" }}
               
              >
                <div>
                <Typography variant="h6" style={{ color: "#FFFFFF", textAlign: "center", marginLeft: "5px", fontWeight: 700 }}>
                  Past Workshops
                </Typography>
                </div>
                <br />
                <div>
                <WorkshopSmall />
                </div>

              </Grid>
            </ThemeProvider>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
