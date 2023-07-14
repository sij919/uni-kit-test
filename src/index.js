import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalLayout from '@/routes/layout/GlobalLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalLayout />
    </React.StrictMode>
  </BrowserRouter>
);