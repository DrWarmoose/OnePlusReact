import React from "react";
import {
  withStyles,
  Paper,
  Card,
  CardContent,
  Typography
} from "@material-ui/core";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  card: {
    minWidth: 255
  },
  title: {
    fontSize: 26,
    fontWeight: "bold"
  },
  routeName: {
    fontSize: 16
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
});

const RouteIndexItem = ({ classes }) => {
  return (
    <div>
      <Paper className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} align="left" color="primary">
              STX-01
            </Typography>
            <Typography
              className={classes.routeName}
              align="left"
              color="textPrimary"
            >
              San Antonio - 78201
            </Typography>
            <Typography
              className={classes.routeName}
              align="left"
              color="textSecondary"
            >
              Driver: Alberto Gonzalez
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
};
export default withStyles(styles)(RouteIndexItem);
