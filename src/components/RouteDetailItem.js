import React from "react";
import {
  Button,
  Divider,
  Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Grid,
  List, ListItem, ListItemText,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RouteService from '../gateway/RouteService';
import "../index.css";
import { BingMap } from "./BingMap";


class RouteDetailItem extends React.Component
{
  constructor(props){
    super(props);
    this.routeService = new RouteService();
    this.state = {
      open: false,
      stop: null,
      transfer: {},
      hidden: true,
      nearby: [],
      expanded: false
    };
  }

  handleClickOption = (stop) => {
    this.setState({open:true});
    this.routeService.getNearybyRoutes(stop.id).then( near => 
      {
        console.log('rearby routes' + near.length);
        this.setState({nearby:near, stop:stop});
      })
  }

  handlSelectOption = (route) => {
    this.setState({transfer:route, hidden:false});
  }
  
  handleTransferClick = () => {
    this.props.transfer( this.state.stop.id, this.state.transfer.symbol);
    this.setState({open:false});
  }

  handleClose = () => {
    this.setState({open:false});
  }

  handleExpanded = (ev,expanded,stop) => {
    console.log( 'dude is :' + expanded);
      this.setState({expanded:expanded});
  }

  render(){
    const stop = this.props.stop;
    const near = this.state.nearby;
    const exp = this.state.expanded;
    console.log( 'rendering detail ' + exp);

    return (
      <div className='RouteDetail-Root'>
      <Divider />
        <ExpansionPanel className='RouteDetail-Root' 
          onChange={ (e,o)=> {this.handleExpanded(e,o,stop);}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div>
              <Typography color="primary">{stop.name}</Typography>
              <Typography>{stop.address}</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
              <Grid item xs={8}>
                 <Typography>Airbills:&nbsp;&nbsp;{stop.airBills}</Typography>
              </Grid>
              <Grid item xs={4}>
                 <Typography>Service Level:&nbsp;&nbsp;{stop.service}</Typography>
              </Grid>
              <Grid item xs={8}>
                 <Typography>Pick-up/Delivery:&nbsp;&nbsp;{stop.type}</Typography>
              </Grid>
              <Grid item xs={4}>
                 <Typography>Signature Required:&nbsp;&nbsp;{stop.signature}</Typography>
              </Grid>
              <Grid item xs={8}>
                <BingMap stop={stop} show={exp} />
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small" onClick={ () => {this.handleClickOption(stop);}}>Transfer</Button>
            <Button size="small" color="primary">
              Acknowledge
            </Button>
          </ExpansionPanelActions>      
        </ExpansionPanel>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Transfer</DialogTitle>
          <DialogContent>
            <DialogContentText>
                {stop.name}<br />
                {stop.address}
            </DialogContentText>
            <List component="nav">
              {near && near.map(n=>{
                return(
                <ListItem button key={n.symbol} onClick={() => {this.handlSelectOption(n);}}>
                  <ListItemText primary={n.symbol + ': ' + n.name} secondary={n.driver} />
                </ListItem>
              );
              })}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button disabled={this.state.hidden} onClick={() =>{ this.handleTransferClick();}} color="secondary">
              Transfer
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );    
  }
} 

export default (RouteDetailItem);
