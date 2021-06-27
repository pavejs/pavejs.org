import v0100 from 'src/archive/v0100.js';

export default {
  version: '0.10.0',
  latest: true,
  releaseDate: 'June 22nd, 2021',
  content: {
    ...v0100.content,
    newContent: {
      description: 'Example new content'
    }
  }
};
