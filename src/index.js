import React from 'react';
import ReactDOM from 'react-dom';

import loadLivereload from './functions/load-livereload.js';
import reportWebVitals from './functions/report-web-vitals.js';
import Root from './root.js';

const { document } = window;

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
loadLivereload();
