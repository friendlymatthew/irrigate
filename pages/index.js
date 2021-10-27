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
import "typeface-aleo";
import Sidecard from "../components/Sidecard";
import Cardside from "../components/Cardside";

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
      main: "#3A10E5",
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

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={scaffold}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Appbar style={{ margin: "0px" }} />
          </Grid>

          <Grid item xs={12} container spacing={3}>
            <ThemeProvider theme={aleo}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Typography style={{ fontWeight: 700 }} variant="h2">
                  <div>Middletown </div> <div> Irrigation Initiative </div>
                </Typography>
                <Button style={{ margin: "0px", color: "#3a10e5" }}>
                  <Typography variant="h2" style={{ fontWeight: 700 }}>
                    Learn more
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={2}></Grid>
            </ThemeProvider>
          </Grid>

          <Grid style={{ margin: "0px", textAlign: "center" }} item xs={12}>
            <Image
              className={classes.art}
              src="/redrock.png"
              height={980}
              priority={true}
              width={1920}
              margin="0px"
            />
          </Grid>

          <Grid
            item
            xs={12}
            container
            spacing={2}
            style={{ marginTop: "40px", marginBottom: "40px" }}
          >
            <Grid item xs={2}></Grid>

            <Grid item xs={8} container spacing={14}>
              <Grid item xs={12} style={{ marginBottom: "20px" }}>
                <Sidecard
                  title="Lorem Ipsum"
                  desc="nd also you solution will only work if the window is opened through window.open. Of'course your answer should not be downvoted as it provides a solution to certain scenarios and is a good addition to the question/answers for future reference"
                  buttonText="See Dons Bogam New York Middletown"
                />
              </Grid>

              <Grid item xs={12} style={{ marginBottom: "20px" }}>
                <Cardside
                  title="Lorem Ipsum"
                  desc="nd also you solution will only work if the window is opened through window.open. Of'course your answer should not be downvoted as it provides a solution to certain scenarios and is a good addition to the question/answers for future reference"
                  buttonText="See Dons Bogam New York Middletown"
                />
              </Grid>

              <Grid item xs={12} style={{ marginBottom: "20px" }}>
                <Sidecard
                  title="Lorem Ipsum"
                  desc="nd also you solution will only work if the window is opened through window.open. Of'course your answer should not be downvoted as it provides a solution to certain scenarios and is a good addition to the question/answers for future reference"
                  buttonText="See Dons Bogam New York Middletown"
                />
              </Grid>
            </Grid>

            <Grid item xs={2}></Grid>
          </Grid>

          <Grid item xs={12}>
            <Image
              className={classes.art}
              src="/redrock.png"
              height={900}
              width={1920}
            />
          </Grid>

          <Grid item xs={12} style={{ textAlign: "center"}}>
              <ThemeProvider theme={lato} >
                <Typography variant="h3" style={{ fontWeight: 700 }}>
                  Our Mission
                </Typography>
              </ThemeProvider>
              <br />
              <ThemeProvider theme={lato}>
                <Typography variant="h6">
                  <div>
                    We are devoted to helping local businesses curate their
                    online prescence in hopes of improving their business.
                  </div>
                  <div>
                    {" "}
                    Lorem ipsum on some bullshit, yadayadad yada whatevers
                  </div>
                </Typography>
                <br />
                <Link href="/about">
                  <Button
                    color="secondary"
                    style={{ fontWeight: 600, fontSize: "16px" }}
                    className={classes.button}
                  >
                    Learn more about us
                  </Button>
                </Link>
              </ThemeProvider>
          </Grid>

          <Grid item xs={12}>
            <Image
              className={classes.art}
              src="/redrock.png"
              height={900}
              width={1920}
            />
          </Grid>

          <Grid item xs={12} style={{ textAlign: "center"}}>
              <ThemeProvider theme={lato}>
                <Typography variant="h3" style={{ fontWeight: 700 }}>
                  Workshops
                </Typography>
                <br />
              </ThemeProvider>
              <ThemeProvider theme={lato}>
                <Typography variant="h6">
                  We want business owners to take full ownership of their
                  business, including their online business. We offer
                  educational workshops for all different skill levels.
                </Typography>
                <br />
                <Link href="/workshops">
                  <Button
                    color="secondary"
                    style={{ fontWeight: 600, fontSize: "16px" }}
                    className={classes.button}
                  >
                    Learn more about workshops
                  </Button>
                </Link>
              </ThemeProvider>
          </Grid>

          <Grid item xs={12} style={{ marginBottom: "0px"}}>
            <Image
              className={classes.art}
              src="/redrock.png"
              height={900}
              width={1920}
            />
          </Grid>

          <Grid item xs={12} style={{ margin: "0px"}}>
            <Footer />
          </Grid>

        </Grid>
      </ThemeProvider>
    </div>
  );
}
