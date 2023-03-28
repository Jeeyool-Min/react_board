import React, { useCallback, useEffect, useState } from 'react';

import Auth from '../services/auth';
import BasicAPI from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [isLogined, setIsLogined] = useState(false);

  /**  Get Access Token Callback Function */
  const getAccessToken = useCallback(async () => {
    const token = await Auth();

    setAccessToken(token);
  }, []);

  useEffect(() => {
    if (isLogined) {
      getAccessToken();
    }
  }, [isLogined]);

  /**  Login User */
  const handleLogin = () => {
    BasicAPI({
      url: '/api/account/login',
      method: 'POST',
      headers: {},
      body: JSON.stringify({
        email,
        password,
      }),
      handleSuccess: (response) => {
        console.info('Success Login API response', response);
        return setIsLogined(true);
      },
      handleError: (response) => {
        console.error(
          `Fail Login API Status: ${response.status} and Message: ${response.statusText}`
        );
      },
    });
  };

  /**  POST Notice */
  const handlePostNotice = () => {
    BasicAPI({
      url: '/api/notice',
      method: 'POST',
      headers: {},
      body: JSON.stringify({
        title: 'test title',
        content: 'test content',
        creator: '72988f27a793405d8d80e235b664f164',
      }),
      accessToken,
      handleSuccess: (response) => {
        console.info('Success POST Notice API response', response);
      },
      handleError: (response) => {
        console.error(
          `Fail POST Notice API Status: ${response.status} and Message: ${response.statusText}`
        );
      },
    });
  };

  return (
    <div>
      <input
        id="feed-search-desktop"
        className="form-input w-full pl-9 focus:border-slate-300"
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        id="feed-search-desktop"
        className="form-input w-full pl-9 focus:border-slate-300"
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button
        type="button"
        className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700"
        onClick={handleLogin}
      >
        Login
      </button>

      <br />
      <button
        type="button"
        className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700"
        onClick={getAccessToken}
      >
        GET Access token
      </button>

      <br />
      <button
        type="button"
        className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700"
        onClick={handlePostNotice}
      >
        POST Notice
      </button>
    </div>
  );
}

export default Login;
