import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import AdminApp from './Admin/App';
import HomeApp from './Home/App';
import SupplierApp from './Admin/App';
import CustomerApp from './Admin/App';

const hosts = window.location.host.split('.')
const subdomain = hosts.length > 2 ? hosts.slice(0, -2).join('.') : 'home'

const instances = {
  admin: <AdminApp />,
  supplier: <SupplierApp />,
  customer: <CustomerApp />,
  home: <HomeApp />
}

ReactDOM.render(
  instances[subdomain],
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
