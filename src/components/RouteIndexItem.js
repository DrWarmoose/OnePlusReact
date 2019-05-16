import React from "react";
import {
  Card,
  Grid,
  Typography
} from "@material-ui/core";



import "../index.css";

const DriverName = ({driver}) => {
  return (
    <Grid item xs={6} className="RouteItem-Driver">
    <Typography variant="button" color="textSecondary">
     {driver}
    </Typography>
  </Grid>);
}

class RouteIndexItem extends React.Component 
{
  render(){

    var driverName ;
    if ( this.props.item.driver && this.props.item.driver.length > 0){
      driverName = <DriverName driver={this.props.item.driver} />;
    }
   return (
      <div>
        <Card className="RouteItem-Card" >
          <Grid container spacing={24}>
            <Grid item xs={4}>
            <Typography variant="h5" align="left" color="primary">
                {this.props.item.symbol}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6" color="textPrimary" align="right">
                {this.props.item.name}
              </Typography>
            </Grid>
            {driverName}
          </Grid>
          </Card>
      </div>
    );
  }
}
export default (RouteIndexItem);
