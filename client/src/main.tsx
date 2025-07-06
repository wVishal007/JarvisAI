import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { SpeechProvider } from './contexts/SpeechContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SpeechProvider>
          <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
          <App />
          </GoogleOAuthProvider>
        </SpeechProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
