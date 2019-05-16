import React from "react";
import {
  Paper,
  Card,
  CardContent,
  Typography
} from "@material-ui/core";
import "../index.css";

const DriverName = ({driver}) => {
  return (
    <Typography
    align="left"
    color="textSecondary"
  >
    Driver: {driver}
  </Typography>);
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
        <Paper className="RouteItem-Root">
          <Card className="RouteItem-Card">
            <CardContent>
              <Typography className="RouteItem-Title" align="left" color="primary">
                {this.props.item.symbol}
              </Typography>
              <Typography
                className="RouteItem-RouteName"
                align="left"
                color="textPrimary"
              >
                {this.props.item.name}
              </Typography>
              {driverName}
            </CardContent>
          </Card>
        </Paper>
      </div>
    );
  }
}
export default (RouteIndexItem);
