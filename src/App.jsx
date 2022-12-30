import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notice from './pages/Notice';
import './style/common.css';
import NoticeCreate from './pages/NoticeCreate';
import NoticeUpdate from './pages/NoticeUpdate';
import NoticeDetail from './pages/NoticeDetail';
import NoticeList from './pages/NoticeList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notice/create" element={<NoticeCreate />} />
        <Route path="/notice/update" element={<NoticeUpdate />} />
        <Route path="/notice/detail" element={<NoticeDetail />} />
        <Route path="/notice/list" element={<NoticeList />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
