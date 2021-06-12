/* global process:false */

import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const { env } = process;

const MINIFY = env.MINIFY === '1';

export default {
  main: {
    transformers: [].concat(
      { name: 'underscore-template', only: ['src/**/*.+(conf|html)'] },
      {
        name: 'replace',
        only: 'node_modules/**/*.js',
        options: {
          flags: 'g',
          patterns: {
            'process\\.env\\.NODE_ENV': MINIFY
              ? '"production"'
              : '"development"'
          }
        }
      },
      {
        name: 'babel',
        only: ['src/**/*.js'],
        options: {
          caller: { name: 'cogs' },
          presets: [
            [
              '@babel/preset-env',
              {
                corejs: '3.14',
                targets: 'defaults',
                useBuiltIns: 'usage'
              }
            ],
            [
              '@babel/preset-react',
              { development: !MINIFY, runtime: 'automatic' }
            ]
          ]
        }
      },
      {
        name: 'concat-commonjs',
        only: '**/*.+(js|json|svg)',
        options: { entry: 'src/entry.js' }
      },
      MINIFY
        ? {
            name: 'terser',
            only: '**/*.+(js|json|svg)',
            except: '**/*+(-|_|.)min.js'
          }
        : [],
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
      'src/entry.js': { base: 'src', dir: 'dist' },
      'src/index.html': { base: 'src', dir: 'dist' },
      'src/index.css': { base: 'src', dir: 'dist' }
    },
    manifestPath: 'dist/manifest.json'
  }
};
