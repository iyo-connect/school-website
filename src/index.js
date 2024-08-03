import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WrappedApp from './App';
import reportWebVitals from './reportWebVitals';
import './utils/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WrappedApp />
</React.StrictMode>
);

reportWebVitals();
