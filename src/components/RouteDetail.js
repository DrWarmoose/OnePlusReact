import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RouteDetailItem from "./RouteDetailItem";

const styles = {
  root: { flexGrow: 1 },
  paper: {}
};

const RouteDetail = ({ classes }) => {
  return (
    <div className={classes.root}>
      <RouteDetailItem />
    </div>
  );
};

export default withStyles(styles)(RouteDetail);
