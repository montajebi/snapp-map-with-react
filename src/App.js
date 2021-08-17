import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

import CONSTANTS from './shared/constants';

function App() {
  const [viewport, setViewport] = useState({
    longitude: 51.418184,
    latitude: 35.7729514,
    zoom: 16,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle={CONSTANTS.MAP.SNAPP_JSON_STYLE_URL}
      onViewportChange={setViewport}
    />
  );
}

export default App;
