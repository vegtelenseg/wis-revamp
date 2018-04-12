import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import serviceUrl from '../../services/servicesUrls';

import PropTypes from 'prop-types';
import MapMarker from '../mapMarker/mapMarker.view';

export default class MapView extends Component {
  componentDidMount() {
    this.props.getUserCurrentLocationThunk();
  }
  render() {
    const {
      foundItems,
      currentUserLocation,
      zoom,
      numberOfWatchedItems,
      changedData
    } = this.props;
    return (
      <Map center={currentUserLocation} zoom={zoom} zoomControl={false}>
        <TileLayer url={serviceUrl.tileLayerUrl} />
        {
          <MapMarker
            foundItems={foundItems}
            numberOfWatchedItems={numberOfWatchedItems}
            centerOfCircle={currentUserLocation}
            changedData={changedData}
          />
        }
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
