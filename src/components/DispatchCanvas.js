import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Navigation from "./Navigation";
import RouteIndex from "./RouteIndex";
import RouteDetail from "./RouteDetail";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "grey",
    flex: 1
  },
  content: {
    backgroundColor: "#333",
    height: "100%"
  },
  scrollable: {
    height: "100%",
    overflowX: "hidden",
    overflowY: "scroll"
  }
};
const DispatchCanvas = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Navigation />
      <Paper className={classes.content}>
        <Grid container>
          <Grid item xs={4}>
            <RouteIndex />
          </Grid>
          <Grid item xs={8} className={classes.scrollable}>
            <RouteDetail />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default withStyles(styles)(DispatchCanvas);
