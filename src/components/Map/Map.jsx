import React, { useState, useEffect } from 'react';
const DG = require('2gis-maps');

const Map = () => {
  const [x, y] = [42.882022, 74.577879];
  const [map, setMap] = useState(null);

  const addMarker = async (x, y, popup) => {
    const p = await DG.marker([x, y]).addTo(map);
    if (popup) p.bindPopup(popup);
  };

  useEffect(() => {
    if (map) {
      addMarker(x, y, 'Кыргызстан, г.Бишкек, ул. Фрунзе, 458 ');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useEffect(() => {
    DG.then(function () {
      setMap(
        DG.map('map', {
          center: [x, y],
          zoom: 18,
        })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="map" id="map" />;
};

export default Map;
