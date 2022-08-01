import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Auth0Provider } from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-4l00ifm1.us.auth0.com"
    clientId="CVPHLlmK586XYpLdHJBqKNH2oJmLZr6L"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
