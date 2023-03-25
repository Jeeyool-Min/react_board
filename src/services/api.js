/* eslint-disable import/no-cycle */
import { Auth } from './auth';

/**
 * Basic API Configuration
 * @param {{url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', headers: object, body: string, accessToken: string, handleSuccess: () => void, handleError: () => void  }} config
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
