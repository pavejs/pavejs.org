import React from 'react';
import ReactDOM from 'react-dom';

import loadLivereload from './load-livereload.js';
import reportWebVitals from './report-web-vitals';
import Root from './root';

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
