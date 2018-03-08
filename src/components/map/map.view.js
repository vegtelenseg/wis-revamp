import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from '../mapMarker/mapMarker.container';

export default class Map extends Component {
  styles = {
    height: '100vh'
  };
  render() {
    console.log("cUL: ", this.props.currenUsertLocation);
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCKrI3dCD16cWj43TZcHUSalpLEc48nHPw' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        style={this.styles}
      >
        <MapMarker {...this.props.currenUsertLocation} />
      </GoogleMapReact>
    );
  }
}
