import React from "react";
import RouteDetailItem from "./RouteDetailItem";

class RouteDetail extends React.Component
{
  constructor(props) {
    super(props);
    this.state = { route: {} };
  }

  handleClick(ev) {
    alert(ev);
  }

  render()
  {
    if( this.props.route ){
      const stops =  this.props.route;
      const transfer = this.props.transfer;
      return (
      <div>
      {stops && stops.map(n => {
        return( <RouteDetailItem key={n.id} stop={n} transfer={transfer} />);
      })}
      </div>
    );
    }
    else{
      return (<h1>loading...</h1>);
    }
  }
}

export default (RouteDetail);
