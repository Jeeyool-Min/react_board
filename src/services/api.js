/* eslint-disable import/no-cycle */
import { Auth } from './auth';

/**
 * Basic API Configuration
 * @param {{headers?: string, url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', body: string, accessToken: string, handleSuccess: () => void, handleError: () => void  }} config
 */
export const BasicAPI = (config) => {
  Object.assign(config.headers, {
    'Content-Type': 'application/json',
    Authorization: config.accessToken,
  });

  fetch(config.url, {
    method: config.method,
    headers: config.headers,
    body: config.body,
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }

      return config.handleSuccess(response);
    })
    .catch((response) => {
      if (config.count === 0) {
        const newConfig = { ...config };

        newConfig.count += 1;
        Auth(newConfig);
        return;
      }

      config.handleError(response);
    });
};
