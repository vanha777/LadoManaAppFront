// import mapboxgl from 'mapbox-gl';

// // @ts-ignore
// // eslint-disable-next-line
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

import mapboxgl from 'mapbox-gl';

fetch('path/to/mapbox-gl-csp-worker.js')
  .then(response => response.text())
  .then(workerScript => {
    const blob = new Blob([workerScript], { type: 'application/javascript' });
    const workerURL = URL.createObjectURL(blob);

    mapboxgl.workerClass = class {
      constructor() {
        return new Worker(workerURL);
      }
    };
  });
