/* eslint-disable consistent-return */
import React, { useCallback, useEffect, useState } from 'react';

import { Auth } from '../services/auth';
import { BasicAPI } from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const getToken = useCallback(async () => {
    const token = await Auth();

    setAccessToken(token);
  }, []);

  useEffect(() => {
    getToken();
  }, []);

  const notice = () => {
    BasicAPI({
      url: '/api/notice',
      method: 'POST',
      headers: {},
      body: JSON.stringify({
        title: 'test title',
        content: 'test content',
        creator: '72988f27a793405d8d80e235b664f164',
      }),
      accessToken: 'accessToken',
      handleSuccess: (response) => {
        console.info(response);
      },
      handleError: (response) => {
        console.info(response);
      },
      count: 0,
    });
  };

  const handleLogin = () => {
    console.info('handle login');

    fetch('/api/account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        console.info('response', response);

        if (!response.ok || response.status !== 200) {
          alert('Notice Not Created');
          return Promise.reject(response);
        }
      })
      .catch((response) => {
        console.log(response.status + response.statusText);
      });
  };

  const handleAccess = () => {
    console.info('handle Access');

    fetch('/api/auth/access-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.info('access response', response);

        if (!response.ok || response.status !== 200) {
          alert('Notice Not Created');
          return Promise.reject(response);
        }

        const { headers } = response;

        console.info(headers.get('Authorization'));

        setAccessToken(headers.get('Authorization'));
      })
      .catch((response) => {
        console.log(response.status + response.statusText);
      });
  };

  const handleNoticeInsert = () => {
    console.info('handle Access');

    fetch('/api/notice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'accessToken',
      },
      body: JSON.stringify({
        title: 'test title',
        content: 'test content',
        creator: '72988f27a793405d8d80e235b664f164',
      }),
    })
      .then((response) => {
        console.info('access response', response);

        if (!response.ok || response.status !== 200) {
          alert('Notice Not Created');
          return Promise.reject(response);
        }
      })
      .catch((response) => {
        console.log(response.status + response.statusText);
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
        submit
      </button>

      <br />
      <button
        type="button"
        className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700"
        onClick={handleAccess}
      >
        Access token
      </button>

      <br />
      <button
        type="button"
        className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700"
        onClick={notice}
        // onClick={handleNoticeInsert}
      >
        NoticeInsert
      </button>
    </div>
  );
}

export default Login;
