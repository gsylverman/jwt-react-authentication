import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './routes';
import { Provider } from 'react-redux'
import store from './store/store';
import MainLayout from './mainLayout/mainLayout';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

