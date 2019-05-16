import React from "react";
import {
  Button,
  Divider,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "../index.css";

class RouteDetailItem extends React.Component
{
  render(){
    const stop = this.props.stop;

    return (
      <div className='RouteDetail-Root'>
        <ExpansionPanel className='RouteDetail-Root'>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div>
              <Typography>{stop.name}</Typography>
              <Typography>{stop.address}</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className='RouteDetail-Column'>
              <Typography>Airbill: 12309819</Typography>
            </div>
            <div className='RouteDetail-Column'>
              <Typography>Special Instructions:</Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small">Transfer</Button>
            <Button size="small" color="primary">
              Acknowledge
            </Button>
          </ExpansionPanelActions>      
        </ExpansionPanel>
      </div>
    );    
  }
} 

export default (RouteDetailItem);
