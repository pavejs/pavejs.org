import babel from '@babel/core';
import _svgr from '@svgr/core';

const { default: svgr } = _svgr;

const { env } = process;

const MINIFY = env.MINIFY === '1';

const babelOptions = {
  plugins: ['@babel/plugin-syntax-top-level-await'],
  presets: [
    ['@babel/preset-react', { development: !MINIFY, runtime: 'automatic' }]
  ]
};

const svgrOptions = {
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  replaceAttrValues: { '#333': 'currentColor' },
  svgoConfig: {
    plugins: {
      removeDimensions: true
    }
  }
};

// eslint-disable-next-line import/no-named-export
export const resolve = async (specifier, context, defaultResolve) => {
  if (
    specifier.startsWith('src/') &&
    context.parentURL?.startsWith('file:///code/src/')
  ) {
    const { search } = new URL(context.parentURL);
    const at = new URLSearchParams(search).get('at');
    specifier += `?at=${at}`;
  } else if (
    specifier === 'react/jsx-runtime' ||
    specifier === 'react/jsx-dev-runtime'
  ) {
    specifier += '.js';
  }

  return defaultResolve(specifier, context, defaultResolve);
};

// eslint-disable-next-line import/no-named-export
export const getFormat = async (url, context, defaultGetFormat) => {
  if (url.startsWith('file:///code/src/components/')) {
    const path = new URL(url).pathname.slice(1);
    if (path.endsWith('.svg')) return { format: 'module' };
  }

  return defaultGetFormat(url, context, defaultGetFormat);
};

// eslint-disable-next-line import/no-named-export
export const transformSource = async (
  source,
  context,
  defaultTransformSource
) => {
  if (context.url.startsWith('file:///code/src/components/')) {
    const path = new URL(context.url).pathname.slice(1);
    if (path.endsWith('.svg')) {
      source = (await svgr(source, svgrOptions, { filePath: path })).replace(
        /import \* as React from "react";\n+/m,
        ''
      );
    }
    source = (await babel.transformAsync(source, babelOptions)).code;
  }

  return defaultTransformSource(source, context, defaultTransformSource);
};
