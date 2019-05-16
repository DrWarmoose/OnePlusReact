import React from "react";
import { Grid, Paper} from '@material-ui/core';
import Navigation from './Navigation';
import RouteDetail from "./RouteDetail";
import RouteIndex from './RouteIndex';
import "../index.css" ;

class Dispatch extends React.Component
{
    render()
    {
        const routes = this.props.routes ;
        const route = this.props.route ;
        const routeChanged = this.props.routeSelected;

        return (
            <div className="Dispatch-Root">
              <Navigation />
              <Paper className="Dispatch-Content">
                <Grid container className="Dispatch-Container">
                  <Grid item xs={4} className="Dispatch-Scrollable">
                    <RouteIndex routes={routes} changed={routeChanged} />
                  </Grid>
                  <Grid item xs={8} className="Dispatch-Scrollable">
                    <RouteDetail route={route} />
                  </Grid>
                </Grid>
              </Paper>
            </div>
        );
    }
}

export default Dispatch ;