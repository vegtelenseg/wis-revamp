import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from '../mapMarker/mapMarker.container';

export default class Map extends Component {
  styles = {
    height: '100vh'
  };
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCKrI3dCD16cWj43TZcHUSalpLEc48nHPw' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        style={this.styles}
      >
        {this.renderMarkers(this.props.foundItems)}
      </GoogleMapReact>
    );
  }
  renderMarkers = foundItems =>
    foundItems.map((item, idx) => <MapMarker key={idx + Math.random()} lat={item.lat} lng={item.lng} item={item} />);
}
