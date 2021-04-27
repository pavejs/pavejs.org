const { document, navigator, env } = window;

export default () => {
  if (navigator.userAgent.includes('HeadlessChrome/') || env.watch !== '1') {
    return;
  }

  const script = document.createElement('script');
  script.src = '/livereload.js?port=443';
  script.async = true;
  document.body.appendChild(script);
};
