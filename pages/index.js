import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={scaffold}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Appbar />
          </Grid>

          <Grid item xs={2}></Grid>

          <Grid item xs={8} container spacing={4}>
            <Grid item xs={6}>
              <ThemeProvider theme={heebo}>
                <Typography
                  color="primary"
                  variant="h3"
                  style={{ fontWeight: 600 }}
                >
                  Irrigate your local business online
                </Typography>
              </ThemeProvider>
            </Grid>
            <Grid item xs={6}></Grid>

            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={0}>
                <ThemeProvider theme={lato}>
                  <Typography
                    color="primary"
                    variant="h5"
                    style={{ fontWeight: 600, marginBottom: "5px" }}
                  >
                    Start reaching more customers online
                  </Typography>
                </ThemeProvider>
                <ThemeProvider theme={lato}>
                  <Typography>
                    Set up a custom website for online engagement. Sell retail
                    products, manage appointment bookings, or integrate other
                    ways to scale your business.
                  </Typography>
                  <Link href="/services">
                    <Button
                      color="secondary"
                      style={{ fontWeight: 600 }}
                      className={classes.button}
                    >
                      View our solutions
                    </Button>
                  </Link>
                </ThemeProvider>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper className={classes.artpaper}></Paper>
            </Grid>

            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={0}>
                <ThemeProvider theme={lato}>
                  <Typography
                    color="primary"
                    variant="h5"
                    style={{ fontWeight: 600 }}
                  >
                    Discover more customers
                  </Typography>
                </ThemeProvider>
                <ThemeProvider theme={lato}>
                  <Typography>
                    Attract and engage with customers through social media
                    platforms. Improve search engine results through Google
                    Business.
                  </Typography>
                  <Link href="/services">
                    <Button
                      color="secondary"
                      style={{ fontWeight: 600 }}
                      className={classes.button}
                    >
                      View our solutions
                    </Button>
                  </Link>
                </ThemeProvider>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={0}>
                <ThemeProvider theme={lato}>
                  <Typography
                    color="primary"
                    variant="h5"
                    style={{ fontWeight: 600 }}
                  >
                    Take control of your future
                  </Typography>
                </ThemeProvider>
                <ThemeProvider theme={lato}>
                  <Typography>
                    Learn how to navigate the internet for your business. Attend
                    topic-based workshops like e-commerce management, email
                    management, social media 101, and many more.
                  </Typography>
                  <Link href="/workshops">
                    <Button
                      color="secondary"
                      style={{ fontWeight: 600 }}
                      className={classes.button}
                    >
                      Browse workshops
                    </Button>
                  </Link>
                </ThemeProvider>
              </Paper>
            </Grid>

            <Grid item xs={6}></Grid>

            <Grid item xs={12}>
              <Paper
                elevation={0}
                className={classes.paper}
                style={{ textAlign: "center" }}
              >
                <ThemeProvider theme={heebo}>
                  <Typography variant="h4" style={{ fontWeight: 700 }}>
                    Our Mission
                  </Typography>
                </ThemeProvider>
                <ThemeProvider theme={lato}>
                  <Typography variant="h6">
                    We are devoted to helping local businesses curate their
                    online prescence in hopes of improving their business. Lorem
                    ipsum on some bullshit, yadayadad yada whatevers
                  </Typography>
                  <Link href="/about">
                    <Button
                      color="secondary"
                      style={{ fontWeight: 600 }}
                      className={classes.button}
                    >
                      Learn more about us
                    </Button>
                  </Link>
                </ThemeProvider>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper
                elevation={0}
                className={classes.paper}
                style={{ textAlign: "center" }}
              >
                <ThemeProvider theme={heebo}>
                  <Typography variant="h4" style={{ fontWeight: 700 }}>
                    Workshops
                  </Typography>
                </ThemeProvider>
                <ThemeProvider theme={lato}>
                  <Typography variant="h6">
                    We want business owners to take full ownership of their
                    business, including their online business. We offer
                    educational workshops for all different skill levels.
                  </Typography>
                  <Link href="/workshops">
                    <Button
                      color="secondary"
                      style={{ fontWeight: 600 }}
                      className={classes.button}
                    >
                      Learn more about workshops
                    </Button>
                  </Link>
                </ThemeProvider>
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={2}></Grid>

          <Footer />
        </Grid>
      </ThemeProvider>
    </div>
  );
}
