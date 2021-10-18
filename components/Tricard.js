

export default function TriCardComponent() {

    return (
        <div>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <ThemeProvider theme={heebo}>
                  <Typography
                    color="primary"
                    variant="h6"
                    style={{ fontWeight: 600 }}
                  >
                    Make your business more accessible
                  </Typography>
                </ThemeProvider>
                <ThemeProvider theme={lato}>
                  <Typography>
                    Attract and engage with customers through social media platforms. 
                  </Typography>
                  <Button
                    color="secondary"
                    style={{ fontWeight: 600 }}
                    className={classes.button}
                  >
                    View our solutions >
                  </Button>
                </ThemeProvider>
              </Paper>
            </Grid>
        </div>
    )
}