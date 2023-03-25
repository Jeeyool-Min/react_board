/* eslint-disable import/no-cycle */
import { BasicAPI } from './api';

/**
 * Basic API Configuration
 * @param {{url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', headers: object, body: string, accessToken: string, handleSuccess: () => void, handleError: () => void  }} config
 */
export const Auth = (config) => {
  const accessToken = fetch('/api/auth/access-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      console.info('Success Auth API response', response);

      if (config) {
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
        `Fail Auth API Status: ${response.status} and Message: ${response.statusText}`
      );
      return '';
    });

  return accessToken;
};
