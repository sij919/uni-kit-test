import React from 'react';
import { GNB } from '@/pages/GNB';
import { Header } from '@/pages/Header';
import App from '@/App';
import '@/assets/scss/style.scss';

function GlobalLayout() {
  return (
    <div className="guide-wrap">
      <GNB />
      <Header />
      <App />
    </div>
  );
}

export default GlobalLayout