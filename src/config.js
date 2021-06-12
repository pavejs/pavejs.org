const { env } = window;

export default {
  version: env.VERSION,
  watch: env.WATCH === '1'
};