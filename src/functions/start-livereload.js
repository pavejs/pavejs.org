import config from 'src/config.js';

const { document } = window;

const { watch } = config;

export default () => {
  if (!watch) return;

  const script = document.createElement('script');
  script.src = '/livereload.js?port=443';
  script.async = true;
  document.body.appendChild(script);
};
