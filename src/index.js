import React from "react";
import ReactDOM from "react-dom";
import Dispatch from "./components/Dispatch";
import RouteService from "./gateway/RouteService";
import "./index.css";

class App extends React.Component{
  constructor(props){
    super(props);
    this.routeService = new RouteService();
    this.selectRoute = this.selectRoute.bind(this);
    this.selectTransfer = this.selectTransfer.bind(this);

    this.state = {
      selectedRoute: null,
      selectedStop: null,
      selectedTransferRoute: null
    };
  }

  componentDidMount() {
    this.getRouteList();
  }

  render()
  {
    const routes = this.state.routes;
    const selectedRoute = this.state.selectedRoute;
    const selectedStop = this.state.selectedStop;
    const selectedTransferRoute = this.state.selectedTransferRoute;

    return (
      <div className="App">
        <Dispatch
          routeSelected={this.selectRoute}
          stopSelected={this.selectStop}
          transferSelected={this.selectTransfer}
          routes={routes} 
          route={selectedRoute} 
          stop={selectedStop} 
          transfer={selectedTransferRoute} />
      </div>
    );
  }

  getRouteList() {
    this.routeService.getRouteList().then( routes => 
      { 
        this.setState({routes:routes})
        if (routes.length > 0 && !this.state.selectedRoute ){
          console.log("setting on-calls as active route");
          this.selectRoute( routes[0].symbol);
        }
      });
  }

  selectRoute( symbol ){
    this.routeService.getRouteDetail(symbol).then( route => 
      {
        console.log('selected route =' + route.Symbol);
        this.setState({selectedRoute:route});
      })
  }
  
  selectTransfer(stop,from,to){
      console.log( 'transfer stop ' + stop + ' from ' + from + ' to ' + to);
      this.routeService.transferStop(stop,from,to).then( route => 
        {
          this.setState({selectedRoute:route});
        } )
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
