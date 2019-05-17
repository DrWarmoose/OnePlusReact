import React from "react";

export class BingMap extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      imageUrl: null
    };
  }

  componentDidMount() {
      this.loadMap();
  }

  componentDidUpdate(){
    this.loadMap();
  }

  loadMap() {
    if ( this.props.stop && this.props.show && !this.state.imageUrl ) {
      // bing is available
      this.findLocationByAddress().then( coords => 
        {
            console.log( 'coords:' + coords[0] + ',' + coords[1])
            var url = 'https://dev.virtualearth.net/REST/V1/Imagery/Map/Road/' + coords[0] + ',' + coords[1] 
            +'/15?mapSize=800,800&mapLayer=TrafficFlow&key=AhaeDuoEULjU8eiDru2ohDxMS3UnIzP2kxw_fSuTQQM_WHYDLBkwGhP7a9Dhh7B_&pp='
            + coords[0] + ',' + coords[1];
            this.setState({imageUrl:url});
            this.props.stop.map = url;
        });
    }
  }
  async findLocationByAddress(){
      // http://dev.virtualearth.net/REST/v1/Locations/US/TX/78729/Austin/7305%20Saralee?includeNeighborhood=true&include=true&maxResults=5&key=AhaeDuoEULjU8eiDru2ohDxMS3UnIzP2kxw_fSuTQQM_WHYDLBkwGhP7a9Dhh7B_ 
      var url = "http://dev.virtualearth.net/REST/v1/Locations/US"+this.props.stop.bing+"?includeNeighborhood=true&include=true&maxResults=5&key=AhaeDuoEULjU8eiDru2ohDxMS3UnIzP2kxw_fSuTQQM_WHYDLBkwGhP7a9Dhh7B_";
      return fetch(url)
        .then(response => 
          {
            return response.json();
          })
        .then( json => {
          console.log('got something from bing');
          return json.resourceSets[0].resources[0].point.coordinates ;
        })
  }
  render() {
    if ( this.state.imageUrl ) 
      return (<img alt="map of location" src={this.state.imageUrl}></img>);
    else
      return (<div ref="map">Loading map...</div>);
  }
}
