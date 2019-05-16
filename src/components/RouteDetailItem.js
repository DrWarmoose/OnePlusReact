import React from "react";
import {
  withStyles,
  Button,
  Divider,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    fontSize: 18,
    fontWeight: "bold"
  },
  address: {
    fontSize: 16,
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
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  titleColumn: {
    flexBasis: '100%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const RouteDetailItem = ({ classes }) => {
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.root}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.titleColumn}>
            <Typography className={classes.heading}>Customer Or Business Name</Typography>
          </div>
          <div className={classes.titleColumn}>
            <Typography className={classes.heading}>Customer Street Address City, State, Postal</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.column}>
            <Typography className={classes.heading}>Airbill: 12309819</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>Special Instructions:</Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Transfer</Button>
          <Button size="small" color="primary">
            Acknowledge
          </Button>
        </ExpansionPanelActions>      </ExpansionPanel>
    </div>
  );
};
export default withStyles(styles)(RouteDetailItem);
