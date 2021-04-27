import React from 'react';
import ReactDOM from 'react-dom';

import loadLivereload from './functions/load-livereload.js';
import reportWebVitals from './functions/report-web-vitals.js';
import Root from './root.js';

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
loadLivereload();
