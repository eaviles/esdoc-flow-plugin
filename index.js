const babel = require('babel-core');

const babelOpts = {
  plugins: ['transform-flow-strip-types', 'syntax-jsx']
};

exports.onHandleCode = (event) => {
  try {
    const result = babel.transform(event.data.code, babelOpts);
    event.data.code = result.code;
  } catch (error) {
    console.error(error);
  }
};
