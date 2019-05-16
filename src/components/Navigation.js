import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
const styles = {
  flex: {
    flexGrow: 1
  }
};
const Navigation = ({ classes }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          San Antonio, TX Dispatch Console
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default withStyles(styles)(Navigation);
