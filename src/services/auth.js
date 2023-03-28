/* eslint-disable import/no-cycle */
import BasicAPI from './api';

/**
 * Auth Configuration
 * @param {Object} config
 * @param {string} config.url
 * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} config.method
 * @param {Object?} config.headers
 * @param {string?} config.body
 * @param {string?} config.accessToken
 * @param {() => void} config.handleSuccess
 * @param {() => void} config.handleError
 */
const Auth = (config) => {
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

export default Auth;
