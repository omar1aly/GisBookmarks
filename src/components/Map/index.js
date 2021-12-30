import React, { useRef, useEffect, useState } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import MapWidgets from './MapWidgets';
import Graphics from './Graphics';

const MapComponent = () => {
  const mapRef = useRef(null);
  const [view, setView] = useState(null);

  const glSearchResult = new GraphicsLayer({
    id: 'glSearchResult',
  });

  useEffect(() => {
    new MapView({
      container: mapRef.current,
      map: new Map({
        basemap: 'dark-gray',
        layers: [glSearchResult],
      }),
      zoom: 3,
    }).when((view) => setView(view));
  }, []);

  return (
    <div ref={mapRef} style={{ height: '100vh', width: '100%' }}>
      {view && (
        <>
          <MapWidgets view={view} />
          <Graphics view={view} />
        </>
      )}
    </div>
  );
};

export default MapComponent;
