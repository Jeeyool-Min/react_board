import Auth from './auth';

export const Common = (config) => {
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
      console.info('then');
      config.success(response);

      if (!response.ok) {
        return Promise.reject(response);
      }
    })
    .catch((response) => {
      console.info('common count', config.count);
      if (config.count === 0) {
        // eslint-disable-next-line no-param-reassign
        config.count += 1;
        Auth(config);
        return;
      }

      config.error(response);
    });
};
