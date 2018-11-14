'use strict';

const babel = require('babel-core');
const findBabelConfig = require('find-babel-config');

const DEFAULT_PLUGINS = ['transform-flow-strip-types'];

exports.onHandleCode = event => {
  try {
    const { config } = findBabelConfig.sync('..');
    const plugins = Array.isArray(config.plugins)
      ? [...new Set(config.plugins.concat(DEFAULT_PLUGINS))]
      : DEFAULT_PLUGINS;
    const result = babel.transform(event.data.code, { plugins });
    event.data.code = result.code;
  } catch (err) {
    console.error(err);
  }
};
