const babel = require('babel-core');
const fs = require('fs');
const path = require('path');

/**
 * Remove duplicates from array
 * @param  {array} items Input array
 * @return {array} Output array with unique values
 */
const arrayUnique = (items) =>
    items.filter((item, pos, self) => self.indexOf(item) === pos);

/**
 * Construct Babel plugins config object.
 * Honours user's global Babel plugins config. and adds
 * required Flowtype plugin if not already available.
 *
 * @return {Object}
 */
const buildBabelrcConfig = () => {
  const defaultConfig = ['transform-flow-strip-types', 'syntax-jsx'];
  const babelrcPath = path.normalize(path.join(__dirname, '..', '..', '.babelrc'));

  if (! fs.existsSync(babelrcPath)) {
    return { plugins: defaultConfig };
  }

  const babelrc = JSON.parse(fs.readFileSync(babelrcPath));

  if (! Array.isArray(babelrc.plugins)) {
    return { plugins: defaultConfig };
  }

  const plugins = arrayUnique(babelrc.plugins.concat(defaultConfig));

  return { plugins };
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
