import React from "react";

export class BingMap extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.bing !== this.props.bing) {
      this.loadMap();
    }
  }
  loadMap() {
    if (this.props && this.props.bing) {
      // bing is available
      const { bing } = this.props;
      const maps = bing.maps; // whatever the property on the bing object is that renders maps

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
    }
  }
  findLocationByAddress( street, city, state, postal ){
      // http://dev.virtualearth.net/REST/v1/Locations/US/TX/78729/Austin/7305%20Saralee?includeNeighborhood=true&include=true&maxResults=5&key=AhaeDuoEULjU8eiDru2ohDxMS3UnIzP2kxw_fSuTQQM_WHYDLBkwGhP7a9Dhh7B_ 
      var url = "http://dev.virtualearth.net/REST/v1/Locations/US/"+state+"/"+postal+"/"+city+"/"+street+"/?includeNeighborhood=true&include=true&maxResults=5&key=AhaeDuoEULjU8eiDru2ohDxMS3UnIzP2kxw_fSuTQQM_WHYDLBkwGhP7a9Dhh7B_";
  }
  render() {
    return <div ref="map">Loading map...</div>;
  }
}
