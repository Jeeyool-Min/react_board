import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/common/Layout';
import Home from './pages/Home';
import Notice from './pages/notice/Notice';
import NoticeCreate from './pages/notice/NoticeCreate';
import NoticeUpdate from './pages/notice/NoticeUpdate';
import NoticeDetail from './pages/notice/NoticeDetail';
import NoticeList from './pages/notice/NoticeList';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './style/common.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/notice/detail/:id" element={<NoticeDetail />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/create" element={<NoticeCreate />} />
          <Route path="/notice/update/:id" element={<NoticeUpdate />} />
          <Route path="/notice/list" element={<NoticeList />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />
          {/* Signup */}
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
