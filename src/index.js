import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setRTLTextPlugin } from 'react-map-gl';

import './index.css';

setRTLTextPlugin(
  'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
  null,
  true
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
