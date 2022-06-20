import React from 'react';
import GoogleMapReact from 'google-map-react';

const { REACT_APP_GOOGLE_MAP_API_KEY } = process.env;

const lat = 42.0593;
const lng = -88.0245928;

export default function Map() {
  const mapProps = {
    center: { lat, lng },
    zoom: 17,
  };

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat, lng },
      map,
      title: '350 W Algonquin Rd',
    });
    return marker;
  };

  return (
    <div className="map" id="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={mapProps.center}
        defaultZoom={mapProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  );
}
