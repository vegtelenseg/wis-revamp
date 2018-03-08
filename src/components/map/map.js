import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from '../mapMarker/mapMarker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class SimpleMap extends Component {
  static defaultProps = {
    center: { lat: -26.107567, lng: 28.056702 },
    zoom: 11
  };
  styles = {
    height: '100vh'
  }
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCKrI3dCD16cWj43TZcHUSalpLEc48nHPw' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        style={this.styles}
      >
        <MapMarker
          lat={-26.107567}
          lng={28.056702}
        />
      </GoogleMapReact>
    );
  }
}