import slugify from 'src/functions/slugify.js';

export default str =>
  slugify(str)
    .replace(/-/g, ' ')
    .replace(/(^| )./g, str => str.toUpperCase());
