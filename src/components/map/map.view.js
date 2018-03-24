import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import serviceUrl from '../../services/servicesUrls';

import PropTypes from 'prop-types';
import MapMarker from '../mapMarker/mapMarker.container';

export default class MapView extends Component {
  render() {
		const { currentUserLocation, center } = this.props;
		const coords = null;
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(position => {
				const coords = [position.coords.latitude, position.coords.longitude];
				console.log("The coords: ", coords);
				return coords;
			});
		} else {
			alert("Please switch on the location service of your device");
		}
    return (
      <Map center={coords || currentUserLocation} zoom={12} position={coords || center}>
        <TileLayer url={serviceUrl.tileLayerUrl} />
        {<MapMarker foundItems={this.props.foundItems} />}
      </Map>
    );
  }
}

Map.propTypes = {
  center: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  foundItems: PropTypes.arrayOf(Object)
};
