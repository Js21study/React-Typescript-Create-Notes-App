import React from 'react';
import './App.scss';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import Archive from './pages/Archive';
import Footer from './layout/Footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
