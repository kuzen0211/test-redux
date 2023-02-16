import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store } from '../src/components/redux/store';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
