import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import serviceUrl from '../../services/servicesUrls';

import PropTypes from 'prop-types';
import MapMarker from '../mapMarker/mapMarker.container';

export default class MapView extends Component {
  render() {
    const { currentUserLocation } = this.props;
    return (
      <Map center={currentUserLocation} zoom={12}>
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
