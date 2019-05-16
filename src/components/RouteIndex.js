import React from "react";
import RouteIndexItem from "./RouteIndexItem";
import {GridList,GridListTile} from "@material-ui/core";
import "../index.css";

class RouteIndex extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = { routes: [] };
  }
  
  handleClick(ev) {
    this.props.changed(ev);
  }

  render(){
    const items = this.props.routes;

    if ( items ){
      return (
        <GridList cols={1}>
          {items.map(n => {
            return(
            <GridListTile rows={1} className="RouteIndexTile" key={n.symbol}
              onClick={ () => {this.handleClick(n.symbol);}}>
              <RouteIndexItem key={n.symbol} item={n} />
            </GridListTile>
            );
          })}
        </GridList>
      );
        }
        else {
          return (<h1>Loading...</h1>);
        }
  }
}

export default (RouteIndex);
