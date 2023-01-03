import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Notice from './pages/Notice';
import NoticeCreate from './pages/NoticeCreate';
import NoticeUpdate from './pages/NoticeUpdate';
import NoticeDetail from './pages/NoticeDetail';
import NoticeList from './pages/NoticeList';
import './style/common.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/notice/detail" element={<NoticeDetail />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/create" element={<NoticeCreate />} />
          <Route path="/notice/update" element={<NoticeUpdate />} />
          <Route path="/notice/list" element={<NoticeList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
