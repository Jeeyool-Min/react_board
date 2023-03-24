/* eslint-disable import/no-cycle */
import { BasicAPI } from './api';

export const Auth = (config) => {
  const accessToken = fetch('/api/auth/access-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (config !== (null || undefined)) {
        const newConfig = { ...config };

        newConfig.accessToken = response.headers.get('Authorization');

        BasicAPI(newConfig);
      }

      if (!response.ok || response.status !== 200) {
        return Promise.reject(response);
      }

      const { headers } = response;

      return headers.get('Authorization');
    })
    .catch((response) => {
      console.error(
        `Status: ${response.status} | Message: ${response.statusText}`
      );
    });

  return accessToken;
};
