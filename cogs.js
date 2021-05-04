/* global process:false */

import autoprefixer from 'autoprefixer';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server.js';
import tailwindcss from 'tailwindcss';
import colors from 'tailwindcss/colors.js';

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
              purge: ['src/+(components|pages)/**/*'],
              theme: {
                extend: {
                  colors: {
                    cyan: colors.cyan,
                    orange: {
                      50: '#ffffb4',
                      100: '#ffa650',
                      200: '#ff923c',
                      300: '#ff7e28',
                      400: '#ff6a14',
                      500: '#ff5600',
                      600: '#eb4200',
                      700: '#d72e00',
                      800: '#c31a00',
                      900: '#af0600'
                    }
                  }
                }
              }
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
