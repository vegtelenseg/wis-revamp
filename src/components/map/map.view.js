import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import serviceUrl from '../../services/servicesUrls';

import PropTypes from 'prop-types';
import MapMarker from '../mapMarker/mapMarker.container';

export default class MapView extends Component {
  componentDidMount() {
    this.props.getUserCurrentLocationThunk();
  }
  render() {
    const { foundItems, currentUserLocation, zoom } = this.props;
    return (
      <Map center={currentUserLocation} zoom={zoom}>
        <TileLayer url={serviceUrl.tileLayerUrl} />
        {<MapMarker foundItems={foundItems} />}
      </Map>
    );
  }
}

Map.propTypes = {
  center: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  foundItems: PropTypes.arrayOf(Object),
  currentUserLocation: PropTypes.array
};
