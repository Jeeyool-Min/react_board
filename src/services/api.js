/* eslint-disable import/no-cycle */
import { Auth } from './auth';

/**
 * Basic API Configuration
 * @param {Object} config
 * @param {string} config.url
 * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} config.method
 * @param {Object?} config.headers
 * @param {string?} config.body
 * @param {string?} config.accessToken
 * @param {() => void} config.handleSuccess
 * @param {() => void} config.handleError
 */
export const BasicAPI = (config) => {
  const tempConfig = { ...config };

  if (!tempConfig.headers) tempConfig.headers = {};
  if (typeof tempConfig.count !== 'number') tempConfig.count = 0;
  if (!tempConfig.accessToken) tempConfig.accessToken = '';

  Object.assign(tempConfig.headers, {
    'Content-Type': 'application/json',
    Authorization: tempConfig.accessToken,
  });

  fetch(tempConfig.url, {
    method: tempConfig.method,
    headers: tempConfig.headers,
    body: tempConfig.body,
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }

      return config.handleSuccess(response);
    })
    .catch((response) => {
      if (tempConfig.count === 0) {
        tempConfig.count += 1;
        Auth(tempConfig);
      }

      config.handleError(response);
    });
};
