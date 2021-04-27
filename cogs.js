import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import colors from 'tailwindcss/colors.js';

const { env } = process;

const MINIFY = env.MINIFY === '1';
const TEST_INDEX = env.TEST_INDEX === '1';
const ONLY_ENV = env.ONLY_ENV === '1';

const config = {
  index: {
    transformers: 'underscore-template',
    builds: {
      'src/index.html': {
        base: 'src',
        dir: 'dist',
        ext: { '.html': TEST_INDEX ? '.test.html' : '.html' }
      }
    }
  },
  nginx: {
    transformers: 'underscore-template',
    builds: { 'src/nginx.conf': { base: 'src', dir: '/usr/local/nginx/conf' } }
  }
};

if (!ONLY_ENV) {
  config.index.requires = 'main';
  config.public = {
    builds: {
      'src/public/**': { base: 'src/public', dir: 'dist' }
    }
  };
  config.main = {
    transformers: [].concat(
      { name: 'json', only: '**/*.json' },
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
        name: 'concat-commonjs',
        only: '**/*.+(js|json|svg)',
        options: { entry: 'src/entry.js' }
      },
      {
        name: 'postcss',
        only: 'src/index.css',
        options: {
          plugins: [
            tailwindcss({
              mode: 'jit',
              purge: ['src/**/*'],
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
      'src/entry.js': {
        base: 'src',
        dir: MINIFY ? 'dist/immutable' : 'dist',
        fingerprint: MINIFY,
        maxChunkSize: 250_000
      },
      'src/index.css': {
        base: 'src',
        dir: MINIFY ? 'dist/immutable' : 'dist',
        fingerprint: MINIFY
      }
    },
    manifestPath: 'dist/manifest.json'
  };
}

export default config;
