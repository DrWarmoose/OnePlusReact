import React from "react";
import {
  Button,
  Divider,
  Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  List, ListItem, ListItemText,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RouteService from '../gateway/RouteService';
import "../index.css";


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
      nearby: []
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

  render(){
    const stop = this.props.stop;
    const near = this.state.nearby;

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
