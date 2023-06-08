import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider as ReduxProvider } from "react-redux";
import App from './App';
import { store } from './services/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
