/* global process:false */

import autoprefixer from 'autoprefixer';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server.js';
import tailwindcss from 'tailwindcss';

const { env } = process;

const MINIFY = env.MINIFY === '1';

export default {
  main: {
    transformers: [].concat(
      { name: 'underscore-template', only: ['src/**/*.+(conf|html)'] },
      {
        only: 'src/public/**/*.js',
        fn: async ({ file }) => {
          const { default: Component } = await import(
            `${file.path}?at=${Math.round(Date.now() / 1000)}`
          );
          const html = renderToStaticMarkup(createElement(Component));
          return {
            buffer: Buffer.from(`<!doctype html>${html}`),
            links: ['src/**/*']
          };
        }
      },
      {
        name: 'postcss',
        only: 'src/index.css',
        options: {
          plugins: [
            tailwindcss({
              mode: 'jit',
              purge: ['src/+(components|public)/**/*']
            }),
            autoprefixer
          ]
        }
      },
      {
        only: 'src/index.css',
        fn: ({ file: { links } }) => ({ links: [...links, 'src/**/*'] })
      },
      MINIFY ? { name: 'csso', only: 'src/index.css' } : []
    ),
    builds: {
      'src/nginx.conf': { base: 'src', dir: '/usr/local/nginx/conf' },
      'src/public/**/*': { base: 'src/public', dir: 'dist' },
      'src/index.css': { base: 'src', dir: 'dist' }
    }
  }
};
