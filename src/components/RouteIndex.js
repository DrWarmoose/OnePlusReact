import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RouteIndexItem from "./RouteIndexItem";

const styles = {
  root: { flexGrow: 1 },
  paper: {}
};

const RouteIndex = ({ classes }) => {
  return (
    <div className={classes.root}>
      <RouteIndexItem />
    </div>
  );
};

export default withStyles(styles)(RouteIndex);
