const { process } = global;

const { env } = process;

export default {
  version: env.VERSION,
  watch: env.WATCH === '1'
};