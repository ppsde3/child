import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './context/AuthContext';
import './tailwind.generated.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
);
