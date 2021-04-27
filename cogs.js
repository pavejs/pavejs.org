import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import colors from 'tailwindcss/colors.js';

const { env } = process;

const MINIFY = env.MINIFY === '1';

export default {
  main: {
    transformers: [].concat(
      { name: 'underscore-template', only: ['src/**/*.+(conf|html)'] },
      {
        name: 'babel',
        only: [
          'src/**/*.js',
          'node_modules/+(formatted-text|pave|yaml)/**/*.js',
          '**/*.+(json|svg)'
        ],
        options: {
          caller: { name: 'cogs', supportsDynamicImport: true },
          plugins: [
            '@babel/plugin-proposal-class-properties',
            ['babel-plugin-styled-components', { displayName: !MINIFY }]
          ],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: [
                    'last 2 Chrome versions',
                    'last 2 ChromeAndroid versions',
                    'last 2 Edge versions',
                    'last 2 Firefox versions',
                    'last 2 iOS versions',
                    'last 2 Safari versions'
                  ]
                }
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
        name: 'postcss',
        only: 'src/index.css',
        options: {
          plugins: [
            tailwindcss({
              mode: 'jit',
              purge: ['src/*'],
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
      'src/**/*': { base: 'src/**/*', dir: 'dist' },
      'src/**/*.js': {
        base: 'src/pages',
        dir: 'dist',
        ext: { '.js': '.html' }
      },
      'src/index.css': { base: 'src', dir: 'dist' }
    }
  }
};
