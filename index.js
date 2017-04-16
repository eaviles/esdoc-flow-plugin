const fs = require('fs');
const path = require('path');
const babel = require('babel-core');

const DEFAULTS = [
  'transform-flow-strip-types',
  'syntax-jsx'
];

/**
 * Remove duplicates from array
 * @param  {array} items Input array
 * @return {array} Output array with unique values
 */
const arrayUnique = (arr) => Array.from(new Set(arr));

/**
 * Construct Babel plugins config object.
 * Honours user's global Babel plugins config. and adds
 * required Flowtype plugin if not already available.
 *
 * @return {Object}
 */
const buildBabelrcConfig = () => {
  const babelrcPath = path.resolve(__dirname, '..', '..', '.babelrc');
  const babelrc = JSON.parse(fs.readFileSync(babelrcPath, 'utf8'));

  const plugins = Array.isArray(babelrc.plugins)
    ? babelrc.plugins.concat(DEFAULTS)
    : DEFAULTS;

  return { plugins: arrayUnique(plugins) };
};


exports.onHandleCode = (event) => {
  const babelOpts = buildBabelrcConfig();

  try {
    const result = babel.transform(event.data.code, babelOpts);
    event.data.code = result.code;
  } catch (error) {
    console.error(error);
  }
};
