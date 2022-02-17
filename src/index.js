import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Upload from './Upload';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Upload />
  </React.StrictMode>,
  document.getElementById('root')
);
