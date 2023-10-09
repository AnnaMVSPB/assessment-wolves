import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';


import App from './components/App/App';
import './index.css';

import store from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>

    <App />

  </Provider>
);
