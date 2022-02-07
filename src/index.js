import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

// domain
// dev-xz4ssd4y.us.auth0.com

// client
//  0wUV7zN9wwjzdWysLnquXJuTx48FtfHm
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-xz4ssd4y.us.auth0.com'
      clientId='0wUV7zN9wwjzdWysLnquXJuTx48FtfHm'
      redirectUri={window.location.origin}
    >
      <AppProvider>
        <App />
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
