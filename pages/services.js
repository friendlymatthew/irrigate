import React from "react";
import "typeface-heebo";
import "typeface-lato";
import Appbar from "../components/Appbar";
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
      main: "#FFFFFF",
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
    <div style={{ backgroundColor: "#000000" }}>
      <ThemeProvider theme={scaffold}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Appbar />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} container spacing={3}>
            <Grid item xs={12}>
              <ThemeProvider theme={lato}>
                <Typography
                  variant="h6"
                  style={{ textAlign: "center", color: "#FFFFFF" }}
                >
                  We offer a wide range of services,{" "}
                </Typography>
                <Typography
                  variant="h5"
                  style={{ color: "#FFFFFF", fontWeight: 600 }}
                >
                  Web Application
                </Typography>
              </ThemeProvider>
            </Grid>

            <Grid item xs={8} container spacing={20}>
              <ThemeProvider theme={lato}>
                <Grid item xs={12}>
                  <Paper
                    elevation={4}
                    style={{
                      padding: "8px",
                      border: "2px solid",
                      height: "150px",
                      borderColor: "#FFFFFF",
                      backgroundColor: "#000000",
                    }}
                  >
                    <Typography variant="h6" style={{ color: "#FFFFFF"}}>Simple Website</Typography>
                    <Typography variant="h7" style={{ color: "#FFFFFF"}}>
                      Simple websites work best for local businesses interested
                      in marketing. These websites present information but
                      doesn't have any functionality behind them.
                    </Typography>
                    <br />
                    <Button
                      color="secondary"
                      style={{ fontWeight: 600 }}
                      className={classes.button}
                    >
                      See an example
                    </Button>
                  </Paper>

                  <Typography
                    variant="h6"
                    style={{ color: "#FFFFFF", fontWeight: 600 }}
                  >
                    Add Ons:
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Paper
                    style={{
                      padding: "4px",
                      height: "100px",
                      marginRight: "4px",
                      border: "2px solid",
                      borderColor: "#FFFFFF",
                    }}
                  >
                    hi
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper
                    style={{
                      padding: "4px",
                      height: "100px",
                      marginRight: "4px",
                      border: "4px solid",
                      borderColor: "#FFFFFF",
                    }}
                  >
                    hi
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper
                    style={{
                      padding: "4px",
                      height: "100px",
                      border: "4px solid",
                      borderColor: "#FFFFFF",
                    }}
                  >
                    hi
                  </Paper>
                </Grid>
              </ThemeProvider>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
