// eslint-disable-next-line import/no-cycle
import Common from './common';

const Auth = (config) => {
  const accessToken = fetch('/api/auth/access-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      console.info('access response', response);

      if (config !== (null || undefined)) {
        // eslint-disable-next-line no-param-reassign
        config.accessToken = response.headers.get('Authorization');

        Common(config);
      }

      if (!response.ok || response.status !== 200) {
        return Promise.reject(response);
      }

      const { headers } = response;

      return headers.get('Authorization');
    })
    .catch((response) => {
      console.log(response.status + response.statusText);
    });

  return accessToken;
};

export default Auth;
